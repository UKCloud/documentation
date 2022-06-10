---
title: Pricing information for UKCloud for VMware
description: Provides useful information about UKCloud for VMware pricing, including pricing examples
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 24/09/2021
toc_rootlink: Service Information
toc_sub1: UKCloud for VMware
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/UKCloud for VMware/vmw-ref-pricing.md
toc_mdlink: vmw-ref-pricing.md
---

# Pricing information for UKCloud for VMware

## Overview

UKCloud for VMware VM pricing can be as low as 1p per hour. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

UKCloud for VMware VMs are priced per hour. Your bills are based on actual consumption, so if you're not using a VM, you can turn it off so you don't need to pay for it.

Our flexible VM sizes enable you to map resources to your existing specifications.

If you'd like a quote for UKCloud for VMware, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## Calculating the cost

Follow these easy steps to define your solution and calculate the costs:

1. Choose the security domain your workload needs to use: the DDoS-protected, internet-connected Assured OFFICIAL domain or the non-internet facing Elevated OFFICIAL domain.

2. Choose the workload type and VM size that best suits your application, for example a Medium POWER VM:

    - **ESSENTIAL.** Automated rebalancing is enabled to ensure the workload receives the requested performance. VMs can have contended resource allocation.

    - **POWER.** VMs have an uncontended compute (CPU/GiB) resource allocation. Automated rebalancing is enabled to pre-emptively optimise performance and availability.

    - **PRIORITY.** VMs have an uncontended compute (CPU/GiB) resource allocation. Automated rebalancing is configured to reduce workload movement around the platform, reducing workload disruption.

3. (Optional) Choose any additional storage needed to support your application. You can add as many storage options as you need for the different aspects of your application, for example, Tier 1 for a high I/O database application and Tier 2 to store infrequently accessed media.

4. (Optional) Choose the VM protection and block storage protection needed for your solution. This could be either Snapshot Protection, Journaling Protection or both. However, you must match your VM protection and block storage protection in each case. For example, if you choose Journaling Protection for your VM, you must also choose Journaling Protection for your block storage, that is, Journaling Protection will apply to both.

5. (Optional) Add the Advanced Management option. This option includes Distributed Firewall (DFW), Distributed Logical Router (DLR), L2 VPN advanced networking options and advanced metrics and monitoring provided via the vRealize Operations Tenant Appliance.

6. (Optional) Choose your operating system licensing, such as Microsoft Windows Server or Red Hat Enterprise Linux.

7. Add up the options you've chosen:

    - VM total/hour = VM + Protection + Licensing

    - Storage GiB/month = Storage + Protection

8. To understand your likely monthly cost:

    - VM = (VM total/hour) multiplied by (hours in operation)

    - Storage = (Storage GiB/month) multiplied by (GiB allocated)

9. To model a total cost of ownership, you may also want to consider additional elements, such as connectivity, and service options, such as Cloud Enablement and cross domain services.

## Pricing examples

### [Example 1](#tab/tabid-1)

An application with lower priority workloads, such as temporary applications, data processing or system modelling tasks.

**Security domain:** Assured OFFICIAL<br>
**Workload type:** ESSENTIAL<br>
**VM size:** Small<br>
**Block storage used:** 100GiB Tier 2 block storage<br>
**Protection option:** 14-day Snapshot Protection<br>
**Advanced management:** No<br>
**Operating system:** Red Hat Enterprise Linux

**VM cost per month**

A Small ESSENTIAL VM in the Assured OFFICIAL security domain costs **£0.040** per hour.

14-day Snapshot Protection for a Small VM costs **£0.06** per hour.

Red Hat Enterprise Linux OS licensing for a Small VM costs **£0.040** per hour.

In an average **730** hour month, the monthly VM cost works out at:

Hours in operation | x | (VM     | + | Protection | + | Licensing) | = | VM cost per month
-------------------|---|---------|---|------------|---|------------|---|------------------
730                | x | (£0.040 | + | £0.06      | + | £0.040)    | = | **£102.20**

The Advanced Management bundle is not required so there is no additional uplift.

**Storage cost per month**

A Small VM includes 60GiB of free Tier 2 block storage, so an additional **40GiB** is chargeable.

Tier 2 block storage costs **£0.10** per GiB month.

14-day Snapshot Protection for storage costs **£0.10** per GiB month.

(Storage | + | Protection) | x | GiB used | = | Storage cost per month
---------|---|-------------|---|----------|---|-----------------------
(£0.10   | + | £0.10)      | x | 40       | = | **£8.00**

**Total basic cost**

Calculate the total basic cost by adding together the monthly VM and storage costs.

VM cost per month | + | Storage cost per month | = | Total basic cost
------------------|---|------------------------|---|-----------------
£102.20           | + | £8.00                  | = | **£110.20**

### [Example 2](#tab/tabid-2)

An application with key workloads that are resource intensive, such as web and application workloads, mid-sized databases and caching services.

**Security domain:** Assured OFFICIAL<br>
**Workload type:** POWER<br>
**VM size:** Medium<br>
**Block storage used:** 160GiB Tier 2 block storage<br>
**Protection option:** 14-day Journaling Protection<br>
**Advanced management:** Yes<br>
**Operating system:** Microsoft Windows Server<br>

**VM cost per month**

A Medium POWER VM in the Assured OFFICIAL security domain costs **£0.220** per hour.

14-day Journaling Protection for a Medium VM costs **£0.10** per hour.

Microsoft Windows Server licensing for a Medium VM costs **£0.051** per hour.

In an average **730** hour month, the monthly VM cost works out at:

Hours in operation | x | (VM     | + | Protection | + | Licensing) | = | VM cost per month
-------------------|---|---------|---|------------|---|------------|---|------------------
730                | x | (£0.220 | + | £0.10      | + | £0.051)    | = | **£270.83**

The Advanced Management bundle is required so there is a 15% additional uplift on the VM, bring the VM cost per month to **£311.45**.

**Storage cost per month**

A Medium VM includes 60GiB of free Tier 2 block storage, so an additional **100GiB** is chargeable.

Tier 2 block storage costs **£0.10** per GiB month.

14-day Journaling Protection for storage costs **£0.18** per GiB per month.

(Storage | + | Protection) | x | GiB used | = | Storage cost per month
---------|---|-------------|---|----------|---|-----------------------
(£0.10   | + | £0.18)      | x | 100      | = | **£28.00**

**Total basic cost**

Calculate the total basic cost by adding together the monthly VM and storage costs.

VM cost per month | + | Storage cost per month | = | Total basic cost
------------------|---|------------------------|---|-----------------
£311.45           | + | £28.00                 | = | **£339.45**

***

## Discount options

The following discount and purchase schemes are available with UKCloud for VMware:

- Commitment discount

- Annual subscription discount

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Additional pricing notes

### VM sizing

- For user-defined VMs, the highest resource closest to the VM size will dictate the cost. For example, a VM with 2 vCPUs and 16GiB will be charged at the Medium High Memory cost.

### Storage

- Micro VM pricing incudes 500MHz, 10GiB of Tier 2 storage; all other VM sizes include 60GiB of Tier 2 storage.

- 60GiB of Tier 2 storage is included in the pricing for all VMs whilst they are powered on, except for Micro. For VMs in a powered-off state, consumed storage will be charged at the prevailing rate.

- If you select all Tier 1 storage, there is no free storage allocation.

- Consumed storage includes VM catalog images and snapshots.

- VMs with additional allocated storage will be charged at the prevailing storage rate, regardless of their powered-on/off state.

### Protection

- You must choose the same protection option for both VMs and storage.

### Licensing

- SQL Standard is charged per hour based on the powered-on state of the host VM. SQL Enterprise is charged monthly.

- You must report, via support ticket, which VMs have either SQL Standard or Enterprise installed so that we can license and bill you accordingly. You do have the option to bring your own licences for SQL under Microsoft Mobility, though you must inform us as soon as you receive confirmation from Microsoft that mobility has been agreed. For more information, see [*How to license Microsoft applications/software on the UKCloud platform*](../shared/shared-how-license-microsoft.md).

- Microsoft Windows Server licences must be provided by UKCloud and you'll be billed per hour based on the powered-on state of the host VM.

- If you want to host Oracle solutions on our platform, consult our Cloud Architects, or consider our Dedicated Compute v2 or Private Cloud for Oracle Software services to avoid licensing issues.

### Snapshots

- Self-service snapshots created within VMware Cloud Director will be charged at the rate of the storage they are stored on (Tier 1 or Tier 2), and charged per GiB per month.

- You can use the 60GiB of free VM storage for snapshots.

### Independent disks

- Independent disks will be charged at the rate of the storage they are stored on, along with any additional protection applied (Journaling or Snapshot Protection) and charged at a rate per GiB per month.

- As an independent disk can be mounted to any VM inside a customer's VDC, it cannot be included in the 60GiB of free VM storage.

## Billing and payment information

Billing for the service is one month in arrears. The minimum unit of time for use is one hour. Part hours will be rounded up.

Actual real-time resource usage is measured to the nearest second. At the end of each day, periods of time in identical VM state are grouped together and the total for each group in seconds is rounded up to the nearest hour. An identical VM state has the same power status, VM size, service level, storage size, protection and licensing. Where rounding up of multiple periods in differing states during the same day would result in more than 24 hours of charges, the period with the lowest price per hour is rounded down. For example, if a VM was switched off for a total of 890 minutes but was on for 550 minutes, the billable hours would be rounded up to 10 hours for when the VM was on and the off period would be rounded down to 14 hours to cap the day at 24 hours.

Payment can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

Billing information is provided in an evidence file on the first working day of the month for your previous month's spend. For more information about the invoice evidence file, see [*Understanding your invoice evidence file*](../other/other-ref-invoice-evidence-file.md).

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs. If you're new to UKCloud, you can request a trial via the UKCloud [Free Trial page](https://ukcloud.com/free-trials/). If you're an existing customer, contact your Service Delivery Manager. For more information about free trials, see the [*Free Trials Service Scope*](../other/other-sco-free-trials.md).

## Service scope

For information about what is and isn't included in the UKCloud for VMware service, as well as UKCloud and customer responsibilities, see the [*UKCloud for VMware Service Scope*](vmw-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
