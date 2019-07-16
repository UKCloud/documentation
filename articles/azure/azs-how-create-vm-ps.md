---
title: How to create a virtual machine using PowerShell | UKCloud Ltd
description: Provides help for creating a virtual machine on UKCloud for Microsoft Azure using PowerShell
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 09/07/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine - PowerShell
toc_fullpath: Users/How To/Create a Virtual Machine/azs-how-create-vm-ps.md
toc_mdlink: azs-how-create-vm-ps.md
---

# How to create a virtual machine using PowerShell

## Overview

With UKCloud for Microsoft Azure, you can leverage the power of Microsoft Azure to create virtual machines (VMs) for your on-premises applications.
As UKCloud for Microsoft Azure is built on UKCloud’s assured, UK-sovereign multi-cloud platform, those applications can work alongside other cloud platforms, such as Oracle,
VMware and OpenStack, and benefit from native connectivity to non-cloud workloads in Crown Hosting and government community networks, including PSN, HSCN and RLI.
Before creating the virtual machine, it is necessary to create storage and networking resources for the the VM to use.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Creating a virtual machine

### Declare variables

Enter details below to provide values for the variables in the following script in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack                 | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group to be created                           | <form oninput="result.value=resourcegroup.value;result2.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$SAName        | Name of the storage account to be created                          | <form oninput="result.value=saname.value;result2.value=saname.value" id="saname" style="display: inline;"><input type="text" id="saname" name="saname" style="display: inline;" placeholder="MyStorageAccount"/></form> |
| \$SubnetName    | Name of the subnet to be created                                   | <form oninput="result.value=subnetname.value;result2.value=subnetname.value" id="subnetname" style="display: inline;"><input type="text" id="subnetname" name="subnetname" style="display: inline;" placeholder="MySubnet"/></form> |
| \$SubnetRange   | Address range of the subnet to be createdin CIDR notation          | <form oninput="result.value=subaddrrange.value;result2.value=subaddrrange.value" id="subaddrrange" style="display: inline;"><input type="text" id="subaddrrange" name="subaddrrange" style="display: inline;" placeholder="192.168.1.0/24"/></form> |
| \$VNetName      | Name of the virtual network to be created                          | <form oninput="result.value=vnetname.value;result2.value=vnetname.value" id="vnetname" style="display: inline;"><input type="text" id="vnetname" name="vnetname" style="display: inline;" placeholder="MyVNetwork"/></form> |
| \$VNetRange     | Address range of the virtual network to be createdin CIDR notation | <form oninput="result.value=vnetaddrrange.value;result2.value=vnetaddrrange.value" id="vnetaddrrange" style="display: inline;"><input type="text" id="vnetaddrrange" name="vnetaddrrange" style="display: inline;" placeholder="192.168.0.0/16"/></form> |
| \$PublicIPName  | Name of the public IP to be created                                | <form oninput="result.value=publicipname.value;result2.value=publicipname.value" id="publicipname" style="display: inline;"><input type="text" id="publicipname" name="publicipname" style="display: inline;" placeholder="MyPublicIP"/></form> |
| \$NSGName       | Name of the network security group to be created                   | <form oninput="result.value=nsgname.value;result2.value=nsgname.value" id="nsgname" style="display: inline;"><input type="text" id="nsgname" name="nsgname" style="display: inline;" placeholder="MyNSG"/></form> |
| \$NICName       | Name of the network interface controller to be created             | <form oninput="result.value=nicname.value;result2.value=nicname.value" id="nicname" style="display: inline;"><input type="text" id="nicname" name="nicname" style="display: inline;" placeholder="MyNIC"/></form> |
| \$Username      | Username of the VM to be created                                   | <form oninput="result.value=vmusername.value;result2.value=vmusername.value" id="vmusername" style="display: inline;"><input type="text" id="vmusername" name="vmusername" style="display: inline;" placeholder="MyUser"/></form> |
| \$Password      | Password of the VM to be created                                   | <form oninput="result.value=vmpassword.value;result2.value=vmpassword.value" id="vmpassword" style="display: inline;"><input type="text" id="vmpassword" name="vmpassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$ComputerName  | Computer name of the VM to be created                              | <form oninput="result.value=compname.value;result2.value=compname.value" id="compname" style="display: inline;"><input type="text" id="compname" name="compname" style="display: inline;" placeholder="MyComputer"/></form> |
| \$VMName        | Name of the virtual machine to be created                          | <form oninput="result.value=vmname.value;result2.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$VMSize        | Size of the virtual machine to be created [(More info)](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-vm-sizes) | <form onchange="result.value=vmsize.value;result2.value=vmsize.value" id="vmsize" style="display: inline;" ><select name="vmsize" id="vmsize" style="display: inline;"><optgroup label="Basic A"><option value="Basic_A0">Basic A0</option><option value="Basic_A1">Basic A1</option><option value="Basic_A2">Basic A2</option><option value="Basic_A3">Basic A3</option><option value="Basic_A4">Basic A4</option></optgroup><optgroup label="Standard A"><option value="Standard_A0">Standard A0</option><option value="Standard_A1">Standard A1</option><option value="Standard_A2">Standard A2</option><option value="Standard_A3">Standard A3</option><option value="Standard_A4">Standard A4</option><option value="Standard_A5">Standard A5</option><option value="Standard_A6">Standard A6</option><option value="Standard_A7">Standard A7</option></optgroup><optgroup label="Av2-Series"><option value="Standard_A1_v2">Standard A1 v2</option><option value="Standard_A2_v2">Standard A2 v2</option><option value="Standard_A4_v2">Standard A4 v2</option><option value="Standard_A8_v2">Standard A8 v2</option><option value="Standard_A2m_v2">Standard A2m v2</option><option value="Standard_A4m_v2">Standard A4m v2</option><option value="Standard_A8m_v2">Standard A8m v2</option></optgroup><optgroup label="D-Series"><option value="Standard_D1">Standard D1</option><option value="Standard_D2">Standard D2</option><option value="Standard_D3">Standard D3</option><option value="Standard_D4">Standard D4</option><option value="Standard_D11">Standard D11</option><option value="Standard_D12">Standard D12</option><option value="Standard_D13">Standard D13</option><option value="Standard_D14">Standard D14</option></optgroup><optgroup label="Dv2-Series"><option value="Standard_D1_v2">Standard D1 v2</option><option value="Standard_D2_v2">Standard D2 v2</option><option value="Standard_D3_v2">Standard D3 v2</option><option value="Standard_D4_v2">Standard D4 v2</option><option value="Standard_D5_v2">Standard D5 v2</option><option value="Standard_D11_v2">Standard D11 v2</option><option value="Standard_D12_v2">Standard D12 v2</option><option value="Standard_D13_v2">Standard D13 v2</option><option value="Standard_D14_v2">Standard D14 v2</option></optgroup><optgroup label="DS-Series"><option value="Standard_DS1">Standard DS1</option><option value="Standard_DS2">Standard DS2</option><option value="Standard_DS3">Standard DS3</option><option value="Standard_DS4">Standard DS4</option><option value="Standard_DS11">Standard DS11</option><option value="Standard_DS12">Standard DS12</option><option value="Standard_DS13">Standard DS13</option><option value="Standard_DS14">Standard DS14</option></optgroup><optgroup label="DSv2-Series"><option value="Standard_DS1_v2">Standard DS1 v2</option><option value="Standard_DS2_v2">Standard DS2 v2</option><option value="Standard_DS3_v2">Standard DS3 v2</option><option value="Standard_DS4_v2">Standard DS4 v2</option><option value="Standard_DS5_v2">Standard DS5 v2</option><option value="Standard_DS11_v2">Standard DS11 v2</option><option value="Standard_DS12_v2">Standard DS12 v2</option><option value="Standard_DS13_v2">Standard DS13 v2</option><option value="Standard_DS14_v2">Standard DS14 v2</option></optgroup><optgroup label="F-Series"><option value="Standard_F1">Standard F1</option><option value="Standard_F2">Standard F2</option><option value="Standard_F4">Standard F4</option><option value="Standard_F8">Standard F8</option><option value="Standard_F16">Standard F16</option></optgroup><optgroup label="Fs-Series"><option value="Standard_F1s">Standard F1s</option><option value="Standard_F2s">Standard F2s</option><option value="Standard_F4s">Standard F4s</option><option value="Standard_F8s">Standard F8s</option><option value="Standard_F16s">Standard F16s</option></optgroup><optgroup label="Fsv2-Series"><option value="Standard_F2s_v2">Standard F2s v2</option><option value="Standard_F4s_v2">Standard F4s v2</option><option value="Standard_F8s_v2">Standard F8s v2</option><option value="Standard_F16s_v2">Standard F16s v2</option><option value="Standard_F32s_v2">Standard F32s v2</option><option value="Standard_F64s_v2">Standard F64s v2</option></optgroup></select></form> |
| VMType (switch) | The type of virtual machine to be created (Linux or Windows)       | <form onchange="result.value=vmtype.value;result2.value=vmtype.value;result3.value=vmtype.value;result4.value=vmtype.value" id="vmtype" style="display: inline;"><select name="vmtype" id="vmtype" style="display: inline;"><option value="-Linux">Linux</option><option value="-Windows">Windows</option></select></form> |
| \$VMImage       | The image template to deploy the virtual machine from              | <form onchange="result.value=vmimage.value;result2.value=vmimage.value" id="vmimage" style="display: inline;"><select name="vmimage" id="vmimage" style="display: inline;"><option value="/CentOS/Skus/6.10">CentOS-based 6.10</option><option value="/CentOS/Skus/6.9">CentOS-based 6.9</option><option value="/CentOS/Skus/7.3">CentOS-based 7.3</option><option value="/CentOS/Skus/7.5">CentOS-based 7.5</option><option value="/UbuntuServer/Skus/14.04.5-LTS">Ubuntu Server 14.04 LTS</option><option value="/UbuntuServer/Skus/16.04-LTS">Ubuntu Server 16.04 LTS</option><option value="/UbuntuServer/Skus/18.04-LTS">Ubuntu Server 18.04 LTS</option><option value="/WindowsServerSemiAnnual/Skus/Datacenter-Core-1709-with-Containers-smalldisk">Windows Server, version 1709 with Containers - Pay as you use</option><option value="/SQL2016SP1-WS2016/Skus/SQLDEV">Free License: SQL Server 2016 SP1 Developer on Windows Server 2016</option><option value="/SQL2016SP2-WS2016/Skus/SQLDEV">Free License: SQL Server 2016 SP2 Developer on Windows Server 2016</option><option value="/SQL2016SP2-WS2016/Skus/Express">Free License: SQL Server 2016 SP2 Express on Windows Server 2016</option><option value="/SQL2017-SLES12SP2/Skus/SQLDEV">Free SQL Server License: SQL Server 2017 Developer on SLES 12 SP2</option><option value="/SQL2017-WS2016/Skus/SQLDEV">Free SQL Server License: SQL Server 2017 Developer on Windows Server 2016</option><option value="/SQL2017-SLES12SP2/Skus/Express">Free SQL Server License: SQL Server 2017 Express on SLES 12 SP2</option><option value="/SQL2017-WS2016/Skus/Express">Free SQL Server License: SQL Server 2017 Express on Windows Server 2016</option><option value="/SQL2016SP1-WS2016/Skus/Enterprise">SQL Server 2016 SP1 Enterprise on Windows Server 2016</option><option value="/SQL2016SP1-WS2016/Skus/Standard">SQL Server 2016 SP1 Standard on Windows Server 2016</option><option value="/SQL2016SP2-WS2016/Skus/Enterprise">SQL Server 2016 SP2 Enterprise on Windows Server 2016</option><option value="/SQL2016SP2-WS2016/Skus/Standard">SQL Server 2016 SP2 Standard on Windows Server 2016</option><option value="/SQL2017-SLES12SP2/Skus/Enterprise">SQL Server 2017 Enterprise on SLES 12 SP2</option><option value="/SQL2017-WS2016/Skus/Enterprise">SQL Server 2017 Enterprise Windows Server 2016</option><option value="/SQL2017-SLES12SP2/Skus/Standard">SQL Server 2017 Standard on SLES 12 SP2</option><option value="/SQL2017-WS2016/Skus/Standard">SQL Server 2017 Standard on Windows Server 2016</option><option value="/WindowsServer/Skus/2012-Datacenter">Windows Server 2012 Datacenter - Pay as you use</option><option value="/WindowsServer/Skus/2012-R2-Datacenter">Windows Server 2012 R2 Datacenter - Pay as you use</option><option value="/WindowsServer/Skus/2016-Datacenter">Windows Server 2016 Datacenter - Pay-as-you-use</option><option value="/WindowsServer/Skus/2016-Datacenter-Server-Core">Windows Server 2016 Datacenter - Server Core - Pay as you use</option><option value="/WindowsServer/Skus/2016-Datacenter-with-Containers">Windows Server 2016 Datacenter - with Containers - Pay as you use</option><option value="/WindowsServer/Skus/2019-Datacenter">Windows Server 2019 Datacenter</option><option value="/WindowsServer/Skus/2019-Datacenter-with-Containers">Windows Server 2019 Datacenter with Containers</option><option value="/WindowsServer/Skus/2019-Datacenter-Core">Windows Server 2019 Datacenter Core</option><option value="/WindowsServer/Skus/2019-Datacenter-Core-with-Containers">Windows Server 2019 Datacenter Core with Containers</option></select></form> |

### Deploy the virtual machine

From your PowerShell window:

# [Unmanaged Disk](#tab/tabid-1)

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input Variables
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$SAName = "<output form="saname" name="result" style="display: inline;">MyStorageAccount<span id="RandNum"></span></output>".ToLower()
$SubnetName = "<output form="subnetname" name="result" style="display: inline;">MySubnet</output>"
$SubnetRange = "<output form="subaddrrange" name="result" style="display: inline;">192.168.1.0/24</output>"
$VNetName = "<output form="vnetname" name="result" style="display: inline;">MyVNetwork</output>"
$VNetRange = "<output form="vnetaddrrange" name="result" style="display: inline;">192.168.0.0/16</output>"
$PublicIPName = "<output form="publicipname" name="result" style="display: inline;">MyPublicIP</output>"
$NSGName = "<output form="nsgname" name="result" style="display: inline;">MyNSG</output>"
$NICName = "<output form="nicname" name="result" style="display: inline;">MyNIC</output>"
$ComputerName = "<output form="compname" name="result" style="display: inline;">MyComputer</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$VMSize = "<output form="vmsize" name="result" style="display: inline;">Basic_A0</output>"
$VMImage = "*<output form="vmimage" name="result" style="display: inline;">/CentOS/Skus/6.10</output>"

# Create a new resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $RGName -Location $Location

## Create storage resources

# Create a new storage account
Write-Output -InputObject "Creating storage account"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $SAName

## Create network resources

# Create a subnet configuration
Write-Output -InputObject "Creating virtual network"
$SubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name $SubnetName -AddressPrefix $SubnetRange

# Create a virtual network
$VirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $RGName -Location $Location -Name $VNetName -AddressPrefix $VNetRange -Subnet $SubnetConfig

# Create a public IP address
Write-Output -InputObject "Creating public IP address"
$PublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $RGName -Location $Location -AllocationMethod "Dynamic" -Name $PublicIPName

# Create network security group rule (SSH or RDP)
Write-Output -InputObject "Creating SSH/RDP network security rule"
$SecurityGroupRule = switch ("<output form="vmtype" name="result" style="display: inline;">-Linux</output>") {
    "-Linux" { New-AzureRmNetworkSecurityRuleConfig -Name "SSH-Rule" -Description "Allow SSH" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 22 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
    "-Windows" { New-AzureRmNetworkSecurityRuleConfig -Name "RDP-Rule" -Description "Allow RDP" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 3389 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
}

# Create a network security group
Write-Output -InputObject "Creating network security group"
$NetworkSG = New-AzureRmNetworkSecurityGroup -ResourceGroupName $RGName -Location $Location -Name $NSGName -SecurityRules $SecurityGroupRule

# Create a virtual network card and associate it with the public IP address and NSG
Write-Output -InputObject "Creating network interface card"
$NetworkInterface = New-AzureRmNetworkInterface -Name $NICName -ResourceGroupName $RGName -Location $Location -SubnetId $VirtualNetwork.Subnets[0].Id -PublicIpAddressId $PublicIP.Id -NetworkSecurityGroupId $NetworkSG.Id

## Create the virtual machine

# Define a credential object to store the username and password for the virtual machine
$Username = "<output form="vmusername" name="result" style="display: inline;">MyUser</output>"
$Password = '<output form="vmpassword" name="result" style="display: inline;">Password123!</output>' | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object -TypeName PSCredential -ArgumentList ($Username, $Password)

# Create the virtual machine configuration object
$VirtualMachine = New-AzureRmVMConfig -VMName $VMName -VMSize $VMSize

# Set the VM Size and Type
$VirtualMachine = Set-AzureRmVMOperatingSystem -VM $VirtualMachine <output form="vmtype" name="result2" style="display: inline;">-Linux</output> -ComputerName $ComputerName -Credential $Credential

# Get the VM Source Image
$Image = Get-AzureRmVMImagePublisher -Location $Location | Get-AzureRmVMImageOffer | Get-AzureRmVMImageSku | Where-Object -FilterScript { $_.Id -like $VMImage }

# Set the VM Source Image
$VirtualMachine = Set-AzureRmVMSourceImage -VM $VirtualMachine -PublisherName $Image.PublisherName -Offer $Image.Offer -Skus $Image.Skus -Version "latest"

# Add Network Interface Card
$VirtualMachine = Add-AzureRmVMNetworkInterface -Id $NetworkInterface.Id -VM $VirtualMachine

# Set the OS Disk properties
$OSDiskName = "OsDisk"
$OSDiskUri = "{0}vhds/{1}-{2}.vhd" -f $StorageAccount.PrimaryEndpoints.Blob.ToString(), $VMName.ToLower(), $OSDiskName

# Applies the OS disk properties
$VirtualMachine = Set-AzureRmVMOSDisk -VM $VirtualMachine -Name $OSDiskName -VhdUri $OSDiskUri -CreateOption "FromImage"

# Create the virtual machine.
Write-Output -InputObject "Creating virtual machine"
$NewVM = New-AzureRmVM -ResourceGroupName $RGName -Location $Location -VM $VirtualMachine
$NewVM
Write-Output -InputObject "Virtual machine created successfully"
</code></pre>

# [Managed Disk](#tab/tabid-2)

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input Variables
$RGName = "<output form="resourcegroup" name="result2" style="display: inline;">MyResourceGroup</output>"
$SAName = "<output form="saname" name="result2" style="display: inline;">MyStorageAccount<span id="RandNum2"></span></output>".ToLower()
$SubnetName = "<output form="subnetname" name="result2" style="display: inline;">MySubnet</output>"
$SubnetRange = "<output form="subaddrrange" name="result2" style="display: inline;">192.168.1.0/24</output>"
$VNetName = "<output form="vnetname" name="result2" style="display: inline;">MyVNetwork</output>"
$VNetRange = "<output form="vnetaddrrange" name="result2" style="display: inline;">192.168.0.0/16</output>"
$PublicIPName = "<output form="publicipname" name="result2" style="display: inline;">MyPublicIP</output>"
$NSGName = "<output form="nsgname" name="result2" style="display: inline;">MyNSG</output>"
$NICName = "<output form="nicname" name="result2" style="display: inline;">MyNIC</output>"
$ComputerName = "<output form="compname" name="result2" style="display: inline;">MyComputer</output>"
$VMName = "<output form="vmname" name="result2" style="display: inline;">MyVM</output>"
$VMSize = "<output form="vmsize" name="result2" style="display: inline;">Basic_A0</output>"
$VMImage = "*<output form="vmimage" name="result2" style="display: inline;">/CentOS/Skus/6.10</output>"

# Create a new resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $RGName -Location $Location

## Create storage resources

# Create a new storage account
Write-Output -InputObject "Creating storage account"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $SAName

## Create network resources

# Create a subnet configuration
Write-Output -InputObject "Creating virtual network"
$SubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name $SubnetName -AddressPrefix $SubnetRange

# Create a virtual network
$VirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $RGName -Location $Location -Name $VNetName -AddressPrefix $VNetRange -Subnet $SubnetConfig

# Create a public IP address
Write-Output -InputObject "Creating public IP address"
$PublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $RGName -Location $Location -AllocationMethod "Dynamic" -Name $PublicIPName

# Create network security group rule (SSH or RDP)
Write-Output -InputObject "Creating SSH/RDP network security rule"
$SecurityGroupRule = switch ("<output form="vmtype" name="result3" style="display: inline;">-Linux</output>") {
    "-Linux" { New-AzureRmNetworkSecurityRuleConfig -Name "SSH-Rule" -Description "Allow SSH" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 22 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
    "-Windows" { New-AzureRmNetworkSecurityRuleConfig -Name "RDP-Rule" -Description "Allow RDP" -Access "Allow" -Protocol "TCP" -Direction "Inbound" -Priority 100 -DestinationPortRange 3389 -SourceAddressPrefix "*" -SourcePortRange "*" -DestinationAddressPrefix "*" }
}

# Create a network security group
Write-Output -InputObject "Creating network security group"
$NetworkSG = New-AzureRmNetworkSecurityGroup -ResourceGroupName $RGName -Location $Location -Name $NSGName -SecurityRules $SecurityGroupRule

# Create a virtual network card and associate it with the public IP address and NSG
Write-Output -InputObject "Creating network interface card"
$NetworkInterface = New-AzureRmNetworkInterface -Name $NICName -ResourceGroupName $RGName -Location $Location -SubnetId $VirtualNetwork.Subnets[0].Id -PublicIpAddressId $PublicIP.Id -NetworkSecurityGroupId $NetworkSG.Id

## Create the virtual machine

# Define a credential object to store the username and password for the virtual machine
$Username = "<output form="vmusername" name="result2" style="display: inline;">MyUser</output>"
$Password = '<output form="vmpassword" name="result2" style="display: inline;">Password123!</output>' | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object -TypeName PSCredential -ArgumentList ($Username, $Password)

# Create the virtual machine configuration object
$VirtualMachine = New-AzureRmVMConfig -VMName $VMName -VMSize $VMSize

# Set the VM Size and Type
$VirtualMachine = Set-AzureRmVMOperatingSystem -VM $VirtualMachine <output form="vmtype" name="result4" style="display: inline;">-Linux</output> -ComputerName $ComputerName -Credential $Credential

# Get the VM Source Image
$Image = Get-AzureRmVMImagePublisher -Location $Location | Get-AzureRmVMImageOffer | Get-AzureRmVMImageSku | Where-Object -FilterScript { $_.Id -like $VMImage }

# Set the VM Source Image
$VirtualMachine = Set-AzureRmVMSourceImage -VM $VirtualMachine -PublisherName $Image.PublisherName -Offer $Image.Offer -Skus $Image.Skus -Version "latest"

# Add Network Interface Card
$VirtualMachine = Add-AzureRmVMNetworkInterface -Id $NetworkInterface.Id -VM $VirtualMachine

# Applies the OS disk properties
$VirtualMachine = Set-AzureRmVMOSDisk -VM $VirtualMachine -CreateOption "FromImage"

# Enable boot diagnostics.
$VirtualMachine = Set-AzureRmVMBootDiagnostics -VM $VirtualMachine -Enable -StorageAccountName $SAName -ResourceGroupName $RGName

# Create the virtual machine.
Write-Output -InputObject "Creating virtual machine"
$NewVM = New-AzureRmVM -ResourceGroupName $RGName -Location $Location -VM $VirtualMachine
$NewVM
Write-Output -InputObject "Virtual machine created successfully"
</code></pre>

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.

<script>document.getElementById("RandNum").innerHTML = Math.round(Math.random()*100000000)</script>
<script>document.getElementById("RandNum2").innerHTML = Math.round(Math.random()*100000000)</script>
