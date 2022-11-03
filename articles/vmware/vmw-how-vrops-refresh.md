---
title: How to refresh the vRealize Operations Tenant Appliance in your UKCloud for VMware environment
description: Shows how to refresh the vRealize Operations (vROps) Tenant Appliance after adding new VDCs to your compute service
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 21/12/2021
toc_rootlink: How To
toc_sub1: Advanced monitoring
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Refresh the vROps Tenant Appliance
toc_fullpath: Reference/Advanced monitoring/vmw-how-vrops-refresh.md
toc_mdlink: vmw-how-vrops-refresh.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to refresh the vRealize Operations Tenant Appliance in your UKCloud for VMware environment

## Overview

If a user uses the Portal GUI or API to add a new VDC to a compute service after the vRealize Operations (vROps) Tenant Appliance has been enabled, you must refresh the Tenant Appliance to include the new VDC in the metrics.

### Intended audience

To refresh the vRealize Operations Tenant Appliance, you must be a VMware Cloud Director Organization Administrator.

## Refreshing the vRealize Operations Tenant Appliance

1. In VMware Cloud Director, in the top menu, select **Libraries**.

    ![Libraries menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-libraries.png)

2. In the left navigation panel, under *Services*, select **Service Library**.

   ![Service Library option](images/vmw-vcd10.1-mnu-service-library.png)

3. In the *vROps - Refresh Monitoring* card, click **Execute**.

    ![vROps - Refresh Monitoring](images/vmw-vrops-refresh-card.png)

4. In the *vROps - Refresh Monitoring* dialog box, click **Finish**.

    ![vROps - Refresh Monitoring dialog box](images/vmw-vrops-refresh.png)

5. You can monitor the progress in the *Recent Tasks* panel.

## Next steps

For information about accessing monitoring metrics and reports through the *Operations Manager*, see [*How to access advanced monitoring using the vRealize Operations Tenant Appliance*](vmw-how-vrops-use.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
