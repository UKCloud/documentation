---
title: Managed Active Directory Support Service Scope
description: Outlines important details regarding UKCloud's Managed Active Directory Support service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 28/01/2021
toc_rootlink: Advanced Managed Services
toc_sub1: Managed Active Directory Support
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Active Directory Support Service Scope
toc_fullpath: Advanced Managed Services/Managed Active Directory Support/man-ad-sco.md
toc_mdlink: man-ad-sco.md
---

# Managed Active Directory Support Service Scope

## About this document

This document is for customers considering purchasing UKCloud's Managed Active Directory Support service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

> [!NOTE]
> This service is not intended to replace a customers Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

## Scope of supported servers

| Servers Supported                                    |
| ---------------------------------------------------- |
| Windows Server 2012+ (all editions which support AD) |

## Supported configurations

| Supported configurations                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory Domain Services only (e.g. excludes Azure Active Directory, Active Directory Federation Services, Active Directory Certificate Services, etc.) |
| Multi-Domain Controller (single server Active Directory Services are out of scope)                                                                              |

## Scope of Managed Active Directory Support service

The following tables outline the boundaries of responsibilities for the Managed Active Directory Support service.

### Pre-life

| Element                                  | UKC-Support | Customer | UKC Professional Services |
| ---------------------------------------- | ----------- | -------- | ------------------------- |
| Design                                   | N           | Y        | £                         |
| Deploy                                   | N           | Y        | £                         |
| Post Deployment Config                   | N           | Y        | £                         |
| Initial instantiation of HA/Clustering   | N           | Y        | £                         |
| DR planning & design                     | N           | Y        | N                         |
| Active Directory Trust/Federation Design | N           | Y        | £                         |

### Transition

| Element                                                    | UKC-Support | Customer | UKC Professional Services |
| ---------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Existing AD validation (quality/integrity)                 | N           | Y        | £                         |
| Customer schema migrations                                 | N           | Y        | £                         |
| Implementation of DR                                       | N           | Y        | £                         |
| Implementation of Active Directory Trust/Federation Design | N           | Y        | £                         |

### In-life - Monitoring

| Element                           | UKC-Support | Customer | UKC Professional Services |
| --------------------------------- | ----------- | -------- | ------------------------- |
| IaaS Platform & Networking        | Y           | N        | N                         |
| VM Availability                   | Y           | N        | N                         |
| VM CDM Monitoring                 | Y           | N        | N                         |
| AD Service availability           | Y           | N        | N                         |
| AD Service status change          | Y           | N        | N                         |
| AD Schema Backup pass/fail        | Y           | N        | N                         |
| AD Schema Replication             | Y           | N        | N                         |
| Monitoring of Trust Relationships | Y           | N        | N                         |

### In-life - Patching

| Element                                                             | UKC-Support | Customer | UKC Professional Services |
| ------------------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Windows Server (y & z stream/in-version patches)                    | Y           | N        | N                         |
| Windows Server  Major Version Upgrades                              | N           | Y        | £                         |
| Validation of patches against 3rd party AD integrated apps/services | N           | Y        | £                         |

### In-life - Data protection and housekeeping

| Element                               | UKC-Support | Customer | UKC Professional Services |
| ------------------------------------- | ----------- | -------- | ------------------------- |
| AD Backup configuration & implementation | Y           | N        | N                         |
| AD Backup troubleshooting                | Y           | N        | N                         |
| AD Backup restoration                    | Y           | N        | N                         |
| AD Restoration troubleshooting           | N           | N        | N                         |

### In-life - Administration

| Element                                                                                             | UKC-Support | Customer | UKC Professional Services |
| --------------------------------------------------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Management and Administration of resource within AD (i.e. Computers, People, Security Groups, etc…) | N           | Y        | £                         |
| Addition of Active Directory Sites and Subnets                                                      | Y           | N        | N                         |
| Creation of Group Policies                                                                          | N           | Y        | £                         |

### In-life - Troubleshooting and remediation

| Element                                                                   | UKC-Support                       | Customer | UKC Professional Services |
| ------------------------------------------------------------------------- | --------------------------------- | -------- | ------------------------- |
| AD Replication                                                            | Y                                 | N        | N                         |
| AD Specific DFS-R (inc. sysvolshare and associated DFS-Replication)       | Y                                 | N        | N                         |
| Ad-hock performance issues (identification)                               | Y (Basic)                         | N        | N                         |
| Ad-Hock performance issues (remediation)                                  | Y (Basic)                         | Y        | £                         |
| AD Services issues (e.g. services fails to start, service keeps stopping) | Y                                 | N        | N                         |
| Issue with IaaS/VM                                                        | Y                                 | N        | N                         |
| Expansion of virtual capacity                                             | Y (In consultation with Customer) | N        | N                         |
| AD Service Errors (Identification & Triage)                               | Y                                 | N        | N                         |
| AD Service Errors (Remediation)                                           | Y                                 | N        | N                         |
| Customer AD Schema integrity and validation                               | N                                 | Y        | £                         |
| DHCP Issues directly impacting AD Services (identification)               | Y (In consultation with Customer) | Y        | N                         |
| DHCP Issues directly impacting AD Services (Remediation)                  | Y (In consultation with Customer) | Y        | N                         |
| DNS Issues directly impacting AD Services (identification)                | Y (In consultation with Customer) | Y        | N                         |
| DNS Issues directly impacting AD Services (Remediation)                   | Y (In consultation with Customer) | Y        | N                         |
| Resolving issues with Trust relationships                                 | Y                                 | N        | N                         |
| End-user management and troubleshooting                                   | N                                 | Y        | N                         |

## General support and troubleshooting

Beyond the service scope defined in this article, UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request Managed Active Directory Support via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Managed Active Directory Support environment with default configurations (unless otherwise specified) and commence protecting any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [Scope of Managed Active Directory Support service](#scope-of-managed-active-directory-support-service) section of this article where the customer is identified as responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to perform all necessary duties in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
