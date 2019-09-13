---
title: UKCloud for OpenShift Service Scope | UKCloud Ltd
description: Outlines important details regarding UKCloud for OpenShift
services: openshift
author: Sue Highmoor
reviewer: Steve Dixon
lastreviewed: 08/07/2019
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenShift Service Scope
toc_fullpath: Service Scope/oshift-sco.md
toc_mdlink: oshift-sco.md
---

# UKCloud for OpenShift Service Scope

## About this document

This document is for customers considering purchasing our UKCloud for OpenShift service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the changes required.

## About UKCloud for OpenShift

UKCloud for OpenShift is UKCloud’s OpenShift powered Kubernetes Platform as a Service (PaaS).

This service is designed for customers who want to:

- Deliver new software features faster, focusing on customer value rather than infrastructure complexities

- Cope with unpredictable spikes in traffic and customer demand

- Realise more value from your DevOps team by allowing them to focus on the 'Dev' rather than 'Ops'

- Create a standard approach to deployment, ensuring consistency across all users

- Perform platform maintenance with less disruption to applications

- Try out new ideas in a low-risk sandbox environment

- Remove the cost and complexity of provisioning, managing and scaling the underlying infrastructure, OS and middleware components

- Avoid lock-in — you can deploy OpenShift on a wide choice of IaaS platforms

## OpenShift technical features available in UKCloud for OpenShift

The following OpenShift technical features are available with UKCloud for OpenShift:

- UKCloud for OpenShift is built upon Red Hat OpenShift Container Platform v3.11

- Based upon OKD 3.11 with an Enterprise security and stability wrap

- Kubernetes 1.11

- UKCloud for OpenStack is the underlying Infrastructure-as-a-Service (IaaS) platform

## Default setup

UKCloud for OpenShift is delivered as a private Platform-as-a-Service (PaaS).

Each customer will be provided with an isolated OpenShift cluster within which they can build their containerized solutions.

By default, only a single user account will be created per project, this user can then create additional users within the project.

## UKCloud for OpenShift deployment options

The UKCloud for OpenShift service is packaged to provide you with a high level of flexibility to scale your environments in-line with your workloads. Your OpenShift service is built using the following model:

<table>
  <tr>
    <th colspan="6">Foundation Pack<th>
  </tr>
  <tr>
    <td colspan="3" align="center">Assured OFFICIAL</td>
    <td colspan="3" align="center">Elevated OFFICIAL</td>
  </tr>
  <tr>
    <th colspan="6">Runtime Packs</th>
  </tr>
  <tr>
    <td align="center">Small<br>16GiB RAM</td>
    <td align="center">Medium<br>32GiB RAM</td>
    <td align="center">Large<br>64GiB RAM</td>
    <td align="center">Small<br>16GiB RAM</td>
    <td align="center">Medium<br>32GiB RAM</td>
    <td align="center">Large<br>64GiB RAM</td>
  </tr>
</table>

> [!NOTE]
> An operational OpenShift cluster must consist of a minimum of a Foundation Pack plus a single Runtime Pack, however we strongly recommend the use of two or more Runtime Packs for application resilience.

### Foundation Pack

Provides the foundation OpenShift services to support the orchestration and management of the container runtime environments and include certain [optional extras](#optional-extras) free of charge as defined below. Each customer environment requires only a single Foundation Pack.

### Runtime Pack

Provides the footprint to host customer’s containerised applications and services. Customers can choose to mix and match their Runtime Packs, and Runtime Packs can be called off individually, however UKCloud strongly recommends the initial deployment of two or more Runtime Packs for production environments to provide resilience to your workloads in the event of the failure of a single Runtime Pack.

## Storage options

Containers in OpenShift by default don’t persist data. Every time an application is started, it creates a new container with an immutable image. Hence, any persisted data in the file systems is lost when the container stops or is destroyed. Use Persistent Volumes within your OpenShift environment to provide data persistence independent of containers. You can purchase Persistent Volumes for your cluster as stated below:

&nbsp;                    | Tier 1 Persistent Volume | Tier 2 Persistent Volume
--------------------------|--------------------------|-------------------------
**Overview**              | Provides our most performant block storage for workloads requiring consistently higher disk throughput | Block storage with typical performance characteristics for use by production applications or storage
**Number of file copies** | 3                        | 3
**Use cases**             | Web caching<br>Containerised analytics<br>Highly performant, real-time web/mobile applications | Standard, containerised web/mobile applications<br>Storing OpenShift logs and metrics

## Optional extras

To complement your UKCloud for OpenShift service, UKCloud offers the following value-added options:

> [!NOTE]
> Some of these extras will carry supplementary charges; please see UKCloud’s current [Pricing Guide](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf) for full details.)

### Additional networks

By default, your OpenShift cluster will only be connected to the internet. Your OpenShift environment can be provisioned on other networks such as HSCN, Janet, RLI and PSN at a flat fee month per network plus the additional network charges.

### Registry storage

A benefit of OpenShift is its ability to build Docker images directly from your source code, deploy them, and manage their lifecycle. To enable this, OpenShift utilises an integrated Docker registry to locally manage images. This registry is stored securely outside of your OpenShift environment to help ensure the resilience and availability of your images.

UKCloud provides you with an initial 60GB of registry storage as part of your Foundation Pack; with any additional registry storage being chargeable.

### Enhanced aggregated logging

UKCloud will deploy, as part of your Foundation Pack, a simple EFK (Elasticsearch, Fluentd, Kibana) stack to aggregate logs for a range of OpenShift Enterprise services. Application developers can view the logs of the projects for which they have view access. The EFK stack aggregates logs from hosts and applications, whether coming from multiple containers or even deleted pods.

To provide this service UKCloud will need to provision an initial 20GiB of Tier 2 Persistent Volume at the prevailing rate.

As your workloads increase or become more critical and you want to increase the performance and resilience of your Elasticsearch cluster by scaling it across three nodes, you can deploy an additional Infrastructure Node (see below for [Infrastructure Node](#infrastructure-nodes) costs).

### Enhanced metric collection

As part of your Foundation Pack, UKCloud will provision a single Hawkular metrics instance backed by a single Cassandra instance to collect and publish your cluster’s metrics from all containers and components in one user interface.

To provide this service, UKCloud will need to provision an initial 10GiB of Tier 2 Persistent Volume at the prevailing rate.

To provide resilience and added performance to your cluster’s metrics, you can deploy additional Infrastructure Nodes (see below for [Infrastructure Node](#infrastructure-nodes) costs).

### Infrastructure nodes

Additional nodes to support OpenShift core services such as OpenShift routers, registry, metric collection and aggregated logging. Each Foundation Pack is deployed with three Infrastructure Nodes. Where required, you can deploy additional Infrastructure Nodes for a flat monthly fee, with each Infrastructure Node providing an additional 2vCPUs and 16GiB RAM for OpenShift supporting services. You cannot use Infrastructure Nodes for containerised workloads.

### SSL certificates

By default, UKCloud will provide 90 day Let’s Encrypt SSL certificates for your OpenShift cluster. At the point of deployment, you can to provide your own certificates for use with OpenShift.

### Container native storage

Kubernetes was not designed with stateful applications like databases in mind. For enterprise applications, these systems have non-negotiable business requirements like high availability, data security, disaster recovery, strict performance SLAs and hybrid/multi-cloud operations.

In order to address the challenge above, UKCloud offers a [Portworx Enterprise](../third-party/third-sd-portworx.md) service, assisting with the adoption of Kubernetes for mission critical enterprise and traditional/legacy applications.

## Platform management

UKCloud for OpenShift is managed directly by the customer, using OpenShift’s dashboard, the UKCloud Portal, and APIs associated with both.

UKCloud maintains responsibility for routine patching and upgrades of the OpenShift platform in-line with the published [OpenShift life cycle and patch management process](oshift-ref-lifecycle.md).

## Service provisioning

You can request UKCloud for OpenShift via your Technical Account Manager (TAM) or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will create the customer’s primary account and send a Welcome Pack, which includes the URL for the UKCloud Portal, and the [Getting Started Guide](oshift-gs.md).

## Customer responsibilities

The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Self-managing the environment including container deployment, virtual network configuration, storage management, and so on.

Maintaining a master copy or backup copy of the data used in the UKCloud for OpenShift service (see [below](#backuprecovery-and-disaster-recovery)).

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

Customers with requirements beyond these limits can raise a service request via [My Calls](https://portal.skyscapecloud.com/support/ivanti) to have these limits per project considered for raising.

## Backup/recovery and disaster recovery

As standard, localised component failures are tolerated within the infrastructure through elimination of single points of failure (including physical server failure or disk failure).

Although OpenShift is designed to deploy and manage stateless apps (applications that can be destroyed and re-instantiated without risk of data loss), you should maintain a master copy or backup copy of any persistent or dynamic data hosted on this service (such as MySQL DB) by using, for example, UKCloud’s [Cloud Storage](../cloud-storage/cs-sd.md).

## Published features not currently available

The following features published in the [UKCloud for OpenShift Service Definition](oshift-sd.md) are not currently available:

- Janet, PSN and RLI connectivity

Although these features are not currently available, they will be considered upon request.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
