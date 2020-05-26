---
title: How to create a virtual machine from a disk snapshot using PowerShell
description: Provides help for creating a virtual machine from a managed disk snapshot on UKCloud for Microsoft Azure using PowerShell
services: azure-stack
author: William Turner
reviewer: William Turner
lastreviewed: 06/05/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine from a disk snapshot
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine from a disk snapshot - PowerShell
toc_fullpath: Users/How To/Create a Virtual Machine from disk snapshot/azs-how-create-vm-from-snapshot-ps.md
toc_mdlink: azs-how-create-vm-from-snapshot-ps.md
---

# How to create a virtual machine from a disk snapshot using PowerShell

## Overview

This article shows you how to use PowerShell to take a snapshot of a managed disk which is attached to a virtual machine, then use the snapshot to create a new managed disk and attach it to a new virtual machine from the new disk.

### Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md).

### Declare variables

Enter details below to provide values for the variables in the following scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint   | The Azure Resource Manager endpoint for Azure Stack Hub            | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group containing the existing VM              | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the existing virtual machine                               | <form oninput="result.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$SSName        | Name of the snapshot to be created                                 | <form oninput="result.value=ssname.value" id="ssname" style="display: inline;"><input type="text" id="ssname" name="ssname" style="display: inline;" placeholder="MySnapshot"/></form> |
| \$NewVMName        | Name of the new virtual machine to be created                   | <form oninput="result.value=newvmname.value" id="newvmname" style="display: inline;"><input type="text" id="newvmname" name="newvmname" style="display: inline;" placeholder="NewVM"/></form> |
| \$NewRGName     | Name of the resource group to be created                           | <form oninput="result.value=newresourcegroup.value" id="newresourcegroup" style="display: inline;"><input type="text" id="newresourcegroup" name="newresourcegroup" style="display: inline;" placeholder="NewResourceGroup"/></form> |
| \$NewDiskName     | Name of the disk to be created                                   | <form oninput="result.value=newdisk.value" id="newdisk" style="display: inline;"><input type="text" id="newdisk" name="newdisk" style="display: inline;" placeholder="NewDisk"/></form> |
| \$SAName        | Name of the storage account to be created                          | <form oninput="result.value=saname.value" id="saname" style="display: inline;"><input type="text" id="saname" name="saname" style="display: inline;" placeholder="MyStorageAccount"/></form> |
| \$SubnetName    | Name of the subnet to be created                                   | <form oninput="result.value=subnetname.value" id="subnetname" style="display: inline;"><input type="text" id="subnetname" name="subnetname" style="display: inline;" placeholder="MySubnet"/></form> |
| \$SubnetRange   | Address range of the subnet to be created in CIDR notation         | <form oninput="result.value=subaddrrange.value" id="subaddrrange" style="display: inline;"><input type="text" id="subaddrrange" name="subaddrrange" style="display: inline;" placeholder="192.168.1.0/24"/></form> |
| \$VNetName      | Name of the virtual network to be created                          | <form oninput="result.value=vnetname.value" id="vnetname" style="display: inline;"><input type="text" id="vnetname" name="vnetname" style="display: inline;" placeholder="MyVNetwork"/></form> |
| \$VNetRange     | Address range of the virtual network to be created in CIDR notation| <form oninput="result.value=vnetaddrrange.value" id="vnetaddrrange" style="display: inline;"><input type="text" id="vnetaddrrange" name="vnetaddrrange" style="display: inline;" placeholder="192.168.0.0/16"/></form> |
| \$PublicIPName  | Name of the public IP to be created                                | <form oninput="result.value=publicipname.value" id="publicipname" style="display: inline;"><input type="text" id="publicipname" name="publicipname" style="display: inline;" placeholder="MyPublicIP"/></form> |
| \$NSGName       | Name of the network security group to be created                   | <form oninput="result.value=nsgname.value" id="nsgname" style="display: inline;"><input type="text" id="nsgname" name="nsgname" style="display: inline;" placeholder="MyNSG"/></form> |
| \$NICName       | Name of the network interface controller to be created             | <form oninput="result.value=nicname.value" id="nicname" style="display: inline;"><input type="text" id="nicname" name="nicname" style="display: inline;" placeholder="MyNIC"/></form> |
| \$VMSize        | Size of the new virtual machine to be created [(More info)](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-vm-sizes) | <form onchange="result.value=vmsize.value" id="vmsize" style="display: inline;" ><select name="vmsize" id="vmsize" style="display: inline;"><optgroup label="Basic A"><option value="Basic_A0">Basic A0</option><option value="Basic_A1">Basic A1</option><option value="Basic_A2">Basic A2</option><option value="Basic_A3">Basic A3</option><option value="Basic_A4">Basic A4</option></optgroup><optgroup label="Standard A"><option value="Standard_A0">Standard A0</option><option value="Standard_A1">Standard A1</option><option value="Standard_A2">Standard A2</option><option value="Standard_A3">Standard A3</option><option value="Standard_A4">Standard A4</option><option value="Standard_A5">Standard A5</option><option value="Standard_A6">Standard A6</option><option value="Standard_A7">Standard A7</option></optgroup><optgroup label="Av2-Series"><option value="Standard_A1_v2">Standard A1 v2</option><option value="Standard_A2_v2">Standard A2 v2</option><option value="Standard_A4_v2">Standard A4 v2</option><option value="Standard_A8_v2">Standard A8 v2</option><option value="Standard_A2m_v2">Standard A2m v2</option><option value="Standard_A4m_v2">Standard A4m v2</option><option value="Standard_A8m_v2">Standard A8m v2</option></optgroup><optgroup label="D-Series"><option value="Standard_D1">Standard D1</option><option value="Standard_D2">Standard D2</option><option value="Standard_D3">Standard D3</option><option value="Standard_D4">Standard D4</option><option value="Standard_D11">Standard D11</option><option value="Standard_D12">Standard D12</option><option value="Standard_D13">Standard D13</option><option value="Standard_D14">Standard D14</option></optgroup><optgroup label="Dv2-Series"><option value="Standard_D1_v2">Standard D1 v2</option><option value="Standard_D2_v2">Standard D2 v2</option><option value="Standard_D3_v2">Standard D3 v2</option><option value="Standard_D4_v2">Standard D4 v2</option><option value="Standard_D5_v2">Standard D5 v2</option><option value="Standard_D11_v2">Standard D11 v2</option><option value="Standard_D12_v2">Standard D12 v2</option><option value="Standard_D13_v2">Standard D13 v2</option><option value="Standard_D14_v2">Standard D14 v2</option></optgroup><optgroup label="DS-Series"><option value="Standard_DS1">Standard DS1</option><option value="Standard_DS2">Standard DS2</option><option value="Standard_DS3">Standard DS3</option><option value="Standard_DS4">Standard DS4</option><option value="Standard_DS11">Standard DS11</option><option value="Standard_DS12">Standard DS12</option><option value="Standard_DS13">Standard DS13</option><option value="Standard_DS14">Standard DS14</option></optgroup><optgroup label="DSv2-Series"><option value="Standard_DS1_v2" selected>Standard DS1 v2</option><option value="Standard_DS2_v2">Standard DS2 v2</option><option value="Standard_DS3_v2">Standard DS3 v2</option><option value="Standard_DS4_v2">Standard DS4 v2</option><option value="Standard_DS5_v2">Standard DS5 v2</option><option value="Standard_DS11_v2">Standard DS11 v2</option><option value="Standard_DS12_v2">Standard DS12 v2</option><option value="Standard_DS13_v2">Standard DS13 v2</option><option value="Standard_DS14_v2">Standard DS14 v2</option></optgroup><optgroup label="F-Series"><option value="Standard_F1">Standard F1</option><option value="Standard_F2">Standard F2</option><option value="Standard_F4">Standard F4</option><option value="Standard_F8">Standard F8</option><option value="Standard_F16">Standard F16</option></optgroup><optgroup label="Fs-Series"><option value="Standard_F1s">Standard F1s</option><option value="Standard_F2s">Standard F2s</option><option value="Standard_F4s">Standard F4s</option><option value="Standard_F8s">Standard F8s</option><option value="Standard_F16s">Standard F16s</option></optgroup><optgroup label="Fsv2-Series"><option value="Standard_F2s_v2">Standard F2s v2</option><option value="Standard_F4s_v2">Standard F4s v2</option><option value="Standard_F8s_v2">Standard F8s v2</option><option value="Standard_F16s_v2">Standard F16s v2</option><option value="Standard_F32s_v2">Standard F32s v2</option><option value="Standard_F64s_v2">Standard F64s v2</option></optgroup></select></form> |
| VMType (switch) | The type of virtual machine (Linux or Windows). Note that the new VM will be the same type as the existing VM. | <form onchange="result.value=vmtype.value;result2.value=vmtype.value;result3.value=vmtype.value" id="vmtype" style="display: inline;"><select name="vmtype" id="vmtype" style="display: inline;"><option value="-Linux">Linux</option><option value="-Windows">Windows</option></select></form> |

## Creating a snapshot from a disk

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
$SSName = "<output form="ssname" name="result" style="display: inline;">MySnapshot</output>"

# Set the VM object
$VM = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

# Set the Disk object
$Disk = Get-AzureRmDisk -ResourceGroupName $RGName -DiskName $VM.StorageProfile.OsDisk.Name

# Create the snapshot configuration
Write-Output -InputObject "Creating snapshot"
$SnapshotConfig = switch ("<output form="vmtype" name="result" style="display: inline;">-Linux</output>") {
    "-Linux" { New-AzureRmSnapshotConfig -SourceUri $Disk.Id -OsType "Linux" -CreateOption "Copy" -Location $Location }
    "-Windows" { New-AzureRmSnapshotConfig -SourceUri $Disk.Id -OsType "Windows" -CreateOption "Copy" -Location $Location }
}

# Take the snapshot
$Snapshot = New-AzureRmSnapshot -Snapshot $SnapshotConfig -SnapshotName $SSName -ResourceGroupName $RGName

Write-Output -InputObject "Snapshot created successfully"
</code></pre>

## Creating a new managed disk from a snapshot

<pre><code class="language-PowerShell"># Input Variables
$NewRGName = "<output form="newresourcegroup" name="result" style="display: inline;">NewResourceGroup</output>"
$NewDiskName = "<output form="newdisk" name="result" style="display: inline;">NewDisk</output>"

# Create a new resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $NewRGName -Location $Location

# Create the new disk config
Write-Output -InputObject "Creating new managed disk"
$NewDiskConfig = New-AzureRmDiskConfig -Location $Location -CreateOption "Copy" -SourceResourceId $Snapshot.Id

# Create the new disk
$NewDisk = New-AzureRmDisk -DiskName $NewDiskName -Disk $NewDiskConfig -ResourceGroupName $NewRGName

Write-Output -InputObject "New managed disk created successfully"
</code></pre>

## Creating a virtual machine from a managed disk

<pre><code class="language-PowerShell"># Input Variables
$NewVMName = "<output form="newvmname" name="result" style="display: inline;">NewVM</output>"
$SAName = "<output form="saname" name="result" style="display: inline;">MyStorageAccount<span id="RandNum2"></span></output>".ToLower()
$SubnetName = "<output form="subnetname" name="result" style="display: inline;">MySubnet</output>"
$SubnetRange = "<output form="subaddrrange" name="result" style="display: inline;">192.168.1.0/24</output>"
$VNetName = "<output form="vnetname" name="result" style="display: inline;">MyVNetwork</output>"
$VNetRange = "<output form="vnetaddrrange" name="result" style="display: inline;">192.168.0.0/16</output>"
$PublicIPName = "<output form="publicipname" name="result" style="display: inline;">MyPublicIP</output>"
$NSGName = "<output form="nsgname" name="result" style="display: inline;">MyNSG</output>"
$NICName = "<output form="nicname" name="result" style="display: inline;">MyNIC</output>"
$VMSize = "<output form="vmsize" name="result" style="display: inline;">Standard_DS1_v2</output>"

## Create storage resources

# Create a new storage account
Write-Output -InputObject "Creating storage account"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $NewRGName -Type "Standard_LRS" -Name $SAName

## Create network resources

# Create a subnet configuration
Write-Output -InputObject "Creating virtual network"
$SubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name $SubnetName -AddressPrefix $SubnetRange

# Create a virtual network
$VirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $NewRGName -Location $Location -Name $VNetName -AddressPrefix $VNetRange -Subnet $SubnetConfig

# Create a public IP address
Write-Output -InputObject "Creating public IP address"
$PublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $NewRGName -Location $Location -AllocationMethod "Dynamic" -Name $PublicIPName

# Create network security group rule (SSH or RDP)
Write-Output -InputObject "Creating SSH/RDP network security rule"
$SecurityGroupRule = switch ("<output form="vmtype" name="result2" style="display: inline;">-Linux</output>") {
    "-Linux" { New-AzureRmNetworkSecurityRuleConfig -Name "SSH-Rule" -Description "Allow SSH" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 22 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
    "-Windows" { New-AzureRmNetworkSecurityRuleConfig -Name "RDP-Rule" -Description "Allow RDP" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 3389 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
}

# Create a network security group
Write-Output -InputObject "Creating network security group"
$NetworkSG = New-AzureRmNetworkSecurityGroup -ResourceGroupName $NewRGName -Location $Location -Name $NSGName -SecurityRules $SecurityGroupRule

# Create a virtual network card and associate it with the public IP address and NSG
Write-Output -InputObject "Creating network interface card"
$NetworkInterface = New-AzureRmNetworkInterface -Name $NICName -ResourceGroupName $NewRGName -Location $Location -SubnetId $VirtualNetwork.Subnets[0].Id -PublicIpAddressId $PublicIP.Id -NetworkSecurityGroupId $NetworkSG.Id

## Create the virtual machine

# Define a credential object to store the username and password for the virtual machine
$Username = "<output form="vmusername" name="result" style="display: inline;">MyUser</output>"
$Password = '<output form="vmpassword" name="result" style="display: inline;">Password123!</output>' | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object -TypeName PSCredential -ArgumentList ($Username, $Password)

# Create the virtual machine configuration object
$VirtualMachine = New-AzureRmVMConfig -VMName $NewVMName -VMSize $VMSize

# Enable the provisioning of the VM Agent
if ($VirtualMachine.OSProfile.WindowsConfiguration) {
    $VirtualMachine.OSProfile.WindowsConfiguration.ProvisionVMAgent = $true
}

# Add Network Interface Card
$VirtualMachine = Add-AzureRmVMNetworkInterface -Id $NetworkInterface.Id -VM $VirtualMachine

# Applies the OS disk properties
$VirtualMachine = Set-AzureRmVMOSDisk -VM $VirtualMachine -ManagedDiskId $NewDisk.Id -StorageAccountType "StandardLRS" -CreateOption "Attach" <output form="vmtype" name="result3" style="display: inline;">-Linux</output>

# Enable boot diagnostics
$VirtualMachine = Set-AzureRmVMBootDiagnostics -VM $VirtualMachine -Enable -StorageAccountName $SAName -ResourceGroupName $NewRGName

# Create the virtual machine
Write-Output -InputObject "Creating virtual machine"
$NewVM = New-AzureRmVM -ResourceGroupName $NewRGName -Location $Location -VM $VirtualMachine
$NewVM
Write-Output -InputObject "Virtual machine created successfully"
</code></pre>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
