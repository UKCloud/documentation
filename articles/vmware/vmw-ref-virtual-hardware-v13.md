---
title: Availability of Virtual Hardware version 13
description: UKCloud has upgraded UKCloud for VMware to expose Virtual Hardware version 13
services: vmware
author: shighmoor
reviewer: swthomas
lastreviewed: 26/10/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Availability of Virtual Hardware version 13
toc_fullpath: Reference/vmw-ref-virtual-hardware-v13.md
toc_mdlink: vmw-ref-virtual-hardware-v13.md
---

# Availability of Virtual Hardware version 13

## What does Virtual Hardware v13 provide?

In comparison to Virtual Hardware v12, Virtual Hardware v13 enables UKCloud to support increased maximum memory, an NVMe Controller and PVRDMA (Paravirtual RDMA). 

You can find a list of supported guest OSs via the [VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=software) (set **Product Release Version** to **ESXi 6.5 U3**).

## When do these changes take effect?

UKCloud has enabled Virtual Hardware v13 across our entire UKCloud for VMware estate. 

Note that Virtual Hardware v14 is currently available in the following regions (with the remainder to follow):

- Region 1,2,7,8  

- Zone 2e (Region 14)

- Zone 2d (Region 13)

- Zone 1 (Region 6)

Contact your Service Delivery Manager for more information.

Any new virtual machines (VMs) will, by default, be created with the updated virtual hardware version. 

Any existing VMs and templates will continue to use their currently configured virtual hardware version until such time as you select to change this. Any clones/copies of VMs or templates will retain the same virtual hardware version as the source image.

## How do I manually upgrade the Virtual Hardware version of my VM?

Prior to upgrading the Virtual Hardware version, you should note the following:

- You cannot downgrade the hardware version of the virtual machines in a vApp.

- The vApp/VMs must be stopped and its virtual machines must have the latest version of VMware Tools installed.

We recommend referring to the following VMware documentation for mre information: [Upgrading a virtual machine to the latest hardware version](https://kb.vmware.com/s/article/1010675).

To upgrade the Virtual Hardware version of a VM:

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
