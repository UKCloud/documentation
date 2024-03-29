---
title: How to deploy multiple VMs from a vApp template simultaneously using the API
description: Outlines the options for deploying multiple VMs simultaneously from a single vApp template
services: vmware
author: Sue Highmoor
reviewer: geverett
lastreviewed: 14/11/2022
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Deploy multiple VMs from a vApp template simultaneously using the API
toc_fullpath: How To/vmw-how-deploy-multiple-vms-from-vapp.md
toc_mdlink: vmw-how-deploy-multiple-vms-from-vapp.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to deploy multiple VMs from a vApp template simultaneously using the API

If you intend to deploy multiple VMs simultaneously from a single vApp template, you'll need to raise a request through the UKCloud Portal requesting that Change Block Tracking (CBT) is disabled on your template. Alternatively, if your VMs are in the ESSENTIAL service level then these will not be backed up meaning CBT will not be enabled.

The following options are available to ensure reliable simultaneous deployment:

1. Inform us of a newly created vApp template.

   If we're informed on the day of creation, we can disable CBT for the vApp template allowing you to start deploying from template right away.

   If we're not informed on the day, our automatic backup script will run overnight and the template will be added to our backup software with the default **Enable CBT** option enabled. We will then have to disable this to undo any changes it made to the VM overnight before any simultaneous deployment can occur.

2. Use the ESSENTIAL service level, which does not provide any backup functionality. This means that CBT will never get enabled on any of the vApp templates (useful for mass deployment of vApp templates).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
