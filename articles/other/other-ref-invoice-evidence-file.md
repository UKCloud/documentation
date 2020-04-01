---
title: Understanding your invoice evidence file
description: Describes the recent changes to the evidence file provided with your UKCloud invoice
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 24/01/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding your invoice evidence file
toc_fullpath: Reference/other-ref-invoice-evidence-file.md
toc_mdlink: other-ref-invoice-evidence-file.md
---

# Understanding your invoice evidence file

## Overview

The UKCloud evidence file is a CSV file provided with your invoice that contains data on your hourly metered charges per month and corroborates how the totals invoiced are derived.

## Evidence file columns containing information about charges

The evidence file includes information to help you understand how your usage of the UKCloud platform determines how the totals in your invoice are calculated. For a quick look at the different charges that contribute to the overall cost of each service, and the corresponding evidence file columns, see the [*Invoice and billing FAQs*](other-faq-billing.md).

## All evidence file columns

For information about how to use the evidence file to answer common questions about your invoice, see the [*Invoice and billing FAQs*](other-faq-billing.md).

Column | Name                              | Usage                                                              | Applies to
-------|-----------------------------------|--------------------------------------------------------------------|-----------
A      | EventDate                         | Date charges apply to, in UTC, so daylight savings are not applied | OpenStack, VMware
B      | ProjectID                         | OpenStack Project ID | OpenStack
C      | vAPP                              | Name of the vApp | VMware
D      | vDC                               | Name of the virtual data centre | VMware
E      | ResourceName                      | Client-friendly name of the resource | OpenStack, VMware
F      | Resource Id                       | Identifier of the resource | OpenStack, VMware
G      | OSID                              | Operating system | VMware
H      | Service                           | The UKCloud service to which the charge applies:<br>OpenStack Virtual Machine<br>OpenStack Block Storage Tier 1<br>OpenStack Block Storage Tier 2<br>OpenStack Image<br>CDSZ Walled Garden<br>Disaster Recovery as a Service<br>High Performance Compute<br>Secure Remote Access<br>VMware Dedicated VM<br>VMware Independent Disk<br>VMware Media<br>VMware Template<br>VMware VM | OpenStack, VMware
I      | Metadata                          | Customer VM metadata | VMware
J      | StartTime                         | Charging period start time on the EventDate, in UTC | OpenStack, VMware
K      | EndTime                           | Charging period end time on the EventDate, in UTC | OpenStack, VMware
L      | PowerState                        | On or Off | VMware
M      | UsageMinsWithinPeriod             | 60 x UsageHoursWithinPeriod (may not match difference between the start time and end time due to rounding) | OpenStack, VMware
N      | UsageHoursWithinPeriod            | Typically rounded up usage hours matching start time to end time period | OpenStack, VMware
O      | ComputeMachineType                | For example m1.medium (OpenStack), Medium High Memory (VMware) | OpenStack, VMware
P      | PowerType                         | ESSENTIAL, POWER or PRIORITY | VMware
Q      | Security Domain                   | ASSURED or ELEVATED | OpenStack, VMware
R      | Compute vCPU                      | Number of CPUs | OpenStack, VMware
S      | ComputeMemory                     | Memory in GiB | OpenStack, VMware
T      | ComputePricePerHour               | Service catalogue price for the machine type, security domain, vCPU, memory and power level | OpenStack, VMware
U      | ComputeTotalPrice                 | ComputePricePerHour * UsageHoursWithinPeriod | OpenStack, VMware
V      | GPUType                           | compute or visual | VMware
W      | GPUCount                          | Any positive integer (1 to 16) | VMware
X      | GPUPricePerHour                   | As per current pricing guide | VMware
Y      | GPUTotalPrice                     | GPUPricePerHour * GPUCount * UsageHoursWithinPeriod | VMware
Z      | Tier1StorageUsed                  | Tier 1 storage allocated | OpenStack, VMware
AA     | Tier1SnapshotStorageUsed          | Tier 1 storage allocated for vCloud snapshots | VMware
AB     | Tier1StorageIncluded              | Tier 1 storage amount that is not charged | VMware
AC     | Tier1StorageChargeable            | Tier1StorageUsed + Tier1SnapshotUsed - Tier1StorageIncluded | OpenStack, VMware
AD     | Tier1StoragePricePerHour          | Service catalogue price for Tier 1 storage and security domain converted into hourly charge per GiB | OpenStack, VMware
AE     | Tier1StoragePrice                 | Tier1StorageChargeable * Tier1StoragePricePerHour * UsageHoursWithinPeriod | OpenStack, VMware
AF     | Tier2StorageUsed                  | Tier 2 torage allocated | OpenStack, VMware
AG     | Tier2SnapshotStorageUsed          | Tier 2 storage allocated for vCloud snapshots | VMware
AH     | Tier2StorageIncluded              | Tier 2 storage amount that is not charged (60GiB of Tier 2 storage is included if powered on (10GiB for Micro VMS)) | VMware
AI     | Tier2StorageChargeable            | Tier2StorageUsed + Tier2SnapshotUsed - Tier2StorageIncluded | OpenStack, VMware
AJ     | Tier2StoragePricePerHour          | Service catalogue price for Tier 2 storage and security domain converted into hourly charge per GiB | OpenStack, VMware
AK     | Tier2StoragePrice                 | Tier2StorageChargeable * Tier2StoragePricePerHour * UsageHoursWithinPeriod | OpenStack, VMware
AL     | Geo-resilientStorageUsed          | Storage used in GiB | VMware
AM     | Geo-resilientSnapshotStorageUsed  | Geo-resilient storage allocated for vCloud snapshots | VMware
AN     | Geo-resilientStorageIncluded      | Geo-resilient storage amount that is not charged (60GiB included if powered on (10GiB for Micro VMS)) | VMware
AO     | Geo-resilientStorageChargeable    | Geo-resilientSnapshotStorageUsed + Geo-resilientSnapshotStorageUsed - Geo-resilientStorageIncluded | VMware
AP     | Geo-resilientPricePerHour         | Service catalogue price for geo-resilient storage and security domain converted into hourly charge per GiB | VMware
AQ     | Geo-resilientStoragePrice         | Geo-resilientStorageChargeable * Geo-resilientStoragePricePerHour * UsageHoursWithinPeriod | VMware
AR     | Protection Type                   | Type of protection applied:<br>None<br>14 Day Snapshot Protection<br>28 Day Snapshot Protection<br>Synchronous Protection<br>2 Day Journaling Protection<br>7 Day Journaling Protection<br>14 Day Journaling Protection<br>28 Day Journaling Protection<br>Any combination of the above (apart from None) separated by & | VMware
AS     | ComputeProtectionPerHour          | Price per hour dependent on values in Protection Type (taking into account free 14 day snapshot with synchronous) | VMware
AT     | ComputeProtectionTotalPrice       | ComputeProtectionPerHour * UsageHoursWithinPeriod | VMware
AU     | Tier1ProtectionPricePerHour       | Monthly charge from service catalogue (per GB per month) converted into hourly charge per GiB (0 if no protection; blank if not relevant) | VMware
AV     | Tier2ProtectionPricePerHour       | Monthly charge from service catalogue (per GB per month) converted into hourly charge per GiB (0 if no protection; blank if not relevant) | VMware
AW     | Geo-resilientProtectionPerHour    | Monthly charge from service catalogue (per GB per month) converted into hourly charge per GiB (0 if no protection or not relevant). This is either just geo-resilient storage protection or geo-resilient plus 28 day snapshot | VMware
AX     | Tier1ProtectionTotalPrice         | The cost of protection for Tier 1 storage. This could be journaling or snapshot or both<br>(Tier1StorageChargeable - Tier1SnapshotUsed) * Tier1ProtectionPricePerHour * UsageHours | VMware
AY     | Tier2ProtectionTotalPrice         | The cost of protection for Tier 2 storage. This could be journaling or snapshot or both<br>(Tier2StorageChargeable - Tier2SnapshotUsed) * Tier2ProtectionPricePerHour * UsageHours | VMware
AZ     | Geo-resilientProtectionTotalPrice | The cost of protection for geo-resilient storage. As 14 day snapshot is included with synchronous protection, this is only for when 28 day snapshot protection is taken with geo-resilient storage.<br>(Geo-resilientStorageChargeable - Geo-resilientSnapshotUsed) * Geo-resilientProtectionPricePerHour * UsageHours | VMware
BA     | ProtectionTotalPrice              | Total cost for protection in period (0 if no protection)<br>(ComputeProtectionTotalPrice + Tier1ProtectionTotalPrice + Tier2ProtectionTotalPrice + Geo-resilientProtectionTotalPrice)         | VMware
BB     | LicensePricePerHour               | Licence charges for the VM | VMware
BC     | LicenseTotalPrice                 | LicensePricePerHour * UsageHoursWithinPeriod
BD     | TotalPrice                        | ComputeTotalPrice + GPUTotalPrice + Tier1StoragePrice + Tier2StoragePrice + Geo-resilientStoragePrice + ProtectionTotalPrice + LicenseTotalPrice | OpenStack, VMware

## Key changes to the Evidence File (November 2017 onwards)

From December 2018, you'll see the following changes to your evidence file. You'll receive the Evidence File for December at the start of January 2019, detailing your consumption during December.

The key changes to the evidence file are as follows:

**Service type categories**

- In column H the OpenStack Instance service type has been renamed to OpenStack Virtual Machine

## Previous changes

### November 2017

**New column:**

- Column H - UKCloud for VMware Independent Disks and Media charges

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

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
