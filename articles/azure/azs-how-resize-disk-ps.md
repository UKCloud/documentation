---
title: How to resize a disk using PowerShell
description: Provides help for resizing a disk using PowerShell on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: William Turner
lastreviewed: 31/03/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Resize a disk
toc_sub3:
toc_sub4:
toc_title: Resize a disk - PowerShell
toc_fullpath: Users/How To/Resize a disk/azs-how-resize-disk-ps.md
toc_mdlink: azs-how-resize-disk-ps.md
---

# How to resize a disk using PowerShell

## Overview

When deploying a new virtual machine from an Azure Marketplace image, the default drive size is often 127GB or less. While it is recommended to add additional disks for tasks such as installing applications and for CPU intensive workloads, you may need to expand a disk for purposes such as migrating from a physical PC to the VM or to support applications that must be installed on the OS drive.

This article shows you how to resize disks on UKCloud for Microsoft Azure.

> [!NOTE]
> Resizing a disk will cause the virtual machine to restart.

### Intended audience

To complete the steps in this article you must have the appropriate permissions on the resource you are trying to access.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md).

## [Resizing an OS disk](#tab/tabid-1)

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$ArmEndpoint           | The Azure Resource Manager endpoint for Azure Stack Hub                                        | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName                | Name of the resource group which the VM is inside in Azure Stack Hub                           | <form oninput="result.value=ResourceGroupInput.value; result2.value=ResourceGroupInput.value" id="ResourceGroup" style="display: inline;"><input type="text" id="ResourceGroupInput" name="ResourceGroupInput" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName                | Name of the VM with the disk you are trying to resize                                      | <form oninput="result.value=VMNameInput.value; result2.value=VMNameInput.value" id="VMName" style="display: inline;"><input type="text" id="VMNameInput" name="VMNameInput" style="display: inline;" placeholder="MyVM"/></form> |
| \$Disk.DiskSizeGB       | The new disk size in gigabytes. **Note**: The maximum size allowed for OS disks is 2048 GB | <form oninput="result.value=DiskSizeInput.value; result2.value=DiskSizeInput.value" id="DiskSize" style="display: inline;"><input type="text" id="DiskSizeInput" name="DiskSizeInput" style="display: inline;" placeholder="200"/></form> |

## [Resizing a data disk](#tab/tabid-2)

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$ArmEndpoint  | The Azure Resource Manager endpoint for Azure Stack Hub                                                 | <form oninput="result.value=armendpoint2.value;result2.value=armendpoint2.value" id="armendpoint2" style="display: inline;"><input type="text" id="armendpoint2" name="armendpoint2" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName                | Name of the resource group which the VM is inside in Azure Stack Hub                           | <form oninput="result.value=ResourceGroupInput2.value; result2.value=ResourceGroupInput2.value" id="ResourceGroup2" style="display: inline;"><input type="text" id="ResourceGroupInput2" name="ResourceGroupInput2" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName                | Name of the VM with the disk you are trying to resize                                      | <form oninput="result.value=VMNameInput2.value; result2.value=VMNameInput2.value" id="VMName2" style="display: inline;"><input type="text" id="VMNameInput2" name="VMNameInput2" style="display: inline;" placeholder="MyVM"/></form> |
| \$Disk.DiskSizeGB       | The new disk size in gigabytes. | <form oninput="result.value=DiskSizeInput2.value; result2.value=DiskSizeInput2.value" id="DiskSize2" style="display: inline;"><input type="text" id="DiskSizeInput2" name="DiskSizeInput2" style="display: inline;" placeholder="200"/></form> |
| \$DiskLun               | The LUN (Logical Unit Number) of the disk you are trying to resize                         | <form oninput="result.value=LUNInput.value; result2.value=LUNInput.value" id="LUN" style="display: inline;"><input type="text" id="LUNInput" name="LUNInput" style="display: inline;" placeholder="0"/></form> |

***

Select the type of disk you are trying to resize:

### [Managed Disk](#tab/tabid-a/tabid-1)

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Sign in to your Azure Stack Hub environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="VMName" name="result" style="display: inline;">MyVM</output>"

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize managed OS disk
$Disk = Get-AzureRmDisk -ResourceGroupName $RGName -DiskName $VM.StorageProfile.OsDisk.Name
$Disk.DiskSizeGB = <output form="DiskSize" name="result" style="display: inline;">200</output>
Update-AzureRmDisk -ResourceGroupName $RGName -Disk $Disk -DiskName $Disk.Name

# Start the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

### [Unmanaged Disk](#tab/tabid-b/tabid-1)

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Sign in to your Azure Stack Hub environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup" name="result2" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="VMName" name="result2" style="display: inline;">MyVM</output>"

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize unmanaged OS disk
$VM.StorageProfile.OSDisk.DiskSizeGB = <output form="DiskSize" name="result2" style="display: inline;">200</output>
Update-AzureRmVM -ResourceGroupName $RGName -VM $VM

# Restart the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

### [Managed Disk](#tab/tabid-a/tabid-2)

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint2" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Sign in to your Azure Stack Hub environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup2" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="VMName2" name="result" style="display: inline;">MyVM</output>"
$DiskLun = <output form="LUN" name="result" style="display: inline;">0</output>

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize managed data disk
$Disk = Get-AzureRmDisk -ResourceGroupName $RGName -DiskName $VM.StorageProfile.DataDisks[$DiskLun].Name
$Disk.DiskSizeGB = <output form="DiskSize2" name="result" style="display: inline;">200</output>
Update-AzureRmDisk -ResourceGroupName $RGName -Disk $Disk -DiskName $Disk.Name

# Start the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

### [Unmanaged Disk](#tab/tabid-b/tabid-2)

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint2" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Sign in to your Azure Stack Hub environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Set your resource group and VM name
$RGName = "<output form="ResourceGroup2" name="result2" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="VMName2" name="result2" style="display: inline;">MyVM</output>"
$DiskLun = <output form="LUN" name="result2" style="display: inline;">0</output>

# Obtain your VM object
$VM = Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName

# Stop the VM before resizing the disk
Stop-AzureRmVM -ResourceGroupName $RGName -Name $VMName -Force

# Resize unmanaged data disk
$VM.StorageProfile.DataDisks[$DiskLun].DiskSizeGB = <output form="DiskSize2" name="result2" style="display: inline;">200</output>
Update-AzureRmVM -ResourceGroupName $RGName -VM $VM

# Restart the VM
Start-AzureRmVM -ResourceGroupName $RGName -Name $VMName
</code></pre>

***

## Expanding the volume

After expanding the disk, you may need to go into the OS and expand the volume to actually use the newly allocated space. To do so, follow these steps:

### [Windows VM](#tab/tabid-c)

### Declare variables

Enter details below to provide values for the variables in the following scripts:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$DriveLetter           | The drive letter of the volume you are trying to expand                                    | <form oninput="result.value=DriveLetterInput.value" id="DriveLetter" style="display: inline;"><input type="text" id="DriveLetterInput" name="DriveLetterInput" style="display: inline;" placeholder="C"/></form> |

### Expand the Volume

1. Open an RDP connection to your VM.

    ```powershell
    # Obtain public IP of your VM based on the variables from above
    $NICName = (Get-AzureRmNetworkInterface -ResourceGroupName $RGName | Where-Object -FilterScript { $_.VirtualMachine.Id -like "*$VMName*"}).Name
    $IpAddress = Get-AzureRmPublicIpAddress -ResourceGroupName $RGName | Where-Object -FilterScript { $_.IpConfiguration.Id -like "*$NICName*" }
    # Start RDP session to your VM
    Start-Process "mstsc" -ArgumentList "/v:$($IpAddress.IpAddress)"
    ```

2. From your PowerShell window:

    <pre><code class="language-PowerShell"># Resize partition based on drive letter
    ## Declare drive letter
    $DriveLetter = "<output form="DriveLetter" name="result" style="display: inline;">C</output>"
    ## Find maximum size of the partition based on drive letter
    $MaxSize = (Get-PartitionSupportedSize -DriveLetter $DriveLetter).SizeMax
    ## Resize the partition
    Resize-Partition -DriveLetter $DriveLetter -Size $MaxSize
    </code></pre>

### [Linux VM](#tab/tabid-d)

No further action is required.

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
