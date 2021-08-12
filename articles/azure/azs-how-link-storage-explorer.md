---
title: How to link Azure Storage Explorer to Azure Stack Hub
description: Provides help for linking Azure Storage Explorer to Azure Stack Hub
services: azure-stack
author: David Woffendin
reviewer: William Turner
lastreviewed: 11/08/2021

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

> [!IMPORTANT]
> Whilst the latest version of Storage Explorer works fine with Azure Stack Hub storage objects, it currently does not allow you to copy/paste objects from a container in Azure Stack Hub to a container in public Azure. For further information, see the associated GitHub issue [here](https://github.com/microsoft/AzureStorageExplorer/issues/4464)
>
> If you need to do this, then you must install v1.13.1 of Storage Explorer, found [here](https://github.com/microsoft/AzureStorageExplorer/releases/tag/v1.13.1)
>
> Please note that the setup process for this version will differ slightly to the steps below.

## Microsoft documentation

- [Connect Storage Explorer to an Azure Stack Hub subscription with Azure AD](https://docs.microsoft.com/en-us/azure-stack/user/azure-stack-storage-connect-se?view=azs-2002#connect-to-an-azure-stack-hub-subscription-with-azure-ad)

## Installation and setup

1. Download and install Storage Explorer [here](https://azure.microsoft.com/en-us/features/storage-explorer/).

    ![Storage Explorer installation guide - Download](images/azs-browser-storage-tool-download.png)

2. From the **Edit** menu, select **Target Azure Stack Hub APIs** then restart Storage Explorer.

    ![Storage Explorer installation guide - Target ASH APIs](images/azs-installation-storage-tool-target-apis.png)

3. Once re-launched navigate to accounts.

    ![Storage Explorer installation guide - Accounts](images/azs-installation-storage-tool-accounts.png)

4. Select **Add an account...**

    ![Storage Explorer installation guide - Add account](images/azs-installation-storage-tool-add-account.png)

5. Select **Subscription**.

    ![Storage Explorer installation guide - Select resource](images/azs-installation-storage-tool-select-resource.png)

6. Select **Add an Azure Account** \> **Azure**, then click **Next**.

    ![Storage Explorer installation guide - Select environment](images/azs-installation-storage-tool-select-environment.png)

7. Sign in with your Azure Stack Hub credentials when prompted.

    ![Storage Explorer installation guide - Sign in](images/azs-installation-storage-tool-signin.png)

8. Click **Apply**.

    ![Storage Explorer installation guide - Apply](images/azs-installation-storage-tool-apply.png)

Now that you've linked Storage Explorer to Azure Stack Hub, you can access all of your storage accounts.

## Feedback

 If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
