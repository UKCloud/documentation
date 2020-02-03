---
title: How to link Azure Storage Explorer to Azure Stack Hub
description: Provides help for linking Azure Storage Explorer to Azure Stack Hub
services: azure-stack
author: David Woffendin
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Link Azure Storage Explorer to Azure Stack Hub
toc_fullpath: Users/How To/azs-how-link-storage-explorer.md
toc_mdlink: azs-how-link-storage-explorer.md
---

# How to link Azure Storage Explorer to Azure Stack Hub

## Overview

In this article, you will learn how to link Azure Stack Hub subscriptions to the Azure Storage Explorer. Azure Storage Explorer is a standalone application that allows you to easily work with Azure Stack Hub storage data on Windows, macOS and Linux. With this application, you can easily download and upload objects to Azure Stack Hub, which makes tasks such as downloading and uploading data disks to VMs very easy.

If you need to install Azure Storage Explorer, please click [here](https://azure.microsoft.com/en-us/features/storage-explorer/) and install it.

## Installation and setup

1. Download and install Storage Explorer.

    ![Storage Explorer installation guide 1](images/azs-browser-storage-tool-download.png)

2. From the **Edit** menu, select **Target Azure Stack Hub APIs** then restart Storage Explorer.

    ![Storage Explorer installation guide 8](images/azs-installation-storage-tool-7.png)

3. Once re-launched navigate to accounts.

    ![Storage Explorer installation guide 2](images/azs-installation-storage-tool-1.png)

4. Select **Add an account...**

    ![Storage Explorer installation guide 3](images/azs-installation-storage-tool-2.png)

5. Select **Add an Azure Account** \> **Use Custom Environment**.

    ![Storage Explorer installation guide 4](images/azs-installation-storage-tool-3.png)

6. Name the environment **Azure Stack Hub** and use `https://management.frn00006.azure.ukcloud.com` for the **ARM endpoint**.

    ![Storage Explorer installation guide 5](images/azs-installation-storage-tool-4.png)

7. Sign in with your Azure Stack Hub credentials when prompted.

    ![Storage Explorer installation guide 6](images/azs-installation-storage-tool-5.png)

8. Click **Apply**.

    ![Storage Explorer installation guide 7](images/azs-installation-storage-tool-6.png)

Now that you've linked Storage Explorer to Azure Stack Hub, you can access all of your storage accounts.

## Feedback

 If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
