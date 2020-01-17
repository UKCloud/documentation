---
title: DDoS mitigation service FAQs | UKCloud Ltd
description: Frequently asked questions for our DDoS mitigation service
services: connectivity
author: Matt Warner
reviewer: hbrunt
lastreviewed: 16/12/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: DDoS mitigation service FAQs
toc_fullpath: FAQs/conn-faq-ddos.md
toc_mdlink: conn-faq-ddos.md
---

# DDoS mitigation service FAQs

## What is UKCloud's approach to mitigating DDoS attacks?

UKCloud has selected one of the leading providers of DDoS mitigation services and has implemented a hybrid solution. The service comprises both local DDoS mitigation appliances to mitigate smaller attacks, and the ability to leverage additional terabit scale global scrubbing centres if attacks threaten to exceed local capacity. This approach provides a balance between protection against DDoS attacks, without having some of the issues that are seen with an always-on solution (such as affecting legitimate traffic and VPN tunnels) or a manually invoked on-demand solution (where time to mitigate can be excessively long).

This mitigation service enhances UKCloud's current ability to absorb typical sized DDoS attacks by providing an additional layer of defence against larger and more complex volumetric DDoS attacks. UKCloud utilises a combination of specialist DDoS mitigation appliances hosted within our data centres and terabit scale scrubbing centres that together implement a suite of DDoS countermeasures as appropriate. This, along with superior incident reporting, enables UKCloud to provide you with the details you need when reporting to GovCERT.

You are advised to ensure that suitable application specific protection is in place to mitigate threats at the application layer, such as advanced persistent threats. For this purpose, you can procure an advanced DDoS mitigation solution. For more information, see [*SiteProtect Advanced DDoS Mitigation FAQs*](conn-faq-app-ddos.md).

## DDoS mitigation services are expensive, will UKCloud be passing these costs onto customers?

No. UKCloud is committed to continually investing in our platform to ensure that it delivers the highest levels of security, availability and scalability. We believe that customers should expect their cloud service providers to deliver increased value and lower prices over time, and this is just one example of how UKCloud demonstrates this belief to our customers and partners.

## What is the likelihood that legitimate traffic will be blocked by the DDoS mitigation service?

This is commonly referred to as a 'false positive', where the DDoS mitigation technology incorrectly identifies legitimate traffic as an attack.

Due to the nature of the UKCloud service, normal interactions between your application and end users will be no different from how they are today. In the event of the UKCloud hosted DDoS mitigation appliances identifying an abnormal load, our specialist DDoS mitigation partner will deploy appropriate countermeasures.

Impact on legitimate traffic was a high priority consideration during our evaluation process and we are confident that the specialist provider of DDoS mitigation has appropriate controls across people, process and technology to make the likelihood of false positives almost zero.

That said, if your system is subject to a sustained, high volume attack, UKCloud may choose to deploy specific countermeasures against the attacked IP address (and sometimes adjacent IP addresses), which would affect both the attack traffic and legitimate traffic to that specific IP address. UKCloud will use all reasonable endeavours to contact affected customers if we take this action.

## What additional latency will be incurred through UKCloud's use of the DDoS mitigation service?

In normal operation (that is, traffic passing directly through UKCloud hosted DDoS mitigation appliances without requiring countermeasures), there is negligible additional latency to inbound or outbound traffic (rated at less than 80 microseconds).

During a DDoS attack, there is negligible additional latency to outbound traffic, but inbound traffic will experience some additional latency, which will vary depending on the mitigation measure being taken. For example, when traffic is redirected through the specialist DDoS scrubbing centres, a sub-10 ms additional latency, caused by BGP routing, will affect inbound traffic to the scrubbing centre, and we expect there to be an additional 10 ms latency affecting only traffic to the IP addresses under attack (incurred by DDoS mitigation technology within the scrubbing centre). So, customers targeted by the attack should experience additional inbound latency of about 20 ms, whereas all other customers should experience lower additional latency of sub-10 ms.

## What is the largest attack that the DDoS mitigation service can withstand?

The specialist provider of DDoS mitigation is designed to withstand multiple simultaneous DDoS attacks. The service is continually being expanded in line with traffic volumes and the capacity of the scrubbing centres currently exceeds 1500 Gbit/s. The typical DDoS attack<sup>1</sup> is less than 2 Gbit/s but attacks of 50 to 60 Gbit/s are not uncommon and some attacks are beginning to exceed 100 Gbit/s.

UKCloud subscribe to a tier of service designed to mitigate a specific level of attack. If the attack begins to exceed this level, UKCloud will work with the customer under attack and implement 'null routing' for the targeted IP address to ensure that all other customers continue to benefit from normal service.

<sup>1</sup> <https://www.sans.org/reading-room/whitepapers/analyst/ddos-attacks-advancing-enduring-survey-34700>

## Does the DDoS mitigation service protect me against all types of 'denial of service' attacks?

No. The service is designed to specifically neutralise the impact of highly distributed, volumetric, network layer attacks as these types of attacks most commonly cause 'collateral damage' and 'noisy neighbour' symptoms. The service is not designed to protect specific customers and applications against low-and-slow attacks, advanced persistent threats or application layer threats.

Further, if your service is subject to a particularly high volume attack, it is possible that UKCloud will deploy specific countermeasures against your targeted IP address that could effectively make the IP address inaccessible to legitimate users of your service.

To ensure you are protected against all types of denial of service attacks, UKCloud recommends that you consider mitigating these application specific threat vectors via appropriate solutions such as Web Application Firewalls, Content Delivery Networks, robust domain name services, and so on. For this purpose, you can procure an advanced DNS based DDoS mitigation solution. For more information, see [*SiteProtect Advanced DDoS Mitigation FAQs FAQs*](conn-faq-app-ddos.md).

## What gives UKCloud the right to 'null route' traffic to my service?

In common with most cloud service providers and hosting organisations, the Terms & Conditions (for example, G-Cloud Terms of Business) that all customers agree to as part of the provision of our services entitles UKCloud to suspend a customer's right to access or use all or any part of the services immediately upon notice to you if we determine that your use of the services: creates a security risk to the Services or any third party and / or may adversely impact the Services or the systems or Content of any other of our other Customers.

## Can I use my own DDoS mitigation service if I have more extensive requirements?

Yes. Indeed UKCloud recommends that customers review their preparedness for DDoS attacks and other attacks such as advanced persistent threats and application layer threats. As an example, some customers choose to use a Content Delivery Network or DNS based DDoS mitigation service to provide additional protection against application layer and DNS layer attacks. Such a solution can absorb and mitigate customer specific attacks before the attack traffic hits the UKCloud platform. UKCloud customers are also able to procure an advanced DDoS mitigation solution. For more information, see [*SiteProtect Advanced DDoS Mitigation FAQs*](conn-faq-app-ddos.md).

## Does the use of these third party DDoS mitigation services affect UKCloud's status as a PSN Accredited service provider?

No. UKCloud consulted with NCSC and CERT-UK during our evaluation of the options. As it stands, traffic passed over the internet can be routed through various systems and countries by BGP, the native routing protocol of the internet. You are advised to ensure that your systems use appropriate encryption (for example, SSL, TLS or IPsec) to protect the confidentiality and integrity of your data. These same controls ensure security is maintained even when that data is passed through the scrubbing centres.

As with many ISPs, the DDoS mitigation service is not provided by a UK sovereign organisation.

Consistent with Principle 8 of the Data Protection Act, no citizen data is transferred to a non-EEA country; rather data packets may merely transit a specialist scrubbing centre located outside the EEA.

## If a DDoS attack results in a period of unavailability, will I be able to claim service credits?

The UKCloud SLA protects you against the unavailability of the UKCloud platform to host your workload or data. A DDoS attack will typically only affect the availability of internet connectivity rather than the workloads and data itself. Due to the variable nature of internet connectivity, the UKCloud SLA does not cover these issues. So, if during a DDoS attack the UKCloud platform continues to run your workloads and provide your data then service credits will not apply. This is because your workload and data might still be available via non-internet connections such as PSN, leased lines, and so on.

## What reporting will I get as part of this service?

If you experience a DDoS attack, you will be informed individually by UKCloud once the attack has been detected by the DDoS mitigation service. When the attack has ended, UKCloud will share a detailed report containing information on the size and duration of the attack, where the attack came from (IPs and autonomous systems) and the type of attack traffic detected (for example, ports and protocols).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
