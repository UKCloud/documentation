---
title: UKCloud for Oracle Software FAQs
description: Frequently asked questions for UKCloud for Oracle Software
services: oracle
author: mwarner
reviewer: awebb
lastreviewed: 01/11/2022
toc_rootlink: UKCloud for Oracle Software
toc_sub1: FAQs
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Oracle Software FAQs
toc_fullpath: UKCloud for Oracle Software/FAQs/orcl-faq.md
toc_mdlink: orcl-faq.md
---

# UKCloud for Oracle Software FAQs

> [!IMPORTANT]
> UKCloud for Oracle Software has been retired from sale by UKCloud. We'll continue to support all existing customers who are using this service, however, we are no longer providing this service for new workloads. This article provides existing UKCloud for Oracle Software customers with access to support documentation and we'll continue to update it as required. For new Oracle requests, contact your Client Director or Service Delivery Manager.

## How can I put a new Oracle workload on UKCloud?

Whilst UKCloud for Oracle Software has been retired from sale, we do offer other options that you can take advantage of to run Oracle on UKCloud.

### Dedicated Compute

For small Oracle environments we continue to offer [Dedicated Compute](https://ukcloud.com/app/uploads/2022/08/ukc-svc-227-dedicated-compute-v2-service-definition-13.0.pdf) for both Assured and Elevated OFFICIAL. This is on our UKCloud for VMware service and utilises dedicated VMware hosts within the cloud. You should be sure to understand your licensing restrictions around VMs on small host clusters before installing Oracle software on VMs. Some Oracle software requires you to license all processors in a host cluster as Oracle doesn't recognise VMware as a hard partition for licences.

### Private Cloud

For larger Oracle requirements we continue to offer our [Private Cloud](https://ukcloud.com/app/uploads/2022/08/ukc-svc-236-private-cloud-service-definition-13.0.pdf) service for both Assured OFFICIAL and Elevated OFFICIAL, which you can use in conjunction with Oracle VM hypervisor.

Alternatively, if you want to use Oracle proprietary hardware, such as Exadata, then we can support the hosting and management of certain Oracle technologies. See [*Private Cloud for Oracle Software*](https://ukcloud.com/app/uploads/2022/08/ukc-svc-237-private-cloud-for-oracle-software-service-definition-13.0-1-1.pdf) for more information.

## General

### What is UKCloud for Oracle Software?

UKCloud for Oracle Software provides Infrastructure as a Service (IaaS), powered by Oracle technology, that is fully compliant with the compatibility and licensing requirements of Oracle-based enterprise applications. 

### What is provided in the service?

For further details on the service, and what is provided, please view the [*UKCloud for Oracle Software service scope*](orcl-sco.md).

### Do UKCloud offer an SLA for this service?

Yes. There is a service credit-backed SLA of 99.95% for non-HA enabled VMs, and 99.99% for HA enabled VMs.

The SLA excludes faults within your control or external networking connections such as internet, PSN, Janet or HSCN.

For further details regarding the SLA, see the [*SLA definition*](../other/other-ref-sla-definition.md).

### Is the UKCloud for Oracle Software environment a separate physical hosting platform with external connectivity via the UKCloud for VMware platform?

Yes, UKCloud for Oracle Software is a separate physical hosting platform. As Oracle OVM doesn't have a Layer 3 networking function built into the platform, we leverage the VMware cloud and the native NSX Edges to provide external connectivity for Oracle VMs.

### What technology is UKCloud for Oracle Software based on?

For the x86 Oracle service, UKCloud have chosen to utilise Oracle's own Oracle Virtual Machine (OVM) technology to underpin its UKCloud for Oracle Software platform.

Current stack is Oracle VM Server-> Oracle VM Manager-> Oracle Enterprise Manager.

### How can I backup my UKCloud for Oracle Software environment?

The UKCloud for Oracle Software platform is based on an underpinning infrastructure that can support native Oracle technologies such as Data Guard and RMAN data protection solutions.

### If I'm using Oracle Data Guard, will I need to have the same size DR VMs as my primary VMs?

No. While you will need to have the same CPU and storage allocation, you can reduce your RAM allocation by 50% in your DR VMs and ramp up if you need to invoke DR.

### Can I use UKCloud's Mass Transfer Facility to import my Oracle data?

No, this service is not currently available for Oracle data.

### Can I have a dedicated UKCloud for Oracle Software environment?

Yes. If you prefer a dedicated environment, UKCloud offer the [Private Cloud service](https://ukcloud.com/app/uploads/2022/08/ukc-svc-236-private-cloud-service-definition-13.0.pdf) for both Assured OFFICIAL and Elevated OFFICIAL. Alternatively, if you want to use Oracle proprietary hardware, then we can support the hosting and management of certain Oracle technologies - see [Private Cloud for Oracle Software](https://ukcloud.com/app/uploads/2022/08/ukc-svc-237-private-cloud-for-oracle-software-service-definition-13.0-1-1.pdf) for more information.

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

UKCloud provides a set of base OS templates (assemblies) based on Oracle Linux and Microsoft.

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

Yes, this service is available on the Elevated OFFICIAL environment with connections to the PSN and MCN networks.

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

- Oracle 10g R1 & R2; with partitioning; advanced security; spatial; data mining; OLAP; OEM

- WebLogic 10 Platform

- Oracle 11g R1 with partitioning; advanced security; spatial; BI; Forms; DataGuard; DatabaseVault; OLAP

- WebLogic 11g Platform

- Oracle 12c R1 with advanced security

- Primavera 8 (components from 8.1 to 8.7)

- Primavera 6

For software not listed above, please visit the [Oracle support webpage](https://support.oracle.com/epmos/faces/CertifyHome). You will need to have an Oracle Support account to log in.

## Licensing

### Does this service include Oracle licensing?

UKCloud is responsible for licencing the Oracle VM hypervisor and associated service components. 

You're responsible for ensuring that you've purchased the appropriate Oracle licensing for your Oracle solution in line with the cores, RAM and storage utilised on the UKCloud platform. For more information, see [*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md).

### Does UKCloud for Oracle Software provide guidance on Oracle licensing?

[*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md) provides details outlining how to ensure that Oracle is licensed appropriately on the platform.

### Does UKCloud have any terms and conditions regarding Oracle licensing?

You must ensure your platform is appropriately licensed for the Oracle Software that you are running as UKCloud for Oracle Software can only license operating systems. To ensure the appropriate licensing is in place, see [*Oracle licensing on the UKCloud platform*](orcl-ref-licensing.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
