---
title: How to create an availability set | UKCloud Ltd
description: Creating an availability set in UKCloud for Microsoft Azure
services: azure-stack
author: David Woffendin
toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: Create an availability set
toc_fullpath: Users/How To/azs-how-create-availability-set.md
toc_mdlink: azs-how-create-availability-set.md
---

# Overview

This article shows you how to increase the availability and reliability of your Azure Stack applications using availability sets.

An availability set groups virtual machines (VMs) together so that Azure Stack can control where they are deployed to ensure availability. VMs in the same availability group are deployed across multiple physical nodes within a cluster so that, in the event of a hardware or software failure, only a subset of those VMs are affected and your application can continue to run. If you're building critical applications that must remain available, using availability sets is an important part of ensuring that availability.

For example, if your application has four web server VMs, you can put these in an availability set to ensure that they are deployed across different nodes. If the hardware that one of your web servers is running on experiences a failure, because the other instances are deployed in different nodes, they will remain running and serving your application. You could create a separate availability set for any database-hosting VMs to similarly protect the back end of your application.

## Creating an availability set via the portal

1. When initially creating an availability set, you will need to create the resource group for the availability set.

    ![Microsoft Azure availability set click add resource group button](images/azs-portal-create-availability-set1.png)

2. Name the resource group.

    ![Microsoft Azure availability set fill out resource group settings](images/azs-portal-create-availability-set2.png)

3. When you've created the resource group, navigate into it, select **Overview** then **Create resources**.

    ![Microsoft Azure availability set click create resource button](images/azs-portal-create-availability-set3.png)

4. In the Marketplace, search for and then click **availability set**.

    ![Microsoft Azure availability set choose availability set button](images/azs-portal-create-availability-set4.png)

5. In the **Create availability** set blade, you can set the name of the set and how many fault and update domains you want it to have. For the **Resource group**, select the resource group you created earlier and for **Use managed disks**, select the option that matches the VM disks you'll be adding to the set. When you're done, click **Create** to deploy the availability set.

    ![Microsoft Azure availability set choose availability set settings](images/azs-portal-create-availability-set5.png)

6. When you are creating the VMs you want to be a part of the availability set, when you get to step 3, under **High Availability** select the availability set you want to use. Make sure to set the disk type of the VM first.

    ![Microsoft Azure availability set creating vm in availbility set](images/azs-portal-create-availability-set6.png)

7. Once you've created the VMs, if you navigate to the availability set, in the **Overview** blade, you can see your VMs and the domains they're located on.

    ![Microsoft Azure availability set checking vm fault domains](images/azs-portal-create-availability-set7.png)

## Creating an availability set via PowerShell

The following PowerShell code example will create an empty resource group and then deploy an availability set to it.

```PowerShell
# Input Variables
$Resourcegroup = "myResourceGroupAvailability"
$Availabilityset = "myAvailabilitySet"

# Creates a resource group
New-AzureRmResourceGroup -Name $Resourcegroup -Location 'frn00006'

# Creates an availability set
New-AzureRmAvailabilitySet -Location "frn00006" -Name $Availabilityset -ResourceGroupName $Resourcegroup -Sku classic -PlatformFaultDomainCount 2   -PlatformUpdateDomainCount 2  
```

The following PowerShell code sample is a variation of the script required to create a VM. This code creates the VM and then adds it to the availability set that you created with the previous script.

```PowerShell
## Initialise environment and variables

 # Add environment
Add-AzureRMEnvironment -Name 'AzureStack' -ArmEndpoint 'https://management.frn00006.azure.ukcloud.com'

# Login
Login-AzureRmAccount -EnvironmentName 'AzureStack'

# Input Variables
$RGName = 'myResourceGroupAvailability'
$Availabilityset = 'myAvailabilitySet'
$SAName = 'mystorageaccount'
$Location = 'frn00006'
$SubnetName = 'mysubnet'
$SubnetRange = '192.168.1.0/24'
$VNetName = 'myvnetwork'
$VNetRange = '192.168.0.0/16'
$PublicIPName = 'mypublicip'
$NSGName = 'mynsg'
$NICName = 'mynic'
$VMName = 'myvm'
$VMSize = 'Standard_A2'
$ComputerName = 'mycomputer'
$VMImage = '*/CentOS/Skus/6.10'

## Create storage resources
# Create a new storage account
Write-Host "Creating storage account"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type 'Standard_LRS' -Name $SAName

## Create network resources
# Create a subnet configuration
Write-Host "Creating virtual network"
$SubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name $SubnetName -AddressPrefix $SubnetRange

# Create a virtual network
$VirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $RGName -Location $Location -Name $VNetName -AddressPrefix $VNetRange -Subnet $SubnetConfig

# Create a public IP address
Write-Host "Creating public IP address"
$PublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $RGName -Location $Location -AllocationMethod 'Dynamic' -Name $PublicIPName

# Create a network security group
Write-Host "Creating network security group"
$NetworkSG = New-AzureRmNetworkSecurityGroup -ResourceGroupName $RGName -Location $Location -Name $NSGName

# Create a virtual network card and associate it with the public IP address and NSG
Write-Host "Creating network interface card"
$NetworkInterface = New-AzureRmNetworkInterface -Name $NICName -ResourceGroupName $RGName -Location $Location -SubnetId $VirtualNetwork.Subnets[0].Id -PublicIpAddressId $PublicIP.Id -NetworkSecurityGroupId $NetworkSG.Id

## Create the virtual machine
# Define a credential object to store the username and password for the virtual machine
$UserName = 'myUser'
$Password = 'Password123!' | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object PSCredential($UserName,$Password)

# Create the virtual machine configuration object
$AvailabilityID = (Get-AzureRmAvailabilitySet -ResourceGroupName $RGName -Name $Availabilityset).Id
$VirtualMachine = New-AzureRmVMConfig -VMName $VMName -VMSize $VMSize -AvailabilitySetID $AvailabilityID

# Set the VM Size and Type
$VirtualMachine = Set-AzureRmVMOperatingSystem -VM $VirtualMachine -Linux -ComputerName $ComputerName -Credential $Credential

# Get the VM Source Image
$Image = Get-AzureRMVMImagePublisher -Location $Location | Get-AzureRmVMImageOffer | Get-AzureRmVMImageSku | Where-Object {$_.Id -like $VMImage}

# Set the VM Source Image
$VirtualMachine =  Set-AzureRmVMSourceImage -VM $VirtualMachine -PublisherName $Image.PublisherName -Offer $Image.Offer -Skus $Image.Skus -Version 'latest'

# Add Network Interface Card
$VirtualMachine = Add-AzureRmVMNetworkInterface -Id $NetworkInterface.Id -VM $VirtualMachine

# Set the OS Disk properties
$OSDiskName = "OsDisk"
$OSDiskUri = '{0}vhds/{1}-{2}.vhd' -f $StorageAccount.PrimaryEndpoints.Blob.ToString(), $VMName.ToLower(), $OSDiskName

# Applies the OS disk properties
$VirtualMachine = Set-AzureRmVMOSDisk -VM $VirtualMachine -Name $OSDiskName -VhdUri $OSDiskUri -CreateOption FromImage

# Create the virtual machine.
Write-Host "Creating virtual machine"
$NewVM = New-AzureRmVM -ResourceGroupName $RGName -Location $Location -VM $VirtualMachine
$NewVM
Write-Host "Virtual machine created successfully"
```

## Feedback

 If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [*UKCloud Ideas*](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
