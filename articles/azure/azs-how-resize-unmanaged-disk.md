---
title: How to resize an OS drive | UKCloud Ltd
description: Provides help for resizing an OS drive on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to resize an OS drive
toc_fullpath: Users/How To/azs-how-resize-os-drive.md
toc_mdlink: azs-how-resize-os-drive.md
---

# How to resize an OS drive with PowerShell

## Overview

When deploying a new virtual machine from an Azure Marketplace image, the default drive size is often 127GB or less. While it is recommended to add additional disks for tasks such as installing applications and for CPU intensive workloads, you may need to expand the initial drive for purposes such as migrating from a physical PC to the VM or to support applications that must be installed on the OS drive.

This guide shows you how to resize disks on UKCloud for Microsoft Azure.

> [!NOTE]
> Resizing a disk will cause the virtual machine to restart.

### Intended audience

To complete the steps in this guide you must have the appropriate permissions on the resource you are trying to access.

## Resizing an OS drive

From your PowerShell window:

> [!IMPORTANT]
> Enter details below to provide values for the variables in the scripts in this article:
>
> Resource Group Name: <form oninput="result.value=name.value" id="ResourceGroup" style="display: inline;" >
> <input  type="text" id="name" name="name" style="display: inline;"/></form>
>
> VM Name: <form oninput="result.value=name.value" id="VMName" style="display: inline;">
> <input  type="text" id="name" name="name" style="display: inline;"/></form>
>
> New Disk Size in GB: <form oninput="result.value=name.value;result2.value=name.value" id="DiskSize" style="display: inline;">
> <input  type="text" id="name" name="name" style="display: inline;"/></form>
>
> Note that the maximum size allowed for OS disks is 2048GB

<pre><code class="language-PowerShell"># Sign in to your Azure Active Directory account in resource management mode
Add-AzureRMEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Login-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group name and VM name
$RGName = '<output form="ResourceGroup" name="result" style="display: inline;">&lt;Resource Group&gt;</output>'
$VMName = '<output form="VMName" name="result" style="display: inline;">&lt;VM Name&gt;</output>'

# Obtain a reference to your VM
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

Please select the type of disk you are trying to expand:

# [Managed Disk](#tab/tabid-1)

<pre><code class="language-PowerShell"># Set the size of the managed OS disk to the desired value and update the VM
$disk= Get-AzureRmDisk -ResourceGroupName $rgName -DiskName $vm.StorageProfile.OsDisk.Name
$disk.DiskSizeGB = <output form="DiskSize" name="result" style="display: inline;">&lt;Disk Size&gt;</output>
Update-AzureRmDisk -ResourceGroupName $rgName -Disk $disk -DiskName $disk.Name
</code></pre>

# [Unmanaged Disk](#tab/tabid-2)

<pre><code class="language-PowerShell"># Set the size of the unmanaged OS disk to the desired value and update the VM
$VM.StorageProfile.OSDisk.DiskSizeGB = <output form="DiskSize" name="result2" style="display: inline;">&lt;Disk Size&gt;</output>
Update-AzureRmVM -ResourceGroupName $RGName -VM $VM
</code></pre>

***

<br/>

```PowerShell
# Restart the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
```

## Expanding the volume

After expanding the disk, you must go into the OS and expand the volume to actually use the newly allocated space. To do so follow these steps:

# [Windows VM](#tab/tabid-a)

1. Open an RDP connection to your VM.

2. Open a command prompt and type `diskpart`.

3. At the `DISKPART` prompt, type `list volume`. Take note of the volume you want to extend.

4. At the `DISKPART` prompt, type `select volume <volumenumber>`. This selects the volume that you want to extend into unpartitioned empty space on the same disk.

5. At the `DISKPART` prompt, type `extend`. This extends the selected volume to fill the added space on the disk.

# [Linux VM](#tab/tabid-b)

No further action is required.

***

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
