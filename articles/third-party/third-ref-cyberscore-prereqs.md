---
title: CyberScore scanner deployment environment requirements | UKCloud Ltd
description: Provides information about environment requirements for deploying the CyberScore scanner
services: third-party
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 17/09/2019
toc_rootlink: CyberScore
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: CyberScore scanner deployment environment requirements
toc_fullpath: CyberScore/third-ref-cyberscore-prereqs.md
toc_mdlink: third-ref-cyberscore-prereqs.md
---

# CyberScore scanner deployment environment requirements

## Overview

There are a number of prerequisites that you must meet before setting up the CyberScore scanner to enable CyberScore to perform full internal scans.

## A supported virtualisation environment

The CyberScore scanner is a virtual appliance that can be deployed on VMware (including UKCloud for VMware), Hyper-V, AWS or Azure. Support for an OpenStack scanner is coming soon.

## Administrative permission to install the scanner

To install the CyberScore scanner, administrative permission on the virtualised environment is required to import the template.

## Permit outbound access from scanner

The CyberScore scanner talks to the CyberScore service to download the latest vulnerability data and to upload scan results for analysis. To do this, it requires outbound connectivity from within your organisation to the following URLs on ports `80` or `443` unless otherwise specified:

- `https://github.com`

- `https://auth.docker.io`

- `https://registry-1.docker.io`

- `https://production.cloudflare.docker.com`

- `https://secure-api.cyberscore.com`

- `https://updates.cyberscore.com`

- `heartbeat.cyberscore.com` `4505-4506/tcp`

- `logging.cyberscore.com` `5044/tcp` and `443/tcp`

## Admin credentials for the scanning profile

Internal scans, carried out by the scanner installed in your organisation, require access to the scanned devices so that the full extent of security vulnerabilities can be determined. Admin credentials (domain admin for Windows, root for Linux) are entered when configuring the scan. The credentials are stored securely on the scanner.

## Device requirements for full scans

The following table outlines the device specific requirements to facilitate a full scan:

Requirement | Windows (domain joined) | Windows (non-domain joined) | Linux & MacOS
------------|-------------------------|-----------------------------|--------------
Windows Management Instrumentation (WMI) service must be enabled on the target and set to 'Automatic'. | Yes | Yes | N/A
SSH Server installed and running. (e.g. OpenSSH) | N/A | N/A | Yes
File & Printer Sharing needs to be enabled | Yes | Yes | N/A
Remote Registry service must be enabled on the target and set to 'Automatic' | Yes | Yes | N/A
Create a separate *Service Account* set of credentials for fully authenticated scans with sufficient privileges on the target device, at a minimum local admin, or sudo for Linux. | Yes | Yes | Yes
The default administrative shares *i.e IPC$, ADMIN$, C$) must be enabled (AutoShareServer = 1). | Yes | Yes | N/A
Ensure that no Windows security policies are in place that might block access to the above services<br>For e.g. Symantec Endpoint Protection or GPO | Yes | Yes | N/A
Following Windows Firewall rules allowed and enabled:<br>*File & Printer Sharing*<br>*Windows Management Instrumentation (WMI)* | Yes | Yes | N/A
Ports 139 (TCP) and 445 (TCP) must be open. | Yes | Yes | N/A
Port 22 must be enabled | N/A | N/A | Yes

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
