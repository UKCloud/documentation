---
title: UKCloud for Oracle Software FAQs | UKCloud Ltd
description: Frequently asked questions for UKCloud for Oracle Software
services: oracle
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: FAQs/orcl-faq.md
toc_mdlink: orcl-faq.md
---

# UKCloud for Oracle Software

## General

### What is UKCloud for Oracle Software?

UKCloud for Oracle Software provides Infrastructure as a Service
(IaaS), powered by Oracle VM (OVM) technology, that is fully compliant
with the compatibility and licensing requirements of Oracle-based
enterprise applications. This service sits adjacent to UKCloud's genuine
assured cloud services, enabling you to leverage the benefits of digital
transformation while maintaining your investment and integration with
traditional Oracle-based services.

### What is provided in the service?

For further details on the service, and what is provided, please view
the UKCloud for Oracle Software service definition for [Assured
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/624457225713333-service-definition-document-2017-04-05-1309.pdf)
and [Elevated
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/505897915235640-service-definition-document-2017-04-05-1330.pdf).

### Do UKCloud offer an SLA for this service?

Yes. There is a service credit-backed SLA of 99.95% excluding faults
within your control or external networking connections such as internet,
PSN, Janet or N3/HSCN.

For further details regarding the SLA, please review the relevant
section within the Service Definition for [Assured
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/624457225713333-service-definition-document-2017-04-05-1309.pdf)
and [Elevated
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/505897915235640-service-definition-document-2017-04-05-1330.pdf).

### Is the UKCloud for Oracle Software environment a separate physical hosting platform with external connectivity via the UKCloud for VMware platform?

Yes, UKCloud for Oracle Software is a separate physical hosting
platform.

### What technology is UKCloud for Oracle Software based on?

UKCloud have chosen to utilise Oracle's own Oracle Virtual Machine (OVM)
technology to underpin its UKCloud for Oracle Software platform.

Current stack is Oracle VM Server-\> Oracle VM Manager-\> Oracle
Enterprise Manager.

### Which Oracle architectures are suitable for deployment on the UKCloud platform? 

UKCloud are currently working on a "known good" list of architectures
that will allow customers to ascertain if UKCloud's platform is suitable
for hosting their Oracle workloads.

Please engage with a UKCloud solutions architect to see how we can help
with your requirements.

### How can I backup my UKCloud for Oracle Software environment?

The UKCloud for Oracle Software platform is based on an
underpinning infrastructure that can support native Oracle technologies
such as Data Guard and RMAN data protection solutions.

### Can I use UKCloud's Mass Data Transfer Facility to import my Oracle data?

While this is not currently available, this is being investigated by the
development team.

### Can I have a dedicated UKCloud for Oracle Software environment?

Yes. If you prefer a dedicated environment, UKCloud offer the Private
Cloud for Compute service for both [Assured
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/408961401714745-service-definition-document-2017-04-06-0837.pdf)
and [Elevated
OFFICIAL](https://assets.digitalmarketplace.service.gov.uk/g-cloud-9/documents/92406/773079818106558-service-definition-document-2017-04-06-1003.pdf).
This service definition is available in the UKCloud Knowledge Centre.

### Is the RAM virtual or physical?

As with all our services, UKCloud for Oracle Software comes with
Virtual RAM.

### What is the best platform to use to run MySQL?

It is based on preference, as Oracle, VMware and Openstack are all
capable of handling the MySQL application.

## Billing and legal

### How is it billed?

UKCloud for Oracle Software workloads are priced per hour, and
your bills are based on the resources that you allocate to your
solution. In contrast to traditional hosting models, this ensures
there's no lock-in to unnecessarily licensed or under-utilised
hardware. You will be billed for the total number of cores, memory and
storage consumed during the month which will appear in the following
month's invoice. This may also include connectivity and other service
options or licensing if they are selected.

Licensing of Oracle software above the Operating System will remain your
responsibility. UKCloud are not currently able to supply this.

## Management

### Is this a managed service?

No. UKCloud maintain and manage the underlying infrastructure that your
solution is based on, but we do not manage your UKCloud for Oracle Software solution. If you need your solution managed, there are a
number of accredited Oracle partners within the UKCloud partner network
that will be able to help.

### Are templates available for solution components?

UKCloud will provide a set of base OS templates (assemblies) based on
Oracle Linux.

You can also create your own assemblies and upload reusable software
images.

### How do I increase or decrease resources?

You can change processor, memory and storage allocations via the
self-service UKCloud Portal.

-   Processors and memory can be added to or removed from VMs, although
    VMs will need to be shut down for this to happen.

-   Increasing CPU or memory allocations will result in the VM being
    billed at a higher rate.

-   Additional VM storage can be allocated and will be billed on a per
    GiB per month basis.

### How long will it take to provision the service?-

Depending on the complexity of the solution, including the ingress of
data onto the UKCloud platform, it can take up to 10 days for the
service to be provisioned.

### How do I manage my UKCloud for Oracle Software environment?

You can access your OVMs using:

-   The remote console through the UKCloud Portal

-   Remote access protocols (RDP/SSH) over a VPN or secure network

## Connectivity

### Can I connect to the UKCloud Assured OFFICIAL environment?

Yes, this service is available on the Assured OFFICIAL environment with
connections to the internet, PSN-A, Janet and N3/HSCN networks.

### Can I connect to the UKCloud Elevated OFFICIAL environment?

Yes, this service is available on the Elevated OFFICIAL environment with
connections to the PSN-P and RLI networks.

### Is there connectivity from other regions to Oracle?

There is no native connectivity from other regions to Oracle other than
customers configuring IPSEC VPNs.

## Support

### What storage options are supported?

The Oracle platform supports Tier 1 block storage for fast transactional
databases, Tier 2 block storage for predictable work patterns and object
storage for media content or to store recovery manager backups.

### Does the UKCloud platform support Oracle Real Application Clusters (RAC)?

Yes, you are able to configure RAC solutions to run on the UKCloud
Oracle platform by creating a shared disk.

### How are Oracle software products supported on the UKCloud platform?

Providing that the software products have the appropriate operating
system, software licenses and are installed on supported guest operating
systems, they can be run on the UKCloud Enterprise Compute Cloud for
Oracle.

### Which Oracle software products are supported on the UKCloud platform?

Providing that the software products adhere to the guidelines above, the
following software applications are compatible with Enterprise Compute
Cloud for Oracle:

-   Oracle 9i R2 DB with partitioning; OEM;

-   Oracle 10g R1 & R2; with partitioning; advanced security; spatial;
    data mining; OLAP; OEM

-   WebLogic 10 Platform

-   Oracle 11g R1 with partitioning; advanced security; spatial; BI;
    Forms; DataGuard; DatabaseVault; OLAP

-   WebLogic 11g Platform

-   Oracle 12c R1 with advanced security

-   Primavera 8 (components from 8.1 to 8.7)

-   Primavera 6

For software not listed above, please visit the [Oracle support
webpage](https://support.oracle.com/epmos/faces/CertifyHome). You will
need to have an Oracle Support account to log in.

## Licensing

### Does this service include Oracle licensing?

No, you are responsible for ensuring that you have purchased the
appropriate licencing for the UKCloud for Oracle Software
solution in line with the components installed and the cores, RAM and
storage utilised on the [UKCloud
platform](https://portal.skyscapecloud.com/support/knowledge_centre/21384112-86b8-41b9-8360-9a2e7c764cf4).

### Does UKCloud for Oracle Software provide guidance on Oracle licensing?

The How To Guide for UKCloud for Oracle Software provides
details outlining how to ensure that Oracle is licensed appropriately on
the platform.

### Does UKCloud have any terms and conditions regarding Oracle licensing?

You must ensure your platform is appropriately licensed for the Oracle
Software that you are running as Enterprise Compute Cloud for Oracle can
only license operating systems. To ensure the appropriate licensing is
in place, check the How To guide for Enterprise Compute Cloud for
Oracle.

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved.