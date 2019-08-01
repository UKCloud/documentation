---
title: How to create a custom image from a VM on Azure Stack | UKCloud Ltd
description: Provides details on how to create a custom image from a VM
services: 
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a custom image from a VM - Portal - PowerShell
toc_fullpath: Users/How To/azs-how-create-vm-image.md
toc_mdlink: azs-how-create-vm-image.md
---

# How to create a custom image from a VM on Azure Stack

## Overview

An image resource can be created from a generalised virtual machine (VM) that is stored as either a managed disk or an unmanaged disk in a storage account. The image can then be used to create multiple VMs.

This article will explain how to create a custom image from a VM on Azure Stack, which you can then use to deploy other VMs.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the **Azure Stack** portal.

## [1. Generalise your VM](#tab/tabid-1)

## [2. Create the image](#tab/tabid-2)

***

### [Windows](#tab/tabid-a/tabid-1)

1. Log in to your Windows VM.
2. Run the following command: `C:\Windows\System32\Sysprep\sysprep.exe`.
3. In the **System Preparation Tool**, under *System Cleanup Action*, select **Enter System Out-of-Box Experience (OOBE)** from the dropdown menu.
4. Ensure the **Generalise** tick box is selected.
5. Under *Shutdown Options*, select **Shutdown** from the dropdown menu.

    See the image below for an example:

    ![Windows sysprep example](images/azs-windows-sys-prep.png)

6. Select **OK** and wait for the generalisation process to complete.

> [!WARNING]
> Once a VM has been generalised, you **can not** log back into it.

### [Linux](#tab/tabid-b/tabid-1)

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).