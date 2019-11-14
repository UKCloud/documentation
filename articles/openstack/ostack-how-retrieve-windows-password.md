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

## Retrieving your Windows password with nova CLI

To retrieve your Windows password, use the following nova CLI command:

    nova get-password <instanceName>/<id> <pathToPrivateKey>

For example:

    nova get-password testVM ~/.ssh/id_rsa

## Retrieving your Windows password through the Horizon GUI

To retrieve your Windows password via the GUI, click on the drop down next to the instance, and click "Retrieve Instance Password"

![Retrieve-Password](./images/ostack-horizon-retrieve-password.png)

Now use the private key associated with the instance, and upload the file or paste the contents of the key into the box provided. Click "Decrypt Password", and the administrator password will be shown.

![Retrieve-Password-Decrypt](./images/ostack-horizon-retrieve-password-decrypt.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
