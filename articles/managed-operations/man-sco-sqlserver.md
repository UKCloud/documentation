---
title: Managed SQL Server Service Scope
description: Outlines important details regarding UKCloud's Managed SQL Server service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 25/10/2021
toc_rootlink: Advanced Support Services
toc_sub1: Managed SQL Server
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed SQL Server Service Scope
toc_fullpath: Advanced Support Services/Managed SQL Server/man-sco-sqlserver.md
toc_mdlink: man-sco-sqlserver.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Managed SQL Server Service Scope

## About this document

This document is for customers considering purchasing Managed SQL Server service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## Scope of Supported Databases

> [!NOTE]
> This service is not intended to replace a customer's Systems Administrator or Operations Team. This service should be used to reduce the burden of routine IT hygiene and provide Level 3+ support assistance.

The following tables outline the varies databases that can be supported with the Managed SQL Server service:

| SQL Supported
|-------------
| Microsoft SQL Server 16 to 19  - Enterprise
| Microsoft SQL Server 16 to 19  - Standard
| Microsoft SQL Server 16 to 19  - Developer
| Microsoft SQL Server 16 to 19  - Web
| MySQL Standard Edition
| MySQL Enterprise Edition
| MariaDB Server
| PostgreSQL Server

| Supported configurations
|------------------------
| Single deployment
| HA - clustered
| Always-On availability groups

All servers that constitute this service must be patched to within 90 days of the most recent patches released by the vendor. During onboarding, should UKCloud find any exceptions to this policy, UKCloud has the right to cancel this service after consultation with the customer.

Customers can engage UKCloud's Professional Services team to assess and apply outstanding patches prior to commencement of this service (additional costs apply).

## Scope of Managed SQL Server service

The following tables outline the boundaries of responsibilities for the Managed SQL Server service.

### Pre-life

Element                                                 | UKCloud Support | Customer | UKCloud Professional Services
--------------------------------------------------------|-----------------|----------|------------------------------
Design                                                  | N               | Y        | £
Deploy                                                  | N               | Y        | £
Post Deployment Config                                  | N               | Y        | £
Initial instantiation of HA/Clustering                  | N               | Y        | £
DR planning & design                                    | N               | Y        | £

### Transition

Element                                      | UKCloud Support | Customer | UKCloud Professional Services
---------------------------------------------|-----------------|----------|------------------------------
Customer data validation (quality/integrity) | N               | Y        | £
Customer data migration                      | N               | Y        | £
Customer SQL config migration                | N               | Y        | £
Implementation of DR                         | N               | Y        | £
Customer data ingress                        | N               | Y        | £

### In-life - Monitoring

Element                             | UKCloud Support | Customer | UKCloud Professional Services
------------------------------------|-----------------|----------|------------------------------
IaaS platform & networking          | Y               | N        | N
VM availability                     | Y               | N        | N
VM CDM monitoring                   | Y               | N        | N
SQL instance availability           | Y               | N        | N
SQL service status change           | Y               | N        | N
SQL backup pass/fail                | Y               | N        | N
SQL replication                     | Y               | N        | N
Always-on availability group health | Y               | N        | N
Ad-hoc SQL performance monitoring   | N               | Y        | £
Weekly maintenance plans pass/fail  | Y               | N        | N

### In-life - Patching

Element                                 | UKCloud Support | Customer | UKCloud Professional Services | Notes
----------------------------------------|-----------------|----------|-------------------------------|------
VM OS (y & z stream/in-version patches) | Y               | N        | N                             |
VM OS major version upgrades            | N               | Y        | £                             | Customer will need to liaise with UKCloud if they intend to perform major upgrade
SQL (y & z stream/in-version patches)   | Y               | N        | N                             | Within 60 days of public release by the vendor, UKCloud will advise the customer of recommended SQL patches to be applied
SQL major version upgrades              | N               | Y        | £                             | Customer will need to liaise with UKCloud if they intend to perform major upgrade
Client connectors                       | N               | Y        | £                             |

### In-life - Data protection and housekeeping

Element                               | UKCloud Support | Customer | UKCloud Professional Services
--------------------------------------|-----------------|----------|------------------------------
Backup configuration & implementation | Y               | N        | N
Backup troubleshooting                | Y               | N        | N
Backup restoration                    | Y               | N        | N
Verification of backup data validity  | N               | Y        | N
Backup restoration troubleshooting    | Y               | N        | N
DR testing                            | N               | Y        | £
DR invocation (where already defined) | Y               | N        | N

> [!NOTE]
> Although UKCloud is responsible for checking the integrity of SQL backups from a pass/fail/error monitoring perspective, the customer is ultimately responsible for verifying the validity of their backups. UKCloud strongly suggests the customer routinely recovers their database to a secondary instance and connects a copy of their application to verify it operates as expected. **As UKCloud has no understanding of a customer's application, backup data validation sits outside of the scope of this service.**

### In-life - Administration (DBA)

Element                                                            | UKCloud Support | Customer | UKCloud Professional Services
-------------------------------------------------------------------|-----------------|----------|------------------------------
User management                                                    | N               | Y        | £
Security permissions                                               | N               | Y        | £
Triggers/stored procedures                                         | N               | Y        | £
Client connector configuration                                     | N               | Y        | £
Tuning (once a month per instance)                                 | Y               | N        | N
Maintenance plans (define & implement - inc. index reorg/rebuilds) | Y               | N        | N
Monthly statistics update for top query optimiser performance      | Y               | N        | N
Daily database integrity check for database corruption             | Y               | N        | N
Quarterly SQL Server performance reviews                           | Y               | N        | N

### In-life - Troubleshooting and remediation

Element                                                                          | UKCloud Support | Customer | UKCloud Professional Services | Notes
---------------------------------------------------------------------------------|-----------------|----------|-------------------------------|------
Replication                                                                      | N               | Y        | £                             |
Issues with Always-On availability groups                                        | Y               | N        | N                             |
Ad-hoc performance issues (identification)                                       | Basic - Y       | N        | N                             |
Ad-hok performance issues (remediation)                                          | Basic - Y       | Y        | £                             |
SQL Server services issues (e.g. services fail to start, services keep stopping) | Y               | N        | N                             |
Issue with IaaS/VM                                                               | Y               | N        | N                             |
Expansion of virtual capacity                                                    | Y               | N        | N                             | In consultation with customer
SQL Server errors (identification & triage)                                      | Y               | N        | N                             |
SQL Server errors (remediation)                                                  | Basic -Y        | Y        | N                             |
Customer data integrity and validation                                           | N               | Y        | £                             |
Issues with queries/triggers/stored procedures                                   | N               | Y        | £                             |
Remediate issues identified with integrity checks                                | Y               | N        | N                             |
Remediate failures/errors in statistics updates                                  | Y               | N        | N                             |
Remediate failures/errors in maintenance plans                                   | Y               | N        | N                             |
Work with 3rd parties to assist with the troubleshooting and support of applications hosted on the named SQL Server | Y | N | N | The support and troubleshooting service is limited to the diagnosis of issues relating to Microsoft SQL Server

## General support and troubleshooting

Beyond the service scope defined in this article, UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of any incidents that may occur whilst using this service.

## Service provisioning

You can request Managed SQL Server via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Anti-Virus environment with default configurations (unless otherwise specified) and commence protecting any endpoints that have been elected into the service by the customer.

## Customer responsibilities

Any elements within the [Scope of Managed SQL Server service](#scope-of-managed-sql-server-service) section of this article where the customer is identified as responsible.

The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, MCN or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into customer environments to analyse and deploy any approved patches or software in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
