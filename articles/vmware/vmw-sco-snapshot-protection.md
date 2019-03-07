---
title: Snapshot Protection Service Scope | UKCloud Ltd
description: Outlines important details regarding the Snapshot Protection service
services: vmware
author: Steve Hall
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Snapshot Protection Service Scope
toc_fullpath: Service Scope/vmw-sco-snapshot-protection.md
toc_mdlink: vmw-sco-snapshot-protection.md
---

# Snapshot Protection

## About this document

This document explains what is and isn't included in the scope of the Snapshot Protection service option.

Snapshot Protection is one of a variety of on‑platform protection options available from UKCloud. Use this service scope to understand Snapshot Protection and whether it will meet your own recovery point (RPO) or recovery time (RTO) objectives.

## About Snapshot Protection

UKCloud offers a choice of snapshot options that operate as a daily backup service for customers using our VMware‑based compute services.

You can choose from the following Snapshot Protection policies:

- 14‑day snapshot

- 28‑day snapshot

When you opt a virtual machine (VM) into a Snapshot Protection policy, the VM is added to a daily automated snapshot. The snapshot is of the entire VM running on your UKCloud for VMware service.

Data protected by the snapshot has an RPO of 24 hours. RTO is determined by the time taken to restore the VM after you've raised a service request.

Snapshot Protection is chargeable based on the number of VMs protected and the capacity utilised to store the data.

No protection products are automatically applied to VMs running on the UKCloud platform, therefore you must explicitly select the protection option that best meets your requirements.

## Frequency and timing

Snapshots are scheduled to occur once in a 24-hour period.

Snapshots take place 365 days of the year and are started inside the UKCloud‑defined window: 2000-0800. Snapshots are not started before 2000 or after 0800.

We cannot guarantee the time at which your VM will have a snapshot taken inside this window; the time may also vary from day to day. The time of a snapshot is reported via the UKCloud Portal the next day.

There's a system hard stop at 0900, at which time any active snapshots are cancelled.

### Success rate

We do not guarantee successful snapshots.

We can provide you with guidance on suitable candidates for Snapshot Protection (data change rate/size).

Large VMs of 2TiB+ with high change rates are not supported by Snapshot Protection, as the protection service will spend longer trying to establish what has changed and then attempt to back all of it up. Therefore, please contact your technical Account Manager if this scenario applies to one or more of your VMs.

VM snapshots may be attempted more than once to obtain successful status.

Only the final state will count in our calculations.

Any snapshots still in progress at 0900 are considered as failed.

Partial snapshots and those with errors count as failed.

### Reruns

We may attempt to rerun a failed snapshot inside the window, depending on the failure code.

We will not rerun snapshots outside the window.

### What SLA do you offer on snapshot success?

Automated VM snapshots don't include an SLA. You should be aware that snapshots may occasionally fail for a variety of reasons. The status of automated VM snapshots is monitored continuously, and the UKCloud support team investigates all failures.

It isn't always possible to rerun an automated VM snapshot, if this service doesn't meet your own protection requirements, we can also offer synchronous protection and journaling protection options.

If none of these services meet your requirements, you can also implement and manage your own protection solution.

The UKCloud Cloud Storage platform may be an appropriate target for self‑managed solutions using software such as CommVault and NetWorker.

### Other

The service is not backed by service credits.

On occasion, planned maintenance will take precedence over VM snapshots. If there's a potential disruption, we'll highlight this to you via the service [status page](http://status.ukcloud.com/) and UKCloud Portal notifications system.

## Snapshot management

You can make changes to your Snapshot Protection via the UKCloud Portal. You can:

- Opt VMs into Snapshot Protection

- Change the Snapshot Protection policy for a VM

- Opt VMs out of Snapshot Protection

- Set a default Snapshot Protection policy for a VDC

## Alerting and reporting

Information about your backups is reported on the UKCloud Portal. Reports are updated daily and are available by 1000, but typically within minutes of the close of the backup window.

Reports are available covering every day of the retention period (14 or 28 days as appropriate).

Alerting on individual VMs is not provided.

## Restores

### Timing and process

You can ask to restore a VM via a service request, which is subject to standard support SLA timescales.

Restores are performed outside of the backup window, unless a P1 incident is involved. You can find a definition of our support processes and severity categorisation in [*How to raise and escalate incidents and service requests*](../portal/ptl-how-raise-escalate-service-request.md).

### What you get

We'll instantiate a new VM. This will incur additional storage charges. However, we can also restore over the existing VM if desired.

We'll provide an image from a successful snapshot of your choice from within the policy length (that is, the last 14 or 28 days).

You'll need to make any necessary switchover/networking changes.

### Fair use policy

You can request up to four restores per month. If you request more than this, we will suggest a cloud architect investigate.

The total number of VMs (or disks) in a restore request should not exceed five.

## KPIs

We'll proactively investigate failures on the platform on the following triggers:

- Individual customer VM:

  - Two successive snapshot window failures

  - A failure of three snapshots in 14 days

- Platform:

  - More than 50 missed VMs (VMs that should be in policy, but have not     been backed up)

  - Less than 99% success rate for VM snapshot

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.