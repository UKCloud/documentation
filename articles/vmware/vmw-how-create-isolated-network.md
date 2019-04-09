---
title: How to create an isolated VDC network | UKCloud Ltd
description: Shows how to create an isolated VDC network within vCloud Director
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 18/07/2018 12:04:00

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create an isolated VDC network
toc_fullpath: How To/vmw-how-create-isolated-network.md
toc_mdlink: vmw-how-create-isolated-network.md
---

# How to create an isolated VDC network

## Overview

An organisation virtual data centre network enables its virtual machines (VMs) to communicate with each other or to provide access to external networks. A single VDC can have multiple networks.

There are two network flavours, isolated and routed:

- An isolated (internally connected) network is one that only VMs within the VDC can connect to. This guide describes how to create an isolated VDC network.

- A routed network (externally connected) provides access to machines and networks outside the VDC via the edge gateway. You can have up to nine usable routed networks per VDC. Creation of routed networks is described in [*How to create a routed VDC network*](vmw-how-create-routed-network.md).

The steps for creating an isolated VDC network depend on the version of vCloud Director available in your environment:

- [vCloud Director 8.20](#creating-an-isolated-vdc-network-vcloud-director-820)

- [vCloud Director 9.1](#creating-an-isolated-vdc-network-vcloud-director-91)

## Creating an isolated VDC network (vCloud Director 8.20)

1. In vCloud Director, click the **Administration** tab.

    ![Administration tab in vCloud Director](images/vmw-vcd-tab-admin.png)

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md)

2. Double-click the virtual data centre (VDC) that you want to work with, or right-click the VDC and select **Open**.

3. Select the **Org VDC Networks** tab.

    ![Org VDC Networks tab in vCloud Director](images/vmw-vcd-tab-vdc-networks.png)

4. Click the green **+** icon (or right-click an empty row and select **Add Network**).

5. Select the option to **Create an isolated network**.

    ![Isolated network option](images/vmw-vcd-admin-isolated-network-select.png)

6. Click **Next**.

7. In the *Configure Network* page, create a network **Gateway address** and **Network mask**, and add a **DNS** if possible.

    ![Network settings for routed VDC network](images/vmw-vcd-admin-vdc-network-gateway.png)

8. The **Static IP pool** is similar to DHCP in the sense that it's a range of IP addresses to be consumed by the VMs connecting to the network. When a VM is configured it will have a static manual or a static IP pool address assigned to it.

    - For static manual, enter the address manually. This must be a valid address for the pool.     The VM will keep this address for as long as it exists.

    - For static IP pool, enter a range of addresses. A free address from the IP pool will be allocated to the machine automatically.

    As an example, if you give the gateway address as `192.168.1.1`, you may then want to give a static IP pool of `192.168.1.10` to `192.168.1.100`. This will give you a pool of 91 IP  addresses to assign to machines within your network. You can always increase this later if needed.

    ![IP pool for routed network](images/vmw-vcd-admin-vdc-network-ip.png)

9. Click **Next**.

10. Give the network a **Name** and **Description**.

11. If you want to make the network shareable with other VDCs, select the **Share this network** check box.

12. Click **Next** to review your settings, and then click **Finish**.You\'ll then need to create a network gateway address and network mask.

## Creating an isolated VDC network (vCloud Director 9.1)

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC in which you want to create the network.

2. In the left navigation panel, select **Networks**.

    ![Network tab in vCloud Director](images/vmw-vcd91-tab-network.png)

3. Click the **Add** button.

    ![Add network button](images/vmw-vcd91-btn-add-network.png)

4. In the *Add Org VDC Network* dialog box, from the **Type** radio buttons, select **Isolated network within this Virtual Data Center**.

    ![Add Org VDC Network dialog box with Isolated network selected](images/vmw-vcd91-add-network-isolated.png)

5. Confirm that you're creating the network in the correct **Org VDC**.

6. Enter a **Name** and **Description** for the network.

7. If you want to make the network shareable with other VDCs, select the **Share this network with other VDCs in this organization** check box.

8. Create a network **Gateway address** and **Network mask**, and add a **DNS** if possible.

9. The **Static IP Pool** is similar to DHCP in the sense that it's a range of IP addresses to be consumed by the VMs connecting to the network. When a VM is configured it will have a static manual or a static IP pool address assigned to it.

    - For static manual, enter the address manually. This must be a valid address for the pool. The VM will keep this address for as long as it exists.

    - For static IP pool, enter a range of addresses. A free address from the IP pool will be allocated to the machine automatically.

    As an example, if you give the gateway address as `192.168.1.1`, you may then want to create a **Static IP Pool** of `192.168.1.10-192.168.1.100`. This will give you a pool of 91 IP addresses to assign to machines within your network. You can always increase this later if needed.

    ![Static IP Pool](images/vmw-vcd91-network-ip-pool.png)

    Click **Add** to create the static pool.

10. When you're done, click **Save**.

## Next steps

Now you've created your network to connect your VDC with the outside world, may want to configure your edge gateway to control what traffic is allowed into and out of your VDC. You may also wan to start building some VMs. For a quick guide on how to do this, see [*How to build a virtual machine with UKCloud for VMware*](vmw-how-build-vm.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
