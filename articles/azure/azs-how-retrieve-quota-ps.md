---
title: How to retrieve your subscription quotas in Azure Stack using PowerShell | UKCloud Ltd
description: Provides help for retrieving your quotas on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Retrieve your subscription quotas
toc_fullpath: Users/How To/azs-how-retrieve-quota-ps.md
toc_mdlink: azs-how-retrieve-quota-ps.md
---

# How to retrieve your subscription quotas in Azure Stack using PowerShell

## Overview

Quotas define the limit of the number of resources that a subscription can provision or consume. 

The following process shows you how to retrieve the quotas for your subscription, as well as the current usage.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Retrieving your quota

From your PowerShell window:

```PowerShell
# Add environment
Add-AzureRMEnvironment -Name 'AzureStack' -ArmEndpoint 'https://management.frn00006.azure.ukcloud.com'

# Login
Login-AzureRmAccount -EnvironmentName 'AzureStack'

# Retrieve compute quota
$ComputeQuota = Get-AzureRmVMUsage -location "frn00006" | select-object name,CurrentValue,Limit
$ComputeQuota | foreach-object {
    if (!$_.Name.LocalizedValue) {
        $_.Name = $_.Name.Value -creplace '(\B[A-Z])', ' $1'
    } else {
        $_.Name = $_.Name.LocalizedValue
    }   
} 

# Retrieve storage quota
$StorageQuota = Get-AzureRmStorageUsage | Select-Object name, currentvalue, limit

# Retrieve network quota
$NetworkQuota = Get-AzureRmNetworkUsage -Location "frn00006" | select-object @{label="Name";expression={$_.ResourceType}}, currentvalue, Limit

# Combine quotas
$AllQuotas = $ComputeQuota + $StorageQuota + $NetworkQuota

# Export quota to CSV
$AllQuotas | Export-Csv -path "AzureStackQuotas.csv" -NoTypeInformation
```

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.