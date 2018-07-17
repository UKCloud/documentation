---
title: How to create a Service Principal Name for Azure Stack
description: Learn how to create SPN to manage your Azure Stack
services: azure-stack
author: Chris Black

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a Service Principal Name for Azure Stack
toc_fullpath: Users/How To/azs-how-create-spn-powershell.md
toc_mdlink: azs-how-create-spn-powershell.md
---

# How to create a Service Principal Name for Azure Stack

This document explains how to create a Service Principal Name to manage Azure and Azure Stack.

It will guide you through the creation of:

- an Azure application
- a Service Principal Name
- role assignment
- permissions

## What is a Service Principal Name?

An Azure Service Principal Name (SPN) is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 5.1, AzureStack and Azure AD PowerShell Modules

    - [Configure PowerShell Environment and Azure Stack Modules](azs-how-configure-powershell-users.md)

    - Azure AD PowerShell Module

    ```powershell
    Install-Module AzureAD -Force -Verbose
    ```

- Active Azure *Subscription* (required to create SPN)

## Overview of the creation process

1. Declare your variables accordingly.

2. Log in to your Azure Public *Subscription*.

3. Create your Azure application.

4. Create a new Service Principal Name for the Azure application.

5. Assign the appropriate **Role** to your Service Principal Name.

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
> $AzureUsernameAdmin, $AzurePasswordAdmin, $AzsUsernameAdmin, $AzsPasswordAdmin

```powershell
# Declare Variables
$AppName = "TestApp"
$AppURL = "https://test.app"
$AppPassword = '<your password>' # e.g. "Password123!"

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
$AzureUsernameAdmin =  "<username>@<myDirectoryTenantName>"
$AzurePasswordAdmin = '<your password>'
  $AzureUserPasswordAdmin = ConvertTo-SecureString "$AzurePasswordAdmin" -AsPlainText -Force
  $AzureCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureUsernameAdmin,$AzureUserPasswordAdmin

# Log in to your Azure Subscription you will be creating you SPN on
Login-AzureRmAccount -Credential $AzureCredAdmin

# List subscriptions
$SubId = Get-AzureRmSubscription | Select-Object -Property SubscriptionId, TenantId

# Set Contexts to be your active Subscription
Get-AzureRmSubscription -SubscriptionId $SubId.Id -TenantId $SubId.TenantId | Set-AzureRmContext

# Create an Azure AD application, this is an Object that you need in order to set SPN record against.
# Record ApplicationId from output.
$App = New-AzureRmADApplication –DisplayName $AppName –HomePage $AppURL –IdentifierUris $AppURL –Password $AppPassword
$AppGet = Get-AzureRmADApplication -ApplicationId $App.ApplicationId.Guid
$AppGet

# Create a Service Principal Name (SPN) for an application you created earlier.
## Note: Get-AzureRmADServicePrincipal -ApplicationId $App.ApplicationId.Guid ### Needs new PS ARM Module as this is not a param in the current version
$SPN = New-AzureRmADServicePrincipal –ApplicationId $AppGet.ApplicationId.Guid
$SPNGet = Get-AzureRmADServicePrincipal -SearchString "$($AppGet.DisplayName)"
$SPNGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Public Azure
#### Requires a few seconds... before it can be run
Write-Output "Wait 10s to finish Service Principal Name creation"
Start-Sleep -Seconds 10
$RoleAssignment = New-AzureRmRoleAssignment –RoleDefinitionName $Role –ServicePrincipalName $AppGet.ApplicationId.Guid

# Connect to Azure Active Directory as your Azure Global Admin
Connect-AzureAD -Credential $AzureCredAdmin -TenantId $TenantDomain

# Grant Permission to Azure Active Directory to SPN
$req = New-Object -TypeName "Microsoft.Open.AzureAD.Model.RequiredResourceAccess"
$req.ResourceAppId = "00000002-0000-0000-c000-000000000000"
$acc1 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "5778995a-e1bf-45b8-affa-663a9f3f4d04","Role"
$acc2 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "abefe9df-d5a9-41c6-a60b-27b38eac3efb","Role"
$acc3 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "78c8a3c8-a07e-4b9e-af1b-b5ccab50a175","Role"
$acc4 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "1138cb37-bd11-4084-a2b7-9f71582aeddb","Role"
$acc5 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "9728c0c4-a06b-4e0e-8d1b-3d694e8ec207","Role"
$acc6 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "824c81eb-e3f8-4ee6-8f6d-de7f50d565b7","Role"
$acc7 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "1cda74f2-2616-4834-b122-5cb1b07f8a59","Role"
$acc8 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "aaff0dfd-0295-48b6-a5cc-9f465bc87928","Role"
$acc9 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "a42657d6-7f20-40e3-b6f0-cee03008a62a","Scope"
$acc10 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "5778995a-e1bf-45b8-affa-663a9f3f4d04","Scope"
$acc11 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "78c8a3c8-a07e-4b9e-af1b-b5ccab50a175","Scope"
$acc12 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "970d6fa6-214a-4a9b-8513-08fad511e2fd","Scope"
$acc13 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "6234d376-f627-4f0f-90e0-dff25c5211a3","Scope"
$acc14 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "c582532d-9d9e-43bd-a97c-2667a28ce295","Scope"
$acc15 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "cba73afc-7f69-4d86-8450-4978e04ecd1a","Scope"
$acc16 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "311a71cc-e848-46a1-bdf8-97ff7156d8e6","Scope"
$acc17 = New-Object -TypeName "Microsoft.Open.AzureAD.Model.ResourceAccess" -ArgumentList "2d05a661-f651-4d57-a595-489c91eda336","Scope"
$req.ResourceAccess = $acc1,$acc2,$acc3,$acc4,$acc5,$acc6,$acc7,$acc8,$acc9,$acc10,$acc11,$acc12,$acc13,$acc14,$acc15,$acc16,$acc17

$AzureADPermissions = Set-AzureADApplication -ObjectId $AppGet.ObjectId.Guid -RequiredResourceAccess $req
$AzureADPermissionsGet = Get-AzureADApplication -ObjectId $AppGet.ObjectId.Guid | Select-Object -Property *
$AzureADPermissionsGet

# Create your SPN  Credentials Login
# Note: (Username is "<ApplicationId>@<AAD Domain>")
$AzsUsername = $AppGet.ApplicationId.Guid + "@" + $TenantDomain
$AzsPassword = $AppPassword
  $AzsUserPassword = ConvertTo-SecureString "$AzsPassword" -AsPlainText -Force
  $AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername,$AzsUserPassword


# Log in to Public Azure using SPN account
Login-AzureRmAccount -Credential $AzsCred -ServicePrincipal –TenantId $SubId.TenantId

# Test your SPN account by creating a new Resource Group in Public Azure
New-AzureRMResourceGroup -Name $ResourceGroupAzurePublic -Location $RegionPublicAzure

## Remove test Resource Group
Remove-AzureRmResourceGroup -Name $ResourceGroupAzurePublic -Force

# Create Azure Stack Environment so that you can log in to it
Add-AzureRMEnvironment -Name $AzureStackEnvironment -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Admin (Subscription Owner) Credentials
# Note: This account CAN but does not have to be, the same as your Public Azure Account
$AzsUsernameAdmin =  "<username>@<myDirectoryTenantName>"
$AzsPasswordAdmin = '<your password>'
  $AzsUserPasswordAdmin = ConvertTo-SecureString "$AzsPasswordAdmin" -AsPlainText -Force
  $AzsCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsernameAdmin,$AzsUserPasswordAdmin

# Login to Azure Stack as Admin (Subscription Owner)
Login-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCredAdmin

# Find Application details from Azure AD
$AzsApp = Get-AzureRmADApplication -DisplayNameStartWith "$($AppGet.DisplayName)"

# Find Object Id of your Service Principal Name in Azure Stack
$SPNAzsGet = Get-AzureRmADServicePrincipal -SearchString "$($AzsApp.DisplayName)"
$SPNAzsGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Azure Stack
$RoleAssignmentAzs = New-AzureRmRoleAssignment –RoleDefinitionName $Role –ServicePrincipalName $AzsApp.ApplicationId.Guid
$RoleAssignmentGet = Get-AzureRmRoleAssignment -ObjectId $SPNAzsGet.Id.Guid
$RoleAssignmentGet

# Log in to Azure Stack using SPN account
Login-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCred -ServicePrincipal –TenantId $SubId.TenantId

# Test your SPN account by creating a new Resource Group in Azure Stack
New-AzureRMResourceGroup -Name $ResourceGroupAzureStack -Location $RegionAzureStack

## Remove test Resource Group
Remove-AzureRMResourceGroup -Name $ResourceGroupAzureStack -Force

# Export Data of your SPN
$Arm_Endpoint = $ArmEndpoint
$Subscription_id = $SubId.Id
$Client_Id = $AppGet.ApplicationId.Guid + "@" + $TenantDomain
$Client_Secret = $AppPassword
$Tenant_Id = $SubId.TenantId


$OutputObject = [PSCustomObject]@{
  arm_endpoint = $Arm_Endpoint
  subscription_id = $Subscription_id
  client_id = $Client_Id
  client_secret = $Client_Secret
  tenant_id  = $Tenant_Id
}

$OutputObject
```