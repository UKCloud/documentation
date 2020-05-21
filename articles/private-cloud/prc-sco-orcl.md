---
title: Private Cloud for Oracle Software Service Scope
description: Outlines important details regarding Private Cloud for Oracle Software
services: private-cloud
author: Sue Highmoor
reviewer:
lastreviewed: 
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Private Cloud for Oracle Software Service Scope
toc_fullpath: Service Scope/prc-sco-orcl.md
toc_mdlink: prc-sco-orcl.md
---

# Private Cloud for Oracle Software Service Scope

## About the service

This document describes the boundaries of the Private Cloud for Oracle Software service (referred to as Private Oracle in this document), along with the responsibilities of both you and UKCloud to facilitate the installation and ongoing use of the service.

This service is aimed at customers who require the perceived benefit of owning their own infrastructure.

Our Private Oracle service is a single tenant (private cloud) compute infrastructure where your compute needs are hosted either in one of our data centres, to gain the benefits of our Assured and Elevated cloud platforms, in your Crown Hosting Data Centre (CHDC), or hosted in your own DC or another DC of your choice.

We can provide Private Oracle on an all-inclusive basis, or alternatively we can supply the environment specification for you to procure your own hardware, which we'll install and maintain on your behalf, or you can arrange alternative management of the private cloud (yourselves, through a partner or through Oracle).

## Capturing your requirements

Before you finalise your order, your assigned Cloud Architect will finalise capture of:

- Your end-to-end solution, including:

  - Backup and connectivity needs for Private Oracle

  - Standard UKCloud for Oracle Software needs (if any)

- A forecast of your growth to right-size your infrastructure

- Your location requirements for either UKCloud hosted, Crown Hosting Data Centre (CHDC) hosted, or on-premise solution

- Your packaging requirements of either All-Inclusive, UKCloud Managed or Customer Managed

## Designing your solution

Your assigned Cloud Architect will design your solution based on your needs and you will be expected to confirm that the design meets your requirements.

This will include:

- Protective monitoring

- Check / ITSHC testing

- 99.99% service level agreement (SLA)

When you have accepted the design and provided a purchase order, we'll start to plan the installation, including connectivity and allocating space in our data centres if applicable.

## Design options

Your compute solution can be:

- Based on Oracle Exadata, Private Cloud Appliance (PCA), Private Oracle Cloud Infrastructure (OCI) or other Oracle Engineered Systems

- Located in either or both of our two sites - Farnborough and Corsham, in a CHDC or in another data centre (including on-premise)

- In either our Assured OFFICIAL or Elevated OFFICIAL security domain if hosted within UKC.

- Connected via the internet, HybridConnect, CrownConnect, Janet, HSCN, PSN, RLI or Secure Remote Access

## Location and packaging options

### Located in UKCloud

- All-Inclusive

- UKCloud Managed

- Customer Managed

### Located in CHDC

- All-Inclusive

- UKCloud Managed

### On-Premises/Alternate DC

- All-Inclusive

- UKCloud Managed

## Upfront deployment charges

You will be charged an upfront design and deployment fee before hardware is procured and installation is scheduled. See the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Installation

Your assigned project manager will coordinate the build activities and ensure end-to-end testing of your service.

During the installation, we'll integrate your cloud into our management platform so that we can maintain your service once it has gone live.

Your service will be handed over to you when your project manager can confirm that the testing has proved successful and that you can provision VMs in your environment.

At this time, your service will be considered live and monthly billing will commence.

## Maintaining your environment

We'll monitor the end-to-end solution for alarms, including your hardware issues and failures.

We'll perform routine maintenance and diagnostics and will liaise with your hardware maintenance provider where necessary.

If necessary, we'll coordinate the swapping out of any failed hardware and notify you of any service-affecting maintenance through our change control and notification procedures.

As your service needs grow, we'll work with you to coordinate the installation of any additional hardware and network requirements.

## Your responsibilities - location

### Your UKCloud Hosted responsibilities

- If your engineers will require access to manage and maintain the hardware you will need to ensure they are booked in to visit UKCloud DCs. This can be done by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. Note that due to the secure nature of the site, at least 24 hours' notice is required. Engineers must be escorted and this is charged at a [SFIA](https://ukcloud.com/wp-content/uploads/2019/06/ukc-gen-759-ukcloud-g-cloud-11-standard-rate-card-and-definitions.pdf) day rate.

### Your CHDC Hosted responsibilities

- Arranging for CHDC capacity (such as power, space and floor strength) for your hardware

- Authorising UKCloud engineers to access your CHDC environment to install and support your infrastructure, for example your whitelist

- Arranging for connectivity between the CHDC and the UKCloud platform in line with UKCloud specifications

- Supplying us with all network switches and cabling to connect to your environment based on our specification - or we can source these for you

### Your On-premises/Alternate DC Hosted responsibilities

- Arranging for capacity to host your hardware (such as power, space and floor strength)

- Authorising UKCloud engineers to access your chosen data centre environment to install and support your infrastructure, for example your whitelist

- Arranging for connectivity between the data centre and the UKCloud platform in line with UKCloud specifications

- Supplying us with all network switches and cabling to connect to your environment based on our specification - or we can source these for you

### Important CHDC/On-premises/Alternate DC considerations

You need to ensure that UKCloud control the physical access to the hardware in your CHDC environment. You must raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal for anyone else requiring access to the hardware, with full details of the activities they wish to carry out. These requests are subject to our approval. This is to ensure that there is no disruption to your service.

We cannot be responsible for any service affecting issues resulting from non-escorted access.

## Your responsibilities - packaging

### Your All-Inclusive responsibilities

- Providing an initial forecast of your needs and regularly updating us to cover the minimum term, enabling us to provision your requirements when needed

- Managing the performance of your workload by right-sizing your VMs and their usage

- Raising Service Requests through the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal when you need configurations implemented

- Raising incident tickets if you experience any issues with your service

- Giving us time to plan the installation of any additional hardware

### Your UKCloud Managed responsibilities

As per All-Inclusive plus:

- Reviewing and agreeing to our recommended / suggested hardware design

- Purchasing the hardware and network infrastructure based on an agreed specification

- Arranging a service and maintenance contract for your hardware and authorising UKCloud as an authorised contact

- Managing the performance of your workload and assigning UKCloud as an authorised contact

- Agreeing with us on how to deal with hardware failures and associated removal and/or disposal

- Perform capacity planning and working with us to plan and implement upgrades

### Your Customer Managed responsibilities

- Reviewing our recommended / suggested hardware design

- Purchasing the hardware and network infrastructure based on an agreed specification

- Installation of hardware and network infrastructure up to agreed demarcation

- Arranging a service and maintenance contract for your hardware and authorising UKCloud engineers to contact your suppliers if required

- Capacity management of the Private Oracle infrastructure and networking

- Platform monitoring and maintenance

- Performance management

- Agreeing with us on how to deal with hardware failures and associated removal and/or disposal

- Assurance and compliance in agreement with UKCloud

## Our responsibilities – location

### Our UKCloud Hosted responsibilities

- Arranging for capacity (such as power, space and floor strength) for your hardware

- Capacity management of DC power, space etc

- Authorising customer engineers to access the customer managed infrastructure (if applicable) to install and support your infrastructure

### Our CHDC Hosted responsibilities

- Providing networking infrastructure to connect UKCloud Management platform to Private Oracle infrastructure if requested

- Requesting engineer access to your CHDC suites if required

### Our On-premises/Alternate DC Hosted responsibilities

- Providing networking infrastructure to connect UKCloud Management platform to Private Oracle infrastructure if requested

- Requesting engineer access to your nominated DC if required

## Our Responsibilities - packaging

### Our All-Inclusive responsibilities

- Working with you to design a solution that meets your needs

- Ensuring the solution is installed, tested and ready for service before handing over to you

- Monitoring your infrastructure and running diagnostics

- Fixing any issues that arise in your infrastructure

- Applying software patches and upgrades for you

- Providing you with UKCloud Portal access so that you can spin up VMs

- Providing you with visibility of capacity utilisation to ensure capacity planning can be effectively performed

- Your assigned Service Delivery Manager (SDM) will attend any required service reviews and project progress calls that you need

- Notifying you of any maintenance windows and agreeing a suitable time to implement

### Our UKCloud Managed responsibilities

- Working with you to design a solution that meets your needs

- Supplying you with a list of materials required for your infrastructure

- Installing your infrastructure and carrying out successful testing before handing over to you

- Monitoring your environment and running diagnostics

- Fixing any issues that arise in your environment

- Applying software patches and upgrades for you

- Providing you with visibility of capacity utilisation to ensure capacity planning can be effectively performed

- Managing any additional hardware installation

- Attending any required service reviews and project progress calls that you need

- Notifying you of any maintenance windows and agreeing a suitable time to implement

- Environmental monitoring - for example power, temperature, humidity

- Monitoring power distribution in DC - for example PDU

### Our Customer Managed responsibilities

- Assisting with any additional hardware installation if required

- Attending any required service reviews and project progress calls that you need

- Notifying you of any relevant maintenance windows and agreeing a suitable time to implement

- Environmental monitoring - for example power, temperature, humidity

- Monitoring power distribution in UKCloud DCs - for example PDU

## What we are not responsible for

We will not provide you with access to any management applications that we use to run and maintain your environment.

## SLA

Information about the SLA for this service can be found in [*SLA definition*](../other/other-ref-sla-definition.md).

SLA excludes:

- Deletion or modification of VM made by you

- Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds

- Faults within external connectivity providers (for example internet, PSN, Janet or HSCN) and components co-located at UKCloud

- Any connectivity between data centres that is out of our control

- Any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system

- Any platform outages causing disruption to power and cooling

- Any outages or disruption caused by non UKCloud escorted visits to your CHDC/on-premise environment

- Any outage caused by your management of the system (Customer Managed package)

## To progress further

Contact your SDM to request more information or to place an order.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
