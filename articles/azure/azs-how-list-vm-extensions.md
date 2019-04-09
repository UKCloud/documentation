---
title: How to list VM extensions in Azure Stack using PowerShell | UKCloud Ltd
description: Learn how to list VM extensions in Azure Stack with PowerShell
services: azure-stack
author: Paul Brown
reviewer:
lastreviewed: 23/08/2018 16:51:44

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: List VM extensions - PowerShell
toc_fullpath: Users/How To/azs-how-list-vm-extensions.md
toc_mdlink: azs-how-list-vm-extensions.md
---

# How to list VM extensions in Azure Stack using PowerShell

This document explains how to list VM extensions in Azure Stack with PowerShell.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Instructions

From your Powershell window run:

```powershell
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

Get-AzureRmVmImagePublisher -Location "frn00006" | `
  Get-AzureRmVMExtensionImageType | `
  Get-AzureRmVMExtensionImage | `
  Format-Table -Property Type, Version -AutoSize
```

This will produce a table similar to the following:

![List Azure Stack VM Extensions Output](images/azs-list-vm-extensions.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
