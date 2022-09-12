---
title: UKCloud for Microsoft Azure Service Scope
description: Outlines important details regarding UKCloud for Microsoft Azure
services: azure-stack
author: mfedato
reviewer: cblackuk
lastreviewed: 18/01/2021

toc_rootlink: Users
toc_sub1: Service Information
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Scope
toc_fullpath: Users/Service Information/azs-sco.md
toc_mdlink: azs-sco.md
---

# UKCloud for Microsoft Azure Service Scope

## About this document

This document describes the boundaries of the UKCloud for Microsoft Azure service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About UKCloud for Microsoft Azure

UKCloud for Microsoft Azure harnesses the innovation of Microsoft's Azure Stack Hub platform to deliver Microsoft Azure services from UKCloud's award-winning government-grade multi-cloud environment, addressing the security, service, connectivity and diversity requirements of UK Public Sector organisations and their industry partners.

As a Microsoft Cloud Solution Provider (CSP), UKCloud can also manage and support customers in their utilisation of Microsoft Azure public, making UKCloud the one-stop partner for all your Microsoft Azure requirements.

### Service delivery options

UKCloud can deliver an Azure service using either our own Azure Stack Hub from the UKCloud platform, from the Azure public service or a combination of the two. While the functionality and tooling are very similar for both options, there are some differences, including the process of assigning agreements, billing and responsibilities. For clarity, the following are specific to each delivery option.

## UKCloud Azure Stack Hub

This single-tenant service is provisioned from the UKCloud platform, and is owned, maintained and supported by UKCloud as with all other UKCloud technology stacks.

### UKCloud Azure Stack Hub Service implementation

#### Service management

- API. Enables customers to programmatically interact with UKCloud for Microsoft Azure resources.

- UKCloud for Microsoft Azure Marketplace. Provides access to pre-created images, which help speed up application delivery.

- Azure Resource Manager. Enables customers to write templates to deploy, update and delete UKCloud for Microsoft Azure resources in a single coordinated operation.

- VM Extensions. UKCloud for Microsoft Azure supports virtual machine extensions that provide post deployment management for automation (for example, PowerShell DSC).

#### Service options

Customers can build a tailored solution to meet their requirements by mixing and matching service options. This choice enables the scaling up or down of resources to meet requirements changes, without service or size lock-in.

Azure Stack Hub is available **only** as a private deployment (single-tenant).

Customers with private Azure Stack Hub environments can consume Microsoft Azure IaaS services and services built on Azure IaaS templates like Azure Kubernetes Service (AKS), and also enable PaaS services such as Azure Functions, SQL and MySQL services, IoT Hub and Event Hubs.

For a full list of Azure Stack Hub services, see [here](https://azure.microsoft.com/en-gb/overview/azure-stack/keyfeatures/).

##### IaaS compute

Virtual machines (VMs) provide the basic building blocks of compute resource within UKCloud for Microsoft Azure. Each standard machine has a pre-allocated number of vCPUs, amount of memory and a temporary disk. The available sizes and families of VMs are continually increasing. Broadly, the following machine families are supported:

- Basic and Standard A-Series. CPU performance and memory configurations best suited for entry level workloads like development and test.

- Standard D-Series and DS-Series. Optimised CPU-to-memory configuration, making them suitable for most general-purpose applications. A subset of the D-series VMs also supports higher memory per CPU, making them suitable for applications that require higher amounts of memory.

- Basic and Standard F-Series. Optimised for CPU-intensive workloads so have a higher CPU-to-memory configurations.

- GPU enabled (NVIDIA and AMD) N-Series VM types as follows: NCv3, NVv4 (AMD MI25), NCasT4_v3.

For a full list of supported virtual machine sizes, see [here](https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes). For more information about GPU-enabled VMs, see [here](https://docs.microsoft.com/en-gb/azure-stack/user/gpu-vms-about).

Customers can deploy VMs using the UKCloud Azure Stack Hub portal and other tooling.

> [!WARNING]
> Each VM contains a temporary disk. The temporary disk provides short-term storage for applications and processes and is intended to only store data such as page or swap files. Data on the temporary disk may be lost during a maintenance event or when redeploying a VM.

##### Storage options

There are several ways to address storage requirements in UKCloud for Microsoft Azure:

- Azure Blob Storage (Page). Page blobs are optimised for representing IaaS disks and supporting random writes that are up to 1 TB in size. An IaaS disk attached to an Azure Stack Hub VM is a Virtual Hard Disk (VHD) stored as a page blob.

- Azure Blob Storage (Block). Block blobs (generically known as object storage) are optimised for streaming and storing cloud objects, and are a good choice for storing documents, media files, backups, and so on.

- Azure Blob Storage (Append). Append blobs are optimised for append operations. An append blob can be updated only by adding a new block to the end. Append blobs are a good choice for scenarios such as logging, where new data needs to be written only to the end of the blob.

- Azure Queue Storage. In designing applications for scale, application components are often decoupled, so that they can scale independently. Queue storage provides a reliable messaging solution for asynchronous communication between application components, whether they're running in the cloud, on the desktop, on an on-premises server, or on a mobile device. Queue storage also supports managing asynchronous tasks and building process workflows. A storage account can contain any number of queues, and a queue can contain any number of messages, up to the capacity limit of the storage account. Individual messages may be up to 64 KB in size.

- Azure Table Storage. Table storage is Microsoft's NoSQL key/attribute store - it has a schemaless design, making it different from traditional relational databases. With a schemaless data store, it's easy to adapt data as the needs of the application evolve. Table storage is easy to use, so developers can create applications quickly. Table storage is a key-attribute store, which means that every value in a table is stored with a typed property name. The property name can be used for filtering and specifying selection criteria. A collection of properties and their values comprise an entity. Since table storage is schemaless, two entities in the same table can contain different collections of properties, and those properties can be of different types. Table storage is useful for storing flexible datasets, such as user data for web applications, address books, device information and any other type of metadata that a service requires. For today's internet-based applications, NoSQL databases like table storage offer a popular alternative to traditional relational databases. A storage account can contain any number of tables, and a table can contain any number of entities, up to the capacity limit of the storage account.

> [!NOTE]
> All storage in Azure Stack Hub is taken from a common pool. When designing a service for UKCloud for Microsoft Azure, developers should consider the best usage of storage. For example, for a large object storage requirement, consider using UKCloud's [Cloud Storage service](../cloud-storage/cs-gs.md) as part of the solution.

##### Network

UKCloud manages the physical firewalls that face public and secure networks.

Customers can deploy multiple gateway devices and configure the following using either the UKCloud Azure Stack Hub portal or API:

- Virtual networks. UKCloud for Microsoft Azure enables customers to configure virtual private clouds and create and manage a private address space within Azure. Customers can configure this via the UI, API or other tooling.

- VNet peering. Enables customers to seamlessly connect virtual networks inside an Azure Stack Hub environment.

- Load balancers (IPv4 only). Deploy basic load balancers VPN gateway across Azure environments.

- VPN gateway. Use the UKCloud for Microsoft Azure VPN gateway to create site-to-site VPNs to remote infrastructure.

- Routing. Configure basic custom defined routing on virtual networks.

Internet-facing solutions have a pool of usable public IP addresses. Contact your Service Delivery Manager (SDM) regarding any additional requirements.

##### Advanced features

- **Key Vault.** UKCloud for Microsoft Azure provides cryptographic secret storage for applications and services. Customers can consume these services via both portal and API. For more information, see [here](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-kv-intro).

##### Protection options

Customers are responsible for designing their own disaster recovery and backup solutions as part of their adoption of UKCloud for Microsoft Azure.

#### Azure Stack Hub Marketplace

UKCloud for Microsoft Azure includes access to a local version of the Azure Marketplace. The Marketplace contains a collection of services, applications and resources customised for Azure Stack Hub that customers can deploy in their environment. Every Marketplace item has:

- An Azure Resource Manager template for resource provisioning

- Metadata, such as strings, icons, and other marketing collateral

- Formatting information to display the item in the portal

We've pre-populated the Marketplace with a variety of images and templates that have been identified as the most useful services. Customers can request for additional resources to be added, provided they are approved for use on Azure Stack Hub. For a full list of available items, see [here](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-marketplace-azure-items).

Customers are responsible for ensuring that they have appropriate licensing and support in place for any items deployed from the Marketplace not licensed by UKCloud.

#### Licensing

We can provide:

- Microsoft operating system and application licensing

- Red Hat Enterprise Linux licensing

For the latest available licences, check the [Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-240-ukcloud-for-microsoft-azure-service-definition-13.0.pdf).

You can bring your own licensing for Red Hat and certain Microsoft application licensing under Microsoft Mobility using software assurance. If customers provide their own licensing, they must inform UKCloud (by raising a Service Request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal) for a retrospective discount.

For non-UKCloud issued software, customers must obey the licensing requirements of the software provider. This includes being aware of any constraints around using the software in a virtualised environment.

#### VM server images

We provide base VM images for the operating systems for which we provide licensing, along with images for various free Linux distributions (such as Ubuntu, CentOS and Debian). Customers can access these from the Marketplace available within the UKCloud Azure Stack Hub portal.

Customers can use their own images for non-Windows and RHEL services, where licensing stipulates that to use the VM on our platform it must be licensed (and reported back to the software vendor) by UKCloud.

We do not provide anti-virus software as part of the service.

### UKCloud Azure Stack Hub Service provisioning

After we receive a purchase order for a Private Azure Stack Hub, we'll contact the customer to advise when the environment will be available. UKCloud will create the customer's Primary Administrator account and send a Welcome Pack, which includes the URLs for the UKCloud Portal and Getting Started Guide.

We've created several articles, guides and FAQs to help customers get up and running quickly and easily. These are available within this Knowledge Centre.

UKCloud also has a large ecosystem of partners who can deliver additional services, such as support and professional services. UKCloud would be pleased to introduce customers to the right partner to suit their needs.

### UKCloud Azure Stack Hub platform management

Customers can access, manage and view the UKCloud for Microsoft Azure service, accessing only those features allowed by their role, in any of the following ways:

- Azure Stack Hub API. Enables the programmatic creation and management of the services inside the platform.

- Azure Stack Hub portal. Provides a graphical user interface (GUI) to access the Azure Stack Hub environment (depending on assigned permissions).

- UKCloud Portal. Access to incident and request management.

Customers cannot access the underlying infrastructure. This includes (but isn't limited to) the hardware.

### UKCloud Azure Stack Hub customer responsibilities

Customers are responsible for:

- Defining which Azure Active Directory (AAD) to link their UKCloud for Microsoft Azure service to. Customers can link to their existing AAD or ask UKCloud to create a new AAD solely for the use of this service.

- Assessing whether the UKCloud platform can support the various requirements of their application.

- The control and management of access and responsibilities for end users, including appropriate connectivity, security and accreditation if required.

- If access is required over government community networks (PSN, HSCN, Janet or MCN), customers are responsible for adhering to the relevant Code of Connection (CoCo) and for providing evidence of their CoCo to UKCloud upon request. UKCloud is unable to provide access to secure networks where customers have not provided the required evidence.

- Management and administration of layers above the hypervisor (OS patching, application performance monitoring, user administration).

- Ensuring only lawful data that supports the UK Public Sector is stored and processed by applications on this environment, and that they fully comply with the UKCloud Security Operating Procedures (SyOPs) and other information assurance requirements as specified in the UKCloud SISP and associated accreditation documentation sets.

### UKCloud Azure Stack Hub support

#### Service reporting

- **Visibility.** Customers can use the UKCloud Azure Stack Hub portal to configure multiple views of their estate and monitor the health of their services in real time. This includes utilisation of individual components, alerts and recent operations.

- **Billing.** We provide customers with monthly bills covering their monthly spend.

#### Protective Monitoring

We've implemented GPG 13-aligned Protective Monitoring across the Assured and Elevated security domains at the hypervisor level and below. For more information, see [*Protective Monitoring from UKCloud*](../other/other-ref-promon.md).

If you require protective monitoring services above the hypervisor (for example, for your VM), we offer our Security Operations Service to monitor your virtual estate (additional charges apply). For more information, see the [Security Operations Service Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-239-security-operations-service-service-definition-13.0.pdf).

In line with UKCloud's System Interconnect and Security Policy (SISP), we provide notifications of customer-impacting security incidents. It's the customer's responsibility to report similar incidents to us.

### UKCloud Azure Stack Hub service availability

The availability of VMs in UKCloud for Microsoft Azure follows the same principles of the Microsoft Azure public cloud, where customers achieve a higher service level availability based on how they architect the solution.

The service levels are as follows:

- 99.90% (a single VM deployed as a single instance deployed inside a zone)

- 99.95% (a single VM with two instances deployed inside a zone)

> [!TIP]
> To qualify for the higher service level, we advise that customers use on-platform tools, such as availability sets, that ensure VMs are provisioned to different hardware in the zone.
>
> We highly recommend duplicating workloads across two separate Azure Stack Hub regions for higher availability.

#### Service background

- VMs are fully provisioned.

- The system is configured to automatically balance resources, so VMs may be moved between physical hosts.

- We actively capacity-manage the cloud platform to ensure customers have access to the resources they request.

- Customers can specify the site where they would like to have their service provisioned (from sites where UKCloud for Microsoft Azure is available).

- The UKCloud for Microsoft Azure service is updated regularly with the latest code release from Microsoft. Typically, this is once a month and UKCloud aim to be within two updates from Microsoft, however, we'll control the release of the patches into the live service.

- Through the UKCloud Azure Stack Hub portal, customers can use availability sets so that VMs do not run on the same physical host.

- Customers can make additional configurations inside a VM (such as acting as a secondary hypervisor or implementing third-party software technologies), however, we do not support these customer implementations.

#### Service maintenance windows

For UKCloud Azure Stack Hub, Planned and Emergency Maintenance are not included in the SLA.

For information about Planned and Emergency Maintenance, see [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

## Azure public cloud

UKCloud is a Tier 1 Cloud Solution Provider (CSP) and so is able to offer support and delivery of Microsoft Azure public services. To take advantage of the services, customers just need to nominate UKCloud as their CSP.

By nominating UKCloud as their CSP, customers get access to:

- 24/7 UK-based support with adherence to standard UKCloud response times (P1 in under 15 minutes), with 3rd line escalation support into Microsoft

- Consolidated billing for all UKCloud services, with UKCloud owning resolving billing challenges with Microsoft

- Ongoing service optimisation and architecture support

For UKCloud to support a customer's Azure public environment, the CSP agreement must be in UKCloud's name as the Tier 1 CSP. For instructions on how to do this, see [here](azs-how-use-ukc-csp.md).

As with all services, UKCloud provides onboarding and ongoing support from our team of service professionals detailed below.

The Microsoft Azure public cloud has a range of services that is continuously evolving and whose availability differs based on the region utilised for deployment. For details of the latest services, see [here](https://azure.microsoft.com/en-gb/solutions/).

Customers purchasing their public Azure services from UKCloud will be charged at Microsoft Azure list prices for the region they consume the services from.

While UKCloud provides support for the service, ultimate responsibility for delivery and availability of the platform service is owned by Microsoft, who have their own SLA agreements and criteria, with customers responsible for how they utilise, configure and manage those services and which criteria they choose to meet.

UKCloud has no control over Microsoft Maintenance activities, and these may not be subject to the same notice provided for UKCloud operated platforms.

UKCloud will not honour any service outage claim not accepted by Microsoft.

UKCloud can offer additional professional and managed services in relation to Microsoft Azure that can support customers' deployments and ongoing utilisation of Azure services, get in contact to find out more.

## Customer service

**Cloud Architect.** Cloud Architects support customers during the design of solutions for the cloud platform. Cloud Architects are ideally placed to help reconcile customer requirements with the UKCloud platform. We recommend engagement with a Cloud Architect when implementing complex solutions, such as those using HybridConnect or a Walled Garden.

**Service Delivery Manager (SDM).** An assigned point of contact who will provide any assistance required during your use of the service, including onboarding, service reviews and incident reporting and escalation.

**Support Desk.** After the initial onboarding and design phase, customers can utilise the standard UKCloud support entitlement. For more information, see [*Raising and escalating support tickets with customer support*](../portal/ptl-ref-raise-escalate-service-request.md).

## Pricing and billing

For UKCloud for Microsoft Azure pricing, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide). For additional pricing information relating to this service, including pricing examples, billing information, additional fees and free trial information, see [*Pricing information for UKCloud for Microsoft Azure*](azs-ref-pricing.md).

## Supporting information

The following documents contain more information about UKCloud for Microsoft Azure and the service options:

- [UKCloud for Microsoft Azure Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-240-ukcloud-for-microsoft-azure-service-definition-13.0.pdf)

- [*Pricing information for UKCloud for Microsoft Azure*](azs-ref-pricing.md)

- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)

- [*UKCloud Terms and Conditions*](../other/other-ref-terms-and-conditions.md)

- [*SLA Definition*](../other/other-ref-sla-definition.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
