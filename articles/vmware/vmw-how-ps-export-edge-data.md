---
title: How to export edge gateway configuration data using PowerShell
description: This article describes how to use PowerCLI to extract Edge Gateway configuration data
services: vmware
author: Steve Hall
reviewer: Dylan Coombes
lastreviewed: 14/10/2019 14:30:00
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Export edge gateway configuration data using PowerShell
toc_fullpath: How To/vmw-how-ps-export-edge-data.md
toc_mdlink: vmw-how-ps-export-edge-data.md
---

# How to export edge gateway configuration data using PowerShell

## Overview

If you want to export your edge gateway configuration data (firewall rules, NAT rules, load balancer virtual servers and DHCP pools), for example, for backup or disaster recovery purposes, you can use PowerShell.

## Exporting Edge Gateway configuration data

1. Install PowerCLI from VMware:

    <https://code.vmware.com/web/tool/11.4.0/vmware-powercli>

2. Open your PowerCLI session and connect to vCloud.

    You can find your credentials in the UKCloud Portal by clicking your username in the top right hand corner and selecting API. For more information, see [*Finding your vCloud API credentials*(vmw-how-access-vcloud-api.md#finding-your-vcloud-api-credentials).

3. Copy the following function and paste it into a .psm1 file:

    ```
    Function Get-EdgeConfig ($EdgeGateway)

    {

        $Edgeview = $EdgeGateway | get-ciview

        $webclient = New-Object system.net.webclient

        $webclient.Headers.Add("x-vcloud-authorization",$EdgeView.Client.SessionKey)

        $webclient.Headers.Add("accept",$EdgeView.Type + ";version=30.0")

        [xml]$EGWConfXML = $webclient.DownloadString($EdgeView.href)

        $Holder = "" | Select Firewall,NAT,LoadBalancer,DHCP

        $Holder.Firewall =
        $EGWConfXML.EdgeGateway.Configuration.EdgegatewayServiceConfiguration.FirewallService.FirewallRule

        $Holder.NAT =
        $EGWConfXML.EdgeGateway.Configuration.EdgegatewayServiceConfiguration.NatService.NatRule

        $Holder.LoadBalancer =
        $EGWConfXML.EdgeGateway.Configuration.EdgegatewayServiceConfiguration.LoadBalancerService.VirtualServer

        $Holder.DHCP =
        $EGWConfXML.EdgeGateway.Configuration.EdgegatewayServiceConfiguration.GatewayDHCPService.Pool

        Return $Holder

    }

4. Enter the below command to import the function.

        Import-Module [PATH TO PSM1 FILE]
    
5. Find your edge gateways by entering the following command:

        $Gateways = Search-Cloud -QueryType EdgeGateway

6. Inspect the `$Gateways` variable and identify the edge for which you want to export configuration data.

7. Retrieve the configuration data for your chosen edge.

    For example, to retrieve configuration data for the first edge in the `$Gateways` variable, enter the following command:

        $Config = Get-EdgeConfig -EdgeGateway $Gateways[0]

8. Inspect the `$Config` variable. It will have the following properties:

        $Config.Firewall = All the firewall rules
        $Config.NAT = All the NAT rules
        $Config.LoadBalancer = All load balancer rules
        $Config.DHCP = All DHCP pools

9. You can export this data to a CSV file, by entering a command such as:

        $Config.Firewall | Export-csv -path c:\users\myaccount\desktop\firewallrules.csv

        $Config.Nat | Export-csv -path c:\users\myaccount\desktop\natrules.csv -notypeinformation

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
