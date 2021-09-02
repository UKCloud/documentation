---
title: Network Time Protocol server access
description: This guide shows you how to configure access to the Network Time Protocol (NTP) server
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 01/09/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Network Time Protocol server access
toc_fullpath: Reference/shared-ref-network-time-server.md
toc_mdlink: shared-ref-network-time-server.md
---

# Network Time Server access

The UKCloud Network Time Protocol (NTP) server is available for use by UKCloud's customers. It is available in both the Assured OFFICIAL and Elevated OFFICIAL security domains.

> [!IMPORTANT]
> UKCloud are making important updates to NTP services. Details can be found on the [UKCloud Status Page](https://status.ukcloud.com)
> In preperation for this service improvement, additional Edge Firewall rules will be required to allow access to the following IP addresses (IN ADDITION TO what is detailed below)
> on port UDP/123
>
> - Assured
>   1. 51.179.212.116 
>   2. 51.179.212.117
>   3. 51.179.212.118
>   4. 51.179.212.116
>   5. 51.179.215.212
>   6. 51.179.215.213
>   7. 51.179.215.214
>   8. 51.179.215.215
>
> For Elevated (and any other networks/zones) IP Addresses, please raise a request using the [UKCloud Portal](https://portal.skyscapecloud.com/login) 

## Assured OFFICIAL Platform

Update the NTP server of your Assured virtual machines with one or both of the following IP addresses:

`37.26.90.192`

`37.26.94.232`

You may need to adjust your firewall and NAT rules to allow communication between the NTP server of your virtual machines and the UKCloud network time server.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
