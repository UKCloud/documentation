---
title: Anti-Virus as a Service Service Scope
description: Outlines important details regarding Anti-Virus as a Service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 21/09/2020
toc_rootlink: Managed IT Operations
toc_sub1: Anti-Virus as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Anti-Virus as a Service Service Scope
toc_fullpath: Managed IT Operations/Anti-Virus as a Service/man-antivirus-sco.md
toc_mdlink: man-antivirus-sco.md
---

# Anti-Virus as a Service Service Scope

## About this document

This document is for customers considering purchasing Anti-Virus as a Service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## Scope of Anti-Virus as a Service

The following tables outline the boundaries of responsibilities for Anti-Virus as a Service.

<u>Key</u>

- **R = Responsible** - The person who performs an activity or does the work

- **A = Accountable** - The person who is ultimately accountable and has Yes/No/Veto

- **C = Consulted** - A person who needs to feedback and contribute to the activity

- **I = Informed** - A person who needs to know of the decision or action

### Anti-Virus as a Service - Platform

Anti-Virus element | UKCloud | Customer | UKCloud - Professional Services | Notes
-----------------|---------|----------|---------------------------------|------
Availability     | A/R     |          |                                 | Agents installed on customer end-points will remain active regardless as to the availability of the central platform
Updates          | A/R     |          |                                 | Definition updates are provided in real-time by the vendor
Configuration    | A/R     |          |                                 | 

### Anti-Virus as Service - Customer endpoint agents

Anti-Virus element               | UKCloud | Customer | UKCloud - Professional Services | Notes
-------------------------------|---------|----------|---------------------------------|------
Making latest agents available | A/R     |          |                                 |
Deploying initial agents       | C/R       | A/R      | £                               | UKCloud may deploy the initial agents as part of any new build activities contracting in to by the customer
Deploying agent updates        | A/R     | I/R    | £                               | Agents are updated automatically, centrally by the platform. Customers will become responsible to jointly assist UKCloud in any troubleshooting activities should we detect any issues with updates, see [General support and troubleshooting](#general-support-and-troubleshooting).
Configuring agents             | R       | A/C      |                                 | UKCloud will apply a default configuration, however the customer remains accountable for ensuring any specific exclusions (file or directories) have been applied to their end-points. Customer specific exclusions can be requested via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, UKCloud will implement any requested exclusions)


### Anti-Virus as a Service - In-life operation

Anti-Virus element                                              | UKCloud | Customer | UKCloud - Professional Services | Notes
--------------------------------------------------------------|---------|----------|---------------------------------|------
Scheduled scanning customer endpoints for viruses or malware                  | N/A     | N/A         |   N/A                               | UKCloud's Anti-Virus as a Service provides modern on-access protection for any data attempted to be written to disk or memory, providing constant protection which negates the traditional requirement for scheduled scans.
Ad-hock full filesystem scans                                             | R       | A    |                                 | Should a customer feel they require an additional full filesystem scan in addition to the constant protection our Anti-Virus as a Service solution provides, customers can raise a request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.
Action upon detection - Malicious objects           | A/R     | I        |                                 | Upon detection of a malicious object, the default configuration of our Anti-Virus as a Service solution is to automatically quarantine the object and then notify the customer via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and any additional alerting methods (for example email) a customer may have configured.
Action upon detection - Suspicious objects  | R/C     | A/R      |                                 | Upon detection of a suspicious object, the default configuration of our Anti-Virus as a Service solution is to notify the customer via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and any additional alerting methods (for example email) a customer may have configured, but **not** take any action against the object. The customer and UKCloud will then work together to agree the severity of detection (may be a false positive) and agree actions to be taken against the detected object.

> [!NOTE]
> UKCloud does not provide 'Security as a Service', expert anti-virus/malware or forensic analysis beyond the default capabilities provided by our platform. 

## General support and troubleshooting

UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request Anti-Virus as a Service via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Anti-Virus environment with default configurations (unless otherwise specified) and enable the customer to deploy anti-virus agents to  any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [Scope of Anti-Virus as a Service](#scope-of-Anti-Virus-as-a-service) section of this article where the customer is listed as Accountable or Responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to analyse and deploy any approved patches or software in order to provide a reliable service.

Ensuring that a proven backup plan is in place to recover from the extremely low risk of any data loss or corruption occurring as a result of using this service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
