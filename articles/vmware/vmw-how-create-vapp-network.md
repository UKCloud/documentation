---
title: How to create a vApp network | UKCloud Ltd
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
toc_title: Create a vApp network
toc_fullpath: How To/vmw-how-create-vapp-network.md
toc_mdlink: vmw-how-create-vapp-network.md
---

# How to create a vApp network

## Overview

In addition to virtual data centre (VDC) networking, you can create individual vApp networks to have even greater control over your network infrastructure.

vApp networks enable you to create smaller networks within individual vApps that have a vApp edge, similar to the edge gateway on your VDC. Although a vApp edge isn't as feature rich as a VDC edge, it enables you to create firewall and NAT rules to separate your VDC networks from your vApp virtual machines (VMs). This means you can create some quite complex networks to satisfy application needs.

The example of a vApp network, below, shows the vApp edge.

![vApp network](images/vmw-vapp-network.png)

> [!NOTE]
> You cannot create vApp networks in the vCloud Director 9.1 tenant portal. If your environment uses vCloud Director 9.1, you must first switch to the vCloud Director web console. For more information, see [*How to switch to the vCloud Director web console from the tenant portal*](vmw-how-switch-web-console.md).

## Creating a vApp network

> [!NOTE]
> As you're going to be changing network settings, all VMs within the vApp must be powered off.

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains your vApp.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md).

2. In the left navigation panel, select **vApps**.

    ![vApps tab in vCloud Director](images/vmw-vcd-tab-vapps.png)

3. In the card for your vApp, select **Actions**, then **Add network**.

    ![Add network menu option](images/vmw-vcd-mnu-vapp-network.png)

4. In the *Add Network* dialog box, select **vApp Network**.

    ![Add vApp Network option](images/vmw-vcd-add-network-vapp.png)

5. Enter a **Name** and **Description** for the network.

6. In the *Address and DNS* section, fill out the fields as required for your network.

7. To connect the vApp network to an external VDC network, select the **Connect to an orgVdc network** option then select the VDC network that you want to connect to.

8. When you're done, click **Add**.

9. Something about NAT and firewall rules?

10. If your vApp is already populated with VMs that are connected to a VDC network, you may want to move them over to the vApp network.

    1. To change the network a VM connects to, in the card for the vApp, select **Details**.

    2. Click each VM and in the *Hardware* section select the vApp network from the **Network** list.

    3. If you want to dual-home your VM, click the **Add** button to add a second network.

    4. When you're done, click **Save**.

    5. You can go back to the VM Hardware properties to see the new IP address assigned to the VM.

## Viewing and adjusting vApp network settings

When you've created your vApp network and assigned VMs to it, you may want to review the vApp network settings and adjust them if needed.

1. In the left navigation panel, select **vApps**.

2. Select the **Networks** tab.

3. Click your vApp network to view its network settings.

4. The **General** tab displays general network settings. Click **Edit** to adjust these settings.

5. The **IP Management** tab displays the IP settings for the network, including static pool and DNS. Click **Edit** to adjust these settings.

### Enabling DHCP

DHCP isn't enabled by default. To enable it, in the **DHCP** section of the network **IP Management** tab, select **Edit** in the **DHCP Pools Service** row, select the **Enable DHCP Pools Service** option then click **Save**.

![DHCP Pools Service dialog box](images/vmw-vcd-network-enable-dhcp.png)

For more information about DHCP, see [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md).

### Creating firewall rules

There will be a rule in place to allow any traffic to traverse the firewall. You can amend or delete this rule, or create new rules.

![Firewall page of Configure Services dialog box](images/vmw-vcd-vapp-configure-services-firewall.png)

On the *Firewall* page of the *Configure Services* dialog box, select the rule you want to edit, then click **Edit**

For more about firewall rules, see [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

### Creating NAT rules

NAT rules, enabled by default, enable mapping between internal VM interfaces and external IP addresses. To edit the mapping rules for a VM:

1. On the *NAT* page of the *Configure Services* dialog box, select the rule you want to edit and click **Edit**.

    ![NAT page of Configure Services dialog box](images/vmw-vcd-vapp-configure-services-nat.png)

2. In the *Edit IP Translation Rule* dialog box, select the VM interface for which you want to edit the NAT rule.

3. From the **Mapping Mode** list, select the mapping mode.

    The default mapping is **Automatic**. You can change this to **Manual**, in which case, enter an **External IP** address to which the VM can map.

4. When you're done, click **OK**.

    The external IP address will be on the same subnet as the VDC network that connects to the vApp Edge.

    ![Edit IP Translation Rule dialog box](images/vmw-vcd-vapp-ip-translation-rule.png)

For more information about NAT rules, see [*How to create NAT rules*](vmw-how-create-nat-rules.md).

### Creating static routes

Static routing at the vApp network level allows traffic to route between different vApp networks, across the VDC networks.

The prerequisites for static routing are as follows:

- Static routing must be enabled for the VDC network you're connecting to (see [*How to create a static route*](vmw-how-create-static-route.md)).

- The two vApp networks must be routed to the same VDC network.

- The vApp networks must be in vApps that have been started at least once.

To add a static route:

1. On the *Static Routing* page of the *Configure Services* dialog box, click **Add**

2. In the *Add Static Route* dialog box, enter a **Name** for the static route.

3. Enter the following details:

    - **Network** - The address of the first vApp network to which you're adding a static route

    - **Next Hop IP** - The external IP address of that vApp network's router

    ![Add Static Route dialog box](images/vmw-vcd-vapp-static-route.png)

4. When you're done, click **OK**.

5. Repeat for the second vApp network.

The tables below provides examples of the settings needed to create a static route between two vApps.

#### Network Information

Network name | Network specification | Router external IP address
-------------|-----------------------|---------------------------
vApp network 1 | `192.168.1.0/24` | `192.168.0.100`
vApp network 2 | `192.168.2.0/24` | `192.168.0.101`
VDC network shared | `192.168.0.0/24` | N/A

#### Static routing settings

Static route to network | Route name | Network | Next hop IP address
------------------------|------------|---------|--------------------
vApp network 1 | To-vapp1 | `192.168.1.0/24` | `192.168.0.100`
vApp network 2 | To-vapp2 | `192.168.2.0/24` | `192.168.0.101`

> [!NOTE]
> Make sure your firewall rules allow traffic on the static routes.

## vApp fencing

Fencing a vApp allows identical VMs within different vApps to be powered on without conflict, by isolating the MAC and IP addresses of the VMs. This feature is particularly useful if you are copying vApps or creating catalog images of vApps where these details can't be altered.

vApp fencing can be done during or after vApp creation. It is done when the VMs within the vApp sit on the VDC network, rather than on their own vApp network.

To apply vApp fencing during vApp creation, select the **Fence vApp** check box on the *Configure Networking* page of the *New vApp* wizard.

![Fence vApp check box in New vApp wizard](images/vmw-vcd-vapp-fence-new.png)

If you're converting a vApp after creation, on the **My Cloud** tab, open the vApp you want to fence, then, on the **Networking** tab, select the **Fence vApp** checkbox. Make sure you click **Apply** when you're done to save any changes.

![Fence vApp check box on vApp Networking tab](images/vmw-vcd-vapp-fence-convert.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
