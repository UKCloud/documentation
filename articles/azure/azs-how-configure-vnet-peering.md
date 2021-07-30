---
title: How to configure virtual network peering between two virtual networks using the UKCloud Azure Stack Hub portal
description: Configure virtual network peering between two virtual networks
services: azure-stack
author: Kade Green
reviewer:
lastreviewed:

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

In this guide you will need to create two virtual networks and two virtual machines. After, they will be peered together, allowing them to communicate and ping each other.

## Create two virtual networks in Azure Stack Hub

First, create two virtual networks. These virtual networks will be able to communicate with each other at the end of this guide, demonstrated with a ping in windows.

1. Log in to the [Azure Stack Hub portal](https://portal.frn00006.azure.ukcloud.com).

2. In the favourites panel, select **Create a resource**.

    ![Create a resource option in favourites panel](images/azsp_newmenu.png)

3. In the **New** blade, select **Networking**.

    ![Networking option in New blade](images/azs-browser-new-networking.png)

4. In the **Featured** section, select **Virtual network**.

    ![Create new networking resource](images/azs-browser-networking-create.png)

5. In the **Create virtual network** blade, enter the following information:

    - **Subscription** - This is your UKCloud for Microsoft Azure subscription.

    - **Resource Group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

    - **Name** - The name of the virtual network.

    - **Location** - This will be `frn00006`, which is the location of the Azure Stack Hub.

    ![Create new virtual network](images/azs-portal-vnet-config-1.png)

    - **Address Space** - The virtual network's address range in CIDR notation.

    - **Subnet** - The subnet's address range in CIDR notation (for example, 10.10.0.0). It must be contained by the address space of the virtual network. The address range of a subnet which is in use can't be edited.

    - **Subnet Name** - The name of the first subnet within the virtual network.

    ![Create new virtual network](images/azs-portal-vnet-config-2.png)

> [!NOTE]
> When creating the second virtual network, make sure to use a different address space than the first, otherwise they will not be able to communicate

6. Click **Create**.

7. Repeat the steps above for the second virtual network, but use different address spaces.

After your virtual network has deployed, you can view it by clicking **All services** in the favourites panel, then selecting **Virtual networks** under the networking section.

In the blade for your virtual network, you can view and monitor the virtual network, change its settings and perform diagnostics and troubleshooting.

![Create new virtual network](images/azs-portal-vnet-overview.png)

## Create a Virtual Machine in each Virtual Network

After creating the virtual networks, we need to create a virtual machine in each of them.

> [!NOTE]
> Make sure that a new Public IP address is created for each virtual machine in the configuration.

For more detailed instructions on how to create a virtual machine, see the [*How to create a virtual machine using the UKCloud Azure Stack Hub portal*](azs-how-create-vm-portal.md).

## Configure virtual network peering

After a virtual machine has been created in each virtual network, they can be peered together.

1. Click on one of the created virtual networks and click **Add**

![Configure virtual network peering](images/azs-portal-peering-1.png)

2. In the **Add peering** blade, enter the following information:

    - **Name** - The name of the connection from A-B. (From virtual network 1 to virtual network 2)

    - **Subscription** - This is your UKCloud for Microsoft Azure subscription.

    - **Virtual Network** - The virtual network you want to peer to.

    - **Name** - The name of the connection from B-A. (From virtual network 2 to virtual network 1)

    - **Allow virtual network access** - Allows access between virtual networks.

![Configure virtual network peering](images/azs-portal-peering-2.png)

3. Click **OK**

If done correctly, Azure Stack Hub will create the peering rule in the other virtual network automatically. To check this, go to the other virtual network and check the peering.

### Testing connection

The connection can be tested by pinging one of the virtual machines from inside the other virtual machine. To do this, some firewall rules need to be changed in each virtual machine.

1. Go to the virtual machine and connect to it by downloading the RDP file, click **Download RDP File**

![Configure virtual network peering](images/azs-portal-peering-5.png)

> [!NOTE]
> The device's IP you are connecting from must be allowed through the virtual machine NSG on port 3389.

2. Launch the RDP file and log in with the correct credentials for the virtual machine that you set up.

3. Access the firewall advanced security (**Settings**>**Update & Security**>**Windows Security**>**Firewall & network protection**>**Advanced settings**)

4. Click on **Inbound Rules**, scroll down to "*File and Printer Sharing (Echo Request - ICMPv4-in)*" and allow it through the firewall for ICMPv4 and ICMPv6.

![Configure virtual netork peering](images/azs-portal-peering-3.png)

5. Repeat for the other virtual machine.

6. From either of the virtual machines, open command prompt and ping the internal IP of the other virtual machine. If the peering is all working, then the ping will be successful, as shown below.

![Configure virtual network peering](images/azs-portal-peering-4.png)

## How to configure a Hub and Spoke topology with virtual network peering using the UKCloud Azure Stack Hub portal

The hub is a virtual network in Azure that acts as a central point of connectivity to your on-premises network. The spokes are virtual networks that peer with the hub. This central point allows you to be able to connect to one vnet to have access to every vnet connected to the hub. This is easily configured for the above setup by declaring one of the virtual networks as the 'hub', then creating another network which will peer to the 'hub' network.

This allows the hub virtual network to communicate with either of the virtual networks that are peered to it (spokes). Below is a short guide on how to add the third virtual network.

### Configuring the Hub

To configure the hub and spoke topology, all that needs to be done is declare one of the virtual networks as the hub and peer every other virtual network to it, these will be the spokes.

The virtual networks created will be the same process as [Create two virtual networks in Azure Stack Hub](#Create-two-virtual-networks-in-Azure-Stack-Hub). Just make sure all spokes are connected to one central virtual network
