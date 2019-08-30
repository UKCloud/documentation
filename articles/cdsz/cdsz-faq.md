---
title: Cross Domain Security Zone FAQs | UKCloud Ltd
description: Frequently asked questions for Cross Domain Security Zone
services: cdsz
author: Matt Warner
reviewer: Bart Challis
lastreviewed: 20/08/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cross Domain Security Zone FAQs
toc_fullpath: FAQs/cdsz-faq.md
toc_mdlink: cdsz-faq.md
---

# Cross Domain Security Zone FAQs

## Service

### What is the service?

The UKCloud Cross Domain Security Zone (CDSZ) enables customers to transfer data securely between the UKCloud Assured OFFICIAL and UKCloud Elevated OFFICIAL security domains using NCSC-approved cross-domain security patterns.

This allows solutions hosted on the Elevated OFFICIAL security domain that are citizen-facing to be accessed securely from the internet.

> [!NOTE]
> UKCloud Guard is no longer available as an option for CDSZ. All new CDSZ deployments must follow the Walled Garden design. We will continue to provide support to customers who previously added UKCloud Guard to their environment, although we would encourage using Walled Garden instead.

### Do I have to buy other UKCloud services to use services in the CDSZ?

Yes. UKCloud cross-domain services are available only to customers purchasing other UKCloud services, such as IaaS (compute and storage) or PaaS (UKCloud for OpenShift).

### Is there a free trial available for CDSZ?

The complex assurance requirements mean that trials aren't available.

### What is the process for applying for a service in the CDSZ?

You can find the information you need in the UKCloud Knowledge Centre, including a detailed description of the assurance process, in [*UKCloud Cross Domain Security Zone application process*](cdsz-ref-application-process.md).

### How do I enable access from the internet to my solution hosted on the Elevated OFFICIAL security domain?

For citizen-facing solutions hosted on the Elevated OFFICIAL security domain that need to be accessible from the internet, you can build your own solution using the Walled Garden.

With the Walled Garden, you can create your own inspection, anti-malware and security services in the CDSZ between the internet-facing components on the Assured OFFICIAL security domain and the higher-security components hosted on the Elevated OFFICIAL security domain. Use of CDSZ Walled Garden is subject to approval by the data owner SIRO.

Direct connectivity into the UKCloud Elevated OFFICIAL security domain via the internet is possible using a CAPS-approved VPN solution utilising government-grade encryption products (for example, Kryptor). CPA-approved (or equivalent standard) VPN solutions may be used subject to approval by the UKCloud SIRO. UKCloud can host the IPsec VPN gateway device within the Elevated OFFICIAL security domain, but procurement, configuration and ongoing management of the solution are your responsibility.

UKCloud also offers [*Secure Remote Access*](../sra/sra-gs.md), a CPA-approved VPN solution that allows access to the Elevated OFFICIAL security domain via a self-managed walled garden within the CDSZ.

### Are there any bandwidth limitations for traffic traversing the walled garden firewalls in and out of the CDSZ?

Yes, there is a 10Gbps throughput limitation to the CDSZ in both Farnborough and Corsham.

### Is there storage capacity on CDSZ virtual machines (VMs)?

The storage capacity of a VM in the CDSZ is 60GB.

UKCloud cannot provide additional storage in the CDSZ for designs involving patch repositories. We advise customers to engage a UKCloud solutions architect to create a design that allows use of storage on the Assured or the Elevated security domain.

### What information do I need to include in my application for a service in the CDSZ?

You can find detailed information about how to apply for CDSZ in [*UKCloud Cross Domain Security Zone application process*](cdsz-ref-application-process.md).

### What is Walled Garden?

We provide self-service access to the CDSZ so that customers can create their own walled gardens using the technology and application services of their choice.

We provide an assurance wrap by ensuring that customers use appropriate risk management techniques to understand and mitigate identified risks.

### Is there a setup fee for a Walled Garden?

No.

### What is the assurance wrap?

Because a Walled Garden solution is bespoke, we offer an assurance wrap to guide customers towards an effective design that will help to maximise their chances of meeting compliance requirements.

The variable nature of Walled Garden solutions means we may charge for complex assurance wraps. This is done on a [*SFIA Rate Card*](https://ukcloud.com/wp-content/uploads/2019/06/ukc-gen-759-ukcloud-g-cloud-11-standard-rate-card-and-definitions.pdf) basis, according to the number of days' assistance needed.

### What is the process for approving a Walled Garden?

You can find detailed information about how to apply for CDSZ Walled Garden in [*UKCloud Cross Domain Security Zone application process*](cdsz-ref-application-process.md).

### What type of evidence is required to allow use of the Walled Garden?

The evidence pack will generally consist of:

- IT Security Health Check (ITSHC)

  - This must be carried out by an [NCSC-approved security organisation](https://www.ncsc.gov.uk/index/professional-service?f%5B0%5D=field_assurance_status%3AAssured&f%5B1%5D=field_assurance_scheme%3A213)

- Protective Monitoring solution

- The nature of Walled Garden solutions makes it essential that appropriate audit logging of security events and information is implemented and regularly monitored.

- Customer SIRO sign-off

- We need an accreditor's statement confirming their acceptance of the risk assessment, mitigating controls and residual risks, and their understanding of the customer's obligations relating to the use of UKCloud services

You can find more information in [*UKCloud Cross Domain Security Zone application process*](cdsz-ref-application-process.md).

### What are the ongoing requirements?

When the Walled Garden is in operation, the customer is responsible for ensuring continuing compliance with security operating procedures (SyOps) and other security obligations.

Customers will also be expected to perform an annual ITHC on the environment.

### How long will the assurance process take?

The bespoke nature of the Walled Garden means we can't provide committed timescales for each phase in the process. However, we aim to provide feedback from a named source within five days of each submission.

### Who makes the final decision to allow or deny the use of a Walled Garden?

The UKCloud SIRO is ultimately responsible for deciding which solutions and configurations are allowed.

### What is the UKCloud Guard?

UKCloud Guard is no longer available as an option for CDSZ. All new CDSZ deployments must follow the Walled Garden design. We will continue to provide support to customers who previously added UKCloud Guard to their environment, although we would encourage using Walled Garden instead.

## Support

### How do I raise a support ticket?-

Our secure online Portal provides service management functionality. Alternatively, you can reach support by phone or email.

### How do I manage my services?

Walled Gardens are managed from the higher-security side of the platform (Elevated OFFICIAL). The security requirements are much stricter and require a PSN-approved connection, UKCloud Secure Remote Access or CPA-approved (or equivalent standard) encryption.

### What are your service maintenance windows?

UKCloud's maintenance windows are as follows (times are UK local times):

#### Planned maintenance

Any pre-planned maintenance of any infrastructure relating to the services. We'll provide you with at least 14 days' advance notice of any planned maintenance. It will take place between 00:00 and 06:00 Monday to Sunday or between 08:00 and 12:00 on a Saturday or Sunday. No planned maintenance will take place on a Saturday unless agreed in advance by both parties.

#### Emergency Maintenance

Any emergency maintenance of any infrastructure relating to the services. Whenever possible, we'll provide you with at least six hours' advance notice of emergency maintenance; and carry it out between 00:00 and 06:00 Monday to Sunday or between 08:00 and 12:00 on a Saturday or Sunday, unless there's an identified and demonstrable immediate risk to a customer's environment.

## Billing and legal

### How will I be billed?

CDSZ has a minimum commitment period of one month.

Walled Garden billing is based on the solution design. You pay a monthly rental fee, with additional charges based on the number of VMs required to run the solution.

For existing UKCloud Guard customers, billing is based on the amount of data transferred between domains. You buy a starter pack which includes an amount of data that can be transferred. You're billed at an incremental rate for data transferred above the starter pack threshold.

### How do I pay for the service?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

### What are the termination fees?

There are no termination fees for CDSZ. We may make an additional charge for professional services associated with transferring data out of the service if this is required.

## Security

### What data is suitable for the UKCloud assured security domain?

The platform is hosted in the UK and operated by SC-cleared staff. It has extensive independent validation that it is fully aligned with NCSC Cloud Security Principles, making it ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE).

### Is there a protective monitoring service?

Protective monitoring is included for our IaaS platform and follows GPG 13.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
