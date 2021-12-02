---
title: How to create a new user in the UKCloud Portal
description: Shows how to create users in the UKCloud Portal
services: portal
author: shighmoor
reviewer: shighmoor
lastreviewed: 09/04/2021

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a new user
toc_fullpath: How To/ptl-how-create-users.md
toc_mdlink: ptl-how-create-users.md
---

# How to create a new user in the UKCloud Portal

## Overview

You can create users in the UKCloud Portal to enable them to work with UKCloud services.

### Intended audience

To create Portal users, you must be a Portal administrator.

## Creating a new user

To create a new user:

1. [*Log in to the UKCloud Portal*](ptl-gs.md#logging-in-to-the-ukcloud-portal) as an administrator.

2. If necessary, [*switch to the account*](ptl-how-switch-account.md) that creates the services you want the user to be able to access.

3. In the navigation panel, expand **Contacts**, then select **All Contacts**.

    ![All contacts menu option in the UKCloud Portal](images/ptl-mnu-all-contacts.png)

4. From the **Actions** menu, select **Add new contact**.

    ![Add new contact menu option](images/ptl-mnu-add-new-contact.png)

5. On the **New Contact** tab, provide the user's name and contact information, then click **Save**.

    ![New Contact page](images/ptl-new-contact.png)

    The email address that you provide is used to identify the new user when they log in to the Portal, and also to contact them in various situations. It's also used to send a password reset code if the user requests to reset a forgotten password, but the user can change this to something different if they want to.

6. After you've created the user account, you can grant the user access to the different services available in the account. This process varies depending on the service:

    - [*How to manage My Calls users*](ptl-how-manage-my-calls.md)

    - [*How to manage permissions for VMware Cloud Director*](../vmware/vmw-how-manage-vcd-permissions.md)

    - [*How to manage UKCloud for OpenStack accounts in the UKCloud Portal*](../openstack/ostack-how-manage-accounts-portal.md)

    - [*How to manage OpenShift access in the UKCloud Portal*](../openshift/oshift-how-manage-user-access.md)

    - [*Portal permissions*](ptl-ref-overview-permissions.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
