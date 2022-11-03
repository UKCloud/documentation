---
title: How to reset two-factor authentication for a user account
description: Describes how to reset two-factor authentication (2FA) for a user account
services: portal
author: shighmoor
reviewer: shighmoor
lastreviewed: 21/04/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Reset 2FA for a user account
toc_fullpath: How To/ptl-how-reset-2fa.md
toc_mdlink: ptl-how-reset-2fa.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to reset two-factor authentication for a user account

## Overview

If two-factor authentication (2FA) is enabled for a UKCloud Portal customer account, users must use an authenticator app to generate a code to enter, as well as their user name and password, when logging in to the Portal to access the account.

If a user loses or replaces the device where their authenticator app is installed, they will be unable to generate the required code and therefore be unable to log in to the Portal. In this situation, an administrator must reset the user's 2FA so that they can set up 2FA on a different device.

### Intended audience

This article is intended for Portal administrators who need to reset a Portal user's 2FA. The administrator must have set up 2FA on their own account to be able to carry out the steps in this article.

## Resetting 2FA for a user account

1. [*Log in to the UKCloud Portal*](ptl-gs.md#logging-in-to-the-ukcloud-portal) as a Portal administrator.

2. If necessary, [*switch to the account*](ptl-how-switch-account.md) for which the user needs to reset their 2FA.

3. In the navigation panel, expand **Contacts**, then select **All Contacts**.

   ![All contacts menu option in the UKCloud Portal](images/ptl-mnu-all-contacts.png)

4. Locate the user account and click the **Reset 2FA** button.

   ![Reset 2FA button](images/ptl-contact-reset-2fa.png)

5. In the *Confirm* dialog box, click **Yes** to continue.

6. The next time the user attempts to log in, they'll be prompted to set up their 2FA again. For more information, see [*How to set up two-factor authentication for a user account*](ptl-how-setup-2fa.md).

## Related articles

- [*How to enable two-factor authentication in the UKCloud Portal*](ptl-how-enable-2fa.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
