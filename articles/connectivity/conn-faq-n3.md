---
title: N3 connectivity FAQs | UKCloud Ltd
description: Frequently asked questions for N3 Connectivity
services: connectivity
author: Matt Warner
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: N3 connectivity FAQs
toc_fullpath: FAQs/conn-faq-n3.md
toc_mdlink: conn-faq-n3.md
---

# N3 connectivity FAQs

## General

### Can I still connect to N3 on UKCloud?

N3 is no longer generally available on UKCloud. HSCN is the replacement for N3 and connectivity is now available on UKCloud. New customers should connect straight to HSCN, existing customers should consider their migration strategy to HSCN before January 2019, when UKCloud will begin decomissioning N3.

For more information about connecting to HSCN, please see the [*HSCN connectivity FAQs*](conn-faq-hscn.md).

### What is N3?

N3 is the NHS national network for healthcare. Technically the N3 does not exist anymore - officially it is known as the Transition Network, however it is still unofficially called N3. The N3 is being replaced by the Health and Social Care Network (HSCN). For more information, please see the [*HSCN connectivity FAQs*](conn-faq-hscn.md).

### Considering the Health and Social Care Network (HSCN), when will N3 services cease?

HSCN is now avaialble from UKCloud, and N3 is no longer available to purchase except in extenuating circumstances. 

N3 officially ceases to exist in August 2020, however in line with NHS Digital guidance for private organisations UKCloud will be terminating its N3 connection in January 2019

### What does 'N3 aggregator' status mean to UKCloud?

UKCloud achieved N3 aggregator status by meeting the strict information governance standards set by NHS Digital, which are required for all organisations that connect to N3. The process required detailed and extensive due diligence on our part to ensure we match or exceed specific security and information governance standards and experience required by the Department of Health.

As an N3 aggregator, we can provide organisations with access to the N3, provided they have met the requirements of the UKCloud Assurance Process. This includes completion of the [N3 connectivity application form.](https://portal.ukcloud.com/support/knowledge_centre/6e663ac7-75a9-4614-8ced-88a9b3993898)

Our N3 aggregator status demonstrates our ability to serve the healthcare sector with a range of secure cloud services.

### Can I use UKCloud's N3 connection without using UKCloud's cloud services?

No. We can provide an N3 connection only to customers who use our cloud services, such as our Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) offerings.

### Does UKCloud provide local connections to the N3 network?

No. We cannot arrange N3 connections to third-party offices. We only enable our customers and partners to provide services via the N3 network, using applications and solutions hosted on the UKCloud cloud platform.

### Do you have any general connectivity questions?

You can find information about other connectivity methods and answers to general connectivity questions in the [*General Connectivity FAQs*](conn-faq.md).

## Service

### Can UKCloud accept dedicated N3 connections?

Yes. Our HybridConnect service option enables customers and partners to provide their own private circuits, including dedicated N3 connections. If you want a dedicated N3 connection to our cloud platform, our team can arrange for installation of dedicated N3 circuits to each of our UK data centres.

In these cases, you must successfully complete the full NHS Digital information governance statement of compliance (IGSoC) process.

### What is the resilience of the UKCloud solution?

The UKCloud assured cloud platform is connected to the N3 in geographically diverse locations. In the unlikely event of a circuit failure, we'll continue to provide connectivity to the N3 via our secure data centre interconnectivity and our secondary N3 connection.

### How will I be billed?

Billing for N3 connectivity is monthly in arrears. Charges are included in your monthly invoice, along with charges for your UKCloud services.

You can choose how you are charged:

- Per environment connected to N3 - £250 per connected environment

- Unlimited connections into environments - £3500 per month

UKCloud pricing is available via the G-Cloud Digital Marketplace.

### Is there a minimum commitment period?

UKCloud charges monthly for connectivity solutions, and requires a minimum commitment of one month for N3 connectivity.

### Can I vary my usage of the N3 connection?

You can change your connectivity solution monthly by raising a Service Request via the [UKCloud Portal](https://portal.ukcloud.com/).

### Will I incur an upfront cost (setup fee)?

Simple implementations of the N3 network won't incur any additional setup or onboarding charges.

For complex networking solutions, we reserve the right to charge SFIA rates. For example, applications that face both the N3 and the internet may require additional assistance to enable them on the N3, or a more extensive compliance engagement.

We'll always tell you in advance if an engagement will incur [SFIA rate card](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/772343517162961-sfia-rate-card-2018-05-21-1251.pdf) charges.

### Does UKCloud provide data encryption?

The N3 is an unencrypted network and we don't provide additional data encryption.

As governed by the UKCloud assurance process, you must encrypt the data within your applications, especially personally identifiable data (PID).

We have partners who can help with application development to include data-at-rest and data-in-flight encryption.

### Can I use UKCloud's N3 connected service if I'm based outside England?

No. At present only organisations located in England can use UKCloud's connection to the N3. This restriction unfortunately precludes organisations residing elsewhere in the UK (Scotland, Wales and Northern Ireland) from using the UKCloud N3 connectivity service.

If you're not based in England, please get in touch with us so we can discuss alternative methods of connection to the N3.

### Will I have full and unrestricted access to the entire N3 network?

No. As part of the assurance process, you must indicate the specific access you require to and from the N3 network. We'll provide only the access you specify. If your requirements change over time, you'll need to raise a Service Request via the [UKCloud Portal](https://portal.ukcloud.com) for any additional access.

## Process

### How do I get an N3-connected solution via the UKCloud assured cloud platform?

To maintain the stringent information governance standards set by NHS Digital, we need to ensure that your solution has been appropriately designed, and that you can provide evidence of appropriate security controls. We do this through our assurance process which involves:

- An initial application for N3 connectivity, including business justification and scope

- A design review with a UKCloud Cloud Architect to ensure your solution includes appropriate technical controls

- An assurance/compliance review to ensure you can provide evidence of the supporting security controls

Once you've successfully completed our assurance process for your N3-facing service, we'll enable your access to the N3 and provide an appropriate N3 IP address.

### How long does the assurance process take?

The time taken will depend on your requirements and the level of discussions required with our compliance team.

We'll enable your connection to the N3 within 48 hours of your successful completion of the assurance process.

### Do I need to contact NHS Digital to apply?

As an N3 aggregator, UKCloud is the approving body in terms of customers meeting N3 compliance requirements.

You'll also still need to register and complete a self‑assessment IGToolKit - details of how to do this are provided as part of the assurance process.

### We're an NHS organisation and already have an N3 connection, can I use it to connect UKCloud's services?

Yes. A pre-existing connection to the N3 will reduce the amount of time and administrative overhead required to provide services via N3 on the UKCloud assured cloud platform. You'll need to provide us with your ODS code and we'll be able to connect your UKCloud service to the N3.

You'll also need to contact NHS Digital once you have been allocated an IP address to request your route to be opened to the sites and services you need to access.

### We are a non-NHS customer who already have N3 connectivity, can we use your N3-connected cloud services?

Yes. A pre-existing and compliant connection to the N3 will reduce the amount of time and administrative overhead required to provide services via the N3 based on the UKCloud assured cloud platform. Please provide us with your ODS code, ATP and Access Agreement Number and we'll be able to connect your UKCloud service to the N3.

You'll also need to contact NHS Digital once you have been allocated an IP address to request your route to be opened to the sites and services you need to access.

For further information, please contact your Cloud Architect who will provide guidance.

### I need a solution that's designed to face the N3 and an additional network. Can UKCloud help?

Yes. As part of the assurance process, we can help with best-practice advice on designing solutions that face multiple networks. It's important to ensure your design doesn't compromise any other networks, or leave the possibility of unauthorised bridging.

Usually, you'll need specific components of your solution to be dedicated to each network you want to use.

### Do I need an NHS sponsor to connect to UKCloud's N3?

Yes. Any connection to the N3 requires an NHS sponsor, even if you're connecting via an aggregated service such as ours.

### Do I need to complete the assurance process for each N3 service I have on your cloud platform?

Yes. For any new service, you must complete our assurance process.

It may be possible to reuse existing documentation or evidence as part of the assurance process for any new service you order.

### Do you provide an SLA on N3 connectivity?

We provide an SLA for availability of our core services such as UKCloud for VMware. We cannot provide an SLA on external services (such as the N3) as they are outside our control. UKCloud can only provide assurance associated with the native SLAs that are offered as part of the core N3 framework.

### How many N3 IP addresses will I be allocated?

You will be given one IP address per connection with the N3 per UKCloud data centre. Any additional IP addresses will need to be justified.

### How do I justify the need for more IP addresses? 

As N3 addresses are in short supply, you must use your addresses as efficiently as possible. Before additional N3 addresses can be allocated, you'll need to demonstrate your use of:

- Load balancing services - enabling several web servers to be accessed via a single externally routable IP address

- Host headers - enabling web servers to accept connections for several URLs via a single externally routable IP address

- VPN tunnelling - enabling the use of internal (RFC 1918) IP addresses for non‑production services such as UAT AND development

### Is there a cost for additional N3 IP addresses? 

Yes. There is an administration fee of £20 for each additional N3 IP address.

### How can I whitelist source N3 IP addresses on the edge gateway?

You can log into the [UKCloud Portal](https://portal.ukcloud.com/) and, within the edge gateway properties, edit the firewall settings to allow or deny incoming connections from external IP addresses.

### How does IP address allocation work on an N3 network for two front-end servers?

You can implement this in two ways:

1. Create an external org VDC network in which UKCloud routes from the ASA firewall. This can then be used for NAT to the N3 address.

2. Use one of your public IP addresses, which is then translated (using NAT) on the ASA firewall. You can then use NAT rules on your edge gateway from an external org network as described in option 1.

### How does name resolution (DNS) happen on N3?

There are two DNS servers on the N3 network. UKCloud permits access (outbound) on UDP port 53 for DNS queries.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
