---
title: PowerCLI command for interacting with the vCloud API | UKCloud Ltd
description: Details the PowerCLI command to use when interacting with the vCloud API from PowerCLI
services: vmware
author: Sue Highmoor
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

    Connect-CIServer -Server api.vcd.portal.ukcloud.com -org <ORG-ID> -User <USERNAME> -Password <PASSWORD>

> [!NOTE]
> Remove `@<ORG-ID>` from the username that is listed on the UKCloud Portal API page, as it is not required when attempting to login with this command.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.