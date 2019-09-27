---
title: How to license Microsoft applications/software on the UKCloud platform | UKCloud Ltd
description: This guide will explain how Microsoft software such as Server and SQL is licensed on the UKCloud platform
services: vmware
author: Steve Hall
reviewer:
lastreviewed: 18/07/2018 12:04:00
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Licence Microsoft applications/software on the UKCloud platform
toc_fullpath: How to/vmw-how-license-microsoft.md
toc_mdlink: vmw-how-license-microsoft.md
---

# How to licence Microsoft applications/software on the UKCloud platform

## Overview

> [!IMPORTANT]
> It is **your** responsibility to ensure that you have a valid licence for any software installed on the UKCloud platform if applicable.

This guide is designed to provide information on how Microsoft licensing can be applied on our platform and the options available to you.

UKCloud offer two ways to licence Microsoft software for use on our compute platform, providing you with the flexibility you need to deliver your application workloads in line with Microsoft requirements and obligations. These are for UKCloud to purchase these licences monthly for you, or for you to submit a Microsoft Licence Mobility Verification form if you intend to use your own existing licensing.

## Microsoft Server licensing

To make the provisioning of Microsoft-based virtual machines (VMs) as simple and quick as possible, while remaining in line with our Microsoft agreement, all Microsoft Server licences must be provided by UKCloud.

The standard licensing approach is for us to provide Microsoft Windows Server licences on a per hour basis. This is retrospectively billed based on your usage of an associated VM.

Please note that it is not possible for you to bring your own Microsoft Windows Server licences for use on the UKCloud platform. For your Microsoft Windows Server‑based VMs to use a UKCloud-purchased licence, you must create all your Microsoft VMs using a Microsoft template from the UKCloud product catalogue. If you prefer to create your Microsoft VMs using your own template, you must then register these VMs with our Key Management Server (KMS). A [document](vmw-how-setup-kms.md) is available on the UKCloud Knowledge Centre to explain how this is done.

The Microsoft Windows Server licence is invoiced each month, in addition to the cost of the VM, based on the VM's usage.

We automatically bill the usage of Microsoft Windows Server per hour that the VM is powered on, and invoice you for your consumption of Microsoft Windows Server per month using the following pricing table:

VM size | SPLA Per hour per VM | Academic Per hour per VM
--------|----------------------|---------------------------
Micro, Tiny VM | £0.013 | £0.002
Small VM | £0.025 | £0.003
Medium VM, Medium High Memory | £0.051 | £0.007
Large VM, Large High Memory, Tier 1 Apps | £0.149 | £0.020

Due to the elimination of the discount for G-SPLA, there is now price parity with corporate SPLA. As a result, customers who may not have previously been applicable for G-SPLA are not impacted.

## Microsoft desktop licensing

While we do not offer the option of supplying Microsoft Desktop Operating System licensing, we are now an authorised partner on the  Qualified MultiTenant Hoster (QMTH) program. The QMTH program enables you to purchase Microsoft 10 Enterprise licences, and use these on our multi-tenant cloud platform.

> [!IMPORTANT]
> You **must** inform Microsoft by completing a [Microsoft Licence Mobility Verification form](https://www.microsoft.com/en-us/licensing/licensing-programs/software-assurance-license-mobility.aspx) for the licensing to be valid.

For more information regarding the QMTH program, we have further details on the [UKCloud web site](https://ukcloud.com/qualified-multitenant-hoster-program/)

If you want to use this option, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, detailing the VM names.

In addition, you can also bring your own Microsoft desktop licensing for use on a dedicated single tenant cloud server such as Private Cloud for Compute. In this instance, contact your Account Director or Service Delivery Manager for further information.

## Options for all other Microsoft applications

As stated, all Microsoft applications on the UKCloud platform must be licensed appropriately by either UKCloud or by using your own existing licensing. There are two options available to you:

- **UKCloud's Microsoft licensing and usage billing.** The standard licensing approach is for us to provide Microsoft licences on a per hour or monthly basis depending on the application. These are     retrospectively billed based on your usage of an associated VM for each month. For this option to be valid, you must ensure that you have informed us of all Microsoft installations by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, detailing the VM names, the application and specific version/level. Please note that not all applications are available using this option, and the Microsoft application list within this document will state the eligibility of this option per application.

- **Bring your own Microsoft licensing.** If your organisation has an existing SPLA or Academic licensing contract with Microsoft, or if you wish to licence your Microsoft software directly, we can offer the option of your organisation using your own Microsoft software licensing.

    > [!NOTE]
    > This is only possible with certain Microsoft applications and is not possible for Microsoft Windows Server as stated above. Before you install any Microsoft software onto a UKCloud VM, you must ensure that you purchase the correct licensing with software assurance and that you have completed the Microsoft Licence Mobility Verification process detailed in this document. The completion of the process is identified by a signed confirmation sent to you from Microsoft Ireland. Please note that if you do not have software assurance, you will not be able to use the Microsoft Mobility option.

    The Microsoft Mobility option involves transferring the use of your licensing to UKCloud VMs, and therefore they cannot be used on other Cloud Service Providers or on your own hardware. However, if you discontinue the use of the application on the UKCloud platform and no longer require the licensing, this can be reverted for your use elsewhere. The [Microsoft Mobility form](https://www.microsoft.com/en-us/licensing/licensing-programs/software-assurance-license-mobility.aspx) is available on the Microsoft web site. Please note that this must be completed and posted to Microsoft and not to UKCloud. The correct information to use for UKCloud is:
    
  - Partner entity status: Authorized Mobility Partner
  
  - Authorized Mobility Partner Name: UKCloud
  
  - Authorized Partner Website URL: https://ukcloud.com/
  
  - Authorized Mobility Partner Email Address: nstewart@ukcloud.com
  
  - Partner agreement number: 82685361

## Microsoft application list

The following list is aimed at providing you with a summary regarding the licensing options available to you for each specific application. This summary states whether UKCloud licensing and/or Microsoft Mobility is available. Please note that this is not intended to be a complete list, but covers the most frequently requested applications. If the application you are looking for is not on this list, please engage with your Account Director or Service Delivery Manager who will be able to help and advise you as to whether the software can be licensed and if so how.

- **Microsoft SQL**

  - You do not need to purchase licensing for MySQL, SQL Express or PostgreSQL. However, if you are using SQL Standard or Enterprise for development purposes you are **required** by Microsoft to have valid licensing in place.

  - SQL Developer can only be utilised on a shared platform to test the SQL element of a solution and cannot be used to provide end-user services. If you wish to provide SQL services to end-users, SQL Enterprise or SQL Standard must be purchased.

  - We can provide Microsoft SQL Standard Server licences on a per hour basis, or Microsoft SQL Enterprise licences billed on a monthly basis. These are retrospectively billed based on your usage of an associated VM, and the pricing is available within the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

  - Microsoft Mobility - this is a valid option for both SQL Standard and Enterprise.

  - Please note that for under SPLA licensing you only need to purchase the SQL server licence and you do not need to purchase Server Access Licences (SAL).

- **Office 365**

  - UKCloud licensing - we are not able to provide Microsoft Office 365 licensing.

  - Microsoft Mobility - this is a valid option for Office 365 ProPlus licences as long as you have valid Software Assurance in place. To take advantage of this option, you must manage your Office 365 implementation and ensure you have the correct number of licences to reflect your user count. This option is available via the QMTH program, and more information is available on the [UKCloud web site](https://ukcloud.com/qualified-multitenant-hoster-program/).

- **Remote Desktop Server Access Licence**

  - UKCloud licensing - we are able to provide Microsoft Remote Desktop (RDS) SAL on a monthly basis only. These are retrospectively billed, and the pricing is available within the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf). For these licences to be used, you must raise a service request prior to their use as they will need to be registered on the UKCloud platform and will need to provision a dedicated RDS licence server. To assign and validate the licences, we will need to arrange a session to connect to your server.

  - Microsoft Mobility - this is a valid option for RDS licences.

- **System Center**

  - We are unable to offer this on our public cloud platform in any form.
  
  - It is available for customers running dedicated or Private cloud environments in which case it can be purchased via SPLA or BYO licensing using Microsoft mobility with Software Assurance. 

- **SharePoint**

  - UKCloud licensing - we are not currently able to offer licences for this application.

  - Microsoft Mobility - Sharepoint Server or Sharepoint Server for internet sites can be licensed through Licence Mobility, only if Software Assurance is in place. Once verified by Microsoft you will be able to use the SharePoint software on the UKCloud platform.

- **Office**

  - UKCloud licensing - UKCloud can offer SALs for this software. You need to inform us as to how many users will be accessing the application and we will bill you on a per user, per month basis. This pricing is available on request as it is not currently stated in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

  - Microsoft Mobility - this is not available via Microsoft Mobility and must be provided by UKCloud.

- **Visual Studio**

  - UKCloud licensing - UKCloud can offer licensing for this software. You need to tell us how many users will be accessing the software and we will bill you on a per user, per month basis. Please note the only versions of Visual Studio permitted by Microsoft are Enterprise and Professional.

  - Microsoft Mobility - this is not available via Microsoft Mobility and must be provided by UKCloud.

- **Other Microsoft Products**

  - Please engage with your Account Director or Service Delivery Manager who will be able to help and advise you as to whether the software can be licensed, and if so, how.

## Submitting a request to use Microsoft applications on the UKCloud platform

You must advise us of your preferred method for licensing Microsoft applications.

To use your existing Microsoft licensing or use licences billed by us on UKCloud‑provisioned VMs:

1. Log in to the [UKCloud Portal](https://portal.ukcloud.com/login).

2. Select **Support**, then **My Calls**.

3. Select **Raise a new Support Call**.

    ![Raising Support Call](images/microsoft-support-call.png)

4. From the **How can we help you?** list, select **I am requesting information on/administration of my service**.

5. From the **Select Product** list, select **Enterprise Compute Cloud (vCloud/VMware)**

    From the **What is the nature of your query?** list, select either:

    - **I want UKCloud to invoice me for the licensing of Microsoft software on one or more VMs**.

    - **I want to bring my own Microsoft licences to my UKCloud environment**

6. Once you have selected one of the two options above, you will need to fill out **a Request summary** and provide the information outlined below:

    If you have selected **I want to bring my own Microsoft licences to my UKCloud environment,** you need to state the specific VDC and VMs that contain the software that will be affected by your own licensing. You will also need to state what software, version, and the quantity of licences you will be using. (You must have completed the [Microsoft Mobility](https://www.microsoft.com/en-us/licensing/licensing-programs/software-assurance-license-mobility.aspx) verification process before choosing this option.) If your Microsoft Mobility application has been accepted, you need to inform us of the date from which your licensing will take effect.

    If you have selected **I want UKCloud to invoice me for the licensing of Microsoft software on one or more VMs**, you need to state the specific VDC and VMs that contain the software you wish UKCloud to licence for you. You will also need to state what software licenses, version, the quantity you require, and the date from which you wish the licensing to commence.

    > [!NOTE]
    > It is **your** responsibility to inform support when you no longer require the licensing on one or more of the specified VMs.

    ![Raising Support Call](images/microsoft-support-call-2.png)

    ![Raising Support Call](images/microsoft-support-call-3.png)

7. Click **Submit**.

## Validation

If you request to use your own licensing, let us know when you have submitted the Mobility Verification form and the support team will update our records. As soon as Microsoft confirm with us that the licences are available, your own Microsoft licensing will be utilised. If you were previously using UKCloud-provided SQL licensing, this will be stopped and you will no longer be billed by us for SQL.

Microsoft may contact you to confirm that you have the correct number of licences in place to cover the number of Microsoft-based provisioned VMs supplied by UKCloud.

## Microsoft SQL Server images

To install Microsoft SQL Server Standard or Enterprise edition, you can either use your own local images, or we can make an image available to you. To gain access to any images, you must either inform us so that we can bill you for the appropriate usage, or wait until we've received confirmation from Microsoft as per the mobility process. You can request access to images by raising a Service Request in the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Responsibilities

As soon as you have completed the form and the actions have been confirmed, your organisation is responsible for ensuring that there are enough eligible licences to cover the specified Microsoft-based VMs on the UKCloud platform.

## Support

If you have any issues regarding updating, or the support of Microsoft Server, please contact the UKCloud support team by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
