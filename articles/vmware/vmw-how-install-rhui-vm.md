---
title: How to install Red Hat Update Infrastructure on an existing VMware virtual machine
description: Shows you how to update your existing hosts to target UKCloud's approved Red Hat Update Infrastructure (RHUI)
services: vmware
author: Sue Highmoor
reviewer: Paul Cantle
lastreviewed: 02/07/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install Red Hat Update Infrastructure on an existing VMware virtual machine
toc_fullpath: How To/vmw-how-install-rhui-vm.md
toc_mdlink: vmw-how-install-rhui-vm.md
---

# How to install Red Hat Update Infrastructure on an existing VMware virtual machine

## Overview

This article provides advice on how to update your existing Red Hat virtual machines (VMs) to target UKCloud's approved Red Hat Update Infrastructure (RHUI).

As of July 2015, UKCloud implemented an RHUI to provide automatic updates to our Red Hat customers on our Assured OFFICIAL and Elevated OFFICIAL security domains. This provides benefits such as the reliable availability of patch updates and Red Hat approved OS templates.

This update service replaces the previous repositories, which are no longer updated and were retired on the 31 August 2015.

## Prerequisites

There are two pre-requisites for performing this operation:

- The host can resolve to the RHUI DNS records (contact Customer Support for the IP addresses and domain names for these records). You can achieve this by configuring an A record on your local DNS, or configuring an `/etc/hosts` file with the appropriate information.

- All hosts using the service must be able to access the local RHUA server on port 443 (HTTPS). Ensure that you have configured SNAT and firewall policies on your edge gateway device. If you have any questions on this, contact UKCloud Support.

## Installation

You can find the installer RPM files in the following locations:

- [Assured RHEL 6 Standard](https://cas.frn00006.ukcloud.com/Docs/UKCloud_Shared_Services/IL2-Client-RHEL6-Standard-2.2-1.noarch.rpm?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1625780068&Signature=2k%2BmhJ6BKzVVeJi6qwKzBJsG5TM%3D)

- [Assured RHEL 7 Standard](https://cas.frn00006.ukcloud.com/Docs/UKCloud_Shared_Services/IL2-Client-RHEL7-Standard-2.2-1.noarch.rpm?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1625780100&Signature=%2F4f3KQO02KVG0sNQ7%2FhSH%2BNVCg0%3D)

- [Elevated RHEL 6 Standard](https://cas.frn00006.ukcloud.com/Docs/UKCloud_Shared_Services/IL3-Client-RHEL6-Standard-2.5-1.noarch.rpm?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1625780111&Signature=dP8KvNxmC01dBdt0zOyLPq9Q6rA%3D)

- [Elevated RHEL 7 Standard](https://cas.frn00006.ukcloud.com/Docs/UKCloud_Shared_Services/IL3-Client-RHEL7-Standard-2.5-1.noarch.rpm?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1625780129&Signature=pR2g6hZEE%2BZimRCU5G0g9gQHvww%3D)

If you require the high availability (HA) package, raise a Service Request directly via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and we'll provide you with a download location.

1. Download the appropriate file to your VM (or place the contents in an accessible location such as NFS share or FTP).

2. Install the relevant RPM.

    For example, for RHEL6 in Assured: `yum install IL2-Client-RHEL6-Standard-2.2-1.noarch.rpm`.

    If you're installing a new RPM, such as replacing standard with HA you need to use the `-force` flag to overwrite the existing certificates.

3. Clean yum and the cache:

       yum clean all; rm -rf /var/cache/yum

4. Test the RHUI is working:

       yum update

5. The first time you update from RHUI you may be prompted to accept the following two certificates:

    - The Red Hat entitlement certificate

    - The Client entitlement certificate
    
## Upgrading the RPMs to a newer version

If you already have one of the original UKCloud RPMs installed on your system and require one of the latest ones documented in this article (due to the original ones expiring), you can run a command to upgrade it once you've downloaded the required files.

For example, for RHEL6 in Assured: `yum update IL2-Client-RHEL6-Standard-2.2-1.noarch.rpm`.

This will overwrite the files and certificates associated with the original RPM and restore access to the RHUA (as well as tidying up the previously installed RPM).

## Troubleshooting

The primary issues you may encounter are:

### DNS Failure

Check the DNS lookup is working and you have the correct entry for Assured and Elevated.

### 443 not accessible

1. Check your firewall configuration, including local firewalls (`iptables`) and edge gateway.

2. Ensure you have the correct destination IP entry for Assured or Elevated.

### Incorrect version

Ensure you have installed the correct RPM for your release.

### Comms errors when trying to upgrade the RPM using yum (RHEL6 only)

Due to the previous RPMs no longer being valid for accessing the RHUI, when running RHEL6, you may see some errors when trying to upgrade the RPM. To work around this, issue: `yum update --disableplugin=rhui-lb IL2-Client-RHEL6-Standard-2.2-1.noarch.rpm`. This is not an issue when running RHEL7.

### Unauthorized (401) Error when trying to access RHUA

You most likely have the original RPMs installed. Follow the instructions in the [*Upgrading the RPMs to a newer version*](#upgrading-the-rpms-to-a-newer-version) section above.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
