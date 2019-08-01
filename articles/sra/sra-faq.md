---
title: Secure Remote Access FAQs | UKCloud Ltd
description: Frequently asked questions for Secure Remote Access
services: sra
author: Matt Warner
reviewer:
lastreviewed: 02/08/2018 16:00:52
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Secure Remote Access FAQs
toc_fullpath: FAQs/sra-faq.md
toc_mdlink: sra-faq.md
---

# Secure Remote Access FAQs

## Service

### What is the service?

The UKCloud Secure Remote Access (SRA) service:

- Is based on NCSC-approved CPA technology, including Cisco AnyConnect and Cisco VPN devices

- Provides secure two-factor authentication based on UKCloud-assured device certificates

- Has a walled garden architecture that enables you to deploy and manage appropriate systems in a DMZ, allowing secure, controlled onward access to workloads hosted on the UKCloud Elevated OFFICIAL security domain

- Is integrated with the UKCloud Protective Monitoring solution (aligned with GPG13)

System administrators and mobile workers can securely access workloads running on Elevated OFFICIAL from locations that don't have alternative secure network connections such as PSN or HSCN.

### Do I have to buy other UKCloud services to use UKCloud SRA?

Yes. UKCloud SRA is available only to customers purchasing other UKCloud services such as UKCloud for VMware, Cloud Storage or UKCloud for OpenShift.

### Is a free trial available for the service?

The assurance requirements related to this service mean that we're unable to provide a trial for this service.

### Does UKCloud provide the managed devices for using the SRA service?

No. We don't provide them, but we have partners who can provide the managed devices and other services if required.

### What is the process for applying for an SRA solution?

You can find the information you need in the UKCloud Portal Knowledge Centre.

If you're new to UKCloud, you should contact the UKCloud sales team to discuss your requirements.

### What information must the application form include?

As a minimum the application form must include:

- A business case explaining why you require an SRA solution

- The technical architecture of the solution incorporating the UKCloud SRA

- An assurance plan - your proposed approach to ensuring that risks are correctly identified, appropriate mitigation is implemented and residual risks are accepted so that both the customer and UKCloud SIROs can make an informed decision about the risks of the solution

### What is likely to be included in the assurance plan?

The assurance plan includes:

- Validation of requirements by the customer (department SIRO)

- Evidence from the customer that end-user devices are configured and managed in line with minimum requirements (for example scope of PSN compliance with IA requirements)

- Evidence from the customer that users of the SRA service are vetted and security-cleared in line with minimum requirements (scope of PSN compliance with IA requirements)

- Confirmation by the customer that an appropriate security incident management process applies to the solution

- Confirmation by the customer that the service will be accessed from the UK only

- Confirmation by the customer and each individual user of agreement to the UKCloud Acceptable Use Policy (AUP)

- Identification of data flows between the walled garden and the customer's solution (firewall access control list)

### What requirements are placed on the access devices?

The service is compatible with customer-managed end-user devices that meet the following conditions:

- Mandatory use of Cisco AnyConnect VPN Client or an embedded IPsec client that is assured under the NCSC CPA scheme (or equivalent standard) against the IPsec VPN for remote working software client security characteristics

- Mandatory user-to-device authentication ensuring only authorised users can access the end-user devices

- Mandatory user-to-service authentication ensuring only authorised users can access the SRA service

- Mandatory device-to-service authentication ensuring only authorised end-user devices can access the SRA service

- Mandatory use of a platform that supports platform integrity and application sandboxing to reduce the risk of the end-user device being compromised

- Mandatory use of application whitelisting to reduce the risk of malicious code execution on the end-user device

- Mandatory use of regularly updated anti-malware software to reduce the risk of malicious code execution on the end-user device

- Mandatory use of enterprise-enforced security policies ensuring that end-users cannot override or reconfigure security-critical features

- Mandatory use of external interface protection such as host-based firewalls to limit exposure of the end-user device to untrusted networks

- Mandatory use of a device update policy to keep the end-user device regularly updated with security patches

- Mandatory implementation of an incident response plan by the customer organisation to respond to security incidents such as loss of the end-user device

- Configuration and management of end-user devices must be assured by the consuming organisation as being in line with NCSC end-user device guidance and compliant with PSN IA conditions

- Recommended use of a CPA-approved (or equivalent standard) data-at-rest encryption solution

- Recommended use of Secure Boot where available

- Recommended use of an enterprise audit and monitoring service by the customer organisation to ensure security events are centrally logged and reviewed

### How long will the assurance process take?

Each business case and proposed solution will be assessed by the UKCloud team, and must be approved by the UKCloud SIRO.

We aim to carry out the assessment within five days of receiving the business case and proposed solution, but we can't commit to timelines for approval.

### What is the assurance wrap review?

If you need help gathering appropriate evidence, or effectively designing your SRA solution, we offer an assurance wrap review to guide you towards an effective design that will help to maximise your chances of meeting compliance requirements.

The variable nature of the engagement means we charge for the assurance wrap on a [*SFIA Rate Card*](https://ukcloud.com/wp-content/uploads/2019/06/ukc-gen-759-ukcloud-g-cloud-11-standard-rate-card-and-definitions.pdf) basis, depending on the number of days' support needed.

### What is the assurance process for approving an SRA solution?

Broadly, the assurance process is as follows:

- Initial application

- UKCloud design review (with a cloud architect)

- Proposed evidence pack submission (by the customer)

- Full evidence pack submission (by the customer)

- UKCloud SIRO review and approval or rejection

Full details of each stage are available in the Knowledge Centre or from your account director.

### Does the UKCloud assurance process replace the assurance requirements of any networks a solution may be connected to?

No. The UKCloud SRA service is designed to facilitate connectivity to services hosted on the UKCloud platform only. If your solution needs to face an external controlled-access network, such as PSN or HSCN, you must complete the appropriate compliance for that network.

### What are the ongoing requirements?

When the SRA service is in operation, you are responsible for ensuring continuing compliance with Security Operating procedures (SyOps) and other security obligations.

### Who makes the final decision to allow or deny the use of SRA?

The UKCloud SIRO is ultimately responsible for deciding which solutions and configurations are allowed.

### If I plan to use SRA and a Walled Garden, can I use a single Walled Garden for both?

It's best to use two separate Walled Gardens within the Cross Domain Secure Zone, to ensure compliance requirements are met.

You can design a solution to use a single Walled Garden infrastructure, but you're likely to require a more intensive review during the assurance wrap process.

You'll still be billed for both services.

### Can I connect to multiple virtual data centres (VDCs) from a single Walled Garden?

Yes. You only need to implement a single instance of SRA, as a bastion host can provide gateway services to more than one VDC. The assurance wrap process will outline the scope of connected services.

If you want to add additional services to your SRA service, you'll need to review your existing compliance documentation via the assurance wrap.

### Can I use the UKCloud's SRA solution from outside the UK?

No. The nature of the UKCloud solution is that you must be using it from known endpoints inside the UK.

If you have international access requirements, please contact your account manager to discuss alternative options.

## Certificates

### How long do SRA certificates last for?

SRA certificates last for 12 months. You'll need to renew certificates no later than two weeks before the certificates expire to avoid any interruption to your service.

### How do I order additional SRA certificates?

To add additional certificates, raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, selecting the "Request Additional SRA Certificate(s)" option.

### How do I renew or revoke an old certificate?

To renew or revoke your certificate, raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, selecting the "Renew and/or Revoke SRA Certificate" option.

For renewals, it's important you give us at least two weeks' notice to prevent a break in your service.

### Can I renew or revoke my certificates in bulk?

Yes. To renew or revoke your certificates in bulk, raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, selecting the "Renew and/or Revoke multiple SRA Certificates" option.

Attach the Secure Remote Access bulk renewal/revoke form containing all the certificates you need renewing and/or revoking with details including User ID (UID) and certificate name. It would also be useful to provide host name or machine name.

For renewals, it's important you give us at least two weeks' notice to prevent a break in your service.

### What are my responsibilities for this service?

You need to maintain a list of your certificates and advise us if you need to request new or additional certificates as well as needing any to be revoked.

## Billing and legal

### How will I be billed?

SRA has a minimum commitment period of three months and is billed monthly.

The billing model has two parts:

- A per-user fee, bought in packs to cover your user base

- An hourly rental fee for each bastion host required to support your access requirements

    A small bastion host is provided free of charge each month per customer. If you decide to increase the size of this VM or provision additional VMs, you'll still receive the value of the first small VM free of charge per month and this will be deducted from the invoice if larger or additional VMs are used as bastion hosts.

### Is there a minimum term?

The service is subject to a minimum term of three months. Termination within this initial term will incur an early exit charge.

### What does the cost of SRA include?

SRA prices include:

- Access to managed NCSC-approved VPN gateways

- A Cisco AnyConnect licence for the end-user device

- Two-factor authentication using device certificates

- A walled garden virtual data centre, where you can deploy your application services

- A small VM to use as a bastion host (additional costs apply for larger or additional VMs)

## Security

### Why does use of CPA-approved solutions to access the UKCloud Elevated OFFICIAL environment via the internet require approval by the UKCloud SIRO?

UKCloud offers two ways to connect to the UKCloud platform's Elevated OFFICIAL security domain via a CPA-approved (or equivalent standard) solution:

- By using the UKCloud-managed SRA service (covered in this FAQ)

- By hosting self-managed CPA-approved (or equivalent standard) VPN solutions (see below)

CPA-approved (or equivalent standard) VPN solutions have undergone a less rigorous NCSC assurance process than CAPS-approved solutions. NCSC recognises that there is therefore greater risk associated with the robustness of these solutions.

As some PSN-accredited solutions (such as the UKCloud solution) host multiple customers, UKCloud has a responsibility to ensure that these less assured solutions are used appropriately. Therefore, you must have a compelling business case to justify why the use of CPA-approved (or equivalent standard) solutions is necessary. This business case is reviewed by the UKCloud SIRO (and periodically inspected by the PSN Accreditor) who will approve its use if appropriate.

For clarity, CPA-approved (or equivalent standard) VPN solutions may always be used to provide an encryption overlay on a CAS(T) compliant circuit. It's only the use of these solutions over non-CAS(T)-compliant circuits (for example, the internet) that require approval by the UKCloud SIRO.

### Can I use UKCloud SRA to connect to the UKCloud Elevated OFFICIAL security domain?

Yes, subject to compliance with information assurance requirements. Our SRA service is designed to enable you to connect via the internet to your services hosted on the UKCloud Elevated OFFICIAL security domain, by  using a CPA-approved VPN solution and other NCSC guidance such as Walled Gardens.

All traffic between the end-user device and the UKCloud Elevated OFFICIAL security domain must be routed through a Walled Garden hosted within the UKCloud Cross Domain Security Zone.

UKCloud is required to validate your ability to comply with information assurance requirements, which is why use of this service is subject to approval by the UKCloud SIRO.

Refer to the UKCloud SRA service description on the Digital Marketplace for more information.

### Can I use UKCloud SRA to connect to other PSN services?

No. The UKCloud SRA service is designed to facilitate connectivity to services hosted on the UKCloud platform only.

Consider PSN-compliant remote access services if you require access to the broader PSN.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).