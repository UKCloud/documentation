---
title: How to create a site-to-site VPN connection using PowerShell
description: Create a site-to-site (S2S) VPN connection from Azure Stack Hub to Microsoft Azure
services: azure-stack
author: blawson
reviewer: rjarvis
lastreviewed: 22/10/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Site-to-Site VPN Connection
toc_sub3:
toc_sub4:
toc_title: Create a site-to-site VPN connection - PowerShell
toc_fullpath: Users/How To/Create a Site-to-Site VPN Connection/azs-how-create-S2S-VPN-ps.md
toc_mdlink: azs-how-create-S2S-VPN-ps.md
---

# How to create a site-to-site VPN connection using PowerShell

## Overview

This guide shows you how to use PowerShell to create a site-to-site VPN from your UKCloud for Microsoft Azure environment to public Azure.

> [!NOTE]
> In public Azure - virtual network gateways can take up to 45 minutes to deploy, for more information see [here](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways).

### Intended audience

To complete the steps in this guide, you must have appropriate access to subscriptions in UKCloud for Microsoft Azure and public Azure.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [*Configure the Azure Stack Hub user's PowerShell environment*](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$ArmEndpoint           | The Azure Resource Manager endpoint for Azure Stack Hub                                        | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$AzsRGName             | Name of resource group to create in Azure Stack Hub                                            | <form oninput="result.value=AzsRGName.value" id="AzsRGName" style="display: inline;" ><input  type="text" id="AzsRGName" name="AzsRGName" style="display: inline;" placeholder="S2S-VPN"/></form> |
| \$AzsVNetName           | Name of virtual network to create in Azure Stack Hub                                           | <form oninput="result.value=AzsVNetName.value" id="AzsVNetName" style="display: inline;" ><input  type="text" id="AzsVNetName" name="AzsVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzsVNetRange          | Address space of virtual network to create in Azure Stack Hub in CIDR notation                 | <form oninput="result.value=AzsVNetRange.value" id="AzsVNetRange" style="display: inline;"><input  type="text" id="AzsVNetRange" name="AzsVNetRange" style="display: inline;" placeholder="10.1.0.0/16"/></form> |
| \$AzsSubnetRange        | Address space of virtual network subnet to create in Azure Stack Hub in CIDR notation          | <form oninput="result.value=AzsSubnetRange.value" id="AzsSubnetRange" style="display: inline;"><input  type="text" id="AzsSubnetRange" name="AzsSubnetRange" style="display: inline;" placeholder="10.1.0.0/24"/></form> |
| \$AzsGwSubnetRange      | Address space of virtual network gateway subnet to create in Azure Stack Hub in CIDR notation  | <form oninput="result.value=AzsGwSubnetRange.value" id="AzsGwSubnetRange" style="display: inline;"><input  type="text" id="AzsGwSubnetRange" name="AzsGwSubnetRange" style="display: inline;" placeholder="10.1.1.0/24"/></form> |
| \$AzsPublicIpName       | Name of public IP to create in Azure Stack Hub                                                 | <form oninput="result.value=AzsPublicIpName.value" id="AzsPublicIpName" style="display: inline;" ><input  type="text" id="AzsPublicIpName" name="AzsPublicIpName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzsVirtualGwName      | Name of virtual network gateway to create in Azure Stack Hub                                   | <form oninput="result.value=AzsVirtualGwName.value" id="AzsVirtualGwName" style="display: inline;" ><input  type="text" id="AzsVirtualGwName" name="AzsVirtualGwName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzsLocalGwName        | Name of local network gateway to create in Azure Stack Hub                                     | <form oninput="result.value=AzsLocalGwName.value" id="AzsLocalGwName" style="display: inline;" ><input  type="text" id="AzsLocalGwName" name="AzsLocalGwName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzsGwConnectionName   | Name of virtual network gateway connection to create in Azure Stack Hub                        | <form oninput="result.value=AzsGwConnectionName.value" id="AzsGwConnectionName" style="display: inline;" ><input  type="text" id="AzsGwConnectionName" name="AzsGwConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$AzureLocation         | Name of location to create resources within in public Azure                                | <form oninput="result.value=AzureLocation.value" id="AzureLocation" style="display: inline;" ><input  type="text" id="AzureLocation" name="AzureLocation" style="display: inline;" placeholder="UK West"/></form> |
| \$AzureRGName           | Name of resource group to create in public Azure                                           | <form oninput="result.value=AzureRGName.value" id="AzureRGName" style="display: inline;" ><input  type="text" id="AzureRGName" name="AzureRGName" style="display: inline;" placeholder="S2S-RG"/></form> |
| \$AzureVNetName         | Name of virtual network to create in public Azure                                          | <form oninput="result.value=AzureVNetName.value" id="AzureVNetName" style="display: inline;" ><input  type="text" id="AzureVNetName" name="AzureVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzureVNetRange        | Address space of virtual network to create in public Azure in CIDR notation                | <form oninput="result.value=AzureVNetRange.value" id="AzureVNetRange" style="display: inline;" ><input  type="text" id="AzureVNetRange" name="AzureVNetRange" style="display: inline;" placeholder="10.2.0.0/16"/></form> |
| \$AzureSubnetRange      | Address space of virtual network subnet to create in public Azure in CIDR notation         | <form oninput="result.value=AzureSubnetRange.value" id="AzureSubnetRange" style="display: inline;" ><input  type="text" id="AzureSubnetRange" name="AzureSubnetRange" style="display: inline;" placeholder="10.2.0.0/24"/></form> |
| \$AzureGwSubnetRange    | Address space of virtual network gateway subnet to create in public Azure in CIDR notation | <form oninput="result.value=AzureGwSubnetRange.value" id="AzureGwSubnetRange" style="display: inline;" ><input  type="text" id="AzureGwSubnetRange" name="AzureGwSubnetRange" style="display: inline;" placeholder="10.2.1.0/24"/></form> |
| \$AzurePublicIpName     | Name of public IP to create in public Azure                                                | <form oninput="result.value=AzurePublicIpName.value" id="AzurePublicIpName" style="display: inline;" ><input  type="text" id="AzurePublicIpName" name="AzurePublicIpName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzureVirtualGwName    | Name of virtual network gateway to create in public Azure                                  | <form oninput="result.value=AzureVirtualGwName.value" id="AzureVirtualGwName" style="display: inline;" ><input  type="text" id="AzureVirtualGwName" name="AzureVirtualGwName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzureLocalGwName      | Name of local network gateway to create in public Azure                                    | <form oninput="result.value=AzureLocalGwName.value" id="AzureLocalGwName" style="display: inline;" ><input  type="text" id="AzureLocalGwName" name="AzureLocalGwName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzureGwConnectionName | Name of virtual network gateway connection to create in public Azure                       | <form oninput="result.value=AzureGwConnectionName.value" id="AzureGwConnectionName" style="display: inline;" ><input  type="text" id="AzureGwConnectionName" name="AzureGwConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$SharedKey             | Encryption key to use for VPN connection                                                   | <form oninput="result.value=SharedKey.value" id="SharedKey" style="display: inline;" ><input  type="text" id="SharedKey" name="SharedKey" style="display: inline;" placeholder="Password123!"/></form> |

## Create site-to-site VPN connection from Azure Stack Hub to public Azure

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare Variables
$AzsRGName = "<output form="AzsRGName" name="result" style="display: inline;">S2S-RG</output>"
$AzsVNetName = "<output form="AzsVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzsVNetRange = "<output form="AzsVNetRange" name="result" style="display: inline;">10.1.0.0/16</output>"
$AzsSubnetRange = "<output form="AzsSubnetRange" name="result" style="display: inline;">10.1.0.0/24</output>"
$AzsGwSubnetRange = "<output form="AzsGwSubnetRange" name="result" style="display: inline;">10.1.1.0/24</output>"
$AzsPublicIpName = "<output form="AzsPublicIpName" name="result" style="display: inline;">S2S-IP</output>"
$AzsVirtualGwName = "<output form="AzsVirtualGwName" name="result" style="display: inline;">S2S-VNG</output>"
$AzsLocalGwName = "<output form="AzsLocalGwName" name="result" style="display: inline;">S2S-LNG</output>"
$AzsGwConnectionName = "<output form="AzsGwConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$AzureLocation = "<output form="AzureLocation" name="result" style="display: inline;">UK West</output>"
$AzureRGName = "<output form="AzureRGName" name="result" style="display: inline;">S2S-RG</output>"
$AzureVNetName = "<output form="AzureVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzureVNetRange = "<output form="AzureVNetRange" name="result" style="display: inline;">10.2.0.0/16</output>"
$AzureSubnetRange = "<output form="AzureSubnetRange" name="result" style="display: inline;">10.2.0.0/24</output>"
$AzureGwSubnetRange = "<output form="AzureGwSubnetRange" name="result" style="display: inline;">10.2.1.0/24</output>"
$AzurePublicIpName = "<output form="AzurePublicIpName" name="result" style="display: inline;">S2S-IP</output>"
$AzureVirtualGwName = "<output form="AzureVirtualGwName" name="result" style="display: inline;">S2S-VNG</output>"
$AzureLocalGwName = "<output form="AzureLocalGwName" name="result" style="display: inline;">S2S-LNG</output>"
$AzureGwConnectionName = "<output form="AzureGwConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$SharedKey = "<output form="SharedKey" name="result" style="display: inline;">Password123!</output>"

# Azure Stack Hub

## Login
### Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
### Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
### Connect to environment
$AzsContext = (Connect-AzureRmAccount -EnvironmentName "AzureStackUser").Context
### Retrieve Access token
$AzsAccessToken = ($AzsContext.TokenCache.ReadItems() | Where-Object -FilterScript { $_.TenantId -eq $AzsContext.Tenant.Id } | Sort-Object -Property ExpiresOn -Descending)[0].AccessToken
### Get location of Azure Stack Hub
$AzsLocation = (Get-AzureRmLocation).Location

## Create resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $AzsRGName -Location $AzsLocation

## Create network
### Create subnet configuration
Write-Output -InputObject "Creating virtual network"
$AzsSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzsSubnetRange
$AzsGwSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzsGwSubnetRange
### Create virtual network
$AzsVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVNetName -AddressPrefix $AzsVNetRange -Subnet $AzsSubnetConfig, $AzsGwSubnetConfig
### Retrieve gateway subnet config
$AzsGwSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzsVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzsPublicIp = New-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Location $AzsLocation -AllocationMethod "Dynamic" -Name $AzsPublicIpName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzsGatewayIpConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIp" -Subnet $AzsGwSubnetConfig -PublicIpAddress $AzsPublicIp
$AzsVirtualGw = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVirtualGwName -IpConfigurations $AzsGatewayIpConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzsLocalGw = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsLocalGwName -GatewayIpAddress "10.10.10.10" -AddressPrefix $AzureVNetRange

## Create IPsec Policy
$IpsecPolicy = New-AzureRmIpsecPolicy -IkeEncryption "AES256" -IkeIntegrity "SHA256" -DhGroup "DHGroup14" -IpsecEncryption "AES256" -IpsecIntegrity "SHA256" -PfsGroup "PFS2048" -SALifeTimeSeconds 3600 -SADataSizeKilobytes 102400000

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzsVirtualGwConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsGwConnectionName -VirtualNetworkGateway1 $AzsVirtualGw -LocalNetworkGateway2 $AzsLocalGw -ConnectionType IPsec -IpsecPolicies $IpsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzsPublicIp = Get-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Name $AzsPublicIpName

# Azure
## Connect to environment
Connect-AzureRmAccount

## Create resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $AzureRGName -Location $AzureLocation

## Create network
### Create subnet configurations
Write-Output -InputObject "Creating virtual network"
$AzureSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzureSubnetRange
$AzureGwSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzureGwSubnetRange
### Create virtual network
$AzureVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVNetName -AddressPrefix $AzureVNetRange -Subnet $AzureSubnetConfig, $AzureGwSubnetConfig
### Retrieve gateway subnet config
$AzureGwSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzureVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzurePublicIp = New-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Location $AzureLocation -AllocationMethod "Dynamic" -Name $AzurePublicIpName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzureGatewayIpConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIp" -Subnet $AzureGwSubnetConfig -PublicIpAddress $AzurePublicIp
$AzureVirtualGw = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVirtualGwName -IpConfigurations $AzureGatewayIpConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzureLocalGw = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureLocalGwName  -GatewayIpAddress $AzsPublicIp.IpAddress -AddressPrefix $AzsVNetRange

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzureVirtualGwConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureGwConnectionName -VirtualNetworkGateway1 $AzureVirtualGw -LocalNetworkGateway2 $AzureLocalGw -ConnectionType IPsec -IpsecPolicies $IpsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzurePublicIp = Get-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Name $AzurePublicIpName

# Azure Stack Hub
## Reconnect to environment
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -AccessToken $AzsAccessToken -AccountId $AzsContext.Account.Id

## Set the public IP on the local network gateway
$AzsLocalGw.GatewayIpAddress = $AzurePublicIp.IpAddress

## Update the local network gateway
Set-AzureRmLocalNetworkGateway -LocalNetworkGateway $AzsLocalGw
</code></pre>

After a short amount of time, the connection between Azure Stack Hub and public Azure should change to **Connected**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
