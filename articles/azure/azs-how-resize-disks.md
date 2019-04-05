---
title: How to resize virtual machine disks using the UKCloud Azure Stack portal | UKCloud Ltd
description: Provides help for resizing virtual machine disks using the portal on UKCloud for Microsoft Azure
services: azure-stack
author: Shaion O'Niel

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Resize disks
toc_sub3:
toc_sub4:
toc_title: Resize managed and unmanaged disks - portal
toc_fullpath: Users/How To/azs-how-resize-disks.md
toc_mdlink: azs-how-resize-disks.md
---

# How to resize virtual machine disks using the UKCloud Azure Stack portal

## Overview

The UKCloud for Azure Stack portal allows users to resize VM disks. This article shows you how to resize disks that are mounted to a VM, and will work for both managed and unmanaged disks.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack portal.

## Resizing disks that are mounted to a VM

1. Log in to the Azure Stack portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Virtual machines**.

    ![Virtual machines in the favourites panel](images/azsp_vmsmenu.png)

3. In the *Virtual machines* blade select the owner VM that the disk is mounted to.

    ![VM Disks button](images/azs-browser-button-vm-disks.png)

4. In the VM's blade select disks.

    ![Disks button within VM](images/azs-browser-button-vm-disks.png)

5. In the *Disks* blade select the disk you would like to resize.

    >[!Note]
    >Disks can only be resized when they are unattached or the owner VM is deallocated.

6. In the VM disk's blade input the The size of the disk in GB in the *size* section.

    >[!Note]
    >- Disks can only be resized to a larger size.
    >- Although the process is the same for both managed and unmanaged disks, the two blades look slightly different. Examples for both have been included below.

# [Resizing managed disks](#tab/tabid-1)

![Managed disk size](images/azs-browser-vm-disk-size-managed.png)

# [Resizing unmanaged disks](#tab/tabid-2)

![Unmanaged disk size](images/azs-browser-vm-disk-size.png)

***

6. Click *Save* to commit the changes.

    ![VM disks save button](images/azs-browser-vm-disk-save-button.png)

7. You can monitor the progress of the Disk resize by clicking the **Notifications** icon.

   ![Notification showing updating virtual machine disk](images/azs-update-deployment-progress.png)

## Expanding the volume

After expanding the disk, you must go into the OS and expand the volume to actually use the newly allocated space. To do so follow these steps:

# [Windows VM](#tab/tabid-a)

1. Open an RDP connection to your VM.

2. Open a command prompt and type `diskpart`.

3. In the `DISKPART` prompt, type `list volume`. Take note of the volume you want to extend.

4. In the `DISKPART` prompt, type `select volume <volumenumber>`. This selects the volume that you want to extend into unpartitioned empty space on the same disk.

5. In the `DISKPART` prompt, type `extend`. This extends the selected volume to fill the added space on the disk.

# [Linux VM](#tab/tabid-b)

No further action is required.

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.