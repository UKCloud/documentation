---
title: Troubleshooting the vRealize Operations Tenant Appliance for advanced monitoring
description: Describes how to resolve issues with the advanced monitoring options in UKCloud for VMware provided by the vRealize Operations (vROps) Tenant Appliance
services: vmware
author: shighmoor
reviewer: swthomas
lastreviewed: 15/11/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Troubleshooting advanced monitoring (vROps)
toc_fullpath: How To/vmw-ref-vrops-trouble.md
toc_mdlink: vmw-ref-vrops-trouble.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Troubleshooting Advanced Management - vROps metrics, monitoring and alerting

## Overview

This article describes some of the issues you may encounter when using the vRealize Operations (vROps) Tenant Appliance for advanced monitoring in UKCloud for VMware.

## My VDC is not showing up in the Operations Manager

If you create a new VDC using the Portal UI or API after the Tenant Appliance has been enabled, it won't be automatically included in the metric collection. To include the new VDC, an Organization Administrator must refresh the Tenant Appliance as shown in [*How to refresh the vRealize Operations Tenant Appliance in your UKCloud for VMware environment*](vmw-how-vrops-refresh.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
