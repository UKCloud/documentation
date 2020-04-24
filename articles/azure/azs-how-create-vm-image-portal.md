---
title: How to create a custom image from a VM on Azure Stack Hub using the UKCloud Azure Stack Hub portal
description: Provides details on how to create a custom image from a VM using the portal
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed: 06/04/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Custom Image from a VM
toc_sub3:
toc_sub4:
toc_title: Create a custom image from a VM - Portal
toc_fullpath: Users/How To/Create a Custom Image from a VM/azs-how-create-vm-image-portal.md
toc_mdlink: azs-how-create-vm-image-portal.md
---

# How to create a custom image from a VM on Azure Stack Hub using the UKCloud Azure Stack Hub portal

## Overview

You can create an image resource from a generalised virtual machine (VM) that is stored as either a managed disk or an unmanaged disk in a storage account. You can then use the image to create multiple VMs.

This article explains how to create a custom image from a VM on Azure Stack Hub, which you can then use to deploy other VMs.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Generalise your VM

> [!WARNING]
> Once you've generalised a VM, you **cannot** log back into it.

### [Windows](#tab/tabid-a)

1. Log in to your Windows VM using Remote Desktop Protocol (RDP).

2. Open a PowerShell console or command prompt as administrator and run the following command: `C:\Windows\System32\Sysprep\sysprep.exe`

3. In the *System Preparation Tool*, from the **System Cleanup Action** list, select **Enter System Out-of-Box Experience (OOBE)**.

4. Ensure the **Generalize** check box is selected.

5. From the **Shutdown Options** list, select **Shutdown**.

    See the image below for an example:

    ![Windows sysprep example](images/azs-windows-sys-prep.png)

6. Click **OK** and wait for the VM to shutdown. Your RDP session will be closed.

    > [!TIP]
    > The generalisation process is complete once your VM is in a stopped state.

### [Linux](#tab/tabid-b)

1. Log in to your Linux VM using Secure Shell (SSH).

2. Run the following command: `sudo su` and enter your user password if prompted.

3. Run the following command: `shutdown && waagent -deprovision+user -force`

4. Wait for the VM to shutdown. Your SSH session will be closed.

    > [!TIP]
    > The generalisation process is complete once your VM is in a stopped state.

***

## Creating the image

### [Managed Disk](#tab/tabid-c)

> [!WARNING]
> Capturing a VM image will make the VM unusable and **cannot** be undone.

1. Log in to the [Azure Stack Hub portal](https://portal.frn00006.azure.ukcloud.com/).

    For more detailed instructions, see [Getting Started Guide for UKCloud for Microsoft Azure](azs-gs.md).

2. In the *favorites* panel, select **Virtual machines**.

3. In the *Virtual machines* blade, select the VM that you want to capture.

4. In the top menu, click **Capture**.

    ![Capture VM image](images/azs-browser-capture-vm.png)

5. In the *Create image* blade, provide a **Name** for the new image.

6. From the **Resource group** list, select an existing resource group, or create a new one by clicking the **Create new** link and then typing a name for your new resource group in the pop out window.

7. Select **Automatically delete this virtual machine after creating the image**.

8. In the **Type the virtual machine name** field, enter the VM name.

9. Click **Create**.

    ![Create VM image](images/azs-browser-create-image.png)

10. Wait for the image creation process to finish.

11. Once complete, your VM image will appear in the resource group you selected in step 6.

    ![Custom image resource group](images/azs-browser-custom-image-resource-group.png)

12. Click the VM image.

13. In the *new* page, click **Create VM**.

14. Enter a **Name**, **Username**, **Authentication type**, **Password** and **Resource group** for the new VM, then click **OK**.

15. Select a VM size then click **Select**.

16. In *Configure optional features*, under *Select public inbound ports*, select the ports you want to open.

17. Click **OK**.

18. Review the *Summary* blade and click **OK**. The new VM will now begin deployment.

    ![Custom image VM summary](images/azs-browser-custom-image-vm-summary.png)

### [Unmanaged Disk](#tab/tabid-d)

> [!CAUTION]
> It is not possible to capture a VM image from the portal for a unmanaged disk VM.
> However, it is possible using [PowerShell](azs-how-create-vm-image-powershell.md).

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
