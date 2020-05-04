---
title: How to create a virtual machine from a disk snapshot using the UKCloud Azure Stack Hub portal
description: Provides help for creating a virtual machine from a managed disk snapshot using the portal on UKCloud for Microsoft Azure
services: azure-stack
author: William Turner
reviewer: William Turner
lastreviewed: 04/05/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine from disk snapshot
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine from snapshot - Portal
toc_fullpath: Users/How To/Create a Virtual Machine from disk snapshot/azs-how-create-vmfromsnapshot-portal.md
toc_mdlink: azs-how-create-vmfromsnapshot-portal.md
---

# How to create a virtual machine from a disk snapshot using the UKCloud Azure Stack Hub portal

## Overview

The UKCloud Azure Stack Hub portal allows you to create a snapshot of a managed disk. This snapshot can be used to create a new managed disk, which you can then create a virtual machine from. This article shows you how to take the snapshot, create a managed disk, and create a virtual machine.

### Intended audience

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Creating a snapshot from a disk

1. From the Azure portal, on the left menu, select All services.

2. In the All services search box, enter disks and then select Disks to display the list of available disks.

3. Select the disk that you would like to use. The Disk page for that disk appears.

4. From the menu at the top, select Create snapshot.

5. Enter a Name for the snapshot.

6. Choose a Resource group for the snapshot. You can use either an existing resource group or create a new one.

7. For Account type, choose either Standard (HDD) or Premium (SSD) storage.

8. When you're done, select Create to create the snapshot.

## Creating a managed disk from a snapshot

1. After the snapshot has been created, select Create a resource in the left menu.

2. In the search box, enter managed disk and then select Managed Disks from the list.

3. On the Managed Disks page, select Create.

4. Enter a Name for the disk.

5. Choose a Resource group for the disk. You can use either an existing resource group or create a new one. This selection will also be used as the resource group where you create the VM from the disk.

6. For Account type, choose either Standard (HDD) or Premium (SSD) storage.

7. In Source type, ensure Snapshot is selected.

8. In the Source snapshot drop-down, select the snapshot you want to use.

9. Make any other adjustments as needed and then select Create to create the disk.

## Creating a virtual machine from a managed disk

After you have the managed disk VHD that you want to use, you can create the VM in the portal:

1. From the Azure portal, on the left menu, select All services.

2. In the All services search box, enter disks and then select Disks to display the list of available disks.

3. Select the disk that you would like to use. The Disk page for that disk opens.

4. In the Overview page, ensure that DISK STATE is listed as Unattached. If it isn't, you might need to either detach the disk from the VM or delete the VM to free up the disk.

5. In the menu at the top of the page, select Create VM.

6. On the Basics page for the new VM, enter a Virtual machine name and either select an existing Resource group or create a new one.

7. For Size, select Change size to access the Size page.

8. Select a VM size row and then choose Select.

9. On the Networking page, you can either let the portal create all new resources or you can select an existing Virtual network and Network security group. The portal always creates a new network interface and public IP address for the new VM.

10. On the Management page, make any changes to the monitoring options.

11. On the Guest config page, add any extensions as needed.

12. When you're done, select Review + create.

13. If the VM configuration passes validation, select Create to start the deployment.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
