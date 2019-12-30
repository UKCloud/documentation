---
title: VMware vCloud Connector | UKCloud Ltd
description: Covers the use of VMware vCloud Connector with the UKCloud platform
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 19/07/2018 12:45:48
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware vCloud Connector
toc_fullpath: Reference/vmw-ref-vcloud-connector.md
toc_mdlink: vmw-ref-vcloud-connector.md
---

# VMware vCloud Connector

VMware vCloud Connector links your internal private cloud with UKCloud so that you can manage them as a single hybrid environment and transfer workloads back and forth.

The use of vCloud Connector is supported on the platform, but we do not offer support in configuring vCloud Connector or its use.

We have verified the following connection settings as being in the correct format to authenticate against our platform.

## For vCC server

![vCloud Connector Node Details](images/update_node.png)

## For vCC node

![vCloud Registration details](images/cloud_registration.png)

Time Zone settings need to be the same on both Node and Server

Login details are the same as for the *API interaction through PowerCLI*

## vCloud Connector endpoint authentication

When authenticating to our vCloud endpoints using vCloud Connector, the details needed are the same as for the vCloud API. For example:

URL: `api.vcd.portal.skyscapecloud.com/api`
Username: `1-1-1@1-1-1-abcdef`

For more information, see [*How to access vCloud Director through the vCloud API](vmw-how-access-vcloud-api.md#finding-your-vcloud-api-credentials).

## More information

For more information about vCloud Connector, visit https://www.vmware.com/uk/products/vcloud-connector.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
