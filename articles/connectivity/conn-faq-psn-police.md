---
title: PSN for Policing and enhanced regime FAQs | UKCloud Ltd
description: Frequently asked questions for PSN for Policing and enhanced regime
services: connectivity
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: PSN for Policing and enhanced regime FAQs
toc_fullpath: FAQs/conn-faq-psn-police.md
toc_mdlink: conn-faq-psn-police.md
---

# PSN for Policing and enhanced regime FAQs

## What is PSN for Policing?

The Public Services Network for Policing is a closed user group (CUG) operated by Vodafone over the PSN-A, using cryptographic overlays, connecting all UK police forces. Supplier CUGs are also available.

## What is the Enhanced Regime?

The Enhanced Regime is sometimes referred to as the PSN in Policing (Protect), which is a set of controls over and above PSN-P encryption. It is generally used to exchange data between police and non-police organisations.

## Why are there two policing networks?

The PSN-P is based on the IPED (Inter-Provider Encryption Domain) to enable multiple DNSPs to provide competition. The downside of this is that this introduces latency issues and throughput concerns. There are also a lot of non-police organisations on the PSN-P so police have less trust of this community. Due to this, non-police organisations will use the PSN-P with additional controls (Enhanced Regime), as this is easier to consume, but police will use the CUG over the PSN-A (PSN for Policing).

## Can data get between the PSN for Policing CUG and the Enhanced Regime?

Yes. There are gateways, external to UKCloud, that allow data to traverse the two networks. This is managed and controlled by Vodafone. For questions relating to this gateway please contact Vodafone or the PSN for Policing Authority.

## How do I get on the PSN for Policing or the Enhanced Regime?

You will need to contact the PSN for Policing Information Assurance team: (<information.assurance@homeoffice.pnn.police.uk>)

- The first stage is for Policing to confirm that there is a business requirement for the organisation (organisation/system/service) to connect to policing - so partners need a sponsoring force or department.

- Secondly it will be confirmed about how they should connect to Police.

- Then it should be confirmed that the supplier meets the necessary IA requirements. Design docs / RMADs / Code of Connection templates should be sent to the IA team - they review and then pass to GDS for approval.

- The supplier will then be granted code of connection by the PSN for Policing IA team.

- The supplier will need to liaise with UKCloud, Vodafone and the Home Office to get connectivity to the relevant network, as directed by the PSN for Policing Authority.

## Can I connect directly to the UKCloud Elevated OFFICIAL platform using a PSN for Policing CUG?

Yes. Even though the PSN for Policing is an overlay on the PSN-A, the connection in will be installed as a private circuit into UKCloud, provided and managed by Vodafone. This means it can be terminated in the Elevated Cloud platform. Please see our [*HybridConnect FAQs*](conn-faq-hybridconnect.md) for more information around connecting your own line into the UKCloud platform.

## Can I connect directly to the UKCloud Elevated OFFICIAL platform using the Enhanced Regime?

Yes. The Enhanced Regime is a set of additional controls over the PSN-P, which terminates in the Elevated platform.

## Can I connect directly to the UKCloud Assured OFFICIAL platform using a PSN for Policing CUG?

Yes. As the connection is installed as a private circuit into UKCloud, provided and managed by Vodafone, you can terminate it into the Assured Official platform. It is worth remembering that the PSN for Policing Authority may influence where this connection is terminated.

## Can I have a combination of government community networks and private accredited networks into the same UKCloud solution, including the PSN for Policing networks?

Yes, subject to compliance with information assurance requirements, as only organisations that demonstrate compliance with the appropriate [code of connections](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/193704/PSN_Compliance_Zero_tolerance_approach.pdf) (for example PSN compliance certificate or approved N3 (IGSoC) can have access to government community networks.

You should be careful not to misconfigure self-managed components of the solution (OS, application) to 'bridge' between government community networks (PSN) and private networks. This concern must be addressed by accreditation of the customer-managed components - preferably via PSN Accreditation. Local departmental accreditation by a public-sector customer is also allowed. This applies to solutions on both our Assured OFFICIAL and Elevated OFFICIAL cloud platforms.

## What if I have been given some IPs for connection to the Enhanced Regime?

You will need to liaise with Vodafone to ensure that these IPs are associated with your service within UKCloud. You may be asked by Vodafone for your circuit reference numbers, please raise a service request via the UKCloud portal to obtain these.

You will then need to have these IPs added to your accounts, you can do this via a service request. UKCloud may need to work with Vodafone to advertise these IPs this process can take up to 10 days to facilitate. Once complete, you will then be able to provide your service over the new IPs.

## Can I swap out my existing PSN-P IPs for Enhanced Regime IPs?

Yes. The process is the same as above except there may be an element of disruption to the service as the IP addresses are exchanged.

You should liaise with UKCloud to find a suitable time to do this, to minimise any disruption.

## How do I get PSN for Policing or Enhanced Regime IP addresses?

If you are connected to a PSN for Policing CUG then you will be provided with an IP range by Vodafone.

If you are connected to the Enhanced Regime, then you will be provided an IP range by Home Office. You will need to raise a service request with us via the UKCloud Portal within the [My Calls](https://portal.ukcloud.com/support/my_calls) section to have these IPs added to the UKCloud firewalls. This may have a lead time of a few days.

## How long is the lead time to get a PSN for Policing network connected to my solution?

This varies depending on the solution and the network you wish to connect to. It will take time to gain the accreditation needed through the PSN for Policing Authority, there will then be a lead time to get the connectivity provisioned into your solution.

- When connecting to a PSN for Policing CUG, you will need to wait for Vodafone to provision the connectivity into the UKCloud data centres. Because of this you will need to factor in an extended lead time.

- When connecting to the Enhanced Regime you will need to obtain IPs from the Home Office and have them made available to your solution by UKCloud. This will have a shorter lead time to implement that a CUG network, however it may still take a few weeks to do.

## How much does the PSN for Policing networks cost?

The PSN for Policing CUG will be provided by Vodafone as a single-tenant installation so will be treated as a leased line. There will be Vodafone charges for this service that are outside of UKCloud's control. UKCloud will treat this as a HybridConnect service and will bill accordingly. For more information, please see the [*HybridConnect FAQs*](conn-faq-hybridconnect.md).

The Enhanced Regime has additional controls over the PSN-P and as such customers will be billed in accordance with PSN-P pricing. For more information, please see the [*PSN FAQs*](conn-faq-psn.md).

## General connectivity questions

If you have questions about connectivity in general, please see the [*General connectivity FAQs*](conn-faq.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.