---
title: How to export edge gateway configuration data using PowerShell | UKCloud Ltd
description: This article describes how to use PowerCLI to extract vCNS Edge configuration data
services: vmware
author: Steve Hall
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

## Exporting vCNS Edge configuration data

1. Install PowerCLI from VMware:

    <https://vmware.com/support/developer/PowerCLI>

2. Open your PowerCLI session and connect to vCloud.

    You can find your credentials in the UKCloud Portal by clicking your username in the top right hand corner and selecting API.

3. Copy the following function and paste it into your PowerCLI shell:

    ```
    Function Get-EdgeConfig ($EdgeGateway)

    {

        $Edgeview = $EdgeGateway | get-ciview

        $webclient = New-Object system.net.webclient

        $webclient.Headers.Add("x-vcloud-authorization",$EdgeView.Client.SessionKey)

        $webclient.Headers.Add("accept",$EdgeView.Type + ";version=5.5")

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
    
4. Find your vCNS Edges by entering the following command:

        $Gateways = Search-Cloud -QueryType EdgeGateway

5. Inspect the `$Gateways` variable and identify the edge for which you want to export configuration data.

6. Retrieve the configuration data for your chosen edge.

    For example, to retrieve configuration data for the first edge in the `$Gateways` variable, enter the following command:

        $Config = Get-EdgeConfig -EdgeGateway $Gateways[0]

7. Inspect the `$Config` variable. It will have the following properties:

        $Config.Firewall = All the firewall rules
        $Config.NAT = All the NAT rules
        $Config.LoadBalancer = All load balancer rules
        $Config.DHCP = All DHCP pools

8. You can export this data to a CSV file, by entering a command such as:

        $Config.Firewall | Export-csv -path c:\users\myaccount\desktop\firewallrules.csv

        $Config.Nat | Export-csv -path c:\users\myaccount\desktop\natrules.csv -notypeinformation

    ```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
