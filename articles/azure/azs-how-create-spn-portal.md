---
title: How to create a service principal name for Azure Stack using the Azure portal | UKCloud Ltd
description: Learn how to create a service principal name (SPN) to manage your Azure Stack resources using the Azure portal
services: azure-stack
author: Bailey Lawson

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name
toc_sub3:
toc_sub4:
toc_title: Create a service principal name - Portal
toc_fullpath: Users/How To/Create a Service Principal Name/azs-how-create-spn-portal.md
toc_mdlink: azs-how-create-spn-portal.md
---

# How to create a service principal name for Azure Stack using the Azure portal

This document explains how to create a service principal name to manage Azure and Azure Stack using the Azure portal.

It will guide you through the creation of:

- An Azure application

- A service principal name

- Role assignment

- Permissions

## What is a service principal name?

An Azure service principal name (SPN) is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign an SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

- <p>An active Azure Subscription</p>

## Create an SPN

1. Log in to the [public Azure portal](https://portal.azure.com).

2. In the favourites panel, select **Azure Active Directory**.

    ![Select Azure Active Directory](images/azs-browser-select-aad.png)

3. In the *Azure Active Directory* blade, select **App registrations**.

    ![Select App registrations](images/azs-browser-app-registrations.png)

4. On the *App registrations* page, click the **+ New application registration** button.

5. In the *Create* blade, enter the following information:

   - **Name** - The name of the application. Should have a minimum of four characters.

   - **Application Type** - Choose **Web app / API** to add an application that represents a web application, a web API, or both. Choose **Native** to add an application that can be installed on a user's device or computer. In this instance, you can use **Web app / API**.

   - **Sign-on URL** - The URL where users can sign in and use your app. You can change this URL later. In this instance, you can use `http://localhost`.

    ![Create Service Principal](images/azs-browser-create-spn.png)

6. Click **Create**.

## Gathering SPN credentials

1. On the blade that has now opened, copy the **Application ID** and store it somewhere secure. This value is sometimes referred to as the SPN Client ID.

    ![Copy Application ID](images/azs-browser-select-SPN-App-ID.png)

2. On the same blade, click the **Settings** button.

3. In the *API Access* section of the *Settings* blade, select **Keys**.

4. In the *Keys* blade, enter a description for a key as well as an expiry duration, then click **Save**.

    ![Create SPN key](images/azs-browser-add-SPN-key.png)

5. Copy the displayed value for the key and store it somewhere secure. This value is referred to as the SPN Client Secret.

## Configure role-based access control for the SPN on Azure Stack

1. Log in to the UKCloud Azure Stack portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. Navigate to the resource you want to give the SPN access to. In this example we are adding the SPN to the subscription resource to give it permission to all resources.

   1. View your subscription by clicking **All services** in the favourites panel, then selecting **Subscriptions** under the *General* section.

   2. Select your subscription.

   3. On your subscription's blade, select **Access Control (IAM)**.

3. On the *Access Control (IAM)* blade, click the **+ Add** button.

    ![Add SPN to RBAC](images/azs-browser-add-RBAC-user.png)

4. Select the role you want to add your SPN to.

5. Enter the name of the SPN in the **Select** field, select the SPN when it appears then click **Save**

    ![Add SPN to role](images/azs-browser-add-SPN-role.png)

The SPN will now have the appropriate permissions assigned to it and is ready for use.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
