---
title: Bring Your Own Firewall - Known working and non-working firewalls
description: This guide provides information about firewall technology that is known to work or not work on the UKCloud platform.
services: vmware
author: shighmoor
reviewer: 
lastreviewed: 19/07/2018
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Known working and non-working firewalls
toc_fullpath: Reference/vmw-ref-byof-working-firewalls.md
toc_mdlink: vmw-ref-byof-working-firewalls.md
---

# Bring Your Own Firewall - Known working and non-working firewalls

## Introduction

The UKCloud Bring Your Own Firewall service option enables you to install your own virtual firewall within your compute environment instead of using the NSX Edge Services Gateway device we provide as standard. This enables you to use technology with which you are already familiar and which offers the exact functionality that meets your requirements.

While we provide you with a VDC that enables you to use whichever firewall technology you want and do not impose any specific restrictions, this guide aims to provide information about technology that is known to work or not work on our platform.

By requesting the Bring Your Own Firewall option, you accept that you are entirely responsible for sourcing, licensing, installing, configuring and maintaining your firewall. UKCloud will not be able to offer any support for issues caused by the use of a non-standard firewall.

## Known working firewalls

The following firewall technology has been successfully deployed and configured on the UKCloud platform.

### pfSense firewalls

- pfSense v2.2.4 i386

- pfSense v2.3.1 i386

- pfSense v2.3.1 amd64

### Palo Alto firewalls

- Palo Alto VM300 running PanOS 7.01

### Cisco firewalls/routers

- Cisco Cloud Services Router 1000v (Cisco CSR1000v)

    While CSR1000v version 3.16 is supported in both vSphere and VMware Cloud Director deployments, there is a compatibility issue with OVF templates built on legacy hardware configurations (hardware version 7).

    To ensure that your CSR1000v router operates correctly, ensure that your OVF template is built on the most recent hardware version (9 or above).

## Known non-working firewalls

The following firewall technology is known to not work with the UKCloud platform.

### Cisco ASAv

This product is not supported in VMware Cloud Director and therefore will not work on the UKCloud platform.

For more information, see:

- <https://www.cisco.com/c/en/us/td/docs/security/asa/asa93/asav/quick-start/asav-quick/asav-vmware.html>

- <https://www.cisco.com/c/en/us/td/docs/security/asa/compatibility/asamatrx.html>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
