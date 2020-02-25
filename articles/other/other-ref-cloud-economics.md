---
title: Cloud economics
description: One of the core benefits of true cloud services is the utility price models that they are based on. This pricing is designed to facilitate new levels of agility, flexibility and scalability in stark contrast to traditional solutions
services: other
author: Matt Warner
reviewer:
lastreviewed: 23/07/2018 14:44:15
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud economics
toc_fullpath: Reference/other-ref-cloud-economics.md
toc_mdlink: other-ref-cloud-economics.md
---

# Cloud Economics

Pricing for virtual machines (VMs) provided by UKCloud, is based on actual consumption (per VM, per hour, per GB per month). It's essential that you base your cloud solution on predicted usage rather than your predicted peak demand for example, as you might when specifying traditional solutions.

To help you specify your cloud solution, you should consider the following:

## What's the ramp up period from zero to full utilisation?

If your business-as-usual solution requires 50 servers and your go-live is in six months’ time, it's likely that you might only need five servers in month one and 15 in month two for example.

## Do all the servers have to run all the time?

As VMs are charged by the hour, you can make significant savings by turning off your VMs when they are not needed (for example, overnight or during weekends).

## Would you benefit from an annual subscription?

For those VMs that need to run 24/7, you should consider a 12-month subscription which would mean charges for those VMs will benefit from a discount.

Some non-production environments might only be required during certain times of the project/year. So if you only need a UAT environment one week per month, be sure to factor that in when estimating your hourly costs.

## Are your servers right-sized?

It's very easy to increase the processing, memory or storage resources of your servers; you may want to start small and scale up as and when you need more capacity instead of starting big and leaving those resources under-utilised.

## Do you need those redundant VMs?

Our platform offers inherent resilience to mitigate hardware failure and even site failure. Be sure you need redundancy at the application layer before you add in the additional cost by provisioning redundant VMs.

## Do you need dedicated blades to comply with application licensing requirements?

UKCloud offers a variety of service options for compute resources, refer to the relevant [*Service Definitions and Pricing Guide*](other-ref-service-definitions.md) for more information.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
