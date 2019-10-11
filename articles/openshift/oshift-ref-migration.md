---
title: OpenShift resource backup and cluster migration | UKCloud Ltd
description: Provides a starting point for using Velero to backup and restore cluster resources and migrate between clusters
services: openshift
author: Kieran O'Neill
reviewer: 
lastreviewed: 11/09/2019

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

Velero is an open-source tool set that provides the ability to backup and restore kubernetes resources. The GitHub repository is avaialble at: <https://github.com/vmware-tanzu/velero>.

This guide outlines how to:

- Install Velero in your cluster (using our Elastic Cloud Storage product as the backup location)

- Back up and restore namespaces to the same cluster

- Restore a namespace to a new cluster

Velero offers a tool called restic that enables backup of persistent volume data regardless of provider, however this guide doesn't cover restic as the tool is considered beta-quality. If you'd like to test it you can find more on restic here: <https://velero.io/docs/v1.1.0/restic/>.

### Installing Velero

1. Download Velero from <https://github.com/vmware-tanzu/velero/releases>.

    You can deploy Velero onto OpenShift with the `velero install` command. To deploy Velero, you'll need compatible object storage: <https://velero.io/docs/v1.1.0/support-matrix/>. In this article we use UKCloud's Cloud Storage product (based on Dell EMC's ECS).

2. After logging in to the cluster via the CLI, run the following command to configure a `yaml` file that you can then edit and use to create the Velero deployment in the cluster:

    `velero install --bucket velero-test --provider aws --secret-file ./secret-file.txt  --dry-run -o yaml > deploy-velero.yml`

    `secret-file.txt` contains the access and secret key for the ECS bucket in the following format:

    ```
    [default]
    aws_access_key_id=<key>
    aws_secret_access_key=<key>
    ```

3. As you're not using AWS at this point, edit the `deploy-velero.yaml` file, find the `BackupStorageLocation` and add `s3Url` and `region` to the config key mapping. For example:

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

4. Run:

    `oc create -f deploy-velero.yml`

    This deploys a Velero project and the required resources to backup and restore resources in your cluster (excluding persistent volume data).

### Backing up and restoring resources

For the purposes of the example in this article, we tested restoring a deleted namespace, called `backup-test`, that contains a ruby example build that uses S2I. This application uses a route and no persistent storage.

To create a backup of the namespace:

1. Run:

    `velero backup create test1 --include-namespaces backup-test --wait`

2. Once you've run this command you can check the backup exists and get some information on it with the following commands:

    ```
    velero get backups
    
    velero describe backup test1
    ```

3. After confirming that the backup exists and was completed successfully you're ready to restore the namespace. For example, if an administrator accidentally deletes the wrong namespace you'll want to get it back as soon as possible. To restore the namespace, run the following command:

    `velero create restore restore1 --from-backup test1`

4. This recreates the namespace and all resources within it. If you watch the namespace however, you'll see that not everything is recreated correctly. In our example we have a ruby-example build that pulls a GitHub repository and builds an image and deployment from this. The first thing we notice is that a new build is triggered and it goes directly into pending state. The error message in events is: `'MountVolume.SetUp failed for volume "builder-dockercfg-9589h-push" : secrets "builder-dockercfg-9589h" not found'`. The problem appears to be that the build is referencing the secret that the buider service account had in the original namespace. However, when the namespace is restored, the builder service account generates a new docker secret. To fix this you'll need to cancel the build, delete the serviceaccount to allow it to be recreated and run the build again. In our example, the commands to achieve this are:

    ```
    oc cancel-build ruby-ex-1
    
    oc delete build ruby-ex-1
    
    oc delete sa builder
    
    oc start-build ruby-ex
    ```

5. There may be extra steps needed to restore your namespaces depending on the resources within them. We recommend that you test the restores and document the process required to get it back in a working state.

### Migrating resources

Velero also offers the ability to link multiple clusters to the same object storage and migrate resources/namespaces across. All that you need to do is deploy Velero into your second cluster and set the same bucket as its `BackupStorageLocation`. Backups should then be synched and be restorable into the new cluster.

For example, to migrate the `backup-test` namespace from our previous example into a new cluster in a different region:

1. Log into the new cluster via the CLI on your local machine:

    `oc login https://ocp.$domainSuffix:8443 --token=$api_token`

2. Follow the installation steps to create your deploy file and run:

    `oc create -f deploy-velero.yml`

3. Run the following to ensure that the namespaces are connected to the same backup location (you may need to allow a minute or so for backups to sync to your new cluster):

    `velero get backups`

4. You should see any backups taken in your first cluster that are in the Object Storage bucket. If you can see them then you will be able to restore them into your new cluster. In our example we have the `test1` backup from earlier. To restore this backup to the new cluster:

    `velero create restore migration1 --from-backup test1`

5. As previously, we'll have to sort out the issue with the builder accounts secret. Once this is resolved, we'll have the application running in our new cluster. In our example, we have a route unique to the domain of the cluster so we need to delete the route and expose the service in the new cluster to create a route pointing to the right DNS record. For any production applications with a route, rather than changing the route itself, you would want to reconfigure your DNS to point to the new cluster IP.

### Further information

For further information, see the Velero documentation at:

<https://velero.io/docs/v1.1.0/>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
