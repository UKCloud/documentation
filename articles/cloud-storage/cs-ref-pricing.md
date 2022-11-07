---
title: Pricing information for Cloud Storage
description: Provides useful information about Cloud Storage pricing, including pricing examples
services: cloud-storage
author: shighmoor
reviewer: shighmoor
lastreviewed: 13/09/2022
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/cs-ref-pricing.md
toc_mdlink: cs-ref-pricing.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Pricing information for Cloud Storage

## Overview

UKCloud's Cloud Storage pricing can be as low as 1.46p per GiB per month. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

Cloud Storage uses a tiering pricing model. Used storage is calculated on a daily basis and the data for a month is collected, with the average consumption calculated and rounded up to the next whole number to provide the number of GiB consumed in a month. Cloud Storage is then charged per GiB per month based on the storage tier applicable to the average monthly consumption. When your storage consumption moves into the next tier, only the amount of storage above the previous tier threshold is charged at the lower price.

If you'd like a quote for Cloud Storage, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## Calculating the cost

To establish your Cloud Storage pricing, follow these steps:

1. Choose the security level your workload needs: STANDARD or ENHANCED.

2. Choose the security domain your workload needs to use: the DDoS-protected, internet-connected Assured OFFICIAL domain or the non-internet facing Elevated OFFICIAL domain.

3. Identify the storage tier that applies to your average consumption:

    - Up to 250TiB

    - 251TiB to 500TiB

    - 501TiB to 1,000TiB

    - 1,000TiB+

## Pricing example

The following example illustrates how to use the information in the Pricing Guide to calculate the cost of a UKCloud Cloud Storage.

**Service level:** STANDARD<br>
**Security domain:** Assured OFFICIAL<br>
**Average monthly used storage:** 520TiB

**Cost per storage tier**

The first 250TiB (250,000GiB) is charged at the Up to 250TiB rate = 250,000 x £0.0200 = **£5,000**

The second 250TiB (250,000GiB) is charged at the 251TiB to 500TiB level = 250,000 x £0.0180 = **£4,500**

The final 20TiB (20,000GiB) is charged at the 501TiB to 1,000TiB level = 20,000 x £0.0162 = **£324**

**Total storage cost**

Total monthly cost of storage = £5,000 + £4,500 + £324 = **£9,824**

## Discount options

The following discount and purchase schemes are available with Cloud Storage:

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see [*UKCloud discount and purchase schemes*](../other/other-ref-discount-schemes.md).

## Billing and payment information

Billing for the service is one month in arrears. The minimum unit of time for use one month.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

Billing information is provided in an evidence file on the first working day of the month for your previous month's spend. For more information about the invoice evidence file, see [*Understanding your invoice evidence file*](../other/other-ref-invoice-evidence-file.md).

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs.  If you're new to UKCloud, you can request a trial via the UKCloud [Free Trial page](https://ukcloud.com/free-trials/). If you're an existing customer, contact your Service Delivery Manager. For more information about free trials, see the [*Free Trials Service Scope*](../other/other-sco-free-trials.md).

## Service scope

For information about what is and isn't included in the Cloud Storage service, as well as UKCloud and customer responsibilities, see the [*Cloud Storage Service Scope*](cs-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
