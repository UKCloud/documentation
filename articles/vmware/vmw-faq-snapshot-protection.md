---
title: Snapshot Protection FAQs
description: Frequently asked questions for Snapshot Protection
services: vmware
author: Matt Warner
reviewer: George Smith
lastreviewed: 23/10/2019 16:00
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Snapshot Protection FAQs
toc_fullpath: FAQs/vmw-faq-snapshot-protection.md
toc_mdlink: vmw-faq-snapshot-protection.md
---

# Snapshot Protection FAQs

## General

### What is a protection technology?

Protection technologies are tools used to enable you to design resilience into your cloud solutions.

They protect data and provide you with the ability to recover from system outages - either caused by a disruption to the physical delivery of a service or a result of a corruption of your primary system.

### What protection options does UKCloud offer?

By default, VMs deployed on the UKCloud platform do not come with any protection services enabled.

However, you can opt to utilise one of the platform based protection technologies, such as:

- Snapshot protection - automatically takes an image of your VM every 24 hours and stores the image outside the core platform

- Journaling protection - creates an almost live copy of your VM and records the VM data and state in a data journal

Additionally, you can implement your own protection technologies.

Utilising our Cloud Storage service, you can keep secondary copies of your data by:

- Manually copying data

- Using scripts to copy data

- Using backup applications such as CommVault, Networker and others.

You can replicate data between sites for even greater data protection.

### Can I use my own protection client software?

Yes, you simply install appropriate backup software within the VM and specify the backup location.

A typical scenario might involve using a commercial backup solution (such as Symantec NetBackup, CommVault or EMC NetWorker) that points to services such as our Cloud Storage.

## Snapshot protection

### How does snapshot protection work?

An automated VM snapshot creates a crash‑consistent snapshot of the VM, which is then copied to our dedicated backup system.

### How do I add snapshot protection to my VM?

Use the UKCloud Portal to add snapshot protection to a VM:

1) Login to the UKCloud Portal and choose the appropriate account.

2) In the dashboard, click **My VMs**, then click the appropriate vOrg.

3) Click the **My VMs** tab.

4) Choose the appropriate VDC then click the **VMs** tab.

5) In the **Snapshot Protection** column, click the **Manage** button.

6) From the **Select Backup Policy** list, choose the policy level that you require: **14‑day** or **28‑day**, then click **Submit**.

    The button changes to indicate your chosen policy.

7) You can also remove a VM from automated backups by choosing **No Backup** from the **Select Backup Policy** list.

### How long does it take before the first snapshot is taken?

The time it takes to add snapshot protection to a VM varies depending on how many other requests are in the queue. While the request is processed, the button in the **Snapshot Protection** column changes to an amber **Processing** button.

When the process has completed, the button changes back to green and will indicate the snapshot policy you chose for the VM (**14‑day** or **28‑day**). If the process fails, the button changes to a red **Failed** button. In this situation, contact the UKCloud support team to resolve the issue.

The first snapshot will be taken in the next available backup window. Backup status information is typically updated daily on the UKCloud Portal by 10:00, but typically within minutes of the close of the backup window.

### Can I change the snapshot policy for my VM at any time?

Yes, there are no restrictions. After your changes have been processed, they will be applied to the snapshot taken in the next backup window.

### How are my automated VM snapshots restored?

If you have access to the support ticketing system, you can request restoration of VMs.

We'll restore the whole VM image to your virtual data centre (VDC). You can then manage the restoration of individual files or the whole VM.

### Do automated VM snapshots include my VDC configuration?

Configuration of VDC items such as virtual firewalls, load balancers and virtual networks are backed up at a platform level, and cannot be restored on a per‑customer basis.

You can create an individual backup of these items via the vCloud API.

### What is the automated VM snapshot frequency?

Once every 24 hours.

### How long can I store a backup?

Data is stored for 14 or 28 days, depending on the retention policy you choose.

### Can I set my own schedules?

We do not currently support custom schedules.

### Can I snapshot a VM on demand?

Not with the UKCloud automated VM snapshot service.

If you need to snapshot autonomously, you can install your own protection service and use our Cloud Storage service.

### Is the automated VM snapshot backup full or incremental?

We take a full automated backup of the VM.

### Can I recover individual files using UKCloud's automated VM snapshot backup?

To restore individual files, you need to extract them from the whole VM image that we restore to a new VM. You can access the new VM, find the data you want and transfer it to the original VM. Standard charges will be incurred for the temporary VM.

### Can I set a global policy for all VMs within a VDC?

Yes. You can apply the global policy to new VMs created in the VDC or to all new and existing VMs.

For the steps required to do this, see [*How to manage Snapshot Protection for your VMs*](vmw-how-manage-snapshot-protection.md).

### Can I change the snapshot retention policy for a VM?

Yes, you can use the UKCloud Portal to change the snapshot retention policy.

For the steps required to do this, see [*How to manage Snapshot Protection for your VMs*](vmw-how-manage-snapshot-protection.md).

### What type of data is the automated VM snapshot backup solution suitable for?

The service is suitable for data certified as OFFICIAL and OFFICIAL-SENSITIVE and is available on both UKCloud platforms: Assured OFFICIAL (formerly IL2) and Elevated OFFICIAL (formerly IL3).

### Do large VMs affect snapshot backups?

For regions 1, 2, 7 or 8, large VMs (2 TiB+) with high change rates are not recommended for Snapshot Protection, as the service will spend longer trying to establish what has changed and then attempt to back all of it up. You should take an alternative backup approach with VMs of this size.

For regions 5 or 6, you can use Snapshot Protection for large VMs. However, you should still consider the impact of recovery time for large VMs.

### Can I restrict the automated VM snapshot backup to specific files or directories?

No, this is not currently possible. You can implement your own protection solution if this is a requirement.

### Where is the protected data stored?

By default, all snapshot backups are stored in the opposite site from the one that the VM is running in; so a VM running in Farnborough stores its snapshot in Corsham.

You cannot presently request a preference to change the location.

### What SLA do you offer on snapshot backup success?

There's currently no SLA associated with the snapshot backup service, although it is monitored 24x7.

### How do I restore data?

You can request restoration of VMs only if you have access to the support ticketing system.

To restore data, administrators can access the UKCloud Portal and, using [My Calls](https://portal.skyscapecloud.com/support/ivanti), create a support ticket stating the VM and the backup schedule they want to restore. UKCloud operations then complete this task, restoring the entire VM image.

### How quickly can you restore a VM?

The larger the VM, the longer the restore time:

- When restoring over the existing VM, restore times are reduced by the use of change block tracking.

- When restoring alongside an existing service, data restoration must start from scratch. Depending on the size of the VM, this can take many hours.

### Do I need to install any software on my VMs?

The automated VM snapshot backup works directly with the cloud platform to capture the entire VM, so there is no need to install any software within the VM.

If you prefer an application‑consistent backup (rather than a crash‑consistent backup), we recommend that you install VM tools and configure appropriate pre-backup and post-backup scripts.

### If a VM is deleted, how long will existing snapshot backups be retained?

The UKCloud platform automates the deletion of backups as they reach their retention date. Therefore, 14 or 28 days after the VM is deleted, depending on your chosen profile, the last snapshot backup will automatically be removed from the platform and consequently be unavailable for restore.

### How and when am I notified of snapshot backup failures?

Backup information, including failures, is updated daily on the UKCloud platform by 10:00, but typically within minutes of the close of the backup window.

For the steps required to access the status of a VM's snapshot backup, see [*How to manage Snapshot Protection for your VMs*](vmw-how-manage-snapshot-protection.md).

Note that we do not presently provide real-time alerting on individual VMs.

### What is the process for dealing with failures?

UKCloud's internal monitoring tools provide us with advanced warnings regarding any backup failures.

The UKCloud support team receives a daily report of snapshot backup failures. We'll raise a service ticket on your behalf and proactively investigate with you when:

- Any VM has a failure count of more than two

- Three or more VMs within the same VDC fail within 14 days

### What does the proactive investigation consist of?

UKCloud's proactive corrective measures depend on the nature of the snapshot backup failures, but will generally follow this outline:

- We evaluate snapshot backup failures and look for emerging patterns.

- In the case of a repetitive failure, we'll raise a service request on your behalf.

- We'll conduct an investigation into the snapshot backup failure, and take appropriate mitigation steps.

- Should the failure persist, we may suggest a customer review to try to resolve the issue.

    If we identify that the snapshot backup service is incompatible with your application and intended usage, we'll recommend a session with a Service Delivery Manager or solution architect to work through alternative protection options.

### How and when are reruns scheduled?

Backups are attempted during the hours of 20:00 and 08:00.

A backup will not be reattempted in the same backup window, but will be included as normal in the next window.

If a snapshot backup attempt is returned as a failure this will be reported to the UKCloud support team, and any remedial actions will be in place for the backup attempt in the next window.

### How is the automated VM snapshot backup service charged?

The service is charged on a per VM basis based on:

- The size of the VM you are backing up

- The amount of additional data you are backing up

- The length of time those backups are held

### When I disable snapshot protection on my VM, will billing immediately stop?

Billing stops immediately and you will no longer be charged regardless of the chosen retention period. In addition, you will no longer have access to any snapshots taken. 

### If I have an existing VDC that includes snapshot protection, is protection automatically added to any new VMs I create?

Yes, if the service level of your VDC includes snapshot protection (either selected for an Essential, Power or Priority VM or the former "STANDARD" or "ENHANCED"), that protection is automatically applied to any VMs you create within that VDC. You can still use the self‑service backup functionality within the UKCloud Portal to remove snapshot protection from a VM or change the retention policy without having to raise a Service Request.

### Can I set retention policies at a VDC level?

Yes, you can set retention polices at a VDC level, meaning that all VMs within the VDC will inherit the retention policy set.

### What happens if I add VMs to a VDC that has a defined retention policy?

All VMs that are created once a VDC policy is set will be automatically added into the protection policy. If you decide to change the VDC policy, you can choose to apply the new policy to ALL existing VMs in the VDC. Further details can be found in the [Snapshot Protection Service Scope](vmw-sco-snapshot-protection.md) and guidance on how to apply protection to VMs and VDCs can be found in the [*How to manage Snapshot Protection for your VMs*](vmw-how-manage-snapshot-protection.md).

### Are Snapshot policies automatically applied to VMs?

Protection products are not automatically applied to VMs running on the UKCloud platform, therefore you must explicitly select the protection option that best meets your requirements.

## Feedback


If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
