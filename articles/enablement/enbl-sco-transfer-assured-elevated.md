---
title: Data Transfer between Assured and Elevated Service Scope
description: Outlines how to move workloads between the Assured and Elevated security domains
services: enablement
author: Steve Hall
reviewer: 
lastreviewed: 07/02/2020
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Data Transfer between Assured and Elevated Service Scope
toc_fullpath: Service Scope/enbl-sco-transfer-assured-elevated.md
toc_mdlink: enbl-sco-transfer-assured-elevated.md
---

# Data Transfer between Assured and Elevated Service Scope

## About this document

This document describes the boundaries of the UKCloud Data Transfer between Assured and Elevated service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About Data Transfer between Assured and Elevated

The Data Transfer between Assured and Elevated service enables customers to move their workloads between the Assured and Elevated security domains to better meet data sensitivity requirements. Due to the enhanced sensitivity of data and workloads on the Elevated domain, and the restriction on connectivity, we use the UKCloud Cross Domain Security Zone (CDSZ) service to facilitate this transfer.

## Application process

Customers wanting to transfer data between the Assured and Elevated security domains will only be required to complete their own self-assessment in order to ensure that technical controls, compliance and security assurance are implemented to protect their data and workloads. To commence the service, there is a ticket template available under service requests within My Calls. Complete the template, and this will be used to create the transfer environment for you to use.

## Implementation

To transfer data between the Assured and Elevated domains, customers must use a CDSZ Walled Garden to create and manage the virtual machines (VMs) required to perform the transfer using the technology and application services of their choice.

The figure below shows an example of a possible setup, but it should be used as a starting point only; you may want to populate your walled garden with more services to meet your needs.

![Schematic of the Walled Garden](images/cdsz-example-setup.png)

## Service architecture

UKCloud will provide access to a CDSZ environment for the transfer of data between the security domains. A CDSZ Walled Garden is a VMware only environment, utilizing VMware vCloud Director as the management orchestrator for the service. For additional information regarding the CDSZ, see the [*Service Scope*](../cdsz/cdsz-sco.md).

The actual CDSZ service will be provided without charge for the transfer of data, with the following restrictions:

- The service is free of charge for the first 10 working days. After working 10 days, the service will be charged as per the standard CDSZ pricing in the [UKCloud Pricing Guide](https://ukcloud.com/wp-content/uploads/2019/07/ukcloud-pricing-guide-11.0-4.pdf).

- The 10-day free-of-charge service is available only for single site applications.

- For dual or cross-site applications, there will be an additional charge as per the CDSZ price matrix in the [UKCloud Pricing Guide](https://ukcloud.com/wp-content/uploads/2019/07/ukcloud-pricing-guide-11.0-4.pdf).

- There is no Service Level Agreement for this service.

- Customers utilising this service will not qualify for Service Credits due to unavailability or loss of performance during the transfer.

- Customers are responsible for the setting up of the applications within their service to facilitate the transfer. If required, UKCloud can provide assistance via our Professional Services team, which can be arranged via your Service Delivery Manager.

A CDSZ Walled Garden provides a virtual data centre (VDC) in which you can build VMs and virtual networks to inspect and protect data moving between Assured and Elevated security domains. You can find more information about architecting a CDSZ environment in the [*Getting Started Guide for the Cross Domain Security Zone*](../cdsz/cdsz-gs-walled-garden.md) and the [*Cross Domain Security Zone Blueprint*](../cdsz/cdsz-ref-bp-overview.md).

## Service availability

As a free service for data transfer between security domains, customers are not entitled to Service Credits for any downtime during data transfer scenarios.

## Supporting documents and resources

The following documents contain more information about the CDSZ and the service options:

- [*Getting Started Guide for the Cross Domain Security Zone Walled Garden*](../cdsz/cdsz-gs-walled-garden.md)

- [*Cross Domain Service Scope*](../cdsz/cdsz-sco.md)

- [*Cross Domain Security Zone FAQs*](../cdsz/cdsz-faq.md)

- [*UKCloud Cross Domain Security Zone application process*](../cdsz/cdsz-ref-application-process.md)

- [*Cross Domain Security Zone Blueprint*](../cdsz/cdsz-ref-bp-overview.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
