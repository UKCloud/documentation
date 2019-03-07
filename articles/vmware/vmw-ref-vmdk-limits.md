---
title: Virtual machine disk limits and considerations | UKCloud Ltd
description: Defines UKCloud's recommended soft limits regarding disk capacity and any associated operational considerations
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Virtual machine disk limits and considerations
toc_fullpath: Reference/vmw-ref-vmdk-limits.md
toc_mdlink: vmw-ref-vmdk-limits.md
---

# Virtual machine disk limits and considerations

In order to ensure the performance and stability of a customer's VM, whilst also being able to ensure the integrity and validity of VM back-ups, UKCloud advises the following soft limits on storage presented to individual VMs;

- 2032 GB for each virtual disk (VMDK) presented to a VM, this will ensure normal snapshot functions will operate correctly

- Maximum of 20 virtual disks presented to a VM

- Maximum of 40TB overall storage presented to a VM

## Storage Controllers

Increasing the number of disks per controller can have a performance impact, for high I/O machines we'd recommend minimizing the disk to controller ratio, also using the paravirtualised controller can result in greater throughput and lower CPU use.

> [!NOTE]
> VMware Tools is a pre-requisite for the deployment of paravirtualised disks.

## Snapshots

A VMware snapshot is a copy of a VM's disk at a given point in time, it is not a complete copy of the original and rather it only copies the delta disks. An excessive number of delta files in a chain (caused by an excessive number of snapshots) or large delta files may cause decreased virtual machine and host performance. UKCloud recommends the removal of snapshots on a regular basis 24-72 hours in line with VMware best practices to maintain consistent performance of VMs.

There will be times when standard platform maintenance tasks need to be performed, resulting in VMs moving around the infrastructure. VMs with large (2TB) hard disks presented will take an extended time for operations to complete, during which time other tasks against the VM could be blocked.

UKCloud strongly recommends, where possible, to scale environments horizontally instead of vertically. We understand this may not always be possible, however in doing so you are ensuring reliability and consistency of performance in the environment as it grows, for further design considerations or assistance contact your Account Director who will be able to put you in touch with one of our Cloud Architects.

References:

http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1012384
http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1025279

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.