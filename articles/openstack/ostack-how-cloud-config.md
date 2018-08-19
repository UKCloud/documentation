---
title: Making use of Cloud-Config to configure instance on OpenStack | UKCloud Ltd
description: Describes how to use Cloud-Config (user-data) to configure an instance.
services: openstack
author: Steve Relf
toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configuring an instance using Cloud-Config (User-Data)
toc_fullpath: How To/ostack-how-cloud-config.md
toc_mdlink: ostack-how-cloud-config.md
---

# How to configure an instance using cloud-config (user-data)

## Overview
When you boot an instance in OpenStack its possible to pass configuration to the instance, this configuration is passed into the instance as cloud-config (sometimes called User-Data). This allows you to quickly and easy make configuration changes at boot time.

## Why would I use this
Setting a default locale
Setting an instance hostname
Generating instance SSH private keys
Adding SSH keys to a user’s .ssh/authorized_keys so they can log in
Setting up ephemeral mount points
Configuring network devices
Running config scripts at startup
And much much more.

## Example
As an example, lets boot an instance and run some arbitry commands at boot time.

cloud-config can be deployed via the command line, or via the horizon GUI. This guide will use the CLI, the same script can be used via the GUI, it will just need to be pasted into the "Configuration" tab.

Create a new text file called, user-data.txt.

Add the following to it.

`
#cloud-config
runcmd:
 - mkdir -pv /root/cloud-config-test
 - touch /root/cloud-config-test/boottest
 - echo "boot instance test" >> /root/cloud-config-test/boottest
`

Now boot an instance using the cli, and add "--user-data user-data.txt" to the end of the boot command.

Once the instance has booted, log into the instance, switch to root and look in the directoy, you will see the new file, and it will contain "boot instance test"

This is a very simple example of what can be done with cloud-config, but you can see from this simple example that you can easily start to build fairly complicated setup scripts.

## Cloud Config documentation
The cloud config documentation can be found here;

https://cloudinit.readthedocs.io/en/latest/topics/examples.html

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
