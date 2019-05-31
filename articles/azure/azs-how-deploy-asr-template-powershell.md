---
title: How to deploy an Azure Site Recovery template to Azure Stack using PowerShell | UKCloud Ltd
description: Learn how to deploy an Azure Site Recovery template to Azure Stack using PowerShell
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Deploy an Azure Site Recovery template to Azure Stack - PowerShell
toc_fullpath: Users/How To/azs-how-deploy-asr-template-powershell.md
toc_mdlink: azs-how-deploy-asr-template-powershell.md
---

# How to deploy an Azure Site Recovery template to Azure Stack using PowerShell

This document explains how to deploy an Azure Site Recovery configuration server Azure Resource Manager (ARM) template to Azure Stack using PowerShell.

It will guide you through the process of:

- Obtaining an ARM template

- Deploying an [ARM template for Azure Site Recovery](https://github.com/UKCloud/AzureStack/tree/master/Users/ARM%20Templates/Azure%20Site%20Recovery%20-%20Config%20Server)

## What is an ARM template?

You can use ARM templates to deploy and provision all the resources for your application in a single, coordinated operation. You can also redeploy templates to make changes to the resources in a resource group. You can deploy these templates via the Azure Stack portal, PowerShell, Azure CLI, REST API and Visual Studio. Microsoft provides some quick-start templates on [GitHub](https://aka.ms/AzureStackGitHub).

## Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 5.1 and AzureStack PowerShell Module.

  - [Configure PowerShell Environment and Azure Stack Module](azs-how-configure-powershell-users.md)

- A service principal with contributor permissions on both Azure and Azure Stack.

  - [How to create a service principal name (SPN) using PowerShell](azs-how-create-spn-powershell.md)

- A virtual network in Azure Stack to deploy the Azure Site Recovery configuration server to.

- For any VMs that you want protecting, be sure to add the relevant custom script extension. These are required as specified in the [Azure Stack Site Recovery documentation](https://docs.microsoft.com/en-us/azure/site-recovery/azure-stack-site-recovery#step-1-prepare-azure-stack-vms).

  - [Windows](https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/VMSetupForSR.ps1) - This extension disables Remote User Access control and allows WMI and File and Printer sharing on the firewall

  - [Linux](https://raw.githubusercontent.com/UKCloud/AzureStack/master/Extensions/Linux/SetRootPassword.sh) - This extension sets the root password to the input parameter, as root access is required for Azure Site Recovery

## Microsoft documentation

- [Azure Stack ARM Templates Overview](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-arm-templates)

- [Deploy a template to Azure Stack using PowerShell](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-deploy-template-powershell)

- [Understand the structure and syntax of Azure Resource Manager Templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates)

- [GitHub Azure Stack Quick-Start Template Repository](https://github.com/Azure/AzureStack-QuickStart-Templates/tree/master)

- [UKCloud Azure Stack Repository](https://github.com/UKCloud/AzureStack)

## What does the template deploy?

This template deploys a Windows Server Datacenter 2016 virtual machine, which is then configured for use with Azure Site Recovery. It also creates the following resources:

- A storage account for the configuration server disks

- A network security group for the configuration server

- A network interface for the configuration server

- A public IP address for the configuration server

- Creates a resource group (can use existing), recovery services vault (can use existing), storage account and virtual network on public Azure

### Notes

The images used to create this deployment are:

- Windows Server Datacenter 2016

- Windows Custom Script Extension

### Configuration

- The configuration server will have a 127 GB OS disk, and two 600 GB data disks.

## Overview of the ARM template deployment process for Azure Stack using service principal name (SPN) authentication

1. Declare your variables accordingly.

2. Create your Azure Stack environment.

3. Log in to your Azure Stack *Subscription* with the service principal name (SPN).

4. Check if a resource group and virtual network exist.

5. Deploy resources from the ARM template.

## Declare variables

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$StackArmEndpoint | The Azure Resource Manager endpoint for Azure Stack | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$StackResourceGroup | The resource group to deploy the ASR configuration server to on Azure Stack | <form oninput="result.value=AzsRGName.value" id="AzsRGName" style="display: inline;"><input type="text" id="AzsRGName" name="AzsRGName" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$ClientId | The application ID of a service principal with contributor permissions on Azure Stack and Azure | <form oninput="result.value=clientid.value" id="clientid" style="display: inline;"><input type="text" id="clientid" name="clientid" style="display: inline;" placeholder="00000000-0000-0000-0000-000000000000"/></form> |
| \$ClientSecret | A password of the service principal specified in the ClientID parameter | <form oninput="result.value=clientsecret.value" id="clientsecret" style="display: inline;"><input type="text" id="clientsecret" name="clientsecret" style="display: inline;" placeholder="ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jkx]="/></form> |
| \$StackVNetName | The name of the existing virtual network to connect the configuration server to on Azure Stack | <form oninput="result.value=AzsVNetName.value" id="AzsVNetName" style="display: inline;" ><input type="text" id="AzsVNetName" name="AzsVNetName" style="display: inline;" placeholder="SiteRecoveryVNet"/></form> |
| \$StackSubnetName | The name of the existing virtual network subnet to connect the configuration server to on Azure Stack | <form oninput="result.value=AzsSubnetName.value" id="AzsSubnetName" style="display: inline;"><input type="text" id="AzsSubnetName" name="AzsSubnetName" style="display: inline;" placeholder="default"/></form> |
| \$StackStorageAccount | The name of the storage account to be created on Azure Stack (Must be unique across Azure Stack)  | <form oninput="result.value=AzsSAName.value" id="AzsSAName" style="display: inline;"><input type="text" id="AzsSAName" name="AzsSAName" style="display: inline;" placeholder="siterecoverycssa"/></form> |
| \$AzureResourceGroup | The name of the resource group to be created on public Azure | <form oninput="result.value=AzureRGName.value" id="AzureRGName" style="display: inline;" ><input type="text" id="AzureRGName" name="AzureRGName" style="display: inline;" placeholder="SiteRecoveryRG"/></form> |
| \$ExistingAzureRG | Select **True** if the resource group already exists in public Azure | <form onchange="result.value=ExistingRG.value" id="ExistingRG" style="display: inline;"><select name="ExistingRG" id="ExistingRG" style="display: inline;"><option value="&#36;false">False</option><option value="&#36;true">True</option></select></form> |
| \$AzureLocation | The location of the recovery services vault on public Azure | <form oninput="result.value=AzureLocation.value" id="AzureLocation" style="display: inline;" ><input type="text" id="AzureLocation" name="AzureLocation" style="display: inline;" placeholder="ukwest"/></form> |
| \$AzureVNetName | The name of the virtual network to be created on public Azure | <form oninput="result.value=AzureVNetName.value" id="AzureVNetName" style="display: inline;" ><input type="text" id="AzureVNetName" name="AzureVNetName" style="display: inline;" placeholder="SiteRecoveryVNet"/></form> |
| \$AzureVNetRange | The address space of the virtual network to be created on public Azure (In CIDR notation)  | <form oninput="result.value=AzureVNetRange.value" id="AzureVNetRange" style="display: inline;" ><input type="text" id="AzureVNetRange" name="AzureVNetRange" style="display: inline;" placeholder="192.168.0.0/16"/></form> |
| \$AzureSubnetRange | The subnet range of the virtual network to be created on public Azure (In CIDR notation)  | <form oninput="result.value=AzureSubnetRange.value" id="AzureSubnetRange" style="display: inline;" ><input type="text" id="AzureSubnetRange" name="AzureSubnetRange" style="display: inline;" placeholder="192.168.1.0/24"/></form> |
| \$AzureStorageAccount | The name of the storage account to be created on public Azure (Must be unique across public Azure)  | <form oninput="result.value=AzureSAName.value" id="AzureSAName" style="display: inline;"><input type="text" id="AzureSAName" name="AzureSAName" style="display: inline;" placeholder="stacksiterecoverysa"/></form> |
| \$VaultName | The name of the recovery services vault to be created on public Azure  | <form oninput="result.value=VaultName.value" id="VaultName" style="display: inline;"><input type="text" id="VaultName" name="VaultName" style="display: inline;" placeholder="AzureStackVault"/></form> |
| \$ExistingAzureVault | Select **True** if the vault already exists in public Azure | <form onchange="result.value=ExistingVault.value" id="ExistingVault" style="display: inline;"><select name="ExistingVault" id="ExistingVault" style="display: inline;"><option value="&#36;false">False</option><option value="&#36;true">True</option></select></form> |
| \$ReplicationPolicyName | The name of the site recovery replication policy to be created in the recovery services vault  | <form oninput="result.value=ReplicationPolicy.value" id="ReplicationPolicy" style="display: inline;"><input type="text" id="ReplicationPolicy" name="ReplicationPolicy" style="display: inline;" placeholder="ReplicationPolicy"/></form> |
| \$ConfigServerUsername | The username for the configuration server  | <form oninput="result.value=ConfigUsername.value" id="ConfigUsername" style="display: inline;"><input type="text" id="ConfigUsername" name="ConfigUsername" style="display: inline;" placeholder="ConfigAdmin"/></form> |
| \$ConfigServerPassword | The password for the configuration server | <form oninput="result.value=ConfigPassword.value" id="ConfigPassword" style="display: inline;"><input type="text" id="ConfigPassword" name="ConfigPassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$ConfigurationServerName | The name of the configuration server VM | <form oninput="result.value=ConfigName.value" id="ConfigName" style="display: inline;"><input type="text" id="ConfigName" name="ConfigName" style="display: inline;" placeholder="SRConfigServer"/></form> |
| \$TempFilesPath | Location on configuration server where setup files will be stored | <form oninput="result.value=TempFilesPath.value" id="TempFilesPath" style="display: inline;"><input type="text" id="TempFilesPath" name="TempFilesPath" style="display: inline;" placeholder="C:\TempASR\"/></form> |
| \$ExtractionPath | The name of the folder within the TempFilesPath where the configuration server unified setup will be extracted to | <form oninput="result.value=ExtractionPath.value" id="ExtractionPath" style="display: inline;"><input type="text" id="ExtractionPath" name="ExtractionPath" style="display: inline;" placeholder="Extracted"/></form> |
| \$MySqlRootPassword | The root password for the MySQL server created on the Configuration Server (Must meet password requirements specified [below](#mysql-password-requirements)) | <form oninput="result.value=MySQLRootPassword.value" id="MySQLRootPassword" style="display: inline;"><input type="text" id="MySQLRootPassword" name="MySQLRootPassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$MySqlUserPassword | The user password for the MySQL server created on the Configuration Server (Must meet password requirements specified [below](#mysql-password-requirements)) | <form oninput="result.value=MySQLUserPassword.value" id="MySQLUserPassword" style="display: inline;"><input type="text" id="MySQLUserPassword" name="MySQLUserPassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$EncryptionKey | The encryption key for the MySQL database on the configuration server  | <form oninput="result.value=EncryptionKey.value" id="EncryptionKey" style="display: inline;"><input type="text" id="EncryptionKey" name="EncryptionKey" style="display: inline;" placeholder="ExampleEncryptionKey"/></form> |
| \$WindowsUsername | The username of an administrator account on the Windows VMs to be protected  | <form oninput="result.value=WindowsUsername.value" id="WindowsUsername" style="display: inline;"><input type="text" id="WindowsUsername" name="WindowsUsername" style="display: inline;" placeholder="Administrator"/></form> |
| \$WindowsPassword | The password of an administrator account on the Windows VMs to be protected | <form oninput="result.value=WindowsPassword.value" id="WindowsPassword" style="display: inline;"><input type="text" id="WindowsPassword" name="WindowsPassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$LinuxRootPassword | The password of the root account on the Linux VMs to be protected | <form oninput="result.value=LinuxPassword.value" id="LinuxPassword" style="display: inline;"><input type="text" id="LinuxPassword" name="LinuxPassword" style="display: inline;" placeholder="Password123!"/></form> |

### MySQL password requirements

MySQL passwords must conform to all of the following rules:

- Must contain at least one letter

- Must contain at least one number

- Must contain at least one special character (_!@#$%)

- Must be between 8 and 16 characters

- Cannot contain spaces

## Deploy ARM template code

Change the required variables as per your environment and run the following script:

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$StackArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

## Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $StackArmEndpoint

## Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack
$Location = (Get-AzureRmLocation).Location

# Declare template variables
$StackResourceGroup = "<output form="AzsRGName" name="result" style="display: inline;">MyResourceGroup</output>"
$ClientId = "<output form="clientid" name="result" style="display: inline;">00000000-0000-0000-0000-000000000000</output>"
$ClientSecret = '<output form="clientsecret" name="result" style="display: inline;">ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jkx]=</output>'
$StackVNetName = "<output form="AzsVNetName" name="result" style="display: inline;">SiteRecoveryVNet</output>"
$StackSubnetName = "<output form="AzsSubnetName" name="result" style="display: inline;">default</output>"
$StackStorageAccount = "<output form="AzsSAName" name="result" style="display: inline;">siterecoverycssa<span id="RandNum8"></span></output>"
$AzureResourceGroup = "<output form="AzureRGName" name="result" style="display: inline;">SiteRecoveryRG</output>"
$ExistingAzureRG = <output form="ExistingRG" name="result" style="display: inline;">$false</output>
$AzureLocation = "<output form="AzureLocation" name="result" style="display: inline;">ukwest</output>"
$AzureVNetName = "<output form="AzureVNetName" name="result" style="display: inline;">SiteRecoveryVNet</output>"
$AzureVNetRange = "<output form="AzureVNetRange" name="result" style="display: inline;">192.168.0.0/16</output>"
$AzureSubnetRange = "<output form="AzureSubnetRange" name="result" style="display: inline;">192.168.1.0/24</output>"
$AzureStorageAccount = "<output form="AzureSAName" name="result" style="display: inline;">stacksiterecoverysa<span id="RandNum5"></span></output>"
$VaultName = "<output form="VaultName" name="result" style="display: inline;">AzureStackVault</output>"
$ExistingAzureVault = <output form="ExistingVault" name="result" style="display: inline;">$false</output>
$ReplicationPolicyName = "<output form="ReplicationPolicy" name="result" style="display: inline;">ReplicationPolicy</output>"
$ConfigServerUsername = "<output form="ConfigUsername" name="result" style="display: inline;">ConfigAdmin</output>"
$ConfigServerPassword = '<output form="ConfigPassword" name="result" style="display: inline;">Password123!</output>'
$ConfigurationServerName = "<output form="ConfigName" name="result" style="display: inline;">SRConfigServer</output>"
$TempFilesPath = "<output form="TempFilesPath" name="result" style="display: inline;">C:\TempASR\</output>"
$ExtractionPath = "<output form="ExtractionPath" name="result" style="display: inline;">Extracted</output>"
$MySqlRootPassword = '<output form="MySQLRootPassword" name="result" style="display: inline;">Password123!</output>'
$MySqlUserPassword = '<output form="MySQLUserPassword" name="result" style="display: inline;">Password123!</output>'
$EncryptionKey = '<output form="EncryptionKey" name="result" style="display: inline;">ExampleEncryptionKey</output>'
$WindowsUsername = "<output form="WindowsUsername" name="result" style="display: inline;">Administrator</output>"
$WindowsPassword = '<output form="WindowsPassword" name="result" style="display: inline;">Password123!</output>'
$LinuxRootPassword = '<output form="LinuxPassword" name="result" style="display: inline;">Password123!</output>'
$TemplateUri = "https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/ARM%20Templates/Azure%20Site%20Recovery%20-%20Config%20Server/azuredeploy.json"

# Validate that resource group, virtual network and subnet exist
$TestRG = Get-AzureRmResourceGroup -Name $StackResourceGroup
if ($TestRG) {
    $TestVNet = Get-AzureRmVirtualNetwork -Name $StackVNetName -ResourceGroupName $StackResourceGroup
    if ($TestVNet) {
        $TestSubnet = Get-AzureRmVirtualNetworkSubnetConfig -Name $StackSubnetName -VirtualNetwork $TestVNet
        if ($TestSubnet) {
            Write-Output -InputObject "Validated resource group, virtual network and subnet successfully"
        }
        else {
            Write-Error -Message "Could not find subnet with name $StackSubnetName, please check and try again"
            break
        }
    }
    else {
        Write-Error -Message "Could not find virtual network with name $StackVNetName, please check and try again"
        break
    }
}
else {
    Write-Error -Message "Could not find resource group with name $StackResourceGroup, please check and try again"
    break
}

# Create ARM template parameters object
$TemplateParameters = @{
    "Client ID" = $ClientId
    "Client Secret" = $ClientSecret
    "Stack Arm Endpoint" = $StackArmEndpoint
    "Stack VNet Name" = $StackVNetName
    "Stack Subnet Name" = $StackSubnetName
    "Stack Storage Account" = $StackStorageAccount
    "Azure Resource Group" = $AzureResourceGroup
    "Existing Azure Resource Group" = $ExistingAzureRG
    "Azure Location" = $AzureLocation
    "Azure VNet Name" = $AzureVNetName
    "Azure VNet Range" = $AzureVNetRange
    "Azure Subnet Range" = $AzureSubnetRange
    "Azure Storage Account" = $AzureStorageAccount
    "Vault Name" = $VaultName
    "Existing Azure Vault" = $ExistingAzureVault
    "Replication Policy Name" = $ReplicationPolicyName
    "Config Server Username" = $ConfigServerUsername
    "Config Server Password" = $ConfigServerPassword
    "Config Server Name" = $ConfigurationServerName
    "Temporary Files Path" = $TempFilesPath
    "Extraction Path" = $ExtractionPath
    "MySQL Root Password" = $MySqlRootPassword
    "MySQL User Password" = $MySqlUserPassword
    "Encryption Key" = $EncryptionKey
    "Windows Username" = $WindowsUsername
    "Windows Password" = $WindowsPassword
    "Linux Root Password" = $LinuxRootPassword
}

# Test deployment
$TestDeployment = Test-AzureRmResourceGroupDeployment -ResourceGroupName $StackResourceGroup -TemplateUri $TemplateUri -TemplateParameterObject $TemplateParameters

# Deploy ARM template
if ($TestDeployment.Count -eq 0) {
    Write-Output -InputObject "Deploying ARM template..."
    Write-Warning -Message "This may take a while..."
    New-AzureRmResourceGroupDeployment -ResourceGroupName $StackResourceGroup -TemplateUri $TemplateUri -TemplateParameterObject $TemplateParameters -Name "AzureSiteRecovery"
}
else {
    Write-Warning -Message "Unable to deploy ARM template due to following issue(s):"
    $TestDeployment
    break
}
</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.

<script>document.getElementById("RandNum5").innerHTML = Math.round(Math.random()*100000)</script>
<script>document.getElementById("RandNum8").innerHTML = Math.round(Math.random()*100000000)</script>
