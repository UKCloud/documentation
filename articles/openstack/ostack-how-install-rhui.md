---
title: How to install Red Hat Update Infrastructure on an existing OpenStack instance
description: Shows you how to update your existing OpenStack Instances to target UKCloud's approved Red Hat Update Infrastructure (RHUI)
services: openstack
author: Sue Highmoor
reviewer: Matt Gough
lastreviewed: 12/03/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install Red Hat Update Infrastructure on an existing OpenStack instance
toc_fullpath: How To/ostack-how-install-rhui.md
toc_mdlink: ostack-how-install-rhui.md
---

# How to install Red Hat Update Infrastructure on an existing OpenStack instance

## Overview

Red Hat Update Infrastructure (RHUI) enables automatic updates to our Red Hat customers, providing benefits such as the reliable availability of patch updates and Red Hat approved OS templates.

This article provides advice on how to update your existing Red Hat instances (virtual machines) to target UKCloud's approved RHUI.

## Prerequisites

There are two prerequisites for performing this operation:

- The host can resolve to the RHUI DNS records (contact Customer Support for the IP addresses and domain names for these records). You can achieve this by configuring an A record on your local DNS or configuring  an `/etc/hosts` file with the appropriate information. For internet connectivity, the required domain name is in public DNS.

- All hosts using the service must be able to access the local RHUA server on port 443 (HTTPS). Ensure that the configured Security Groups allow outbound connectivity on port 443. If you have any questions on this, contact UKCloud Support.

## Installation

You can find the installer RPM files in an ISO image. Before you can mount this to an existing instance, you'll need to create a volume from the image.

1. In the Horizon Web UI, locate the image `UKCloud-RHUI-Standard-Assured.iso`, click the action button and select **Create Volume**.

    ![Create Volume](images/ostack-rhui-image.png)

2. Use the default settings presented by the dialog to copy the ISO to a 1GB Tier 2 volume, and click **Create Volume**.

    ![Create Volume Dialog](images/ostack-rhui-volumecreate.png)

3. Locate the Red Hat instance where you want to install RHUI support and select **Attach Volume**.

    ![Instance Action Menu](images/ostack-rhui-volumeattach.png)

4. Select the newly created volume and then click **Attach Volume**.

    ![Attach Volume Dialog](images/ostack-rhui-volumeattachdialog.png)

5. Select the instance name and check at the bottom of the Instance Overview to see that the volume is attached, and what its device name is.

    ![Volume Attach Status](images/ostack-rhui-volumelocation.png)

6. As root, mount the volume inside the VM, using the device name from step 5.

    ![Mount inside OS](images/ostack-rhui-mount.png)

7. Install the relevant RPM.

    For example, for RHEL7: `rpm -ivh IL2-Client-RHEL7-Standard-2.0-1.noarch.rpm`.

8. Clean yum:

    ```none
    yum clean all
    ```

9. Test the RHUI is working:

    ```none
    yum update
    ```

10. The first time you update from RHUI you may be prompted to accept the following two certificates:

    - The Red Hat entitlement certificate

    - The Client entitlement certificate

## Troubleshooting

The primary issues you may encounter are:

### DNS Failure

Check the DNS lookup is working and you have the correct entry for Assured.

### 443 not accessible

1. Check your firewall configuration, including local firewalls (iptables) and security groups applied to instances.

2. Ensure you have the correct destination IP entry.

### Incorrect version

Ensure you have installed the correct RPM for your release.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
