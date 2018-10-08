---
title: How to create an Azure Kubernetes Service cluster using the Azure Stack portal | UKCloud Ltd
description: Create an Azure Kubernetes Service cluster using Azure Stack
services: azure-stack
author: Bailey Lawson
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create an Azure Kubernetes Service cluster
toc_fullpath: Users/How To/azs-how-create-aks.md
toc_mdlink: azs-how-create-aks.md
---

# How to create an Azure Kubernetes Service cluster using the Azure Stack portal

## Overview

Azure Kubernetes Service (AKS) makes it simple to deploy a managed Kubernetes cluster in Azure. AKS reduces the complexity and operational overhead of managing Kubernetes by offloading much of that responsibility to Azure. As a hosted Kubernetes service, Azure handles critical tasks like health monitoring and maintenance for you. The Kubernetes masters are managed by Azure. You only manage and maintain the agent nodes. As a managed Kubernetes service, AKS is free - you only pay for the agent nodes within your clusters, not for the masters.

### Intended audience

To complete the steps in this guide, you must have appropriate access to a subscription in the UKCloud Azure Stack portal.

## Creating an Azure Kubernetes Service cluster

1. Log in to the UKCloud Azure Stack portal.

   For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

    ![New option in favourites panel](images/azsp_newmenu.png)

3. In the *New* blade, select **Compute**.

    ![Compute option in New blade](images/azsp_newblade.png)

4. In the *Compute* blade, select **Kubernetes Cluster**.

    ![List of templates in Compute blade](images/azsp_computeblade.png)

5. In the *Create Kubernetes Service cluster* blade, in the *Basics* step, enter the following information and click **OK**:

   **Subscription** - This is your UKCloud for Microsoft Azure subscription.

   **Resource group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

   **Location** - This will be "frn00006", which is the location of the Azure Stack.

   ![Create Kubernetes Cluster > Basics](images/azs-browser-create-aks-basics.png)

6. In the *Kubernetes Cluster Settings* step, enter the following information and click **OK**:

   **Linux VM Admin Username** - The username for the Linux Virtual Machines that are part of the Kubernetes Cluster.

   **SSH public key** - SSH public key used for auth to all Linux machines created as part of the the Kubernetes cluster.

   **Master Profile DNS Prefix** - This must be a region-unique name e.g. k8s-12345. Try to choose the same name as the resource group as best practice.

   **Kubernetes Master Pool Profile Count** - The number of master nodes for the Kubernetes cluster. This value should be an odd number.

   **The VMSize of Kubernetes node VMs** - The VM size of each master node. For information about the different available VM sizes, see <https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes>

   **Kubernetes Node Pool Profile Count** - The number of agents for the Kubernetes cluster.

   **The VMSize of Kubernetes node VMs** - The VM size of each agent node.

   **The Storage Profile** - The storage profile for the Kubernetes cluster.

   **Service Principal ClientID** - The Service Principal application ID (used by the Kubernetes Azure cloud provider). More help [here](https://github.com/Azure/acs-engine/blob/master/docs/serviceprincipal.md).

   ![Create Azure Kubernetes Service cluster > Kubernetes Cluster Settings](images/azs-browser-create-aks-settings.png)

7. In the *Summary* step, check that the information is correct, then click **OK**.

8. Click **Create**.

9. You can monitor the progress of your cluster's deployment by clicking the **Notifications** icon.

    ![Notification showing cluster deployment in progress](images/azsp_createvm_progress.png)

10. After your cluster has been deployed, you can view it by clicking **Resource Groups** in the favourites panel, then selecting the resource group which contains the cluster.

## Feedback

If you have any comments on this article, or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.