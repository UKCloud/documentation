---
title: Edge gateways and high availability
description: Covers the challenges and considerations of enabling High availability (HA) on the edge gateway devices
services: vmware
author: Sue Highmoor
reviewer: sdelaney
lastreviewed: 11/02/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Edge gateways and high availability
toc_fullpath: Reference/vmw-ref-edge-ha.md
toc_mdlink: vmw-ref-edge-ha.md
---

# Edge gateways and High Availability

The edge gateway device that sits on each customer VDC is currently not highly available (HA) by default on UKCloud.

UKCloud has trialled the use of HA enabled edge gateway devices with customers on our platform. After an extended period of testing, we have observed that in certain scenarios the two devices can get out of sync and move into an active-active or passive-passive state (or flip-flopping between the two), causing connectivity issues that disrupts applications running inside the VDCs.

In light of this, UKCloud does not recommend that customers have HA enabled on the edge gateway device.

If you would like to investigate other methods of implementing HA into your solutions and the options available on UKCloud, see [*High availability on the UKCloud platform*](../other/other-ref-high-availability.md). Alternatively, please contact your Account Manager who can arrange a session with one of our Cloud Architects.

We are continuing to investigate with our partners at VMware to resolve this challenge.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
