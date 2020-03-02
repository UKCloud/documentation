---
title: How to create a routed VDC network
description: Shows how to create a routed VDC network within vCloud Director
services: vmware
author: Sue Highmoor
reviewer: lthangarajah
lastreviewed: 21/06/2019

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a routed VDC network
toc_fullpath: How To/vmw-how-create-routed-network.md
toc_mdlink: vmw-how-create-routed-network.md
---

# How to create a routed VDC network

## Overview

An organisation virtual data centre network enables its virtual machines (VMs) to communicate with each other or to provide access to external networks. A single VDC can have multiple networks.

There are two network flavours, isolated and routed:

- An isolated (internally connected) network is one that only VMs within the VDC can connect to. Creation of isolated networks is described in [*How to create an isolated VDC network*](vmw-how-create-isolated-network.md).

- A routed network (externally connected) provides access to machines and networks outside the VDC via the edge gateway. You can have up to nine usable routed networks per VDC. This guide describes how to create a routed VDC network.

The steps for creating a routed VDC network depend on the version of vCloud Director available in your environment.

## [vCloud Director 9.7](#tab/tabid-1)

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC in which you want to create the network.

2. In the left navigation panel, select **Networks**.

    ![Networks tab in vCloud Director](images/vmw-vcd-tab-networks.png)

3. Click **Add**.

    ![Add network button](images/vmw-vcd-btn-add-network.png)

4. In the *Network Type* page of the *New Organization VDC Network* dialog box, select **Routed** then click **Next**.

    ![New Organization VDC Network dialog box - Network Type - Routed](images/vmw-vcd-add-network-routed-type.png)

5. In the *General* page, enter a **Name** and **Description** for the network.

6. In the **Gateway CIDR** field, the gateway address for the network.

7. Select the **Shared** option to make the network available to other VDCs within the same region.

    ![New Organization VDC Network dialog box - General](images/vmw-vcd-add-network-general.png)

8. Click **Next**.

9. On the *Edge Connection* page, select the edge gateway that you want your network to connect to then click **Next**.

    ![New Organization VDC Network dialog box - Edge Connection](images/vmw-vcd-add-network-routed-edge.png)

10. In the **Static IP Pools** field, enter a range of addresses to be consumed by the VMs connecting to the network, then click **Add**.

    As an example, if you give the gateway address as `192.168.1.1/24`, you may then want to create a **Static IP Pool** of `192.168.1.10-192.168.1.100`. This will give you a pool of 91 IP addresses to assign to machines within your network. You can always increase this later if needed.

    You can add multiple IP pools.

    ![New Organization VDC Network dialog box - Static IP Pools](images/vmw-vcd-add-network-ip-pool.png)

11. In the *DNS* page, enter DNS information if possible then click **Next**.

    ![New Organization VDC Network dialog box - DNS](images/vmw-vcd-add-network-dns.png)

12. On the *Ready to Complete* page, review your selections then click **Finish**.

## [vCloud Director 9.1](#tab/tabid-2)

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC in which you want to create the network.

2. In the left navigation panel, select **Network**.

    ![Network tab in vCloud Director](images/vmw-vcd91-tab-network.png)

3. Click the **Add** button.

    ![Add network button](images/vmw-vcd91-btn-add-network.png)

4. In the *Add Org VDC Network* dialog box, from the **Type** radio buttons, select **Routed network connecting to an existing edge gateway**.

    ![Add Org VDC Network dialog box with Routed network selected](images/vmw-vcd91-add-network-routed.png)

5. Confirm that you're creating the network in the correct **Org VDC**.

6. Enter a **Name** and **Description** for the network.

7. If you want to make the network shareable with other VDCs, select the **Share this network with other VDCs in this organization** check box.

8. Select the **Edge Gateway** that you want your network to connect to.

9. Create a network **Gateway address** and **Network mask**, and add a **DNS** if possible.

10. The **Static IP Pool** is similar to DHCP in the sense that it's a range of IP addresses to be consumed by the VMs connecting to the network.

    In the Static IP Pool field, enter a range of addresses to be consumed by the VMs connecting to the network, then click **Add**.

    As an example, if you give the gateway address as `192.168.1.1`, you may then want to create a **Static IP Pool** of `192.168.1.10-192.168.1.100`. This will give you a pool of 91 IP addresses to assign to machines within your network. You can always increase this later if needed.

    ![Static IP Pool](images/vmw-vcd91-network-ip-pool.png)

11. When you're done, click **Save**.

***

## Next steps

Now you've created your network to connect your VDC with the outside world, may want to configure your edge gateway to control what traffic is allowed into and out of your VDC. You may also wan to start building some VMs. For a quick guide on how to do this, see [*How to build a virtual machine with UKCloud for VMware*](vmw-gs-build-vm-vcd.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
