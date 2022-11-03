---
title: OpenStack region migration tooling
description: Explains the tooling that UKCloud can provide to assist with customer migrations.
services: openstack
author: srelf
reviewer: bbramble
lastreviewed: 18/08/2021
toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenStack region migration tooling
toc_fullpath: Reference/ostack-ref-migrations.md
toc_mdlink: ostack-ref-migrations.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# UKCloud region migration tooling

If you need to migrate your OpenStack workloads to a different UKCloud region, you can use our [Hystax Acura Workload Migration](ostack-sco-hystax.md) service for the migration of instances and storage. Other items that make up your OpenStack projects, such as networks, security groups and routers, will need to be created manually in the destination region. UKCloud is working on a set of migration helper scripts to help you quickly and easily create the required infrastructure in the destination project.

To see the currently available scripts, go to our public [GitHub repository](https://github.com/UKCloud/openstack-migration-helper-scripts).

## Related articles

The process for migrating instances and volumes is covered in [_How to migrate workloads on OpenStack using Hystax Acura_](ostack-how-use-hystax.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
