---
title: Best practice guidelines for Oracle Database backup
description: Defines guidelines to set up and manage Oracle Database backups on the UKCloud platform
services: oracle
author: fbordacchini
reviewer: 
lastreviewed: 21/01/2020
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Best practice guidelines for Oracle Database backup
toc_fullpath: Reference/orcl-ref-db-backup.md
toc_mdlink: orcl-ref-db-backup.md
---

# Best practice guidelines for Oracle Database backup

## Overview

This article provides some guidelines for setting up and managing Oracle Database backups for workloads on the UKCloud for Oracle Software service.

## Before you begin

This article assumes that you're running an Oracle Database workload using 11*g* or later on Linux or Windows. It also assumes that databases are production-ready, running in ArchiveLog mode.

### Required details

When planning your database backup architecture, you must meet the following requirements:

- **Platform** - A virtual machine (VM), running on a virtualisation infrastructure

- **Operating system (OS)** - Linux or Windows

- **Database software** - This article is specifically targeted at Oracle RDBMS

You also need to know the following:

- **Database installation** - Whether you're using 11*g* (non-CDB) or 12*c*+

- **Database size** - The size of the database plus online redo log (ORL)

- **Available space** - Storage volumes provisioned for the database server

- **Recovery time objective (RTO)** - This is the targeted duration of time and a service level within which a business process must be restored after a disaster or disruption in order to avoid unacceptable consequences associated with a break in business continuity -- how much time did it take to recover after notification of business process disruption?

- **Recovery point objective (RPO)** - Defined by business continuity planning, this is the maximum targeted period in which data (transactions) might be lost from an IT service due to a major incident

## Backup architecture guidelines

Once you've gathered all the [Required details](#required-details), you should consider the following guidelines for the different elements of your environment.

### The virtual machine

This is the VM in which the OS is installed.

The OS should be confined to 25GB, to keep the core small (therefore cheaper and faster to recover the VM). This can scale up to 50GB, depending on your specific requirements, but the smaller the better.

Use virtual disks for storage:

- One main volume for the database itself

- One volume for the fast recovery area (FRA)

- One volume to hold backups (depending on need and budget)

  If possible, offload backups to object storage, which is a cheaper alternative for long-term storage

In an ideal scenario, the volume that holds the OS software should be isolated from the volume used for data. The OS volume should also contain the Oracle software.

If applications are deployed on the database server, you can create and mount one (or more) volumes on `/opt/app<nn>,/var/app<nn>,/usr/local/app<nn>,` or other mount points depending on your architecture and requirements. This makes volume management, VM recovery and cloning easier and, most importantly, keeps data isolated from other resources.

### The database

The database itself (data files + ORL) is kept on the main data volume, which is usually bigger than the database size, to accommodate database growth and the first copy of the ORL.

You should use another volume to host the Oracle fast recovery area. This volume may hold a second copy of the ORL and online database backups. If you plan to store one full backup in the fast recovery area, size this volume accordingly.

Depending on the database size and recovery requirements, you may choose to have more than one volume to store data. Given the Oracle database architecture, you can add data volumes (online to the VM) at any time without downtime.

As has already been stated, the key is to keep data separated from the OS and and apps data. This configuration makes it easier to manage the database server and removes the need to deal with volumes that are too big or too small when space pressure is critical.

The suggestion is to keep things simple:

- The OS on one volume

- Data in another volume(s)

- Backups in another (or offload to object storage)

## Backup strategy

Your strategy depends on several factors. Database size could be one of the main drivers because of the storage cost in case of big databases and the time it takes to restore or recover.

The first decisions to take are when to take a backup (how frequent it should be) and the type of backup (full or incremental).

A typical backup strategy might be:

- Monday to Friday

  - Daily incremental backups: The nightly backup and maintenance window (big databases)

  - Full database backup: The nightly backup and maintenance window (small databases)

- Saturday and Sunday

  - Full backup: The weekend maintenance window (big and small databases)

  - Backup management: Backup archiving, backup cleanup, reporting

Things can change, depending on your requirements. If you need a full backup on a Monday and Friday, just adjust the strategy to suit within the maintenance window to reduce the impact on the normal workload.

The overall strategy is basically (unless you have specific constraints on availability):

- An incremental backup is taken on a daily basis, with a full backup during the weekend

When you have specific constraints, you can include the backup strategy in the disaster recovery (DR) strategy:

- One primary database is used by the business, with a secondary database used for backup and reporting

  This scenario includes at least two databases: a primary and a secondary/standby, where the secondary is a copy of the primary (physical or logical).

### Keeping things simple

The easiest solution to implement keeps moving parts at a minimum.

- Take one incremental database backup daily. If you're licensed to use Oracle Block Change Tracking, such a backup can be very fast.

  Backups are taken via the Oracle Recovery Manager (RMAN). Backups can be compressed and, optionally, encrypted.

- Take one full backup during the weekend, assuming the workload on the database during that period is lower than usual.

A daily job is added to the host crontab, for the Oracle software user. It fires a script to run the RMAN backup session. The job should be fired by a scheduler external to the database. If the database has failed, the job can check whether the database is running before starting. On \*nix systems, the cron service is a very reliable service, and easy to use.

You can use custom-built shell scripts to fire RMAN jobs, keep a log of backup sessions and build a report to send via email to DBAs or administrators.

You can use an external job scheduler, depending on your existing infrastructure.

You can store RMAN scripts on the VM file system or within the database. You can use an RMAN script to run the daily backup check (crosscheck), find backups that are no longer needed (obsolete) and verify if some files are missing (archived logs). When checks are completed, the actual backup is taken.

UKCloud can provide more detailed instructions and scripts, but these will need to be specifically defined for each customer. As a multi-cloud provider, UKCloud is responsible for the infrastructure; any intervention inside the OS hosted on a customer VM must be planned and approved.

You can keep one backup on disk, in the fast recovery area (having allocated enough room on the storage volume), and archive older backups. In an ideal scenario, the last full backup should be kept on disk. When the next full backup is taken, the old ones should be moved to object storage.

UKCloud is currently working to make an object storage solution available for the UKCloud for Oracle Software service.

Oracle RMAN is already capable of taking backups directly against Amazon S3-compatible object storage devices.

### When the architecture is more articulated

In a full Oracle Database architecture, there is a primary database and a secondary database. The primary database replicates via Data Guard (physical standby) or GoldenGate (logical standby, real-time), to a secondary database.

When recovery time can be expanded to several hours, you could implement a custom replication solution as a cheaper alternative to Data Guard:

- The primary database produces archived log files. These files are shipped to a secondary database host.

- The standby host receives the archived log files, logs them into a storage volume and checks integrity after transfer.

- The standby holds an Oracle Database open in media recovery mode (like dg) and, every time an archived log is shipped, it's automatically applied to the standby.

- If a primary database failure occurs, the standby receives the last archived redo log and applies it. The database is open with resetlogs, ready to be used.

- The application (middleware) needs to be pointed to the new database server IP/hostname address.

This procedure (except the middleware bit) is fully automated. The main differences to Data Guard are:

- Pro - No broker, easy to implement, cheap to drive.

- Con - Manual management, replication relies on archived logs to be generated (log switch happens at a higher frequency).

The database backup is taken on the secondary. The same considerations apply, but to the standby. The primary database is not affected by backup jobs, which run on the standby.

This is a typical Oracle Database setup, with a primary and a standby, where the standby is usually located on a separate host, away from the primary.

### When things get complicated

In a complex architecture, an Oracle Database cluster is built using Real Application Clusters (RAC). When using RAC, you don't need to set the High Availability (HA) feature on Oracle VM Server and can take advantage of hard partitioning, which helps in saving on Database software licensing (given that a full RAC installation requires the Enterprise Edition). The database runs in a cluster with 2+ nodes, using shared storage and an interconnect network. VMs in the cluster can provide high availability. One node in the cluster replicates the database to a second site, which can use either another RAC or a single instance database.

The same considerations seen before work here: the database backup is taken on the standby database.

### CDB or non-CDB

Oracle 12*c* introduced the multi-tenant option, which changed the way databases are managed with regards to storage and users.

From a backup perspective, things don't change much. You should still use RMAN to operate backup and recovery.

A common approach is to use the multi-tenant option, but implementing databases using a single-tenant configuration (one CDB that holds one PDB). The single-tenant option is free of charge; multi-tenancy requires a licence.

In a cloud environment, with databases running within VMs, Oracle Database 12*c* single-tenancy seems to be the ideal option.

### Backup metadata management

When using RMAN to take database backups, one of the choices you need to make is whether to use a backup catalog or not.

For small installations, a catalog is not strictly needed. The catalog helps when there is more than one database included in the backup strategy, or the estate, because it holds all the metadata related to the backup sessions in one single place.

In a complex environment, you should use a central job scheduler to keep track of all the backup (and other type) jobs and targets. This is a host that can communicate with all the database servers, initiate backup sessions, manage backups metadata and generate reports.

Oracle does offer a solution, Secure Backup, but this is not particularly user-friendly. You can also use Oracle Enterprise Manager (OEM), and you can directly schedule backups in Cloud Control. Or you may choose to develop a custom option to manage backup jobs, backup metadata in the RMAN catalog and generate reports.

A project to offer a ready-to-use backup solution (easy to implement and use) for the UKCloud for Oracle Software service is under development. This solution relies on an object storage backend to hold long-term backups. It's aim is to provide a simple tool (specifically, a CLI tool, to be embedded in scripts) to manage backup requirements.

### Backup testing

You should test and validate backups every six months, or more depending on your own business requirements. This provides certainty that, if a failure occurs, a backup can be safely used to restore and recover the database server's data. If a backup solution is available, as mentioned above, you should be able to schedule such a task.

To perform backup testing, fire up a VM to manage backup validation, restore and database recovery. The idea is to provide a fully automated tool to test backup integrity and provide an automated procedure for restore and recovery. You pay only for the storage used for the time the restore takes place, if the restore is successful.

This could be seen as a fire drill for the database, conducted every \<n> months, to make sure the procedures are well defined and tested. If something fails, you can adjust the procedure to make sure it will be ready for a real-world scenario.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
