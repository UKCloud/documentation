---
title: UKCloud for VMware Service Definition
description: Provides an overview of what is provided by the UKCloud for VMware service
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 02/07/2019
toc_rootlink: Service Definition
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for VMware Service Definition
toc_fullpath: Service Definition/vmw-sd.md
toc_mdlink: vmw-sd.md
---

# UKCloud for VMware Service Definition

## Why UKCloud?

UKCloud is dedicated to helping the UK Public Sector and UK citizens by delivering more choice and flexibility through safe and trusted cloud technology. We own and operate a UK-sovereign, industry-leading, multi-cloud platform, located within the Government's Crown Campus, offering multiple cloud technologies, including VMware, Azure, OpenStack, OpenShift and Oracle. This enables customers to choose the right technology for creating new workloads or migrating existing applications to the cloud.

We recognise the importance of government services in making the country run smoothly, which is why we include the highest level of support to all our customers at no extra cost. This includes a dedicated 24/7 UK telephone and ticket support, and Network Operations Centre (NOC) utilising protective and proactive monitoring tools, and access to UKCloud's technical experts.

![UKCloud services](images/ukc-services.png)

## What is UKCloud for VMware?

UKCloud for VMware is a trusted, connected and flexible cloud, based on VMware technology, that allows you to either migrate existing workloads or create new workloads on our secure sovereign cloud platform quickly and easily whilst enjoying the economies of scale of the cloud. Using a familiar interface and structure for customers having virtualised using VMWare, it offers native backup and disaster recovery, storage options, all government network connectivity, [GPU](../gpu/gpu-sco.md) resource for enhanced compute and visualisation requirements and self-provisioning of VDCs and VMs. It is billed hourly with no minimum contracts and supported free of charge.

For full information regarding this product, we have [Service Scopes](vmw-sco.md), [FAQs](vmw-faq.md) and other relevant documents on our [Knowledge Centre](https://docs.ukcloud.com).

## What the service can help you achieve

- Transition legacy workloads without conversion into a secure public cloud, prolonging the life of your existing applications removing the tight coupling with existing ageing hardware

- Accelerate your data centre migration to cloud – simple migration of vSphere and Hyper-V workloads

- Add operational resilience to existing facilities or extend your on-premise data centre to manage growing workloads with hybrid cloud solutions

- Deliver digital transition projects that require high levels of security and assurance

- Leverage a platform that increases the scalability and resilience of your enterprise applications

- Enable GPU's massively parallelised capabilities allowing you to process large data sets at a much faster rate, allowing for greater operational efficiency

## Product options

The service is designed to be flexible and allows you to mix and match from a range of pre-defined options for each virtual machine and change them when required.

### Security domain

Choose the security domain in which you want to run your application

- Assured OFFICIAL - DDoS-protected internet, PSN, HSCN and Janet

- Elevated OFFICIAL - PSN and RLI

### Workload type

Choose the service type that is the best fit to power your application

- ESSENTIAL (SLA: 99.95%) - Test & dev, low priority workloads

- POWER (SLA: 99.99%) - Priority and intenstive workloads

- PRIORITY (SLA: 99.95%) - Apps requiring reduced mobility

### VM size

Define the VM size needed to power your application which can be changed to fit your requirements

- Micro (1vCPU, 0.5GiB)

- Tiny (1vCPU, 2GiB)

- Small (2vCPU, 4GiB)

- Medium (4vCPU, 8GiB)

- Medium High Memory (4vCPU, 16GiB)

- Large (8vCPU, 16GiB)

- Large High Memory (8vCPU, 32GiB)

- Tier 1 Apps Small (8vCPU, 48GiB)

- Tier 1 Apps Medium (8vCPU, 64GiB)

- Tier 1 Apps Large (8vCPU, 96GiB)

- Tier 1 Apps Extra Large (12vCPU, 128GiB)

### Storage

Define the storage required to deliver your application. All workloads (except micro) include 60GiB of Tier 2 storage for free, all storage is persistent and resilient to local hardware failures. Workloads can use multiple storage profiles

- Tier 1 - High I/O database applications

- Tier 2 - Seldom-accessed media

### Protection

Choose the protection required for your application. All customers can use the catalogue and template-based recovery

- Catalogue and template-based recovery

- Snapshot based recovery (14 or 28 days)

- Journaling (2, 7, 14 or 28 days)

- Synchronous Protection

### Advanced Distributed Networking

Advanced distributed networking functionality, available by purchasing the Advanced Management bundle, include

- Distributed Firewalls - create security groups and firewall rules

- Distributed Logical Routers - for routing East-West traffic with VDCs

- L2 VPN - to stretch an L2 subnet between UKCloud zones, UKCloud and on-premises vSphere and between UKCloud and remote branches of vSphere with no NSX

### Monitoring, Metrics and Alerting

- Standard - Basic VM performance metrics for last 7 days

- Advanced vROPs - Access to a vROPs style interface for advanced monitoring and reporting capabilities

### GPU

- Visualisation - NVIDIA Tesla M60 GPUs provide the industry's highest user performance for virtualised workstations, desktops, and applications

- Compute - NVIDIA Tesla P100 GPUs use CUDA to accelerate the compute-intensive elements of workloads

## Pricing and packaging

UKCloud for VMware VMs start at 1p per hour, and full pricing with all options including licensing and connectivity are available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Accreditation and information assurance

The security of our platform is our number one priority. We've always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors, and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We offer a range of flexible connectivity options detailed in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide) which enable access to our secure platform by DDoS-protected internet, native PSN, Janet, HSCN and RLI and your own lease lines via our HybridConnect service.

## An SLA you can trust

We understand that enterprise workloads need a dependable service that underpins the reliability of the application to users and other systems, which is why we offer one of the best SLAs on G-Cloud. For full details on the service SLA including measurements and service credits, please view the [*SLA defintion article*](../other/other-ref-sla-definition.md) on the UKCloud Knowledge Centre.

<table>
  <tr>
    <th></th>
    <th>ESSENTIAL</th>
    <th>POWER</th>
    <th>PRIORITY</th>
  </tr>
  <tr>
    <td><b>Service level agreement</b></td>
    <td>99.95%</td>
    <td>99.99%</td>
    <td>99.95%</td>
  </tr>
  <tr>
    <td><b>Portal level agreement</b></td>
    <td colspan="3">99.90%</td>
  </tr>
  <tr>
    <td><b>GPU</b></td>
    <td colspan="3">99.90% - see SLA defintion</td>
  </tr>
  <tr>
    <td><b>Planned maintenance</b></td>
    <td>Included</td>
    <td>Included</td>
    <td>Excluded</td>
  </tr>
  <tr>
    <td><b>Measurement of SLA</b></td>
    <td colspan="3">Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.</td>
  </tr>
  <tr>
    <td><b>Key exclusions</b></td>
    <td colspan="3">The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul></td>
  </tr>
</table>

## The small print

For full terms and conditions including onboarding and responsibilities, please refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
