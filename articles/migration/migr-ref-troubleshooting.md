---
title: Troubleshooting Migration to the Cloud | UKCloud Ltd
description: This article describes some of the issues you may encounter when using UKCloud's Workload Migration to the Cloud service (powered by Zerto)
services: migration
author: Dan Baker
toc_rootlink: Troubleshooting
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Troubleshooting Migration to the Cloud
toc_fullpath: Troubleshooting/migr-ref-troubleshooting.md
toc_mdlink: migr-ref-troubleshooting.md
---

# Troubleshooting Migration to the Cloud (powered by Zerto)

## Overview

This guide describes some of the issues you may encounter when using UKCloud's Workload Migration to the Cloud service:

- [Starting a test failover takes a long time](#starting-a-test-failover-takes-a-long-time)

- [RPO alerts and bitmap syncing](#rpo-alerts-and-bitmap-syncing)

- [Recovery storage errors and journal size alerts during test failovers](#recovery-storage-errors-and-journal-size-alerts-during-test-failovers)

- [Test failover VMs do not perform as expected](#test-failover-vms-do-not-perform-as-expected)

- [Live failover does not perform the same as test failover](#live-failover-does-not-perform-the-same-as-test-failover)

> [!IMPORTANT]
> During the failover process, any change in the configuration or state of the live or failed‑over VMs (for example, power on or power off) will cause failure of the failover and may corrupt the VPG. This could make a full resync necessary.

## Starting a test failover takes a long time

### Cause

When you initiate a test failover, Zerto creates VMs in vCloud (referred to as testing recovery VMs) and then performs further tasks to provide the correct data for those VMs to boot from. VM creation and other operations in vCloud unavoidably take some time, therefore when performing a simultaneous failover of many VMs, it can be a while before the VMs are powered on and ready for use.

Zerto automatically powers on the testing recovery VMs when it has completed the operations necessary to make the correct data available to the VMs. Powering on a VM prematurely will cause it to be corrupted and will impact live replication. Additionally, manually powering-off a testing recovery VM will cause live replication to stop; testing recovery VMs must remain powered on for the duration of the test failover.

### Solution

If you're failing over many VMs simultaneously, you should anticipate that it will take some time before the VMs are powered on and ready for use.

> [!IMPORTANT]
> Do **not** manually power on or power off recovery VMs during a failover. Doing so will corrupt the VPG.

## RPO alerts and bitmap syncing

### Cause

Some application and database servers have a high change rate. Limited VPN bandwidth from the on-premises sites means that often changes to the live VMs occur faster than the rate of replication.

### Solution

For workload migration, the increased recovery point objecting (RPO) is not a concern.

We recommend that, unless there are specific reasons otherwise, you set the priority of your Workload Migration to the Cloud VPGs to Medium to ensure that all VPGs replicate fairly compared to each other.

## Recovery storage errors and journal size alerts during test failovers

### Cause

Due to the way that testing recovery VMs are instantiated, Zerto is unable to flush the oldest journal entries into the base recovery disks while a test failover is in progress. This means that the journal size continuously grows while the test failover is in progress, at a rate dependant on the change rate of the live VM. This will cause alerts when the journal reaches 75% of its maximum size.

When the journal reaches 100% of its maximum size, replication of the live VM stops since there is nowhere to place new checkpoints. At this point, the VPG will show a state of **Recovery Storage Error** and will be required to perform a lengthy sync when the test failover is stopped.

### Solution

For workload migration, the gaps in replication that result from this problem may be acceptable, so it is likely that you can ignore these alerts during test failovers. Additionally, you will see **Recovery Storage Error** and other transient errors in the Zerto console while a test failover is in the process of starting; you can ignore these in all cases.

## Test failover VMs do not perform as expected

### Cause

Testing recovery VMs (and live failed-over VMs before they are committed) do not run from normal virtual disks. To remove the need to fully clone all data, when Zerto does a test failover (or a live failover before committing), it creates a simulated view onto the VM's disks at the checkpoint time you select. All reads from the disks are intercepted by Zerto's ESXi kernel driver and then processed with reference to the journal to ensure that the correct data for that checkpoint's point-in-time is returned. Additionally, any writes made to the testing recovery VM are diverted to a temporary file. While the test failover is in progress, Zerto is unable to flush the oldest journal checkpoints into the base VMDK disks in order to preserve the integrity of the replicated base disks and journals.

### Solution

Zerto test failovers are intended to give confidence that the data on the VM disks is being correctly replicated. We recommend that you should not use test failover VMs for detailed application testing for the following reasons:

- If the test failover goes on too long, new changes from the live VM will cause the journal to fill, halting replication of the live VM

- A large volume of writes to the testing recovery VMs will cause those VMs to fail

- Storage performance of the testing recovery VMs is very poor, potentially up to 50% slower than native performance

These issues are also applicable to live failovers that have not yet been committed. When the commit operation is completed, the resulting VMs are running from normal VMDK files and are no longer subject to these problems.

When performing a live failover, we recommend that:

- You stop the applications on the on-premises site VMs before triggering the failover. This ensures that the application state is consistent at the point of failover and will avoid Recovery Storage Errors due to the journal filling while the VPG is in a live Failover Before Commit state.

- Do not perform any application testing on the failed-over VMs that might cause too much new data to be written to the VM's disks before commit.

- Plan to complete the commit operation during the outage window for the migration.

Additionally, you should consider the following during a live failover:

- We do not recommend the use of auto commit; this option causes the commit to occur automatically after the failover is initiated.

- Do not enable reverse replication unless you fully understand all the potential implications of doing so. Enabling reverse replication causes the VMDK disks of the source VMs to be altered to seed the reverse replication.

- The VPGs in Zerto enter a Needs Configuration state after the failover is committed. We recommend that you delete the VPGs from Zerto at this stage to ensure reverse replication cannot be configured accidently. If reverse replication isn't enabled, the source VMs will remain untouched (even post-commit) to serve as a worst-case recovery option if the migration doesn't go to plan.

It's likely that the live failover (excluding the commit operation) will take a similar length of time as a test failover. The commit operation converts the failed-over VMs into normal vCloud VMs not subject to the limitations inherent to test failover (or live failover before commit) VMs. The commit operation is performed while the VMs (on the UKCloud side) remain running and will take several hours (dependant on the size and change-rate of the live VM).

## Live failover does not perform the same as test failover

### Cause

In the current version of Zerto, live failovers typically take longer to start that test failovers. Also, features such as guest customization behave differently during a live failover.

### Solution

Before a migration, we recommend that you trigger a live failover as a practice ahead of time so that you can accurately predict timescales and behaviour. When you can confirm that the failed-over VPGs are in a **Failover Before Commit** state, you should roll back this failover (rather than commit it). If **Shutdown [live] VMs** and **Auto Commit** are not selected (and you do not manually commit the failover), the practice failover should not affect live VMs. In all cases, you should take care to understand any networking implications of performing a practice live failover ahead of time.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.