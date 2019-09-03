---
title: How to create a custom image from a VM on Azure Stack using the UKCloud Azure Stack portal | UKCloud Ltd
description: Provides details on how to create a custom image from a VM using the portal
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a custom image from a VM - Portal
toc_fullpath: Users/How To/azs-how-create-vm-image-portal.md
toc_mdlink: azs-how-create-vm-image-portal.md
---

# How to create a custom image from a VM on Azure Stack using the UKCloud Azure Stack portal

## Overview

You can create an image resource from a generalised virtual machine (VM) that is stored as either a managed disk or an unmanaged disk in a storage account. You can then use the image to create multiple VMs.

This article explains how to create a custom image from a VM on Azure Stack, which you can then use to deploy other VMs.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack portal.

## [1. Generalise your VM](#tab/tabid-1)

> [!WARNING]
> Once you've generalised a VM, you **cannot** log back into it.

## [2. Creating the image](#tab/tabid-2)

> [!WARNING]
> Capturing a VM image will make it unusable and cannot be undone.

1. Log in to the [Azure Stack portal](https://portal.frn00006.azure.ukcloud.com/).

    For more detailed instructions, see [Getting Started Guide for UKCloud for Microsoft Azure](azs-gs.md).

2. Click **Virtual Machines** on the left menu.

3. Click the VM that you want to capture.

4. At the top, click **Capture**.

    ![Capture VM image](images/azs-browser-capture-vm.png)

5. In the new blade, provide a **Name** for the new image.

6. Select a **Resource group** from the dropdown menu or create a new one.

7. Select **Automatically delete this virtual machine after creating the image**.

8. Click **Create**.

    ![Create VM image](images/azs-browser-create-image.png)

9. Wait for the image creation process to finish.

10. Once complete, your VM image will appear in the resource group you selected in step 6.

    ![Custom image resource group](images/azs-browser-custom-image-resource-group.png)

11. Click the VM image.

12. In the *new* page, click **Create VM**.

13. Enter a **Name**, **Username**, **Authentication type**, **Password** and **Resource group** for the new VM. Click **OK**.

14. Select a VM size. Click **Select**.

15. In *Configure optional features*, under *Select public inbound ports*, select the ports you want to open.

16. Click **OK**.

17. Review the *Summary* blade and click **OK**. The new VM will now begin deployment.

![Custom image VM summary](images/azs-browser-custom-image-vm-summary.png)

***

### [Windows](#tab/tabid-a/tabid-1)

1. Log in to your Windows VM using remote desktop protocol (RDP).

2. Open a PowerShell console or command prompt as administrator and run the following command: `C:\Windows\System32\Sysprep\sysprep.exe`.

3. In the **System Preparation Tool**, under *System Cleanup Action*, select **Enter System Out-of-Box Experience (OOBE)**.

4. Ensure the **Generalize** tick box is selected.

5. Under *Shutdown Options*, select **Shutdown**.

    See the image below for an example:

    ![Windows sysprep example](images/azs-windows-sys-prep.png)

6. Click **OK** and wait for the generalisation process to complete.

### [Linux](#tab/tabid-b/tabid-1)

1. Log in to your Linux VM using secure shell (SSH).

2. Run the following command: `sudo su` and enter your user password.

3. Run the following command: `shutdown && waagent -deprovision+user -force`.

4. Wait for the VM to shutdown. Your session will be closed.

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).