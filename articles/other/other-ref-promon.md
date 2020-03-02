---
title: Protective Monitoring from UKCloud
description: Provides information about UKCloud's Protective Monitoring service
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 05/12/2019
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

- Perimeter routes and firewalls - UKCloud protectively monitors and regularly assesses any potential vulnerabilities at the perimeter, alongside other mitigations including DDoS<sup>*</sup> and active vulnerability scanning.

- Compute hypervisor, UKCloud networks and physical infrastructure - UKCloud protectively monitors and regularly assesses vulnerabilities across all components of the hosting estate (for example, hypervisors, hosting infrastructure, servers, networking and management applications).

- Customer VDC, vApps, VMs, Virtual Network Appliance and customer networks - This is the customer's responsibility to monitor.

- External connectivity, for example, internet, PSN, HSCN, Janet, RLI, leased lines - This is the responsibility of the telecommunications provider.

<sup>*</sup> For more information about UKCloud's volumetric DDoS protection, see the [*DDoS mitigation service FAQs*](../connectivity/conn-faq-ddos.md).

We do not share a feed from our platform protective monitoring to customers, so you cannot connect your own SOC to the protective monitoring data. You can however get access to log data for all traffic traversing your virtual boundary firewall.

## Cyber Security News page

The *Cyber Security News* page in the UKCloud Portal, located under Monitoring, lets you see, at a glance, general threat briefs and security news from around the world as analysed by e2e-assure.

All Portal users can access the *Cyber Security News* page.

Each brief includes a headline in bold text that sums up the threat to help you scan through the feed quickly. Briefs are also colour-coded, ranging from yellow to red, to indicate the severity of the brief: Yellow indicating a low threat level and red indicating a high threat level.

A more in-depth description of the threat is included below the headline. This provides you with more information and recommended actions, depending on the threat. The feed is listed in chronological order with two timestamps: one showing when the brief was originally published and the other showing when the brief was most recently updated.

You can search and filter the feed on the *Cyber Security News* page to define exactly what content you want to see. Use the search bar to query specific words or phrases within the threat briefs. To access filtering options, to edit the priority and date range you want to see in your feed or search results, click **Advanced Search**.

## My Security Events page

The *Security Events* page in the UKCloud Portal, located under Monitoring, lets you see, at a glance, threat information specific to your account.

> [!NOTE]
> To view the *Security Events* page, you must have **Read** monitoring permissions on the page. For more information, see [*Portal permissions*](../portal/ptl-ref-overview-permissions.md#permissions-for-monitoring).

Any threat information listed on the *Security Events* page is also raised as a My Calls ticket to ensure that it's seen in a timely manner by the relevant person.

Currently, the *Security Events* page only includes information for internet connectivity to UKCloud for VMware in the Assured OFFICIAL security domain. All other services are still supported by UKCloud's Protective Monitoring service and our security team will inform you of security incidents for those other services via My Calls.

If you'd like to request that other services are included on the *Security Events* page, post an idea on the [UKCloud Community](https://community.ukcloud.com/ideas).

### Example security incidents

- Communication seen with known malware sites

- Data being exchanged in plain text

- Certificate issues

- Brute force attacks

- Vulnerability scanning

- Attempts to compromise operating systems and services

- Machines contacting known malicious domains

- Machines being used for personal use (if you're running a VPN server, UKCloud will capture internet browsing)

- Any traffic that is encrypted will not be spotted by UKCloud unless it's contacting known malicious domains

## Feedback

If you would like to request that other clouds, networks or security domains are supported, contact <products@ukcloud.com>.

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
