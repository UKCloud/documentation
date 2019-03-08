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

We update our supported images once a quarter. We will not remove images from the platform until they are no longer in use by any customer.

UKCloud always recommends using the latest available image, and recommends that all instances have their packages updated as often as possible.

## Image naming convention

Within the public catalog, we use the following image naming convention to enable you to easily identify images and select the best image to meet your requirements:

`<distributionName>-<distributionVersionNumber>-CURRENT` - This will be the most recent image for the quarter.

`<distributionName>-<distributionVersionNumber>-<DATE>` - The date indicates when the image was rotated from being the current image.

For example:

`win2012-r2-CURRENT`

`win2012-r2-01-01-2019`

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
