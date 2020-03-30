---
title: How to migrate vApps between virtual data centres
description: Covers the ways in which customers can migrate their vApps between virtual data centres (VDCs)
services: vmware
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 02/08/2019

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Migrate vApps between virtual data centres
toc_fullpath: How To/vmw-how-migrate-vapp.md
toc_mdlink: vmw-how-migrate-vapp.md
---

# How to migrate vApps between virtual data centres

## Overview

If you have multiple virtual data centres (VDCs), you may find that you want to migrate vApps from VDC to VDC; whether that be from a test and dev environment into production or between VDCs with different service levels.

There are two ways to migrate vApps between VDCs: copy and move. This article describes how to use these different methods to migrate your VDCs.

## Copying a vApp

You may want to copy your vApp from one VDC to another VDC, leaving the original vApp in the source VDC that you can continue to use. You can perform the vApp copy operation on running vApps.

> [!NOTE]
> As this is a copy operation, this will create additional VMs which will be charged at the standard UKCloud rate.

To copy a vApp:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the vApp you want to copy.

2. In the left navigation panel, click **vApps**.

3. In the card for the vApp that you want to copy, select **Actions** then **Copy to**.

4. In the *Copy* dialog box, enter a **Name** for the copied vApp and select which VDC you want to migrate it to. You can also change the storage policy for each virtual machines (VMs) within the vApp.

    ![Copy vApp dialog box](images/vmw-vcd91-copy-vapp.png)

5. When you're happy with the configuration, click **OK** to begin the copy operation.

    > [!NOTE]
    > The copy operation may take some time and the performance of any running VMs within the source vApp may be impacted due to the copy process.

## Moving a vApp

You may want to completely move your vApp from one VDC to another VDC. This will remove the vApp from the source VDC and move it to the destination. To perform this operation, the vApp must be powered off.

To move a vApp:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the vApp you want to move.

2. In the left navigation panel, click **vApps**.

3. In the card for the vApp that you want to move, select **Actions** then **Move to**.

4. In the *Move* dialog box, select which VDC you want to migrate the vApp to. You can also change the storage policy for each VMs within the vApp.

    ![Move vApp dialog box](images/vmw-vcd91-move-vapp.png)

5. When you're happy with the configuration, click **OK** to begin the move operation.

    > [!NOTE]
    > It may take some time to move the vApp from one VDC to another.

6. When the move operation is complete, power the vApp back on by selecting **Actions** then **Power On**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
