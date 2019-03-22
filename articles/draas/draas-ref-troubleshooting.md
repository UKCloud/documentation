---
title: Troubleshooting Disaster Recovery as a Service | UKCloud Ltd
description: This guide helps you get your Disaster Recovery to the Cloud service (powered by Zerto) up and running
services: draas
author: Dan Baker
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Troubleshooting Disaster Recovery to the Cloud
toc_fullpath: Reference/draas-ref-troubleshooting.md
toc_mdlink: draas-ref-troubleshooting.md
---

# Troubleshooting Disaster Recovery as a Service

## Overview

This guide describes some of the issues you may encounter when using UKCloud's Disaster Recovery to the Cloud service:

- [Starting a test failover takes a long time](#starting-a-test-failover-takes-a-long-time)

- [RPO alerts and bitmap syncing](#rpo-alerts-and-bitmap-syncing)

- [Recovery storage errors and journal size alerts during test failovers](#recovery-storage-errors-and-journal-size-alerts-during-test-failovers)

- [Test failover VMs do not perform as expected](#test-failover-vms-do-not-perform-as-expected)

> [!IMPORTANT]
> During the failover process, any change in the configuration or state of the live or failed‑over VMs (for example, power on or power off) will cause failure of the failover and may corrupt the VPG. This could make a full resync necessary and, in a disaster recovery situation, could prevent failover completely.

## Starting a test failover takes a long time

### Cause

When you initiate a failover, Zerto creates VMs in vCloud (referred to as testing recovery VMs) and then performs further tasks to provide the correct data for those VMs to boot from. VM creation and other operations in vCloud unavoidably take some time, therefore when performing a simultaneous failover of many VMs, it can take a while before the VMs are powered on and ready for use.

Zerto automatically powers on the testing recovery VMs when it has completed the operations necessary to make the correct data available to the VMs. Powering on a VM prematurely will cause it to be corrupted and will impact live replication. Additionally, manually powering-off a testing recovery VM will cause live replication to stop; testing recovery VMs must remain powered on for the duration of the test failover.

### Solution

If you're failing over many VMs simultaneously, you should anticipate that it will take some time before the VMs are powered on and ready for use.

> [!IMPORTANT]
> Do **not** manually power on or power off recovery VMs during a failover. Doing so will corrupt the VPG.

## RPO alerts and bitmap syncing

### Cause

Some application and database servers have a high change rate. Limited VPN bandwidth from the on-premises sites means that often changes to the live VMs occur faster than the rate of replication.

### Solution

We recommend that, unless there are specific reasons otherwise, you set the priority of your Disaster Recovery to the Cloud VPGs to Medium to ensure the necessary VPN bandwidth. You can set the priority of VPGs for which a short RPO is essential to High, however, this will cause the other VPGs to have a higher RPO.

If your environment includes virtual disks that are used purely as log or temporary file systems, you can designate these disks as Temp Disks. This will mean that the data is synced during the initial sync (to bring over the partitioning/formatting), but ongoing changes that that disk will not be replicated. This can reduce the WAN bandwidth required to keep acceptable RPOs. This will also prevent rapidly changing transaction log file systems from filling up the journal. However, you should carefully consider and test this configuration to make sure that this data is not required in a disaster recovery situation.

## Recovery storage errors and journal size alerts during test failovers

### Cause

Due to the way that testing recovery VMs are instantiated, Zerto is unable to flush the oldest journal entries into the base recovery disks while a test failover is in progress. This means that the journal size continuously grows while the test failover is in progress, at a rate dependant on the change rate of the live VM. This will cause alerts when the journal reaches 75% of its maximum size.

When the journal reaches 100% of its maximum size, replication of the live VM stops since there is nowhere to place new checkpoints. At this point, the VPG will show a state of **Recovery Storage Error** and will be required to perform a lengthy sync when the test failover is stopped.

### Solution

If it is essential that the journal is continuous, then you should avoid long failover tests, or make arrangements for the live applications to be shut down or quiesced during the failover test. Additionally, you will see **Recovery Storage Error** and other transient errors in the Zerto console while a test failover is in the process of starting; you can ignore these in all cases.

## Test failover VMs do not perform as expected

### Cause

Testing recovery VMs (and live failed-over VMs before they are committed) do not run from normal virtual disks. To remove the need to fully clone all data, when Zerto does a test failover (or a live failover before committing) it creates a simulated view onto the VM's disks at the checkpoint time you select. All reads from the disks are intercepted by Zerto's ESXi kernel driver and then processed with reference to the journal to ensure that the correct data for that checkpoint's point-in-time is returned. Additionally, any writes made to the testing recovery VM are diverted to a temporary file. While the test failover is in progress, Zerto is unable to flush the oldest journal checkpoints into the base VMDK disks in order to preserve the integrity of the replicated base disks and journals.

### Solution

Zerto test failovers are intended to give confidence that the data on the VM disks is being correctly replicated. We recommend that you should not use test failover VMs for detailed application testing for the following reasons:

- If the test failover goes on too long, new changes from the live VM will cause the journal to fill, halting replication of the live VM 

- A large volume of writes to the testing recovery VMs will cause those VMs to fail

- Storage performance of the testing recovery VMs is very poor, potentially up to 50% slower than native performance

These issues are also applicable to live failovers that have not yet been committed. When the commit operation is completed, the resulting VMs are running from normal VMDK files and are no longer subject to these problems.

When performing a live failover, we recommend that:

- You stop the applications on the on-premises site VMs before triggering the failover. This ensures that the application state is consistent at the point of failover and will avoid Recovery Storage Errors due to the journal filling while the VPG is in a live Failover Before Commit state.

- Do not perform any application testing on the failed-over VMs that might cause too much new data to be written to the VM's disks before commit.

- If possible, you should complete the commit operation before the failed-over VMs serve production workloads.

Additionally, you should consider the following during a live failover:

- We do not recommend the use of auto commit; this option causes the commit to occur automatically after the failover is initiated.

- Do not enable reverse replication unless you fully understand all the potential implications of doing so. Enabling reverse replications causes the VMDK disks of the source VMs to be altered to seed the reverse replication.

- The VPGs in Zerto enter a Needs Configuration state after the failover is committed. We recommend that you delete the VPGs from Zerto at this stage to ensure reverse replication cannot be configured accidently. If reverse replication isn't enabled, the source VMs will remain untouched (even post-commit).

It's likely that the live failover (excluding the commit operation) will take a similar length of time as a test failover. The commit operation converts the failed-over VMs into normal vCloud VMs not subject to the limitations inherent to test failover (or live failover before commit) VMs. The commit operation is performed while the VMs (on the UKCloud side) remain running and will take several hours (dependant on the size and change-rate of the live VM).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
