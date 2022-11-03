---
title: Pricing information for UKCloud for Oracle Software
description: Provides useful information about UKCloud for Oracle Software pricing, including pricing examples
services: oracle
author: shighmoor
reviewer: shighmoor
lastreviewed: 13/09/2022
toc_rootlink: UKCloud for Oracle Software
toc_sub1: Service Information
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: UKCloud for Oracle Software/Service Information/orcl-ref-pricing.md
toc_mdlink: orcl-ref-pricing.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Pricing information for UKCloud for Oracle Software

> [!IMPORTANT]
> UKCloud for Oracle Software has been retired from sale by UKCloud. We'll continue to support all existing customers who are using this service, however, we are no longer providing this service for new workloads. This article provides existing UKCloud for Oracle Software customers with access to support documentation and we'll continue to update it as required. For new Oracle requests, contact your Client Director or Service Delivery Manager.

## Overview

UKCloud for Oracle Software VM pricing can be as low as 9p per hour. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

Oracle workloads are priced per hour for compute resources, and monthly for storage. Your bills are based on the resources you actually allocate to your solution. In contrast to traditional hosting models, this ensures that there's no lock-in to unnecessarily licensed or under-utilised hardware.

Our flexible pricing enables you map neatly to your existing specifications and scale resources up or down based on new or changing requirements. You're not constrained to the resources identified in an early design phase.

## Licensing

UKCloud for Oracle Software includes the base OVM licences, which provide VM containers that meet Oracle's definition of hard partitioning.

Our service doesn't include licences for the Oracle applications and databases you choose to run. As the underlying platform is powered by OVM technology, you can either transfer your existing licences, or confidently buy new licences based on the quantity of virtual processors you allocate within each VM.

If you need help defining the best licensing approach for your situation, we can introduce you to one of our partners who specialise in Oracle licensing compliance, optimisation and fulfillment.

## Pricing example

The following example illustrates how to use the information in the Pricing Guide to calculate the cost of a UKCloud for Oracle Software virtual machine.

**Oracle flavour:** x86<br>
**Machine size:** 2 cores<sup>*</sup>, 4GiB RAM<br>
**Storage used:** 100GiB Tier 2 block storage

<sup>*</sup> Cores refers to physical processor cores.

**VM cost per month**

An Oracle x86 VM costs **£0.075** per core per hour and **£0.015** per GiB RAM per hour.

So, an Oracle x86 VM with 2 cores and 4GiB RAM costs (2 x £0.075) + (4 x £0.015) = £0.15 + £0.06 = **£0.21** per hour.

In an average **730** hour month, the monthly VM cost works out at 730 x £0.21 = **£153.30**.

**Storage cost per month**

Tier 2 costs **£0.10** per GiB per month.

100GiB of additional storage costs **£10.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the monthly VM and storage costs.

VM cost per month | + | Storage cost per month | = | Total basic cost
------------------|---|------------------------|---|-----------------
£153.30           | + | £10.00                 | = | **£163.30**

## Discount options

The following discount and purchase schemes are available with UKCloud for Oracle Software:

- Commitment discount

- Annual subscription discount

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see [*UKCloud discount and purchase schemes*](../other/other-ref-discount-schemes.md).

## Additional pricing notes

- To model a total cost of ownership, you should consider additional elements, such as licensing, connectivity and service options, which are listed in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

- UKCloud reserves the right to charge for the onboarding of complex configurations in line with our [SFIA Rate Card](https://ukcloud.com/sfia).

## Billing and payment information

Billing for the service is one month in arrears.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

UKCloud for Oracle Software has been retired from sale by UKCloud, therefore we currently do not offer a free trial for this service.

## Service scope

For information about what is and isn't included in the UKCloud for Oracle Software service, as well as UKCloud and customer responsibilities, see the [*UKCloud for Oracle Software Service Scope*](orcl-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
