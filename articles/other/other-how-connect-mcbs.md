---
title: How to connect to MCBS using Data Domain BoostFS
description: Provides information to get up and running with Multi-Cloud Backup Storage
services: other
author: Steve Dixon
reviewer:
lastreviewed: 13/02/2020
toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Connect to MCBS using Data Domain BoostFS
toc_fullpath: How To/other-how-connect-mcbs.md
toc_mdlink: other-how-connect-mcbs.md
---

# How to connect to Multi-Cloud Backup Storage using Data Domain Boost Filesystem

## Overview

The UKCloud Multi-Cloud Backup Storage (MCBS) service provides a backup target that is accessible from every cloud within UKCloud’s multi-cloud platform, utilising a technology that is common across backup products, and compatible with certain file systems, enabling open-source backup applications to utilise the backup service as a target. You can also use Multi-Cloud Backup Storage as a remote backup target for your on-premises data.

UKCloud's Multi-Cloud Backup Storage is based on Dell EMC's Data Domain Boost&trade; (DD Boost) technology, which offers an extensive range of extensions for services such as Oracle, Microsoft SQL, Microsoft Exchange and a wide array of backup server applications to help support performance-optimised, off-site, multi-cloud backups. A full list of DD Boost extensions can be found in our [*Multi-Cloud Backup Storage FAQs*](other-faq-mcbs.md).

### Intended audience

This document is for backup administrators who:

- Are comfortable using an API or command line tools

- Have signed-up for UKCloud's Multi-Cloud Backup Storage service

- Have been issued their Multi-Cloud Backup Storage credentials

## Multi-Cloud Backup Storage

Multi-Cloud Backup Storage:

- Lets you pay for what you use, scaling indefinitely and on demand, removing the complexity of capacity management

- Natively enables deduplication, reducing the cost and management of on-premises storage solutions

- Provides easy access to backup storage from any backup application via DD Boost and BoostFS; using Boost protocol vastly simplifies the integration of backup applications and Boost-aware databases with a cloud-based backup target by removing the need to rely on file servers or cloud storage gateways

- Can replicate backups to give high levels of data durability and availability, eliminating the need for managing a second backup location

You can find a full list of DD Boost extensions in our [*Multi-Cloud Backup Storage FAQs*](other-faq-mcbs.md).

### Use cases

The low cost of Multi-Cloud Backup Storage per GB, as well as its backup-optimised performance and almost unlimited scalability, means there's a large variety of use cases for it. For example, it's ideal for data archives, backups, databases and log files because of its:

- Lower overhead of managing backup infrastructure

- Lower Recovery Time Objective (RTO) for backup recovery through more granular or application aware backup applications

- Quicker database recovery, directly from backup target into database

- Greater control over backups using your own self-service backup applications

## Before you begin

When you request your Multi-Cloud Backup Storage service, UKCloud Support creates the following within your account:

- Storage unit (a Multi-Cloud Backup Storage enabled storage pool)

- API endpoint (see below)

- API username

- API key (password)

These details form the structure of the personalised credentials you'll need to access your Multi-Cloud Backup Storage service.

&nbsp;| MCBS API endpoint
------|-----------------
**Corsham (Assured)** |
Internet | TBC - Q2'19
PSN Assured | TBC
HSCN | TBC
**Farnborough (Assured)** |
Internet | `mcbs.frn00013.ukcloud.com`
PSN Assured | TBC
HSCN | TBC

Contact UKCloud Support if you are unsure which endpoint to use.

## Connecting to Multi-Cloud Backup Storage using Data Domain Boost Filesystem (BoostFS) using Microsoft Windows

For authentication we use local accounts, so you need to create a lockbox to store the password and key values for the account. Details on how to create your configuration file, lockbox and mount your storage follow.

### Create configuration file

`boostfs.conf` contains static configuration that can be used to help connect to your service, key items to configure:

``` none
[global]
# Data Domain Hostname or IP address
data-domain-system=mcbs.frn00013.ukcloud.com` (assumes connection to Farnborough Internet API endpoint)

# Storage Unit
storage-unit={customer storage unit}` (Name of the storage unit as provided in your MCBS credentials)

# Lockbox path (default: C:\BoostFS\Lockbox\boostfs.lockbox)
# lockbox-path=C:\lockbox-name

[\\mcbs.frn00013.ukcloud.com\{customer storage unit}]
# Drive Letter specifies the Windows drive to map to this UNC mount point
drive-letter=G:
```

### Create lockbox

1. Provide the username and storage unit name for access:

    `C:\Program Files\BoostFS> boostfs.exe lockbox set -u {username} -d mcbs.frn00013.ukcloud.com -s {customer storage unit} -l C:\BoostFS\LockBox\boostfs.lockbox`

2. Enter your API key (password).

3. Once created you can use this to mount a drive or folder for use with BoostFS.

> [!NOTE]
> We provide your API key, {username}, {customer storage unit} and API endpoint as part of your MCBS credentials. Contact UKCloud Support if you're unsure of any of these details.

### Mount storage to local machine

`boostfs.exe mount  \\mcbs.frn00013.ukcloud.com\{customer storage unit}`

This will attempt to mount the volume on the drive G as per the configuration.

## Further Data Domain Boost Filesystem (BoostFS) information

- For Microsoft Windows, see the Dell EMC BoostFS for Windows Configuration Guide HERE

- For Linux, see the Dell EMC BoostFS for Linux Configuration Guide HERE

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
