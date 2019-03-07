---
title: Disaster Recovery as a Service Service Scope | UKCloud Ltd
description: outlines important details regarding the Disaster Recovery to the Cloud service
services: draas
author: Steve Hall
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Disaster Recovery as a Service Service Scope
toc_fullpath: Service Scope/draas-sco.md
toc_mdlink: draas-sco.md
---

# Disaster Recovery as a Service Service Scope

# About this document

This document explains what is and isn't included in the scope of our Disaster Recovery as a Service service.

Disaster Recovery as a Service provides a seamless way to failover from your own data centre to the UKCloud for VMware service. You can use this service as part of your own business continuity or disaster recovery processes.

With this service, you're charged for the amount of data that you're protecting and are only charged for VMs when they are powered on during a live or test failover.

## About Disaster Recovery as a Service

Disaster Recovery as a Service is a powerful, self-service replication and recovery tool that can improve organisational resilience and enable seamless migration of applications between your local VMware or Hyper-V powered data centre and UKCloud's disaster recovery enabled regions. This means that, in the event of a VM being compromised such as a local hardware failure, a power outage or security incidents such as theft or WAN connectivity disruption, you can quickly recover your VMs to the UKCloud platform and ensure that the disruption to your service is minimised.

Once configured, you can protect VMs by adding them to a virtual protection group (VPG). Each VM in the VPG is synchronised to your recovery site on UKCloud, and a journal is created. After this initial sync, each subsequent write operation to the VM is processed as normal on your site and a copy is asynchronously sent to the recovery site and written to the journal.

When the specified journal history length is reached (for example, 14 days), as new journal entries are created, older entries are written to the recovery VM's virtual disks.

Every few seconds, a checkpoint is written to every journal for each VM in the VPG to ensure crash-consistency between the VMs. If you need to recover your VMs, you select a checkpoint to recover to. For example, in the case of a virus you could recover to a checkpoint from before the virus attack.

During recovery, the VMs are created on the recovery site and the recovery disks for each VM are attached to the recovered VM. Information in the journal is then promoted to the VM to bring it up to the date and time of the selected checkpoint.

Note that each VPG recovered into the recovery site will appear as a vApp within UKCloud.

## Customers Responsibilities

Given the nature of this service, with part of the solution hosted on your site, you are responsible for the following:

- Your environment must meet the minimum specification required by the solution (that you can find [here](draas-gs.md#system-requirements)). This covers software versions, limitations around the types of VMs that can be protected and the minimum WAN connectivity speeds

- Installation and configuration of Zerto components including the ZVM (Zerto Virtual Manager) and ZRA (Zerto Replication Appliance)

- Creation of a VPN to connect to UKCloud

- Ensuring that the local instances of Zerto are upgraded to remain compatible with the current version utilised by UKCloud. You will be notified via the notifications section on the UKCloud Portal when the version is upgraded on the UKCloud platform

- Local network tuning and firewall configurations

We'll work with you to help you identify if any issues encountered are within your estate or on the UKCloud platform.

You are responsible for troubleshooting issues within your own estate.

If you require support managing your local Zerto installation, we have a wide ecosystem of partners that can assist.

## Frequency and timing

UKCloud's Disaster Recovery as a Service is designed to provide recovery points that are as little as seconds behind the running VM.

Our standard profile provides:

- Target RPO of 5 minutes

- Journal history of 2, 7, 14 or 28 days

At present, we've not enabled the ability for you to configure custom profiles.

If the target RPO is exceeded, you and UKCloud will be notified via the Zerto Self-Service Portal.

Factors that can affect the RPO are:

- **Rate of change of the data on a VM.** VMs with a large rate of change in the data will potentially achieve a slightly longer RPO than VMs that have a lower rate of change

- **Any network latency or storage performance challenges.** We monitor our estate to ensure that network and storage performance are in line with platform expectations. Any deviations are alerted to our technical teams to resolve.

- **WAN network performance.** Low throughput WAN connections are unlikely to be able to transfer large amounts of data to UKCloud. This can make initial sync challenging for larger VMs.

Additionally, the service raises an alert if the size of a VM's journal exceeds 75% of the original VM. This alert helps to understand if your solution is adequately protected.

Disaster Recovery as a Service captures data only while a VM is powered on. If a VM is deleted in vCloud Director, it will IMMEDIATELY delete the associated journal.

### What SLA do you offer on Disaster Recovery as a Service?

We don't offer an SLA around the VMs protected by our Disaster Recovery as a Service. However, the status of VMs is monitored continuously, and the UKCloud support team investigates all failures or service degradation.

### Other

The service is not backed by service credits.

On occasion, planned maintenance may disrupt the operation of the Disaster Recovery as a Service. This may lead to the service being unavailable, or a temporary increase to the RPO you may be able to achieve on the platform.

If there's a potential disruption, we'll highlight this to you via the service [status page](http://status.ukcloud.com/) and UKCloud Portal notifications system.

## Disaster Recovery as a Service management

You can self-manage your protected environment via the Zerto Self-Service Portal. This portal enables you to:

- Configure virtual protection groups

- Opt VMs into the VPGs

- Monitor the performance of your platform

- View the current RPO of your applications and current available history

- Perform test failovers

- Perform live failovers

We've disabled some areas of the Zerto Self-Service Portal as they're for services we don't presently support. These include:

- Backup to external systems. At present, you cannot export your journal to external backup targets (such as UKCloud Cloud Storage). We've identified a compliance issue with this solution which we're working to address. Until this is addressed, the feature will remain unavailable.

Additionally, the following scenarios cannot be protected:

- VMs with virtual disks with individual disks greater than 3TB

- VMs which are clustered using shared virtual disks

## Alerting and reporting

The Zerto Self-Service Portal provides live real-time reporting of your solution and the current level of protection being provided to your VMs.

The portal also raises alerts if the target RPO of your VPG exceed the threshold, or if the associated journal size grows beyond the expected size. In both these scenarios, UKCloud also receives a platform monitoring alert and will investigate the cause.

Additionally, the portal provides an activity log of the actions against a particular VM and a list of any errors captured on the platform.

## Failover

The Zerto Self-Service Portal enables you to failover to your recovery site.

When this is initiated, Disaster Recovery as a Service fails over the VMs inside a VPG, restoring the data and state of the VMs to the desired point from the journal. Disaster Recovery as a Service can also replicate any internal networking rules.

You need to:

- Manually configure external networking configurations, including configuring VPNs and making any external firewall or DNS changes

- Check for application consistency

## Licensing

UKCloud provides licensing for VMs protected by Zerto that utilise UKCloud as their recovery site. At present, you cannot bring your own licensing.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.