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

## Overview

1. **Prepare Azure stack VMs for replication.** Check that VMs comply with Site Recovery requirements, and prepare for installation of the Site Recovery Mobility service. This service is installed on each VM you want to replicate.

2. **Set up a Recovery Services vault.** Set up a vault for Site Recovery, and specify what you want to replicate. Site Recovery components and actions are configured and managed in the vault.

3. **Set up the source replication environment.** Set up a Site Recovery configuration server. The configuration server is a single Azure Stack VM that runs all the components needed by Site Recovery. After you've set up the configuration server, you register it in the vault.

4. **Set up the target replication environment.** Select your Azure account, and the Azure storage account and network that you want to use. During replication, VM data is copied to Azure storage. After failover, Azure VMs are joined to the specified network.

5. **Enable replication.** Configure replication settings, and enable replication for VMs. The Mobility service will be installed on a VM when replication is enabled. Site Recovery performs an initial replication of the VM, and then ongoing replication begins.

6. **Run a disaster recovery drill.** After replication is up and running, you verify that failover will work as expected by running a drill. To initiate the drill, you run a test failover in Site Recovery. The test failover doesn't impact your production environment.

## Account Prerequisites

* Azure subscription account.
* Azure account permissions.
  * Create a Recovery Service vault.
  * Create a virtual machine in the resource group and virtual network you use for the scenario.
  * Write to the storage account you specify.
* Azure Stack VM for site recovery configuration server.

## Configuration server prerequisites

Configuration server requirements for physical server replication.

### Hardware Settings

|Device                                    |Details               |
|---------                                 |---------             |
|CPU                                       |  >= 8 cores          |
|RAM                                       | >= 16GB              |
|No of Disks                               |  3 Including OS disk |
|Free Disk Space for process server cache  | > 600gb             |
|Free Disk Space for retention disk        | > 600gb             |

### Software Settings

|Software                                  |Details               |
|---------                                 |---------             |
|OS                                        | Windows Server 2012 R2 / 2016 |
|OS system locale                          | English (en-us)      |
|IP address type                           | Static               |

### Access Settings

* MySQL should be installed on configuration server, this can be installed manually however site recovery can install it during deployment.
* Ports - Allow ports 443 and 9443.

## Step 1. Preparation of VM's

### OS Support

Please make sure the VM's you want to protect are running one of the following operating systems.

|OS                                  |Details               |
|---------                                 |---------             |
|64-bit Windows | Windows Server 2016, Windows Server 2012 R2, Windows Server 2012, Windows Server 2008 R2 (from SP1) |
|CentOS         | 5.2 to 5.11, 6.1 to 6.9, 7.0 to 7.3 |
|Ubuntu         | 14.04 LTS server, 16.04 LTS server |

Review Supported kernels at:
<https://docs.microsoft.com/en-us/azure/site-recovery/vmware-physical-azure-support-matrix#ubuntu-kernel-versions>

### Preparation for mobility service installation

Every VM you want to replicate must have the mobility service installed. In order for the process server to install the service automatically on the VM when replication is enabled, verify the VM settings.

#### Windows Machines

* You need network connectivity between the VM on which you want to enable replication,   and the machine running the process server (by default this is the configuration server VM).
* You need an account with admin rights (domain or local) on the machine for which you enable replication.
  * You specify this account when you set up Site Recovery. Then the process server uses this account to install the Mobility service when replication is enabled.
  * This account will only be used by Site Recovery for the push installation and to update the Mobility service.
  * If you're not using a domain account, you need to disable Remote User Access control on the VM:
    1. In the registry, create DWORD value LocalAccountTokenFilterPolicy under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System.
    2. Set the value to 1.
    3. To do this at the command prompt, type the following: `REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v LocalAccountTokenFilterPolicy /t REG_DWORD /d 1.`
* In the Windows Firewall on the VM you want to replicate, allow File and Printer Sharing, and WMI.
    1. To do this, run wf.msc to open the Windows Firewall console.
    2. Right click Inbound Rules > New Rule. Select Predefined, and choose File and Printer sharing from the list.
    3. Find the firewall rules related to WMI and enable them.
    4. Complete the wizard, select to allow the connection > Finish.
    5. For domain computers, you can use a GPO to do this.

#### Linux Machines

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

### Note the VM private IP address

For every machine you want to replicate you will need to find and note down the IP address of the machine:

1. In the Azure Stack Portal, click on the VM.
2. On the Resource menu, click Networking.
3. Note down the private IP address.

    ![List Azure Stack VM Extensions Output](images/azs-browser-networking-private-ip.png)

## Step 2. Create a new vault and setting a replication goal

1. In the Azure portal navigate to **Create a resource** > **Management Tools** > **Backup and Site Recovery (OMS)**
2. In **Name** enter the name you wish to call the vault.
3. In Resource group, create or select a resource group.
4. In Location choose UK South.
5. To quickly access the vault simply right click and select **Pin to dashboard**.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-vault.png)

### Selecting a replication goal

1. On the **Recovery Services vaults** select the vault you have created.
2. Select the **Site Recovery** tab under **Getting Started**.
3. Select **Prepare Infrastructure**.
4. In Protection goal > **Where are your machines located**, select **On-premises**.
5. In **Where do you want to replicate your machines**, select **To Azure**.
6. In **Are your machines virtualized**, select **Not virtualized / Other**. Then select OK.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-vault-configuration.png)

7. In Deployment Planning select the **Yes, I have done it option**.

## 3. Set up the source environment

1. On the **Source Prepare** Tab Select **+Configuration Server**.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-infrastructure-configuration.png)

2. Download The Microsoft Azure Site Recovery Unified Setup.
3. Download the vault registration key.
4. Run the Unified Setup on the configuration server VM on Azure Stack.

### Running Azure Site Recovery Unified Setup

To install and register the configuration server, perform an RDP connection to the VM you want to use for the configuration server, and run **Unified Setup**. Before you start, make sure that the server clock is synchronized with a time server on the VM before you start. Installation fails if the time is more than five minutes off local time. A link on how to do this is here:

<https://technet.microsoft.com/windows-server-docs/identity/ad-ds/get-started/windows-time-service/windows-time-service>

Now install the Azure Site Recovery Unified Setup:

1. Run the Unified Setup installation file.

2. In **Before You Begin**, select **Install the configuration server and process server**.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step1.png)

3. In **Third Party Software License**, select **I accept the third party license agreement**.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step2.png)

4. In **Registration**, select the registration key you downloaded from the vault.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step3.png)

5. In **Internet Settings**, specify how the Provider running on the configuration server connects to Azure Site Recovery over the Internet. Make sure you've allowed the required URLs.
    * If you want the Provider to connect directly, select **Connect directly to Azure Site Recovery without a proxy server**.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step4a.png)
    * If the existing proxy requires authentication, or if you want to use a custom proxy for the Provider connection, select **Connect to Azure Site Recovery using a proxy server**, and specify the address, port, and credentials.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step4b.png)

6. In **Prerequisites Check**, The setup runs a check to make sure that installation can run. If a warning appears about the Global time sync check, verify that the time on the system clock (Date and Time settings) is the same as the time zone. This step will ensure the configurations hardware meets minimum requirements.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step5.png)

7. In **MySQL Configuration**, create credentials for logging on to the MySQL server instance that is installed.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step6.png)

8. In **Environment Details**, select **No** as you're replicating Azure Stack VMs.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step7.png)

9. In **Install Location**, select where you want to install the binaries and store the cache. The drive you select must have at least 5 GB of disk space available, but it is highly recommended to have a cache drive with at least 600 GB of free space.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step8.png)

10. In **Network Selection**, specify the listener (network adapter and SSL port) on which the configuration server sends and receives replication data. Port 9443 is the default port used for sending and receiving replication traffic, but you can modify this port number to suit your environment's requirements. In addition to the port 9443, we also open port 443, which is used by a web server to orchestrate replication operations. Do not use port 443 for sending or receiving replication traffic.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step9.png)

11. In **Summary**, review the information and click Install. When installation finishes, a passphrase is generated. You will need this when you enable replication, so copy it and keep it in a secure location.

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step10.png)

    ![List Azure Stack VM Extensions Output](images/azs-siterecovery-installer-step11.png)

After registration finishes, the server should become option when selecting **Configuration Server**.

## Step 4. Set up target environment

Select and verify target resources.

1. In Prepare infrastructure > Target, select the Azure subscription you want to use.
2. Specify the target deployment model.
3. Site Recovery checks that you have one or more compatible Azure storage accounts and networks. If it doesn't find them, you need to create at least one storage account and virtual network, in order to complete the wizard.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-infrastructure-configuration3.png)

## Step 5: Enable replication

1. Select the final tab **Replication Settings**.
2. In **Create replication policy**, specify a policy name.
3. In **RPO threshold**, specify the recovery point objective (RPO) limit.
    * Recovery points for replicated data are created in accordance with the time set.
    * This setting does not affect replication, which is continuous. It simply issues an alert if the threshold limit is reached without a recovery point being created.
4. In **Recovery point retention**, Specify how long each recovery point is kept. Replicated VMs can be recovered to any point in the specified time window.
5. In **App-consistent snapshot frequency**, specify how often application-consistent snapshots are created.
    * A app-consistent snapshot is a point-in-time snapshot of the app data inside the VM.
    * Volume Shadow Copy Service (VSS) ensures that apps on the VM are in a consistent state when the snapshot is taken.
6. Select OK to create the policy.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-infrastructure-configuration2.png)

### Adding admin account

After the setup has complete if you navigate to the servers desktop you will find a tool called **Cspconfigtool**, run this tool and navigate to the **Manage Accounts** tab, select **Add Account** and then fill out the details matching the admin accounts details on the VM you wish to replicate.

![List Azure Stack VM Extensions Output](images/azs-siterecovery-account-manager.png)

### Enable replication

Make sure you've completed all the tasks in Step 1: Prepare machine. Then enable replication as follows:

1. Under **Protected items** select **Replicated items**.
2. Select **+Replicate**.
3. In Source, select **On-premises**.
4. In **Source location** select the configuration server you want to use.
5. In Machine type, select Physical machines.
6. Select the process server (configuration server). Then click OK.

    ![List Azure Stack VM Extensions Output](images/azs-browser-replication-source.png)

7. In Target, select the **subscription** and the **Post-failover resource group** in which you want to create the VMs after failover. Choose the **Post-failover deployment model** that you want to use for the failed-over VMs.
8. Select the Azure storage account in which you want to stored replicated data.
9. Select Configure now for selected machines to apply the network setting to all machines you select for protection. Select Configure later if you want to select the Azure network separately for each machine.
10. Select the Azure network and subnet to which Azure VMs connect when they're created after failover.

    ![List Azure Stack VM Extensions Output](images/azs-browser-replication-target.png)

11. In Physical Machines, click +Physical machine. Specify the name of IP address of each machine, and the operating system you want to replicate.
    * Use the internal IP address of the machine.
    * If you specify the public IP address replication might not work as expected.

    ![List Azure Stack VM Extensions Output](images/azs-browser-replication-machine.png)

12. In Properties > Configure properties, select the account that the process server will use to automatically install Mobility Service on the machine.

    ![List Azure Stack VM Extensions Output](images/azs-browser-replication-properties.png)

13. In Replication settings > Configure replication settings, check that the correct replication policy is selected.

    ![List Azure Stack VM Extensions Output](images/azs-browser-replication-settings.png)

14. Click Enable Replication.
15. Track progress of the Enable Protection job in Settings > Jobs > Site Recovery Jobs. After the Finalize Protection job runs, the machine is ready for failover.

## Step 6: Run a disaster recovery drill

You run a test failover to Azure to make sure that everything's working as expected. This failover won't affect your production environment.

### Verify machine properties

Before you run a test failover, verify the machine properties, and make sure that they comply with Azure requirements. You can view and modify properties as follows:

1. In Protected Items, click Replicated Items > VM.
2. In the Replicated item pane, there's a summary of VM information, health status, and the latest available recovery points. Click Properties to view more details.
3. In Compute and Network, modify settings as needed.
    * You can modify the Azure VM name, resource group, target size, availability set, and managed disk settings.
    * You can also view and modify network settings. These include the network/subnet to which the Azure VM is joined after failover, and the IP address that will be assigned to the VM.
4. In Disks, view information about the operating system and data disks on the VM.

### Run a test failover

When you run a test failover, the following happens:

1. A prerequisites check runs to make sure all of the conditions required for failover are in place.
2. Failover processes the data using the specified recovery point:
    * Latest processed: The machine fails over to the latest recovery point processed by Site Recovery. The time stamp is shown. With this option, no time is spent processing data, so it provides a low RTO (recovery time objective).
    * Latest app-consistent.The machine fails over to the latest app-consistent recovery point.
    * Custom. Select the recovery point used for failover.
3. An Azure VM is created using the processed data.
4. Test failover can automatically clean up Azure VMs created during the drill.

### Run a test failover for a VM

1. In **Protected items** > **Replicated Items**, click the **VM** > **Test Failover**.
2. For this walkthrough, we'll select to use the Latest processed recovery point.
3. In Test Failover, select the target Azure network.
4. Click OK to begin the failover.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-failover.png)

5. Track progress by clicking on the VM to open its properties. Or, click the Test 6. Failover job in vault name > Settings > Jobs >Site Recovery jobs.

    ![List Azure Stack VM Extensions Output](images/azs-browser-recovery-testfailover.png)

6. After the failover finishes, the replica Azure VM appears in the Azure portal > Virtual Machines. Check that the VM is the appropriate size, connected to the right network, and running.
7. You should now be able to connect to the replicated VM in Azure.
    1. To connect to the VM via RDP you will need to assign a public IP to the VM.
    2. Navigate to the VM's **Network interface**.
    3. Under settings select **IP configurations**, then select the config.
    4. Enable **Public IP address**.
    5. Configure **IP address** and create a new IP and select **OK**.
    6. Click save to create the public IP for the VM.
8. To delete Azure VMs created during the test failover, click Cleanup test failover on the VM. In Notes, save any observations associated with the test failover.

## Fail Over and Fail Back

After you've set up replication, and run a drill to make sure everything's working, you can fail machines over to Azure as required.

Before you run a failover, if you want to connect to the machine in Azure after the failover, then prepare to connect before you start.

Then run a failover as follows:

1. In Settings > Replicated Items, click the machine > Failover.
2. Select the recovery point that you want to use.
3. Click OK to begin the failover. You can follow the failover progress on the Jobs page.
4. After the failover finishes, the replica Azure VM appears in the Azure portal > Virtual Machines. If you prepared to connect after failover, check that the VM is the appropriate size, connected to the right network, and running. 
    * Remember to add a public IP to the VM if it needs one
5. After verifying the VM, click Commit to finish the failover. This deletes all available recovery points.

> [!CAUTION]
> Don't cancel a failover in progress: Before failover is started, VM replication is stopped. If you cancel a failover in progress, failover stops, but the VM won't replicate again.

### Fail back to Azure Stack

When you primary site is up and running again, you can fail back from Azure to Azure Stack. To do this, you need to download the Azure VM VHD, and upload it to Azure Stack.

1. Shut down the Azure VM, so that the VHD can be downloaded.
2. To start downloading the VHD, install Azure Storage Explorer.
3. Navigate to the VM in the Azure Portal (using the VM name).
4. In Disks, click on the disk name, and gather settings.
5. Now, use Azure Storage Explorer to download the VHD.
6. Upload the VHD to Azure Stack with these steps.
7. In the existing VM or new VM, attach the uploaded VHDs.
8. Check that the OS Disk is correct, and start the VM.

At this stage failback is complete.

## Conclusion

In this article we replicated Azure Stack VMs to Azure. With replication in place, we ran a disaster recovery drill to make sure failover to Azure worked as expected. The article also included steps for running a full failover to Azure, and failing back to Azure Stack.

## Next steps

After failing back, you can re-protect the VM and start replicating it to Azure again To do this, repeat the steps in this article.

## Feedback

 If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [*UKCloud Ideas*](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.