---
title: Understanding your invoice evidence file | UKCloud Ltd
description: Describes the recent changes to the evidence file provided with your UKCloud invoice
services: other
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding your invoice evidence file
toc_fullpath: Reference/conn-ref-invoice-evidence-file.md
toc_mdlink: conn-ref-invoice-evidence-file.md
---

# Understanding your invoice evidence file

## Introduction

The UKCloud evidence file is a CSV file provided with your invoice that contains data on your VMs per month and corroborates how the totals invoiced are derived.

## Viewing information about charges

The evidence file includes information to help you understand how your usage of the UKCloud platform determines how the totals in your invoice are calculated. For a quick look at the different charges that contribute to the overall cost, see the columns listed in the table below.

Charge | CSV column | Description
-------|------------|------------
Independent Disks and Media | H | Specifies charges for UKCloud for VMware Independent Disk or Media
Compute VM | U | The cost for the compute resources based on the amount of time it was powered on, security domain, workload type and VM size
Cloud GPU | V, W, X and Y | Details and cost for  Cloud GPU compute resources. (Cost will be shown in column Y)
vCloud snapshot | AA, AG and AM | Charges associated with manually taking a snapshot in vCloud Director
Block Storage | AE and/or AK and/or AQ | The cost of storage based on the type of block storage used by the VM
Protection costs | AT, AX, AY and AZ | AT – the cost of protection for the compute element <br> AX – the cost of protecting Tier 1 storage <br> AY – the cost of protecting Tier 2 storage <br> AZ – the cost of protecting Geo-Resilient storage
Protection Option | BA | The cost of the selected protection option applied to the VM
Licensing | BC | Any licensing costs associated with the VM
Total | BD | The total cost

## Key changes to the Evidence File (November 2017 onwards)

From November 2017, you will see the following changes to your evidence file. You'll receive the Evidence File for November at the start of December 2017, detailing your consumption during November.

The key changes to the evidence file are as follows:

**New column**

- Column H - UKCloud for VMware Independent Disks and Media charges

## Previous changes

### October 2017

**Added new columns:**

- **Metadata** (column I) - if an UKCloud for VMware VM is tagged with metadata, the data will appear here. Please note -- the VM metadata will appear on the subsequent day in the Evidence File. For example, if it is tagged on the 3rd, the metadata will appear on the 4th, unless a VM power cycle occurs on the 3rd (This is currently available for UKCloud for VMware VMs only).

- **Cloud GPU** (columns V, W, X and Y) - will include details and a breakdown of Cloud GPU compute charges.

- **vCloud Snapshot storage** (columns AA, AG and AM) - charges will appear in this column if a VM is manually snapshotted in vCloud Director. Charges for the storage will not be applied for October, though values may appear in these columns. Billing will commence from November 1 2017.

- **Breakdown of protection costs** (columns AT, AX, AY and AZ) - new columns added to better understand the breakdown of protecting each storage option.

### September 2017

- **More columns** --- Providing better understanding of the breakdown of individual charges for a VM between compute, storage, protection and licence.

- **Common format** --- The new Evidence File provides a consistent format for our UKCloud for VMware and UKCloud for OpenStack services.

- **Categorisation of service type** --- The first UKCloud for VMware evidence file using the new format will cover the following service types:

  - Enterprise Compute VM

  - Enterprise Compute Dedicated VM

  - Compute Intensive Infrastructure

  - Secure Remote Access

  - CDSZ Walled Garden

- **Time standardised on UTC** --- Each day is treated as 24 hours, with no daylight savings changes applied to the reported times, resulting in no variation to charges when daylight savings are in effect.

- **Inclusion of power state changes for ECC** --- All relevant information is included in a single file, removing the need for a separate Power Events CSV file.

## Future enhancements

These initial changes to the Evidence File will be followed by further enhancements over the coming months to add more products and services. Future enhancements include:

- Metadata for UKCloud for OpenStack instances

- Population of Cloud GPU columns

## Feedback

If you have any feedback on the new format of the evidence file, or want to make suggestions for additional features or improvements, make your suggestions via the [UKCloud Ideas](http://ideas.ukcloud.com/) web site.

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.