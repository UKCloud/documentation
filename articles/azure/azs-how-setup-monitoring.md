---
title: How to configure Azure Monitor for VMs on Azure Stack | UKCloud Ltd
description: Describes how to configure Azure Monitor for VMs on Azure Stack
services:
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure Azure Monitor for VMs on Azure Stack
toc_fullpath: Users/How To/azs-how-setup-monitoring.md
toc_mdlink: azs-how-setup-monitoring.md
---

# How to configure Azure Monitor for VMs on Azure Stack | UKCloud Ltd

## Overview

Azure Monitor is the platform service that provides a single source for monitoring Azure resources. With Azure Monitor, you can visualize, query, route, archive, and otherwise take action on the metrics and logs coming from resources in Azure.

This article will enable the following solutions for Azure Stack VMs:

-  [Azure Monitor for VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-overview)

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in the Azure** and Azure Stack portal.

## Enabling Azure Monitor for VMs

> [!WARNING]
> Before proceeding, check [here](https://docs.microsoft.com/en-gb/azure/azure-monitor/insights/vminsights-enable-overview#supported-operating-systems) that your VMs' OS version is supported.

> [!NOTE]
> The currently supported locations are: *West Central US*, *East US*, *Canada Central*, *UK South*, *West Europe* and *Southeast Asia*.

1. Login to the Azure portal:

    <https://portal.azure.com>

2. Create a *Log Analytics Workspace* in your Azure subscription:

    - Click **Create a resource**.

    - Search for `Template Deployment`.

    - Click **Template deployment (deploy using custom templates)**.

        ![Template Deployment Example](images/azs-browser-example-custom-template.png)

    - Click **Create**

    - Click **Build your own template in the editor**.

    - Copy and paste the following code into the editor:

        <pre><code class="language-json">
        {
            "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            "parameters": {
                "WorkspaceName": {
                    "type": "string"
                },
                "WorkspaceLocation": {
                    "type": "string"
                }
            },
            "resources": [
                {
                    "apiVersion": "2017-03-15-preview",
                    "type": "Microsoft.OperationalInsights/workspaces",
                    "name": "[parameters('WorkspaceName')]",
                    "location": "[parameters('WorkspaceLocation')]",
                    "resources": [
                        {
                            "apiVersion": "2015-11-01-preview",
                            "location": "[parameters('WorkspaceLocation')]",
                            "name": "[concat('ServiceMap', '(', parameters('WorkspaceName'),')')]",
                            "type": "Microsoft.OperationsManagement/solutions",
                            "dependsOn": [
                                "[concat('Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'))]"
                            ],
                            "properties": {
                                "workspaceResourceId": "[resourceId('Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'))]"
                            },
                            "plan": {
                                "name": "[concat('ServiceMap', '(', parameters('WorkspaceName'),')')]",
                                "publisher": "Microsoft",
                                "product": "[Concat('OMSGallery/', 'ServiceMap')]",
                                "promotionCode": ""
                            }
                        },
                        {
                            "apiVersion": "2015-11-01-preview",
                            "location": "[parameters('WorkspaceLocation')]",
                            "name": "[concat('InfrastructureInsights', '(', parameters('WorkspaceName'),')')]",
                            "type": "Microsoft.OperationsManagement/solutions",
                            "dependsOn": [
                                "[concat('Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'))]"
                            ],
                            "properties": {
                                "workspaceResourceId": "[resourceId('Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'))]"
                            },
                            "plan": {
                                "name": "[concat('InfrastructureInsights', '(', parameters('WorkspaceName'),')')]",
                                "publisher": "Microsoft",
                                "product": "[Concat('OMSGallery/', 'InfrastructureInsights')]",
                                "promotionCode": ""
                            }
                        }
                    ]
                }
            ]
        }
    </code></pre>

    - Click **Save**

    - Select a **Resource Group** or create a new one.

    - Select a **Location**

    - Under the *Settings* heading. Fill in the parameters **Workspace Name** and **Workspace Location**.

    - Click *I agree to the terms and conditions stated above*.

    - Click **Purchase**.

    - The *Log Analytics Workspace* and required solutions will begin deploying.

3. Once deployment is complete, navigate to the resource group you placed the **Log Analytics workspace** in.

    - Click the newly create workspace. On the new blade, under settings, select *Advanced settings*, then select *Windows* or *Linux* servers depending on the *VM Type* you want to add analytics too.
    Note down the **Workspace ID** and **Primary Key** values.

       ![Log Analytics workspace advanced settings](images/azs-browser-log-analytics-workspace-advanced-settings.png)

    - Within *Advanced settings*, Select the *Data* blade, and click **VM Type Performance Counters.**

    - Ensure all counters are selected and click **Add the selected performance counters**.

    - Click **Save**.

        ![Performance Counters](images/azs-browser-example-performance-counters.png)

        > [!NOTE]
        > For Linux Performance Counters, ensure **Apply below configuration to my machines** is selected.

4. Login to the Azure Stack portal:

    <https://portal.frn00006.azure.ukcloud.com>

5. Navigate to the VM that you want to enable **Azure Monitor** on and under settings, select the *extensions* blade.

    > [!WARNING]
    > For any monitoring to work correctly, the VM **must** have HTTPS (Port 443) enabled in the **Network Security Group** rules.

6. Click **Add** at the top and select the extension **Azure Monitor, Update and Configuration Management**; then click **Create**.

    ![VM enable update management](images/azs-browser-log-analytics-enable-update-management.png)

    - Provide the extension with the **Workspace ID** and **Primary Key** values (noted down previously).

    - Repeat step 6 for the **Azure Monitor Dependency Agent**).

7. On public Azure, click **Monitor**. In the new blade under *Insights*, click **Virtual Machines (preview)**. You will see three usage analytics tabs (**Health**, **Performance** and **Map**) for the VMs you have enabled **Azure monitor for VMs** on.

   ![azs-browser-example-monitor-stats](images/azs-browser-example-monitor-stats.png)

    > [!NOTE]
    > It can take between 30 minutes and 6 hours for the dashboard to display updated data from Azure monitor enabled VMs.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
