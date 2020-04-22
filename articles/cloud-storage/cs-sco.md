---
title: Cloud Storage Service Scope
description: Outlines important details regarding Cloud Storage
services: cloud-storage
author: Steve Hall
reviewer:
lastreviewed: 20/08/2019 16:46:31
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Storage Service Scope
toc_fullpath: Service Scope/cs-sco.md
toc_mdlink: cs-sco.md
---

# Cloud Storage Service Scope

## About this document

This document describes the boundaries of the Cloud Storage service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About Cloud Storage

Cloud Storage from UKCloud is a secure and highly adaptable storage platform designed to address a wide variety of use cases. As an object storage platform based on Dell EMC's Elastic Cloud Storage (ECS), it is natively optimised for cloud storage in terms of scale, resilience and accessibility.

## Service options

Organisations can choose from two service levels:

**STANDARD** - data is stored in a single named UK-sovereign data centre with data protection using erasure coding. This provides fault tolerance by storing three copies of the data across separate nodes, thus improving data durability.

**ENHANCED** - data is stored in two UK-sovereign data centres, with a copy maintained in a primary named UK data centre and copied to a geographically remote UK data centre. This provides a greater degree of fault tolerance than the STANDARD service level by storing an additional copy of the data in a separate site.

If you want more control and visibility of your disaster recovery solution, you can design your solution to write data independently to each data centre at our STANDARD service level, instead of using our ENHANCED service level.

Full details of the available service options are outlined in the [*Service Definition*](cs-sd.md).

## Service availability

UKCloud platform availability is based on the service level you purchase.

The service level agreement (SLA) for the STANDARD service level guarantees 99.95% availability.

The ENHANCED service level SLA guarantees 99.99% availability. In the event of a site failure, there will be an outage to objects created on the failed site. UKCloud will bring these objects online in the other site within 15 minutes.

You are entitled to claim Service Credits for outages to services that take you out of SLA. For more about how we calculate SLAs, see the [*SLA Definition*](../other/other-ref-sla-definition.md).

## Service background

We actively capacity-manage the cloud platform to ensure you have access to the resources you request.

The UKCloud platform is designed using sites, regions and zones. The relationship between them is shown below:

![Geographical diversity](images/cloud-storage-image-1.png)

You can specify Farnborough or Corsham as the site where you would like to have your service provisioned. We will try to accommodate requests and will advise you if we are unable do so.

We control the deployed versions of technology on the platform. This covers internal platform-supporting technologies, and any technology versions available to you.

## Platform management

Users can access, manage and view their Cloud Storage service, in any of the following ways:

- **APIs.** You can use the ECS S3-compatible API. Refer to the [EMC ECS Data Access Guide](https://www.emc.com/collateral/TechnicalDocument/docu79368.pdf) for more information on the features of the API.

    > [!NOTE]
    > The ECS Atmos API has been deprecated, we therefore suggest customers re-engineer their solutions to make use of the defacto S3-compatible API

- **Command Line Interface (CLI).** CLI tools enable access from the command line by translating commands into the relevant API calls.

- **Storage Gateways.** These applications can interact with Cloud Storage via the native API on the back-end and translate it into a more traditional file or block storage protocol at the front-end, enabling a wide variety of use cases. For more information see [*How to install the GeoDrive Client 2.0*](cs-how-install-geodrive2-client.md).

- **UKCloud Portal.** Contains information about the namespaces and users within your Cloud Storage environment, as well as a graphical representation of your storage consumption. For more information on the Portal functionality, see [*How to view Cloud Storage information in the UKCloud Portal*](cs-how-view-info-portal.md).

To create additional namespaces or users, you must raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. When requesting additional users, you can specify whether you want these users to have read-write or read-only permissions.

## Technology constraints

We do not currently offer access as an Network File System (NFS) or a Hadoop Distributed File System (HDFS) enabled account or bucket.

You cannot access the underlying infrastructure. This includes (but isn't limited to) the hardware and the ECS Portal.

## Protection

You can protect against accidental deletion or modification of data by using retention policies or versioning.

**Retention policies** add a layer of protection by preventing files from being modified or deleted for a specified period of time, making them best suited to static data. Retention policies cannot be applied at the object level -- these API requests will be rejected.

**Versioning** can protect against accidental deletion and modification by keeping multiple variants of an object. When versioning is enabled, any operation that would have overwritten an object retains the old version of the object, enabling you to retrieve or restore to a previous version using the S3 API. Each version of an object will be billable for the storage it consumes, so you may want to implement versioning expiration policies to manage your storage footprint.

**Encryption at rest** can be enabled when creating a new namespace or bucket. This encrypts data inline, using an AES 256-bit algorithm, before it is stored on drives. If you want your data to be encrypted at the namespace level, you must request this functionality before your namespace is created, as encryption cannot be enabled or disabled after a namespace is created.

## Networks

Cloud Storage is available on a range of Assured and Elevated networks. An overview of the available networks in each region is available in [*UKCloud Services By Region*](../other/other-ref-services-by-region.md).

Cloud Storage in our Assured OFFICIAL domain uses the same environment for both PSN Assured and internet connections. Although it isn't possible to bridge between these connections, any objects placed in Cloud Storage via PSN Assured will also be accessible via the internet using the appropriate customer credentials.

We manage the physical firewalls that face public and secure networks.

## Protective monitoring

We have implemented GPG 13-aligned Protective Monitoring across the Assured and Elevated platforms at the perimeter of your estate.

We don't provide Protective Monitoring services within your estate - it is your responsibility to act at this level.

In line with UKCloud's SISP, we provide notification of customer-impacting security incidents. It is your responsibility to report similar incidents to us.

## Service migration

You can request a migration through a Service Request. Migrations may be between:

- Services (for example, STANDARD to ENHANCED)

- UKCloud sites or availability zones

- The Assured and Elevated platforms

## Customer service

**Cloud Architect.** UKCloud Cloud Architects support you during the design of solutions for the cloud platform. UKCloud Cloud Architects are ideally placed to help reconcile your requirements with the UKCloud platform. We recommend engagement with a Cloud Architect when implementing complex solutions.

**Service Delivery Manager (SDM).** An assigned point of contact who will provide any assistance you require during your use of the service, including onboarding, service reviews and incident reporting and escalation.

**Support Desk.** After the initial on-boarding and design phase, you can utilise the standard UKCloud support entitlement, which is documented in the [*Customer Engagement Factsheet*](https://ukcloud.com/wp-content/uploads/2018/08/ukcloud-factsheet-customer-care.pdf).

## Customer responsibilities

- Assessing whether the UKCloud platform can support the various requirements of your application and storage needs.

- The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required.

- If access is required over government secure networks (HSCN, Janet, RLI or PSN), the customer is responsible for adhering to the relevant Code of Connection (CoCo) and for providing evidence of their CoCo to UKCloud upon request. UKCloud is unable to provide access to secure networks where such evidence has not been provided by the customer.

- The customer is also responsible for ensuring only lawful data that supports the UK public sector is stored and processed by applications on this environment, and that they fully comply with the UKCloud Security Operating Procedures (SyOPs) and other information assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Service provisioning

Within 1 day of accepting an order (shorter deployment times are typically achieved and can be prioritised upon request), UKCloud will create the customer's Primary Administrator account and send a Welcome Pack which includes the URL for the UKCloud Customer Portal, and the getting started guide.

The customer can then use these details to configure their application (for example GeoDrive, Cloud Tiering Appliance and Documentum) or access Cloud Storage via the API to begin using the service.

UKCloud has created a number of videos, help guides, manuals and FAQs to help train and instruct users so that they are up and running quickly and easily. These are available within the Knowledge Centre, accessed via the UKCloud Portal.

UKCloud also has a large ecosystem of partners who can deliver additional services, such as support and professional services. UKCloud would be pleased to introduce you to the right partner to suit your needs.

## Service constraints

UKCloud will adhere to the following in terms of maintenance windows:

"Planned Maintenance" means any pre-planned disruptive maintenance to any of the infrastructure relating to the service. Planned Maintenance activity may result in periods of degradation or loss of availability depending on the nature of the activity required. In such cases, UKCloud shall provide affected customers with at least fourteen (14) days'
notice of the Planned Maintenance.

If during Planned Maintenance there is a loss of availability outside the scope described in the planned maintenance notification to the service, an SLA event will be triggered.

"Emergency Maintenance" means any urgent maintenance required to prevent or mitigate against any event compromising the infrastructure relating to the service. Whenever possible, UKCloud shall:

a)  provide affected customers with at least six (6) hours' advance notice and

b)  carry out the emergency maintenance between the hours of 00:00 and 06:00 (UK local time) Monday to Friday or between the hours of Saturday 00:00 to 06:00 (UK local time) on Monday, (including bank holidays) unless there is an identified and demonstrable immediate risk to customer environment(s). Emergency Maintenance may result in periods of degradation or loss of availability depending on the nature of the activity required.

If during Emergency Maintenance there is a loss of availability to the service, an SLA event will be triggered. This time will be excluded from the availability calculation.

## Supporting documents and resources

The following documents contain more information about Cloud Storage and the service options:

- [*Cloud Storage Service Definition*](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/563281405917218-service-definition-document-2018-05-21-1258.pdf)

- [*Cloud Storage FAQ*](cs-faq.md)

- [*Getting Started Guide for Cloud Storage*](cs-gs.md)

- [*How to view Cloud Storage information in the UKCloud Portal*](cs-how-view-info-portal.md)

- [*How to install the GeoDrive Client 2.0*](cs-how-install-geodrive2-client.md)

- [*How to use file browsers with Cloud Storage*](cs-how-use-file-browsers.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
