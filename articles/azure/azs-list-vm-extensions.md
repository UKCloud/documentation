---
title: How to list VM extensions in Azure Stack - PowerShell
description: Learn how to list VM extensions in Azure Stack with PowerShell
services: azure-stack
author: Paul Brown

toc_rootlink: Users
toc_sub1: How To
toc_sub2: List VM Extensions
toc_sub3:
toc_sub4:
toc_title: How to list VM extensions in Azure Stack - PowerShell
toc_fullpath: Users/How To/azs-list-vm-extensions.md
toc_mdlink: azs-list-vm-extensions.md
---

# How to list VM extensions in Azure Stack with PowerShell

This document explains how to list VM extensions in Azure Stack with PowerShell.

## Prerequisites

Ensure your Powershell environment is setup as detailed in [*Configure PowerShell Environment and Azure Stack Modules*](azs-how-configure-powershell-users.md).

## Instructions

From your Powershell window run:

```PowerShell
Add-AzureRMEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

Login-AzureRmAccount -EnvironmentName "AzureStackUser"

Get-AzureRmVmImagePublisher -Location frn00006 | `
  Get-AzureRmVMExtensionImageType | `
  Get-AzureRmVMExtensionImage | `
  Format-Table -Property Type, Version -AutoSize
```

This will produce a table similar to the following:

![List Azure Stack VM Extensions Output](images/azs-list-vm-extensions.png)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
