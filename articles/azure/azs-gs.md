---
title: Getting Started Guide for UKCloud for Microsoft Azure | UKCloud Ltd
description: Provides information to get up and running with UKCloud for Microsoft Azure
services: azure
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: Getting Started
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure
toc_fullpath: Users/Getting Started/azs-gs.md
toc_mdlink: azs-gs.md
---

# Getting Started Guide for UKCloud for Microsoft Azure

## Overview

UKCloud for Microsoft Azure provides you with new options to harness Microsoft Azure alongside other cloud platforms, including Oracle, VMware and OpenStack. This gives you the flexibility to accommodate diverse workloads within a low latency, accredited platform with native connectivity to non-cloud workloads in Crown Hosting and the networks that are vital to the public sector: from PSN Protected to HSCN and RLI.

This Getting Started Guide provides you with the information you need to get up and running with UKCloud for Microsoft Azure.

### Intended audience

To complete the steps in this guide you must have access to the Azure Stack portal.

## Introduction to UKCloud for Microsoft Azure

At UKCloud, we understand that there is no "one cloud fits all" solution. There are usually many factors to consider when looking to move your applications to the cloud, including existing technology investment and skills. Additionally, while some applications can easily move to the public cloud, there are others that for various reasons (latency, connectivity, security, regulation) must run on-premises. 

Microsoft Azure Stack is an extension of Azure that provides on-premises Infrastructure-as-a-Service (IaaS) and Platform-as-a-Service (PaaS), enabling you to leverage the benefits of cloud in an on-premises environment. UKCloud for Microsoft Azure brings the advantages of the Microsoft Cloud platform to our assured UK-sovereign platform, helping you realise the benefits that a true hybrid cloud environment has to offer, while balancing the right amount of flexibility and control. 

With UKCloud for Microsoft Azure you can:

- Leverage existing Azure investment, knowledge and skills
- Use Azure Stack alongside other technologies, for example, VMware, OpenStack or Oracle
- Connect to government community networks, including PSN, HSCN, Janet and RLI
- Meet specific compliance directives, such as data sovereignty or security

The two main delivery models provided by UKCloud for Microsoft Azure are:

- A multi-tenant IaaS and PaaS platform available in both UKCloud security domains (Assured OFFICAL and Elevated OFFICIAL), connected to government community networks with UKCloud's award-winning support
- Private cloud deployment of UKCloud for Microsoft Azure dedicated to a single customer

## Before you begin

You should have received your UKCloud for Microsoft Azure login credentials from your Azure administrator. If you're the administrator, your Customer Success Manager (CSM) will have provided you with your login credentials.

## Logging in to the Microsoft Azure Stack portal

To manage UKCloud for Microsoft Azure, you need to log in to the Azure Stack portal. The portal provides access to all your Azure resources.

To log in to the Azure Stack portal:

1. In your browser, go to the following URL:

    <https://portal.frn00006.azure.ukcloud.com/>

2. In the login dialog box, enter the email address for your account and click **Next**, or pick your account.

3. Enter your password and click **Sign in**.

4. After you log in, you'll see the main Azure Stack portal home page.

    ![Azure Stack portal home page](images/azs-portal-home.png)

    On this page, you'll see:

    A.  **Favourites**---quickly access your most used resources (see [Customising your favourites](#customising-your-favourites))

    B.  **Dashboard**---access information about your Azure resources (see [Customising and adding dashboards](#customising-and-adding-dashboards))

    C.  **Settings**---change your portal settings, for example, theme and language

    D.  **Notifications**---view useful alerts about your Azure environment

    E.  **New**---create new resources, such as virtual machines (see [*How to create a virtual machine from the Azure Marketplace*](https://portal.ukcloud.com/support/knowledge_centre/fe999430-c1e0-47e0-a503-bdc6c8c0de9b))

## Understanding subscriptions, offers and plans

Your UKCloud for Microsoft Azure environment is provisioned with a subscription that determines the services you have access to, and your quotas for those services.

- A **subscription** is a mechanism for signing up to an *offer*.
- An **offer** is a collection of one or more *plans*.
- A **plan** is a collection of one or more *services*, with associated *quotas*.

## Customising your favourites

In the Azure Stack portal, down the left-hand side, you can see a list of your favourite resources. You can customise this list to include the resources that you access most frequently.

1. In the favourites list, click the **More services** link.

    ![More services link](images/azs-portal-more-services.png)

2. In the list of resources available to your subscription, resources that are included in your favourites list are indicated by a yellow star icon.

    ![Favourite resources](images/azs-portal-favourite-service-selected.png)

    > [!TIP]
    > You can use the **Filter** field to filter the list of resources. You can order the list **By category** or **By name**.

3. Click the grey star icon next to the resource that you want to add to your list of favourites.

    ![Select favourite](images/azs-portal-favourite-service.png)

    > [!TIP]
    > To remove a resource from your favourites list, click the yellow star icon next to the service.

4. When you're done close the list of resources.

    ![Close list of resources](images/azs-portal-close-services.png)

5. You can now see the newly added resource in your favourites list.

    ![New resource in favourites list](images/azs-portal-new-favourite-service.png)

6. You can reorder the resources in your favourites list by dragging and dropping them.

    ![Drag and drop favourites](images/azs-portal-reorder-services.png)

## Customising and adding dashboards

An Azure Stack dashboard consists of tiles that provide access to the resources available to your subscription. You can create multiple dashboards to provide different views of your resources.

To customise a dashboard:

1. In the Azure Stack portal, select the dashboard that you want to customise.

    ![Select dashboard](images/azs-portal-select-dashboard.png)

2. Click the **Edit dashboard** option.

    ![Edit dashboard option](images/azs-portal-edit-dashboard-btn.png)

3. Drag the tiles you want to add to the dashboard from the *Tile Gallery* onto the dashboard.

    ![Drag tiles onto dashboard](images/azs-portal-dashboard-add-tile.png)

4. To change the layout of a tile on the dashboard, hover your mouse over the tile, click the **Context menu** icon and select the new layout.

    ![Context menu icon](images/azs-portal-dashboard-tile-layout.png)

5. Drag tiles to rearrange them on the dashboard.

6. To delete a tile from the dashboard, hover your mouse over the tile and click the **Unpin** icon.

    ![Unpin icon](images/azs-portal-dashboard-tile-unpin.png)

7. When you're done, click **Done customizing**.

    ![Done customizing button](images/azs-portal-dashboard-done.png)

8. To create a new dashboard, click the **New dashboard** option.

    ![New dashboard option](images/azs-portal-new-dashboard-btn.png)

9. Enter a name for the dashboard.

    ![Dashboard name](images/azs-portal-dashboard-name.png)

10. Add and arrange tiles as described above and when you're done, click **Done customizing**.

## Granting users access to UKCloud for Microsoft Azure

To work with UKCloud for Microsoft Azure, users must have the appropriate Azure Stack permissions. We provide the following three groups to get you started:

- **AzureStackOperators** - Members of this group have Owner permissions and have full access to all resources and can manage access to resources
- **AzureStackUsers** - Members of this group have Contributor permissions and can create and manage all resources but cannot manage access to resources
- **AzureStackReadOnly** - Members of this group have Reader permissions and can view everything but cannot be any changes

To grant a user access to UKCloud for Microsoft Azure:

1. Log in to the Azure portal as a global administrator:

    <https://portal.azure.com>

2. Navigate to the **Azure Active Directory**.

    > [!TIP]
    > You can find the Azure Active Directory by selecting **All services** and scrolling down to the *Security + Identity* section.

3. Select **Groups** and then **All groups**.

4. In the **Name** field, enter `azurestack`.

5. Select the group to which you want to add the user depending on the level of permissions you want the user to have.

6. Select **Members** then click **Add members**.

7. Select the user that you want to add to the group and click **Select**.

## Configuring the Azure CLI

Azure provides a command line interface (CLI) that you can use to manage your Azure resources. For example, you can use the Azure CLI to create virtual machines and deploy Azure Resource Manager templates.

For more information, including steps for setting up the Azure CLI with UKCloud for Microsoft Azure, see:

- [Configure AzureCLI Environment](azs-how-configure-cli.md)

## Configuring the Azure Stack PowerShell client

You can use PowerShell to manage your Azure resources. For example, you can create virtual machines and deploy Azure Resource Manager templates.

For more information, including steps and scripts for setting up Azure PowerShell with UKCloud for Microsoft Azure, see:

- [Configure PowerShell Environment](azs-how-configure-powershell-users.md)

## Next steps

In this Getting Started Guide, you've learned the basics about UKCloud for Microsoft Azure and the Azure Stack portal. For more information about UKCloud for Microsoft Azure, see the following articles in the Knowledge Centre:

- [*Understanding UKCloud for Microsoft Azure*](https://portal.ukcloud.com/support/knowledge_centre/0d8e3486-3190-458e-8166-98697c2a7161)
- [*UKCloud for Microsoft Azure FAQs*](https://portal.ukcloud.com/support/knowledge_centre/de19b410-f844-419b-afd0-bb3dbab0a217)
- [*How to create a virtual machine from the Azure Marketplace*](https://portal.ukcloud.com/support/knowledge_centre/fe999430-c1e0-47e0-a503-bdc6c8c0de9b)
- [*How to grant users access to UKCloud for Microsoft Azure*](https://portal.ukcloud.com/support/knowledge_centre/18899044-5dcd-41fa-ba64-d467d1b43605)
- [*How to use the Azure Stack API*](https://portal.ukcloud.com/support/knowledge_centre/65699e21-ac82-4bca-b777-229035cbe28b)

## Glossary

This section provides a glossary of terms specific to UKCloud for Microsoft Azure.

**Azure Active Directory**&nbsp;&nbsp;The service that provides identify management within UKCloud for Microsoft Azure.

**cloud operator**&nbsp;&nbsp;An entity that provides services, via subscriptions, on Azure Stack. UKCloud is a cloud operator.

**Microsoft Azure**&nbsp;&nbsp;Microsoft's public cloud service.

**Microsoft Azure Stack**&nbsp;&nbsp;An extension of Azure that provides cloud computing to an on-premises environment.

**resource**&nbsp;&nbsp;An object within Azure Stack, such as a virtual machine, network or storage.

**resource group**&nbsp;&nbsp;A collection of resources, services and applications.

**subscription**&nbsp;&nbsp;A mechanism for organising resources and services for tenants to consume.

**UKCloud for Microsoft Azure**&nbsp;&nbsp;A UKCloud IaaS and PaaS service that works as an extension of Microsoft's own Azure Public Cloud, delivered from our assured sovereign data centres.

**tenant**&nbsp;&nbsp;An entity that consumes services from cloud operators in Azure Stack.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.