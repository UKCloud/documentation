---
title: Configure the Azure Stack user's Azure CLI environment |  Based on Microsoft Docs
description: Learn how to use the cross-platform command-line interface (CLI) to manage and deploy resources on Azure Stack
services: azure-stack
author: Chris Black

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Configure Environment
toc_sub3:
toc_sub4:
toc_title: Configure the Azure Stack user's Azure CLI environment
toc_fullpath: Users/How To/azs-how-configure-cli.md
toc_mdlink: azs-how-configure-cli.md
---

# Install and configure CLI for use with Azure Stack

In this article, we will guide you through the process of installing and using the Azure command-line interface (CLI) to manage Azure Stack. Azure CLI can be used to manage resources such as create virtual machines, deploy Azure Resource Manager templates, etc.

## Official Documentation

[Azure CLI Command Reference for 2017-03-09 Profile](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-2017-03-09-profile)

[Deploy templates with Azure CLI](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-stack/user/azure-stack-deploy-template-command-line.md)

> [!IMPORTANT]
> Azure Stack works with very specific **API Profiles** - you need to use `2017-03-09-profile` in order to interact with it. The biggest caveat is that it only support as small subset of commands from the `latest profile`.

## Install CLI

Sign in to your development workstation and install CLI. Azure Stack requires the 2.0 version of Azure CLI. You can install that by using the steps described in the [Install Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli) article. To verify if the installation was successful, open a terminal or a command prompt window and run the following command:

```azurecli-interactive
az --version
```

You should see the version of Azure CLI and other dependent libraries that are installed on your computer.

## Connect to Azure Stack

Use the following steps to connect to Azure Stack:

1. Register your Azure Stack environment by running the `az cloud register` command.

   To register the *user* environment, use:

      ```azurecli-interactive
      az cloud register \ 
        -n AzureStackUser \ 
        --endpoint-resource-manager "https://management.frn00006.azure.ukcloud.com" \ 
        --suffix-storage-endpoint "frn00006.azure.ukcloud.com" \ 
        --suffix-keyvault-dns ".vault.frn00006.azure.ukcloud.com" \ 
        --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" \
      ```
    To register the *user* environment - One Liner:

      ```azurecli-interactive
      az cloud register -n AzureStackUser --endpoint-resource-manager "https://management.frn00006.azure.ukcloud.com" --suffix-storage-endpoint "frn00006.azure.ukcloud.com" --suffix-keyvault-dns ".vault.frn00006.azure.ukcloud.com" --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" 
      ```

2. Set the active environment by using the following commands.

   For the *user* environment, use:

      ```azurecli-interactive
      az cloud set -n AzureStackUser
      ```

3. Update your environment configuration to use the Azure Stack specific API version profile. To update the configuration, run the following command:

   ```azurecli-interactive
   az cloud update --profile 2017-03-09-profile
   ```

4. Sign in to your Azure Stack environment by using the `az login` command. You can sign in to the Azure Stack environment either as a user or as a [service principal](https://docs.microsoft.com/azure/active-directory/develop/active-directory-application-objects). 

   * Sign in as a *user*: You can either specify the username and password directly within the `az login` command or authenticate by using a browser. You have to do the latter if your account has multi-factor authentication enabled.
   * Example of *username*: Active directory global administrator or user account i.e. username@<aadtenant>.onmicrosoft.com or username@domain.com

      ```azurecli-interactive
      az login -u "<username>@<tenantDomain>" -p '<password>'
      ```

      > [!NOTE]
      > If your user account has multi-factor authentication enabled, you can use the `az login command` without providing the `-u` parameter. Running the command gives you a URL and a code that you must use to authenticate.

   * Sign in as a *service principal*: Before you sign in, [create a service principal through the Azure portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal) or [CLI](azs-how-create-spn-cli.md)) and assign it a role. Now, sign in by using the following command:

      ```azurecli-interactive
      az login \
        --tenant <Azure Active Directory Tenant name. For example: myazurestack.onmicrosoft.com> \
        --service-principal \
        -u <Application Id of the Service Principal> \
        -p <Key generated for the Service Principal>
      ```
5. Verify that your environment is set correctly to and that AzureStackUser is the active cloud.
      ```azurecli-interactive
      az cloud list --output table
      ```
6. To list command subgroups run:

      ```azurecli-interactive
      az --help
7. To list commands for specific subgroup run:

      ```azurecli-interactive
      az <subgroupname> --help
      ```

## Connect to Azure Stack - Quick Reference Guide

```azurecli-interactive
# Create your environment
az cloud register -n AzureStackUser --endpoint-resource-manager "https://management.frn00006.azure.ukcloud.com" --suffix-storage-endpoint "frn00006.azure.ukcloud.com" --suffix-keyvault-dns ".vault.frn00006.azure.ukcloud.com" --endpoint-active-directory-graph-resource-id "https://graph.windows.net/" --profile 2017-03-09-profile

# Set your environment
az cloud set -n AzureStackUser

# Log in to Azure Stack with user credentials
az login -u "<username>@<tenantDomain>" -p '<password>'
```

## Test the connectivity

Now that we've got everything setup, let's use CLI to create resources within Azure Stack. For example, you can create a resource group for an application and add a virtual machine. Use the following command to create a resource group named "MyResourceGroup":

```azurecli-interactive
az group create -n MyResourceGroup -l frn00006
```

If the resource group is created successfully, the previous command outputs the following properties of the newly created resource:

![Resource group create output](https://docs.microsoft.com/en-us/azure/azure-stack/user/media/azure-stack-connect-cli/image1.png)

## Get the virtual machine URNs

Because of the known issue with Image Aliases we have not published the alias.json file yet. Instead please use the following command to obtain relevant image URNs for your VM deployment.

```azurecli-interactive
az vm image list --all --output table
You are retrieving all the images from server which could take more than a minute. To shorten the wait, provide '--publisher', '--offer' or '--sku'. Partial name search is supported.
Offer              Publisher               Sku                              Urn                                                                                     Version
-----------------  ----------------------  -------------------------------  --------------------------------------------------------------------------------------  -----------------
UbuntuServer       Canonical               17.10                            Canonical:UbuntuServer:17.10:17.10.201805090                                            17.10.201805090
WindowsServer      MicrosoftWindowsServer  2016-Datacenter-with-Containers  MicrosoftWindowsServer:WindowsServer:2016-Datacenter-with-Containers:2016.127.20180412  2016.127.20180412
jenkins            bitnami                 1-650                            bitnami:jenkins:1-650:2.46.21                                                           2.46.21
CentOS             OpenLogic               7.4                              OpenLogic:CentOS:7.4:7.4.20180118                                                       7.4.20180118
UbuntuServer       Canonical               14.04.5-LTS                      Canonical:UbuntuServer:14.04.5-LTS:14.04.201805090                                      14.04.201805090
WindowsServer      MicrosoftWindowsServer  2016-Datacenter-Server-Core      MicrosoftWindowsServer:WindowsServer:2016-Datacenter-Server-Core:2016.127.20180412      2016.127.20180412
CentOS             OpenLogic               6.9                              OpenLogic:CentOS:6.9:6.9.20180118                                                       6.9.20180118
UbuntuServer       Canonical               18.04-LTS                        Canonical:UbuntuServer:18.04-LTS:18.04.201804262                                        18.04.201804262
nginxstack         bitnami                 1-9                              bitnami:nginxstack:1-9:1.10.14                                                          1.10.14
WindowsServer      MicrosoftWindowsServer  2016-Datacenter                  MicrosoftWindowsServer:WindowsServer:2016-Datacenter:2016.127.20180412                  2016.127.20180412
CentOS             OpenLogic               7.3                              OpenLogic:CentOS:7.3:7.3.20170925                                                       7.3.20170925
UbuntuServer       Canonical               16.04-LTS                        Canonical:UbuntuServer:16.04-LTS:16.04.201804270                                        16.04.201804270
WindowsServer      MicrosoftWindowsServer  2012-Datacenter                  MicrosoftWindowsServer:WindowsServer:2012-Datacenter:3.127.20180216                     3.127.20180216
SQL2016SP1-WS2016  MicrosoftSQLServer      Enterprise                       MicrosoftSQLServer:SQL2016SP1-WS2016:Enterprise:13.1.900302                             13.1.900302
SQL2016SP1-WS2016  MicrosoftSQLServer      Standard                         MicrosoftSQLServer:SQL2016SP1-WS2016:Standard:13.1.900302                               13.1.900302

```

For Example, you can create a CentOS VM using the following command:

```azurecli-interactive
az vm create --resource-group testRG --name testVM --image OpenLogic:CentOS:6.9:6.9.20180105 --use-unmanaged-disk --admin-username username --admin-password 'Password1234!'
```

> [!NOTE]
> Azure Stack does not support Managed Disks hence we add  *--use-unmanaged-disk* parameter.
>
> Also, you need to create your Resource Group first.
>
> admin-username and admin-password are given as examples above - these are the credentials which must be used to login to the VM once it is created.
>

## Known issues

There are some known issues that you must be aware of when using CLI in Azure Stack:

* The CLI interactive mode i.e the `az interactive` command is not yet supported in Azure Stack.

* To get the list of virtual machine images available in Azure Stack, use the `az vm images list --all` command instead of the `az vm image list` command. Specifying the `--all` option makes sure that response returns only the images that are available in your Azure Stack environment. 
<<<<<<< HEAD
* Virtual machine image aliases that are available in Azure may not be applicable to Azure Stack. When using virtual machine images, you must use the entire URN parameter (Canonical:UbuntuServer:14.04.3-LTS:1.0.0) instead of the image alias. This URN must match the image specifications as derived from the `az vm images list` command.
=======

* Virtual machine image aliases that are available in Azure may not be applicable to Azure Stack. When using virtual machine images, you must use the entire URN parameter (Canonical:UbuntuServer:14.04.3-LTS:1.0.0) instead of the image alias. This URN must match the image specifications as derived from the `az vm images list` command.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
>>>>>>> 70ba515373ff46fc77c0fa4950e831aebebeffb9
