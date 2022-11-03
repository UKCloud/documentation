---
title: How to share images between two projects
description: Helps you understand how you can share images between two projects.
services: openstack
author: srelf
reviewer:
lastreviewed: 26/08/2021

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Share images between projects
toc_fullpath: How To/ostack-how-share-images.md
toc_mdlink: ostack-how-share-images.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to share images between projects

## Overview

You may require the ability to use multiple projects, but may want to use custom images across those projects. Sharing images between projects enables you to create master images in a single project, and then share them into multiple other projects.

This article provides examples of how to share images between OpenStack projects in the same region.

### Intended audience

This article is intended for anyone responsible for the design and implementation of applications and services deployed on UKCloud's OpenStack service. Users should be familiar with using the OpenStack dashboard and API or CLI.

## Sharing images between projects

> [!NOTE]
> You will require a RC file for both the source project and the destination project.

1. Source the source project RC file.

2. Locate the destination project:

   `openstack project list`

3. Locate the image you want to share:

   `openstack image list`

4. Set the image as shareable:

   `openstack image set --shared image-id`
   
5. Share the image with the destination project:

   `glance member-create image-id dest-project-id`

6. Source the destination RC file.

7. Check that the image share is pending:

   `openstack image member list image-id`

9. Accept the image share:

   `openstack image set --accept image-id`

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
