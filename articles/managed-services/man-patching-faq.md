---
title: Patching as a Service FAQs
description: Frequently asked questions for Patching as a Service
services: managed-services
author: sdixon
reviewer: sdixon
lastreviewed: 01/03/2021
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

Built on the capabilities of our [Managed Monitoring as a Service](https://docs.ukcloud.com/articles/managed-services/man-monitoring-sco.html), UKCloud uses a combination of patches released directly by the vendor coupled with [Ivanti Security Controls](https://www.ivanti.com/products/security-controls), a market-leading enterprise patch management and control solution, as the key technologies to deliver Patching as a Service.

### Do I get access to a dashboard or reports?

As it is assumed UKCloud will manage all patching aspects as part of this service, there are currently no dashboard or reporting features for customers to access.

### How do I get alerted on events?

All alerting will be performed via a support ticket or any special escalation process agreed between UKCloud and the customer.

### How does UKCloud provide urgent maintenance notifications and incident reports?

We do not envisage any scenarios that prevent UKCloud in meeting the availability KPI defined within the [Service Scope](https://docs.ukcloud.com/articles/managed-services/man-patching-sco.html) for this service.

Current Service Status reports and past incident reports are published on the [UKCloud Service Status page](https://status.ukcloud.com/).

### How does the patching cycle work?

OS vendors such as Microsoft release updates for their operating systems and associated packages in two ways:

* To a specific schedule: "Patch Tuesday" / "Update Tuesday"

* Ad-hoc, throughout the course of each month

As such, any patching cycle needs to take into consideration the two potential release mechanisms for updates. For our Patching as a Service, we use a batch approach with specific cut-off dates, which we consider to be the best approach to maintain consistency in UKCloud's service, provide a good level of responsiveness to patch releases and also to insulate sufficiently against erroneous upstream vendor patches or errors. This means that there's a specific cut-off after which point any patches released will not be included in that cycle (see [Windows Patches vs Linux Package Updates](#windows-patches-vs-linux-package-updates)). Rather being a limitation, this ensures that we can correctly  and efficiently track activities when dealing with customer VMs.

The following diagram shows the six available cut-off dates and associated Device Groups (Device Group A to J) that customers can choose to group patch some or all of their VMs:

<div style="text-align:center"><img alt="Patching Cycles" src="images/man-patching-patchingcycle.png" /></div>

> [!NOTE]
> * Patching cycle is two weeks long (dates above show day number from beginning of each cycle rather than day of month).
>
> * Customers are advised to use ***Device Groups A to E*** to test patches on VMs within a representative non-production environment.
>
> * Customers are advised to use ***Device Groups F to J*** to apply patches on VMs within their production environments on the basis that no issues ave been identified in their non-production environments.

### How do I recover from applying a patch that may have had an adverse effect on my environment?

Before applying patches within a production environment, it is the customer's responsibility to test those patches in a representative non-production environment to detect any potential adverse impact within the production environment.

For customers using Patching as a Service on our UKCloud for VMware platform, UKCloud will endeavour to create a recovery point of a VM immediately prior to applying patches. As we cannot guarantee the creation of a recovery point (for example, open files may block the creation of a recovery point), UKCloud provides the following options for customers to choose from to determine how Patching as a Service should proceed should the creation of a recovery point fail:

- Hard (default option): The patching system will attempt to snapshot the virtual machine prior to applying any patches. If the snapshot is unsuccessful, patching will not proceed.

- Soft: The patching system will attempt to snapshot the virtual machine prior to applying any patches. If the snapshot is unsuccessful, patching will still proceed.

- Disabled: The patching system will not attempt to snapshot the virtual machine prior to applying any patches. This option is for virtual machines not running on the UKCloud VMware platform, or for virtual machines that are unable to have snapshots taken.

UKCloud will retain any successful recovery points for a maximum of 48 hours, therefore it is essential that customers check for any potential issues within 48 hours of any patches being applied.

### Windows patches vs Linux package updates

There are major differences between the way that Microsoft releases patches for its Windows OSs and the way that most Linux distribution vendors provide updates. The key difference is:

* Microsoft releases patches for their OS (which can be either critical or recommended)

* Linux vendors release patches for individual packages that make up the OS. 
 
To make best use of existing tooling within those Linux distributions, our service will update a package rather than an individual patch (for example, the equivalent of running `yum update httpd`, which will include **all** patches related to the httpd package).

### What if the application of a patch fails?

Each patching window is followed by 18 hours of issue resolution time, in which issues during automatic patching are investigated and may involve actions such as manual application of patches, and so on. Following the end of this window, the customer will be contacted by UKCloud Support with the current state. If more time is required, this will be arranged at that point.

### What if I require additional patches outside of my standard patching cycle?

The customer is responsible for notifying UKCloud of any patches (including critical patches) they require to be applied outside of their standard patching cycle via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. UKCloud will not proactively scan for or apply any patches outside of a customer's standard patching cycle. Should a customer raise a Service Request for patches to be applied outside of their standard patching cycle, our standard [Service Request resolution target](https://docs.ukcloud.com/articles/portal/ptl-how-raise-escalate-service-request.html?q=ticket) will apply, with the clock starting from the point we receive the Service Request **and** a vendor released patch being made publicly available.

## Prerequisites

### Operating systems

UKCloud will only support in-life, vendor-backed operating systems, such as Microsoft Windows, Red Hat Enterprise Linux and Canonical Ubuntu. Customer-built operating systems (for example Gentoo Linux custom build) are unsupported by this service.

### Customer environment configuration

**General** - For UKCloud to correctly scan for and apply OS patches, the customer must agree to and configure port 445 to be open on all virtual machines and associated operating systems opted-in to this service.

**Linux Only** - To provide secure communication between UKCloud's centralised patch management platform and a customer's virtual machine, we use key-based SSH sessions, reducing the need to share credentials. As such, we'll need the following prerequisites to be fulfilled ***on each virtual machine*** subscribing to this service:

- An allow rule for Port 22 (SSH) on your virtual machine's firewall (for example, iptables).

- A local user account with passwordless sudo access. You'll need to share details of this account with UKCloud when onboarding to this service.

- UKCloud will provide you with a public SSH key during the onboarding process. You'll need to append this key to the `authorized_keys` file, located at `~/.ssh/authorized_keys` within the home directory of the user you created in the step above.

## Management

### How do I access my patching environment?

As it is assumed UKCloud will manage all OS patching aspects as part of this service, there is currently no environment for customers to access.

### How do I manage my services?

As it is assumed UKCloud will manage all OS patching aspects as part of this service, there is currently no way for customers to directly manage this service. 

Any changes to patch scheduling after customers have selected their patch windows will require consultation and should be requested initially by raising a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/login) provides most common service management functionality. You can raise tickets within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### What are your service maintenance windows?

See [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

### Can UKCloud provide notifications for service status and maintenance?

Yes, you can subscribe to the [UKCloud Service Status page](https://status.ukcloud.com/) to be alerted to service status and maintenance notifications. Notifications can be via email, text, webhook or Atom/RSS feed. For more information, see [*How to subscribe to service status notifications*](../other/other-how-subscribe-service-status.md).

## Onboarding

### How can I get started with the service?

Within 5 business days of accepting an order, UKCloud will create the customer's patching environment and commence patching any environments in line with the Device Group schedules they have opted-in to.

### Is there a free trial?

Due to the initial complexity of configuring the patching environment, UKCloud is currently unable to offer a free trial of this service.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is monthly. Part months will be rounded up.

### Will I be charged for resources in a 'shut off' state?

UKCloud will continue to charge for any resources that you have elected to be monitored regardless of the state they're in. To stop any charges, you'll need to raise a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### How can I view billing information?

Online visibility of real-time or historic billing information is currently not available as a service provided by UKCloud.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

### What are the termination fees?

There are no termination costs for this service.

## Security

### How is any data related to this service kept secure?

UKCloud will deploy and manage all agents used to deliver this service, with all traffic being passed via HTTPS.

Any customer data that UKCloud collects as part of this service will never leave a UKCloud data centre or be shared with a third party.

### Is there a protective monitoring service?

Protective monitoring is included with all our IaaS platforms and follows GPG 13.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
