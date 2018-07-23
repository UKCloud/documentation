---
title: How to deploy a SQL template to Azure Stack - PowerShell
description: Learn how to deploy a SQL template to Azure Stack using PowerShell
services: azure-stack
author: Chris Black

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Templates
toc_sub3:
toc_sub4:
toc_title: Deploy a SQL template to Azure Stack - PowerShell
toc_fullpath: Users/How To/azs-how-deploy-sql-template-powershell.md
toc_mdlink: azs-how-deploy-sql-template-powershell.md
---

# How to deploy a SQL template to Azure Stack - PowerShell

This document explains how to deploy SQL Always On Cluster using ARM Template to Azure Stack using PowerShell.

It will guide you through the process of:

- obtaining ARM Template
- deploying [ARM Template for SQL Always On](https://github.com/Azure/AzureStack-QuickStart-Templates/tree/master/sql-2016-ha)

## What is an ARM Template?

You can use Azure Resource Manager templates to deploy and provision all the resources for your application in a single, coordinated operation. You can also redeploy templates to make changes to the resources in a resource group.
These templates can be deployed with the Microsoft Azure Stack portal, PowerShell, the command line, and Visual Studio.
The following quickstart templates are available on [GitHub](http://aka.ms/AzureStackGitHub).

## Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 5.1 and AzureStack PowerShell Module

    - [Configure PowerShell Environment and Azure Stack Module](azs-how-configure-powershell-users.md)

- Active Azure *Subscription* (required to create SPN if you want to use the same SPN for both Azure and Azure Stack)

## Official Documentation

- [Azure Stack ARM Templates Overview](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-arm-templates)

- [Deploy a template to Azure Stack using PowerShell](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-deploy-template-powershell)

- [Understand the structure and syntax of Azure Resource Manager Templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates)

- [GitHub Template Repository](https://github.com/Azure/AzureStack-QuickStart-Templates/tree/master)

## Download SQL Always On template from GitHub

SQL Always On Repository - [sql-2016-ha](https://github.com/Azure/AzureStack-QuickStart-Templates/tree/master/sql-2016-ha)

> [!NOTE]
> This will download just sql-2016-ha folder from the repository instead of downloading all of it.
>
> Change the RepoDirectory to the desired folder.

```powershell
cd c:\
mkdir RepoDirectory
cd RepoDirectory
git init
git config core.sparseCheckout true
git remote add origin -f "https://github.com/Azure/AzureStack-QuickStart-Templates"
"sql-2016-ha/*" | Out-File -FilePath .git/info/sparse-checkout -Encoding ASCII
cat .git/info/sparse-checkout
git checkout master
```

## What does it deploy?

This template deploys two SQL Server 2016 SP1 Enterprise/ Developer instances in the Always On Availability Group using the PowerShell DSC Extension. It creates the following resources:

- A network security group
- A Virtual Network
- Four Storage Accounts (One for AD, One for SQL, One for File Share witness and One for VM diagnostic)
- Four public IP address (One for AD, Two for each SQL VM and One for Public LB bound to SQL Always On Listener)
- One external load balancer for SQL VMs with Public IP bound to SQL always On Listener
- One VM (WS2016) configured as Domain Controller for a new forest with a single domain
- Two VM (WS2016) configured as SQL Server 2016 SP1 Enterprise/ Developer and clustered.
- One VM (WS2016) configured as File Share Witness for the cluster.

### Notes

The images used to create this deployment are:

- AD - Windows Server 2016 Image
- SQL Server - SQL Server 2016 SP1 on Windows Server 2016 Image
- SQL IAAS Extension 1.2.18
- Latest DSC Extension (2.26.0 or higher)

### Configuration

- Each SQL VMs will have two 128GB data disks.
- The template configures the SQL instances with contained database authentication set to true.
- The DNS suffix for public IP addresses by default will be `azurestack.external` unless you change it to `azure.ukcloud.com`

## Overview of the ARM Template deployment process for Azure Stack using Service Principal Name (SPN) authentication

1. Declare your variables accordingly.

2. Create your Azure Stack environment.

3. Log in to your Azure Stack *Subscription* with Service Principal Name (SPN)

4. Check if Resource Group exits and create one if it does not.

5. Test Deployment JSON

6. Deploy Resources from ARM Template

## List of the **Parameters** you can define

| Name                            | Description                                                                   | AllowedValues                                  | DefaultValue                                                                               | Type         |
| ------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------ |
| adminPassword                   | The password for the Administrator account of the new VMs and Domain          |                                                |                                                                                            | securestring |
| adminUsername                   | The name of the Administrator of the new VMs and Domain                       |                                                |                                                                                            | string       |
| adPDCNICIPAddress               | The IP address of the new AD VM                                               |                                                | 10.0.0.4                                                                                   | string       |
| adVMSize                        | The size of the AD VMs Created                                                | {Standard\_A1, Standard\_A2, Standard\_A3}     | Standard\_A2                                                                               | string       |
| autoPatchingDay                 | The day of a week for auto patching                                           | {Never, Everyday, Sunday, Monday...}           | Never                                                                                      | string       |
| autoPatchingStartHour           | The start hour of a day for auto patching                                     | {0, 1, 2, 3...}                                | 2                                                                                          | string       |
| deploymentPrefix                | The DNS Prefix for the Public IP Address for the Always On Cluster            |                                                | aodns                                                                                      | string       |
| dnsSuffix                       | The DNS Suffix for reverse lookup of public IPAddresses                       |                                                | azurestack.external                                                                        | string       |
| domainName                      | The FQDN of the AD Domain created                                             |                                                | contoso.local                                                                              | string       |
| scriptsBaseUrl                  | DSC Scripts base url                                                          |                                                | https://raw.githubusercontent.com/Azure/AzureStack-QuickStart-Templates/master/sql-2016-ha | string       |
| sqlAOAGName                     | The Sql AlwaysOn Group Name                                                   |                                                | alwayson-ag                                                                                | string       |
| sqlAOListenerName               | The Sql AG Listener Name                                                      |                                                | \[tolower(concat('aon-listener-' , resourceGroup().name))\]                                | string       |
| sqlAOListenerPort               | The Sql AG Listener port                                                      |                                                | 1433                                                                                       | string       |
| sqlAuthPassword                 | The SQL Server Auth Account password                                          |                                                |                                                                                            | securestring |
| sqlAuthUserName                 | The SQL Server Auth Account name                                              |                                                | sqlsa                                                                                      | string       |
| sqlServerServiceAccountPassword | The SQL Server Service Account password                                       |                                                |                                                                                            | securestring |
| sqlServerServiceAccountUserName | The SQL Server Service Account name                                           |                                                | sqlservice                                                                                 | string       |
| sqlServerVersion                | The Sql Server Version                                                        | {SQL2016SP1-WS2016-ENT, SQL2016SP1-WS2016-DEV} | SQL2016SP1-WS2016-ENT                                                                      | string       |
| sqlStorageAccountName           | The name of Sql Server Storage Account                                        |                                                | \[tolower(concat(take(uniqueString(resourceGroup().id),8),'sql'))\]                        | string       |
| sqlStorageAccountType           | The type of the Sql Server Storage Account created                            | {Premium\_LRS, Standard\_LRS}                  | Standard\_LRS                                                                              | string       |
| sqlSubnet                       | The address range of the SQL subnet created in the new VNET                   |                                                | 10.0.1.0/26                                                                                | string       |
| sqlVMSize                       | The size of the SQL VMs Created                                               | {Standard\_A1, Standard\_A2, Standard\_A3}     | Standard\_A3                                                                               | string       |
| staticSubnet                    | The address range of the subnet static IPs are allocated from in the new VNET |                                                | 10.0.0.0/24                                                                                | string       |
| templatesBaseUrl                | Linked Templates base url                                                     |                                                | https://raw.githubusercontent.com/Azure/AzureStack-QuickStart-Templates/master/sql-2016-ha | string       |
| virtualNetworkAddressRange      | The address range of the new VNET in CIDR format                              |                                                | 10.0.0.0/16                                                                                | string       |
| virtualNetworkName              | Name of virtual network to be created                                         |                                                | autohav2VNET                                                                               | string       |
| vmDiskSize                      | The size of the VMs data disk in GB.                                          | {128, 256, 512, 1000}                          | 128                                                                                        | string       |
| witnessVMSize                   | The size of the Witness VM Created                                            | {Standard\_A1, Standard\_A2, Standard\_A3}     | Standard\_A1                                                                               | string       |
| workloadType                    | The Sql VM work load type: GENERAL - general work load                        | GENERAL                                        | GENERAL                                                                                    | string       |

## Deploy ARM Template code

Change the required variables as per your environment and run the following script:

> [!IMPORTANT]
> Credential variables to change:
>
> `$AppGUID, $AppPassword`
>
> **Required Parameters** for SQL template
>
> `adminPassword, sqlServerServiceAccountPassword, sqlAuthPassword`
>
> Additional Parameters that you **should** change
>
> `$domainName, $adminUsername, $sqlServerServiceAccountUserName`
>
> `dnsSuffix` Should be changed to - "azure.ukcloud.com" otherwise the deployment will fail because it will default to "azurestack.external" and that cannot be resolved externally
>
> In the example below it has been already set accordingly.

```powershell
# Declare login variables
$AppGUID = "<GUID of your SPN Application>"
$AppPassword = '<your password>'

$TenantDomain = "<myDirectoryTenantName>"
$ArmEndpoint = "https://management.frn00006.azure.ukcloud.com"
$AzureStackEnvironment = "AzureStackUser"

# Declare Variables for the template
$adminPassword = '<your password>'
  $adminPasswordCred = ConvertTo-SecureString "$adminPassword" -AsPlainText -Force
$sqlServerServiceAccountPassword = '<your password>'
  $sqlServerServiceAccountPasswordCred = ConvertTo-SecureString "$sqlServerServiceAccountPassword" -AsPlainText -Force
$sqlAuthPassword = '<your password>'
  $sqlAuthPasswordCred = ConvertTo-SecureString "$sqlAuthPassword" -AsPlainText -Force
$domainName = "<ActiveDirectoryDomainName>"
$adminUsername = "<adminUsername>"
$sqlServerServiceAccountUserName "<serviceAccountUsername"

$CustomTemplateJSON = "<directory>\azuredeploy.json"
$CustomTemplateParamJSON = "<directory>\azuredeploy.parameters.json"

$dnsSuffix = "azure.ukcloud.com"
$ResourceGroupName = "SqlAlwaysOnRG01"
$RegionAzureStack = "frn00006"

# Create Azure Stack Environment so that you can log in to it
Add-AzureRMEnvironment -Name $AzureStackEnvironment -ArmEndpoint $ArmEndpoint

# Create your SPN  Credentials Login
# Note: (Username is "<ApplicationId>@<AAD Domain>")
$AzsUsername = $AppGUID + "@" + $TenantDomain
$AzsPassword = $AppPassword
  $AzsUserPassword = ConvertTo-SecureString "$AzsPassword" -AsPlainText -Force
  $AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername,$AzsUserPassword

# Log in to Azure Stack using SPN account
Login-AzureRmAccount -EnvironmentName $AzureStackEnvironment -Credential $AzsCred -ServicePrincipal -TenantId $TenantDomain

# Create New ResourceGroup if it does not exist
try {
    $RG = Get-AzureRmResourceGroup -Name $ResourceGroupName -Location $RegionAzureStack -ErrorAction 'SilentlyContinue'
    if ( -not $RG) {
      write-host("Didn't find Resource Group")
      New-AzureRmResourceGroup -Name $ResourceGroupName -Location $RegionAzureStack -Verbose
      return
    } else {
      return 'Exists'
    }
  } catch {
    write-host('Could not query Resource Group')
    exit
  }

# Test Deployment
Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupAzureStack -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred  -sqlAuthPassword $sqlAuthPasswordCred -domainName $domainName -adminUsername $adminUsername -sqlServerServiceAccountUserName $sqlServerServiceAccountUserName -Verbose

# Start Deployment
New-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupAzureStack -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred  -sqlAuthPassword $sqlAuthPasswordCred -domainName $domainName -adminUsername $adminUsername -sqlServerServiceAccountUserName $sqlServerServiceAccountUserName -Verbose
```

> [!TIP]
> Every Parameter listed in [Parameter List](#list-of-the-parameters-you-can-define) can be defined in the **`New-AzureRmResourceGroupDeployment`** by simply adding *`-<parametername>`*
>
> For example:
> `-sqlVMSize "Standard_A3"`

> [!NOTE]
> If Template fails validation and you need to see detailed error message you can do:
>
> ```powershell
> Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupAzureStack -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred  -sqlAuthPassword $sqlAuthPasswordCred -sqlVMSize "Standard_A4"
>
> Code    : MultipleErrorsOccurred
> Message : Multiple error occurred: BadRequest. Please see details.
> Details : {Microsoft.Azure.Commands.ResourceManager.Cmdlets.SdkModels.PSResourceManagerError}
>
>(Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupAzureStack -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON  -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred  -sqlAuthPassword $sqlAuthPasswordCred -sqlVMSize "Standard_A4").Details
>
> Code    : InvalidTemplate
> Message : Deployment template validation failed: 'The provided value 'Standard_A4' for the template parameter 'sqlVMSize' at line '31' and column '23' is not valid. The parameter value is not part of the allowed value(s): > 'Standard_A1,Standard_A2,Standard_A3'.'.
> Details :
> ```