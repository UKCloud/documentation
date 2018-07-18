---
title: How to install Red Hat Update Infrastructure on an existing virtual machine | UKCloud Ltd
description: This article provides advice on how to update your existing Red Hat virtual machines (VMs) to target UKCloud’s approved Red Hat Update Infrastructure (RHUI)
services: vmware
author: Steve Hall
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: How to/vmw-how-install-rhui.md
toc_mdlink: vmw-how-install-rhui.md
---

# Overview

This article provides advice on how to update your existing Red Hat
virtual machines (VMs) to target UKCloud's approved Red Hat Update
Infrastructure (RHUI).

As of July 2015, UKCloud implemented an RHUI to provide automatic
updates to our Red Hat customers on our Assured OFFICIAL and Elevated
OFFICIAL platforms. This provides benefits such as the reliable
availability of patch updates and Red Hat approved OS templates.

This update service replaces the previous repositories, which are no
longer updated and were retired on the 31 August 2015.

## Pre-requisites

There are two pre-requisites for performing this operation:

-   The host can resolve the following DNS records:

    Assured\
    37.26.90.194 rhua.ukcloud.com

    Elevated\
    172.26.89.98 rhua.psn.ukcloud.com

    You can achieve this by configuring an A record on your local DNS,
    or configuring a /etc/hosts file with one of the lines above.

-   All hosts using the service must be able to access the local RHUA
    server on port 443 (HTTPS). Ensure that you have configured SNAT and
    firewall policies on your edge gateway device. If you have any
    questions on this, contact UKCloud Support.

## Installation

You can find the installer RPM files in the UKCloud public catalogue
under **media**, for example, **UKCloud-RHUI-Standard-Assured**.

If you require the high availability (HA) package, raise a Service
Request directly via the [My
Calls](https://portal.ukcloud.com/support/my_calls) section of the
UKCloud Portal and it will be uploaded to your private catalogue.

1.  Mount the UKCloud RHUI-\*\*\*.iso to the VM (or place the contents
    in an accessible location such as NFS share, FTP, and so on).

2.  Install the relevant RPM.

    For example, for RHEL6: rpm -ivh
    IL2-Client-RHEL6-Standard-2.0-1.noarch.rpm.

    If you are installing a new RPM, such as replacing standard with HA
    you need to use the -force flag to overwrite the existing
    certificates.

3.  Clean yum:

    yum clean all

4.  Test the RHUI is working:

    yum update

5.  The first time you update from RHUI you will be prompted to accept
    the following two certificates:

    -   The Red Hat entitlement certificate

    -   The Client entitlement certificate

## Troubleshooting

The primary issues you may encounter are:

## DNS Failure

Check the DNS lookup is working and you have the correct entry for
Assured and Elevated.

## 443 not accessible

1.  Check your firewall configuration, including local firewalls
    (iptables) and vShield Edge gateway.

2.  Ensure you have the correct destination IP entry for Assured or
    Elevated.

## Incorrect version

Ensure you have installed the correct RPM for your release.

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved.
