---
title: OpenStack public image versioning | UKCloud Ltd
description: Describes how image versioning works in the UKCloud public catalog for UKCloud for OpenStack
services: openstack
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenStack public image versioning
toc_fullpath: Reference/ostack-ref-public-image-versioning.md
toc_mdlink: ostack-ref-public-image-versioning.md
---

# OpenStack public image versioning

## Overview

When you create an instance in OpenStack, its disk is cloned from an image managed by OpenStack. To get you started quickly, we publish a public catalog on our platform that provides several instance images for commonly-used instance sizes and operating systems.

To provide you with both predictability and access to the latest updates, without having to provide an unmanageably large catalog, we use a long-term support (LTS) approach for our OpenStack public image catalog.

## Image versioning

In our public catalog, we keep the original version of the image in the catalog for the lifetime of that distribution (providing predictability). We also maintain a second version of the release of the template that we patch and replace as necessary during the distribution (providing you with access to the latest version).

This means that:

- The LTS (original version) is predictable both in deployment state and UUID within OpenStack
- The current version is not predictable in deployment as patches are applied and the UUID changes when the image is updated

## Image naming convention

Within the public catalog, images are named using the following naming convention:

`<distributionName>-<distributionVersionNumber>-LTS`

`<distributionName>-<distributionVersionNumber>-CURRENT`

For example:

`win2012-r2-CURRENT`

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.