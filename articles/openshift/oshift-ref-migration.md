---
title: OpenShift resource backup and cluster migration | UKCloud Ltd
description: Provides a starting point for customers to start using velero to backup/restore cluster resources and migrate between clusters.
services: openshift
author: Kieran O'Neill
reviewer: 
lastreviewed: 

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenShift resource backup and cluster migration
toc_fullpath: Reference/oshift-ref-migration.md
toc_mdlink: oshift-ref-migration.md
---

# OpenShift resource backup and cluster migration

### Overview

Velero is an open-source tool set that provides the ability to backup and restore kubernetes resources. The github repository can be found here: https://github.com/vmware-tanzu/velero

In this guide I will be outlining how to install velero in your cluster (using our Elastic Cloud Storage product as the backup location), how to backup and restore namespaces to the same cluster and how to restore a namespace to a new cluster. Velero does offer a tool called restic that allows backup of persistent volume data regardless of provider however this guide will not cover that as the tool is considered beta-quality. If you would like to test it you can find more on restic here: https://velero.io/docs/v1.1.0/restic/


### Installation

The velero tooling can be downloaded from https://github.com/vmware-tanzu/velero/releases. Velero can be deployed onto OpenShift with the velero install command. You will need compatible object storage in order to deploy it: https://velero.io/docs/v1.1.0/support-matrix/ In my example I'm using our Elastic Cloud Storage product (based on EMC ECS). After logging in to my cluster via the CLI I run a command to configure a yaml file that I will edit and use to create my velero deployment in my cluster:

`velero install --bucket velero-test --provider aws --secret-file ./secret-file.txt  --dry-run -o yaml > deploy-velero.yml`

secret-file.txt contains the access and secret key for my ECS bucket in the following format:

```
[default]
aws_access_key_id=<key>
aws_secret_access_key=<key>
```
As I'm not using AWS at this point I need to edit my deploy-velero.yaml find the BackupStorageLocation and add s3Url and region to the config key mapping. In my case it looks like:

```
- apiVersion: velero.io/v1
  kind: BackupStorageLocation
  metadata:
    creationTimestamp: null
    labels:
      component: velero
    name: default
    namespace: velero
  spec:
    config: {"s3Url": "https://cas.cor00005.ukcloud.com","region": "us-east-1"}
    objectStorage:
      bucket: velero-test
      prefix: ""
    provider: aws
```

Finally run:

`oc create -f deploy-velero.yml`

This will deploy a velero project and the required resources to backup/restore resources in your cluster (excluding persistent volume data).

### Backup and Restore


### Migration


### Further information


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
