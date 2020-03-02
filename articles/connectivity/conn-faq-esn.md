---
title: Emergency Services Network FAQs
description: Frequently asked questions about the Emergency Services Network (ESN)
services: connectivity
author: Matt Warner
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Emergency Services Network FAQs
toc_fullpath: FAQs/conn-faq-esn.md
toc_mdlink: conn-faq-esn.md
---

# Emergency Services Network FAQs

## What is the Emergency Services Network (ESN)?

The ESN is a network based on 4G that will enable communications between emergency services. It will replace the current radio-based system that has been in operation since 2004.

## Who is responsible for the ESN?

EE are responsible for providing the 4G network and Motorola are providing all the equipment and Data Centres that are connected to the ESN. Vodafone are also responsible for the provision of a Direct Network Service Provider (DNSP), the last-mile connectivity from the EE Points of Presence, each control room and every police, fire and ambulance station.

## How does the ESN work?

EE are currently upgrading their entire network to 4G and the ESN will share the same networking space as commercial mobile traffic, however Emergency services will have a quality of service priority over EE's 4G network. During an emergency, EE will prioritise emergency service traffic to allow for a better quality of service in the localised area of the emergency.

## When is the ESN going live?

ESN is predicted to go live by the end of 2018.

## Can UKCloud connect directly into the ESN?

No. Motorola states there is no way to do this directly due to the levels of SLA needed on the network. Any connection to the ESN must be within the Motorola data centre and will have to go through a strict vetting process to be allowed onto the ESN. There is potential for us to connect indirectly in the future, however it would most likely be through the PSN or the DNSP.

## How can my application interface with blue-light organisations?

Almost all blue-light applications will still connect to end-customers through normal government networks (PSN, HSCN) or internet (as this service is not replacing them), with the exception of specific applications which will be pushed to Motorola devices using ESN.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
