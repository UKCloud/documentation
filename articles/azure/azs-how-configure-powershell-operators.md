---
title: How to configure the Azure Stack operator's PowerShell environment | Based on Microsoft Docs | UKCloud Ltd
description: Configure the Azure Stack operator's PowerShell environment
services: azure-stack
author: Chris Black
reviewer:
lastreviewed: 10/07/2018 12:39:32

toc_rootlink: Operators
toc_sub1: How To
toc_sub2: Configure Environment
toc_sub3:
toc_sub4:
toc_title: Configure the Azure Stack operator's PowerShell environment
toc_fullpath: Operators/How To/azs-how-configure-powershell-operators.md
toc_mdlink: azs-how-configure-powershell-operators.md
---

# How to configure the Azure Stack operator's PowerShell environment

As an Azure Stack operator, you can use PowerShell to manage Azure Stack resources such as create virtual machines, deploy Azure Resource Manager templates, etc. This topic is scoped to use with the operator environments only. In order to interact with Azure Stack PowerShell you will need to set up your environment. To do so follow the below guide:

## Prerequisites

Prerequisites from a Windows-based external client.

- PowerShell 5.1

  > [!NOTE]
  > To check your version, run `$PSVersionTable.PSVersion` and compare the "Major" version.
  >
  > For "legacy" operating systems such as Windows Server 2008 R2, Windows 7, Windows Server 2012, Windows Server 2012 R2 and Windows 8.1 you will need to download the [Windows Management Framework 5.1](https://docs.microsoft.com/en-us/powershell/wmf/5.1/install-configure)

### Install Azure Stack PowerShell

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned
  
  # PowerShell commands for Azure Stack are installed through the PSGallery repository.
  # To register the PSGallery repository, open an elevated PowerShell session and run the following command:
  Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted
  
  # Uninstall existing versions of Azure/Azure Stack PowerShell
  Get-Module -Name Azs.*, Azure* -ListAvailable | Uninstall-Module -Force -Verbose
  
  # Install and import the API Version Profile required by Azure Stack into the current PowerShell session.
  Install-Module -Name AzureRM -RequiredVersion 2.4.0 -Verbose
  Install-Module -Name AzureStack -RequiredVersion 1.7.1 -Verbose
  ```

## Configure the operator environment and sign in to Azure Stack

UKCloud **frn00006** region is based on the Azure AD deployment type, run the following scripts to configure PowerShell for Azure Stack (Make sure to replace the `$AzsUsername` and `$AzsPassword` values)

### Azure Active Directory (AAD) based deployments

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRmEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://adminmanagement.frn00006.azure.ukcloud.com"

  # Sign in to your environment
  Connect-AzureRmAccount -EnvironmentName "AzureStackAdmin"
  ```

### Azure Active Directory (AAD) based deployments - Embedded Credentials

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRmEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://adminmanagement.frn00006.azure.ukcloud.com"

  # Create your Credentials
  $AzsUsername =  "<username>@<myDirectoryTenantName>.onmicrosoft.com"
  $AzsPassword = '<your password>'
  $AzsUserPassword = ConvertTo-SecureString -String $AzsPassword -AsPlainText -Force
  $AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername, $AzsUserPassword

  # Sign in to your environment
  Connect-AzureRmAccount -Credential $AzsCred -EnvironmentName "AzureStackAdmin"
  ```

## Test the connectivity

Now that we've got everything set-up, let's use PowerShell to list resources within Azure Stack. For example, you can list resource groups. Use the following command list all resource groups:

```powershell
Get-AzureRmResourceGroup -Location "frn00006"
```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
