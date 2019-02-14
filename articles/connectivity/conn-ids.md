---
title: What Intrusion Detection System (IDS) does UKCloud provide? | UKCloud Ltd
description: Describes the IDS capability provided on the UKCloud platform
services: connectivity
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: What Intrusion Detection System (IDS) does UKCloud provide?
toc_fullpath: Reference/conn-ids.md
toc_mdlink: conn-ids.md
---

# What Intrusion Detection System (IDS) does UKCloud provide?

## Overview

An Intrusion Detection System (IDS) examines incoming network traffic to identify potential malicious activities, such as attempts to gain unauthorised access to an application or corrupt application data, and reports such attempts to a monitoring service.

## IDS for Assured OFFICIAL

For Assured OFFICIAL solutions, we offer network IDS as part of our standard offering. Although our IDS solution can address activity based threats (such as port scans or SYN floods), it is less effective at addressing payload threats as the traffic is typically encrypted when it passes through our IDS solution. Hence, we recommend that customers implement their own application firewall, network IDS/IPS (within their virtual data centre) and/or host based IDS/IPS. In this way, customers have complete control over the policies and the resulting audit logs. Customers can also consider implementing a Content Delivery Network (CDN) in front of the UKCloud solution. All traffic will flow through the CDN, which often provides IDS/IPS features and can deal with issues such as Distributed Denial of Service (DDoS) attacks.

## IDS for Elevated OFFICIAL

For Elevated OFFICIAL solutions, we offer network IDS as part of our standard offering. Although our IDS solution can address activity based threats (such as port scans or SYN floods), it is less effective at addressing payload threats as the traffic is typically encrypted when it passes through our IDS solution. Hence, we recommend that customers implement their own application firewall, network IDS/IPS (within their virtual data centre) and/or host based IDS/IPS. In this way, customers have complete control over the policies and the resulting audit logs. Customers can also consider implementing a Content Delivery Network (CDN) in front of the UKCloud solution. All traffic will flow through the CDN, which often provides IDS/IPS features and can deal with issues such as Distributed Denial of Service (DDoS) attacks.

## Third-party solutions

Although we do not recommend specific third-party services, we are aware of the following solutions:

- Cisco FirePOWER – www.cisco.com/c/en/us/products/security/ngips/index.html

- Brocade Virtual Traffic Manager – www.brocade.com/en/products-services/application-delivery-controllers/virtual-traffic-manager.html

- Modsecurity – www.modsecurity.org

- McAfee Host IPS – www.mcafee.com/uk/products/host-ips-for-server.aspx

- Trend Deep Security – www.trendmicro.co.uk/products/deep-security

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
