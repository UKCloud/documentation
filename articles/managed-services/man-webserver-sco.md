---
title: Managed Web Server Service Scope
description: Outlines important details regarding UKCloud's Managed Web Server service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 25/06/2021
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

## Scope of supported servers

> [!NOTE]
> This service is not intended to replace a customer's Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

| Web servers supported               |
| ----------------------------------- |
| Internet Information Services (IIS) |
| Apache                              |
| NGINX                               |

> [!NOTE]
> Web server services only, including FTP. Additional services, such as load balancing and mail proxy, are out of scope.

All servers that constitute this service must be patched to within 90 days of the most recent patches released by the vendor. During onboarding, should UKCloud find any exceptions to this policy, UKCloud has the right to cancel this service after consultation with the customer.

Customers can engage UKCloud's Professional Services team to assess and apply outstanding patches prior to commencement of this service (additional costs apply).

## Supported configurations

| Supported configurations |
| ------------------------ |
| Single deployment        |
| HA - clustered/farm      |

## Scope of Managed Web Server service

The following tables outline the boundaries of responsibilities for the Managed Web Server service.

### Pre-life

| Element                                | UKCloud Support | Customer | UKCloud Professional Services |
|----------------------------------------|-----------------|----------|-------------------------------|
| Design                                 | N               | Y        | £                             |
| Deploy                                 | N               | Y        | £                             |
| Post deployment config                 | N               | Y        | £                             |
| Initial instantiation of HA/clustering | N               | Y        | £                             |
| Disaster recovery planning and design  | N               | Y        | £                             |

### Transition

| Element                                                     | UKCloud Support | Customer | UKCloud Professional Services |
|-------------------------------------------------------------|-----------------|----------|-------------------------------|
| Existing web services validation (quality/integrity/design) | N               | Y        | £                             |
| Customer data (for example, sites/domain) migrations        | N               | Y        | £                             |
| Implementation of disaster recovery                         | N               | Y         |£                              |

### In-life - Monitoring

| Element                                                                               | UKCloud Support | Customer | UKCloud Professional Services |
|---------------------------------------------------------------------------------------|-----------------|----------|-------------------------------|
| IaaS platform and networking (UKCloud platform - hypervisor and infrastructure below) | Y               | N        | N                             |
| VM availability                                                                       | Y               | N        | N                             |
| VM CPU, Disk, Memory (CDM) monitoring                                                                     | Y               | N        | N                             |
| Web server service availability                                                       | Y               | N        | N                             |
| Web server service status change                                                      | Y               | N        | N                             |
| Web server backup pass/fail                                                           | Y               | N        | N                             |
| HA replication monitoring                                                             | Y               | N        | N                             |
| Site certificates: Expiry monitoring                                                 | Y               | N        | N                             |

### In-life - Patching

| Element                                                            | UKCloud Support | Customer | UKCloud Professional Services |
|--------------------------------------------------------------------|-----------------|----------|-------------------------------|
| Web server (y and z stream/minor/in-version patches)               | Y               | N        | N                             |
| Web server major version Upgrades                                  | N               | Y        | £                             |
| Validation of patches against additional modules                   | N               | Y        | £                             |
| Validation of patches against third-party integrated apps/services | N               | Y        | £                             |

### In-life - Data protection and housekeeping

| Element                                 | UKCloud Support | Customer | UKCloud Professional Services |
|-----------------------------------------|-----------------|----------|-------------------------------|
| Backup configuration and implementation | Y               | N        | N                             |
| Backup troubleshooting                  | Y               | N        | N                             |
| Backup restoration                      | Y               | N        | N                             |
| Restoration troubleshooting             | Y               | N        | N                             |

### In-life - Administration

| Element                                                                                                                                | UKCloud Support | Customer | UKCloud Professional Services |
|----------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|-------------------------------|
| Installation of third-party integrated apps/services                                                                                   | N               | Y        | £                             |
| Installation of additional modules                                                                                                     | N               | Y        | £                             |
| Management and administration of data and resources within the web server (for example sites, domains, FTP users, general permissions) | N               | Y        | £                             |
| Encryption and all associated key management                                                                                           | N               | Y        | N                             |
| Site certificates: Providing/self-signing/renewing                                   | N               | Y        | N                             |
| Site certificates: Applying                                                          | Y               | N        | N                             |
| Site Certificates: General Management (excluding Providing/Procuring/Self-signing/Renewing)                                                          | Y               | N        | N                             |

### In-life - Troubleshooting and remediation

| Element                                                                                  | UKCloud Support                       | Customer | UKCloud Professional Services |
|------------------------------------------------------------------------------------------|---------------------------------------|----------|-------------------------------|
| HA/cluster replication                                                                   | Y                                     | N        | N                             |
| Ad-hoc performance issues (identification)                                               | Y (basic)                             | N        | N                             |
| Ad-hoc performance issues (remediation)                                                  | Y (basic)                             | Y        | £                             |
| Web server services issues (for example, services fail to start, service keeps stopping) | Y                                     | N        | N                             |
| Issue with IaaS/VM                                                                       | Y                                     | N        | N                             |
| Expansion of virtual capacity       | N        | Y                             | £                             |
| Web server service errors (identification and triage)                                    | Y                                     | N        | N                             |
| Web server service errors (remediation)                                                  | Y                                     | N        | N                             |
| Customer sites/domains integrity and validation                                          | N                                     | Y        | £                             |
| DNS issues directly impacting web service services (identification)                      | Y (in consultation with the customer) | Y        | N                             |
| DNS issues directly impacting web service services (remediation)                         | Y (in consultation with the customer) | Y        | N                             |
| End-user management and troubleshooting                                                  | N                                     | Y        | N                             |
| Issues with application being hosted                                                     | Y (basic)                             | Y        | N                             |

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
