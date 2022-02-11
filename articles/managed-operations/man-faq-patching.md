---
title: Patching as a Service FAQs
description: Frequently asked questions for Patching as a Service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 20/08/2021
toc_rootlink: Managed IT Operations
toc_sub1: Patching as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Patching as a Service FAQs
toc_fullpath: Managed IT Operations/Patching as a Service/man-faq-patching.md
toc_mdlink: man-faq-patching.md
---

# Patching as a Service FAQs

## Service

### What is the service?

As customer solutions start to expand beyond their own data centres into embracing the benefits of leveraging multi-cloud, the day-to-day management and control of operating system (OS) patching across various technology stacks and locations become highly complex and resource intensive. Patching as a Service helps to reduce these challenges, whilst increasing your level of trust and confidence in the security health of any operating systems deployed as part of your solution stack.

With Patching as a Service, we provide routine OS patch management for compute instances deployed across UKCloud's multi-cloud. It helps you accelerate business value by removing the burden of basic OS hygiene, letting you focus your attention above the operating system.

### What technologies do you use?

Built on the capabilities of our [Managed Monitoring as a Service](man-sco-monitoring.md), UKCloud uses a combination of patches released directly by the vendor coupled with [Ivanti Security Controls](https://www.ivanti.com/products/security-controls), a market-leading enterprise patch management and control solution, as the key technologies to deliver Patching as a Service.

### Do I get access to a dashboard or reports?

As it is assumed UKCloud will manage all patching aspects as part of this service, there are currently no dashboard or reporting features for customers to access.

### How do I get alerted on events?

All alerting will be performed via a support ticket or any special escalation process agreed between UKCloud and the customer.

### How does UKCloud provide urgent maintenance notifications and incident reports?

We do not envisage any scenarios that prevent UKCloud in meeting the availability KPI defined within the [Service Scope](man-sco-patching.md) for this service.

Current Service Status reports and past incident reports are published on the [UKCloud Service Status page](https://status.ukcloud.com/).

### What type of patches will be applied?

For Microsoft operating systems we'll scan for and recommend applying any patches classified by Microsoft as being 'Security Patches' of any severity (Critical to Low). Additional patches for items such as 'Feature Packs' or general driver updates are excluded from this service.

For Linux operating systems we'll scan for and recommend applying any packages that have an update available in the repositories specified within the guest operating system (equivalent to manually running a `yum update list` command in RHEL or CentOS).

### How does the patching cycle work?

OS vendors such as Microsoft release updates for their operating systems and associated packages in two ways:

* To a specific schedule: "Patch Tuesday" / "Update Tuesday"
* Ad-hoc, throughout the course of each month

As such, any patching cycle needs to take into consideration the two potential release mechanisms for updates. For our Patching as a Service, we use a batch approach with specific cut-off dates, which we consider to be the best approach to maintain consistency in UKCloud's service, provide a good level of responsiveness to patch releases and also to insulate sufficiently against erroneous upstream vendor patches or errors. This means that there's a specific cut-off after which point any patches released will not be included in that cycle (see [Windows Patches vs Linux Package Updates](#windows-patches-vs-linux-package-updates)). Rather being a limitation, this ensures that we can correctly and efficiently track activities when dealing with customer VMs.]

UKCloud's patching schedule works as detailed below.

**2nd Tuesday of the Month (Patch Tuesday)**

* Microsoft release critical patches for the month

**3rd Tuesday of the Month**

* Microsoft release further patches addressing any issues with patches on Patch Tuesday

**3rd Wednesday of the Month**

* Between 12am and 6am the Patching Service Scans all endpoints for vulnerabilities and updates the patching information in the database
* At 12pm the Patching Service ceates a "Patching Notification" service request for each patch group for customer's visibility. A notification email is also sent.
* Customers have from the time they receive the notification to the beginning of their patch window to notify UKCloud Support if they wish to opt-out of any patches.

**3rd Thursday of the Month**

* Patching commences for all patch groups on the below schedule. Steps taken during patching run are:
* Devices are put into maintenance in the UKCloud monitoring system. Managed Monitoring tickets will not be raised against devices in their patching window to avoid false positives.
* UKCloud Linux Patching System connects to all customer devices via ssh and commences applying all patches that have not been identified as opted out or permanently excluded.
	* A report is then attached to the previously raised service request and the service request is updated with the Linux Patching Outcome.
* UKCloud Windows Patching System connects performs a scan against each customer device for the patches that have not been identified as opted out or permanently excluded.
	* It then performs a patch deployment against each scan that found patches to apply. 
	* A report is then attached to the previously raised service request and the service request is updated with the Windows Patching Outcome.
* If both the Windows and Linux Patching Outcome are set to Completed successfully the Service Request is closed.
* If either Operating System outcome is set to "completed with errors" or "failed" the customer is updated with an email. The customer must investigate errors and contact UKCloud Support if they require assistance.
	* If there has been no update after 2 weeks, the service request times out and UKCloud Support are alerted that not all patching was completed for the customer's patch group. UKCloud support will try to contact the customer before ultimately closing the "Patching Notification" service request.

**5th Wednesday of the Month**

* Between 12am and 6am the Patching Service Scans all endpoints for vulnerabilities and updates the patching information in the database
* At 12pm the Patching Service Creates Service Requests for each patch group in My Calls. A notification email is sent
* Customers have from the time they receive the notification to the beginning of their patch window to notify UKCloud Support if they wish to opt-out of any patches.

**5th Thursday of the Month**

* Patching commences again for all patch groups.

The full schedule can be seen below.

| **Group** | **Day** | **Time**      | **Cycle** |
|----------:|---------|---------------|-----------|
| A         | Thurs   | 00:00 - 05:00 | 1         |
| B         | Thurs   | 06:00 - 11:00 | 1         |
| C         | Thurs   | 12:00 - 17:00 | 1         |
| D         | Thurs   | 18:00 - 23:00 | 1         |
| E         | Fri     | 00:00 - 05:00 | 1         |
| F         | Fri     | 06:00 - 11:00 | 1         |
| G         | Fri     | 12:00 - 17:00 | 1         |
| H         | Fri     | 18:00 - 23:00 | 1         |
| I         | Sat     | 00:00 - 05:00 | 1         |
| J         | Sat     | 06:00 - 11:00 | 1         |
| K         | Sat     | 12:00 - 17:00 | 1         |
| L         | Sat     | 18:00 - 23:00 | 1         |
| M         | Sun     | 00:00 - 05:00 | 1         |
| N         | Sun     | 06:00 - 11:00 | 1         |
| O         | Sun     | 12:00 - 17:00 | 1         |
| P         | Sun     | 18:00 - 23:00 | 1         |
| Q         | Mon     | 00:00 - 05:00 | 1         |
| R         | Mon     | 06:00 - 11:00 | 1         |
| S         | Mon     | 12:00 - 17:00 | 1         |
| T         | Mon     | 18:00 - 23:00 | 1         |
| U         | Tues    | 00:00 - 05:00 | 1         |
| V         | Tues    | 06:00 - 11:00 | 1         |
| W         | Tues    | 12:00 - 17:00 | 1         |
| X         | Tues    | 18:00 - 23:00 | 1         |

| **Group** | **Day** | **Time**      | **Cycle** |
|----------:|---------|---------------|-----------|
| AA        | Thurs   | 00:00 - 05:00 | 2         |
| AB        | Thurs   | 06:00 - 11:00 | 2         |
| AC        | Thurs   | 12:00 - 17:00 | 2         |
| AD        | Thurs   | 18:00 - 23:00 | 2         |
| AE        | Fri     | 00:00 - 05:00 | 2         |
| AF        | Fri     | 06:00 - 11:00 | 2         |
| AG        | Fri     | 12:00 - 17:00 | 2         |
| AH        | Fri     | 18:00 - 23:00 | 2         |
| AI        | Sat     | 00:00 - 05:00 | 2         |
| AJ        | Sat     | 06:00 - 11:00 | 2         |
| AK        | Sat     | 12:00 - 17:00 | 2         |
| AL        | Sat     | 18:00 - 23:00 | 2         |
| AM        | Sun     | 00:00 - 05:00 | 2         |
| AN        | Sun     | 06:00 - 11:00 | 2         |
| AO        | Sun     | 12:00 - 17:00 | 2         |
| AP        | Sun     | 18:00 - 23:00 | 2         |
| AQ        | Mon     | 00:00 - 05:00 | 2         |
| AR        | Mon     | 06:00 - 11:00 | 2         |
| AS        | Mon     | 12:00 - 17:00 | 2         |
| AT        | Mon     | 18:00 - 23:00 | 2         |
| AU        | Tues    | 00:00 - 05:00 | 2         |
| AV        | Tues    | 06:00 - 11:00 | 2         |
| AW        | Tues    | 12:00 - 17:00 | 2         |
| AX        | Tues    | 18:00 - 23:00 | 2         |


> [!NOTE]
> * Patching cycle is two weeks long (dates above show day number from beginning of each cycle rather than day of month).
>
> * 5th and 6th weeks of the month may occur at the beginning of the following week
>
> * Customers are advised to use ***Device Groups A to X*** to test patches on VMs within a representative non-production environment.
>
> * Customers are advised to use ***Device Groups AA to AX*** to apply patches on VMs within their production environments on the basis that no issues have been identified.


### Does my server/virtual machine need to be powered-on for the patching service to run?

For the patching service to operate correctly, VMs must be in a powered-on and available state throughout the patching schedule selected by the customer. The patching service is currently unable to change the power state of any server or virtual machine ahead of the selected patching schedule. Any server or VM in a powered-off state during the selected patching schedule will not be scanned for missing patches or have missing patches applied.

### Why are virtual appliances excluded from the scope of this service?

Due to the tightly coupled nature of the operating system and application created when a vendor releases a virtual appliance, there's a high risk of corruption of the virtual appliance and its service availability should standard operating system patches be applied. This risk becomes even greater should a vendor modify the operating system a virtual appliance is based upon, something which is outside of UKCloud's control.   

### How do I recover from applying a patch that may have had an adverse effect on my environment?

Before applying patches within a production environment, it is the customer's responsibility to test those patches in a representative non-production environment to detect any potential adverse impact within the production environment.

For customers using Patching as a Service on our UKCloud for VMware platform, UKCloud will endeavour to create a recovery point of a VM immediately prior to applying patches. As we cannot guarantee the creation of a recovery point (for example, open files may block the creation of a recovery point), UKCloud provides the following options for customers to choose from to determine how Patching as a Service should proceed should the creation of a recovery point fail:

* Hard (default option): The patching system will attempt to snapshot the virtual machine prior to applying any patches. If the snapshot is unsuccessful, patching will not proceed.

* Soft: The patching system will attempt to snapshot the virtual machine prior to applying any patches. If the snapshot is unsuccessful, patching will still proceed.

* Disabled: The patching system will not attempt to snapshot the virtual machine prior to applying any patches. This option is for virtual machines not running on the UKCloud VMware platform, or for virtual machines that are unable to have snapshots taken.

UKCloud will retain any successful recovery points for a maximum of 48 hours, therefore it is essential that customers check for any potential issues within 48 hours of any patches being applied.

### Windows patches vs Linux package updates

There are major differences between the way that Microsoft releases patches for its Windows OSs and the way that most Linux distribution vendors provide updates. The key difference is:

* Microsoft releases patches for their OS (which can be either critical or recommended)

* Linux vendors release patches for individual packages that make up the OS. 
 
To make best use of existing tooling within those Linux distributions, our service will update a package rather than an individual patch (for example, the equivalent of running `yum update httpd`, which will include **all** patches related to the httpd package).

### What if the application of a patch fails?

Should the application of a patch fail, the UKCloud Patching system will update the "Patching Notification" service request with the outcome and the post-patch report attached to the request will include information about what device have failed to patch, and why. After two weeks of no update on a service request related to a patching group that has failed to patch, UKCloud support will make best efforts to contact the customer once more before closing the service request off.

It is a customer responsibility to ensure their devices are successfully patching and to investigate any failures. UKCloud support is available to provide assistance with troubleshooting and investigation if required, and can be contacted by updating the "Patching Notification" service request.

### What if I require additional patches outside of my standard patching cycle?

The customer is responsible for notifying UKCloud of any patches (including critical patches) they require to be applied outside of their standard patching cycle via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. UKCloud will not proactively scan for or apply any patches outside of a customer's standard patching cycle. Should a customer raise a Service Request for patches to be applied outside of their standard patching cycle, our standard [Service Request resolution target](../portal/ptl-how-raise-escalate-service-request.md) will apply, with the clock starting from the point we receive the Service Request **and** a vendor released patch being made publicly available.

## Prerequisites

### Operating systems

UKCloud will only support in-life, vendor-backed operating systems, such as Microsoft Windows, Red Hat Enterprise Linux and Canonical Ubuntu. Customer-built operating systems (for example Gentoo Linux custom build) are unsupported by this service.

### Customer environment configuration

**General** - For UKCloud to correctly scan for and apply OS patches, the customer must agree to enabling and configuring the Server Message Block (SMB) protocol by ensuring ports 445 and 139 (both over TCP) are open on all virtual machines and associated operating systems opted-in to this service.

**Linux Only** - To provide secure communication between UKCloud's centralised patch management platform and a customer's virtual machine, we use key-based SSH sessions, reducing the need to share credentials. As such, we'll need the following prerequisites to be fulfilled ***on each virtual machine*** subscribing to this service:

* An allow rule for port 22 (SSH) on your virtual machine's firewall (for example, iptables).

* A local user account with passwordless sudo access. You'll need to share details of this account with UKCloud when onboarding to this service.

* UKCloud will provide you with a public SSH key during the onboarding process. You'll need to append this key to the `authorized_keys` file, located at `~/.ssh/authorized_keys` within the home directory of the user you created in the step above.

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
