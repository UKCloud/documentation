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
These templates can be deployed with the Microsoft Azure Stack portal, PowerShell, Azure CLI, REST API and Visual Studio.
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

- From an elevated (run as adminstrator) PowerShell prompt run:

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

This template deploys two SQL Server 2016 SP1 Enterprise / Standard / Developer instances in the Always On Availability Group using the PowerShell DSC Extension. It creates the following resources:

- A network security group

- A Virtual Network

- Four Storage Accounts (One for AD, One for SQL, One for File Share witness and One for VM diagnostic)

- Four public IP address (One for AD, Two for each SQL VM and One for Public LB bound to SQL Always On Listener)

- One external load balancer for SQL VMs with Public IP bound to SQL always On Listener

- One VM (WS2016) configured as Domain Controller for a new forest with a single domain

- Two VM (WS2016) configured as SQL Server 2016 SP1 Enterprise / Standard / Developer and clustered.

- One VM (WS2016) configured as File Share Witness for the cluster.

### Notes

The images used to create this deployment are:

- AD - Windows Server 2016 Image

- SQL Server - SQL Server 2016 SP1 on Windows Server 2016 Image

- SQL IAAS Extension 1.2.18

- Latest DSC Extension (2.26.0 or higher)

> [!WARNING]
> If you deploy SQL STANDARD your Availability Group has got limitations as per [Basic Availability Groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/basic-availability-groups-always-on-availability-groups?view=sql-server-2017)
> ## Basic Availability Group Limitations
> Basic availability groups use a subset of features compared to advanced availability groups on SQL Server 2016 Enterprise Edition. Basic availability groups include the following limitations:
> - Limit of two replicas (primary and secondary).
>  
> - No read access on secondary replica.
>
> - No backups on secondary replica.
>
> - No integrity checks on secondary replicas.
>
> - No support for replicas hosted on servers running a version of SQL Server prior to SQL Server > 2016 Community Technology Preview 3 (CTP3).
>
> - Support for one availability database.
>
> - Basic availability groups cannot be upgraded to advanced availability groups. The group must > be dropped and re-added to a group that contains servers running only SQL Server 2016 Enterprise > Edition.
>
> - Basic availability groups are only supported for Standard Edition servers.
>
> - Basic availability groups can not be part of a distributed availability group.

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

Name                            | Description                                                                   | AllowedValues                                                         | DefaultValue                                                                         |
|---------------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| adminPassword                   | The password for the Administrator account of the new VMs and Domain          |                                                                       |                                                                                      |
| adminUsername                   | The name of the Administrator of the new VMs and Domain                       |                                                                       |                                                                                      |
| adPDCNICIPAddress               | The IP address of the new AD VM                                               |                                                                       | 10.0.0.4                                                                             |
| adVMSize                        | The size of the AD VMs Created                                                | {Standard\_A1, Standard\_A2, Standard\_A3}                            | Standard\_A2                                                                         |
| autoPatchingDay                 | The day of a week for auto patching                                           | {Never, Everyday, Sunday, Monday...}                                  | Never                                                                                |
| autoPatchingStartHour           | The start hour of a day for auto patching                                     | {0, 1, 2, 3...}                                                       | 2                                                                                    |
| deploymentPrefix                | The DNS Prefix for the Public IP Address for the Always On Cluster            |                                                                       | aodns                                                                                |
| dnsSuffix                       | The DNS Suffix for reverse lookup of public IPAddresses                       |                                                                       | azurestack.external                                                                  |
| domainName                      | The FQDN of the AD Domain created                                             |                                                                       | contoso.local                                                                        |
| platformFaultDomainCount        | Fault Domain Count Integer                                                    |                                                                       | 1                                                                                    |
| platformUpdateDomainCount       | Update Domain Count Integer                                                   |                                                                       | 1                                                                                    |
| scriptsBaseUrl                  | DSC Scripts base url                                                          |                                                                       | https://raw.githubusercontent.com/Azure/AzureStack-QuickStart-Templates/master/sq... |
| sqlAOAGName                     | The Sql AlwaysOn Group Name                                                   |                                                                       | alwayson-ag                                                                          |
| sqlAOListenerName               | The Sql AG Listener Name                                                      |                                                                       | \[tolower(concat('aon-listener-' , resourceGroup().name))\]                          |
| sqlAOListenerPort               | The Sql AG Listener port                                                      |                                                                       | 1433                                                                                 |
| sqlAuthPassword                 | The SQL Server Auth Account password                                          |                                                                       |                                                                                      |
| sqlAuthUserName                 | The SQL Server Auth Account name                                              |                                                                       | sqlsa                                                                                |
| sqlServerServiceAccountPassword | The SQL Server Service Account password                                       |                                                                       |                                                                                      |
| sqlServerServiceAccountUserName | The SQL Server Service Account name                                           |                                                                       | sqlservice                                                                           |
| sqlServerVersion                | The Sql Server Version                                                        | {SQL2016SP1-WS2016-ENT, SQL2016SP1-WS2016-DEV, SQL2016SP1-WS2016-STD} | SQL2016SP1-WS2016-ENT                                                                |
| sqlStorageAccountName           | The name of Sql Server Storage Account                                        |                                                                       | \[tolower(concat(take(uniqueString(resourceGroup().id),8),'sql'))\]                  |
| sqlStorageAccountType           | The type of the Sql Server Storage Account created                            | {Premium\_LRS, Standard\_LRS}                                         | Standard\_LRS                                                                        |
| sqlSubnet                       | The address range of the SQL subnet created in the new VNET                   |                                                                       | 10.0.1.0/26                                                                          |
| sqlVMSize                       | The size of the SQL VMs Created                                               | {Standard\_A1, Standard\_A2, Standard\_A3}                            | Standard\_A3                                                                         |
| staticSubnet                    | The address range of the subnet static IPs are allocated from in the new VNET |                                                                       | 10.0.0.0/24                                                                          |
| templatesBaseUrl                | Linked Templates base url                                                     |                                                                       | https://raw.githubusercontent.com/Azure/AzureStack-QuickStart-Templates/master/sq... |
| virtualNetworkAddressRange      | The address range of the new VNET in CIDR format                              |                                                                       | 10.0.0.0/16                                                                          |
| virtualNetworkName              | Name of virtual network to be created                                         |                                                                       | autohav2VNET                                                                         |
| vmDiskSize                      | The size of the VMs data disk in GB.                                          | {128, 256, 512, 1000}                                                 | 128                                                                                  |
| witnessVMSize                   | The size of the Witness VM Created                                            | {Standard\_A1, Standard\_A2, Standard\_A3}                            | Standard\_A1                                                                         |
| workloadType                    | The Sql VM work load type: GENERAL - general work load                        | GENERAL                                                               | GENERAL                                                                              |

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
> **`dnsSuffix`** Should be changed to - "azure.ukcloud.com" otherwise the deployment will fail because it will default to "azurestack.external" and that cannot be resolved externally
>
> In the example below it has been already set accordingly.
>
> To change which SQL Server Version to deploy set **`$sqlServerVersion`** accordingly: `SQL2016SP1-WS2016-ENT`, `SQL2016SP1-WS2016-DEV`, `SQL2016SP1-WS2016-STD`
> Current default is set to STANDARD -> **`SQL2016SP1-WS2016-STD`**
>
> **`platformFaultDomainCount`** and **`platformUpdateDomainCount`** - below we set them to 3 and 5 accordingly to spread the servers on different hosts.
>
> More information on Fault Domains and Update Domains can be found [here](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-key-features#availability-sets-in-azure-stack)



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
$sqlServerServiceAccountUserName = "<serviceAccountUsername"

$CustomTemplateJSON = "<directory>\azuredeploy.json"
$CustomTemplateParamJSON = "<directory>\azuredeploy.parameters.json"

$dnsSuffix = "azure.ukcloud.com"
$ResourceGroupName = "SqlAlwaysOnRG01"
$RegionAzureStack = "frn00006"

$sqlServerVersion  = "SQL2016SP1-WS2016-STD"
$platformFaultDomainCount = 3
$platformUpdateDomainCount = 5
$ARMDeploymentName = "SqlAlwaysOnDeployment"

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
Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupName -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred -sqlAuthPassword $sqlAuthPasswordCred -domainName $domainName -adminUsername $adminUsername -sqlServerServiceAccountUserName $sqlServerServiceAccountUserName -sqlServerVersion $sqlServerVersion -platformFaultDomainCount $platformFaultDomainCount -platformUpdateDomainCount $platformUpdateDomainCount -Verbose

# Start Deployment
New-AzureRmResourceGroupDeployment -Name $ARMDeploymentName -ResourceGroupName $ResourceGroupName -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred -sqlAuthPassword $sqlAuthPasswordCred -domainName $domainName -adminUsername $adminUsername -sqlServerServiceAccountUserName $sqlServerServiceAccountUserName -sqlServerVersion $sqlServerVersion -platformFaultDomainCount $platformFaultDomainCount -platformUpdateDomainCount $platformUpdateDomainCount -Verbose


# Verify Deployment
## Note: $ARMDeploymentName you can change to query each subdeployment in your GroupDeployment
Get-AzureRmResourceGroupDeployment -Name $ARMDeploymentName -ResourceGroupName $ResourceGroupName
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
> Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupName -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred -sqlAuthPassword $sqlAuthPasswordCred -sqlServerVersion $sqlServerVersion -platformFaultDomainCount $platformFaultDomainCount -platformUpdateDomainCount $platformUpdateDomainCount -sqlVMSize "Standard_A4"
>
> Code    : MultipleErrorsOccurred
> Message : Multiple error occurred: BadRequest. Please see details.
> Details : {Microsoft.Azure.Commands.ResourceManager.Cmdlets.SdkModels.PSResourceManagerError}
>
>(Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupName -TemplateFile $CustomTemplateJSON -TemplateParameterFile $CustomTemplateParamJSON  -dnsSuffix $dnsSuffix -adminPassword $adminPasswordCred -sqlServerServiceAccountPassword $sqlServerServiceAccountPasswordCred -sqlAuthPassword $sqlAuthPasswordCred -sqlServerVersion $sqlServerVersion -platformFaultDomainCount $platformFaultDomainCount -platformUpdateDomainCount $platformUpdateDomainCount -sqlVMSize "Standard_A4").Details
>
> Code    : InvalidTemplate
> Message : Deployment template validation failed: 'The provided value 'Standard_A4' for the template parameter 'sqlVMSize' at line '31' and column '23' is not valid. The parameter value is not part of the allowed value(s): > 'Standard_A1,Standard_A2,Standard_A3'.'.
> Details :
> ```

## Known Issues

- Sometimes Domain Account does not get correctly created and you will get the following error:

  ```powershell
  "statusMessage":
  "{\"status\":\"Failed\",\"error\":{\"code\":\"ResourceDeploymentFailure\",\"message\":\"The
  resource operation completed with terminal provisioning state 'Failed'.\",\"details\":{\"code\":\"VMExtensionProvisioningError\",\"message\":\"VM
  has reported a failure when processing extension 'sqlAOPrepare'. Error
  message: DSC Configuration 'PrepareAlwaysOnSqlServer' completed with error(s). Following arethe first few: FindDomainForAccount: Call to DsGetDcNameWithAccountW failed with return value0x0000054B Could not find account SQL-AYQE0\\r\\n The PowerShell DSC resource '[xSqlServerConfigureSqlServerWithAlwaysOn' with SourceInfo'C:\\\\Packages\\\\Plugins\\\\Microsoft.Powershell.DSC\\\\2.76.00\\\\DSCWork\\\\PrepareAlwaysOnSqlServer.ps1.0\\\\PrepareAlwaysOnSqlServerps1::205::9::xSqlServer'
  threw one or more non-terminating errors while running the Set-TargetResource functionality.These errors are logged to the ETW channel called Microsoft-Windows-DSC/Operational. Refer tothis channel for more details.\"}]}}"
  ```

  If that happens, you can just **redeploy** and it should be fine.

## Troubleshooting DSC Extensions

- [PowerShell DSC Extension](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-overview)

  - `C:\WindowsAzure\Logs\Plugins\Microsoft.Powershell.DSC\<version number>` 

- [DSC Configuration](https://powershell.org/2017/10/10/using-azure-desired-state-configuration-part-iv/) and [cmdlets](https://docs.microsoft.com/en-us/powershell/module/azurerm.compute/get-azurermvmdscextensionstatus?view=azurermps-6.5.0)

  - To view Status of the DSC deployment run:

    ```powershell
    Get-AzureRmVMDscExtension -ResourceGroupName "<ResourceGroupName>" -VMName "<VMName>" -Name "<ExtensionName>"
    Get-AzureRmVMDscExtensionStatus -ResourceGroupName "<ResourceGroupName>" -VMName "<VMName>" -Name "<ExtensionName>" | select -ExpandProperty DscConfigurationLog
    ```

- [Event Viewer Logs](http://www.codewrecks.com/blog/index.php/2014/06/15/deploying-web-site-with-powershell-dsc-part-3/)

  -  Errors are located in: `Application And Service Logs / Microsoft / Windows / Desired State Configuration`
  
## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.  
