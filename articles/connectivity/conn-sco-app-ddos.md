---
title: SiteProtect Advanced DDoS Mitigation Service Scope
description: Outlines important details regarding the SiteProtect Advanced DDoS Mitigation (previously Application-tuned DDoS protection) service
services: connectivity
author: Steve Hall
reviewer: hbrunt
lastreviewed: 16/12/2019
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: SiteProtect Advanced DDoS Mitigation Service Scope
toc_fullpath: Service Scope/conn-sco-app-ddos.md
toc_mdlink: conn-sco-app-ddos.md
---

# SiteProtect Advanced DDoS Mitigation Service Scope

## About this document

This document is intended to provide additional information regarding the optional SiteProtect Advanced DDoS Mitigation (previously Application-tuned DDoS protection) service that is available for UKCloud services. This is an additional service to the standard DDoS protection that is provided for all Assured UKCloud services. It is recommended that all customers consult with a cloud architect when considering this option to ensure it is right for their solution, including options when applying the service. For additional information, please refer to the [*SiteProtect Advanced DDoS Mitigation FAQs*](conn-faq-app-ddos.md).

## SiteProtect Advanced DDoS Mitigation

While the default UKCloud DDoS protection offers protection for the UKCloud community, it is not specific to any one customer. SiteProtect Advanced DDoS Mitigation from Neustar is a fully-managed DDoS protection solution backed by an industry-leading Security Operations Team that scrubs your website's malicious traffic - delivering only clean, legitimate traffic to your site. In addition, there are multiple deployment configurations available within the portal to meet your needs, and the solution is flexible depending on your specific requirements.

The cloud-based service mitigates attacks in the cloud, far away from your infrastructure and with the bandwidth and flexibility to repel today's largest attacks. Using proven methodologies, Neustar's experienced DDoS fighters intelligently match technology to threats, surgically derailing even the most complex attacks.

The Always-On Hybrid managed solution removes the burden of DDoS with an on-site Arbor appliance for smaller DDoS attacks combined with cloud-based failover for larger, sustained attacks. Remote management of monitoring, detecting and responding to DDoS attacks minimizes downtime and frees your valuable resources.

UKCloud has partnered with Neustar for the provision of this service due to their global presence, experience, success in DDoS protection and traffic monitoring, established service and loyal customer base. In addition, we also offer an [*UltraDNS*](conn-sco-glb.md) service with Neustar to offer a complete traffic monitoring and protection solution.

## Cloud-based scrubbing

Activated through a simple DNS or BGP redirection of your internet traffic, this service absorbs and scrubs bad traffic, allowing clean traffic to flow to your infrastructure. It also dynamically distinguishes legitimate traffic from attack traffic (either from malicious or naïve sources) by utilizing dedicated DDoS mitigation equipment from multiple vendors. This multi-vendor approach enables us to surgically leverage the unique DDoS mitigation capabilities of each vendor's solution.

We supplement this equipment with proprietary DDoS mitigation capabilities to create a superset of DDoS fighting tools that can support focused scrubbing algorithms. We also leverage the years of DDoS mitigation experience of the Neustar 24x7 Security Operations Team to manually fine-tune these resources.

This service can be used to defend most standard TCP-based applications including: web sites, email servers, APIs, databases and more. Unlike many others, our solution protects your entire internet ecosystem.

The service is completely on-demand, so you decide when and if you want to activate mitigation by adjusting the settings and details with the customer portal that is made available to you on provision of the service.

## Service background

- Flexible deployment options to meet the needs of any organization

- 24x7 U.S.-based Security Operations & Network Operations centres

- Global IP Anycasted scrubbing centres

- Unlimited upstream mitigation capacity

- 1Tbps of true attack traffic cleaning capacity with plans to expand

- Multiple diverse tier one network providers

- OSI Layer 7 and IPv6 capable

- Utilizing a diverse, integrated mitigation technologies:

  - Citrix Systems

  - Cisco Systems

  - Arbor Networks

  - Hewlett Packard

  - Juniper Networks

  - Neustar, Inc.

  - Fully IPv6 and OSI Layer 7 capable

- DDoS protection for on-premises, web, email, APIs and more

- Optional detection and alerting service

## Portal access

Once the service is provisioned, access details for your web-based portal will be supplied to you. This portal will allow you complete control over the solution, including settings for traffic and mitigation.

The service is delivered as a managed service by Neustar and they are responsible for monitoring traffic and taking necessary actions to prevent a DDoS. However, the performance of the service is reliant on the details and settings within the portal.

## Service provisioning

Once a contract is signed by the customer, the service will be provisioned by Neustar who will then directly provide portal access details. The time to provision will depend on complexity of the solution.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
