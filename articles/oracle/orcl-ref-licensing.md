---
title: Oracle licensing on the UKCloud platform | UKCloud Ltd
description: Outlines the licensing options for customers wanting to use Oracle on the UKCloud Platform
services: oracle
author: Sue Highmoor
reviewer:
lastreviewed: 16/07/2018 12:32:29
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

Due to the licensing rules regarding Oracle, it is not possible to install and run Oracle software on the UKCloud public cloud platform. However, there are currently two ways for customers to install and run Oracle software with UKCloud:

- **Private Cloud for Compute**. This is a dedicated hardware solution that limits the number of cores, RAM and storage that would require Oracle licensing. Note that this may not be financially efficient for all customers, and this will be a bare metal environment that has not been prepared for Oracle.

- **UKCloud for Oracle Software**. This is a solution specifically designed to host Oracle solutions on a separate platform. This enables Oracle licensing to be used correctly, and is also financially efficient.

The remainder of this article is regarding general Oracle licensing.

> [!IMPORTANT]
> Licensing rules from vendors such as Oracle can change frequently and so customers should validate their specific requirement with Oracle at the time of ordering. This information is correct as of June 2015.

For customers wishing to licence Oracle software on virtual machines within the UKCloud platform, there are some important issues to consider with regards to the four licensing options available which are described below.

## Named User

By implementing this licensing option, the customer can run as many Oracle servers as they want for a fixed fee ‘per named user’. As this licence model is independent of the size or number of servers, it is preferable for use in multi-tenant cloud environments such as the UKCloud platform.

UKCloud appreciate that this solution may not be valid for customers that already have ‘per processor” licensing.

## Per Processor

This type of licence allows the customer to have as many users as they need for a fixed cost ‘per processor’ that the servers run on.

In a traditional physical or virtualised estate, it is possible to isolate a small subset of the overall physical servers to specifically run Oracle. In this way, only those specific servers need to be licensed for Oracle.

In most multi-tenant cloud environments such as the UKCloud platform, the per processor virtual machines can run on any physical server and so, practically, Oracle requires all of those servers to be licensed – which is simply not cost effective.

Oracle software within a cloud based environment can also be licensed via the per-processor option if the cloud environment is running Oracle Virtual Machine (OVM) as the hypervisor. However, due to the design of the cloud environment, this is not something UKCloud can provide or support.

Oracle has negotiated an agreement with a few public cloud providers (at the time of writing, only Amazon Web Services and Microsoft Azure) to allow customers to license only specific host servers, but this is not yet a widely available licensing agreement.

### Dedicated Compute platform

Customers can take advantage of the 'per processor' licensing model, by using the UKCloud Dedicated Compute platform which will provide the customer with a set hardware configuration. The Dedicated Compute option enables a customer to specify a dedicated hardware cluster of a certain number of physical servers, and this option can help customers who need more certainty as to the configuration and capacity of the cluster which underpins part of their application, whilst being also able to accommodate the compromises of having a dedicated cluster with regards to reduced levels of agility and flexibility.

## Application Specific Full Use Licensing

An Application Specific Full Use (ASFU) licence is a restricted type of licence sold by a Solution Provider in conjunction with its third-party Application Package.

For example, you can buy an ASFU licence from SAP AG to use Oracle with the SAP/R3 system. This licence would then be application specific and cannot be used for anything else.

## Embedded Software License

An Embedded Software License (ESL) is a very restrictive licence type available from Independent Software Vendors (ISVs) who embed Oracle technology into their product. An end-user may not even be aware that the software package contains Oracle technology and should not be able to access it directly as a developer or system administrator.

An example of this licensing model in use may be a Point of Sale system that requires a database to log transactions.

> [!NOTE]
> The ASFU and ESL licensing options are outside the scope of UKCloud control.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
