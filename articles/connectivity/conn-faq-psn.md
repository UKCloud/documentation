---
title: PSN connectivity FAQs | UKCloud Ltd
description: Frequently asked questions for PSN connectivity
services: connectivity
author: Matt Warner
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: PSN connectivity FAQs
toc_fullpath: FAQs/conn-faq-psn.md
toc_mdlink: conn-faq-psn.md
---

# PSN connectivity FAQs

## General

### What is PSN?

The Public Services Network (PSN) is the government's high-performance network, which helps public sector organisations work together, reduce duplication and share resources.

### What is the difference between PSN Assured and PSN Protected?

PSN Assured carries non-encrypted traffic at the network and application layers, whereas PSN Protected carries traffic that contains a shared IPsec encrypted overlay.

### Who is entitled to connect to the PSN network?

Any organisation that is approved by the PSN can connect.

If you want PSN connectivity, you must have proven to the PSN that your infrastructure is sufficiently secure to connect to or be consumed via the PSN. This means that you must have successfully completed the process of obtaining a PSN Code of Connection (CoCo).

In addition, if you're a partner selling a managed service over the PSN connectivity, you must either:

- Have your own PSN CoCo and PSN Code of Practice (CoP) in place, or

- Have specific agreement from the data‑owning end customer that you are authorised to be covered by the customer's CoCo

You can find more details [here](https://www.gov.uk/guidance/public-services-network-psn-compliance).

### How do I apply for a PSN CoCo?

You can apply for your PSN CoCo via the following links:

- [PSN Service Provision Compliance Certificate](https://www.gov.uk/guidance/apply-for-a-public-services-network-psn-service-provision-compliance-certificate)

- [PSN Connection Compliance Certificate](https://www.gov.uk/guidance/apply-for-a-public-services-network-psn-connection-compliance-certificate)

### How do I apply for a PSN CoP?

You must have a CoCo before you can apply for a CoP and list the UKCloud Service Numbers in your application. For the current CoP application form, click [here](https://www.gov.uk/government/publications/psn-code-of-practice-cop). You must have your CoP in place before we can accept your order.

### What are UKCloud's PSN service numbers?

Click [here](https://www.gov.uk/government/publications/public-services-network-psn-service-compliance/psn-compliant-services) for a list of our PSN approved services.

### Do you have any general connectivity questions?

You can find information about other connectivity methods and answers to general connectivity questions in the [*General Connectivity FAQs*](conn-faq.md).

## Service

### Can I connect to your Elevated OFFICIAL security domain using the unencrypted PSN Assured Service?

No. We currently support connectivity to the unencrypted PSN Assured Service via our Assured OFFICIAL cloud platform only. The PSN Assured Service is [CAS(T) compliant](http://www.cesg.gov.uk/servicecatalogue/service_assurance/CAS/Pages/Service-Requirements.aspx) and so suitable for some OFFICIAL data (previously IL2 data).

Customers wanting to use the Elevated OFFICIAL cloud platform typically have more sensitive requirements related to the confidentiality and integrity of their data, and so are more likely to require the encrypted PSN Protected Service. Only the encrypted PSN Protected Service can connect to legacy IL3 networks such as GSI.

### Can I connect to the UKCloud Elevated OFFICIAL cloud platform using a private encrypted PSN closed user group (CUG)?

Yes, you can use HybridConnect to deploy your own PSN circuit and associated CUG.

However, the PSN strongly prefers customers to connect to PSN Services (such as the UKCloud Elevated OFFICIAL cloud platform) via the PSN Protected Service, which uses the IPED (Inter Provider Encryption Domain) to provide secure, encrypted connectivity independent of the underlying DNSP access connection.

PSN CUGs are DNSP specific, and so potentially lock customers in, as these connections usually have minimum contract periods and other commercial barriers.

### Can I have a combination of government community networks and private accredited networks into the same UKCloud solution?

Yes, subject to compliance with information assurance requirements, as only organisations that demonstrate compliance with the appropriate [code of connections](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/193704/PSN_Compliance_Zero_tolerance_approach.pdf) (for example PSN compliance certificate or approved N3 IGSoC) can have access to government community networks.

You should be careful not to misconfigure self‑managed components of the solution (OS, application) to 'bridge' between government community networks (PSN) and private networks. This concern must be addressed by accreditation of the customer-managed components - preferably via PSN Accreditation. Local departmental accreditation by a public-sector customer is also allowed. This applies to solutions on both our Assured OFFICIAL and Elevated OFFICIAL cloud platforms.

The UKCloud Assured OFFICIAL cloud platform features connectivity to the PSN Assured Service (previously IL2). This is provided via resilient, high‑capacity PSN circuits from VMB installed into each of our data centres.

The UKCloud Elevated OFFICIAL cloud platform is connected to the encrypted PSN Protected Service (previously IL3) via the IPED. This is provided using circuits from Vodafone into each UKCloud data centre. The PSN Protected Service also provides onward connectivity to legacy government community networks such as PNN and CJX.

For both PSN services, we use our data centre interconnectivity (DCI) to provide additional resilience through triangulation.

### How have you implemented your GSI connections?

UKCloud uses Vodafone for connectivity to the encrypted PSN Protected Service into the Elevated OFFICIAL cloud platform. This connection uses the IPED to provide native connectivity to GSI and other legacy government community networks, including GSE, PNN and CJX.

Scalable, resilient PSN Protected Service connections are installed into each of our data centres. We use our DCI to provide additional resilience through triangulation.

### Do you have an encrypted PSN Protected Service connection?

Our Elevated OFFICIAL cloud platform is connected to the encrypted PSN Protected Service (previously IL3) via the IPED. This is provided by circuits from Vodafone into each of our data centres.

The PSN Protected Service also provides onward connectivity to other government community networks, such as GSI, GSE, PNN and CJX.

### How long is the lead time for provisioning PSN service into my solution?

You request connectivity to the PSN by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. We typically require two working days to provision the PSN service from receipt of an accepted request.

If your solution requires many PSN IP addresses, we may need more time to work with you to get your PSN IP addresses configured to work with your solution hosted on our cloud platform.

If you require [additional PSN IP addresses](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/81660/PSN-IP-Address-Allocation-Guidance-v1-4.pdf), you'll need to request them from the PSN.

### Do you provide an SLA on PSN connectivity?

We provide an SLA for availability of our core services such as UKCloud for VMware. We cannot provide an SLA on external services (such as PSN) as they are outside our control. UKCloud can only provide assurance associated with the native SLAs that are offered as part of the core PSN framework.

### What is your policy on IP addressing?

We've designed our cloud to give you complete control and autonomy over the private ([RFC 1918](https://tools.ietf.org/html/rfc1918)) IP address space you deploy within your virtual data centre (VDC).

You can use the self-managed virtual firewall to implement a VPN tunnel, network address translation (NAT) and load balancing to control how you publish the services within your VDC to external networks.

For PSN connections to either of our security domains, the PSN has provided us with a [limited allocation of PSN IP addresses](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/81660/PSN-IP-Address-Allocation-Guidance-v1-4.pdf). The PSN requires customers who need more than a few PSN IP addresses to use their own PSN IP allocation and, if more are needed, to justify an additional allocation directly with the PSN. We will work with you to facilitate the allocation of your PSN IP addresses to your services hosted on our cloud platforms.

With the PSN IP addresses, you can establish:

- Source NAT - all outbound traffic to other resources on the PSN will appear to come from one of these IPv4 addresses.

- Destination NAT - all inbound traffic from other resources on the PSN must be targeted at one of these IPv4 addresses. You can translate the PSN IPv4 address to an internal (RFC 1918) IP address assigned to a VM or, preferably, to the edge gateway load balancer.

- A VPN - an IPsec VPN between the IPv4 address of the virtual firewall and the IPv4 address of the firewall at another site. Once the VPN has been established, both sites can directly access the internal (RFC 1918) IP addresses.

Before additional IPv4 addresses can be allocated, you'll need to demonstrate your use of:

- Load balancing services - enabling several web servers to be accessed via a single externally routable IP address

- Host headers - enabling web servers to accept connections for several URLs via a single externally routable IP address

- VPN tunnelling - enabling the use of internal (RFC 1918) IP addresses for non‑production services such as UAT and development

### Is the PSN connection into UKCloud shared by all environments connected to the PSN?

PSN is a shared connection and all UKCloud PSN‑enabled customers use a shared bandwidth model.

### Does each PSN environment have a maximum limit assigned to it?

We don't publish limits associated with PSN bandwidth as we capacity‑manage this link to ensure there is always enough bandwidth for our customers. Consumption of PSN bandwidth is based on the actual volume of data transferred (outbound) per month.

### What is the notice period for PSN termination?

The notice period for PSN termination is 30 days.

### How do I make DNS changes?

You'll need to complete the PSN DNS order form, PSN domain name authorisation request form and the PSN customer change form. You can find these forms at: <https://www.gov.uk/government/publications/psn-dns-change-forms>

You then need to submit the completed forms to: <gcforderdesk@vodafone.com>

If you don't have an existing contract with Vodafone, a billing account and remedy name will need to be created.

### How do I order PSN connectivity?

When placing an order through your account manager or when raising a service request, you need to provide evidence of your entitlement to connect to the PSN.

You will also need to provide updated PSN approval when your certificate expires.

### How will I be billed for PSN?

Billing for PSN is monthly in arrears. Charges are included in your monthly invoice, along with charges for your UKCloud services.

Changes depend on whether you're on PSN Assured or PSN Protected and whether you have selected the unmetered data transfer option:

- If you're on PSN Assured, you'll be charged for outbound data used in the month once you have exceeded 1TB.

- If you're on PSN Protected, you'll be charged a monthly starter pack fee for the outbound data used which provides 250GB per month. Additional usage will be charged as per the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

- For either service, if you have the Unmetered Data Transfer option, you'll be charged a set fee for the month.

We charge for each separate connection on the UKCloud platform.

UKCloud pricing is available via the [*UKCloud Pricing Guide*](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-pricing-guide-11.0.pdf).

### How does PSN for Policing work?

Cryptographic overlays on top of the PSN network are created that prevent PSN customers from seeing the closed Police network.

Please engage with a UKCloud Cloud Architect for more details.

### What is the suggested Maximum Transition Unit (MTU) for PSN?

We suggest an MTU size of 1400 bytes for further information. For more information, see this [*DDoS mitigation causing VPN failures and slow applications*](conn-ref-ddos-mitigation.md).

### What PSN Code of Connection (CoCo) do I need to get PSN connectivity on UKCloud?

The [guidance](https://www.gov.uk/government/groups/public-services-network) from PSN Authority is as follows:

- The PSN CoCo from non-government organisations is called the PSN Service Provision Compliance Certificate. This certificate is the one that is relevant to workloads facing PSN -- there are other PSN CoCos, however are not applicable for non-government organisations.

- You can present us with one of two CoCos. If you present us with a *PSN Service Provision Compliance Certificate* then it needs to be applicable to that project or a blanket Service Provision Compliance Certificate, covering many projects that you are doing. The other PSN CoCo, *PSN Connection Compliance Certificate*, allows the access to connect to PSN to send and receive data from services on it, including creating PSN-connected environments for yourselves on UKCloud.

### I am a government organisation, what do I need to show you to get PSN connectivity for my UKCloud environment?

You must do either of the following:

- Supply us with a project specific PSN Service Provision Compliance Certificate

- Supply us with a blanket PSN Service Provision Compliance Certificate that covers all projects you are doing

- Supply us with a PSN Connection Compliance Certificate, validating that you are connected to PSN

### I am a non-government organisation but I am supplying a service to a single government organisation. What do I need to show you to get PSN connectivity to my environment?

- If the government customer is supplying the CoCo, this must be a blanket or project specific PSN Service Provision Compliance Certificate, covering all projects that the government organisation is doing and we must see a statement from the government organisation's SIRO/IA with confirmation to use their CoCo.

- If the government customer is not supplying them with the CoCo, they will need to apply for a PSN Service Provision Compliance Certificate for themselves.

A PSN Connection Compliance Certificate is not an acceptable CoCo.

### I am a non-government organisation providing a service to multiple government organisations. What do I need to show you to get PSN connectivity to my environment?

You will need a PSN Service Provision Compliance Certificate for your organisation.

### Can I take my assigned PSN IPs with me if I ever migrate away from UKCloud?

No, the PSN IPs we have are assigned to UKCloud by the PSN Authority so they are not transferrable.

If you apply for your own range of IPs from the PSN Authority, then we can advertise these on your behalf, allowing you to own these IPs and move them if you wish.

### Can I bring my own PSN IPs to UKCloud?

Yes, if you want to bring your own IPs then we can advertise them on your behalf. These are available from the PSN authority.

For solutions requiring many PSN IPs we would encourage you to bring your own range.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
