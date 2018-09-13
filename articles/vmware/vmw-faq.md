---
title: UKCloud for VMware FAQs | UKCloud Ltd
description: Frequently asked questions for UKCloud for VMware
services: vmware
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for VMware FAQs
toc_fullpath: FAQs/vmw-faq.md
toc_mdlink: vmw-faq.md
---

# UKCloud for VMware FAQs

## Service

### What is the service?

UKCloud for VMware is an Infrastructure as a Service (IaaS) offering which enables organisations to rapidly provision and scale secure virtual machines (VMs) in minutes, in a flexible and autonomous manner.

UKCloud provides this service across two security domains, Assured OFFICIAL (formerly PGA IL2) and Elevated OFFICIAL (formerly PGA IL3), and with a range of service levels offering up to 99.99% availability. This choice allows customers to precisely match application and user needs to an appropriate security domain, service level and cost, instead of designing to the highest level which may not always be needed.

### Can VMs have different characteristics?

Yes. We offer three VM Types: Essential, Power and Priority.

VM characteristics are inherited from the VDC the VM is deployed in. It is not currently possible to have a VDC that has mixed VM types.

However, customers can use multiple VDCs to deliver their solution.

### Are VMs contended?

Essential VMs are contended: VMs contend for memory and processor resources.

Power & Priority VMs: UKCloud has implemented a combination of technical and process controls (for example, an ISO 20000-certified capacity management process) to ensure that these VMs don't contend for memory or processor resources.

Power VMs operate where automated rebalancing is enabled to pre-emptively optimise performance and availability.

Priority VMs differ from other VM types. Automated rebalancing is configured to reduce workload movement around the platform, reducing workload disruption.

### How do the new VM types align with the previous VM SLA types?

Before the change to the new VM types in G-Cloud 8, VMs and VDCs were set by their SLA level such as Test and Dev and Production.

To help, the transition to VM types is explained below:

- DEV & TEST BASIC = ESSENTIAL VM Type

- Production BASIC = POWER VM Type

- Production STANDARD = POWER VM Type

- ENHANCED - Now available for all VM Types as an option - Synchronous Protection

The new pricing structure introduced in G-Cloud 8 enables customers to customise their VMs and any options without being tied to a specific package. Thus, options such as backups, Journaling Protection and Synchronous Protection can be added regardless of the VM type.

### Can a VM communicate to another VM at of a different type?

Yes. VMs can communicate with each other. In some cases, customers may need to use the built-in self-service IPsec VPN functionality to create a virtual private network within our Assured cloud platform.

### Can VMs types be changed?

Yes, but the customer must first export the VMs, then import them back into the virtual data centre (VDC) that has been created with the target VM type.

### Can I convert from one VM type to another, without having to move VMs between vDCs?

Customers can manage the migration between VM types. Customers can also move vApps and VMs between VDCs as long as they're in the same assurance domain, for example Assured to Assured.

More complex migrations, from the Assured to the Elevated platform, must be managed by UKCloud.

If you want to migrate a vApp larger than 1.5TiB, you'll need to engage the UKCloud support team to facilitate the process. To do so, raise a Service Request on the UKCloud Portal.

### What hypervisor do you use?

UKCloud's environment is built using VMware vSphere, the most ubiquitous and mature hypervisor available. Secure multi-tenancy is achieved with VMware vCloud Director.

### Can I have a read-only account in vCloud for monitoring?

This is available on the UKCloud Portal under permissions that can be set by your account admin.

## Virtual machines (VMs)

### Do I get root access onto the local VM?

Yes, as this is a true IaaS cloud service, you have complete control and autonomy over each VM, and so have full 'root' or administrative access.

### What VM sizes are available?

UKCloud offers a variety of 'T-shirt sizes' to meet customers' needs. The smallest configuration is 512MiB and 1 vCPU. The largest is 128GiB memory with 12 vCPU.

Check the UKCloud for VMware Service Definition for more details on the currently available sizes.

Dedicated Compute provides the flexibility to build custom-sized VMs.

### Can I resize a VM?

Yes, you can change vCPU, RAM and storage allocations via the self-service UKCloud Portal and API.

Processors and memory can be added to or removed from VMs if the OS supports the 'hot add' capability.

Increasing CPU or memory allocations may result in the VM being billed at a higher rate.

Additional VM storage can be allocated instantly and will be billed on a per GiB basis.

### What is the speed of each vCPU?

This is set at 2GHz for all VMs except Micro sized VMs, which can be restricted to run at 500MHz.

### What is the fastest way of importing large amounts of data onto the UKCloud platform?

The speed of data transfer to the UKCloud platform isn't guaranteed. However, during tests of the upload and download speeds, an average of 8 Mbit/s was achieved for VM import/export and 40 Mbit/s for data transferred over FTPS.

For a transfer time calculator, go to: <http://techinternets.com/copy_calc?do>

If you use FTPS to upload data to or download it from your environment, you can transfer up to 1TiB of data in a day.

Alternatively, we offer the Mass Transfer Facility option enabling customers to import large quantities of data via HDDs or NAS devices that are plugged directly into your environment. Please check the *Mass Transfer Facility Service Scope* for [NAS](../enablement/enbl-sco-mtf-nas.md) or [HDD](../enablement/enbl-sco-mtf-hdd.md), or the pricing guide further details.

### Does UKCloud offer encryption on the VM?

Not by default but, if it's required, you can implement it using technology of your choice inside the VM's operating system.

### Is UKCloud's encryption service available for UKCloud for VMware?

Not currently, but we are considering this as an option. Provide feedback via [UKCloud Ideas](http://ideas.ukcloud.com).

### Is it possible to non-fast-provision vApps, and to convert current vApps into non-fast provisioned ones?

Fast provisioning is enabled only by customer request - by default, all vApps are non-fast-provisioned. Customers can right-click on a VM and consolidate. This can also be done via a Service Request.

### What is Dedicated Compute?

Dedicated Compute comprises of physical blades assigned to a customer for their sole use. They're managed using the standard tools and services in the UKCloud Assured cloud platform.

Dedicated Compute allows customers to:

- Comply with legacy licensing requirements from software suppliers whose licensing is based on a physical CPU (such as Oracle or desktop OSs)

- Build bespoke sized VMs on the UKCloud Assured cloud platform

Dedicated Compute uses the same storage infrastructure as the shared compute platform

There's a longer deployment lead time for Dedicated Compute, as well as a longer contractual commitment than our shared cloud platform (three months rather than one hour).

For more details, please see the UKCloud for VMware Service Definition available via the Digital Marketplace.

### Can I utilise multiple storage types with my VM?

UKCloud offer three storage types to customers:

- Tier 1 which is a fast storage offering

- Tier 2 which is a standard storage offering

- Geo-resilient which is utilised by the synchronous protection technology

With Tier 1 and Tier 2 storage, customers can utilise both types to deliver their solutions - including running VMs utilising disks on different storage types.

Customers can not mix geo-resilient storage with any other storage type attached to a VM. So, customers cannot leverage Geo-Resilient Storage in conjunction with Tier 1 or Tier 2 storage types.

### Can I change between storage types associated with the VMs I've deployed?

If a customer has both Tier 1 and Tier 2 storage profiles available, they can self-migrate between these storage types.

Migration from, or to, Geo-Resilient storage and other storage types (Tier 1 and Tier 2) is an activity that can only be performed by UKCloud.

### What happens when I switch off my VMs using the guest Operating System?

If you shut down your VM using the guest OS, we will recognise this as a 'Power Off' event and you will not be billed whilst the VM remains in this state. Billing will resume once the VM is powered on again.

### How do I change the workload type of a VDC?

To change the workload type (for example, ESSENTIAL, POWER or PRIORITY) of a VDC, you must raise a [service request](https://portal.ukcloud.com/support/my_calls/new) from within My Calls, and the support team will make the necessary changes.

Please note this change is disruptive and UKCloud will be required to power down all VMs in the VDC during this transition.

## Networking

### How many IP addresses do I get?

You're initially allocated five external IP addresses with a new compute service.

You can ask for more external IP addresses via a Service Request. Please note that there is a £20 charge per additional IP address.

There's no limit to the number of internal IP addresses (RFC1918) you can allocate.

### How many PSN IP addresses do I get?

Customer organisations are initially allocated one external PSN IP address.

Additional external PSN IP addresses can be requested via a Service Request should a valid business requirement arise. Please note that there is a £20 charge per additional IP address.

There's no limit to the number of internal IP addresses (RFC1918) customers can allocate.

### What firewall services are available?

UKCloud controls and manages a perimeter firewall on the edge of our Assured cloud platform which securely segregates traffic. Within the UKCloud for VMware environment, we provide you with a dedicated self-managed virtual firewall which delivers typical firewall functionality such as access control lists and network address translation, as well as basic load balancing and support for VPNs.

You can also use your preferred firewall and security appliances, as long as they're compatible with the VMware virtual infrastructure used to power the UKCloud Assured cloud platform.

### How do I create and manage firewall rules?

Your UKCloud-provided dedicated virtual firewall is managed exclusively by you. You can set and manage firewall rules via the UKCloud Portal and API.

On-boarding guides and associated video tutorials are available to help
customers configure and manage their firewalls.

### Can I bring my own firewall?

Customers can choose to deploy the firewall technology of their choice.

This service, how to order it, and the constraints it may place on operation, is fully documented within our knowledge centre.

### How does UKCloud provide urgent maintenance notifications and incident reports?

You can view these on the [notifications page](https://portal.ukcloud.com/notifications) on the UKCloud Portal. In addition, Service Status reports are published on the [service status](http://status.ukcloud.com/) page.

### Do you offer dynamic or static IP addresses?

The external IP addresses are static. Internal IPs can be assigned statically from a pool, manually or dynamically via DHCP.

### Are external Domain Name System (DNS) services available?

No, we don't currently offer this service. You can implement your own DNS servers within your solution, or configure your virtual firewall to enable connectivity to an externally hosted DNS server - for example, one hosted on a government secure network such as PSN, Janet or N3/HSCN; or one available on the Internet such as Google `8.8.8.8`.

### Are domain name registration services available?

No, we don't currently offer this service. Some government secure networks (such as PSN and N3/HSCN) offer domain name registration and DNS hosting as part of their service.

For internet-facing services a third-party DNS provider will be required.

### Is Network Time Protocol available for time synchronisation?

Yes this is available for Assured OFFICIAL and Elevated OFFICIAL. See [*Network Time Protocol server access*](vmw-ref-network-time-server.md) for details.

### Can UKCloud provide SSL certificates or can existing SSL certificates be used?

UKCloud doesn't provide SSL certificates, but you can use your existing ones.

Some government secure networks (such as PSN and N3/HSCN) provide SSL certificates as part of their service.

### Do you offer load balancing?

Yes. Load balancing can be configured within the service and is included within the price.

- Supported protocols: HTTP, HTTPS, TCP.

- Supported algorithms: Round Robin, IP Hash, URI, Least Connected.

### Can I deploy my own load balancer?

Yes, you can deploy your own load-balancing virtual appliance (for example, F5, Stingray, Zeus) if support for other algorithms is required.

In addition, UKCloud offer Global Load Balancing from Neustar which can be customised for your own specific requirements. An FAQ and Service Scope are available in the Knowledge Centre.

## Storage

### How much storage do I get with a VM?

The default amount of storage which comes with a VM is 60GiB of Tier 2 storage.

The exception is Micro sized VMs. These have a fixed 10GiB allocation which cannot be increased. If this allocation is exceeded, the VM is treated as Tiny.

### Can I reallocate storage across VMs?

No, storage pooling isn't possible. Each VM must have a minimum of 60GiB (except Micro VMs).

You can quickly and easily allocate additional storage via the self-service UKCloud Portal or API. Additional storage is charged on a per-GiB basis as listed in the UKCloud pricing guide.

### Is storage persistent?

Yes, unlike some other cloud platforms, storage is persistent.

This means that your data and VM configuration remain available to you even if the VM is switched off or restarted.

### What is the Tier 1 storage solution?

Tier 1 storage (formerly Optimised) is designed for the following scenarios:

- Applications that require improved performance when accessing stored data such as high activity databases

- Applications that have irregular usage patterns that require a consistent performance such as data warehouses or batch process applications

Existing applications can take advantage of Tier 1 Storage. A migration process maybe involved.

Tier 1 Storage is available for use with all VM types and compatible with all protection technologies - with the exception of those using Synchronous protection (which has a specific requirement to use geo-resilient storage).

Talk to your UKCloud Account Director or Cloud Architect to understand if Tier 1 storage can benefit your solution.

### What are independent disks?

Independent disks are a technology provided natively by VMware vCloud Director, and are included as options by default in the UKCloud service. They can only be created via the API, and cannot be created though the user interface. UKCloud has provided some advice on how to create and control them [here](https://github.com/UKCloud/vcloud-independent-disks).

Independent disks are stand-alone virtual disks that you create in organization VDCs. Administrators and users who have adequate rights can create, remove, and update independent disks, and connect them to virtual machines.

When you create an independent disk, it is associated with an organization VDC but not with a virtual machine. After the disk has been created in a VDC, the disk owner or an administrator can attach it to any virtual machine deployed in that VDC. The disk owner can also modify disk properties, detach it from a virtual machine, and remove it from the VDC. The system administrator and organization administrator of the organization that contains the VDC have the same rights to use and modify the disk as the disk owner.

Only one VM can be connected to an independent disk at a time.

### Why have independent disks started to appear on my bill?

Previously, independent disks appeared on customer invoices when they were actively attached to a virtual machine. This meant that customers continually mounting and dismounting independent disks may not have seen the true size of their UKCloud VMware environment.

We have improved our reporting to advise customers of the independent disks they have currently created, and the amount of storage associated with those disks, and the monthly cost associated with those disks.

### What if I use my independent disks with the same VM all the time?

We advise that you move the data in the independent disk into a disk associated with a single VM - this will allow you to take advantage of the free 60GiB of storage included with all UKCloud VMs.

### What rate are independent disks charged at?

Independent disks will be charged at the rate of the storage they are stored on (Tier 1, Tier 2 or Geo-Resilient), along with any additional protection applied (such as Snapshot or synchronous protection) and charged at a rate of per GiB per month.

### Can I use the 60GiB included with my VM on an independent disk?

No, as an independent disk can be mounted to any VMs inside a customer's VDC, so is not associated with a single VM.

### Do I still get 60 GiB of storage (10GiB for Micro VMs) included with my VM if I select Geo-Resilient storage?

Yes, you will still get 60GiB (10GiB for Micro VMs) included with the VM of Geo-Resilient storage. Please note, for VMs in a powered off state any storage consumed will be charged at the prevailing rate. Geo-resilient storage and Synchronous protection must be purchased together.

### How much included storage do I get with Dedicated Compute?

You will receive the same allowance as for UKCloud for VMware VMs. For example, 60GiB of Tier 2 storage when the VM is powered on for free. Please note, when the VM is in a powered off state any storage associated with the VM will be charged at the prevailing rate.

## Management

### How do I access my systems?

You can access your VMs using:

- The remote console through the UKCloud Portal

- Remote access protocols (RDP/SSH) over a VPN or secure network

### What reports can I get about VM performance?

You can monitor their performance using standard tools within the operating system.

Additionally, UKCloud provides retrospective performance information via its Portal API.

### Does UKCloud patch the VMs?

No, customers are responsible for the patching of their services. We make a patch repository available to customers for VMs on the Elevated OFFICIAL cloud platform (which cannot connect to the internet) for common operating systems that we provide.

### How do I access support and patches for operating systems that UKCloud licenses?

UKCloud provides a repository of patches for common operating systems for customers to access and update from. Please refer to the Knowledge Centre for details.

For support, you'll need to log a request with UKCloud, who will log the ticket with the relevant supplier. UKCloud will then inform you about any updates. However, UKCloud isn't responsible for the actual resolution of non-IaaS issues.

### Do you have a Key Management System (KMS) for activating Windows?

Yes. A step-by-step guide on configuring and using this service is included in [*How to license Windows VMs using the UKCloud Key Management Server*](vmw-how-setup-kms.md). There are additional supporting documents
regarding the registration on VMs targeting the UKCloud KMS.

### How do I control a VM?

You control a VM via the UKCloud Portal or API. Controls include stop, start, restart, load media, clone, snapshot, and so on.

### Do you monitor VMs?

UKCloud monitors the underlying platform but doesn't monitor customers' OSs or applications. Customers can implement their own application performance monitoring solutions within the VDC.

### Do you offer autoscaling?

There's no standard product offering for autoscale, but the platform API can be used to do this with a little developer effort. UKCloud provides blueprints in the Knowledge Centre which offer guidance on this.

### How quickly can I scale my service up or down?

Horizontal scale can be achieved quickly by adding additional VMs (usually in just a few minutes). Vertical scaling can be achieved by 'hot adding' vCPU or RAM to a VM (where supported by the guest OS). This operation usually takes seconds.

## Licensing, software and anti-virus

### What operating systems are available?

UKCloud UKCloud for VMware is powered by VMware technology, so is compatible with a wide range of x86/x64 operating systems.

VMware provides a compatibility matrix at: <http://partnerweb.vmware.com/comp_guide2/pdf/VMware_GOS_Compatibility_Guide.pdf>.

You can use the UKCloud catalogue of operating systems or upload your own.

We offer Windows Server 2008 R2 Enterprise, Windows 2012, Windows 2016, Red Hat Enterprise Linux and CentOS.

In addition, we provide access to common templates provided by the Bitnami service such as Drupal, Joomla, LAMP and Wordpress.

### How can I licence an operating system?

### Microsoft

Microsoft terms and conditions preclude customers from using their own licence agreements for Windows Server in the Cloud. That means all licensing for Windows Server operating systems must be provided by UKCloud.

Microsoft offers License Mobility, a scheme that allows a customer to provide additional software such as Exchange, SQL and so on, as long as the customer has appropriate Microsoft licensing as per the licence terms and conditions and usage rights. In order to use License Mobility, you must complete the form that is available in the Knowledge Centre and send this by post to Microsoft.

If you require SQL licensing to be provided by UKCloud, this can be done by completing a Service Request from the [My Calls](https://portal.ukcloud.com/support/my_calls) section of the UKCloud Portal. SQL standard licensing is charged per hour per VM, whilst SQL Enterprise is charged monthly per VM. It is essential that UKCloud are informed of every instance of SQL on the platform, and that you complete a Licence Mobility form for all licences that you use on the UKCloud platform.

### RHEL

RHEL operating systems can be licensed by UKCloud or the customer.

The customer is responsible for ensuring correct licensing for any other operating system they chose to install. If you wish to use your own RHEL licencing, please a Service request.

### How up to date are the operating system images and mirrors?

All CentOS, Ubuntu, Red Hat and Debian distributions include update mechanisms to install the latest patches and releases. For a list of supported operating systems, and instructions on how to access these update repositories, see the Knowledge Centre.

### What anti-virus do you offer on this service?

UKCloud doesn't provide any anti-virus by default, so customers are advised to install their own anti-virus (AV) software to protect their workloads.

### What applications are available as part of the default service?

UKCloud does not offer any additional software other than what's included in the UKCloud Portal catalogue. Any additional software, including its licensing, is the customer's responsibility.

### Are Open Virtualisation Format (OVF) VM images supported?

Yes, OVF images can be uploaded to the platform, and VMs built in the platform can be downloaded as OVF.

### What is Bring Your Own (BYO) licensing for Red Hat?

BYO licensing for Red Hat allows customers to select VMs running on the UKCloud Assured cloud platform for covering by their own commercial agreement with Red Hat.

UKCloud will remove the cost of the Red Hat licence from the customer's monthly bill for the selected VMs. Customers need to raise a Service Request to let us know which VMs they will cover with their own Red Hat licence.

## Support

### How do I raise a support ticket?

The secure online UKCloud Portal provides most common service management functionality. Alternatively, you can contact support by phone or email.

### How do I manage my services?

Services on the Assured OFFICIAL platform can be managed over the internet (or other connectivity) via the UKCloud Portal.

For the Elevated OFFICIAL platform, security requirements are stricter and require either a PSN-approved connection, UKCloud Secure Remote Access or a self-managed CPA-approved (or equivalent standard) VPN solution (for example, site-to-site VPN).

### What are your service maintenance windows?

As far as possible, planned maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on a Saturday or Sunday. We provide customers with at least 14 days' advance notice of planned maintenance.

As far as possible, emergency maintenance of UKCloud's infrastructure takes place between the hours of 00:00 and 06:00 (UK local time) Monday to Sunday, or between the hours of 08:00 and 12:00 (UK local time) on Saturday or Sunday, unless there is an identified and demonstrable immediate risk to a customer's environment. Whenever possible, we provide customers with at least six hours' advance notice of emergency maintenance.

### Can I configure email alerts from the Portal?

Yes, you can have Portal notifications sent to you at the email address associated with your Portal login. Notifications provide information about updates to UKCloud services, in addition to maintenance and incident notifications. This feature is available in both the Assured and Elevated Portals.

## Onboarding

### How can I get started with the service?

Within four hours of accepting your order, we'll create your primary administrator account, and send you a Welcome Pack, which includes the URL for the UKCloud Portal and associated authentication details.

You administrator can then create additional accounts for users within the project. Each user can then log on and begin using the service (depending on the security domain and connectivity).

At the time of order, you can specify which of our two UK data centres you'd like to be deployed into. Meeting your request is at UKCloud's discretion.

### Is there a free trial?

Yes, we offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs.

### How do I request a trial? 

You can request a trial via the UKCloud website: <http://www.UKCloud.com/free-trial-sign-up> and accept the trial terms and conditions. Your environment will then be set up and you will be given trial credits to the equivalent of £500.

### What do I do when my trial comes to an end?

You will be contacted by your Cloud Architect or CSM when your trial is due to end, either because you have run out of credits or reached 30 days (whichever is sooner).

At the end of your trial, you have the option to transition to production or cease the trial.

## Protection

### Which protection types can I purchase together?

- Synchronous Protection & 14/28 Day Snapshot Protection

- Synchronous Protection & 14/28 Day Journaling Protection

- Synchronous Protection, 14 Day Journaling Protection & 14 Day Snapshot Protection

- Synchronous Protection, 28 Day Journaling Protection & 28 Day Snapshot Protection

- Synchronous Protection & 14 Day Journaling Protection & 28 Day Snapshot Protection

- Synchronous Protection & 28 Day Journaling Protection & 14 Day Snapshot Protection

Please note - 14/28-day Snapshot Protection is included at no extra cost with Synchronous Protection.

### What is the ENHANCED service?

ENHANCED was a G-Cloud 7 service level option which has now been replaced with the G-Cloud 9 equivalent, a POWER VM with Synchronous Protection and Geo-resilient storage.

### Can I create a clone of my environment?

Yes, you can do this through the UKCloud Portal by right-clicking on a vApp and selecting 'Copy'. This operation can also be performed programmatically via the API.

It's not possible to restrict the automated VM snapshot backup to specific files or directories. You can install your own backup service and use our Cloud Storage if you need more flexibility.

### How quickly can a VM be restored?

This depends on the size of the VM, the location from which it's being restored, and the priority of the support ticket raised to request the restoration.

Customers should expect recovery to take two to three days. If you require a faster recovery time, you must implement your own backup/restore solution which will be entirely under their control. Our Cloud Storage platform could be an appropriate target for self-managed backups using software such as CommVault and NetWorker.

### If I have Synchronous Protection, which includes 14/28-day Snapshot, what will I be billed for?

VM's with synchronous protection and 14/28-day snapshot protection will not incur any snapshot protection compute/VM charges.

### If I have Snapshot Protection on Dedicated Compute, what will I be charged for?

You will only be charged for the protection of the storage consumed, not the VM.

## Snapshot Protection

### What are snapshots?

A snapshot is NOT a copy of the VMDK. Creating a snapshot locks out the base VMDK file and any changes to the data are written to the snapshot delta VMDK. If you wish to "roll back" to the point in time that the snapshot was created and discard any changes since, you can "revert" the snapshot, which essentially deletes it and discards any changes. If you are happy with the changes made since the snapshot was created, you can "delete" the snapshot, which essentially consolidated all changes back into the base VMDK. Please see advice on best practice regarding snapshots in this [article](vmw-ref-vmdk-limits.md). 

Snapshots can be created using the vCloud Director portal and are stored in the same zone as the source VM. This is not to be confused with the UKCloud snapshot protection service, which uses a temporary snapshot in order to backup the VM to an external system in another UKCloud site. 

For further reference, this [article](vmw-ref-vm-data-recovery.md) explains the different recovery options available to you through vCloud Director. In order to identify old snapshots, UKCloud have created this [article](vmw-ref-vcd-healthcheck.md) which contains scripts to run a health check of your VMs.

### What rate are snapshots charged at?

Snapshots will be charged at the rate of the storage they are stored on (Tier 1, Tier 2 or Geo-Resilient), and charged per GiB per month.

### Can I use the 60GiB included with my VM for snapshots?

Yes, you can use the 60GiB included with the VM for snapshots.

## Synchronous Protection (DR)

### Does UKCloud provide a DR option?

An automated replication and failover service is included for VMs utilising the Synchronous protection capability. It provides synchronous data replication which enables a near-zero recovery point objective (RPO).

The recovery time objective (RTO) depends on the nature of the disaster or failure scenario. In some scenarios, VMs utilising Synchronous protection will be automatically restarted at the other data centre. In other scenarios, manual intervention by UKCloud will be needed, and the recovery time might be extended from minutes to hours.

If you need more control and assurance around how data is replicated, the DR service is tested, or the solution handles failover and failback, we recommend you create your own DR solution by using independent sets of VMs in the various regions offered by the UKCloud platform.

An alternative UKCloud solution to achieve DR with a low RPO and RTO is [Journaling Protection](vmw-sco-journaling-protection.md).

### How does UKCloud enable customers to create their own DR solutions?

Although we have engineered our cloud platform to tolerate failures and ensure customers services remain available, we encourage all our customers to design for failure and build DR capabilities into the system design, or into the application.

To help this process, the UKCloud platform has been designed to give you the options you need to design a disaster tolerant solution. UKCloud's platform is about providing customers with choice. Clearly, customers need to balance the low probability of these failure scenarios occurring with the cost and complexity involved in mitigating their impact.

Depending on the type of failure you are trying to mitigate, UKCloud services have been developed to allow you design appropriate resilience into your solution.

At a macro level, UKCloud operate out of two sites. Designing across multiple sites will provide resilience against even the most unlikely of scenarios - including natural disasters and mass WAN failure. UKCloud currently offer two sites:

1. The independent cloud platform at our Corsham site

2. The independent cloud platform at our Farnborough site

Each site also offers independent regions. These are physically segregated parts of the UKCloud platform that have an independent power and networking components - allowing customers to architect resilient solutions out of a single site.

Services in different regions also have independent control planes. By architecting for separate regions, you improve your resilience to outages that effect the control and management of your VMs.

Finally, each region has a number of distinct hardware zones. For customers looking to architect against mass hardware failures. Zones can be utilised to provide additional confidence in your ability to tolerate outages. For example, you can load-balance across two zones to ensure that your service stays online in the event of an unlikely outage.

In some rare failure scenarios (such as DDoS or Split Brain) the availability of the cloud platform at both our sites may be affected. These scenarios can be mitigated by deploying across multiple cloud providers.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is one hour. Part hours will be rounded up.

Dedicated Compute has a minimum commit of three months.

### What are the charges to transfer data between VMs within the same data centre?

None. Data transfer between VMs in this scenario is free.

### Will I be charged even if my Virtual Machine is powered off?

You will not be charged for any Virtual Machines whilst they are turned off, however whilst the VM is in a powered off state, any storage associated with the VM will be charged for at the prevailing rate. This includes the 10GiB included with Micro machines and 60GiB in all other VM sizes of Tier 2 storage.

### How will I be billed for additional storage?

Customers can allocate additional storage to VMs on demand. UKCloud will bill customers for additional allocated storage, regardless of the powered on/off state.

### What is a template or media item?

Within UKCloud for VMware Virtual Data Centres (VDC), you can deploy your own templates, media items or catalogue images. These include templates for applications and Operating Systems.

### What change is UKCloud making to the templates and media items?

From a technology perspective, there will be no changes. You can still deploy templates and media items on VMs. However, in-line with the UKCloud for VMware Service Definition and Pricing Guide, we will now be billing you for the storage element related to templates and media items on VMs.

### Why is UKCloud making this change now?

As a result of continuous updates and improvements to the platform we now have better monitoring in place. Therefore, we are now able to monitor the media usage on VMs and bill accordingly as per the Service Definition and Pricing Guide. Historically, we have been unable to identify the amount of storage consumed associated with templates and media items on VMs and therefore, took the decision to not bill you as we were not comfortable with the data.

### When did the template/media item charges come into effect?

Charges for Storage associated with templates and media items were billed from March 2017.

### Will UKCloud bill retrospectively for the templates/media items on VMs?

No, you will not be billed for any storage associated with templates and media items that occurred on any VMs prior to the 1 March 2017.

### What is the increased cost?

As per the Pricing Guide, consumed storage includes any VM catalogue images. (for example, associated media items and templates on VMs). This will be billed per GiB/per month.

### How can I view billing information?

Billing information is available via the UKCloud Portal.

### How can I pay for the services?

UKCloud will issue invoices as follows:

- At point of order for upfront fees and service options

- Annually in advance for pre-payment fees

- Monthly in arrears for monthly fees

Payment can be made by direct bank transfer (BACS/CHAPS).

### What are the termination fees?

There are no termination costs for this service. Customers are responsible for extracting their own data from the UKCloud for VMware if required.

UKCloud may make an additional charge for transferring data out of the service.

### How is resource usage billed?

Actual real-time resource usage is measured to the nearest second. At the end of each day, periods of time in identical VM state are grouped together and the total for each group in seconds is rounded up to the nearest hour. An identical VM state has the same power status, VM size, service level, storage size, protection and licence. Where rounding up of multiple periods in differing states during the same day would result in more than 24 hours of charges, the period with the lowest price per hour is rounded down.

For example, if a VM was switched off for a total of 890 minutes but was on for 550 minutes, the billable hours would be rounded up to 10 hours for when the VM was on and the off period would be rounded down to 14 hours to cap the day at 24 hours.

### Will I be charged for creating snapshots?

Snapshot Protection can be purchased with any VM and will be charged for in accordance with the Pricing Guide. Self-service snapshots created within vCloud Director will incur charges as of November 2017. These will be accounted for in the invoices you receive at the beginning of December.

## Security

### What data is suitable for the UKCloud assured cloud platform?

The service is hosted in the UK and operated by UK government security-cleared staff. It has extensive independent validation (including NCSC design reviews) that it is fully aligned with the 14 NCSC Cloud Security Principles, and is therefore ideal for all data classified at OFFICIAL (including OFFICIAL SENSITIVE).

### Can systems on different UKCloud security domains communicate with one and another?

UKCloud's Cross Domain Security Zone allows customers to use the UKCloud-defined and managed UKCloud Guard, or a customer-designed and managed Walled Garden to enable communication between platforms.

For more information, see the Cross Domain Security Zone documentation.

### Is there a protective monitoring service?

Protective Monitoring is included for our IaaS platform and follows GPG 13.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
