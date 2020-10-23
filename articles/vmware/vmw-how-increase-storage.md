---
title: How to increase block storage for a virtual machine
description: Describes how to increase the block storage available to a virtual machine (VM)
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 23/10/2020

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Increase block storage for a VM
toc_fullpath: How To/vmw-how-increase-storage.md
toc_mdlink: vmw-how-increase-storage.md
---

# How to increase block storage for a virtual machine

## Overview

You can increase the block storage available for a virtual machine (VM) as long as the increase does not exceed the limits of your storage policy allocation.

## Before you begin

Before increasing the size of block storage for a VM, if the VM has a snapshot, you'll need to remove this before making changes to the hard disk size. You may need to perform a re-scan from the OS level.

## Checking storage allocation

Before increasing block storage for a VM, you can check the storage allocation for its VDC:

### [vCloud Director 9.7](#tab/tabid-a)

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains your VM.

2. In the left navigation panel, select **Storage Policies**.

    ![Storage Policies menu option in vCloud Director](images/vmw-vcd-mnu-storage-policies.png)

3. In the row for the appropriate storage policy, check the **Limit** column.

    ![Storage policy limit](images/vmw-vcd-storage-limit.png)

> [!NOTE]
> If you need to increase the storage allocation for your storage policy, raise a Service Request in the My Calls section of the UKCloud Portal.

### [VMware Cloud Director 10.1](#tab/tabid-b)

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the VM.

2. In the left navigation panel, under *Storage* select **Storage Policies**.

    ![Storage Policies menu option in vCloud Director](images/vmw-vcd10.1-mnu-storage-policies.png)

3. In the row for the appropriate storage policy, check the **Limit** column.

    ![Storage policy limit](images/vmw-vcd10.1-storage-limit.png)

> [!NOTE]
> If you need to increase the storage allocation for your storage policy, raise a Service Request in the My Calls section of the UKCloud Portal.

***

## Increasing storage for a virtual machine

To increase the amount of block storage for your VM:

### [vCloud Director 9.7](#tab/tabid-a)

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC that contains your VM.

2. In the *Virtual Machines* page, in the card for your VM, click **Details**.

    ![VM Details menu option](images/vmw-vcd-mnu-vm-details.png)

3. Expand the *Hardware* section.

4. In the *Hard Disks* section, in the row for the hard disk that you want to increase, enter the new value (in MB) in the **Size** field.

    ![Hard disk size](images/vmw-vcd-vm-hardware.png)

5. If required, you can add more hard disks to your VM by clicking **Add** and specifying the details for the new disk.

6. When you're done, click **Save**.

### [VMware Cloud Director 10.1](#tab/tabid-b)

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the VM.

2. In the card for your VM, click **Details**.

    ![VM Details menu option](images/vmw-vcd10.1-mnu-vm-details.png)

3. Under *Hardware*, select **Hard Disks**.

4. Click **Edit**.

    ![Edit hard disks button](images/vmw-vcd10.1-btn-vm-hard-disks-edit.png)

5. In the *Edit Hard Disks* dialog box, in the row for the hard disk that you want to increase, enter the new value in the **Size** field.

    ![Edit Hard Disks dialog box](images/vmw-vcd10.1-edit-hard-disks.png)

    > [!TIP]
    > Make sure to select the correct units (**MB** or **GB**) from the list in the **Size** field.

6. If required, you can add more hard disks to your VM by clicking **Add** and specifying the details for the new disk.

7. When you're done, click **Save**.

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
