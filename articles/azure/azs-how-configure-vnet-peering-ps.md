---
title: How to configure virtual network peering between two virtual networks using Powershell
description: Configure virtual network peering between two virtual networks and allowing them to ping eachother
services: azure-stack
author: Kade Green
reviewer: 
lastreviewed: 

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: Configure virtual network peering between two virtual networks - PS
toc_fullpath: Users/How To/azs-how-configure-vnet-peering-ps.md
toc_mdlink: azs-how-configure-vnet-peering-ps.md
---

# How to configure virtual network peering between two virtual networks using the UKCloud Azure Stack Hub portal

## Overview

Overview 

### Intended audience

Audience

## Process Overview

Bellow is a short overview of the proces. To complete the steps in this guide, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Prerequisites

Before you begin, ensure your PowerShell environment is set up as detailed in [*Configure the Azure Stack Hub user's PowerShell environment*](azs-how-configure-powershell-users.md).

## Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$ArmEndpoint           | The Azure Resource Manager endpoint for Azure Stack Hub                                        | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |


| \$AzsResourceGroupName  | Name of resource group to create in Azure Stack Hub                                            | <form oninput="result.value=AzsResourceGroupName.value" id="AzsResourceGroupName" style="display: inline;" ><input  type="text" id="AzsResourceGroupName" name="AzsResourceGroupName" style="display: inline;" placeholder="Vnet-Peering-RG"/></form> |


| \$AzsVNetAName           | Name of virtual network to create in Azure Stack Hub                                           | <form oninput="result.value=AzsVNetAName.value" id="AzsVNetAName" style="display: inline;" ><input  type="text" id="AzsVNetAName" name="AzsVNetAName" style="display: inline;" placeholder="VnetA-Peering"/></form> |


| \$AzsVNetARange          | Address space of virtual network to create in Azure Stack Hub in CIDR notation                 | <form oninput="result.value=AzsVNetARange.value" id="AzsVNetARange" style="display: inline;"><input  type="text" id="AzsVNetARange" name="AzsVNetARange" style="display: inline;" placeholder="10.1.0.0/16"/></form> |


| \$AzsSubnetARange        | Address space of virtual network subnet to create in Azure Stack Hub in CIDR notation          | <form oninput="result.value=AzsSubnetARange.value" id="AzsSubnetARange" style="display: inline;"><input  type="text" id="AzsSubnetARange" name="AzsSubnetARange" style="display: inline;" placeholder="10.1.0.0/24"/></form> |


| \$AzsVNetBName           | Name of virtual network to create in Azure Stack Hub                                           | <form oninput="result.value=AzsVNetBName.value" id="AzsVNetBName" style="display: inline;" ><input  type="text" id="AzsVNetBName" name="AzsVNetBName" style="display: inline;" placeholder="VnetB-Peering"/></form> |


| \$AzsVNetBRange          | Address space of virtual network to create in Azure Stack Hub in CIDR notation                 | <form oninput="result.value=AzsVNetBRange.value" id="AzsVNetBRange" style="display: inline;"><input  type="text" id="AzsVNetBRange" name="AzsVNetBRange" style="display: inline;" placeholder="10.2.0.0/16"/></form> |


| \$AzsSubnetARange        | Address space of virtual network subnet to create in Azure Stack Hub in CIDR notation          | <form oninput="result.value=AzsSubnetARange.value" id="AzsSubnetARange" style="display: inline;"><input  type="text" id="AzsSubnetARange" name="AzsSubnetARange" style="display: inline;" placeholder="10.2.0.0/24"/></form> |


| \$AzsPublicIpName       | Name of public IP to create in Azure Stack Hub                                                 | <form oninput="result.value=AzsPublicIpName.value" id="AzsPublicIpName" style="display: inline;" ><input  type="text" id="AzsPublicIpName" name="AzsPublicIpName" style="display: inline;" placeholder="Pub-IP"/></form> |

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

