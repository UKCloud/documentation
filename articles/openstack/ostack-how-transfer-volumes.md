---
title: How to transfer volumes between projects in OpenStack
description: Provides information on how to transfer volumes between OpenStack projects.
services: openstack
author: Steve Relf
reviewer: 
lastreviewed: 

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to transfer volumes between projects
toc_fullpath: How To/ostack-how-transfer-volumes.md
toc_mdlink: ostack-how-transfer-volumes.md
---

# How to transfer volumes between projects

## Overview

This article provides examples of how to transfer volumes between OpenStack projects in the same region.

### Intended audience

Anyone responsible for the design and implementation of applications and services deployed on UKCloud OpenStack service, and should be familiar with using the OpenStack dashboard and API/CLI.

## Background

Customers may require the ability to move volumes between projects.

## Transferring volumes between Projects.

> [!NOTE]
> You will require a RC file for both the source project and the destination project.

> [!CAUTION]
> Do not transfer volumes between projects that have snapshots. As this process will break the snapshots.

- Source the source project RC file
- Locate the desitation project
 - openstack project list
- locate the volume you wish to transfer
 - openstack volume list
- create a transfer request
 - openstack volume transfer request create <volume id>
- take a note of the transfer id and auth key
- source the destination project RC file
- accept the transfer request
 - Openstack volume transfer request accept --auth-key <auth key> <transfer id>


## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
