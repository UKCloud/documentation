---
title: Network Time Protocol server access
description: This guide shows you how to configure access to the Network Time Protocol (NTP) server
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 01/12/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Network Time Protocol server access
toc_fullpath: Reference/shared-ref-network-time-server.md
toc_mdlink: shared-ref-network-time-server.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Network Time Server access

The UKCloud Network Time Protocol (NTP) server is available for use by UKCloud's customers. It is available in both the Assured OFFICIAL and Elevated OFFICIAL security domains.


## Using the UKCloud NTP server

In your client `ntp/chrony` configuration file, you can either configure your VMs to use the hostname `ntp.ukcloud.com` or any number of the following IP Addresses:

- `51.179.212.116`

- `51.179.212.117`

- `51.179.212.118`

- `51.179.212.119`

- `51.179.215.212`

- `51.179.215.213`

- `51.179.215.214`

- `51.179.215.215`

For Elevated OFFICIAL VMs, raise a Service Request via the My Calls section of the Elevated UKCloud Portal to get the appropriate IP address.

You may need to adjust your edge gateway's firewall and NAT rules to allow communication between the NTP servers on port UDP/123 and your VMs.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
