---
title: How to refresh the vRealize Operations Tenant Appliance in your UKCloud for VMware environment
description: Shows how to refresh the vRealize Operations (vROps) Tenant Appliance after adding new VDCs to your compute service
services: vmware
author: shighmoor
reviewer:  
lastreviewed: 20/11/2020
toc_rootlink: How To
toc_sub1: Advanced monitoring
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Refresh the vROps Tenant Appliance
toc_fullpath: Reference/Advanced monitoring/vmw-how-vrops-refresh.md
toc_mdlink: vmw-how-vrops-refresh.md
---

# How to refresh the vRealize Operations (vROps) Tenant Appliance in your UKCloud for VMware environment

## Overview

If a user uses the Portal GUI or API to add a new VDC to a compute service after the vRealize Operations (vROps) Tenant Appliance has been enabled, the Tenant Appliance must be refreshed to include the new VDC in the metrics.

### Intended audience

To refresh the vRealize Operations Tenant Appliance, you must be a vCloud Director/VMware Cloud Director Organization Administrator.

## Refreshing the vRealize Operations Tenant Appliance

1. In the vCloud Director/VMware Cloud Director menu, select **Libraries**.

    > [!TIP] In vCloud Director 9.7, click the menu icon (three lines) to access the menu.

2. In the left navigation panel, under *Services*, select **Service Library**.

3. In the *vROps - Refresh Monitoring* card, click **Execute**.

    ![vROps - Refresh Monitoring](images/vmw-vrops-refresh-card.png)

4. In the *vROps - Refresh Monitoring* dialog box, click **Finish**.

    ![vROps - Refresh Monitoring dialog box](images/vmw-vrops-refresh.png)

5. You can monitor the progress in the *Recent Tasks* panel.

## Next steps

For information about accessing monitoring metrics and reports through the *Operations Manager*, see [*How to access advanced monitoring using the vRealize Operations Tenant Appliance*](vmw-how-vrops-use.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
