---
title: How to configure VM update and management on Azure Stack | UKCloud Ltd
description: Configure VM update and management on Azure Stack
services: azure-stack
author: Daniel Brennand
reviewer: xxx
lastreviewed: xxx

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure VM update and management on Azure Stack
toc_fullpath: Users/How To/azs-how-config-vm-update-management.md
toc_mdlink: azs-how-config-vm-update-management.md
---

# How to configure VM update and management on Azure Stack | UKCloud Ltd

## Overview

Azure Monitor is the platform service that provides a single source for monitoring Azure resources. With Azure Monitor, you can visualize, query, route, archive, and otherwise take action on the metrics and logs coming from resources in Azure.

This guide will enable the following solutions for Azure Stack VMs:

1. [Azure Monitor for VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-overview)
2. [Inventory](https://docs.microsoft.com/en-us/azure/automation/automation-vm-inventory)
3. [Change Tracking](https://docs.microsoft.com/en-us/azure/automation/change-tracking)
4. [Update Management](https://docs.microsoft.com/en-us/azure/automation/automation-update-management)

## Prerequisites

To complete the steps in this guide, you must have appropriate access to a subscription in the **Azure** & **Azure Stack** portal.

## Enabling VM Update & Management

1. Login to the Azure portal:

    <https://portal.azure.com>

2. Create a *LogAnalytics Workspace* in your Azure subscription:

    - Click **All Services** and search `log analytics`.
        
        ![All Services](images/azs-browser-search-log-analytics.png)
    
    - Select **Log Analytics Workspaces**.
    
    - Click **Add** and in the *new* blade, select choices for the following items:

        - *Name* for the **Log Analytics workspace**. Example: `DefaultLAWorkspace`
        
        - *Subscription* to link to the workspace.
        
        - *Resource Group* to link to the workspace. Can be an existing resource group or choose to create a new one.
        
        - *Location* available to host the workspace on.

        - *Pricing Tier* to use.

        Here is an example of the blade and all items filled out:

        ![Log Analytics workspace creation](images/azs-browser-example-log-analytics-workspace.PNG)

    - Press **OK** once finished. The **Log Analytics workspace** will now begin deployment. A notification will appear on the top right of the portal.
        
    - Once deployment is complete, press the *refresh* button and you should now see your **Log Analytics workspace**.

    - Click the newly create workspace. On the *new* blade, under settings, select *Advanced settings* and note down the **Workspace ID** and **Primary Key** values.

        ![Log Analytics workspace advanced settings](images\azs-browser-log-analytics-workspace-advanced-settings.PNG)
    
3. Create an *Automation Account* 