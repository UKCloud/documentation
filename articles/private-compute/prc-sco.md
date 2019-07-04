---
title: Private Cloud Service Scope | UKCloud Ltd
description: Outlines important details regarding Private Cloud 
services: private-compute
author: Steve Hall
reviewer:
lastreviewed: 03/08/2018 13:39:33
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Private Cloud Service Scope
toc_fullpath: Service Scope/prc-sco.md
toc_mdlink: prc-sco.md
---

# Private Cloud Service Scope

## About the service

This document describes the boundaries of the Private Cloud service, along with the responsibilities of both you and UKCloud to facilitate the installation and ongoing use of the service.

Our Private Cloud service is a single‑tenant (private cloud) compute or storage infrastructure where your compute or storage needs are hosted either in one of our data centres, to gain the benefits of our Assured and Elevated cloud platforms, or in your Crown Hosting Data Centre (CHDC).

This service is aimed at customers who require the perceived benefit of owning their own infrastructure.

We can provide Private Cloud on an all-inclusive basis, or alternatively we can supply the environment specification for you to procure your own hardware, which we'll install and maintain on your behalf.

## Capturing your requirements

Before you finalise your order, your assigned Cloud Architect will finalise capture of:

- Your end-to-end solution, including:

  - Backup and connectivity needs for Private Cloud 

  - Standard UKCloud for VMware needs (if relevant)

- A forecast of your growth to right-size your infrastructure

- Your requirements for either an All-Inclusive, UKCloud hosted, or Crown Hosting Data Centre (CHDC) hosted solution

## Designing your solution

Your assigned Cloud Architect will design your solution based on your needs and you will be expected to confirm that the design meets your requirements.

This will include:

- Protective monitoring

- Check / ITSHC testing

- 99.99% service level agreement (SLA)

When you have accepted the design and provided a purchase order, we'll start to plan the installation, including allocating space in our data centres if applicable.

## Design options

Your compute solution can be:

- Based on VMware or OpenStack

- Located in either or both of our two sites - Farnborough and Corsham, or in a CHDC

- In either our Assured OFFICIAL or Elevated OFFICIAL security domain

- Connected via the internet, HybridConnect, Janet, HSCN, PSN, RLI or Secure Remote Access

## Upfront deployment charges

You will be charged an upfront design and deployment fee before hardware is procured and installation is scheduled. See the pricing section of the Service Definition.

## Installation

Your assigned project manager will coordinate the build activities and ensure end-to-end testing of your service.

During the installation, we'll integrate your cloud into our assured platform so that we can maintain your service once it has gone live.

Your service will be handed over to you when your project manager can confirm that the testing has proved successful and that you can provision VMs in your environment.

At this time, your service will be considered live and monthly billing will commence.

## Maintaining your environment

We'll monitor the end-to-end solution for alarms, including your hardware issues and failures.

We'll perform routine maintenance and diagnostics and will liaise with your hardware maintenance provider where necessary.

If necessary, we'll coordinate the swapping out of any failed hardware and notify you of any service-affecting maintenance through our change control and notification procedures.

As your service needs grow, we'll work with you to coordinate the installation of any additional hardware and network requirements.

## Your responsibilities

### Your All-Inclusive responsibilities

- Providing an initial forecast of your needs and regularly updating us to cover the minimum term, enabling us to provision your requirements when needed

- Managing the performance of your workload by right-sizing your VMs and their usage

- Raising service requests through the UKCloud Portal when you need configurations implemented

- Raising incident tickets if you experience any issues with your service

- Giving us time to plan the installation of any additional hardware

### Your UKCloud Hosted responsibilities

As per All-Inclusive plus:

- Reviewing and agreeing to our recommended / suggested hardware design

- Purchasing the hardware and network infrastructure based on an agreed specification

- Arranging a service and maintenance contract for your hardware and authorizing UKCloud as an authorised contact

- Managing the performance of your workload and assigning UKCloud as an authorised contact

- Agreeing with us on how to deal with hardware failures and associated removal and/or disposal

- Perform capacity planning and working with us to plan and implement upgrades

### Your CHDC Hosted responsibilities

As per All-Inclusive plus:

- Arranging for CHDC capacity (such as power, space and floor strength) for your hardware

- Reviewing and agreeing to our recommended / suggested hardware design

- Purchasing the hardware and network infrastructure based on an agreed specification

- Authorising UKCloud engineers to access your CHDC environment to install and support your infrastructure, for example your whitelist

- Arranging a service and maintenance contract for your hardware and authorising UKCloud engineers to contact your suppliers

- Arranging for connectivity between the CHDC and the UKCloud platform in line with UKCloud specifications

- Agreeing with us on how to deal with hardware failures and associated removal and/or disposal

- Performing capacity planning and working with us to plan upgrades

- Supplying us with all network switches and cabling to connect to your environment based on our specification - or we can source these for you

#### Important CHDC considerations

You need to ensure that UKCloud control the physical access to the hardware in your CHDC environment. A service request via the UKCloud Portal must be raised for anyone else requiring access to the hardware, with full details of the activities they wish to carry out. These requests are subject to our approval. This is to ensure that there is no disruption to your service.

We cannot be responsible for any service affecting issues resulting from non-escorted access.

## Our responsibilities

### Our All-Inclusive responsibilities

- Working with you to design a solution that meets your needs

- Ensuring the solution is installed, tested and ready for service before handing over to you

- Monitoring your infrastructure and running diagnostics

- Fixing any issues that arise in your infrastructure

- Applying software patches and upgrades for you

- Providing you with UKCloud Portal access so that you can spin up VMs

- Providing you with visibility of capacity utilisation to ensure capacity planning can be effectively performed

- Your assigned technical account manager will attend any required service reviews and project progress calls that you need

- Notifying you of any maintenance windows and agreeing a suitable time to implement

### Our UKCloud Hosted and CHDC Hosted responsibilities

- Working with you to design a solution that meets your needs

- Supplying you with a bill of materials required for your infrastructure

- Installing your infrastructure and carrying out successful testing before handing over to you

- Monitoring your environment and running diagnostics

- Fixing any issues that arise in your environment

- Applying software patches and upgrades for you

- Providing you with visibility of capacity utilisation to ensure capacity planning can be effectively performed

- Managing any additional hardware installation

- Attending any required service reviews and project progress calls that you need

- Notifying you of any maintenance windows and agreeing a suitable time to implement

- Environmental monitoring - for example power, temperature, humidity

- Monitoring power distribution in CHDC - for example PDU

## What we are not responsible for

- We will not provide you with any access to any management applications that we use to run and maintain your environment.

- SLA excludes:

  - Deletion or modification of VM made by you

  - Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds

  - Faults within external connectivity providers (for example internet, PSN, Janet or HSCN) and components co-located at UKCloud

  - Any connectivity between data centres that is out of our control

  - Any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system

  - Any platform outages causing disruption to power and cooling

  - Any outages or disruption caused by non UKCloud escorted visits to your CHDC environment

## To progress further

For further information, contact your account manager to request more information or to place an order.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
