---
title: Cloud Enablement - CAPS/CPA-approved VPN Service Scope
description: Outlines important details regarding Cloud Enablement services available for CAPS and CPA-approved (or equivalent standard) VPN solutions.
services: enablement
author: shall
reviewer: nstobbart
lastreviewed: 06/12/2021
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Enablement - CAPS/CPA-approved VPN Service Scope
toc_fullpath: Service Information/enbl-sco-capscpa.md
toc_mdlink: enbl-sco-capscpa.md
---

# Cloud Enablement - CAPS/CPA-approved VPN Service Scope

## About this document

This document describes the Cloud Enablement services available for CAPS and CPA-approved (or equivalent standard) VPN solutions.

## About Cloud Enablement

The Cloud Enablement service provides basic facilities for your own hardware to be installed in our data centre for the purpose of utilising our cloud.

The table provides an overview of the Cloud Enablement services available for CAPS and CPA-approved (or equivalent standard) VPN solutions. If the usage scenario you need isn't shown in the table, contact us to discuss your requirements.

Use case | Chosen connectivity option:<br>CPA-approved (or equivalent standard) encryption is required on the chosen line
-------------|---------------------------------------
**Service type** | Connectivity
**Security level** | Elevated OFFICIAL
**Service level (default)** | Single data centre, no automatic failover
**Cloud Enablement sizing** | One bay = 10U, 1kW of power
**Hosted device** | VPN device (for example, firewall)
**Typical device size** | 1U / 2U
**Hosted device(s) allowed** | Depends on solution. UKCloud will work with the customer to understand the requirement and assess the suitability of the devices that the customer wants to locate within Cloud Enablement.
**Hosted device power draw** | Customer devices within a single 10U bay have a combined average power draw of no more than 1kW. Average power draw will be assessed based on vendor material supplied by the customer as part of the engagement with UKCloud prior to installation of devices.
**Cost** | Priced per 10U bay<br>£2,000 up front charge<br>£500 pcm<br>Additional install visits charged at SFIA rate
**Resilience available?** | We do not provide a resiliently connected environment. You can provision devices to both of our data centres to create a self-managed resilient solution (in which case, the resilience options below are required).
**Failover responsibility** | Customer
**Resilience requirement<br>(1 bay = 10U, 1kw of power)**| One bay in our Farnborough data centres<br>One bay in our Corsham data centres
**Resilience cost** | £4,000 setup fee plus £1,000 per month
**Notes** | Devices must be hosted in the same region as your compute environment. We cannot stretch connectivity from local Cloud Enablement into other regions (for example, Cloud Enablement in region 5 cannot be stretched to region 6).
**Next steps** | Raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.<br>You will also need to complete the Assurance Wrap form so that we can create a Walled Garden for you within the Cross Domain Security Zone.

## What connectivity does the VPN service provide?

The VPN service provides up to two ports:

- Cloud Enablement in regions 1, 2, 7 & 8 offers copper connectivity only

- Cloud Enablement in regions 5, 6, 13 & 14 offers connectivity via SFP, so customers can use fibre or copper

- The connection is into a shared switch.

## What is the port speed of connection?

- In regions 1, 2, 7 & 8, the port speed is up to 1 Gbps

- In regions 5, 6, 13 & 14, the port speed can be either 1Gbps (copper or fibre) or 10 Gbps (fibre only)

## Who manages the switch?

We manage the shared switch - the initial logical configuration is included in the setup fee. Additional configuration (of your devices to your solution) is a chargeable service.

## Is there any switch redundancy within a rack?

We don't currently offer switch redundancy.

## What's included in the setup fee?

### The setup fee covers

- Escorting you during the physical installation of your hosted device(s) for up to four hours during the standard working week (Monday to Friday, 0900--1700)

- Logical configuration between our cloud and the hosted device(s)

- One VLAN

- Cabling from the rack to our cloud

### What's excluded from the setup fee?

- Installing your device(s)

- Configuring your device(s)

- Non-standard design of your solution

- Peripheral consumables such as brackets, cable ties, cage nuts, power cords and intra-rack cabling

- Tools for installing your device(s)

## What's included in the monthly fee?

### The monthly fee covers

- Physical hosting of your device(s), including power and connectivity

- Four escorted visits a year by you for scheduled maintenance to your hosted device(s)

### The monthly fee doesn't cover

- Maintenance of your device(s)

- Support and management of your device(s)

- Unscheduled maintenance access

- Installation and configuration of additional device(s) in your solution (this is a chargeable service)

## What happens in the event of a power failure?

If, in the unlikely event of a power failure, you would like your hardware restarted, provide **laminated** worked instructions (totalling no more than a double-sided A4 page) that you can place within your Cloud Enablement rack space.

## Decommissioning 

If you want to decommission your Cloud Enablement service you must provide a minimum of 30 days' notice and are responsible for the removal of your equipment. Visits to remove equipment are counted towards your allocation of maintenance access days and if you need additional days, these additional escorted visits will be charged as per the [SFIA rate card](https://ukcloud.com/sfia) (Level 4 - Enable).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
