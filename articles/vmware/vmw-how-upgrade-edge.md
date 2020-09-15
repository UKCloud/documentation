---
title: How to upgrade your edge gateway
description: This article shows how to upgrade your edge gateways to the latest version
services: vmware
author: shighmoor
reviewer: sdelaney
lastreviewed: 15/09/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Upgrade your edge gateway
toc_fullpath: How To/vmw-how-upgrade-edge.md
toc_mdlink: vmw-how-upgrade-edge.md
---

# How to upgrade your edge gateway

## Overview

It's important to keep your edge gateways up to date to ensure that you benefit from the latest features and enhancements.

This article shows you how to upgrade your edge gateway to the latest available version. If you need any assistance with the upgrade process, contact UKCloud Support by raising a Service Request in the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

### Different types of edge

vCloud Director uses NSX edge services gateways in three main areas. These are all identical at the virtual network level, however feature exposure in vCloud Director varies. Due to this, there are differences in the method to upgrade these underlying devices.

#### Organisation edge gateways

These are commonly referred to as edge gateways, and are by far the most widely understood. They provide VPN, NAT, firewall and routing functionality, and appear as the object **Edge Gateway** in vCloud Director. These edges are referred to as edge gateways throughout this article.

To upgrade an organisation edge gateway, see [*Upgrading an organisation edge gateway*](#upgrading-an-organisation-edge-gateway).

#### Isolated organisation network edges

When you create an isolated organisation network in a VDC in vCloud Director, DHCP services are enabled by default with a DHCP pool of any remaining IP addresses not used by any static IP pools specified for the network. A small NSX edge services gateway is deployed on the network to manage DHCP traffic. If you disable the DHCP service after creation of the network, the edge is removed.

To upgrade an isolated organisation network edge, see [*Upgrading an isolated network edge*](#upgrading-an-isolated-network-edge).

#### vApp network edges

vApps and vApp networks have some optional capabilities that require the use of an NSX edge services gateway in the underlying network. This is often due to the vApp being configured as "fenced", requiring you to use NAT to communicate outside of the vApp. If you've configured a vApp network to use either NAT or firewall functionality, an NSX edge services gateway is required.

To upgrade a vApp network edge, see [*Upgrading a vApp network edge*](#upgrading-a-vapp-network-edge).

## Intended audience

To complete the steps in this guide you must have access to the UKCloud Portal and vCloud Director.

## Upgrading an edge to the latest available version

### Upgrading an organisation edge gateway

> [!IMPORTANT]
> Before you begin the upgrade process, bear in mind that this process requires downtime as a new VM needs to be deployed for the edge gateway. There will also be a brief network disruption for the networks that are used by the edge gateway instance. You should make sure that you have planned for this downtime before proceeding.

To upgrade an organisation edge gateway you need to redeploy the edge:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the edge gateway you want to upgrade.

2. In the left navigation panel, select **Edges**.

    ![Edges menu option in vCloud Director](images/vmw-vcd-mnu-edges.png)

3. On the *Edges* page, select the edge that you want to configure and click **Redeploy**.

    ![Redeploy button](images/vmw-vcd-btn-redeploy.png)

4. In the *Redeploy an Edge gateway* dialog box, click **OK**.

### Upgrading an isolated network edge

To upgrade an isolated network edge, you need to reset the network. This forces a redeployment of the edge used for the DHCP service.

> [!IMPORTANT]
> Before you begin the upgrade process, bear in mind that this process will disrupt DHCP server operations whilst the underlying edge is redeployed.

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the network edge you want to upgrade.

2. In the left navigation panel, select **Networks**.

    ![Edges menu option in vCloud Director](images/vmw-vcd-tab-networks.png)

3. On the *Networks* page, select the isolated network that contains the edge you want to upgrade and click **Reset**.

    ![Reset network button](images/vmw-vcd-btn-reset-network.png)

4. In the *Reset Network* dialog box, click **OK**.

### Upgrading a vApp network edge

An edge will be present on your vApp network if the network is:

- Connected to an organisation network

- Configured to supply DHCP services (disabled by default)

To upgrade a vApp network edge you can either reset the network or shut down the vApp and restart it.

#### Resetting the network

One way to upgrade a vApp network edge is to reset the vApp network.

>[!IMPORTANT]
> Before you begin the upgrade process, bear in mind that this process will disrupt any traffic flowing into or out of the vApp network and DHCP services will be interrupted.

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the vApp with the network edge you want to upgrade.

2. In the left navigation panel, select **vApps**.

    ![vApps menu option in vCloud Director](images/vmw-vcd-tab-vapps.png)

3. On the *vApps* page, in the card for the vApp, click **Details**.

4. On the vApp details page, select the **Networks** tab.

5. Select the vApp network that contains the edge you want to upgrade and click **Reset**.

    ![Reset vApp network button](images/vmw-vcd-btn-reset-vaap-network.png)

6. In the *Reset Network* dialog box, click **OK**.

#### Shutting down and restarting the vApp

Another way to upgrade a vApp network is to shut down the vApp and restart it. Restarting the vApp in this way recreates any networks in the virtual network space and deploys fresh vApp edges with the configuration held in vCloud Director.

>[!IMPORTANT]
> Before you begin the upgrade process, bear in mind that all the vApp resources will be unavailable until the vApp restarts.

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the vApp with the network edge you want to upgrade.

2. In the left navigation panel, select **vApps**.

    ![vApps menu option in vCloud Director](images/vmw-vcd-tab-vapps.png)

3. On the *vApps* pages, in the card for the vApp, select **Actions**, then **Power Off** or **Stop**.

    > [!NOTE]
    > You must shut down the vApp itself to trigger the deployment of fresh vApp edges; it is not enough to just power off all VMs inside the vApp.

4. After the vApp has shut down, in the vApp card, select **Actions** then **Power On**.

    After the vApp has powered on, the vApp network edge will have been upgraded to the latest version.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
