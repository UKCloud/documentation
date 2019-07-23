---
title: Telecommunications Service Provider engagement | UKCloud Ltd
description: Outlines the engagement process, demarcation points and responsibilities of all parties  regarding provisioning connectivity into UKCloud via HybridConnect
services: connectivity
author: Sue Highmoor
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Telecommunications Service Provider engagement
toc_fullpath: Reference/conn-ref-telco-enagagement.md
toc_mdlink: conn-ref-telco-enagagement.md
---

# Telecommunications Service Provider engagement

## Overview

The purpose of this document is to outline the engagement process, demarcation points and the responsibilities of all parties involved in the provisioning of connectivity into UKCloud's datacentres using the HybridConnect and CrownConnect services provided by UKCloud. This document should be attached to any order made with telco providers to ensure that all parties are of the same understanding with regards to implementation.

HybridConnect and CrownConnect enable customers to bring in their own MPLS, leased lines or public network connectivity into the UKCloud datacentres. These can be paired with Cloud Enablement - the colocation of network attached devices (firewalls, VPN concentrators, and so on) to enable the overlay of encryption technologies on the connectivity.

## High level process

To facilitate a HybridConnect or CrownConnect order, UKCloud expects that:

1. The end customer or partner will order the connection directly with the service provider that they wish to contract with.

2. At the same time, the customer or partner will raise a Service Request through the UKCloud Portal to make UKCloud support aware of the need for HybridConnect or CrownConnect.

3. UKCloud will provide information where needed to help the customer or partner complete forms that the telco provider requires in order to progress the order.

4. The telco provider will liaise with Ark to gain site access to perform a site survey and then a subsequent visit to install any kit required into their racks within the MMR.

5. Ark will provide connectivity between the telco termination point and the UKCloud patch panel.

6. UKCloud will liaise with the partner or customer to arrange for onward connectivity from the UKCloud patch panel to the UKCloud environment. This may require additional information gathering. In the case where Cloud Enablement is required, this will involve additional engineer work from both customer/partner and UKCloud.

UKCloud will complete the logical and physical connectivity to enable a live service.

## Telcos with a presence in Ark

Telco providers will need to have a presence in the Ark Meet Me Room (MMR) in order to provide a service to the customer or partner. The location where a telco has presence defines whether HybridConnect or CrownConnect can be used.

- If the telco has presence in a core UKCloud location (A9 or SQ17), then HybridConnect can be used.

- If the telco has presence in Ark but outside of UKCloud's core locations, then CrownConnect must be used. 

The following telcos have a presence in Ark MMRs:

- BT<sup>*</sup>

- Vodafone<sup>*</sup>

- CenturyLink<sup>*</sup>

- Virgin Media<sup>*</sup>

- Interoute<sup>*</sup>

- GTT<sup>*</sup>

- Redcentric

- SSE

<sup>*</sup> - has known presence in core UKCloud locations

If a service provider does not have a presence in Ark, then they will need to contact Ark Continuity directly in order to gain presence. It is not the responsibility of the customer/partner or UKCloud to contact Ark on behalf of the telco.

## Completing telco order form

When completing the telco order form, it is important to state the correct address of the Ark datacentre that the connectivity will be provisioned in. The addresses of UKCloud's core locations are:

### Farnborough

Building A9,<br>
Cody Technology Park,<br>
Farnborough,<br>
Hampshire, <br>
GU14 0LX

### Corsham

Building SQ17,<br>
Spring Park,<br>
Corsham,<br>
Wiltshire,<br>
SN13 9GB

Please ensure that the correct address is used. If you are unsure which data centre your service is provisioned in, contact UKCloud support who will be able to assist you.

It is not the responsibility of the customer/partner or UKCloud to know the exact MMR rack locations of the telco providers. Telco providers do know this information and will be responsible for making sure that they capture this.

## Installation

Telcos are responsible for organising directly with Ark to install their equipment in their racks in the MMR.

Customers/partners are responsible for organising any colocation of customer/partner equipment with UKCloud.

> [!IMPORTANT]
> All equipment's onward connectivity to the UKCloud platform must be LC-LC fibre (multimode if HybridConnect or singlemode if CrownConnect). It is the responsibility of the partner/customer and telco to ensure that all equipment has the right interface to connect into UKCloud. UKCloud will not be held responsible for any financial penalty or delays in installation due to the wrong equipment interface being supplied by either the partner/customer or the telco.

## Demarcation

Telcos are responsible for all telco owned equipment. This equipment **must** be installed within a telco rack within the Meet Me Room of the Ark datacentre and **cannot** be installed in a UKCloud rack. This includes all telco NTEs, CPEs and other equipment that is under the ownership and/or management responsibility of the telco.

Ark are responsible for the connection between the telco kit and the patch panel for onward connectivity to UKCloud.

UKCloud are responsible for the connection between the patch panel in the UKCloud data centre suites and the customer collocated equipment (if Cloud Enablement is being used) and/or the UKCloud infrastructure.

The customer/partner is responsible for any customer owned equipment that has been installed in a UKCloud rack as part of a Cloud Enablement service. This includes installation, ongoing maintenance and emergency maintenance.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
