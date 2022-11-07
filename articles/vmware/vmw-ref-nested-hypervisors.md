---
title: Nested hypervisors
description: Outlines UKCloud's positioning as to why we do not recommend or support the use of nested hypervisors on UKCloud for VMware
services: vmware
author: shighmoor
reviewer: mbelchamber
lastreviewed: 22/09/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Nested hypervisors
toc_fullpath: Reference/vmw-ref-nested-hypervisors.md
toc_mdlink: vmw-ref-nested-hypervisors.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Nested hypervisors

The phrase "running nested VMs" refers to running a VM inside another VM. The outer guest is the VM that runs on physical hardware. The inner guest (or nested guest) is the VM that runs within another VM. The host hypervisor is the hypervisor that runs on the physical hardware. The guest hypervisor is the hypervisor that runs within a VM. To avoid confusion, we will not consider deeper levels of nesting here.

UKCloud for VMware has been engineered specifically to provide the highest level of performance and resilience based upon the design principle that customers should not be running guest hypervisors within VMs as we have no ability to control or monitor guest hypervisor services within these VMs.

In addition UKCloud utilises EVC Clusters to deliver UKCloud for VMware, of which VMware best practices establish that guest hypervisors are not recommended: <https://communities.vmware.com/docs/DOC-8970>.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
