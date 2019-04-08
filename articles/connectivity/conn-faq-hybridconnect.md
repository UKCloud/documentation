---
title: HybridConnect FAQs | UKCloud Ltd
description: Frequently asked questions for HybridConnect
services: connectivity
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: HybridConnect FAQs
toc_fullpath: FAQs/conn-faq-hybridconnect.md
toc_mdlink: conn-faq-hybridconnect.md
---

# HybridConnect FAQs

## What is HybridConnect?

HybridConnect makes it easy for you to create hybrid clouds by securely connecting to the UKCloud assured cloud platform and supports a variety of flexible private connectivity options enabling hybrid topologies.

These include connectivity to Crown Hosting facilities and to secure suites in UKCloud data centres, third-party data centres, at compatible cloud service providers, and in other customer data centre facilities.
Available private connections include:

- CAS(T)-compliant circuits (leased lines and MPLS) with CPA-approved (or equivalent standard) overlay encryption

- CPA-approved (or equivalent standard) VPN solutions, which may be hosted for secure connectivity over the internet

- Secure fibre connectivity within UKCloud data centres

## Are there any specific requirements I need to consider?

Yes. If you need to order connectivity from your premises, your provider needs to deliver the circuit to either Meet Me Room 1 or 2 (in SQ17 in our Corsham data centre and A9 in Farnborough).

The provider also needs to deliver a fibre enabled router with LC connectors. You'll be set up with a 1G link as standard, however 10G is also available.

Fibre runs between the data centres' Meet Me Rooms (MMRs) and the UKCloud suite will be protected using Kopex shielding.

All connections are subject to available capacity.

## If my data centre is on the same campus as a UKCloud data centre, can I connect via direct fibre?

Yes. NCSC recognises an intra-campus bonded fibre connection as being equivalent to CAS(T) and therefore appropriate for accessing the UKCloud Assured OFFICIAL cloud platform.

CPA‑approved (or equivalent standard) overlay encryption should be used to make the fibre connection appropriate for accessing the Elevated OFFICIAL cloud platform.

Fibre running between the data centres can be protected using Kopex shielding as an alternative.

The cost of cabling between your data centre and our data centre is your responsibility, however we can help you arrange the installation with Ark.

## If my data centre is on the same campus as a UKCloud data centre, what type fibre do I need to order?

If your data centre is in SQ17 Cosham or A9 Farnborough, then you need to place an order with Ark for multi-mode fibre with LC connectors. If your data centre is not in SQ17 or A9, single mode fibre needs to be installed with LC connectors. Ark will be able to supply both options.

## Can I install my own connectivity between UKCloud data centres?

Yes. You can implement your own private circuit between our data centres, but it will be subject to costs, accreditation, configuration, support and lead times outside our control. We may charge you for hosting the private circuit equipment and for contributing to your design and implementation.

## Can I use UKCloud data centre interconnectivity (DCI) to 'triangulate' my private connectivity?

Yes. You can deploy a private circuit into each data centre and use the UKCloud DCI to provide additional resilience.

If the primary private circuit were to fail, you could get to the primary data centre (DC1) via the private circuit into the second data centre (DC2) and across the UKCloud DCI. In this case, you must use 'reserved bandwidth'.

There may be setup costs (aligned to the SFIA rate card), depending on the complexity of the requirement.

## How will HybridConnect connect to my UKCloud environment?

The way that HybridConnect connects to your UKCloud environment depends on the region in which your environment is located and what kind of virtual firewall technology you use. You can discuss your options with your Solution Architect.

## How do I initiate and process a HybridConnect installation?

You need to either contact your account director or raise a service request via [My Calls](https://portal.ukcloud.com/support/my_calls) in the UKCloud Portal.

## How much do you charge for a HybridConnect connection?

There is a one‑off charge of £2,000.

## General connectivity questions 

If you have questions about connectivity in general, please see the [*General connectivity FAQs*](conn-faq.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.