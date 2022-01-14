---
title: UKCloud for VMware options
description: Provides information about the different choices you can make when building your UKCloud for VMware service
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 25/02/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for VMware options
toc_fullpath: Reference/vmw-ref-service-options.md
toc_mdlink: vmw-ref-service-options.md
---

# UKCloud for VMware options

## Introduction

Each enterprise application has its own set of technical and service requirements that must be addressed on an individual basis. UKCloud for VMware is completely configurable, and gives you the flexibility to use different service levels, virtual machine (VM) sizes, security domains, connectivity and data protection options.

![UKCloud for VMware options](images/vmw-product-options-g12.png)

## Security domain

The UKCloud provides two security domains:

- Assured OFFICIAL provides access to public networks, such as the internet, PSN, HCSN and Janet

- Elevated OFFICIAL provides access to restricted networks, such as RLI, with no direct internet connectivity

Choose the security domain your workload needs to use.

## Workload (VM) type

Some workloads require the highest levels of resilience and performance, some are sensitive to changing conditions, whereas others merely require a reliable infrastructure. Tailor the compute characteristics of the VM to support the requirements of your workload.

Choose the workload type that best suits your application:

- **ESSENTIAL** - For lower priority workloads, such as temporary applications, data processing or system modelling tasks. VMs in the VDC can have contended compute resource allocation (CPU/RAM) and automated rebalancing is enabled to ensure the workload receives the requested performance.

- **POWER** - For key workloads that are resource intensive, such as web and application workloads, mid-sized databases and caching services. VMs in the VDC have an uncontended compute resource allocation and automated rebalancing is enabled to pre-emptively optimise performance and availability.

- **PRIORITY** - For critical workloads that handle important business processes that benefit  from a steady state of operation. VMs in the VDC have an uncontended compute resource allocation and automated rebalancing is configured to reduce workload movement around the platform.

## Storage options

You can choose from a variety of options, depending on whether your workload requires high performance or longer-term retention storage. You can even deploy mixed environments to deliver exactly what you need.

Choose any additional storage needed to support your application and add as many storage options as you need for the different aspects of your application. For example, you could use Tier 1 storage for the high I/O database application and Tier 2 to store seldom-accessed media.

- **Tier 1** storage provides fast block storage, optimised for data warehouses, busy transactional databases and other high IO workloads.

- **Tier 2** storage provides general all-purpose block storage, providing a balance of performance and cost.

## Data protection options

Whether you're driven by recovery point (RPO) or recovery time (RTO), you can choose the right level of automated, on-platform protection for your environments.

The UKCloud for VMware service offers three different protection options for your VMs.

- **Catalogue and template-based recovery** is a configuration management solution that can reprovision stateless servers to a new VM when required, using standard and catalogue-based VM templates.

- **Snapshot Protection** provides a daily backup of your VMs. You can select a retention period of either 14 or 28 days. For more information, see the [*Snapshot Protection Service Scope*](vmw-sco-snapshot-protection.md).

- **Journaling Protection** uses journals to store all write operations made to your VMs on a separate UKCloud site. For more information, see the [*Journaling Protection Service Scope*](vmw-sco-journaling-protection.md).

Choose the application and data protection needed for your solution. You can choose only one protection option to cover both VMs and storage. For example, if you choose Journaling Protection for your VMs, you cannot then choose 14-day Snapshot Protection for your storage; Journaling Protection will apply to both.

## Advanced management options

The Advanced Management bundle provides:

- Advanced monitoring, provided by the vRealize Operations (vROps) Tenant Appliance, enabling you to view metrics and reports relating to your UKCloud for VMware environment.

- Additional distributed networking functionality: Distributed Firewall (DFW), Distributed Logical Router (DLR) and L2 VPN.

For more information, see [*Advanced management for UKCloud for VMware*](vmw-ref-advanced-mgmt.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
