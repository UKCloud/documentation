---
title: How to list VM extensions in Azure Stack Hub using PowerShell | UKCloud Ltd
description: Learn how to list VM extensions in Azure Stack Hub with PowerShell
services: azure-stack
author: Paul Brown
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: List VM extensions - PowerShell
toc_fullpath: Users/How To/azs-how-list-vm-extensions.md
toc_mdlink: azs-how-list-vm-extensions.md
---

# How to list VM extensions in Azure Stack Hub using PowerShell

This document explains how to list VM extensions in Azure Stack Hub with PowerShell.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name  | Variable description                                | Input            |
|----------------|-----------------------------------------------------|------------------|
| $ArmEndpoint   | The Azure Resource Manager endpoint for Azure Stack Hub | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |

## Instructions

From your Powershell window run:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Register an AzureRM environment that targets your Azure Stack Hub instance
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Sign in to your environment
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzureRmLocation).Location

# Retrieve VM extension list
Get-AzureRmVmImagePublisher -Location $Location | `
  Get-AzureRmVMExtensionImageType | `
  Get-AzureRmVMExtensionImage | `
  Format-Table -Property Type, Version -AutoSize
</code></pre>

This will produce a table similar to the following:

![List Azure Stack Hub VM Extensions Output](images/azs-list-vm-extensions.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
