---
title: Changes in VMware Cloud Director 10.3
description: Provides information about the changes in VMware Cloud Director 10.3
services: vmware
author: shighmoor
reviewer: geverett
lastreviewed: 10/10/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Changes in VMware Cloud Director 10.3
toc_fullpath: Reference/vmw-ref-vcd-10-3.md
toc_mdlink: vmw-ref-vcd-10-3.md
---

# Changes in VMware Cloud Director 10.3

## Overview

This article provides information about the changes introduced in VMware Cloud Director 10.3.

## New features

For information about new features in VMware Cloud Director 10.3, see <https://docs.vmware.com/en/VMware-Cloud-Director/10.3/rn/VMware-Cloud-Director-1032-Release-Notes.html#What's%20New>.

## Browser support

VMware Cloud Director 10.3 is compatible with the current major and previous major releases of the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

> [!NOTE]
> VMware Cloud Director 10.3 does not support Internet Explorer 11; instead, you should use Microsoft Edge or another supported browser.

## Changes to APIs

### Supported API versions

VMware Cloud Director 10.3 supports the VMware Cloud Director API version 36.2 (see <https://developer.vmware.com/apis/1232/vmware-cloud-director>). For information about the changes to the VMware Cloud Director API for this version, see [VMware Cloud Director API Schema Differences](https://developer.vmware.com/apis/1232/vmware-cloud-director/doc/diff/index.html).

The 31.0, 32.0 and 33.0 versions of the API are deprecated in this release and will not be supported in future releases.

The following API versions are still available:

- 31.0 (deprecated)
- 32.0 (deprecated)
- 33.0 (deprecated)
- 34.0
- 35.0, 35.2
- 36.0, 36.1, 36.2

### Changes to API authentication

The method of authentication for the Cloud Director API has changed. The `/api/sessions` API login endpoint is deprecated in VMware Cloud Director 10.3. You should now use '/cloudapi/1.0.0/sessions` to authenticate against the API.  For more information, see [*How to access VMware Cloud Director through the Cloud Director API*](vmw-how-access-vcloud-api.md).

### Sandbox for testing Cloud Director API

UKCloud provides sandboxes to enable you to test the next versions of the Cloud Director API so that you can prepare for VMware Cloud Director upgrades. Our latest sandbox (<https://vcd.latest.ukcloud.com/login/>) will be upgraded soon.

To gain access to the sandbox, raise a Service Request via My Calls on the UKCloud Portal.

> [!NOTE]
> Some VMware Cloud Director features may be available in the sandbox that will not be enabled in UKCloud for VMware after the 10.1 upgrade. If there's a 10.1 feature that you're particularly interested in, contact your Service Delivery Manager to register interest so that we can consider it for our roadmap.

## Known issues

For known issues, see <https://docs.vmware.com/en/VMware-Cloud-Director/10.3/rn/VMware-Cloud-Director-1032-Release-Notes.html#knownissues>.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
