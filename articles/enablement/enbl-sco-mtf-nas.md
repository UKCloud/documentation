---
title: Mass Transfer Facility - NAS Service Scope | UKCloud Ltd
description: Outlines how you can use your NAS to move data into your compute environment
services: enablement
author: Steve Hall
reviewer:
lastreviewed: 23/07/2018 11:55:40
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Mass Transfer Facility - NAS Service Scope
toc_fullpath: Service Scope/enbl-sco-mtf-nas.md
toc_mdlink: enbl-sco-mtf-nas.md
---

# Mass Transfer Facility - Service Scope

## About the facility

Our Mass Transfer Facility (MTF) enables you to move virtualised environments, in the form of VMs, into and out of your UKCloud environment using your own network attached storage (NAS) device, hard disk drives (HDDs) or USB drives. You can use our MTF to move VMs:

- Into or out of your virtual data centre (VDC)

- Between the Assured OFFICIAL and Elevated OFFICIAL security domains

- Between our data centres in Farnborough and Corsham

It's useful if, for example, you don't have enough network bandwidth for large VMs or volumes of VMs, or if you haven't got a Cross Domain Security Zone service in place.

### NAS

Your NAS will be securely installed in the MTF bay and connected into your compute environment.

### HDD

Your HDD is securely installed in an eSATA enclosure and connected to our NAS device in the Mass Trasfer bay. Our NAS is connected into your compute environment to carry out the transfer. Your HDD must be compatible with our eSATA enclosure: 3.5" SATA NAS hard drive, and optimised for use in one to five-bay enclosures.

### USB

Your USB will be connected to our NAS device in the Mass Trasfer bay. Our NAS is connected into your compute environment to carry out the transfer. Your HDD must be compatible with our eSATA enclosure: 3.5" SATA NAS hard drive, and optimised for use in one to five-bay enclosures.

## Scheduling your transfer

To schedule a transfer, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, providing us with at least 10 days' notice. You should also arrange delivery of your NAS device to the UKCloud office, quoting the SR number, no later than the working day before the scheduled transfer day.

When raising the SR, please provide the following:

- Number and size of the VMs

- Number of VMs and their total size

- Originating VDC and data centre (if applicable)

- Originating vApp (if applicable)

- Target VDC and vApp (if applicable)

- Data centre location

### NAS only

- Make and model of the NAS

- Login credentials for the NAS, so that we can configure it for the transfer

- Network connection details (IPs) to connect to the device

## Before sending us your NAS

Your SIRO, compliance officer or other person responsible for your IT security, must provide confirmation that your device is free of any viruses or malware.

We'll send you a form to fill in and send back to us by email before sending the NAS, HDDs or USBs, to ensure there are no issues ahead of its delivery.

## Booking conditions

This service is based on the transfer of whole VMs, not individual files. Your VMs can be in OVF or OVA format. The hardware version must be 9 or lower, and you need to remove any network cards and any mounted media files such as ISOs from the VM's hardware configuration prior to the creation of the OVA or OVF files.

Use of the Mass Transfer Facility is charged per the current Standard Rate Card and Definitions, based on the Service Management 'Enable' rate which is currently £750 per day. You will only be billed for the time it takes for the engineer to set up, manage and detach the device. Due to the nature of the service and the time to transfer data, you will not be charged for the time it takes to transfer the data. We reserve the right to add additional charges should any remediation work be required during the process. The minimum charge is half of a business day which is currently £375.

## Anticipated transfer speeds

VM are transferred to and from your VDC over a 1GB connection running at approximately 110mbps. We have established that it's quicker to upload/download many smaller VMs than fewer large ones.

VMs will be put into batches that can be completed during the business day. This will continue until the transfer is completed.

## After transfer completion

Once we've transferred your VMs into your VDC or out of your VDC in the format that they arrived in, it's your responsibility to set up / reconfigure your environment in the way you want to use it. This includes, for example, catalogues, templates and networking.

We'll contact you to check that the transfer has been successful before we remove the device from the enclosure and advise you when you can arrange to collect your device.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
