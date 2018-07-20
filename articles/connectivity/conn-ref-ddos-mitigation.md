---
title: DDoS mitigation causing VPN failures and slow applications | UKCloud Ltd
description: Explains how customers can reduce IPsec and MTU issues to allow packets to traverse the internet and enter the UKCloud platform
services: connectivity
author: Sue Highmoor
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

Although DDoS mitigation is a valuable service, there are some considerations to be aware of that could impact your environment if not accounted for, for example by causing VPN failures or slow applications. These may not be apparent in normal local operation of the DDoS service, but only come to light when larger attacks are mitigated via the cloud. This is because during cloud mitigation traffic is tunnelled, adding IP overhead. This could potentially cause packet fragmentation, resulting in the issues mentioned above.

## Recommendation

We recommend that, as a proactive measure, you adjust the Maximum Transmission Unit (MTU) settings of your IPsec VPN connection from the default (~1500) to a fixed value between 1350 and 1400. You can do this using the vCloud Director GUI or by using the vCloud Director API (for more information, see [*How to configure IPsec VPN*](../vmware/vmw-how-configure-ipsec-vpn.md) (GUI) or [*How to change IPSEC VPN settings via the vCloud Director API*](../vmware/vmw-how-change-ipsec-vpn-api.md)). If you are still experiencing connection issues, raise a support request via the UKCloud Portal.

## Explanation

MTU is the maximum size of data that can be sent in a single frame. It is typically set at the data link layer by the Ethernet protocol. Most devices have a default MTU size of 1500 bytes.

IP facilitates delivery across networks using IP datagrams (which encapsulate the TCP or UDP message). IP datagrams can accommodate different MTU sizes, for example, by fragmenting a datagram that is larger than the MTU into smaller packages that can then be forwarded. However, some applications may set a DF (Do not Fragment) bit, meaning that the datagram cannot be fragmented. If these packets are larger than the MTU, they are dropped.

Normally, traffic to UKCloud comes directly and is unlikely to be fragmented. However, if DDoS cloud mitigation is initiated, traffic is tunnelled to UKCloud from our DDoS provider. The tunnel adds an overhead to the IP packet, meaning that the packet could become greater than the MTU and need to be fragmented. Fragmented packets add extra overhead and can cause delay as they need to be broken up and reassembled. Also, if just one packet of the fragmented datagram is lost, the entire datagram must be retransmitted. In addition, for applications that have the DF bit set, packets that exceed the MTU will be dropped.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.