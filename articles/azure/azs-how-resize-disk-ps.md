---
title: How to resize a disk using PowerShell | UKCloud Ltd
description: Provides help for resizing a disk using PowerShell on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Resize a disk
toc_sub3:
toc_sub4:
toc_title: Resize a disk - PowerShell
toc_fullpath: Users/How To/azs-how-resize-disk-ps.md
toc_mdlink: azs-how-resize-disk-ps.md
---

# How to resize a disk using PowerShell

## Overview

When deploying a new virtual machine from an Azure Marketplace image, the default drive size is often 127GB or less. While it is recommended to add additional disks for tasks such as installing applications and for CPU intensive workloads, you may need to expand the initial drive for purposes such as migrating from a physical PC to the VM or to support applications that must be installed on the OS drive.

This guide shows you how to resize disks on UKCloud for Microsoft Azure.

> [!NOTE]
> Resizing a disk will cause the virtual machine to restart.

### Intended audience

To complete the steps in this guide you must have the appropriate permissions on the resource you are trying to access.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## [Resizing an OS disk](#tab/tabid-1)

> [!IMPORTANT]
> Enter details below to provide values for the variables in the scripts in this article:
>
> Resource Group Name: <form oninput="result.value=ResourceGroupInput.value; result2.value=ResourceGroupInput.value" id="ResourceGroup" style="display: inline;">
> <input  type="text" id="ResourceGroupInput" name="ResourceGroupInput" style="display: inline;" placeholder="myResourceGroup"/></form>
>
> VM Name: <form oninput="result.value=VMNameInput.value; result2.value=VMNameInput.value" id="VMName" style="display: inline;">
> <input  type="text" id="VMNameInput" name="VMNameInput" style="display: inline;" placeholder="myVM"/></form>
>
> New Disk Size in GB: <form oninput="result.value=DiskSizeInput.value; result2.value=DiskSizeInput.value" id="DiskSize" style="display: inline;">
> <input  type="text" id="DiskSizeInput" name="DiskSizeInput" style="display: inline;" placeholder="1024"/></form>
>
> Note that the maximum size allowed for OS disks is 2048GB

## [Resizing a data disk](#tab/tabid-2)

> [!IMPORTANT]
> Enter details below to provide values for the variables in the scripts in this article:
>
> Resource Group Name: <form oninput="result.value=ResourceGroupInput2.value; result2.value=ResourceGroupInput2.value" id="ResourceGroup2" style="display: inline;">
> <input  type="text" id="ResourceGroupInput2" name="ResourceGroupInput2" style="display: inline;" placeholder="myResourceGroup"/></form>
>
> VM Name: <form oninput="result.value=VMNameInput2.value; result2.value=VMNameInput2.value" id="VMName2" style="display: inline;">
> <input  type="text" id="VMNameInput2" name="VMNameInput2" style="display: inline;" placeholder="myVM"/></form>
>
> New Disk Size in GB: <form oninput="result.value=DiskSizeInput2.value; result2.value=DiskSizeInput2.value" id="DiskSize2" style="display: inline;">
> <input  type="text" id="DiskSizeInput2" name="DiskSizeInput2" style="display: inline;" placeholder="1024"/></form>
>
> Disk LUN (Logical Unit Number): <form oninput="result.value=LUNInput.value; result2.value=LUNInput.value" id="LUN" style="display: inline;">
> <input  type="text" id="LUNInput" name="LUNInput" style="display: inline;" placeholder="0"/></form>

***

Please select the type of disk you are trying to expand:

### [Managed Disk](#tab/tabid-a/tabid-1)

From your PowerShell window:

<pre><code class="language-PowerShell"># Sign in to your Azure Stack environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup" name="result" style="display: inline;">myResourceGroup</output>"
$VMName = "<output form="VMName" name="result" style="display: inline;">myVM</output>"

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize managed OS disk
$Disk = Get-AzureRmDisk -ResourceGroupName $RGName -DiskName $VM.StorageProfile.OsDisk.Name
$Disk.DiskSizeGB = <output form="DiskSize" name="result" style="display: inline;">1024</output>
Update-AzureRmDisk -ResourceGroupName $RGName -Disk $Disk -DiskName $Disk.Name

# Start the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

### [Unmanaged Disk](#tab/tabid-b/tabid-1)

From your PowerShell window:

<pre><code class="language-PowerShell"># Sign in to your Azure Stack environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup" name="result2" style="display: inline;">myResourceGroup</output>"
$VMName = "<output form="VMName" name="result2" style="display: inline;">myVM</output>"

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize unmanaged OS disk
$VM.StorageProfile.OSDisk.DiskSizeGB = <output form="DiskSize" name="result2" style="display: inline;">1024</output>
Update-AzureRmVM -ResourceGroupName $RGName -VM $VM

# Restart the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

### [Managed Disk](#tab/tabid-a/tabid-2)

From your PowerShell window:

<pre><code class="language-PowerShell"># Sign in to your Azure Stack environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup2" name="result" style="display: inline;">myResourceGroup</output>"
$VMName = "<output form="VMName2" name="result" style="display: inline;">myVM</output>"
$DiskLun = <output form="LUN" name="result" style="display: inline;">0</output>

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RgName -Name $VmName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RgName -Name $VmName -Force

# Resize managed data disk
$Disk = Get-AzureRmDisk -ResourceGroupName $RgName -DiskName $VM.StorageProfile.DataDisks[$DiskLun].Name
$Disk.DiskSizeGB = <output form="DiskSize2" name="result" style="display: inline;">1024</output>
Update-AzureRmDisk -ResourceGroupName $RgName -Disk $Disk -DiskName $Disk.Name

# Start the VM
Start-AzureRmVM -ResourceGroupName $RgName -Name $VmName
</code></pre>

### [Unmanaged Disk](#tab/tabid-b/tabid-2)

From your PowerShell window:

<pre><code class="language-PowerShell"># Sign in to your Azure Stack environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup2" name="result2" style="display: inline;">myResourceGroup</output>"
$VMName = "<output form="VMName2" name="result2" style="display: inline;">myVM</output>"
$DiskLun = <output form="LUN" name="result2" style="display: inline;">0</output>

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RgName -Name $VmName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RgName -Name $VmName -Force

# Resize unmanaged data disk
$VM.StorageProfile.DataDisks[$DiskLun].DiskSizeGB = <output form="DiskSize2" name="result2" style="display: inline;">1024</output>
Update-AzureRmVM -ResourceGroupName $RgName -VM $VM

# Restart the VM
Start-AzureRmVM -ResourceGroupName $RgName -Name $VmName
</code></pre>

***

## Expanding the volume

After expanding the disk, you must go into the OS and expand the volume to actually use the newly allocated space. To do so follow these steps:

### [Windows VM](#tab/tabid-c)

1. Open an RDP connection to your VM.

2. Open a command prompt and type `diskpart`.

3. In the `DISKPART` prompt, type `list volume`. Take note of the volume you want to extend.

4. In the `DISKPART` prompt, type `select volume <volumenumber>`. This selects the volume that you want to extend into unpartitioned empty space on the same disk.

5. In the `DISKPART` prompt, type `extend`. This extends the selected volume to fill the added space on the disk.

### [Linux VM](#tab/tabid-d)

No further action is required.

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
