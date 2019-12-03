---
title: Disaster Recovery as a Service Service Definition | UKCloud Ltd
description: Provides an overview of what is provided by the Disaster Recovery as a Service (DRaaS) service
services: draas
author: Sue Highmoor
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Disaster Recovery as a Service Service Definition
toc_fullpath: Service Definition/draas-sd.md
toc_mdlink: draas-sd.md
---

# Disaster Recovery as a Service Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is Disaster Recovery as a Service?

Disaster Recovery as a Service makes it easy to replicate and recover virtual machines to the cloud, by failing over from your own data centre to UKCloud’s trusted, cost-effective and well-connected cloud.

This service supports and facilitates your own business continuity (BC) plan or disaster recovery (DR) processes. You can easily replicate data and virtual machines (VMs) from your primary site to UKCloud to recover your services with minimum downtime and data loss. In contrast to traditional disaster recovery techniques, UKCloud’s service enables regular, real-world, non-disruptive tests to be undertaken.

For full information regarding this product, we have [Service Scopes](draas-sco.md), [FAQs](draas-faq.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Protect your on-premise vSphere and Hyper-V workloads to UKCloud secure data centres

- Create a duplicate copy of your server estate which is always in sync should a DR event occur

- Comply with policy, regulation or legislation (for example, Civil Contingencies Act) without the cost, complexity and inefficiency of traditional DR solutions

- Reduce your data centre footprint and associated CAPEX by removing the legacy infrastructure required to provide a DR solution

- Minimise data loss and downtime by realising short Recovery Point and Recovery Time Objectives (RPO and RTO)

- Lower your carbon footprint with an efficient platform

- Simplify DR testing – simple non-disruptive testing to ensure you can meet your business continuity requirements

- Replicate your on-premises network topology in the cloud using software-defined network capabilities

## Product options

The service is designed to be flexible and allows you to choose the level of protection you require for your specific workload.

### Protection

Choose the level of protection required for your workload

- 2 day retention

- 7 day retention

- 14 day retention

- 28 day retention

## Pricing and packaging

Disaster Recovery as a Service starts at 2.5p per hour, and full pricing with all options including licensing and connectivity is available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

## Accreditation and information assurance

The security of our platform is our number one priority. We’ve always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that enterprise workloads need a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

&nbsp;                       | UKCloud for VMware (POWER)
-----------------------------|---------------------------
**Service level agreement**  | 99.99% 
**Portal level agreement**   | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Included in calculations
**Measurement of SLA**       | Unavailability applies to existing storage that has become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers. Although we don't offer an SLA relating to the performance of the Zerto software, we do offer an SLA around the availability of the self-service portal, and one relating to the availability of the UKCloud for VMware platform that hosts the solution.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Replication faults introduced by your environment, or your implementation of Zerto</ul>
**Service Credit**           | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.<br>You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud’s Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
