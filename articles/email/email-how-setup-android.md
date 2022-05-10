---
title: How to set up Email and Collaboration on an Android device
description: Contains an overview of mobility options for Zimbra Collaboration Suite (ZCS), as well as information on how to set up Zimbra Mobile on Android devices
services: email
author: shighmoor
reviewer: mperry
lastreviewed: 07/04/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Set up Email and Collaboration on an Android device
toc_fullpath: How To/email-how-setup-android.md
toc_mdlink: email-how-setup-android.md
---

# How to set up Email and Collaboration on an Android device

> [!IMPORTANT]
> Email and Collaboration has been retired from sale by UKCloud. We will continue to support all existing customers who are using this service, however, we are no longer providing this service for new workloads. This article provides existing Email and Collaboration customers with access to support documentation and we will continue to update it as required. For new requests, contact your Account Manager or Service Delivery Manager.

> [!IMPORTANT]
> PSN Email Relay provided by Vodafone is end-of-life as of 31 March 2021. After this date, anyone using the PSN will not be able to use email over this network, including all email services from UKCloud on the PSN. Internet-connected email services from UKCloud will continue to function after this date.

## Overview

UKCloud's Email and Collaboration as a Service includes the option of accessing emails, calendars and tasks via most smart phone devices. The underlying platform for this service is provided by Zimbra, and this guide contains an overview of mobility options for Zimbra Collaboration Suite (ZCS), as well as information on how to set up Zimbra Mobile on Android devices.

> [!NOTE]
> The information supplied is a general guide for the majority of Android mobile devices; some devices may require an alternative or modified set up process.

If you have an iPhone or iPad, see [*How to set up Email and Collaboration on an iPhone or iPad*](email-how-setup-iphone.md).

## Before you begin

Android-based smart phones can natively synchronise email, contacts and calendars to Zimbra accounts. The two prerequisites to configure this are:

- The Zimbra email system used by your organisation or service provider is a paid Network Edition license (ask your administrator if you're not sure)

- Your administrator has enabled mobility on your account

Assuming these two requirements are met, you can configure Zimbra just like you would a Microsoft Exchange account on the device (this is the name used for any ActiveSync‑based service).

To complete the set up you will need to know the following:

- **Email** - This is your company email address

- **Password** - This is your Zimbra password (the same one used for the Zimbra Web Client)

You may also need to know:

- **Server** - The Server FQDN or IP (best practice is to always use a valid FQDN, such as `mail.example.com`)

- **Security** - If you want to use SSL

- **Port** - If your server does not use the default port (443)

## Installation and setup

1. Access your device's **Settings**.

2. Under *Users & Accounts*, scroll down and tap **Add account**.

3. Tap **Email**.

4. Enter your **Email address** and **Password** to add an account, then tap **Sign In**

5. Select **Exchange** from the type of account

    > [!NOTE]
    > ZCS 7.x does not support auto-discovery. If you want to perform auto-discovery, you need to enter the server name on the Server Settings screen.

6. Complete the following fields in the Server Settings screen and then tap **Next**

    - **Username** - Your full email address (For example, `jane@example.com`)

    - **Password** - Your email password

    - **Server** - `mail.example.com` (same URL you use for Zimbra webmail)

    - **Security type** and **Port** - Ask your administrator

7. Configure your desired email account options and then tap **Next**.

8. Your account set up is complete. You can optionally give this account a name. Click **Done**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
