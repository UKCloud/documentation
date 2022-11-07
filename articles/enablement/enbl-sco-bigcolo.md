---
title: Big Cloud Enablement Service Scope
description: Outlines how UKCloud provides co-location of your own hardware in our data centres
services: enablement
author: bchallis
reviewer: thallsmith
lastreviewed: 05/10/2021
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Big Cloud Enablement Service Scope
toc_fullpath: Service Information/enbl-sco-bigcolo.md
toc_mdlink: enbl-sco-bigcolo.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Big Cloud Enablement Service Scope

## About this document

This document describes the Big Cloud Enablement services available for hosting servers and storage.

## About Big Cloud Enablement

The Big Cloud Enablement service provides co-location of your own hardware, installed in our data centres, for the purpose of utilising our cloud.

The table below provides an overview of the Big Cloud Enablement services available for hosting infrastructure. If the usage scenario you need isn't shown in the table, contact us to discuss your requirements.

> [!NOTE]
> ANY device placed within the UKCloud estate must be done so for the purpose of utilising our cloud services. If you do not plan to use a UKCloud service (such as UKCloud for VMware or Cloud Storage) as part of your design, we can arrange for you to talk to one of our partners about your co-location requirements.

&nbsp; | &nbsp;
-------|-------
Use case | You may have complex systems that can't be virtualised (for example, database clusters or legacy applications).<br>You may also have large amounts of storage (for example, private file storage) you want to host with us, so that you can integrate it with our compute offerings.
Service type | Co-location of physical infrastructure
Security level | Assured OFFICIAL, Elevated OFFICIAL and Tier 2
Hosted device | Physical servers, networking devices or storage appliances
Useable U count | 40U
Service level (default) | Single data centre, no automatic failover
PDU specifications per rack | 2 x 16A single phase PDUs per rack with A and B power supplies<br>Each PDU has 36 x C13 and 6 x C19 sockets
Hosted device(s) allowed | Depends on solution. UKCloud will work with the customer to understand the requirement and assess the suitability of the devices that the customer wants to locate within Cloud Enablement.
Max power draw per rack | Customer devices within a single 40u rack have a combined average power draw of no more than 4kW. Average power draw will be assessed based vendor material supplied by the customer as part of the engagement with UKCloud prior to installation of devices, and reviewed whenever any additional equipment is added.
Networking | Bespoke networking based on customer requirement.<br>Big Cloud Enablement price excludes any networking components.
Contiguous racks | Contiguous racks are not guaranteed if not purchased together on a single order. UKCloud can reserve racks for a maximum of 6 months before charging for full use. This is at UKCloud's discretion.
Resilience available? | You can provision multiple Big Cloud Enablement services within a single or dual sites, but you'll need to manage any resilience within the hardware.
Failover responsibility | Customer
Resilience cost | Depends on solution
Notes | Devices must be hosted in the same region as your compute environment. We cannot stretch connectivity from local Big Cloud Enablement into other regions (for example, Big Cloud Enablement in region 5 cannot be stretched to region 6).
Next steps | Raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal

## Big Cloud Enablement connectivity

Connectivity within the solution will be bespoke to your requirements. You can bring your own switches and manage them, or you can ask UKCloud to purchase and manage switches on your behalf. Switches purchased by UKCloud will be agreed based on the solution, and port count/speed will be agreed between you and UKCloud.

## Connectivity port speed

- If UKCloud purchases and manages the switches, the port speed available for your kit can be either 1Gbps (copper or fibre) or 10Gbps (fibre only). Uplinks to your virtual UKCloud environment will be 2 x 10Gbps ports per switch.

- If you purchase and manage your own switches, you can define your own port speeds for your own kit. Uplinks to your virtual UKCloud environment will need to be 2 x 10Gbps fibre ports per switch. UKCloud will provide the cables but you will need to supply the SFPs.

## Initial setup

### Initial setup covers

- Provision and handover of secure rack(s) (combination lock)

- Provision and handover of PDUs

- Escorting you during the physical installation of your hosted devices for up to four days during the standard working week (Monday to Friday, 0900 - 1700)

### Initial setup does not cover

- Installing your device(s) for you

- Configuring your device(s) for you

- Networking components to connect device(s) into the UKCloud virtual environment

- Complex design services and consultancy regarding your solution

- Peripheral consumables such as brackets, cable ties, cage nuts, power cords and intra-rack cabling

- Tools for installing your device(s)

## Ongoing support and maintenance

### Ongoing maintenance and support covers

- Physical hosting of your device(s), including power and cooling

- Eight scheduled escorted visits (per rack) per year by you for maintenance of your hosted device(s) during the standard working week (Monday to Friday, 0900 - 1700)

- Access to the UKCloud Portal, Cloud Support Engineers and a dedicated Service Delivery Manager

- Monitoring of data centre environmentals and security

- Manual power-on of device(s) in the event of a power failure (see the [*Power Failure*](#power-failure) section)

### Ongoing maintenance and support does not cover

- Maintenance of your device(s) on your behalf

- Support and management of your device(s) on your behalf

- Out-of-hours escorted access to your device(s)

- Unscheduled escorted access to your device(s)

- Escorted access for installation and configuration of additional device(s) in your solution (this is a chargeable service, see [*Additional Maintenance Access*](#additional-maintenance-access))

### Unscheduled maintenance access

Due to the secure nature of UKCloud's sites, unscheduled maintenance access may not be granted. You'll need to give at least 24 hours' notice before attending site. Emergency access may be granted at UKCloud's discretion.

### Out-of-hours maintenance access

Out-of-hours access will be granted at UKCloud's discretion and is charged as per the [SFIA rate card](https://ukcloud.com/sfia) (Level 4 - Enable).

### Additional maintenance access

If you require more than eight visits per year for maintenance, these additional escorted visits will be charged as per the [SFIA rate card](https://ukcloud.com/sfia) (Level 4 - Enable).

If you need to install and configure additional device(s) within your solution, these escorted visits will be charged as per the [SFIA rate card](https://ukcloud.com/sfia) (Level 4 - Enable).

## Power failure

If, in the unlikely event of a power failure, you'd like your hardware restarted, you must provide **laminated** work instructions (totalling no more than a double-sided A4 page), which must be placed within your Big Cloud Enablement rack space.

## Decommissioning 

If you want to decommission your Big Cloud Enablement service you must provide a minimum of 30 days' notice and are responsible for the removal of your equipment. Visits to remove equipment are counted towards your allocation of maintenance access days and if you need additional days, these additional escorted visits will be charged as per the [SFIA rate card](https://ukcloud.com/sfia) (Level 4 - Enable).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
