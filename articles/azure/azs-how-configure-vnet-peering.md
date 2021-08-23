---
title: How to configure virtual network peering between two virtual networks using the UKCloud Azure Stack Hub portal
description: Describes how to configure virtual network peering between two virtual networks using the UKCloud Azure Stack Hub portal
services: azure-stack
author: kgreen
reviewer:
lastreviewed: 03/02/2021

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure virtual network peering between two virtual networks - Portal
toc_fullpath: Users/How To/azs-how-configure-vnet-peering.md
toc_mdlink: azs-how-configure-vnet-peering.md
---

# How to configure virtual network peering between two virtual networks using the UKCloud Azure Stack Hub portal

## Overview

This article shows you how to use the Azure Stack Hub portal to create two virtual networks peered to each other so they can communicate.

### Intended audience

To complete the steps in this article, you must have appropriate access to a subscription in Azure Stack Hub.

## Process Overview

In this article, we show you how to:

- Create two virtual networks

- Create two virtual machines (VMs)

- Peer the virtual networks to enable them to communicate with each other (demonstrated by performing a ping in Windows).

## Create two virtual networks in Azure Stack Hub

First, create the two virtual networks that will be communicating with each other.

1. Log in to the [Azure Stack Hub portal](https://portal.frn00006.azure.ukcloud.com).

   For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

    ![Create a resource option in favourites panel](images/azsp_newmenu.png)

3. In the **New** blade, select **Networking**.

    ![Networking option in New blade](images/azs-browser-new-networking.png)

4. In the **Featured** section, select **Virtual network**.

    ![Create new networking resource](images/azs-browser-networking-create.png)

5. In the **Create virtual network** blade, in the **Basics** step, enter the following information:

    - **Subscription** - This is your UKCloud for Microsoft Azure subscription.

    - **Resource group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

    - **Name** - The name of the virtual network.

    - **Region** - This will be `frn00006`, which is the location of the Azure Stack Hub.

   ![Create new virtual network](images/azs-portal-vnet-config-1.png)

 6. In the **IP Addresses** step, enter the following information:
 
    - **Address Space** - The virtual network's address range in CIDR notation.

    - **Subnet** - The subnet's address range in CIDR notation (for example, 10.10.0.0). It must be contained by the address space of the virtual network. The address range of a subnet which is in use can't be edited.

    - **Subnet Name** - The name of the first subnet within the virtual network.

    ![Create new virtual network](images/azs-portal-vnet-config-2.png)

7. Click **Create**.

8. Repeat the steps above for the second virtual network.

   > [!NOTE]
   > When creating the second virtual network, make sure to use a different address space than the first, otherwise they will not be able to communicate.

After you've deployed your virtual networks, you can view them by clicking **All services** in the favourites panel, then selecting **Virtual networks** under the networking section.

In the blade for your virtual network, you can view and monitor the virtual networks, change their settings and perform diagnostics and troubleshooting.

![Create new virtual network](images/azs-portal-vnet-overview.png)

## Create a virtual machine in each virtual network

After creating the virtual networks, you need to create a VM in each of them.

For detailed instructions on how to create a VM, see [*How to create a virtual machine using the UKCloud Azure Stack Hub portal*](azs-how-create-vm-portal.md).

> [!NOTE]
> Make sure to create a new public IP address for each VM in the configuration.

## Configure virtual network peering

After you've created the virtual networks and VMs, you can peer them together.

1. Click one of the created virtual networks and click **Add**.

   ![Configure virtual network peering](images/azs-portal-peering-1.png)

2. In the **Add peering** blade, enter the following information:

    - **Name of the peering from [A-B]** - The name of the connection from virtual network 1 to virtual network 2.

    - **Subscription** - This is your UKCloud for Microsoft Azure subscription.

    - **Virtual network** - The virtual network you want to peer to.

    - **Name of the peering from [B-A]** - The name of the connection from virtual network 2 to virtual network 1.

    - **Allow virtual network access** - Enable this option to allow access between the virtual networks.

   ![Configure virtual network peering](images/azs-portal-peering-2.png)

3. Click **OK**

If done correctly, Azure Stack Hub will create the peering rule in the other virtual network automatically. To check this, go to the other virtual network and check the peering.

### Testing the connection

You can test the connection by pinging one of the VMs from inside the other VM. To do this, you need to change some firewall rules in each VM.

1. Go to the VM in the first virtual network and click **Download RDP File**.

   ![Configure virtual network peering](images/azs-portal-peering-5.png)

   > [!NOTE]
   > The IP address of the device you're connecting from must be allowed through the VM NSG on port 3389.

2. Launch the RDP file and log in with the correct credentials for the VM that you set up.

3. Access the firewall advanced security (**Settings** > **Update & Security** > **Windows Security** > **Firewall & network protection** > **Advanced settings**).

4. Click **Inbound Rules**, scroll down to *File and Printer Sharing (Echo Request - ICMPv4-in)* and allow it through the firewall for ICMPv4 and ICMPv6.

   ![Configure virtual network peering](images/azs-portal-peering-3.png)

5. Repeat for the other VM.

6. From either of the VMs, open a command prompt and ping the internal IP address of the other VM. If the peering is working correctly, then the ping will be successful, as shown below.

   ![Configure virtual network peering](images/azs-portal-peering-4.png)

## How to create a hub and spoke configuration with virtual network peering using the UKCloud Azure Stack Hub portal

In a typical hub and spoke configuration, the hub is a virtual network that acts as a central point of connectivity between multiple other virtual networks. These other networks are the spokes that peer directly to the hub network. You can utilise the services deployed on the hub, such as a VPN gateway, from the spokes without having to deploy them individually on every network.

You can easily configure the topology for hub and spoke using the steps outlined above by declaring one of the virtual networks as the hub, then creating a third network that peers to the hub network alongside the existing one.

This allows the hub virtual network to communicate with any of the virtual networks that are peered to it (spokes). The section below explains how to add this third virtual network.

### Configuring the hub

The two virtual networks created in this article will be referred to as VNet-A and VNet-B, with VNet-A acting as the hub network and VNet-B becoming one of the spoke networks.

We then need to create a third virtual network, which will be referred to as "VNet-C". This network will act as another 'spoke'.

VNet-C will then be peered to VNet-A, creating a simple hub and spoke topology as explained above. See below for a diagram of this setup:
[diagram TBC]

> [!NOTE]
> Transitive peering is not supported between the spoke networks. In the above configuration, you must directly peer VNet-B to VNet-C to allow connectivity between them.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
