---
title: How to create a key vault using PowerShell | UKCloud Ltd
description: Provides help for creating a key vault on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 09/05/2019 17:00:00

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

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name  | Variable description                                               | Input            |
|----------------|--------------------------------------------------------------------|------------------|
| \$RGName       | Name of the resource group to create the key vault inside          | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VaultName    | Name of the key vault to be created                                | <form oninput="result.value=vaultname.value;result2.value=vaultname.value;result3.value=vaultname.value" id="vaultname" style="display: inline;"><input type="text" id="vaultname" name="vaultname" style="display: inline;" placeholder="MyVault"/></form> |
| \$SecretValue  | Value of the secret to store inside of the key vault               | <form oninput="result.value=secretvalue.value" id="secretvalue" style="display: inline;"><input type="text" id="secretvalue" name="secretvalue" style="display: inline;" placeholder="MySecretValue"/></form> |
| \$SecretName   | Name of the secret to store inside of the key vault                | <form oninput="result.value=secretname.value;result2.value=secretname.value" id="secretname" style="display: inline;"><input type="text" id="secretname" name="secretname" style="display: inline;" placeholder="MySecret"/></form> |

### Deploy the key vault

From your PowerShell window:

<pre><code class="language-PowerShell"># Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Pull location from environment
$Location = $StackEnvironment.StorageEndpointSuffix.split(".")[0]

# Select Resource Group
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VaultName = "<output form="vaultname" name="result" style="display: inline;">MyVault</output>"

# Create a new vault
New-AzureRmKeyVault -VaultName $VaultName -ResourceGroupName $RGName -Location $Location
</code></pre>

This will create a key vault in the specified resource group.

### Storing a secret in the vault

From your PowerShell window:

<pre><code class="language-PowerShell"># Create a new secret
$SecretValue = ConvertTo-SecureString -String '<output form="secretvalue" name="result" style="display: inline;">MySecretValue</output>' -AsPlainText -Force
$SecretName = "<output form="secretname" name="result" style="display: inline;">MySecret</output>"

# Store the secret in Azure Key Vault
$Secret = Set-AzureKeyVaultSecret -VaultName $VaultName -Name $SecretName -SecretValue $SecretValue

# Display URL
$Secret.Id

# Display value
$Secret.SecretValue
</code></pre>

The secret you created will be stored in your key vault.

### Extracting a secret from the vault

From your PowerShell window:

<pre><code class="language-PowerShell"># Extract the secret key value and store it in a variable
$ExtractedSecret = (Get-AzureKeyVaultSecret –VaultName $VaultName -Name $SecretName).SecretValueText

# Display the secret key value
$ExtractedSecret
</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
