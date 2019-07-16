---
title: UKCloud for OpenStack FAQs | UKCloud Ltd
description: Frequently asked questions for UKCloud for OpenStack
services: openstack
author: Matt Warner
reviewer:
lastreviewed: 19/07/2018 15:17:17
toc_rootlink: FAQs
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenStack FAQs
toc_fullpath: FAQs/ostack-faq.md
toc_mdlink: ostack-faq.md
---

# UKCloud for OpenStack FAQs

## Service

### What is the service?

UKCloud for OpenStack is an OpenStack-powered Infrastructure as a Service (IaaS) offering which enables organisations to rapidly provision and scale secure instances (VMs) in seconds, in a flexible and autonomous manner.

UKCloud provides this service across two security domains, Assured OFFICIAL (formerly PGA IL2) and Elevated OFFICIAL (formerly PGA IL3), offering up to 99.95% availability. This choice allows customers to precisely match application and user needs to an appropriate security domain and cost, instead of designing to the highest level which may not always be needed.

### What hypervisor do you use?

UKCloud for OpenStack is built using KVM hypervisor technology, a trusted solution for implementing virtualised environments.

### Does UKCloud offer dedicated, bare-metal host capabilities (OpenStack Ironic) with UKCloud for OpenStack?

UKCloud currently does not offer dedicated, bare metal host capabilities with its UKCloud for OpenStack product. We do however provide "large" instances, with up to 56 vCpus and 440Gb Ram, with no overcommit. UKCloud also offers its 'Private Cloud for Compute' product which provides dedicated compute capabilities for use with OpenStack; please visit the Digital Marketplace or contact your Account Director for further details.

### Which Disk formats does UKCloud for OpenStack support?

The disk format of a virtual machine image is the format of the underlying disk image. Virtual appliance vendors have different formats for laying out the information contained in a virtual machine disk image.

Set the disk format for your image to one of the following values:

**aki** - An Amazon kernel image

**ami** - An Amazon machine image

**ari** - An Amazon ramdisk image

**iso** - An archive format for the data contents of an optical disc, such as CD-ROM

**qcow2** - Supported by the QEMU emulator that can expand dynamically and supports Copy on Write

**raw** - An unstructured disk image format; if you have a file without an extension it is possibly a raw format

**vdi** - Supported by VirtualBox virtual machine monitor and the QEMU emulator

**vhd** - The VHD disk format, a common disk format used by virtual machine monitors from VMware, Xen, Microsoft, VirtualBox, and others

**vmdk** - Common disk format supported by many common virtual machine monitors

## Instances (VMs)

### Can instances have different service levels?

UKCloud for OpenStack is a cloud platform built specifically for cloud native applications which have been engineered to use stateless, disposable instances. Due to the disposable design constructs of customer solutions, only a single service level is required

### Are instances contended?

Instances are contended using the default OpenStack ratios against the following resources:

- CPU - 16:1

- Memory - 1.1:1

### Do I get root access to the instances I deploy?

Yes, as this is a true IaaS cloud service, you have complete control and autonomy over each instance you deploy, and so have full 'root' or administrative access.

### What Instance sizes are available?

UKCloud offers a variety of predefined flavours to meet customers' needs. The smallest configuration is 512MiB memory and 1 vCPU. The largest is 440GiB memory with 56 vCPU.

Check the [*Service Definition*](ostack-sd.md) for more details on the currently available sizes.

### Does UKCloud for OpenStack offer GPU optimised instances?

Currently UKCloud does not offer GPU optimised OpenStack instances.

### Can I resize an instance?

Yes, you can change instance size (processor, memory and storage allocations) to a different predefined size via the self-service Portal and API.

Increasing instance size may result in the instance being billed at a higher rate.

Additional volume storage can be allocated instantly and will be billed on a per GiB basis.

The instance will be rebooted as part of the resize operation.

### What is the speed of each vCPU?

This is set at 2.4 GHz across instances.

### Does UKCloud offer encryption on instances?

Not by default but, if it's required, you can implement it using a technology of your choice inside the instance OS.

### Is UKCloud's encryption service available for UKCloud for OpenStack?

Not currently, but we are considering options based upon customer feedback.

## Networking

### How many IP addresses do I get?

You're initially allocated three external IP addresses with each OpenStack project.

You can ask for more external IP addresses via a Service Request in the UKCloud Portal.

### How many network routers do I get?

You're initially able to create up to two network routers in each OpenStack project.

You can ask the router quota to be increased via a Service Request in the UKCloud Portal.

### How many PSN IP addresses do I get?

Customer organisations are initially allocated one external PSN IP address.

Additional external PSN IP addresses can be requested via a Service Request should a valid business requirement arise.

### What firewall services are available?

UKCloud controls and manages a perimeter firewall on the edge of our Assured cloud platform which securely segregates traffic.

OpenStack includes the concept of "Security Groups" which can be used to implement firewall filtering on the virtual NIC level.

You can also use your preferred software firewall and security appliances deployed within your project.

### Which firewall ports do you suggest to open?

To access the infrastructure via the dashboard and API you will need access through any firewalls on the following ports to the OpenStack endpoints you target.

443, 13000, 13080, 13004, 13776, 13774, 13777, 13696, 13776

### How does UKCloud provide urgent maintenance notifications and incident reports?

Current Service Status reports are published on the [Status Page](https://status.ukcloud.com/). You can view past incident reports on the UKCloud Portal.

### Do you offer dynamic or static IP addresses?

The external IP addresses are allocated to the project from a pool and will remain allocated to that project unless you explicitly select to "release" the address.

Internal IPs are assigned to instances from a pool and will remain assigned to that instance/network port until that instance or network port is deleted. Optionally, it is possible to select the IP address assigned during instance/port creation.

### Are external Domain Name System (DNS) services available?

No, we don't currently offer this service. You can implement your own DNS servers within your solution, or configure your instances to connect to an externally hosted DNS server - for example, one hosted on a government secure network such as PSN or HSCN; or one available on the Internet such as Google 8.8.8.8.

### Are domain name registration services available?

No, we don't currently offer this service. Some government secure networks (such as PSN and HSCN) offer domain name registration and DNS hosting as part of their service.

For internet-facing services a third-party domain provider will be required.

### Is Network Time Protocol available for time synchronisation?

Network Time Protocol services will initially only be available via public NTP servers.

### Can UKCloud provide SSL certificates or can existing SSL certificates be used?

UKCloud doesn't provide SSL certificates, but you can use your existing ones.

Some government secure networks (such as PSN and HSCN) provide SSL certificates as part of their service.

### Do you offer load balancing? 

Due to OpenStack Neutron not supporting highly-available load balancing services, UKCloud has created [*How to creating load balancing services on UKCloud for OpenStack*](ostack-how-create-load-balancer.md), which describes how to deploy a HA load balancing solution, of which the first deployed solution is free of charge.

We will look to include more native OpenStack functionality once a highly-available solution is provided by the community.

### Can I deploy my own load balancer?

Yes, you can deploy your own load balancing virtual appliance provided it is compatible with KVM hypervisor and OpenStack.

### Do you have an IPSEC VPN connection for uploading sensitive data?

We currently do not offer any VPN/Tunnelling as a Service from within the UKCloud for OpenStack product. Customers can create their own VPN endpoints by deploying a software appliance such as pfSense on an instance within their project.

## Storage

### How much storage do I get with an instance?

The default amount of storage which comes with each instance starts from 10GiB of ephemeral storage and increases as larger instances are consumed. Full details can be found in the [*UKCloud for OpenStack Service Definition*](ostack-sd.md).

All ephemeral storage is fixed and cannot be increased.

### How do I scale beyond the default allocation of ephemeral storage?

UKCloud for OpenStack is available with persistent block storage options. Persistent block storage is resilient, distributed block storage that can be moved between instances and retain data in the event of an instance becoming destroyed or unavailable.

You can quickly and easily allocate additional persistent block storage volumes via the self-service dashboard or API, which will be charged on a per-GiB basis.

### Can I reallocate storage across instances?

Persistent block storage volumes can be detached from one instance then attached to another (except those being used as OS boot volumes). It is not possible for a volume to be attached to multiple instances simulutaneously.

You can allocate additional persistent block storage via the self-service dashboard or API, which will be charged on a per-GiB basis.

### Is instance storage persistent? 

No, the ephemeral storage provided with each instance is non-persistent and any data stored on it will be deleted at the point an instance is terminated. Persistent block storage volumes are persistent. If required, it is possible to deploy an instance using a block storage volume as its boot volume.

### Is Object Storage (OpenStack Swift) available?

Unfortunately, the OpenStack Object Storage service (Swift) is not currently available on UKCloud for OpenStack. However, UKCloud offers Cloud Storage, a separate S3-compatible Object Storage service which can be used in conjunction with OpenStack; please visit the Digital Market place or contact your Account Director for further details.

### What is the fastest way of importing large amounts of data onto the UKCloud platform?

The speed of data transfer to the UKCloud platform isn't guaranteed. However, during tests of the upload and download speeds, an average of 8 Mbit/s was achieved for image import/export and 40 Mbit/s for data transferred over FTPS.

For a transfer time calculator, click [here](http://techinternets.com/copy_calc?do).

If you use FTPS to upload data to or download it from your environment, you can transfer up to 1TiB of data in a day.

## Management

### How do I access my solutions via the internet?

You can access your instances using:

- The remote console via the OpenStack dashboard

- Remote access protocols (such as RDP/SSH) over a VPN or secure network

### How do I access my solutions via government networks (PSN, HSCN)?

Although UKCloud allows you to make your customer-facing applications accessible via government network connections, the management of your Assured OFFICIAL OpenStack environment can only be achieved directly via an internet connection.

OpenStack environments in our Elevated OFFICIAL security domain can be managed via the PSN network.

### What reports can I get about instances performance?

UKCloud does not currently provide instance performance reports, but you can monitor their performance using standard tools within the operating system.

### Does UKCloud patch instances?

No, you are responsible for the patching of your services. We make a patch repository available to you for instances on the Elevated OFFICIAL cloud platform (which cannot connect to the internet) for common operating systems that we provide.

<!--### How do I find the latest patches to the UKCloud infrastructure?

UKCloud maintains a Knowledge Centre article advising the current patch level of the UKCloud infrastructure. See [here](../other/other-ref-platform-patches.md). -->

### How do I access support and patches for operating systems that UKCloud licenses?

UKCloud provides a repository of patches for common operating systems for customers to access and update from. Please refer to the onboarding guide or the Knowledge Centre for details.

For support, you'll need to log a request with UKCloud, who will log the ticket with the relevant supplier. UKCloud will then inform you about any updates. However, UKCloud isn't responsible for the actual resolution of non-IaaS issues.

### Do you have a Key Management System (KMS) for activating Windows?

Yes. A we provide a [step-by-step guide](../vmware/vmw-how-setup-kms.md) on configuring and using this service.

### How do I control an instance?

You control an instance via the OpenStack dashboard or API. Controls include stop, start, restart, load media, clone, snapshot, and so on.

### Do you monitor instances?

UKCloud monitors the underlying platform but doesn't monitor your OSs or applications. You can implement your own application performance monitoring solutions within your projects.

### Do you offer autoscaling?

OpenStack offers built in autoscaling capabilities using the features of HEAT templates and Ceilometer event monitoring.

Blueprints are available on the UKCloud web site to assist with creating autoscaling policies.

### How quickly can I scale my service up or down?

Horizontal scale can be achieved quickly by adding additional instances (usually in seconds). Vertical scaling is not recommended for cloud native applications, but can be achieved by resizing an instance to an alternative flavour type (where supported by the guest OS).

## Licensing, software and anti-virus

### What operating systems are available?

UKCloud for OpenStack is powered by OpenStack, so is compatible with a wide range of x86/x64 operating systems.

You can use the UKCloud catalogue of operating systems or upload your own:

- For Linux we offer; Red Hat Enterprise Linux 7, Ubuntu 14.04 to 16.04 and CentOS 6.0 to 7.2.

- Windows 2012 R2 & Windows 2016 are fully supported

### Can I run Microsoft SQL on my instances?

Microsoft SQL can be installed within an OpenStack instance.

You have the choice to either bring your own license using the Microsoft License Mobility scheme or choose to use a UKCloud provided license. The process for both options are available on the UKCloud Knowledge Centre [here](../vmware/vmw-how-license-microsoft.md).

### How can I license an operating system?

### Microsoft

Microsoft terms and conditions preclude customers from using their own licence agreements for Windows Server in the Cloud. That means all licensing for Windows Server operating systems must be provided by UKCloud.

Microsoft offers License Mobility, a scheme that allows a customer to provide additional software such as Exchange, SQL and so on, as long as the customer has appropriate Microsoft licensing as per the licence terms, conditions and usage rights.

### RHEL

RHEL operating systems can be licensed by the customer directly with Red Hat. We are Currently unable to provide RHEL licences for UKCloud for OpenStack.

The customer is responsible for ensuring correct licensing for any other operating system they chose to install.

### How up to date are the operating system images and mirrors?

All CentOS, Ubuntu, Red Hat and Debian distributions are automatically updated to contain the latest patches and releases. For a list of supported operating systems, and instructions on how to access these repositories, see the appropriate article in the Knowledge Centre.

### What anti-virus do you offer on this service?

Customers are advised to install their own anti-virus (AV) software, as UKCloud doesn't provide any.

### What applications are available as part of the default service?

UKCloud does not offer any additional software other than what's included in the UKCloud Portal catalogue. Any additional software, including its licensing, is your responsibility.

### What is Bring Your Own (BYO) licensing for Red Hat?

BYO licensing for Red Hat allows customers to select instances running on the UKCloud Assured cloud platform for covering by their own commercial agreement with Red Hat.

UKCloud will remove the cost of the Red Hat licence from your monthly bill for the selected instances. You need to raise a Service Request to let us know which instances you will cover with your own Red Hat licence.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.skyscapecloud.com/login) provides most common service management functionality. You can raise tickets within the My Calls section of the Portal. Alternatively, you can contact support by phone or email.

### How do I manage my services?

Services on the Assured OFFICIAL platform can be managed over the internet (or other connectivity) via the UKCloud Portal.

For the Elevated OFFICIAL platform, security requirements are stricter and require either a PSN-approved connection, UKCloud Secure Remote Access or a self-managed CPA-approved VPN solution (for example site-to-site VPN).

### What are your service maintenance windows?

As far as possible, planned maintenance of UKCloud's infrastructure takes place periodically and at a time which aims to minimise customer impact. We provide customers with at least 14 days' advance notice of planned maintenance.

As far as possible, emergency maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Friday, or between the hours of 08:00 and 12:00 (UK local time) on Saturday or Sunday, unless there is an identified and demonstrable immediate risk to a customer's environment. Whenever possible, we provide customers with at least six hours' advance notice of emergency maintenance.

### Can I configure email alerts from the Portal?

Yes, you can have Portal notifications sent to you at the email address associated with your Portal login. Notifications provide information about updates to UKCloud services, in addition to maintenance and incident notifications. This feature is currently not available in the Elevated Portal.

## Service Limitations

### Are there any restrictions on the number of instances I can create or manipulate in a single request?

Although designed to be a large-scale cloud platform, we strongly advise that when performing operations/requests against UKCloud for OpenStack you perform these actions in batches of no more than 30 (for example, only creating batches of up to 30 new instances in a single request). Additional requests can then be made to the platform for subsequent batches.

### How can I create additional OpenStack Projects?

Unfortunately, we are currently unable to offer customers of UKCloud for OpenStack the ability to create their own additional OpenStack Projects. Additional projects are allowed, however these need to be created by UKCloud via a Service Request from within the UKCloud Portal.

### How can I create additional OpenStack Users?

Unfortunately, we are currently unable to offer customers of UKCloud for OpenStack the ability to create their own additional OpenStack users. Additional users are allowed, however these need to be created by UKCloud via a Service Request from within the UKCloud Portal.

## Onboarding

### How can I get started with the service?

Within four hours of accepting your order, we'll create your primary administrator account, and send you a Welcome Pack, which includes the URL for the UKCloud Portal and associated authentication details.

Your administrator can then create additional accounts for users within the project. Each user can then log on and begin using the service (depending on the security domain and connectivity).

At the time of order, you can specify which of our two UK data centres you'd like to be deployed into. Meeting your request is at UKCloud's discretion.

### Is there a free trial?

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and check whether they're suited to your needs.

Before your trial, a Cloud Architect will engage with you to identify the goals you\'re working towards, to help ensure that your trial meets those goals.

Throughout the trial period, a Customer Success Manager (CSM) will provide support for any issues you may encounter or questions you may have.

At the end of your free trial, you can seamlessly move to a billed service, leveraging any of the work you've already completed in the live trial environment.

## Backup

### Does UKCloud back up my projects or instances?

UKCloud for OpenStack is a cloud platform built specifically for cloud native applications which have been engineered to use stateless, disposable instances.

UKCloud does not provide automated backups of projects or instances, however it does allow consumers to create snapshots of their instances via the OpenStack dashboard or programmatically via the API. These snapshots when used in conjunction with deployment orchestration tools or infrastructure as code templates such as HEAT allow for environments to be rapidly replicate, redeploy or scale environments.

### Can I create scheduled snapshots?

Snapshots cannot currently be scheduled directly through OpenStack, however custom scripts can be created and are available on the internet to enable snapshots to be programmatically set.

### How quickly can a snapshot be restored?

Snapshots recovery is full self-service and can be invoked by customers at any time via the OpenStack dashboard or API.

### What is the Recovery Point Objective (RPO) of the snapshots?

The RPO is totally within the customers control. For example, you could programmatically schedule a snapshot to run every hour or even every minute, at which point their RPO would match the frequency of your snapshots. We don't set a Recovery Time Objective (RTO) on snapshot recovery, but this is a fully self-service function available to the customer via the dashboard or API, with restoration times never exceeding two minutes (this will depend on the size of instance being recovered).

### Where are snapshots stored?

By default, all snapshots are stored to our persistent block storage to provide data resilience.

Persistent block storage will be charged by the GiB.

### Can I use my own backup software?

Yes, you simply install appropriate backup software within your project and specify the backup location.

A typical scenario would involve using a commercial backup solution (such as Symantec NetBackup, CommVault or EMC NetWorker) that points to a cloud storage service such as our Cloud Storage.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is one hour. Part hours will be rounded up.

### Will I be charged for instances in a 'Shut Off' state?

UKCloud will continue to charge for any resources that exist within your OpenStack project regardless of the state they're in. In order to stop any charges an instance must be fully 'Terminated'.

### What are the charges to transfer data between projects within the same data centre?

None. Data transfer between projects in this scenario is free.

### How can I view billing information?

Real-time billing information is currently not available as a service provided by UKCloud, however customers are able to query the OpenStack Ceilometer API to query live event data.

Historic billing information is available via the UKCloud Portal.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

### How are snapshots charged?

You will only ever be charged for the amount of Tier 1 or Tier 2 storage your snapshots consume, that you have scheduled via the OpenStack dashboard or the API - we do not place any additional premium on-top for the snapshot functionality. To calculate an estimated cost of performing snapshots on UKCloud for OpenStack, simply use the following formula:

Cost £ = Instance Size (GiB) x Number of Snapshots to be retained (Customer controlled) x Choice of Storage (Tier 1 @ £0.25 or Tier 2 @ £0.10)

As an example:

If a customer has an 80GiB Tier 2 instance, and performs a snapshot every hour, but only wants to keep the current snapshot, plus the last nine snapshots then:

80 GiB x 10 (snapshots) x £0.10 = £80 per month

### What are the termination fees?

There are no termination costs for this service. Customers are responsible for extracting their own data from the UKCloud for OpenStack service if required.

UKCloud may make an additional charge for transferring data out of the service.

## Security

### What data is suitable for the UKCloud assured cloud platform?

The service is hosted in the UK and operated by security-cleared staff. It has extensive independent validation (including CESG) that it is fully aligned with the 14 CESG Cloud Security Principles, and is therefore ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE).

### Can systems on different UKCloud platforms communicate with one and another?

UKCloud's Cross Domain Security Zone allows customers to use the UKCloud-defined and managed UKCloud Guard, or a customer-designed and managed Walled Garden to enable communication between platforms.

For more information, see the Cross Domain Security Zone documentation.

### Is there a protective monitoring service?

Protective monitoring is included for our IaaS platform and follows GPG 13.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
