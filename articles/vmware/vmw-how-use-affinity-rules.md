---
title: How to use affinity and anti-affinity rules | UKCloud Ltd
description: Describes how to use affinity and anti-affinity rules to control the movement of VMs around the UKCloud platform
services: vmware
author: Sue Highmoor
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use affinity and anti-affinity rules
toc_fullpath: How To/vmw-how-use-affinity-rules.md
toc_mdlink: vmw-how-use-affinity-rules.md
---

# How to use affinity and anti‑affinity rules

## Overview

Affinity and anti-affinity rules determine whether or not VMs are kept together as they are moved around within your environment.

- Affinity rules keep VMs together on the same host

- Anti-affinity rules ensure that VMs are distributed across different hosts

For example, if it is important that your application has very low latency, you can create affinity rules to make sure that the application's VMs are always kept on the same host. If you want your application to be robust in the event of host failures, you can create anti-affinity rules to spread the VMs across multiple hosts.

> [!IMPORTANT]
> Excessive use of affinity and anti-affinity rules can cause unpredictable VM and platform performance issues. For example, VMs involved in rules may have an increased likelihood of migrating between hosts simultaneously. Adding a large number of VMs to an affinity rule may cause performance issues if all of the VMs become busy simultaneously. An anti-affinity rule with a large number of VMs may not be honoured if the platform is unable to place the VMs on separate hosts.
>
> UKCloud reserves the right to disable or disregard rules if required for maintenance or platform management.

### Intended audience

To complete the steps in this guide you must have access to the UKCloud Portal and vCloud Director.

## Creating an affinity or anti-affinity rule

> [!NOTE]
> You cannot create affinity or anti-affinity rules in the new vCloud Director 9.1 tenant portal. If your environment uses vCloud Director 9.1, you must first switch to the vCloud Director web console. For more information, see [*How to switch to the vCloud Director web console from the tenant portal*](vmw-how-switch-web-console.md).

To create an affinity or anti-affinity rule:

1. In vCloud Director, click **Administration**.

    ![Administration tab in vCloud Director](images/vmw-vcd-tab-admin.png)

2. Right-click the VDC that you want to work with and select Open.

3. Select the *Affinity Rules* tab.

    ![Affinity Rules tab](images/vmw-vcd-tab-affinity.png)

4. To create an affinity rule, click the **+** icon in the *Affinity Rules* section.

    To create an anti-affinity rule, click the **+** icon in the *Anti-Affinity Rules* section.

    ![Add Affinity Rule and Add Anti-Affinity Rule icons](images/vmw-vcd-ico-add-affinity-rule.png)

5. In the *Add Affinity Rule* or *Add Anti-Affinity Rule* dialog box, enter a **Rule Name**.

6. In the search box, enter the name of a VM that you want to add to the rule.

7. Select the VM and click the **Add** button.

8. Add more VMs as required.

9. If you don't want the rule to take effect immediately, deselect the **Enabled** check box.

    You can edit the rule later to enable it when you're ready.

    ![Add Affinity Rule dialog box](images/vmw-vcd-add-affinity-rule.png)

10. When you're done, click **OK**.

11. If you selected the **Enabled** check box, the affinity or anti-affinity rule is applied and the selected VMs are redistributed as required to meet the conditions of the rule.

## Next steps

For more information about UKCloud for VMware see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.