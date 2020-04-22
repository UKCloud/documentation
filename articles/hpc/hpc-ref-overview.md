---
title: Understanding High Performance Compute
description: Provides an overview of UKCloud's High Performance Compute service
services: hpc
author: Sue Highmoor
reviewer:
lastreviewed: 19/07/2018 17:56:05
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding High Performance Compute
toc_fullpath: Reference/hpc-ref-overview.md
toc_mdlink: hpc-ref-overview.md
---

# Understanding High Performance Compute

## Overview

The scale and elasticity of cloud makes it an ideal environment for large-scale compute-intensive workloads such as Grid Engines, High Performance/Throughput Compute (HPC/HTC) and Massively Parallel Processing (MPP), all of which have an enduring requirement for large amounts of processor cores and memory.

UKCloud's High Performance Compute service is designed for these types of workloads. In return for a volume and term commitment for a large number of compute cores, customers get a cost-effective, highly scalable infrastructure.

High Performance Compute leverages the benefits of the UKCloud assured cloud platform, providing you with a trusted cloud platform that's connected to key government networks, such as HSCN for health and social care, and Janet for research and education.

For workloads that require a temporary, more flexible or dynamic service, UKCloud's UKCloud for VMware may be more suitable. It offers exceptional performance and scalability, and consumption-based pricing. We also offer UKCloud for OpenStack, so we can deliver a suite of services to meet all of your needs.

## Key benefits

High Performance Compute:

- Uses a proven hyperscale architecture to deliver predictable performance at scale

- Is optimised for the sensitivity of your specific workload via the DDoS-protected internet-facing Assured security domain and the trusted Elevated domain

- Offers a choice of virtual machine (VM) sizes to suit the core and memory density requirements of your compute-intensive workload

- Is tuned to reflect the inherent resilience provided by your Grid Engine solution

Meaning that you can:

- Deploy compute-intensive workloads on a massively scalable and inexpensive platform

- Avoid the CAPEX costs, risk and complexity associated with deploying a private infrastructure

- Build hybrid cloud solutions optimised for both compute-intensive workloads or more traditional workloads

- Integrate compute-intensive workloads with systems and datasets located on secure government networks (such as HSCN, Janet and PSN)

## High Performance Compute features

We understand that long-term compute-intensive workloads require a platform that is suitably scaled, has no resource contention, offers flexible core-to-memory ratios, and is delivered at an appropriate per-core-hour price point.

UKCloud's High Performance Compute is designed to meet these requirements, and to provide an easy-to-deploy and easy-to-use infrastructure that can power your Grid Engine or parallel processing workloads.

The service is provided with a variety of cluster-wide options as follows:

- Choice of our security domains. We provide both an internet-connected Assured OFFICIAL domain and Elevated OFFICIAL domain, which is primarily connected to government secure networks.

- Choice of network connections. This includes PSN (including legacy networks such as GSI, PNN, CJX), RLI, HSCN and Janet.

- Virtual CPU mode option. High Performance Compute is based on hyper-threaded cores which provide a cost-effective solution for compute-intensive workloads. You can opt for Native mode by using up to half the allocated cores to ensure a one-to-one mapping between virtual CPUs and physical (non hyper-threaded) cores for maximum processing power.

- Choice of core-to-memory ratio. All VMs in your compute-intensive cluster must be identically configured based on one of two core-to-memory ratios.

High Performance Compute includes as standard:

- Virtual firewall

- One production virtual data centre (VDC) and one non-production VDC

- VMware High Availability (HA) protection (only with persistent storage)

- Basic load balancing

- DDoS-protected internet

- Personalised support via Service Delivery Managers and a telephone support desk

To model a total cost of ownership, you may also want to consider additional elements, such as connectivity, and service options, such as cloud enablement and cross-domain services.

High Performance Compute is subject to the following:

- The minimum cluster size is 1,920 cores, which can be scaled in blocks of 960 cores.

- All VMs within the cluster must exist within a single production VDC and within a single site.

- All VMs within the cluster must be identically configured and programmatically deployed with appropriate workload distribution such as a grid engine. This is because the SLA does not apply to availability of individual VMs.

- If using Tier 0 storage is configured with two local disks in a RAID 10 configuration. All available storage in the cluster will be allocated to the customer with a 6-month minimum commitment.

- If any VMs are deployed with MS Windows Server OS, all provisioned cores must be licensed and will be charged at the current rate (as shown in the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf)).

- There is a two-year (24-month) fixed-term commitment, which can be continued via a further 24-month call-off contract subject to the standard procedures.

- Committed Compute Spend is calculated as the effective hourly cost multiplied by the number of hours in a two-year period (for example 24 x 365 x 2 = 17,520).

- 50% of the Committed Compute Spend must be paid upfront; the remaining 50% will be invoiced equally over 24 months.

- Early Termination Fee: if the contract is terminated before month 24, the customer will be liable for the remaining cost of the Committed Compute Spend

- In addition to the Committed Compute Spend, a final balancing payment equivalent to 20% of the Committed Compute Spend will be due at month 24 of the contract. The final balancing payment will not apply in the event that the customer enters into a further two-year (24-month) fixed-term commitment.

## More information

For more information, see the [*High Performance Compute Service Definition*](hpc-sd.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
