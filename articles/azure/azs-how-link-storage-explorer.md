---
title: How to link Azure Storage Explorer to Azure Stack | UKCloud Ltd
description: Provides help for linking Azure Storage Explorer to Azure Stack
services: azure-stack
author: David Woffendin
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to link Azure Storage Explorer to Azure Stack
toc_fullpath: Users/How To/azs-how-link-storage-explorer.md
toc_mdlink: azs-how-link-storage-explorer.md
---

# How to link Azure Storage Explorer to Azure Stack

## Overview

In this article, you will learn how to link Azure Stack subscriptions to the Azure Storage Explorer. Azure Storage Explorer is a standalone application that allows you to easily work with Azure Stack storage data on Windows, macOS and Linux. With this application, you can easily download and upload objects to Azure Stack, which makes tasks such as downloading and uploading data disks to VMs very easy.

If you need to install the Storage Explorer, please find the link [here](https://azure.microsoft.com/en-us/features/storage-explorer/) and install it.

## Installation and setup

1. Download and install storage explorer.

    ![Storage tool installation guide 1](images/azs-browser-storage-tool-download.png)

2. Once launched navigate to accounts.

     ![Storage tool installation guide 2](images/azs-installation-storage-tool-1.png)

3. Select **Add an account...**

    ![Storage tool installation guide 3](images/azs-installation-storage-tool-2.png)

4. Select **Add an Azure Account** > **Use Custom Environment**.

    ![Storage tool installation guide 4](images/azs-installation-storage-tool-3.png)

5. Name the environment **Azure Stack** and for the ARM endpoint use **`https://management.frn00006.azure.ukcloud.com`**.

    ![Storage tool installation guide 5](images/azs-installation-storage-tool-4.png)

6. Sign in with your Azure Stack credentials when prompted.

    ![Storage tool installation guide 6](images/azs-installation-storage-tool-5.png)

7. Click **Apply**.

    ![Storage tool installation guide 7](images/azs-installation-storage-tool-6.png)

8. From the **Edit** menu, select **Target Azure Stack APIs** then restart Storage Explorer.

    ![Storage tool installation guide 8](images/azs-installation-storage-tool-7.png)

Now that you've linked Storage Explorer to Azure Stack, you can access all of your VMs storage accounts.

## Feedback

 If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [*UKCloud Ideas*](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.