---
title: Managed Active Directory Support Service Scope
description: Outlines important details regarding UKCloud's Managed Active Directory (AD) Support service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 29/07/2022
toc_rootlink: Advanced Support Services
toc_sub1: Managed Active Directory Support
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Active Directory Support Service Scope
toc_fullpath: Advanced Support Services/Managed Active Directory Support/man-sco-ad.md
toc_mdlink: man-sco-ad.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Managed Active Directory Support Service Scope

## About this document

This document is for customers considering purchasing UKCloud's Managed Active Directory (AD) Support service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## Scope of supported servers

> [!NOTE]
> This service is not intended to replace a customer's Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

| Servers Supported                                   |
|-----------------------------------------------------|
| Windows Server 2012+ (all editions that support AD) |

All servers that constitute this service must be patched to within 90 days of the most recent patches released by Microsoft. During onboarding, should UKCloud find any exceptions to this policy, UKCloud has the right to cancel this service after consultation with the customer.

Customers can engage UKCloud's Professional Services team to assess and apply outstanding patches prior to commencement of this service (additional costs apply).

## Supported configurations

| Supported configurations                                                                                                                                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AD Domain Services only (for example, excludes Azure Active Directory, Active Directory Federation Services, Active Directory Certificate Services, and so on) |
| Multi-Domain Controller (single server Active Directory Services are out of scope)                                                                             |

## Scope of Managed Active Directory Support service

The following tables outline the boundaries of responsibilities for the Managed AD Support service.

### Pre-life

| Element                                | UKCloud Support | Customer | UKCloud Professional Services |
|----------------------------------------|-----------------|----------|-------------------------------|
| Design                                 | N               | Y        | £                             |
| Deploy                                 | N               | Y        | £                             |
| Post deployment config                 | N               | Y        | £                             |
| Initial instantiation of HA/clustering | N               | Y        | £                             |
| Disaster recovery planning and design  | N               | Y        | N                             |
| AD trust/federation design             | N               | Y        | £                             |

### Transition

| Element                                      | UKCloud Support | Customer | UKCloud Professional Services |
|----------------------------------------------|-----------------|----------|-------------------------------|
| Existing AD validation (quality/integrity)   | N               | Y        | £                             |
| Customer schema migrations                   | N               | Y        | £                             |
| Implementation of disaster recovery          | N               | Y        | £                             |
| Implementation of AD trust/federation design | N               | Y        | £                             |

### In-life - Monitoring

| Element                           | UKCloud Support | Customer | UKCloud Professional Services |
|-----------------------------------|-----------------|----------|-------------------------------|
| IaaS platform and networking      | Y               | N        | N                             |
| VM availability                   | Y               | N        | N                             |
| VM CDM monitoring                 | Y               | N        | N                             |
| AD service availability           | Y               | N        | N                             |
| AD service status change          | Y               | N        | N                             |
| AD schema backup pass/fail        | Y               | N        | N                             |
| AD schema replication             | Y               | N        | N                             |
| Monitoring of trust relationships | Y               | N        | N                             |

### In-life - Patching

| Element                                                               | UKCloud Support | Customer | UKCloud Professional Services |
|-----------------------------------------------------------------------|-----------------|----------|-------------------------------|
| Windows Server (y and z stream/in-version patches)                    | Y               | N        | N                             |
| Windows Server major version upgrades                                 | N               | Y        | £                             |
| Validation of patches against third-party AD integrated apps/services | N               | Y        | £                             |

### In-life - Data protection and housekeeping

| Element                                    | UKCloud Support | Customer | UKCloud Professional Services |
|--------------------------------------------|-----------------|----------|-------------------------------|
| AD backup configuration and implementation | Y               | N        | N                             |
| AD backup troubleshooting                  | Y               | N        | N                             |
| AD backup restoration                      | Y               | N        | N                             |
| AD restoration troubleshooting             | N               | N        | N                             |

### In-life - Administration

| Element                                                                                             | UKCloud Support | Customer | UKCloud Professional Services |
|-----------------------------------------------------------------------------------------------------|-----------------|----------|-------------------------------|
| Management and administration of resource within AD (computers, people, security groups, and so on) | N               | Y        | £                             |
| Addition of AD sites and subnets                                                                    | Y               | N        | N                             |
| Creation of group policies                                                                          | N               | Y        | £                             |

### In-life - Troubleshooting and remediation

| Element                                                                          | UKCloud Support                   | Customer | UKCloud Professional Services |
|----------------------------------------------------------------------------------|-----------------------------------|----------|-------------------------------|
| AD replication                                                                   | Y                                 | N        | N                             |
| AD specific DFS-R (including sysvolshare and associated DFS-replication)         | Y                                 | N        | N                             |
| Ad-hoc performance issues (identification)                                       | Y (basic)                         | N        | N                             |
| Ad-hoc performance issues (remediation)                                          | Y (basic)                         | Y        | £                             |
| AD services issues (for example, services fail to start, service keeps stopping) | Y                                 | N        | N                             |
| Issue with IaaS/VM                                                               | Y                                 | N        | N                             |
| Expansion of virtual capacity                                                    | Y (in consultation with customer) | N        | N                             |
| AD service errors (identification and triage)                                    | Y                                 | N        | N                             |
| AD service errors (remediation)                                                  | Y                                 | N        | N                             |
| Customer AD schema integrity and validation                                      | N                                 | Y        | £                             |
| DHCP issues directly impacting AD services (identification)                      | Y (in consultation with customer) | Y        | N                             |
| DHCP issues directly impacting AD services (remediation)                         | Y (in consultation with customer) | Y        | N                             |
| DNS issues directly impacting AD services (identification)                       | Y (in consultation with customer) | Y        | N                             |
| DNS issues directly impacting AD services (remediation)                          | Y (in consultation with customer) | Y        | N                             |
| Resolving issues with trust relationships                                        | Y                                 | N        | N                             |
| End-user management and troubleshooting                                          | N                                 | Y        | N                             |

## General support and troubleshooting

Beyond the service scope defined in this article, UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request Managed AD Support via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Managed AD Support environment with default configurations (unless otherwise specified) and commence protecting any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [*Scope of Managed Active Directory Support service*](#scope-of-managed-active-directory-support-service) section of this article where the customer is identified as responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, MCN or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to perform all necessary duties in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
