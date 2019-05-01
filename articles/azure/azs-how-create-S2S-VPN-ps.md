---
title: How to create a site-to-site VPN connection using PowerShell | UKCloud Ltd
description: Create a site-to-site (S2S) VPN connection from Azure Stack to Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer:
lastreviewed:

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

Ensure your PowerShell environment is set up as detailed in [*Configure the Azure Stack user's PowerShell environment*](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$AzsRGName             | Name of resource group to create in Azure Stack                                            | <form oninput="result.value=AzsRGName.value" id="AzsRGName" style="display: inline;" ><input  type="text" id="AzsRGName" name="AzsRGName" style="display: inline;" placeholder="S2S-VPN"/></form> |
| \$AzsVNetName           | Name of virtual network to create in Azure Stack                                           | <form oninput="result.value=AzsVNetName.value" id="AzsVNetName" style="display: inline;" ><input  type="text" id="AzsVNetName" name="AzsVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzsVNetRange          | Address space of virtual network to create in Azure Stack in CIDR notation                 | <form oninput="result.value=AzsVNetRange.value" id="AzsVNetRange" style="display: inline;"><input  type="text" id="AzsVNetRange" name="AzsVNetRange" style="display: inline;" placeholder="10.1.0.0/16"/></form> |
| \$AzsSubnetRange        | Address space of virtual network subnet to create in Azure Stack in CIDR notation          | <form oninput="result.value=AzsSubnetRange.value" id="AzsSubnetRange" style="display: inline;"><input  type="text" id="AzsSubnetRange" name="AzsSubnetRange" style="display: inline;" placeholder="10.1.0.0/24"/></form> |
| \$AzsGWSubnetRange      | Address space of virtual network gateway subnet to create in Azure Stack in CIDR notation  | <form oninput="result.value=AzsGWSubnetRange.value" id="AzsGWSubnetRange" style="display: inline;"><input  type="text" id="AzsGWSubnetRange" name="AzsGWSubnetRange" style="display: inline;" placeholder="10.1.1.0/24"/></form> |
| \$AzsPublicIPName       | Name of public IP to create in Azure Stack                                                 | <form oninput="result.value=AzsPublicIPName.value" id="AzsPublicIPName" style="display: inline;" ><input  type="text" id="AzsPublicIPName" name="AzsPublicIPName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzsVirtualGWName      | Name of virtual network gateway to create in Azure Stack                                   | <form oninput="result.value=AzsVirtualGWName.value" id="AzsVirtualGWName" style="display: inline;" ><input  type="text" id="AzsVirtualGWName" name="AzsVirtualGWName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzsLocalGWName        | Name of local network gateway to create in Azure Stack                                     | <form oninput="result.value=AzsLocalGWName.value" id="AzsLocalGWName" style="display: inline;" ><input  type="text" id="AzsLocalGWName" name="AzsLocalGWName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzsGWConnectionName   | Name of virtual network gateway connection to create in Azure Stack                        | <form oninput="result.value=AzsGWConnectionName.value" id="AzsGWConnectionName" style="display: inline;" ><input  type="text" id="AzsGWConnectionName" name="AzsGWConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$AzureLocation         | Name of location to create resources within in public Azure                                | <form oninput="result.value=AzureLocation.value" id="AzureLocation" style="display: inline;" ><input  type="text" id="AzureLocation" name="AzureLocation" style="display: inline;" placeholder="UK West"/></form> |
| \$AzureRGName           | Name of resource group to create in public Azure                                           | <form oninput="result.value=AzureRGName.value" id="AzureRGName" style="display: inline;" ><input  type="text" id="AzureRGName" name="AzureRGName" style="display: inline;" placeholder="S2S-RG"/></form> |
| \$AzureVNetName         | Name of virtual network to create in public Azure                                          | <form oninput="result.value=AzureVNetName.value" id="AzureVNetName" style="display: inline;" ><input  type="text" id="AzureVNetName" name="AzureVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzureVNetRange        | Address space of virtual network to create in public Azure in CIDR notation                | <form oninput="result.value=AzureVNetRange.value" id="AzureVNetRange" style="display: inline;" ><input  type="text" id="AzureVNetRange" name="AzureVNetRange" style="display: inline;" placeholder="10.2.0.0/16"/></form> |
| \$AzureSubnetRange      | Address space of virtual network subnet to create in public Azure in CIDR notation         | <form oninput="result.value=AzureSubnetRange.value" id="AzureSubnetRange" style="display: inline;" ><input  type="text" id="AzureSubnetRange" name="AzureSubnetRange" style="display: inline;" placeholder="10.2.0.0/24"/></form> |
| \$AzureGWSubnetRange    | Address space of virtual network gateway subnet to create in public Azure in CIDR notation | <form oninput="result.value=AzureGWSubnetRange.value" id="AzureGWSubnetRange" style="display: inline;" ><input  type="text" id="AzureGWSubnetRange" name="AzureGWSubnetRange" style="display: inline;" placeholder="10.2.1.0/24"/></form> |
| \$AzurePublicIPName     | Name of public IP to create in public Azure                                                | <form oninput="result.value=AzurePublicIPName.value" id="AzurePublicIPName" style="display: inline;" ><input  type="text" id="AzurePublicIPName" name="AzurePublicIPName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzureVirtualGWName    | Name of virtual network gateway to create in public Azure                                  | <form oninput="result.value=AzureVirtualGWName.value" id="AzureVirtualGWName" style="display: inline;" ><input  type="text" id="AzureVirtualGWName" name="AzureVirtualGWName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzureLocalGWName      | Name of local network gateway to create in public Azure                                    | <form oninput="result.value=AzureLocalGWName.value" id="AzureLocalGWName" style="display: inline;" ><input  type="text" id="AzureLocalGWName" name="AzureLocalGWName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzureGWConnectionName | Name of virtual network gateway connection to create in public Azure                       | <form oninput="result.value=AzureGWConnectionName.value" id="AzureGWConnectionName" style="display: inline;" ><input  type="text" id="AzureGWConnectionName" name="AzureGWConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$SharedKey             | Encryption key to use for VPN connection                                                   | <form oninput="result.value=SharedKey.value" id="SharedKey" style="display: inline;" ><input  type="text" id="SharedKey" name="SharedKey" style="display: inline;" placeholder="Password123!"/></form> |

## Create site-to-site VPN connection from Azure Stack to public Azure

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare Variables
$AzsRGName = "<output form="AzsRGName" name="result" style="display: inline;">S2S-RG</output>"
$AzsVNetName = "<output form="AzsVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzsVNetRange = "<output form="AzsVNetRange" name="result" style="display: inline;">10.1.0.0/16</output>"
$AzsSubnetRange = "<output form="AzsSubnetRange" name="result" style="display: inline;">10.1.0.0/24</output>"
$AzsGWSubnetRange = "<output form="AzsGWSubnetRange" name="result" style="display: inline;">10.1.1.0/24</output>"
$AzsPublicIPName = "<output form="AzsPublicIPName" name="result" style="display: inline;">S2S-IP</output>"
$AzsVirtualGWName = "<output form="AzsVirtualGWName" name="result" style="display: inline;">S2S-VNG</output>"
$AzsLocalGWName = "<output form="AzsLocalGWName" name="result" style="display: inline;">S2S-LNG</output>"
$AzsGWConnectionName = "<output form="AzsGWConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$AzureLocation = "<output form="AzureLocation" name="result" style="display: inline;">UK West</output>"
$AzureRGName = "<output form="AzureRGName" name="result" style="display: inline;">S2S-RG</output>"
$AzureVNetName = "<output form="AzureVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzureVNetRange = "<output form="AzureVNetRange" name="result" style="display: inline;">10.2.0.0/16</output>"
$AzureSubnetRange = "<output form="AzureSubnetRange" name="result" style="display: inline;">10.2.0.0/24</output>"
$AzureGWSubnetRange = "<output form="AzureGWSubnetRange" name="result" style="display: inline;">10.2.1.0/24</output>"
$AzurePublicIPName = "<output form="AzurePublicIPName" name="result" style="display: inline;">S2S-IP</output>"
$AzureVirtualGWName = "<output form="AzureVirtualGWName" name="result" style="display: inline;">S2S-VNG</output>"
$AzureLocalGWName = "<output form="AzureLocalGWName" name="result" style="display: inline;">S2S-LNG</output>"
$AzureGWConnectionName = "<output form="AzureGWConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$SharedKey = "<output form="SharedKey" name="result" style="display: inline;">Password123!</output>"

# Azure Stack

## Login
### Add environment
$StackEnvironment = Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
### Connect to environment
$AzsContext = (Connect-AzureRmAccount -EnvironmentName "AzureStackUser").Context
### Retrieve Access token
$AzsAccessToken = ($AzsContext.TokenCache.ReadItems() | Where-Object { $_.TenantId -eq $AzsContext.Tenant.Id } | Sort-Object -Property ExpiresOn -Descending)[0].AccessToken
### Pull location from environment
$AzsLocation = $StackEnvironment.StorageEndpointSuffix.split(".")[0]

## Create resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $AzsRGName -Location $AzsLocation

## Create network
### Create subnet configuration
Write-Output -InputObject "Creating virtual network"
$AzsSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzsSubnetRange
$AzsGWSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzsGWSubnetRange
### Create virtual network
$AzsVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVNetName -AddressPrefix $AzsVNetRange -Subnet $AzsSubnetConfig,$AzsGWSubnetConfig
### Retrieve gateway subnet config
$AzsGWSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzsVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzsPublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Location $AzsLocation -AllocationMethod "Dynamic" -Name $AzsPublicIPName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzsGatewayIPConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIP" -Subnet $AzsGWSubnetConfig -PublicIpAddress $AzsPublicIP
$AzsVirtualGW = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVirtualGWName -IpConfigurations $AzsGatewayIPConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzsLocalGW = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsLocalGWName -GatewayIpAddress "10.10.10.10" -AddressPrefix $AzureVNetRange

## Create IPsec Policy
$IPsecPolicy = New-AzureRmIpsecPolicy -IkeEncryption "AES256" -IkeIntegrity "SHA256" -DhGroup "DHGroup14" -IpsecEncryption "AES256" -IpsecIntegrity "SHA256" -PfsGroup "PFS2048" -SALifeTimeSeconds 3600 -SADataSizeKilobytes 102400000

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzsVirtualGWConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsGWConnectionName -VirtualNetworkGateway1 $AzsVirtualGW -LocalNetworkGateway2 $AzsLocalGW -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzsPublicIP = Get-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Name $AzsPublicIPName

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
$AzureGWSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzureGWSubnetRange
### Create virtual network
$AzureVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVNetName -AddressPrefix $AzureVNetRange -Subnet $AzureSubnetConfig,$AzureGWSubnetConfig
### Retrieve gateway subnet config
$AzureGWSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzureVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzurePublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Location $AzureLocation -AllocationMethod "Dynamic" -Name $AzurePublicIPName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzureGatewayIPConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIP" -Subnet $AzureGWSubnetConfig -PublicIpAddress $AzurePublicIP
$AzureVirtualGW = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVirtualGWName -IpConfigurations $AzureGatewayIPConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzureLocalGW = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureLocalGWName  -GatewayIpAddress $AzsPublicIP.IpAddress -AddressPrefix $AzsVNetRange

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzureVirtualGWConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureGWConnectionName -VirtualNetworkGateway1 $AzureVirtualGW -LocalNetworkGateway2 $AzureLocalGW -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzurePublicIP = Get-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Name $AzurePublicIPName

# Azure Stack
## Reconnect to environment
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -AccessToken $AzsAccessToken -AccountId $AzsContext.Account.Id

## Set the public IP on the local network gateway
$AzsLocalGW.GatewayIpAddress = $AzurePublicIP.IpAddress

## Update the local network gateway
Set-AzureRmLocalNetworkGateway -LocalNetworkGateway $AzsLocalGW
</code></pre>

After a short amount of time, the connection between Azure Stack and public Azure should change to **Connected**.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
