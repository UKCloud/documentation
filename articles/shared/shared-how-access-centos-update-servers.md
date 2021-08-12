---
title: How to access CentOS update servers
description: Provides information about accessing the CentOS repository servers to keep your CentOS VMs up to date
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 04/03/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access CentOS update servers
toc_fullpath: How To/shared-how-access-centos-update-servers.md
toc_mdlink: shared-how-access-centos-update-servers.md
---

# How to access CentOS update servers

## Overview

Each of the two security domains within the UKCloud platform presents its own challenges regarding patching and updating CentOS machines. This article explains how to access the CentOS repository servers to receive updates.

Before you attempt to establish a connection to the CentOS repo servers, you need to make sure your virtual machines (VMs) can communicate with the CentOS server, which exists outside of your cloud organisation.

This may involve editing your NAT and firewall settings within your edge gateway to allow traffic to traverse into your virtual data centre (VDC). For how to do this, see the [*How to create NAT rules*](../vmware/vmw-how-create-nat-rules.md) and [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md).

## Assured OFFICIAL platform

UKCloud's Assured OFFICIAL security domain is internet facing, so you have the option to configure your VM to connect to the internet and use a standard update tool (such as Spacewalk RHN) or the pubicly accessible CentOS mirrors, or you can use UKCloud-managed repositories.

## Elevated OFFICIAL platform

Our Elevated OFFICIAL security domain doesn't natively connect to the internet, and the PSN network doesn't have any CentOS repo servers. To receive CentOS updates, you can use UKCloud-managed repository servers or a Walled Garden. Both options are described below.

### Option 1. UKCloud-managed repository servers

We provide both CentOS standard repositories and EPEL (Extra Packages for Enterprise Linux) for CentOS 7  and 8 on our Elevated OFFICIAL security domain.

> [!IMPORTANT]
> CentOS6.x and EPEL-6 are deprecated and packages are no longer provided by UKCloud. You can view details of the CentOS Public Mirror Site [here](http://mirror.centos.org/centos/6.10/readme).

For both Assured and Elevated OFFICIAL security domains, you can configure your systems to reference the following server: `https://rh-cds.ukcloud.com`. In Assured, this domain is configured in DNS, so you'll automatically be able to resolve it. For Elevated, you'll need to contact UKCloud Support to get the correct IP address and add an entry to `/etc/hosts` on your systems, or add an entry to your own internal DNS, to be able to resolve it.

To access CentOS base files, you have 2 options.

#### Create your own configuration file

Create a file called `centos-<x>.repo` in `/etc/yum.repos.d`, where `<x>` is either 7 or 8 depending on your version of CentOS, and populate it with the following:

**CentOS 7:**

```none
[centos-7-base]
name=centos-7-base
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-7-base/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-7
sslverify=1

[centos-7-updates]
name=centos-7-updates
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-7-updates/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-7
sslverify=1

[centos-7-extras]
name=centos-7-extras
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-7-extras/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-7
sslverify=1
```

**CentOS 8:**

```none
[centos-8-base]
name=centos-8-base
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-8-base/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-Official
sslverify=1

[centos-8-updates]
name=centos-8-updates
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-8-updates/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-Official
sslverify=1

[centos-8-extras]
name=centos-8-extras
baseurl=https://rh-cds.ukcloud.com/centos/packages/centos-8-extras/
gpgcheck=1
enabled=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-CentOS-Official
sslverify=1
```

To access CentOS EPEL files, create a file called `epel_<x>.repo` in `/etc/yum.repos.d`, where `<x>` is either 7 or 8 depending on your version of CentOS, and populate it with the following:

**CentOS 7:**

```none
[epel-7]
name=Extra Packages for Enterprise Linux 7 - $basearch
baseurl=https://rh-cds.ukcloud.com/centos/packages/epel-7/
enabled=1
gpgcheck=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-EPEL-7
sslverify=1
```

**CentOS 8:**

```none
[epel-8]
name=Extra Packages for Enterprise Linux 8 - $basearch
baseurl=https://rh-cds.ukcloud.com/centos/packages/epel-8/
enabled=1
gpgcheck=1
gpgkey=https://rh-cds.ukcloud.com/centos/keys/RPM-GPG-KEY-EPEL-8
sslverify=1
```

#### Download the configuration file

Download the repo configuration file directly from the repo server, using the following command (where `<x>` is either 7 or 8 depending on your version of CentOS):

**CentOS base updates and extras:**

```none
wget -P /etc/yum.repos.d/ https://rh-cds.ukcloud.com/centos/repofiles/centos-x.repo
```

**CentOS EPEL:**

```none
wget -P /etc/yum.repos.d/ https://rh-cds.ukcloud.com/centos/repofiles/epel-x.repo
```

Remove all other `*.repo` files in `/etc/yum.repos.d/` then execute `yum clean all; rm -rf /var/cache/yum; yum repolist`.

### Option 2. Walled Garden

Choose this option only if you want full control of CentOS updates and are already thinking of deploying a Walled Garden. This option involves pulling updates into the Assured security domain, then using UKCloud's Walled Garden to move them to the Elevated security domain.

It's a much more complex solution than using UKCloud-managed repository servers, and you have sole responsibility for deploying and managing it.

For more information about the Walled Garden, see the [*Getting Started Guide for Cross Domain Security Zone*](../cdsz/cdsz-gs-walled-garden.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
