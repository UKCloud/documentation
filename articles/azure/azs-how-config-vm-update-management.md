---
title: How to configure VM updates and management on Azure Stack | UKCloud Ltd
description: Describes how use Azure Monitor to configure VM updates and management on Azure Stack
services:
author: Daniel Brennand
reviewer: 
lastreviewed: 

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure VM updates and management
toc_fullpath: Users/How To/azs-how-config-vm-update-management.md
toc_mdlink: azs-how-config-vm-update-management.md
---

# How to configure VM updates and management on Azure Stack | UKCloud Ltd

## Overview

Azure Monitor is the platform service that provides a single source for monitoring Azure resources. With Azure Monitor, you can visualize, query, route, archive, and otherwise take action on the metrics and logs coming from resources in Azure.

This article will enable the following solutions for Azure Stack VMs:

- [Azure Monitor for VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-overview)

- [Inventory](https://docs.microsoft.com/en-us/azure/automation/automation-vm-inventory)

- [Change Tracking](https://docs.microsoft.com/en-us/azure/automation/change-tracking)

- [Update Management](https://docs.microsoft.com/en-us/azure/automation/automation-update-management)

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure and Azure Stack portal.

## Enabling VM Update & Management

> [!WARNING]
> Before proceeding, check [here](https://docs.microsoft.com/en-gb/azure/azure-monitor/insights/vminsights-enable-overview#supported-operating-systems) that your VMs' OS version is supported.

1. Login to the Azure portal:

    <https://portal.azure.com>

2. Create a *Log Analytics Workspace* in your Azure subscription:

    - Search for `log analytics`.

        ![All Services](images/azs-browser-search-log-analytics.png)

    - Click **Log Analytics Workspaces**.

    - Provide the following:

        - A **Name** for the Log Analytics workspace. Example: `DefaultLAWorkspace`

        - A **Subscription** to link the workspace to

        - A **Resource Group** to link the workspace to

        - A **Location** available to host the workspace on

        > [!NOTE]
        > The currently supported locations are: *West Central US*, *East US*, *Canada Central*, *UK South*, *West Europe* and *Southeast Asia*.

        - *Pricing Tier* to use

        The following example shows the the blade with all the items filled out:

        ![Log Analytics workspace creation](images/azs-browser-example-log-analytics-workspace.png)

    - Click **OK** once finished. The **Log Analytics workspace** will now begin deploying. A notification will appear on the top right of the portal.

    - Once deployment is complete, navigate to the resource group you placed the **Log Analytics workspace** in.

    - Select the newly create workspace. On the new blade, under settings, select *Advanced settings*, then select *Windows* or *Linux* servers depending on the *VM Type* you want to add analytics too.
    Note down the **Workspace ID** and **Primary Key** values.

       ![Log Analytics workspace advanced settings](images/azs-browser-log-analytics-workspace-advanced-settings.png)

    - Within *Advanced settings*, Select the *Data* blade, and click **VM Type Performance Counters.**

    - Ensure all counters are selected and click **Add the selected performance counters**.

    - Click **Save**.

        ![Performance Counters](images/azs-browser-example-performance-counters.PNG)

        > [!NOTE]
        > For Linux Performance Counters, ensure **Apply below configuration to my machines** is selected.

3. Create and configure an *Automation Account*:

    - Click *Create a resource*.

    - Search for `automation` and click **Create**.

        ![automation account](images/azs-browser-search-automation-account.png)

    - Choose a **Name**, **Subscription**, **Resource Group**, **Location** and ensure *Create Azure Run As Account* is set to **Yes**.

    - Click **Create**.

        ![Add automation account](images/azs-browser-add-automation-account.png)

        > [!NOTE]
        > The error "Azure Classic Run As account creation error" may occur. This **DOES NOT** effect the process.

4. Once deployed, navigate to the *Automation Account*. In the new blade, Under *Configuration Management*, select the solution to enable (Inventory & Change Tracking or Update management).

    - Select the *Log Analytics workspace* to link the automation account too.

    - Click **Enable**.

    - Wait for the deployment to complete.

    - Repeat step 4 for both Inventory & Change Tracking and Update management.

        > [!TIP]
        > Leave the public azure portal open; you'll need to use it again later.

5. Login to the Azure Stack portal:

    <https://portal.frn00006.azure.ukcloud.com>

6. Navigate to the VM that you want to enable **Update & Management** on and under settings, select the *extensions* blade.

    > [!WARNING]
    > For any monitoring to work correctly, the VM **must** have HTTPS (Port 443) enabled in the **Network Security Group** rules.

7. Click **Add** at the top and select the extension **Azure Monitor, Update and Configuration Management**; then click **Create**.

    ![VM enable update management](images/azs-browser-log-analytics-enable-update-management.png)

    - Provide the extension with the **Workspace ID** and **Primary Key** values (noted down previously).

    - Repeat step 7 for the **Azure Monitor Dependency Agent**.

8. Once the deployment is finished, head back to the public Azure portal, navigate to the *Log Analytics workspace* -> *Advanced settings* -> *`VM Type` Servers*.

    - You will see `x` number of `VM Type` COMPUTERS CONNECTED, depending on how many VMs you linked to the workspace.

        ![Log Analytics workspace computers connected](images/azs-browser-log-analytics-workspace-computers-connected.png)

    - Click *x VM Type COMPUTERS CONNECTED*. This will bring up logs for the *Log Analytics workspace*.

    - Change the time range to **Last 30 minutes**.

9. Execute the following log query passing in your `VM TYPE`:

    - `Heartbeat | where OSType == "VMTYPE" | summarize arg_max(TimeGenerated, *) by SourceComputerId | top 500000 by Computer asc | render table`

    - Example for Linux VM: 

        `Heartbeat | where OSType == "Linux" | summarize arg_max(TimeGenerated, *) by SourceComputerId | top 500000 by Computer asc | render table`

    - If your VM shows in the results, you have successfully linked your VM from Azure Stack to your *Log Analytics workspace*.

        - [See here for more information; if required.](https://docs.microsoft.com/en-us/azure/automation/automation-update-management#confirm-that-non-azure-machines-are-onboarded)

10. Navigate to the *Automation Account*. In the *new* blade, Under *Configuration Management*, select **Update Management**.

    - You will see the following prompt:

        ![Enable Log Example](images/azs-browser-example-log-enable.png)

    - Select **Click to manage machines**.

    - Select **Enable on all available and future machines**.

        ![Enable Update & Management](images/azs-browser-example-enable-update-management.png)

    - Click **Enable**.

    - Repeat step 10 for **Inventory & Change Tracking**.

    - Everything is now enabled. The API is called every 15 minutes to query for the last update time to determine whether the status has changed. If the status has changed, a compliance scan is initiated.

        > [!NOTE]
        > It can take between 30 minutes and 6 hours for the dashboard to display updated data from managed VMs.

11. Within the *Automation Account*, the blades **Inventory**, **Change Tracking** and **Update Management** will provide useful analytics.

    ![azs-browser-example-inventory](images/azs-browser-example-inventory.png)

    ![azs-browser-example-change-tracking](images/azs-browser-example-change-tracking.png)

    ![azs-browser-example-update-management-compliant-ok](images/azs-browser-example-update-management-compliant-ok.png)

12. On public Azure, click **Monitor**. In the new blade under *Insights*, click **Virtual Machines (preview)**. You will see three usage analytics tabs (**Health**, **Performance** and **Map**) for the VMs you have enabled **VM updates and management** on.

    ![azs-browser-example-monitor-stats](images/azs-browser-example-monitor-stats.png)

    > [!NOTE]
    > It can take between 30 minutes and 6 hours for the dashboard to display updated data from Azure monitor enabled VMs.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
