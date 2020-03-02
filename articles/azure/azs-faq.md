---
title: UKCloud for Microsoft Azure FAQs
description: Frequently asked questions for UKCloud for Microsoft Azure
services: azure-stack
author: Matt Warner
reviewer: Mario Fedato
lastreviewed: 25/06/2019

toc_rootlink: Users
toc_sub1: FAQs
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure FAQs
toc_fullpath: Users/FAQs/azs-faq.md
toc_mdlink: azs-faq.md
---

# UKCloud for Microsoft Azure FAQs

## General

### What is UKCloud for Microsoft Azure?

UKCloud for Microsoft Azure is an extension of Microsoft's own Azure Public Cloud platform, delivered as a service by UKCloud from our assured sovereign data centres. Using UKCloud for Microsoft Azure, developers can build applications using a consistent set of processes and tools that best meets their organisational, technical, and regulatory requirements. Developers can speed up new cloud application development by building on application components from the Azure Marketplace, including open-source tools and technologies.

With our Azure solution, we can provide an additional multi-cloud platform option to customers, which reinforces our strategy that one platform does not fit all, while maintaining our UK sovereignty with secure multiple data centres.

### Why has UKCloud launched UKCloud for Microsoft Azure?

UKCloud's strategy is to provide a multi-cloud platform and UKCloud for Microsoft Azure is now available for you to consume as either a secure, UK sovereign implementation of Azure Public Cloud, or as a complimentary platform to work alongside other UKCloud platforms. This allows you to have workloads utilising one or more technology clouds such as Azure, VMware, Oracle and OpenStack on the same trusted infrastructure.

### What is provided in this service?

UKCloud for Microsoft Azure IaaS currently provides:

#### Compute

Virtual machines (VMs), comprised of CPU, memory and storage, provide the basic compute building blocks in Azure Stack Hub. Virtual machine sizes supported are:

- General purpose: Basic A series, standard A & Av2 series, D & Dv2 series, DS & DSv2 series

- Memory optimised: Memory optimised D & Dv2 series, memory optimised DS & DSv2 series

- Compute optimised: F series, Fs & Fsv2 series

You can find the full list of supported virtual machine sizes [here](https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes).

#### Storage

- Azure Blob Storage (block): Object storage. Good for storing documents, videos and images.

- Azure Blob Storage (page): Optimised for virtual machine disks. Good for randomly accessed large files.

- Azure Blob Storage (append): Good for log files. Can only be updated by appending to the end of the file.

- Azure Queue Storage: Message queue as a service. Good for asynchronous scale out micro-services.

- Azure Table Storage: NoSQL database service with schemaless design. Good for highly scalable, consistent database support.

#### Network

- Virtual networks - Configure virtual private clouds and create and manage your private address space within Azure Stack Hub. This can be configured via the UI, API and other tooling.

- Load balancers (IPv4 only) - Deploy basic load balancers.

- VPN gateway - Use the Azure Stack Hub VPN gateway to create site-to-site VPNs to remote infrastructure.

- Routing - Configure basic custom defined routing on virtual networks.

### What technology is UKCloud for Microsoft Azure based on?

UKCloud for Microsoft Azure is based on a Cisco implementation of Microsoft's Azure Stack Hub.

### Are there any differences between Azure and UKCloud for Microsoft Azure?

While UKCloud for Microsoft Azure is developed by Microsoft, some services will take longer to become available. Check the service scope for full details. Initial differences are captured in [*Understanding UKCloud for Microsoft Azure*](azs-ref-overview.md).

### Does UKCloud offer an SLA for this service?

The SLA for this service is 99.95%. For further details, review the [*UKCloud for Microsoft Azure Service Definition*](azs-sd.md).

### Where can I find additional resources to assist me in administering my UKCloud for Microsoft Azure environment?

UKCloud maintains an Azure Stack Hub repository, which contains ARM templates, custom script extensions and more. You can find this repository found [here](https://github.com/UKCloud/AzureStack).

## Networking

### How many IP addresses do I get?

You're initially allocated ten public IP addresses with a new compute service.

### Do you offer dynamic or static IP addresses?

Dynamic and static public IP addresses are available from a pre-defined shared pool.

### What firewall services are available?

Firewall services are provided by Azure network security groups. More information is available [here](https://docs.microsoft.com/en-gb/azure/virtual-network/virtual-network-vnet-plan-design-arm#security).

### How does UKCloud provide urgent maintenance notifications and incident reports?

All production services are reported through the UKCloud [service status page](https://status.ukcloud.com/) where you can subscribe to RSS feeds and updates.

### Are external Domain Name System (DNS) services available?

Yes, a similar service to Azure DNS is available. There are some limitations such as no AAAA support.

### Do you offer load balancing?

Yes, this is offered as an option. You can also deploy your own load balancer.

## Storage

### How much storage do I get?

You'll get 4TiB unmanaged storage, which will be shared between blob, table and queue storage types. You will also get 2 TiB of managed disk storage.

### Is storage persistent?

Storage is persistent unless it is virtual machine temporary storage.

## Management

### How do I access my UKCloud for Microsoft Azure solution?

Access to the UKCloud Azure Stack Hub portal is available via the UKCloud Portal. You'll be provided with login details once your account is provisioned.

### Which ports need to be open to access my UKCloud for Microsoft Azure solution?

The UKCloud Azure Stack Hub portal requires port 80 (HTTP) and port 443 (HTTPS) to be open.

### How do I access my solutions via government networks?

UKCloud for Microsoft Azure is currently available via the internet. Community network support such as HSCN, Janet, RLI and PSN is planned for the future.

### What reports can I get about my UKCloud for Microsoft Azure solution?

Reporting is via the UKCloud Azure Stack Hub portal, which provides a variety of reports on the dashboard.

You can also interact with the API to pull data into your own reporting solutions.

### Is this a managed service?

No, UKCloud maintains and manages the underlying infrastructure that your solution is based on, but we do not manage your UKCloud for
Microsoft Azure solution.

### How do I manage my services?

This service is designed to be managed using the UKCloud Azure Stack Hub portal. You can also manage it through a command line using the UKCloud for Microsoft Azure API.

### What tools can I use to manage my service?

You can use many common DevOps tools, such as ARM, Ansible, Terraform and PowerShell, to interface with UKCloud for Microsoft Azure. UKCloud for Microsoft Azure also provides a User Interface (UI) to manage the infrastructure via a browser with a similar experience to Azure Public Cloud.

### How long will it take to provision the service?

The current provisioning time for a new service is 4 hours from service request submission (during office hours).

### How quickly can I scale my service up or down?

You can scale your UKCloud for Microsoft Azure services either via the UKCloud Azure Stack Hub portal or using the Azure API. This will typically take a few minutes to action. However, if you are likely to increase your requirements significantly, you are advised to plan this with your allocated Service Delivery Manager.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/) provides most common service management functionality. Alternatively, you can contact support by phone or email.

### What are your service maintenance windows?

As far as possible, planned maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on a Saturday or Sunday. We provide customers with at least 14 days' advance notice of planned maintenance.

As far as possible, emergency maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on Saturday or Sunday, unless there is an identified and demonstrable immediate risk to a customer's environment. Whenever possible, we provide customers with at least six hours' advance notice of emergency maintenance.

### Can I configure email alerts from the portal?

Yes, you can receive portal notifications to the email address associated with your UKCloud Portal login. Notifications provide information about updates to UKCloud services, in addition to maintenance and incident notifications. This feature is currently not available in the Elevated Portal.

## Onboarding

### How can I get started with the service?

Once you have requested a UKCloud for Microsoft Azure environment, your Customer Success Manager (CSM) will introduce you to the platform and relevant supporting documentation.

### Is there a free trial?

Yes, we offer a 30-day trial for this service.

### How do I request a trial?

This can be requested via the [UKCloud website trial page](https://ukcloud.com/free-trial-sign-up) or via your Service Delivery Manager if you an existing customer.

### What do I do when my trial comes to an end?

During your 30 day trial period, you will be contacted regularly by your Customer Success Manager who will be on hand to assist you with using the service. When your trial is nearing the 30 day limit, your Account Manager will contact you to discuss the outcome of the trial. If you wish to cancel the service, this will be done for you, and any data will be deleted and the service will be decommissioned. If you wish to commit to using the service, your trial will convert to a full paid service, and you will then be billed according to the [*Service Definition*](azs-sd.md).

## Billing and legal

### How will I be billed for this service?

You'll be billed monthly by UKCloud for the previous month's usage.

### What is the smallest unit of time I will be billed for?

For infrastructure solutions, you'll be billed by the smallest unit of time which is one hour for compute, and one month per GiB for Storage.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

### Are there any termination fees?

There are no termination costs for this service. You are responsible for extracting your data from the UKCloud for Microsoft Azure service if required.

UKCloud may make an additional charge for transferring data out of the service.

## Security

### What data is suitable for the UKCloud assured cloud platform?

The service is hosted in the UK and operated by UK government security-cleared staff. It has extensive independent validation (including NCSC design reviews) that it is fully aligned with the 14 NCSC Cloud Security Principles, and is therefore ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE).

### Can systems on different UKCloud security domains communicate with one another?

UKCloud's Cross Domain Security Zone enables you to use a customer-designed and managed Walled Garden to enable communication between platforms.

For more information, see our Cross Domain Security Zone documentation.

### Is there a protective monitoring service?

Protective monitoring is included for our all our services and follows GPG 13.

For more information about this service, see [*Protective Monitoring from UKCloud*](../other/other-ref-promon.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
