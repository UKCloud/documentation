---
title: How to create a virtual machine from the Azure Marketplace| UKCloud Ltd
description: Create a virtual machine in UKCloud for Microsoft Azure
services: azure-stack
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine
toc_fullpath: Users/How To/azs-how-create-vm.md
toc_mdlink: azs-how-create-vm.md
---

# How to create a virtual machine from the Azure Marketplace

## Overview

With UKCloud for Microsoft Azure, you can leverage the power of Microsoft Azure to create virtual machines (VMs) for your on-premises applications. As UKCloud for Microsoft Azure is built on UKCloud’s assured, UK-sovereign multi-cloud platform, those applications can work alongside other cloud platforms, such as Oracle, VMware and OpenStack, and benefit from native connectivity to non-cloud workloads in Crown Hosting and government community networks, including PSN, HSCN and RLI.

### Intended audience

To complete the steps in this guide, you must have appropriate access to a subscription in the UKCloud Azure Stack portal.

## Creating a virtual machine

VMs provide the basic compute building blocks in Azure Stack. You can create VMs using the Azure Stack Marketplace, which provides access to pre-created images to quickly deploy the VMs you need to build your applications. Microsoft makes Azure Marketplace images available for Azure Stack once they have passed an accreditation process. If you cannot find the image you require in the Azure Stack Marketplace please raise a support call via the UKCloud portal and if possible we will make your requested image available in Azure Stack Marketplace.

**To create a VM from the Azure Marketplace:**

1. Log in to the UKCloud Azure Stack portal.

   For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

    ![New option in favourites panel](images/azsp_newmenu.png)

3. In the *New* blade, select **Compute**.

    ![Compute option in New blade](images/azsp_newblade.png)

4. In the *Compute* blade, select the template that you want to use for your VM.

    ![List of VM images in Compute blade](images/azsp_computeblade.png)

5. In the *Create virtual machine* blade, in the *Basics* step, enter general information about the VM, including a name, credentials and resource group, then click **OK**.

    ![Create virtual machine > Basics](images/azsp_createvm_basics.png)

6. In the *Size* step, select the appropriate size for your VM, depending on its purpose, then click **Select**.

    For information about the different available VM sizes, see <https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes>

    ![Create virtual machine > Size](images/azsp_createvm_size.png)

7. In the *Settings* step, change any of the optional settings as required for your VM, then click **OK**.

    ![Create virtual machine > Settings](images/azsp_createvm_settings.png)

8. In the *Summary* step, review the selections you've made and then click **OK** to start the deployment.

9. You can monitor the progress of your VM's deployment by clicking the **Notifications** icon.

    ![Notification showing VM deployment in progress](images/azsp_createvm_progress.png)

10. Click the deployment notification for the deployment to view details of the deployment of the VM and its resources.

    ![Status of VM deployment](images/azsp_createvm_deployment.png)

11. When the deployment is finished, the notification wil change to **Deployment succeeded**.

    ![Notification showing successful VM deployment](images/azsp_createvm_deployment_success.png)

12. After your VM has deployed, you can view it by clicking **Virtual machines** in the favourites panel.

    ![Virtual machines option in favourites panel](images/azsp_vmsmenu.png)

13. Select your VM from the list.

    ![List of deployed VMs](images/azsp_vmslist.png)

14. In the blade for your VM, you can view and monitor the VM, change its settings and perform diagnostics and troubleshooting.

    ![Virtual machine details](images/azsp_vmdetails.png)

## Next steps

For more information about UKCloud for Microsoft Azure, see:

- [*Understanding UKCloud for Microsoft Azure*](azs-ref-overview.md)
- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)
- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

## Feedback

If you have any comments on this article, or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
