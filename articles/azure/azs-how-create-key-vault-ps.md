---
title: How to create a key vault using PowerShell | UKCloud Ltd
description: Provides help for creating a key vault on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Key Vault
toc_sub3:
toc_sub4:
toc_title: Create a key vault - PowerShell
toc_fullpath: Users/How To/Create a Key Vault/azs-how-create-key-vault-ps.md
toc_mdlink: azs-how-create-key-vault-ps.md
---

# How to create a key vault in Azure Stack with PowerShell

## Overview

Key Vault in Azure Stack helps safeguard cryptographic keys and secrets that cloud applications and services use. By using Key Vault, you can encrypt keys and secrets.

The following process shows you how to setup a vault within Azure Stack's Key Vault, store a secret in the vault and how to extract the secret.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Creating a new key vault

> [!IMPORTANT]
> Enter details below to provide values for the variables in the scripts in this article:
>
> Resource Group Name: <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;" >
> <input  type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="myResourceGroup"/></form>
>
> Vault Name: <form oninput="result.value=vaultname.value;result2.value=vaultname.value;result3.value=vaultname.value" id="vaultname" style="display: inline;">
> <input  type="text" id="vaultname" name="vaultname" style="display: inline;" placeholder="myVault"/></form>
>
> Secret Value: <form oninput="result.value=secretvalue.value" id="secretvalue" style="display: inline;">
> <input  type="text" id="secretvalue" name="secretvalue" style="display: inline;" placeholder="mySecretValue"/></form>
>
> Secret Name: <form oninput="result.value=secretname.value;result2.value=secretname.value" id="secretname" style="display: inline;">
> <input  type="text" id="secretname" name="secretname" style="display: inline;" placeholder="mySecret"/></form>

From your PowerShell window:

<pre><code class="language-PowerShell"># Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Select Resource Group
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">&lt;Resource Group&gt;</output>"

# Create a new vault in the Resource Group above
New-AzureRmKeyVault -VaultName "<output form="vaultname" name="result" style="display: inline;">&lt;Vault Name&gt;</output>" -ResourceGroupName $RGName -Location "frn00006"
</code></pre>

This will create a key vault in the specified resource group.

## Storing a secret in the vault

From your PowerShell window:

<pre><code class="language-PowerShell"># Create a new secret
$SecretValue = ConvertTo-SecureString -String '<output form="secretvalue" name="result" style="display: inline;">&lt;String&gt;</output>' -AsPlainText -Force

# Store the secret in Azure Key Vault
$Secret = Set-AzureKeyVaultSecret -VaultName "<output form="vaultname" name="result2" style="display: inline;">&lt;Vault Name&gt;</output>" -Name "<output form="secretname" name="result" style="display: inline;">&lt;Secret Name&gt;</output>" -SecretValue $SecretValue

# Display URL
$Secret.Id

# Display value
$Secret.SecretValue
</code></pre>

The secret you created will be stored in your key vault.

## Extracting a secret from the vault

From your PowerShell window:

<pre><code class="language-PowerShell"># Extract the secret key value and store it in a variable
$ExtractedSecret = (Get-AzureKeyVaultSecret –VaultName "<output form="vaultname" name="result3" style="display: inline;">&lt;Vault Name&gt;</output>" -Name "<output form="secretname" name="result2" style="display: inline;">&lt;Secret Name&gt;</output>").SecretValueText

# Display the secret key value
$ExtractedSecret
</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
