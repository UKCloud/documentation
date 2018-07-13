---
title: How to grant users access to UKCloud for Microsoft Azure | UKCloud Ltd
description: Describes how to apply the appropriate Azure Stack permissions to your UKCloud for Microsoft Azure users
services: azure
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Grant users access to UKCloud for Microsoft Azure
toc_fullpath: Users/How To/azs-how-grant-access.md
toc_mdlink: azs-how-grant-access.md
---

# How to grant users access to UKCloud for Microsoft Azure

## Overview

UKCloud for Microsoft Azure provides you with new options to harness Microsoft Azure alongside other cloud platforms, including Oracle, VMware and OpenStack. This gives you the flexibility to accommodate diverse workloads within a low latency, accredited platform with native connectivity to non-cloud workloads in Crown Hosting and the networks that are vital to the public sector: from PSN Protected to N3/HSCN and RLI.

To work with UKCloud for Microsoft Azure, users must have the appropriate Azure Stack permissions. This article provides the steps for granting this access.

### Intended audience

To complete the steps in this guide you must have global administrator access to the Azure portal and Owner access to the Azure Stack portal.

## Creating a group for Azure users

Rather than granting permissions to each individual user, you should first create a group and add your Azure users to that group.

To create a group in the Azure portal:

1. Log in to the Azure portal as a global administrator:

    <https://portal.azure.com>

2. Navigate to the **Azure Active Directory**.

    > [!TIP]
    > You can find the Azure Active Directory by selecting **All services** and scrolling down to the *Security + Identity* section.

3. Select **Groups** and then **All groups**.

4. Click the **New group** option.

5. From the **Group type** list, select **Security**.

6. In the **Group name** field, enter a name for the group, for example, `AzureStackUsers`.

7. In the **Group description** field, enter a brief, but meaningful description for the group.

8. From the **Membership type** list, select **Assigned**.

    ![Group blade](images/azs-portal-add-group.png)

9. Click **Create**.

10. To add users to the group, open the group, select **Members** then click **Add members**.

## Granting Azure permissions

After setting up the user group in Azure, you need to go to the Azure Stack portal to grant the appropriate permissions to the group.

To grant Azure permissions to a group:

1. Log in to the Azure Stack portal:

    <https://portal.frn00006.azure.ukcloud.com/>

2. Navigate to **Subscriptions**.

    > [!TIP]
    > If you can't see Subscriptions in your favourites panel, click **More services** and then **Subscriptions**. You can add Subscriptions to your favourites panel by clicking the star icon.

3. Select your subscription for UKCloud for Microsoft Azure.

4. Select **Access control (IAM)**.

5. Click the **Add** option.

6. From the **Role** list, select the appropriate role that you want to assign to the group:

    - **Owner**---Members of the group have full access to all resources and can manage access to resources
    - **Contributor**---Members of the group can create and manage all resources but cannot manage access to resources
    - **Reader**---Members of the group can view everything but cannot make any changes

7. In the **Select** field, enter the name of the group you created in [Creating a group for UKCloud for Microsoft Azure users](#creating-a-group-for-azure-users).

    ![Add permissions blade](images/azs-portal_add-permissions.png)

8. Click **Save**.

## Next steps

For more information about Azure Stack, see the following Microsoft resources:

- [*Get started with Azure*](https://azure.microsoft.com/en-gb/get-started/)
- [*Azure Stack Operator Documentation*](https://docs.microsoft.com/en-us/azure/azure-stack/)

For more information about UKCloud for Microsoft Azure, see:

- [*Getting Started Guide for UKCloud for Microsoft Azure*](https://portal.ukcloud.com/support/knowledge_centre/87af49fe-ce0f-475d-8d5f-dca53f256b64)
- [*UKCloud for Microsoft Azure FAQs*](https://portal.ukcloud.com/support/knowledge_centre/de19b410-f844-419b-afd0-bb3dbab0a217)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.