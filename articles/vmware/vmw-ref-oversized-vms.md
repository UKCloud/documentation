---
title: Oversized VMs on UKCloud for VMware
description: Advisory statement on UKCloud's position on VMs that exceed the maximum configuration
services: vmware
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 11/11/2019
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Oversized VMs on UKCloud for VMware
toc_fullpath: Reference/vmw-ref-oversized-vms.md
toc_mdlink: vmw-ref-oversized-vms.md
---

# Oversized VMs on UKCloud for VMware

Although UKCloud recommend a maximum permitted configuration of 12 vCPU and 128 GiB RAM for virtual machines (VMs), a small number of customers have been creating customised VMs that exceed this configuration. We understand that customers may have been doing this in an effort to increase VM performance, and in the most extreme scenarios customers have assigned more vCPU and memory than is physically available on the host.

Unfortunately, this approach does not necessarily increase VM performance and in many circumstances this has the opposite effect.

UKCloud have configured the service to dynamically move workloads to quieter hosts when the current host experiences a sustained level of increased activity. By increasing the resource requirements, the ability to move a VM from a busy host to a quieter host is significantly impacted. As the VM resources are increased, the likelihood of that amount being free on another host is significantly diminished, which effectively locks the VM to the current host.

The impact to a customer VM is twofold:

- Reduces the reliability of performance

- Potentially affects VM availability in the case of a failure

UKCloud must also consider the impact that these abnormally large VMs have on other users of the service as oversized VMs consume additional resources and cause performance issues for other VMs.

With this mind, UKCloud advises customers that VMs that exceed the maximum resources permitted for UKCloud for VMware are not allowed. We run regular reports to identify customers with VMs that breach these limits. In the first instance, we will contact customers to help them overcome some of the issues they are experiencing, but we reserve the right to terminate excessively large VMs should they start to affect the stability of the platform for other UKCloud customers.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
