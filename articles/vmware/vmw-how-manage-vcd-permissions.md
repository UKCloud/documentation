---
title: How to manage vCloud Director/VMware Cloud Director permissions in the UKCloud Portal
description: Shows how to manage and adjust permissions and roles for vCloud Director/VMware Cloud Director within the UKCloud Portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 06/11/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Manage vCloud Director/VMware Cloud Director permissions
toc_fullpath: How To/vmw-how-manage-vcd-permissions.md
toc_mdlink: vmw-how-manage-vcd-permissions.md
---

# How to manage vCloud Director/VMware Cloud Director permissions in the UKCloud Portal

## Overview

In the UKCloud Portal, you can control the access that a Portal user has to the different virtual data centres (VDCs) in your organisation.

### Intended audience

To complete the steps in this guide you must be a Portal administrator.

## Configuring permissions

To configure permissions for a portal user:

1. Log in to the UKCloud Portal as an administrator.

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)

2. In the Portal navigation panel, expand the **Contacts** option and select **All Contacts**.

    ![All Contacts menu option in UKCloud Portal](images/ptl-menu-all-contacts.png)

3. On the *Contacts* page, use the **Search** field to find the user to whom you want to assign or revoke permissions and then click the **Edit** button.

    ![Edit button for Portal contact](images/ptl-contacts-btn-edit.png)

4. On the *Edit contact* page, select the **Permissions** tab.

    ![Permissions tab for Portal contact](images/ptl-contacts-tab-permissions.png)

5. In the *Permissions for UKCloud for VMware* section, you'll see a list of VDCs and the associated permissions available for the Portal user.

    Select the permission level you want to assign to the user, then scroll to the bottom of the page and click **Save**.

## User types and privileges

The first table shows the user types (operations); the second table shows the exact privileges each user type has.

Operation             | Allows the user administrative access to the given organisation with:
----------------------|--------------------------------------------------------------------------------------
Console Only (CO)     | Permissions for Console access only
vApp User (VU)        | Permissions for a vApp User
vApp Author (VA)      | Permissions for a vApp Author
Catalogue Author (CA) | Permissions for a Catalogue Author
Admin (ADM)           | All permissions

Group        | Privilege                              | CO      | VU      | VA      | CA      | ADM
-------------|----------------------------------------|---------|---------|---------|---------|--------
Catalog      | Add vApp from My Cloud                 | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Change Owner                           | &nbsp;  | &nbsp;  | &nbsp;  | &nbsp;  | &check;
&nbsp;       | Create / Delete a Catalog              | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Edit Properties                        | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Publish                                | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Sharing                                | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | View Private and Shared Catalogs       | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | View Published Catalogs                | &nbsp;  | &nbsp;  | &nbsp;  | &nbsp;  | &check;
Catalog Item | Add to My Cloud                        | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Copy/Move a vApp Template/Media        | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Create/Upload a vApp Template/Media    | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Enable vApp Template Download          | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Edit vApp Template / Media Properties  | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | View vApp Templates/Media              | &nbsp;  | &check; | &check; | &check; | &check;
Disk         | Change Owner                           | &nbsp;  | &nbsp;  | &nbsp;  | &check; | &check;
&nbsp;       | Create                                 | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Delete                                 | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Edit Properties                        | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | View Properties                        | &nbsp;  | &check; | &check; | &check; | &check;
vApp         | Change Owner                           | &nbsp;  | &nbsp;  | &nbsp;  | &nbsp;  | &check;
&nbsp;       | Copy                                   | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Create/Reconfigure                     | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Delete                                 | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Edit vApp Properties                   | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Edit VM CPU                            | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Edit VM Hard Disk                      | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Edit VM Memory                         | &nbsp;  | &nbsp;  | &check; | &check; | &check;
&nbsp;       | Edit VM Network                        | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Edit VM Properties                     | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Manage VM Password Settings            | &check; | &check; | &check; | &check; | &check;
&nbsp;       | Power Operations                       | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Sharing                                | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Snapshot Operations                    | &nbsp;  | &check; | &check; | &check; | &check;
&nbsp;       | Use Console                            | &check; | &check; | &check; | &check; | &check;

### API Only role

UKCloud have created an **API Only** role that restricts users with vCloud Director/VMware Cloud Director permissions to accessing vCloud Director/VMware Cloud Director solely via the API, with no GUI access.

> [!NOTE]
> The **API Only** role must be selected in addition to one of the vCloud Director/VMware Cloud Director roles (Admin, Catalogue Author, vApp Author, vApp User or Console Only); you should not select the API Only role on its own.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
