---
title: UKCloud for Oracle Software FAQs
description: Frequently asked questions for UKCloud for Oracle Software
services: oracle
author: Matt Warner
reviewer: Bart Challis
lastreviewed: 01/07/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Oracle Software FAQs
toc_fullpath: FAQs/orcl-faq.md
toc_mdlink: orcl-faq.md
---

# UKCloud for Oracle Software FAQs

## General

### What is UKCloud for Oracle Software?

UKCloud for Oracle Software provides Infrastructure as a Service (IaaS), powered by Oracle technology, that is fully compliant with the compatibility and licensing requirements of Oracle-based enterprise applications. This service sits within UKCloud's genuine assured cloud services portfolio, enabling you to leverage the benefits of digital transformation while maintaining your investment and integration with traditional Oracle-based services.

UKCloud for Oracle has two compute technologies: x86 and SPARC.

- x86 is used for most Oracle workloads that leverage Intel or AMD processors

- SPARC is designed for workloads that utilise SPARC chips to support certain legacy workloads

### What is provided in the service?

For further details on the service, and what is provided, please view the [*UKCloud for Oracle Software service definition*](orcl-sd.md).

### Do UKCloud offer an SLA for this service?

Yes. There is a service credit-backed SLA of 99.95% for non-HA enabled x86 VMs, and 99.99% for HA enabled x86 VMs. SPARC machines, and Dedicated SPARC servers with resilience have an SLA of 99.95%. Dedicated SPARC servers without resilience have an SLA of 95.00%.

The SLA excludes faults within your control or external networking connections such as internet, PSN, Janet or HSCN.

For further details regarding the SLA, please review the relevant section within the [*Service Definition*](orcl-sd.md).

### Is the UKCloud for Oracle Software environment a separate physical hosting platform with external connectivity via the UKCloud for VMware platform?

Yes, UKCloud for Oracle Software is a separate physical hosting platform. As Oracle OVM doesn't have a Layer 3 networking function built into the platform, we leverage the VMware cloud and the native NSX Edges to provide external connectivity for Oracle VMs.

### What technology is UKCloud for Oracle Software based on?

For the x86 Oracle service, UKCloud have chosen to utilise Oracle's own Oracle Virtual Machine (OVM) technology to underpin its UKCloud for Oracle Software platform.

Current stack is Oracle VM Server-> Oracle VM Manager-> Oracle Enterprise Manager.

### Which Oracle architectures are suitable for deployment on the UKCloud platform?

UKCloud are currently working on a "known good" list of architectures that will allow customers to ascertain if UKCloud's platform is suitable for hosting their Oracle workloads.

Please engage with a UKCloud solutions architect to see how we can help with your requirements.

### How can I backup my UKCloud for Oracle Software environment?

The UKCloud for Oracle Software platform is based on an underpinning infrastructure that can support native Oracle technologies such as Data Guard and RMAN data protection solutions.

### If I'm using Oracle Data Guard, will I need to have the same size DR VMs as my primary VMs?

No. While you will need to have the same CPU and storage allocation, you can reduce your RAM allocation by 50% in your DR VMs and ramp up if you need to invoke DR.

### Can I use UKCloud's Mass Data Transfer Facility to import my Oracle data?

While this is not currently available, this is being investigated by the development team.

### Can I have a dedicated UKCloud for Oracle Software environment?

Yes. If you prefer a dedicated environment, UKCloud offer the [*Private Cloud service*](../private-cloud/prc-sd.md) for both Assured OFFICIAL and Elevated OFFICIAL. Alternatively, if you want to use Oracle proprietary hardware, then we can support the hosting and management of certain Oracle technologies - see [*Private Cloud for Oracle Software*](../private-cloud/prc-sd-orcl.md) for more information.

### Is the RAM virtual or physical?

As with all our services, UKCloud for Oracle Software comes with Virtual RAM.

### What is the best platform to use to run MySQL?

It is based on preference, as Oracle, VMware and OpenStack are all capable of handling the MySQL application.

## Billing and legal

### How is it billed?

UKCloud for Oracle Software workloads are priced per hour, and your bills are based on the resources that you allocate to your solution. In contrast to traditional hosting models, this ensures there's no lock-in to unnecessarily licensed or under-utilised hardware. You will be billed for the total number of cores, memory and storage consumed during the month which will appear in the following month's invoice. This may also include connectivity and other service options or licensing if they are selected.

Licensing of Oracle software above the Operating System will remain your responsibility. UKCloud are not currently able to supply this.

## Management

### Is this a managed service?

No. UKCloud maintain and manage the underlying infrastructure that your solution is based on, but we do not manage your UKCloud for Oracle Software solution. If you need your solution managed, there are a number of accredited Oracle partners within the UKCloud partner network that will be able to help.

### Are templates available for solution components?

UKCloud will provide a set of base OS templates (assemblies) based on Oracle Linux and Microsoft.

You can also create your own assemblies and upload reusable software images.

### How do I increase or decrease resources?

Currently, processor, memory and storage allocations are changed by raising a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. This is because of the resource pinning that OVM does on the underlying hypervisor.

- Processors and memory can be added to or removed from VMs, although VMs will need to be shut down for this to happen.

- Increasing CPU or memory allocations will result in the VM being billed at a higher rate.

- Additional VM storage can be allocated and will be billed on a per GiB per month basis.

### How long will it take to provision the service?-

Depending on the complexity of the solution, including the ingress of data onto the UKCloud platform, it can take up to 10 days for the service to be provisioned.

### How do I manage my UKCloud for Oracle Software environment?

You can access your OVMs using:

- The remote console through the UKCloud Portal

- Remote access protocols (RDP/SSH) over a VPN or secure network

## Connectivity

### Can I connect to the UKCloud Assured OFFICIAL environment?

Yes, this service is available on the Assured OFFICIAL environment with connections to the internet, PSN, Janet and HSCN networks.

### Can I connect to the UKCloud Elevated OFFICIAL environment?

Yes, this service is available on the Elevated OFFICIAL environment with connections to the PSN and RLI networks.

### Is there connectivity from other regions to Oracle?

There is no native connectivity from other regions to Oracle other than customers configuring IPsec VPNs.

## Support

### What storage options are supported?

The Oracle platform supports Tier 1 block storage for fast transactional databases, Tier 2 block storage for predictable work patterns and object storage for media content or to store recovery manager backups.

### Does the UKCloud platform support Oracle Real Application Clusters (RAC)?

Yes, you are able to configure RAC solutions to run on the UKCloud Oracle platform by creating a shared disk.

### How are Oracle software products supported on the UKCloud platform?

Providing that the software products have the appropriate operating system, software licences and are installed on supported guest operating systems, they can be run on UKCloud for Oracle Software.

### Which Oracle software products are supported on the UKCloud platform?

Providing that the software products adhere to the guidelines above, the following software applications are compatible with UKCloud for Oracle Software:

- Oracle 9i R2 DB with partitioning; OEM;

- Oracle 10g R1 & R2; with partitioning; advanced security; spatial; data mining; OLAP; OEM

- WebLogic 10 Platform

- Oracle 11g R1 with partitioning; advanced security; spatial; BI; Forms; DataGuard; DatabaseVault; OLAP

- WebLogic 11g Platform

- Oracle 12c R1 with advanced security

- Primavera 8 (components from 8.1 to 8.7)

- Primavera 6

For software not listed above, please visit the [Oracle support webpage](https://support.oracle.com/epmos/faces/CertifyHome). You will need to have an Oracle Support account to log in.

## Licensing

### Does this service include Oracle licensing?

No, you are responsible for ensuring that you have purchased the appropriate licensing for the UKCloud for Oracle Software solution in line with the components installed and the cores, RAM and storage utilised on the UKCloud platform. For more information, see [*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md).

### Does UKCloud for Oracle Software provide guidance on Oracle licensing?

[*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md) provides details outlining how to ensure that Oracle is licensed appropriately on the platform.

### Does UKCloud have any terms and conditions regarding Oracle licensing?

You must ensure your platform is appropriately licensed for the Oracle Software that you are running as UKCloud for Oracle Software can only license operating systems. To ensure the appropriate licensing is in place, see [*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
