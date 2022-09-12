---
title: Managed Monitoring as a Service FAQs
description: Frequently asked questions for Managed Monitoring as a Service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 04/02/2022
toc_rootlink: Managed IT Operations
toc_sub1: Managed Monitoring as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Monitoring as a Service FAQs
toc_fullpath: Managed IT Operations/Managed Monitoring as a Service/man-faq-monitoring.md
toc_mdlink: man-faq-monitoring.md
---

# Managed Monitoring as a Service FAQs

## Service

### What is the service?

As customer solutions start to expand beyond their own data centres into embracing the benefits of leveraging multi-cloud, accurate and trusted monitoring of the various technology stacks and locations become highly complex and resource intensive. Managed Monitoring as a Service helps to reduce these challenges, whilst increasing your level of trust and confidence of the true health of your entire IT estate, from IoT edge devices, through to any infrastructure, be it virtual or physical.

With Managed Monitoring as a Service, we become your first line of support, 24 hours a day, 365 days a year, in receiving and reacting to any abnormal events or alerts across your IT estate, reducing the amount of noise customers traditionally must filter through, enabling them to focus on the critical events that really matter.

### What technologies do you use?

UKCloud uses the same technologies we use in house to monitor events across our public clouds to deliver our Managed Monitoring as a Service, providing you with the confidence that well proven and understood technologies are being used to underpin this service.

## Prerequisites

### Do I need to install an agent within my VM to enable this service?

By default, UKCloud will provide this service without the use of an agent by utilising SNMP traps. In situations where non-SNMP events need to be collected, UKCloud may opt to provide a dedicated Monitoring Agent, which can be deployed into the customer's VM to provide a more advanced method of event collection.

### Do I need to open any specific firewall ports or allow firewall rules?

To see a full list of prerequisites, including what ports need to be opened on your firewalls, see [*Managed IT Operations prerequisites*](https://docs.ukcloud.com/articles/managed-operations/man-ref-customer-prereqs.html)

## General

### Do I get access to a dashboard or reports?

As it is assumed UKCloud will manage all monitoring aspects as part of this service, there is currently no dashboard or reporting features for customers to access.

### How do I get alerted on events?

All alerting will be performed via a support ticket or any special escalation process agreed between UKCloud and the customer.

### Can I use my existing polling (monitoring) tooling with this service?

We've designed our Managed Monitoring as a Service solution to be extensible with existing monitoring technology you may have already invested in. We cannot guarantee compatibility with all monitoring tooling, but for information about what to consider if this is something you want to do, see [*How to use your own polling (monitoring) tooling with Managed Monitoring as a Service*](man-how-monitoring-use-customer-polling.md).

### How does UKCloud provide urgent maintenance notifications and incident reports?

Current Service Status reports are published on the [Status Page](https://status.ukcloud.com/). You can view past incident reports on the UKCloud Portal.

## Management

### How do I access my monitoring environment?

As it is assumed UKCloud will manage all monitoring aspects as part of this service, there is currently no environment for customers to access.

### How do I manage my services?

Currently there is no way for a customer to directly manage this service as it is assumed UKCloud will manage all monitoring aspects as part of this service. Any changes to your monitoring service can be made by raising a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

### What reports can I get about performance?

UKCloud does not currently provide instance performance reports, but you can monitor instance performance using standard tools within the operating system.

### Does UKCloud patch the service?

No, you are responsible for the patching of your services. We make a patch repository available to you for instances on the Elevated OFFICIAL cloud platform (which cannot connect to the internet) for common operating systems that we provide.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/login) provides most common service management functionality. You can raise tickets within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

### What are your service maintenance windows?

See [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

### Can UKCloud provide notifications for service status and maintenance?

Yes, you can subscribe to the [UKCloud Service Status page](https://status.ukcloud.com/) to be alerted to service status and maintenance notifications. Notifications can be via email, text, webhook or Atom/RSS feed. For more information, see [*How to subscribe to service status notifications*](../other/other-how-subscribe-service-status.md).

## Onboarding

### How can I get started with the service?

Within 5 business days of accepting an order, UKCloud will create the customer's monitoring environment with default thresholds (unless otherwise specified) and commence monitoring any environments that have been elected by the customer to be monitored.

### Is there a free trial?

Due to the initial complexity of creating the monitoring environment, UKCloud is currently unable to offer a free trial of this service.

## Backup

### Does UKCloud back up Managed Monitoring as a Service?

UKCloud will perform a nightly backup of the configuration of any thresholds or triggers defined as part of this service. All event data is eventually stored within UKCloud's highly resilient centralised monitoring data lake.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is monthly. Part months will be rounded up.

### Will I be charged for resources in a 'Shut Off' state?

UKCloud will continue to charge for any resources that you have elected to be monitored regardless of the state they're in. In order to stop any charges, you'll need to raise a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact support by phone or email.

### How can I view billing information?

Online visibility of real-time or historic billing information is currently not available as a service provided by UKCloud.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

### What are the termination fees?

There are no termination costs for this service.

## Security

### How is my monitoring data kept secure?

UKCloud will deploy and manage all collectors used to monitor customer events, with all traffic being passed via HTTPS.

The data that UKCloud collects as part of this service will never leave a UKCloud data centre or be shared with a third party.

### Is there a protective monitoring service?

Protective monitoring is included with all our IaaS platforms at the hypervisor level and below and follows GPG 13. For more information, see [*Protective Monitoring from UKCloud*](../other/other-ref-promon.md).

If you require protective monitoring services above the hypervisor we offer our Security Operations Service to monitor your virtual estate (additional charges apply). For more information, see the [Security Operations Service Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-239-security-operations-service-service-definition-13.0.pdf).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
