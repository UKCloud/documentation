---
title: How to list VM extensions in Azure Stack Hub using PowerShell
description: Learn how to list VM extensions in Azure Stack Hub with PowerShell
services: azure-stack
author: pbrown
reviewer: wturner
lastreviewed: 17/02/2022

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: List VM extensions - PowerShell
toc_fullpath: Users/How To/azs-how-list-vm-extensions.md
toc_mdlink: azs-how-list-vm-extensions.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

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

# Register an Az environment that targets your Azure Stack Hub instance
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Sign in to your environment
Connect-AzAccount -Environment "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzLocation).Location

# Retrieve VM extension list
Get-AzVmImagePublisher -Location $Location | `
  Get-AzVMExtensionImageType | `
  Get-AzVMExtensionImage | `
  Format-Table -Property Type, Version -AutoSize
</code></pre>

This will produce a table similar to the following:

![List Azure Stack Hub VM Extensions Output](images/azs-list-vm-extensions.png)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
