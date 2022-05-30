---
title: Protective Monitoring from UKCloud
description: Provides information about UKCloud's Protective Monitoring service
services: other
author: shighmoor
reviewer: rbind
lastreviewed: 03/05/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Protective Monitoring from UKCloud
toc_fullpath: Reference/other-ref-promon.md
toc_mdlink: other-ref-promon.md
---

# Protective Monitoring from UKCloud

## Overview

Protective monitoring is a term that comes from the National Cyber Security Centre (NCSC), listed in the Good Practice Guide 13 (GPG-13). It provides a set of guidance as to what controls should be implemented, and the depth of those controls, to make sure that the data being stored or transported in an IT estate is protected against cyber threats.

As part of our activity to maintain the security of our platforms, we adhere to protective monitoring best practice from the NCSC. UKCloud's Protective Monitoring protects both the Assured OFFICIAL and Elevated OFFICIAL security domains with resilient, 24x7 enhanced protective monitoring, vulnerability scanning and assessment.

## Protective Monitoring service scope

Our protective monitoring activity covers all assets that provide our products to customers, including all hosting infrastructure, networking and management applications.

In the case of our compute products (UKCloud for VMware, UKCloud for OpenStack, UKCloud for Microsoft Azure and UKCloud for Oracle Software), we protectively monitor up to the hypervisor (the component that provides the virtual machines). For components above this infrastructure (for example, your own virtual machines, appliances and applications) you are responsible for providing an appropriate protective monitoring capability.

The following demonstrates the scope of UKCloud's Protective Monitoring:

- Perimeter external network connectivity. UKCloud protectively monitors and regularly assesses any potential vulnerabilities at the perimeter, alongside other mitigations supported by DDoS<sup>*</sup> and active vulnerability scanning.

- Compute hypervisor, UKCloud networks and physical infrastructure. UKCloud protectively monitors and regularly assesses vulnerabilities across all components of the hosting estate (for example, hypervisors, hosting infrastructure, servers, networking and management applications).

- Customer virtual data centre, vApps, virtual machines, Virtual Network Appliance and customer networks. This is the customer's responsibility to monitor, although we do offer a separate Security Operations Service to assist with this (see below).

- Onward external connectivity, for example, internet, PSN, HSCN, Janet, RLI, leased lines. This is the responsibility of the telecommunications provider.

<sup>*</sup> For more information about UKCloud's volumetric DDoS protection, see the [*DDoS mitigation service FAQs*](../connectivity/conn-faq-ddos.md).

We do not share a feed from our platform protective monitoring to customers, so you cannot connect your own SOC to the protective monitoring data.

## Security Operations Service

If you require protective monitoring services above the hypervisor (for example, for your own virtual machines, appliances and applications), we offer our Security Operations Service to monitor your virtual estate (additional charges apply). For more information, see the [*Security Operations Service Service Definition*](../soc/soc-sd.md).

## Cyber Security News page

The *Cyber Security News* page in the UKCloud Portal, accessed via the navigation panel under *Monitoring*, lets you see, at a glance, general threat briefs and security news from around the world as analysed by e2e-assure.

All Portal users can access the *Cyber Security News* page.

Each brief includes a headline that sums up the threat to help you scan through the feed quickly. Briefs are also colour-coded, ranging from yellow to red, to indicate the severity of the brief: Yellow indicating a low threat level and red indicating a high threat level. The feed is listed in chronological order by when the brief was most recently updated.

Click a headline to see a more in-depth description of the threat. This provides you with more information and recommended actions, depending on the threat.

You can search and filter the feed on the *Cyber Security News* page to define exactly what content you want to see. Use the search bar to query specific words or phrases within the threat briefs. Use the priority dropdown list and date fields to filter the threats listed on the page.

## Security Operations Service page

The *Security Operations Service* page in the UKCloud Portal, accessed via the navigation panel under *Monitoring*, shows the number of logs processed in the last 24 hours against the UKCloud platform by our Security Operations Service.

All Portal users can access the *Security Operations Service* page.

Any threat information specific to your account is raised as a My Calls ticket to ensure that it's seen in a timely manner by the relevant person.

### Example security incidents

- Communication seen with known malware sites

- Data being exchanged in plain text

- Certificate issues

- Brute force attacks

- Vulnerability scanning

- Attempts to compromise operating systems and services

- Machines contacting known malicious domains

- Any traffic that is encrypted will not be spotted by UKCloud unless it's contacting known malicious domains

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
