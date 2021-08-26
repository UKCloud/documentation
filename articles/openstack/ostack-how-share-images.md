---
title: How to share images between two projects
description: Helps you understand how you can share images between two projects.
services: openstack
author: Steve Relf
reviewer:
lastreviewed:

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Share images between projects
toc_fullpath: How To/ostack-how-share-images.md
toc_mdlink: ostack-how-share-images.md
---

# How to share images between projects

## Overview

This article provides examples of how to share images between OpenStack projects in the same region.

### Intended audience

Anyone responsible for the design and implementation of applications and services deployed on UKCloud OpenStack service, and should be familiar with using the OpenStack dashboard and API/CLI.

## Background

Customers may require the ability to use multiple projects, but may wish to share custom images between those projects. This allows for master images to be created in a single project, and then shared into multiple other projects.

## Sharing images between projects.

> [!NOTE]
> You will require a RC file for both the source project and the destination project.

- Source the source project RC file
- Locate the destination project
 - openstack project list
- Locate the image you wish to share
 - openstack image list
- Set the image as shareable.
 - openstack image set --shared image-id
- share the image with the destination project
 - glance member-create image-id dest-project-id
- Source the destination RC file
- Check that the image share is pending
 - openstack image member list image-id
- Accept the image share
 - openstack  image set --accept image-id


## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
