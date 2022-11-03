---
title: Internet - permitted standard ports in regions 1 and 2 
description: Shows the allow-list of standard internet ports on the UKCloud managed perimeter firewalls
services: connectivity
author: shighmoor
reviewer: tlofthouse
lastreviewed: 04/02/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Internet - permitted standard ports in regions 1 and 2
toc_fullpath: Reference/conn-ref-internet-permitted-ports.md
toc_mdlink: conn-ref-internet-permitted-ports.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Internet - permitted standard ports in regions 1 and 2

## Overview

For UKCloud regions 1 and 2, we consulted with NCSC and the Pan Government Accreditor and agreed a policy to maintain an allow-list of common ports that are open as standard on the platform, and allow interoperability between tenants in accordance with this allow-list.

You still need to enable access on your own edge gateway firewall to allow access, but this avoids having to request UKCloud to make similar changes.

> [!NOTE]
> In regions 5, 6, 13 and 14, there is no allow-list of common ports: all ports are open.

The security of your estate is your responsibility and we highly recommend that you review your edge gateway configuration, regardless of the region in which it is located, to verify that the access controls in place are in accordance with your own required security policy. We also recommend that you do not disable your firewall, even in test environments.

This allow-list policy applies to the Assured OFFICIAL security domain only, where connectivity is established using internet routable addresses and where access is to and from the internet or other customers on the UKCloud platform. Other allow-lists are maintained for other connectivity types. 

If you require access outside of the standard allow-list, you can request this via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

The following diagram shows the status of standard internet ports. The permitted ports are also listed in the sections below.

![Internet allow-list ports (regions 1 and 2)](images/conn-internet-allow-list-ports-v1_4.png)

## Inbound access from the internet to your edge gateway

### TCP ports

- SSH - 22 

- SMTP - 25

- DNS - 53

- HTTP - 80 & 8080

- HTTPS - 443, 444 & 8443

- Secure SMTP - 465 & 587

- FTPS (Data) - 989

- FTPS (Control) - 990

- IMAPS - 993

- POP3S - 995

- RDP - 3389

### UDP ports 

- DNS - 53

- OpenVPN - 1194

### VPN ports

- AH

- ESP

- IPSEC - UDP 4500 

- ISAKMP - UDP 500

## Outbound access to the internet from your edge gateway

### TCP ports

- SSH - 22

- SMTP - 25

- DNS - 53

- HTTP - 80 & 8080

- HTTPS - 443, 444 & 8443

- Secure SMTP - 465 & 587

- FTPS (Data) - 989

- FTPS (Control) - 990

- IMAPS - 993

- POP3S - 995

- Windows KMS - 1688

- OpenPGP - 11371

### UDP ports

- DNS - 53

- NTP - 123

- OpenVPN - 1194

### VPN ports

- AH

- ESP

- IPSEC - UDP 4500

- ISAKMP - UDP 500

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
