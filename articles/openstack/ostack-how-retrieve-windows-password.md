---
title: How to retrieve your Windows password on UKCloud for OpenStack | UKCloud Ltd
description: Describes how to retrieve the password for an OpenStack instance that uses a Windows image
services: openstack
author: Sue Highmoor
reviewer:
lastreviewed: 02/08/2018 14:45:48
toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Retrieve your Windows password on UKCloud for OpenStack
toc_fullpath: How To/ostack-how-retrieve-windows-password.md
toc_mdlink: ostack-how-retrieve-windows-password.md
---

# How to retrieve your Windows password on UKCloud for OpenStack

## Overview

When you create an instance in OpenStack, its disk is cloned from an image managed by OpenStack. To get you started quickly, we publish a public catalog on our platform that provides several instance images for commonly-used instance sizes and operating systems. This catalog includes several images for Windows operating systems.

During deployment of a Windows instance, you need to provide your public key to encrypt the password. After deployment, you can retrieve the password for the instance using the nova command line interface (CLI).

## Retrieving your Windows password

To retrieve your Windows password, use the following nova CLI command:

    nova get-password <instanceName>/<id> <pathToPrivateKey>

For example:

    nova get-password testVM ~/.ssh/id_rsa

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
