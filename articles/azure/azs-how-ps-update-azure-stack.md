---
title: Azure Stack Update Procedure | UKCloud Ltd
description: Azure Stack Update Procedure Guide for Support
services: azure-stack
author: Chris Black

toc_rootlink: Operators
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Update Azure Stack Procedure
toc_fullpath: Operators/Update Azure Stack/azs-how-ps-update-azure-stack.md
toc_mdlink: azs-how-ps-update-azure-stack.md
---
# Azure Stack Update Procedure

This guide is intended to provide a reference on how can we perform Azure Stack Updates.

Loosely based on [Azure Stack Apply Updates](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-apply-updates).

## Prerequisites

Prerequisites from a Windows-based external client.

* PowerShell 5.1

* Azure Stack PowerShell Modules -> [Azure Stack Modules Install Guide](https://github.com/UKCloud/AzureStack/blob/master/docs/Tenants/PowerShell/ConfigurePowerShellEnvironment.md)

> [!IMPORTANT]
> Always consult Microsoft documentation for your specific Update Version
>
> Example -> [1802 Update](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-update-1802)

> [!CAUTION]
> In the 1802 example you can see that you need to install a Hotfix before you apply the upgrade. That is one of the many reasons why you should always check the official documentation.

## High Level Overview of the process

> [!IMPORTANT]
>
> We strongly recommend that you notify users of any maintenance operations, and that you schedule normal maintenance windows during non-business hours as much as possible. Maintenance operations may affect both user workloads and portal operations.

1. Raise a pre-emptive case with Microsoft prior to starting the Update.

2. Go to the **Update** blade on the Administration Portal

3. Start Update process.

> [!NOTE]
> Automatic Update Guide to follow
>
> Code for Automatic Update can be found here -> [more](https://github.com/UKCloud/AZS_dev_black/tree/master/docs/code/powershell/Update)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.

(c) UKCloud Ltd, 2018. All Rights Reserved.
