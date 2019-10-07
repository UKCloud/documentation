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

I've tested restoring a deleted namespace, called backup-test, that contains a ruby example build that uses S2I. This application uses a route and no persistent storage. Firstly to create a backup of the namespace I run:

`
velero backup create test1 --include-namespaces backup-test --wait
`

Once you have run this command you can check the backup exists and get some information on it with the following commands:

```
velero get backups

velero describe backup test1
```

After confirming that the backup exists and completed successfully we're ready to restore the namespace. In my case I'm going to delete the project to simulate a mistake by an admin who has deleted the wrong namespace and needs to get it back asap. 

`
oc delete project backup-test
`

To restore the namespace:


`velero create restore restore1 --from-backup test1`


This recreates the namespace and all resources within it. If you watch the namespace however you will see that not everything is recreated correctly. In this example I have a ruby-example build which pulls a github repo and builds an image and deployment from this. The first thing I notice is that a new build is triggered and it goes directly into pending state. The error message I see in events is: 'MountVolume.SetUp failed for volume "builder-dockercfg-9589h-push" : secrets "builder-dockercfg-9589h" not found'. The problem appears to be that the build is referencing the secret that the buider service account had in the original namespace however when the namespace is restored the builder service account generates a new docker secret. In order to fix this you will need to cancel the build, delete the serviceaccount to allow it to be recreated and run the build again. In my environment the commands to achieve this are:

```
oc cancel-build ruby-ex-1

oc delete build ruby-ex-1

oc delete sa builder

oc start-build ruby-ex
```

There may be extra steps needed to restore your namespaces depending on the resources within. It's recommended to test the restores and document the process required to get it back in a working state.

### Migration

Velero also offers the ability to link multiple clusters to the same object storage and migrate resources/namespaces across. All that is needed is to deploy velero into your second cluster and set the same bucket as its BackupStorageLocation, backups should then be synched and be restorable into the new cluster. In this example I am going to migrate the backup-test namespace from the previous example into a new cluster in a different region.

First we need to log into the new cluster via the CLI on your local machine:


`oc login https://ocp.$domainSuffix:8443 --token=$api_token`


Follow the installation steps to create your deploy file and run:


`oc create -f deploy-velero.yml`

Run the following to ensure that the namespaces are connected to the same backup location (You may need to allow a minute or so for backups to sync to your new cluster):

`velero get backups`

You should see any backups taken in your first cluster that are in the Object Storage bucket. If you can see them then you will be able to restore them into your new cluster. In my case I only have the test1 backup from earlier. Now we'll restore our backup to the new cluster:

`velero create restore migration1 --from-backup test1`

We will again have to sort out the issue with the builder accounts secret, once this is resolved we will have the application running in our new cluster. In my case I have a route unique to the domain of my cluster so I delete the route and expose the service in 'cluster 2' to create a route pointing to the right DNS record. For any production applications with a route rather than changing the route itself you would want to reconfigure your DNS to point to the new cluster IP.

### Further information


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
