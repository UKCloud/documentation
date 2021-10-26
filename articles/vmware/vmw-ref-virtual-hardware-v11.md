---
title: Availability of Virtual Hardware version 11
description: UKCloud has upgraded UKCloud for VMware to expose Virtual Hardware version 11
services: vmware
author: shighmoor
reviewer: swthomas
lastreviewed: 26/10/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Availability of Virtual Hardware version 11
toc_fullpath: Reference/vmw-ref-virtual-hardware-v11.md
toc_mdlink: vmw-ref-virtual-hardware-v11.md
---

# Availability of Virtual Hardware version 11

## What does Virtual Hardware v11 provide?

Virtual Hardware v11 enables UKCloud to support increased CPU limits and memory, but primarily it introduces new guest OS support as follows:

- Debian 8.*x*

- Solaris 11.2

- Asanux 4 SP4

- Ubuntu 12.04.5/14.04.1

- Oracle Linux 7

- FreeBSD 9.3

- MAC OSX 10.10

- Windows 2016

## When do these changes take effect?

UKCloud has enabled these upgrades across our entire UKCloud for VMware estate.

Any new virtual machines (VMs) will, by default, be created with the updated virtual hardware version. Any existing VMs and templates will continue to use their currently configured virtual hardware version until such time as you select to change this. Any clones/copies of VMs or templates will retain the same virtual hardware version as the source image.

Prior to upgrading the Virtual Hardware version, you should note the following:

- You cannot downgrade the hardware version of the virtual machines in a vApp

- The vApp/VMs must be stopped and its virtual machines must have the latest version of VMware Tools installed.

## How do I manually upgrade the Virtual Hardware version of my VM?

1. Log into the UKCloud Portal and access VMware Cloud Director.

    For more detailed steps, see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md).

2. In the *Virtual Datacenters* dashboard, select the virtual data centre (VDC) that contains the VM you want to upgrade.

3. In the card for the VM that you want to upgrade, from the **Actions** menu, select **Upgrade Virtual Hardware Version**.

4. Click **OK** to complete the upgrade.

## Are there precautions I need to be aware of?

The update of CPU features may result in some operating systems being reconfigured on their next reboot. We advise that you monitor the first reboot of any VMs to ensure any OS configuration changes apply correctly.

For other precautions and guidance, see the following VMware documentation: [Upgrading a virtual machine to the latest hardware version](https://kb.vmware.com/s/article/1010675).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
