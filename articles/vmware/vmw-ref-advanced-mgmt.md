---
title: Advanced management options for UKCloud for VMware
description: Provides an overview of the additional UKCloud for VMware functionality provided by the Advanced Management bundle, including Distributed Firewall (DFW), Distributed Logical Router (DLR), L2 VPN and vROps
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 19/11/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Advanced management options
toc_fullpath: Reference/vmw-ref-advanced-mgmt.md
toc_mdlink: vmw-ref-advanced-mgmt.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Advanced management options for UKCloud for VMware

## Overview

UKCloud for VMware provides additional networking and monitoring functionality as part of its Advanced Management bundle (additional charges apply).

## Advanced networking

The Advanced Management bundle includes additional distributed networking functionality that enables you to more easily build advanced networking to improve the performance of traffic within your VDC.

UKCloud for VMware's advanced distributed networking features include:

- **Distributed Firewall (DFW).** Enables creation of firewall rules at the virtual machine (VM) level as well as at the edge gateway, providing more flexibility in network design.

    For more information, see [*How to configure a Distributed Firewall*](vmw-how-configure-distributed-firewall.md).

- **Distributed Logical Router (DLR).** Improves the performance of traffic routed between VMs within a VDC (East-West traffic), without the need to route traffic back through the edge gateway.

    For more information, see [*How to configure a Distributed Logical Router*](vmw-how-configure-distributed-logical-router.md).

- **L2 VPN.** Stretches your network across two edge gateways in different sites, enabling you to seamlessly move workloads between sites.

    For more information, see [*How to configure a Layer 2 VPN*](vmw-how-configure-l2-vpn.md).

## Advanced monitoring options

The Advanced Management bundle also includes advanced monitoring, powered by the vRealize Operations (vROps) Tenant Appliance. Using advanced monitoring, you can view metrics and reports relating to your UKCloud for VMware environment.

With advanced monitoring, you can:

- Use CPU, memory and storage metrics to monitor and manage workloads

- Analyse the overall health of your environment and identify workload optimisation options

- Identify if your VMs can be rightsized to reduce costs or improve performance

- View optimisation history to identify issues over a given timeframe and make necessary adjustments

For more information, see [*How to access advanced monitoring using the vRealize Operations Tenant Appliance*](vmw-how-vrops-use.md).

## Availability of advanced management options

UKCloud for VMware provides advanced networking and monitoring options via its Advanced Management bundle, which is charged as a 15% uplift on the hourly compute price. For more information, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

If you're interested in adding the Advanced Management bundle to your service, raise a Service Request, contact your Service Delivery Manager or email <servicedelivery@ukcloud.com>.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
