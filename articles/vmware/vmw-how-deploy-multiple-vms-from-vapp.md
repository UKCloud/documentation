---
title: How to deploy multiple VMs from a vApp template simultaneously using the API | UKCloud Ltd
description: Outlines the options for deploying multiple VMs simultaneously from a single vApp template
services: vmware
author: Sue Highmoor
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Deploy multiple VMs from a vApp template simultaneously using the API
toc_fullpath: How To/vmw-how-deploy-multiple-vms-from-vapp.md
toc_mdlink: vmw-how-deploy-multiple-vms-from-vapp.md
---

# How to deploy multiple VMs from a vApp template simultaneously using the API

If you intend to deploy multiple VMs simultaneously from a single vApp template, you'll need to raise a request through the UKCloud Portal requesting that Change Block Tracking (CBT) is disabled on your template. Alternatively, if your VMs are in the ESSENTIAL service level then these will not be backed up meaning CBT will not be enabled.

The following options are available to ensure reliable simultaneous deployment:

1. Inform us of a newly created vApp template.

   If we're informed on the day of creation, we can disable CBT for the vApp template allowing you to start deploying from template right away.

   If we're not informed on the day, our automatic backup script will run overnight and the template will be added to our backup software with the default **Enable CBT** option enabled. We will then have to disable this to undo any changes it made to the VM overnight before any simultaneous deployment can occur.

2. Use the ESSENTIAL service level, which does not provide any backup functionality. This means that CBT will never get enabled on any of the vApp templates (useful for mass deployment of vApp templates).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.