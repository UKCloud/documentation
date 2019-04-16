---
title: How to create a site-to-site VPN connection using PowerShell | UKCloud Ltd
description: Create a site-to-site (S2S) VPN connection from Azure Stack to Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a site-to-site VPN connection - PowerShell
toc_fullpath: Users/How To/azs-how-create-S2S-VPN-ps.md
toc_mdlink: azs-how-create-S2S-VPN-ps.md
---

# How to create a site-to-site connection using the UKCloud Azure Stack portal

## Overview

This guide shows you how to use PowerShell to create a Site-to-Site VPN from your UKCloud Azure Stack environment to public Azure.

### Intended audience

To complete the steps in this guide, you must have appropriate access to subscriptions in UKCloud Azure Stack and public Azure.

## Prerequisites

Ensure your PowerShell environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-powershell-users.md).

## Declare variables

| Variable name           | Variable description                                                      | Example          |
|-------------------------|---------------------------------------------------------------------------|------------------|
| \$AzsRGName             | Name of resource group to create in Azure Stack                           | "S2S-RG"         |
| \$AzsVNetName           | Name of virtual network to create in Azure Stack                          | "S2S-VNet"       |
| \$AzsVNetRange          | Address space of virtual network to create in Azure Stack                 | "10.1.0.0/16"    |
| \$AzsSubnetRange        | Address space of virtual network subnet to create in Azure Stack          | "10.1.0.0/24"    |
| \$AzsGWSubnetRange      | Address space of virtual network gateway subnet to create in Azure Stack  | "10.1.1.0/24"    |
| \$AzsPublicIPName       | Name of public IP to create in Azure Stack                                | "S2S-IP"         |
| \$AzsVirtualGWName      | Name of virtual network gateway to create in Azure Stack                  | "S2S-VNG"        |
| \$AzsLocalGWName        | Name of local network gateway to create in Azure Stack                    | "S2S-LNG"        |
| \$AzsGWConnectionName   | Name of virtual network gateway connection to create in Azure Stack       | "S2S-Connection" |
| \$AzureVNetRange        | Address space of virtual network to create in public Azure                | "10.2.0.0/16"    |
| \$AzureLocation         | Name of location to create resources within in public Azure               | "UK West"        |
| \$AzureRGName           | Name of resource group to create in public Azure                          | "S2S-RG"         |
| \$AzureSubnetRange      | Address space of virtual network subnet to create in public Azure         | "10.2.0.0/24"    |
| \$AzureGWSubnetRange    | Address space of virtual network gateway subnet to create in public Azure | "10.2.1.0/24"    |
| \$AzureVNetName         | Name of virtual network to create in public Azure                         | "S2S-VNet"       |
| \$AzurePublicIPName     | Name of public IP to create in public Azure                               | "S2S-IP"         |
| \$AzureVirtualGWName    | Name of virtual network gateway to create in public Azure                 | "S2S-VNG"        |
| \$AzureLocalGWName      | Name of local network gateway to create in public Azure                   | "S2S-LNG"        |
| \$AzureGWConnectionName | Name of virtual network gateway connection to create in public Azure      | "S2S-Connection" |
| \$SharedKey             | Encryption key to use for VPN connection                                  | "Password123!"   |

From your PowerShell window:

```powershell
# Declare Variables
$AzsRGName = "S2S-RG"
$AzsVNetName = "S2S-VNet"
$AzsVNetRange = "10.1.0.0/16"
$AzsSubnetRange = "10.1.0.0/24"
$AzsGWSubnetRange = "10.1.1.0/24"
$AzsPublicIPName = "S2S-IP"
$AzsVirtualGWName = "S2S-VNG"
$AzsLocalGWName = "S2S-LNG"
$AzsGWConnectionName = "S2S-Connection"
$AzureVNetRange = "10.2.0.0/16"
$AzureLocation = "UK West"
$AzureRGName = "S2S-RG"
$AzureSubnetRange = "10.2.0.0/24"
$AzureGWSubnetRange = "10.2.1.0/24"
$AzureVNetName = "S2S-VNet"
$AzurePublicIPName = "S2S-IP"
$AzureVirtualGWName = "S2S-VNG"
$AzureLocalGWName = "S2S-LNG"
$AzureGWConnectionName = "S2S-Connection"
$SharedKey = "Password123!"
```

## Initial Azure Stack setup

The following code creates a resource group, virtual network, public IP, virtual netowrk gateway, local network gateway and connection in your Azure Stack subscription.

From your PowerShell window:

```powershell
# Login

## Add environment
$StackEnvironment = Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
## Connect to environment
$AzsContext = (Connect-AzureRmAccount -EnvironmentName "AzureStackUser").Context
## Retrieve Access token
$AzsAccessToken = ($AzsContext.TokenCache.ReadItems() | Where-Object { $_.TenantId -eq $AzsContext.Tenant.Id } | Sort-Object -Property ExpiresOn -Descending)[0].AccessToken
## Pull location from environment
$AzsLocation = $StackEnvironment.StorageEndpointSuffix.split(".")[0]

# Create resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $AzsRGName -Location $AzsLocation

# Create network

## Create subnet configuration
Write-Output -InputObject "Creating virtual network"
$AzsSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzsSubnetRange
$AzsGWSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzsGWSubnetRange
## Create virtual network
$AzsVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVNetName -AddressPrefix $AzsVNetRange `
    -Subnet $AzsSubnetConfig,$AzsGWSubnetConfig
## Retrieve gateway subnet config
$AzsGWSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzsVirtualNetwork

# Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzsPublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Location $AzsLocation -AllocationMethod "Dynamic" `
    -Name $AzsPublicIPName

# Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzsGatewayIPConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIP" -Subnet $AzsGWSubnetConfig -PublicIpAddress $AzsPublicIP
$AzsVirtualGW = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsVirtualGWName `
    -IpConfigurations $AzsGatewayIPConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

# Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzsLocalGW = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsLocalGWName  `
    -GatewayIpAddress "10.10.10.10" -AddressPrefix $AzureVNetRange

# Create IPsec Policy
$IPsecPolicy = New-AzureRmIpsecPolicy -IkeEncryption "AES256" -IkeIntegrity "SHA256" -DhGroup "DHGroup14" -IpsecEncryption "AES256" `
    -IpsecIntegrity "SHA256" -PfsGroup "PFS2048" -SALifeTimeSeconds 14400 -SADataSizeKilobytes 102400000

# Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzsVirtualGWConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzsRGName -Location $AzsLocation -Name $AzsGWConnectionName `
    -VirtualNetworkGateway1 $AzsVirtualGW -LocalNetworkGateway2 $AzsLocalGW -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

# Retrieve public IP address of virtual network gateway
$AzsPublicIP = Get-AzureRmPublicIpAddress -ResourceGroupName $AzsRGName -Name $AzsPublicIPName
```

## Public Azure configuration

The following code creates a resource group, virtual network, public IP, virtual netowrk gateway, local network gateway and connection in your public Azure subscription.

From your PowerShell window:

```powershell
# Connect to environment
Connect-AzureRmAccount

# Create resource group
Write-Output -InputObject "Creating resource group"
New-AzureRmResourceGroup -Name $AzureRGName -Location $AzureLocation

# Create network
## Create subnet configurations
Write-Output -InputObject "Creating virtual network"
$AzureSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "Default" -AddressPrefix $AzureSubnetRange
$AzureGWSubnetConfig = New-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -AddressPrefix $AzureGWSubnetRange
## Create virtual network
$AzureVirtualNetwork = New-AzureRmVirtualNetwork -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVNetName -AddressPrefix $AzureVNetRange `
    -Subnet $AzureSubnetConfig,$AzureGWSubnetConfig
## Retrieve gateway subnet config
$AzureGWSubnetConfig = Get-AzureRmVirtualNetworkSubnetConfig -Name "GatewaySubnet" -VirtualNetwork $AzureVirtualNetwork

# Create public IP address
Write-Output -InputObject "Creating public IP address"
$AzurePublicIP = New-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Location $AzureLocation -AllocationMethod "Dynamic" `
    -Name $AzurePublicIPName

# Create virtual network gateway
Write-Output -InputObject "Creating virtual network gateway"
$AzureGatewayIPConfig = New-AzureRmVirtualNetworkGatewayIpConfig -Name "GatewayIP" -Subnet $AzureGWSubnetConfig -PublicIpAddress $AzurePublicIP
$AzureVirtualGW = New-AzureRmVirtualNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureVirtualGWName `
    -IpConfigurations $AzureGatewayIPConfig -GatewayType "VPN" -VpnType "RouteBased" -GatewaySku "VpnGw1"

# Create local network gateway
Write-Output -InputObject "Creating local network gateway"
$AzureLocalGW = New-AzureRmLocalNetworkGateway -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureLocalGWName  `
    -GatewayIpAddress $AzsPublicIP.IpAddress -AddressPrefix $AzsVNetRange

# Create virtual network gateway connection
Write-Output -InputObject "Creating virtual network gateway connection"
$AzureVirtualGWConnection = New-AzureRmVirtualNetworkGatewayConnection -ResourceGroupName $AzureRGName -Location $AzureLocation -Name $AzureGWConnectionName `
    -VirtualNetworkGateway1 $AzureVirtualGW -LocalNetworkGateway2 $AzureLocalGW -ConnectionType IPsec -IpsecPolicies $IPsecPolicy -SharedKey $SharedKey

# Retrieve public IP address of virtual network gateway
$AzurePublicIP = Get-AzureRmPublicIpAddress -ResourceGroupName $AzureRGName -Name $AzurePublicIPName
```

## Configure IP gateway IP address on Azure Stack

The following code sets the public IP for the local network gateway on Azure Stack.

From your PowerShell window:

```powershell
# Reconnect to environment
Connect-AzureRmAccount -EnvironmentName "AzureStackUser" -AccessToken $AzsAccessToken -AccountId $AzsContext.Account.Id

# Set the public IP on the local network gateway
$AzsLocalGW.GatewayIpAddress = $AzurePublicIP.IpAddress

# Update the local network gateway
Set-AzureRmLocalNetworkGateway -LocalNetworkGateway $AzsLocalGW
```

After a short amount of time, the connection between Azure and Azure Stack should change to **Connected**.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
