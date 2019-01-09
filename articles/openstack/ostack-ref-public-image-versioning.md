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

## Image versioning

We will be providing updated images once a quarter for our supported images. We will not be removing images from the platform until they are no longer in use by any customers. We will be adopting a naming convention that will allow you to easily identify images.

UKCloud always recomends using the latest availible image, and recomends that all instances have their packages updated as often as possible.

## Image naming convention

Within the public catalog, images are named using the following naming convention:

`<distributionName>-<distributionVersionNumber>-CURRENT` - This will be the most recent image for the quarter.

`<distributionName>-<distributionVersionNumber>-DATE` - The data indicates when the image was rotated from being the current image.

For example:

`win2012-r2-CURRENT`

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
