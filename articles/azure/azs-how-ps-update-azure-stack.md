---
title: How to perform an Azure Stack Hub Update
description: Azure Stack Hub update procedure guide for support
services: azure-stack
author: Chris Black
reviewer: William Turner
lastreviewed: 09/08/2021

toc_rootlink: Operators
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Perform an Azure Stack Hub update
toc_fullpath: Operators/How To/azs-how-ps-update-azure-stack.md
toc_mdlink: azs-how-ps-update-azure-stack.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to perform an Azure Stack Hub update

This guide is intended to provide a reference on how can we perform Azure Stack Hub Updates.

Loosely based on [Azure Stack Hub Apply Updates](https://docs.microsoft.com/en-us/azure/azure-stack/azure-stack-apply-updates).

## Prerequisites

Prerequisites from a Windows-based external client.

* Before you begin, ensure your PowerShell environment is set up as detailed in [Configure the Azure Stack Hub operator's PowerShell environment.](azs-how-configure-powershell-operators.md)

> [!IMPORTANT]
> Always consult Microsoft documentation for your specific Update Version
>
> Example -> [2102 Update](https://docs.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2102)

## High Level Overview of the process

> [!IMPORTANT]
>
> We strongly recommend that you notify users of any maintenance operations, and that you schedule normal maintenance windows during non-business hours as much as possible. Maintenance operations may affect both user workloads and portal operations.

1. Go to the **Update** blade on the Administration Portal.

    > [!IMPORTANT]
    > From 1807 onwards you no longer need to download Update and Hotfix packages manually.
    >
    > They are automatically pulled by Azure Stack Hub itself and will show as **update available** in the portal.

2. Start the Update process.

3. If the update process fails for any reason, raise a support case with Microsoft immediately.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
