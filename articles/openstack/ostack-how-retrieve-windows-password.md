---
title: How to retrieve your Windows password on UKCloud for OpenStack
description: Describes how to retrieve the password for an OpenStack instance that uses a Windows image
services: openstack
author: Sue Highmoor
reviewer: Bryce Nicholls
lastreviewed: 24/04/2020
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

During deployment of a Windows instance, you need to provide your public key to encrypt the password. After deployment, you can retrieve the password for the instance using the nova command line interface (CLI) or Horizon dashboard.

## Retrieving your Windows password with the nova CLI

To retrieve your Windows password, use the following nova CLI command:

`nova get-password <instanceName>/<id> <pathToPrivateKey>`

For example:

`nova get-password testVM ~/.ssh/id_rsa`

## Retrieving your Windows password through the Horizon dashboard

To retrieve your Windows password via the Horizon dashboard, from the list next to the instance, select **Retrieve Instance Password**.

![Retrieve password](images/ostack-horizon-retrieve-password.png)

Now use the private key associated with the instance, and upload the file or paste the contents of the key into the box provided. Click **Decrypt Password** and the administrator password will be shown.

![Decrypt password](images/ostack-horizon-retrieve-password-decrypt.png)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
