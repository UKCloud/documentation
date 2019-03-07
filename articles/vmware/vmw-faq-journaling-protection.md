---
title: Journaling Protection FAQs | UKCloud Ltd
description: Frequently asked questions for Journaling Protection (powered by Zerto)
services: vmware
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Journaling Protection FAQs
toc_fullpath: FAQs/vmw-faq-journaling-protection.md
toc_mdlink: vmw-faq-journaling-protection.md
---

# Journaling Protection FAQs

## General

### What is Journaling Protection?

Journaling protection (Powered by Zerto) is a powerful self-service replication and recovery tool that can improve organisational resilience. It can be accessed and controlled by using the fully-featured portal.

### How does it work?

As indicated in the name, journaling protection utilises a "journal" for capturing every change that takes place inside an application.

The contents of this journal are then stored in a different UKCloud Zone - which is nominated by the customer.

The journal can span up to 28 days of a VMs history, with recovery points just seconds apart. Allowing for a near zero RPO.

In the event of a disruption to service - either at the service provider level (loss of infrastructure), or something localised to the application (ransomware attack, problematic software upgrade).

Customers can recover the VMs into their recovery site - either with minimal data loss, or to a specified point in time.

### How is it billed?

Journaling Protection will be billed monthly in arrears and is dependent on the storage consumed, and whether virtual machines (VM) are protected on the UKCloud platform. To explain the billing of this service, please see the worked examples below:

**UKCloud virtual machine protection**

In the scenario that you are using the service to protect virtual machines on the UKCloud platform, you will be billed for:

- (Virtual machine cost per hour + Journaling cost per hour) * hours per month

- (Storage cost per month + Storage journaling cost) * Storage capacity

For example:

1 Medium Power VM on the Assured platform available for 720 hours with 160GiB Tier 2 storage.

As always, UKCloud include the first 60GiB of Tier 2 storage (10GiB on Micro) in the hourly price of a VM. However, any protection will apply to the base storage and any additional storage. In this example, the 60GiB + 100GiB = 160GiB. It is worth mentioning that if the base storage is upgraded to Tier 1 storage, this will be charged at the Tier 1 storage price.

This would be calculated as:

- VM: (£0.22 + £0.10) * 720 = £230.40

- Base Storage: £0.30 * 60GiB = £18.00

- Additional Storage: (£0.10 + £0.30) * 100GiB = £40.00

- Total: £288.40

Note, when a VM is turned off the 60GiB becomes chargeable and the customer will be billed for the total storage consumed. If the VM was turned off for the whole month, then the following calculation would apply:

- Storage: (£0.10 + £0.30) * 160GiB = £64

- Total: £64.00

In an example where no additional storage is selected:

1 Medium Power VM on the Assured platform available for 720 hours with only the base 60GiB Tier 2 storage.

This would be calculated as:

- VM: (£0.22 + £0.10) * 720 = £230.40

- Base Storage: £0.30 * 60GiB = £18.00

- Additional Storage: (£0.10 + £0.30) * 0GiB = £0.00

- Total: £248.40

The charge if the VM was turned off for the whole month:

- Storage: (£0.10 + £0.30) * 60GiB = £24.00

- Total: £24.00

### What functionality is available?

Currently, you can carry out the following actions using Journaling Protection:

- Define Virtual Protection Groups (VPGs) which map to one or more vApp. These will allow you to maintain a set of rules that will apply to all VMs within the VPG. Rules include settings such as the journaling location and network mapping

- State a desired location that the VM journal is to be stored in (for example, another UKCloud region)

- View the current RPO and RTO (recovery point objective) or RTO (recovery time objectives) are for their protected VMs.

- Self-service restore vApps from a journal via the portal from any point contained within the journal

- View real-time notifications within the Zerto portal to check if VMs are not meeting RPO or RTO targets

- Perform disaster recovery tests by recovering vApps into the recovery destination

### Can I set different retention policies for my vApps?

Yes. Each vApp maps to a VPG, and each VPG can have its own retention policy. For example, you may have one VPG retention policy set at 2-day Journaling and another VPG retention policy set at 7-day Journaling.

### Is this a managed service?

No. UKCloud have implemented Journaling Protection to be available for UKCloud for VMware workloads as an on-platform service and will ensure that the service is available and updated accordingly. Once the service has been available for your workloads, you will be responsible for managing the service via the UKCloud or Journaling Protection portal (powered by Zerto).

### How do I make changes to my Journaling Protection?

Once the service has been provisioned for your environment, you will be able to log into the [UKCloud Portal](https://portal.ukcloud.com/) and then log into the Journaling Protection portal. Please note that our support teams will be unable to manage your service for you as this is provided unmanaged.

### How does this differ from Snapshot Protection?

The Journaling Protection service provides a continuous log of all the changes that have occurred within your environment within the specified time frame (2, 7, 14 or 28 days) that are stored on the UKCloud platform and can be restored quickly and easily from a point in time of your choosing.

Snapshot protection utilises 24 hour backups for up to 28 days which are stored on a separate storage solution, and can recover from deleted disks or VMs. In the event that you need to recover from a previous recovery point, there may be a loss of data due to the time difference between the event and the last snapshot.

### Will I be able to extend my retention periods by moving my journals to external storage, such as Cloud Storage?

No. In the initial release, this feature will not be enabled as we have identified a security challenge that must be addressed.

### Will my network configuration be failed over in the event of disaster?

Journaling Protection (powered by Zerto) will replicate vApp networking specific to a customer's vApp.

However, organisation and external networking configuration would need to be done manually. Customers can do this ahead of any failure by pre-provisioning external connectivity within the recovery site.

### During setup for the DR site, is there a way to export the edge and vLAN configurations from the production site and import this configuration for the DR site?

Yes. You can manage exports and imports of configurations via the API. You may also raise a support ticket and we will be able to assist with this process. 

### Does the Journaling Protection swap drive work for bitlocker enabled drives?

Swap disks are synchronised during the initial synchronisation, but no further ongoing synchronisation occurs. This means that the Bitlocker drive should remain encrypted and configured when failed over.

However, if the password or key is modified then it will need to be reconfigured or re-encrypted in the event of a failover. To avoid this scenario, customers are advised to leave the Bitlocker drive marked as normal synchronisation (non-swap).

### Does UKCloud offer an SLA with Journaling Protection?

We do not currently plan to offer an SLA around the service. However, the real time monitoring available in the Journaling Protection portal (powered by Zerto) will advise customers of the state of their journal and their currently achievable RPO.

### Is Zerto licensing included?

Yes, it is included with the Journaling Protection option for use with the 2, 7, 14 day or 28 day retention policies.

### Will a VPG still be protected if one or more VMs are powered off?

In normal circumstances, if a VM within a VPG is powered off this will not impact the protection as remaining powered-on VMs will continue to replicate as normal. This includes the scenario when a new VM is added to a VPG and the new VM is in powered off state - in this instance the VM would need to be powered on to create its initial sync, and existing VMs will continue to replicate as normal.

The one exception to this is if you have an existing VPG, and one VM is powered off, and at some point afterwards the VPG goes in a bitmap / delta sync (normally due to network contention or high periods of writes on a protected VM). In this case, the powered-off VM prevents the VPG from completing the sync and the VPG replication will be halted; this will trigger an alert within the Zerto portal.

### Is Journaling Protection enabled in all regions?

Journaling Protection is currently enabled in all regions. However, only regions 5 and 6 are used as the recovery destination regions due to performance and capacity management reasons. In order to check the latest status as to what services are available in each region, please check [*UKCloud services by region*](../other/other-ref-services-by-region.md).

### Can I use Journaling Protection with VDCs that are in the same data centre?

Yes, this is possible but dependent on which regions the VDCs are in. It is not possible to use regions 1, 2, 7 or 8 as the recovery destination regions for the journal.

### Can I use Journaling Protection to migrate workloads between regions?

Yes, you can use our Journaling Protection solution to migrate your UKCloud for VMware applications into another VMware-enabled region. This enables you to move your workloads into the regions within our platform that are best suited for your requirements.

The migration of VMs within our platform is very closely aligned with how we operate the Journaling Protection of VMs, with the only difference being that when you have failed-over the VMs to another region you do not then failback to the primary region.

As migrating workloads involves enabling Journaling Protection on your source VMs, those VMs (and any associated storage) will incur the appropriate additional Journaling Protection charges for the duration of the migration. Once your migration is complete, you should be sure to remove the original VMs from the source site to avoid additional charges.

Find out more about how to migrate your workloads between UKCloud regions in [*How to migrate your workloads between UKCloud regions*](vmw-how-zerto-migrate-between-regions.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.