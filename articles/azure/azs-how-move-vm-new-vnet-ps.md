---
title: How to move a virtual machine to a new virtual network using PowerShell
description: Provides help for moving a virtual machine to a new virtual network on UKCloud for Microsoft Azure
services: azure-stack
author: blawson
reviewer: wturner
lastreviewed: 08/03/2022

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
| \$NewNicName  | Name of the new network interface card to create                   | <form oninput="result.value=newnic.value" id="newnic" style="display: inline;"><input type="text" id="newnic" name="newnic" style="display: inline;" placeholder="NewNic"/></form> |
| \$NewPublicIpName  | Name of the new public IP address to create                   | <form oninput="result.value=newnic.value" id="newip" style="display: inline;"><input type="text" id="newip" name="newip" style="display: inline;" placeholder="NewPublicIp"/></form> |

### Move the virtual machine

From your PowerShell window:

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

## Add environment
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzLocation).Location

# Input Variables
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$NewNetworkName = "<output form="vnetname" name="result" style="display: inline;">NewVNet</output>"
$NewSubnetName = "<output form="subnetname" name="result" style="display: inline;">default</output>"
$NewPrivateIp = "<output form="newip" name="result" style="display: inline;">10.0.0.1</output>"
$NewNicName = "<output form="newnic" name="result" style="display: inline;">NewNic</output>"
$NewPublicIpName = "<output form="newip" name="result" style="display: inline;">NewPublicIp</output>"

# Retrieve VM details
$VM = Get-AzVM -Name $VMName -ResourceGroupName $RGName

# Check if the VM uses managed or unmanaged disks
if ($VM.StorageProfile.OsDisk.ManagedDisk) {
    $ManagedDisks = $true
}
else {
    $ManagedDisks = $false
}

# Stop the VM
Stop-AzVM -Name $VMName -ResourceGroupName $RGName -Force

# Get VM current networking details
$Nic = (Get-AzNetworkInterface | Where-Object -FilterScript { $_.VirtualMachine.Id -like $VM.Id })
$PublicIp = Get-AzPublicIpAddress | Where-Object -FilterScript { $_.Id -like $Nic.IpConfigurations.PublicIpAddress.Id }

# Get new virtual network details
$NewVNet = Get-AzVirtualNetwork | Where-Object -FilterScript { $_.Name -like $NewNetworkName }
$NewSubnet = Get-AzVirtualNetworkSubnetConfig -VirtualNetwork $NewVNet -Name $NewSubnetName

# Create new VM networking resources
$NewPublicIp = New-AzPublicIpAddress -Name $NewPublicIpName -Location $NewVNet.Location -ResourceGroupName $NewVNet.ResourceGroupName -Sku $PublicIp.Sku.Name -AllocationMethod $PublicIp.PublicIpAllocationMethod
$NewIpConfig = New-AzNetworkInterfaceIpConfig -Subnet $NewSubnet -Name "ipconfig2" -Primary -PrivateIpAddress $NewPrivateIp -PublicIpAddress $NewPublicIp
$NewNic = New-AzNetworkInterface -Name $NewNicName -ResourceGroupName $NewVNet.ResourceGroupName -Location $NewVNet.Location -IpConfiguration $NewIpConfig -NetworkSecurityGroupId $Nic.NetworkSecurityGroup.Id -Force

# Retrieve VM data disk details
if ($VM.StorageProfile.DataDisks) {
    $Lun = 0
    if ($ManagedDisks) {
        $Disks = Get-AzDisk -ResourceGroupName $RGName | Where-Object -FilterScript { $_.ManagedBy -like "*$VMName" } | Where-Object -FilterScript { $_.Id -notlike $VM.StorageProfile.OsDisk.ManagedDisk.Id }
    }
    else {
        $Disks = $VM.StorageProfile.DataDisks
    }
}

# Create new VM configuration
$NewVmConfig = New-AzVMConfig -VMName $VMName -VMSize $VM.HardwareProfile.VmSize

if ($ManagedDisks) {
    # Add OS disk to new VM configuration
    if ($VM.OsProfile.WindowsConfiguration) {
        $NewVmConfig = Set-AzVMOSDisk -VM $NewVmConfig -ManagedDiskId $VM.StorageProfile.OsDisk.ManagedDisk.Id -CreateOption "Attach" -Windows
    }
    else {
        $NewVmConfig = Set-AzVMOSDisk -VM $NewVmConfig -ManagedDiskId $VM.StorageProfile.OsDisk.ManagedDisk.Id -CreateOption "Attach" -Linux
    }
    # Add data disk(s) to new VM configuration
    foreach ($Disk in $Disks) {
        $NewVmConfig = Add-AzVMDataDisk -VM $NewVmConfig -ManagedDiskId $Disk.Id -CreateOption "Attach" -Lun $Lun -DiskSizeInGB $Disk.DiskSizeGB
        $Lun++
    }
}
else {
    # Add OS disk to new VM configuration
    if ($VM.OsProfile.WindowsConfiguration) {
        $NewVmConfig = Set-AzVMOSDisk -VM $NewVmConfig -VhdUri $VM.StorageProfile.OsDisk.Vhd.Uri -CreateOption Attach -Name $VM.StorageProfile.OsDisk.Name -Windows
    }
    else {
        $NewVmConfig = Set-AzVMOSDisk -VM $NewVmConfig -VhdUri $VM.StorageProfile.OsDisk.Vhd.Uri -CreateOption Attach -Name $VM.StorageProfile.OsDisk.Name -Linux
    }
    # Add data disk(s) to new VM configuration
    foreach ($Disk in $Disks) {
        $NewVmConfig = Add-AzVMDataDisk -VM $NewVmConfig -Name $Disk.Name -CreateOption "Attach" -Lun $Lun -DiskSizeInGB $Disk.DiskSizeGB
        $Lun++
    }
}

# Add new NIC to new VM configuration
$NewVmConfig = Add-AzVMNetworkInterface -VM $NewVmConfig -NetworkInterface $NewNic

# Remove the old VM
Write-Output -InputObject "Removing old virtual machine"
Remove-AzVM -Name $VMName -ResourceGroupName $RGName -Force

# Create the new VM from the new VM configuration
Write-Output -InputObject "Creating new virtual machine"
New-AzVM -VM $NewVmConfig -ResourceGroupName $NewVNet.ResourceGroupName -Location $NewVNet.Location
Get-AzVM -ResourceGroupName $RGName -Name $VMName
Write-Output -InputObject "The virtual machine has been created successfully"
</code></pre>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
