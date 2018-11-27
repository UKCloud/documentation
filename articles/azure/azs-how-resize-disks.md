---
title: How to resize virtual machine disks
description: Learn how to resize virtual machine disks
services: azure-stack
author: David Woffendin 

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: How to resize virtual machine disks
toc_fullpath: Users/How To/azs-how-resize-disks.md
toc_mdlink: azs-how-resize-disks.md
---

# How to resize virtual machine disks

In this guide we will cover the process of resizes disks in Azure portal. This can be needed if the VM requires more storage space and you can increase current disk capacity rather than adding more disks.

## Steps to changing disk size via portal

1. Power down or detach disk from VM.
  ![Detach disks](images/azs-browser-detach-disk.png)
2. Navigate to the resource group.
3. Select disk.
4. Alter the disk size (Note the max size for a disk is 1023gb for a single disk).
  ![Detach disks](images/azs-browser-change-disk.png)
5. Save changes.
6. Power back on the VM or reattach the disk.
  ![Detach disks](images/azs-browser-attach-disk.png)

These steps will work for both non managed and managed VM's.

## Feedback

  If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [*UKCloud Ideas*](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.