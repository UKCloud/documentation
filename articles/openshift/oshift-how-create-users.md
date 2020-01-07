---
title: How to create new UKCloud for OpenShift users in the UKCloud Portal | UKCloud Ltd
description: Shows how to create UKCloud for OpenShift users in the UKCloud Portal so that they can benefit from two-factor authentication (2FA)
services: openshift
author: Sue Highmoor
reviewer:
lastreviewed: 07/01/2020

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create new users
toc_fullpath: How To/oshift-how-create-users.md
toc_mdlink: oshift-how-create-users.md
---

# How to create new UKCloud for OpenShift users in the UKCloud Portal

## Overview

If your cluster is using OpenShift Container Platform 3.10 or later, you can create users in the UKCloud Portal so that users need to remember only one lot of credentials and can also take advantage of two-factor authentication (2FA) that is provided via the Portal.

> [!NOTE]
> If your cluster is using an earlier version of OpenShift Container Platform, you must create users within OpenShift. For more information see the OpenShift [*Managing Users*](https://docs.openshift.com/container-platform/3.9/admin_guide/manage_users.html) documentation.

## Creating a new OpenShift user

To create a new user:

1. Log in to the UKCloud Portal and create a new Portal user.

    For more detailed instructions, see the [*How to create a new user in the UKCloud Portal*](../portal/ptl-how-create-users.md).

    > [!NOTE]
    > You must log in to the Portal as an administrator for the account that includes the OpenStack cluster.


## Adding a user to an OpenShift cluster

> [!NOTE]
> To perform the following steps, you must be an administrator of the SSO group for the OpenStack cluster for which you are granting access. The initial account created when the cluster was deployed will be an SSO administrator. If you want other users to be assigned this permission, raise a Service Request.

To add a user to an OpenShift cluster:

1. In the UKCloud Portal navigation panel, expand **Contacts**, then select **All Contacts**.

2. Locate the user and click the **Edit** button for that user.

3. On the **Edit Contact** tab, select the **OpenShift Permissions** tab.

4. Select the OpenShift cluster that you want to add the user to, then click **Save**.

    ![OpenShift Permissions tab](images/oshift-permissions.png)

   The user can now log in to the OpenShift web console and CLI for the selected cluster using their UKCloud Portal credentials.

    If you've enabled two-factor authentication (2FA) in the account that includes the OpenShift cluster and users have set up 2FA for their user accounts, they'll be prompted to provide a 2FA code when logging in to OpenShift.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
