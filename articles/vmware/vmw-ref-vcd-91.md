---
title: Upgrade to vCloud Director 9.1 | UKCloud Ltd
description: Outlines the improvements delivered by UKCloud's upgrade to vCloud Director 9.1
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Upgrade to vCloud Director 9.1
toc_fullpath: Reference/vmw-ref-vcd-91.md
toc_mdlink: vmw-ref-vcd-91.md
---

# Upgrade to vCloud Director 9.1

## Introduction

This guide outlines the improvements UKCloud's upgrade to vCloud Director 9.1 will deliver to UKCloud for VMware.

## vCloud Director 9.1 new features

vCloud Director 9.1 provides the following new features:

- Enhanced HTML-5 tenant portal, including:

  - Creation and configuration of networks consolidated in a single view
  - New metrics dashboard provides functionality previously available only via API
  - Streamlined workflows for creating vApps and VMs

    For more information about the vCloud Director tenant portal, see the [*vCloud Director Tenant Portal Guide*](https://docs.vmware.com/en/vCloud-Director/9.1/com.vmware.vcloud.tenantportal.doc/GUID-74C9E10D-9197-43B0-B469-126FFBCB5121.html).

- Standalone VMRC improves access to VM consoles

- Python SDK and CLI

For a full list of new features in vCloud Director 9.1, see the [*What's New with VMware vCloud Director 9.1*](https://blogs.vmware.com/vcloud/files/2018/03/vcd91newfeatureswp.pdf) white paper.

## Changes to APIs

For information about the changes to the vCloud API used by vCloud Director 9.1, see the [*vCloud API Schema Differences*](https://code.vmware.com/apis/287/vcloud#/doc/diff/index.html) document.

You should be aware of the following end-of-life and end-of-support warnings for older vCloud API versions in vCloud Director 9.1:

- vCloud Director 9.1 no longer supports vCloud API versions 1.5 and 5.1. These API versions were deprecated in a previous release.
- vCloud Director 9.1 is the last release of vCloud Director to support any vCloud API versions earlier than 20.0. Those API versions are deprecated in this release and will not be supported in future releases.

## Known issues

For a list of known issues with vCloud Director 9.1, see the [*vCloud Director 9.1 for Service Providers Release Notes*](https://docs.vmware.com/en/vCloud-Director/9.1/rn/rel_notes_vcloud_director_91.html#knownissues).

Only vShield Edge Gateways which have been converted to Advanced Gateway UI can be managed in the Enhanced HTML-5 tenant portal. To change settings on non-Advanced Gateway Edges, it is necessary to select "See this page in vCloud Director Web Console" in the vApp or Virtual Machine section of the HTML-5 portal to view the previous vCloud web portal.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
