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

To create an affinity or anti-affinity rule:

1. Log in to the UKCloud Portal.

    For more detailed steps, see the [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)

2. Select the account to which the VMs belong.

3. Click **My VMs**.

    ![My VMs on the Portal home page](images/myvms.png)

4. Click the compute service to which the VMs belong.

5. On the *vCloud Director* tab, enter your password and then click **Confirm**.

    ![vCloud Director login](images/vmw-portal-vcd-login.png)

6. Click **Administration**.

    ![Administration tab in vCloud Director](images/vmw-vcd-tab-admin.png)

7. Right-click the VDC that you want to work with and select Open.

8. Select the *Affinity Rules* tab.

    ![Affinity Rules tab](images/vmw-vcd-tab-affinity.png)

9. To create an affinity rule, click the **+** icon in the *Affinity Rules* section.

    To create an anti-affinity rule, click the **+** icon in the *Anti-Affinity Rules* section.

    ![Add Affinity Rule and Add Anti-Affinity Rule icons](images/vmw-vcd-ico-add-affinity-rule.png)

10. In the *Add Affinity Rule* or *Add Anti-Affinity Rule* dialog box, enter a **Rule Name**.

11. In the search box, enter the name of a VM that you want to add to the rule.

12. Select the VM and click the **Add** button.

13. Add more VMs as required.

14. If you don't want the rule to take effect immediately, deselect the **Enabled** check box.

    You can edit the rule later to enable it when you're ready.

    ![Add Affinity Rule dialog box](images/vmw-vcd-add-affinity-rule.png)

15. When you're done, click **OK**.

16. If you selected the **Enabled** check box, the affinity or anti-affinity rule is applied and the selected VMs are redistributed as required to meet the conditions of the rule.

## Next steps

For more information about UKCloud for VMware see the [*Getting Started Guide for UKCloud for VMware*](vmw-gs.md)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.