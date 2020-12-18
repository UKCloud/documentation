---
title: UKCloud glossary
description: Provides definitions of commonly used UKCloud terms
services: other
author: hferris
reviewer: shighmoor
lastreviewed: 03/12/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Glossary
toc_fullpath: Reference/other-ref-glossary.md
toc_mdlink: other-ref-glossary.md
---

# UKCloud glossary

This article provides definitions of commonly used UKCloud terms.

[A](#a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[B](#b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[C](#c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[D](#d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[E](#e)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[F](#f)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[G](#g)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[H](#h)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[I](#i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[J](#j)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[K](#k)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[L](#l)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[M](#m)

[N](#n)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[O](#o)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[P](#p)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Q](#q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[R](#r)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[S](#s)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[T](#t)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[U](#u)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[V](#v)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[W](#w)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[X](#x)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Y](#y)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Z](#z)

## A

### Account

Within the UKCloud environment there are two types of accounts:

- **customer account** - A collection of related compute services associated with a particular customer or partner.

- **user account** - The account you use to log in to the UKCloud Portal or authenticate with the Portal API. Your user account determines which customer accounts you have access to. Each user account can be associated with multiple customer accounts.

### Application-tuned DDoS protection

*See:* [Neustar DDoS Protection from UKCloud](#neustar-ddos-protection-from-ukcloud)

### Assured OFFICIAL

A security domain on the UKCloud platform that provides access to public networks, such as the internet, PSN, HSCN or Janet.

*See also:* [Elevated OFFICIAL](#elevated-official), [OFFICIAL](#official), [OFFICIAL SENSITIVE](#official-sensitive)

### Azure

*See:* [UKCloud for Microsoft Azure](#ukcloud-for-microsoft-azure)

### Azure Stack Hub

*See:* [UKCloud for Microsoft Azure](#ukcloud-for-microsoft-azure)

## B

### Big Cloud Enablement

*See:* [Cloud Enablement](#cloud-enablement)

### Bring Your Own Firewall (BYOF)

A UKCloud for VMware service option that enables you to customise your networking infrastructure by installing your own virtual firewall appliance in place of the edge device UKCloud includes as standard. This enables you to leverage your own in-house expertise with a particular technology or can provide access to some higher level networking functionality not natively available in the provided edge.

## C

### Cloud Architect

A UKCloud Pre-Sales role aimed at helping you design your cloud solution so that you can get the best out of the UKCloud platform.

### Cloud Credits

A UKCloud purchase scheme whereby you can purchase Cloud Credits upfront and redeem them against UKCloud services over a maximum two year period. This enables you to effectively commit your CAPEX or budget spend in advance, with monthly usage deducted from the balance until depleted.

*See also:* [Service Credits](#service-credits)

### Cloud Enablement

A UKCloud enablement service that provides basic facilities for your own hardware installed in one of our data centres for the purpose of utilising our cloud. We can host servers, storage, VPN solutions, encryption devices or switches.

For more information, see the relevant Cloud Enablement service scope:

- [Cloud Enablement service scope for server/storage hosting](../enablement/enbl-sco-hosting.md)

- [Cloud Enablement service scope for VPN solutions](../enablement/enbl-sco-vpn.md)

- [Cloud Enablement service scope for CAPS/CPA approved VPN](../enablement/enbl-sco-capscpa.md)

- [Big Cloud Enablement Service Scope](../enablement/enbl-sco-bigcolo.md)

### CloudSOC from UKCloud

*See:* [Security Operations Service](#security-operations-service).

### Cloud Storage

A secure and highly adaptable storage platform designed to address a wide variety of use cases. Our Cloud Storage service is based on object storage technology that is natively optimised for cloud storage in terms of scale, resilience and accessibility.

For more information, see the [Cloud Storage service definition](../cloud-storage/cs-sd.md).

### Compute service

A UKCloud for VMware top-level container within a customer account that includes a VMware Cloud Director/vCloud Director organization and its VDCs, catalogs, users and resources.

### Cross Domain Security Zone (CDSZ)

A UKCloud IaaS service that provides the ability to securely transfer data between our Assured OFFICIAL and Elevated OFFICIAL security domains using NCSC-approved cross-domain security patterns and our Secure Remote Access service.

For more information, see the [Cross Domain Security Zone service definition](../cdsz/cdsz-sd.md).

*See also:* [Walled Garden](#walled-garden), [Secure Remote Access (SRA)](#secure-remote-access-sra)

### CrownConnect (Private Connectivity)

A connectivity option that enables you to bring private connectivity into service provider locations anywhere in the ARK data centre campus. UKCloud will then arrange for onward connectivity from the termination point into your cloud service. The service provider locations can be anywhere within the ARK Crown Campus and are not limited to UKCloud's core network locations.

*See also:* [HybridConnect](#hybridconnect)

### Customer Success Manager (CSM)

*See:* [Service Delivery Manager](#service-delivery-manager)

## D

### Data centre interconnect (DCI)

A UKCloud connectivity service that enables self-designed and managed disaster recovery solutions, or increased connectivity resilience, by using UKCloud's assured connections between our sites.

*See also:* [Internet-based inter-data centre connectivity](#internet-based-inter-data-centre-connectivity), [Dedicated inter-data centre connectivity](#dedicated-inter-data-centre-connectivity)

### Data Transfer Facility (DTF)

A UKCloud enablement service that enables you to use the secure network connections at our Farnborough site to manage systems or transfer data into or out of your environments. This service is useful if you don't have enough network bandwidth or are waiting for appropriately accredited connectivity to be installed.

*See also:* [Mass Transfer Facility (MTF)](#mass-transfer-facility-mtf)

### Dedicated Compute

A UKCloud service option that enables you to have a reserved, single-tenanted section of our cloud, provisioned for your sole use, where the physical CPU and RAM allocations are known. This is useful if you need to run abnormal VM sizes, meet specific software licensing requirements or have increased security requirements.

For more information, see the [UKCloud Dedicated Compute v2 service scope](../dedicated-compute/dc-sd.md).

Note the difference between Dedicated Compute, which is run within our multi-tenanted environment, and Private Cloud, which is a single-tenant environment run on independent infrastructure, providing a private cloud environment.

*See also:* [Private Cloud](#private-cloud)

### Dedicated inter-data centre connectivity

A connectivity option available in the Assured and Elevated security domains that provides dedicated bandwidth between the two UKCloud sites.

*See also:* [Internet-based inter-data centre connectivity](#internet-based-inter-data-centre-connectivity), [Data centre interconnect (DCI)](#data-centre-interconnect-dci)

### Desktop as a Service (DaaS)

*See:* [UKCloud Desktop as a Service](#ukcloud-desktop-as-a-service)

### Disaster Recovery as a Service (DRaaS)

A UKCloud IaaS service, powered by Zerto, that enables you to easily replicate data and VMs from your primary site to UKCloud to recover your services with minimum downtime and data loss.

For more information, see the [Disaster Recovery as a Service service definition](../draas/draas-sd.md).

## E

### Edge gateway

A virtual router that provides VDC network services such as DHCP, firewall, NAT, static routing, VPN and load balancing.

*See also:* [NSX Edge](#nsx-edge)

### Elevated OFFICIAL

A security domain on the UKCloud platform that provides secure access to restricted networks such as PSN.

*See also:* [Assured OFFICIAL](#assured-official), [OFFICIAL](#official), [OFFICIAL SENSITIVE](#official-sensitive)

### Ephemeral storage

A UKCloud for OpenStack storage option that exists only as long as the associated OpenStack instance exists.

*See also:* [Persistent storage](#persistent-storage)

### ESSENTIAL VM

A UKCloud for VMware VM type that may have contended resource allocation. Automated rebalancing is enabled to ensure the workload receives the requested performance.

For more information, see the [UKCloud for VMware service definition](../vmware/vmw-sd.md).

*See also:* [POWER VM](#power-vm), [PRIORITY VM](#priority-vm)

### Extended Network Support from UKCloud

The Extended Network Support from UKCloud service reduces the burden customer traditionally must consider in supporting their virtual network infrastructure to enable the reliable and stable connectivity for their solution.

For more information, see the [Extended Network Support service definition](../managed-services/man-sd-network.md).

## F

### Firewall

A network service that controls traffic into and out of your environment using defined rules.

## G

### Global Load Balancing

*See:* [Neustar UltraDNS from UKCloud](#neustar-ultradns-from-ukcloud)

## H

### Hadoop

An open source collection of tools designed specifically to capture, store and process the massive amount of data created by new technologies such as Internet of Things (IoT) sensors, 'Smart' devices and cites and artificial intelligence.

For more information, see the [UKCloud Big Data & Hadoop service proposition](https://ukcloud.com/wp-content/uploads/2019/02/ukc-svc-124-ukcloud-hadoop-proposition.pdf).

### Health and Social Care Network (HSCN)

A government network designed to provide a solution for hospitals, medical centres and GPs to collaborate and access services over a secure, high speed network. One of UKCloud's connectivity options, available on the Assured OFFICIAL security domain.

For more information, see the [HSCN FAQs](../connectivity/conn-faq-hscn.md).

### HybridConnect

A UKCloud connectivity option that makes it easy for you to connect to hybrid clouds by securely connecting to the UKCloud assured cloud platform and supports a variety of flexible private connectivity options enabling hybrid topologies. You can also use HybridConnect in conjunction with our Cloud Enablement service to add, for example, an encryption device or switch.

For more information, see the [HybridConnect FAQs](../connectivity/conn-faq-hybridconnect.md).

*See also:* [CrownConnect (Private Connectivity)](#crownconnect-private-connectivity)

### Hypervisor

Software layer on top of the physical infrastructure that enables the virtualisation of the physical resources.

## I

### Impact Level (IL)

Historic data classification categories to indicate the potential impact of a security breach (O being no impact and 6 being severe impact). For example, IL2 or IL3.

### Instance

A customer provisioned compute resource within OpenStack, similar to the virtual machine concept within VMware.

### Inter-data centre connectivity

*See:* [Internet-based inter-data centre connectivity](#internet-based-inter-data-centre-connectivity), [Data centre interconnect (DCI)](#data-centre-interconnect-dci), [Dedicated inter-data centre connectivity](#dedicated-inter-data-centre-connectivity)

### Internet-based inter-data centre connectivity

A connectivity option in the Assured security domain that provides connectivity between the two UKCloud sites using multi-tenanted, internet-facing circuits.

*See also:* [Data centre interconnect (DCI)](#data-centre-interconnect-dci), [Dedicated inter-data centre connectivity](#dedicated-inter-data-centre-connectivity)

## J

### Janet

The UK's research and education network, used by education organisations and research councils. One of UKCloud's connectivity options, available on the Assured OFFICIAL security domain.

For more information, see the [Janet connectivity FAQs](../connectivity/conn-faq-janet.md).

### Journaling Protection

A UKCloud for VMware protection option that protects your VMs by storing all write operations to the VM in a journal on a separate UKCloud site.

For more information, see the [Journaling Protection service scope](../vmware/vmw-sco-journaling-protection.md).

### Jumpstart

A service providing skilled engineers and architects, on an hourly or daily basis, who can help design and build UKCloud solutions for you. For example, by helping you configure IPsec connectivity to UKCloud, create an Active Directory domain, build Terrform or Ansible templates for OpenStack or prepare applications for deployment to OpenShift.

For more information, see the [Jumpstart FAQs](../other/other-faq-jumpstart.md).

## K

### Knowledge Centre

UKCloud's repository of articles created in collaboration with subject matter experts to provide information about how to use our products and services.

*See:* <https://docs.ukcloud.com/>

## L

Let us know your thoughts and ideas by sending an email to <feedback@ukcloud.com>.

## M

### Managed Active Directory (AD) Support

A UKCloud advanced managed service that provides you with monitoring and support for your Active Directory services and supporting Windows servers.

For more information, see the [Managed Active Directory Support Service Definition](../managed-services/man-sd-ad.md).

*See also:* [Managed IT Operations](#managed-it-operations)

### Managed IT Operations

Managed IT Operations helps to reduce the non-value add challenges of managing your compute assets, whilst increasing your overall level of trust and confidence in the true health of your entire multi-cloud estate. The service includes a variety of options including managed monitoring, managing basic IT hygiene tasks, Managed VM recovery points, patching as a service, antivirus as a service and runbook automation. This service provides you with the building blocks to utilise essential operational delivery services.

For more information, see the [Managed IT Operations Service Definition](../managed-services/man-sd-managed-it-ops.md).

### Managed Monitoring as a Service

*See:* [Managed IT Operations](#managed-it-operations)

### Managed Remote Desktop Services (RDS) Support

A UKCloud advanced managed service that provides you with monitoring and support for your Remote Desktop Services and supporting Windows servers.

For more information, see the [Managed Remote Desktop Services Support Service Definition](../managed-services/man-sd-rds.md).

*See also:* [Managed IT Operations](#managed-it-operations)

### Managed SQL Server

A UKCloud advanced managed service that provides monitoring and support for your SQL servers.

For more information, see the [Managed SQL Server Service Definition](../managed-services/man-sd-sqlserver.md).

*See also:* [Managed IT Operations](#managed-it-operations)

### Managed Web Server

A UKCloud advanced managed service that provides you with monitoring and support for IIS or Apache and supporting Windows or Linux servers.

For more information, see the [Managed Web Server Service Definition](../managed-services/man-sd-webserver.md).

*See also:* [Managed IT Operations](#managed-it-operations)

### Mass Transfer Facility (MTF)

Our Mass Transfer Facility (MTF) enables you to move virtualised environments, in the form of VMs, into and out of your UKCloud environment using your own network attached storage (NAS) device, hard disk drives (HDDs) or USB drives.

For more information, see the [Mass Transfer Facility service scope](../enablement/enbl-sco-mtf-nas.md).

### Migration to the Cloud

A UKCloud IaaS service, powered by Zerto, that provides easy to use tools to help customers migrate workloads from their on-premises data centres to the UKCloud platform - all on a self-service basis.

### Multi-Cloud for Tier 2

The UKCloud cloud platform for workloads that require higher assurance than OFFICIAL SENSITIVE classification. Predominantly used within the UKCloudX space of Defence and National Security.

*See also:* [UKCloudX](#ukcloudx)

## N

### N3

The NHS National Network (N3) has been replaced by the Health and Social Care Network (HSCN).

*See:* [Health and Social Care Network (HSCN)](#health-and-social-care-network-hscn)

### Network firewall tenant (NFT)

Single- or multi tenant instances on a network firewall (NFW). NFT architecture is used in regions 1, 2, 7 and 8.

### NSX Edge

Provides a rich set of integrated networking and security gateway services for protecting VDCs and optimising resource utilisation. This virtual appliance includes services such as firewall, network address translation (NAT), load balancing and VPN.

*See also:* [Edge gateway](#edge-gateway)

### Neustar DDoS Protection from UKCloud

A UKCloud service option, powered by Neustar, to absorb and scrub bad traffic into your environment and protect your applications from DDoS attacks, while still allowing legitimate traffic through.

For more information, see the [Neustar DDoS Protection from UKCloud service scope](../connectivity/conn-sco-app-ddos.md).

### Neustar UltraDNS from UKCloud

A UKCloud service option, powered by Neustar, that provides a secure and reliable managed DNS service to ensure the highest level of website availability and optimal performance, with built-in security for superior protection that is scalable to future demands.

For more information, see the [*Neustar UltraDNS from UKCloud FAQs](../connectivity/conn-faq-glb.md).

## O

### OFFICIAL

A Government Security Classification Policy (GSCP) data classification indicating data that is not subject to any special risks, such as personal data.

### OFFICIAL-SENSITIVE

OFFICIAL data that requires specific handling to mitigate risk. Security measures required for the data will depend on the specific risks associated with that data.

### OpenShift

*See:* [UKCloud for Managed OpenShift](#ukcloud-for-managed-openshift)

### OpenStack

*See:* [UKCloud for OpenStack](#ukcloud-for-openstack)

### Oracle

*See:* [Private Cloud for Oracle Software](#private-cloud-for-oracle-software)

### Organization (Org)

A top level container in VMware Cloud Director/vCloud Director that contains one or more VDCs and owns all the virtual resources used by those VDCs.

## P

### Persistent storage

A UKCloud for OpenStack block storage option that is always available, regardless of the state of the VM.

### POWER VM

A UKCloud for VMware VM type with uncontended compute resource allocation (CPU/RAM). Automated balancing is enable to pre-emptively optimise performance and availability.

For more information, see the [UKCloud for VMware service definition](../vmware/vmw-sd.md).

*See also:* [ESSENTIAL VM](#essential-vm), [PRIORITY VM](#priority-vm)

### PRIORITY VM

A UKCloud for VMware VM type with uncontended compute resource allocation (CPU/RAM). Automated rebalancing is configured to reduce workload movement around the platform, reducing workload disruption.

For more information, see the [UKCloud for VMware service definition](../vmware/vmw-sd.md).

*See also:* [ESSENTIAL VM](#essential-vm), [POWER VM](#power-vm)

### Private Cloud

A UKCloud IaaS service that provides a totally isolated, single tenant compute and storage infrastructure, either in one of our sites or in a Crown Hosting Data Centre (CHDC).

For more information, see the [Private Cloud service definition](../private-cloud/prc-sd.md).

Note the difference between Private Cloud, which is a single-tenant environment run on independent infrastructure, providing a private cloud environment, and Dedicated Compute, which is run within our multi-tenanted environment.

*See also:* [Dedicated Compute](#dedicated-compute)

### Private Cloud for Oracle Software

A UKCloud IaaS service that enables you to have private implementations of Oracle's Engineered Systems within UKCloud's assured, sovereign data centres, Crown Hosting Data Centres or even on-premises.

For more information, see the [Private Cloud for Oracle Software service definition](../private-cloud/prc-sd-orcl.md).

### Private Cloud for Storage

A UKCloud IaaS service that provides single-tenant storage infrastructure on your own hardware, either in one of our sites or in a Crown Hosting Data Centre (CHDC).

For more information, see the [Private Cloud for Storage service definition](../private-cloud/prc-sd-storage.md).

### Professional Services

UKCloud Professional Services are designed to provide a clear path to true cloud value, no matter where your organisation is on the journey to cloud migration and adoption. The four services include our Assessment, Migration, Optimisation and Transformation services and can be tailored to suit your requirements.

For more information, see the [UKCloud Professional Services service definition](../pro-services/ps-sd.md).

### Protective Monitoring

A complimentary service from UKCloud that ensures our platform, up to the hypervisor level, adheres to Good Practice Guide 13 (GPG13) guidance.

For more information, see [Protective Monitoring from UKCloud](../other/other-ref-promon.md).

### Public Services Network (PSN)

A government network, used by central, local and devolved government organisations. One of UKCloud's connectivity options, available on the Assured OFFICIAL and Elevated OFFICIAL security domains.

For more information, see the [Public Services Network (PSN) FAQs](../connectivity/conn-faq-psn.md).

## Q

Quickly check on the availability and overall health of the services on the UKCloud platform on the [UKCloud Service Status page](https://status.ukcloud.com).

## R

### Region

A physically segregated part of the UKCloud platform with its own power infrastructure, management services and networking components, enabling you to design resilient solutions that are contained entirely within a single site.

*See also:* [Site](#site), [Zone](#zone)

### Restricted LAN Interconnect (RLI)

A high-security network for defence and industry partners. One of UKCloud's connectivity options. Connection to RLI is subject to extensive vetting and approval from the MOD. Contact one of our Cloud Architects for more information about how to connect to RLI.

## S

### Secure Remote Access (SRA)

A UKCloud IaaS service that provides a secure internet connection to our Elevated OFFICIAL security domain using NCSC-approved VPN technologies and the walled garden architectural pattern using bastion hosts.

For more information, see the [Secure Remote Access service definition](../sra/sra-sd.md).

*See also:* [Cross Domain Security Zone (CDSZ)](#cross-domain-security-zone-cdsz)

### Security Operations Service

Provides an always-on, cloud-hosted cyber security capability that can see all your IT systems, all the time, ensuring you have an up-to-date view of possible threats.

For more information, see the [Security Operations Service service definition](../soc/soc-sd.md).

### Service Credits

A compensation scheme whereby if we fall short of our service level agreement, we'll compensate you with credits that you redeem them against UKCloud services.

*See also:* [Cloud Credits](#cloud-credits)

### Service Delivery Manager

A UKCloud Customer Services role aimed at providing you with an assigned point of contact who will provide any assistance you require during your use of the service, including onboarding, service reviews and incident reporting and escalation.

### Site

A geographically specific location. UKCloud has two UK-based sites, separated by 100 km, in Farnborough and Corsham. Building your solution across multiple sites provides resilience against scenarios such as natural disasters, targeted terrorist attacks or mass WAN failure.

See also: [Region](#region), [Zone](#zone)

### SiteProtect Advanced DDoS Mitigation

*See:* [Neustar DDoS Protection from UKCloud](#neustar-ddos-protection-from-ukcloud)

### Smart Hands

A UKCloud enablement service that you can use for activities that require physical interaction with components in a data centre, such as physical "push-button" tasks, replacing hardware or checking equipment status.

For more information, see the [Smart Hands service scope](../enablement/enbl-sco-smart-hands.md).

### Snapshot Protection

A UKCloud for VMware protection option that provides a daily backup of your VMs.

For more information, see the [Snapshot Protection service scope](../vmware/vmw-sco-snapshot-protection.md).

## T

### Technical Account Manager (TAM)

*See:* [Service Delivery Manager](#service-delivery-manager)

### Tier 1 storage

Fast block storage, optimised for data warehouses, busy transactional databases and other high IO workloads.

### Tier 2 storage

General all-purpose block storage, providing a balance of performance and cost.

### Transition Services

*See:* [Professional Services](#professional-services)

## U

### UKCloud Desktop as a Service

A UKCloud service that provides a platform to deliver, protect and manage desktops and apps whilst containing costs and ensuring that end users can work anytime, anywhere, across any device.

For more information, see the [UKCloud Desktop as a Service Service Definition](../daas/daas-sd.md).

### UKCloud for Microsoft Azure

A UKCloud IaaS service that harnesses the innovation of Microsoft's Azure platform delivered from within our award-winning government-grade multi-cloud environment.

For more information, see the [UKCloud for Microsoft Azure service definition](../azure/azs-sd.md).

### UKCloud for Managed OpenShift

A UKCloud PaaS service that delivers a secure, private deployment of OpenShift deployed on an assured, trusted platform connected to the internet and to public sector networks including HCSN and Janet.

For more information, see the [UKCloud for Managed OpenShift service definition](../openshift/oshift-sd.md).

### UKCloud for OpenStack

A UKCloud IaaS service, powered by OpenStack, that provides a cloud platform specifically designed around the needs of digital communities, and engineered to facilitate true cloud-native applications.

For more information, see the [UKCloud for OpenStack service definition](../openstack/ostack-sd.md).

### UKCloud for VMware

A UKCloud IaaS service that provides a compute infrastructure specifically designed to deliver traditional enterprise applications in the cloud.

For more information, see the [UKCloud for VMware service definition](../vmware/vmw-sd.md).

### UKCloud Health

A division of UKCloud that is dedicated to health and care, research and life sciences and the pharmaceutical sector. Working with an ecosystem of expert health sector technology partners, we can help you move seamlessly to the cloud, giving you the choice and flexibility of a range of secure, cost-effective technology platforms that are open and interoperable.

*See:* <https://ukcloudhealth.com/>

### UKCloudX

A division of UKCloud specifically designed to cater for the enhanced requirements of the UK Defence and National Security sectors. The team is made up of industry experts, with first hand experience of keeping our nation safe, and experts in delivering cloud at scale. UKCloudX operates across all security domains, including Tier 2.

*See:* <https://ukcloudx.com/>

### UltraDNS

*See:* [Neustar UltraDNS from UKCloud](#neustar-ultradns-from-ukcloud)

## V

### Virtual data centre (VDC)

A container for VMs, where each VM has the same workload characteristics and access to the same resources, such as networking infrastructure, storage and external connectivity.

### Virtual machine (VM)

Software that emulates the functionality of a physical computer, running an operating system and applications. Customers can define a VM's resource requirements and the UKCloud platform optimises its placement to ensure it receives the requested resources.

### VMware

*See:* [UKCloud for VMware](#ukcloud-for-vmware)

### VMware Licence Service (VLS)

A licensing model provided by UKCloud that enables you to exchange the fixed cost of your ongoing VMware Support and Subscription (SnS) Service for existing perpetual VMware licences with a VMware Cloud Provider Programme (VCPP) consumption-based licence provided by UKCloud.

For more information, see the [VMware Licence Service Service Definition](../vmware/vmw-sd-vls.md).

### vOrg

*See:* [Compute service](#compute-service)

## W

### Walled Garden

A Cross Domain Security Zone (CDSZ) service option that provides you with self-service access to the CSDZ so that you can design, implement and manage your own walled garden, using technology and application services of your choice.

For more information, see the [Cross Domain Security Zone service definition](../cdsz/cdsz-sd.md).

*See also:* [Cross Domain Security Zone (CDSZ)](#cross-domain-security-zone-cdsz)

## X

### X

*See:* [UKCloudX](#ukcloudx)

## Y

You can find documentation about how to work with our products at the [UKCloud Knowledge Centre](https://docs.ukcloud.com).

## Z

### Zerto

The disaster recovery software that powers UKCloud's Journaling Protection, Disaster Recovery as a Service and Migration to the Cloud services.

*See also:* [Disaster Recovery as a Service (DRaaS](#disaster-recovery-as-a-service-draas), [Journaling Protection](#journaling-protection), [Migration to the Cloud](#migration-to-the-cloud)

### Zone

A distinct hardware installation within a region, utilising common networking infrastructure but having independent server and storage infrastructure. Ordinarily, each zone hosts only one UKCloud service, but each service, for example Enterprise Compute Cloud or Cloud Native Infrastructure, may be provided in multiple zones in each site.

*See also:* [Site](#site), [Region](#region)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
