---
title: UKCloud for Microsoft Azure Service Scope | UKCloud Ltd
description: Outlines important details regarding UKCloud for Microsoft Azure
services: azure-stack
author: Mario Fedato
reviewer: Mario Fedato
lastreviewed: 25/06/2019

toc_rootlink: Users
toc_sub1: Service Scope
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure Service Scope
toc_fullpath: Users/Service Scope/azs-sco.md
toc_mdlink: azs-sco.md
---

# UKCloud for Microsoft Azure Service Scope

## About this document

This document describes the boundaries of the UKCloud for Microsoft Azure service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About UKCloud for Microsoft Azure

UKCloud for Microsoft Azure harnesses the innovation of Microsoft’s Azure platform and we deliver this service from within our award-winning government-grade multi-cloud environment – addressing the service, connectivity and diversity requirements of UK public sector organisations and their industry partners. The service is based on the Microsoft Azure Stack product, which has been developed by Microsoft as an extension of the Azure public cloud.

## Service options

You can build a tailored solution to meet your requirements by mixing and matching service options. The choice does not lock you to one service or size, enabling you to scale resources up or down as your requirements change.

The options below are all currently available within the service:

### IaaS compute

Virtual machines (VMs) provide the basic building blocks of compute resource within UKCloud for Microsoft Azure. Each standard machine has a pre-allocated number of vCPUs, amount of memory and a temporary disk. The available sizes and families of VMs are continually increasing. Broadly, the following machine families are supported:

- Basic and Standard A-Series. CPU performance and memory configurations best suited for entry level workloads like development and test.  

- Standard D-Series and DS-Series. Optimised CPU-to-memory configuration, making them suitable for most general-purpose applications. A subset of the D-series VMs also sport higher memory per CPU making them suitable for applications that require higher amounts of memory.

- Basic and Standard F-series. Optimised for CPU-intensive workloads so have a higher CPU to memory configurations.

You can find the full list of supported virtual machine sizes [here](https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes).

You can deploy VMs using the UKCloud Azure Stack portal and other tooling.

> [!Warning]
> Each VM contains a temporary disk. The temporary disk provides short-term storage for applications and processes and is intended to only store data such as page or swap files. Data on the temporary disk may be lost during a maintenance event or when you redeploy a VM.

### Storage options

There are several ways in which storage can be addressed in UKCloud for Microsoft Azure:

- Azure Blob Storage (Page)
 Page blobs are optimized for representing IaaS disks and supporting random writes that are up to 1 TB in size. An Azure Stack virtual machine attached IaaS disk is a Virtual Hard Disk (VHD) stored as a page blob. At present only unmanaged disks can be offered in the service.

- Azure Blob Storage (Block)
 Block blobs (generically known as object storage) are optimised for streaming and storing cloud objects, and are a good choice for storing documents, media files, backups, and so on.

- Azure Blob Storage (Append)
 Append blobs are optimised for append operations. An append blob can be updated only by adding a new block to the end. Append blobs are a good choice for scenarios such as logging, where new data needs to be written only to the end of the blob.

- Azure Queue Storage
 In designing applications for scale, application components are often decoupled, so that they can scale independently. Queue storage provides a reliable messaging solution for asynchronous communication between application components, whether they're running in the cloud, on the desktop, on an on-premises server, or on a mobile device. Queue storage also supports managing asynchronous tasks and building process workflows. A storage account can contain any number of queues, and a queue can contain any number of messages, up to the capacity limit of the storage account. Individual messages may be up to 64 KB in size.

- Azure Table Storage
 Table storage is Microsoft's NoSQL key/attribute store - it has a schemaless design, making it different from traditional relational databases. With a schemaless data store, it's easy to adapt your data as the needs of your application evolve. Table storage is easy to use, so developers can create applications quickly. Table storage is a key-attribute store, which means that every value in a table is stored with a typed property name. The property name can be used for filtering and specifying selection criteria. A collection of properties and their values comprise an entity. Since table storage is schemaless, two entities in the same table can contain different collections of properties, and those properties can be of different types. You can use table storage to store flexible datasets, such as user data for web applications, address books, device information, and any other type of metadata that your service requires. For today's internet-based applications, NoSQL databases like table storage offer a popular alternative to traditional relational databases. A storage account can contain any number of tables, and a table can contain any number of entities, up to the capacity limit of the storage account.

> [!NOTE]
> All storage in Azure Stack is taken from a common pool. When designing your service for UKCloud for Microsoft Azure, consider the best usage of your storage. For example, if you have a large object storage requirement, consider using the UKCloud's Cloud storage platform as part of your solution.

### Service management

- API. Enables you to programmatically interact with UKCloud for Microsoft Azure resources.

- UKCloud for Microsoft Azure Marketplace – provides access to pre-created images, which help speed up application delivery.

- Azure Resource Manager – enables you to write templates to deploy, update and delete UKCloud for Microsoft Azure resources in a single coordinated operation.

- VM Extensions – UKCloud for Microsoft Azure supports virtual machine extensions that provide post deployment management for automation (for example, PowerShell DSC).

### Network

UKCloud manages the physical firewalls that face public and secure networks.

You can deploy multiple gateway devices and configure the following using either the UKCloud Azure Stack portal or API:

- Virtual networks – UKCloud for Microsoft Azure enables you to configure virtual private clouds, and create and manage your private address space within Azure. You can configure this via the UI, API or other tooling

- Load balancers (IPv4 only) – you can deploy basic load balancers VPN gateway – you can use the UKCloud for Microsoft Azure VPN gateway to create site-to-site VPNs to remote infrastructure

- Routing – basic custom defined routing can be configured on virtual networks

**Internet-facing solutions** have 10 usable public IP addresses. You can ask for additional public IP addresses by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. We reserve the right to decline the request if you have spare capacity in your existing deployment.

### Advanced features

- Key Vault. UKCloud for Microsoft Azure provides cryptographic secret storage for applications and services. These services can be consumed via both portal and API. More information found [here](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-kv-intro).

### Protection options

You are responsible for designing your own disaster recovery and backup solutions as part of your adoption of UKCloud for Microsoft Azure.

## Service availability

The availability of your virtual machines in UKCloud for Microsoft Azure follows the same principles of the Microsoft Azure Public Cloud, where customers achieve a higher service level availability based on how they architect the solution.

The service levels are as follows:

- 99.90% (a single VM deployed as a single instance deployed inside a zone)

- 99.95% (a single VM with two instances deployed inside a zone)

> [!TIP]
> To qualify for the higher service level, we advise that you use on-platform tools, like availability sets, that ensure your VMs are provisioned to different hardware in the zone.

## Service background

- VMs are fully provisioned.

- The system is configured to automatically balance resources, so your VMs may be moved between physical hosts.

- We actively capacity-manage the cloud platform to ensure you have access to the resources you request.

- You can specify the site where you would like to have your service provisioned (from sites where UKCloud for Microsoft Azure is available).

- The UKCloud for Microsoft Azure service is updated regularly with the latest code release from Microsoft - typically, this is once a month and notified via the [UKCloud service status page](https://status.ukcloud.com/) and the [UKCloud Portal](https://portal.ukcloud.com). UKCloud aim to be within two updates from Microsoft, however, we will control the release of the patches into the live service.

- Through the UKCloud Azure Stack portal you can use availability sets so that VMs do not run on the same physical host.

- You can make additional configurations inside a VM (such as acting as a secondary hypervisor or implementing third-party software technologies), however, we do not support these customer implementations.

### Azure Marketplace

UKCloud for Microsoft Azure includes access to a local version of the Azure Marketplace. The Marketplace contains a collection of services, applications, and resources customized for Azure Stack that you can deploy in your environment. Every Marketplace item has:

- An Azure Resource Manager template for resource provisioning

- Metadata, such as strings, icons, and other marketing collateral

- Formatting information to display the item in the portal

We've pre-populated the Marketplace with a variety of images and templates that have been identified as the most useful services. You can request additional resources are added, provided they are approved for use on Azure Stack. A full list of available items can be found [here](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-marketplace-azure-items).

You are responsible for ensuring that you have appropriate licensing and support in place for any item deployed from the Marketplace not licensed by UKCloud.

## Operating systems

### Licensing

We can provide:

- OS licensing for Microsoft

- Red Hat Enterprise Linux licensing

For the latest available licences, check the [*Service Definition*](azs-sd.md).

You can bring your own licensing for Red Hat and certain Microsoft application licensing under Microsoft Mobility using software assurance. If you're providing your own licensing, you should inform UKCloud (by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal) for a retrospective discount.

For non-UKCloud issued software, you must obey the licensing requirements of the software provider. This includes being aware of any constraints around using the software in a virtualised environment.

### VM server images

We provide base VM images for the operating systems (OS) for which we provide licensing, along with images for various free Linux distributions (such as Ubuntu, CentOS & Debian). You can access these from the Marketplace available within the UKCloud Azure Stack portal.

You can use your own images for non-Windows and RHEL services, where licensing stipulates that to use the VM on our platform it must be licensed (and reported back to the software vendor) by UKCloud.

**Anti-virus.** We do not provide anti-virus software as part of the service.

## Protective monitoring

We have implemented GPG 13-aligned Protective Monitoring across the Assured and Elevated security domains at the hypervisor level and below.

We don't provide Protective Monitoring services above the hypervisor (for example, for your VM) - it is your responsibility to act at this level.

In line with UKCloud's SISP, we provide notification of customer-impacting security incidents. It is your responsibility to report similar incidents to us.

## Platform management

Users can access, manage and view the UKCloud for Microsoft Azure service, accessing only those features allowed by your role, in any of the following ways:

- **Azure Stack API.** Enables the programmatic creation and management of the services inside the platform.

- **Azure Stack graphical UI.** Provides a graphical interface to access the Azure Stack environment (depending on assigned permissions).

- **UKCloud Portal.** Access to service reporting and incident and request management.

You cannot access the underlying infrastructure. This includes (but isn't limited to) the hardware.

## Service reporting

**Visibility.** You can use the UKCloud Azure Stack portal to configure multiple views of your estate and monitor the health of your services in real time. This includes utilisation of individual components, alerts and recent operations.

**Reporting.** We provide a monthly service report via the UKCloud Portal. This includes a summary of platform availability and a retrospective of the interactions with UKCloud support during the previous month. Maintenance notifications and Service Status reports are also delivered through the Portal and via the [UKCloud status page](https://status.ukcloud.com/).

**Billing.** We provide you with monthly bills covering your monthly spend.

## Customer service

**Customer Success Manager (CSM).** All new customers of the service have access to a UKCloud Customer Success Manager, who will help you with your adoption of the UKCloud for Microsoft Azure service,  including finding relevant systems and using UKCloud tools and processes.

**Cloud Architects.** Cloud Architects support you during the design of solutions for the cloud platform. Cloud Architects are ideally placed to help reconcile your requirements with the UKCloud platform. We recommend engagement with a Cloud Architect when implementing complex solutions, such as those using HybridConnect or a Walled Garden.

**Technical Account Managers (TAM).** You will be allocated with an assigned point of contact who will provide ongoing assistance with reporting and incident escalation.

**Support.** After the initial on-boarding and design phase, you can utilise the standard UKCloud support entitlement, which is documented in the [*Customer Engagement Factsheet*](https://ukcloud.com/wp-content/uploads/2018/08/ukcloud-factsheet-customer-care.pdf).

## Customer responsibilities

- You are responsible for defining which Azure Active Directory (AAD) you want to link your UKCloud for Microsoft Azure service to. You can choose to link to your existing AAD, or ask UKCloud to create a new AAD solely for the use of this service.

- You are responsible for assessing whether the UKCloud platform can support the various requirements of your application.

- The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required.

- If access is required over government community networks (PSN, HSCN, Janet or RLI), you are responsible for adhering to the relevant Code of Connection (CoCo) and for providing evidence of your CoCo to UKCloud upon request. UKCloud is unable to provide access to secure networks where you have not provided the required evidence.

- Management and administration of layers above the hypervisor (OS patching, application performance monitoring, user administration).

- You are also responsible for ensuring only lawful data that supports the UK public sector is stored and processed by applications on this environment, and that you fully comply with the UKCloud Security Operating Procedures (SyOPs) and other information assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Service provisioning

Within 4 hours of accepting an order (shorter deployment times are typically achieved and can be prioritised upon request), UKCloud will create the customer's Primary Administrator account and send a Welcome Pack which includes the URL for the UKCloud Customer Portal, and the getting started guide.

We've created several articles, guides and FAQs to help you get up and running quickly and easily. These are available within our [Knowledge Centre](https://docs.ukcloud.com/).

In addition, you will be assigned a Customer Success Manager (CSM) to provide any assistance required during the first 90 days of the service.

UKCloud also has a large ecosystem of partners who can deliver additional services, such as support and professional services. UKCloud would be pleased to introduce you to the right partner to suit your needs.

## Service constraints

UKCloud will adhere to the following in terms of maintenance windows:

"Planned Maintenance" means any pre-planned disruptive maintenance to any of the infrastructure relating to the service. Planned Maintenance activity may result in periods of degradation or loss of availability depending on the nature of the activity required. In such cases, UKCloud shall provide affected customers with at least fourteen (14) days' notice of the Planned Maintenance.

If during Planned Maintenance there is a loss of availability outside the scope described in the planned maintenance notification to the service, an SLA event will be triggered.

"Emergency Maintenance" means any urgent maintenance required to prevent or mitigate against any event compromising the infrastructure relating to the service. Whenever possible, UKCloud shall:

a)  provide affected customers with at least six (6) hours' advance notice and

b)  carry out the emergency maintenance between the hours of 00:00 and 06:00 (UK local time) Monday to Friday or between the hours of Saturday 00:00 to 06:00 (UK local time) on Monday, (including bank holidays) unless there is an identified and demonstrable immediate risk to customer environment(s). Emergency Maintenance may result in periods of degradation or loss of availability depending on the nature of the activity required.

If during Emergency Maintenance there is a loss of availability to the service, an SLA event will be triggered. This time will be excluded from the availability calculation but will be included in monthly service reporting related to the service.

## Supporting documents and resources

The following documents contain more information about UKCloud for Microsoft Azure and the service options:

- [*UKCloud for Microsoft Azure service definition*](azs-sd.md)

- [*UKCloud for Microsoft Azure FAQ*](azs-faq.md)

- [*Getting Started Guide for for Microsoft Azure*](azs-gs.md)

- [UKCloud Terms and Conditions](../other/other-ref-terms-and-conditions.md)

- [*SLA Definition*](../other/other-ref-sla-definition.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
