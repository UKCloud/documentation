---
title: Private Cloud FAQs
description: Frequently asked questions for Private Cloud
services: private-cloud
author: mwarner
reviewer: gmartin
lastreviewed: 26/09/2022
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Private Cloud FAQs
toc_fullpath: FAQs/prc-faq.md
toc_mdlink: prc-faq.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Private Cloud FAQs

## Service

### What is the service?

Private Cloud is a single-tenant service, powered by VMware or OpenStack, where your compute or storage requirements are hosted either in one of our data centres (to gain the benefits of our Assured and Elevated cloud platforms) or in your Crown Hosting Data Centre (CHDC).

### How does Private Cloud differ from UKCloud for VMware?

Private Cloud provides you with dedicated infrastructure - the compute infrastructure is designed for the exclusive use of each customer, and provides the highest levels of separation and isolation from other customers.

This service differs from UKCloud for VMware in that it also allows you to have more flexibility in the size of your VMs.

### What backup/disaster recovery options do I get?

You can choose between two protection levels:

- Automated VM backup - providing protection in one data centre

- Site replication and failover - providing remote protection in a second data centre

### Where will my data be physically stored?

Your data will be stored in our highly resilient, UK-sovereign tier 3 data centres, which are separated by over 100km.

### How much data can I store?

A core benefit of Private Cloud is that it can scale to meet the most demanding compute requirements.

## Management

### How do I access my environment?

You can access your VMs using:

- The remote console through the UKCloud Portal

- Remote access protocols (such as RDP/SSH) over a VPN or secure network

Documentation on ways to interact with the platform is available from the UKCloud Knowledge Centre.

## Support

### How do I raise a support ticket?

UKCloud's secure online Portal provides the most common service management functionality. Alternatively, you can contact support by phone or email.

### How do I manage my services?

Private Cloud on the Assured OFFICIAL domain can be managed over the internet via the UKCloud Portal.

For the Elevated OFFICIAL domain, the security requirements are much stricter and require either a PSN-approved connection, UKCloud Secure Remote Access, or CAPS-approved encryption.

### What are your service maintenance windows?

See [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

## Onboarding

### How can I get started with the service?

On acceptance of your order, we'll work with you to create a detailed design for your Private Cloud service. The design will formalise the dedicated components required for your solution.

If this is a new service for you, we will create your primary administrator account and send you a welcome pack, which includes the URL for the UKCloud Portal for access to the Knowledge Centre and service management function.

## Billing and legal

### What is the smallest unit of time I will be billed for?

Billing depends on the packaging option chosen - the smallest option for this service is monthly.

Please note, this service is offered under a 24-month minimum term commitment.

### How can I pay for the services?

Service charges are billed monthly in arrears. In addition, there will be initial upfront charges, which vary depending on the pricing model selected.

Payment can be made by direct bank transfer (BACS/CHAPS).

### How can I view billing information?

Billing information is available via the UKCloud Portal.

### What are the termination fees?

An early exit charge will be payable if the contract is terminated before the end of its original term. Customers are responsible for extracting their data from the platform if required.

UKCloud may make an additional charge for transferring data out of the service.

### Is there a free trial?

Owing to the dedicated, single-tenant nature of this service, no trials are available.

## Security

### What data is suitable for our cloud?

The service is hosted in the UK and operated by SC-cleared staff. It has extensive independent validation (including CESG design reviews) that it is fully aligned with NCSC Cloud Security Principles, and is therefore ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE).

### Can systems on different UKCloud platforms communicate with one another?

UKCloud's Cross Domain Security Zone allows customers to use the customer-designed and managed Walled Garden to enable communication between platforms.

For more information, see the [Cross Domain Security Zone Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-230-cross-domain-security-zone-service-definition-13.0-1.pdf).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
