---
title: How to configure custom script extensions for new and existing VMs on Azure Stack | UKCloud Ltd
description: Describes how to configure custom script extensions for new and existing VMs on Azure Stack
services:
author: Daniel Brennand
reviewer: 
lastreviewed: 

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure custom script extensions
toc_fullpath: Users/How To/azs-how-configure-custom-script-extension.md
toc_mdlink: azs-how-configure-custom-script-extension.md
---

# How to configure custom script extensions for new and existing VMs on Azure Stack

## Overview

Custom script extensions download and execute scripts on Azure Stack virtual machines. Custom script extensions are useful for post deployment configuration, software installation, or any other configuration or management tasks.

This article will explain how to add custom script extensions to new and existing VMs on Azure Stack.

There are two options for deploying custom script extensions:

1. Deploy a custom script extension from your local disk.
2. Deploy a custom script extension using a file URI.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the **Azure Stack** portal.

### Declare variables

Enter details below to provide values for the variables in the following scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack                 | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value;result3.value=armendpoint.value;result4.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group                           | <form oninput="result.value=resourcegroup.value;result2.value=resourcegroup.value;result3.value=resourcegroup.value;result4.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the virtual machine                          | <form oninput="result.value=vmname.value;result2.value=vmname.value;result3.value=vmname.value;result4.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$ContainerName        | The name of the container created in the storage blob                         | <form oninput="result.value=containername.value;result2.value=containername.value;result3.value=containername.value;result4.value=containername.value" id="containername" style="display: inline;"><input type="text" id="containername" name="containername" style="display: inline;" placeholder="customscriptextension"/></form> |
| \$CustomScriptStorageAccountName        | The name of the new storage account                         | <form oninput="result.value=customscriptstorageaccountname.value;result2.value=customscriptstorageaccountname.value;result3.value=customscriptstorageaccountname.value;result4.value=customscriptstorageaccountname.value" id="customscriptstorageaccountname" style="display: inline;"><input type="text" id="customscriptstorageaccountname" name="customscriptstorageaccountname" style="display: inline;" placeholder="customscript"/></form> |
| \$CustomScriptFileName        | The name of the custom script file                         | <form oninput="result.value=customscriptfilename.value;result2.value=customscriptfilename.value;result3.value=customscriptfilename.value;result4.value=customscriptfilename.value" id="customscriptfilename" style="display: inline;"><input type="text" id="customscriptfilename" name="customscriptfilename" style="display: inline;" placeholder="SetRootPassword.sh"/></form> |
| \$CustomScriptExtensionName        | The name of the custom script extension                          | <form oninput="result.value=customscriptextensionname.value;result2.value=customscriptextensionname.value;result3.value=customscriptextensionname.value" id="customscriptextensionname" style="display: inline;"><input type="text" id="customscriptextensionname" name="customscriptextensionname" style="display: inline;" placeholder="SetupSR"/></form> |
| \$FileUri        | URL to the custom script                          | <form oninput="result.value=fileuri.value;result2.value=fileuri.value;result3.value=fileuri.value;result4.value=fileuri.value" id="fileuri" style="display: inline;"><input type="text" id="fileuri" name="fileuri" style="display: inline;" placeholder="https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh"/></form> |
| \$FilePath        | Path to the script on disk                          | <form oninput="result.value=filepath.value;result2.value=filepath.value;result3.value=filepath.value;result4.value=filepath.value" id="filepath" style="display: inline;"><input type="text" id="filepath" name="filepath" style="display: inline;" placeholder="C:\Users\User1\SetRootPassword.sh"/></form> |
| \$CommandToExecute        | The command to execute                          | <form oninput="result.value=commandtoexecute.value;result2.value=commandtoexecute.value;result3.value=commandtoexecute.value;result4.value=commandtoexecute.value;result5.value=commandtoexecute.value;result6.value=commandtoexecute.value;result7.value=commandtoexecute.value;result8.value=commandtoexecute.value" id="commandtoexecute" style="display: inline;"><input type="text" id="commandtoexecute" name="commandtoexecute" style="display: inline;" placeholder="sh SetRootPassword.sh Password123!"/></form> |

Select the desired deployment option:

## [New VM](#tab/tabid-1)

See documentation here on [how to create a new VM on Azure Stack](azs-how-create-vm-ps.md).

## [Existing VM](#tab/tabid-2)

***

### [Linux](#tab/tabid-a/tabid-1)

Add the following code to the end of the VM creation script when creating a Linux VM on Azure Stack.

#### Local disk

<pre><code class="language-PowerShell">$CustomScriptFileName = "<output form="customscriptfilename" name="result" style="display: inline;">SetRootPassword.sh</output>"
$ContainerName = "<output form="containername" name="result" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result" style="display: inline;">customscript<span id="RandNum"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result" style="display: inline;">C:\Users\User1\SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
$Container = New-AzureStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage account key
$StorageAccountKey = (Get-AzureRmStorageAccountKey -ResourceGroupName $RGName -Name $CustomScriptStorageAccountName).Value[0]

# Retrieve storage blob endpoint
$ScriptBlobUrl = $Container.Context.BlobEndPoint

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzureStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Creating script location string
$ScriptLocation = $ScriptBlobUrl + "$ContainerName/" + $CustomScriptFileName

# Add custom script extension to Linux VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName "Microsoft.Azure.Extensions" -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("$ScriptLocation")};
$ProtectedSettings = @{"storageAccountName" = $CustomScriptStorageAccountName; "storageAccountKey" = $StorageAccountKey; "commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

#### File URI

<pre><code class="language-PowerShell">$FileUri = "<output form="fileuri" name="result" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result2" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Add custom script extension to Linux VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName "Microsoft.Azure.Extensions" -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @($FileUri)};
$ProtectedSettings = @{"commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

### [Windows](#tab/tabid-b/tabid-1)

Add the following code to the end of the VM creation script when creating a Windows VM on Azure Stack.

#### Local disk

<pre><code class="language-PowerShell">$CustomScriptFileName = "<output form="customscriptfilename" name="result2" style="display: inline;">VMSetupForSR.ps1</output>"
$ContainerName = "<output form="containername" name="result2" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result2" style="display: inline;">customscript<span id="RandNum2"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result2" style="display: inline;">C:\Users\User1\VMSetupForSR.ps1</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result3" style="display: inline;">VMSetupForSR.ps1</output>"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
New-AzureStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage account key
$StorageAccountKey = (Get-AzureRmStorageAccountKey -ResourceGroupName $RGName -Name $CustomScriptStorageAccountName).Value[0]

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzureStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Add custom script extension to Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
Set-AzureRmVMCustomScriptExtension -ContainerName $ContainerName -FileName $CustomScriptFileName -Location $Location -Name $CustomScriptFileName -VMName $VMName -ResourceGroupName $RGName -StorageAccountName $CustomScriptStorageAccountName -StorageAccountKey $StorageAccountKey -Run $CommandToExecute -SecureExecution
</code></pre>

#### File URI

<pre><code class="language-PowerShell">$FileUri = "<output form="fileuri" name="result2" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result4" style="display: inline;">VMSetupForSR.ps1</output>"
$CustomScriptExtensionName = "<output form="customscriptextensionname" name="result" style="display: inline;">SetupSR</output>"

# Add custom script extension to Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
Set-AzureRmVMCustomScriptExtension -FileUri $FileUri -VMName $VMName -ResourceGroupName $RGName -Name $CustomScriptExtensionName -Location $Location -Run $CommandToExecute -SecureExecution
</code></pre>

### [Linux](#tab/tabid-c/tabid-2)

In your PowerShell window:

#### Local disk

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input variables
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result3" style="display: inline;">SetRootPassword.sh</output>"
$ContainerName = "<output form="containername" name="result3" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result3" style="display: inline;">customscript<span id="RandNum3"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result3" style="display: inline;">C:\Users\User1\SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result5" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
$Container = New-AzureStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage account key
$StorageAccountKey = (Get-AzureRmStorageAccountKey -ResourceGroupName $RGName -Name $CustomScriptStorageAccountName).Value[0]

# Retrieve storage blob endpoint
$ScriptBlobUrl = $Container.Context.BlobEndPoint

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzureStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Creating script location string
$ScriptLocation = $ScriptBlobUrl + "$ContainerName/" + $CustomScriptFileName

# Add custom script extension to existing Linux VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName "Microsoft.Azure.Extensions" -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("$ScriptLocation")};
$ProtectedSettings = @{"storageAccountName" = $CustomScriptStorageAccountName; "storageAccountKey" = $StorageAccountKey; "commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

#### File URI

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input variables
$RGName = "<output form="resourcegroup" name="result2" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result2" style="display: inline;">MyVM</output>"
$FileUri = "<output form="fileuri" name="result3" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result6" style="display: inline;">sh SetRootPassword.sh Password123!</output>"

# Add custom script extension to existing Linux VM
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName Microsoft.Azure.Extensions -Type "CustomScript"
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @($FileUri); "commandToExecute" = $CommandToExecute};
Set-AzureRmVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings
</code></pre>

### [Windows](#tab/tabid-d/tabid-2)

In your PowerShell window:

#### Local disk

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result3" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input Variables
$RGName = "<output form="resourcegroup" name="result3" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result3" style="display: inline;">MyVM</output>"
$CustomScriptExtensionName = "<output form="customscriptextensionname" name="result2" style="display: inline;">SetupSR</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result4" style="display: inline;">VMSetupForSR.ps1</output>"
$ContainerName = "<output form="containername" name="result4" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result4" style="display: inline;">customscript<span id="RandNum4"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result4" style="display: inline;">C:\Users\User1\VMSetupForSR.ps1</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result7" style="display: inline;">VMSetupForSR.ps1</output>"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzureRmStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
New-AzureStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage account key
$StorageAccountKey = (Get-AzureRmStorageAccountKey -ResourceGroupName $RGName -Name $CustomScriptStorageAccountName).Value[0]

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzureStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Add custom script extension to existing Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
Set-AzureRmVMCustomScriptExtension -ContainerName $ContainerName -FileName $CustomScriptFileName -Location $Location -Name $CustomScriptExtensionName -VMName $VMName -ResourceGroupName $RGName -StorageAccountName $CustomScriptStorageAccountName -StorageAccountKey $StorageAccountKey -Run $CommandToExecute -SecureExecution
</code></pre>

#### File URI

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result4" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Input variables
$RGName = "<output form="resourcegroup" name="result4" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result4" style="display: inline;">MyVM</output>"
$FileUri = "<output form="fileuri" name="result4" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1</output>"
$CommandToExecute = "<output form="commandtoexecute" name="result8" style="display: inline;">VMSetupForSR.ps1</output>"
$CustomScriptExtensionName = "<output form="customscriptextensionname" name="result3" style="display: inline;">SetupSR</output>"

# Add custom script extension to existing Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
Set-AzureRmVMCustomScriptExtension -FileUri $FileUri -VMName $VMName -ResourceGroupName $RGName -Name $CustomScriptExtensionName -Location $Location -Run $CommandToExecute -SecureExecution
</code></pre>

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).

<script>document.getElementById("RandNum").innerHTML = Math.round(Math.random()*100000000)</script>
<script>document.getElementById("RandNum2").innerHTML = Math.round(Math.random()*100000000)</script>
<script>document.getElementById("RandNum3").innerHTML = Math.round(Math.random()*100000000)</script>
<script>document.getElementById("RandNum4").innerHTML = Math.round(Math.random()*100000000)</script>