---
title: Pricing information for UKCloud for OpenStack
description: Provides useful information about UKCloud for OpenStack pricing, including pricing examples
services: openstack
author: shighmoor
reviewer: shighmoor
lastreviewed: 13/09/2022
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/ostack-ref-pricing.md
toc_mdlink: ostack-ref-pricing.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Pricing information for UKCloud for OpenStack

## Overview

UKCloud for OpenStack instance pricing can be as low as 1p per hour. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

If you'd like a quote for UKCloud for OpenStack, contact your Service Delivery Manger or email <servicedelivery@ukcloud.com>. Or you can [contact us](https://ukcloud.com/contact/) via our website or call 01252 303 300.

## Instances

Instance pricing is based on a minimum billing period of one hour and depends on the choice of:

- Instance flavour

- Security domain

Each service has a per-unit price. Billing is per unit.

## Persistent block storage

Persistent block storage cost is based on the average storage provisioned by the customer at the end of the month, which is based on daily average measurements.

In addition, our Cloud Storage service is available to provide an API-accessible and S3-compatible object storage solution that complements your OpenStack environment. For full details, see the [Cloud Storage Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-229-cloud-storage-service-definition-13.0-2.pdf).

## Self-service backup and restoration

[*TrilioVault*](ostack-sco-triliovault.md) provides data protection through efficient point-in-time capture, storage and application recovery. TrilioVault is a scalable OpenStack backup and recovery platform that can recover from any point-in-time with a single click usign the Horizon dashboard or leveraging Trilio's rich set of APIs.

TrilioVault is agentless and non-disruptive by design, both during deployment and operation. You can also integrate it with your existing cloud lifecycle management to automate deployment via tools such as Ansible, Puppet, Salt and Chef.

## Licensing

The standard terms and conditions from Microsoft state that if you want to run a Windows Server operating system in the cloud, you must license it via the Service Provider Licence Agreement (SPLA), which must be provided by UKCloud. Microsoft Developer Network (MSDN) and Windows desktop operating system licences are generally not permitted by Microsoft's terms and conditions. UKCloud offers the option for you to bring your own Red Hat licensing, or certain Microsoft application licensing under Microsoft Mobility using software assurance.

If you're licensing Microsoft Windows Server OS, Microsoft SQL Server, Microsoft RDS or Red Hat Enterprise Linux, licensing charges apply. You also have the option of utilising your own subscription-based Office365 and Windows 10 Enterprise licensing under the [QMTH program](https://ukcloud.com/qualified-multitenant-hoster-program/).

## Pricing example

The following example illustrates how to use the information in the Pricing Guide to calculate the cost of a UKCloud for OpenStack instance.

An application with lower priority workloads, such as temporary applications, data processing or system modelling tasks.

**Security domain:** Assured OFFICIAL<br>
**Instance flavour:** 1 t1.small instance<br>
**Persistent block storage used:** 60GiB Tier 2 block storage<br>
**TrilioVault:** Yes<br>
**Operating system:** Red Hat Enterprise Linux

**Instance cost per month**

A t1.small instance in the Assured OFFICIAL security domain costs **£0.030** per hour.

Red Hat Enterprise Linux OS licensing for a t1.small instance costs **£0.040** per hour.

In an average **730** hour month, the monthly instance cost works out at:

Hours in operation | x | (Instance | + | Licensing) | = | Instance cost per month
-------------------|---|-----------|---|------------|---|------------------------
730                | x | (£0.030   | + | £0.040)    | = | **£51.10**

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

**Backup cost per month**

To protect a single instance, TrilioVault costs **£12.00** per instance and **£0.10** per GiB per month.

Monthly subscription | + | Storage cost | = | Backup cost per month
---------------------|---|--------------|---|-----------------------------------
(1 x £12.00)         | + | (60 x £0.10) | = | **£18.00**

**Total basic cost**

Calculate the total basic cost by adding together the monthly instance, storage and backup costs.

Instance cost per month | + | Storage cost per month | + | Backup cost per month | = | Total basic cost
------------------------|---|------------------------|---|-----------------------|---|-----------------
£51.10                  | + | £6.00                  | + |  £18.00               | = |  **£75.10**

## Discount options

The following discount and purchase schemes are available with UKCloud for VMware:

- Commitment discount

- Annual subscription discount

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see [*UKCloud discount and purchase schemes*](../other/other-ref-discount-schemes.md).

## Additional pricing notes

### Shelving instances

- You can [shelve](https://ask.openstack.org/en/question/32000/whats-the-difference-between-shelving-vs-shutting-down-an-instance/) an instance, at which stage all compute charges for the instance will cease and you are only charged at the prevailing rate for the storage the instance was consuming. For all other states, UKCloud will continue to charge for any resources that exist within your OpenStack project.

### Licensing

- SQL Standard is charged per hour based on the powered-on state of the host VM. SQL Enterprise is charged monthly.

- You must report, via support ticket, which VMs have either SQL Standard or Enterprise installed so that we can license and bill you accordingly. You do have the option to bring your own licences for SQL under Microsoft Mobility, though you must inform us as soon as you receive confirmation from Microsoft that mobility has been agreed. For more information, see [*How to license Microsoft applications/software on the UKCloud platform*](../shared/shared-how-license-microsoft.md).

- Microsoft Windows Server licences must be provided by UKCloud and you'll be billed per hour based on the powered-on state of the host VM.

- If you want to host Oracle solutions on our platform, consult our Cloud Architects, or consider our Dedicated Compute v2 or Private Cloud for Oracle Software services to avoid licensing issues.

### Snapshots

- You will only ever be charged for the amount of Tier 1 or Tier 2 storage your snapshots consume, that you have scheduled via the OpenStack dashboard or the API. We do not place any additional premium on top for the snapshot functionality. To calculate an estimated cost of performing snapshots on UKCloud for OpenStack, use the following formula:

    Cost £ = Instance size (GiB) x Number of snapshots to be retained (customer controlled) x Choice of storage (Tier 1 or Tier 2)

    For example, if a customer has an 80GiB Tier 2 instance and performs a snapshot every hour, but only wants to keep the current snapshot, plus the last nine snapshots then:

    80 GiB x 10 snapshots x £0.10 = £80 per month

## Billing and payment information

Billing for the service is one month in arrears. The minimum unit of time for use is one hour. Part hours will be rounded up.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

Billing information is provided in an evidence file on the first working day of the month for your previous month's spend. For more information about the invoice evidence file, see [*Understanding your invoice evidence file*](../other/other-ref-invoice-evidence-file.md). You can also query the OpenStack Ceilometer API to query live event data.

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs. If you're new to UKCloud, you can request a trial via the UKCloud [Free Trial page](https://ukcloud.com/free-trials/). If you're an existing customer, contact your Service Delivery Manager. For more information about free trials, see the [*Free Trials Service Scope*](../other/other-sco-free-trials.md).

## Service scope

For information about what is and isn't included in the UKCloud for OpenStack service, as well as UKCloud and customer responsibilities, see the [*UKCloud for OpenStack Service Scope*](ostack-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
