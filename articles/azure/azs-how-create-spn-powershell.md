---
title: How to create a service principal name for Azure Stack using PowerShell | UKCloud Ltd
description: Learn how to create a service principal name (SPN) to manage your Azure Stack using PowerShell
services: azure-stack
author: Chris Black
reviewer:
lastreviewed: 17/07/2018 13:00:07

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name
toc_sub3:
toc_sub4:
toc_title: Create a service principal name - PowerShell
toc_fullpath: Users/How To/Create a Service Principal Name/azs-how-create-spn-powershell.md
toc_mdlink: azs-how-create-spn-powershell.md
---

# How to create a service principal name for Azure Stack using PowerShell

This document explains how to create a service principal name to manage Azure and Azure Stack using PowerShell.

It will guide you through the creation of:

- An Azure application

- A service principal name

- Role assignment

- Permissions

## What is a service principal name?

An Azure service principal name (SPN) is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 5.1, AzureStack and Azure AD PowerShell Modules

  - [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md)

  - Azure AD PowerShell Module

    ```powershell
    Install-Module -Name AzureAD -Force -Verbose
    ```

- Active Azure *Subscription* (required to create SPN if you want to use the same SPN for both Azure and Azure Stack)

## Overview of the creation process for Azure and Azure Stack SPN

1. Declare your variables accordingly.

2. Log in to your Azure Public *Subscription*.

3. Create your Azure application.

4. Create a new service principal name for the Azure application.

5. Assign the appropriate **Role** to your service principal name.

6. Grant Azure AD permissions to your Azure application.

7. Log in to the Azure Public Cloud using the SPN account.

8. Create a new resource group using the SPN account in the Azure Public Cloud.

9. Remove the resource group you just created from the Azure Public Cloud.

10. Create your Azure Stack environment.

11. Log in to your Azure Stack *Subscription* with administrator user credentials (needs to have **Owner** role).

12. Assign the appropriate **Role** to your Azure application inside your Azure Stack *Subscription*.

13. Log in to your Azure Stack *Subscription* using the SPN account.

14. Create a new resource group using the SPN account in Azure Stack.

15. Remove the resource group you just created from Azure Stack.

## Create an SPN account for Azure and Azure Stack code

Change the required variables as per your environment and run the following script:

> [!IMPORTANT]
> Credential variables to change:
>
> $AzureUsernameAdmin, $AzureUserPasswordAdmin, $AzsUsernameAdmin, $AzsUserPasswordAdmin

```powershell
# Declare Variables
$AppName = "TestApp"
$AppURL = "https://test.app"
$AppPassword = ConvertTo-SecureString -String '<your password>' -AsPlainText -Force # e.g. "Password123!"

$TenantDomain = "<myDirectoryTenantName>"
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"

$AzureStackEnvironment = "AzureStackUser"

$ResourceGroupAzurePublic = "RGTest01"
$ResourceGroupAzureStack = "RGTest01"

$RegionPublicAzure = "ukwest"
$RegionAzureStack = "frn00006"

$Role = "Owner"

# Create your Public Azure Admin Credentials
# in order to log in to your Azure Subscription you will be creating you SPN on
$AzureUsernameAdmin = "<username>@<myDirectoryTenantName>"
$AzureUserPasswordAdmin = ConvertTo-SecureString -String '<your password>' -AsPlainText -Force
$AzureCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureUsernameAdmin, $AzureUserPasswordAdmin

# Log in to your Azure Subscription you will be creating you SPN on
Connect-AzureRmAccount -Credential $AzureCredAdmin

# List subscriptions
$SubId = Get-AzureRmSubscription | Select-Object -Property SubscriptionId, TenantId

# Set Contexts to be your active Subscription
Get-AzureRmSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzureRmContext

# Create an Azure AD application, this is an Object that you need in order to set SPN record against.
# Record ApplicationId from output.
$App = New-AzureRmADApplication -DisplayName $AppName -HomePage $AppURL -IdentifierUris $AppURL -Password $AppPassword
$AppGet = Get-AzureRmADApplication -ApplicationId $App.ApplicationId.Guid
$AppGet

# Create a Service Principal Name (SPN) for an application you created earlier.
## Note: Get-AzureRmADServicePrincipal -ApplicationId $App.ApplicationId.Guid ### Needs new PS ARM Module as this is not a param in the current version
$SPN = New-AzureRmADServicePrincipal -ApplicationId $AppGet.ApplicationId.Guid
$SPNGet = Get-AzureRmADServicePrincipal -SearchString "$($AppGet.DisplayName)"
$SPNGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Public Azure
#### Requires a few seconds... before it can be run
Write-Output "Wait 10s to finish Service Principal Name creation"
Start-Sleep -Seconds 10
$RoleAssignment = New-AzureRmRoleAssignment -RoleDefinitionName $Role -ServicePrincipalName $AppGet.ApplicationId.Guid

# Connect to Azure Active Directory as your Azure Global Admin
Connect-AzureAD -Credential $AzureCredAdmin -TenantId $TenantDomain

# Grant Permission to Azure Active Directory to SPN
$Req = New-Object -TypeName "Microsoft.Open.AzureAD.Model.RequiredResourceAccess"
$Req.ResourceAppId = "00000002-0000-0000-c000-000000000000"
$Acc1 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "5778995a-e1bf-45b8-affa-663a9f3f4d04", "Role"
$Acc2 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "abefe9df-d5a9-41c6-a60b-27b38eac3efb", "Role"
$Acc3 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "78c8a3c8-a07e-4b9e-af1b-b5ccab50a175", "Role"
$Acc4 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "1138cb37-bd11-4084-a2b7-9f71582aeddb", "Role"
$Acc5 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "9728c0c4-a06b-4e0e-8d1b-3d694e8ec207", "Role"
$Acc6 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "824c81eb-e3f8-4ee6-8f6d-de7f50d565b7", "Role"
$Acc7 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "1cda74f2-2616-4834-b122-5cb1b07f8a59", "Role"
$Acc8 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "aaff0dfd-0295-48b6-a5cc-9f465bc87928", "Role"
$Acc9 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "a42657d6-7f20-40e3-b6f0-cee03008a62a", "Scope"
$Acc10 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "5778995a-e1bf-45b8-affa-663a9f3f4d04", "Scope"
$Acc11 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "78c8a3c8-a07e-4b9e-af1b-b5ccab50a175", "Scope"
$Acc12 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "970d6fa6-214a-4a9b-8513-08fad511e2fd", "Scope"
$Acc13 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "6234d376-f627-4f0f-90e0-dff25c5211a3", "Scope"
$Acc14 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "c582532d-9d9e-43bd-a97c-2667a28ce295", "Scope"
$Acc15 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "cba73afc-7f69-4d86-8450-4978e04ecd1a", "Scope"
$Acc16 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "311a71cc-e848-46a1-bdf8-97ff7156d8e6", "Scope"
$Acc17 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "2d05a661-f651-4d57-a595-489c91eda336", "Scope"
$Req.ResourceAccess = $Acc1, $Acc2, $Acc3, $Acc4, $Acc5, $Acc6, $Acc7, $Acc8, $Acc9, $Acc10, $Acc11, $Acc12, $Acc13, $Acc14, $Acc15, $Acc16, $Acc17

$AzureADPermissions = Set-AzureADApplication -ObjectId $AppGet.ObjectId.Guid -RequiredResourceAccess $Req
$AzureADPermissionsGet = Get-AzureADApplication -ObjectId $AppGet.ObjectId.Guid | Select-Object -Property *
$AzureADPermissionsGet

# Create your SPN  Credentials Login
# Note: (Username is "<ApplicationId>")
$AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.ApplicationId.Guid, $AppPassword

# Log in to Public Azure using SPN account
Connect-AzureRmAccount -Credential $AzsCred -ServicePrincipal -TenantId $SubId.TenantId

# Test your SPN account by creating a new Resource Group in Public Azure
New-AzureRmResourceGroup -Name $ResourceGroupAzurePublic -Location $RegionPublicAzure

## Remove test Resource Group
Remove-AzureRmResourceGroup -Name $ResourceGroupAzurePublic -Force

# Create Azure Stack Environment so that you can log in to it
Add-AzureRmEnvironment -Name $AzureStackEnvironment -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Admin (Subscription Owner) Credentials
# Note: This account CAN but does not have to be, the same as your Public Azure Account
$AzsUsernameAdmin = "<username>@<myDirectoryTenantName>"
$AzsUserPasswordAdmin = ConvertTo-SecureString -String '<your password>' -AsPlainText -Force
$AzsCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsernameAdmin, $AzsUserPasswordAdmin

# Login to Azure Stack as Admin (Subscription Owner)
Connect-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCredAdmin

# Find Application details from Azure AD
$AzsApp = Get-AzureRmADApplication -DisplayNameStartWith "$($AppGet.DisplayName)"

# Find Object Id of your Service Principal Name in Azure Stack
$SPNAzsGet = Get-AzureRmADServicePrincipal -SearchString "$($AzsApp.DisplayName)"
$SPNAzsGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Azure Stack
$RoleAssignmentAzs = New-AzureRmRoleAssignment -RoleDefinitionName $Role -ServicePrincipalName $AzsApp.ApplicationId.Guid
$RoleAssignmentGet = Get-AzureRmRoleAssignment -ObjectId $SPNAzsGet.Id.Guid
$RoleAssignmentGet

# Log in to Azure Stack using SPN account
Connect-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCred -ServicePrincipal -TenantId $SubId.TenantId

# Test your SPN account by creating a new Resource Group in Azure Stack
New-AzureRmResourceGroup -Name $ResourceGroupAzureStack -Location $RegionAzureStack

## Remove test Resource Group
Remove-AzureRmResourceGroup -Name $ResourceGroupAzureStack -Force

# Export Data of your SPN
$OutputObject = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.ApplicationId.Guid
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

$OutputObject
```

## Overview of the creation process for Azure Stack SPN

1. Declare your variables accordingly.

2. Create your Azure Stack environment.

3. Log in to your Azure Stack *Subscription* with administrator user credentials (needs to have **Owner** role).

4. Create your Azure application.

5. Create a new service principal name for the Azure application.

6. Assign the appropriate **Role** to your service principal name.

7. Log in to your Azure Stack *Subscription* using the SPN account.

8. Create a new resource group using the SPN account in Azure Stack.

9. Remove the resource group you just created from Azure Stack.

## Create an SPN account for Azure Stack code

Change the required variables as per your environment and run the following script:

> [!IMPORTANT]
> Credential variables to change:
>
> $AzsUsernameAdmin, $AzsUserPasswordAdmin

```powershell
# Declare Variables
$AppName = "TestApp"
$AppURL = "https://test.app"
$AppPassword = ConvertTo-SecureString -String '<your password>' -AsPlainText -Force # e.g. "Password123!"

$TenantDomain = "<myDirectoryTenantName>"
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"

$AzureStackEnvironment = "AzureStackUser"

$ResourceGroupAzureStack = "RGTest01"

$RegionAzureStack = "frn00006"

$Role = "Owner"

# Create Azure Stack Environment so that you can log in to it
Add-AzureRmEnvironment -Name $AzureStackEnvironment -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Admin (Subscription Owner) Credentials
# Note: This account CAN but does not have to be, the same as your Public Azure Account
$AzsUsernameAdmin = "<username>@<myDirectoryTenantName>"
$AzsUserPasswordAdmin = ConvertTo-SecureString -String '<your password>' -AsPlainText -Force
$AzsCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsernameAdmin, $AzsUserPasswordAdmin

# Login to Azure Stack as Admin (Subscription Owner)
Connect-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCredAdmin

# List subscriptions
$SubId = Get-AzureRmSubscription | Select-Object -Property SubscriptionId, TenantId

# Set Contexts to be your active Subscription
Get-AzureRmSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzureRmContext

# Create an Azure AD application, this is an Object that you need in order to set SPN record against.
# Record ApplicationId from output.
$App = New-AzureRmADApplication -DisplayName $AppName -HomePage $AppURL -IdentifierUris $AppURL -Password $AppPassword
$AppGet = Get-AzureRmADApplication -ApplicationId $App.ApplicationId.Guid
$AppGet

# Create a Service Principal Name (SPN) for an application you created earlier.
## Note: Get-AzureRmADServicePrincipal -ApplicationId $App.ApplicationId.Guid ### Needs new PS ARM Module as this is not a param in the current version
$SPN = New-AzureRmADServicePrincipal -ApplicationId $AppGet.ApplicationId.Guid
$SPNGet = Get-AzureRmADServicePrincipal -SearchString "$($AppGet.DisplayName)"
$SPNGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Public Azure
#### Requires a few seconds... before it can be run
Write-Output "Wait 10s to finish Service Principal Name creation"
Start-Sleep -Seconds 10
$RoleAssignment = New-AzureRmRoleAssignment -RoleDefinitionName $Role -ServicePrincipalName $AppGet.ApplicationId.Guid


# Find Application details
$AzsApp = Get-AzureRmADApplication -DisplayNameStartWith "$($AppGet.DisplayName)"

# Find Object Id of your Service Principal Name in Azure Stack
$SPNAzsGet = Get-AzureRmADServicePrincipal -SearchString "$($AzsApp.DisplayName)"
$SPNAzsGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Azure Stack
$RoleAssignmentAzs = New-AzureRmRoleAssignment -RoleDefinitionName $Role -ServicePrincipalName $AzsApp.ApplicationId.Guid
$RoleAssignmentGet = Get-AzureRmRoleAssignment -ObjectId $SPNAzsGet.Id.Guid
$RoleAssignmentGet

# Create your SPN  Credentials Login
# Note: (Username is "<ApplicationId>")
$AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.ApplicationId.Guid, $AppPassword

# Log in to Azure Stack using SPN account
Connect-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCred -ServicePrincipal -TenantId $SubId.TenantId

# Test your SPN account by creating a new Resource Group in Azure Stack
New-AzureRmResourceGroup -Name $ResourceGroupAzureStack -Location $RegionAzureStack

## Remove test Resource Group
Remove-AzureRmResourceGroup -Name $ResourceGroupAzureStack -Force

# Export Data of your SPN
$OutputObject = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.ApplicationId.Guid
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

$OutputObject
```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
