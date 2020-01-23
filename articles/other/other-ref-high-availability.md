---
title: High availability on the UKCloud platform | UKCloud Ltd
description: Describes how the UKCloud platform supports the development of highly available applications
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 01/11/2019

toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: High availability on the UKCloud platform
toc_fullpath: Reference/other-ref-high-availability.md
toc_mdlink: other-ref-high-availability.md
---

# High availability on the UKCloud platform

## Overview

Delivering high availability and ensuring recovery from disaster are vital elements of any organisation's business continuity plan (BCP). Proper planning is more cost-effective in the long run by reducing response and recovery costs as well as minimizing any disruption.

For general information for what to consider when designing highly-available applications, see our [Multi-cloud experts blog for high availability](https://ukcloud.com/hub/news/6-things-you-should-consider-when-designing-for-high-availability/).

This article aims to inform and assist you as you specify your high availability plans. It details measures put in place by UKCloud to protect against failures, how our platform has been designed with service continuity in mind and how we offer extensive capabilities that you can use to protect your business against a disaster.

## Platform high-availability features

When designing for high availability and disaster recovery, it's useful to understand how our cloud platform protects against the many sources of failure that may occur.

The following table shows how the UKCloud platform is architected to mitigate against potential failures.

High-availability consideration | Mitigation
--------------------------------|-----------
Major data centre failure | Multiple sites provide additional locations for you to deploy disaster recovery or always-on availability services
Power | Dual power supplies into data centres from different national grid providers<br>N+1 UPS equipment<br>N+1 diesel generators<br>
Physical network infrastructure | Fully redundant routers and switches<br>Diversely routed cabling, fibre and ducting
Server/device infrastructure | Redundant power supplies and fans<br>Redundant internal disks using RAID; hot-swappable<br>Device/host clustering<br>Virtualised contexts
Storage infrastructure | Redundant power supplies and fans<br>Redundant dual storage fabrics<br>Redundant disk configuration (RAID); hot-swappable

### Connectivity

We offer a number of different connectivity options for you to gain access to our services.

Connectivity option | High-availability considerations
--------------------|---------------------------------
Internet            | Multiple, redundant, high-speed internet links with DDoS mitigation to protect the platform as a whole.<br>No additional services are required to ensure high availability.<br>We recommend that you couple this with deploying your services into multiple sites to ensure that your services are available via different RIPE IP addresses (ideally on different IP network ranges).
PSN/HSCN/Janet      | Redundant, high-speed connectivity with automatic failover.<br>No additional services are required to ensure high availability.<br>We recommend that you couple this with deploying your services into multiple sites to ensure that your services are available.
HybridConnect       | Enables you to bring your own secure connectivity into the UKCloud environment.<br>We provide colocation services for hardware and can assist in the design.<br>We recommend that you deploy an additional HybridConnect service in another site to ensure that you have redundant connectivity into a second site.<br>We recommend that you use routing protocols to enable automated failover.

### Supplementary services for high availability

In addition to the high-availability features provided as-standard on our platform, we also offer the following additional services:

High-availability consideration | Notes
--------------------------------|------
[UltraDNS](../connectivity/conn-sco-glb.md) | Enables you to load balance inbound connections to your services and perform health checking. If one site becomes unavailable, users are automatically redirected to an alternative available location.
[SiteProtect Advanced DDoS Mitigation](../connectivity/conn-sco-app-ddos.md) | A fully-managed DDoS protection solution backed by an industry-leading Security Operations Team that scrubs your website's malicious traffic - delivering only clean, legitimate traffic to your site.
[Disaster Recovery as a Service](../draas/draas-sd.md) | A powerful, self-service replication and recovery tool that can improve organisational resilience and enable seamless migration of applications between your local VMware or Hyper-V powered data centre and the UKCloud platform.
Replicated backup | Enables your services to be backed up and the backup data replicated to another site.
[Cloud Storage](../cloud-storage/cs-sd.md) | Enables you to take regular backups of your database data (or transaction data) to meet your specific Recovery Point Objective (RPO).
[Multi-Cloud Backup Storage](../mcbs/mcbs-gs.md) | Provides a backup target that is accessible from every cloud within UKCloud’s multi-cloud platform, utilizing a technology that is common across backup products, enabling open-source backup applications to utilize the backup service as a target. You can also use MCBS as a remote backup target for your on-premises data.
Third-Party Software | Provides software from third-party providers, including [Moogsoft](../third-party/third-sd-moogsoft.md) and [Portworx](../third-party/third-sd-portworx.md), to help with cyber security and monitoring.
[Transition Services](../transition-services/trans-sd.md) | Our multi-cloud experts can assess your cloud environment and help you ensure its availability.

## Application design considerations

If you're designing your application specifically for the cloud, we recommend reviewing the [12-factor cloud application design model](https://12factor.net/).

There are some high-level considerations to think about when deploying to a cloud environment.

Service | High-availability consideration
--------|--------------------------------
Web services | Utilise an N+1 model, either with multiple web servers running underneath a load balancer or reverse proxy, or with at least one web server running in hot standby. Also use this approach in conjunction with UltraDNS to deliver multi-site resilience.
Application services | As per web services, utilize an N+1 model.
Inter-service messaging | Utilise a resilient message queuing architecture to handle messages between services. This enables messages to be load balanced between sites. It also means that messages are not lost in the event of a server crash and restart.
Databases | Every database has a high availability option. We recommend that you adopt an N+1 clustered database model (but avoid shared disk architectures), in conjunction with sharding or asynchronous replication technologies, to create a replica of this database in another location.
Data | Make sure you take a copy of your application or database data at appropriate intervals to meet your Recovery Point Objective (RPO) and store the copy somewhere outside your current site.

### UKCloud for Microsoft Azure

In UKCloud for Microsoft Azure, you can use availability sets to spread VMs across multiple fault domains and update domains. In the event of downtime in one domain due to a hardware failure or planned maintenance, VMs in the affected domain are restarted in another domain. For more information, see [Providing high availability](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-overview?view=azs-1908#providing-high-availability).

A load balancer spreads incoming requests across multiple VMs, helping with scale and availability. For more information, see [*How to create a load balancer using the UKCloud Azure Stack Hub portal*](../azure/azs-how-create-load-balancer.md).

With Azure Site Recovery, you can replicate a VM to a different region for disaster recovery. For more information, see [*How to deploy an Azure Site Recovery template to Azure Stack Hub using PowerShell*](../azure/azs-how-deploy-asr-template-powershell.md).

Use SQL Always On to ensure the availability of SQL server. For more information, see [*How to deploy an SQL template to Azure Stack Hub using PowerShell*](../azure/azs-how-deploy-sql-template-powershell.md).

### UKCloud for OpenShift

Each OpenShift cluster is deployed in a single UKCloud region. To achieve region-level resilience, we recommend having a cluster in at least two separate regions, utilizing a global load balancer or DNS failover service (such as the one from UltraDNS) to ensure traffic is redirected should a region or cluster level availability issue occur.

We also offer the option to have the Portworx storage solution configured in your cluster by UKCloud during deployment. This enables further resilience for your applications by offering highly-available storage, which significantly reduces container failover times, adds multi-attach storage to enable multiple containers to read/write the same volume on different nodes and the ability to replicate and migrate workloads between clusters to aid disaster recovery.

Within each OpenShift cluster deployment there are a number of features that support high availability and resilience:

- Each OpenShift cluster is deployed with at least three master nodes responsible for the availability of the cluster API, etcd and other core components.

- Ingress traffic comes via resilient UKCloud managed load balancers into the cluster. It enters the cluster via resilient router pods deployed on the OpenShift infrastructure nodes.

- We recommend always having more than one application node deployed in each cluster. If you only have one node for your application containers, a single host failure could affect all applications deployed in the cluster as they’d have nowhere to fail over to within the cluster until the node is recovered and returned to service.

- You should also take measures within the configuration of your applications to ensure they run in a resilient fashion. These measures include running applications at a scale of >1 replicas wherever possible (so multiple pods satisfy the needs of inbound requests) and configuring liveness and readiness checks to aid the platform’s understanding of any problematic containers.

### UKCloud for OpenStack

OpenStack Platform 13 (OSP13) provides Load Balancing-as-a-Service (LBaaS) as a native feature. For more information see the [*Load Balancing-as-a-Service (LBaaS) with Octavia*](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/13/html/networking_guide/sec-octavia) chapter of the OpenStack Networking Guide. For information about creating a load balancer in OPS10, see [*Creating load-balancing services on UKCloud for OpenStack*](../openstack/ostack-how-create-load-balancer.md).

To improve the resilience of your UKCloud for OpenStack applications, you can move resources (for example, instance images and volumes) between the different regions currently offered by UKCloud. For more information, see [*How to move resources between OpenStack regions*](../openstack/ostack-how-move-resources.md).

UKCloud monitors UKCloud for OpenStack at regular intervals, checking for issues with the hardware or software services supporting the service. When a host experiences problems, our engineers take steps to live migrate any instances on the affected host to an alternative one. For information about how this works and how you can control what happens when a host is migrated, see [*How to manage how your instance recovers from a host failure*](../openstack/ostack-how-recover-instance.md).

To help your applications cope with variable demand, you can configure Orchestration (HEAT) to automatically add and remove instances as needed. For more information, see [*Auto Scaling for UKCloud for OpenStack*](../openstack/ostack-ref-auto-scaling.md).

### UKCloud for Oracle Software

In UKCloud for Oracle Software, you can enable HA on a virtual machine so that it can be automatically migrated to a surviving node in the event of a failure. For more information, see [*How to enable high availability for your Oracle VMs*](../oracle/orcl-how-enable-ha.md).

If your VM is running an Oracle database and you’re using hard partitioning to reduce licensing costs, virtual CPUs are pinned to physical cores and the HA option is not available. In the event of a failure, VMs must be manually migrated to a new host and will require restarting.

To achieve high availability for your Oracle database, you can use Real Application Clusters to share the database across multiple servers. For more information, see [*RAC on UKCloud for Oracle Software*](../oracle/orcl-ref-rac.md).

### UKCloud for VMware

UKCloud for VMware provides Snapshot Protection as a protection option for your applications. Snapshot Protection automatically takes an image of your VMs every 24 hours and stores the image outside the core platform for either 14 or 28 days. For more information, see [*How to manage Snapshot Protection for your VMs*](../vmware/vmw-how-manage-snapshot-protection.md).

As an alternative to Snapshot Protection, you could consider Journaling Protection, a powerful self-service protection option, powered by Zerto, that protects your applications by replicating them to another zone. For more information, see the [*Getting Started Guide for Journaling Protection*](../vmware/vmw-gs-journaling.md).

The edge gateway for your VDC provides basic load balancing functionality to help distribute traffic. For more information, see [*How to configure a load balancer*](../vmware/vmw-how-configure-load-balancer.md). However, for more complex requirements, you’ll need to provide your own third-party virtual load balancer.

Affinity and anti-affinity rules determine whether or not VMs are kept together as they are move around within your environment. If you want your applications to be robust in the event of host failures, you can create anti-affinity rules to make sure that when VMs are moved, they remain spread across multiple hosts. For more information, see [*How to use affinity and anti‑affinity rules*](../vmware/vmw-how-use-affinity-rules.md).

For information about the data recovery options available for different use cases, see [*Virtual machine data recovery options*](../vmware/vmw-ref-vm-data-recovery.md).

IPsec site-to-site VPN provides a secure way to share resources across multiple locations. For more information, see [*How to configure IPsec VPN*](../vmware/vmw-how-configure-ipsec-vpn.md).

Alternatively, L2 VPN, available as part of the UKCloud for VMware Advanced Management bundle, enables you to stretch the same Layer 2 broadcast domain over an SSL tunnel across two edge gateways in different sites, meaning that you can extend your data centre across multiple sites and move your workloads seamlessly between them. For more information, see [*How to configure an L2 VPN*](../vmware/vmw-how-configure-l2-vpn.md).

### Cloud Storage

We offer our Cloud Storage service at different service levels dependent on your requirements.

- If you select the STANDARD service level, we strongly recommend that you deploy an additional service in a second site that your application can target if one becomes unavailable.

- The ENHANCED service level ensures that your data is synchronised across two different sites and that there is a minimum of six effective copies.

### Cross Domain Security Zone

Each Cross Domain Security Zone (CDSZ) service is deployed into only one site so we strongly recommend that you deploy an additional walled garden in a second site to provide an additional cross domain solution that your application can target if one becomes available.

We recommend that you implement some form of automated failover solution between your two cross domain solutions. You can deliver this directly within the application, or preferably using some form of load balancing service, such as HAProxy. This enables the application to continue using the cross domain solution services in the event of an issue.

For your walled garden, we recommend that you follow standard N+1 availability architectures to enable high availability for the application, as per any standard cloud deployment.

### Private Cloud

By default, the Private Cloud service is deployed to a single site, so we strongly recommend that you use automated site replication and failover to ensure that all data is synced to another site and can still be accessed in the event of a failover.

### Secure Remote Access

Each Secure Remote Access (SRA) service is deployed into only one site so we highly recommend that you deploy an additional SRA service that your end users can target if one becomes unavailable.

To facilitate automatic failover of the VPN solution for end users, we recommend the use of a load balancing or DNS failover solution that automatically directs end users to the current functioning endpoint.

For the secure VDC that contains the jump boxes or bastion hosts, we recommend that you follow standard N+1 availability architectures to enable high availability for the application, as per any standard IaaS compute deployment.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
