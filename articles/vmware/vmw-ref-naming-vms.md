---
title: Naming virtual machines | UKCloud Ltd
description: Explains the new naming convention for virtual machines (VMs) in UKCloud for VMware
services: vmware
author: Sue Highmoor
reviewer: George Smith
lastreviewed: 29/10/2019 16:00:00
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

The version of ESXi hosts on the UKCloud platform implements stricter restrictions on the characters permitted for virtual machines (VMs), so you should be aware of the following:

When naming VM’s in your infrastructure we would advise not using special characters. 

When creating a new VM, make sure that the name includes only uppercase and lowercase alphanumeric characters and the hyphen (-) character. Using any other special characters will cause deployment to fail.

Virtual machines with strings in square brackets [] in their name might not deploy successfully, because of possible leading spaces added or missing. For example: ‘[username]vmname’ or ‘[username] vmname’ (note 2 spaces prefixed to vmname)

The following VM operations may be impacted when a VM name contain square brackets [].
-	Performing a vMotion, relocate or a clone operation.
-	Creating a template, converting a template, or deploying a VM from a template.
-	Enabling Fault Tolerance on a virtual machine.
-	During a HA event VM failover may not succeed.
-	DRS operations (Fully Automated) may not succeed.

You must update any existing VMs that have names that include other special characters to make sure that they comply with the new restrictions. VMs with special characters in their names may go offline if they're moved to an upgraded host.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
