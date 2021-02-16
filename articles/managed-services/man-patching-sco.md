---
title: Patching as a Service Service Scope
description: Outlines important details regarding Patching as a Service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 15/09/2020
toc_rootlink: Managed IT Operations
toc_sub1: Patching as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Patching as a Service Service Scope
toc_fullpath: Managed IT Operations/Patching as a Service/man-patching-sco.md
toc_mdlink: man-patching-sco.md
---

# Patching as a Service Service Scope

## About this document

This document is for customers considering purchasing Patching as a Service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## Scope of Patching as a Service

> [!NOTE]
> This service is not intended to replace a customer's Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

The following tables outline the boundaries of responsibilities for Patching as a Service.

<u>Key</u>

- **R = Responsible** - The person who performs an activity or does the work

- **A = Accountable** - The person who is ultimately accountable and has Yes/No/Veto

- **C = Consulted** - A person who needs to feedback and contribute to the activity

- **I = Informed** - A person who needs to know of the decision or action

### Patching as a Service - Platform

Patching element | UKCloud | Customer | UKCloud - Professional Services | Notes
-----------------|---------|----------|---------------------------------|------
Availability     | A/R     |          |                                 | Platform will be available to ensure the successful attempt of at least one scheduled patching run per calendar month
Updates          | A/R     |          |                                 | Patches will be updated to within 30 days of the latest monthly vendor releases
Configuration    | A/R     |          |                                 | 

### Patching as Service - Customer endpoint agents

Patching element               | UKCloud | Customer | UKCloud - Professional Services | Notes
-------------------------------|---------|----------|---------------------------------|------
Making latest agents available | A/R     |          |                                 |
Deploying initial agents       | C       | A/R      | £                               | Agents are only required for non-Windows operating systems
Deploying agent updates        | C       | A/R      | £                               | Agents are only required for non-Windows operating systems
Configuring agents             | R       | A/C      |                                 | UKCloud will apply and manage configurations, but customers are ultimately accountable for providing configuration data such as required patch cycle

### Patching as a Service - Applying patches

Patching element                                                  | UKCloud | Customer | UKCloud - Professional Services | Notes
------------------------------------------------------------------|---------|----------|---------------------------------|------
Scheduled scanning of customer VMs for applicable patches         | A/R     | I        |                                 |
Approving patches                                                 | C       | A/R      |                                 | Although UKCloud will validate the quality of patches being supplied, the customer is ultimately responsible for ensuring the application of any patches will not corrupt their environments
Taking a snapshot of a VM prior to applying patches               | A/R     | I        |                                 |
Ensuring the success of VM snapshot prior to applying patches     | A/R     | R/A      |                                 | See [General support and troubleshooting](#general-support-and-troubleshooting)
Applying customer approved patches                                | A/R     | I        |                                 |
Ensuring the success of customer approved patches                 | A/R     | R/C      |                                 | See [General support and troubleshooting](#general-support-and-troubleshooting)
Restoring from snapshot if patching fails                         | A/R     | R/C      |                                 | See [General support and troubleshooting](#general-support-and-troubleshooting)
Identification of patches outside customer defined patching cycle | I       | A/R      |                                 | Customer will notify UKCloud via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal of any specific patches to be applied outside of the normal schedule of the service
Application of patches outside customer defined patching cycle    | A/R     | I        |                                 | Subject to UKCloud's standard Service Request service target and patches being made publicly available by the vendor

## General support and troubleshooting

UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request Patching as a Service via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's patching environment with default configurations (unless otherwise specified) and commence patching any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [Scope of Patching as a Service](#scope-of-patching-as-a-service) section of this article where the customer is listed as Accountable or Responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to analyse and deploy any approved patches or software in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
