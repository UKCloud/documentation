---
title: UKCloud for OpenStack Service Definition
description: Provides an overview of what is provided by the UKCloud for OpenStack service
services: openstack
author: Sue Highmoor
reviewer:
lastreviewed: 02/07/2019
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenStack Service Definition
toc_fullpath: Service Definition/ostack-sd.md
toc_mdlink: ostack-sd.md
---

# UKCloud for OpenStack Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government’s Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud’s technical experts.

![UKCloud services](images/ukc-services.png)

## What is UKCloud for OpenStack?

UKCloud for OpenStack is engineered specifically for organisations embracing digital transformation and delivering true cloud-native applications; facilitating the creation of elastic infrastructure as code, which can be built once and run anywhere at any time to take full advantage of the benefits of cloud. Powered by OpenStack®, this service provides a full suite of modern, highly scalable and flexible IaaS services that address the needs of DevOps and WebOps communities. OpenStack's ease of use and openness enables delivery of Digital by Default services and solutions.

For full information regarding this product, we have [Service Scopes](ostack-sco.md), [FAQs](ostack-faq.md), [Getting Started videos](ostack-vid-overview.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Deliver digital transformation projects with high levels of trust and assurance, combined with flexibility and scalability

- Develop agile and innovative cloud-native applications in line with the Twelve-Factor Application architecture on a cloud platform built specifically supporting the GDS Service Design Manual

- Meet the increasing data flood demands from IoT and edge devices through using a rapidly horizontally scaling, elastic platform

- Support your hybrid and multi-cloud cloud strategies; span across on-premises, private cloud and Crown Hosting environments

- Reduce the risk of vendor lock-in — build your environment once and run it anywhere that supports OpenStack

- Test and deploy emerging technologies such as big data analytics and containerisation natively on a cloud platform

## Product options

The service is designed to be flexible and allows you to mix and match from a range of predefined options for each instance and change them when required.

### Security domain

Choose the security domain in which you want to run your application

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Instance type

Choose the instance that is the best fit to power your application

- Ephemeral - Instances that are transient

- Boot from Block - Instances that default to persistent storage

### Instance size

Define the instance size needed to power your application which can be changed to fit your requirements

- t1.nano (1vCPU, 0.5GiB)

- t1.tiny (1vCPU, 1GiB)
  
- t1.small (1vCPU, 2GiB)
  
- t1.medium (2vCPU, 2GiB)
  
- t1.large (2vCPU, 4 GiB)
  
- m1.small (4vCPU, 8 GiB)
  
- m1.medium (4vCPU, 16 GiB)
  
- m1.large (4vCPU, 32 GiB)
  
- r1.small (8vCPU, 16 GiB)
  
- r1.medium (8vCPU, 32 GiB)
  
- r1.large (8vCPU, 64 GiB)
  
- p1.medium (12vCPU, 128 GiB)

- b1.medium (28vCPU, 220 GiB)
  
- b1.large (56vCPU, 440 GiB)

### Persistent storage

Persistent storage is resilient to local hardware failures. All instances come with an allocation of ephemeral block storage for free. Workloads can use multiple storage profiles.

- Tier 1 - High I/O database applications

- Tier 2 - Seldom-accessed media

### Graphical procecessing (vGPU)

Add GPU capabilities to Instances to accelerate computational and visualisation workloads

### Self-service backup and restoration

- Instance Snapshot - Free (excluding storage) service enabling customers to snapshot entire instances

- Backup Suite - A paid for service which enables file level backup and restoration along with facilitating full workload migrations

## Pricing and packaging

UKCloud for OpenStack instances start at 1p per hour, and full pricing with all options including licensing and connectivity available in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

## Accreditation and information assurance

The security of our platform is our number one priority. We’ve always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that enterprise workloads need a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

<table>
  <tr>
    <th></th>
    <th>Data Plane per region<br>(Instances)</th>
    <th>Control Plane<br>(OpenStack API and Horizon GUI)</th>
  </tr>
  <tr>
    <td><b>Service level agreement</b></td>
    <td>99.95%</td>
    <td>99.95%</td>
  </tr>
  <tr>
    <td><b>Portal level agreement</b></td>
    <td colspan="2">99.90%</td>
  </tr>
  <tr>
    <td><b>GPU</b></td>
    <td colspan="2">99.90% - see SLA definition article</td>
  </tr>
  <tr>
    <td><b>Planned maintenance</b></td>
    <td colspan="2">Excluded where a customer solution has been engineered to a single Region</td>
  </tr>
  <tr>
    <td><b>Measurement of SLA</b></td>
    <td>Inability to deploy/re-instantiate an Instance via the API at the same time as an existing Instance failing.</td>
    <td>Inability to receive a response to any valid requests submitted to the appropriate OpenStack API endpoint after seven retries in any consecutive 10-minute period.</td>
  </tr>
  <tr>
    <td><b>Key exclusions</b></td>
    <td colspan="2">The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and custom configurations (for example customer-defined networks)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul></td>
  </tr>
</table>

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
