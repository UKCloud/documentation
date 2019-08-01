---
title: Mass Transfer Facility - HDD Service Scope | UKCloud Ltd
description: Outlines how you can use your hard disk drive to move data into your compute environment
services: enablement
author: Steve Hall
reviewer:
lastreviewed: 23/07/2018 11:55:40
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Mass Transfer Facility - HDD Service Scope
toc_fullpath: Service Scope/enbl-sco-mtf-hdd.md
toc_mdlink: enbl-sco-mtf-hdd.md
---

# Mass Transfer Facility - HDD Service Scope

## About the facility

Our Mass Transfer Facility (MTF) enables you to move virtualised environments, in the form of VMs, into or out of your UKCloud environment using your own hard disk drives (HDDs). You can use MTF to move VMs:

- Into or out of your virtual data centre (VDC)

- Between the Assured OFFICIAL and Elevated OFFICIAL security domains

- Between our data centres in Farnborough and Corsham

It's useful if, for example, you don't have enough network bandwidth for large VMs or volumes of VMs, or if you haven't got a Cross Domain Security Zone service in place.

Your HDD is securely installed in an eSATA enclosure and connected to our network attached storage (NAS) device in the Mass Transfer bay. Our NAS is connected into your compute environment to carry out the transfer.

## Compatibility

Your HDD must be compatible with our eSATA enclosure: 3.5" SATA NAS hard drive, and optimised for use in one to five-bay NAS enclosures.

## Scheduling your transfer

To schedule a transfer, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, providing us with at least 10 days' notice. You should also arrange delivery of your HDD(s) to the UKCloud office, quoting the SR number, no later than the working day before the scheduled transfer day.

When you raise the SR, please provide the following information:

- Number and size of the VMs

- Number of VMs and their total size

- Originating VDC and data centre (if applicable)

- Originating vApp (if applicable)

- Target VDC and vApp (if applicable)

- Data centre location

## Before sending us your HDD

Your SIRO, other person responsible for your IT security, or compliance officer must provide confirmation that your device is free of any viruses or malware.

We'll send you a form to fill in and send back to us by email before sending the HDD, to ensure there are no issues ahead of delivery.

## Booking conditions

This service is based on the transfer of whole VMs, not individual files. Your VMs can be in OVF or OVA format. The hardware version must be 9 or lower, and you need to remove any network cards and any mounted media files such as ISOs from the VM's hardware configuration prior to the creation of the OVA or OVF files.

Use of the Mass Transfer Facility is charged per the current Standard Rate Card and Definitions, based on the Service Management 'Enable' rate. You will only be billed for the time it takes for the engineer to set up, manage and detach the HDD. Due to the nature of the service and the time to transfer data, you will not be charged for the time it takes to transfer the data. We reserve the right to add additional charges should any remediation work be required during the process. The minimum charge is half of a business day.

**More information!** [*SFIA Rate Card*](https://ukcloud.com/wp-content/uploads/2019/06/ukc-gen-759-ukcloud-g-cloud-11-standard-rate-card-and-definitions.pdf)

## Anticipated transfer speeds

VMs are transferred to and from your VDC over a 1GB connection running at approximately 110mbps. We have established that it's quicker to upload many smaller VMs than fewer large ones.

VMs will be put into batches that can be completed during the business day. This will continue until the transfer is fully completed.

## On completion of transfer

Once we've transferred your VMs into or out of your VDC in the format that they arrived in, it's your responsibility to set up / reconfigure your environment in the way you want to use it. This includes, for example catalogues, templates and networking.

We'll contact you to check that the transfer has been successful before we detach the HDD from the eSATA enclosure.

Our customer services team will then contact you to make arrangements for you to collect your HDD.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
