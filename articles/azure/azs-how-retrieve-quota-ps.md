---
title: How to retrieve your subscription quotas using PowerShell
description: Provides help for retrieving your quotas on UKCloud for Microsoft Azure
services: azure-stack
author: blawson
reviewer: wturner
lastreviewed: 14/02/2022

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

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name  | Variable description                                | Input            |
|----------------|-----------------------------------------------------|------------------|
| \$ArmEndpoint   | The Azure Resource Manager endpoint for Azure Stack Hub | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |

## Retrieving your quota

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzLocation).Location

# Retrieve Compute quota
$ComputeQuota = Get-AzVMUsage -Location $Location | Select-Object -Property Name, CurrentValue, Limit
$ComputeQuota | ForEach-Object {
    if (-not $_.Name.LocalizedValue) {
        $_.Name = $_.Name.Value -creplace '(\B[A-Z])', ' $1'
    }
    else {
        $_.Name = $_.Name.LocalizedValue
    }
}

# Retrieve Storage quota
# $StorageQuota = Get-AzStorageUsage -Location $Location | Select-Object -Property Name, CurrentValue, Limit

# As of February 2022, the above cmdlet does not run successfully against an Azure Stack Hub environment - see https://github.com/Azure/azure-powershell/issues/16595
# A workaround to this is to call the API endpoint directly. For this you will need to obtain an access token
# Assuming you are already authenticated with Connect-AzAccount from above, simply run Get-AzAccessToken which will return a 'token' parameter. This token will then go in the request header in the form of a hashtable, like below:
$AuthHeader = @{"Authorization" = "Bearer $((Get-AzAccessToken).Token)" }

# Use the access token to make a request to the subscriptions endpoint, as you will need the subscription ID for the next request:
$Subscriptions = Invoke-RestMethod -Method "GET" -Uri "$($ArmEndpoint)/subscriptions" -Headers $AuthHeader -Body @{"api-version" = "2017-12-01" } -ContentType "application/x-www-form-urlencoded"
# Select the first subscription ID, amend if not the correct subscription
$SubscriptionId = $Subscriptions.Value.SubscriptionId | Select-Object -First 1

# With the access token and the subscription ID, you can make a request to the Microsoft.Storage/usages endpoint and format the response as required:
$Response = Invoke-RestMethod -Method "GET" -Uri "$($ArmEndpoint)/subscriptions/$($SubscriptionId)/providers/Microsoft.Storage/usages" -Headers $AuthHeader -Body @{"api-version" = "2019-06-01" } -ContentType "application/x-www-form-urlencoded"
$StorageQuota = $Response.Value | Select-Object -Property @{ Label = "Name"; Expression = { $_.Name.LocalizedValue } }, CurrentValue, Limit

# Retrieve Network quota
$NetworkQuota = Get-AzNetworkUsage -Location $Location | Select-Object -Property @{ Label = "Name"; Expression = { $_.ResourceType } }, CurrentValue, Limit

# Combine quotas
$AllQuotas = $ComputeQuota + $StorageQuota + $NetworkQuota

# Export quota to CSV
$AllQuotas | Export-Csv -Path "AzureStackQuotas.csv" -NoTypeInformation
</code></pre>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
