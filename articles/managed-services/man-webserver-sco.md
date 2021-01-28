---
title: Managed Web Server Service Scope
description: Outlines important details regarding UKCloud's Managed Web Server service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 28/01/2021
toc_rootlink: Advanced Managed Services
toc_sub1: Managed Web Server
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Web Server Service Scope
toc_fullpath: Advanced Managed Services/Managed Web Server/man-webserver-sco.md
toc_mdlink: man-webserver-sco.md
---

# Managed Web Server Service Scope

## About this document

This document is for customers considering purchasing UKCloud's Managed Web Server service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

> [!NOTE]
> This service is not intended to replace a customers Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

## Scope of supported servers

| Web Servers Supported               |
| ----------------------------------- |
| Internet Information Services (IIS) |
| Apache                              |
| NGINX                               |

> [!NOTE]
> Web Server services, including FTP, only (additional service such as Load Balancing, Mail Proxy, etc… are out of scope)

## Supported configurations

| Supported configurations |
| ------------------------ |
| Single deployment        |
| HA - Clustered/Farm      |

## Scope of Managed Web Server service

The following tables outline the boundaries of responsibilities for the Managed Web Server service.

### Pre-life

| Element                                   | UKC-Support | Customer | UKC Professional Services |
| ----------------------------------------- | ----------- | -------- | ------------------------- |
| Design                                    | N           | Y        | £                         |
| Deploy                                    | N           | Y        | £                         |
| Post Deployment Config                    | N           | Y        | £                         |
| Initial instantiation of HA/Clustering    | N           | Y        | £                         |
| DR planning & design                      | N           | Y        | N                         |

### Transition

| Element                                                     | UKC-Support | Customer | UKC Professional Services |
| ----------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Existing Web Services validation (quality/integrity/design) | N           | Y        | £                         |
| Customer data (e.g. Sites/Domain) migrations                | N           | Y        | £                         |
| Implementation of DR                                        | N           | Y        | N                         |

### In-life - Monitoring

| Element                                                                             | UKC-Support | Customer | UKC Professional Services |
| ----------------------------------------------------------------------------------- | ----------- | -------- | ------------------------- |
| IaaS Platform & Networking (UKCloud Platform - Hypervisor and infrastructure below) | Y           | N        | N                         |
| VM Availability                                                                     | Y           | N        | N                         |
| VM CDM Monitoring                                                                   | Y           | N        | N                         |
| Web Server Service availability                                                     | Y           | N        | N                         |
| Web Server Service status change                                                    | Y           | N        | N                         |
| Web Server Backup pass/fail                                                         | Y           | N        | N                         |
| HA Replication monitoring                                                           | Y           | N        | N                         |
| Site Certificates - Providing/Self-signing/Renewing                                 | N           | Y        | N                         |
| Site Certificates - Applying                                                        | Y           | N        | N                         |
| Site Certificates - Expiry monitoring                                               | Y           | N        | N                         |

### In-life - Patching

| Element                                                          | UKC-Support | Customer | UKC Professional Services |
| ---------------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Web Server (y & z stream/minor/in-version patches)               | N           | N        | N                         |
| Web Server  Major Version Upgrades                               | N           | Y        | £                         |
| Validation of patches against additional modules                 | N           | Y        | £                         |
| Validation of patches against 3rd party integrated apps/services | N           | Y        | £                         |

### In-life - Data protection and housekeeping

| Element                               | UKC-Support | Customer | UKC Professional Services |
| ------------------------------------- | ----------- | -------- | ------------------------- |
| Backup configuration & implementation | Y           | N        | N                         |
| Backup troubleshooting                | Y           | N        | N                         |
| Backup restoration                    | Y           | N        | N                         |
| Restoration troubleshooting           | Y           | N        | N                         |

### In-life - Administration

| Element                                                                                                                         | UKC-Support | Customer | UKC Professional Services |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- | ------------------------- |
| Installation of 3rd party integrated apps/services                                                                              | N           | Y        | £                         |
| Installation of additional modules                                                                                              | N           | Y        | £                         |
| Management and Administration of data and resources within the Web Server (e.g. Sites, Domains, FTP users, general permissions) | N           | Y        | £                         |
| Encryption and all associated Key Management                                                                                    | N           | Y        | N                         |

### In-life - Troubleshooting and remediation

| Element                                                                           | UKC-Support                           | Customer | UKC Professional Services |
| --------------------------------------------------------------------------------- | ------------------------------------- | -------- | ------------------------- |
| HA/Cluster Replication                                                            | Y                                     | N        | N                         |
| Ad-hoc performance issues (identification)                                        | Y (Basic)                             | N        | N                         |
| Ad-Hoc performance issues (remediation)                                           | Y (Basic)                             | Y        | £                         |
| Web Server Services issues (e.g. services fails to start, service keeps stopping) | Y                                     | N        | N                         |
| Issue with IaaS/VM                                                                | Y                                     | N        | N                         |
| Expansion of virtual capacity                                                     | Y (in consultation with the customer) | N        | N                         |
| Web Server Service Errors (Identification & Triage)                               | Y                                     | N        | N                         |
| Web Server Service Errors (Remediation)                                           | Y                                     | N        | N                         |
| Customer sites/domains integrity and validation                                   | N                                     | Y        | £                         |
| DNS Issues directly impacting Web Service Services (identification)               | Y (in consultation with the customer) | Y        | N                         |
| DNS Issues directly impacting Web Service Services (Remediation)                  | Y (in consultation with the customer) | Y        | N                         |
| End-user management and troubleshooting                                           | N                                     | Y        | N                         |
| Issues with application being hosted                                              | Y (Basic)                             | Y        | N                         |

## General support and troubleshooting

Beyond the service scope defined in this article, UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request the Managed Web Server service via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Managed Web Server environment with default configurations (unless otherwise specified) and commence protecting any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [Scope of Managed Web Server service](#scope-of-managed-web-server-service) section of this article where the customer is identified as responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to perform all necessary duties in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
