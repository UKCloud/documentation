---
title: How to securely manage permissions for a specific vApp
description: Shows how to extend permissions to users for a specific vApp, ensuring that those users cannot also access other vApps or settings
services: vmware
author: shall
reviewer: swthomas
lastreviewed: 15/12/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Securely manage permissions for a specific vApp
toc_fullpath: How To/vmw-how-manage-vapp-permissions.md
toc_mdlink: vmw-how-manage-vapp-permissions.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to securely manage permissions for a specific vApp

## Overview

This article shows you how to extend permissions to users for specific vApps, while ensuring that those users cannot access other vApps or settings.

## Prerequisites

You must be able to log in to the UKCloud Portal as an administrator to perform the steps in this guide. If you do not have the appropriate permissions, contact your administrator.

For each user to whom you want to grant permissions on the vApp, you need the VMware Cloud Director user ID. Users can obtain their user ID as follows:

1. Log into the Portal as the appropriate user.

2. Click the drop down list in the top right of the Portal pane and click **API**.

    ![API menu option in the UKCloud Portal](images/vmw-portal-mnu-api.png)

3. For the compute service to which the vApp belongs, make a note of the **Username**.

    ![API Username](images/vmw-portal-api-username.png)

## Setting VMware Cloud Director permissions in the UKCloud Portal

1. [*Log in to the UKCloud Portal*](../portal/ptl-gs.md#logging-in-to-the-ukcloud-portal) as an administrator.

2. If necessary, select the account to which the vApp belongs.

3. In the navigation panel, expand the **Contacts** option and select **All Contacts**.

    ![All Contacts menu option in UKCloud Portal](images/ptl-menu-all-contacts.png)

4. Edit the users to whom you want to grant permissions and ensure that, in the *Permissions for UKCloud for VMware* section of the **Permissions** tab, only the **vApp User** option is selected for the compute service to which the vApp belongs.

    ![vApp User permission for UKCloud for VMware](images/ptl-contact-permissions-vapp-user.png)

    You can also create new users if required.

## Managing permissions for a vApp

To manage permissions for a specific vApp:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the vApp.

2. In the left navigation panel, select **vApps**.

    ![vApps menu option in VMware Cloud Director](images/vmw-vcd10.1-tab-vapps.png)

3. In the card for the vApp, click **Details**.

4. Select **Sharing** then **Edit**.

5. In the *Share* dialog box, from the **Share with** radio buttons, select **Specific Users and Groups**.

   ![Share with specific users or groups option](images/vmw-vcd10.1-share-vapp-specific.png)

6. For each user to whom you want to grant permissions:

    - Select the check box for the user.

    - From the **Access Level** list, select the appropriate permission level:

      - **Read Only** - View the VMs in the vApp but make no changes

      - **Read/Write** - View and make changes to the VMs in the vApp; create new VMs

      - **Full Control** - View, edit and create VMs; change permissions of other users

    ![Share dialog box with access levels](images/vmw-vcd10.1-share-vapp.png)

7. When you're done setting permissions for all users, click **Share**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
