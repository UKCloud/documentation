---
title: How to setup disaster recovery for Azure Stack VMs to Azure
description: How to setup disaster recovery for Azure Stack VMs to Azure
services: azure-stack
author: David Woffendin
toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: How to setup disaster recovery for Azure Stack VMs to Azure
toc_fullpath: Operators/How To/azs-how-setup-recovery.md
toc_mdlink: azs-how-setup-recovery.md
---
# Setting up disaster recovery for Azure Stack VMs to Azure
The purpose of this guide is to help the setting up of the Azure Stack disaster recovery to Azure using the Azure Site Recovery Service.

Site Recovery contributes to your business continuity and disaster recovery strategy. The service ensures that your VM workloads remain available when expected and unexpected outages occur.

* Site Recovery orchestrates and manages replication of VMs to Azure storage.
* When an outage occurs in your primary site, you use Site Recovery to fail over to Azure.
* On failover, Azure VMs are created from the stored VM data, and users can continue accessing workloads running on those Azure VMs.
* When everything's up and running again, you can fail back Azure VMs to your primary site, and start replicating to Azure storage again.

## Overview Of this Article

1. **Prepare Azure stack VMs for replication.** Check that VMs comply with Site Recovery requirements, and prepare for installation of the Site Recovery Mobility service. This service is installed on each VM you want to replicate.

2. **Set up a Recovery Services vault.** Set up a vault for Site Recovery, and specify what you want to replicate. Site Recovery components and actions are configured and managed in the vault.

3. **Set up the source replication environment.** Set up a Site Recovery configuration server. The configuration server is a single Azure Stack VM that runs all the components needed by Site Recovery. After you've set up the configuration server, you register it in the vault.

4. **Set up the target replication environment.** Select your Azure account, and the Azure storage account and network that you want to use. During replication, VM data is copied to Azure storage. After failover, Azure VMs are joined to the specified network.

5. **Enable replication.** Configure replication settings, and enable replication for VMs. The Mobility service will be installed on a VM when replication is enabled. Site Recovery performs an initial replication of the VM, and then ongoing replication begins.

6. **Run a disaster recovery drill.** After replication is up and running, you verify that failover will work as expected by running a drill. To initiate the drill, you run a test failover in Site Recovery. The test failover doesn't impact your production environment.

## Account Prerequisites

* Azure subscription account
* Azure account permissions
* Azure Stack VM for site recovery configuration server

## Configuration server prerequisites

Configuration server requirements for physical server replication

**Hardware Settings**

|Device                                    |Details               |
|---------                                 |---------             |
|CPU                                       |  >= 8 cores          |
|RAM                                       | >= 16GB              |
|No of Disks                               |  3 Including OS disk |
|Free Disk Space for process server cache  | > 600gb             |
|Free Disk Space for retention disk        | > 600gb             |

**Software Settings**

|Software                                  |Details               |
|---------                                 |---------             |
|OS                                        | Windows Server 2012 R2 / 2016 |
|OS system locale                          | English (en-us)      |
|IP address type                           | Static               |

**Access Settings**

* MySQL should be installed on configuration server, this can be installed manually however site recovery can install it during deployment
* Ports - Allow ports 443 and 9443

## 1. Preparation of VM's

**OS Support**

Please make sure the VM's you want to protect are running one of the following operating systems.

|OS                                  |Details               |
|---------                                 |---------             |
|64-bit Windows | Windows Server 2016, Windows Server 2012 R2, Windows Server 2012, Windows Server 2008 R2 (from SP1) |
|CentOS         | 5.2 to 5.11, 6.1 to 6.9, 7.0 to 7.3 |
|Ubuntu         | 14.04 LTS server, 16.04 LTS server |

Review Supported kernels at: 

https://docs.microsoft.com/en-us/azure/site-recovery/vmware-physical-azure-support-matrix#ubuntu-kernel-versions

**Preparation for Mobility service installation**

Every VM you want to replicate must have the Mobility service installed. In order for the process server to install the service automatically on the VM when replication is enabled, verify the VM settings.

**Windows Machines**

* You need network connectivity between the VM on which you want to enable replication,   and the machine running the process server (by default this is the configuration server VM).
* You need an account with admin rights (domain or local) on the machine for which you enable replication.
    * You specify this account when you set up Site Recovery. Then the process server uses this account to install the Mobility service when replication is enabled.
    * This account will only be used by Site Recovery for the push installation, and to update the Mobility service.
    * If you're not using a domain account, you need to disable Remote User Access control on the VM:
        1. In the registry, create DWORD value LocalAccountTokenFilterPolicy under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System.
        2. Set the value to 1.
        *  To do this at the command prompt, type the following: REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v LocalAccountTokenFilterPolicy /t REG_DWORD /d 1.
* In the Windows Firewall on the VM you want to replicate, allow File and Printer Sharing, and WMI.
    1. To do this, run wf.msc to open the Windows Firewall console.
    2. Right click Inbound Rules > New Rule. Select Predefined, and choose File and Printer sharing from the list.
    3. Find the firewall rules related to WMI and enable them.
    4. Complete the wizard, select to allow the connection > Finish.
    5. For domain computers, you can use a GPO to do this.

**Linux Machines**

* Ensure that there’s network connectivity between the Linux computer and the process server.
* On the machine for which you enable replication, you need an account that's a root user on the source Linux server:
    * You specify this account when you set up Site Recovery. Then the process server uses this account to install the Mobility service when replication is enabled.
    * This account will only be used by Site Recovery for the push installation, and to update the Mobility service.
* Check that the /etc/hosts file on the source Linux server has entries that map the local hostname to IP addresses associated with all network adapters.
* Install the latest openssh, openssh-server, and openssl packages on the computer that you want to replicate.
* Ensure that Secure Shell (SSH) is enabled and running on port 22.
* Enable SFTP subsystem and password authentication in the sshd_config file:
    1. To do this, sign in as root.
    2. Find the line that begins with PasswordAuthentication, in the /etc/ssh/sshd_config file. Uncomment the line and change the value to yes.
    3. Find the line that begins with Subsystem and uncomment the line.
    4. Restart the sshd service.

**Note the VM private IP address**

For every machine you want to replicate you will need to find and note down the IP address of the machine:

1. In the Azure Stack Portal, click on the VM.
2. On the Resource menu, click Networking.
3. Note down the private IP address.

![List Azure Stack VM Extensions Output](images/azs-browser-networking-private-ip.png)

## 2. Create a new vault and setting a replication goal.

1. In the Azure portal navigate to **Create a resource** > **Management Tools** > **Backup and Site Recovery (OMS)** 
2. In **Name** enter the name you wish to call the vault
3. In Resource group, create or select a resource group
4. In Location choose one of the UK South
5. To quickly access the vault simply right click and select **Pin to dashboard**

![List Azure Stack VM Extensions Output](images/azs-browser-recovery-vault.png)

### Selecting a replication goal

1. On the **Recovery Services vaults** select the vault you have created.
2. Select the **Site Recovery** tab under **Getting Started**.
3. Select **Prepare Infrastructure**.
4. In Protection goal > Where are your machines located, select **On-premises**.
5. In Where do you want to replicate your machines, select **To Azure**.
6. In Are your machines virtualized, select **Not virtualized/Other**. Then select OK.

![List Azure Stack VM Extensions Output](images/azs-browser-recovery-vault-configuration.png)

7. On Deployment Planning select the **Yes, I have done it option**

## 3. Set up the source environment

1. On the **Source Prepare** Tab Select **+Configuration Server**

![List Azure Stack VM Extensions Output](images/azs-browser-recovery-infrastructure-configuration.png)

2. Download The Microsoft Azure Site Recovery Unified Setup
3. Download the vault registration key
4. Run the Unified Setup on the configuration server VM on Azure Stack

**Running Azure Site Recovery Unified Setup**

To install and register the configuration server, do an RDP connection to the VM you want to use for the configuration server, and run Unified Setup. Before you start, make sure that the clock is synchronized with a time server on the VM before you start. Installation fails if the time is more than five minutes off local time. A link on how to do this is here:

https://technet.microsoft.com/windows-server-docs/identity/ad-ds/get-started/windows-time-service/windows-time-service

Now install the Azure Site Recovery Unified Setup:

1. Run the Unified Setup installation file.
2. In **Before You Begin**, select Install the configuration server and process server.
3. In *Third Party Software License**, click I Accept to download and install MySQL.
4. In **Registration**, select the registration key you downloaded from the vault.
5. In **Internet Settings**, specify how the Provider running on the configuration server connects to Azure Site Recovery over the Internet. Make sure you've allowed the required URLs.
    * If you want to connect with the proxy that's currently set up on the machine, select Connect to Azure Site Recovery using a proxy server.
    * If you want the Provider to connect directly, select Connect directly to Azure Site Recovery without a proxy server.
    * If the existing proxy requires authentication, or if you want to use a custom proxy for the Provider connection, select Connect with custom proxy settings, and specify the address, port, and credentials. 
6. In **Prerequisites Check**, Setup runs a check to make sure that installation can run. If a warning appears about the Global time sync check, verify that the time on the system clock (Date and Time settings) is the same as the time zone. This step will ensure the configurations hardware meets minimum requirements 
7. In **MySQL Configuration**, create credentials for logging on to the MySQL server instance that is installed.
8. In **Environment Details**, select No as you're replicating Azure Stack VMs.
9. In **Install Location**, select where you want to install the binaries and store the cache. The drive you select must have at least 5 GB of disk space available, but it is highly recommended to have a cache drive with at least 600 GB of free space.
10. In **Network Selection**, specify the listener (network adapter and SSL port) on which the configuration server sends and receives replication data. Port 9443 is the default port used for sending and receiving replication traffic, but you can modify this port number to suit your environment's requirements. In addition to the port 9443, we also open port 443, which is used by a web server to orchestrate replication operations. Do not use port 443 for sending or receiving replication traffic.
11. In **Summary**, review the information and click Install. When installation finishes, a passphrase is generated. You will need this when you enable replication, so copy it and keep it in a secure location.

