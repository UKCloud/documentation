---
title: Journaling Protection Service Scope | UKCloud Ltd
description: Outlines important details regarding the Journaling Protection service, powered by Zerto
services: vmware
author: Steve Hall
reviewer:
lastreviewed: 24/07/2018 13:50:39
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Journaling Protection Service Scope
toc_fullpath: Service Scope/vmw-sco-journaling-protection.md
toc_mdlink: vmw-sco-journaling-protection.md
---

# Journaling Protection Service Scope

## About this document

This document explains what is and isn't included in the scope of the Journaling Protection service option.

Journaling Protection is one of a variety of on‑platform protection options available from UKCloud. Use this Service Scope to understand Journaling Protection and whether it will meet your own recovery point (RPO) or recovery time (RTO) objectives.

## About Journaling Protection

Journaling Protection (powered by Zerto) is a powerful, self-service replication and recovery tool that can improve organisational resilience and enable seamless migration of applications between UKCloud's enabled regions.

You can protect your Virtual Machines(VMs) by adding Journaling Protection to the vApp that contains those VMs. When you add Journaling Protection to a vApp, every write operation to the VMs in that vApp is copied and stored in a journal on the recovery site. This means that in the event of a VM being compromised, (for example, by a virus attack or bad software update) you can quickly recover the VM to a point in time before the event.

You can add Journaling Protection to a vApp by adding it to a virtual protection group (VPG). Each VM in the protected vApp is synchronised to the recovery site and a journal is created. After this initial sync, each subsequent write operation to the VM is processed as normal on the protected site and a copy is asynchronously sent to the recovery site and written to the journal.

When the specified journal history is reached (for example, 14 days), as new journal entries are created, older entries are written to the recovery VM's virtual disks.

Every few seconds a checkpoint is written to every journal for each VM in the VPG to ensure crash-consistency between the VMs. If you need to recover a VM, you select a checkpoint to recover to. For example, in the case of a virus, you could recover to a checkpoint from before the virus attack. During recovery, the vApp and its VMs are created on the recovery site and the recovery disks for each VM are attached to the recovered VM. Information in the journal is then promoted to the VM to bring it up to the date and time of the selected checkpoint.

## Frequency and timing

UKCloud's Journaling Protection service is designed to provide customers with recovery points that are as little as seconds behind the running VM.

UKCloud's standard journaling profile provides:

- Target RPO of 5 Minutes

- Journal history of 2, 7, 14 or 28 days

At present, UKCloud have not enabled the ability for customers to configure custom profiles.

If the target RPO is exceeded, the customer and UKCloud will be notified via the Zerto self-service portal.

Factors that can affect the RPO are:

- **Rate of change of the data on a VM.** VMs with a large rate of change in the data will potentially achieve slightly longer RPO's than those VMs that have a lower rate of change

- **Any network latency or storage performance challenges.** UKCloud monitors its estate to ensure that network and storage performance are in line with platform expectations. Any deviations are alerted to our technical teams to resolve.

Additionally, the service will also alert if a customer's journal exceeds 75% in size of the original VM. This alert is utilised to understand if the customer's solution is being protected adequately.

Journaling Protection only works for VM's currently on the platform -- it will only capture data whilst a VM is turned on. If a VM is deleted in vCloud Director -- Journaling Protection will IMMEDIATELY delete the associated journal.

### What SLA do you offer on snapshot success?

UKCloud do not offer an SLA around the VMs protected by UKCloud's Journaling Protection solution. However, the status of journaled VM's is monitored continuously, and the UKCloud support team investigates all failures or service degradation.

### Other

The service is not backed by service credits.

On occasion, planned maintenance may disrupt the operation of the Journaling Protection service. This may lead to the service being unavailable, or a temporary increase to the RPO a customer may be able to achieve on the platform.

If there's a potential disruption, we'll highlight this to you via the service [status page](http://status.ukcloud.com/) and UKCloud Portal notifications system.

## Journaling Protection management

Customers of the Journaling Protection service are able to self-manage their protected environment via the self-service portal. This portal allows customers to:

- Configure virtual protection groups

- Opt vApps into the VPGs

- Monitor the performance of their platform

- View the current RPO of their applications and current available history

- Perform test failovers

- Perform live failovers

UKCloud have disabled some areas of the self-service portal as they are for services we do not presently support. These include:

- Backup to external systems. At present, customers are unable to export their journal to external backup targets (such as UKCloud Cloud Storage). We have identified a compliance issue with this solution which we are working to address. Until this is addressed, the feature will remain unavailable.

Additionally, the following scenario cannot be supported:

- Organisation network IP subnets can only be different in the protected and recovery sites if IP Pool or DHCP address assignment is used in both sites. If manually assigned IPs are used in the protected site, the configured recovery organisation network on the recovery site must have the same IP subnet as on the protected site.

## Alerting and reporting

The self-service portal provides live real time reporting of your solution and the current level of protection being provided to your vApp.

The self-service portal will also provide customers with alerts should the target RPO of their VPG exceed the threshold, or the associated journal size grows beyond the expected size. In both these scenarios, UKCloud will also receive a platform monitoring alert and investigate the cause.

Additionally, the self-service portal provides visibility of an activity log of the actions against a particular VM and a list of any errors captured on the platform.

## Failover

The Zerto self-service portal allows customers the ability to failover to their recovery site.

When this is initiated, the Journaling Protection service will failover the VMs inside a vApp, restoring the data and state of the VMs to the desired point from inside the Journal. The Journaling Protection service can also replicate any internal networking rules.

The customer will need to manually configure:

- External networking configurations - including configuring VPNs and making any external firewall or DNS changes

- Check for application consistency

## Licensing

All licensing is provided by UKCloud. At present, customers cannot bring their own licensing.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
