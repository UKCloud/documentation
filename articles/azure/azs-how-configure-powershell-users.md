---
title: Configure the Azure Stack User's PowerShell Environment for UKCloud | Based on Microsoft Docs
description: Configure the Azure Stack user's PowerShell environment
services: azure-stack
author: Chris Black

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Configure Environment
toc_sub3:
toc_sub4:
toc_title: Configure the Azure Stack user's PowerShell environment
toc_fullpath: Users/How To/azs-how-configure-powershell-users.md
toc_mdlink: azs-how-configure-powershell-users.md
---

# Configure the Azure Stack user's PowerShell environment

As an Azure Stack user, you can use PowerShell to manage Azure Stack resources such as create virtual machines, deploy Azure Resource Manager templates,  etc. This topic is scoped to use with the user environments only. In order to interact with Azure Stack PowerShell you will need to set up your environment. To do so follow the below guide:

## Prerequisites

Prerequisites from a Windows-based external client.

- PowerShell 5.1

    > [!NOTE]
    > To check your version, run $PSVersionTable.PSVersion and compare the "Major" version.
    >
    > For "legacy" Operating Systems like Windows Server 2008 R2 and Windows 7, or Windows Server 2012 R2, Windows Server 2012, and Windows 8.1
    >
    > Download the [Windows Management Framework 5.1](https://docs.microsoft.com/en-us/powershell/wmf/5.1/install-configure)

### Install Azure Stack PowerShell

  ```PowerShell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned
  # PowerShell commands for Azure Stack are installed through the PowerShell gallery. To register the PSGallery repository, open an elevated PowerShell session from the development kit 
  # or  from a Windows-based external client if you are connected through VPN and run the following command:
  Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted
  # Uninstall existing versions of PowerShell
  Get-Module -ListAvailable | Where-Object {$_.Name -like "Azure*" -or $_.Name -like "Azs*"} | Uninstall-Module -Force
  # Install the AzureRM.Bootstrapper module. Select Yes when prompted to install NuGet
  Install-Module -Name AzureRm.BootStrapper
  # Install and import the API Version Profile required by Azure Stack into the current PowerShell session.
  Use-AzureRmProfile -Profile 2018-03-01-hybrid -Force
  Install-Module -Name AzureStack -RequiredVersion 1.6.0
  ```

## Configure the user environment and sign in to Azure Stack

UKCloud FRN00006 Region is based on the Azure AD deployment type, run the following scripts to configure PowerShell for Azure Stack (Make sure to replace the  $AzsUsername and  $AzsPassword values)

### Azure Active Directory (AAD) based deployments

  ```PowerShell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRMEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

  # Sign in to your environment
  Login-AzureRmAccount -EnvironmentName "AzureStackUser"
  ```

### Azure Active Directory (AAD) based deployments - Embedded Credentials

  ```PowerShell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRMEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

  # Create your Credentials
  $AzsUsername =  "<username>@<myDirectoryTenantName>.onmicrosoft.com"
  $AzsPassword = '<your password>'
    $AzsUserPassword = ConvertTo-SecureString "$AzsPassword" -AsPlainText -Force
    $AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername,$AzsUserPassword

  # Sign in to your environment
  Login-AzureRmAccount -Credential $AzsCred -EnvironmentName "AzureStackUser"
  ```

## Test the connectivity

Now that we've got everything set-up, let's use PowerShell to create resources within Azure Stack. For example, you can create a resource group for an application and add a virtual machine. Use the following command to create a resource group named "MyResourceGroup":

```PowerShell
New-AzureRmResourceGroup -Name "MyResourceGroup" -Location "frn00006"
```

## Next steps

* [Develop templates for Azure Stack](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-stack/user/azure-stack-develop-templates.md)

* [Deploy templates with PowerShell](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-stack/user/azure-stack-deploy-template-powershell.md)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
