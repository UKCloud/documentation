---
title: Configure the Azure Stack operator's PowerShell environment for UKCloud |  based on Microsoft Docs
description: Configure the Azure Stack operator's PowerShell environment
services: azure-stack
author: Chris Black

toc_rootlink: Operators
toc_sub1: How To
toc_sub2: Configure Environment
toc_sub3:
toc_sub4:
toc_title: Configure the Azure Stack operator's PowerShell environment
toc_fullpath: Operators/How To/azs-how-configure-powershell-operators.md
toc_mdlink: azs-how-configure-powershell-operators.md
---

# Configure the Azure Stack operator's PowerShell environment

As an Azure Stack operator, you can use PowerShell to manage Azure Stack resources such as create virtual machines, deploy Azure Resource Manager templates,  etc. This topic is scoped to use with the operator environments only. In order to interact with Azure Stack PowerShell you will need to set up your environment. To do so follow the below guide:

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

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned
  # PowerShell commands for Azure Stack are installed through the PowerShell gallery. To register the PSGallery repository, open an elevated PowerShell session from the development kit # or  from a Windows-based external client if you are connected through VPN and run the following command:
  Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted
  # Uninstall existing versions of PowerShell
  Get-Module -ListAvailable | where-Object {$_.Name -like “Azure*”} | Uninstall-Module
  # Install the AzureRM.Bootstrapper module. Select Yes when prompted to install NuGet
  Install-Module -Name AzureRm.BootStrapper
  # Install and import the API Version Profile required by Azure Stack into the current PowerShell session.
  Use-AzureRmProfile -Profile 2017-03-09-profile -Force
  Install-Module -Name AzureStack -RequiredVersion 1.4.0
  ```

## Configure the operator environment and sign in to Azure Stack

UKCloud FRN00006 Region is based on the Azure AD deployment type, run the following scripts to configure PowerShell for Azure Stack (Make sure to replace the  $AzsUsername and  $AzsPassword values)

### Azure Active Directory (AAD) based deployments

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRMEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://adminmanagement.frn00006.azure.ukcloud.com"

  # Sign in to your environment
  Login-AzureRmAccount -EnvironmentName "AzureStackAdmin"
   ```

### Azure Active Directory (AAD) based deployments - Embedded Credentials

  ```powershell
  # Set Execution Policy
  Set-ExecutionPolicy RemoteSigned

  # Register an AzureRM environment that targets your Azure Stack instance
  Add-AzureRMEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://adminmanagement.frn00006.azure.ukcloud.com"

  # Create your Credentials
  $AzsUsername =  "<username>@<myDirectoryTenantName>.onmicrosoft.com"
  $AzsPassword = '<your password>'
    $AzsUserPassword = ConvertTo-SecureString "$AzsPassword" -AsPlainText -Force
    $AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername,$AzsUserPassword

  # Sign in to your environment
  Login-AzureRmAccount -Credential $AzsCred -EnvironmentName "AzureStackAdmin"
   ```

## Test the connectivity

Now that we've got everything set-up, let's use PowerShell to list resources within Azure Stack. For example, you can list resource groups. Use the following command list all resource groups:

```powershell
Get-AzureRmResourceGroup -Location "frn00006"
```