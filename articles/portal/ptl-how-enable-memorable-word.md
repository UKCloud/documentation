---
title: How to enable memorable word authentication | UKCloud Ltd
description: Describes how to enable an additional level of authentication through a memorable word
services: portal
author: Sue Highmoor
reviewer: 
lastreviewed: 07/11/2019

toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Enable memorable word authentication
toc_fullpath: Reference/ptl-how-enable-memorable-word.md
toc_mdlink: ptl-how-enable-memorable-word.md
---

# How to enable memorable word authentication

## Overview

The UKCloud Portal login process offers an additional level of authentication through a memorable word. If you enable this feature, when users login to the Portal, after entering their password they are also prompted for a random combination of letters from their memorable word.

## Enabling memorable word authentication

To enable memorable word authentication:

1. Log in to the UKCloud Portal as an administrator

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](ptl-gs.md).

2. If necessary, switch to the account for which you want to change the security settings.

3. In the navigation panel, select **Settings**.

    ![Settings menu option in the UKCloud Portal](images/ptl-mnu-settings.png)

4. On the *Settings* page, select the **Security Settings** tab.

    ![Security Settings tab of the Settings page](images/ptl-settings-tab-security.png)

5. Click **Memorable word authentication** to expand the section.

6. Select **Enable memorable word authentication**.

    ![Enable memorable word authentication security setting](images/ptl-security-memorable-word-enable.png)

7. When you're done, click **Save**.

8. To disable memorable word authentication, deselect the **Enable memorable word** check box.

## Enabling memorable word on account switch

You can extend your use of the memorable word feature to also prompt users for letters from their memorable word when they switch to a different account within the Portal.

1. Select the **Prompt for memorable word check on account switch** check box.

    ![Enable memorable word on account switch security setting](images/ptl-security-memorable-word-switch.png)

    > [!NOTE]
    > If you cannot see the **Prompt for memorable word check on account switch** check box, this means that you have not yet enabled memorable word authentication for the account (see [*Enabling memorable word authentication*](#enabling-memorable-word-authentication)).

2. When you're done, click **Save**.

3. To disable memorable word authentication on account switch, deselect the **Prompt for memorable word check on account switch** check box.

## Excluding users from memorable word authentication

You can disable memorable word authentication for specific users if required.

1. In the *Excluded users* section, click **Add user**.

2. Enter the email address of the user you want to exclude from memorable word authentication.

    > [!TIP]
    > As soon as you enter a few characters, you'll be presented with a list of users to select from.

    ![Excluding users from memorable word authentication](images/ptl-security-memorable-word-exclude.png)

3. Add more users, as required and when you're done, click **Save**.

4. To remove a user from the excluded users list, click **Remove** next to their email address.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
