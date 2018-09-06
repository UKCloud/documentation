---
title: How to resize an unmanaged disk | UKCloud Ltd
description: Provides help for resizing an unmanaged disk on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to resize an unmanaged disk
toc_fullpath: Users/How To/azs-how-resize-unmanaged-disk.md
toc_mdlink: azs-how-resize-unmanaged-disk.md
---

# How to resize an unmanaged disk

## Overview

When deploying a new virtual machine from an Azure Marketplace image, the default drive size is often 127GB or less. Whilst it is recommended to add additional disks for tasks such as installing applications and for CPU intensive workloads, you may need to expand the initial drive for purposes such as migrating from a physical PC to the VM or to support applications which must be installed on the OS drive.

This guide shows you how to resize disks on UKCloud for Microsoft Azure.

>[!Note]
>Resizing a disk will cause the virtual machine to restart.

### Intended audience

To complete the steps in this guide you must have the appropriate permissions on the resource you are trying to access.

## Resizing an unmanaged disk

From your PowerShell window:

>[!Important]
>Variables to be changed:
>
>Resource Group Name: <form oninput="result.value=name.value" id="ResourceGroup" >
><input  type="text" id="name" name="name"/></form>
>
>VM Name: <form oninput="result.value=name.value" id="VMName" >
><input  type="text" id="name" name="name"/></form>
>
>New Disk Size in GB: <form oninput="result.value=name.value" id="DiskSize" >
><input  type="text" id="name" name="name"/></form>
>
> Please note that the maximum size allowed for OS disks is 2048GB

<pre><code class="language-PowerShell">
# Sign in to your Azure Active Directory account in resource management mode
Add-AzureRMEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Login-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group name and VM name
$RGName = '<output form="ResourceGroup" name="result">&lt;Resource Group&gt;</output>'
$VMName = '<output form="VMName" name="result">&lt;VM Name&gt;</output>'

# Obtain a reference to your VM
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Set the size of the unmanaged OS disk to the desired value and update the VM
$VM.StorageProfile.OSDisk.DiskSizeGB = <output form="DiskSize" name="result">&lt;Disk Size&gt;</output>
Update-AzureRmVM -ResourceGroupName $RGName -VM $VM

# Restart the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

After expanding the disk, it is necessary to go into the OS and expand the volume to actually use the newly allocated space. To do so please follow these steps:

# [Windows VM](#tab/tabid-1)

1. Open an RDP connection to your VM

2. Open a command prompt and type `diskpart`

3. At the `DISKPART` prompt, type `list volume`. Take note of the volume you want to extend.

4. At the `DISKPART` prompt, type `select volume <volumenumber>`. This selects the volume that you want to extend into unpartitioned empty space on the same disk.

5. At the `DISKPART` prompt, type `extend`. This extends the selected volume to fill the added space on the disk.

# [Linux VM](#tab/tabid-2)

No further action is required.

***

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.