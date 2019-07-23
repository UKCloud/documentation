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

Custom script extensions downloads and executes scripts on Azure Stack virtual machines. Custom script extensions are useful for post deployment configuration, software installation, or any other configuration or management tasks.

This article will explain how to add custom script extensions to existing and new VMs on Azure Stack.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack portal.

## Configure custom script extensions for new Azure Stack VMs

See documentation here on [how to create a new VM on Azure Stack](azs-how-create-vm-ps.md).

# [Linux](#tab/tabid-1)

Add the following code to the end of the script when creating a Linux VM for Azure Stack.

<pre><code class="language-PowerShell">
</code></pre>

# [Windows](#tab/tabid-2)

Content.

***

## Configure custom script extensions for existing Azure Stack VMs

# [Linux](#tab/tabid-1)

<pre><code class="language-PowerShell">
# Declare endpoint
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Get virtual machine.
Write-Output -InputObject "Fetching virtual machine object"
$VirtualMachine = Get-AzureRmVM -Name "{VirtualMachineName}" -ResourceGroupName "{ResourceGroupName}"

# Add custom script extension to existing Linux VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
$Extensions = Get-AzureRmVMExtensionImage -Location "frn00006" -PublisherName Microsoft.Azure.Extensions -Type CustomScript
$ExtensionVersion = $Extensions[0].Version[0..2] -join ""
$ScriptSettings = @{"fileUris" = @("{FileUri}"); "commandToExecute" = "{CommandToExecute}"};
Set-AzureRmVMExtension -ResourceGroupName "{ResourceGroupName}" -Location $Location -VMName $VirtualMachine.Name -Name $Extensions[0].Type -Publisher $Extensions[0].PublisherName -ExtensionType $Extensions[0].Type -TypeHandlerVersion $ExtensionVersion -Settings $ScriptSettings
</code></pre>

# [Windows](#tab/tabid-2)

<pre><code class="language-PowerShell">
# Declare endpoint
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Get virtual machine.
Write-Output -InputObject "Fetching virtual machine object"
$VirtualMachine = Get-AzureRmVM -Name "{VirtualMachineName}" -ResourceGroupName "{ResourceGroupName}"

# Add custom script extension to existing Windows VM.
Write-Output -InputObject "Adding custom script extension to existing virtual machine"
Set-AzureRmVMCustomScriptExtension -FileUri "{FileUri}" -ResourceGroupName "{ResourceGroupName}" -Location $Location -VMName $VirtualMachine.Name -Name "{CustomScriptExtensionName}" -Run "{ScriptName.ps1}"
</code></pre>

***