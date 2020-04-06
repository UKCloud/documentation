---
title: How to create a custom image from a VM on Azure Stack Hub using PowerShell
description: Provides details on how to create a custom image from a VM using Powershell
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed: 06/04/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a custom image from a VM - PowerShell
toc_fullpath: Users/How To/azs-how-create-vm-image-powershell.md
toc_mdlink: azs-how-create-vm-image-powershell.md
---

# How to create a custom image from a VM on Azure Stack Hub using PowerShell

## Overview

You can create an image resource from a generalised virtual machine (VM) that is stored as either a managed disk or an unmanaged disk in a storage account. You can then use the image to create multiple VMs.

This article explains how to create a custom image from a VM on Azure Stack Hub, which you can then use to deploy other VMs.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Generalise your VM

> [!WARNING]
> Once you've generalised a VM, you **cannot** log back into it.

### [Windows](#tab/tabid-a)

1. Log in to your Windows VM using Remote Desktop Protocol (RDP).

2. Open a PowerShell console or command prompt as administrator and run the following command: `C:\Windows\System32\Sysprep\sysprep.exe`

3. In the **System Preparation Tool**, under *System Cleanup Action*, select **Enter System Out-of-Box Experience (OOBE)** from the dropdown menu.

4. Ensure the **Generalise** tick box is selected.

5. Under *Shutdown Options*, select **Shutdown** from the dropdown menu.

    See the image below for an example:

    ![Windows sysprep example](images/azs-windows-sys-prep.png)

6. Click **OK** and wait for the VM to shutdown. Your RDP session will be closed.

    > [!TIP]
    > The generalisation process is complete once your VM is in a stopped state.

### [Linux](#tab/tabid-b)

1. Log in to your Linux VM using Secure Shell (SSH).

2. Run the following command: `sudo su` and enter your user password if prompted.

3. Run the following command: `shutdown && waagent -deprovision+user -force`

4. Wait for the VM to shutdown. Your SSH session will be closed.

    > [!TIP]
    > The generalisation process is complete once your VM is in a stopped state.

***

## Creating the image

> [!WARNING]
> Capturing a VM image will make it unusable and **cannot** be undone.

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack Hub                 | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group                            | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the virtual machine to be created                          | <form oninput="result.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$ImageName    | The name of the new custom image to be created                 | <form oninput="result.value=imagename.value" id="imagename" style="display: inline;"><input type="text" id="imagename" name="imagename" style="display: inline;" placeholder="MyCustomImage"/></form> |
| \$NewVMName        | Name of the new virtual machine to be created                          | <form oninput="result.value=newvmname.value" id="newvmname" style="display: inline;"><input type="text" id="newvmname" name="newvmname" style="display: inline;" placeholder="MyNewVMFromImage"/></form> |
| \$Size        | The size of the new virtual machine to be created                          | <form oninput="result.value=size.value" id="size" style="display: inline;"><input type="text" id="size" name="size" style="display: inline;" placeholder="Standard_DS2_v2"/></form> |
| \$VNetName      | Name of the virtual network to be created                        | <form oninput="result.value=vnetname.value" id="vnetname" style="display: inline;"><input type="text" id="vnetname" name="vnetname" style="display: inline;" placeholder="MyVNetwork"/></form> |
| \$SubnetName    | Name of the subnet                                  | <form oninput="result.value=subnetname.value" id="subnetname" style="display: inline;"><input type="text" id="subnetname" name="subnetname" style="display: inline;" placeholder="MySubnet"/></form> |
| \$NSGName       | Name of the network security group to be created                   | <form oninput="result.value=nsgname.value" id="nsgname" style="display: inline;"><input type="text" id="nsgname" name="nsgname" style="display: inline;" placeholder="MyNSG"/></form> |
| \$PublicIPName  | Name of the public IP to be created                                | <form oninput="result.value=publicipname.value" id="publicipname" style="display: inline;"><input type="text" id="publicipname" name="publicipname" style="display: inline;" placeholder="MyPublicIP"/></form> |
| \$Username      | Username of the VM to be created                                   | <form oninput="result.value=vmusername.value" id="vmusername" style="display: inline;"><input type="text" id="vmusername" name="vmusername" style="display: inline;" placeholder="MyUser"/></form> |
| \$Password      | Password of the VM to be created                                   | <form oninput="result.value=vmpassword.value" id="vmpassword" style="display: inline;"><input type="text" id="vmpassword" name="vmpassword" style="display: inline;" placeholder="Password123!"/></form> |

Run the following PowerShell code:

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzureRmLocation).Location

# Declare variables
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$ImageName = "<output form="imagename" name="result" style="display: inline;">MyCustomImage</output>"

# Get VM details
$VM = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

if ($VM) {
    # Stop the VM
    Write-Output -InputObject "Stopping VM and marking as generalised..."
    Stop-AzureRmVM -Name $VMName -ResourceGroupName $RGName -Force

    # Mark VM as Generalised
    Set-AzureRmVM -Name $VMName -ResourceGroupName $RGName -Generalized
}
else {
    Write-Error -Message "VM with name: $VMName does not exist in resource group: $RGName"
    break
}

# Create VM image
Write-Output -InputObject "Creating image of VM: $VMName"
$ImageConfig = New-AzureRmImageConfig -Location $Location -SourceVirtualMachineId $VM.Id
$Image = New-AzureRmImage -ResourceGroupName $RGName -ImageName $ImageName -Image $ImageConfig

# Declare variables to create a new VM from the image
$NewVMName = "<output form="newvmname" name="result" style="display: inline;">MyNewVMFromImage</output>"
$Size = "<output form="size" name="result" style="display: inline;">Standard_DS2_v2</output>"
$VNetName = "<output form="vnetname" name="result" style="display: inline;">MyVNetwork</output>"
$SubnetName = "<output form="subnetname" name="result" style="display: inline;">MySubnet</output>"
$NSGName = "<output form="nsgname" name="result" style="display: inline;">MyNSG</output>"
$PublicIPName = "<output form="publicipname" name="result" style="display: inline;">MyPublicIP</output>"
$Username = "<output form="vmusername" name="result" style="display: inline;">MyUser</output>"
$Password = "<output form="vmpassword" name="result" style="display: inline;">Password123!</output>" | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object -TypeName PSCredential($Username, $Password)

# Get image to check OS type.
$Image = Get-AzureRmImage | Where-Object -FilterScript { $_.Name -like $ImageName }

# Depending on the OS type, open either an RDP or SSH port and provision correct size.
if ($Image.StorageProfile.OsDisk.OsType -like "Windows") {
    $OpenPorts = 3389
    if (-not $Size) {
        $Size = "Standard_DS2_v2"
    }
}
else {
    $OpenPorts = 22
    if (-not $Size) {
        $Size = "Standard_DS1_v2"
    }
}

# Create new VM from custom image
Write-Output -InputObject "Creating VM from image: $ImageName... (This may take a while)"
New-AzureRmVM -ResourceGroupName $RGName -Location $Location -Name $NewVMName -ImageName $ImageName -Credential $Credential -VirtualNetworkName $VNetName -SubnetName $SubnetName -PublicIpAddressName $PublicIPName -SecurityGroupName $NsgName -OpenPorts $OpenPorts -Size $Size
</code></pre>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
