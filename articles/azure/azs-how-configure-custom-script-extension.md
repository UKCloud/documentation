---
title: How to configure custom script extensions for new and existing VMs on Azure Stack Hub
description: Describes how to configure custom script extensions for new and existing VMs on Azure Stack Hub
services: azure-stack
author: dbrennand
reviewer: wturner
lastreviewed: 21/03/2022

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure custom script extensions
toc_fullpath: Users/How To/azs-how-configure-custom-script-extension.md
toc_mdlink: azs-how-configure-custom-script-extension.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to configure custom script extensions for new and existing VMs on Azure Stack Hub

## Overview

Custom script extensions download and execute scripts on Azure Stack Hub virtual machines. Custom script extensions are useful for post deployment configuration, software installation, or any other configuration or management tasks.

This article explains how to add custom script extensions to new and existing VMs on Azure Stack Hub.

There are two options for deploying custom script extensions:

* Deploy a custom script extension from your local disk.

* Deploy a custom script extension using a file URI.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

### Declare variables

Enter details below to provide values for the variables in the following scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack Hub                 | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group                           | <form oninput="result.value=resourcegroup.value;result2.value=resourcegroup.value;result3.value=resourcegroup.value;result4.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the virtual machine                          | <form oninput="result.value=vmname.value;result2.value=vmname.value;result3.value=vmname.value;result4.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$CustomScriptFileName        | The name of the custom script file                         | <form oninput="result.value=customscriptfilename.value;result2.value=customscriptfilename.value;result3.value=customscriptfilename.value;result4.value=customscriptfilename.value" id="customscriptfilename" style="display: inline;"><input type="text" id="customscriptfilename" name="customscriptfilename" style="display: inline;" placeholder="SetRootPassword.sh"/></form> |
| \$ScriptArguments        | The command to execute                          | <form oninput="result.value=scriptargs.value;result2.value=scriptargs.value;result3.value=scriptargs.value;result4.value=scriptargs.value" id="scriptargs" style="display: inline;"><input type="text" id="scriptargs" name="scriptargs" style="display: inline;" placeholder="Password123! or -FirewallPorts 80,443"/></form> |

### [Local Disk](#tab/tabid-c)

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ContainerName        | The name of the container created in the storage blob                         | <form oninput="result.value=containername.value;result2.value=containername.value" id="containername" style="display: inline;"><input type="text" id="containername" name="containername" style="display: inline;" placeholder="customscriptextension"/></form> |
| \$CustomScriptStorageAccountName        | The name of the new storage account                         | <form oninput="result.value=customscriptstorageaccountname.value;result2.value=customscriptstorageaccountname.value" id="customscriptstorageaccountname" style="display: inline;"><input type="text" id="customscriptstorageaccountname" name="customscriptstorageaccountname" style="display: inline;" placeholder="customscript"/></form> |
| \$FilePath        | Path to the script on disk                          | <form oninput="result.value=filepath.value;result2.value=filepath.value" id="filepath" style="display: inline;"><input type="text" id="filepath" name="filepath" style="display: inline;" placeholder="C:\Users\User1\SetRootPassword.sh"/></form> |

### [File URI](#tab/tabid-d)

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$FileUri        | URL to the custom script                          | <form oninput="result.value=fileuri.value;result2.value=fileuri.value" id="fileuri" style="display: inline;"><input type="text" id="fileuri" name="fileuri" style="display: inline;" placeholder="https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh"/></form> |

***

Select the desired deployment option:

## [New VM](#tab/tabid-1)

See documentation here on [how to create a new VM on Azure Stack Hub](azs-how-create-vm-ps.md), then continue with the guide below.

Depending on whether you deploy a Windows or Linux VM, you will need to append the appropriate code to the end of the VM creation script.

## [Existing VM](#tab/tabid-2)

Use the following code to authenticate to Azure Stack Hub, then continue with the guide below.

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzLocation).Location
</code></pre>

***

### [Linux](#tab/tabid-a/tabid-c)

In your PowerShell window:

#### Local disk

<pre><code class="language-PowerShell"># Input variables
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result" style="display: inline;">SetRootPassword.sh</output>"
$ContainerName = "<output form="containername" name="result" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result" style="display: inline;">customscript<span id="RandNum"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result" style="display: inline;">C:\Users\User1\SetRootPassword.sh</output>"
$ScriptArguments = "<output form="scriptargs" name="result" style="display: inline;">Password123!</output>"
$CommandToExecute = "sh $CustomScriptFileName $ScriptArguments"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
$Container = New-AzStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage account key
$StorageAccountKey = (Get-AzStorageAccountKey -ResourceGroupName $RGName -Name $CustomScriptStorageAccountName).Value[0]

# Retrieve storage blob endpoint
$ScriptBlobUrl = $Container.Context.BlobEndPoint

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Creating script location string
$ScriptLocation = $ScriptBlobUrl + "$ContainerName/" + $CustomScriptFileName

# Add custom script extension to Linux VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzVMExtensionImage -Location $Location -PublisherName "Microsoft.Azure.Extensions" -Type "CustomScript"
$Extension = $Extensions | Sort-Object -Property Version -Descending | Select-Object -First 1
$ExtensionVersion = $Extension.Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("$ScriptLocation")};
$ProtectedSettings = @{"storageAccountName" = $CustomScriptStorageAccountName; "storageAccountKey" = $StorageAccountKey; "commandToExecute" = $CommandToExecute};
Set-AzVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extension.Type -Publisher $Extension.PublisherName -ExtensionType $Extension.Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

### [Linux](#tab/tabid-a/tabid-d)

In your PowerShell window:

#### File URI

<pre><code class="language-PowerShell"># Input variables
$RGName = "<output form="resourcegroup" name="result2" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result2" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result2" style="display: inline;">SetRootPassword.sh</output>"
$FileUri = "<output form="fileuri" name="result" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Linux/SetRootPassword.sh</output>"
$ScriptArguments = "<output form="scriptargs" name="result2" style="display: inline;">Password123!</output>"
$CommandToExecute = "sh $CustomScriptFileName $ScriptArguments"

# Add custom script extension to existing Linux VM
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
$Extensions = Get-AzVMExtensionImage -Location $Location -PublisherName Microsoft.Azure.Extensions -Type "CustomScript"
$Extension = $Extensions | Sort-Object -Property Version -Descending | Select-Object -First 1
$ExtensionVersion = $Extension.Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @($FileUri); "commandToExecute" = $CommandToExecute};
Set-AzVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extension.Type -Publisher $Extension.PublisherName -ExtensionType $Extension.Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings
</code></pre>

### [Windows](#tab/tabid-b/tabid-c)

In your PowerShell window:

#### Local disk

<pre><code class="language-PowerShell"># Input variables
$RGName = "<output form="resourcegroup" name="result3" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result3" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result3" style="display: inline;">VMSetupForSR.ps1</output>"
$ContainerName = "<output form="containername" name="result2" style="display: inline;">customscriptextension</output>"
$CustomScriptStorageAccountName = "<output form="customscriptstorageaccountname" name="result2" style="display: inline;">customscript<span id="RandNum2"></span></output>".ToLower()
$FilePath = "<output form="filepath" name="result2" style="display: inline;">C:\Users\User1\VMSetupForSR.ps1</output>"
$ScriptArguments = "<output form="scriptargs" name="result3" style="display: inline;">-FirewallPorts 80,443</output>"
$CommandToExecute = "powershell -ExecutionPolicy Unrestricted -file $CustomScriptFileName $ScriptArguments"

# Create a new storage account
Write-Output -InputObject "Creating storage account and container"
$StorageAccount = New-AzStorageAccount -Location $Location -ResourceGroupName $RGName -Type "Standard_LRS" -Name $CustomScriptStorageAccountName

# Get storage account context
$Context = $StorageAccount.Context
$Container = New-AzStorageContainer -Name $ContainerName -Context $Context

# Retrieve storage blob endpoint
$ScriptBlobUrl = $Container.Context.BlobEndPoint

# Upload script extension to the storage account
Write-Output -InputObject "Uploading custom script extension to storage account"
Set-AzStorageBlobContent -File $FilePath -Container $ContainerName -Blob $CustomScriptFileName -Context $Context

# Generate temporary SAS token for accessing the blob
$EndTime = (Get-Date).AddHours(2)
$BlobSasToken = $Container | New-AzStorageBlobSASToken -Container $ContainerName -Blob $CustomScriptFileName -Permission rw -ExpiryTime $EndTime

# Creating script location string
$ScriptLocation = $ScriptBlobUrl + "$ContainerName/" + $CustomScriptFileName + $BlobSasToken

# Add custom script extension to existing Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzVMExtensionImage -Location $Location -PublisherName "Microsoft.Compute" -Type "CustomScriptExtension"
$Extension = $Extensions | Sort-Object -Property Version -Descending | Select-Object -First 1
$ExtensionVersion = $Extension.Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("$ScriptLocation") };
$ProtectedSettings = @{"commandToExecute" = $CommandToExecute };
Set-AzVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extension.Type -Publisher $Extension.PublisherName -ExtensionType $Extension.Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

### [Windows](#tab/tabid-b/tabid-d)

In your PowerShell window:

#### File URI

<pre><code class="language-PowerShell"># Input variables
$RGName = "<output form="resourcegroup" name="result4" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result4" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result4" style="display: inline;">VMSetupForSR.ps1</output>"
$FileUri = "<output form="fileuri" name="result2" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1</output>"
$ScriptArguments = "<output form="scriptargs" name="result4" style="display: inline;">-FirewallPorts 80,443</output>"
$CommandToExecute = "powershell -ExecutionPolicy Unrestricted -file $CustomScriptFileName $ScriptArguments"

# Add custom script extension to Windows VM
Write-Output -InputObject "Adding custom script extension to VM"
$Extensions = Get-AzVMExtensionImage -Location $Location -PublisherName "Microsoft.Compute" -Type "CustomScriptExtension"
$Extension = $Extensions | Sort-Object -Property Version -Descending | Select-Object -First 1
$ExtensionVersion = $Extension.Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("$FileUri") };
$ProtectedSettings = @{"commandToExecute" = $CommandToExecute };
Set-AzVMExtension -ResourceGroupName $RGName -Location $Location -VMName $VMName -Name $Extension.Type -Publisher $Extension.PublisherName -ExtensionType $Extension.Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings -ProtectedSettings $ProtectedSettings
</code></pre>

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.

<script>document.getElementById("RandNum").innerHTML = Math.round(Math.random()*100000000)</script>
<script>document.getElementById("RandNum2").innerHTML = Math.round(Math.random()*100000000)</script>
