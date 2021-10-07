---
title: How to create a vApp
description: Shows you how to create create vApps from scratch within VMware Cloud Director
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 05/10/2021

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

VMware Cloud Director uses vApps to make virtual machine (VM) creation and management easy and flexible. vApps are essentially containers for VMs and can be used in many ways. One of the most common uses of a vApp is to group similar VMs together for easy management. Or you can put VMs that form a multi-tier application into the same vApp for greater control. You can create up to 128 vApps within a virtual data centre (VDC) and intelligently network them to create complex architectures that can be managed easily.

In this article we'll look at how to create a vApp from scratch.

## Creating a vApp

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC in which you want to create the vApp.

2. In the left navigation panel, under *Compute*, select **vApps** to view a list of vApps within the VDC.

    ![vApps tab in VMware Cloud Director](images/vmw-vcd10.1-tab-vapps.png)

3. In the *vApps* page, click **New**, then select **New vApp**.

    ![New vApp menu option](images/vmw-vcd10.1-btn-new-vapp.png)

4. In the *New vApp* dialog box, enter a **Name** and **Description** for your vApp.

    The name should be something that will easily identify it if you're building a large environment with multiple vApps.

5. Select the **Power on** check box if you want the vApp to start up as soon as you finish creating it.

    ![New vApp dialog box](images/vmw-vcd10.1-build-vapp.png)

6. Click **Add Virtual Machine** to populate the vApp with VMs.

   > [!NOTE]
   > You can click **Create** at this point to create an empty vApp and add VMs to it later.

7. In the *New VM* dialog box, select:

    - **New** to create a VM from scratch, without using a template (see [*How to create a virtual machine from scratch*](vmw-how-create-vm-from-scratch.md), starting from step 5).

    - **From Template** to create a VM from an existing template (see [*How to create a VM from a template*](vmw-how-create-vm-from-template.md), starting from step 5).

   ![New VM dialog box](images/vmw-vcd10.1-vapp-new-vm.png)

8. When you've finished adding VMs to your vApp, in the *New vApp* dialog box, click **Create**.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
