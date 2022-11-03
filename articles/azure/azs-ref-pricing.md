---
title: Pricing information for UKCloud for Microsoft Azure
description: Provides useful information about UKCloud for Microsoft Azure pricing, including pricing examples
services: azure-stack
author: shighmoor
reviewer: shighmoor
lastreviewed: 13/09/2022
toc_rootlink: Users
toc_sub1: Service Information
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Users/Service Information/azs-ref-pricing.md
toc_mdlink: azs-ref-pricing.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Pricing information for UKCloud for Microsoft Azure

## Overview

UKCloud for Microsoft Azure VM pricing can be as low as 3p per hour. Full pricing with all options, including public Azure, licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

UKCloud for Microsoft Azure pricing is simple; you only pay for the vCPU and memory you use and any additional storage consumed.

If you'd like a quote for UKCloud for Microsoft Azure, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## Public Azure

As a Microsoft Certified Service Provider (CSP), UKCloud can facilitate the sale of Microsoft Azure products and services to customers who are purchasing Azure as part of a broader solution supported by UKCloud's Professional Services, our Managed Services capabilities or as part of a multi-cloud solution in combination with one of our other cloud technologies.

UKCloud passes the Azure components at Microsoft list price. This enables you to benefit from consolidated billing and UKCloud's award-winning customer services relationships, including our Service Delivery Managers and Cloud Architects. For the latest Public Azure prices, see <https://azure.microsoft.com/en-gb/pricing/>.

## Licensing

Through the Azure Marketplace, you can select the Microsoft licensing that you require, and you'll be invoiced at the end of each month for your exact usage. UKCloud offers Azure on a multi-tenant basis and, according to [Microsoft Azure licensing guidelines](https://www.microsoftpartnerserverandcloud.com/_layouts/download.aspx?SourceUrl=Hosted%20Documents/Azure%20Stack%20Licensing%20Guide%20-%20Hosters.pdf), the Azure Hybrid Use Benefit (AHUB) option is not applicable for Windows Server operating systems. This means that you'll be unable to bring your own on-premises operating system licensing.

With regards to Microsoft SQL Server, you can either bring your own SQL Server licensing (you must have valid Software Assurance) and utilise License Mobility, or choose for UKCloud to invoice you based on your exact usage under our SPLA contract.

Red Hat (once certified by Microsoft) is available via the BYOL process, or we can invoice you based on your exact usage.

## Pricing example

The following example illustrates how to use the information in the Pricing Guide to calculate the cost of a UKCloud for Microsoft Azure virtual machine.

**Security domain:** Assured OFFICIAL<br>
**Machine type:** A-Series<br>
**Machine size:** 2 vCPU, 4GiB RAM
**Additional storage used:** 100GiB<br>
**Operating system:** Microsoft Windows Server

**VM cost per month**

An A-Series VM in the Assured OFFICIAL security domain costs **£0.03** per vCPU per hour and **£0.013** per GiB RAM per hour.

Microsoft Windows Server OS licensing costs **£0.035** per vCPU per hour.

So, an A-Series VM with 2 vCPU and 4GiB RAM costs (2 x £0.03) + (4 x £0.013) + (2 x £0.035) = £0.06 + £0.052 + £0.07 = **£0.182** per hour.

In an average **730** hour month, the monthly VM cost works out at 730 x £0.182 = **£132.86**.

**Storage cost per month**

Additional storage costs **£0.10** per GiB per month.

100GiB of additional storage costs **£10.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the monthly VM and storage costs.

VM cost per month | + | Storage cost per month | = | Total basic cost
------------------|---|------------------------|---|-----------------
£132.86           | + | £10.00                 | = | **£142.86**

## Discount options

The following discount and purchase schemes are available with UKCloud for Microsoft Azure:

- Commitment discount

- Annual subscription discount

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see [*UKCloud discount and purchase schemes*](../other/other-ref-discount-schemes.md).

## Additional pricing notes

- SQL Standard is charged per hour based on the powered-on state of the host VM. SQL Enterprise is charged monthly.

- You must report, via support ticket, which VMs have either SQL Standard or Enterprise installed so that we can license and bill you accordingly. You do have the option to bring your own licences for SQL under Microsoft Mobility, though you must inform us as soon as you receive confirmation from Microsoft that mobility has been agreed. For more information, see [*How to license Microsoft applications/software on the UKCloud platform*](../shared/shared-how-license-microsoft.md).

- Microsoft Windows Server licences must be provided by UKCloud and you'll be billed per hour based on the powered-on state of the host VM.

- If you want to host Oracle solutions on our platform, consult our Cloud Architects, or consider our Dedicated Compute v2 or Private Cloud for Oracle Software services to avoid licensing issues.

## Billing and payment information

Billing for the service is one month in arrears. For infrastructure solutions, you'll be billed by the smallest unit of time, which is one hour for compute and one month per GiB for storage.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Service scope

For information about what is and isn't included in the UKCloud for Microsoft Azure service, as well as UKCloud and customer responsibilities, see the [*UKCloud for Microsoft Azure Service Scope*](azs-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
