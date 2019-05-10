---
title: How to retrieve your subscription quotas using PowerShell | UKCloud Ltd
description: Provides help for retrieving your quotas on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Retrieve your subscription quotas
toc_fullpath: Users/How To/azs-how-retrieve-quota-ps.md
toc_mdlink: azs-how-retrieve-quota-ps.md
---

# How to retrieve your subscription quotas using PowerShell

## Overview

Quotas define the limit of the number of resources that a subscription can provision or consume.

The following process shows you how to retrieve the quotas for your subscription, as well as the current usage.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name  | Variable description                                | Input            |
|----------------|-----------------------------------------------------|------------------|
| \$ArmEndpoint   | The Azure Resource Manager endpoint for Azure Stack | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |

## Retrieving your quota

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
$AzureStackEnvironment = Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Pull location from environment
$Location = $AzureStackEnvironment.StorageEndpointSuffix.split(".")[0]

# Retrieve Compute quota
$ComputeQuota = Get-AzureRmVMUsage -Location $Location | Select-Object Name, CurrentValue, Limit
$ComputeQuota | ForEach-Object {
    if (!$_.Name.LocalizedValue) {
        $_.Name = $_.Name.Value -creplace '(\B[A-Z])', ' $1'
    } else {
        $_.Name = $_.Name.LocalizedValue
    }
}

# Retrieve Storage quota
$StorageQuota = Get-AzureRmStorageUsage | Select-Object Name, CurrentValue, Limit

# Retrieve Network quota
$NetworkQuota = Get-AzureRmNetworkUsage -Location $Location | Select-Object @{label="Name";expression={ $_.ResourceType }}, `
    CurrentValue, Limit

# Combine quotas
$AllQuotas = $ComputeQuota + $StorageQuota + $NetworkQuota

# Export quota to CSV
$AllQuotas | Export-Csv -Path "AzureStackQuotas.csv" -NoTypeInformation
</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
