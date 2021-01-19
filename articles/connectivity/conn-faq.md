---
title: General connectivity FAQs
description: Frequently asked questions for general connectivity
services: connectivity
author: mwarner
reviewer: nstobbart
lastreviewed: 19/07/2018

toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: General connectivity FAQs
toc_fullpath: FAQs/conn-faq.md
toc_mdlink: conn-faq.md
---

# General connectivity FAQs

## What options do I have to connect to my solution hosted on the UKCloud Assured OFFICIAL security domain?

The UKCloud Assured OFFICAL security domain is PSN accredited to host OFFICIAL data (including OFFICIAL SENSITIVE) that is accessible via the internet or the PSN service. You can also connect via internet, HSCN and Janet dependent on relevant accreditation.

Our Assured OFFICAL security domain follows best commercial practice, so certain insecure traffic types are restricted. In general, it's good practice to connect to your Assured OFFICIAL solution via an IPsec VPN (using commercial-grade encryption), which you configure via your self-managed virtual firewall. Within the VPN tunnel, you can use any protocol, giving you maximum flexibility. You can also configure your solution to allow other traffic encrypted using SSL or TLS. Use of non-encrypted traffic should be minimised.

As our Assured OFFICIAL security domain is PSN accredited, you can also connect to your solution via our resilient and scalable PSN service connections. Alternatively, you can use HybridConnect options by, for example, installing your own CAS(T)-compliant private circuit.

## Can I connect to my solution using SSL VPN?

Our Assured OFFICAL and Elevated OFFICAL security domains both support SSL VPN (configured from within the edge gateway), but we do not recommend it other than for occasional remote administration purposes by a small number of administrators. If you need more extensive use of SSL VPN, we recommend you deploy a dedicated VPN appliance, such as OpenVPN.

## Can I use UKCloud as a transit or gateway between different connections?

No. Our cloud platform is designed so that all traffic either originates or terminates within our platform. We can't facilitate routing between connections. If your solution needs to service users on different networks, this will need to be implemented, managed and accredited within your application or an authorised gateway service.

## Do you provide an SLA on internet/PSN/HSCN/Janet connectivity?

We provide an SLA for availability of our core services such as UKCloud for VMware. We cannot provide an SLA on external services as they are outside our control. UKCloud can only provide assurance associated with the native SLAs that are offered as part of the core PSN framework.

## How is resiliency managed on external networks?

Networks such as the internet and PSN, Janet and HSCN community networks are brought into UKCloud via diverse routes to ensure resilience of the connections. In the case of internet connectivity, we also use diverse supplier networks to ensure supplier resilience. Once within the UKCloud environment, we use Border Gateway Protocols (BGP) and our private inter-data centre fibre networks to triangulate the network connections. This means that in the event of an issue with one of the networks within a single data centre, we can reroute external connectivity via the second data centre.

## Why doesn't the UKCloud SLA extend to external connectivity such as PSN and the internet?

The UKCloud SLA provides our customers with assurance that our platform is designed, engineered and operated to deliver high levels of availability and uptime. We've invested in skilled and experienced people, ISO 20000-certified IT service management processes and best-in-class technology - all of which underpin our cloud services and enable us to deliver high availability.

When it comes to external connectivity, we depend on services provided by third parties. In some cases (such as PSN and Janet), we have no choice over which connectivity provider to work with, as this is mandated by the government framework. These services are available only as managed connections, so our SLA can only extend to the inside interface of the managed router deployed and maintained by the third party. Although we work closely with third-party providers to engineer a highly available solution, the actual delivery of the service is outside our control.

For more open networks, such as the internet, we use multiple connectivity providers to further mitigate the impact of a service failure on the part an individual connectivity provider. Even so, failure scenarios can still occur beyond the UKCloud boundary, which can affect the service that customers receive (for example, congestion on the internet, localised failures within the provider's network or their peering agreement).

## What is your policy on IP addressing?

We've designed our cloud to give you complete control and autonomy over the private ([RFC 1918](https://tools.ietf.org/html/rfc1918)) IP address space you deploy within your virtual data centre (VDC). You can use the self-managed virtual firewall to implement a VPN tunnel and network address translation (NAT) and load balancing to control how you publish the services within your VDC to external networks.

For the UKCloud Assured OFFICIAL security domain, we allocate at least five usable [RIPE IPv4 addresses](https://www.ripe.net/publications/news/about-ripe-ncc-and-ripe/the-ripe-ncc-has-run-out-of-ipv4-addresses), which are fully routable on the internet.

With these addresses, you can establish:

- Source NAT - all outbound traffic to other resources on the internet will appear to come from one of these IPv4 addresses.

- Destination NAT - all inbound traffic from other resources on the internet must be targeted at one of these IPv4 addresses. You can translate the internet IPv4 address to an internal (RFC 1918) IP address assigned to a virtual machine (VM) or, preferably, to the edge gateway load balancer.

- A VPN - an IPsec VPN can be established between the IPv4 address of the virtual firewall and the IPv4 address of the firewall at another site. Once the VPN has been established, both sites can directly access the internal (RFC 1918) IP addresses.

For PSN connections to either of our cloud platforms, the PSN Authority has provided us with a [limited allocation of PSN IP addresses](https://www.gov.uk/government/publications/public-services-network-psn-ip-address-allocation). The PSN Authority requires customers who need more than a few PSN IP addresses to use their own PSN IP allocation and, if more are needed, to justify an additional allocation directly with the PSN Authority. UKCloud will work with customers to facilitate the allocation of their PSN IP addresses to their services hosted on our cloud platform.

With the PSN IP addresses, you can establish:

- Source NAT - all outbound traffic to other resources on the PSN will appear to come from one of these IPv4 addresses.

- Destination NAT - all inbound traffic from other resources on the PSN must be targeted at one of these IPv4 addresses. You can translate the PSN IPv4 address to an internal (RFC 1918) IP address assigned to a VM or, preferably, to the edge gateway load balancer.

- A VPN - an IPsec VPN can be established between the IPv4 address of the virtual firewall and the IPv4 address of the firewall at another site. Once the VPN has been established, both sites can directly access the internal (RFC 1918) IP addresses.

As both PSN and RIPE IPv4 addresses are in short supply, you must use your addresses as efficiently as possible. Before additional IPv4 addresses can be allocated, you'll need to demonstrate your use of:

- Load balancing services - enabling a number of web servers to be accessed via a single externally routable IP address

- Host headers - enabling web servers to accept connections for a number of URLs via a single externally routable IP address

- VPN tunnelling - enabling the use of internal (RFC 1918) IP addresses for non-production services such as UAT and development

## Can additional purchased IP addresses be transferred to another VDC?

As long as the original VDC is being removed, purchased IP addresses can be transferred to another VDC on the same account within the same region and zone. Other scenarios must be discussed with UKCloud.

## How do I remotely manage my solution hosted on UKCloud?

Your cloud solution is designed to be self-managed via the UKCloud Portal or programmatically via a fully documented API. The Portal and API enable you to configure your VDC including the virtual firewall, load balancer, site-to-site VPNs, networks and VMs. You can deploy and manage operating systems and applications using the Portal's remote console function (Windows and Linux only).

You can also configure your virtual firewall to allow direct remote management of each VM independent of the Portal or API, for example via IPsec VPNs or SSH. Using a VPN lets you connect directly to each VM using tools such as Remote Desktop, SSH or other management clients.

## When will UKCloud offer IPv6 addresses?

The UKCloud core network supports IPv6 addressess at the internet layer using our own RIPE IPv6 range, which we advertise to all of our internet services providers. IPv6 deployments must be discussed with UKCloud. IPv6 is not yet available for any community network (such as PSN, Janet and HSCN).

## How are the two UKCloud data centres connected?

UKCloud operates high-bandwidth (multi-Gigabit), low-latency (typically sub-5ms round-trip time) dark fibre connectivity between our two data centres, which is highly resilient as it takes diverse routes.

This data centre interconnectivity is highly scalable, as spare fibre capacity is in place to meet future demand. It uses CAS(T) compliant circuits and, within our Elevated OFFICIAL security domain, we provide additional encryption overlay. These are PSN accredited to carry OFFICIAL data (including OFFICIAL SENSITIVE), as well as the PSN service.

## If I have reserved bandwidth, how do I uplift this?

We actively monitor and manage our connections to ensure there is appropriate connectivity to the platform. Customers looking to provide guaranteed connection capacity should include a HybridConnect leased line in their solution.

## Can UKCloud help me if I don't have a suitable connection for the Elevated OFFICIAL security domain?

We recognise that some customers may be affected by the often extended lead times associated with provisioning new connections suitable for the Elevated OFFICIAL security domain; and that some customers may not have adequate bandwidth to handle bulk import/export activities.

To help address these issues, we offer two options:

1) A chargeable Data Transfer Facility, enabling you to access the Elevated security domain and carry out import/export activities from our secure office. Although you can bring your data/media into our office and benefit from our readily available and suitably accredited connections to the Elevated OFFICIAL security domain, for large quantities of data we recommend the use of the Mass Transfer Facility

2) A chargeable Mass Transfer Facility, enabling you to send in HDDs or a populated NAS box that can then be uploaded to your cloud environment. This is aimed at customers with large amounts of data to be uploaded, which can be performed by authorised UKCloud members of staff.

If you're interested in either of these services, contact our sales team to discuss your requirements.

## How do I configure my solution to use the UKCloud data centre interconnection?

This depends on the use case.

- If you have a VDC in each UKCloud data centre:

  - Configure an IPsec VPN between the edge gateway instances of each VDC. Once the VPN has been established, VMs within the VDC can connect to each other using their private (RFC 1918) IP addresses.

- If you have VMs in one UKCloud data centre that need to access published services in the other (for example, VMs hosted in DC1 might choose to access Cloud Storage in DC2):

  - The service (for example, Cloud Storage) will be published using an accessible hostname/IP address. The service should be published on standard ports (for example, HTTP). Configure your VMs to connect to the published hostname/IP over the standard ports.

- If your private circuits or co-located equipment need to use the data centre interconnection:

  - Contact your account manager, as this will be a non-standard solution, which may require support from our technical specialists (costs will be as per the [SFIA Rate Card](http://www.ukcloud.com/sfia)).

## Does UKCloud support RLI connections?

Yes, UKCloud does support an RLI connection for customers who have been already authorised by the MOD. We'll then use the HybridConnect service to connect the RLI network to your cloud environment.

## If I have an MPLS circuit direct into UKCloud, do I still have to go through a PSN connection to access the Elevated Portal?

No, you don't need a PSN connection as you can access the Portal from within a VM on the Elevated security domain.

## Are external Domain Name System (DNS) services available?

No, we don't currently offer this service. Customers can implement their own DNS servers within their solution, or configure their virtual firewall to enable connectivity to an externally hosted DNS server (for example, those hosted on Government Secure Networks such as PSN, or those available on the internet such as Google 8.8.8.8).

## Does UKCloud support Janet connectivity?

Yes, UKCloud provides Janet connectivity free for our customers. There is no inbound or outbound usage charge for using the Janet connection to access the UKCloud platform. To utilise this network, you'll need to be authorised by Jisc. For more information, see [*Requesting Janet connectivity to your UKCloud workloads*](conn-ref-janet.md).

## Is there a bandwidth restriction on a VRF?

Like all our connectivity options, there is no set bandwidth cap on our VRFs, and we capacity manage our VRF network to ensure our customers can consume as much as required. However, we do operate a [Networks Fair Use Policy](conn-ref-networks-fair-use.md) to protect all our users from being impacted by spikes in unpredictable network traffic. To that end, if a customer believes that they'll use large amounts of bandwidth, we always appreciate a heads-up so we can proactively increase bandwidth of the network to avoid having to lean on any policy to protect other users.

Outside of the VRF, customers may need to consider the impact of functionality, such as IPSec VPN tunnels over the VRF, that decrease the bandwidth of the network because of edge throughput limits.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
