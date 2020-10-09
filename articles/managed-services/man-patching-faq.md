---
title: Patching as a Service FAQs
description: Frequently asked questions for Patching as a Service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 08/10/2020 15:17:17
toc_rootlink: Managed IT Operations
toc_sub1: Patching as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Patching as a Service FAQs
toc_fullpath: Managed IT Operations/Patching as a Service/man-patching-faq.md
toc_mdlink: man-patching-faq.md
---

# Patching as a Service FAQs

## Service

### What is the service?

As customer solutions start to expand beyond their own data centres into embracing the benefits of leveraging multi-cloud, the day-to-day management and control of operating system (OS) patching across various technology stacks and locations become highly complex and resource intensive. Patching as a Service helps to reduce these challenges, whilst increasing your level of trust and confidence in the security health of any operating systems deployed as part of your solution stack.

With Patching as a Service, we provide routine OS patch management for compute instances deployed across UKCloud's multi-cloud. It helps you accelerate business value by removing the burden of basic OS hygiene, letting you focus your attention above the operating system.

### What technologies do you use?

Built-upon the capabilities of our [Managed Monitoring as a Service](https://docs.ukcloud.com/articles/managed-services/man-monitoring-sco.html), UKCloud uses a combination of patches released directly by the vendor coupled with [Ivanti Security Controls](https://www.ivanti.com/products/security-controls), a market leading enterprise patch management and control solution, as the key technologies to deliver Patching as a Service.

### Do I get access to a dashboard or reports?

As it is assumed UKCloud will manage all patching aspects as part of this service, there is currently no dashboard or reporting features for customers to access.

### How do I get alerted on events?

All alerting will be performed via a support ticket or any special escalation process agreed between UKCloud and the customer.

### How does UKCloud provide urgent maintenance notifications and incident reports?

We envisage that there should not be a scenario which prevents UKCloud in meeting the availability KPI defined within the [Service Scope](https://docs.ukcloud.com/articles/managed-services/man-patching-sco.html) for this service. Current Service Status and past incident reports are published on the [Status Page](https://status.ukcloud.com/).

### How does the patching cycle work?

Operating system vendors such as Microsoft release updates for their operating systems and associated packages in two ways:

* To a specific schedule: "Patch Tuesday" / "Update Tuesday"
* Ad-hoc, throughout the course of each month

As such, any patching cycle needs to take into consideration the two potential release mechanisms for updates, and as such a batch approach with specific cut-off dates is deemed the best approach to maintain consistency in UKCloud's service, provide a good level of responsiveness to patch releases, and also to insulate sufficiently against erroneous upstream vendor patches or errors. What this means is that there is a specific cut-off at which point patches released after that time will not be included in that cycle (see [Windows Patches vs Linux Package Updates](#windows-patches-vs-linux-package-updates) ). Rather than this being a limitation, this is in order to ensure that correct tracking of activities can take place when dealing with customer VMs in an efficient manner.

The following diagram shows the six available cut-off dates and associated Device Groups (Device Group A to J) of which a customer can choose to group patch some or all of their VMs

<div style="text-align:center"><img alt="Patching Cycles" src="images/man-patching-patchingcycle.png" /></div>

Notes:
* Patching cycle is two weeks long (dates above show day number from beginning of each cycle rather than day of month).
* Customers are advised to use ***Device Groups A to E*** to test patches on VMs within a representative non-production environment
* Customers are advised to use ***Device Groups F to J*** to apply patches on VMs within their production environments on the basis that no issues ave been identified in their non-production environments

### Windows Patches vs Linux Package Updates

There are major differences between the way that Microsoft releases patches for its Windows operating systems, and the way that most Linux distribution vendors provide updates. The key difference is
* Microsoft release patches for their operating system (which can be either critical or recommended)
* Linux vendors release patches for individual packages that make up the operating system. 
 
To make best use of existing tooling within those Linux distributions, our service will update a package, rather than an individual patch (for example the equivalent of running `yum update httpd`, which will include **all** patches related to the httpd package).

### What if a the application of a patch fails?

Each patching window is followed by 18 hours of issue resolution time in which issues during automatic patching are investigated and may involve actions such as manual application of patches, etc. Following the end of this window, the customer will be contacted by UKCloud Support with the current state and if more time is required, this will be arranged then.

## Management

### How do I access my patching environment?

As it is assumed UKCloud will manage all OS patching aspects as part of this service, there is currently no environment for customers to access.

### How do I manage my services?

Currently there is no way for a customer to directly manage this service as it is assumed UKCloud will manage all OS patching aspects as part of this service. 

Any changes to patch scheduling after customers have selected their patch windows will require consultation and should be requested initially by raising a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/login) provides most common service management functionality. You can raise tickets within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

### What are your service maintenance windows?

As far as possible, planned maintenance of UKCloud's infrastructure takes place periodically and at a time that aims to minimise customer impact. We provide customers with at least 14 days' advance notice of planned maintenance.

As far as possible, emergency maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Friday, or between the hours of 08:00 and 12:00 (UK local time) on Saturday or Sunday, unless there is an identified and demonstrable immediate risk to a customer's environment. Whenever possible, we provide customers with at least six hours' advance notice of emergency maintenance.

### Can I configure email alerts from the Portal?

Yes, you can have Portal notifications sent to you at the email address associated with your Portal login. Notifications provide information about updates to UKCloud services, in addition to maintenance and incident notifications.

## Onboarding

### How can I get started with the service?

Within 5 business days of accepting an order, UKCloud will create the customer's patching environment and commence patching any environments in-line with the Device Group schedules they have opted-in to.

### Is there a free trial?

Due to the initial complexity of configuring the patching environment, UKCloud is currently unable to offer a free trial of this service.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is monthly. Part months will be rounded up.

### Will I be charged for resources in a 'Shut Off' state?

UKCloud will continue to charge for any resources that you have elected to be monitored regardless of the state they're in. In order to stop any charges, you'll need to raise a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

### How can I view billing information?

Online visibility of real-time or historic billing information is currently not available as a service provided by UKCloud.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

### What are the termination fees?

There are no termination costs for this service.

## Security

### How is any data related to this service kept secure?

UKCloud will deploy and manage all agents used to deliver this service, with all traffic being passed via HTTPS.

Any customer data that UKCloud collects as part of this service will never leave a UKCloud data centre or be shared with a third party.

### Is there a protective monitoring service?

Protective monitoring is included with all our IaaS platforms and follows GPG 13.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
