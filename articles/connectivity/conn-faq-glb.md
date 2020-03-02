---
title: UltraDNS FAQs
description: Frequently asked questions for UltraDNS (previously Global Load Balancing)
services: connectivity
author: Matt Warner
reviewer: hbrunt
lastreviewed: 16/12/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UltraDNS FAQs
toc_fullpath: FAQs/conn-faq-glb.md
toc_mdlink: conn-faq-glb.md
---

# UltraDNS FAQs

## What is UltraDNS?

The UltraDNS service (previously Global Load Balancing) is aimed at providing a secure and reliable managed DNS service to help businesses enable and protect their online presence. It ensures the highest level of website availability and optimal performance, with built-in security for superior protection that is scalable to future demands.

It enables customers to direct internet traffic between multiple end-points, which can be across different sites or different platforms.

## Who supplies the UltraDNS service?

UKCloud has partnered with Neustar for the provision of this service along with the additional option of [*SiteProtect Advanced DDoS Mitigation*](conn-sco-app-ddos.md) for a complete traffic protection solution.

## Who are Neustar?

Neustar, Inc. (NYSE: NSR) was founded in 1996 and is a trusted, neutral provider of real-time information and analysis to the internet, telecommunications, entertainment, advertising and marketing industries throughout the world. In the data arena, Neustar provides real-time information and analytics for over 6 billion physical and virtual addresses, and provides instantaneous answers to more than 27 billion queries from the internet each day and answer over 300 thousand questions every second.

## How do I manage the service?

Once the service has been provisioned, we will send you access details for the web-based customer portal. This enables you to supply all relevant information and adjust the settings of the service to suit your needs, such as expected traffic, traffic preferences and actions to take when a server or group of servers becomes unavailable or experiences performance issues.

## How do I get support?

Support is made available by Neustar directly.

## Is there a charge for this service?

Yes, there is a £350 per month recurring charge for the first 1 million DNS queries, and additional charge per month of £150 for every additional 1 million DNS queries. There is a 12 month minimum term contract for this service.

## If we use SSL tunnels, will they terminate with Neustar?

No, load balancing is at the DNS layer before the connection is made between the client and the server.

## Can pre-existing IP addresses be moved, or would new IP addresses be needed?

Any A record or CNAME can be used with directional DNS so any IP address can be used.

## Would the use of this DDoS service cause any disruption to live services?

DNS is architected to provide disruption-free transition.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
