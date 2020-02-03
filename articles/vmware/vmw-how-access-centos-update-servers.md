---
title: How to access CentOS Update servers
description: Shows you how to access CentOS updates within vCloud Director
services: vmware
author: Sue Highmoor
reviewer: pcantle
lastreviewed: 03/12/2019
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access CentOS Update servers
toc_fullpath: How To/vmw-how-access-centos-update-servers.md
toc_mdlink: vmw-how-access-centos-update-servers.md
---

# How to access CentOS Update servers

## Overview

Each of the two security domains within the UKCloud cloud presents its own challenges regarding licensing CentOS machines. This document explains how to access the CentOS repository servers to receive updates.

Before you attempt to establish a connection to the CentOS repo servers, you need to make sure your VMs can communicate with the CentOS server which exists outside of your cloud organisation.

This may involve editing your NAT and firewall settings within your edge gateway to allow traffic to traverse into your virtual data centre (VDC). For how to do this, see the [*How to create NAT rules*](vmw-how-create-nat-rules.md) and [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

## Assured OFFICIAL platform

UKCloud's Assured OFFICIAL security domain is internet facing, so you need to configure your VM to connect to the internet, and use a standard update tool, such as Spacewalk RHN, to get updates for CentOS.

## Elevated OFFICIAL platform

Our Elevated OFFICIAL security domain doesn't natively connect to the internet, and the PSN network doesn't have any CentOS repo servers. To receive CentOS updates, you can use UKCloud-managed repository servers or a Walled Garden. Both options are described below.

### Option 1. UKCloud-managed repository servers

We provide repositories and EPEL (Extra Packages for Enterprise Linux) for CentOS 6 and 7 on our Elevated OFFICIAL security domain.

To access CentOS base files, create a file called `centos_<x>_il3.repo` in `/etc/yum.repos.d`, where `<x>` is either 6 or 7 depending on your version of CentOS, and populate it with the following:

**CentOS 6:**

```none
[base]
name=CentOS-6-Base
baseurl=http://<elevated-public-ip-address>/centos-base/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

#released updates
[updates]
name=CentOS-6-Updates
baseurl=http://<elevated-public-ip-address>/centos-updates/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

#additional packages that may be useful
[extras]
name=CentOS-6-Extras
baseurl=http://<elevated-public-ip-address>/centos-extras/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
```

**CentOS 7:**

```none
[base]
name=CentOS-7-Base
baseurl=http://<elevated-public-ip-address>/centos-7-base/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#released updates
[updates]
name=CentOS-7-Updates
baseurl=http://<elevated-public-ip-address>/centos-7-updates/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-7-Extras
baseurl=http://<elevated-public-ip-address>/centos-7-extras/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
```

Where `<elevated-public-ip-address>` is the Elevated OFFICIAL public IP address (if you're not sure what this is, contact UKCloud Support).

To access CentOS EPEL files, create a file called `epel_<x>_il3.repo` in `/etc/yum.repos.d`, where `<x>` is either 6 or 7 depending on your version of CentOS, and populate it with the following:

**CentOS 6:**

```none
[epel]
name=Extra Packages for Enterprise Linux 6
baseurl=http://<elevated-public-ip-address>/epel/
enabled=1
metadata_expire=7d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
```

**CentOS 7:**

```none
[epel]
name=Extra Packages for Enterprise Linux 7
baseurl=http://<elevated-public-ip-address>/epel-7/
enabled=1
metadata_expire=7d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
```

To download the repo file directly from the server, use the following command (`<x>` is either 6 or 7 depending on your version of CentOS):

**CentOS base updates and extras:**

```none
wget -P /etc/yum.repos.d/ http://<elevated-public-ip-address>/customer_repo_files/centos_<x>_il3.repo
```

**CentOS EPEL:**

```none
wget -P /etc/yum.repos.d/ http://<elevated-public-ip-address>/customer_repo_files/epel_<x>_il3.repo
```

Remove all other `*.repo` files in this directory then execute `yum repolist`.

### Option 2. Walled Garden

Choose this option only if you want full control of CentOS updates and are already thinking of deploying a Walled Garden. This option involves pulling updates into the Assured security domain, then using UKCloud's Walled Garden to move them to the Elevated security domain.

It's a much more complex solution than using UKCloud-managed repository servers, and you have sole responsibility for deploying and managing it.

For more information about the Walled Garden, see the [*Getting Started Guide for Cross Domain Security Zone*](../cdsz/cdsz-gs-walled-garden.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
