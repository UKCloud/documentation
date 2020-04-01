---
title: How to create a vApp
description: Shows you how to create create vApps from scratch within vCloud Director
services: vmware
author: Sue Highmoor
reviewer: lthangarajah
lastreviewed: 02/08/2019

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a vApp
toc_fullpath: How To/vmw-how-create-vapp.md
toc_mdlink: vmw-how-create-vapp.md
---

# How to create a vApp

## Overview

vCloud Director uses vApps to make virtual machine (VM) creation and management easy and flexible. vApps are essentially containers for VMs and can be used in many ways. One of the most common uses of a vApp is to group similar VMs together for easy management. Or you can put VMs that form a multi-tier application into the same vApp for greater control. Up to 128 vApps can be created within a virtual data centre (VDC) and intelligently networked to create complex architectures that can be managed easily.

In this guide we'll look at how to create a vApp from scratch.

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC in which you want to create the vApp.

2. In the left navigation panel, select **vApps** to view a list of vApps within the VDC.

    ![vApps tab in vCloud Director](images/vmw-vcd-tab-vapps.png)

3. Click **New vApp**.

    ![Build New vApp button](images/vmw-vcd-btn-new-vapp.png)

4. In the *New vApp* dialog box, enter a **Name** and **Description** for your vApp. The name should be something that will easily identify it if you're building a large environment with multiple vApps.

    ![Build new vApp dialog box](images/vmw-vcd-build-vapp.png)

5. You can now click **Add Virtual Machine** to populate the vApp with VMs. There are several ways to create a VM:

    - From an existing template (see [*How to create a VM from a template*](vmw-how-create-vm-from-template.md)).

        Catalog creation is covered in [*How to create a catalog*](vmw-how-create-catalog.md).

    - From scratch, without using a template (see [*How to create a virtual machine from scratch*](vmw-how-create-vm-from-scratch.md)).

6. When you've finished creating your vApp, click **Create**.

7. When your vApp has finished deploying, in the card for the vApp, select **Actions** then **Power On** to power it on.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
