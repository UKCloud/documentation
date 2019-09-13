---
title: Disaster Recovery as a Service FAQs | UKCloud Ltd
description: Frequently asked questions for Disaster Recovery as a Service (Powered by Zerto)
services: draas
author: Matt Warner
reviewer:
lastreviewed: 02/08/2018 16:00:52
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

Yes, you can configure your protection groups, which can include multiple VMs. This enables you to protect whole applications or just the parts that are mission critical and you just can't afford to lose. Each protection group has synchronised recovery points to simplify your recovery processes.

### Can I carry out a test failover?

Yes, you can test running applications on the UKCloud platform to ensure failover is working as intended. Please note that these failover tests will not affect your active applications.

### What is the cost to test failover?

When you perform a test recovery, any VMs recovered are charged at the prices associated with recovered VM sizes. See the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) for details on VM prices. It's important to note that you will continue to be charged as long as the failover test is active. Once the failover test is stopped, you will no longer be charged for the VMs.

### What VMware and Hyper-V versions are supported for recovery on UKCloud?

For information about the minimum requirements for Disaster Recovery as a Service, based on the currently deployed version of Zerto Virtual Replication (6.5U4) on the UKCloud platform, see the [Interoperability Matrix for All Zerto Versions](http://s3.amazonaws.com/zertodownload_docs/Latest/Zerto%20Virtual%20Replication%20Operability%20Matrix.pdf).

The hypervisor management plane (such as VMware vCenter server) must be installed for Zerto to be compatible with your environment - this means that free hypervisor versions may not be supported.

### Is the Zerto protection technology available for physical servers?

The Zerto technology that underpins the Disaster Recovery as a Service service only supports virtual machines. Physical hardware is not part of the product support.

### Is the Zerto licence included?

Yes, all licensing for Zerto used within Disaster Recovery as a Service is included.

The price of Disaster Recovery as a Service is based on the storage tier that the VM is being replicated to. For more information please see the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

### What connectivity options do I have?

All UKCloud connectivity options are available including internet, PSN, HSCN, Janet and RLI.

### Can I replicate into the UKCloud Elevated environment?

If you currently have a PSN connection in your primary site, then you would be able to replicate over PSN into the UKCloud Elevated environment. However, if you do not have a PSN connection at your primary site but would like to replicate into the Elevated environment, you can use an encrypted private line to do so. Contact your Cloud Architect for more details on this.

### How do I invoke a recovery if my local Zerto console becomes unavailable?

Once the initial configuration has been done using the Zerto Portal on the customer infrastructure, all additional configurations and management, including invoking failover and any testing, can be done in the UKCloud target environment, accessing the Zerto Portal via the UKCloud Portal.

### Is there a way to include appliance storage?

Disaster Recovery as a Service addresses server-attached disks, however for appliance storage this is not currently possible. The Zerto technology will be able to replicate if the storage (file or block) is presented to a VM as a virtual disk.

### How is it billed?

The pricing for Disaster Recovery as a Service is simple. You only pay for the data you have allocated to your local VMs. So, for example if your existing VMs use 100GiB of UKCloud protected storage, that's all you'll pay UKCloud to protect based on the tier of storage and retention period chosen.

### How do I modify replication in the UKCloud Elevated environment?

Zerto replication to the UKCloud Assured environment can be controlled from the internet-facing Zerto Portal, however replication into the UKCloud Elevated environment can only be controlled via the Elevated Zerto Portal. To access the Elevated Zerto Portal, you need to be connected to it via the PSN, RLI, private encrypted connection or our Secure Remote Access (SRA) service.

### Does UKCloud install the Zerto software in my data centre?

No, you are responsible for the installation and configuration of the Zerto software within your data centre. Additionally, you must ensure that the software version of Zerto running locally is the same as that running within UKCloud.

UKCloud will make the appropriate Zerto software versions available.

### Can I failback to my own data centre or third party data centre?

Yes, once you've tested or performed a live failover you can failback onto your own infrastructure using the self-service Zerto Portal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
