---
title: Janet connectivity FAQs
description: Frequently asked questions for Janet connectivity
services: connectivity
author: Matt Warner
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Janet connectivity FAQs
toc_fullpath: FAQs/conn-faq-janet.md
toc_mdlink: conn-faq-janet.md
---

# Janet connectivity FAQs

## What is Janet?

Janet is the UK's research and education network. It is connected to all education organisations and research councils.

Janet is a free-of-charge network that eligible UKCloud customers can use; there are no ingress or egress charges for this network. It's presented from our Assured platform and has a current bandwidth capacity of 1Gbps from each of our data centres, scalable to 100s of Gbps. The Janet connections are diversely routed for resilience and utilise Border Gateway Protocol (BGP) between data centres to ensure high availability of connections. 

## Who is entitled to connect to the Janet network?

Any organisation that is either publicly funded or receives government or EU funding to drive digital initiatives are entitled to use the Janet network.

## Can I use UKCloud's Janet connection without using cloud services provided by UKCloud?

No. We can only provide a Janet connection to customers who use our cloud services, such as our Infrastructure as a Service (IaaS), Platform as a Service (PaaS) or Software as a Service (SaaS) offerings.

## Does UKCloud provide local connections to the Janet network?

No. We can't arrange Janet connections to third-party offices. We only enable our customers and partners to provide services via the Janet network, using applications and solutions hosted on the UKCloud Assured OFFICIAL cloud platform.

## Does UKCloud support dedicated Janet connections?

Yes. Our HybridConnect service option allows customers and partners to provide their own private circuits, including dedicated Janet connections. If you would like a dedicated Janet connection to our cloud platform, we can arrange for the installation of dedicated Janet circuits to each of our UK data centres.

## Which UKCloud data centre has Janet connectivity?

Both our Corsham and Farnborough sites have Janet connectivity

## How do I get a Janet connection via the UKCloud Assured OFFICIAL security domain?

To place an order for a Janet connection, please raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal or speak to your Service Delivery Manager.

## Can I get a Janet connection via the UKCloud Elevated OFFICIAL security domain?

No, Janet connections are only available in our Assured OFFICAL security domain.

## I have multiple vShield Edges and need to configure a specific Janet route. How do I set this up?

To configure specific routing to allow access to each network, a routing table is available from UKCloud support.

## If I already have a Janet connection, can I use cloud services provided by UKCloud?

Yes. A pre-existing connection to Janet will reduce the amount of time required to provision services via the Janet network based on the UKCloud Assured OFFICIAL security domain.

## Is there an SLA on Janet connectivity?

We provide an SLA for availability of our core services such as UKCloud for VMware and UKCloud for OpenStack. We cannot provide an SLA on external services as they are outside of our control.

## How can I whitelist source Janet IP addresses on the edge gateway?

You can log onto the UKCloud Portal and, within vCloud Director administration edit the firewall settings to allow or deny incoming connections from external IP addresses. See the [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md) for more details.

## Can I use UKCloud as a transit or gateway between different connections?

No. Our cloud platforms are designed so that all traffic either originates or terminates within our platform. We can't facilitate routing between connections. If your solution needs to service users on different networks, this will need to be implemented, managed and accredited within your application or through an authorised gateway service.

## Is there a minimum commitment period?

There is no minimum commitment for Janet connectivity.

## How will I be billed?

There is no charge for Janet connectivity or for the first IP address for each data centre you are connected to the Janet network.

Additional IP addresses will need to be justified and an admin fee will apply of £20 per additional IP address that is set up.

There is no charge for bringing your own Janet IP addresses.

## Will I incur an upfront cost (setup fee)?

UKCloud will set up new connections to the Janet network for you free of charge.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
