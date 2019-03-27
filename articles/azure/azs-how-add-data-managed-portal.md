---
title: How to add a managed disk to a virtual machine using UKCloud Azure Stack portal | UKCloud Ltd
description: Provides help adding managed disks to a virtual machine on UKCloud for Microsoft Azure Stack
services: azure-stack
author: Shaion O'Niel

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Add a managed disk to a virtual machine
toc_sub3:
toc_sub4:
toc_title: Add a managed disk to a virtual machine - portal
toc_fullpath: Users/How To/
toc_mdlink: azs-how-add-managed-disks-portal.md
---

# How to add a managed disk to a virtual machine using UKCloud Azure Stack portal

## Overview

UKCloud for Azure Stack supports the use of managed disks on virtual machines. Managed disks can be used as both OS disks and a data disk.
For more information, see [Introduction to Azure managed disks](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/managed-disks-overview).

The following process shows you how to add a managed disk to a virtual machine using the UKCloud for Azure Stack Portal.

## Intended audience

To complete the steps in this guide, you must have appropriate access to a subscription in the Azure Stack portal.

## Adding a disks to an existing virtual machine in azure stack

1. Log in to the Azure Stack portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the *favourites* panel, select **Virtual machines**.

    ![Virtual machines button](images/azsp_vmsmenu.png)

3. In the *virtual machines* blade select the virtual machine you would like to add the disk to and then select **Disks** in the *settings* section.

    ![Virtual machine disk button](images/azs-browser-button-vm-disks.png)

4. In the *Disks* blade select **+Add data disk**.

    ![Add data disk button](images/azs-browser-button-add-disk.png)

# [Pre-existing disk](#tab/tabid-a)

1. Enter the LUN (Logical unit number).

    ![LUN input](images/azs-browser-input-disk-lun.png)

2. Select the disk that you desire to add to the virtual machine.

    ![Disk selection](images/azs-browser-input-disk-name.png)

3. Select **Save**.

    ![Save button](images/azs-browser-button-save-add-data-disk.png)

4. You can monitor the progress of your deployment by clicking the **Notifications** icon.

    ![Notification progress alert](images/azs-browser-notification-disks-progress.png)

5. When the deployment is finished, the notification will change to *Successfully updated virtual machine disks*.

    ![Notification complete alert](images/azs-browser-notification-disks-complete.png)

6. You can view the disk by navigating to the Virtual machine that the disk was added to and then then selecting **Disks** from the *settings* section.

    ![VM Data disks](images/azs-browser-disks.png)

# [New disk](#tab/tabid-b)

1. Enter the Logical unit number (LUN).

    ![LUN input](images/azs-browser-input-disk-lun.png)

2. In the name field select **Create disk** and enter the following information:

    - Name - The name of the disk.

    - Resource group - Select an existing resource group, or create a new one by typing a name for your new resource group.

    - Location - This will be frn00006, which is the location of the Azure Stack.

    - Account type - Standard disks (HDD) are backed by magnetic drives and are preferable for applications where data is accessed infrequently.

        > [!Note]
        > Currently only standard (HDD) disks are available in UKCloud for Azure Stack.

    - Source type - Create a disk from a snapshot of another disk, a blob in a storage account, or create an empty disk.

    - Size - The size of the disk in GB.

3. You can monitor the progress of your deployment by clicking the **Notifications** icon.

    ![Notification progress alert](images/azs-browser-notification-disks-progress.png)

4. When the deployment is finished, the notification will change to *Successfully updated virtual machine disks*.

    ![Notification complete alert](images/azs-browser-notification-disks-complete.png)

5. You can view the disk by navigating to the virtual machine that the disk was added to and then selecting **Disks** from the *settings* section.

    ![VM Data disks](images/azs-browser-disks.png)

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.