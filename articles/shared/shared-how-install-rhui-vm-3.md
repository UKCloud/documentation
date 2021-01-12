---
title: How to install and use Red Hat Update Infrastructure
description: Shows you how to update your existing VMs to target UKCloud's approved Red Hat Update Infrastructure (RHUI)
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 12/01/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install Red Hat Update Infrastructure on an existing virtual machine
toc_fullpath: How To/shared-how-install-rhui-vm.md
toc_mdlink: shared-how-install-rhui-vm.md
---

# How to install and use Red Hat Update Infrastructure

## Overview

This article provides advice on how to update your existing Red Hat virtual machines (VMs) to target UKCloud's approved Red Hat Update Infrastructure (RHUI).

As of November 2020, UKCloud implemented the latest version of RHUI to continue to provide automatic updates to our Red Hat customers on our Assured OFFICIAL and Elevated OFFICIAL security domains. This provides benefits such as the reliable availability of patch updates and Red Hat approved OS templates without having to subscribe each VM to Red Hat. A significant change from the old RHUI is that the RPM installer files no longer distinguish between Assured and Elevated. A single file (per Operating System version) will work in both environments.

This latest version of RHUI replaces the previous version, which is soon to be decommissioned.

## Prerequisites

There are two pre-requisites for performing this operation:

- The VM can resolve to the RHUI Content Delivery System (CDS) DNS records (contact Customer Support for the IP addresses for the Elevated records). You can achieve this several different ways.

- Use Internet DNS records to resolve the Assured CDS

- Configure an A record on your local DNS for the Elevated CDS

- Configure an `/etc/hosts` file entry with the appropriate information.

- All VMs using the service must be able to access the required CDS servers on port TCP/443 (HTTPS). Ensure that you have configured SNAT and firewall policies on your edge gateway device. If you have any questions on this, contact UKCloud Support.

## Installation

### Locations

You can browse the list of installer RPM files [here](https://rh-cds.ukcloud.com/redhat/client_rpms/) or download the required ones directly from the following locations:

- [RHEL 6 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL6-STANDARD-2.0-3.noarch.rpm)

- [RHEL 6 EUS](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL6-EUS-2.0-2.noarch.rpm)

- [RHEL 7 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm)

- [RHEL 7 EUS](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL7-EUS-2.0-2.noarch.rpm)

- [RHEL 8 Standard](https://rh-cds.ukcloud.com/redhat/client_rpms/UKCloud-Client-RHEL8-STANDARD-2.0-3.noarch.rpm)

If you require the high availability (HA) package, raise a Service Request directly via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and we'll provide you with a download location.

### Instructions for a VM not currently configured to use any RHUI

This section assumes that your VM does not currently have any UKCloud repository configuration already in place and you have not installed either the old RHUI or the new RHUI RPMs.

1. Download the appropriate file (detailed above) to your VM (or place the contents in an accessible location such as NFS share or FTP server).

2. Install the relevant RPM.

    For example, for RHEL7 Standard: `yum install UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm`.

3. Clean yum and the cache and confirm the new repositories are available:

       yum clean all; rm -rf /var/cache/yum; yum repolist

4. Test the connection to the RHUI CDS is working:

       yum update

### Instructions for a VM using a previous version of RHUI

If your VMs are configured to use the old RHUI (Identified by an installation RPM being installed with a reference to IL2 or IL3 (Original titles for Assured and Elevated security domains)), follow this procedure to migrate to the new RHUI.

1. Erase the old RHUI RPM.
	For Assured VMs: `yum erase $(rpm -qa|grep IL2-Client)`. For Elevated VMs: `yum erase $(rpm -qa|grep IL3-Client)`.

2. Download the appropriate file (detailed above) to your VM (or place the contents in an accessible location such as NFS share or FTP server).

3. Install the relevant RPM.
	For example, for RHEL7: `yum install UKCloud-Client-RHEL7-STANDARD-2.0-5.noarch.rpm`.

4. Clean yum and the cache and confirm the new repositories are available:

       yum clean all; rm -rf /var/cache/yum; yum repolist

5. Test the connection to the RHUI CDS is working:

       yum update

## Upgrading the RPMs to a newer version

From time to time, UKCloud will update the versions of the RHUI installation RPMs due to new repositories being added which may prove useful to you. The latest installation RPMs will always be available [here](https://rh-cds.ukcloud.com/redhat/client_rpms/). However, even if a new RPM is available, this does not mean you have to upgrade to it (if you do not want to use the additional repositories). Your existing configuration will continue to work without issue.

The following procedure can be used to upgrade to a later version of the installation RPM. Once the later file has been downloaded to the VM.

For example (where X is the new release), for RHEL7 Standard: `yum update UKCloud-Client-RHEL7-STANDARD-2.0-X.noarch.rpm`.

This will overwrite the files and certificates associated with the original RPM and allow the VM to access the new repositories.

## Troubleshooting

The primary issues you may encounter are:

### DNS Failure

Check the DNS lookup is working and you have the correct entry for Assured and Elevated.

### 443 not accessible

1. Check your firewall configuration, including local firewalls (`iptables`) and edge gateway.

2. Ensure you have the correct destination IP entry for Assured or Elevated.

### Incorrect version

Ensure you have installed the correct RPM for your release.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
