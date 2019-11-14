---
title: Preparing for vCloud Director 9.7 upgrade | UKCloud Ltd
description: Outlines the steps required to prepare for the upcoming upgrade to vCloud Director 9.7
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Preparing for vCloud Director 9.7 upgrade
toc_fullpath: Reference/vmw-ref-vcd-97.md
toc_mdlink: vmw-ref-vcd-97.md
---

# Preparing for vCloud Director 9.7 upgrade

## Overview

Ahead of our upgrade to vCloud Director 9.7, there are some key points for you to consider as preparation for the upgrade.

## Upgrade to advanced edge gateways

vCloud Director 9.7 supports only advanced edge gateways. In preparation for the upgrade, before 31 May 2019 you must convert any legacy standard edge gateways to advanced edge gateways. For more information, see [*How to convert your edge to an advanced gateway*](vmw-how-convert-edge.md).

> [!IMPORTANT]
> The conversion process will cause the gateway to redeploy. Therefore, you should schedule the conversion during an outage window.

After 31 May 2019, UKCloud will convert any remaining standard edge gateways at our convenience.

## Sandbox for testing vCloud API

UKCloud provides sandboxes to enable you to test the next versions of the vCloud API so that you can prepare for vCloud Director upgrades. Our latest sandbox (<https://vcd.latest.ukcloud.com/cloud/>) has been upgraded to vCloud Director 9.7. If you already have an account on a previous sandbox, you can continue to use this account in the 9.7 sandbox. If you haven't previously used one of our vCloud sandboxes, raise a Service Request via [My Calls](https://portal.skyscapecloud.com/support/ivanti) on the UKCloud Portal to gain access.

## Changes to APIs

vCloud Director 9.7 supports vCloud API version 32.0. For information the changes to the vCloud API for this version, see [*vCloud API Schema Differences*](https://code.vmware.com/apis/553/doc/diff/index.html).

vCloud Director 9.7 is the last release of vCloud Director to support vCloud API 20. The 20 version of the API is deprecated in this release and will not be supported in future releases.

## PowerCLI supported versions

If you're using PowerCLI to interact with our vCloud Director instances, the minimum supported version is 11.0.0.

## vCloud Director 9.7 new features

We're currently evaluating the new features provided with vCloud Director 9.7 to determine which functionality is appropriate to make available on our platform. We'll provide more details of the new features that we plan to enable as this evaluation progresses.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).