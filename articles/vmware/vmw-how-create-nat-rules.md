---
title: How to create NAT rules
description: Shows how to configure network address translation within the VMware Cloud Director tenant portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 07/10/2021

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create NAT rules
toc_fullpath: How To/vmw-how-create-nat-rules.md
toc_mdlink: vmw-how-create-nat-rules.md
---

# How to create NAT rules

## Overview

Network address translation (NAT) allows the source or destination IP address to be changed to enable traffic to transition through a router or gateway.

You can use three types of NAT within your edge gateway:

- [Destination NAT (DNAT)](#creating-a-dnat-rule) - changes the destination IP of the packet

- [Source NAT (SNAT)](#creating-an-snat-rule) - changes the source IP of the packet

- [NAT64](#creating-a-nat64-rule) - allows access from IPv6 networks to IPv4 networks

For a virtual machine (VM) to access an external network resource from its virtual data centre (VDC), the IP address of its network needs to NAT to one of the following:

- The public internet IP addresses provided by UKCloud

- The private transit networks provided by UKCloud for PSN and HSCN connectivity

It's worth noting that, for both DNAT and SNAT, the NAT rule will be applied to the edge gateway, rather than to the internal VDC network

> [!NOTE]
> NAT rules only work if the firewall is enabled. For security reasons, you should ensure that the firewall is always enabled.

## Creating a DNAT rule

DNAT changes the destination IP address of a packet and performs the reverse function for any replies. You can use DNAT to publish a service located in a private network on a public IP address.

To create a DNAT rule:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway in which you want to create the DNAT rule.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-edges.png)

3. On the *Edge Gateways* page, select the edge that you want to configure and click **Services**.

    ![Services button](images/vmw-vcd10.1-edge-btn-services.png)

4. On the *Edge Gateway* page, select the **NAT** tab.

    ![NAT tab](images/vmw-vcd10.1-edge-tab-nat.png)

5. In the *NAT44 Rules* section, click the **DNAT Rule** button.

    ![Add DNAT Rule button](images/vmw-vcd10.1-btn-add-dnat.png)

6. In the *Add DNAT Rule* dialog box, from the **Applied On** list, select the interface on which to apply the rule.

    Unless you have special requirements, this will be the external network (usually named nti\* or nft\*).

7. Enter an **Original IP/Range** and a **Translated IP/Range**.

8. Select the **Protocol**, **Original Port** and **Translated Port**.

9. Make sure the **Enabled** option is selected.

10. If you have a syslog server configured, select the **Enable logging** option.

    For more information about syslog servers, see [*How to access syslog data for your edge gateway*](vmw-how-access-syslog-data-adv.md).

    ![Add DNAT Rule dialog box](images/vmw-vcd10.1-add-dnat.png)

11. When you're done, click **Keep**.

12. Add more NAT rules as required, then click **Save changes**.

## Creating an SNAT rule

SNAT changes the source IP address of a packet and performs the reverse function for any replies.

When connecting to an external network, such as the internet, to access services (for example, DNS), you need to define an SNAT rule to translate your internal addresses into something available on the external network (for example, PSN or internet).

To create an SNAT rule:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway in which you want to create the SNAT rule.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-edges.png)

3. On the *Edge Gateways* page, select the edge that you want to configure and click **Services**.

    ![Services button](images/vmw-vcd10.1-edge-btn-services.png)

4. On the *Edge Gateway* page, select the **NAT** tab.

    ![NAT tab](images/vmw-vcd10.1-edge-tab-nat.png)

5. In the *NAT44 Rules* section, click the **SNAT Rule** button.

    ![Add SNAT Rule button](images/vmw-vcd10.1-btn-add-snat.png)

6. In the *Add SNAT Rule* dialog box, from the **Applied On** list, select the interface on which to apply the rule.

    Unless you have special requirements, this will be the external network (usually named nti\* or nft\*).

7. Enter an **Original Source IP/Range** and a **Translated Source IP/Range**.

8. Make sure the **Enabled** option is selected.

9. If you have a syslog server configured, select the **Enable logging** option.

    For more information about syslog servers, see [*How to access syslog data for your edge gateway*](vmw-how-access-syslog-data-adv.md).

    ![Add SNAT Rule dialog box](images/vmw-vcd10.1-add-snat.png)

10. When you're done, click **Keep**

11. Add more NAT rules as required, then click **Save changes**.

## Creating a NAT64 rule

If you have an IPv6 network and need to communicate to an IPv4 network, you'll need to translate IP addresses to enable that communication.

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the edge gateway in which you want to create the NAT64 rule.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-edges.png)

3. On the *Edge Gateways* page, select the edge that you want to configure and click **Services**.

    ![Services button](images/vmw-vcd10.1-edge-btn-services.png)

4. On the *Edge Gateway* page, select the **NAT** tab.

    ![NAT tab](images/vmw-vcd10.1-edge-tab-nat.png)

5. In the *NAT64 Rules* section, click the **NAT64 Rule** button.

    ![Add NAT64 Rule button](images/vmw-vcd10.1-btn-add-nat64.png)

6. In the *Add NAT64 Rule* dialog box, in the **Match Ipv6 Destination Prefix** field, enter the IPv6 address to use to translate IPv6 destinations to IPv4 destinations.

7. In the **Translated Ipv4 Source Prefix** field, enter the IPv4 address to use to translate IPv6 source addresses into IPv4 source addresses.

8. Make sure the **Enabled** option is selected.

9. If you have a syslog server configured, select the **Enable logging** option.

    For more information about syslog servers, see [*How to access syslog data for your edge gateway*](vmw-how-access-syslog-data-adv.md).

    ![Add NAT64 Rule dialog box](images/vmw-vcd10.1-add-nat64.png)

10. When you're done, click **Keep** then **Save changes**.

## Next steps

In this article you've learned how to create DNAT and SNAT rules. For other edge gateway configuration tasks, see:

- [*How to create firewall rules*](vmw-how-create-firewall-rules.md)

- [*How to create a DHCP pool*](vmw-how-create-dhcp-pool.md)

- [*How to configure IPsec VPN*](vmw-how-configure-ipsec-vpn.md)

- [*How to configure a load balancer*](vmw-how-configure-load-balancer.md)

- [*How to create a static route*](vmw-how-create-static-route.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
