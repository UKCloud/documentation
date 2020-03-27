---
title: HybridConnect vs CrownConnect (Private Connectivity)
description: Outlines the difference between HybridConnect and CrownConnect and explains when each should be used
services: connectivity
author: Sue Highmoor
reviewer: hbrunt
lastreviewed: 16/12/2019
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: HybridConnect vs CrownConnect
toc_fullpath: Reference/conn-ref-hybrid-crown-connect.md
toc_mdlink: conn-ref-hybrid-crown-connect.md
---

# HybridConnect vs CrownConnect (Private Connectivity)

## Overview

This article outlines the difference between HybridConnect and CrownConnect and explains when each should be used.

## What is HybridConnect?

HybridConnect enables you to bring private connectivity into service provider locations within UKCloud's core network locations in ARK data centres. UKCloud will then arrange onward connectivity from the termination point into your cloud service. The service provider locations must be within UKCloud's core network locations for HybridConnect to be used.

The current core network locations are: Farnborough A9 and Corsham SQ17.

Known Service Providers with presence<sup>*</sup> within A9 and SQ17:

- BT

- Vodafone

- CenturyLink

- Virgin Media

- Interoute

- GTT

<sup>*</sup> This does not necessarily mean your private connection will be terminated within these locations. You should check the planned termination location with your provider.

UKCloud is not responsible for procuring the private connection or arranging any service provider activity on your behalf.

You may want to implement encryption on your private connection. You can use Cloud Enablement to host physical devices for termination of this encryption if required.

## What is CrownConnect?

CrownConnect has two flavours: Private Connectivity and Private Infrastructure. This article focuses on Private Connectivity.

CrownConnect (Private Connectivity) enables you to bring private connectivity into service provider locations anywhere in the ARK data centre campus. UKCloud will then arrange for onward connectivity from the termination point into the your cloud service. The service provider locations can be anywhere within the ARK Crown Campus and are not limited to UKCloud's core network locations.

UKCloud is not responsible for procuring the private connection or arranging any service provider activity on your behalf.

You may want to implement encryption on your private connection. You can use Cloud Enablement to host physical devices for termination of this encryption if required.

## Pricing

There are different pricing models for both products. These charges are applied per installation.

&nbsp; | HybridConnect | CrownConnect (Private Connectivity)
-------|---------------|------------------------------------
One-off charge | £1000 | £1000
Monthly charge | £150 (1Gb bandwidth)<br>£300 (10Gb bandwidth) | £200 (1Gb port)<br>£500 (10Gb port)

## Lead times

Lead times vary depending on product. HybridConnect can normally be delivered within a couple of weeks due to the locality of the termination points to UKCloud's core network, however CrownConnect is dependent on fibre installation from the termination point into UKCloud's core network location. The lead time of delivery of this fibre depends on the distance from the termination point to the core network location, but typically customers should expect 3 to 4 weeks from order to delivery.

## Comparison table

&nbsp; | HybridConnect | CrownConnect (Private Connectivity)
-------|---------------|------------------------------------
Service provider termination locations | A9<br>SQ17 | A101<br>A102<br>A103<br>P1<br>P2<br>P3
Costs | One-off installation + monthly charge | One-off installation + monthly charge
Lead times | A few days (approx) | Dependent on termination location
Cloud Enablement use | Yes | Yes

## Further information

For more information about the process of installing HybridConnect or CrownConnect, or to understand party responsibilities, see [*Telecommunications Service Provider engagement*](conn-ref-telco-enagagement.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
