---
title: How to configure a Distributed Logical Router
description: Describes how to configure a Distributed Logical Router (DLR), available as an advanced networking option with UKCloud for VMware
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 13/11/2020

toc_rootlink: How To
toc_sub1: Advanced networking
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure a Distributed Logical Router
toc_fullpath: How To/Advanced networking/vmw-how-configure-distributed-logical-router.md
toc_mdlink: vmw-how-configure-distributed-logical-router.md
---

# How to configure a Distributed Logical Router

## Overview

UKCloud for VMware provides Distributed Logical Router (DLR) functionality as part of its Advanced Management bundle (additional charges apply). DLR optimises the routing of east-west traffic within your VDCs, using a hypervisor on the source VM to limit traffic flow to a maximum of two hosts (the source and a destination), without the need to route traffic back through the edge gateway. As well as providing much better performance, DLR can scale up to 1000 routed logical networks (rather than the 10 logical network limit imposed by traditional edge gateway routing).

![Distributed Logical Router overview](images/vmw-dlr-overview.png)

## Before you begin

Before enabling DLR, consider the following:

- You must have purchased the Advanced Management bundle for your UKCloud for VMware service

- Your advanced gateway must have one free interface for DLR to use for the transit (P2P) network

- IPv6 is not supported with DLR

- L2 VPN is not supported on a distributed VDC network

- vApp routed networks are not supported

- You can only have one DLR instance per VDC edge gateway

- You can create up to 1000 distributed networks per edge gateway

- You cannot distribute a VLAN-based network

- Your local subnets should not overlap with the transit network (`10.255.255.248/30`)

- You cannot modify the transit connection between the edge gateway and DLR

- You can change auto-generated DHCP and static route configurations on the edge gateway

- To disable DLR on the edge gateway, you must first remove all distributed networks

- You can migrate existing VDC networks to distributed network without service disruption

- You cannot run more than one routing protocol on each DLR (BGP or OSPF)

- If you use OSPF, you cannot run it on more than one DLR uplink

- Dynamic routing protocols are only supported on uplink interfaces

## Enabling distributed routing for Distributed Logical Router

To enable distributed routing:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-edges.png)

3. On the *Edge Gateways* page, select the edge.

4. Select **Enable Distributed Routing**.

    ![Enable Distributed Routing option](images/vmw-vcd10.1-btn-enable-distributed-routing.png)

## Creating a distributed network

After you've enabled distributed routing, you can create your distributed networks. You can create up to 1000 distributed networks per edge gateway.

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select your VDC.

2. In the left navigation panel, select **Networks**.

    ![Network tab in VMware Cloud Director](images/vmw-vcd10.1-mnu-networks.png)

3. Click **New**.

    ![New network button](images/vmw-vcd10.1-btn-new-network.png)

4. On the *Network Type* page of the *New Organization VDC Network* dialog box, select **Routed** then click **Next**.

    ![New Organization VDC Network dialog box - Network Type page - Routed network](images/vmw-vcd10.1-new-network-routed-type.png)

5. On the *General* page:

    - Enter a **Name** and **Description** for the network.

    - In the **Gateway CIDR** field, enter the gateway address for the network.

    - Select the **Shared** option to make the network available to other VDCs within the same organisation.

    ![New Organization VDC Network dialog box - General page](images/vmw-vcd10.1-new-network-general.png)

6. Click **Next**.

7. On the *Edge Connection* page:

    - Select the edge gateway that you want your network to connect to.

        > [!NOTE]
        > The edge must be an advanced gateway and must have distributed routing enabled.

    - From the **Interface Type** list, select **Distributed**.

    ![New Organization VDC Network dialog box - Edge Connection page](images/vmw-vcd10.1-new-network-distributed-edge.png)

8. Click **Next**.

9. Complete the remaining fields in the dialog box as you would for any other routed network.

    For more detailed instructions, see [*How to create a routed VDC network*](vmw-how-create-routed-network.md).

10. When you're done, click **Finish**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
