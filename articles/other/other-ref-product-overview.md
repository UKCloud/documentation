---
title: Services at a glance
description: Provides a top level comparison for our main products
services: other
author: shall
reviewer: shighmoor
lastreviewed: 01/12/2020

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Services at a glance
toc_fullpath: Reference/other-ref-product-overview.md
toc_mdlink: other-ref-product-overview.md
---

# Services at a glance

This article is designed to provide you with a top level comparison for our main products. For further information, refer to the appropriate Service Definition as listed in [*UKCloud Service Definitions*](other-ref-service-definitions.md).

## [Onboarding and offboarding](#tab/tabid-1)

&nbsp;                                   | Setup cost | Minimum commit                 | Onboarding time | Termination notice
-----------------------------------------|------------|--------------------------------|-----------------|-------------------
**UKCloud for Managed OpenShift**        | No         | 1 month                        | 5 days          | 30 days
**UKCloud for Microsoft Azure**          | No         | 1 hour                         | 4 hours         | 30 days
**UKCloud for OpenStack**                | No         | 1 hour                         | 4 hours         | 30 days
**UKCloud for Oracle Software**          | No         | 1 hour (VM); 1 month (Storage) | 5 days          | 30 days
**UKCloud for VMware**                   | No         | 1 hour                         | 4 hours         | 30 days
**Cloud GPU**                            | No         | 1 hour                         | 10 days         | 30 days
**Cloud Storage**                        | No         | 1 month                        | 1 day           | 30 days
**Cross Domain Security Zone**           | No         | 1 month                        | 5 days          | 30 days
**Disaster Recovery as a Service**       | No         | 1 hour                         | 4 hours         | 30 days
**Email & Collaboration as a Service**   | No         | 25 mailboxes                   | 5 days          | 30 days
**High Performance Compute**             | No         | 24 months                      | N/A             | 30 days and early termination fee
**Managed Monitoring as a Service**      | No         | 1 month                        | 5 days          | 30 days
**Migration to the Cloud**               | No         | 1 hour                         | 4 hours         | 30 days
**Private Cloud**                        | 10% of asset cost (CAPEX), From £10k (OPEX) | 3 - 24 months | N/A | 30 days and early termination fee
**Private Cloud for Oracle Software**    | From £10k  | 24 months                      | N/A             | 30 days and early termination fee
**Private Cloud for Storage**            | 10% of asset cost (CAPEX), From £10k (OPEX) | 24 months | N/A | 30 days and early termination fee
**Secure Remote Access**                 | No         | 1 month                        | 5 days          | 30 days
**UKCloud Desktop as a Service**         | No         | 1 month                        | N/A             | 30 days
**Cloud Enablement**                     | VPN: £2,000, Server/storage: Depends on solution | 1 month | Depends on solution | 30 days
**Big Cloud Enablement**                 | 12 month: £5,000 per rack, 36 month: £0 per rack | 12 months | Depends on solution | 30 days (termination cost: Remainder of contract)

## [VM sizing, billing and trials](#tab/tabid-2)

&nbsp;                                   | Min VM size     | Max VM size       | Billing units                               | Free trial
-----------------------------------------|-----------------|-------------------|---------------------------------------------|-----------
**UKCloud for Managed OpenShift**        | N/A             | N/A               | Per node per month                          | Yes
**UKCloud for Microsoft Azure**          | 1 vCPU, 768 MiB | 64 vCPU, 128 GiB  | Per VM per hour                             | Yes
**UKCloud for OpenStack**                | 1 vCPU, 500 MiB | 56 vCPU, 440 GiB  | Per instance per hour                       | Yes
**UKCloud for Oracle Software**          | 1 Core, 8 GiB   | 12 Cores, 128 GiB | Per VM per hour (per GiB per month storage) | Yes
**UKCloud for VMware**                   | 1 vCPU, 500 MiB | 12 vCPU, 128 GiB  | Per VM per hour                             | Yes
**Cloud GPU**                            | N/A             | N/A               | per hour (per month for HPC)                | Yes
**Cloud Storage**                        | N/A             | N/A               | Monthly                                     | Yes
**Cross Domain Security Zone**           | 1 vCPU, 2 GiB   | 8vCPU, 96 GiB     | Monthly for baseline, hourly for VM         | No
**Disaster Recovery as a Service**       | N/A             | N/A               | Per VM per hour                             | Yes
**Email & Collaboration as a Service**   | N/A             | N/A               | Monthly per mailbox                         | Yes
**High Performance Compute**             | N/A             | N/A               | Pack + storage per month                    | No
**Managed Monitoring as a Service**      | N/A             | N/A               | Monthly                                     | &nbsp;
**Migration to the Cloud**               | N/A             | N/A               | Per VM per hour                             | Yes
**Private Cloud**                        | N/A             | N/A               | Monthly                                     | No
**Private Cloud for Oracle Software**    | N/A             | N/A               | Monthly                                     | No
**Private Cloud for Storage**            | N/A             | N/A               | Monthly                                     | No
**Secure Remote Access**                 | 1 vCPU, 2 GiB   | 12vCPU, 128 GiB   | Monthly for licenses, hourly for VM         | No
**UKCloud Desktop as a Service**         | Desktop options: 1 vCPU, 2 GiB RAM, 30 GiB Storage<br>Session hosting: 8 vCPU, 16 GiB RAM, 250 GiB Storage | Desktop options: 8 vCPU, 16 GiB RAM, 100 GiB Storage<br>Session hosting: 8 vCPU, 48 GiB RAM, 500 GiB Storage | Monthly | &nbsp;
**Cloud Enablement**                     | N/A             | N/A               | Monthly                                     | No
**Big Cloud Enablement**                 | N/A             | N/A               | Monthly                                     | No

## [SLA, service credits and maintenance](#tab/tabid-3)

&nbsp;                                   | SLA                                          | Service credits - data plane                                         | Service credits - Control plane        | Planned Maintenance
-----------------------------------------|----------------------------------------------|----------------------------------------------------------------------|----------------------------------------|--------------------
**UKCloud for Managed OpenShift**        | 99.95%                                       | 3% of monthly spend for affected UKCloud deployed OpenShift platform | 1% per 1% or part thereof below 99.90% | Excluded
**UKCloud for Microsoft Azure**          | Single instance=99.90%, dual instance=99.95% | 5% per 5% or part thereof below SLA                                  | 1% per 1% or part thereof below 99.90% | Excluded
**UKCloud for OpenStack**                | 99.95%                                       | 2% of monthly region spend/10% of monthly global spend               | 1% per 1% or part thereof below 99.90% | Excluded
**UKCloud for Oracle Software**          | Non-HA=99.95% , HA=99.99%                    | 10% of monthly spend of affected OVM                                 | 1% per 1% or part thereof below 99.90% | Excluded
**UKCloud for VMware**                   | ESSENTIAL/PRIORITY=99.95%, POWER=99.99%      | 3% (ESSENTIAL), 5% (POWER/PRIORITY) or part thereof below SLA        | 1% per 1% or part thereof below 99.90% | Included (ESSENTIAL/POWER), Excluded (PRIORITY)
**Cloud GPU**                            | 99.90%                                       | 3% of monthly spend per 5% below SLA                                 | 1% per 1% or part thereof below 99.90% | Excluded
**Cloud Storage**                        | STANDARD=99.95%, ENHANCED=99.99%             | STANDARD=10% monthly spend, ENHANCED=15% monthly spend               | 1% per 1% or part thereof below 99.90% | Excluded
**Cross Domain Security Zone**           | 99.90%                                       | 10% of monthly spend                                                 | 1% per 1% or part thereof below 99.90% | Excluded
**Disaster Recovery as a Service**       | N/A                                          | N/A                                                                  | N/A                                    | N/A
**Email & Collaboration as a Service**   | 99.99%                                       | 10% of monthly spend per 5% below SLA                                | 1% per 1% or part thereof below 99.90% | Excluded
**High Performance Compute**             | 99.90%                                       | 5% of monthly spend for the affected compute platform                | 1% per 1% or part thereof below 99.90% | Excluded
**Managed Monitoring as a Service**      | 99.99%                                       | 1% of Managed Monitoring as a Service spend, per affected customer environment | N/A                          | Excluded
**Migration to the Cloud**               | N/A                                          | N/A                                                                  | N/A                                    | N/A
**Private Cloud**                        | 99.99%                                       | 10% of monthly spend                                                 | 1% per 1% or part thereof below 99.90% | Excluded
**Private Cloud for Oracle Software**    | 99.99%                                       | 10% of monthly spend                                                 | 1% per 1% or part thereof below 99.90% | Excluded
**Private Cloud for Storage**            | 99.99%                                       | 10% of monthly spend                                                 | 1% per 1% or part thereof below 99.90% | Excluded
**Secure Remote Access**                 | 99.90%                                       | 10% of monthly spend                                                 | 1% per 1% or part thereof below 99.90% | Excluded
**UKCloud Desktop as a Service**         | N/A                                          | N/A                                                                  | N/A                                    | N/A
**Cloud Enablement**                     | N/A                                          | N/A                                                                  | N/A                                    | N/A
**Big Cloud Enablement**                 | N/A                                          | N/A                                                                  | N/A                                    | N/A

## [Discount schemes](#tab/tabid-4)

&nbsp;                                   | Discount schemes
-----------------------------------------|-----------------
**UKCloud for Managed OpenShift**        | Commitment, Cloud Credits
**UKCloud for Microsoft Azure**          | Commitment, Annual subscription, Cloud Credits
**UKCloud for OpenStack**                | Commitment, Annual subscription, Cloud Credits
**UKCloud for Oracle Software**          | Commitment, Annual subscription, Cloud Credits
**UKCloud for VMware**                   | Commitment, Annual subscription, Cloud Credits
**Cloud GPU**                            | Commitment, Annual subscription, Cloud Credits
**Cloud Storage**                        | Cloud Credits, product-specific discounts available
**Cross Domain Security Zone**           | Commitment, Cloud Credits
**Disaster Recovery as a Service**       | Cloud Credits
**Email & Collaboration as a Service**   | Commitment, Cloud Credits
**High Performance Compute**             | Cloud Credits
**Managed Monitoring as a Service**      | Commitment, Cloud Credits
**Migration to the Cloud**               | Cloud Credits
**Private Cloud**                        | Cloud Credits
**Private Cloud for Oracle Software**    | Cloud Credits
**Private Cloud for Storage**            | Cloud Credits
**Secure Remote Access**                 | Commitment, Cloud Credits
**UKCloud Desktop as a Service**         | Commitment, Cloud Credits
**Cloud Enablement**                     | N/A
**Big Cloud Enablement**                 | N/A

***

> [!NOTE]
> The following products are no longer available for sale. They are included in this article to support existing customers of the product only:
>
> - High Performance Compute
>
> - Email and Collaboration as a Service
>
> - Cloud GPU

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
