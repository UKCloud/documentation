---
title: Emergency Services Network FAQs
description: Frequently asked questions about the Emergency Services Network (ESN)
services: connectivity
author: mwarner
reviewer: thallsmith
lastreviewed: 05/01/2022

toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Emergency Services Network FAQs
toc_fullpath: FAQs/conn-faq-esn.md
toc_mdlink: conn-faq-esn.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Emergency Services Network FAQs

## What is the Emergency Services Network?

The Emergency Services Network (ESN) is a network based on 4G that enables communications between emergency services, replacing the previously used radio-based system.

## Who is responsible for the ESN?

EE are responsible for providing the 4G network and Motorola for providing all the equipment and data centres that are connected to the ESN. Vodafone are responsible for the provision of a Direct Network Service Provider (DNSP), the last-mile connectivity from the EE Points of Presence, each control room and every police, fire and ambulance station.

## How does the ESN work?

The ESN shares the same networking space as commercial mobile traffic, however emergency services have a quality of service priority over EE's 4G network. During an emergency, EE prioritises emergency service traffic to allow for a better quality of service in the localised area of the emergency.

## Can UKCloud connect directly into the ESN?

No. Motorola states there is no way to do this directly due to the levels of SLA needed on the network. Any connection to the ESN must be within the Motorola data centre and must go through a strict vetting process to be allowed onto the ESN. There is potential for us to connect indirectly in the future, however it would most likely be through the PSN or the DNSP.

## How can my application interface with blue-light organisations?

Almost all blue-light applications will still connect to end-customers through normal government networks (PSN, HSCN) or internet (as this service is not replacing them), with the exception of specific applications which will be pushed to Motorola devices using ESN.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
