---
title: How to add a managed disk to a virtual machine using the UKCloud Azure Stack portal | UKCloud Ltd
description: Provides help adding managed disks to a virtual machine on UKCloud for Microsoft Azure
services: azure-stack
author: Shaion O'Niel
reviewer:
lastreviewed: 27/03/2019 11:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Add a Managed Disk to a VM
toc_sub3:
toc_sub4:
toc_title: Add a managed disk to a VM - Portal
toc_fullpath: Users/How To/Add a Managed Disk to a VM/azs-how-add-managed-disks-portal.md
toc_mdlink: azs-how-add-managed-disks-portal.md
---

# How to add a managed disk to a virtual machine using the UKCloud Azure Stack portal

## Overview

UKCloud for Microsoft Azure supports the use of managed disks on virtual machines (VMs). You can use managed disks as both OS disks and data disks.

For more information, see [Introduction to Azure managed disks](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/managed-disks-overview).

The following article shows you how to add a managed disk to a VM using the UKCloud Azure Stack portal.

## Intended audience

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack portal.

## Adding a disk to an existing virtual machine using the Azure Stack portal

1. Log in to the Azure Stack portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the *favourites* panel, select **Virtual machines**.

    ![Virtual machines button](images/azsp_vmsmenu.png)

3. In the *Virtual machines* blade, select the VM that you want to add the disk to.

    ![Virtual machine selection](images/azs-browser-button-vm-disks.png)

4. Under *Settings*, select **Disks**.

    ![Virtual machine disk button](images/azs-browser-button-vm-disks-setting.png)

5. In the *Disks* blade, select **+Add data disk**.

    ![Add data disk button](images/azs-browser-button-add-disk.png)

# [Pre-existing disk:](#tab/tabid-a)

If you're adding a pre-existing disk:

1. Enter the LUN (logical unit number).

    ![LUN input](images/azs-browser-input-disk-lun.png)

2. Select the disk that you want to add to the virtual machine.

    ![Disk selection](images/azs-browser-input-disk-name.png)

3. Click **Save**.

    ![Save button](images/azs-browser-button-save-add-data-disk.png)

4. You can monitor the progress of your deployment by clicking the **Notifications** icon.

    ![Deployment progress alert](images/azs-browser-notification-disks-progress.png)

5. When the deployment is finished, the notification will change to *Successfully updated virtual machine disks*.

    ![Deployment complete alert](images/azs-browser-notification-disks-complete.png)

6. You can view the disk by navigating to the VM that the disk was added to, then select **Disks**.

    ![VM Data disks](images/azs-browser-disks.png)

# [New disk:](#tab/tabid-b)

If you're adding a new disk:

1. Enter the LUN (logical unit number).

    ![LUN input](images/azs-browser-input-disk-lun.png)

2. In the **Name** field select **Create disk** and enter the following information:

    - **Name** - The name of the disk.

    - **Resource group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

    - **Location** - This will be frn00006, which is the location of the Azure Stack.

    - **Account type** - Standard disks (HDD) are backed by magnetic drives and are preferable for applications where data is accessed infrequently.

        > [!Note]
        > Currently, only standard disks (HDD) are available in UKCloud for Microsoft Azure.

    - **Source type** - Create a disk from a snapshot of another disk, a blob in a storage account, or create an empty disk.

    - **Size** - The size of the disk in GiB.

    ![Create managed disk](images/azs-browser-add-vm-disk.png)

3. You can monitor the progress of your deployment by clicking the **Notifications** icon.

    ![Deployment progress alert](images/azs-browser-notification-disks-progress.png)

4. When the deployment is finished, the notification will change to *Successfully updated virtual machine disks*.

    ![Deployment complete alert](images/azs-browser-notification-disks-complete.png)

5. You can view the disk by navigating to the VM that the disk was added to, then select **Disks**.

    ![VM Data disks](images/azs-browser-disks.png)

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
