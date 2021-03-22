---
title: How to install and use Red Hat Update Infrastructure (RHUI 3)
description: Shows you how to update your existing VMs to target UKCloud's approved Red Hat Update Infrastructure (RHUI 3)
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 02/02/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install Red Hat Update Infrastructure (RHUI 3)
toc_fullpath: How To/shared-how-install-rhui-vm-3.md
toc_mdlink: shared-how-install-rhui-vm-3.md
---

# How to install and use Red Hat Update Infrastructure (RHUI 3)

## Overview

This article provides advice on how to update your existing Red Hat virtual machines (VMs) to target UKCloud's approved Red Hat Update Infrastructure (RHUI).

As of November 2020, UKCloud implemented the latest version of RHUI to continue to provide automatic updates to our Red Hat customers on our Assured OFFICIAL and Elevated OFFICIAL security domains. This provides benefits such as the reliable availability of patch updates and Red Hat approved OS templates without having to subscribe each VM to Red Hat. Significant changes from the old RHUI include the following:

- The RPM installer files no longer distinguish between Assured and Elevated. A single file (per operating system version) works in both environments (providing DNS resolution is configured correctly).

- Replication of packages between Assured and Elevated is significantly faster.

- Root CA signed SSL certificates are now in use for HTTPS communication to the RHUI Content Delivery Systems (CDS).

This latest version of RHUI replaces the previous version (from 2015), which is soon to be decommissioned.

### Intended audience

This article is intended for customers who have migrated to RHUI v3. If you need information for RHUI 2, see [*How to install and use Red Hat Update Infrastructure (RHUI 2)*](shared-how-install-rhui-vm.md).

## Prerequisites

There are two prerequisites for performing this operation:

- The VM can resolve to the RHUI CDS DNS records (contact UKCloud Support for the IP addresses for the Elevated records). You can achieve this several different ways:

  - Use internet DNS records to resolve the Assured CDS

  - Configure an A record on your local DNS for the Elevated CDS

  - Configure an `/etc/hosts` file entry with the appropriate information

- All VMs using the service must be able to access the required CDS servers on port TCP/443 (HTTPS). Ensure that you have configured SNAT and firewall policies on your edge gateway device. If you have any questions about this, contact UKCloud Support.

## Installing Red Hat Update Infrastructure

### Locations

> [!NOTE]
> These locations are accessible only from within the UKCloud network.

You can browse the list of installer RPM files [here](https://rh-cds.ukcloud.com/redhat/client_rpms/) or download the required files directly from the following locations:

- [RHEL 6 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL6-STANDARD-2.0-3.noarch.rpm)

- [RHEL 6 EUS](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL6-EUS-2.0-2.noarch.rpm)

- [RHEL 6 ELS](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL6-ELS-2.0-2.noarch.rpm)

- [RHEL 7 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm)

- [RHEL 7 EUS](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL7-EUS-2.0-2.noarch.rpm)

- [RHEL 8 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL8-STANDARD-2.0-7.noarch.rpm)

If you require the high availability (HA) package, raise a Service Request directly via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and we'll provide you with a download location.

### VMs not currently configured to use any RHUI

If your VM doesn't currently have any UKCloud repository configuration already in place and you have not installed either the old RHUI or the new RHUI RPMs:

1. Download the appropriate file (listed [above](#locations)) to your VM (or place the contents in an accessible location such as an NFS share or FTP server).

2. Install the relevant RPM. For example, for RHEL7 Standard:

    `yum install UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm`

3. Clean yum and the cache and confirm the new repositories are available:

    `yum clean all; rm -rf /var/cache/yum; yum repolist`

4. Update your system using the new repositories:

    `yum update`

### VMs using a previous version of RHUI

If your VMs are configured to use the old RHUI (identified by an installation RPM being installed with a reference to IL2 or IL3 (original titles for Assured and Elevated security domains)), migrate to the new RHUI:

1. Erase the old RHUI RPM.

    - For Assured VMs:

      `yum erase $(rpm -qa|grep IL2-Client)`
    
    - For Elevated VMs:
  
      `yum erase $(rpm -qa|grep IL3-Client)`

2. Download the appropriate file (listed [above](#locations)) to your VM (or place the contents in an accessible location such as an NFS share or FTP server).

3. Install the relevant RPM. For example, for RHEL7:

    `yum install UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm`

4. Clean yum and the cache and confirm the new repositories are available:

    `yum clean all; rm -rf /var/cache/yum; yum repolist`

5. Update your system using the new repositories:

    `yum update`

## Upgrading the RPMs to a newer version

From time to time, UKCloud updates the versions of the RHUI installation RPMs due to new repositories being added that may prove useful to you. The latest installation RPMs will always be available [here](https://rh-cds.ukcloud.com/redhat/client_rpms/). However, if a new RPM is available, you don't have to upgrade if you don't want to use the additional repositories; your existing configuration will continue to work without issue.

After downloading the appropriate file to the VM, you can use `yum update` to upgrade to the newer version of the installation RPM. For example, for RHEL7 Standard:

`yum update UKCloud-Client-RHEL7-STANDARD-2.0-X.noarch.rpm`

 Where `X` is the new release.
 
 This will overwrite the files and certificates associated with the original RPM and allow the VM to access the new repositories.

## Troubleshooting

The primary issues you may encounter are:

### Product signing key requirements

You may be asked to confirm installation of Red Hat public keys on your first package install(s) if they are not already there. They are as follows:

```none
Fingerprint: 567e 347a d004 4ade 55ba 8a5f 199e 2f91 fd43 1d51
Package    : redhat-release-server-7.5-8.el7.x86_64 (@anaconda/7.5)
From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release`
```

```none
Fingerprint: 43a6 e49c 4a38 f4be 9abf 2a53 4568 9c88 2fa6 58e0
Package    : redhat-release-server-7.5-8.el7.x86_64 (@anaconda/7.5)
From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
```

You can verify the keys via Red Hat's [Product Signing Keys](https://access.redhat.com/security/team/key) page.

### Issues when erasing the old ILx-Client packages

If your systems are still pointing to the old, decomissioned RHUI when you try to remove the corresponding RPM, you may receive timeout messages as follows:

```none
Timeout on https://rhua.skyscapecloud.com/pulp/repos/content/dist/rhel/rhui/server/x/xServer/x86_64/repo/os/repodata/repomd.xml: (28, 'Connection timed out after 30001 milliseconds')
```

You can rectify this by executing the following when you erase the RPM (where x is 2 or 3, depending on Assured or Elevated):

```none
yum --disablerepo=\* erase $(rpm -qa|grep ILx-Client)
```

### DNS failure

Check the DNS lookup is working and you have the correct entry for Assured and Elevated.

### 443 not accessible

1. Check your firewall configuration, including local firewalls (`iptables`) and edge gateway.

2. Ensure you have the correct destination IP entry for Assured or Elevated.

### Incorrect version

Ensure you have installed the correct RPM for your release.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
