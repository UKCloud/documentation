---
title: How to move a virtual machine to a new virtual network using PowerShell
description: Provides help for moving a virtual machine to a new virtual network on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Move a VM to a new virtual network - PowerShell
toc_fullpath: Users/How To/azs-how-move-vm-new-vnet-ps.md
toc_mdlink: azs-how-move-vm-new-vnet-ps.md
---

# How to move a virtual machine to a new virtual network using PowerShell

## Overview

When creating a virtual machine you must assign the VM to a virtual network. Once assigned, Microsoft does not support VNet-to-VNet migration, so the VM must be redeployed to the new virtual network.

The following article shows you how to move a virtual machine to a new virtual network on UKCloud for Microsoft Azure.

> [!WARNING]
> Running the script below will result in downtime for your virtual machine as it needs to be removed then recreated.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md).

## Moving a virtual machine to a new virtual network

### Declare variables

Enter details below to provide values for the variables in the following script in this article:

| Variable name    | Variable description                                               | Input            |
|------------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack Hub                | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName         | Name of the resource group that the VM exists in                   | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName         | Name of the virtual machine to move to a new virtual network       | <form oninput="result.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$NewNetworkName | Name of the virtual network to move the virtual machine to         | <form oninput="result.value=vnetname.value" id="vnetname" style="display: inline;"><input type="text" id="vnetname" name="vnetname" style="display: inline;" placeholder="NewVNet"/></form> |
| \$NewSubnetName  | Name of the subnet to move the virtual machine to                  | <form oninput="result.value=subnetname.value" id="subnetname" style="display: inline;"><input type="text" id="subnetname" name="subnetname" style="display: inline;" placeholder="default"/></form> |
| \$NewPrivateIp   | New private IP for the virtual machine                             | <form oninput="result.value=newip.value" id="newip" style="display: inline;"><input type="text" id="newip" name="newip" style="display: inline;" placeholder="10.0.0.1"/></form> |
| \$NewSubnetName  | Name of the new network interface card to create                   | <form oninput="result.value=newnic.value" id="newnic" style="display: inline;"><input type="text" id="newnic" name="newnic" style="display: inline;" placeholder="NewNic"/></form> |

### Move the virtual machine

From your PowerShell window:

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzureRmLocation).Location

# Input Variables
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$NewNetworkName = "<output form="vnetname" name="result" style="display: inline;">NewVNet</output>"
$NewSubnetName = "<output form="subnetname" name="result" style="display: inline;">default</output>"
$NewPrivateIp = "<output form="newip" name="result" style="display: inline;">10.0.0.1</output>"
$NewNicName = "<output form="newnic" name="result" style="display: inline;">NewNic</output>"

# Retrieve VM details
$VM = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

# Check if the VM uses managed or unmanaged disks
if ($VM.StorageProfile.OsDisk.ManagedDisk) {
    $ManagedDisks = $true
}
else {
    $ManagedDisks = $false
}

# Stop the VM
Stop-AzureRmVM -Name $VMName -ResourceGroupName $RGName -Force

# Get VM current networking details
$Nic = (Get-AzureRmNetworkInterface | Where-Object -FilterScript { $_.VirtualMachine.Id -like $VM.Id })
$PublicIp = Get-AzureRmPublicIpAddress | Where-Object -FilterScript { $_.Id -like $Nic.IpConfigurations.PublicIpAddress.Id }

# Get new virtual network details
$NewVNet = Get-AzureRmVirtualNetwork | Where-Object -FilterScript { $_.Name -like $NewNetworkName }
$NewSubnet = Get-AzureRmVirtualNetworkSubnetConfig -VirtualNetwork $NewVNet -Name $NewSubnetName

# Create new VM networking resources
$NewPublicIP = New-AzureRmPublicIpAddress -Name $PublicIp.Name -Location $NewVNet.Location -ResourceGroupName $NewVNet.ResourceGroupName -Sku $PublicIp.Sku.Name -AllocationMethod $PublicIp.PublicIpAllocationMethod
$NewIPConfig = New-AzureRmNetworkInterfaceIpConfig -Subnet $NewSubnet -Name "ipconfig2" -Primary -PrivateIpAddress $NewPrivateIP -PublicIpAddress $NewPublicIP
$NewNic = New-AzureRmNetworkInterface -Name $NewNicName -ResourceGroupName $NewVNet.ResourceGroupName -Location $NewVNet.Location -IpConfiguration $NewIPConfig -NetworkSecurityGroupId $Nic.NetworkSecurityGroup.Id -Force

# Retrieve VM data disk details
if ($VM.StorageProfile.DataDisks) {
    $Lun = 0
    if ($ManagedDisks) {
        $Disks = Get-AzureRmDisk -ResourceGroupName $RGName | Where-Object -FilterScript { $_.ManagedBy -like "*$VMName" } | Where-Object -FilterScript { $_.Id -notlike $VM.StorageProfile.OsDisk.ManagedDisk.Id }
    }
    else {
        $Disks = $VM.StorageProfile.DataDisks
    }
}

# Create new VM configuration
$NewVMConfig = New-AzureRmVMConfig -VMName $VMName -VMSize $VM.HardwareProfile.VmSize

if ($ManagedDisks) {
    # Add OS disk to new VM configuration
    if ($VM.OSProfile.WindowsConfiguration) {
        $NewVMConfig = Set-AzureRmVMOSDisk -VM $NewVMConfig -ManagedDiskId $VM.StorageProfile.OsDisk.ManagedDisk.Id -CreateOption "Attach" -Windows
    }
    else {
        $NewVMConfig = Set-AzureRmVMOSDisk -VM $NewVMConfig -ManagedDiskId $VM.StorageProfile.OsDisk.ManagedDisk.Id -CreateOption "Attach" -Linux
    }
    # Add data disk(s) to new VM configuration
    foreach ($Disk in $Disks) {
        $NewVMConfig = Add-AzureRmVMDataDisk -VM $NewVMConfig -ManagedDiskId $Disk.Id -CreateOption "Attach" -Lun $Lun -DiskSizeInGB $Disk.DiskSizeGB
        $Lun++
    }
}
else {
    # Add OS disk to new VM configuration
    if ($VM.OSProfile.WindowsConfiguration) {
        $NewVMConfig = Set-AzureRmVMOSDisk -VM $NewVMConfig -VhdUri $VM.StorageProfile.OsDisk.Vhd.Uri -CreateOption Attach -Name $VM.StorageProfile.OsDisk.Name -Windows
    }
    else {
        $NewVMConfig = Set-AzureRmVMOSDisk -VM $NewVMConfig -VhdUri $VM.StorageProfile.OsDisk.Vhd.Uri -CreateOption Attach -Name $VM.StorageProfile.OsDisk.Name -Linux
    }
    # Add data disk(s) to new VM configuration
    foreach ($Disk in $Disks) {
        $NewVMConfig = Add-AzureRmVMDataDisk -VM $NewVMConfig -Name $Disk.Name -CreateOption "Attach" -Lun $Lun -DiskSizeInGB $Disk.DiskSizeGB
        $Lun++
    }
}

# Add new NIC to new VM configuration
$NewVMConfig = Add-AzureRmVMNetworkInterface -VM $NewVMConfig -NetworkInterface $NewNic

# Remove the old VM
Write-Output -InputObject "Removing old virtual machine"
Remove-AzureRmVM -Name $VMName -ResourceGroupName $RGName -Force

# Create the new VM from the new VM configuration
Write-Output -InputObject "Creating new virtual machine"
New-AzureRmVm -VM $NewVMConfig -ResourceGroupName $NewVNet.ResourceGroupName -Location $NewVNet.Location
Get-AzureRmVM -ResourceGroupName $RGName -Name $VMName
Write-Output -InputObject "The virtual machine has been created successfully"
</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
