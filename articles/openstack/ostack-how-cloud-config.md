---
title: How to configure an OpenStack instance using cloud-config
description: Describes how to use cloud-config (user-data) to configure an OpenStack instance
services: openstack
author: Steve Relf
reviewer: Bryce Nicholls
lastreviewed: 28/01/2020 09:10:19
toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure an instance using cloud-config
toc_fullpath: How To/ostack-how-cloud-config.md
toc_mdlink: ostack-how-cloud-config.md
---

# How to configure an OpenStack instance using cloud-config

## Overview

When you boot an instance in OpenStack you can pass configuration to the instance as cloud-config (sometimes called user-data). This enables you to quickly and easily make configuration changes at boot time.

## Use cases

The following list provides some examples of how you can use cloud-config to configure an instance:

- Setting a default locale
- Setting an instance hostname
- Generating instance SSH private keys
- Adding SSH keys to a user's `.ssh/authorized_keys` so they can log in
- Setting up ephemeral mount points
- Configuring network devices
- Running config scripts at startup

## Example

You can deploy cloud-config via the command line or via the OpenStack Horizon GUI. In this guide, we use the CLI, but you can use the same script via the GUI by pasting it into the **Configuration** tab.

As an example, let's boot an instance and run some arbitrary commands at boot time.

1. Create a new text file called `user-data.txt`.

2. Add the following to the new file.

    ``` none
    #cloud-config
    runcmd:
     - mkdir -pv /root/cloud-config-test
     - touch /root/cloud-config-test/boottest
     - echo "boot instance test" >> /root/cloud-config-test/boottest
    ```
    
    > [!NOTE]
    > You must include the `#cloud-config` line at the top of the file.

3. Boot an instance using the CLI, adding `--user-data user-data.txt` to the end of the boot command.

4. When the instance has booted, log into the instance, switch to root and look in the directory. You will see the new file, and it will contain `boot instance test`.

This is a very simple example of what you can do with cloud-config, but you can see from this simple example that you can easily start to build fairly complicated setup scripts.

## Next steps

You can find documentation for cloud-config at the following location:

https://cloudinit.readthedocs.io/en/latest/topics/examples.html

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
