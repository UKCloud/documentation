---
title: How to configure a load balancer
description: Shows how to configure a load balancer within vCloud Director
services: vmware
author: Sue Highmoor
reviewer: lthangarajah
lastreviewed: 21/06/2019

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure a load balancer
toc_fullpath: How To/vmw-how-configure-load-balancer.md
toc_mdlink: vmw-how-configure-load-balancer.md
---

# How to configure a load balancer

## Overview

One of the functions of the edge gateway is to act as a basic Layer 3 load balancer, distributing IP traffic to a pool of servers while appearing as a single virtual server. The load balancing methods offered are round-robin, IP hash, URI, HTTP header or least connected.

Bear in mind, however, that the edge gateway load balancer is quite basic. If you need to meet more complex requirements, you'll need provide your own third-party virtual load balancer.

## Configuring a load balancer

To configure a load balancer:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains the edge gateway in which you to configure the load balancer.

2. In the left navigation panel, click **Edges**.

    ![Edges menu option in vCloud Director](images/vmw-vcd91-mnu-edges.png)

3. Select the edge that you want to configure and click **Configure Services**.

    ![Configure Services button](images/vmw-vcd-edge-btn-config.png)

4. Select the **Load Balancer** tab.

    ![Load Balancer tab](images/vmw-vcd-adv-edge-tab-load-balancer.png)

5. On the **Global Configuration** tab, enable the **Enabled** option.

6. If you have a syslog server configured, enable the **Enable Logging** option.

    For more information about syslog servers, see [*How to access syslog data for your advanced gateway*](vmw-how-access-syslog-data-adv.md)

7. Click **Save changes**.

### Configuring a pool server

Pool servers are the real servers that will be masked by the load balancer.

> [!NOTE]
> Before you configure the pool of servers, make a list of their IP addresses so that you can populate the pool later in the procedure.

1. Select the **Pools** tab.

    ![Pools tab](images/vmw-vcd-adv-edge-tab-load-balancer-pools.png)

2. Click the **+** button.

    ![Add pool button](images/vmw-vcd-load-balancer-btn-add-pool-adv.png)

3. In the *Add Pool* dialog box, enter a **Name** and **Description**.

    > [!NOTE]
    > The pool name should not include any spaces.

4. From the **Algorithm** list, select the load balancing algorithm to use.

5. From the **Monitors** list, select the monitors policy.

6. Enable the **Transparent** option if you want IP addresses to be transparent.

    ![Add Pool dialog box](images/vmw-vcd-adv-edge-load-balancer-add-pool.png)

7. In the *Members* section, click **+**.

    ![Add member button](images/vmw-vcd-load-balancer-btn-add-member-adv.png)

8. In the *Add Member* dialog box, in the **Name** field, enter the server **Name**, **IP Address**, **Port** and **Weight**. When you're done, click **Keep**.

    ![Add Member dialog box](images/vmw-vcd-load-balancer-add-member-adv.png)

9. Add more pool members as required and when you're done, click **Keep**.

10. To view the status of pool members, click **Show Pool Statistics**.

    ![Show Pool Statistics button](images/vmw-vcd-adv-edge-load-balancer-pool-stats.png)

### Configuring a virtual server

A virtual server masks the pool of real servers and presents a single IP address.

1. Select the **Virtual Servers** tab.

    ![Virtual Servers tab](images/vmw-vcd-adv-edge-tab-load-balancer-servers.png)

2. Click the **+** button.

    ![Add virtual server button](images/vmw-vcd-load-balancer-btn-add-server-adv.png)

3. In the *Add Virtual Server* dialog box, enable the **Enable Virtual Server** option.

4. Enter a **Name** for the virtual server, assign it a virtual **IP Address**, and assign it to the server pool you want to mask. You can also choose which services you want to apply to the virtual server. When you're done, click **Keep**.

    ![Add Virtual Server dialog box](images/vmw-vcd-load-balancer-add-virtual-server-adv.png)

## Next steps

In this article you've learned how to create firewall rules. For other edge gateway configuration tasks, see:

- [*How to create firewall rules*](vmw-how-create-firewall-rules.md)

- [*How to create NAT rules*](vmw-how-create-nat-rules.md)

- [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md)

- [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md)

- [*How to create a static route*](vmw-how-create-static-route.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
