---
title: How to manage VMware Cloud Director permissions in the UKCloud Portal
description: Shows how to manage and adjust permissions and roles for VMware Cloud Director within the UKCloud Portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 14/12/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Manage VMware Cloud Director permissions
toc_fullpath: How To/vmw-how-manage-vcd-permissions.md
toc_mdlink: vmw-how-manage-vcd-permissions.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to manage VMware Cloud Director permissions in the UKCloud Portal

## Overview

In the UKCloud Portal, you can control the access that a Portal user has to the different virtual data centres (VDCs) in your organisation.

### Intended audience

To complete the steps in this article you must be a Portal administrator.

## User roles and access rights

For a list of the access rights each user role has, see the [Rights in Predefined Global Tenant Roles]( 
https://docs.vmware.com/en/VMware-Cloud-Director/10.0/com.vmware.vcloud.tenantportal.doc/GUID-AE42A8F6-868C-4FC0-B224-87CA0F3D6350.html#GUID-AE42A8F6-868C-4FC0-B224-87CA0F3D6350) VMware article.

### API Only role

UKCloud for VMware includes an **API Only** role that restricts users with VMware Cloud Director permissions to accessing VMware Cloud Director solely via the API, with no tenant portal access.

> [!NOTE]
> If you select the **API Only** role, you must also select one of the VMware Cloud Director roles (Admin, Catalogue Author, vApp Author, vApp User or Console Only). You should not select the **API Only** role on its own.

## Configuring permissions

To configure permissions for a Portal user:

1. [*Log in to the UKCloud Portal*](../portal/ptl-gs.md#logging-in-to-the-ukcloud-portal) as an administrator.

2. In the Portal navigation panel, expand the **Contacts** option and select **All Contacts**.

   ![All Contacts menu option in UKCloud Portal](images/ptl-menu-all-contacts.png)

3. On the *Contacts* page, locate the account of the user to whom you want to assign or revoke permissions and then click the **Edit** button.

   ![Edit button for Portal contact](images/ptl-contacts-btn-edit.png)

4. On the *Edit contact* page, select the **Permissions** tab.

   ![Permissions tab for Portal contact](images/ptl-contacts-tab-permissions.png)

5. In the *Permissions for UKCloud for VMware* section, you'll see a list of VDCs and the associated user roles available for the Portal user.

   Select the role you want to assign to the user, then scroll to the bottom of the page and click **Save**.

   ![Permissions for UKCloud for VMware](images/ptl-contacts-permissions-vmw.png)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
