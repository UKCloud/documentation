---
title: Network Adaptor Issue with Windows Server 2012 and 2012R2s | UKCloud Ltd
description: Describes known issues with the e1000 and e1000e adaptors when using Microsoft Server 2012
services: connectivity
author: Sue Highmoor
toc_rootlink: Troubleshooting
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Network Adaptor Issue
toc_fullpath: Troubleshooting/conn-ref-network-adapator.md
toc_mdlink: conn-ref-network-adaptor.md
---

# Network Adaptor Issue with Windows Server 2012 and 2012R2

## Issue

There is a known issue with the e1000 and e1000e adaptors when using Microsoft Server 2012 product lines.

Symptoms include bluescreens of the operating system, random network dropouts.

## Resolution

The fix is to install VMware Tools and replace the network adaptor with a VMXNET3 adaptor.

There are a couple of things you should be aware of when doing this:

- Guest customisation - depending on the settings for each VM, this may cause the server to change its SID. (these can be adjusted when the VM is powered off).

- Windows may require the network configuration to be configured manually, as the old adaptor may still being referenced. There is a [hotfix](http://support.microsoft.com/kb/2526142) from Microsoft which could fix this.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.