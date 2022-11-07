---
title: How to create an Azure Kubernetes Service cluster using the UKCloud Azure Stack Hub portal
description: Create an Azure Kubernetes Service cluster using Azure Stack Hub
services: azure-stack
author: Bailey Lawson
reviewer: William Turner
lastreviewed: 09/08/2021

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create an Azure Kubernetes Service cluster
toc_fullpath: Users/How To/azs-how-create-aks.md
toc_mdlink: azs-how-create-aks.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to create an Azure Kubernetes Service cluster using the UKCloud Azure Stack Hub portal

> [!WARNING]
> Using the Kubernetes Azure Stack Hub Marketplace item to deploy clusters is now deprecated and should only be used as a proof-of-concept. For supported Kubernetes clusters on Azure Stack Hub, use [the AKS engine](https://docs.microsoft.com/en-us/azure-stack/user/azure-stack-kubernetes-aks-engine-overview).

## Overview

Azure Kubernetes Service (AKS) makes it simple to deploy a managed Kubernetes cluster in Azure Stack Hub. AKS reduces the complexity and operational overhead of managing Kubernetes by offloading much of that responsibility to Azure Stack Hub. As a hosted Kubernetes service, Azure Stack Hub handles critical tasks like health monitoring and maintenance for you.

### Intended audience

To complete the steps in this guide, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Creating an Azure Kubernetes Service cluster

1. Log in to the Azure Stack Hub portal.

   For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

    ![New option in favourites panel](images/azsp_newmenu.png)

3. In the *New* blade, select **Compute**.

    ![Compute option in New blade](images/azsp_newblade.png)

4. In the *Compute* blade, select **Kubernetes Cluster**.

    ![List of templates in Compute blade](images/azsp_computeblade.png)

5. In the *Create Kubernetes Cluster* blade, in the *Basics* step, enter the following information and click **OK**:

   **Subscription** - This is your UKCloud for Microsoft Azure subscription.

   **Resource group** - Select an existing resource group, or create a new one by typing a name for your new resource group.

   **Location** - This will be `frn00006`, which is the location of the Azure Stack Hub.

   ![Create Kubernetes Cluster > Basics](images/azs-browser-create-aks-basics.png)

6. In the *Kubernetes Cluster Settings* step, enter the following information and click **OK**:

   **Linux VM admin username** - The username for the Linux virtual machines that are part of the Kubernetes cluster.

   **SSH public key** - SSH public key used for authentication to all Linux machines created as part of the Kubernetes cluster.

   **Master Profile DNS prefix** - This must be a region-unique name, for example k8s-12345. Try to choose the same name as the resource group as best practice.

   **Kubernetes master pool profile count** - The number of master nodes for the Kubernetes cluster. This value should be an odd number.

   **The virtual machine size of the Kubernetes master nodes** - The VM size of each master node. For information about the different available VM sizes, see [here](https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes).

   **Kubernetes node pool profile count** - The number of agents for the Kubernetes cluster.

   **The virtual machine size of the Kubernetes linux agent nodes** - The VM size of each agent node.

   **Azure Stack Hub identity system** - Azure Stack Hub identity provider - defaults to AzureAD

   **Service principal clientId** - The Service Principal application ID (used by the Kubernetes Azure cloud provider). More help [here](https://github.com/Azure/acs-engine/blob/master/docs/serviceprincipal.md).

   **Service principal client secret** - The Service Principal Client secret.

   **Kubernetes version** - This is the Kubernetes version that is used for the cluster.

   ![Create Azure Kubernetes Service cluster > Kubernetes Cluster Settings](images/azs-browser-create-aks-settings.png)

7. In the *Summary* step, check that the information is correct, then click **OK**.

8. Click **Create**.

9. You can monitor the progress of your cluster's deployment by clicking the **Notifications** icon.

    ![Notification showing cluster deployment in progress](images/azsp_createvm_progress.png)

10. After your cluster has been deployed, you can view it by clicking **Resource Groups** in the favourites panel, then selecting the resource group that contains the cluster.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
