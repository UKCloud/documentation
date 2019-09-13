---
title: RAC on UKCloud for Oracle Software | UKCloud Ltd
description: Describes how to run Oracle Real Application Clusters (RAC) on UKCloud for Oracle Software
services: oracle
author: Sue Highmoor
reviewer:
lastreviewed: 24/08/2018 16:01:11
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: RAC on UKCloud for Oracle Software
toc_fullpath: Reference/orcl-ref-rac.md
toc_mdlink: orcl-ref-rac.md
---

# RAC on UKCloud for Oracle Software

## Overview

Oracle Real Application Clusters (RAC) shares an Oracle database across multiple servers, removing the database as a potential single point of failure and increasing application availability.

UKCloud for Oracle Software enables you to run RAC just as you would on any on-premises OVM platform.

## Preparing to run RAC

To run RAC on UKCloud for Oracle Software, you must have:

- Configured an additional private VLAN within your Oracle tenancy for the RAC interconnect. If you need assistance creating a VLAN, contact UKCloud Support.
  

- Access to shared storage. To do this, ask UKCloud to create a shared disk for you. Currently NFS if not available for RAC on UKCloud for Oracle Software.

    > [!NOTE]
    > We recommend that you do not host NFS from another VM due to performance degradation.

- Anti-affinity to prevent the RAC nodes appearing on the same OVM server. Contact UKCloud Support to move your RAC nodes across multiple OVM servers and create the anti-affinity group.

- Access to a reliable NTP server, which should be available on the local network.

- Access to your own managed DNS server (for RAC hostname entries).

    > [!NOTE]
    > For clusterware to work properly, you must ensure that, prior to the installation, the RAC VIP/SCAN/etc hostnames entries are added on the DNS server you intend to use. If you're migrating from another platform, the network environment must be fully prepared beforehand to ensure everything starts properly.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
