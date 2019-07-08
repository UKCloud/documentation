---
title: Cross Domain Security Zone FAQs | UKCloud Ltd
description: Frequently asked questions for Cross Domain Security Zone
services: cdsz
author: Matt Warner
reviewer:
lastreviewed: 17/07/2018 10:43:00
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

The UKCloud Cross Domain Security Zone (CDSZ) enables customers to transfer data securely between the UKCloud Assured OFFICIAL (formerly IL2) cloud platform and the UKCloud Elevated OFFICIAL (formerly IL3) cloud platform using CESG-approved cross-domain security patterns.

This allows solutions hosted on the Elevated OFFICIAL cloud platform that are citizen facing to be accessed securely from the internet.

Two service options are available to enable use of the CDSZ:

- UKCloud Guard

- Walled Garden

### Do I have to buy other UKCloud services to use services in the CDSZ?

Yes. UKCloud cross-domain services are available only to customers purchasing other UKCloud services, such as IaaS (compute and storage) or PaaS (UKCloud for OpenShift).

### Is there a free trial available for either service option?

The complex assurance requirements mean that trials aren't available.

### What is the process for applying for a service in the CDSZ?

You can find the information you need in the UKCloud Knowledge Centre, including a detailed description of the assurance process.

### How do I enable access from the internet to my solution hosted on the Elevated OFFICIAL cloud platform?

For citizen-facing solutions hosted on the Elevated OFFICIAL cloud platform that need to be accessible from the internet, you can use the UKCloud Guard, or build your own solution using the Walled Garden.

If you use the UKCloud Guard, you'll need to deploy additional web servers on the Assured OFFICIAL cloud platform to perform pre-authentication, validation checking and initial anti-virus. The web servers can then communicate with your application server hosted on the Elevated OFFICIAL cloud platform via HTTP web services through the UKCloud Guard. Use of the UKCloud Guard is subject to approval by the UKCloud SIRO.

With the Walled Garden, you can create your own inspection, anti-malware and security services in the CDSZ between the internet-facing components on the Assured OFFICIAL cloud platform and the higher-security components hosted on the Elevated OFFICIAL cloud platform. Use of a self-managed Walled garden is subject to approval by the UKCloud SIRO.

Direct connectivity into the UKCloud Elevated OFFICIAL cloud platform via the internet is possible using a CAPS-approved VPN solution using government-grade encryption products (for example, Kryptor). CPA-approved (or equivalent standard) VPN solutions may be used subject to approval by the UKCloud SIRO. UKCloud can host the IPsec VPN gateway device within the Elevated OFFICIAL cloud platform, but procurement, configuration and ongoing management of the solution are your responsibility.

UKCloud also offers Secure Remote Access, a CPA-approved VPN solution that allows access to the Elevated OFFICIAL cloud platform via a self-managed walled garden within the CDSZ. For more information, see the UKCloud Secure Remote Access service description on the Digital Marketplace.

### Are there any bandwidth limitations for traffic traversing the walled garden firewalls in and out of the CDSZ?

Yes, there is a 1GB throughput limitation to the CDSZ in both Farnborough and Corsham.

### Is there storage capacity on CDSZ virtual machines (VMs)?

The storage capacity of a VM in the CDSZ is 60GB.

UKCloud cannot provide additional storage in the CDSZ for designs involving patch repositories. We advise customers to engage a UKCloud solutions architect to create a design that allows use of storage on the Assured or the Elevated platform.

### What information do I need to include in my application for a service in the CDSZ?

As a minimum the application must include:

- A business case explaining why a cross-domain solution is required

- The technical architecture of the solution - incorporating either the UKCloud Guard or your proposed Walled Garden solution

- An assurance plan - your proposed approach to ensuring that risks are correctly identified, appropriate mitigation is implemented and residual risks are accepted, so that both the UKCloud and customer SIROs can make an informed decision about the risks of the solution

## UKCloud Guard

### What is the UKCloud Guard?

UKCloud provides a secure and scalable Guard which supports structured and inspectable HTTP-based data flows.

This service offers an immediately available (subject to the assurance process) multi-tenant Guard to support simple use cases.

### What data can the UKCloud Guard inspect?

It can inspect structured and inspectable HTTP-based data such as XML and JSON.

### Does UKCloud support JSON and are there any 'rules' around it?

Both guards (IWSVA and Deep Secure) can currently pass through JSON content. This is currently based on both products recognising the content as text.

### Can I change the data that's allowed to flow through the UKCloud Guard?

No. Any changes to what is and isn't allowed through the guard will be decided at a service level by UKCloud.

If you need a different solution, we recommend you use the Walled Garden.

### Can I design a redundant UKCloud Guard?

Yes. You can implement a dual-site option that provides a secondary guard route in case the primary one fails.

### How long will the assurance process take?

Each business case and proposed solution will be assessed by the UKCloud team, and must be approved by the UKCloud SIRO.

We aim to carry out the assessment within five days of receiving the business case and proposed solution, but we can't commit to timelines for approval.

## Self-managed Walled Garden

### What is the self-managed Walled Garden?

We provide self-service access to the CDSZ so that customers can create their own Walled gardens using the technology and application services of their choice.

We provide an assurance wrap by ensuring that customers use appropriate risk management techniques to understand and mitigate identified risks.

### Is there a setup fee for a Walled Garden?

No.

### What is the assurance wrap? 

Because a Walled Garden Solution is bespoke, we offer an assurance wrap to guide customers towards an effective design that will help to maximise their chances of meeting compliance requirements.

The variable nature of Walled Garden Solutions means we may charge for the assurance wrap on an SFIA rate card basis, according to the number of days' support needed.

### What is the process for approving a Walled Garden?

Broadly, the process is as follows:

- Initial application

- UKCloud design review (with a cloud architect)

- Proposed evidence pack submission (by the customer)

- Full evidence pack submission (by the customer)

- UKCloud SIRO review and approval or rejection

Full details of each stage are available in the UKCloud Knowledge Centre or from your account director.

### What type of evidence is required to allow use of the Walled Garden?

The evidence pack will generally consist of:

- IT Security Health Check (ITSHC)

  - This must be carried out by an [NCSC-approved security organisation](https://www.ncsc.gov.uk/index/professional-service?f%5B0%5D=field_assurance_status%3AAssured&f%5B1%5D=field_assurance_scheme%3A213)

- Protective Monitoring solution

- The nature of Walled Garden solutions makes it essential that appropriate audit logging of security events and information is implemented and regularly monitored.

- Customer SIRO sign-off

- We need an accreditor's statement confirming their acceptance of the risk assessment, mitigating controls and residual risks, and their understanding of the customer's obligations relating to the use of UKCloud services

### What are the ongoing requirements?

When the Walled Garden is in operation, the customer is responsible for ensuring continuing compliance with security operating procedures (SyOps) and other security obligations.

### How long will the assurance process take?

The bespoke nature of the Walled Garden means we can't provide committed timescales for each phase in the process.

However, we aim to provide feedback from a named source within five days of each submission.

### Who makes the final decision to allow or deny the use of a Walled Garden?

The UKCloud SIRO is ultimately responsible for deciding which solutions and configurations are allowed.

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

Both solutions have a minimum commitment period of one month. The billing models are as follows:

#### UKCloud Guard

Billing is based on the amount of data transferred between domains. You buy a starter pack which includes an amount of data that can be transferred. You're billed at an incremental rate for data transferred above the starter pack threshold.

#### Walled Garden

Billing is based on the solution design. You pay a monthly rental fee, with additional charges based on the number of VMs required to run the solution.

### How do I pay for the service?

Payment can be made by direct bank transfer (BACS/CHAPS).

### What are the termination fees?

There are no termination fees for most services. We may make an additional charge for transferring data out of the service if this is required.

## Security

### What data is suitable for the UKCloud assured cloud platform?

The platform is hosted in the UK and operated by SC-cleared staff. It has extensive independent validation (including CESG PGA) that it is fully aligned with NCSC Cloud Security Principles, making it ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE) and legacy IL0-IL4 solutions.

### Is there a protective monitoring service?

Protective monitoring is included for our IaaS platform and follows GPG 13.
