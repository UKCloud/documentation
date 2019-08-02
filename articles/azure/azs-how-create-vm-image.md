---
title: How to create a custom image from a VM on Azure Stack | UKCloud Ltd
description: Provides details on how to create a custom image from a VM
services: 
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a custom image from a VM - Portal - PowerShell
toc_fullpath: Users/How To/azs-how-create-vm-image.md
toc_mdlink: azs-how-create-vm-image.md
---

# How to create a custom image from a VM on Azure Stack

## Overview

An image resource can be created from a generalised virtual machine (VM) that is stored as either a managed disk or an unmanaged disk in a storage account. The image can then be used to create multiple VMs.

This article will explain how to create a custom image from a VM on Azure Stack, which you can then use to deploy other VMs.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the **Azure Stack** portal.

## [1. Generalise your VM](#tab/tabid-1)

> [!WARNING]
> Once a VM has been generalised, you **can not** log back into it.

## [2. Creating the image](#tab/tabid-2)

> [!WARNING]
> Capturing a VM image will make it unusable and cannot be undone.

***

### [Windows](#tab/tabid-a/tabid-1)

1. Log in to your Windows VM.

2. Run the following command: `C:\Windows\System32\Sysprep\sysprep.exe`.

3. In the **System Preparation Tool**, under *System Cleanup Action*, select **Enter System Out-of-Box Experience (OOBE)** from the dropdown menu.

4. Ensure the **Generalise** tick box is selected.

5. Under *Shutdown Options*, select **Shutdown** from the dropdown menu.

    See the image below for an example:

    ![Windows sysprep example](images/azs-windows-sys-prep.png)

6. Select **OK** and wait for the generalisation process to complete.

### [Linux](#tab/tabid-b/tabid-1)

1. Log in to your Linux VM.

2. Run the following command: `sudo su` and enter your sudo password.

3. Run the following command: `shutdown && waagent -deprovision+user -force`

4. Wait for the VM to shutdown. Your session will be closed.

### [Portal](#tab/tabid-c/tabid-2)

1. Log in to the [Azure Stack portal](https://portal.frn00006.azure.ukcloud.com/).

2. Click **Virtual Machines** on the left menu.

3. Click the VM that you want to capture.

4. At the top, click **Capture**.

    ![Capture VM image](images/azs-browser-capture-vm.png)

5. In the *new* blade, provide a **Name** for the new image.

6. Select a **Resource Group** from the dropdown menu or create a new one.

7. Select **Automatically delete this virtual machine after creating the image**.

8. Click **Create**.

    ![Create VM image](images/azs-browser-create-image.png)

9. Wait for the image creation process to finish.

10. Once complete, your VM image should now appear in the resource group your VM was in.

    ![Custom image resource group](images/azs-browser-custom-image-resource-group.png)

11. Click the VM image.

12. In the *new* page, click **Create VM**.

13. Enter a **Name**, **Username**, **Authentication type**, **Password** and **Resource group** for the new VM.

14. Click **OK**.

15. Select a VM size.

16. Click **Select**.

17. In *Configure optional features*, under *Select public inbound ports*, select the ports you wish to provision.

18. Click **OK**.

19. Review the *Summary* blade and click **OK**. The new VM will now begin deployment.

### [PowerShell](#tab/tabid-d/tabid-2)

#### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack                 | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group                            | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the virtual machine to be created                          | <form oninput="result.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$ImageName    | The name of the new custom image to be created                 | <form oninput="result.value=imagename.value" id="imagename" style="display: inline;"><input type="text" id="imagename" name="imagename" style="display: inline;" placeholder="MyCustomImage"/></form> |
| \$NewVMName        | Name of the new virtual machine to be created                          | <form oninput="result.value=newvmname.value" id="newvmname" style="display: inline;"><input type="text" id="newvmname" name="newvmname" style="display: inline;" placeholder="MyNewVMFromImage"/></form> |
| \$VNetName      | Name of the virtual network to be created                        | <form oninput="result.value=vnetname.value" id="vnetname" style="display: inline;"><input type="text" id="vnetname" name="vnetname" style="display: inline;" placeholder="MyVNetwork"/></form> |
| \$SubnetName    | Name of the subnet                                  | <form oninput="result.value=subnetname.value" id="subnetname" style="display: inline;"><input type="text" id="subnetname" name="subnetname" style="display: inline;" placeholder="MySubnet"/></form> |
| \$NSGName       | Name of the network security group to be created                   | <form oninput="result.value=nsgname.value" id="nsgname" style="display: inline;"><input type="text" id="nsgname" name="nsgname" style="display: inline;" placeholder="MyNSG"/></form> |
| \$PublicIPName  | Name of the public IP to be created                                | <form oninput="result.value=publicipname.value" id="publicipname" style="display: inline;"><input type="text" id="publicipname" name="publicipname" style="display: inline;" placeholder="MyPublicIP"/></form> |
| \$Username      | Username of the VM to be created                                   | <form oninput="result.value=vmusername.value" id="vmusername" style="display: inline;"><input type="text" id="vmusername" name="vmusername" style="display: inline;" placeholder="MyUser"/></form> |
| \$Password      | Password of the VM to be created                                   | <form oninput="result.value=vmpassword.value" id="vmpassword" style="display: inline;"><input type="text" id="vmpassword" name="vmpassword" style="display: inline;" placeholder="Password123!"/></form> |

Run the following PowerShell code:

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Declare variables
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$ImageName "<output form="imagename" name="result" style="display: inline;">MyCustomImage</output>"

# Get VM details
$VM = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

if ($VM) {
    # Stop the VM
    Write-Output -InputObject "Stopping VM and marking as generalised..."
    Stop-AzureRmVM -Name $VMName -ResourceGroupName $RGName

    # Mark VM as Generalised
    Set-AzureRmVM -Name $VMName -ResourceGroupName $RGName -Generalized
}
else {
    Write-Error -Message "VM with name $VMName does not exist in resource group $RGName"
    break
}

# Get VM details again
$VM = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

# Create image
Write-Output -InputObject "Creating image of VM: $VMName"
$ImageConfig = New-AzureRmImageConfig -Location $Location -SourceVirtualMachineId $VM.Id
$Image = New-AzureRmImage -ResourceGroupName $RGName -ImageName $ImageName -Image $ImageConfig

# Declare variables
$NewVMName = "<output form="newvmname" name="result" style="display: inline;">MyNewVMFromImage</output>"
$VNetName = "<output form="vnetname" name="result" style="display: inline;">MyVNetwork</output>"
$SubnetName = "<output form="subnetname" name="result" style="display: inline;">MySubnet</output>"
$NSGName = "<output form="nsgname" name="result" style="display: inline;">MyNSG</output>"
$PublicIPName = "<output form="publicipname" name="result" style="display: inline;">MyPublicIP</output>"
$Username = "<output form="vmusername" name="result" style="display: inline;">MyUser</output>"
$Password = "<output form="vmpassword" name="result" style="display: inline;">Password123!</output>" | ConvertTo-SecureString -Force -AsPlainText
$Credential = New-Object PSCredential($Username, $Password)

# Get image to check OS type.
$Image = Get-AzureRmImage | Where-Object { $_.Name -like $ImageName }

# If Windows, open RDP port and provision correct size 
if ($Image.StorageProfile.OsDisk.OsType -like "Windows") {
    $OpenPorts = 3389
    if (-not $Size) {
        $Size = "Standard_DS2_v2"
    }
}
# OsType is Linux and open SSH port and provision correct size
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

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).