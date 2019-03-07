---
title: HSCN connectivity FAQs | UKCloud Ltd
description: Frequently asked questions for HSCN Connectivity
services: connectivity
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: HSCN connectivity FAQs
toc_fullpath: FAQs/conn-faq-hscn.md
toc_mdlink: conn-faq-hscn.md
---

# HSCN connectivity FAQs

## General

### What is HSCN?

The Health and Social Care Network (HSCN) is the replacement for the N3, which is being phased out in March 2019. The HSCN is designed to provide a solution for hospitals, medical centres and GPs to collaborate and access services over a secure, high speed network. Like the N3, it will enable third-party software solutions to be presented to front-line patient care organisations. It is a government network like the PSN, but specifically designed for the health and social care community.

### When will HSCN be available from UKCloud?

We'll be able to provide HSCN connectivity from June 2018. In the meantime, we can provide you with N3 connectivity and we'll contact you to arrange migration to HSCN from June 2018.

### Can I use UKCloud's HSCN connection without using UKCloud's cloud services?

No. We can provide an HSCN connection only to customers who use our cloud services, such as our Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) offerings.

### Does UKCloud provide local connections to the HSCN network?

No. We can't arrange HSCN connections to third party offices. We only enable our customers and partners to provide services via the HSCN, using applications and solutions hosted on the UKCloud cloud platform.

### Do you have any answers to general connectivity questions?

You can find information about other connectivity methods and answers to general connectivity questions in the [*General connectivity FAQs*](conn-faq.md) document on the UKCloud Portal.

### How do I get an HSCN connection from UKCloud?

You must sign up to the terms of the HSCN Connection Agreement before you can have access to the HSCN: <https://digital.nhs.uk/services/health-and-social-care-network/new-to-hscn/connecting-to-hscn>

1) If you think you have signed the Connection Agreement, go to <https://crm.digital.nhs.uk/hscnconnectionagreementsearch/> and search either using your Organisation name or ODS code 

2) If you haven't yet received an invitation to complete your Connection Agreement, please contact <enquiries@nhsdigital.nhs.uk> to request access to their online portal

3) Once you have access to the NHS Digital online portal, sign and submit your Connection Agreement to NHS Digital

Alternatively, you can request a new UKCloud Master Services Agreement (MSA v11.0) which contains the flow-down of the HSCN Connection Agreement terms. If you sign and submit this, then you are automatically signing up to the terms of the Connection Agreement, and do not need to sign a separate Connection Agreement with NHS Digital. If you would like to sign the MSAv11.0 then please contact your Account Manager.

UKCloud will validate that you have signed up to the terms of the HSCN Connection Agreement before connecting you to HSCN.

## Migration

### How do I migrate my existing UKCloud N3 workload onto HSCN?

First you need to align with the HSCN Connection Agreement. You can do this by either signing your own Connection Agreement and having NHS Digital counter-sign. You can then supply us with a copy of it. Alternatively, you can sign the UKCloud Master Services Agreement (MSA version 11.0 onwards) and be covered by the flow-down of the Connection Agreement terms.

Once you have a Connection Agreement in place, you will need to raise a service request for HSCN.

We will give you a new Edge or Router with as many HSCN IPs as you are currently using for N3 assigned to it.

You will be able to use this Edge and IP addresses to perform any testing that you require to validate the connectivity you require to support your application on the HSCN.

Once you are comfortable with the HSCN you have two choices:

1. You can create new application networks from your new HSCN Edge and connect to new NICs on your VMs to present your service over the new IPs.

2. You can ask UKCloud to attach HSCN connectivity to your existing N3 Edge. When you are ready to migrate, you can ask UKCloud to change the Edge's Default Gateway from N3 to HSCN to cut over.

Note that in both scenarios you will be responsible for VM routing configurations, Edge rules / security groups and DNS changes needed to move your service. There may be some connectivity downtime as you make the configuration changes in your environment and DNS changes on HSCN.

When you are comfortable, we will decommission your N3 connection and your N3 Edge.

### How do I migrate my non-UKCloud N3 workload to HSCN on UKCloud?

You have multiple ways of migrating your workload to UKCloud. One way to migrate to UKCloud is over the Internet, if your current environment has internet connectivity. Alternatively, you could migrate over N3.

If you already have N3 approval, you may be eligible for N3 connectivity within UKCloud (see [*N3 FAQs*](conn-faq-n3.md) for more details). You can then move your workload over to UKCloud via the N3 either by VM transfer or our Workload Migration service. (see [*How to migrate your workloads to the UKCloud platform*](../migration/migr-how-zerto-migrate-to-ukcloud.md) for migrating your workloads to UKCloud).

Once you have got your Connection Agreement terms in place, you can then have HSCN connectivity and can connect your VMs to HSCN.

When you are comfortable, we will decommission your N3 connection.

For more information about moving to UKCloud, please speak to your Cloud Architect.

### Will I be billed for HSCN and N3 connectivity at the same time while migrating?

HSCN will be provided free for one month per connection for existing customers who are migrating existing UKCloud-hosted applications from N3 to HSCN. After one month, UKCloud reserves the right to begin charging for the HSCN connections unless the migration of an environment from N3 to HSCN cannot be completed within the month due to UKCloud being unable to provide a migration slot.

### Will there be additional costs for migration?

Migration assistance in-hours (8am-8pm) will be done free-of-charge, if out-of-hours (8pm-8am) migration support is required then a SFIA rate for engineer time may be applied to the migration.

## Service

### Can UKCloud accept dedicated HSCN connections?

Yes. Our HybridConnect service option enables customers and partners to provide their own private circuits, including dedicated HSCN connections. If you want a dedicated HSCN connection to our cloud platform, our team can arrange for installation of dedicated HSCN circuits to each of our UK data centres.

In these cases, you must complete a HSCN Connection Agreement before we can implement connectivity.

### What is the resilience of the UKCloud solution?

The UKCloud assured cloud platform is connected to the HSCN in geographically diverse locations. In the unlikely event of a circuit failure, we'll continue to provide connectivity to the HSCN via our secure data centre interconnectivity and our secondary HSCN connection.

### How will I be billed?

Billing for HSCN connectivity is monthly in arrears. Charges are included in your monthly invoice, along with charges for your UKCloud services.

We charge for each separate connection on the UKCloud platform at the Service vOrg/Project level UKCloud pricing is available via the [G-Cloud Digital Marketplace](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/772343517162961-pricing-document-2018-05-23-0842.pdf)

### Is there a minimum commitment period?

UKCloud charges monthly for connectivity solutions, and requires a minimum commitment of one month for HSCN connectivity.

### Will I incur an upfront cost (setup fee)?

Simple implementations of HSCN won't incur any additional setup or onboarding charges.

For complex networking solutions, we reserve the right to charge SFIA rates. We'll always tell you in advance if an engagement will incur [SFIA rate card](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/772343517162961-sfia-rate-card-2018-05-21-1251.pdf) charges.

### Does UKCloud provide data encryption?

The HSCN is an unencrypted network and we don't provide additional data encryption.

You must encrypt the data within your applications, especially personally identifiable data (PID), with an AES256 level of encryption.

### Can I use UKCloud's HSCN connected service if I'm based outside of England?

No. At present only organisations located in England can use UKCloud's connection to the HSCN. This restriction unfortunately precludes organisations residing elsewhere in the UK (Scotland, Wales and Northern Ireland) from using the UKCloud HSCN connectivity service.

If you're not based in England, please get in touch with us so we can discuss alternative methods of connection to the HSCN.

### Will I have full and unrestricted access to the entire HSCN network?

You will have unrestricted access to the HSCN but you may not be able to access any services presented onto HSCN until you have reached an agreement with the supplier of those services.

## Process

### What has happened to your status as 'N3 Aggregator'?

UKCloud achieved N3 aggregator status by meeting the strict information governance standards set by NHS Digital, which were required for all organisations that connect to N3. With HSCN, this changes slightly.

We will be an HSCN aggregator but will no longer need to take you through an aggregation process to connect you to HSCN.

Once you are aligned with the HSCN Connection Agreement terms, either by signing your own agreement, or by signing to UKCloud's terms, we will connect you to our aggregated HSCN connection.

### How do I get an HSCN-connected solution via the UKCloud assured cloud platform?

You can get HSCN connectivity in one of two ways.

1) Sign your own Connection Agreement, have this counter-signed by NHS Digital and then send us a copy

2) Sign up to UKCloud's MSA (version 11.0 onwards) as a consumer of our services and we cover you with the flow-down of the Connection Agreement terms. No need to get NHS Digital to counter-sign an Agreement.

Do either of these and we'll enable your access to the HSCN and provide an appropriate HSCN IP address.

### How long does the Connection Agreement process take?

If you get your own Connection Agreement then the time taken will depend on NHS Digital's speed of counter-signing your Connection Agreement.

If you simply sign up to the Agreement flow-down through UKCloud's MSA then it only takes as long as it would for an order to be processed.

We'll enable your connection to the HSCN within one working day of your successful completion of the assurance process.

### Do I need to contact NHS Digital to apply?

If you want to sign your own Connection Agreement then yes, you do. However, you can be covered through the flow-down of the Agreement in UKCloud's MSA, in which case, you don't.

### We're an NHS organisation and already have an HSCN connection, can I use it to connect UKCloud's services?

Yes. You'll need to provide us with your Connection Agreement and we can then provide you HSCN connectivity.

You may also need to contact NHS Digital once you have been allocated an IP address to change any DNS records.

### We are a non-NHS customer who already have HSCN connectivity, can we use your HSCN-connected cloud services?

Yes. Simply show us your Connection Agreement and we'll be able to connect your UKCloud service to the HSCN.

You may also need to contact NHS Digital once you have been allocated an IP address to change any DNS records.

### I need a solution that's designed to face the HSCN and an additional network. Can UKCloud help? **

Yes. We can help with best-practice advice on designing solutions that face multiple networks. It's important to ensure your design doesn't compromise any other networks, or leave the possibility of unauthorised bridging.

Usually, you'll need specific components of your solution to be dedicated to each network you want to use.

### Do I need an NHS sponsor to connect to UKCloud's HSCN?

You won't need a sponsor to connect to HSCN, however you may need a sponsor to connect to HSCN-connected services such as Spine or Emis.

### Do I need to complete a Connection Agreement for each HSCN service I have on your cloud platform?

No. you only need one signed Connection Agreement or UKCloud's [terms and conditions](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/772343517162961-terms-and-conditions-2018-05-21-1251.pdf) to present multiple services to HSCN.

However, you may need to create an accreditation pack for each individual service to present to the Information Accreditors who are looking at the security of your application before customers will procure it.

### Do you provide an SLA on HSCN connectivity?

We provide an SLA for availability of our core services such as Enterprise Compute Cloud. We cannot provide an SLA on external services (such as the HSCN) as they are outside our control. UKCloud can only provide assurance associated with the native SLAs that are offered as part of the core HSCN framework.

### How many HSCN IP addresses will I be allocated?

You will be given one (1) useable IP address per HSCN Edge/router. Any additional IP addresses will need to be justified and are an additional cost.

You can be allocated up to 5 IP addresses per connection. If you require more than 5 IPs per connection you will need to request additional IPs from NHS Digital and we can advertise them on your behalf.

### How do I justify the need for more IP addresses?

As IPv4 addresses are in short supply, you must use your addresses as efficiently as possible. Before additional HSCN addresses can be allocated, you will need to demonstrate your use of:

- Load balancing services - enabling several web servers to be accessed via a single externally routable IP address

- Host headers - enabling web servers to accept connections for several URLs via a single externally routable IP address

- VPN tunnelling - enabling the use of internal (RFC 1918) IP addresses for non-production services such as UAT AND development

### Is there a cost for additional HSCN IP addresses?

Yes. There is an administration fee of £20 for each additional HSCN IP address.

### How can I whitelist source HSCN IP addresses on the edge gateway?

You can log into the UKCloud Portal and, within the edge gateway properties, edit the firewall settings to allow or deny incoming connections from external IP addresses.

### How does IP address allocation work on an HSCN network for two front-end servers?

You can implement this in two ways:

1. Create an external org VDC network in which UKCloud routes from the ASA firewall. This can then be used for NAT to the HSCN address.

2. Use one of your public IP addresses, which is then translated (using NAT) on the ASA firewall. You can then use NAT rules on your edge gateway from an external org network as described in option 1.

### How does name resolution (DNS) happen on HSCN?

There are two DNS servers on the HSCN network which is looked after by the NHS Digital DNS team. UKCloud permits access (outbound) on UDP port 53 for DNS queries.

To request a DNS change, please email <dnsteam@nhs.net>, who require the following information:

1. Domains that you wish to change.

2. Old IP address(es).

3. New IP address(es).

4. Date and Time of Change.

We recommend a couple of days lead time as there may be scheduling issues, though these can be waived in emergencies.

Please note that IP changes are NOT instantaneous and may take some time to propagate fully. We can do out of hours changes for NHS customers

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.