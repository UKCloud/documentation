---
title: How to create a service principal name (SPN) for Azure Stack Hub using PowerShell | UKCloud Ltd
description: Learn how to create a service principal name (SPN) to manage your Azure Stack Hub using PowerShell
services: azure-stack
author: Chris Black
reviewer: Daniel Brennand
lastreviewed: 27/03/2020 10:38:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name (SPN)
toc_sub3:
toc_sub4:
toc_title: Create a service principal name (SPN) - PowerShell
toc_fullpath: Users/How To/Create a Service Principal Name (SPN)/azs-how-create-spn-powershell.md
toc_mdlink: azs-how-create-spn-powershell.md
---

# How to create a service principal name for Azure Stack Hub using PowerShell

This article explains how to create a service principal name (SPN) to manage Azure and Azure Stack Hub using PowerShell.

It will guide you through the creation of:

- An Azure application

- A service principal name

- Role assignment

- Permissions

## What is a service principal name?

An Azure SPN is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 5.1, AzureStack and Azure AD PowerShell Modules

  - [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md)

  - Azure AD PowerShell Module:

    ```powershell
    Install-Module -Name AzureAD -Force -Verbose
    ```

- Azure Active Directory

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name              | Variable description                                          | Input                                   |
|----------------------------|---------------------------------------------------------------|-----------------------------------------|
| \$PublicAzureAdminUsername       | The username of a user with admin privileges for public Azure | <form oninput="result.value=azureusername.value" id="azureusername" style="display: inline;"><input type="text" id="azureusername" name="azureusername" style="display: inline;" placeholder="user"/></form> |
| \$PublicAzureAdminPassword   | The password of a user with admin privileges for public Azure | <form oninput="result.value=azurepassword.value" id="azurepassword" style="display: inline;"><input type="text" id="azurepassword" name="azurepassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$AzureStackUsernameAdmin         | The username of a user with admin privileges for Azure Stack Hub  | <form oninput="result.value=azsusername.value;result2.value=azsusername.value" id="azsusername" style="display: inline;"><input type="text" id="azsusername" name="azsusername" style="display: inline;" placeholder="user"/></form> |
| \$AzureStackUserPasswordAdmin     | The password of a user with admin privileges for Azure Stack Hub  | <form oninput="result.value=azspassword.value;result2.value=azspassword.value" id="azspassword" style="display: inline;"><input type="text" id="azspassword" name="azspassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$AppName                  | The name of the SPN to be created                             | <form oninput="result.value=appname.value;result2.value=appname.value" id="appname" style="display: inline;"><input type="text" id="appname" name="appname" style="display: inline;" placeholder="TestApp"/></form> |
| \$AppURL                   | The homepage URL of the SPN to be created                     | <form oninput="result.value=appurl.value;result2.value=appurl.value" id="appurl" style="display: inline;"><input type="text" id="appurl" name="appurl" style="display: inline;" placeholder="https://test.app"/></form> |
| \$AppPassword     | The app password for the SPN  | <form oninput="result.value=apppassword.value;result2.value=apppassword.value" id="apppassword" style="display: inline;"><input type="text" id="apppassword" name="apppassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$TenantDomain             | Your Azure Active Directory tenant domain                     | <form oninput="result.value=tenantdomain.value;result2.value=tenantdomain.value" id="tenantdomain" style="display: inline;"><input type="text" id="tenantdomain" name="tenantdomain" style="display: inline;" placeholder="contoso.onmicrosoft.com"/></form> |
| \$ArmEndpoint              | The Azure Resource Manager endpoint for Azure Stack Hub           | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$PublicAzureResourceGroup | Resource group to be created in public Azure to test the SPN  | <form oninput="result.value=publicazurerg.value" id="publicazurerg" style="display: inline;"><input type="text" id="publicazurerg" name="publicazurerg" style="display: inline;" placeholder="RGTest01"/></form> |
| \$AzureStackResourceGroup  | Resource group to be created in Azure Stack Hub to test the SPN   | <form oninput="result.value=azurestackrg.value;result2.value=azurestackrg.value" id="azurestackrg" style="display: inline;"><input type="text" id="azurestackrg" name="azurestackrg" style="display: inline;" placeholder="RGTest01"/></form> |
| \$PublicAzureRegion        | Region in public Azure to create the test resource group in   | <form oninput="result.value=azureregion.value" id="azureregion" style="display: inline;"><input type="text" id="azureregion" name="azureregion" style="display: inline;" placeholder="ukwest"/></form> |
| \$PublicAzureRole          | Role to assign SPN in public Azure                            | <form oninput="result.value=publicazurerole.value" id="publicazurerole" style="display: inline;"><input type="text" id="publicazurerole" name="publicazurerole" style="display: inline;" placeholder="Owner"/></form> |
| \$AzureStackRole           | Role to assign SPN in Azure Stack Hub                             | <form oninput="result.value=azurestackrole.value;result2.value=azurestackrole.value" id="azurestackrole" style="display: inline;"><input type="text" id="azurestackrole" name="azurestackrole" style="display: inline;" placeholder="Owner"/></form> |

## Create a service principal name

## [Public Azure and Azure Stack Hub SPN](#tab/tabid-1)

### Overview of the creation process for public Azure and Azure Stack Hub SPN

The following steps outline the process for the [Azure and Azure Stack Hub Hub SPN creation code](#Azure-and-Azure-Stack-SPN-creation-code).

1. Declare your variables accordingly.

2. Log in to your public Azure *Subscription*.

3. Create your Azure application.

4. Create a new service principal name for the Azure application.

5. Assign the appropriate **Role** to your service principal name.

6. Grant Azure AD permissions to your Azure application.

7. Log in to the public Azure using the SPN account.

8. Create a new resource group using the SPN account in the public Azure.

9. Remove the resource group you just created from the public Azure.

10. Create your Azure Stack Hub environment.

11. Log in to your Azure Stack Hub *Subscription* with administrator user credentials (needs to have **Owner** role).

12. Assign the appropriate **Role** to your Azure application inside your Azure Stack Hub *Subscription*.

13. Log in to your Azure Stack Hub *Subscription* using the SPN account.

14. Create a new resource group using the SPN account in Azure Stack Hub.

15. Remove the resource group you just created from Azure Stack Hub.

### Azure and Azure Stack Hub SPN creation code

<pre><code class="language-PowerShell"># Declare variables
$AppName = "<output form="appname" name="result" style="display: inline;">TestApp</output>"
$AppURL = "<output form="appurl" name="result" style="display: inline;">https://test.app</output>"
# You can also generate a GUID app password by using: (New-Guid).Guid
$AppPassword = "<output form="apppassword" name="result" style="display: inline;">Password123!</output>"
$AppPasswordSecure = ConvertTo-SecureString -String $AppPassword -AsPlainText -Force
$TenantDomain = "<output form="tenantdomain" name="result" style="display: inline;">contoso.onmicrosoft.com</output>"
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
$PublicAzureResourceGroup = "<output form="publicazurerg" name="result" style="display: inline;">RGTest01</output>"
$AzureStackResourceGroup = "<output form="azurestackrg" name="result" style="display: inline;">RGTest01</output>"
$PublicAzureRegion = "<output form="azureregion" name="result" style="display: inline;">ukwest</output>"
$PublicAzureRole = "<output form="publicazurerole" name="result" style="display: inline;">Owner</output>"
$AzureStackRole = "<output form="azurestackrole" name="result" style="display: inline;">Owner</output>"

# Create your Public Azure admin credentials in order to log in to your Azure subscription which you will be creating your SPN in
$PublicAzureAdminUsername = "<output form="azureusername" name="result" style="display: inline;">user</output>@$TenantDomain"
$PublicAzureAdminPassword = ConvertTo-SecureString -String "<output form="azurepassword" name="result" style="display: inline;">Password123!</output>" -AsPlainText -Force
$PublicAzureAdminCreds = New-Object -TypeName "System.Management.Automation.PSCredential" -ArgumentList $PublicAzureAdminUsername, $PublicAzureAdminPassword

# Log in to your public Azure subscription and Azure AD you will be creating your SPN in
Connect-AzureAD -Credential $PublicAzureAdminCreds -TenantId $TenantDomain
Connect-AzureRmAccount -Credential $PublicAzureAdminCreds

# List subscriptions
$SubId = Get-AzureRmSubscription | Select-Object -Property SubscriptionId, TenantId

# Set context to be your active subscription
Get-AzureRmSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzureRmContext

# Create an Azure AD application, this is the object that you need in order to set the SPN record against
try {
    $App = New-AzureRmADApplication -DisplayName $AppName -HomePage $AppUrl -IdentifierUris $AppUrl -Password $AppPasswordSecure
    $AppGet = Get-AzureADApplication -ObjectId $App.ObjectId.Guid
    $AppGet

    # Create a Service Principal Name (SPN) for the application created earlier
    $SPN = New-AzureRmADServicePrincipal -ApplicationId $AppGet.AppId

    Write-Output -InputObject "Waiting for the SPN to be created..."
    Start-Sleep -Seconds 35

    # Assign the Service Principal Name a role
    New-AzureRmRoleAssignment -RoleDefinitionName $PublicAzureRole -ServicePrincipalName $AppGet.AppId | Out-Null
    Get-AzureRmRoleAssignment -ObjectId $SPN.Id.Guid
}
catch {
    Write-Error -Message "$($_.Exception.Message)"
    break
}

# Grant permission to Azure Active Directory to SPN
$Required = New-Object -TypeName "Microsoft.Open.AzureAD.Model.RequiredResourceAccess"
$Required.ResourceAppId = "00000002-0000-0000-c000-000000000000"
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
$Required.ResourceAccess = $Acc1, $Acc2, $Acc3, $Acc4, $Acc5, $Acc6, $Acc7, $Acc8, $Acc9, $Acc10, $Acc11, $Acc12, $Acc13, $Acc14, $Acc15, $Acc16, $Acc17

Set-AzureADApplication -ObjectId $AppGet.ObjectId -RequiredResourceAccess $Required | Out-Null
Get-AzureADApplication -ObjectId $AppGet.ObjectId | Select-Object -Property *

# Create your SPN credentials login
# Note: Username is "ApplicationId"
$SPNCreds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.AppId, $AppPasswordSecure

# Log in to public Azure using SPN account
Connect-AzureRmAccount -Credential $SPNCreds -ServicePrincipal -TenantId $TenantDomain

# Test your SPN account by creating a new resource group in public Azure
New-AzureRmResourceGroup -Name $PublicAzureResourceGroup -Location $PublicAzureRegion

# Remove test resource group
Remove-AzureRmResourceGroup -Name $PublicAzureResourceGroup -Force

# Create Azure Stack Hub environment so that you can log in to it
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Hub Admin (Subscription Owner) credentials
# Note: This account CAN, but does not have to, be the same as your public Azure account
$AzureStackUsernameAdmin = "<output form="azsusername" name="result" style="display: inline;">user</output>@$TenantDomain"
$AzureStackUserPasswordAdmin = ConvertTo-SecureString -String "<output form="azspassword" name="result" style="display: inline;">Password123!</output>" -AsPlainText -Force
$AzureStackCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureStackUsernameAdmin, $AzureStackUserPasswordAdmin

# Login to Azure Stack Hub as Admin (Subscription Owner)
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCredAdmin

# Find application details from Azure AD
$AzureStackApp = Get-AzureRmADApplication -DisplayNameStartWith $AppGet.DisplayName

# Find Object Id of your Service Principal Name in Azure Stack Hub
$SPNAzureStackGet = Get-AzureRmADServicePrincipal -SearchString $AzureStackApp.DisplayName
$SPNAzureStackGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Azure Stack Hub
New-AzureRmRoleAssignment -RoleDefinitionName $AzureStackRole -ServicePrincipalName $AzureStackApp.ApplicationId.Guid | Out-Null
Get-AzureRmRoleAssignment -ObjectId $SPNAzureStackGet.Id.Guid

# Log in to Azure Stack Hub using SPN account
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -Credential $SPNCreds -ServicePrincipal -TenantId $TenantDomain

# Pull location from environment
$Location = (Get-AzureRmLocation).Location

# Test your SPN account by creating a new resource group in Azure Stack Hub
New-AzureRmResourceGroup -Name $AzureStackResourceGroup -Location $Location

# Remove test resource group
Remove-AzureRmResourceGroup -Name $AzureStackResourceGroup -Force

# Export data of your SPN
$SPN = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.AppId
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

Write-Output -InputObject "SPN credentials are: $SPN"
</code></pre>

## [Azure Stack Hub SPN](#tab/tabid-2)

### Overview of the creation process for Azure Stack Hub SPN

1. Declare your variables accordingly.

2. Create your Azure Stack Hub environment.

3. Log in to your Azure Stack Hub *Subscription* with administrator user credentials (needs to have **Owner** role).

4. Create your Azure application.

5. Create a new service principal name for the Azure application.

6. Assign the appropriate **Role** to your service principal name.

7. Log in to your Azure Stack Hub *Subscription* using the SPN account.

8. Create a new resource group using the SPN account in Azure Stack Hub.

9. Remove the resource group you just created from Azure Stack Hub.

### Azure Stack Hub SPN creation code

<pre><code class="language-PowerShell"># Declare variables
$AppName = "<output form="appname" name="result2" style="display: inline;">TestApp</output>"
$AppURL = "<output form="appurl" name="result2" style="display: inline;">https://test.app</output>"
# You can also generate a GUID app password by using: (New-Guid).Guid
$AppPassword = "<output form="apppassword" name="result2" style="display: inline;">Password123!</output>"
$AppPasswordSecure = ConvertTo-SecureString -String $AppPassword -AsPlainText -Force
$TenantDomain = "<output form="tenantdomain" name="result2" style="display: inline;">contoso.onmicrosoft.com</output>"
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
$AzureStackResourceGroup = "<output form="azurestackrg" name="result2" style="display: inline;">RGTest01</output>"
$AzureStackRole = "<output form="azurestackrole" name="result2" style="display: inline;">Owner</output>"

# Create Azure Stack Hub environment so that you can log in to it
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Hub admin (Subscription Owner) credentials
# Note: This account CAN, but does not have to, be the same as your public Azure account
$AzureStackUsernameAdmin = "<output form="azsusername" name="result2" style="display: inline;">user</output>@$TenantDomain"
$AzureStackUserPasswordAdmin = ConvertTo-SecureString -String "<output form="azspassword" name="result2" style="display: inline;">Password123!</output>" -AsPlainText -Force
$AzureStackCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureStackUsernameAdmin, $AzureStackUserPasswordAdmin

# Login to Azure Stack Hub as admin (Subscription Owner) and Azure AD
Connect-AzureAD -Credential $AzureStackCredAdmin -TenantId $TenantDomain
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCredAdmin

# List subscriptions
$SubId = Get-AzureRmSubscription | Select-Object -Property SubscriptionId, TenantId

# Set context to be your active subscription
Get-AzureRmSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzureRmContext

# Create an Azure AD application, this is the object that you need in order to set the SPN record against
try {
    $App = New-AzureRmADApplication -DisplayName $AppName -HomePage $AppUrl -IdentifierUris $AppUrl -Password $AppPasswordSecure
    $AppGet = Get-AzureADApplication -ObjectId $App.ObjectId.Guid
    $AppGet

    # Create a Service Principal Name (SPN) for the application created earlier
    $SPN = New-AzureRmADServicePrincipal -ApplicationId $AppGet.AppId

    Write-Output -InputObject "Waiting for the SPN to be created..."
    Start-Sleep -Seconds 35

    # Assign the Service Principal Name a role
    New-AzureRmRoleAssignment -RoleDefinitionName "Owner" -ServicePrincipalName $AppGet.AppId | Out-Null
    Get-AzureRmRoleAssignment -ObjectId $SPN.Id.Guid
}
catch {
    Write-Error -Message "$($_.Exception.Message)"
    break
}

# Create your SPN credentials login
# Note: (Username is "ApplicationId")
$AzureStackCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.AppId, $AppPasswordSecure

# Log in to Azure Stack Hub using SPN account
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCred -ServicePrincipal -TenantId $TenantDomain

# Pull location from environment
$AzureStackRegion = (Get-AzureRmLocation).Location

# Test your SPN account by creating a new resource group in Azure Stack Hub
New-AzureRmResourceGroup -Name $AzureStackResourceGroup -Location $AzureStackRegion

## Remove test resource group
Remove-AzureRmResourceGroup -Name $AzureStackResourceGroup -Force

# Export data of your SPN
$SPN = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.AppId
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

Write-Output -InputObject "SPN credentials are: $SPN"
</code></pre>

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
