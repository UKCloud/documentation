---
title: How to create a site-to-site VPN connection between Azure Stack Hub and public Azure using PowerShell
description: Create a site-to-site (S2S) VPN gateway connection between Azure Stack Hub and public Azure using PowerShell
services: azure-stack
author: blawson
reviewer: rjarvis
lastreviewed: 25/11/2020

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

This guide shows you how to use PowerShell to create a site-to-site VPN connection from your Azure Stack Hub environment to public Azure.

> [!NOTE]
> In public Azure - virtual network gateways can take up to 45 minutes to deploy, for more information see [here](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways).

### Intended audience

To complete the steps in this guide, you must have appropriate access to subscriptions in both Azure Stack Hub and public Azure.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [*Configure the Azure Stack Hub user's PowerShell environment*](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$ArmEndpoint           | The Azure Resource Manager endpoint for Azure Stack Hub                                        | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$AzsResourceGroupName  | Name of resource group to create in Azure Stack Hub                                            | <form oninput="result.value=AzsResourceGroupName.value" id="AzsResourceGroupName" style="display: inline;" ><input  type="text" id="AzsResourceGroupName" name="AzsResourceGroupName" style="display: inline;" placeholder="S2S-VPN"/></form> |
| \$AzsVNetName           | Name of virtual network to create in Azure Stack Hub                                           | <form oninput="result.value=AzsVNetName.value" id="AzsVNetName" style="display: inline;" ><input  type="text" id="AzsVNetName" name="AzsVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzsVNetRange          | Address space of virtual network to create in Azure Stack Hub in CIDR notation                 | <form oninput="result.value=AzsVNetRange.value" id="AzsVNetRange" style="display: inline;"><input  type="text" id="AzsVNetRange" name="AzsVNetRange" style="display: inline;" placeholder="10.1.0.0/16"/></form> |
| \$AzsSubnetRange        | Address space of virtual network subnet to create in Azure Stack Hub in CIDR notation          | <form oninput="result.value=AzsSubnetRange.value" id="AzsSubnetRange" style="display: inline;"><input  type="text" id="AzsSubnetRange" name="AzsSubnetRange" style="display: inline;" placeholder="10.1.0.0/24"/></form> |
| \$AzsGatewaySubnetRange      | Address space of virtual network gateway subnet to create in Azure Stack Hub in CIDR notation  | <form oninput="result.value=AzsGatewaySubnetRange.value" id="AzsGatewaySubnetRange" style="display: inline;"><input  type="text" id="AzsGatewaySubnetRange" name="AzsGatewaySubnetRange" style="display: inline;" placeholder="10.1.1.0/24"/></form> |
| \$AzsPublicIpName       | Name of public IP to create in Azure Stack Hub                                                 | <form oninput="result.value=AzsPublicIpName.value" id="AzsPublicIpName" style="display: inline;" ><input  type="text" id="AzsPublicIpName" name="AzsPublicIpName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzsVirtualGatewayName      | Name of virtual network gateway to create in Azure Stack Hub                                   | <form oninput="result.value=AzsVirtualGatewayName.value" id="AzsVirtualGatewayName" style="display: inline;" ><input  type="text" id="AzsVirtualGatewayName" name="AzsVirtualGatewayName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzsLocalGatewayName        | Name of local network gateway to create in Azure Stack Hub                                     | <form oninput="result.value=AzsLocalGatewayName.value" id="AzsLocalGatewayName" style="display: inline;" ><input  type="text" id="AzsLocalGatewayName" name="AzsLocalGatewayName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzsGatewayConnectionName   | Name of virtual network gateway connection to create in Azure Stack Hub                        | <form oninput="result.value=AzsGatewayConnectionName.value" id="AzsGatewayConnectionName" style="display: inline;" ><input  type="text" id="AzsGatewayConnectionName" name="AzsGatewayConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$AzureLocation         | Name of location to create resources within in public Azure                                | <form oninput="result.value=AzureLocation.value" id="AzureLocation" style="display: inline;" ><input  type="text" id="AzureLocation" name="AzureLocation" style="display: inline;" placeholder="UK West"/></form> |
| \$AzureResourceGroupName| Name of resource group to create in public Azure                                           | <form oninput="result.value=AzureResourceGroupName.value" id="AzureResourceGroupName" style="display: inline;" ><input  type="text" id="AzureResourceGroupName" name="AzureResourceGroupName" style="display: inline;" placeholder="S2S-ResourceGroup"/></form> |
| \$AzureVNetName         | Name of virtual network to create in public Azure                                          | <form oninput="result.value=AzureVNetName.value" id="AzureVNetName" style="display: inline;" ><input  type="text" id="AzureVNetName" name="AzureVNetName" style="display: inline;" placeholder="S2S-VNet"/></form> |
| \$AzureVNetRange        | Address space of virtual network to create in public Azure in CIDR notation                | <form oninput="result.value=AzureVNetRange.value" id="AzureVNetRange" style="display: inline;" ><input  type="text" id="AzureVNetRange" name="AzureVNetRange" style="display: inline;" placeholder="10.2.0.0/16"/></form> |
| \$AzureSubnetRange      | Address space of virtual network subnet to create in public Azure in CIDR notation         | <form oninput="result.value=AzureSubnetRange.value" id="AzureSubnetRange" style="display: inline;" ><input  type="text" id="AzureSubnetRange" name="AzureSubnetRange" style="display: inline;" placeholder="10.2.0.0/24"/></form> |
| \$AzureGatewaySubnetRange    | Address space of virtual network gateway subnet to create in public Azure in CIDR notation | <form oninput="result.value=AzureGatewaySubnetRange.value" id="AzureGatewaySubnetRange" style="display: inline;" ><input  type="text" id="AzureGatewaySubnetRange" name="AzureGatewaySubnetRange" style="display: inline;" placeholder="10.2.1.0/24"/></form> |
| \$AzurePublicIpName     | Name of public IP to create in public Azure                                                | <form oninput="result.value=AzurePublicIpName.value" id="AzurePublicIpName" style="display: inline;" ><input  type="text" id="AzurePublicIpName" name="AzurePublicIpName" style="display: inline;" placeholder="S2S-IP"/></form> |
| \$AzureVirtualGatewayName    | Name of virtual network gateway to create in public Azure                                  | <form oninput="result.value=AzureVirtualGatewayName.value" id="AzureVirtualGatewayName" style="display: inline;" ><input  type="text" id="AzureVirtualGatewayName" name="AzureVirtualGatewayName" style="display: inline;" placeholder="S2S-VNG"/></form> |
| \$AzureLocalGatewayName      | Name of local network gateway to create in public Azure                                    | <form oninput="result.value=AzureLocalGatewayName.value" id="AzureLocalGatewayName" style="display: inline;" ><input  type="text" id="AzureLocalGatewayName" name="AzureLocalGatewayName" style="display: inline;" placeholder="S2S-LNG"/></form> |
| \$AzureGatewayConnectionName | Name of virtual network gateway connection to create in public Azure                       | <form oninput="result.value=AzureGatewayConnectionName.value" id="AzureGatewayConnectionName" style="display: inline;" ><input  type="text" id="AzureGatewayConnectionName" name="AzureGatewayConnectionName" style="display: inline;" placeholder="S2S-Connection"/></form> |
| \$SharedKey             | Encryption key to use for VPN connection                                                   | <form oninput="result.value=SharedKey.value" id="SharedKey" style="display: inline;" ><input  type="text" id="SharedKey" name="SharedKey" style="display: inline;" placeholder="Password123!"/></form> |

## Create site-to-site VPN connection from Azure Stack Hub to public Azure

From your PowerShell window:

<pre><code class="language-PowerShell"># Declare Variables
$AzsResourceGroupName = "<output form="AzsResourceGroupName" name="result" style="display: inline;">S2S-ResourceGroup</output>"
$AzsVNetName = "<output form="AzsVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzsVNetRange = "<output form="AzsVNetRange" name="result" style="display: inline;">10.1.0.0/16</output>"
$AzsSubnetRange = "<output form="AzsSubnetRange" name="result" style="display: inline;">10.1.0.0/24</output>"
$AzsGatewaySubnetRange = "<output form="AzsGatewaySubnetRange" name="result" style="display: inline;">10.1.1.0/24</output>"
$AzsPublicIpName = "<output form="AzsPublicIpName" name="result" style="display: inline;">S2S-IP</output>"
$AzsVirtualGatewayName = "<output form="AzsVirtualGatewayName" name="result" style="display: inline;">S2S-VNG</output>"
$AzsLocalGatewayName = "<output form="AzsLocalGatewayName" name="result" style="display: inline;">S2S-LNG</output>"
$AzsGatewayConnectionName = "<output form="AzsGatewayConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$AzureLocation = "<output form="AzureLocation" name="result" style="display: inline;">UK West</output>"
$AzureResourceGroupName = "<output form="AzureResourceGroupName" name="result" style="display: inline;">S2S-ResourceGroup</output>"
$AzureVNetName = "<output form="AzureVNetName" name="result" style="display: inline;">S2S-VNet</output>"
$AzureVNetRange = "<output form="AzureVNetRange" name="result" style="display: inline;">10.2.0.0/16</output>"
$AzureSubnetRange = "<output form="AzureSubnetRange" name="result" style="display: inline;">10.2.0.0/24</output>"
$AzureGatewaySubnetRange = "<output form="AzureGatewaySubnetRange" name="result" style="display: inline;">10.2.1.0/24</output>"
$AzurePublicIpName = "<output form="AzurePublicIpName" name="result" style="display: inline;">S2S-IP</output>"
$AzureVirtualGatewayName = "<output form="AzureVirtualGatewayName" name="result" style="display: inline;">S2S-VNG</output>"
$AzureLocalGatewayName = "<output form="AzureLocalGatewayName" name="result" style="display: inline;">S2S-LNG</output>"
$AzureGatewayConnectionName = "<output form="AzureGatewayConnectionName" name="result" style="display: inline;">S2S-Connection</output>"
$SharedKey = "<output form="SharedKey" name="result" style="display: inline;">Password123!</output>"

# Azure Stack Hub

## Login
### Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"
### Add environment
Add-AzEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint
### Connect to environment
$AzsContext = (Connect-AzAccount -EnvironmentName "AzureStackUser" -UseDeviceAuthentication).Context
### Retrieve Access token
$AzsAccessToken = ($AzsContext.TokenCache.ReadItems() | Where-Object -FilterScript { $_.TenantId -eq $AzsContext.Tenant.Id } | Sort-Object -Property ExpiresOn -Descending)[0].AccessToken
### Get location of Azure Stack Hub
$AzsLocation = (Get-AzLocation).Location

## Create resource group
Write-Output -InputObject "Creating resource group"
New-AzResourceGroup -Name $AzsResourceGroupName -Location $AzsLocation

## Create network
### Create subnet configuration
Write-Output -InputObject "Creating virtual network"
$AzsSubnetConfig = New-AzVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzsSubnetRange
$AzsGatewaySubnetConfig = New-AzVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzsGatewaySubnetRange
### Create virtual network
$AzsVirtualNetwork = New-AzVirtualNetwork -ResourceGroupName $AzsResourceGroupName -Location $AzsLocation -Name $AzsVNetName -AddressPrefix $AzsVNetRange -Subnet $AzsSubnetConfig, $AzsGatewaySubnetConfig
### Retrieve gateway subnet config
$AzsGatewaySubnetConfig = Get-AzVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzsVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzsPublicIp = New-AzPublicIpAddress -ResourceGroupName $AzsResourceGroupName -Location $AzsLocation -AllocationMethod "Dynamic" -Name $AzsPublicIpName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzsGatewayIpConfig = New-AzVirtualNetworkGatewayIpConfig -Name "GatewayIp" -Subnet $AzsGatewaySubnetConfig -PublicIpAddress $AzsPublicIp
$AzsVirtualGateway = New-AzVirtualNetworkGateway -ResourceGroupName $AzsResourceGroupName -Location $AzsLocation -Name $AzsVirtualGatewayName -IpConfigurations $AzsGatewayIpConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGateway1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzsLocalGateway = New-AzLocalNetworkGateway -ResourceGroupName $AzsResourceGroupName -Location $AzsLocation -Name $AzsLocalGatewayName -GatewayIpAddress "10.10.10.10" -AddressPrefix $AzureVNetRange

## Create IPsec Policy
$IpsecPolicy = New-AzIpsecPolicy -IkeEncryption "AES256" -IkeIntegrity "SHA256" -DhGroup "DHGroup14" -IpsecEncryption "AES256" -IpsecIntegrity "SHA256" -PfsGroup "PFS2048" -SALifeTimeSeconds 3600 -SADataSizeKilobytes 102400000

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzsVirtualGatewayConnection = New-AzVirtualNetworkGatewayConnection -ResourceGroupName $AzsResourceGroupName -Location $AzsLocation -Name $AzsGatewayConnectionName -VirtualNetworkGateway1 $AzsVirtualGateway -LocalNetworkGateway2 $AzsLocalGateway -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzsPublicIP = Get-AzPublicIpAddress -ResourceGroupName $AzsResourceGroupName -Name $AzsPublicIPName

# Azure
## Connect to environment
Connect-AzAccount -UseDeviceAuthentication

## Create resource group
Write-Output -InputObject "Creating resource group"
New-AzResourceGroup -Name $AzureResourceGroupName -Location $AzureLocation

## Create network
### Create subnet configurations
Write-Output -InputObject "Creating virtual network"
$AzureSubnetConfig = New-AzVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzureSubnetRange
$AzureGatewaySubnetConfig = New-AzVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzureGatewaySubnetRange
### Create virtual network
$AzureVirtualNetwork = New-AzVirtualNetwork -ResourceGroupName $AzureResourceGroupName -Location $AzureLocation -Name $AzureVNetName -AddressPrefix $AzureVNetRange -Subnet $AzureSubnetConfig, $AzureGatewaySubnetConfig
### Retrieve gateway subnet config
$AzureGatewaySubnetConfig = Get-AzVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzureVirtualNetwork

## Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzurePublicIP = New-AzPublicIpAddress -ResourceGroupName $AzureResourceGroupName -Location $AzureLocation -AllocationMethod "Dynamic" -Name $AzurePublicIPName

## Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzureGatewayIPConfig = New-AzVirtualNetworkGatewayIpConfig -Name "GatewayIP" -Subnet $AzureGatewaySubnetConfig -PublicIpAddress $AzurePublicIP
$AzureVirtualGateway = New-AzVirtualNetworkGateway -ResourceGroupName $AzureResourceGroupName -Location $AzureLocation -Name $AzureVirtualGatewayName -IpConfigurations $AzureGatewayIPConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGateway1"

## Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzureLocalGateway = New-AzLocalNetworkGateway -ResourceGroupName $AzureResourceGroupName -Location $AzureLocation -Name $AzureLocalGatewayName  -GatewayIpAddress $AzsPublicIP.IpAddress -AddressPrefix $AzsVNetRange

## Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzureVirtualGatewayConnection = New-AzVirtualNetworkGatewayConnection -ResourceGroupName $AzureResourceGroupName -Location $AzureLocation -Name $AzureGatewayConnectionName -VirtualNetworkGateway1 $AzureVirtualGateway -LocalNetworkGateway2 $AzureLocalGateway -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

## Retrieve public IP address of virtual network gateway
$AzurePublicIP = Get-AzPublicIpAddress -ResourceGroupName $AzureResourceGroupName -Name $AzurePublicIPName

# Azure Stack Hub
## Reconnect to environment
Connect-AzAccount -EnvironmentName "AzureStackUser" -UseDeviceAuthentication -AccessToken $AzsAccessToken -AccountId $AzsContext.Account.Id

## Set the public IP on the local network gateway
$AzsLocalGateway.GatewayIpAddress = $AzurePublicIP.IpAddress

## Update the local network gateway
Set-AzLocalNetworkGateway -LocalNetworkGateway $AzsLocalGateway
</code></pre>

After a short amount of time, the connection between Azure Stack Hub and public Azure should change to **Connected**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
