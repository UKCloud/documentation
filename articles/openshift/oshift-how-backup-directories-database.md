---
title: How to back up and restore container directories and databases on OpenShift | UKCloud Ltd
description: Provides guidance on how to back up container directories and databases and how to restore them
services: openshift
author: Daniel Brennand
reviewer: 
lastreviewed: 03/12/2019

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Back up and restore container directories and databases
toc_fullpath: How To/oshift-how-backup-directories-database.md
toc_mdlink: oshift-how-backup-directories-database.md
---

# How to back up and restore container directories and databases on OpenShift

## Overview

This article explains how you can back up container directories and databases (specifically [PostgreSQL](https://www.postgresql.org/)) to your localhost. It also goes through the process of how to restore from a backup.

### Prerequisites

This article assumes that you have a UKCloud for OpenShift envrionment and can access it using the [OpenShift Container Platform command line interface](https://docs.openshift.com/container-platform/3.11/cli_reference/index.html#cli-reference-index).

This article uses the following two OC CLI commands:

- [`oc exec`](https://docs.openshift.com/container-platform/3.11/dev_guide/executing_remote_commands.html)

- [`oc rsync`](https://docs.openshift.com/container-platform/3.11/dev_guide/copy_files_to_container.html#overview)

Begin by logging into your UKCloud for OpenShift envrionment using the following command:

```bash
oc login --server {server} --token {token here}
```

> [!TIP]
> You can retrieve the `--token` by logging into the OpenShift web interface, clicking your username in the top right and clicking **Copy Login Command**.

## Backing up container directories to your local client

1. Create a directory on your local client for files to be backed up to:

    ```bash
    mkdir ~/oshiftbackups
    ```

2. Switch to the project in which the container you want to back up the directory from is located:

    ```bash
    oc project {project name}
    ```

    > [!TIP]
    > To list all projects use: `oc projects`.

3. Identify the pod in which the container you want to back up resides:

    ```bash
    oc get pods
    ```

4. Using `oc rsync`, copy the directory you want to back up:

    ```bash
    # oc rsync usage:
    oc rsync {podname}:{path/to/directory} {destination/on/host}

    # Example usage:
    oc rsync {podname}:/tmp/files/ ~/oshiftbackups
    ```

    > [!NOTE]
    > If you have multiple containers in a pod, use the `-c {container name}` parameter to specify a specific container name.
    >
    > Example: `oc rsync {podname}:{path/to/directory} {destination/on/host} -c {container name}`

## Uploading a directory to a container

1. Switch to the project in which the container you want to upload the directory to is located:

    ```bash
    oc project {project name}
    ```

    > [!TIP]
    > To list all projects use: `oc projects`.

2. Identify the pod in which the container you want to upload the directory to resides:

    ```bash
    oc get pods
    ```

4. Using `oc rsync`, upload the directory to the container:

    ```bash
    # oc rsync usage:
    oc rsync {destination/on/host} {podname}:{path/to/upload}

    # Example usage:
    oc rsync ~/oshiftbackups/files mypod-1-hscwm:/tmp/files
    ```

    > [!NOTE]
    > If you have multiple containers in a pod, use the `-c {container name}` parameter to specify a specific container name.
    >
    > Example: `oc rsync {podname}:{path/to/directory} {destination/on/host} -c {container name}`

## Backing up a database on OpenShift

In this example, the type of database being backed up is PostgreSQL. Substitute the commands executed in this article (using `oc exec`) with commands that are appropriate to the database type you're using.

1. Create a directory on your local client for files to be backed up to:

    ```bash
    mkdir ~/oshiftdatabasebackup
    ```

2. Switch to the project where your database pod is located:

    ```bash
    oc project {project name}
    ```

    > [!TIP]
    > To list all projects use: `oc projects`.

3. Identify the pod in which the database container you want to backup resides:

    ```bash
    oc get pods
    
    NAME                           READY    STATUS      RESTARTS    AGE
    postgresql-1-hscwm   1/1           Running    0                   31m
 
    # In this example, the database is running in pod: postgresql-1-hscwm
    ```

4. Using `oc exec`, run the following command to execute the PostgreSQL backup command in the container:

    ```bash
    # Execute a remote command on a container
    # Dump the contents of the database and pipe it into gzip (to create a compressed archive)
    # oc exec usage:
    oc exec {podname} -- bash -c 'pg_dump {databasename} | gzip > /opt/app-root/src/{databasename}.gz'
    
    # Example usage:
    oc exec postgresql-1-hscwm -- bash -c 'pg_dump sampledb | gzip > /opt/app-root/src/sampledb.gz'
    ```

5. Using `oc rsync`, copy the database backup file contaning the PostgreSQL database files to your localhost:

    ```bash
    # oc rsync usage:
    oc rsync {podname}:{path/to/directory} {destination/on/host}
 
    # Example usage:
    # This command copies the database backup file to /home/databasebackup
    oc rsync postgresql-1-hscwm:/opt/app-root/src/sampledb.gz ~/oshiftdatabasebackup
    ```

    > [!NOTE]
    > If you have multiple containers in a pod, use the `-c {container name}` parameter to specify a specific container name.
    >
    > Example: `oc rsync {podname}:{path/to/directory} {destination/on/host} -c {container name}`

Your database is now backed up onto your localhost at `/home/oshiftdatabasebackup`.

## Restoring a database on OpenShift

1. Using `oc rsync`, move the backup of the database onto the container:

    ```bash
    # Copy the directory (oshiftdatabasebackup) containing the compressed archive to the container mount point
    oc rsync ~/oshiftdatabasebackup {podname}:/var/lib/pgsql/data

    # Example usage:
    oc rsync ~/oshiftdatabasebackup postgresql-1-hscwm:/var/lib/pgsql/data
    ```

    > [!NOTE]
    > If you have multiple containers in a pod, use the `-c {container name}` parameter to specify a specific container name.
    >
    > Example: `oc rsync {podname}:{path/to/directory} {destination/on/host} -c {container name}`

2. Using `oc exec`, extract the database archive and restore the database:

    In this example, the type of database being restored is PostgreSQL. Substitute the commands executed in this article (using `oc exec`) with commands that are appropriate to the database type you're using.

    ```bash
    # Import the database backup and remove the backup directory from the container
    oc exec {podname} -- bash -c 'gunzip /var/lib/pgsql/data/oshiftdatabasebackup/{databasename}.gz | psql {databasename} && rm -rf /var/lib/pgsql/data/oshiftdatabasebackup'

    # Example usage:
    oc exec postgresql-1-hscwm -- bash -c 'gunzip /var/lib/pgsql/data/oshiftdatabasebackup/sampledb.gz | psql sampledb && rm -rf /var/lib/pgsql/data/oshiftdatabasebackup'
    ```

## Further information

- [Transferring Files In and Out of Containers in OpenShift, Part 1: Manually Copying Files](https://blog.openshift.com/transferring-files-in-and-out-of-containers-in-openshift-part-1-manually-copying-files/)

- [Migrating Database Applications](https://docs.openshift.com/container-platform/3.11/dev_guide/migrating_applications/database_applications.html)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
