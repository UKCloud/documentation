---
title: How to access Ubuntu update servers 
description: Provides information about accessing the Ubuntu repository servers
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 09/08/2022

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access Ubuntu update servers
toc_fullpath: How To/shared-how-access-ubuntu-update-servers.md
toc_mdlink: shared-how-access-ubuntu-update-servers.md
---

# How to access Ubuntu update servers

## Overview

When you create a virtual machine (VM) with an Ubuntu licence on it, you need to register the VM in order to receive updates for it. This guide explains how to access the Ubuntu repository servers to receive updates.

Before you attempt to establish connections to an Ubuntu repository server, you need to make sure your VMs can communicate with the Ubuntu server which exists outside of your cloud organisation. This may involve editing the NAT and firewall settings within your edge gateway to allow traffic to traverse into your virtual data centre (VDC). For how to do this, see the [*How to create NAT rules*](../vmware/vmw-how-create-nat-rules.md) and [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md).

### Assured OFFICIAL platform

UKCloud's Assured OFFICIAL platform is internet facing, so you can either configure your VM to connect to the internet, and use standard update tools such as apt-get to talk directly to the publicly available Ubuntu repositories or you can use the UKCloud-managed repository servers.

### Elevated OFFICIAL platform

UKCloud's Elevated OFFICIAL platform doesn't have native access to Ubuntu repository servers. To connect to an Ubuntu repository server for updates, you can use UKCloud-managed repository servers or a UKCloud Walled Garden.

## Prerequisites

There are two prerequisites for accessing Ubuntu update servers:

- The VM must be able to resolve to the repository server DNS records (contact UKCloud Support for the IP addresses for the Elevated records). You can achieve this several different ways:

  - Use internet DNS records to resolve the Assured repository server

  - Configure an A record on your local DNS for the Elevated repository server

  - Configure an `/etc/hosts` file entry with the appropriate information

- All VMs using the service must be able to access the repository servers on port TCP/443 (HTTPS). Ensure that you have configured SNAT and firewall policies on your edge gateway device. If you have any questions about this, contact UKCloud Support.

## Accessing Ubuntu update servers

### UKCloud-managed repository servers

> [!NOTE]
> The repository servers listed below are accessible only from within the UKCloud network.

We provide Ubuntu repositories for the 16.04 (Xenial), 18.04 (Bionic) and 20.04 (Focal) LTS versions of Ubuntu on both our Assured OFFICIAL and Elevated OFFICIAL security domains, so that customers with Ubuntu VMs can get software updates. To do this, issue the appropriate command for your release of Ubuntu to download a repository list file to your apt sources directory.

- For 16.04:

        sudo wget -P /etc/apt/sources.list.d https://rh-cds.ukcloud.com/ubuntu/repofiles/ukcloud_xenial.list

- For 18.04:

        sudo wget -P /etc/apt/sources.list.d https://rh-cds.ukcloud.com/ubuntu/repofiles/ukcloud_bionic.list
 
- For 20.04:

        sudo wget -P /etc/apt/sources.list.d https://rh-cds.ukcloud.com/ubuntu/repofiles/ukcloud_focal.list

We also recommend that you rename the default `/etc/apt/sources.list` file to reduce the likelihood of errors during the update process that stem from attempts to access the internet-based Canonical Partner repositories. To do this, use the following command:

    sudo mv /etc/apt/sources.list /etc/apt/sources.list.old

### Walled Garden

Choose this option only if you want full control of Ubuntu updates and are already thinking of deploying a UKCloud Walled Garden. This option involves pulling updates into the Assured platform and using UKCloud's Walled Garden to move them to the Elevated platform.

It's a much more complex solution than using UKCloud-managed repository servers and you have sole responsibility for deploying and managing it.

For more information about the Walled Garden, see the [*Getting Started Guide for Cross Domain Security Zone*](../security/cdsz-gs-walled-garden.md).

## Troubleshooting

The primary issues you may encounter are:

### Errors when updating packages due to architecture type

When running `sudo apt-get upgrade` you may receive errors similar to the following:

```none
404 Not Found:
    E: Failed to fetch https://rh-cds.ukcloud.com/ubuntu/dists/<version>/main/binary-i386/Packages
```

This is due to UKCloud not hosting packages for i386 architecture. You can rectify this by executing the following:

`sudo apt-get purge ".*:i386"; sudo dpkg --remove-architecture i386`

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
