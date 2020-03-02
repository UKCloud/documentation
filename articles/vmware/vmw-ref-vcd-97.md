---
title: Changes in vCloud Director 9.7
description: Outlines the steps required to prepare for the upcoming upgrade to vCloud Director 9.7
services: vmware
author: Sue Highmoor
reviewer: Dylan Coombes 
lastreviewed: 15/11/2019 15:00:00
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Changes in vCloud Director 9.7
toc_fullpath: Reference/vmw-ref-vcd-97.md
toc_mdlink: vmw-ref-vcd-97.md
---

# Changes in vCloud Director 9.7

## Overview

After the recent upgrades to vCloud Director 9.7, there are some things you might need to take into consideration.

## Advanced edge gateways

vCloud Director 9.7 supports only advanced edge gateways. As part of the upgrades, UKCloud requested that any edge gateways be upgraded before 31st May 2019.

## Changes to APIs

vCloud Director 9.7 supports vCloud API version 32.0. For information the changes to the vCloud API for this version, see [*vCloud API Schema Differences*](https://code.vmware.com/apis/553/doc/diff/index.html).

vCloud Director 9.7 is the last release of vCloud Director to support vCloud API 20. The 20 version of the API is deprecated in this release and will not be supported in future releases.

## PowerCLI supported versions

If you're using PowerCLI to interact with our vCloud Director instances, the minimum supported version is 11.0.0.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
