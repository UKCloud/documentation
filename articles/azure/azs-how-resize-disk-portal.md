---
title: How to resize a disk using the UKCloud Azure Stack Hub portal
description: Provides help for resizing a disk using the portal on UKCloud for Microsoft Azure
services: azure-stack
author: Shaion O'Niel
reviewer: William Turner
lastreviewed: 15/04/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Resize a disk
toc_sub3:
toc_sub4:
toc_title: Resize a disk - Portal
toc_fullpath: Users/How To/Resize a disk/azs-how-resize-disk-portal.md
toc_mdlink: azs-how-resize-disk-portal.md
---

# How to resize a disk using the UKCloud Azure Stack Hub portal

## Overview

The UKCloud Azure Stack Hub portal allows you to resize virtual machine (VM) disks. This article shows you how to resize disks that are mounted to a VM, and will work for both managed and unmanaged disks.

### Intended audience

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Resizing disks that are mounted to a VM

1. Log in to the Azure Stack Hub portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Virtual machines**.

    ![Virtual machines in the favourites panel](images/azsp_vmsmenu.png)

3. In the *Virtual machines* blade, select the virtual machine that the disk is attached to.

4. In the virtual machine's blade, select **Disks**.

    ![Disks button within VM](images/azs-browser-vm-menu-disks-button.png)

5. In the *Disks* blade, select the disk you would like to resize.

    > [!Note]
    > - Disks can only be resized when they are unattached from the VM or the virtual machine is deallocated.
    > - Disks can only be resized to a larger size.
    > - Although the process is the same for both managed and unmanaged disks, the two blades look slightly different. Examples for both are provided below.

# [Resizing managed disks](#tab/tabid-1)

1. In the disk's blade, select **Configuration**.

2. Enter the desired size of the disk in GiB in the **Size** field.

    ![Managed disk resize](images/azs-browser-vm-disk-size-managed.png)

3. When you're done, click **Save**.

# [Resizing unmanaged disks](#tab/tabid-2)

1. Enter the desired size of the disk in GiB in the **Size** field.

    ![Unmanaged disk resize](images/azs-browser-vm-disk-size.png)

2. When you're done, click **Save**.

***

6. You can monitor the progress of the disk resizing by clicking the **Notifications** icon.

   ![Notification showing updating virtual machine disk](images/azsp_createvm_progress.png)

## Expanding the volume

After expanding the disk, you may need to go into the OS and expand the volume to actually use the newly allocated space. To do so, follow the steps below:

# [Windows VM](#tab/tabid-a)

1. Open an RDP connection to your VM.

2. Open a command prompt and type `diskpart`.

3. At the `DISKPART` prompt, type `list volume`.

    Take note of the volume you want to extend.

4. At the `DISKPART` prompt, type `select volume <volumenumber>`.

    This selects the volume that you want to extend into unpartitioned empty space on the same disk.

5. At the `DISKPART` prompt, type `extend`.

    This extends the selected volume to fill the added space on the disk.

# [Linux VM](#tab/tabid-b)

No further action is required.

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
