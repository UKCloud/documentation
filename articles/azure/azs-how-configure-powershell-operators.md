---
title: How to configure the Azure Stack Hub operator's PowerShell environment
description: Configure the Azure Stack Hub operator's PowerShell environment
services: azure-stack
author: cblack
reviewer: wturner
lastreviewed: 08/12/2021

toc_rootlink: Operators
toc_sub1: How To
toc_sub2: Configure Environment
toc_sub3:
toc_sub4:
toc_title: Configure the Azure Stack Hub operator's PowerShell environment
toc_fullpath: Operators/How To/azs-how-configure-powershell-operators.md
toc_mdlink: azs-how-configure-powershell-operators.md
---

# How to configure the Azure Stack Hub operator's PowerShell environment

As an Azure Stack Hub operator, you can use PowerShell to manage Azure Stack Hub resources such as create virtual machines, deploy Azure Resource Manager templates, etc. This topic is scoped to use with the operator environments only. In order to interact with Azure Stack Hub PowerShell you will need to set up your environment. To do so follow the below guide:

## Prerequisites

Prerequisites from a Windows-based external client.

- PowerShell 5.1

  > [!NOTE]
  > To check your version, run `$PSVersionTable.PSVersion` and compare the "Major" version.
  >
  > For "legacy" operating systems such as Windows Server 2008 R2, Windows 7, Windows Server 2012, Windows Server 2012 R2 and Windows 8.1 you will need to download the [Windows Management Framework 5.1](https://docs.microsoft.com/en-us/powershell/wmf/5.1/install-configure)

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name  | Variable description                                      | Input            |
|----------------|-----------------------------------------------------------|------------------|
| \$ArmEndpoint   | The Azure Resource Manager admin endpoint for Azure Stack Hub | <form oninput="result.value=armendpoint.value;result2.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://adminmanagement.frn00006.azure.ukcloud.com"/></form> |
| \$AzsUsername  | Your AAD username                                         | <form oninput="result.value=username.value" id="username" style="display: inline;"><input type="text" id="username" name="username" style="display: inline;" placeholder="user@contoso.onmicrosoft.com"/></form> |
| \$AzsPassword  | Your AAD password                                         | <form oninput="result.value=password.value" id="password" style="display: inline;"><input type="text" id="password" name="password" style="display: inline;" placeholder="Password123!"/></form> |

## Install Azure Stack Hub PowerShell

<pre><code class="language-PowerShell"># Set Execution Policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

# PowerShell commands for Azure Stack Hub are installed through the PSGallery repository
# To register the PSGallery repository, open an elevated PowerShell session and run the following command:
Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted

# Install the latest version of PowerShellGet
Install-Module -Name PowerShellGet -Force
</code></pre>

Close and reopen your elevated PowerShell session to load the newly installed version of the PowerShellGet module.

<pre><code class="language-PowerShell"># Uninstall existing versions of Azure/Azure Stack Hub PowerShell
Get-Module -Name Azs.*, Azure*, Az.* -ListAvailable | Uninstall-Module -Force -Verbose

# On some older systems, you may need to explicitly set the TLS 1.2 security protocol to be able to interact with PowerShell Gallery
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Install the Az.BootStrapper module
Install-Module -Name Az.BootStrapper -Force

# Install and import the API Version Profile required by Azure Stack Hub into the current PowerShell session
Install-AzProfile -Profile 2020-09-01-hybrid -Force
Install-Module -Name AzureStack -RequiredVersion 2.1.1

# Confirm the installation
Get-Module -Name "Az*" -ListAvailable
Get-Module -Name "Azs*" -ListAvailable
</code></pre>

## Configure the operator environment and sign in to Azure Stack Hub

### Azure Active Directory (AAD) based deployments

<pre><code class="language-PowerShell"># Set Execution Policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://adminmanagement.frn00006.azure.ukcloud.com</output>"

# Register an Az environment that targets your Azure Stack Hub instance
Add-AzEnvironment -Name "AzureStackAdmin" -ArmEndpoint $ArmEndpoint

# Sign in to your environment
Connect-AzAccount -EnvironmentName "AzureStackAdmin"
</code></pre>

### Azure Active Directory (AAD) based deployments - Embedded Credentials

> [!WARNING]
> This method will **not** work if multi-factor authentication is required for your AAD account. You must use the other method that does not have the -Credential parameter on the Connect-AzAccount cmdlet.

<pre><code class="language-PowerShell"># Set Execution Policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result2" style="display: inline;">https://adminmanagement.frn00006.azure.ukcloud.com</output>"

# Register an Az environment that targets your Azure Stack Hub instance
Add-AzEnvironment -Name "AzureStackAdmin" -ArmEndpoint $ArmEndpoint

# Create your Credentials
$AzsUsername = "<output form="username" name="result" style="display: inline;">user@contoso.onmicrosoft.com</output>"
$AzsPassword = '<output form="password" name="result" style="display: inline;">Password123!</output>'
$AzsUserPassword = ConvertTo-SecureString -String $AzsPassword -AsPlainText -Force
$AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername, $AzsUserPassword

# Sign in to your environment
Connect-AzAccount -Credential $AzsCred -EnvironmentName "AzureStackAdmin"
</code></pre>

## Test the connectivity

Now that we've got everything set-up, let's use PowerShell to create resources within Azure Stack Hub. For example, you can create a resource group for an application and add a virtual machine. Use the following command to create a resource group named "MyResourceGroup":

<pre><code class="language-PowerShell"># Get location of Azure Stack Hub
$Location = (Get-AzLocation).Location

New-AzResourceGroup -Name "MyResourceGroup" -Location $Location
</code></pre>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
