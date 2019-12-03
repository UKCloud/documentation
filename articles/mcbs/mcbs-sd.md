---
title: Multi-Cloud Backup Storage Service Definition | UKCloud Ltd
description: Provides an overview of what is provided by the Multi-Cloud Backup Storage service
services: mcbs
author: Sue Highmoor
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Multi-Cloud Backup Storage Service Definition
toc_fullpath: Service Definition/mcbs-sd.md
toc_mdlink: mcbs-sd.md
---

# Multi-Cloud Backup Storage Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is Multi-Cloud Backup Storage?

UKCloud’s Multi-Cloud Backup Storage gives customers a backup target that is accessible from every cloud within UKCloud’s multi-cloud platform, as well as being an off-site target for any on-premises data back-up. This service utilises a technology that is common across backup products such as Veritas NetBackup/Backup Exec and Veeam, along with native hooks for databases backups from Oracle, DB2, SQL Server and Hadoop. In addition, this service can be attached as a backup target within your file system, enabling a wide array of applications to utilise this backup service.

For full information regarding this product, we have Service Scopes, FAQs and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Lower your overhead of managing complex and expensive backup storage infrastructure

- Lower Recovery Time Objective (RTO) for backup recovery through more granular or application aware backup applications

- Quicker database recovery, directly from backup target to database

- Greater control over backups using your own self-service backup applications

## Product options

The service is designed to be flexible and allows you to mix and match from a range of pre-defined options and change them when required.

### Security Domain

Choose the security domain in which you want to run your application

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Service Level

Choose the service level that is the best fit to power your application

- STANDARD (SLA: 99.95%) - Local protection (single site)

- REPLICATED (SLA: 99.99%) - Local and remote protection (multi site)

### Backup Extensions (Optional)

A suite of extensions that are engineered to optimise the Multi-Cloud Backup Storage service with your back up application. In addition, these extensions can be used to allow this service to connect to backup applications which do not offer native support for Dell EMC's DataDomain Suite

## Pricing and packaging

UKCloud’s Multi-Cloud Backup Service starts from 10p per GiB per month, full pricing with all options including licensing and connectivity is available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

## Accreditation and information assurance

The security of our platform is our number one priority. We’ve always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that enterprise workloads need a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

<table>
  <tr>
    <th></th>
    <th>STANDARD</th>
    <th>REPLICATED</th>
  </tr>
  <tr>
    <td><b>Service level agreement</b></td>
    <td>99.95%</td>
    <td>99.99%</td>
  </tr>
  <tr>
    <td><b>Portal level agreement</b></td>
    <td colspan="2">99.90%
  </tr>
  <tr>
    <td><b>Planned maintenance</b></td>
    <td>Excluded from SLA</td>
    <td>Included in SLA</td>
  </tr>
  <tr>
    <td><b>Measurement of SLA</b></td>
    <td colspan="2">Unavailability applies to existing data where the data on the backup target becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the backup infrastructure, storage, power and internal networking such as physical firewalls and routers.</td>
  </tr>
  <tr>
    <td><b>Key exclusions</b></td>
    <td colspan="2">The following are examples of what is not covered by the SLA:<ul><li>Faults within your control (e.g. backup software or application and user networks)<li>Incompatible applications or backup software (e.g. a change of backup software leading to incompatibility, or incompatible software versions)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul></td>
  </tr>
</table>

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
