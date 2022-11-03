---
title: Mass Transfer Facility Service Scope
description: Outlines how you can use NAS, HDD or USB devices to move virtualised environments into or out of the UKCloud platform
services: enablement
author: shall
reviewer: srelf
lastreviewed: 21/05/2021
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Mass Transfer Facility Service Scope
toc_fullpath: Service Information/enbl-sco-mtf-nas.md
toc_mdlink: enbl-sco-mtf-nas.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Mass Transfer Facility - Service Scope

## About the facility

You can use UKCloud's Mass Transfer Facility to move virtualised environments into and out of your UKCloud environment using your own network attached storage (NAS) device, hard disk drives (HDDs) or USB drives. You can use the Mass Transfer Facility to move:

- Into or out of your UKCloud environment

- Between the Assured OFFICIAL and Elevated OFFICIAL security domains

- Between our data centres in Farnborough and Corsham

For example, it's useful if you don't have enough network bandwidth for large transfers, or if you don't have a Cross Domain Security Zone (CDSZ) service in place.

### NAS

Your NAS is securely installed in the mass transfer bay and connected into your UKCloud environment.

### HDD

Your HDD is securely installed in an eSATA enclosure and connected to our NAS device in the mass transfer bay. Our NAS is connected into your UKCloud environment to carry out the transfer. Your HDD must be compatible with our eSATA enclosure: 3.5" SATA NAS hard drive, optimised for use in one to five-bay enclosures and formatted as NTFS, Fat32, EXT3, EXT4 or HFS Plus (exFat is not currently supported).

### USB

Your USB is connected to our NAS device in the mass transfer bay. Our NAS is connected into your UKCloud environment to carry out the transfer.

## Scheduling your transfer

To schedule a transfer, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, providing us with at least 10 days' notice. You should also arrange delivery of your device to the UKCloud office, quoting the Service Request number, no later than the working day before the scheduled transfer day.

When raising the Service Request, provide as much information as possible. For example, for UKCloud for VMware environments, provide:

- The number of VMs and their total size

- Details of the originating VDC and data centre (if applicable)

- Details of the originating vApp (if applicable)

- Details of the target VDC and vApp (if applicable)

- The data centre location

- If using a NAS device for the transfer, also provide:

  - The make and model of the NAS

  - Login credentials for the NAS, so that we can configure it for the transfer

  - Network connection details (IPs) to connect to the device

## Before sending us your device

Your SIRO, compliance officer or other person responsible for your IT security must provide confirmation that your device is free of any viruses or malware.

We'll send you a form to fill in and send back to us by email before sending the NAS, HDD or USB, to ensure there are no issues ahead of its delivery.

## Booking conditions

This service is based on the transfer of whole artifacts, for example VMs, not individual files.

For UKCloud for VMware, your VMs can be in OVF or OVA format. The hardware version must be 11 or lower and you need to remove any network cards and any mounted media files, such as ISOs, from the VM's hardware configuration prior to the creation of the OVA or OVF file.

Use of the Mass Transfer Facility is charged per the current [SFIA Rate Card](https://ukcloud.com/sfia), based on the *Enable* rate. You'll only be billed for the time it takes for the engineer to set up, manage and detach the device. Due to the nature of the service and the time to transfer data, you won't be charged for the time it takes to transfer the data. We reserve the right to add additional charges should any remediation work be required during the process. The minimum charge is half of a business day.

## Anticipated transfer speeds

Artifacts are transferred to and from your UKCloud environment over a 1 GB connection running at approximately 110 Mbps. We've established that it's quicker to upload and download many smaller artifacts, rather than fewer large ones.

Artifacts will be put into batches that can be completed during the business day. This will continue until the transfer is completed.

## After transfer completion

Once we've transferred your artifacts into or out of your environment in the format that they arrived in, it's your responsibility to set up / reconfigure your environment in the way you want to use it. This includes, for example, networking, templates and catalogues.

We'll contact you to check that the transfer has been successful before we remove the device from the enclosure and advise you when you can arrange to collect your device.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
