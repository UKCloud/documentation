---
title: Oracle licensing on the UKCloud platform
description: Outlines the licensing options for customers wanting to use Oracle on the UKCloud Platform
services: oracle
author: Sue Highmoor
reviewer: bchallis
lastreviewed: 31/10/2019
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Oracle licensing on the UKCloud platform
toc_fullpath: Reference/orcl-ref-licensing.md
toc_mdlink: orcl-ref-licensing.md
---

# Oracle licensing on the UKCloud platform

## Overview

Due to the licensing rules regarding Oracle, it is not possible to install and run processor-based Oracle software on UKCloud for VMware, UKCloud for OpenStack or UKCloud for Microsoft Azure. However, you can use UKCloud for Oracle Software to run Oracle applications and databases. This is a solution specifically designed using Oracle VM hypervisor technology to enable Oracle licensing to be used correctly. It is also financially efficient as you only need to license software for resources used.

However, you still need to be mindful of Oracle licensing when using UKCloud for Oracle Software. UKCloud can resell all Oracle software and support contracts and can provide advice where required to help.

> [!IMPORTANT]
> Licensing rules from vendors such as Oracle can change frequently, so you should validate your specific requirements with Oracle at the time of ordering. The information in this article is correct as of November 2019.

If you want to license Oracle software on virtual machines within the UKCloud platform, there are some important issues to consider with regards to the licensing options available, which are described below.

## Per host (x86)

Oracle Enterprise Linux (OEL) is a free x86 operating system (OS) that Oracle provides for customers to run Oracle software on. While the OS itself is free to use, the support associated with the OS is not free, and is charged per-host being used. In a cloud environment, this cost model is a bit of a challenge as we have many hosts and customers will not be using all of them for their workloads. So, to work out how many support contracts you should get for OEL, you should use the following formula:

`Number of cores used = Total number of vCPUs running OEL (i.e., add up all OEL VMs vCPUs) / 2`

`Number of hosts you need OEL support contracts for (rounded up to nearest whole number) = Number of cores used / 20 (the number of useable cores per host)`

## Per processor

This type of licence is typical of Oracle Database (both Enterprise and Standard) and enables you to have as many users as you need for a fixed cost ‘per processor’ that the servers run on.

As UKCloud runs Oracle VM (OVM) as the hypervisor technology for UKCloud for Oracle Software, you can simply license the processors (cores) that you require for your application and database VMs, rather than *all* the processors within the cluster.

The VMs are pinned to host cores to maintain licence compliance so you should be aware of licensing implications of using features such as High Availability (HA) or clustering technologies, such as Real Application Clusters (RAC). With the HA feature (see [*How to enable high availability for your Oracle VMs*](orcl-how-enable-ha.md)), VMs will power off in the event of a host failure and will be restarted on another host in the cluster. Typically, processor-based licences will allow a certain number of 'failover days' per year (typically 10 days), including maintenance scenarios, so you should be aware of this number and remove VMs from any HA policy if your VM has moved due to maintenance or server downtime for close to the number of days stated in the licence agreement.

If you're replicating using technologies like RAC, you'll need to make sure you're licensing enough processors to cover the additional VMs within the cluster.

To work out the number of processors (cores) you need to license within UKCloud, perform the following simple calculation:

`Number of cores used = Total number of vCPUs running Oracle Database / 2`

There is a core-factor that needs to be applied when it comes to licensing Oracle database licences. For the purposes of this, use the Intel Xeon core factor in the [Oracle Processor Core Factor Table](https://www.oracle.com/us/corporate/contracts/processor-core-factor-table-070634.pdf).

## Named User Plus

By implementing this licensing option, you may achieve better economics, but this option is generally only applicable when the application or database is used by a known, limited pool of users. You should also be able quantify how many people are accessing these databases and be aware if that user base grows beyond the user you have got licensed. There are some complexities here around minimum numbers of users and cores within the various database options, so make sure you follow the guidance on licensing published by Oracle. For databases, you can find this in the [Database Licensing](https://www.oracle.com/assets/databaselicensing-070584.pdf) document.

Our Cloud Architects can help you understand the most cost-effective method for licensing.

## Special agreements

In certain circumstances an organisation may have a special agreement with Oracle. Generally, these are big government or private organisations who have gone through serious negotiations to get those agreements - an example of this being a Perpetual Licence Agreement (PULA), which enables an organisation to consume as many Oracle licences for particular software as they require. If you have a special agreement with Oracle, let us know as it comes with benefits such as live VM migration, which generally isn't allowed in other scenarios.

## Application Specific Full Use licensing

An Application Specific Full Use (ASFU) licence is a restricted type of licence sold by a Solution Provider in conjunction with its third-party Application Package.

For example, you can buy an ASFU licence from SAP AG to use Oracle with the SAP/R3 system. This licence would then be application-specific and cannot be used for anything else.

> [!NOTE]
> The ASFU licensing option is outside the scope of UKCloud control.

## Embedded Software License

An Embedded Software License (ESL) is a very restrictive licence type available from Independent Software Vendors (ISVs) who embed Oracle technology into their product. An end-user may not even be aware that the software package contains Oracle technology and should not be able to access it directly as a developer or system administrator.

An example of this licensing model in use may be a Point of Sale system that requires a database to log transactions.

> [!NOTE]
> The ESL licensing option is outside the scope of UKCloud control.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
