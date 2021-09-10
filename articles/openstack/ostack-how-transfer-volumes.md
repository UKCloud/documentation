---
title: How to transfer volumes between projects in OpenStack
description: Provides information on how to transfer volumes between OpenStack projects.
services: openstack
author: srelf
reviewer: 
lastreviewed: 26/08/2021

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Transfer volumes between projects
toc_fullpath: How To/ostack-how-transfer-volumes.md
toc_mdlink: ostack-how-transfer-volumes.md
---

# How to transfer volumes between projects

## Overview

You may require the ability to move volumes between projects.

This article provides examples of how to transfer volumes between OpenStack projects in the same region.

### Intended audience

This article is intended for anyone responsible for the design and implementation of applications and services deployed on UKCloud OpenStack service. Users should be familiar with using the OpenStack dashboard and API or CLI.

## Transferring volumes between projects

> [!NOTE]
> You'll require a RC file for both the source project and the destination project.

> [!CAUTION]
> Do not transfer volumes between projects that have snapshots as this process will break the snapshots.

1. Source the source project RC file.

2. Locate the destination project:

   `openstack project list`

3. Locate the volume you want to transfer:

   `openstack volume list`

4. Create a transfer request:

   `openstack volume transfer request create <volume id>`

5. Take a note of the transfer id and auth key.

6. Source the destination project RC file.

7. Accept the transfer request:

   `openstack volume transfer request accept --auth-key <auth key> <transfer id>`

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
