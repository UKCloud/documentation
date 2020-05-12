---
title: How to manage UKCloud for OpenStack accounts in the UKCloud Portal
description: Shows how Portal administrators can use the UKCloud Portal to create user accounts and set access permissions for UKCloud for OpenStack
services: openstack
author: Sue Highmoor
reviewer: Ben Saunders
lastreviewed: 02/04/2020

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Manage UKCloud for OpenStack accounts in the UKCloud Portal
toc_fullpath: How To/ostack-how-manage-accounts-portal.md
toc_mdlink: ostack-how-manage-accounts-portal.md
---

# How to manage UKCloud for OpenStack accounts in the UKCloud Portal

## Overview

This article shows how UKCloud Portal administrators can use the Portal to create user accounts for UKCloud for OpenStack and set access permissions.

### Intended audience

To set OpenStack account permissions, you must be a UKCloud Portal administrator for the account that includes the OpenStack project.

## Prerequisites

To give a user access to an OpenStack project, they must have a user account in the UKCloud Portal. For detailed steps for how to create a new Portal user, see [*How to create a new user in the UKCloud Portal*](../portal/ptl-how-create-users.md).

> [!TIP]
> When creating a Portal account for an OpenStack user, you may first need to switch to the account that contains the OpenStack project.

> [!NOTE]
> After creating a new Portal user account, there may be a delay of a few minutes while the new user's information is synchronised around the system.

## Assigning and revoking OpenStack permissions

To enable a user to work with an OpenStack project you must assign them permission to access the project. You can also revoke permission to remove a user's OpenStack access.

To assign or revoke OpenStack permissions:

1. Log in to the UKCloud Portal

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal**](../portal/ptl-gs.md).

    > [!NOTE]
    > You must log in as a Portal administrator for the account that includes the OpenStack project.

2. If necessary, switch to the account that includes the OpenStack project.

3. In the Portal navigation panel, expand **Contacts** option and select **All Contacts**.

    ![All Contacts menu option in UKCloud Portal](images/ptl-menu-all-contacts.png)

4. On the *Contacts* page, use the **Search** field to find the user to whom you want to assign or revoke OpenStack permissions and then click the **Edit** button.

    ![Edit button for Portal contact](images/ptl-contacts-btn-edit.png)

5. On the *Edit contact* page, select the **OpenStack Permissions** tab.

    ![Permissions tab for Portal contact](images/ptl-contacts-tab-openstack-permissions.png)

6. You'll see a list of the OpenStack projects within your organisation. There's a separate entry for each region a project is in.

7. Select the check box for the project and region to which you want to grant the user access.
    Deselect the check box to revoke access permissions.

    ![Check boxes for granting permissions to an OpenStack project in a certain region](images/ostack-portal-sso-permissions.png)

8. When you're done, click the **Save** button.

## Accessing OpenStack from the UKCloud Portal

After your OpenStack account has been set up, you'll see a **OpenStack Cloud** option in the Portal navigation panel. This option links through to the OpenStack Horizon dashboard.

To access OpenStack:

1. In the UKCloud Portal, if necessary, switch to the account that includes the OpenStack project.

2. In the Portal navigation panel, select **OpenStack Cloud**.

    ![OpenStack menu option in UKCloud Portal](images/ostack-portal-menu-openstack.png)

3. From the dropdown list, select the OpenStack region that contains the project you want to access then click **Go**.

    ![Select OpenStack region](images/ostack-portal-select-region.png)

4. On the OpenStack Horizon *Log in* page, log in using either:

    - **Keystone Credentials** if your account has not been migrated to SSO

    - **UKCloud SSO** if your account has been migrated to SSO

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for OpenStack*](ostack-gs.md).

5. You can now work with your OpenStack projects within the OpenStack Horizon dashboard.

## Removing an OpenStack account via the UKCloud Portal

Removing a user's account in the Portal will also remove their access to OpenStack.

1. In the UKCloud Portal, if necessary, switch to the account that includes the OpenStack project.

2. In the Portal navigation panel, expand **Contacts** option and select **All Contacts**.

    ![All Contacts menu option in UKCloud Portal](images/ptl-menu-all-contacts.png)

3. On the *Contacts* page, use the **Search** field to locate the user and click the **Remove** button.

    ![Remove button for Portal contact](images/ptl-contacts-btn-remove.png)

## Next steps

For more information about UKCloud for OpenStack, see the following articles in the Knowledge Centre:

- [*Getting Started Guide for UKCloud for OpenStack*](ostack-gs.md)

- [*UKCloud for OpenStack FAQs*](ostack-faq.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
