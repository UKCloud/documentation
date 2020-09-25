---
title: Pricing information for Cloud Storage
description: Provides useful information about Cloud Storage pricing, including pricing examples
services: cloud-storage
author: shighmoor
reviewer:
lastreviewed: 25/09/2020
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/cs-ref-pricing.md
toc_mdlink: cs-ref-pricing.md
---

# Pricing information for Cloud Storage

## Overview

UKCloud's Cloud Storage starts from 1.46p per GiB per month. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

Cloud Storage uses a tiering pricing model. Used storage is calculated on a daily basis and the data for a month is collected, with the average consumption calculated and rounded up to the next whole number to provide the number of GiB consumed in a month. Cloud Storage is then charged per GiB per month based on the storage tier applicable to the average monthly consumption. When your storage consumption moves into the next tier, only the amount of storage above the previous tier threshold is charged at the lower price.

## Calculating the cost

To establish your Cloud Storage pricing, follow these steps:

1. Choose the security level your workload needs: STANDARD or ENHANCED.

2. Choose the security domain your workload needs to use: the DDoS-protected, internet-connected Assured OFFICIAL domain or the non-internet facing Elevated OFFICIAL domain.

3. Identify the storage tier that applies to your average consumption:

    - Up to 250TiB

    - 251TiB to 500TiB

    - 501TiB to 1,000TiB

    - 1,000TiB+

## Example

**Security level:** STANDARD<br>
**Security domain:** Assured OFFICIAL<br>
**Average monthly used storage:** 520TiB

**Cost per storage tier**

The first 250TiB (250,000GiB) is charged at the Up to 250TiB rate = 250,000 x £0.0200 = **£5,000**

The second 250TiB (250,000GiB) is charged at the 251TiB to 500TiB level = 250,000 x £0.0180 = **£4,500**

The final 20TiB (20,000GiB) is charged at the 501TiB to 1,000TiB level = 20,000 x £0.0162 = **£324**

**Total storage cost**

Total monthly cost of storage = £5,000 + £4,500 + £324 = **£9,824**

## Discount options

The following discount and purchase schemes are available with UKCloud for Microsoft Azure:

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Billing and payment information

Billing for the service is one month in arrears. The minimum unit of time for use one month.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

Billing information is provided in an evidence file on the first working day of the month for your previous month's spend. For more information about the invoice evidence file, see [*Understanding your invoice evidence file*](../other/other-ref-invoice-evidence-file.md).

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs.  If you're new to UKCloud, you can request a trial via the [UKCloud website trial page](https://ukcloud.com/free-trial-sign-up). If you're an existing customer, contact your Service Delivery Manager. For more information about free trials, see the [*Free Trials Service Scope*](../other/other-sco-free-trials.md).

## Service scope

For information about what is and isn't included in the UKCloud for VMware service, as well as UKCloud and customer responsibilities, see the [*UKCloud for VMware Service Scope*](vmw-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
