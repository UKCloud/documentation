---
title: How to create a virtual machine from a disk snapshot using the UKCloud Azure Stack Hub portal
description: Provides help for creating a virtual machine from a managed disk snapshot using the portal on UKCloud for Microsoft Azure
services: azure-stack
author: William Turner
reviewer: William Turner
lastreviewed: 04/05/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine from disk snapshot
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine from snapshot - Portal
toc_fullpath: Users/How To/Create a Virtual Machine from disk snapshot/azs-how-create-vmfromsnapshot-portal.md
toc_mdlink: azs-how-create-vmfromsnapshot-portal.md
---

# How to create a virtual machine from a disk snapshot using the UKCloud Azure Stack Hub portal

## Overview

The UKCloud Azure Stack Hub portal allows you to create a snapshot of a managed disk. This article shows you how to create a virtual machine using the snapshot of a managed disk.

### Intended audience

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Resizing disks that are mounted to a VM

1. Log in to the Azure Stack Hub portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Virtual machines**.

    ![Virtual machines in the favourites panel](images/azsp_vmsmenu.png)

3. In the *Virtual machines* blade, select the virtual machine that the disk is attached to.

4. In the virtual machine's blade, select **Disks**.

    ![Disks button within VM](images/azs-browser-vm-menu-disks-button.png)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
