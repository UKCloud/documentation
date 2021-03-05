---
title: Advanced Managed Services FAQs
description: Frequently asked questions for Advanced Managed Services
services: managed-services
author: sdixon
reviewer:
lastreviewed: 03/03/2021
toc_rootlink: Advanced Managed Services
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Advanced Managed Services FAQs
toc_fullpath: Advanced Managed Services/man-adv-managed-svcs-faq.md
toc_mdlink: man-adv-managed-svcs-faq.md
---

# Advanced Managed Services FAQs

## Service

### What is the service?

Advanced Managed Services is a suite of specialised managed support products focused on the middleware and back-end services supporting your solutions. This suite is comprised of the following products:

- **Managed SQL Server** - Provides monitoring and support for your SQL servers.

- **Managed Web Server** - Provides you with monitoring and support for IIS or Apache and supporting Windows or Linux servers.

- **Managed Active Directory (AD) Support** - Provides you with monitoring and support for your AD services and supporting Windows servers.

- **Managed Remote Desktop Services (RDS) Support** - Provides you with monitoring and support for your RDS and supporting Windows servers.

### Does UKCloud deliver these services directly?

Due to the technical competencies required to safely deliver these services, UKCloud may call upon the services of [Bell Integration](https://www.bell-integration.com/) to offer specialist level 3 support services and technical expertise.

UKCloud will always be your single point of contact and retain ownership for all support incidents and service requests, using Bell Integration as a third-line resolver group to augment our existing support capabilities for the technologies listed above. All UKCloud’s standard service levels will still be applicable on the occasions where we escalate to Bell Integration for additional support.

Situations where UKCloud may call upon the specialisms of Bell Integration include: 

- Patching of the above services to help ensure the health of your environments

- Third-line incident support escalations

- Assistance in a basic level of tuning and optimisation

- Assistance with backup and recovery tasks specific to the technologies listed above

### Why have UKCloud chosen to embed Bell Integration in the delivery of these services?

Bell Integration is a UK based organisation with a pedigree of offering specialised IT and Managed Services since 1996.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/login) provides most common service management functionality. You can raise tickets within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### What are your service maintenance windows?

See [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

### Can UKCloud provide notifications for service status and maintenance?

Yes, you can subscribe to the [UKCloud Service Status page](https://status.ukcloud.com/) to be alerted to service status and maintenance notifications. Notifications can be via email, text, webhook or Atom/RSS feed. For more information, see [*How to subscribe to service status notifications*](../other/other-how-subscribe-service-status.md).

## Onboarding

### How can I get started with the service?

Within 5 business days of accepting an order, UKCloud will endeavor to enable selected services.

### Is there a free trial?

Due to the initial complexity of configuring the required environments, UKCloud is currently unable to offer a free trial of this service.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is 12 months.

### Will I be charged for resources in a 'shut off' state?

UKCloud will continue to charge for any resources for which you have elected to be covered by this service, regardless of the state they're in. To stop any charges, you'll need to raise a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### How can I view billing information?

Online visibility of real-time or historic billing information is currently not available as a service provided by UKCloud.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

### What are the termination fees?

There are no termination costs for this service once minimum term commitments have been met.

## Security

### Do I need to install an agent on my endpoints to enable this service?

Where possible UKCloud will provide these services without the use of an agent by utilising SNMP traps. In situations where non SNMP events need to be collected, UKCloud may opt to provide a dedicated agent, which can be deployed into the customer's VM to provide a more advanced method of event collection. To ensure the correct operation of the agent once installed, port 5666 will need to be opened on Linux VMs, and port 5985 and/or port 5986 must be opened for Windows VMs.

### How is any data related to this service kept secure?

Bell Integration has undergone a thorough vendor assessment and approval programme by UKCloud, and as such we have verified that Bell holds several certifications including LR ISO 9001 – Quality Management, LR ISO 14001 – Environmental Management and LR ISO 27001 - Information Security. UKCloud undertakes thorough vendor selection and ongoing vendor management processes, along with strict access control and auditing measures to ensure the security and integrity of UKCloud’s customer data and services.

In addition, UKCloud has ensured strict controls that ensure any customer data that may need to be shared with Bell information still only remains accessible to pre-approved Security Cleared (SC) operatives based within the UK.

### Is there a protective monitoring service?

Protective monitoring is included with all our IaaS platforms and follows GPG 13.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
