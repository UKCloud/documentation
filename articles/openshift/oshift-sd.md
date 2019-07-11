---
title: UKCloud for OpenShift Service Definition | UKCloud Ltd
description: Provides an overview of what is provided by the UKCloud for OpenShift service
services: openshift
author: Sue Highmoor
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenShift Service Definition
toc_fullpath: Service Definition/oshift-sd.md
toc_mdlink: oshift-sd.md
---

# UKCloud for OpenShift Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is UKCloud for OpenShift?

UKCloud for OpenShift delivers a secure, private deployment of Red Hat’s OpenShift Container Platform, enabling developers to use build automation pipelines and leverage the benefits of containerised solutions, helping to deliver modern, cloud native applications and accelerate digital transformation.

UKCloud deploys, scales and monitors the platform, freeing up your DevOps resources to focus on adding value further up the stack through the rapid delivery of quality-controlled code, all without having to worry about the underlying infrastructure or software.

For full information regarding this product, we have [FAQs](oshift-faq.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Deliver new software features faster, focusing on customer value rather than infrastructure complexities

- Cope with unpredictable spikes in traffic and customer demand

- Realise more value from your DevOps team by allowing them to focus on the ‘Dev’ rather than ‘Ops’

- Create a standard approach to deployment, ensuring consistency across all users

- Perform platform maintenance with less disruption to applications

- Try out new ideas in a low-risk sandboxed environment

- Remove the cost and complexity of provisioning, managing and scaling the underlying infrastructure, OS and middleware components

- Avoid lock-in — OpenShift can be deployed on a wide choice of IaaS platforms

## Product options

The service is designed to be flexible and allows you to mix and match from a range of pre-defined Runtime Packs and change them when required.

### Security Domain Foundation Pack

Choose the security domain to deploy the foundation for supporting the orchestration and management of the container runtime environments.

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Runtime Packs

Provides the footprint to host customer's containerised applications and services. (Customers can choose to mix and match Runtime Packs)

- SMALL (16 GiB / 2vCPU)

- MEDIUM (32 GiB / 4vCPU)

- LARGE (64 GiB / 8vCPU)

### Persistent Volumes

Containers in OpenShift by default don’t persist data. Every time an application is started, it creates a new container with an immutable image. Hence, any persisted data in the file system is lost when the container stops or is destroyed. Persistent Volumes can be used within your OpenShift environment to provide data persistence independent of containers.

- Tier 1 - High I/O database applications

- Tier 2 - Seldom-accessed media

### Registry Storage

OpenShift builds images directly from your source code, utilising an integrated registry to locally manage images. This registry is stored securely outside of your OpenShift environment

- UKCloud provides you with an initial 60GB of registry storage as part of your Foundation Pack; any additional registry storage will be chargable.

### Additional Networks

By default, your OpenShift cluster will only be connected to the internet. Your OpenShift environment can be provisioned on other networks such as HSCN, Janet, RLI and PSN

### Infrastructure Nodes

Additional nodes to support OpenShift core services such as OpenShift routers, registry, metric collection and aggregated logging. Infrastructure nodes cannot be used for containerised workloads.

## Pricing and packaging

UKCloud for Red Hat OpenShift starts from £940 per month, and full pricing with all options including licensing and connectivity available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

## Accreditation and information assurance

The security of our platform is our number one priority. We’ve always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that enterprise workloads need a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

&nbsp;                      | &nbsp;
----------------------------|-------
**Service level agreement** | 99.50%
**Portal level agreement**  | 99.90%
**Planned maintenance**     | Excluded
**Measurement of SLA**      | Unavailability applies when the OpenShift environment becomes unresponsive owing to a fault in the UKCloud-controlled OpenShift infrastructure and services which lies with:<ul><li>UKCloud-controlled components such as the virtual infrastructure, storage, power, and physical firewalls and routers<li>UKCloud-maintained OpenShift services (Master Nodes, Worker Nodes, Routing Layer)</ul>
**Key exclusions**          | The following are examples of what is not covered by the SLA:<ul><li>Faults within user control, that is, any code owned and controlled by the customer<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Issues arising from bugs introduced as part of any new releases published by Red Hat (UKCloud will conduct thorough testing prior to applying any new releases)</ul>

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
