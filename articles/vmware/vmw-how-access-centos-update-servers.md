---
title: How to access CentOS Update servers | UKCloud Ltd
description: Shows you how to access CentOS updates within vCloud Director
services: vmware
author: Sue Highmoor
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

Our Elevated OFFICIAL security domain doesn't natively connect to the internet, and the PSN Protected network doesn't have any CentOS repo servers. To receive CentOS updates, you can use UKCloud-managed repository servers or a Walled Garden. Both options are described below.

### Option 1. UKCloud-managed repository servers

We provide repositories for CentOS 6 on our Elevated OFFICIAL security domain. To access them:

Create a file called `il3-repos.repo` in `/etc/yum.repos.d`, and populate it with the following:

```
[base]

name=UKCloud CentOS Repository - Base

baseurl=http://<elevated-public-ip-address>/centos/<x>.<y>/os/x86_64

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-<x>

[updates]

name=UKCloud CentOS Repository - Updates

baseurl=http://<elevated-public-ip-address>/centos/centos-updates

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-<x>

[extras]

name=UKCloud CentOS Repository - Extras

baseurl=http://<elevated-public-ip-address>/centos/centos-extras

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-<x>
```

Where:

- `<elevated-public-ip-address>` is the Elevated OFFICIAL public IP address (if you're not sure what this is, contact UKCloud Support)

- <x>.<y> is your version of CentOS

Or use the following command to download the repo file directly from the server:

**CentOS 6:**

```
wget -P /etc/yum.repos.d http://<elevated-public-ip-address>/repos/ukcloud_centos<x>.repo
```

**CentOS 7:**

```
wget -P /etc/yum.repos.d http://<elevated-public-ip-address>/repos/ukcloud_centos<x>.repo
```

Remove all other `*.repo` files in this directory.

### Option 2. Walled Garden

Choose this option only if you want full control of CentOS updates and are already thinking of deploying a Walled Garden. This option involves pulling updates into the Assured security domain, then using UKCloud's Walled Garden to move them to the Elevated security domain.

It's a much more complex solution than using UKCloud-managed repository servers, and you have sole responsibility for deploying and managing it.

For more information about the Walled Garden, see the [*Getting Started Guide for Cross Domain Security Zone*](../cdsz/cdsz-gs-walled-garden.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
