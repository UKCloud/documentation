---
title: PowerCLI command for interacting with the vCloud API
description: Details the PowerCLI command to use when interacting with the vCloud API from PowerCLI
services: vmware
author: shighmoor
reviewer: geverett
lastreviewed: 10/10/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: PowerCLI command for interacting with the vCloud API
toc_fullpath: Reference/vmw-ref-powercli-vcloud.md
toc_mdlink: vmw-ref-powercli-vcloud.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# PowerCLI command for interacting with the vCloud API

To establish a connection to VMware Cloud Director using PowerShell, use the following command:

    Connect-CIServer -Server <API-URL> -Org <ORG-ID> -User <USERNAME> -Password <PASSWORD>

You can find the details for API-URL, ORG-ID, and USERNAME in the UKCloud Portal, under the API section of the top right menu.

> [!NOTE]
> Remove `@<ORG-ID>` from the username that is listed on the UKCloud Portal API page, as it is not required when attempting to login with this command.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
