---
title: Getting Started Guide for the UKCloud Portal | UKCloud Ltd
description: Provides information to get up and running with the UKCloud Portal
services: portal
author: Sue Highmoor

toc_rootlink: Getting Started
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud Portal
toc_fullpath: Getting Started Guide/ptl-gs.md
toc_mdlink: ptl-gs.md
---

# Getting Started Guide for the UKCloud Portal

## Overview

The UKCloud Portal is the gateway to your UKCloud services. In the Portal, you can:

- View information about your UKCloud services, including UKCloud for VMware, UKCloud for OpenStack and Cloud Storage
- View notifications relating to the UKCloud platform
- Create compute services, virtual data centres (VDCs) and edge gateways within your UKCloud for VMware environment
- Access vCloud Director to work with your UKCloud for VMware environment, for example to create and manage virtual machines (VMs), build VDC networks or configure your firewall
- Raise and monitor support tickets
- Access Knowledge Centre articles to help you understand and work with the UKCloud platform

This Getting Started Guide provides an overview of the functionality available within the Portal.

### Intended audience

This Getting Started Guide is intended for any user with access to the Portal.

> [!NOTE]
> The options you can see and tasks you can perform within the Portal depend on the permissions you've been granted by your Portal administrator.

## Before you begin

You should have received your Portal login credentials from your Portal administrator. If you're the Portal administrator, your Customer Success Manager (CSM) will have provided you with your login credentials.

The Portal works with Google Chrome, Microsoft Internet Explorer and Mozilla Firefox. However, if you'll be using vCloud Director, we recommend that you use the Firefox ESR browser as this is also supported by the Web Console for the version of vCloud Director used by UKCloud for VMware.

**More information!** [*Browser requirements for services on the UKCloud platform*](https://portal.ukcloud.com/support/knowledge_centre/0887a898-826b-4605-9c2e-dcde0da06c00)

## Logging in to the UKCloud Portal

The first thing you need to do is log in.

1. Go to the appropriate URL, depending on the security domain in which your service is located:

    - **Assured OFFICIAL:** <https://portal.ukcloud.com>
    - **Elevated OFFICIAL:** <https://portal.ukcloud.gsi.gov.uk>

2. On the *Log in* page, enter your credentials and click **Sign in**.

    ![UKCloud Portal Log in page](images/ptl-login.png)

    If this is the first time you've logged in, use the temporary password you were given by your Portal administrator or CSM. You'll be prompted to change this temporary password.

    > [!TIP]
    > If you've forgotten your password, click the **Forgotten password?** link to request a password reset.

3. If your Portal administrator has enabled memorable word authentication or Google Two Factor Authentication (2FA), you'll be prompted for the second step of the authentication process.

    For example, for memorable word authentication, you'll be prompted to enter three randomly‑selected letters from your memorable word. (If this is the first time you've logged in, you'll be prompted to create a memorable word.)

    ![Memorable word dialog box](images/ptl-memorable-word.png)

    > [!NOTE]
    > If you incorrectly enter your password three times, you'll be prompted to enter a captcha code until you successfully log in. If you incorrectly enter the captcha code or your password another three times, a seventh unsuccessful login attempt will result in your account being locked. You'll need to contact your Portal administrator to unlock your account.

## Getting to know the UKCloud Portal

After you log in, you'll see the Portal *Home* page. A Portal page is made up of three main areas:

- Toolbar
- Navigation panel
- Content area

![UKCloud Portal home page](images/ptl-home-page.png)

### Toolbar

Each user account is associated with one or more customer accounts. Within the Portal, you can work within any customer account to which you have access. From the toolbar, you can switch between different customer accounts.

![Account menu](images/ptl-mnu-customer-account.png)

> [!NOTE]
> When you switch between accounts, you may be prompted to enter letters from your memorable word again if this additional security measure has been enabled by your Portal administrator.

In the toolbar, you can also click your username to access the following options:

![User menu](images/ptl-mnu-user-account.png)

- **Notifications** --- List all Portal notifications. Unread notifications are displayed in bold. Click the **View** button next to a notification to see more details. When you've finished reading a notification, select the **Notifications** tab to return to the list. If you want to quickly mark all your unread notifications as read, click the **Mark all as Read** button at the top of the page.

    > [!TIP]
    > The number next to the **Notifications** menu option (and next to your username in the toolbar) shows how many unread notifications you have.

- **Update contact details** --- Change your name, email address and telephone numbers. You can also opt to have Portal notifications sent to your email address.

- **Change Password** --- Change your password or memorable word. We recommend that you change your password at least every 90 days (see [*How to reset your UKCloud Portal password or     memorable word*](https://portal.ukcloud.com/support/knowledge_centre/d2a8e8aa-2eb3-4fbb-a2b7-abde91f68cb7)).

    > [!NOTE]
    > Your Portal administrator may have implemented a password expiration period; in which case, you'll be prompted to change your password after the specified number of days.

- **API** --- View the information you need to use the vCloud API (see [*How to access vCloud Director through the vCloud API*](https://portal.ukcloud.com/support/knowledge_centre/0e0865ef-b6c5-4664-ab85-2d9f5cfe54c0)).

- **Feedback** --- Send an email to UKCloud with feedback on the Portal or any other aspect of your UKCloud experience.

- **Log out** --- Log out of the Portal.

> [!TIP]
> Click the UKCloud logo in the toolbar on any page to return to the *Home* page. If you hover your mouse over the UKCloud logo, a tooltip displays the current Portal version.

### Navigation panel

<!-- Need to confirm navigation panel options for new product names -->

The Portal navigation panel provides access to all the functionality available in the Portal.

![UKCloud Portal navigation panel](images/ptl-navigation-panel.png)

> [!NOTE]
> The options you can see in the navigation panel depend on your Portal permissions and the services associated with your account.

- **Home** --- Return to the Portal *Home* page. You can also return to the *Home* page by clicking the UKCloud icon in the toolbar.

- **Reports** --- Provides access to the following reports:

  - **Login History** --- Lists everyone who has logged in to the Portal over the last 30 days (see [*Viewing login information*](https://portal.ukcloud.com/support/knowledge_centre/4f0bc496-c4f3-4748-8c38-97faf6530518)).

  - **ECC Build History** --- Lists recent compute service, VDC and edge gateway builds initiated from the Portal and the Portal API (see [*How to build your Enterprise Compute Cloud estate using the UKCloud Portal*](https://portal.ukcloud.com/support/knowledge_centre/99f82d51-11f1-4c76-8cdb-3048067ae0f3)).

  - **Service Reports** --- Lists all the service reports for the account. Click a link to download a PDF file of a specific report. Service reports provide information about the your VMs, support tickets and service availability.

  - **Backup Summary** --- Provides access to summary reports of Snapshot Protection status for each of the account's compute services (see [*How to manage Snapshot Protection for your VMs*](https://portal.ukcloud.com/support/knowledge_centre/4e446d25-ef40-41d8-86b0-85bdda4ed614)).

- **Settings** --- Change various Portal settings, including key contacts, password expiration period, two factor authentication and IP address restrictions (Portal administrators only).

- **Contacts** --- Lists the user accounts with access to the current customer account. You can view a list of all user accounts (**All Contacts**) or just those with administration permissions (**Admin Contacts**). Portal administrators can create new users, reset other users' passwords and change other users' Portal permissions (see [*An Overview of Portal Permissions*](https://portal.ukcloud.com/support/knowledge_centre/4ab95e72-1089-4a1f-8e45-f1fec8a6e30b)).

- **VMware** --- Provides access to UKCloud for VMware compute services. Expand this option and then select the compute service with which you want to work (see [*Getting Started Guide for Enterprise Compute Cloud*](https://portal.ukcloud.com/support/knowledge_centre/e9e2a0a4-70ba-4ace-a8bf-913d052d7003)).

- **Oracle** --- Provides access to the OEM Cloud Control console for UKCloud for Oracle Software (see [*Getting Started Guide for Enterprise Compute Cloud for Oracle*](https://portal.ukcloud.com/support/knowledge_centre/69bdb68c-b4e4-41bb-9116-9dc1fbcacf03)).

- **OpenStack** --- Provides access to the OpenStack Horizon dashboard for UKCloud for OpenStack (see [*Getting Started Guide for Cloud Native Infrastructure*](https://portal.ukcloud.com/support/knowledge_centre/220c3d5d-ce57-4ba1-95df-46c9f2922a64)).

- **OpenShift** --- Provides information about UKCloud for OpenShift (see [*Getting Started Guide for Cloud Native Application Platform*](https://portal.ukcloud.com/support/knowledge_centre/06634d6c-dfc4-4be6-a15a-b7dc0380207f)).

- **Microsoft Azure** --- Provides access to the Azure Stack portal for UKCloud for Microsoft Azure (see [*Getting Started Guide for UKCloud for Microsoft Azure*](https://portal.ukcloud.com/support/knowledge_centre/87af49fe-ce0f-475d-8d5f-dca53f256b64)).

- **Cloud Storage** --- View information about your Cloud Storage service, including secret keys and storage consumption (see [*Getting Started Guide for Cloud Storage*](https://portal.ukcloud.com/support/knowledge_centre/e07b908f-e93e-42f8-b833-aff391511862)).

- **Monitoring** --- Provides access to:

  - The Cyber Security News page where you can view general threat briefs and security news (see [*Understanding the Cyber Security News page*](https://portal.ukcloud.com/support/knowledge_centre/feb59292-1852-4c3e-b771-b53fba5e0112)).
  - My Security Events, which displays security events specific to your environment (see [*Understanding UKCloud's Protective Monitoring Portal showback*](https://portal.ukcloud.com/support/knowledge_centre/d6bf8b7e-1497-4d7b-b4f4-f3c8c1fbe089))

- **Support** --- Provides access to:

  - The Knowledge Centre
  - My Calls (see [*How to use My Calls in the UKCloud Portal*](https://portal.ukcloud.com/support/knowledge_centre/63c4ea0b-46fc-476c-b2d1-5f044281c886))
  - Service status information

- **Tools** --- Provides access to:

  - Self-service creation of compute services (see [*How to build your Enterprise Compute Cloud estate using the UKCloud Portal*](https://portal.ukcloud.com/support/knowledge_centre/99f82d51-11f1-4c76-8cdb-3048067ae0f3)).
  - The Zerto Self-Service Portal (ZSSP) where you can manage Journaling Protection, Disaster Recovery to the Cloud and Workload Migration to the Cloud (see [*How to perform a failover*](https://portal.ukcloud.com/support/knowledge_centre/539bef19-1a0b-4953-be4c-48c2830ed5e9)).

- **Communities** --- Access the UKCloud site on GitHub and UKCloud Ideas.

### Content area

The content area displays the main content of the page. While the toolbar and navigation panel remain the same in most Portal pages, the content area changes depending on what task you're performing in the Portal. For example, the content area of the *Home* page contains a dashboard that provides quick access to various areas of the Portal, including notifications, My Calls and the Knowledge Centre.

## Logging out of the UKCloud Portal

When you've finished working in the Portal, we recommend that you log out to prevent unauthorised access.

> [!TIP]
> After you've been inactive in the Portal for some time, you'll be automatically logged out.

1. In the toolbar, click your username.

2. From the menu, select **Log out**.

![Log out menu option](images/ptl-mnu-logout.png)

## Using the UKCloud Portal API

The Portal also provides an API to enable you to interact programmatically with your UKCloud environment. For example, you can use the Portal API to create, manage and monitor support tickets, view information about the components of your environment and create compute services, virtual data centres and edge gateways.

The entry point URL for the Portal API is:

https://portal.skyscapecloud.com/api

For reference information about the various endpoints offered by the Portal API, see the [*Portal API User Guide*](https://portal.ukcloud.com/support/knowledge_centre/c931089a-009b-4fe3-af8e-36ba75cb1c76).

For more information about how to use the API, including examples showing how to use the API to create a VDC and edge gateway, see [*How to use the UKCloud Portal API*](https://portal.ukcloud.com/support/knowledge_centre/18ec05eb-0271-4ff0-bb10-f377a2f29af7).

## Next steps

In this Getting Started Guide, you've learned the basics about the Portal and the functionality it provides to help you interact with your UKCloud environment. For more details about a specific service, see the appropriate Getting Started Guide.

## Glossary

This section provides a glossary of terms specific to the UKCloud Portal.

**account**&nbsp;&nbsp;Within the UKCloud VMware environment there are two types of account:

- **customer account** --- A collection of related compute services associated with a particular customer or partner.
- **user account** --- The account you use to log in to the Portal or authenticate with the Portal API. Your user account determines which customer accounts you have access to. Each user account can be associated with multiple customer accounts.

**compute service**&nbsp;&nbsp;An Enterprise Compute Cloud top-level container within a customer
account that includes a vCloud Director organization and its VDCs, catalogues, users and resources.

**Customer Success Manager (CSM)**&nbsp;&nbsp;A UKCloud Customer Services role aimed at  providing you with any assistance you require during onboarding and the first 90 days of using
a UKCloud service.

**Knowledge Centre**&nbsp;&nbsp;UKCloud's repository of articles created in collaboration with subject matter experts to provide information about how to use our products and services. Article types include:

- **Service Definitions** describe what a service does
- **Service Scopes** provide technical detail for a service or service option
- **Factsheets** provide a brief overview of a service or service option
- **FAQs** answer commonly asked questions about a service or service option
- **Blueprints** explain how our platform helps address business needs
- **Getting Started Guides** step through the basic tasks required to get a service or service option up and running
- **How To Guides** provide step-by-step instructions for performing specific tasks within our platform
- **Quick Ref Guides** to provide general information to help understand a particular aspect of our platform

**memorable word**&nbsp;&nbsp;An optional second level of authentication to provide an additional layer of security for the Portal. Users are prompted to enter random letters from their memorable word after they have entered their log in credentials.

**My Calls**&nbsp;&nbsp;An area of the Portal where you can raise and monitor support tickets.

**navigation panel**&nbsp;&nbsp;An area on the left side of the Portal that provides access to Portal functionality.

**toolbar**&nbsp;&nbsp;An area along the top of the Portal that enables you to switch accounts, access notifications, change your password or contact details and log out of the Portal.

**Two Factor Authentication (2FA)**&nbsp;&nbsp;An optional second level of authentication to provide an additional layer of security for the Portal. Users are prompted to enter a one-time code generated by registered device, such as an iPhone or Android Phone.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.