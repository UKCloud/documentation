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

# Mass Transfer Facility - NAS Service Scope

## About the facility

Our Mass Transfer Facility (MTF) enables you to move virtualised environments, in the form of VMs, into and out of your UKCloud environment using your own network attached storage (NAS) device. You can use our MTF to move VMs:

- Into or out of your virtual data centre (VDC)

- Between the Assured OFFICIAL and Elevated OFFICIAL security domains

- Between our data centres in Farnborough and Corsham

It's useful if, for example, you don't have enough network bandwidth for large VMs or volumes of VMs, or if you haven't got a Cross Domain Security Zone service in place.

Your NAS will be securely installed in the MTF bay and connected into your compute environment.

## Scheduling your transfer

To schedule a transfer, raise a Service Request (SR), via the UKCloud Portal, providing us with at least 10 days' notice. You should also arrange delivery of your NAS device to the UKCloud office, quoting the SR number, no later than the working day before the scheduled transfer day.

When raising the SR, please provide the following:

- Number and size of the VMs

- Number of VMs and their total size

- Originating VDC and data centre (if applicable)

- Originating vApp (if applicable)

- Target VDC and vApp (if applicable)

- Data centre location

- Make and model of the NAS

- Login credentials for the NAS, so that we can configure it for the transfer

- Network connection details (IPs) to connect to the device

## Before sending us your NAS

Your SIRO, other person responsible for your IT security, or compliance officer must provide confirmation that your device is free of any viruses or malware.

We'll send you a form to fill in and send back to us by email before sending the NAS, to ensure there are no issues ahead of its delivery.

## Booking conditions

This service is based on the transfer of whole VMs, not individual files. Your VMs can be in OVF or OVA format. The hardware version must be 9 or lower, and you need to remove any network cards and any mounted media files such as ISOs from the VM's hardware configuration prior to the creation of the OVA or OVF files.

Use of the Mass Transfer Facility is charged per the current [*SFIA Rate Card*](https://ukcloud.com/wp-content/uploads/2019/06/ukc-gen-759-ukcloud-g-cloud-11-standard-rate-card-and-definitions.pdf), based on the IT Operations 'Enable' rate and a minimum of half of a business day to cover the time taken to set up, manage the transfer and detach the NAS.

## Anticipated transfer speeds

VM are transferred to and from your VDC over a 1GB connection running at approximately 110mbps. We have established that it's quicker to upload/download many smaller VMs are than fewer large ones.

VMs will be put into batches that can be completed during the business day. This will continue until the transfer is completed.

## After transfer completion

Once we've transferred your VMs into your VDC or out of your VDC in the format that they arrived in, it's your responsibility to set up / reconfigure your environment in the way you want to use it. This includes, for example, catalogues, templates and networking.

We'll contact you to check that the transfer has been successful before we remove the NAS from the enclosure and advise you when you can arrange to collect your device.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
