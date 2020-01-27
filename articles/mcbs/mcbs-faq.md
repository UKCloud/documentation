---
title: Multi-Cloud Backup Storage FAQs
description: Frequently asked questions for Multi-Cloud Backup Storage
services: mcbs
author: Steve Dixon
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Multi-Cloud Backup Storage FAQs
toc_fullpath: FAQs/mcbs-faq.md
toc_mdlink: mcbs-faq.md
---

# Multi-Cloud Backup Storage FAQs

## Service

### What is the service?

The UKCloud Multi-Cloud Backup Storage (MCBS) service provides a backup target that is accessible from every cloud within UKCloud’s multi-cloud platform, utilising a technology that is common across backup products, and compatible with certain file systems, enabling open-source backup applications to utilise the backup service as a target. You can also use Multi-Cloud Backup Storage as a remote backup target for your on-premises data.

UKCloud's Multi-Cloud Backup Storage is based on Dell EMC's Data Domain Boost&trade; (DD Boost) software, which provides advanced integration between leading backup and enterprise applications and Data Domain systems. With DD Boost, parts of the deduplication process are distributed to the backup server or application server, enabling client-side deduplication so only unique data segments are sent to the Data Domain system. This enables 50% faster backups and reduces network bandwidth requirements by 80 to 98%. DD Boost provides advanced load balancing and failover, which further improves throughput and resiliency. In addition, Data Domain systems can grant secure access to multiple DD Boost users per system for data protection-as-a-service in private and public cloud deployments. Providing DD Boost users secure access to their data lays the foundation for logical data isolation enabling secure multi-tenancy on a Data Domain system in DD Boost environments.

DD Boost offers an extensive range of extensions via Dell EMC's Data Protection Suite for services such as Oracle, Microsoft SQL, Microsoft Exchange and a wide array of backup server applications to help support performance-optimised, off-site, multi-cloud backups.

## What Data Protection Suite extensions are available?

Extension | Supported Applications | Further Information
----------|------------------------|--------------------
Dell EMC Microsoft Application Agent | Exchange, SQL Server | <a href="https://www.emc.com/collateral/TechnicalDocument/docu91897.pdf" target="_blank">HERE</a>
Dell EMC Data Domain&reg; Boost for OpenStorage | OpenStorage | <a href="https://www.emc.com/collateral/TechnicalDocument/docu85193.pdf" target="_blank">HERE</a>
Dell EMC Data Domain Boost for Partner Integration | Dell NetVault Backup, Dell vRanger Pro, EMC Avamar, EMC Database application agent for DD Boost for Enterprise Applications and ProtectPoint, EMC Microsoft application agent for DD Boost for Enterprise Applications, EMC NetWorker, Hewlett-Packard HP Data Protector, Pivotal Greenplum Data Computing Appliance, Quest NetVault, Quest vRanger Pro, Veeam Backup and Replication, VMware vSphere Data Protection Advanced (VDPA)| <a href="https://www.emc.com/collateral/TechnicalDocument/docu85192.pdf" target="_blank">HERE</a>
Dell EMC Oracle RMAN Agent | Oracle RMAN | <a href="https://www.emc.com/collateral/TechnicalDocument/docu86478.pdf" target="_blank">HERE</a>

## What is Data Domain Boost Filesystem (BoostFS)?

Should an explicit Data Protection Suite extension not be available for your specific application or workload, Data Domain offers Boost Filesystem (BoostFS). This provides a general file-system interface from within Microsoft Windows or Linux to the DD Boost library, allowing standard backup applications to take advantage of DD Boost features.

### What are the advantages of BoostFS?

By leveraging the DD Boost technology, BoostFS:

- Helps reduce bandwidth

- Can improve backup-times

- Offers load-balancing

- Allows in-flight encryption

- Supports the Data Domain multi-tenancy feature set

As a file server system implementation, the BoostFS workflow is similar to CIFS but also leverages the DD Boost protocol. In addition, BoostFS improves backup times compared to CIFS and various copy-based solutions.

BoostFS supports single-node Data Domain systems, high-availability (HA) systems, Extended Retention systems, Data Domain Virtual Edition, and Extended Distance Protection.

### Which applications support BoostFS?

As of BoostFS 1.3:

- Commvault Simpana versions 10 and 11

- Microsoft SQL Server 2012 and 2016 (Windows only)

- MySQL Community 5.6. and 5.7

- MySQL Enterprise Manager 5.6 and 5.7

- MongoDB Community 2.6, 3.0, and 3.2

### How many copies of the data are made, and where are they stored?

Three copies of the data can be stored in the opposite site as to the original data. For example, if the data is stored in the Farnborough site, then the copies will be stored in the Corsham site. This increases the resiliency of the data as the sites are  100km apart.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
