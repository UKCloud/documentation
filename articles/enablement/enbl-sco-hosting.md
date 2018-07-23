---
title: Cloud Enablement - Server/Storage Hosting Service Scope | UKCloud Ltd
description: outlines important details regarding Cloud enablement for server / storage hosting
services: enablement
author: Steve Hall
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Enablement - Server/Storage Hosting Service Scope
toc_fullpath: Service Scope/enbl-sco-hosting.md
toc_mdlink: enbl-sco-hosting.md
---

# Cloud Enablement - Server/Storage Hosting Service Scope

## About this document

This document describes the Cloud Enablement services available for hosting servers and storage.

## About Cloud Enablement

The Cloud Enablement service provides basic facilities for your own hardware installed in our data centre for the purpose of utilising our cloud.

The table provides an overview of the Cloud Enablement services available for hosting servers and storage. If the usage scenario you need isn't shown in the table, contact us to discuss your requirements.

Please note that ANY device placed within the UKCloud estate must be done so to utilise our cloud services. If the customer does not plan to use a UKCloud service as part of their design (such as UKCloud for VMware or Cloud Storage), we can arrange for them to talk to one of our partners about their co-location requirements.

&nbsp; | &nbsp;
-------|-------
**Use case** | You may have complex systems that can't be virtualised (for example database clusters or legacy applications).</br>You may also have large amounts of storage you wish to host with us, so that you can integrate it with our UKCloud for VMware offering  
**Service type** | Server/storage hosting
**Security level** | Assured OFFICIAL and Elevated OFFICIAL
**Hosted device** | Physical server or storage appliance
**Typical device size** | Depends on solution
**Service level (default)** | Single data centre, no automatic failover
**Cloud Enablement requirement</br>(one bay = 10U, 1kW per month)** | Depends on solution
**Cost** | Depends on solution
**Resilience available?** | You can provision devices to both data centres but you can't use the data centre interconnects to replicate data between the  solutions                         |
**Failover responsibility** | Customer
**Resilience requirement</br>(1 bay = 10U, 1kw per month)** | Depends on solution               |
**Resilience cost** | Depends on solution
**Notes** | Servers and storage must be hosted in the same data centre as your compute environment
**Next steps** | Raise a service request via the UKCloud Portal                    |

## What connectivity does the server/storage hosting service provide?

The VPN service provides up to two ports:

- Cloud Enablement in regions 1, 2, 7 & 8 offers fibre-0nly connectivity
- Cloud Enablement in regions 5 & 6 offers connectivity via SFP, so customers can use fibre or copper
- The connection is into a shared switch.

## What is the port speed of connection?

- In regions 1, 2, 7 & 8, the port speed is up to 1 Gbps
- In regions 5 & 6, the port speed can be either 1 or 10Gbps

## Who manages the switch?

We manage the shared switch - the initial logical configuration is included in the setup fee. Additional configuration (of your devices to your solution) is a chargeable service.

## Is there any switch redundancy within a rack?

We don't currently offer switch redundancy.

## What's included in the setup fee?

### The setup fee covers

- Escorting you during the physical installation of your hosted device(s) for up to four hours during the standard working week (Monday to Friday, 0900 - 1700)

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

If, in the unlikely event of a power failure, you would like your hardware restarted, provide **laminated** work instructions (totalling no more than a double-sided A4 page) that you can place within your Cloud Enablement rack space.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.