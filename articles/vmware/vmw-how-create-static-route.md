---
title: How to create a static route | UKCloud Ltd
description: Shows how to configure static routing within vCloud Director
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 18/07/2018 12:04:00

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a static route
toc_fullpath: How To/vmw-how-create-static-route.md
toc_mdlink: vmw-how-create-static-route.md
---

# How to create a static route

## Overview

Static routing allows you to configure your edge gateway with knowledge of other networks which are not directly connected to it. It's particularly useful if you need to route between virtual data centres (VDCs) in the same vOrg, or route traffic to vApp networks. Static routing is the only option on edge gateways; dynamic routing protocols cannot be used. 

As an example, you may have a vApp network `192.168.8.0/24` routed to a VDC network called `Front end network`. You could create a static route to enable traffic to get to the outside IP of the vApp edge at `192.168.4.33` (a NAT will exist there).

> [!IMPORTANT]
> Selecting the **Default gateway is not set** in the **Applied On** list under the *Static Routing Default Gateway* section will remove all existing static routes.  However, setting a global default **Gateway IP** when it is configured with **Default gateway is not set** will retain the entries on the Static Routes tab.

## Creating a static route

To create a static route:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the edge gateway in which you to create the static route.

2. In the left navigation panel, click **Edges**.

    ![Edges menu option in vCloud Director](images/vmw-vcd-mnu-edges.png)

3. Select the edge that you want to configure and click **Configure Services**.

    ![Configure Services button](images/vmw-vcd-edge-btn-config.png)

4. Select the **Routing** tab then the **Static Routes** tab.

    ![Routing tab](images/vmw-vcd-edge-tab-static-route.png)

5. Click the **+** button.

    ![Add static route button](images/vmw-vcd-adv-edg-btn-add-static-route.png)

6. In the *Add Static Route* dialog box, fill in the details of the network range, next hop (edge IP) and select the network interface to which you want to apply the static route.

    ![Add Static Route dialog box](images/vmw-vcd-adv-edg-add-static-route.png)

7. When you're done, click **Keep** then **Save changes**.

8. Repeat the steps for the second VDC.

## Next steps

In this article you've learned how to create a static route. For other edge gateway configuration tasks, see:

- [*How to create firewall rules*](vmw-how-create-firewall-rules.md)

- [*How to create NAT rules*](vmw-how-create-nat-rules.md)

- [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md)

- [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md)

- [*How to configure a load balancer*](vmw-how-configure-load-balancer.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
