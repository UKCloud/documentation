---
title: How to securely manage permissions for a specific vApp
description: Shows how to extend permissions to users for a specific vApp, ensuring that those users cannot also access other vApps or settings
services: vmware
author: shall
reviewer: shighmoor
lastreviewed: 06/11/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Securely manage permissions for a specific vApp
toc_fullpath: How To/vmw-how-manage-vapp-permissions.md
toc_mdlink: vmw-how-manage-vapp-permissions.md
---

# How to securely manage permissions for a specific vApp

## Overview

This article shows you how to extend permissions to users for specific vApps, while ensuring that those users cannot access other vApps or settings.

## Prerequisites

You must be able to log in to the UKCloud Portal as an administrator to perform the steps in this guide. If you do not have the appropriate permissions, contact your administrator.

For each user to whom you want to grant permissions on the vApp, you need the VMware Cloud Director/vCloud Director user ID. Users can obtain their user ID as follows:

1. Log into the Portal as the appropriate user.

2. Click the drop down list in the top right of the Portal pane and click **API**.

    ![API](images/vmw-portal-mnu-api.png)

3. For the vOrg to which the vApp belongs, make a note of the **Username**.

    ![Username](images/vmw-portal-api-details.png)

## Setting VMware Cloud Director/vCloud Director permissions in the UKCloud Portal

1. Log in to the UKCloud Portal as an administrator.

2. Select the account to which the vApp belongs.

3. In the left-hand menu, click **Contacts** and then **All Contacts**.

    ![contacts](images/ptl-menu-all-contacts.png)

4. Edit the users to whom you want to grant permissions and ensure that, on the **Permissions** tab, only the **vApp User** option is selected for the vOrg to which the vApp belongs.

    ![vApp user](images/ptl-contact-permissions-vapp-user.png)

    You can also create new users if required.

## Managing permissions for a vApp

To manage permissions for a specific vApp:

### [VMware Cloud Director 10.1](#tab/tabid-a)

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the vApp.

2. In the left navigation panel, select **vApps**.

    ![vApps tab in VMware Cloud Director](images/vmw-vcd10.1-tab-vapps.png)

3. In the card for the vApp, click **Details**.

4. Select **Sharing** then **Edit**.

5. In the *Share* dialog box, from the **Share with** radio buttons, select **Share with specific users or groups**.

6. For each user to whom you want to grant permissions:

    - Select the check box for the user.

    - From the **Access Level** list, select the appropriate permission level: **Read Only**, **Read/Write** or **Full Control**.

    ![vApp Access Level](images/vmw-vcd10.1-share-vapp.png)

7. When you're done setting permissions for all users, click **Share**.

### [vCloud Director 9.7](#tab/tabid-b)

1. In vCloud Director, select the VDC where your vApp is located.

2. In the card for the vApp, click **Details**.

    ![Details option](images/vmw-vcd-mnu-vapp-details.png)

3. In the *Sharing* section, select **Share with specific users or groups**.

    ![vApp permissions](images/vmw-vcd-tp-vapp-share.png)

4. For each user to whom you want to grant permissions:

    - Highlight the user or users from the list and go to the right panel to select Access Level.

    - Select the appropriate permission level from the **Access Level** list: **Read Only** or **Full Control**.

    ![vApp Access Level](images/vmw-vcd-tp-vapp-share-level.png)

5. When you're done setting permissions for all users, click **Save**.

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
