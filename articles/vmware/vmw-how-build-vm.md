---
title: How to build a virtual machine with UKCloud for VMware (vCloud Director 8.20) | UKCloud Ltd
description: Describes how to get up and running with UKCloud for VMware by showing you how to use vCloud Director 8.20 to quickly spin up a virtual machine from scratch and connect it to the internet (Assured OFFICIAL security domain only)
services: vmware
author: Sue Highmoor

toc_rootlink: Getting Started
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Build a virtual machine (vCloud Director 8.20)
toc_fullpath: Getting Started/vmw-how-build-vm.md
toc_mdlink: vmw-how-build-vm.md
---

# How to build a virtual machine with UKCloud for VMware (vCloud Director 8.20)

## Overview

This guide leads you through the three basic steps for using UKCloud for VMware to quickly build a simple virtual machine (VM) in vCloud Director 8.20, and connect it to the internet.

For more information about how to use other vCloud Director functions to make the most of UKCloud for VMware and create more complex virtual data centres (VDCs), take a look at the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md).

The three steps covered in this guide are:

1. Create a network (to move requests around your VMs)
2. Configure the edge gateway (in this guide we focus on the firewall and NAT configuration)
3. Create a virtual machine

If you follow these steps, you can have a VM up and running with a connection to the internet in about 20 to 25 minutes.

> [!NOTE]
> The steps in this guide are for vCloud Director 8.20. If your environment uses vCloud Director 9.1, see [here](vmw-gs-build-vm-vcd91.md).

## Before you begin

You should have received your UKCloud Portal login credentials from your Portal administrator.

You should have created a VDC, compute service and edge gateway within your account. For more information, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md).

The steps in this guide assume that you've converted your edge gateway to an advanced edge. For more information, see [*Converting your edge gateway*](vmw-how-convert-edge.md)

We recommend that you use the Mozilla Firefox ESR browser as this is supported by the Web Console for the version of vCloud Director used by UKCloud for VMware. For more information, see [*Browser requirements for services on the UKCloud Platform*](../other/other-ref-browsers.md).

## Create a network

Before you can start building VMs in your VDC, you need to create the network that connects the VMs to each other and the outside world.

First, you need to create a network that can connect to external networks outside your VDC (including the internet). This is called an *external routed network*.

1. Log in to the UKCloud Portal.

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)

2. Select your account.

3. In the Portal navigation panel, expand **VMware Cloud** and then select the compute service in which you want to create your VM.

4. On the **vCloud Director** tab, enter your password and click **Confirm**.

    ![vCloud Director tab in UKCloud Portal](images/vmw-portal-vcd-login.png)

5. In vCloud Director, select the **Administration** tab.

    ![Administration tab in vCloud Director](images/vmw-vcd-tab-admin.png)

6. Double-click your VDC (or right-click the VDC and choose **Open**).

7. You're creating a network, so select the **Org VDC Networks** tab.

    ![Org VDC Networks tab](images/vmw-vcd-tab-vdc-networks.png)

8. To create a new network, click the green **+** icon (or right-click an empty row and choose **Add Network**) to open the *New Organization VDC Network* dialog box.

9. You want your VM to connect to the internet (rather than just other VMs in the same VDC), so in the *Select Network Type* page, choose the **routed network** option.

    ![Routed network option](images/vmw-vcd-admin-routed-network-select.png)

10. When you connect a network to the outside world, it's important that you control exactly what can access your environment via that network. The UKCloud platform provides each VDC with an edge gateway to do this, so select the edge that you want your new network to use and then click **Next** (we'll work more with the edge gateway later on).

    ![Select edge gateway](images/vmw-vcd-admin-routed-network-edge.png)

11. In the *Configure Network* page, enter the details for the **Gateway address**, **Network mask** and **Primary DNS**.

    The example below uses `192.168.1.1` for the gateway, `255.255.255.0` for the mask and `8.8.8.8` for the DNS.

    ![Network settings for routed VDC network](images/vmw-vcd-admin-vdc-network-gateway.png)

12. A VM needs an IP address to identify it on the network. Use the **Static IP pool** field to identify the IP addresses that VMs connecting to this network can use. You can specify either individual IP addresses (static manual) or a range of IP addresses (static IP pool):

    - For static manual, for each IP address that you want to use, enter the IP address and click **Add**. For example, if your default gateway is `192.168.1.1`, you can use `192.168.1.2` as a static manual IP address. Continue adding IP addresses as necessary.

    - For static IP pool, enter the range of IP addresses to use and click **Add**. For example, if your default gateway is `192.168.1.1`, you can use the `192.168.1.10-192.168.1.100` range for your static IP pool, giving 91 usable internal IP addresses.

    ![IP pool for routed network](images/vmw-vcd-admin-vdc-network-ip.png)

13. Click **Next**.

14. Give the network a **Name** and **Description**.

15. You can make your network available to your other VDCs within the same region so that VMs can communicate with each other, regardless of which VDC they are in. For example, you may have a single repository server that provides updates for all the VMs in a region.

    For the purposes of this exercise, leave the **Share this network** option empty.

16. Click **Next** to review your settings, and then click **Finish**.

    You can find more information about routed networks in [*How to create a routed VDC network*](vmw-how-create-routed-network.md).

## Configure the edge gateway

The edge gateway is possibly the most complex part of the VDC because of its high level of functionality. The following exercise steps you through a quick way to configure the edge gateway to enable you to access the internet from a VM.

1. If you are not already logged in to the UKCloud, log in now and select your account.

2. In the Portal navigation panel, expand **VMware Cloud** and then select your compute service.

3. On the **vCloud Director** tab, enter your password and click **Confirm**.

4. Select the **Administration** tab.

5. Double-click your VDC (or right-click the VDC and choose **Open**).

6. This time you're working with the edge gateway, so select the **Edge Gateways** tab.

    ![Edge Gateways tab in vCloud Director](images/vmw-vcd-tab-edge-gateways.png)

7. Right-click the edge gateway you want to work with and choose **Edge Gateway Services**.

    > [!NOTE]
    > The steps that follow describe how to change the edge gateway settings for an advanced gateway.

8. Each tab in the *Edge Gateway* page provides access to a different service provided by the edge gateway. The main tabs are:

    ![Tabs on the Edge Gateway page](images/vmw-vcd-adv-edge-tabs.png)

    - **Firewall** - As well as a physical firewall, you can control which networks and ports can communicate through the edge gateway. You'll set up some firewall rules later in this exercise.

    - **DHCP** - The edge gateway can act as a DHCP server for VMs connected to Org networks connected to an edge. The DHCP tab shows DHCP information for any Org networks that have been configured with DHCP, and so acts as a centralised view. For more information, see [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md).

    - **NAT** - Network address translation, both in (DNAT) and out (SNAT) of the edge gateway. You'll set up some NAT rules later in this exercise.

    - **Routing** - You can provide static routes from the edge gateway to other networks, for example networks in other VDCs in your compute service. For more information, see [*How to create a static route*](vmw-how-create-static-route.md).

    - **Load Balancer** - The edge gateway provides simple HTTP and HTTPS load balancing using round robin. For more information, see [*How to configure a load balancer*](vmw-how-configure-load-balancer.md).

    - **VPN** - IPsec site‑to‑site VPN is available on the edge gateway. It can be configured within the vCloud user interface, but may require additional configuration through the API. For more information, see [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md).

    To access the internet from a VM, you'll need to create firewall rules to determine who can access your network and NAT rules to route traffic within your network.

9. Let's start with the firewall rules. Select the **Firewall** tab and make sure the **Enabled** option is selected.

    ![Enabled option on Firewall tab](images/vmw-vcd-adv-edge-firewall-enabled.png)

10. Click the **+** button to add a new row to the firewall rules table.

    ![Add button on Firewall tab](images/vmw-vcd-adv-edge-firewall-add.png)

11. Edit the values in the row for the **New Rule** using the settings below:

    - Name - HTTPS outbound

    - Source - `internal`

    - Destination - `external`

    - Service - Click the **+** button and enter the following values in the *Add Service* dialog box

        - Protocol - **TCP**

        - Source Port - any

        - Destination Port - 443

            ![Add Service dialog box](images/vmw-vcd-adv-edge-firewall-add-service.png)

        Click **Keep** when you're done.

    - Action - Accept

    ![New firewall rule](images/vmw-vcd-adv-edge-firewall-new-rule.png)

    These settings allow traffic from the VMs (**Source** = `internal`) to reach destinations outside your VDC (**Destination** = `external`) on port `443`. You'll need to repeat these steps for ports `80` and `53`.

    You can also allow traffic to reach your VMs from outside your VDC by swapping the **Source** and **Destination** values. However, because this opens up your firewall to a lot of traffic, we recommend that you first complete this guide to get comfortable with general networking concepts, and then take a look at the information in [*How to create firewall rules*](vmw-how-create-firewall-rules.md) where you can find out how to lock the firewall down.

12. Click **Save changes**

    ![Save changes link on Firewall tab](images/vmw-vcd-adv-edge-firewall-save.png)

13. Now that you've set up the firewall rules, you can create NAT rules, so select the **NAT** tab.

    ![NAT tab in vCloud Director](images/vmw-vcd-adv-edge-tab-nat.png)

14. Click the **+ SNAT Rule** button to create a source NAT (SNAT) rule to translate internal IP addresses into something that the external network can understand.

    ![Add SNAT Rule button](images/vmw-vcd-adv-edge-btn-snat.png)

15. In the *Add SNAT Rule* dialog box, from the **Applied on** list, choose the edge gateway to which you want to apply the SNAT rule.

16. In the **Original Source IP/Range** field, enter the range of addresses you created when you created the network in the previous exercise.

17. In the **Translated Source IP/Range** field, enter one or more of the external IP addresses provided to you by UKCloud.

    If you are not sure what your IP addresses are, see [*How to find your allocated external IP addresses*](vmw-how-find-ip-addresses.md).

    ![Add SNAT Rule dialog box](images/vmw-vcd-adv-edge-snat-add.png)

18. When you're done, click **Keep** and then **Save changes**.

    ![Save changes link on NAT tab](images/vmw-vcd-adv-edge-nat-save.png)

    You can also add destination NAT (DNAT) rules to translate external IP addresses to route traffic to the appropriate internal addresses. However, because the firewall only provides outbound access to the internet, we don't need to add DNAT rules at the moment.

    You can find more information about setting up NAT rules in [*How to create NAT rules*](vmw-how-create-nat-rules.md).

## Create a virtual machine

Now that you've laid the groundwork, it's time to create your VM. The best way to do this is to create a virtual application (vApp). You can think of a vApp as a container for your VMs&mdash;it enables you to group related VMs together to manage them in one place. See [*How to create a vApp*](vmw-how-create-vapp.md) to find out more.

1. If you are not already logged in to the UKCloud, log in now and select your account.

2. In the Portal navigation panel, expand **VMware Cloud** and then select your compute service.

3. On the **vCloud Director** tab, enter your password and click **Confirm**.

4. In this exercise, you'll create the vApp from scratch, so on the **Home** tab, click the **Build New vApp** button.

    ![Build New vApp button](images/vmw-vcd-btn-new-vapp.png)

5. In the *New vApp* dialog, give the vApp a **Name** and **Description**.

6. From the **Virtual Datacenter** list, choose your VDC.

7. For the purposes of this exercise, you can keep the default **Runtime lease** and **Storage lease**, so click **Next**.

    ![Select Name and Location tab of New vApp dialog box](images/vmw-vcd-vapp-name.png)

8. In the *Add Virtual Machines* page, you can create your VM. Add a VM from the UKCloud public catalog by choosing **Public Catalogs** from the **Look in** list.

    ![Public Catalog option](images/vmw-vcd-vapp-public-catalog.png)

9. Find and select the VM that you want to use, click the **Add** button and then click **Next**.

    You can use the filter fields to limit which VMs appear in the list and use the arrow buttons to scroll through the results.

    ![Public Catalog option](images/vmw-vcd-vapp-filter-templates.png)

10. On the *Configure Resources* page, you can change the VM name in the **Virtual Machine** field, but keep the default **Storage Policy** option. Click **Next**.

    ![Configure Resources page](images/vm-vcd-vapp-configure-resources.png)

11. On the *Configure Virtual Machines* page, from the **Network** list, select the externally routed network you created in the first exercise.

12. From the **IP Assignment** list, choose **Static -- IP Pool** to use the IP pool you defined earlier when you created your network. You also have another opportunity here to change the name of the VM (in the **Computer Name** field). Click **Next**.

    ![Configure Virtual Machines page](images/vmw-vcd-vapp-network.png)

13. You don't need to change anything on the *Configure Networking* page, so click **Next**.

    You can find out about network fencing in [*How to create a vApp network*](vmw-how-create-vapp-network.md).

14. On the *Ready to Complete* page, review your settings and then click **Finish** to start the deployment.

15. When the VM has been provisioned, right-click it and select **Power On**, then use the popout console to go through the setup procedure.

16. To confirm that you have connectivity to the internet and have an assigned IP address:

    - Type `ipconfig` into the Command Prompt. If you've configured the networking correctly, your VM will return an IP address.

    - Open an internet browser page and navigate to an external web page

    - Ping the IP address of your DNS (for example, `8.8.8.8`) through the command line.

## Next steps

In this guide, you've learned how to build a simple virtual machine and connect it to the internet.

For information about more creating complex VDCs so that you can make the most of the UKCloud compute platform, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md). This Getting Started Guide provides links to documents that describe each of the different parts of your environment in more detail.

If you want a more comprehensive guide to the platform, take a look at the [*vCloud Director Administrator's Guide*](https://docs.vmware.com/en/vCloud-Director/9.1/com.vmware.vcloud.admin.doc/GUID-3A4FBE1E-6BDB-4AE4-93F8-D23A8DCBD1F1.html).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.