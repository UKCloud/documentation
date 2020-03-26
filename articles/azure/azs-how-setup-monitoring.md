---
title: How to configure Azure Monitor for VMs on Azure Stack Hub | UKCloud Ltd
description: Describes how to configure Azure Monitor for VMs on Azure Stack Hub
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure Azure Monitor for VMs on Azure Stack Hub
toc_fullpath: Users/How To/azs-how-setup-monitoring.md
toc_mdlink: azs-how-setup-monitoring.md
---

# How to configure Azure Monitor for VMs on Azure Stack Hub | UKCloud Ltd

## Overview

Azure Monitor is the platform service that provides a single source for monitoring Azure resources. With Azure Monitor, you can visualise, query, route, archive, and otherwise take action on the metrics and logs coming from resources in Azure.

This article will enable the following solutions for Azure Stack Hub VMs:

-  [Azure Monitor for VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-overview)

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure and Azure Stack Hub portal.

## Enabling Azure Monitor for VMs

> [!WARNING]
> Before proceeding, check [here](https://docs.microsoft.com/en-gb/azure/azure-monitor/insights/vminsights-enable-overview#supported-operating-systems) that your VMs' OS version is supported.

1. Log in to the [public Azure portal](https://portal.azure.com).

2. Create a Log Analytics workspace in your Azure subscription:

    - Click **Create a resource**.

    - In the search bar, search for `log analytics`.

        ![Log Analytics search](images/azs-browser-search-log-analytics.png)

    - Click **Log Analytics**.

    - Click **Create**.

    - Provide the following:

        - A name for the **Log Analytics Workspace**, for example: `DefaultLAWorkspace`

        - A **Subscription** to link the workspace to

        - A **Resource group** to host the workspace in

        - A **Location** to host the workspace in

        > [!NOTE]
        > The currently supported locations are: *West Central US*, *East US*, *Canada Central*, *UK South*, *West Europe* and *Southeast Asia*.

        - A **Pricing tier** to use

        The following example shows the blade with all items filled out:

        ![Log Analytics workspace creation](images/azs-browser-example-log-analytics-workspace.png)

    - Click **OK** once finished. The Log Analytics workspace will now begin deploying. A notification will appear in the top right of the portal.

3. Once deployment is complete, navigate to the resource group you placed the Log Analytics workspace in.

    - Click the newly created workspace. On the new blade, under *Settings*, select **Advanced settings**, then select **Windows Servers** or **Linux Servers** depending on the VM type you want to add analytics too.
    Note down the **Workspace ID** and **Primary Key** values.

       ![Log Analytics workspace advanced settings](images/azs-browser-log-analytics-workspace-advanced-settings.png)

    - Within *Advanced settings*, select the *Data* blade, and click **Windows Performance Counters** or **Linux Performance Counters**.

    - Ensure all counters are selected and click **Add the selected performance counters**.

    - Click **Save**.

        ![Performance counters](images/azs-browser-example-performance-counters.png)

        > [!NOTE]
        > For Linux performance counters, ensure **Apply below configuration to my machines** is selected.

4. Log in to the [Azure Stack Hub portal](https://portal.frn00006.azure.ukcloud.com).

5. Navigate to the VM that you want to enable Azure Monitor on and under *Settings*, select the *Extensions* blade.

    > [!WARNING]
    > For any monitoring to work correctly, the VM **must** have HTTPS (Port 443) enabled in the **Network Security Group** rules.

6. Click **Add** at the top, select the extension **Azure Monitor, Update and Configuration Management** and then click **Create**.

    ![VM enable update management](images/azs-browser-log-analytics-enable-update-management.png)

    - Provide the extension with the **Workspace ID** and **Primary Key** values (noted down previously).

    - Repeat step 6 for the **Azure Monitor Dependency Agent**.

7. On public Azure, click **Monitor**. In the new blade under *Insights*, click **Virtual Machines (preview)**. You will see three usage analytics tabs (**Health**, **Performance** and **Map**) for the VMs you have enabled **Azure Monitor for VMs** on.

   ![Monitor stats example](images/azs-browser-example-monitor-stats.png)

    > [!NOTE]
    > It can take between 30 minutes and 6 hours for the dashboard to display updated data from Azure Monitor enabled VMs.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
