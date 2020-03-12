---
title: How to create an OpenShift user in the UKCloud Portal
description: Shows how to create UKCloud for OpenShift users in the UKCloud Portal so that they can benefit from two-factor authentication (2FA)
services: openshift
author: Sue Highmoor
reviewer: Matt Gough
lastreviewed: 12/03/2020

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a new user
toc_fullpath: How To/oshift-how-create-users.md
toc_mdlink: oshift-how-create-users.md
---

# How to create an OpenShift user in the UKCloud Portal

## Overview

If your cluster is using OpenShift Container Platform 3.10 or later, you can create users in the UKCloud Portal so that users need to remember only one lot of credentials and can also take advantage of two-factor authentication (2FA) that is provided via the Portal.

> [!NOTE]
> If your cluster is using an earlier version of OpenShift Container Platform, you must create users within OpenShift. For more information see the OpenShift [*Managing Users*](https://docs.openshift.com/container-platform/3.11/admin_guide/manage_users.html) documentation.

## Creating a new OpenShift user

To create a new user:

1. Log in to the UKCloud Portal

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md).

    > [!NOTE]
    > You must log in as a Portal administrator for the account that includes the OpenShift cluster.

2. If necessary, switch to the account that includes the OpenShift cluster.

3. In the navigation panel, expand **Contacts**, then select **All Contacts**.

    ![All contacts menu option in the UKCloud Portal](images/ptl-menu-all-contacts.png)

4. From the **Actions** menu, select **Add new contact**.

    ![Add new contact menu option](images/ptl-mnu-add-new-contact.png)

5. On the *New Contact* page, provide the user's name and contact information, then click **Save**.

    ![New Contact page](images/ptl-new-contact.png)

6. After you've created the user account, you must raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal to grant the user access to the OpenShift cluster.

    a. In the navigation panel, expand **Support**, then select **My Calls**.

    ![My Calls menu option in the UKCloud Portal](images/ptl_mnu-my-calls.png)

    b. Click **Go to My Calls Portal**.

    c. Click **New Service Request**.

    d. Select **Generic Service Request**.

    e. From the **UKCloud Service** list, select **UKCloud for OpenStack**.

    f. In the **Additional Details** field, enter `Add Portal users to OpenShift cluster` and provide the following information:

      - The name(s) of the user(s), and their username(s), that you want to add to the OpenShift cluster.

      - The URL of the cluster that the user(s) should be added to. If there are multiple clusters the user(s) needs adding to then specify all of the cluster URLs here and it can be completed as one task.

    g. When you're done, click **Review & Submit**.

7. When the Service Request is resolved, the identified users can log in to the OpenStack Horizon dashboard and CLI using their UKCloud Portal credentials, if the project are based in the Corsham region.

If you've enabled two-factor authentication (2FA) in the account that includes the OpenStack project, and users have set up 2FA for their user accounts, they will be prompted to provide a 2FA code when logging in.

For a project sitting in the Farnborough OpenStack region, the credentials are separate from the user's portal credentials and sent to you via SMS by UKCloud support to the phone number associated with the account in the portal.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
