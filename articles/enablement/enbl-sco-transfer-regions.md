---
title: Data Transfer - Region to Region Service Scope
description: Outlines how to move VMware workloads between regions on the UKCloud platform
services: enablement
author: shall
reviewer: 
lastreviewed: 13/03/2020
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Data Transfer - Region to Region Service Scope
toc_fullpath: Service Scope/enbl-sco-transfer-regions.md
toc_mdlink: enbl-sco-transfer-regions.md
---

# Data Transfer - Region to Region Service Scope

## About this document

This document describes the boundaries of the UKCloud Data Transfer – Region to Region service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About Data Transfer - Region to Region

The Data Transfer – Region to Region service enables customers to move their UKCloud for VMware workloads between regions on the UKCloud platform. To complete this task as efficiently as possible, we utilise the Zerto recovery tool as it's already implemented and tested on the platform for data migration and restoration.

> [!NOTE]
> This service is specifically designed for UKCloud for VMware workloads that are Zerto-enabled.

## Application process

Customers wanting to transfer UKCloud for VMware workloads between regions on the UKCloud platform will need to raise a service request for the Zerto tool to be implemented in their environment. To commence the service, there's a ticket template available under service requests within My Calls.

## Implementation

To transfer UKCloud for VMware workloads between regions, customers must use the Zerto recovery tool, which will be provisioned and set up for their use to transfer the workloads. This tool is made available free of charge for 10 working days for the migration only. Zerto is also available for UKCloud for VMware workloads for Journaling Protection at additional cost – which is outside of the functionality provided for this specific Data Transfer - Region to Region service.

> [!IMPORTANT]
> While the data transfer service is free of charge for 10 working days, customers will be charged for all compute and storage resources that are consumed in both the source and target regions. It is the customer's responsibility to ensure that the compute and storage in the source region is deleted once the transfer is complete in order to avoid unnecessary charges.

## Service architecture

UKCloud will provide access to the Zerto recovery tool for the transfer of data between regions. Currently, Zerto is only enabled for UKCloud for VMware and will be provisioned for the purpose of transfer only between specific regions. Note that there is no functionality to transfer to region 1 or region 2. Workloads can only be transferred to regions 5,6,7 and 8. Also note that this is dependent on the security domain of the source region as this service can only be used to transfer workloads between:

- Assured to Assured region

- Elevated to Elevated region

If you need to transfer workloads between security domains (Assured and Elevated), then you'll need to use the [Data Transfer between Assured and Elevated service](enbl-sco-transfer-assured-elevated.md).

The actual Zerto transfer service will be provided without charge for the transfer of workloads, with the following restrictions:

- The service is free of charge for the first 10 working days. After 10 working days, the service will be charged as per the standard Journaling Protection costs in the [UKCloud Pricing Guide](https://ukcloud.com/wp-content/uploads/2019/07/ukcloud-pricing-guide-11.0-4.pdf).

- Customers are required to inform UKCloud via a service request to confirm that the transfer is complete. The service will then be stopped, which will prevent further billing.

- There is no Service Level Agreement for this service.

- Customers utilising this service will not qualify for Service Credits due to unavailability or loss of performance during the transfer.

- Once the Zerto tool has been provisioned, customers are responsible for the selection of VMs and data, and the actual transfer. If required, UKCloud can provide assistance via our Professional Services team, which can be arranged via your Service Delivery Manager.

The [*How to migrate your workloads between UKCloud regions*](../vmware/vmw-how-zerto-migrate-between-regions.md) article on the Knowledge Centre provides all the information you'll require to understand the tool as well as configuration details and step-by-step instructions.

## Service availability

As a free service for data transfer between regions, customers are not entitled to Service Credits for any downtime during data transfer scenarios.

## Supporting documents and resources

The following documents contain more information about the Zerto and the service options:

- [*How to migrate your workloads between UKCloud regions*](../vmware/vmw-how-zerto-migrate-between-regions.md)

- [*How to access the Zerto Self-Service Portal*](../vmware/vmw-how-zerto-access-zssp.md)

- [*How to create a virtual protection group*](../vmware/vmw-how-zerto-create-vpg.md)

- [*How to perform a failover*](../vmware/vmw-how-zerto-perform-failover.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
