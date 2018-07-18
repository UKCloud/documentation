---
title: How to find your allocated external IP addresses | UKCloud Ltd
description: Shows how to find your allocated external IP addresses within vCloud Director
services: vmware
author: Sue Highmoor

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create find your allocated external IP addresses
toc_fullpath: How To/vmw-how-find-ip-addresses.md
toc_mdlink: vmw-vmw-how-find-ip-addresses.md
---

# How to find your allocated external IP addresses

## Overview

To route traffic to your external network (for example internet, PSN), you need to know your  external IP addresses.

## Finding your IP addresses

To find your allocated external IP address range:

1. In vCloud Director, click the **Administration** tab.

    ![Administration tab in vCloud Director](images/vmw-vcd-tab-admin.png)

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md)

2. Double-click the virtual data centre (VDC) that you want to work with, or right-click the VDC and select **Open**.

3. Select the **Edge Gateways** tab.

    ![Edge Gateways tab](images/vmw-vcd-tab-edge-gateways.png)

4. Right-click the edge gateway and select **Properties**.

5. In the *Edge Gateway Properties* dialog box, select the **Sub-Allocate IP Pools** tab.

    ![Sub-Allocate IP Pools tab](images/vmw-vcd-tab-suballocate-ip-pools.png)

6. At the bottom of the window you'll see a box containing the range of external IP addresses allocated for your use.

    ![Allocated external IP addresses](images/vmw-vcd-allocated-ip-addresses.png)

    You'll need to know this range when you configure setting such as NAT rules.

## Next steps

In this article you've learned how to find your allocated external IP addresses. For other edge gateway configuration tasks, see:

- [*How to create firewall rules*](vmw-how-create-firewall-rules.md)
- [*How to create NAT rules*](vmw-how-create-nat-rules.md)
- [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md)
- [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md)
- [*How to configure a load balancer*](vmw-how-configure-load-balancer.md)
- [*How to create a static route*](vmw-how-create-static-route.md)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.