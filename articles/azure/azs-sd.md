---
title: UKCloud for Microsoft Azure Service Definition | UKCloud Ltd
description: Provides an overview of what is provided by the UKCloud for Microsoft Azure service
services: azure-stack
author: Sue Highmoor
toc_rootlink: Users
toc_sub1: Service Definition
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure Service Definition
toc_fullpath: Users/Service Definition/azs-sd.md
toc_mdlink: azs-sd.md
---

# UKCloud for Microsoft Azure Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is UKCloud for Microsoft Azure?

UKCloud for Microsoft Azure harnesses the innovation of Microsoft’s Azure platform delivered from within our award-winning government-grade multi-cloud environment – addressing the service, connectivity and diversity requirements of UK public sector organisations and their industry partners. UKCloud can also support your deployments on Azure public – giving you one partner for all your cloud workloads.

For full information regarding this product, we have [Service Scopes](azs-sco.md), [FAQs](azs-faq.md), [Getting Started videos](azs-vid-overview.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Recycle existing Azure skills and developer productivity through consistent application development, enabling you to standardise on skills and tooling, and start modernising your applications by increasing operational efficiency.

- Use UKCloud as your partner for your Azure public deployments, allowing for a seamless hybrid cloud experience.

- Meet your compliance requirements. Your data never leaves the UK when at rest on our platform, which is capable of supporting data classified up to above OFFICIAL.

- Ensure that your application is always available. Build sovereign, disaster-tolerant solutions on Azure utilising our multiple UK sites, or combine a UKCloud region with the UK region of Azure.

- Leverage low latency connections to Crown Hosting, enabling you to build hybrid private or public cloud solutions that span both of our UK sovereign data centres.

- Add operational resilience to existing facilities or extend your estate to cope with growing workloads with hybrid cloud solutions.

## Product options

The service is designed to be flexible and allows you to mix and match from a range of predefined options for each virtual machine.

### Security domain

Choose the security domain in which you want to run your application

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Virtual machine type

Choose the virtual machine type that is the best fit to power your application

- Basic and Standard A-series - Best suited for entry level workloads such as dev and test

- Standard D and DS series - Suitable for most general purpose applications; some D series VMs have higher memory making them suitable for memory intensive applications

### Storage

There are several ways in which storage can be addressed

- Azure blob storage used to support virtual machines (page) or as object storage for file storage (block)

- Azure queue storage for supporting and scaling micro-service architecture

- Azure table storage optimised for supporting NoSQL databases

### PaaS templates

Deploy Microsoft approved images onto IaaS platforms from the marketplace

- Azure Site Recovery

- Azure Backup

- Azure Kubernetes Service (container management platform AKS)

- Service Fabric

### Additional deployment options

#### Private Cloud

IaaS and PaaS on a dedicated infrastructure. Service options include:

- Azure Infrastructure services - Dedicated virtual machines.

- Database services for SQL and MYSQL - Enables simple consumption of databases for cloud-native applications, websites and workloads.

- Platform services:

  - Azure App Service - Create applications for any platform or device. Automate business processes and host cloud APIs.

  - Azure Functions - Serverless computing technology that enables you to build applications faster.

- Deployment options:

  - Location - Deploy and manage from a variety of locations: UKCloud hosted, Crown Hosting or your own data centres.

  - Flexible purchase options - Based on CAPEX, OPEX or bring your own infrastructure.

#### Microsoft Azure's public cloud services

UKCloud can support with your licensing, management and utilisation of tenancies on the Microsoft public cloud. Get in touch to find out more.

## Pricing and packaging

UKCloud for Microsoft Azure VMs start at 3p per hour, and full pricing with all options including public Azure, licensing and connectivity available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

## Accreditation and information assurance

The security of our platform is our number one priority. We’ve always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that your workload needs a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

&nbsp;                      | UKCloud for Microsoft Azure (public multi-tenant)
----------------------------|--------------------------------------------------
**Service level agreement** | 99.90% (single VM - deployed inside an availability zone)<br>99.95% (single VM - two instances deployed inside an availability zone)
**Portal level agreement**  | 99.90%
**Planned maintenance**     | Included
**Measurement of SLA**      | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**          | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul> |

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
