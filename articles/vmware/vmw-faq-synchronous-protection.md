---
title: Synchronous Protection FAQs | UKCloud Ltd
description: Frequently asked questions for Synchronous Protection
services: vmware
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Synchronous Protection FAQs
toc_fullpath: FAQs/vmw-faq-synchronous-protection.md
toc_mdlink: vmw-faq-synchronous-protection.md
---

# Synchronous Protection FAQa

## General

### What is the ENHANCED service?

ENHANCED was a G-Cloud 7 service level option which has now been replaced with a POWER VM with Synchronous Protection and Geo-resilient storage.

### How is the environment protected?

Any data that is written is committed to the underlying storage arrays in both UKCloud sites simultaneously. This includes the full content of your VMs and edge gateway instances. For clarity, we don't use asynchronous replication technologies. The recovery point is the last write to disk, with no historical recovery points.

### How is an unplanned failover event triggered?

We monitor the underlying physical infrastructure, including the blades, routers and switches. In the event of multiple component failure, including loss of redundancy, in the majority of cases your VMs and edge gateway instances will be automatically brought online in the alternative site.

However, other scenarios can result in a full or partial failover, and in these cases we'll need to react differently.

### What might I need to factor into my design?

You need to be aware of what this service offers. The UKCloud Synchronous Protection service option:

- Is not designed to be active‑active. It offers failover to a second UK site. If you need an active‑active solution, you can build across both sites and design in load balancing. Contact your Account Manager if you want to investigate this option.

- Provides a quickly implemented disaster recovery service with an RPO of 0 seconds, and a variable RTO from 1 minute to longer, depending on the scenario.

### What will I need to do after an unplanned failover has occurred?

In the event of an unplanned failover, because your VMs are restarted in a crash-consistent state, you may need to manually restart parts of your environment to ensure that your applications continue running as before. You may also need to check your external connectivity to ensure that all networking has been correctly rerouted.

### What is the impact on latency?

A consequence of synchronous replication is that there is a higher write latency (time taken for a write to be acknowledged). This is primarily due to the time taken for the write request to occur between the sites (limited by the speed of light). Typically, this means that writes take 15‑20ms (compared to 5‑10ms if Synchronous Protection is not selected). Depending on the workload, this may have a noticeable impact.

If an application performs a large sequence of writes in series (one at a time), then the impact of the higher write latency will be felt. If, on the other hand, the application performs a number of writes in parallel (multiple writes at the same time), then the impact of the higher write latency will be significantly less.

We highly recommend that applications deployed with Synchronous Protection are designed and configured to perform write operations in parallel. As a best practice, we would also recommend ensuring that the file systems are block aligned - that is of particular relevance with Synchronous Protection. Most modern operating systems are block aligned by default, but this may still be of relevance with the additional file systems created manually on Linux.

If you are unable to architect your application to make use of parallel writes, and the increased latency cannot be tolerated, then you should consider alternatives to Synchronous Protection, utilising application replication for protection between sites.

For clarity, there is no difference in the read latency.

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

This feature isn't currently supported, but is a consideration for future development.

## Failover testing

### How can I test that my services will fail over?

You can test the failover function of the service by requesting a Test Scenario from UKCloud.

For more information, see the [*Synchronous Protection Service Scope*](vmw-sco-synchronous-protection.md).

### What is excluded from a Test Scenario?

- We will not fail over the connectivity and physical firewall during a Test Scenario. You'll experience a network latency of a few milliseconds through this firewall.

- We don't currently offer a "hard failover" test, in which a physical host would be switched off to simulate a hardware fail event.

### How do I initiate a Test Scenario?

1. Raise a Support Request indicating you want to complete a Test Scenario. Confirm the VDC and name the VMs (up to 10) you want to have failed over, along with the date, start and end time, and any other requirements. Remember that the start and end times must be during office hours.

2. When we receive your request we will accept or reject it.

3. If we accept it, we will schedule the Test Scenario to start on the date and at the time you specified.

### What test options are available?

Option 1: We dynamically move your VMs between our two sites.

- We will dynamically move your VMs between the sites while the VMs remain online. There will be increased network latency between the VMs running in the different sites (circa 4-4.5 msec).

Option 2: We restart your VMs between the two sites.

- Your VMs can be shut down and restarted in the secondary site. If the shutdown is non‑graceful (power off as opposed to a Guest OS shutdown), this simulates the effect of a physical server outage from an individual VM perspective. This is the equivalent of a total site failure.

- As the UKCloud platform is multi-tenanted, we will not replicate a physical host failure to invoke a DR scenario as this may affect other customers.

- Failovers will last a maximum of 12 hours before being failed back to the originating site.

### What testing outputs are available?

It's highly likely that the testing of a failover will be seamless to you and therefore it will be difficult for you to gauge that the failover has occurred. To provide assurance that the test was successful, we'll produce a report that identifies the following:

- A sanitised (removing ESX host names) report of the ESX servers that the VMs are located on during the period of the failover test
- Comments and observations

### What if I want to test on a live environment?

You can test a maximum of 10 VMs on a live environment. Your users will experience a minimal outage as a consequence. We do not recommend testing on a live environment.

### Are there charges for a service failover test?

We generally allocate a day's worth of IT Operations effort for a failover test, charged per our SFIA rate card. Longer testing periods will need to be approved by UKCloud.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.