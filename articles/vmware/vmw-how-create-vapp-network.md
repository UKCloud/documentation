---
title: How to create a vApp network
description: Shows how to create an isolated VDC network within the VMware Cloud Director tenant portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 04/10/2021

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

The vApp network diagram below shows the vApp edge.

![vApp network](images/vmw-vapp-network.png)

## Creating a vApp network

> [!NOTE]
> As you're going to be changing network settings, all VMs within the vApp must be powered off.

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the vApp.

2. In the left navigation panel, select **vApps**.

    ![vApps tab in VMware Cloud Director](images/vmw-vcd10.1-tab-vapps.png)

3. In the card for the vApp, select **Actions**, then **Add Network**.

    ![Add Network menu option](images/vmw-vcd10.1-mnu-vapp-network.png)

4. In the *Add Network* dialog box, select **vApp Network**.

5. Enter a **Name** and **Description** for the network.

6. In the *Address and DNS* section, fill out the fields as required for your network.

    ![Add vApp Network option](images/vmw-vcd10.1-add-network-vapp.png)

7. When you're done, click **Add**.

## Connecting a VM to a vApp network

If your vApp is already populated with VMs that are connected to a VDC network, you may want to move them over to the vApp network.

To change the network a VM connects to:

1. In the card for the vApp, select **Details**.

2. Select **Virtual Machines**.

3. For each VM

    a. Click the VM to edit the VM properties.
  
    b. Under *Hardware*, select **NICs**.

    c. Click **Edit**.

      ![Edit NICs option](images/vmw-vcd10.1-btn-vm-nics-edit.png)
  
    d. In the *Edit NICs* dialog box, from the **Network** list, select the vApp network.

      ![VM connected to a vApp network](images/vmw-vcd10.1-vm-vapp-network.png)

4. If you want to dual-home your VM, click **New** to add a second network.

5. When you're done, click **Save**.

6. You can go back to the VM hardware properties to see the new IP address assigned to the VM.

## Viewing and adjusting vApp network settings

When you've created your vApp network and assigned VMs to it, you may want to review the vApp network settings and adjust them if needed.

1. In the left navigation panel, select **vApps**.

2. In the card for the vApp, select **Details**.

3. Select **Networks**.

4. Click your vApp network to view its network settings.

5. The *General* page displays general network settings. Click **Edit** to adjust these settings.

6. The *IP Management* pages display the IP settings for the vApp network, including **Static Pools**, **DNS** and **DHCP**. Click **Edit** on these pages to adjust these settings.

    For more information about enabling DHCP for your vApp network, see [*Enabling DHCP*](#enabling-dhcp).

7. On the *Services* page you can set up firewall and NAT rules for your vApp network. For more information, see [*Creating firewall rules*](#creating-firewall-rules) and [*Creating NAT rules*](#creating-nat-rules).

8. On the *Routing* page you can create static routes for your vApp network. For more information, see [*Creating static routes*](#creating-static-routes).

### Enabling DHCP

DHCP isn't enabled by default. For more information about DHCP, see [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md).

To enable DHCP:

1. In the left navigation panel, select **vApps**.

2. In the card for the vApp, select **Details**.

3. Select **Networks**.

4. Click your vApp network to view its network settings.

5. Under *IP Management*, select **DHCP**.

6. Click **Edit**.

    ![Edit button for vApp network DHCP](images/vmw-vcd10.1-btn-vapp-network-dhcp-edit.png)

7. In the *Edit network* dialog box, select the **Enabled** option.

8. Enter **IP Pool** and lease information for your DHCP addresses then click **Save**.

    ![Edit network settings for DHCP](images/vmw-vcd10.1-vapp-network-dhcp.png)

### Creating firewall rules

There will be a rule in place to allow any traffic to traverse the firewall. You can amend or delete this rule, or create new rules.

![vApp network firewall rules](images/vmw-vcd-vapp-network-firewall.png)

For more about firewall rules, see [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

To create a firewall rule:

1. In the left navigation panel, select **vApps**.

2. In the card for the vApp, select **Details**.

3. Select **Networks**.

4. Click your vApp network to view its network settings.

5. Select **Services**.

6. Click **Edit**.

    ![Edit button for vApp network services](images/vmw-vcd10.1-btn-vapp-network-services-edit.png)

7. On the **Firewall** tab, click **Add**, specify the details for the firewall rule then click **Save**.

    ![Add firewall rule](images/vmw-vcd10.1-vapp-network-firewall-add.png)

### Creating NAT rules

NAT rules, enabled by default, enable mapping between internal VM interfaces and external IP addresses.

For more information about NAT rules, see [*How to create NAT rules*](vmw-how-create-nat-rules.md).

To edit the NAT rules for a VM:

1. In the left navigation panel, select **vApps**.

2. In the card for the vApp, select **Details**.

3. Select **Networks**.

4. Click your vApp network to view its network settings.

5. Select **Services**.

6. Click **Edit**.

    ![Edit button for vApp network services](images/vmw-vcd10.1-btn-vapp-network-services-edit.png)

7. Select the **NAT** tab.

8. From the **NAT Type** list, select **IP Translation**, then click **Add**.

9. In the **VM Interface** field, click the edit (pencil) icon, then select the VM interface for which you want to add the NAT rule, then click **Keep**.

10. From the **Mapping Mode** list, select the mapping mode.

    The default mapping is **Automatic**. You can change this to **Manual**, in which case, enter an **External IP** address to which the VM can map.

    ![Add NAT rule](images/vmw-vcd10.1-vapp-network-nat-add.png)

11. When you're done, click **Save**.

    The external IP address will be on the same subnet as the VDC network that connects to the vApp edge.

### Creating static routes

Static routing at the vApp network level allows traffic to route between different vApp networks, across the VDC networks.

The prerequisites for static routing are as follows:

- Static routing must be enabled for the VDC network you're connecting to (see [*How to create a static route*](vmw-how-create-static-route.md)).

- The two vApp networks must be routed to the same VDC network.

- The vApp networks must be in vApps that have been started at least once.

To add a static route:

1. In the left navigation panel, select **vApps**.

2. In the card for the vApp, select **Details**.

3. Select **Networks**.

4. Click the first vApp network to view its network settings.

5. Select **Routing**.

6. Click **Edit**.

    ![Edit Static Routing option](images/vmw-vcd10.1-btn-vapp-network-static-route-enable.png)

7. In the *Edit Static Routing Service* dialog box, select the **Enable Static Routing** option then click **Save**.

    ![Edit Static Routing Service dialog box](images/vmw-vcd10.1-vapp-network-static-routing.png)

8. Click **Add**.

    ![Add button for vApp network static route](images/vmw-vcd10.1-btn-vapp-network-static-route-add.png)

9. In the *Add Static Route* dialog box, enter a **Name** for the static route.

10. Enter the following details:

    - **Network CIDR** - The address of the first vApp network to which you're adding a static route

    - **Next Hop IP** - The external IP address of that vApp network's router

    ![Add Static Route dialog box](images/vmw-vcd10.1-vapp-network-static-route.png)

11. When you're done, click **Save**.

12. Repeat for the second vApp network.

#### Examples

The tables below provides examples of the settings needed to create a static route between two vApps.

##### Network information

Network name       | Network specification | Router external IP address
-------------------|-----------------------|---------------------------
vApp network 1     | `192.168.1.0/24`      | `192.168.0.100`
vApp network 2     | `192.168.2.0/24`      | `192.168.0.101`
VDC network shared | `192.168.0.0/24`      | N/A

##### Static routing settings

Static route to network | Route name | Network          | Next hop IP address
------------------------|------------|------------------|--------------------
vApp network 1          | To-vapp1   | `192.168.1.0/24` | `192.168.0.100`
vApp network 2          | To-vapp2   | `192.168.2.0/24` | `192.168.0.101`

> [!NOTE]
> Make sure your firewall rules allow traffic on the static routes.

## Related articles

- [*How to create a vApp*](vmw-how-create-vapp.md)

- [*How to apply vApp fencing*](vmw-how-apply-vapp-fencing.md)

- [*How to migrate vApps between virtual data centres*](vmw-how-migrate-vapp.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
