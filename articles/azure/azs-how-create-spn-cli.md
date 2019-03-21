---
title: How to create a service principal name for Azure Stack using Azure CLI | UKCloud Ltd
description: Learn how to create service principal name (SPN) to manage your Azure Stack using Azure CLI
services: azure-stack
author: Chris Black

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Service Principal Name
toc_sub3:
toc_sub4:
toc_title: Create a service principal name - CLI
toc_fullpath: Users/How To/Create a Service Principal Name/azs-how-create-spn-cli.md
toc_mdlink: azs-how-create-spn-cli.md
---

# How to create a service principal name for Azure Stack using Azure CLI

This document explains how to create a service principal name to manage Azure and Azure Stack using Azure CLI.

It will guide you through the creation of:

- an Azure application

- a service principal name

- role assignment

- permissions

## What is a service principal name?

An Azure service principal name (SPN) is a security identity used by user-created applications, services, and automation tools to access specific Azure resources. Think of it as a 'user identity' (username and password or certificate) with a specific role, and tightly controlled permissions. It only needs to be able to do specific things, unlike a general user identity. It improves security if you grant it only the minimum permissions level needed to perform its management tasks.

To log in and manage your resources via SPN you'll need to create an Azure application and then assign SPN to it. Only then will you be able to perform tasks against your environment.

## Prerequisites

- Azure CLI

  - [Configure Azure CLI Environment for Azure Stack](azs-how-configure-cli.md)

- Active Azure *Subscription* (required to create SPN if you want to use the same SPN for both Azure and Azure Stack)

## Official Documentation

- [Service Principal Name commands for 2018-03-01-hybrid profile](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-2018-03-01-hybrid)

- [Create an Azure Service Principal Name with Azure CLI 2.0 for 2018-03-01-hybrid profile](azs-how-create-spn-cli.md)

## Overview of the creation process for Azure Stack SPN

1. Prepare your Azure Stack CLI environment - [Configure Azure CLI Environment for Azure Stack](azs-how-configure-cli.md).

2. Create your Azure Stack environment.

3. Log in to your Azure Stack *Subscription* with administrator user credentials (needs to have **Owner** role).

4. Create Azure application, SPN, and assign **Role**.

    > [!NOTE]
    > Unlike PowerShell, Azure CLI creates an Azure application, creates an SPN and assigns **Roles** to the SPN in one command.

5. Log in to your Azure Stack *Subscription* using the SPN account.

6. Create a new resource group using the SPN account in Azure Stack.

7. Remove the resource group you just created from Azure Stack.

## Create service principal name for Azure Stack with **Set Password**

```azurecli
# Create your environment
az cloud register -n AzureStackUser --endpoint-resource-manager "https://management.frn00006.azure.ukcloud.com" --suffix-storage-endpoint "frn00006.azure.ukcloud.com" --suffix-keyvault-dns ".vault.frn00006.azure.ukcloud.com" --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" --profile 2018-03-01-hybrid

# Set your environment
az cloud set -n AzureStackUser

# Log in to Azure Stack with user credentials
az login -u "<username>@<tenantDomain>" -p '<password>'

# Set Azure Stack Environment
az cloud set --n AzureStackUser

# Log in to Azure Stack using your Administrator account
az login -u "<username>@<tenantDomain>" -p '<password>'

# Create Service Principal Name
az ad sp create-for-rbac --name "ServicePrincipalName" --password 'Password1234!' --role="Owner"

# This command will output five values
#  {
#    "appId": "00000000-0000-0000-0000-000000000000",
#    "displayName": "azure-cli-2017-06-05-10-41-15",
#    "name": "http://azure-cli-2017-06-05-10-41-15",
#    "password": "Password1234!",
#    "tenant": "00000000-0000-0000-0000-000000000000"
#  }

# Log in to Azure Stack using Service Principal Name (SPN)
## Note, CLIENT_ID=appId, CLIENT_SECRET=password, TENANT_ID=tenant
az login --service-principal -u CLIENT_ID -p CLIENT_SECRET --tenant TENANT_ID

# Test your SPN account by creating a new resource group in Azure Stack
az group create --name rg01 --location frn00006

# Remove test resource group
az group delete --name rg01 -y
```

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

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
