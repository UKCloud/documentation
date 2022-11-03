---
title: Managed IT Operations prerequisites
description: Customer prerequisites for Managed IT Operations
services: managed-operations
author: dbrennand
reviewer: arapisarda
lastreviewed: 21/09/2021
toc_rootlink: Managed IT Operations
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed IT Operations prerequisites
toc_fullpath: Managed IT Operations/man-ref-customer-prereqs.md
toc_mdlink: man-ref-customer-prereqs.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Managed IT Operations prerequisites

## Overview

Managed IT Operations helps to reduce the non-value add challenges of managing your compute assets, whilst increasing your overall level of trust and confidence in the true health of your entire multi-cloud estate. For more information, see the [Managed IT Operations Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-251-managed-it-operations-service-definition-13.0.pdf).

Before UKCloud can begin onboarding your virtual machines onto this service, your environment **must** meet the the prerequisites outlined in this article.

## Managed Monitoring as a Service

With Managed Monitoring as a Service, UKCloud becomes your first line of support, 24 hours a day, 365 days a year, receiving and reacting to any abnormal events or alerts across your IT estate. For more information, see the [*Managed Monitoring as a Service Service Scope*](man-sco-monitoring.md).

By default, UKCloud provides this service without the use of an agent by utilising SNMP traps. In situations where we need to collect non-SNMP events, we may opt to provide a dedicated Monitoring Agent, which can be deployed on to your virtual machines to provide a more advanced method of event collection.

### Customer environment configuration

Ensure the following ports listed below are permitted on both your perimeter and operating system firewalls from the UKCloud management bubble subnet. UKCloud will provide you with the subnet.

#### Linux & Windows Server (Agentless)

- Simple Network Management Protocol (SNMP) - UDP/161

- Internet Control Message Protocol (ICMP)

#### Linux (Agent-based)

- Nagios Remote Plugin Executor (NRPE) - TCP/5666

- Internet Control Message Protocol (ICMP)

#### Windows Server (Agent-based)

- Nagios Remote Plugin Executor (NRPE) - TCP/5666

- Windows Remote Management (WinRM) - TCP/5985 & TCP/5986

- Internet Control Message Protocol (ICMP)

> [!NOTE]
> Add any custom ports you'd like monitored. For example, to monitor the state of a web server on port TCP/443, port TCP/443 must be allowed through from the UKCloud management bubble subnet.

### Operating system services

SNMP is required for agentless monitoring.

> [!NOTE]
> The SNMP service **must** be configured to start on boot.

#### Linux

On Linux, you can install SNMP from the operating system's public repository.

#### Windows Server

On Windows Server, you can install SNMP through the Roles and Features wizard.

### VPN configuration

Managed Monitoring as a Service relies on an IPsec VPN being configured on your environment's edge appliance. For VMware, this will be an edge gateway, whereas in OpenStack this will be a customer deployed (or assisted by UKCloud) VPN server. By default, UKCloud recommends a pfSense appliance.

UKCloud will provide you with the VPN standards and configuration, including the pre-shared key, peer endpoint and peer subnet to configure the VPN.

## Anti-Virus as a Service

Anti-Virus as a Service provides you with the confidence that your environments are protected from the dangers of viruses and malware, all without the usual headaches associated with the deployment, management, and operation of an antivirus solution. For more information see the [*Anti-Virus as a Service Service Scope*](man-sco-antivirus.md).

UKCloud will provide you with the installation *package(s)* and commands to install and configure the antivirus agent on your virtual machines.

## Patching as a Service

Patching as a Service provides routine OS patch management for compute instances. It helps you accelerate business value by removing the burden of basic OS hygiene, letting you focus your attention above the operating system. For more information, see the [*Patching as a Service Service Scope*](man-sco-patching.md).

### Operating systems

UKCloud only supports in-life, vendor-backed operating systems, such as Microsoft Windows, Red Hat Enterprise Linux and Canonical Ubuntu. Customer-built operating systems (for example Gentoo Linux custom build) are unsupported by this service. Virtual software appliances are also unsupported by this service.

### Customer environment configuration

If you've opted for taking snapshots of your virtual machines prior to patching, then the environment must be hosted in VMware and the name of the virtual machine(s) in Cloud Director must match the hostname in the OS.

#### Linux

To provide secure communication between UKCloud's centralised patch management platform and your virtual machine, we use key-based SSH sessions, reducing the need to share credentials. As such, you'll need to fulfil the following prerequisites on each virtual machine subscribing to this service:

- An allow rule for port TCP/22 (SSH) on your virtual machine's firewall (for example, iptables).

- A local user account with passwordless sudo access. You'll need to share details of this account with UKCloud when onboarding to this service.

- The `/etc/ssh/sshd_config` configuration file must be configured to allow SSH access for the patching user you created in the step above.

- UKCloud will provide you with a public SSH key during the onboarding process. You'll need to append this key to the `authorized_keys` file, located at `~/.ssh/authorized_keys` within the home directory of the user you created in the step above. As part of the onboarding process, UKCloud can perform this action as long as the above requirements are already met.

#### Windows Server

For UKCloud to correctly scan for and apply operating system patches, you must agree to enable and configure the Server Message Block (SMB) protocol by ensuring ports TCP/445 and TCP/139 are open on all virtual machines and associated operating systems opted-in to this service. Furthermore, there must be a bi-directional rule allowing port TCP/3121 on your edge appliance and operating system firewall. For further details, please see the vendor's documentation found [here](https://forums.ivanti.com/s/article/Agentless-Patch-Scanning-Prerequisites?language=en_US).

Furthermore, you must create a patching user that is an administrator on the virtual machine and has access to the Control Panel. Finally, you must enable the Remote Registry service on all virtual machines and enable Filer and Print Sharing for all networks.

##### Domain joined

If the Windows virtual machines are domain joined, the user must be using domain administrator credentials.

##### Standalone

If the Windows virtual machines are standalone, the device must have User Account Control (UAC) disabled.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
