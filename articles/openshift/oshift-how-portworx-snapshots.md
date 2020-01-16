---
title: How to create and restore Portworx snapshots | UKCloud Ltd
description: Explains how to create and restore the different types of Portworx snapshots
services: openshift
author: Kieran O'Neill
reviewer:
lastreviewed: 15/10/2019

toc_rootlink: How To
toc_sub1: Use Portworx with OpenShift
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create and restore Portworx snapshots
toc_fullpath: How To/Use Portworx with OpenShift/oshift-how-portworx-snapshots.md
toc_mdlink: oshift-how-portworx-snapshots.md
---

# How to create and restore Portworx snapshots

## Overview

Portworx is a cloud-native storage solution that is now available as an add-on to our OpenShift offering. This article describes how to use Portworx within OpenShift to create on-demand or scheduled snapshots of persistent volumes and how to restore them.

### Intended audience

This article assumes you have access to a Portworx-enabled OpenShift 3.11 or greater cluster and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. 

If you're interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Pre-Requisites

This article uses PVCs backed by volumes provisioned by portworx. For information on creating PVCs backed by portworx please see <https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-pvcs/>

## Creating on-demand snapshots

### Same namespace

You can take on-demand snapshots by creating an OpenShift resource of type `VolumeSnapshot` using the `oc` command line tools.

1. Assuming you have a PVC named `test-snapshot-pvc`, provisioned by Portworx in the `test-snapshot-1` namespace, to snapshot this you would run the following:

    ```none
    echo "apiVersion: volumesnapshot.external-storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: test-snapshot-1
      namespace: test-snapshot-1
    spec:
      persistentVolumeClaimName: test-snapshot-pvc" | oc create -f -
    ```

2. To verify that the snapshot was created describe the `volumeSnapshot` object, find the name of the related `volumeSnapshotData` object and describe that to ensure it was created successfully:

    ```none
    oc describe volumesnapshot test-snapshot-1
    
    "Snapshot Data Name:            k8s-volume-snapshot-e292b115-eb4b-11e9-9d81-0a580a830007"
    
    
    oc describe volumesnapshotdata k8s-volume-snapshot-e292b115-eb4b-11e9-9d81-0a580a830007
    
    "Message:               Snapshot created successfully and it is ready"
    ```

3. To restore the snapshot you need to create a PVC that references it. You do this by adding an annotation: `snapshot.alpha.kubernetes.io/snapshot: <snapshot-name>` to your PVC spec. The storage class must be `stork-snapshot-sc`:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: pvc-restore-1
      namespace: test-snapshot-1
      annotations:
        snapshot.alpha.kubernetes.io/snapshot: test-snapshot-1
    spec:
      accessModes:
         - ReadWriteOnce
      storageClassName: stork-snapshot-sc
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

    > [!NOTE]
    > stork-snapshot-sc is a storage class that is created with the cluster. Whenever creating a PVC from a snapshot you will need to create it from this storage class.

### Across namespaces

You can also restore snapshots to different namespaces, however you must declare the namespaces that you want to restore the snapshot to at the time of creation via an annotation. You must also declare the source namespace via annotation on the PVC object that you create from the snapshot.

1. The following example snapshots the same volume in the `test-snapshot-1` namespace with the intention of restoring it to the `test-snapshot-2` namespace:

   ```none
    echo "apiVersion: volumesnapshot.external-storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: test-namespace-migrate
      namespace: test-snapshot-1
    annotations:
        stork/snapshot-restore-namespaces: 'test-snapshot-2'
    spec:
      persistentVolumeClaimName: test-snapshot-pvc" | oc create -f -
    ```

2. You can verify the snapshot was created successfully by running the same `describe` commands from the [same namespace](#same-namespace) section.

3. To restore this snapshot in the `test-snapshot-2` namespace, create a PVC object in the `test-snapshot-2` namespace that references the snapshot and has the `stork.libopenstorage.org/snapshot-source-namespace: <source-namespace>` annotation:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: pvc-migrate-restore
      namespace: test-snapshot-2
      annotations:
        snapshot.alpha.kubernetes.io/snapshot: test-namespace-migrate
        stork.libopenstorage.org/snapshot-source-namespace: 'test-snapshot-1'
    spec:
      accessModes:
         - ReadWriteOnce
      storageClassName: stork-snapshot-sc
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

### Group snapshot

Portworx has the ability to take a group snapshot of all PVCs that match a specified label. This is useful to ensure backups of multiple PVCs are taken at the same time. To take a group snapshot, use the `GroupVolumeSnapshot` resource. The following example creates three PVCs with the same label and leverages the `GroupVolumeSnapshot` resource to back them up:

```none
for i in {0..2}
do
echo "apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: group-snapshot-test-$i
  namespace: test-snapshot-1
  annotations: 
    volume.beta.kubernetes.io/storage-class: portworx-repl1
  labels:
    purpose: "group-test"
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi" | oc create -f -
done
```

1. Create the `GroupVolumeSnapshot` resource targeting the label of your desired PVCs, in our example, the label `purpose=group-test`:

    ```none
    echo "apiVersion: stork.libopenstorage.org/v1alpha1
    kind: GroupVolumeSnapshot
    metadata:
      name: test-groupsnapshot
    spec:
      pvcSelector:
        matchLabels:
          purpose: group-test" | oc create -f -
    ```

2. This will create a `VolumeSnapshot` object for each PVC that it matches. To find the name of the volume snapshots you can describe the `GroupVolumeSnapshot` object:

    ```none
    oc describe groupvolumesnapshot | grep "Volume Snapshot Name"
    
        Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-2-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
        Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-1-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
        Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-0-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
    ```

3. To restore any of the PVCs, create a PVC object and insert the relevant snapshot name:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: pvc-restore-1
      namespace: test-snapshot-1
      annotations:
        snapshot.alpha.kubernetes.io/snapshot: <snapshot name>
    spec:
      accessModes:
         - ReadWriteOnce
      storageClassName: stork-snapshot-sc
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

### Cloud snapshots

Portworx enables you to backup snapshots to cloud storage. We can provide a bucket for the cluster on our Cloud Storage service and set up a cloud credential that you can use. If you'd like to configure snapshots to be sent to your own storage, see <https://docs.portworx.com/reference/cli/credentials/#overview> for how to set this up. 

> [!TIP]
> To find the ID of the cloud credentials provided with your cluster run:
> `PX_POD=$(kubectl get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')`
> `kubectl exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl credentials list`
> This gets the name of a portworx pod and executes a pxctl credential list inside it.

1. Create a PVC to use for the cloudsnap:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: test-cloudsnap
      namespace: test-snapshot-1
      annotations: 
        volume.beta.kubernetes.io/storage-class: portworx-repl1
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

2. To create a cloud snapshot, create a `VolumeSnapshot` object with the `portworx/snapshot-type=cloud` annotation:

    ```none
    echo "apiVersion: volumesnapshot.external-storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: test-cloudsnap
      namespace: test-snapshot-1
      annotations:
        portworx/snapshot-type: cloud
    spec:
      persistentVolumeClaimName: test-cloudsnap" | oc create -f -
    ```

    You can also provide the cloud credentials for your chosen cloud storage in the `portworx/cloud-cred-id` annotation, however this is only necessary when there are multiple cloud storage destinations. In our Portworx clusters out of the box you won't need to specify this but it would look like the below:

    ```none
    apiVersion: volumesnapshot.external-storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: test-cloudsnap
      namespace: test-snapshot-1
      annotations:
        portworx/snapshot-type: cloud
        portworx/cloud-cred-id: <cloud-cred-id>
    spec:
      persistentVolumeClaimName: test-cloudsnap
    ```

3. The restore process is exactly the same as the local on-demand snapshots: create a PVC in the `stork-snapshot-sc` storage class and give it the `snapshot.alpha.kubernetes.io/snapshot` annotation with the name of the taken snapshot:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: cloudsnap-restore
      annotations:
        snapshot.alpha.kubernetes.io/snapshot: test-cloudsnap
    spec:
      accessModes:
         - ReadWriteOnce
      storageClassName: stork-snapshot-sc
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

## Creating scheduled snapshots

You can create snapshot schedules that take recurring backups at a certain time each day, week, month or at a specified interval. For more information on each of the options see <https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-snapshots/scheduled/>.

The following example creates a daily policy that creates snapshots at a certain time each day:

1. Create some `SchedulePolicy` objects. These objects are referenced in storage classes and any PVCs created from that storage class will have all schedule policies applied:

    ```none
    echo "apiVersion: stork.libopenstorage.org/v1alpha1
    kind: SchedulePolicy
    metadata:
      name: daily
    policy:
      daily:
        time: '10:00PM'
        retain: 3" | oc create -f -
    ```

    ```none
    echo "apiVersion: stork.libopenstorage.org/v1alpha1
    kind: SchedulePolicy
    metadata:
      name: ten-minute
    policy:
      interval:
        intervalMinutes: 10
        retain: 3" | oc create -f -
    ```

2. Create a storage class that references one or more schedule policies to backup PVCs locally every ten minutes and at 10:00PM daily to cloud-storage:

    ```none
    echo "kind: StorageClass
    apiVersion: storage.k8s.io/v1
    metadata:
        name: test-schedule
    provisioner: kubernetes.io/portworx-volume
    parameters:
       repl: '1'
       snapshotschedule.stork.libopenstorage.org/default-schedule: |
         schedulePolicyName: ten-minute
         annotations:
           portworx/snapshot-type: local
       snapshotschedule.stork.libopenstorage.org/daily-schedule: |
         schedulePolicyName: daily
         annotations:
           portworx/snapshot-type: cloud" | oc create -f -
    ```

3. Create a PVC from the storage class:

    ```none
    echo "apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: test-schedule
    spec:
      accessModes:
         - ReadWriteOnce
      storageClassName: test-schedule
      resources:
        requests:
          storage: 2Gi" | oc create -f -
    ```

4. This should create some `volumeSnapshotSchedules`, for example:

    ```none
    oc get volumesnapshotschedules
    
    NAME                             AGE
    test-schedule-daily-schedule     1m
    test-schedule-default-schedule   1m
    ```

5. You can run a describe on these objects to ensure that they have created successfully and will be able to take snapshots. If a creation is unsuccessful you will see the reason why in the events section of your describe. An example of a successful creation is:

```
Name:         test-schedule-default-schedule
Namespace:    portworx-uat
Labels:       <none>
Annotations:  portworx/snapshot-type=local
API Version:  stork.libopenstorage.org/v1alpha1
Kind:         VolumeSnapshotSchedule
Metadata:
  Creation Timestamp:  2019-10-22T15:54:02Z
  Generation:          1
  Owner References:
    API Version:     v1
    Kind:            PersistentVolumeClaim
    Name:            test-schedule
    UID:             243ecfab-f4e4-11e9-a977-fa163ec75c17
  Resource Version:  67635247
  Self Link:         /apis/stork.libopenstorage.org/v1alpha1/namespaces/portworx-uat/volumesnapshotschedules/test-schedule-default-schedule
  UID:               2b424719-f4e4-11e9-a34e-fa163e60d86d
Spec:
  Post Exec Rule:
  Pre Exec Rule:
  Reclaim Policy:        Retain
  Schedule Policy Name:  ten-minute
  Suspend:               <nil>
  Template:
    Spec:
      Persistent Volume Claim Name:  test-schedule
      Snapshot Data Name:
Status:
  Items:
    Interval:
      Creation Timestamp:  2019-10-22T15:54:02Z
      Finish Timestamp:    2019-10-22T15:54:32Z
      Name:                test-schedule-default-schedule-interval-2019-10-22-155402
      Status:              Ready
Events:
  Type    Reason  Age   From   Message
  ----    ------  ----  ----   -------
  Normal  Ready   9s    stork  Scheduled snapshot (test-schedule-default-schedule-interval-2019-10-22-155402) completed successfully
  ```
  

## Further reading

There are more snapshot types and options that can be used, these are detailed in the Portworx documentation here: <https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-snapshots/>


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
