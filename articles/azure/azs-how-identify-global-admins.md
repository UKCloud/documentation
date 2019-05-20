---
title: How to identify your Azure global administrators | UKCloud Ltd
description: How to identify your Azure global administrators
services: azure-stack
author: Paul Brown
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Identify your Azure global administrators
toc_fullpath: Users/How To/azs-how-identify-global-admins.md
toc_mdlink: azs-how-identify-global-admins.md
---

# How to identify your Microsoft Azure global administrators

## Overview

The global administrator has access to all administrative features. By default, the person who signs up for an Azure subscription is assigned the global administrator role for the directory. Only global administrators can assign other administrator roles.

### Intended audience

To complete the steps in this guide, you must have appropriate access to the public Azure portal.

## Identifying the global administrators

1. Log in to the [public Azure portal](https://portal.azure.com).

2. In the left hand side portal menu select **Azure Active Directory**.

    ![Azure Active Directory in favourites panel](images/azs-ad.png)

3. In the *Manage* section, select **Roles and Administrators**.

    ![Roles and Administrators in New blade](images/azs-roles-admins.png)

4. In the *Role* blade, scroll down and select **Global administrator**.

    ![Global administrator group in role blade](images/azs-global-admin-group.png)

5. The *Global administrator - members* blade will be displayed listing the members of that group.

## Next steps

For more information about UKCloud for Microsoft Azure, see:

- [*Understanding UKCloud for Microsoft Azure*](azs-ref-overview.md)

- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)

- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

## Feedback

If you have any comments on this article, or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
