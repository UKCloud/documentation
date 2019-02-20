---
title: How to Create a service principal name for Azure Stack - CLI | UKCloud Ltd
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

- [Service Principal Name commands for 2017-03-09-profile](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-2017-03-09-profile)

- [Create an Azure Service Principal Name with Azure CLI 2.0 for 2017-03-09-profile](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-2017-03-09-profile)

> [!IMPORTANT]
> Currently Azure CLI **2.0.41** is broken and this will **NOT** work - [see GitHub Issue](https://github.com/Azure/azure-cli/issues/6433)
>
> The workaround is to use older Azure CLI
>
> [How To Install Azure CLI on CentOS](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-yum?view=azure-cli-latest)
>
> - [CentOS Azure CLI Packages](https://packages.microsoft.com/yumrepos/azure-cli/)
> 
> ```bash
> yum install azure-cli-2.0.25-1.el7.x86_64 -y
> ```
>
> [How To Install Azure CLI on Windows](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest)
>
> - [Windows Azure CLI MSI Package](https://azurecliprod.azureedge.net/msi/azure-cli-2.0.25.msi)
>

## Overview of the creation process for Azure Stack SPN

1. Prepare your Azure Stack environment - [Configure Azure CLI Environment for Azure Stack](azs-how-configure-cli.md)

2. Create your Azure Stack environment.

3. Log in to your Azure Stack *Subscription* with administrator user credentials (needs to have **Owner** role).

4. Create Azure application, SPN, and assign **Role**

    > [!NOTE]
    > Unlike with PowerShell - Azure CLI creates an Azure application, creates SPN and assigns **Roles** to SPN in one command.

5. Log in to your Azure Stack *Subscription* using the SPN account.

6. Create a new resource group using the SPN account in Azure Stack.

7. Remove the resource group you just created from Azure Stack.

## Create service principal name for Azure Stack with **Set Password**

```azurecli-interactive
# Create your environment
az cloud register -n AzureStackUser --endpoint-resource-manager "https://management.frn00006.azure.ukcloud.com" --suffix-storage-endpoint "frn00006.azure.ukcloud.com" --suffix-keyvault-dns ".vault.frn00006.azure.ukcloud.com" --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" --profile 2017-03-09-profile

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

# Test your SPN account by creating a new Resource Group in Azure Stack
az group create --name rg01 --location frn00006

# Remove test Resource Group
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
> You can also run the create-for-rbac command without password and then you can pick the automatically generated password from the output variable:
> ```azurecli-interactive
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

> [!IMPORTANT]
> Given the fact that Azure CLI under Profile 2017-03-09 does **NOT** allow you to lsit your service principal name unlike the [latest profile](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest#az-ad-sp-list) vs [206-03-09 profile](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-2017-03-09-profile#az-ad-sp-list), its use for Azure Stack is highly limited.
>
> As a rule of thumb use PowerShell wherever possible.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
