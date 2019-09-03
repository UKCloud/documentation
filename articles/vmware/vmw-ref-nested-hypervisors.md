---
title: Nested hypervisors | UKCloud Ltd
description: Outlines UKCloud's positioning as to why we do not recommend or support the use of nested hypervisors on UKCloud for VMware
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 12/10/2018 17:42:06
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Nested hypervisors
toc_fullpath: Reference/vmw-ref-nested-hypervisors.md
toc_mdlink: vmw-ref-nested-hypervisors.md
---

# Nested hypervisors

The phrase "running nested VMs" refers to running a VM inside another VM. The outer guest is the VM that runs on physical hardware. The inner guest (or nested guest) is the VM that runs within another VM. The host hypervisor is the hypervisor that runs on the physical hardware. The guest hypervisor is the hypervisor that runs within a VM. To avoid confusion, we will not consider deeper levels of nesting here.

UKCloud for VMware has been engineered specifically to provide the highest level of performance and resilience based upon the design principle that customers should not be running guest hypervisors within VMs as we have no ability to control or monitor guest hypervisor services within these VMs.

In addition UKCloud utilises EVC Clusters to deliver UKCloud for VMware, of which VMware best practices establish that guest hypervisors are not recommended: <https://communities.vmware.com/docs/DOC-8970>.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
