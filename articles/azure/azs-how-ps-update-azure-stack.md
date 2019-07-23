---
title: How to perform an Azure Stack Update | UKCloud Ltd
description: Azure Stack update procedure guide for support
services: azure-stack
author: Chris Black
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

toc_rootlink: Operators
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Perform an Azure Stack update
toc_fullpath: Operators/How To/azs-how-ps-update-azure-stack.md
toc_mdlink: azs-how-ps-update-azure-stack.md
---
# How to perform an Azure Stack update

This guide is intended to provide a reference on how can we perform Azure Stack Updates.

Loosely based on [Azure Stack Apply Updates](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-apply-updates).

## Prerequisites

Prerequisites from a Windows-based external client.

* PowerShell 5.1

* Azure Stack PowerShell Modules -> [Configure PowerShell Environment](azs-how-configure-powershell-operators.md)

> [!IMPORTANT]
> Always consult Microsoft documentation for your specific Update Version
>
> Example -> [1902 Update](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-update-1902)

## High Level Overview of the process

> [!IMPORTANT]
>
> We strongly recommend that you notify users of any maintenance operations, and that you schedule normal maintenance windows during non-business hours as much as possible. Maintenance operations may affect both user workloads and portal operations.

1. Raise a pre-emptive case with Microsoft prior to starting the Update.

2. Go to the **Update** blade on the Administration Portal.

    > [!IMPORTANT]
    > From 1807 onwards you no longer need to download Update and Hotfix packages manually.
    >
    > They are automatically pulled by Azure Stack itself and will show as **update available** in the portal.

3. Start the Update process.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
