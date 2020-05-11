---
title: How to access Ubuntu update servers 
description: This guide shows you how to configure access to Ubuntu update servers from within vCloud Director
services: vmware
author: Sue Highmoor
reviewer: pcantle
lastreviewed: 01/04/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access Ubuntu update servers
toc_fullpath: How To/vmw-how-access-ubuntu-update-servers.md
toc_mdlink: vmw-how-access-ubuntu-update-servers.md
---

# How to access Ubuntu update servers

## Overview

When you create a virtual machine (VM) with an Ubuntu licence on it, you need to register the VM in order to receive updates for it. This guide explains how to access the Ubuntu repository servers to receive updates. Depending on whether your VM is on UKCloud's Assured OFFICIAL or Elevated OFFICIAL platform, there's a different process to follow.

Before you attempt to establish connections to an Ubuntu repository server, you need to make sure your VMs can communicate with the Ubuntu server which exists outside of your cloud organisation. This may involve editing the NAT and firewall settings within your edge gateway to allow traffic to traverse into your virtual data centre (VDC). For how to do this, see the [*How to create NAT rules*](vmw-how-create-nat-rules.md) and [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

## Assured OFFICIAL platform

UKCloud's Assured OFFICIAL platform is internet facing, so you can simply configure your VM to connect to the internet, and use standard update tools such as apt-get to talk directly to the publicly available Ubuntu repositories.

## Elevated OFFICIAL platform

UKCloud's Elevated OFFICIAL platform doesn't natively connect to the internet, and the PSN Protected network doesn't have any Ubuntu repository servers. To connect to an Ubuntu repository server for updates, you can use UKCloud-managed repository servers or a UKCloud Walled Garden.

### UKCloud-managed repository servers

We provide Ubuntu repositories for the 12.04 and 14.04 LTS versions of Ubuntu on our Elevated OFFICIAL platform, so that customers with Ubuntu VMs can get software updates. To do this, issue the appropriate command for your release of Ubuntu to download a repository list file to your apt sources directory.

- For 16.04:

        sudo wget -P /etc/apt/sources.list.d http://x.y.89.96/repos/ukcloud_xenial.list

- For 18.04:

        sudo wget -P /etc/apt/sources.list.d http://x.y.89.96/repos/ukcloud_bionic.list
 
- For 20.04:

        sudo wget -P /etc/apt/sources.list.d http://x.y.89.96/repos/ukcloud_focal.list

We also recommend that you rename the default `/etc/apt/sources.list` file to reduce the likelihood of errors during the update process that stem from attempts to access the internet-based Canonical Partner repositories. To do this, use the following command:

    sudo mv /etc/apt/sources.list /etc/apt/sources.list.old

Replace x.y with the first two octets of the Elevated OFFICIAL public IP addresses. If you're not sure what these are, contact UKCloud Support.

### Walled Garden

Choose this option only if you want full control of Ubuntu updates and are already thinking of deploying a UKCloud Walled Garden. This option involves pulling updates into the Assured platform, and using UKCloud's Walled Garden to move them to the Elevated platform.

It's a much more complex solution than using UKCloud-managed repository servers, and you have sole responsibility for deploying and managing it.

For more information about the Walled Garden, see the [*Getting Started Guide for Cross Domain Security Zone*](../cdsz/cdsz-gs-walled-garden.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
