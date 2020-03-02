---
title: Cloud Storage Service Definition
description: Provides an overview of what is provided by the Cloud Storage service
services: cloud-storage
author: Sue Highmoor
reviewer:
lastreviewed: 02/07/2019
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Storage Service Definition
toc_fullpath: Service Definition/cs-sd.md
toc_mdlink: cs-sd.md
---

# Cloud Storage Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is Cloud Storage?

Cloud Storage from UKCloud is a secure and highly adaptable storage platform designed to address a wide variety of use cases. It's based on object storage technology which is natively optimised for cloud storage in terms of scale, resilience and accessibility. Traditional storage solutions are typically characterised by large capital expenditure and an intensive management and support burden, and forever swing between under and over capacity. Cloud Storage benefits customers as there are no upfront costs and no minimum term commitments — customers merely pay for what they actually use, when they use it.

For full information regarding this product, we have [Service Scopes](cs-sco.md), [FAQs](cs-faq.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Release your existing ‘tier 1’ storage capacity and avoid unnecessary storage cost — migrate valuable but seldom used data to a secure and cost-effective cloud storage repository

- Build modern, distributed architecture applications leveraging the benefits of object storage

- Assure your data recovery — use it as a UK-based cloud backup target as an alternative to storing backups on unreliable tape media or expensive disk solutions

- Enhance the durability and availability of your personal data — replace inflexible network drives with cloud storage that can be accessed by any device from any location

- Reduce your burden and complexity of managing the unpredictable capacity requirements of your organisation as we enter the era of big data

## Product options

The service is designed to be flexible and allows you to mix and match from a range of pre-defined options and change them when required.

### Security Domain

Choose the security domain in which you want to run your application

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Service Level

Choose the service level that is the best fit to power your application

- STANDARD (SLA: 99.95%) - Local protection (single site)

- ENHANCED (SLA: 99.99%) - Local and remote protection (multi site)

### Storage Gateway (Optional)

Storage Gateways (for example GeoDrive) enable simplified access and application integration to Cloud Storage by presenting object storage as a file system

## Pricing and packaging

UKCloud’s Cloud Storage starts from 1.46p per GiB per month, and full pricing with all options including licensing and connectivity available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

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
    <th>ENHANCED</th>
  </tr>
  <tr>
    <td><b>Service level agreement</b></td>
    <td>99.95%</td>
    <td>99.99%</td>
  </tr>
  <tr>
    <td><b>Portal level agreement</b></td>
    <td colspan="2">99.90%</td>
  </tr>
  <tr>
    <td><b>Planned maintenance</b></td>
    <td colspan="2">Excluded</td>
  </tr>
  <tr>
    <td><b>Measurement of SLA</b></td>
    <td colspan="2">Unavailability applies to existing data where the data becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power and internal networking such as physical firewalls and routers.</td>
  </tr>
  <tr>
    <td><b>Key exclusions</b></td>
    <td colspan="2">The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul></td>
  </tr>
</table>

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
