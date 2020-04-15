---
title: UKCloud for Microsoft Azure known issues
description: This article describes some of the issues you may encounter when using UKCloud for Microsoft Azure
services: azure-stack
author: Chris Black
reviewer: William Turner
lastreviewed: 15/04/2020

toc_rootlink: Users
toc_sub1: Reference
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure known issues
toc_fullpath: Users/Reference/azs-ref-known-issues.md
toc_mdlink: azs-ref-known-issues.md
---

# UKCloud for Microsoft Azure known issues

## Overview

This guide describes some of the key issues you may encounter when using UKCloud for Microsoft Azure. More known issues can be found [here](https://docs.microsoft.com/en-us/azure-stack/operator/known-issues).

## Diagnostics do not work for Linux VMs

### Cause

If you enable Microsoft Insights for your subscription (**Subscriptions > Resource providers > Microsoft.Insights** and then click register), you'll have access to Azure Monitoring for Windows VMs only. This feature is not yet available for Linux VMs as documented [here](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-metrics-azure-data#application---diagnostics-logs-application-logs-and-metrics).

### Solution

There is currently no workaround for this issue.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
