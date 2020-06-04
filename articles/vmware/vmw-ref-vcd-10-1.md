---
title: Changes in VMware Cloud Director 10.1
description: Provides information about the changes in VMware Cloud Director 10.1
services: vmware
author: Sue Highmoor
reviewer: sdelaney
lastreviewed: 04/06/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Changes in VMWare Cloud Director 10.1
toc_fullpath: Reference/vmw-ref-vcd-10-1.md
toc_mdlink: vmw-ref-vcd-10-1.md
---

# Changes in VMware Cloud Director 10.1

## Overview

Ahead of our planned upgrade to VMware Cloud Director 10.1, this article provides information about the changes in this new version.

## New features

vCloud Director 10.1 provides the following new features.

- UI enhancements in the HTML5 Tenant Portal:

  - Hamburger bar replaced with a menu bar

  - New Applications menu to manage vApps and VMs across data centres

  - New vApp and VM card design

  - New Chrome Browser Extension to automate proxy configuration for VMware Cloud Director access to stand alone vCenters

  - New Resources view for VMs and vApps

  - Ability to change the catalog owner

  - Ability to edit the OVF properties of a vApp and VM

  - Option to power on a vApp after vApp deployment

  - Ability to import a VM, vApp or vApp template from vSphere

  - vApp templates are differentiated from unexpired templates with a new grid column

  - External IP is showing on the vApp details page

  - Ability to delete Shadow VMs

- Terraform vCloud Director Provider, updated to version 2.8, enables you to access infrastructure-as-code

- vRealize Operations Tenant App

For more information about new features in VMware Cloud Director 10.1, see <https://cloudsolutions.vmware.com/assets/blta3bfbeafb64db8f8/What_s_New_with_VMware_Cloud_Director_10.1.pdf>.

## Legacy UI

The Legacy UI is no longer available in vCloud Director 10.1.

## Browser support

VMware Cloud Director 10.1 is compatible with the current major and previous major releases of the following browsers:

- Google Chrome

- Mozilla Firefox

- Microsoft Edge

- Microsoft Internet Explorer 11

## Changes to APIs

VMware Cloud Director 10.1 supports the VMware Cloud Director API version 34.0 (see <https://code.vmware.com/apis/912/vmware-cloud-director>). For information about the changes to the VMware Cloud Director API for this version, see [VMare Cloud Director API Schema Differences](https://code.vmware.com/apis/912/vmware-cloud-director/doc/diff/index.html).

VMware Cloud Director 10.1 is the last release of VMware Cloud Director to support vCloud Director API 30.0. The 30.0 and 31.0 versions of the API are deprecated in this release and will not be supported in future releases.

The following API versions are still available:

- 30.0 (deprecated)

- 31.0 (deprecated)

- 32.0

- 33.0

- 34.0

### Sandbox for testing vCloud API

UKCloud provides sandboxes to enable you to test the next versions of the VMware Cloud Director API so that you can prepare for VMware Cloud Director upgrades. Our latest sandbox (<https://vcd.latest.ukcloud.com/cloud/>) has been upgraded to vCloud Director 10.1.

To gain access to the 10.1 sandbox, raise a Service Request via My Calls on the UKCloud Portal.

## Known issues

For known issues with VMware Cloud Director 10.1, see the [VMware Cloud Director 10.1 Release Notes](https://docs.vmware.com/en/VMware-Cloud-Director/10.1/rn/VMware-Cloud-Director-101-Release-Notes.html).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
