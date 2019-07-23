---
title: vCloud Director 9.7 known issues | UKCloud Ltd
description: This article describes some of the issues you may encounter when using vCloud Director 9.7 with UKCloud for VMware
services: vmware
author: Sue Highmoor
reviewer: 
lastreviewed: 

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: vCloud Director 9.7 known issues
toc_fullpath: Reference/vmw-ref-vcd97-known-issues.md
toc_mdlink: vmw-ref-vcd97-known-issues.md
---

# vCloud Director 9.7 known issues

## Overview

This article describes some of the issues you may encounter when using vCloud Director 9.7 with UKCloud for VMware.

## Known issues with virtual machines

### Disk sizes are in MB

#### Description

When adding a disk in the *Hardware* section of the VM details page, you must enter disk size in MB rather than GB and values must be entered in MB.

#### Solution

There is currently no workaround for this issue. You must enter disk sizes in MB. We have raised a bug with VMware.

### Can enter non-optimal values for disks

#### Description

The UI doesn't give default or suggested values for **Bus Number** or **Unit Number**, leading to the potential to enter non-optimal values.

#### Solution

There is currently no workaround for this issue. We have raised a bug with VMware.

### Not using default storage policy when adding a new disk

#### Description

When adding a new disk, the storage **Policy** does not default to the VM or VDC default option.

#### Solution

You must change the storage policy as required.

### Default option is to automatically power-on VMs

#### Description

When you create a VM using the Tenant UI, the **Power on** check box is selected by default so that the newly created VM is powered on. In the Legacy UI, the default was for VMs to be powered off.

#### Solution

If you do not want a newly created VM to be powered on, ensure that you deselect the **Power on** check box.

### Cannot perform some tasks on a shut down VM, such as upgrade hardware version

#### Description

When you select the **Shut Down Guest OS** option for a VM leaves the VM in a partially powered off state. However in the Tenant UI, the VM will show as **Powered off**. While in this partially powered off state, you will be unable to perform tasks that require the VM to be completely powered off.

#### Solution

To make sure that a VM is fully powered off, select the **Power Off** option from the **Actions** menu.

### Cannot select NIC type when adding a new NIC

#### Description

When adding a new NIC in the *Hardware* section of the VM details page, you cannot see or edit the NIC type.

#### Solution

There is currently no workaround for this issue. We have raised a bug with VMware.

### The list of operating systems when creating a VM is not logically ordered

#### Description

The list of operating systems is not sorted in a logical order.

#### Solution

Make sure to scroll through the list of operating systems to find the one you want to use for your VM.

## Known issues with edge gateways

### Edge with VPN shows as working when it is not

#### Description

Status icon for edge does not change even though there are issues with IPsec VPN or load balancing.

#### Solution

There is currently no workaround for this issue. We have raised a bug with VMware.

### Edge with a VPN using AES-GCM encryption algorithm cannot be managed in the Tenant UI

#### Description

After setting up a VPN, if the encryption algorithm is set to `AES-GCM` the edge is no longer manageable in Tenant UI and errors with `"class java.lang.NullPointerException"`.

#### Solution

Use the Legacy UI to change the algorithm in the VPN configuration with the Legacy UI, You can then manage the edge in the Tenant UI.

### Cannot see the PSK for my IPsec VPN

#### Description

In the Tenant UI, it is difficult to find the PSK for an IPSec VPN.

#### Solution

This information is available, but to access it you need to select **Change shared key**, then select **Display shared key**. After making a note of the key, you can close the dialog box without making any changes.

## Other known issues

### Cannot see vApp description

#### Description

In the Tenant UI, there is no way to see the description of a vApp template to see information such as the OS password or patch dates.

#### Solution

To view the description of a vApp template, you must use the Legacy UI.

### No option to change default VDC storage profile

#### Description

On the *Storage Policies* page, there is no way to change the default storage policy for the VDC.

#### Solution

There is currently no workaround for this issue. We have raised a bug with VMware.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
