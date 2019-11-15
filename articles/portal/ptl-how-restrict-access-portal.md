---
title: How to restrict access to the UKCloud Portal | UKCloud Ltd
description: Shows how to create a whitelist of IP addresses to restrict access to the UKCloud Portal
services: portal
author: Sue Highmoor
reviewer:
lastreviewed: 15/11/2019

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Restrict access to the Portal
toc_fullpath: How To/ptl-how-restrict-access-portal.md
toc_mdlink: ptl-how-restrict-access-portal.md
---

# How to restrict access to the UKCloud Portal

## Overview

You can restrict access to the UKCloud Portal by creating a whitelist of acceptable IP addresses. This helps to prevent access to the Portal from unauthorised sources as users will only be able to log in to the Portal if their request originates from an IP address on the whitelist.

> [!NOTE]
> When specifying IP addresses, you must use individual IP addresses. You cannot restrict access to groups of IP addresses, for example by range or subnet.

## Restricting access to the Portal

To restrict access to the Portal:

1. Log in to the UKCloud Portal as an administrator.

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](ptl-gs.md).

2. If necessary, switch to the account for which you want to change the security settings.

3. In the navigation panel, select **Settings**.

    ![Settings menu option in the UKCloud Portal](images/ptl-mnu-settings.png)

4. On the *Settings* page, select the **Security Settings** tab.

    ![Security Settings tab of the Settings page](images/ptl-settings-tab-security.png)

5. Click **Portal access restriction by IP address** to expand the section.

6. Select **Enable Portal IP address access restriction**.

7. To add an IP address to the whitelist, click **Add IP** in the *Account wide* section and enter the IP addresses that you want to whitelist.

    ![Account-wide IP address whitelist security setting for the UKCloud Portal](images/ptl-settings-ip-portal-account.png)

8. To whitelist an IP address for a specific user, in addition to the account-wide IP addresses, click **Add IP** in the *Individual users* section, enter the email address for the user and the IP addresses that you want to whitelist.

    ![Individual user IP address whitelist security setting for the UKCloud Portal](images/ptl-settings-ip-portal-user.png)

    > [!NOTE]
    > When specifying IP addresses, you must use individual IP addresses. You cannot restrict access to groups of IP addresses, for example by range or subnet.

9. When you're done, click **Save**.

## Next steps

You can also restrict access to the vCloud API. For more information, see [*How to restrict access to the vCloud API*](ptl-how-restrict-access-vcloud-api.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
