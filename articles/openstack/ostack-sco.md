---
title: UKCloud for OpenStack Service Scope
description: Outlines important details regarding Cloud Native Infrastructure
services: openstack
author: Steve Hall
reviewer:
lastreviewed: 18/09/2019 15:17:17
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenStack Service Scope
toc_fullpath: Service Scope/ostack-sco.md
toc_mdlink: ostack-sco.md
---

# UKCloud for OpenStack Service Scope

## About this document

This document is for customers considering purchasing our UKCloud for OpenStack service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the changes required.

## About UKCloud for OpenStack

UKCloud for OpenStack is UKCloud's OpenStack powered cloud compute platform.

This service is designed for customers who:

- Require a cloud platform engineered specifically for cloud native applications

- Want a self-service cloud platform that can be programmatically controlled via a familiar API

- Want to recycle existing investment in AWS CloudFormation Infrastructure as Code via OpenStack's HEAT templates

## OpenStack services available in UKCloud for OpenStack

The following OpenStack projects/services are available with UKCloud for OpenStack:

- Nova Compute

- Glance Image Service

- Cinder Block Storage

- Keystone authentication

- Neutron Networking Services

- Barbican Key Management Services (*Excludes COR00005 & FRN00006 Regions*)

- Octavia Load Balancing as a Service (*Excludes COR00005 & FRN00006 Regions*)

- Self-service backup and restoration, powered by TrilioVault (*Generally available November 2019)

UKCloud will look to add additional OpenStack projects to this service through future releases.

## Default setup

UKCloud for OpenStack is delivered as a multi-tenant cloud platform.

Each customer will be provided with an OpenStack Project within which they can build their cloud solutions.

By default, only a single user account will be created per Project, this user can then create additional users within the Project.

## UKCloud for OpenStack instance options

Notes | Ephemeral | Persistent boot from block
------|-----------|---------------------------
**Use case** | Disposable VMs used in environments that can tolerate the failure of a VM and its associated data | VMs serving mission-critical data and needing a higher level of data resilience and persistence
**VM placement** | Choice of multiple regions | Choice of multiple regions
**Internet IP addresses included per project** | 3 | 3
**Automated disaster recovery between data centres** | No | No
**Storage included (GiB)** | 60 | None
**Storage type** | Ephemeral (non-persistent) | Persistent block storage - Tier 1 or Tier 2
**Effective number of file copies** | 1 | 3
**VM protection option** | Snapshot to persistent block storage | Snapshot to persistent block storage

## Storage options

In addition to the free ephemeral storage that is provided to all OpenStack instances, UKCloud provides the following persistent block storage options:

Notes | Tier 1 Persistent block storage | Tier 2 Persistent block storage
------|---------------------------------|--------------------------------
**Overview** | Provides our most performant block storage for workloads requiring consistently higher disk throughput | Block storage with typical performance characteristics for use by production applications or storage
**Number of file copies** | 3 | 3
**Use cases** | Data warehouses, High-performance NoSQL databases such as MongoDB or Cassandra & Randomly executing workloads | Production-level system and application workloads with mid-range traffic loads (for example Apache Web Server)

## Platform management

UKCloud for OpenStack is managed directly by the customer, using OpenStack's Horizon dashboard, the UKCloud Portal, and APIs associated with both.

## Service provisioning

You can request UKCloud for OpenStack via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 4 business hours of accepting an order, UKCloud will create the customer's Primary Administrator account and send a Welcome Pack which includes the URL for the UKCloud Portal, and the Getting Started Guide.

## Customer responsibilities

The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Self-managing the environment including VM deployment, virtual network configuration, storage management, and so on.

Maintaining a master copy or backup copy of the data used in the UKCloud for OpenStack service.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Default network limits

By default, we will place the following network limitations per project:

- 3 x Floating IP Addresses

- 2 x Network Routers

Customers with requirements beyond these limits can raise a service request via [My Calls](https://portal.skyscapecloud.com/support/ivanti) to have these limits per project considered for raising.

## Compute virtual resource limits

By default, we will place the following virtual resource limitations per project:

- 100 Instances

- 100 vCPU

- 200 GiB RAM

- 2 TiB Persistent block storage

Customers with requirements beyond these limits can raise a service request via [My Calls](https://portal.skyscapecloud.com/support/ivanti) to have these limits per project considered for raising.

## Block storage volume limits

Due to a current constraint within the OpenStack project, a maximum total of 25 block storage volumes (Tier 1 or Tier 2) can be attached to each OpenStack instance.

## Platform operation request limits

Although designed to be a large-scale cloud platform, we strongly advise that when performing operations/requests against UKCloud for OpenStack you perform these actions in batches of no more than 30 (for example, only creating batches of up to 30 new instances in a single request). Additional requests can then be made to the platform for subsequent batches.

## Published features not currently available

The following features published in the [*UKCloud for OpenStack Service Definition*](ostack-sd.md) are not currently available:

- RLI connectivity

- UKCloud provided Red Hat licences

- OpenStack within UKCloud's Elevated security domain

We are actively working on delivering these features.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
