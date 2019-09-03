---
title: Synchronous Protection FAQs | UKCloud Ltd
description: Frequently asked questions for Synchronous Protection
services: vmware
author: Matt Warner
reviewer:
lastreviewed: 02/08/2018 16:00:52
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Synchronous Protection FAQs
toc_fullpath: FAQs/vmw-faq-synchronous-protection.md
toc_mdlink: vmw-faq-synchronous-protection.md
---

# Synchronous Protection FAQs

## General

### Is Synchronous Protection still available?

Synchronous Protection is no longer available as a protection option for UKCloud for VMware. We recommend using one of our other protection options: Journaling Protection or Snapshot Protection. We will continue to provide support to customers who previously added Synchronous Protection to their environment, although we would encourage considering using Journaling Protection instead.

### What is the ENHANCED service?

ENHANCED was a G-Cloud 7 service level option which was subsequently replaced with the product name "Synchronous Protection". However, for most purposes, [Journaling Protection](vmw-sco-journaling-protection.md) is more flexible.

### How is the environment protected?

Any data that is written is committed to the underlying storage arrays in both UKCloud sites synchronously. This includes the full content of your VMs and edge gateway instances. For clarity, this is not an asynchronous replication technology and the recovery point is the last write to disk, with no historical recovery points. If asynchronous replication with historical recovery points is required, consider [Journaling Protection](vmw-sco-journaling-protection.md).

### How is an unplanned failover event triggered?

We monitor the underlying physical infrastructure, including the blades, routers and switches. In the event of multiple component failure, including loss of redundancy, in the majority of cases your VMs and edge gateway instances will be automatically brought online in the alternative site.

However, other scenarios can result in a full or partial failover, and in these cases we'll need to react differently.

### What might I need to factor into my design?

You need to be aware of what this service offers. The UKCloud Synchronous Protection service option:

- Is not designed to be active‑active. It offers failover to a second UK site. If you need an active‑active solution, you can build across both sites and design in load balancing. Contact your Account Manager if you want to investigate this option.

- Provides a disaster recovery service with an RPO of 0 seconds, and a variable RTO from 1 minute to longer, depending on the scenario.

### What will I need to do after an unplanned failover has occurred?

In the event of an unplanned failover, because your VMs are restarted in a crash-consistent state, you may need to manually restart parts of your environment to ensure that your applications continue running as before. You may also need to check your external connectivity to ensure that all networking has been correctly rerouted.

### What is the impact on latency?

A consequence of synchronous replication is that there is a higher write latency (time taken for a write to be acknowledged). This is primarily due to the time taken for the write request to occur on both sites. Typically, this means that writes take 15‑20ms (compared to 5‑10ms if Synchronous Protection is not selected). Depending on the workload, this may have a noticeable impact.

If an application performs a large sequence of writes in series (one at a time), then the impact of the higher write latency will be felt. If, on the other hand, the application performs a number of writes in parallel (multiple writes at the same time), then the impact of the higher write latency will be significantly less.

We highly recommend that applications deployed with Synchronous Protection are designed and configured to perform write operations in parallel. As a best practice, we would also recommend ensuring that the file systems are block aligned - that is of particular relevance with Synchronous Protection. Most modern operating systems are block aligned by default, but this may still be of relevance with the additional file systems created manually on Linux.

If you are unable to architect your application to make use of parallel writes, and the increased latency cannot be tolerated, then you should consider alternatives to Synchronous Protection, utilising application replication for protection between sites.

For clarity, Synchronous Protection makes no difference to read latency.

### How is the network rerouted?

For internet-bound traffic, we manage an autonomous Border Gateway Protocol (BGP) service that enables us to intelligently redirect traffic without affecting your IP address allocation.

The resilience of the external connectivity into the Elevated OFFICIAL security domain depends on, and is generally provided by, the access network. Behind the router layer, we have designed a network that stretches between our two sites. This allows for network connectivity (if installed in one site) to remain if your virtual firewall and our physical firewall are in separate and alternative sites.

We advise that you consider how additional services, such as Cloud Enablement and leased lines, will be affected in a disaster recovery (DR) scenario, as this falls outside the Synchronous Protection service option.

UKCloud's firewalls are protected within each site, with the failover between the sites performed via an orchestrated process. We achieve this through a sequence of routing changes within our network.

### How long will it take for my services to fail over?

This will depend on the scenario and the design of your environment, but generally the failover will take as long as the VM needs to reboot plus a small amount of additional time to invoke the failover - about 45 seconds. Some scenarios, such as a "split brain", can take longer, leading to an outage of up to two hours.

### What is the relationship between edge gateways, VDCs and vOrgs when a failover occurs?

When a failure occurs, edge gateways, virtual data centres (VDCs) and organisations and their inherent rules, are failed over with all other VMs.

### Can I ask for the VMs in my environment to be split between UKCloud sites?

You cannot specifically request this as part of the service, but UKCloud retains the right to do this if necessary, such as during planned maintenance.

### Can I be alerted when a VM is moved to a different site?

This feature isn't currently supported. However, you can check the location of your VMs. For more information, see [*How to use VM location in vCloud Director*](vmw-how-use-vm-location.md).

## Failover testing

### How can I test that my services will fail over?

You can test the failover function of the service by requesting a Test Scenario from UKCloud.

For more information, see the [*Synchronous Protection Service Scope*](vmw-sco-synchronous-protection.md).

## Snapshot Protection

### Will I be charged for using Snapshot Protection if I opt for Synchronous Protection?

Synchronous Protection with Geo-resilience comes with 14-day Snapshot Protection as standard when selected, with the option for 28-day Snapshot Protection free of charge. Please note that you will be charged for any storage consumed associated with the Snapshot Protection option if enabled.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
