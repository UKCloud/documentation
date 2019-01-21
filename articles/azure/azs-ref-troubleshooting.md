---
title: Troubleshooting - UKCloud for Microsoft Azure | UKCloud Ltd
description: This article describes some of the issues you may encounter when using UKCloud for Microsoft Azure
services: azure-stack
author: Dan Baker
toc_rootlink: Users
toc_sub1: Reference
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Microsoft Azure Troubleshooting
toc_fullpath: Users/Reference/azs-ref-troubleshooting.md
toc_mdlink: azs-ref-troubleshooting.md
---

# UKCloud for Microsoft Azure Troubleshooting

## Overview

This guide describes some of the issues you may encounter when using UKCloud for Microsoft Azure:

## Login results in server error

### Cause

When first logging in to the Azure Stack portal, you may see the following error:

`Server Error in '/' Application.`

![Server Error](images/azs-login-error.png)

### Solution

Refresh the page and the login should work.

## Diagnostics do not work for Linux VMs

### Cause

If you enable Microsoft Insights for your subscription (**Subscriptions > Resource providers > Microsoft.Insights** and subscribe), you'll have access to Azure Monitoring for Windows VMs only. This feature is not yet available for Linux VMs as documented at: <https://docs.microsoft.com/en-gb/azure/azure-stack/azure-stack-update-1802>

### Solution

There is currently no workaround for this issue.

## Virtual machine disk size is not showing in the GUI or CLI

### Cause

You cannot see the virtual machine disk size in the GUI or CLI.

### Solution

To view your disk size, navigate to **Storage accounts > <storage_account_name> > Blob service > vhds** and find your disk there:

![VM Size in GUI](images/azs-disk-size.png)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
