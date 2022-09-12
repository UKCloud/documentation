---
title: Pricing information for Secure Remote Access
description: Provides useful information about Secure Remote Access pricing, including pricing examples
services: sra
author: shighmoor
reviewer: shighmoor
lastreviewed: 14/09/2021
toc_rootlink: Secure Remote Access
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Secure Remote Access/sra-ref-pricing.md
toc_mdlink: sra-ref-pricing.md
---

# Pricing information for Secure Remote Access

## Overview

Secure Remote Access (SRA) pricing can be as low as £5.00 per licence per month (regardless of how many days it is used in the month). Full pricing with all options is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

The pricing model for SRA has two parts:

- A per-user fee to cover your user base, bought in packs of 3, 10, 25, 100 or 1,000 licences.

- An hourly rental fee for each bastion host required to support your access requirements.

    A Small bastion host is provided free of charge each month per customer. If you decide to increase the size of this VM or provision additional VMs, you'll still receive the value of the first Small VM free of charge per month and this will be deducted from the invoice if larger or additional VMs are used as bastion hosts.

If you'd like a quote for Secure Remote Access, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## What's included?

The price of SRA includes:

- Access to managed NCSC-approved VPN gateways

- Cisco AnyConnect licences for end user devices

- Two-factor authentication using device certificates

- A Walled Garden virtual data centre where customers can deploy their application services

All SRA deployments require a bastion host to complete the connection to the Elevated OFFICIAL security domain.

UKCloud includes a Small VM as part of the monthly licensing cost. If you require a larger VM size, you'll be charged for the difference in cost between the free-of-charge Small VM and the size you require.

There's no limit to the number of hosts you can provision in SRA.

## Pricing example

**Remote access pack:** 10 licences
**Bastion hosts:** 1 Medium VM<br>
**Block storage used:** 80GiB Tier 2 block storage<br>
**Protection option:** 14-day Snapshot Protection<br>

**Licence costs**

A 10 licence remote access pack costs **£500**.

**Bastion host cost**

SRA includes a Small VM for a bastion host free of charge. The difference in cost between a Small and Medium VM is **£0.11** per hour.

14-day Snapshot Protection for a Medium VM costs **£0.19** per hour.

In an average **730** hour month, the monthly bastion host cost works out as:

Hours in operation | x | (VM     | + | Protection) | = | VM cost per month
-------------------|---|---------|---|-------------|---|------------------
730                | x | (£0.11  | + | £0.19)      | = | **£219.00**

**Storage cost per month**

A Medium VM includes 60GiB of free Tier 2 block storage, so an additional **20GiB** is chargeable.

Tier 2 block storage costs **£0.10** per GiB month.

14-day Snapshot Protection for Tier 2 storage costs **£0.10** per GiB per month.

(Storage | + | Protection) | x | GiB used | = | Storage cost per month
---------|---|-------------|---|----------|---|-----------------------
(£0.10   | + | £0.10)      | x | 20       | = | **£4.00**

**Total basic cost**

Calculate the total basic cost by adding together the monthly licence, bastion host, VM and storage costs.

Licence costs | Bastion host cost | + | Storage cost per month | = | Total basic cost
--------------|-------------------|---|------------------------|---|-----------------
£500          | £219.00           | + | £4.00                  | = | **£723.00**

## Additional pricing notes

- 60GiB of Tier 2 storage is included in the pricing for all VMs while they are powered on. For VMs in a powered-off state, consumed storage will be charged at the prevailing rate.

- VMs with additional allocated storage will be charged at the prevailing storage rate regardless of their powered-on/off state.

## Billing and payment information

Billing for the service is one month in arrears.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

## Termination fees

SRA is subject to a minimum term of three months. Termination within this initial term will incur an early exit charge.

## Free trials

The complex assurance requirements for SRA mean that we're unable to offer a free trial for this service.

## Service scope

For information about what is and isn't included in the Secure Remote Access service, as well as UKCloud and customer responsibilities, see the [*Secure Remote Access Service Scope*](sra-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
