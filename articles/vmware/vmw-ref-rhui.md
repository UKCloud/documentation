---
title: Red Hat Update Infrastructure overview
description: Explains the UKCloud Red Hat Update Infrastructure (RHUI)
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 19/07/2018 12:45:48
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Red Hat Update Infrastructure overview
toc_fullpath: Reference/vmw-ref-rhui.md
toc_mdlink: vmw-ref-rhui.md
---

# Red Hat Update Infrastructure overview

The Red Hat Update Infrastructure enables the patching of a Red Hat virtual machine without any requirement for registering the virtual machine on the Red Hat network. To achieve this, each Red Hat Enterprise Linux (RHEL) virtual machine must have an RPM installed that configures the RHUI repository servers and provides the required certificates.

The RHUI services consist of:

- Red Hat Update Appliance (RHUA), which builds and manages the repositories

- Content Distribution Servers (CDS), which serve content to clients

The UKCloud RHUI service supplies access to the following repository groups, each group is installed by an RPM. You can only have one RPM installed per RHUI client virtual machine.

## RHEL5-Standard

- Red Hat Enterprise Linux 5 Server - RH Common from RHUI (RPMs) (5Server-i386) 

- Red Hat Enterprise Linux 5 Server - RH Common from RHUI (RPMs) (5Server-x86_64) 

- Red Hat Enterprise Linux 5 Server from RHUI (RPMs) (5Server-i386) 

- Red Hat Enterprise Linux 5 Server from RHUI (RPMs) (5Server-x86_64) 

- Red Hat Enterprise Linux 5 Server - Supplementary from RHUI (RPMs) (5Server-i386) 

- Red Hat Enterprise Linux 5 Server - Supplementary from RHUI (RPMs) (5Server-x86_64)

## RHEL6-Standard

- Red Hat Enterprise Linux 6 Server - Extras from RHUI (RPMs) (i386) 

- Red Hat Enterprise Linux 6 Server - Extras from RHUI (RPMs) (x86_64) 

- Red Hat Enterprise Linux 6 Server - Optional from RHUI (RPMs) (6Server-i386) 

- Red Hat Enterprise Linux 6 Server - Optional from RHUI (RPMs) (6Server-x86_64) 

- Red Hat Enterprise Linux 6 Server - RH Common from RHUI (RPMs) (6Server-i386) 

- Red Hat Enterprise Linux 6 Server - RH Common from RHUI (RPMs) (6Server-x86_64) 

- Red Hat Enterprise Linux 6 Server from RHUI (RPMs) (6Server-i386) 

- Red Hat Enterprise Linux 6 Server from RHUI (RPMs) (6Server-x86_64) 

- Red Hat Enterprise Linux 6 Server - Supplementary from RHUI (RPMs) (6Server-i386) 

- Red Hat Enterprise Linux 6 Server - Supplementary from RHUI (RPMs) (6Server-x86_64) 

- Red Hat Software Collections for RHEL Server from RHUI (RPMs) (6Server-i386) 

- Red Hat Software Collections for RHEL Server from RHUI (RPMs) (6Server-x86_64)

## RHEL7-Standard

- Red Hat Enterprise Linux 7 Server - Extras from RHUI (RPMs) (x86_64) 

- Red Hat Enterprise Linux 7 Server - Optional from RHUI (RPMs) (7Server-x86_64) 

- Red Hat Enterprise Linux 7 Server - RH Common from RHUI (RPMs) (7Server-x86_64) 

- Red Hat Enterprise Linux 7 Server from RHUI (RPMs) (7Server-x86_64) 

- Red Hat Enterprise Linux 7 Server - Supplementary from RHUI (RPMs) (7Server-x86_64) 

- Red Hat Software Collections RPMs for Red Hat Enterprise Linux 7 Server from RHUI (7Server-x86_64)

## High Availability and Extended Update Support

High Availability (HA) and Extended Update Support (EUS) are premium Red Hat services. Customers will need to notify UKCloud for access to these repositories or will need to bring their own licenses to support these additional services. If required, we can provide access to additional repositories such as Scalable File System, Load Balancer or Resilient Storage. To access these services, please raise a UKCloud Support Service Request directly via [My Calls](https://portal.skyscapecloud.com/support/ivanti) and it will be uploaded to your private catalogue.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
