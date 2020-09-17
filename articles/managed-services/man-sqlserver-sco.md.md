---
title: Managed SQL Server Service Service Scope
description: Outlines important details regarding Managed SQL Server Service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 16/09/2020
toc_rootlink: Managed IT Operations
toc_sub1: Managed SQL Server Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed SQL Server Service Service Scope
toc_fullpath: Managed IT Operations/Managed SQL Server Service/man-sqlserver-sco.md
toc_mdlink: man-sqlserver-sco.md
---

# Managed SQL Server Service Service Scope

## About this document

This document is for customers considering purchasing Managed SQL Server Service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## Scope of Supported Databases

The following table outlines the varies databases which can be supported with the Managed SQL Server Service:

| **SQL Supported**                            |
|----------------------------------------------|
| Microsoft SQL Server 16 to 19  \- Enterprise |
| Microsoft SQL Server 16 to 19  \- Standard   |
| Microsoft SQL Server 16 to 19  \- Developer  |
| Microsoft SQL Server 16 to 19  \- Web        |
| MySQL Standard Edition                       |
| MySQL Enterprise Edition                     |
| MariaDB Server                               |
| PostgreSQL Server                            |

<BR>

| **Supported configurations**   |
|--------------------------------|
| Single deployment              |
| HA \- Clustered                |
| Always On' availability groups |


## Scope of Managed SQL Server Service

The following table outlines the boundaries of responsibilities for Managed SQL Server Service:

| **Element**                                                                                                                                                                                                                               | **UKC-Support** | **Customer** | **UKC Pro-Services** | **Notes**                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|--------------|----------------------|-------------------------------------------------------------------------------|
| <td colspan=5> ***Pre\-Life***                                                                                                                                                                                                                              |                 |              |                      |                                                                               |
| Design                                                                                                                                                                                                                                 | N               | Y            | £                    |                                                                               |
| Deploy                                                                                                                                                                                                                                 | N               | Y            | £                    |                                                                               |
| Post Deployment Config                                                                                                                                                                                                                 | N               | Y            | £                    |                                                                               |
| Initial instantiation of HA/Clustering                                                                                                                                                                                                 | N               | Y            | £                    |                                                                               |
| DR planning & design                                                                                                                                                                                                                   | N               | Y            | £                    |                                                                               |
| <td colspan=5>***Transition***                                                                                                                                                                                                                             |                 |              |                      |                                                                               |
| Customer data validation \(quality/integrity\)                                                                                                                                                                                         | N               | Y            | £                    |                                                                               |
| Customer data migration                                                                                                                                                                                                                | N               | Y            | £                    |                                                                               |
| Customer SQL config migration                                                                                                                                                                                                          | N               | Y            | £                    |                                                                               |
| Implementation of DR                                                                                                                                                                                                                   | N               | Y            | £                    |                                                                               |
| Customer data ingress                                                                                                                                                                                                                  | N               | Y            | £                    |                                                                               |
| <td colspan=5> ***In\-Life: Monitoring***                                                                                                                                                                                                                   |                 |              |                      |                                                                               |
| IaaS Platform & Networking                                                                                                                                                                                                             | Y               | N            | N                    |                                                                               |
| VM Availability                                                                                                                                                                                                                        | Y               | N            | N                    |                                                                               |
| VM CDM Monitoring                                                                                                                                                                                                                      | Y               | N            | N                    |                                                                               |
| SQL Instance Availability                                                                                                                                                                                                              | Y               | N            | N                    |                                                                               |
| SQL Service status change                                                                                                                                                                                                              | Y               | N            | N                    |                                                                               |
| SQL Backup pass/fail                                                                                                                                                                                                                   | Y               | N            | N                    |                                                                               |
| SQL Replication                                                                                                                                                                                                                        | Y               | N            | N                    |                                                                               |
| Always\-on availability group health                                                                                                                                                                                                   | Y               | N            | N                    |                                                                               |
| Ad\-hock SQL Performance Monitoring                                                                                                                                                                                                    | N               | Y            | £                    |                                                                               |
| Weekly Maintenance plans pass/fail                                                                                                                                                                                                     | Y               | N            | N                    |                                                                               |
| <td colspan=5>***In\-Life: Patching***                                                                                                                                                                                                                     |                 |              |                      |                                                                               |
| VM OS \(y & z stream/in\-version patches\)                                                                                                                                                                                             | Y               | N            | N                    |                                                                               |
| VM OS Major Version Upgrades                                                                                                                                                                                                           | N               | Y            | £                    | Customer will need to liaise with UKC if they intend to perform major upgrade |
| SQL  \(y & z stream/in\-version patches\)                                                                                                                                                                                              | Y               | N            | N                    |                                                                               |
| SQL Major Version Upgrades                                                                                                                                                                                                             | N               | Y            | £                    | Customer will need to laisse with UKC if they intend to perform major upgrade |
| Client Connectors                                                                                                                                                                                                                      | N               | Y            | £                    |                                                                               |
| <td colspan=5>***In\-Life: Data Protection & Housekeeping***                                                                                                                                                                                               |                 |              |                      |                                                                               |
| Backup configuration & implementation                                                                                                                                                                                                  | Y               | N            | N                    |                                                                               |
| Backup troubleshooting                                                                                                                                                                                                                 | Y               | N            | N                    |                                                                               |
| Backup restoration                                                                                                                                                                                                                     | Y               | N            | N                    |                                                                               |
| Restoration troubleshooting                                                                                                                                                                                                            | Y               | N            | N                    |                                                                               |
| DR Testing                                                                                                                                                                                                                             | N               | Y            | £                    |                                                                               |
| DR Invocation \(where already defined\)                                                                                                                                                                                                | Y               | N            | N                    |                                                                               |
| <td colspan=5> ***In\-Life: Administration \(DBA\)***                                                                                                                                                                                                       |                 |              |                      |                                                                               |
| User Management                                                                                                                                                                                                                        | N               | Y            | £                    |                                                                               |
| Security Permissions                                                                                                                                                                                                                   | N               | Y            | £                    |                                                                               |
| Triggers/Stored Procedures                                                                                                                                                                                                             | N               | Y            | £                    |                                                                               |
| Client Connector Configuration                                                                                                                                                                                                         | N               | Y            | £                    |                                                                               |
| Tuning \(once a month per instance\)                                                                                                                                                                                                   | Y               | N            | N                    |                                                                               |
| Maintenance plans \(Define & Implement \- inc\. Index reorg/rebuilds\)                                                                                                                                                                 | Y               | N            | N                    |                                                                               |
| Weekly statistics update for top query optimiser performance                                                                                                                                                                           | Y               | N            | N                    |                                                                               |
| Daily Database integrity check for database corruption                                                                                                                                                                                 | Y               | N            | N                    |                                                                               |
| Quarterly SQL Server Performance Reviews                                                                                                                                                                                               | Y               | N            | N                    |                                                                               |
| <td colspan=5> ***In\-Life: Troubleshooting & Remediation***                                                                                                                                                                                                |                 |              |                      |                                                                               |
| Replication                                                                                                                                                                                                                            | N               | Y            | £                    |                                                                               |
| Issues with Always\-on availability groups                                                                                                                                                                                             | Y               | N            | N                    |                                                                               |
| Ad\-hock performance issues \(identification\)                                                                                                                                                                                         | Basic \- Y      | N            | N                    |                                                                               |
| Ad\-Hock performance issues \(remediation\)                                                                                                                                                                                            | Basic \- Y      | Y            | £                    |                                                                               |
| SQL Server Services issues \(e\.g\. services fails to start, service keeps stopping\)                                                                                                                                                  | Y               | N            | N                    |                                                                               |
| Issue with IaaS/VM                                                                                                                                                                                                                     | Y               | N            | N                    |                                                                               |
| Expansion of virtual capacity                                                                                                                                                                                                          | Y               | N            | N                    | In consultation with customer                                                 |
| SQL Server Errors \(Identification & Triage\)                                                                                                                                                                                          | Y               | N            | N                    |                                                                               |
| SQL Server Errors \(Remediation\)                                                                                                                                                                                                      | Basic \-Y       | Y            | N                    |                                                                               |
| Customer data integrity and validation                                                                                                                                                                                                 | N               | Y            | £                    |                                                                               |
| Issues with queries/triggers/stored procedures                                                                                                                                                                                         | N               | Y            | £                    |                                                                               |
| Remediate issues identified with integrity checks                                                                                                                                                                                      | Y               | N            | N                    |                                                                               |
| Remediate failures/errors in statistics updates                                                                                                                                                                                        | Y               | N            | N                    |                                                                               |
| Remediate failures/errors in maintenance plans                                                                                                                                                                                         | Y               | N            | N                    |                                                                               |
| Work with 3rd parties to assist with the troubleshooting and support of applications hosted on the named SQL Server\. The support and troubleshooting service is limited to the diagnosis of issues relating to Microsoft SQL Server\. | Y               | N            | N                    |                                                                               |

<u>Key</u>

**R = Responsible** - person who performs an activity or does the work.<BR>
**A= Accountable** - person who is ultimately accountable and has Yes/No/Veto.<BR>
**C= Consulted** - person that needs to feedback and contribute to the activity.<BR>
**I = Informed** - person that needs to know of the decision or action.<BR>

## General Support & Troubleshooting

Beyond the service scope defined in this article, UKCloud will work with the customer on a reasonable endeavours basis to troubleshoot and attempt remediation of of any incidents which may occur whilst using this service.

## Service provisioning

You can request Managed SQL Server Service via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will enable the customer's Anti-Virus environment with default configurations (unless otherwise specified) and commence protecting any endpoints that have been elected in to the service by the customer.

## Customer responsibilities

Any elements within the Scope section of this article where the Customer is listed as Accountable or Responsible.

The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into your environments to analyse and deploy any approved patches or software in order to provide a reliable service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
