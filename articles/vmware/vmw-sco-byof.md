---
title: Bring Your Own Firewall Service Scope | UKCloud Ltd
description: Outlines important details regarding Bring Your Own Firewall
services: other
author: Steve Hall
reviewer:
lastreviewed: 23/07/2018 14:44:15
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Bring Your Own Firewall Service Scope
toc_fullpath: Service Scope/vmw-sco-byof.md
toc_mdlink: vmw-sco-byof.md
---

# Bring Your Own Firewall Service Scope

## About this document

This document is intended for UKCloud customers who might be considering an alternative virtual firewall or virtual appliance to the presently integrated VMWare vCNS firewall device within vCloud Director.

The scope of the document is not to provide step by step detail on how to setup or install an alternative virtual firewall but rather the key points that a customer should consider when choosing an alternative product.

The document describes the responsibilities of both UKCloud and the customer in order to facilitate the changes required.

## About Bring Your Own Firewall

Bring your own firewall allows customers to customise their networking infrastructure by installing their own virtual firewall appliance in place of the vCNS device UKCloud includes as standard with its compute services.

This can allow customers to leverage their own in-house expertise with a particular technology or can provide access to some higher level networking functionality not natively available in the vCNS device.

## Default setup

Presently UKCloud only offers a "bring your own firewall" installation to new VDCs.

In a BYOF implementation, UKCloud present an external network directly to the customer, who can then install the firewall instance of their choice.

## UKCloud responsibilities

Upon a customer's request, UKCloud will:

- Deploy a new VDC without a vCNS device

- Present the external network to the customer for them to install their own firewall device

Once the customer has installed their own firewall device, UKCloud will continue to:

- Manage platform availability

- Manage the external network

## Customer responsibilities

By requesting to have the edge gateway device removed and their own firewall technology installed, the customer accepts that:

- Customers are responsible for sourcing their own licensing arrangement with the 3rd party firewall provider.

- Customers are responsible for installing and configuring the firewall device. Guidance on how this might be done can be found in the [*Bring your own firewall to UKCloud Blueprint*](https://ukcloud.com/wp-content/uploads/2018/08/ukc-gen-310-bring-your-own-firewall-blueprint.pdf).

- UKCloud do not offer any support of customer installed firewall replacements. This includes but not limited to install, configuration and troubleshooting issues.

- UKCloud will not be able to perform any network diagnostic tasks on the customer side of the firewall (inside the VDC).

- Outages caused by the customers new firewall will not be liable to service credit claims.

- Customers lose the visibility of the IP address assignments which are currently easily referenced within vCloud Director.

- Customers lose the integrated functionality of configuring the edge gateway device through vCloud Director. Access to the new firewall replacement is only available via the console or from within the customer VDC (based on setup).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
