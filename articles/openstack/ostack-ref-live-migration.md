---
title: OpenStack live migrations
description: Describes the process for performing live migrations to enable maintenance activity on OpenStack hypervisor servers
services: openstack
author: Sue Highmoor
reviewer:
lastreviewed: 09/04/2019 10:21:32

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Live migrations
toc_fullpath: Reference/ostack-ref-live-migration.md
toc_mdlink: ostack-ref-live-migration.md
---

# OpenStack live migrations

## Overview

OpenStack utilises virtualisation technology where several virtual instances (sometimes also known as virtual machines or VMs) run on physical servers. These physical servers run software that enables them to be hypervisors, allowing them to run many virtual servers.

For a more detailed description of virtualisation, see <https://en.wikipedia.org/wiki/Virtualization>. Many other resources exist on the internet explaining the concept of virtualisation.

## Planning maintenance activity

When performing maintenance activity on a hypervisor server, it's best practice to migrate all the instances running on that server to another one so the activities on the server being worked on don't affect those instances. After this migration process, the instances that were running on the original hypervisor server will now be running on a different server.

Within each OpenStack region on the UKCloud platform, we have several hypervisor servers providing the UKCloud for OpenStack service. The process of live migration moves a running instance seamlessly from one hypervisor server to another, meaning that the instances can continue running without any interruption to service. When all the instances have been moved onto different hypervisor servers, then maintenance can take place on the original hypervisor server safely (including reboot of the physical server, and so on).

The act of performing the live migration may slow down an instance's performance during the period when it is being migrated due to the need to copy the data on the instance to another hypervisor server.

In some types of virtualisation environment, and depending on configurations, it's possible for instances to migrate themselves to other servers, but in OpenStack this has to be done manually by an administrator (UKCloud employee) in the region.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
