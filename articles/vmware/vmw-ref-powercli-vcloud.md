---
title: PowerCLI command for interacting with the vCloud API
description: Details the PowerCLI command to use when interacting with the vCloud API from PowerCLI
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 19/07/2018 12:45:48
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: PowerCLI command for interacting with the vCloud API
toc_fullpath: Reference/vmw-ref-powercli-vcloud.md
toc_mdlink: vmw-ref-powercli-vcloud.md
---

# PowerCLI command for interacting with the vCloud API

To establish a connection to vCloud Director using PowerShell, use the following command:

    Connect-CIServer -Server <API-URL> -org <ORG-ID> -User <USERNAME> -Password <PASSWORD>

You can find the details for API-URL, ORG-ID, and USERNAME in the UKCloud Portal, under the API section of the top right menu.

> [!NOTE]
> Remove `@<ORG-ID>` from the username that is listed on the UKCloud Portal API page, as it is not required when attempting to login with this command.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
