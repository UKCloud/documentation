---
title: Cloud economics
description: One of the core benefits of true cloud services is the utility price models that they are based on. This pricing is designed to facilitate new levels of agility, flexibility and scalability in stark contrast to traditional solutions
services: other
author: mwarner
reviewer: shall
lastreviewed: 26/09/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud economics
toc_fullpath: Reference/other-ref-cloud-economics.md
toc_mdlink: other-ref-cloud-economics.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Cloud Economics

Pricing for virtual machines (VMs) provided on UKCloud's multi-cloud platform, is based on actual consumption (per VM, per hour, per GiB per month). It's essential that you base your cloud solution on predicted usage rather than your predicted peak demand. Unlike traditional IT solutions, cloud-based computing can scale depending on workload requirements so you only need to account for standard usage.

To help you specify your cloud solution, you should consider the following:

## What's the ramp up period from zero to full utilisation?

If your business-as-usual solution requires 50 servers and your go-live is in six months’ time, it's likely that you might only begin with five servers and then slowly increase the number of servers as you near your go-live date.

## Do all the servers have to run all the time?

As VMs are charged by the hour, you can make significant savings by powering off your VMs when they are not required (for example, overnight or during weekends).

## Would you benefit from an annual subscription?

For those VMs that need to run 24/7, you should consider a 12-month subscription which would mean charges for those VMs will benefit from a discount. See the "Discount and purchase schemes" section of the Price Guide for more information on commitment discounts. 

Some non-production environments may only be required during certain times of the project/year. So if you only need a UAT environment one week per month, be sure to factor that in when estimating your hourly costs.

## Are your servers right-sized?

A significant aspect of cloud computing is self-service; it's very easy to increase the processing, memory or storage resources of your servers. You may want to start small and scale up, as and when you need more capacity, instead of starting big and leaving resources under-utilised as this increases your operating costs. It's also important to note that you can scale down VMs when resource requirements shrink, so you can reduce your hourly costs and avoid wastage. Additionally, some customers may prefer to have a higher number of smaller sized VMs working in a cluster for redundancy and load balancing, rather than a smaller number of large expensive VMs.

## Do you need those redundant VMs?

Our platform offers inherent resilience to mitigate hardware failure and even site failure. Be sure that you need redundancy at the application layer before you add in the additional cost by provisioning redundant VMs.

## Do you need dedicated blades to comply with application licensing requirements?

UKCloud offers a variety of service deployment options for compute resources to ensure they meet licensing standards. Many popular applications can be licensed on our multi-tenant platform. However, some applications need to run on dedicated environments to limit cost and remain compliant. See our [*Service Definitions and Pricing Guide*](other-ref-service-definitions.md) for more information or email products@ukcloud.com

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
