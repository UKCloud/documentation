---
title: How to configure custom script extensions for new and existing VMs on Azure Stack | UKCloud Ltd
description: Describes how configure custom script extensions for new and existing VMs on Azure Stack
services:
author: Daniel Brennand
reviewer: 
lastreviewed: 

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: configure custom script extensions
toc_fullpath: Users/How To/azs-how-use-custom-script-extension.md
toc_mdlink: azs-how-use-custom-script-extension.md
---

# How to configure custom script extensions for new and existing VMs on Azure Stack | UKCloud Ltd

## Overview

Custom script extensions download and execute scripts on Azure Stack virtual machines. Custom script extensions are useful for post deployment configuration, software installation, or any other configuration or management tasks.

This article will explain how to add custom script extensions to existing and new VMs on Azure Stack.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the **Azure Stack** portal.

### Declare variables

Enter details below to provide values for the variables in the following scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack                 | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group                           | <form oninput="result.value=resourcegroup.value;result2.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$FileUri        | Url to the custom script                          | <form oninput="result.value=fileuri.value;result2.value=fileuri.value;result3.value=fileuri.value;result4.value=fileuri.value" id="fileuri" style="display: inline;"><input type="text" id="fileuri" name="fileuri" style="display: inline;" placeholder="https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh"/></form> |
| \$FilePath        | Path to the script on disk                          | <form oninput="result.value=filepath.value;result2.value=filepath.value" id="filepath" style="display: inline;"><input type="text" id="filepath" name="filepath" style="display: inline;" placeholder="C:\Users\User1\CustomExtensionSetup.ps1"/></form> |
| \$CommandToExecute        | The command to execute                          | <form oninput="result.value=commandtoexecute.value;result2.value=commandtoexecute.value;result3.value=commandtoexecute.value" id="commandtoexecute" style="display: inline;"><input type="text" id="commandtoexecute" name="commandtoexecute" style="display: inline;" placeholder="sh SetRootPassword.sh Password123!"/></form> |
| \$CustomScriptExtensionName        | The name of the custom script extension                          | <form oninput="result.value=customscriptextensionname.value;result2.value=customscriptextensionname.value;result3.value=customscriptextensionname.value" id="customscriptextensionname" style="display: inline;"><input type="text" id="customscriptextensionname" name="customscriptextensionname" style="display: inline;" placeholder="SRSetup"/></form> |
| \$Run        | The command used to run the script.                           | <form oninput="result.value=run.value;result2.value=run.value;result3.value=run.value" id="run" style="display: inline;"><input type="text" id="run" name="run" style="display: inline;" placeholder="VMSetupForSR.ps1"/></form> |

> [!IMPORTANT]
> If you wish to use the **FilePath** option, the code snippet for each OS changes slightly; see below: <br><br>
> Linux
> <pre><code class="language-PowerShell">$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName Microsoft.Azure.Extensions -Type "CustomScript"
> $ExtensionVersion = $Extensions[0].Version[0..2] -join ""
> $ScriptSettings = @{"fileName" = @("<output form="filepath" name="result" style="display: inline;">C:\Users\User1\SetRootPassword.sh</output>"); "commandToExecute" = "<output form="commandtoexecute" name="result" style="display: inline;">sh SetRootPassword.sh Password123!</output>"};
> Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings</code></pre>
> Windows
> <pre><code class="language-PowerShell">Set-AzureRmVMCustomScriptExtension -FileName "<output form="filepath" name="result2" style="display: inline;">C:\Users\User1\CustomExtensionSetup.ps1</output>" -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name "<output form="customscriptextensionname" name="result" style="display: inline;">SRSetup</output>" -Run "<output form="run" name="result" style="display: inline;">VMSetupForSR.ps1</output>"</code></pre>

## Configure custom script extensions for new Azure Stack VMs

See documentation here on [how to create a new VM on Azure Stack](azs-how-create-vm-ps.md).

# [Linux](#tab/tabid-1)

Add the following code to the end of the VM creation script when creating a Linux VM on Azure Stack.

<pre><code class="language-PowerShell"># Initialise variables for custom script extension provisioning.
$FileUri = "<output form="fileuri" name="result" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result2" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Add custom script extension to existing Linux VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName Microsoft.Azure.Extensions -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @($FileUri); "commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings
</code></pre>

# [Windows](#tab/tabid-2)

Add the following code to the end of the VM creation script when creating a Windows VM on Azure Stack.

<pre><code class="language-PowerShell"># Initialise variables for custom script extension provisioning.
$FileUri = "<output form="fileuri" name="result2" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1</output>"
$CustomScriptExtensionName = "<output form="customscriptextensionname" name="result2" style="display: inline;">SRSetup</output>"
$Run = "<output form="run" name="result2" style="display: inline;">VMSetupForSR.ps1</output>"

# Add custom script extension to existing Windows VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
Set-AzureRmVMCustomScriptExtension -FileUri $FileUri -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name $CustomScriptExtensionName -Run $Run
</code></pre>

***

## Configure custom script extensions for existing Azure Stack VMs

# [Linux](#tab/tabid-1)

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
$FileUri = "<output form="fileuri" name="result3" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result3" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Get virtual machine.
Write-Output -InputObject "Fetching virtual machine object"
$VirtualMachine = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

# Add custom script extension to existing Linux VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName Microsoft.Azure.Extensions -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @($FileUri); "commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings
</code></pre>

# [Windows](#tab/tabid-2)

<pre><code class="language-PowerShell">
# Initialise environment and variables

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
$FileUri = "<output form="fileuri" name="result4" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1</output>"
$CustomScriptExtensionName = "<output form="customscriptextensionname" name="result3" style="display: inline;">SRSetup</output>"
$Run = "<output form="run" name="result3" style="display: inline;">VMSetupForSR.ps1</output>"

# Get virtual machine.
Write-Output -InputObject "Fetching virtual machine object"
$VirtualMachine = Get-AzureRmVM -Name $VMName -ResourceGroupName $RGName

# Add custom script extension to existing Windows VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
Set-AzureRmVMCustomScriptExtension -FileUri $FileUri -ResourceGroupName $RGName -Location $Location -VMName $VirtualMachine.Name -Name $CustomScriptExtensionName -Run $Run
</code></pre>

***