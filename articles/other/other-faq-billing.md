---
title: Invoice and billing FAQs
description: Frequently asked questions about invoicing and billing
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 07/01/2019 13:14:56
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Invoice and billing FAQs
toc_fullpath: FAQs/other-faq-billing.md
toc_mdlink: other-faq-billing.md
---

# Invoice and billing FAQs

## General

### When will I be billed?

We send out invoices on the first day of each month for the previous month's usage.

### How can I pay?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

### How is my invoice formatted?

Your invoice includes a line for each chargeable service. For example, there might be a row for your UKCloud for VMware charges, one for Cloud Storage and another for HSCN connectivity.

### What is the evidence file?

The UKCloud evidence file is a CSV file provided with your invoice that contains data on your hourly metered charges per month and corroborates how the totals invoiced are derived.

Each row in the evidence file represents a chargeable period for a UKCloud service, for example, a VMware VM, OpenStack VM (or instance) or Cross Domain Security Zone Walled Garden. Each row includes usage hours/minutes and relevant charges for that service.

### How are usage hours rounded?

Usage hours are typically rounded up, however there is a maximum of 24 hours total of usage hours per event date per resource ID. Billable hours are calculated as follows:

1. Items with the same VM type, power type, protection type are grouped together.

2. For each group of items with the same VM type and protection type with the power state of `on` the total number of usage minutes is rounded up to the nearest hour (this is capped to a maximum of 24 hours). Billable hours are allocated to the first matching rated item.

3. The process is then repeated for each group of items with the same VM type and protection type, with the power state of `off`.

### What about services that aren't in the evidence file?

Some metered services are not yet integrated into the evidence file. You can find details of these services on your invoice.

## UKCloud for VMware charges

### How are my UKCloud for VMware VM charges calculated?

The cost of your UKCloud for VMware VMs is determined by adding together the cost of your compute, storage, protection and licensing. You can find these individual costs in the following columns of the evidence file in rows of the service type (column H) of `VMware VM`:

Description           | Column
----------------------|-------
Compute               | U
Tier 1 Storage        | AE
Tier 2 Storage        | AK
Geo-resilient Storage | AQ
Protection            | BA
Licensing             | BC

The compute cost of a VM (column U) is determined by the amount of time the VM was powered on (column N), the VM size (column O), power level (column P) and security domain (column Q).

### How many VMs do I have and what t-shirt size are they?

Each VM is identified in the spreadsheet by its resource ID (column F). Each VM will have multiple rows depending on when it was created and its different power state during the billing period. The size of the VM is indicated by its Compute Machine Type (column O).

> [!NOTE]
> For user-defined VMs, the highest resource closest to the VM size will dictate the cost. For example 2 vCPU and 16GiB will be charged at the Medium High Memory cost.

### Do I have any vCloud snapshots that I'm being charged for?

If you've taken manual vCloud snapshots of your VM, you'll see these in the following columns of the evidence file:

Description                                          | Column
-----------------------------------------------------|-------
Tier 1 storage allocated for vCloud snapshots        | AA
Tier 2 storage allocated for vCloud snapshots        | AG
Geo-resilient storage allocated for vCloud snapshots | AM

### How many hours are my VMs on per month?

Usage hours are listed in the evidence file in column N (UsageHours). To see how many hours your VMs are on for month, look for the usage hours in rows with a service type (column H) of `VMware VM` and a power state (column L) of `on`.

### How much block storage are my VMs using?

The amount and cost of block storage for your VMs is listed in the evidence file under the following columns:

Description                | Column
---------------------------|-------
Tier 1 Storage used        | Z
Tier 1 Storage cost        | AE
Tier 2 Storage used        | AF
Tier 2 Storage cost        | AK
Geo-resilient Storage used | AL
Geo-resilient Storage cost | AQ

> [!NOTE]
> 60GiB of Tier 2 storage is included in the pricing for all VMs whilst they are powered on, except for Micro, which has 10giB of included storage. For VMs in powered-off state, consumed storage will be charged at the prevailing rate.

### What are the protection costs for my VMs?

Protection costs for your VM are listed in the following columns of the evidence file:

Description                               | Column
------------------------------------------|-------
Protection cost for the VM                | AT
Protection cost for Tier 1 storage        | AX
Protection cost for Tier 2 storage        | AY
Protection cost for Geo-resilient storage | AZ
Total protection cost                     | BA

The cost of protection depends on the protection type (column AR) you have applied to your VM and block storage. The protection type for your VM and its block storage must be the same.

### How much storage am I using for independent disks, media and templates?

UKCloud for VMware costs also include storage used by any independent disks, media and templates you have, which is listed as separate rows in the evidence file. Look for rows with the service type (column H) of VMware Independent Disk, VMware Media and VMware Template.

### How much am I spending on Windows licensing on my estate?

The operating system installed on your VM is shown in column G of the evidence file. Associated licensing costs are shown in column BC.

### How can I divide up the costs of my estate, for example between different projects, departments or cost centres?

You can add metadata to your individual VMs, which propagates to the evidence file (as a semi colon-separated list in column I). You can then add your own formulas to the evidence file spreadsheet to use that metadata to cross charge workloads. For example, if you use metadata to assign VMs to different cost centres or projects, you could add formulas to divide VM charges across those different cost centres or projects.

> [!NOTE]
> The VM metadata will be listed in the evidence file on the day after you tag the VM. For example, if you tag your VM on the 3rd, the metadata will be listed in the evidence file from the 4th, unless a VM power cycle occurs on the 3rd.

The [*How to use VM location in vCloud Director*](../vmware/vmw-how-use-vm-location.md) article includes information about how to access metadata for your VMs.

## UKCloud for OpenStack charges

### How are my UKCloud for OpenStack charges calculated?

The cost of your UKCloud for OpenStack instances is determined by adding together the cost of your compute and storage. You can find these individual costs in the following columns of the evidence file in rows of the service type (column H) of `OpenStack Virtual Machine`:

Description           | Column
----------------------|-------
Compute               | U
Tier 1 Storage        | AE
Tier 2 Storage        | AK

The compute cost of an instance (column U) is determined by the instance size (column O), security domain (column Q), vCPU (column R), and memory (column S).

### Are shelved instances included in the evidence file?

When you shelve an OpenStack instance, all compute charges for that instance cease, so it no longer appears in the evidence file as an `OpenStack Virtual Machine` row. When an instance is shelved, a snapshot is taken, so the evidence file includes an `OpenStack Image` row for the instance, which details the storage charges for that snapshot.

### How much block storage are my instances using?

Block storage for OpenStack instances is included in the evidence as separate line items with the service type (column H) of `OpenStack Block Storage Tier 1` or `OpenStack Block Storage Tier 2`.

The amount and cost of block storage is provided in the following columns:

Description                | Column
---------------------------|-------
Tier 1 Storage used        | Z
Tier 1 Storage cost        | AE
Tier 2 Storage used        | AF
Tier 2 Storage cost        | AK

UKCloud for OpenStack storage costs also include any images you have, which are listed as separate rows in the evidence file. Look for rows with the service type (column H) of `OpenStack Image`.

## Cloud GPU charges

### How are my Cloud GPU charges calculated?

Costs for Cloud GPU are shown against VMware VMs in the following columns of the evidence file:

Description                         | Column
------------------------------------|-------
GPU type (compute or visualisation) | V
GPU cost                            | Y

The cost of a GPU VM depends on whether it is for compute or visualisation (column X).

### How can I see how many GPU VMs I have?

To find out how many GPU VMs you have, look for rows with a service type (column H) of `VMware VM` that include a GPU count (column W).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
