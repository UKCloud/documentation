---
title: Managed Operations
description: Customer prerequisites for Managed Operations
services: managed-operations
author: dbrennand
reviewer: arapisarda
lastreviewed: 21/09/2021
toc_rootlink: Managed IT Operations
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Operations Customer Prerequisites
toc_fullpath: Managed IT Operations/man-customer-prereqs.md
toc_mdlink: man-customer-prereqs.md
---

# Managed Operations Prerequisites

For an overview of Managed IT Operations, please see the [Managed IT Operations Service Definition](man-sd-managed-it-ops.md).

Before UKCloud can begin onboarding a customer's virtual machines onto this service, the following prerequisites are **required**.

## Monitoring as a Service

For an overview of Managed Monitoring as a Service, please see the [Managed Monitoring as a Service Service Scope](man-sco-monitoring.md).

By default, UKCloud will provide this service without the use of an agent by utilising SNMP traps. In situations where non-SNMP events need to be collected, UKCloud may opt to provide a dedicated Monitoring Agent, which can be deployed into the customer's virtual machines to provide a more advanced method of event collection.

### Customer environment configuration

Please ensure the following ports are permitted on both your permitter and operating system firewalls:

#### Linux (Agent-based)

- Nagios Remote Plugin Executor (NRPE) - Port 5666

- Internet Control Message Protocol (ICMP)

#### Windows (Agent-based)

- Nagios Remote Plugin Executor (NRPE) - Port 5666

- Windows Remote Management (WinRM) - Ports 5985 & 5986

- Internet Control Message Protocol (ICMP)

#### Linux & Windows (Agentless)

- Simple Network Management Protocol (SNMP) - Port 161 over UDP

- Internet Control Message Protocol (ICMP)

### Operating system services

SNMP is required for agentless monitoring.

> [!NOTE]
>
> The SNMP service **must** be configured to start on boot.

#### Linux

On Linux, SNMP can be installed from the operating system's public repository.

#### Windows

On Windows, SNMP can be installed through the Roles and Features wizard.

### VPN configuration

Monitoring as a Service relies on an IPSec VPN being configured on your environment's edge appliance.

UKCloud will provide you with the VPN standards, including the Pre-shared Key, Peer Endpoint and Peer Subnet to configure the VPN.

## Anti-Virus as a Service

For an overview of Anti-Virus as a Service, please see the [Anti-Virus as a Service Service Scope](man-sco-antivirus.md).

UKCloud will provide you with the installation *package(s)* and commands to install and configure the Anti-Virus agent on your virtual machines.

## Patching as a Service

For an overview of Patching as a Service, please see the [Patching as a Service Service Scope](man-sco-patching.md).

### Operating systems

UKCloud will only support in-life, vendor-backed operating systems, such as Microsoft Windows, Red Hat Enterprise Linux and Canonical Ubuntu. Customer-built operating systems (for example Gentoo Linux custom build) are unsupported by this service.

### Customer environment configuration

#### Linux

To provide secure communication between UKCloud's centralised patch management platform and a customer's virtual machine, we use key-based SSH sessions, reducing the need to share credentials. As such, we'll need the following prerequisites to be fulfilled on each virtual machine subscribing to this service:

- An allow rule for port 22 (SSH) on your virtual machine's firewall (for example, iptables).

- A local user account with passwordless sudo access. You'll need to share details of this account with UKCloud when onboarding to this service.

- The /etc/ssh/sshd_config configuration file has to be configured to allow SSH access for the patching user you created in the step above.

- UKCloud will provide you with a public SSH key during the onboarding process. You'll need to append this key to the authorized_keys file, located at ~/.ssh/authorized_keys within the home directory of the user you created in the step above.

#### Windows

For UKCloud to correctly scan for and apply operating system patches, the customer must agree to enabling and configuring the Server Message Block (SMB) protocol by ensuring ports 445 and 139 (both over TCP) are open on all virtual machines and associated operating systems opted-in to this service. Furthermore, there must be a bi-directional rule allowing port 3121 (over TCP) on your edge appliance and operating system firewall.

Furthermore, several other prerequisites are required. A patching user needs to be created and must:

- Be an admin on the virtual machine.

- Have access to the Control Panel.

- Filer and Print Sharing enabled for all networks.

The customer virtual machines must also be running the "Remote Registry" service.

##### Domain Joined

If the Windows virtual machines are domain joined, the device must be using domain administrator credentials.

##### Standalone

If the Windows virtual machines are standalone, the device must have User Account Control (UAC) disabled.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
