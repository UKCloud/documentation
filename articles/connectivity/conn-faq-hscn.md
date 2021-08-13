---
title: HSCN connectivity FAQs
description: Frequently asked questions for HSCN Connectivity
services: connectivity
author: mwarner
reviewer: bchallis
lastreviewed: 27/04/2021

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

The Health and Social Care Network (HSCN) is designed to provide a solution for hospitals, medical centres and GPs to collaborate and access services over a secure, high-speed network. It enables third-party software solutions to be presented to frontline patient care organisations. It's a government network like the Public Services Network (PSN), but specifically designed for the health and social care community.

### Can I use UKCloud's HSCN connection without using UKCloud's cloud services?

No. We can provide a HSCN connection only to customers who use our cloud services.

### Can I use UKCloud's HSCN connection for my PoC on UKCloud's cloud services?

Yes. If you are using UKCloud for a PoC and have signed up to the terms within the HSCN Connection Agreement, then we can grant you HSCN access for your PoC.

### Does UKCloud provide local connections to the HSCN network?

No. We can't arrange HSCN connections to third party offices. We only enable our customers and partners to provide services via the HSCN, using applications and solutions hosted on the UKCloud cloud platform.

### Do you have any answers to general connectivity questions?

You can find information about other connectivity methods and answers to general connectivity questions in the [*General connectivity FAQs*](conn-faq.md).

### How do I get a HSCN connection from UKCloud?

You must sign up to the terms of the HSCN Connection Agreement before you can have access to the HSCN: <https://digital.nhs.uk/services/health-and-social-care-network/new-to-hscn/connecting-to-hscn>

1) If you think you have signed the Connection Agreement, go to <https://crm.digital.nhs.uk/hscnconnectionagreementsearch/> and search either using your organisation name or ODS code (if you don't know your ODS code, you can find it at <https://odsportal.digital.nhs.uk/>).

2) If you haven't yet received an invitation to complete your Connection Agreement, contact <enquiries@nhsdigital.nhs.uk> to request access to their online portal.

3) Once you have access to the NHS Digital online portal, sign your Connection Agreement and submit it to NHS Digital.

Alternatively, you can request a new UKCloud Master Services Agreement (MSA v11.0 or later), which contains the flow-down of the HSCN Connection Agreement terms. If you sign and submit this, you're automatically signing up to the terms of the Connection Agreement and do not need to sign a separate Connection Agreement with NHS Digital. If you'd like to sign the MSA, contact your Account Manager.

UKCloud will validate that you've signed up to the terms of the HSCN Connection Agreement before connecting your UKCloud environments to HSCN.

### Why isn't my Connection Agreement showing up in the HSCN Connection Agreement Portal?

You may find that, although you've signed the HSCN Connection Agreement, it doesn't show up in the HSCN Portal. If this happens you can either:

- Contact NHS Digial (<enquiries@nhsdigital.nhs.uk>) and ask them to update the Portal. When we can see your organisation agreement in the Portal we can give you HSCN access.

- For expediency, you can send a copy of your signed Agreement to us, and we can give you HSCN access straight away. We can then request that NHS Digital update their records for your organisation.

### What is UKCloud's ODS code? 

The UKCloud ODS code is 8J561.

You can find all ODS codes at <https://odsportal.digital.nhs.uk/> and connection agreements at <https://crm.digital.nhs.uk/hscnconnectionagreementsearch/>.

### UKCloud are not on NHS Digital's CN-SP list, can you provide HSCN?

UKCloud doesn't appear on the NHS Digital list of HSCN Consumer Network Service Providers (CN-SPs) as we are not a connectivity service provider in the same way as BT, Vodafone and Redcentric are, as we cannot provide 'cables in the ground' for consumers of HSCN. We're a Cloud Service Provider (CSP), which means we can allow customers to _share_ our HSCN link as long as they have an ODS code, a valid DSP Toolkit, are signed up to the terms in the HSCN Connection Agreement and are consuming one of our value-add services, such as our UKCloud for VMware, UKCloud for OpenStack or Virtual Desktop services. We can provide more information about this on request.

## Service

### Can UKCloud accept dedicated HSCN connections?

Yes. Our HybridConnect service option enables customers and partners to provide their own private circuits, including dedicated HSCN connections. If you want a dedicated HSCN connection to our cloud platform, our team can arrange for installation of dedicated HSCN circuits to each of our UK data centres.

In these cases, you must complete a HSCN Connection Agreement before we can implement connectivity.

### What is the resilience of the UKCloud solution?

The UKCloud assured cloud platform is connected to the HSCN in geographically diverse locations. In the unlikely event of a circuit failure, we'll continue to provide connectivity to the HSCN via our secure data centre interconnectivity and our secondary HSCN connection.

### How will I be billed?

Billing for HSCN connectivity is monthly in arrears. Charges are included in your monthly invoice, along with charges for your UKCloud services.

We charge for each UKCloud environment/service connected to HSCN, for example, each VMware compute service (vOrg) or each OpenStack project. Within each of these services, a customer may have multiple VDCs or routers that can connect to the HSCN. For example, a customer with a VMware compute service in UKCloud Region 5 and a VMware compute service and an OpenStack project in Region 6 wanting HSCN connected to all three of these services will be billed for three HSCN connections.

If you have many environments that you want to connect to HSCN, you may find that our Unlimited option, which is a flat monthly fee, regardless of how many services are connected to HSCN, a more cost-effective based on your cloud architecture.

UKCloud's HSCN pricing is available via the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

### Is there a minimum commitment period?

UKCloud charges monthly for connectivity solutions, and requires a minimum commitment of one month for HSCN connectivity.

### Will I incur an upfront cost (setup fee)?

Simple implementations of HSCN won't incur any additional setup or onboarding charges.

For complex networking solutions, we reserve the right to charge SFIA rates. We'll always tell you in advance if an engagement will incur [SFIA Rate Card](https://ukcloud.com/sfia) charges.

### Does UKCloud provide data encryption?

The HSCN is an unencrypted network and we don't provide additional data encryption.

You must encrypt the data within your applications, especially personally identifiable data (PID), with an AES256 level of encryption.

### Can I use UKCloud's HSCN connected service if I'm based outside of England?

IT Service Providers can use a share of UKCloud's HSCN connection from outside of England as long as they comply with the criteria specified in the NHS Digital guidance: <https://digital.nhs.uk/services/health-and-social-care-network/hscn-technical-guidance/hscn-private-it-service-provider-connecting-from-outside-of-englands-borders-policy>.

This guidance does not apply to NHS organisations who would need to seek clarification from NHS Digital for their specific situation.

### Will I have full and unrestricted access to the entire HSCN network?

You'll have unrestricted access to the HSCN but you may not be able to access any services presented onto HSCN until you've reached an agreement with the supplier of those services.

## Process

### Is UKCloud a HSCN Aggregator?

UKCloud is a HSCN connected Cloud Service Provider and can give you a HSCN connection to environments on our cloud, however there is no longer an aggregation programme for HSCN.

Once you're aligned with the HSCN Connection Agreement terms, either by signing your own agreement or by signing to UKCloud's terms, we'll connect you to our shared HSCN connection.

### How do I get a HSCN connected solution via the UKCloud assured cloud platform?

You can get HSCN connectivity in one of two ways.

1) Sign your own HSCN Connection Agreement. 

2) Sign up to UKCloud's MSA (version 11.0 onwards) as a consumer of our services and we cover you with the flow-down of the Connection Agreement terms. No need to get NHS Digital to counter-sign an Agreement.

Do either of these and we'll enable your access to the HSCN and provide an appropriate HSCN IP address.

### How long does the Connection Agreement process take?

If you get your own Connection Agreement, the time taken will depend on NHS Digital's speed of counter-signing your Connection Agreement.

If you sign up to the Agreement flow-down through UKCloud's MSA then it only takes as long as it would for an order to be processed.

We'll enable your connection to the HSCN within one working day of your successful completion of the assurance process.

### Do I need to contact NHS Digital to apply?

If you want to sign your own Connection Agreement then yes, you do. However, you can be covered through the flow-down of the Agreement in UKCloud's MSA, in which case, you don't.

### We're an NHS organisation and already have an HSCN connection, can I use it to connect UKCloud's services?

Yes. You'll need to provide us with your Connection Agreement and we can then provide you HSCN connectivity.

You may also need to contact NHS Digital once you've been allocated an IP address to change any DNS records.

### We are a non-NHS customer who already have HSCN connectivity, can we use your HSCN-connected cloud services?

Yes. Simply show us your Connection Agreement and we'll be able to connect your UKCloud service to the HSCN.

You may also need to contact NHS Digital once you've been allocated an IP address to change any DNS records.

### I need a solution that's designed to face the HSCN and an additional network. Can UKCloud help?

Yes. We can help with best practice advice on designing solutions that face multiple networks. It's important to ensure your design doesn't compromise any other networks or leave the possibility of unauthorised bridging.

Usually, you'll need specific components of your solution to be dedicated to each network you want to use.

### Do I need an NHS sponsor to connect to UKCloud's HSCN?

You don't need a sponsor to connect to HSCN, however you may need a sponsor to connect to HSCN-connected services such as Spine or Emis.

### Do I need to complete a Connection Agreement for each HSCN service I have on your cloud platform?

No. you only need one signed Connection Agreement or UKCloud's [terms and conditions](../other/other-ref-terms-and-conditions.md) to present multiple services to HSCN.

However, you may need to create an accreditation pack for each individual service to present to the Information Accreditors who are looking at the security of your application before customers will procure it.

### Do you provide an SLA on HSCN connectivity?

We provide an SLA for availability of our core services such as UKCloud for VMware. We cannot provide an SLA on external services (such as the HSCN) as they are outside our control. UKCloud can only provide assurance associated with the native SLAs that are offered as part of the core HSCN framework.

### How many HSCN IP addresses will I be allocated?

You will be given one (1) useable IP address per HSCN edge/router. Any additional IP addresses will need to be justified and are an additional cost.

You can be allocated up to 5 IP addresses per connection. If you require more than 5 IPs per connection you'll need to request additional IPs from NHS Digital, which we can advertise on your behalf.

### How do I justify the need for more IP addresses?

As IPv4 addresses are in short supply, you must use your addresses as efficiently as possible. Before additional HSCN addresses can be allocated, you'll need to demonstrate your use of:

- Load balancing services - enabling several web servers to be accessed via a single externally routable IP address

- Host headers - enabling web servers to accept connections for several URLs via a single externally routable IP address

- VPN tunnelling - enabling the use of internal (RFC 1918) IP addresses for non-production services such as UAT and development

### Is there a cost for additional HSCN IP addresses?

Yes. There is an administration fee of £20 for each additional HSCN IP address.

### How can I create an allow-list of source HSCN IP addresses on the edge gateway?

You can log in to VMware Cloud Director via the UKCloud Portal and edit the firewall settings to allow or deny incoming connections from external IP addresses. See [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md) for more details.

### How does IP address allocation work on a HSCN network with two front-end servers?

You can implement this in two ways:

- Create an external org VDC network in which UKCloud routes from the ASA firewall. This can then be used for NAT to the HSCN address.

- Use one of your public IP addresses, which is then translated (using NAT) on the ASA firewall. You can then use NAT rules on your edge gateway from an external org network as described in option 1.

### How does name resolution (DNS) happen on HSCN?

There are two DNS servers on the HSCN network, which are looked after by the NHS Digital DNS team. UKCloud permits access (outbound) on UDP port 53 for DNS queries.

To request a DNS change, email <dnsteam@nhs.net>, who require the following information:

- Domains that you want to change

- Old IP address(es)

- New IP address(es)

- Date and time of change

We recommend a couple of days lead time as there may be scheduling issues, though these can be waived in emergencies.

Please note that IP changes are not instantaneous and may take some time to propagate fully. We can perform out of hours changes for NHS customers.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
