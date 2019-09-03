---
title: Naming virtual machines | UKCloud Ltd
description: Explains the new naming convention for virtual machines (VMs) in UKCloud for VMware
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 30/08/2018 14:10:25
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Naming virtual machines
toc_fullpath: Reference/vmw-ref-naming-vms.md
toc_mdlink: vmw-ref-naming-vms.md
---

# Naming virtual machines

We're currently in the process of rolling out updates to the ESXi hosts on the UKCloud platform to version 6 to ensure platform stability and enable future feature sets. This new version implements stricter restrictions on the characters permitted for virtual machines (VMs), so you should be aware of the following:

- When creating a new VM, make sure that the name includes only uppercase and lowercase alphanumeric characters and the hyphen (-) character. Using any other special characters will cause deployment to fail.

- You must update any existing VMs that have names that include other special characters to make sure that they comply with the new restrictions. VMs with special characters in their names may go offline if they're moved to an upgraded host.

For more information, see the following VMware Knowledge Base article: <https://kb.vmware.com/s/article/2046088>, although note that the article does not provide an exhaustive list of restricted characters.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
