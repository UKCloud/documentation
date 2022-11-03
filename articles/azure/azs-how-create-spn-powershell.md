---
title: How to create an SPN for Azure Stack Hub using PowerShell
description: Learn how to create a service principal name (SPN) to manage your Azure Stack Hub using PowerShell
services: azure-stack
author: cblack
reviewer: wturner
lastreviewed: 05/10/2021

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name (SPN)
toc_sub3:
toc_sub4:
toc_title: Create a service principal name (SPN) - PowerShell
toc_fullpath: Users/How To/Create a Service Principal Name (SPN)/azs-how-create-spn-powershell.md
toc_mdlink: azs-how-create-spn-powershell.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

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

- PowerShell 5.1, AzureStack and Microsoft Graph PowerShell Modules

  - [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-powershell-users.md)

  - Microsoft Graph PowerShell Module:

    ```powershell
    Install-Module -Name Microsoft.Graph -Force -Verbose
    ```

- Azure Active Directory

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name              | Variable description                                          | Input                                   |
|----------------------------|---------------------------------------------------------------|-----------------------------------------|
| \$PublicAzureAdminUsername       | The username of a user with admin privileges for public Azure | <form oninput="result.value=azureusername.value" id="azureusername" style="display: inline;"><input type="text" id="azureusername" name="azureusername" style="display: inline;" placeholder="user@contoso.onmicrosoft.com"/></form> |
| \$PublicAzureAdminPassword   | The password of a user with admin privileges for public Azure | <form oninput="result.value=azurepassword.value" id="azurepassword" style="display: inline;"><input type="text" id="azurepassword" name="azurepassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$AzureStackUsernameAdmin         | The username of a user with admin privileges for Azure Stack Hub  | <form oninput="result.value=azsusername.value;result2.value=azsusername.value" id="azsusername" style="display: inline;"><input type="text" id="azsusername" name="azsusername" style="display: inline;" placeholder="user@contoso.onmicrosoft.com"/></form> |
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

> [!IMPORTANT]
> Azure AD Graph has been on a deprecation path since 30th June 2020, and will be retired on 30th June 2022. After 30th June 2022, applications will no longer receive responses from the Azure AD Graph endpoint `https://graph.windows.net/`.
>
> As of October 2021, the Az PowerShell module is still using the deprecated Azure AD Graph API for cmdlets targeting Azure Active Directory (for example, Get-AzAdApplication). However, Microsoft [has stated that they will update the module](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/automate-and-manage-azure-ad-tasks-at-scale-with-the-microsoft/bc-p/2436184/highlight/true#M3513) to use the newer and supported Microsoft Graph API.

## [Public Azure and Azure Stack Hub SPN](#tab/tabid-1)

### Overview of the creation process for public Azure and Azure Stack Hub SPN

The following steps outline the process for the [Azure and Azure Stack Hub SPN creation code](###azure-and-azure-stack-hub-spn-creation-code).

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
$AppPassword = '<output form="apppassword" name="result" style="display: inline;">Password123!</output>'
$AppPasswordSecure = ConvertTo-SecureString -String $AppPassword -AsPlainText -Force
$TenantDomain = "<output form="tenantdomain" name="result" style="display: inline;">contoso.onmicrosoft.com</output>"
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
$PublicAzureResourceGroup = "<output form="publicazurerg" name="result" style="display: inline;">RGTest01</output>"
$AzureStackResourceGroup = "<output form="azurestackrg" name="result" style="display: inline;">RGTest01</output>"
$PublicAzureRegion = "<output form="azureregion" name="result" style="display: inline;">ukwest</output>"
$PublicAzureRole = "<output form="publicazurerole" name="result" style="display: inline;">Owner</output>"
$AzureStackRole = "<output form="azurestackrole" name="result" style="display: inline;">Owner</output>"

# Create your Public Azure admin credentials in order to log in to your Azure subscription which you will be creating your SPN in
$PublicAzureAdminUsername = "<output form="azureusername" name="result" style="display: inline;">user@contoso.onmicrosoft.com</output>"
$PublicAzureAdminPassword = ConvertTo-SecureString -String '<output form="azurepassword" name="result" style="display: inline;">Password123!</output>' -AsPlainText -Force
$PublicAzureAdminCreds = New-Object -TypeName "System.Management.Automation.PSCredential" -ArgumentList $PublicAzureAdminUsername, $PublicAzureAdminPassword

# Log in to your public Azure subscription and Azure AD you will be creating your SPN in
Connect-MgGraph -TenantId $TenantDomain -Scopes "Directory.AccessAsUser.All"
Connect-AzAccount -Credential $PublicAzureAdminCreds

# List subscriptions
$SubId = Get-AzSubscription | Select-Object -Property SubscriptionId, TenantId

# Set context to be your active subscription
Get-AzSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzContext

# Create an Azure AD application, this is the object that you need in order to set the SPN record against
try {
    $App = New-AzADApplication -DisplayName $AppName -HomePage $AppUrl -IdentifierUris $AppUrl -Password $AppPasswordSecure
    $AppGet = Get-AzADApplication -ObjectId $App.ObjectId.Guid
    $AppGet

    # Create a Service Principal Name (SPN) for the application created earlier
    $SPN = New-AzADServicePrincipal -ApplicationId $AppGet.ApplicationId

    Write-Output -InputObject "Waiting for the SPN to be created..."
    Start-Sleep -Seconds 35

    # Assign the Service Principal Name a role
    New-AzRoleAssignment -RoleDefinitionName $PublicAzureRole -ServicePrincipalName $AppGet.ApplicationId | Out-Null
    Get-AzRoleAssignment -ObjectId $SPN.Id.Guid
}
catch {
    Write-Error -Message $_.Exception.Message
    break
}

# Get Microsoft Graph SPN
$GraphSPN = Get-MgServicePrincipal -Filter "AppId eq '00000003-0000-0000-c000-000000000000'"
# Get all available Application permissions (Role) for Microsoft Graph
$AllApplicationPermissions = $GraphSPN.AppRoles
# Get all available Delegated permissions (Scope) for Microsoft Graph
$AllDelegatedPermissions = $GraphSPN.Oauth2PermissionScopes

# Filter down to the required permissions
$RequiredApplicationPermissionNames = @(
    "Member.Read.Hidden",
    "Application.ReadWrite.OwnedBy",
    "Application.ReadWrite.All",
    "Domain.ReadWrite.All",
    "Directory.Read.All",
    "Directory.ReadWrite.All",
    "Device.ReadWrite.All"
)
$RequiredApplicationPermissions = $AllApplicationPermissions | Where-Object -FilterScript { $_.Value -in $RequiredApplicationPermissionNames }

$RequiredDelegatedPermissionNames = @(
    "User.Read",
    "User.ReadBasic.All",
    "User.Read.All",
    "Group.Read.All",
    "Group.ReadWrite.All",
    "Directory.Read.All",
    "Directory.ReadWrite.All",
    "Directory.AccessAsUser.All",
    "Member.Read.Hidden"
)
$RequiredDelegatedPermissions = $AllDelegatedPermissions | Where-Object -FilterScript { $_.Value -in $RequiredDelegatedPermissionNames }

# Create a RequiredResourceAccess object containing the required application and delegated permissions
$RequiredPermissions = New-Object -TypeName "Microsoft.Graph.PowerShell.Models.MicrosoftGraphRequiredResourceAccess"
$RequiredPermissions.ResourceAppId = $GraphSPN.AppId
# Create application permission objects (Role)
foreach ($RequiredApplicationPermission in $RequiredApplicationPermissions) {
    $NewApplicationPermission = New-Object -TypeName "Microsoft.Graph.PowerShell.Models.MicrosoftGraphResourceAccess" -Property @{ Id = $RequiredApplicationPermission.Id; Type = "Role" }
    $RequiredPermissions.ResourceAccess += $NewApplicationPermission
}
# Create delegated permission objects (Scope)
foreach ($RequiredDelegatedPermission in $RequiredDelegatedPermissions) {
    $NewDelegatedPermission = New-Object -TypeName "Microsoft.Graph.PowerShell.Models.MicrosoftGraphResourceAccess" -Property @{ Id = $RequiredDelegatedPermission.Id; Type = "Scope" }
    $RequiredPermissions.ResourceAccess += $NewDelegatedPermission
}
$RequiredPermissions.ResourceAccess

# Add the permissions to the application
Update-MgApplication -ApplicationId $AppGet.ObjectId.Guid -RequiredResourceAccess $RequiredPermissions

# Grant admin consent for the new permissions
# The error "no reply URLs configured" can be safely ignored, the consent will have worked, this simply means that you have no redirect URIs configured for your app registration
Start-Process -FilePath "https://login.microsoftonline.com/common/adminconsent?client_id=$($AppGet.ApplicationId)"

Get-MgApplication -ApplicationId $AppGet.ObjectId | Select-Object -Property *

# Create your SPN credentials login
# Note: Username is "ApplicationId"
$SPNCreds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.ApplicationId, $AppPasswordSecure

# Log in to public Azure using SPN account
Connect-AzAccount -Credential $SPNCreds -ServicePrincipal -TenantId $TenantDomain

# Test your SPN account by creating a new resource group in public Azure
New-AzResourceGroup -Name $PublicAzureResourceGroup -Location $PublicAzureRegion

# Remove test resource group
Remove-AzResourceGroup -Name $PublicAzureResourceGroup -Force

# Create Azure Stack Hub environment so that you can log in to it
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Hub Admin (Subscription Owner) credentials
# Note: This account CAN, but does not have to, be the same as your public Azure account
$AzureStackUsernameAdmin = "<output form="azsusername" name="result" style="display: inline;">user@contoso.onmicrosoft.com</output>"
$AzureStackUserPasswordAdmin = ConvertTo-SecureString -String '<output form="azspassword" name="result" style="display: inline;">Password123!</output>' -AsPlainText -Force
$AzureStackCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureStackUsernameAdmin, $AzureStackUserPasswordAdmin

# Login to Azure Stack Hub as Admin (Subscription Owner)
Connect-AzAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCredAdmin

# Find application details from Azure AD
$AzureStackApp = Get-AzADApplication -DisplayName $AppGet.DisplayName

# Find Object Id of your Service Principal Name in Azure Stack Hub
$SPNAzureStackGet = Get-AzADServicePrincipal -DisplayName $AzureStackApp.DisplayName
$SPNAzureStackGet

# Assign the Service Principal Name a role i.e. Owner, Contributor, Reader, etc. - In Azure Stack Hub
New-AzRoleAssignment -RoleDefinitionName $AzureStackRole -ServicePrincipalName $AzureStackApp.ApplicationId.Guid | Out-Null
Get-AzRoleAssignment -ObjectId $SPNAzureStackGet.Id.Guid

# Log in to Azure Stack Hub using SPN account
Connect-AzAccount -EnvironmentName "AzureStackUser" -Credential $SPNCreds -ServicePrincipal -TenantId $TenantDomain

# Pull location from environment
$Location = (Get-AzLocation).Location

# Test your SPN account by creating a new resource group in Azure Stack Hub
New-AzResourceGroup -Name $AzureStackResourceGroup -Location $Location

# Remove test resource group
Remove-AzResourceGroup -Name $AzureStackResourceGroup -Force

# Export data of your SPN
$SPN = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.ApplicationId
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

# Present SPN credentials
foreach ($Item in $SPN) {
    Write-Output -InputObject $Item
}
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
$AppPassword = '<output form="apppassword" name="result2" style="display: inline;">Password123!</output>'
$AppPasswordSecure = ConvertTo-SecureString -String $AppPassword -AsPlainText -Force
$TenantDomain = "<output form="tenantdomain" name="result2" style="display: inline;">contoso.onmicrosoft.com</output>"
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
$AzureStackResourceGroup = "<output form="azurestackrg" name="result2" style="display: inline;">RGTest01</output>"
$AzureStackRole = "<output form="azurestackrole" name="result2" style="display: inline;">Owner</output>"

# Create Azure Stack Hub environment so that you can log in to it
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Create your Azure Stack Hub admin (Subscription Owner) credentials
# Note: This account CAN, but does not have to, be the same as your public Azure account
$AzureStackUsernameAdmin = "<output form="azsusername" name="result2" style="display: inline;">user@contoso.onmicrosoft.com</output>"
$AzureStackUserPasswordAdmin = ConvertTo-SecureString -String '<output form="azspassword" name="result2" style="display: inline;">Password123!</output>' -AsPlainText -Force
$AzureStackCredAdmin = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzureStackUsernameAdmin, $AzureStackUserPasswordAdmin

# Login to Azure Stack Hub as admin (Subscription Owner)
Connect-AzAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCredAdmin

# List subscriptions
$SubId = Get-AzSubscription | Select-Object -Property SubscriptionId, TenantId

# Set context to be your active subscription
Get-AzSubscription -SubscriptionId $SubId.SubscriptionId -TenantId $SubId.TenantId | Set-AzContext

# Create an Azure AD application, this is the object that you need in order to set the SPN record against
try {
    $App = New-AzADApplication -DisplayName $AppName -HomePage $AppUrl -IdentifierUris $AppUrl -Password $AppPasswordSecure
    $AppGet = Get-AzADApplication -ObjectId $App.ObjectId.Guid
    $AppGet

    # Create a Service Principal Name (SPN) for the application created earlier
    $SPN = New-AzADServicePrincipal -ApplicationId $AppGet.ApplicationId

    Write-Output -InputObject "Waiting for the SPN to be created..."
    Start-Sleep -Seconds 35

    # Assign the Service Principal Name a role
    New-AzRoleAssignment -RoleDefinitionName "Owner" -ServicePrincipalName $AppGet.ApplicationId | Out-Null
    Get-AzRoleAssignment -ObjectId $SPN.Id.Guid
}
catch {
    Write-Error -Message $_.Exception.Message
    break
}

# Create your SPN credentials login
# Note: (Username is "ApplicationId")
$AzureStackCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AppGet.ApplicationId, $AppPasswordSecure

# Log in to Azure Stack Hub using SPN account
Connect-AzAccount -EnvironmentName "AzureStackUser" -Credential $AzureStackCred -ServicePrincipal -TenantId $TenantDomain

# Pull location from environment
$Location = (Get-AzLocation).Location

# Test your SPN account by creating a new resource group in Azure Stack Hub
New-AzResourceGroup -Name $AzureStackResourceGroup -Location $Location

## Remove test resource group
Remove-AzResourceGroup -Name $AzureStackResourceGroup -Force

# Export data of your SPN
$SPN = [PSCustomObject]@{
    ArmEndpoint    = $ArmEndpoint
    SubscriptionId = $SubId.SubscriptionId
    ClientId       = $AppGet.ApplicationId
    ClientSecret   = $AppPassword
    TenantId       = $SubId.TenantId
}

# Present SPN credentials
foreach ($Item in $SPN) {
    Write-Output -InputObject $Item
}
</code></pre>

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
