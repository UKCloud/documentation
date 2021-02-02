---
title: How to configure a Hub and Spoke tapology with virtual network peering using the UKCloud Azure Stack Hub portal
description: Configure a Hub and Spoke tapology using virtual network peering 
services: azure-stack
author: Kade Green
reviewer: 
lastreviewed: 

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: Configure hub and spoke network peering - Portal
toc_fullpath: Users/How To/azs-how-configure-vnet-peering.md
toc_mdlink: azs-how-configure-hub-spoke-vnet-peering-portal.md
---

# How to configure a Hub and Spoke tapology with virtual network peering using the UKCloud Azure Stack Hub portal

## Hub and Spoke virtual network peering

The hub is a virtual network in Azure that acts as a central point of connectivity to your on-premises network. The spokes are virtual networks that peer with the hub.

### Configuring the Hub

1. create hub vnet

2. create vpn gateway in the vnet with a pub ip

**image of creating vnet gateway**

3. Create spoke vnet

4. add peering to hub

5. add peering to both sides