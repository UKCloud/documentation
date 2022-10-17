---
title: How to find your allocated external IP addresses
description: Shows how to find your allocated external IP addresses within the VMware Cloud Director tenant portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 17/10/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Find your allocated external IP addresses
toc_fullpath: How To/vmw-how-find-ip-addresses.md
toc_mdlink: vmw-how-find-ip-addresses.md
---

# How to find your allocated external IP addresses

## Overview

To route traffic to your external network (for example the internet or PSN), you need to know your  external IP addresses.

## Finding your allocated external IP addresses

To find your allocated external IP address range:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-mnu-edges-vcd10.3.png)

3. On the *Edge Gateways* page, click the edge that you want to configure.

   ![Select edge gateway](images/vmw-edge-select.png)

4. In the left navigation bar, under *Configuration*, select **IP Allocations**.

    ![IP Allocations menu option](images/vmw-vcd10.1-mnu-edge-ips.png)

5. In the **IP Addresses** column, you'll see the range of external IP addresses allocated for your use.

    ![Allocated IP addresses](images/vmw-vcd10.1-allocated-ips.png)

    You'll need to know this range when you configure settings such as NAT rules.

## Finding your primary external IP address

For some tasks, such as configuring an IPSec VPN, you'll need to know your primary external IP address.

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-mnu-edges-vcd10.3.png)

3. On the *Edge Gateways* page, click the edge that you want to configure.

   ![Select edge gateway](images/vmw-edge-select.png)

4. Under *Configuration*, select **Gateway Interfaces**.

    ![IP Allocations menu option](images/vmw-vcd10.1-mnu-edge-gateway.png)

5. In the **Primary IP** column, you'll see your primary external IP address.

    ![Primary external IP address](images/vmw-vcd10.1-primary-ip.png)

## Next steps

In this article you've learned how to find your allocated external IP addresses. For other edge gateway configuration tasks, see:

- [*How to create firewall rules*](vmw-how-create-firewall-rules.md)

- [*How to create NAT rules*](vmw-how-create-nat-rules.md)

- [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md)

- [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md)

- [*How to configure a load balancer*](vmw-how-configure-load-balancer.md)

- [*How to create a static route*](vmw-how-create-static-route.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
