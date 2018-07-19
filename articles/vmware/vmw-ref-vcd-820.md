---
title: Upgrade to vCloud Director 8.20 | UKCloud Ltd
description: Outlines the improvements delivered by UKCloud's upgrade to vCloud Director 8.20
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Upgrade to vCloud Director 8.20
toc_fullpath: Reference/vmw-ref-vcd-820.md
toc_mdlink: vmw-ref-vcd-820.md
---

# Upgrade to vCloud Director 8.20

## Introduction

This guide outlines the improvements UKCloud's upgrade to vCloud Director 8.20 will deliver.

## vCloud Director 8.20 new features

After the upgrade to vCloud Director 8.20, you'll benefit from the following new features:

- **Upgrade to NSX Edge** - You'll be able to upgrade existing vCNS Edges to NSX Edges to take advantage of improved stability. Any new edge gateways will be NSX Edges by default.

- **Convert to Advanced Gateway** - You can convert your NSX Edges to advanced gateways, which provide access to additional functionality, such as the ability to manage SSL VPN users, as well as:

  - **New API NSX management** - vCloud Director 8.20 introduces a new proxy API that enables vCloud API clients to make requests to the NSX API. Unlike the NSX API, which is designed to address NSX objects in a global scope, such as a vCenter database, the vCloud Director API for NSX is designed to address NSX objects within the scope of a vCloud Director tenant organisation.

    > [!NOTE]
    > The API endpoint for configuring edge services will change, so any tooling that you use to amend the edge service configuration, such as adding firewall rules, will no longer work in its current state.

  - **NSX Tenant Portal** - The Tenant Portal is a pure HTML5 user interface that you can use in conjunction with the legacy vCloud Director Web Console. This portal provides an initial set of controls to configure advanced gateway NSX Edges.

  - **Enable SSH on edge** - If you enable SSH, you can perform your own packet captures and troubleshoot your edge gateway yourself, without having to contact UKCloud Support.

- **Hardware version** - vCloud Director 8.20 increases hardware version support.

- **Guest OS support** - vCloud Director 8.20 provides the first formal support for Windows 2016 64-bit.

## Changes to APIs

For information about the changes to the vCloud API used by vCloud Director 8.20, see the [*vCloud API Schema Differences*](http://pubs.vmware.com/vcd-820/index.jsp?topic=/com.vmware.vcloud.api.reference.doc_27_0/diff/index.html) document in the VMware Documentation Center.

For more information about using the advanced gateway API, see the [*vCloud Director API for NSX Programming Guide*](https://pubs.vmware.com/vcd-820/topic/com.vmware.ICbase/PDF/vcloud_nsx_api_guide_27_0.pdf).

### vCloud API testing sandboxes

UKCloud provides sandboxes to enable you to test the next two versions of the vCloud API so that you can prepare for future vCloud Director upgrades. If you require access to one of our vCloud sandboxes, raise a service request via My Calls on the UKCloud Portal.

## Known issues

For a list of known issues with vCloud Director 8.20, see the [*vCloud Director 8.20 for Service Providers Release Notes*](https://pubs.vmware.com/Release_Notes/en/vcd/8-20/rel_notes_vcloud_director_8-20.html#knownissues).

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.