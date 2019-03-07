---
title: Protective Monitoring FAQs | UKCloud Ltd
description: Frequently asked questions for Protective Monitoring
services: other
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Protective Monitoring FAQs
toc_fullpath: FAQs/other-faq-promon.md
toc_mdlink: other-faq-promon.md
---

# Protective Monitoring FAQs

## General

### What is protective monitoring?

Protective monitoring is a term that comes from the National Cyber Security Centre (NCSC), CESG guidance, listed in the Good Practice Guide 13 (GPG-13). It provides a set of guidance as to what controls, and what depth of controls should be implemented to make sure that the data being stored or transported in an IT estate is protected against cyber threats.

### Does UKCloud utilise Protective Monitoring on their cloud platforms?

Yes. As part of our security activity to maintain the security of our platforms, we adhere to protective monitoring best practice from the NCSC.

### What is the scope of UKCloud's Protective Monitoring?

The scope of our Protective Monitoring activity covers all assets that provide our products to customers, including all hosting infrastructure, networking and management applications.

In the case of our compute products (UKCloud for VMware, UKCloud for OpenStack and UKCloud for Oracle Software) we protectively monitor up to the hypervisor, the component that provides the virtual machines. Components above this infrastructure (for example, your own virtual machines, appliances and applications), are your own responsibility to provide an appropriate protective monitoring capability.

The following demonstrates the scope of UKCloud's Protective Monitoring;

- **External connectivity, for example, internet, PSN, N3/HSCN, Janet, RLI, leased lines** - responsibility of the Telecommunications provider.

- **Perimeter Routes/Firewalls** - UKCloud protectively monitors and regularly assesses any potential vulnerabilities at the perimeter, alongside other mitigations including DDoS^ and active vulnerability scanning.

- **Customer VDC, vApps, VMs, Virtual Network Appliance and Customer Networks** - This is your responsibility to monitor.

- **Compute Hypervisor, UKCloud Networks and Physical Infrastructure** - UKCloud protectively monitor and regularly assess vulnerabilities across all components of the hosting estate (for example, hypervisors, hosting infrastructure, servers, networking and management applications).

^ For more information about UKCloud's Volumetric DDoS Protection, please read our [*DDoS mitigation service FAQs*](../connectivity/conn-faq-ddos.md).

### Is Protective Monitoring implemented on both the Assured OFFICIAL and Elevated OFFICIAL platforms?

Yes. We protect both Assured OFFICIAL and Elevated OFFICIAL platforms with resilient, 24/7 enhanced protective monitoring, vulnerability scanning and assessment.

### Am I able to get a feed from the UKCloud Protective Monitoring system?

No. We do not share a feed from our platform protective monitoring to customers. You can however get access to log data for all traffic traversing your virtual boundary firewall.

### Can I connect my Security Operations Centre (SOC) to your protective monitoring data?

No. As we do not share a feed from our platform to customers, you are not able to connect your SOC to the Protective Monitoring data. You can however get access to log data for all traffic traversing your virtual boundary firewall.

### Are there any enhancements or changes planned to be introduced to UKCloud's Protective Monitoring?

Yes. We have an active project working to expose some threat and intelligence information to customers both through the UKCloud customer portal and its associated API. This data will initially be focussed on general intelligence information about activity in the wild (for example, a new vulnerability) and subsequently where we have been able to specifically attribute information to an individual customer.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.