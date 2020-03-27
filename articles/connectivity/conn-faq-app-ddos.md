---
title: SiteProtect Advanced DDoS Mitigation FAQs
description: Frequently asked questions for SiteProtect Advanced DDoS Mitigation (previously Application-tuned DDoS protection)
services: connectivity
author: Matt Warner
reviewer: hbrunt
lastreviewed: 16/12/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: SiteProtect Advanced DDoS Mitigation FAQs
toc_fullpath: FAQs/conn-faq-app-ddos.md
toc_mdlink: conn-faq-app-ddos.md
---

# SiteProtect Advanced DDoS Mitigation FAQs

## What is SiteProtect Advanced DDoS Mitigation?

SiteProtect Advanced DDoS Mitigation (previously Application-tuned DDoS protection) from Neustar is a fully-managed DDoS protection solution, backed by an industry-leading security operations team, that scrubs your website's malicious traffic to ensure only clean, legitimate traffic is delivered to your site. It's available in multiple deployment configurations to meet your needs and is flexible depending on your specific requirements.

The cloud-based service mitigates attacks in the cloud, far away from your infrastructure, with the bandwidth and flexibility to repel today's largest attacks. Using proven methodologies, Neustar's experienced DDoS fighters intelligently match technology to threats, surgically derailing even the most complex attacks.

The always-on hybrid managed solution removes the burden of DDoS with an on-site Arbor appliance for smaller DDoS attacks, combined with cloud-based failover for larger, sustained attacks. Remote management of monitoring, detecting and responding to DDoS attacks minimises downtime and frees your valuable resources.

## Who supplies the DDoS service?

The SiteProtect Advanced DDoS Mitigation service is supplied and managed by Neustar.

## Who is Neustar?

Founded in 1996, Neustar, Inc. (NYSE: NSR) is a trusted, neutral provider of real-time information and analysis to the internet, telecommunications, entertainment, advertising and marketing industries throughout the world. Neustar delivers real-time information and analytics for over 6 billion physical and virtual addresses, provides instantaneous answers to more than 27 billion queries from the internet each day, and answers over 300,000 questions every second.

## How is this different from standard UKCloud DDoS protection?

Our standard DDoS protection is aimed at protecting all consumers on our cloud platform as a 'break glass' solution. It is a 'blunt instrument', as the counter-measures we deploy will primarily protect the community of users first and foremost, which may debilitate the customer who is being attacked.

Although only public sector organisations use our cloud platform, there's a wide variety of uses, traffic types from different geographic locations, and varying traffic patterns and throughput. Because of these factors, we advise customers to consider DDoS protection that can be customised for their unique traffic and application use, to ensure uptime and minimise disruption.

## How is it set up?

For internet-bound traffic, we manage an autonomous Border Gateway Protocol (BGP) service, which enables us to intelligently redirect traffic without affecting a customer's IP address allocation.

## Would the use of this DDoS service cause any disruption to live services?

There should be no disruption during your move to the DDoS service, unless your applications are currently under attack.

## How do I make changes to my DDoS settings?

Once the service has been provisioned, you'll receive access details for the customer portal. Via the portal you can supply all relevant information and adjust the settings of the service to suit your needs, expected traffic, and actions in the event of a suspected DDoS attack.

## How do I get support?

Support is made available by Neustar directly.

## Is there a charge for this service?

Yes, there's a one-off setup fee of £3,000, and a £5,000 per-month recurring charge, with a 12-month minimum-term contract.

## If we use SSL tunnels, will they terminate with Neustar?

This depends on the whether they are BGP or DNS:

- BGP - tunnels - do not terminate at the customer server.

- DNS without SSL certificate - tunnels terminate at the customer server and Neustar uses SSL pass-through in the proxy.

- DNS with SSL certificate - tunnels terminate at the scrubbing location as Neustar holds the certificate. An additional tunnel is set up between the scrubbing centre and the server.

## Can pre-existing IP addresses be moved, or would new IP addresses be needed?

This depends on whether they are BGP or DNS:

- BGP - existing IP addresses can be used.

- DNS - virtual IP addresses will be used when under mitigation. DNS redirect is done via a proxy so A records will need to be changed to move to the DDoS service.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
