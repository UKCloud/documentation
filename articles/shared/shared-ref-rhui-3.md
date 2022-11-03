---
title: Red Hat Update Infrastructure Overview (RHUI 3)
description: Provides information about the UKCloud Red Hat Update Infrastructure (RHUI 3)
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 05/09/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Red Hat Update Infrastructure Overview (RHUI 3)
toc_fullpath: Reference/shared-ref-rhui-3.md
toc_mdlink: shared-ref-rhui-3.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Red Hat Update Infrastructure Overview (RHUI 3)

## Overview

The Red Hat Update Infrastructure enables the patching of a Red Hat virtual machine (VM) without any requirement for registering the VM on the Red Hat network. To achieve this, each Red Hat Enterprise Linux (RHEL) VM must have an RPM installed that configures the RHUI repository servers (in `/etc/yum.repos.d/`) and provides the required certificates used for authentication purposes. While in the previous version of RHUI, a separate RPM per security domain was required, in the latest version, you can use a single RPM across both Assured and Elevated machines.

You can view available configuration RPMs [here](https://rh-cds.ukcloud.com/redhat/client_rpms/).

The RHUI services consist of:

- Red Hat Update Appliance (RHUA), which downloads packages and builds and manages the repositories

- Content Distribution Servers (CDS), which serve packages to client machines

### Intended audience

This article is intended for customers who have configured their systems to use RHUI v3.

## Repository groups

The UKCloud RHUI service supplies access to the following repository groups. Each group is installed by a configuration RPM. You can install only one configuration RPM per client machine.

### RHEL6-ELS

- Red Hat Enterprise Linux 6 Server - Extended Life Cycle Support (RPMs) from RHUI (6Server-x86_64)

- Red Hat Enterprise Linux 6 Server - Extended Life Cycle Support - Optional (RPMs) from RHUI (6Server-x86_64)

### RHEL7-Standard

- Red Hat Enterprise Linux 7 Server - Extras from RHUI (RPMs) (x86_64)

- Red Hat Enterprise Linux 7 Server - Optional from RHUI (RPMs) (7Server-x86_64)

- Red Hat Enterprise Linux 7 Server from RHUI (RPMs) (7Server-x86_64)

- Red Hat Enterprise Linux 7 Server - Supplementary from RHUI (RPMs) (7Server-x86_64)

- Red Hat Software Collections RPMs for Red Hat Enterprise Linux 7 Server from RHUI (7Server-x86_64)

### RHEL8-Standard

- Red Hat Enterprise Linux 8 for x86_64 - AppStream from RHUI (RPMs) (8)

- Red Hat Enterprise Linux 8 for x86_64 - BaseOS from RHUI (RPMs) (8)

- Red Hat Enterprise Linux 8 for x86_64 - Supplementary (RPMs) from RHUI (8)

- Red Hat CodeReady Linux Builder for RHEL 8 x86_64 (RPMs) from RHUI (8)

## Extended Update Support (EUS)

Red Hat have deprecated the release of the XServer package sets in EUS. Instead, specific minor releases (6.x, 7.x) are available. The following [article](https://access.redhat.com/solutions/4710991) contains further information. If you require EUS for a specific Red hat release, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## High Availability

High Availability (HA) is a premium Red Hat service, therefore you'll need to notify UKCloud for access to HA repositories bring your own licenses to support this service. If required, we can provide access to additional repositories such as Scalable File System, Load Balancer or Resilient Storage. To access these services, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section in the UKCloud Portal.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
