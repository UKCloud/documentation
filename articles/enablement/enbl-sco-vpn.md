---
title: Cloud Enablement - VPN solutions Service Scope
description: Outlines important details regarding Cloud Enablement for VPN solutions
services: enablement
author: shall
reviewer: bchallis
lastreviewed: 08/12/2020
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Enablement - VPN solutions Service Scope
toc_fullpath: Service Scope/enbl-sco-vpn.md
toc_mdlink: enbl-sco-vpn.md
---

# Cloud Enablement - VPN solutions Service Scope

## About this document

This document describes the Cloud Enablement services available for VPN solutions. For information regarding CPA-approved (or equivalent standard) VPN solutions, see the relevant service scope.

## About Cloud Enablement

The Cloud Enablement service provides basic facilities for your own hardware to be installed in our data centre for the purpose of utilising our cloud.

The table provides an overview of the Cloud Enablement services available for VPN solutions. If the usage scenario you need isn't shown in the table, contact us to discuss your requirements.

&nbsp; | &nbsp;
-------|-------
**Use case** | You don't want to use the NSX edge gateway VPN capability and want to  install your own
**Service type** | Connectivity
**Security level** | Assured OFFICIAL
**Service level (default)** | Single data centre, no automatic failover
**Hosted device** | VPN device eg firewall
**Cloud Enablement sizing** | one bay = 10U, 1kW of power
**Typical device size** | 1U / 2U
**Hosted device(s) allowed** | Depends on solution. UKCloud will work with the customer to understand the requirement and assess the suitability of the devices that the customer wishes to locate within Cloud Enablement
**Hosted device power draw** | Customer devices within a single 10u bay have a combined average power draw of no more than 1kW. Average power draw will be assessed based vendor material supplied by the customer as part of the engagement with UKCloud prior to installation of devices
**Cost** | Priced per 10u bay</br>£2,000 up front charge</br>£500 pcm</br>Additional install visits charged at SFIA rate
**Resilience available?** | We don't provide a resiliently connected environment. You can provision devices to both of our data centres to create a  self-managed resilient solution
**Failover responsibility** | Customer
**Notes** | Devices must be hosted in the same region as your compute environment. We cannot stretch connectivity from local Cloud Enablement into other regions (eg Cloud Enablement in region 5 cannot be stretched to region 6)
**Next steps** | Raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal

## What connectivity does the VPN service provide?

The VPN service provides up to two ports:

- Cloud Enablement in regions 1, 2, 7 & 8 offers copper only connectivity

- Cloud Enablement in regions 5 & 6 offers connectivity via SFP, so customers can use fibre or copper

- The connection is into a shared switch.

## What is the port speed of connection?

- In regions 1, 2, 7 & 8, the port speed is up to 1 Gbps

- In regions 5 & 6, the port speed can be either 1Gbps (copper or fibre) or 10 Gbps (fibre only)

## Who manages the switch?

We manage the shared switch - the initial logical configuration is included in the setup fee. Additional configuration (of your devices to your solution) is a chargeable service.

## Is there any switch redundancy within a rack?

We do not currently offer switch redundancy.

## What's included in the setup fee?

### The setup fee covers

- Escorting you for the physical installation of your hosted device(s) for up to four hours during the standard working week (Monday to Friday, 0900 - 1700)

- Logical configuration between our cloud and the hosted device(s)

- One VLAN

- Cabling from the rack to our cloud

### The setup fee doesn't cover

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

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
