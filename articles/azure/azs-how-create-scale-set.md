---
title: How to create a VM scale set
description: Provides help for creating a virtual machine scale set on UKCloud for Microsoft Azure
services: azure-stack
author: Shaion O'Niel
reviewer: William Turner
lastreviewed: 14/04/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a VM scale set
toc_fullpath: Users/How To/azs-how-create-scale-set.md
toc_mdlink: azs-how-create-scale-set.md
---

# How to create a virtual machine scale set using the UKCloud Azure Stack Hub portal

## Overview

Virtual machine scale sets (VMSS) in Azure Stack Hub are a compute resource that you can use to deploy and manage identical VMs. All virtual machine instances in a scale set are configured in the same way and do not require any provisioning beforehand.

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Creating a new virtual machine scale set

1. Log in to the Azure Stack Hub portal.

    For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

    ![New option in favourites panel](images/azsp_newmenu.png)

3. In the *Everything* blade, search for **'Virtual machine scale set'** and then select it from the search results.

    ![Searching for scale set](images/azs-browser-button-scale-set-menu.png)

4. In the *Virtual machine scale set* blade select **Create**.

    ![Create scale set button](images/azs-browser-button-create-scale-set.png)

5. On the *BASICS* page, enter the following information:

    - **Virtual machine scale set name** - The name of the virtual machine scale set.

    - **Operating system disk image** – The operating system disk image for the virtual machines in the scale set.

        > [!WARNING]
        > CentOS 7.2 is currently unsupported on Azure Stack Hub. For more information, see [here](https://docs.microsoft.com/en-gb/azure-stack/operator/azure-stack-release-notes-known-issues-1904#virtual-machine-scale-set).
        > ![CentOS 7.2 is currently unsupported](images/azs-browser-scale-set-unsupported-operating-systems.png)

    - **Subscription** - This is your UKCloud for Microsoft Azure subscription.

    - **Resource group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

    - **Location** - This will be frn00006, which is the Azure Stack Hub region.

    - **Username** – Admin username for the virtual machines.

    - **Password** – Admin password for the virtual machines.

    - **Instance count** – The number of virtual machines in the scale set (0 - 100).

    - **Instance size** – The size of each virtual machine in the scale set.

    - **Use managed disks** – Managed disks is a feature that simplifies disk management for Azure IaaS virtual machines by handling storage account management for you. For more information, see [Managed Disks overview](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/managed-disks-overview).

    - **Public IP address name** – The name of the public IP address for the load balancer in front of the scale sets.

    - **Public IP allocation method** – Select between *Dynamic* or *Static* IP addresses.

    - **Domain name label** – Domain name label for the load balancer in front of the scale set.

    - **Virtual network** – This is the virtual network you would like the scale set to be connected to.

    - **Public IP address per instance** – Add a public IP address to each instance in the scale set.

    ![BASICS page](images/azs-browser-create-scale-set.png)

6. When you are done, click **Create**.

7. You can monitor the progress of your scale set's deployment by clicking the **Notifications** icon.

    ![Deployment in progress notification](images/azsp_createvm_progress.png)

8. When the deployment is finished, the notification will change to *Deployment succeeded*.

    ![Deployment complete](images/azsp_createvm_deployment_success.png)

9. After the scale set has deployed, you can view it by clicking **All Services** in the favourites panel, then select **Virtual machine scale sets** from the *compute* section.

    ![All resources menu](images/azs-browser-select-all-services.png)

10. Select your scale set from the list.

    ![All resources list](images/azs-browser-select-scale-set.png)

11. In the blade for your scale set, you can view and monitor the scale set, change its settings and perform diagnostics and troubleshooting.

    ![Scale set overview](images/azs-browser-scale-set-overview.png)

## Modifying the instance count of your scale set

> [!NOTE]
> Auto-scaling is currently unsupported on Azure Stack Hub.

1. In the blade for the scale set, select **Scaling** under *Settings*.

    ![Scale set scaling button](images/azs-browser-button-scaling.png)

2. Increase or decrease the number of instances using the slide bar.

    ![Scaling slide bar](images/azs-browser-instance-count-slidebar.png)

3. Once you have selected the desired number of instances click **Save** to commit the change.

    ![Save number of instances for the scale set](images/azs-browser-button-save-instance-count.png)

4. A prompt will notify you once the configuration has been updated.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
