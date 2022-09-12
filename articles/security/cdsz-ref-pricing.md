---
title: Pricing information for Cross Domain Security Zone
description: Provides useful information about Cross Domain Security Zone pricing, including pricing examples
services: cdsz
author: shighmoor
reviewer: shighmoor
lastreviewed: 14/09/2021
toc_rootlink: Cross Domain Security Zone
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Cross Domain Security Zone/cdsz-ref-pricing.md
toc_mdlink: cdsz-ref-pricing.md
---

# Pricing information for Cross Domain Security Zone

## Overview

Cross Domain Security Zone (CDSZ) pricing can be as low as £500 per month. Full pricing with all options is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

The self-managed Walled Garden is priced with a baseline monthly fee, with additional charges based on the number of VMs required to run the solution and their Snapshot Protection options.

If you'd like a quote for Cross Domain Security Zone, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## Pricing example

**VM size:** Small<br>
**Block storage used:** 80GiB Tier 2 block storage<br>
**Protection option:** 14-day Snapshot Protection<br>

**Baseline monthly fee**

The baseline monthly fee for CDSZ is **£500**.

**VM cost per month**

A Small POWER VM costs **£0.15** per hour.

14-day Snapshot Protection for a Small VM costs **£0.12** per hour.

In an average **730** hour month, the monthly VM cost works out at:

Hours in operation | x | (VM    | + | Protection | = | VM cost per month
-------------------|---|--------|---|------------|---|------------------
730                | x | (£0.15 | + | £0.12)     | = | **£197.10**

The Advanced Management bundle is not required so there is no additional uplift.

**Storage cost per month**

A Small VM includes 60GiB of free Tier 2 block storage, so an additional **20GiB** is chargeable.

Tier 2 block storage costs **£0.10** per GiB month.

14-day Snapshot Protection for Tier 2 storage costs **£0.10** per GiB per month.

(Storage | + | Protection) | x | GiB used | = | Storage cost per month
---------|---|-------------|---|----------|---|-----------------------
(£0.10   | + | £0.10)      | x | 20       | = | **£4.00**

**Total basic cost**

Calculate the total basic cost by adding together the monthly baseline fee and monthly VM and storage costs.

Monthly fee | VM cost per month | + | Storage cost per month | = | Total basic cost
------------|-------------------|---|------------------------|---|-----------------
£500        | £197.10           | + | £4.00                  | = | **£701.10**

## Discount options

The following discount and purchase schemes are available with CDSZ:

- Commitment discount

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Additional pricing notes

- 60GiB of Tier 2 storage is included in the pricing for all VMs while they are powered on. For VMs in a powered-off state, consumed storage will be charged at the prevailing rate.

- VMs with additional allocated storage will be charged at the prevailing storage rate regardless of their powered-on/off state.

## Billing and payment information

Billing for the service is one month in arrears. The minimum commitment for CDSZ is one month.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

## Termination fees

There are no termination fees for the service. UKCloud may make an additional charge for transferring data out of the service if required.

## Free trials

The complex assurance requirements for CDSZ mean that we're unable to offer a free trial for this service.

## Service scope

For information about what is and isn't included in the CDSZ service, as well as UKCloud and customer responsibilities, see the [*Cross Domain Security Zone Service Scope*](cdsz-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
