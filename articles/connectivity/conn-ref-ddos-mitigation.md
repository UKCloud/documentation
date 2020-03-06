---
title: DDoS mitigation causing VPN failures and slow applications
description: Explains how customers can reduce IPsec and MTU issues to allow packets to traverse the internet and enter the UKCloud platform
services: connectivity
author: Sue Highmoor
reviewer: caldridge
lastreviewed: 03/03/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: DDoS mitigation causing VPN failures and slow applications
toc_fullpath: Reference/conn-ref-ddos-mitigation.md
toc_mdlink: conn-ref-ddos-mitigation.md
---

# DDoS mitigation causing VPN failures and slow applications

## Overview

UKCloud utilises a hybrid solution Distributed Denial of Service (DDoS) mitigation service to help protect customers against DDoS attacks. The hybrid service comprises local DDoS mitigation appliances to mitigate smaller attacks, failing over to the cloud if attacks exceed local capacity. For more information on this specific service, see [*DDoS mitigation service FAQ*](conn-faq-ddos.md).

## Issue

Although DDoS mitigation is a valuable service, there are some considerations to be aware of that could impact your environment if not accounted for, for example by causing VPN failures or slow applications.

These may not be apparent in normal local operation of the DDoS service, but only come to light when larger attacks are mitigated via the cloud. This is because, during cloud mitigation, traffic is tunnelled, adding IP overhead. This could potentially cause packet fragmentation, resulting in the issues mentioned above.

## Recommendation

To avoid issues related to fragmentation, UKCloud recommends the following settings/protocols:

- MTU - As a proactive measure, adjust the Maximum Transmission Unit (MTU) settings of your IPsec VPN connection from the default (~1500) to a fixed value between 1350 and 1426.

  You can do this using the vCloud Director GUI or by using the vCloud Director API (for more information, see [*How to configure IPsec VPN*](../vmware/vmw-how-configure-ipsec-vpn.md) (GUI) or [*How to change IPSEC VPN settings via the vCloud Director API*](../vmware/vmw-how-change-ipsec-vpn-api.md)).

- IKE - UKCloud recommends using IKEv2, which supports fragmentation.

- Authentication method - If using certificate-based VPNs, UKCloud recommends using ECDSA over RSA. ECDSA signatures are smaller (avoiding fragmentation) and computationally more efficient.

If you're still experiencing connection issues, raise a support request via the UKCloud Portal.

## Explanation

MTU is the maximum size of data that can be sent in a single frame. It's typically set at the data link layer by the Ethernet protocol. Most devices have a default MTU size of 1500 bytes.

IP facilitates delivery across networks using IP datagrams (which encapsulate the TCP or UDP message). IP datagrams can accommodate different MTU sizes, for example, by fragmenting a datagram that is larger than the MTU into smaller packages that can then be forwarded. However, some applications may set a DF (Do not Fragment) bit, meaning that the datagram cannot be fragmented. If these packets are larger than the MTU, they are dropped.

Fragmented packets add extra overhead and can cause delay as they need to be broken up and reassembled. Also, if just one packet of the fragmented datagram is lost, the entire datagram must be retransmitted.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
