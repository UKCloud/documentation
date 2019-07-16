---
title: Cloud Storage FAQs | UKCloud Ltd
description: Frequently asked questions for Cloud Storage
services: cloud-storage
author: Dan Baker
reviewer:
lastreviewed: 17/07/2018 16:46:31
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud Storage FAQs
toc_fullpath: FAQs/cs-faq.md
toc_mdlink: cs-faq.md
---

# Cloud Storage FAQs

## Service

### What is the service?

Cloud Storage from UKCloud is a secure next-generation storage platform designed to address a wide variety of use cases. It's based on Dell EMC Elastic Cloud Storage (ECS), which is an object storage technology natively optimised for cloud storage in terms of scale, resilience and accessibility.

### Where will my data be physically stored?

Data will be stored in one or both of our highly resilient tier 3, UK-sovereign data centres, which are separated by over 100km.

### How much data can I store?

Our Cloud Storage solution can scale to multi-Petabytes across multiple sites, meeting the most demanding storage requirements.

### How many copies of my data are included?

Object storage technology works in a slightly different way to traditional local storage solutions that tend to use RAID as a method to provide data durability.

Instead, Cloud Storage provides data resilience using the Reed Solomon 12 + 4 erasure coding scheme, which splits an object into 12 data fragments and 4 coding fragments. These fragments are spread across multiple nodes in the data centre and the storage engine can reconstruct an object from any of the 12 data fragments, providing protection in the event of a disk or node failure.

The ENHANCED service level stores an additional copy of your data in our second, geographically remote data centre.

## Management

### How do I access the platform?

The service is Application Programming Interface (API) accessible, so is an ideal target for customer applications. It can also be used by existing systems.

In addition, the platform can be accessed using a variety of software tools such as cloud storage gateways, file browsers and other software products.

Documentation on ways to interact with the platform is available from the [Knowledge Centre](cs-gs.md).

### Is data accessible via the PSN Assured connection also accessible via the internet?

Cloud Storage in our Assured OFFICAL domain uses the same environment for both PSN Assured and internet connections. Although it is not possible to bridge between these connections, any objects placed in Cloud Storage via PSN Assured will also be accessible via the internet using the appropriate customer credentials.

### Can I restrict Cloud Storage access to specific networks?

It is possible to lock Cloud Storage accounts down so that buckets are only accessible via a single network (for example HSCN, PSN, Janet), but we cannot lock down a bucket to a customer-specified source IP address or range. 

> [!IMPORTANT]
> As we impose this restriction at a Cloud Storage user account level rather than the bucket itself, any new users that you add to the ECS account will be able to access associated buckets from ANY network until you request that we update our blacklist. To request network restrictions, raise a support ticket through [My Calls](https://portal.skyscapecloud.com/support/my_calls). Alternatively, you can contact support by phone or email.

### Which APIs are supported by the platform?

Our Cloud Storage supports an Elastic Cloud Storage S3-compatible API and the native ATMOS RESTful API.

Documentation and user manuals for [supported API calls](cs-gs.md) are available from the Knowledge Centre.

### How frequently can I back up data?

The frequency of data backup is defined and managed by your organisation administrator.

UKCloud's object storage is however highly durable and can automatically recover from disk and node failure, negating the need for a backup.

### What reports can I get about storage usage? 

We provide tools for monitoring used capacity and storage growth via the UKCloud Portal.

### What software tools are provided? 

UKCloud does not provide software tools for accessing the platform as storage is accessed via APIs, supporting S3 and Native ATMOS.

You can however directly connect any S3 compatible tools to your storage (for example, S3 Browser and Cyberduck).

### How do I encrypt my data-at-rest?

Data at rest encryption is an optional feature of our Cloud Storage product, with no additional cost. There are three options available to Cloud Storage customers looking to encrypt their data:

1. Customer managed encryption. The Customer encrypts their data prior to moving it into UKCloud Cloud Storage. This avoids having to do any additional development against the ECS S3 API and ensures the customer retains the keys used to encrypt the data.

2. Server-side encryption at rest with system generated keys. The customer enables server-side encryption in the request headers when creating buckets using the S3-compatible API, without specifying the keys. In this case the keys are auto-generated by ECS, simplifying key management. However, customers should be aware that the public and private keys used at the top of the hierarchy are shared between all customers encrypting their data through this method. See page 37 of [the ECS Architecture whitepaper](http://dellemcevents.com/uploads/Dell-EMC-Elastic-Cloud-Storage-ECS-Overview-and-Architecture.pdf) for more information on this encryption method.

3. Server-side encryption at rest with user-supplied keys. The customer enables server-side encryption in the request header with user-supplied keys when creating buckets using the S3-compatible API. This increases complexity but ensures the customer retains control of their keys when using server-side encryption. There is an example of this method on page 14 of the [ECS Security Configuration guide](https://support.emc.com/docu86300_ECS-3.1-Security-Configuration-Guide.pdf?language=en_US).

Ultimately, it is down to the customer to select which encryption methodology should be used and understand the possible risks involved.

### How do I create new Cloud Storage users? 

You can create additional users in the UKCloud Portal. For more information, see [*How to create a new Cloud Storage user in the UKCloud Portal*](cs-how-create-user.md).

## Support

### How do I raise a support ticket?

UKCloud's secure online Portal provides the most common service management functionality, enabling you to raise support tickets through [My Calls](https://portal.skyscapecloud.com/support/my_calls). Alternatively, you can contact support by phone or email.

### How do I manage my services?

Cloud Storage on the Assured OFFICIAL domain can be managed over the internet (or other connectivity) via the UKCloud Portal.

For the Elevated OFFICIAL domain, security requirements are stricter and require either a PSN-approved connection, UKCloud Secure Remote Access or CAPS-approved encryption.

### What are your service maintenance windows?

As far as possible, planned maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on a Saturday or Sunday. We provide customers with at least 14 days' advance notice of planned maintenance.

As far as possible, emergency maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on Saturday or Sunday, unless there is an identified and demonstrable immediate risk to a customer's environment. Whenever possible, we provide customers with at least six hours advance notice of emergency maintenance.

### Does the Cloud Storage solution support browser-based form POST upload?

Cloud Storage fully supports standard REST API commands (Post, Put, Get, Delete, and Head).

Cloud Storage's RESTful APIs support the use of HTML forms to create and update objects.

### Is Cloud Storage object synchronisation (for example, protection offered at each VM type) synchronous or asynchronous?

Protection is asynchronous - a single copy is created, and subsequent copies of the data are created when bandwidth allows.

During busy periods, this protection can take longer to complete.

## Onboarding

### How can I get started with the service?

Within five days of accepting your order, we'll create your primary administrator account and send you a welcome pack, which includes the URL for the UKCloud Portal and associated authentication details.

Once you've signed up to the service, you can access your unique credentials (User ID, Subtenant ID, resolvable hostname and shared secret) through the UKCloud Portal, which you simply enter into an EMC Cloud Tiering Appliance or other compatible automated solution.

### Why can't I see my secret key in the UKCloud Portal?

For security reasons, the UKCloud Portal only displays a secret key for a short amount of time after it is set. After this time, the secret key is replaced with the text [FILTERED]. If you forget your secret key, or if it is compromised, you can reset it by clicking the **Reset secret** button in the Storage section of the Portal. When you reset your secret key, you'll be able to see it in the Portal for up to 24 hours before it is hidden.

## Billing and legal

### What is the smallest unit of time I will be billed for?

Storage is billed on a per-GiB per-month basis, and is based on utilisation of the storage platform across the month. The minimum amount of time is one month.

### How is my storage bill calculated?

Used storage is calculated on a daily basis. The data for a month is collected, and the average consumption calculated and rounded up to the next whole number to provide the number of GiB consumed in a month. The charge for the total storage is based on a tiering basis as per the [*Service Definition*](cs-sd.md). When your storage consumption moves into the next tier, only the amount of storage above the previous tier threshold is charged at the lower price.

As an example, if a customer uses 520TiB of storage in a month, their charges are calculated as:

* 250TiB x £0.0200 = £5,000
* 250TiB x £0.0180 = £4,500
* 20TiB x £0.0162 = £324
* Total cost = £9,824

### How can I view billing information?

Billing information is provided in an evidence file on the first working day of the month for your previous months spend.

### How do I pay for the service and what are the termination fees?

Billing for the service is one month in arrears and payment can be made by direct bank transfer.

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required.

UKCloud may make an additional charge for transferring data out of the service.

### Is there a free trial?

Yes, we offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs.

## Security

### What data is suitable for our cloud?

The service is hosted in the UK and operated by security-cleared staff. It has extensive independent validation (including NCSC design reviews) that is fully aligned with the 14 NCSC Cloud Security Principles, and is therefore ideal for all data classified at Assured OFFICIAL and Elevated OFFICIAL (including OFFICIAL SENSITIVE).

### Can systems on different UKCloud platforms communicate with one another?

UKCloud's Cross Domain Security Zone allows customers to use the UKCloud-defined and managed UKCloud Guard or a customer-designed and managed Walled Garden to enable communication between platforms.

For more information, see the [*Cross Domain Security Zone Service Definition*](../cdsz/cdsz-sd.md) on the Digital Marketplace.

### Is there a protective monitoring service?

Yes, protective monitoring is included for our IaaS platform and follows GPG 13, more information can be found in our [*Protective Monitoring FAQs*](../other/other-faq-promon.md).
