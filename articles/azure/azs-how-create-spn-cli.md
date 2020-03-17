---
title: How to create an SPN for Azure Stack Hub using Azure CLI
description: Learn how to create service principal name (SPN) to manage your Azure Stack Hub using Azure CLI
services: azure-stack
author: Chris Black
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name (SPN)
toc_sub3:
toc_sub4:
toc_title: Create a service principal name (SPN) - CLI
toc_fullpath: Users/How To/Create a Service Principal Name (SPN)/azs-how-create-spn-cli.md
toc_mdlink: azs-how-create-spn-cli.md
---

# How to create a service principal name for Azure Stack Hub using Azure CLI

This document explains how to create a service principal name (SPN) to manage Azure and Azure Stack Hub using Azure CLI.

It will guide you through the creation of:

- an Azure application

- a service principal name

- role assignment

- permissions

## What is a service principal name?

An Azure SPN is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

- Azure CLI

  - [Configure Azure CLI Environment for Azure Stack Hub](azs-how-configure-cli.md)

- Active Azure *Subscription* (required to create SPN if you want to use the same SPN for both Azure and Azure Stack Hub)

## Official Documentation

- [Service Principal Name commands for 2018-03-01-hybrid profile](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-2018-03-01-hybrid)

    > [!NOTE]
    > There is currently no document for the 2019-03-01-hybrid profile.

- [Create an Azure Service Principal Name with Azure CLI 2.0 for 2019-03-01-hybrid profile](azs-how-create-spn-cli.md)

## Overview of the creation process for Azure Stack Hub SPN

1. Prepare your Azure Stack Hub CLI environment - [Configure Azure CLI Environment for Azure Stack Hub](azs-how-configure-cli.md).

2. Create your Azure Stack Hub environment.

3. Log in to your Azure Stack Hub *Subscription* with administrator user credentials (needs to have **Owner** role).

4. Create Azure application, SPN, and assign **Role**.

    > [!NOTE]
    > Unlike PowerShell, Azure CLI creates an Azure application, creates an SPN and assigns **Roles** to the SPN in one command.

5. Log in to your Azure Stack Hub *Subscription* using the SPN account.

6. Create a new resource group using the SPN account in Azure Stack Hub.

7. Remove the resource group you just created from Azure Stack Hub.


## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable  | Variable description                                      | Input            |
|-----------------|-----------------------------------------------------------|------------------|
| Azure Stack Hub DNS Suffix | The DNS suffix for Azure Stack Hub (&lt;region&gt;.&lt;External Domain Name&gt;)  | <form oninput="result.value=dnssuffix.value;result2.value=dnssuffix.value;result3.value=dnssuffix.value" id="dnssuffix" style="display: inline;"><input type="text" id="dnssuffix" name="dnssuffix" style="display: inline;" placeholder="frn00006.azure.ukcloud.com"/></form> |
| Username               | Your AAD username                                                             | <form oninput="result.value=username.value" id="username" style="display: inline;"><input type="text" id="username" name="username" style="display: inline;" placeholder="user@contoso.onmicrosoft.com"/></form> |
| Password               | Your AAD password                                                             | <form oninput="result.value=password.value" id="password" style="display: inline;"><input type="text" id="password" name="password" style="display: inline;" placeholder="Password123!"/></form> |
| SPN Name               | The name of the SPN to be created                                             | <form oninput="result.value=spnname.value" id="spnname" style="display: inline;"><input type="text" id="spnname" name="spnname" style="display: inline;" placeholder="ServicePrincipalName"/></form> |
| SPN Password           | The password of the SPN to be created                                         | <form oninput="result.value=spnpass.value" id="spnpass" style="display: inline;"><input type="text" id="spnpass" name="spnpass" style="display: inline;" placeholder="Password1234!"/></form> |

## Create service principal name for Azure Stack Hub with **Set Password**

<pre><code class="lang-azurecli hljs"># Create your environment
az cloud register -n AzureStackUser --endpoint-resource-manager "https://management.<output form="dnssuffix" name="result" style="display: inline;">frn00006.azure.ukcloud.com</output>" --suffix-storage-endpoint "<output form="dnssuffix" name="result2" style="display: inline;">frn00006.azure.ukcloud.com</output>" --suffix-keyvault-dns ".vault.<output form="dnssuffix" name="result3" style="display: inline;">frn00006.azure.ukcloud.com</output>" --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" --profile 2019-03-01-hybrid

# Set your environment
az cloud set -n AzureStackUser

# Log in to Azure Stack Hub with user credentials
az login -u "<output form="username" name="result" style="display: inline;">user@contoso.onmicrosoft.com</output>" -p '<output form="password" name="result" style="display: inline;">Password123!</output>'

# Create Service Principal Name
az ad sp create-for-rbac --name "<output form="spnname" name="result" style="display: inline;">ServicePrincipalName</output>" --role="Owner"

# This command will output five values
#  {
#    "appId": "00000000-0000-0000-0000-000000000000",
#    "displayName": "azure-cli-2017-06-05-10-41-15",
#    "name": "http://azure-cli-2017-06-05-10-41-15",
#    "password": "Password1234!",
#    "tenant": "00000000-0000-0000-0000-000000000000"
#  }

# Log in to Azure Stack Hub using Service Principal Name (SPN)
## Note, CLIENT_ID=appId, CLIENT_SECRET=password, TENANT_ID=tenant
az login --service-principal -u CLIENT_ID -p CLIENT_SECRET --tenant TENANT_ID

# Test your SPN account by creating a new resource group in Azure Stack Hub
az group create --name rg01 --location frn00006

# Remove test resource group
az group delete --name rg01 -y</code></pre>

> [!NOTE]
> Arguments for service principal login can be derived from the output of its creation:
>
> CLIENT_ID=appId
>
> CLIENT_SECRET=password
>
> TENANT_ID=tenant

> [!TIP]
> You can also run the `create-for-rbac` command without password and then you can pick the automatically generated password from the output variable:
>
> ```azurecli
> az ad sp create-for-rbac --name "ServicePrincipalName" --role="Owner"
> {
> "appId": "00000000-0000-0000-0000-000000000000",
> "displayName": "azure-cli-2017-06-05-10-41-15",
> "name": "http://azure-cli-2017-06-05-10-41-15",
> "password": "0000-0000-0000-0000-000000000000",
> "tenant": "00000000-0000-0000-0000-000000000000"
> }
> ```
>
> This is yet another difference between PowerShell creation as there is no auto-generation of passwords built-in

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
