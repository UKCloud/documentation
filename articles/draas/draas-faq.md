---
title: Disaster Recovery as a Service FAQs | UKCloud Ltd
description: Frequently asked questions for Disaster Recovery as a Service (Powered by Zerto)
services: draas
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Disaster Recovery as a Service FAQs
toc_fullpath: FAQs/draas-faq.md
toc_mdlink: draas-faq.md
---

# Disaster Recovery as a Service FAQs

## General

### What is Disaster Recovery as a Service?

Disaster Recovery as a Service (powered by Zerto) can help you improve organisational resilience. It enables rapid migration of applications between your local VMware or Hyper-V based VMs and UKCloud for VMware disaster recovery-enabled regions.

### Can I protect parts of my application?

Yes, you can configure your protection groups, which can include multiple VMs. This allows you to protect whole applications or just the parts that are mission critical and you just can't afford to lose. Each protection group has synchronised recovery points to simplify your recovery processes.

### Can I carry out a test failover?

Yes, you can test running applications on the UKCloud platform to ensure failover is working as intended. Please note that these failover tests will not affect your active applications.

### What is the cost to test failover?

When you perform a test recovery, any VMs recovered are charged at the prices associated with recovered VM sizes. See the UKCloud for VMware Service Definition for details on VM prices. It is important to note that you will continue to be charged as long as the failover test is active. Once the failover test is stopped, you will no longer be charged for the VMs.

### What VMware and Hyper-V versions are supported for recovery on UKCloud?

The following table lists the minimum requirements for Disaster Recovery as a Service, based on the currently deployed version of Zerto Virtual Replication (4.5U4) on the UKCloud platform:

Product | Supported Version
--------|------------------
**Management Plane** | &nbsp;
VMWare vCenter | 4.0U1 -- 6.0U2
Microsoft SCVMM | 2012 R2 and Server Core: Update  Rollup 6-11 (recommended) 2012 R2 and Server Core: RTM
**Hosts** | &nbsp;
VMWare ESX/ESXi | 4.0U1-4.0U3, 4.0U4, 4.1-6.0U1,6.0U2
Microsoft Hyper-V | 2012 R2 and Server Core
**Virtual Machines Hardware Version** | &nbsp;
VMWare | Up to Version 10
Hyper-V | Generation 1&2
**Disaster Recovery as a Service** | &nbsp;
*Connectivity* | &nbsp;
Full Duplex Internet connection | 5Mb/s minimum
IPSEC VPN | NA

The hypervisor management plane (such as VMware vCenter server) must be installed for Zerto to be compatible with your environment - this means that free hypervisor versions may not be supported.

### Is the Zerto protection technology available for physical servers?

The Zerto technology that underpins the Disaster Recovery as a Service service only supports virtual machines. Physical hardware is not part of the product support.

### Is the Zerto license included?

Yes, all licensing for Zerto used within Disaster Recovery as a Service is included.

The price of Disaster Recovery as a Service is based on the storage tier that the VM is being replicated to. For more information please see the Disaster Recovery as a Service Service Definition.

### What connectivity options do I have?

All UKCloud connectivity options are available including Internet, PSN-A, PSN-P, N3/HSCN, Janet and RLI.

### Can I replicate into the UKCloud Elevated environment?

If you currently have a PSN-P connection in your primary site, then you would be able to replicate over PSN-P into the UKCloud Elevated environment. However, if you do not have a PSN-P connection at your primary site but would like to replicate into the Elevated environment, you can use an encrypted private line to do so. Contact your Cloud Architect for more details on this.

### How do I invoke a recovery if my Zerto console becomes unavailable?

Once the initial configuration has been done using the Zerto Portal on the customer infrastructure, all additional configurations and management can be done using the Zerto Portal within the UKCloud Portal which includes invoking failover and any testing.

### Is there a way to include appliance storage?

Disaster Recovery as a Service addresses server-attached disks, however for appliance storage this is not currently possible. The Zerto technology will be able to replicate if the storage (file or block) is presented to a VM as a virtual disk.

### How is it billed?

The pricing for Disaster Recovery as a Service is simple. You only pay for the data you have allocated to your local VMs. So, for example if your existing VMs use 100GiB of UKCloud protected storage, that's all you'll pay UKCloud to protect based on the Tier of storage and retention period chosen.

### How do I modify replication in the UKCloud Elevated environment?

Zerto replication to the UKCloud Assured environment can be controlled from the internet-facing Zerto Portal, however replication into the UKCloud Elevated environment can only be controlled via the Elevated Zerto Portal. To access the Elevated Zerto Portal, you need to be connected to it via the PSN-P, RLI, private encrypted connection or our Secure Remote Access (SRA) service.

### Does UKCloud install the Zerto software in my data centre?

No, you are responsible for the installation and configuration of the Zerto software within your data centre. Additionally, you must ensure that the software version of Zerto running locally is the same as that running within UKCloud.

UKCloud will make the appropriate Zerto software versions available via the Knowledge Centre.

### Can I failback to my own data centre or third party data centre?

Yes, once you have tested or performed a live failover you can failback onto your own infrastructure using the self-service Zerto portal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.