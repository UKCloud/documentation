---
title: How to create and restore Portworx snapshots | UKCloud Ltd
description: Explains how to create and restore the different types of Portworx snapshots
services: openshift
author: Kieran O'Neill
reviewer:


toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Expose non-http services externally
toc_fullpath: How To/Portworx/oshift-how-portworx-snapshots.md
toc_mdlink: oshift-how-portworx-snapshots.md
---

# How to create and restore Portworx snapshots

## Overview

This article describes how portworx can be used within OpenShift to create on-demand or scheduled snapshots of persistent volumes and restore them. Portworx is a cloud-native storage solution that is now available as an add-on to our OpenShift offering.

### Intended audience

This article assumes you have access to a Portworx-enabled OpenShift 3.11 cluster and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. 

If you are interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

### On-demand snapshots

#### Same namespace

On-demand snapshots can be taken by creating an OpenShift resource of type VolumeSnapshot. This can be done using the `oc` command line tools. Assuming you have a PVC named `test-snapshot-pvc`, provisioned by portworx in the `test-snapshot-1` namespace to snapshot this you would run the following:

```
echo "apiVersion: volumesnapshot.external-storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: test-snapshot-1
  namespace: test-snapshot-1
spec:
  persistentVolumeClaimName: test-snapshot-pvc" | oc create -f -
```

To verify that the snapshot was created describe the volumeSnapshot object, find the name of the related volumeSnapshotData object and describe that to ensure it was created successfully:

```
oc describe volumesnapshot test-snapshot-1

"Snapshot Data Name:            k8s-volume-snapshot-e292b115-eb4b-11e9-9d81-0a580a830007"


oc describe volumesnapshotdata k8s-volume-snapshot-e292b115-eb4b-11e9-9d81-0a580a830007

"Message:               Snapshot created successfully and it is ready"
```

To restore the snapshot you need to create a PVC that references it. You do this by adding an annotation: `snapshot.alpha.kubernetes.io/snapshot: <snapshot-name>` to your PVC spec. The storage class must be `stork-snapshot-sc`:
  
```
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

#### Across namespaces

Snapshots can also be restored to different namespaces however the namespaces it can be restored to must be declared at the time of creation via an annotation and the source namespace must be declared via annotation on the PVC object that is created from the snapshot. In this example I'm going to snapshot the same volume in the `test-snapshot-1` namespace with the intention of restoring it to the `test-snapshot-2` namespace:

```
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

You can verify the snapshot was created successfully by running the same describe commands from the same namespace section. To restore this snapshot in the 'test-snapshot-2' namespace create a PVC object in the 'test-snapshot-2' namespace that references the snapshot and has the `stork.libopenstorage.org/snapshot-source-namespace: <source-namespace>` annotation:

```
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

#### Group snapshot

Portworx has the ability to take a group snapshot of all PVCs that match a specified label. This is done via the `GroupVolumeSnapshot` resource and is useful to ensure backups of multiple PVCs are taken at the same time. In this example I'm going to create 3 PVCs with the same label and leverage the `GroupVolumeSnapshot` resource to back them up:

```
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

Create the `GroupVolumeSnapshot` resource targeting the label of your desired PVCs, in this case I will be looking for the label `purpose=group-test`:

```
echo "apiVersion: stork.libopenstorage.org/v1alpha1
kind: GroupVolumeSnapshot
metadata:
  name: test-groupsnapshot
spec:
  pvcSelector:
    matchLabels:
      purpose: group-test" | oc create -f -
```

This will create a `VolumeSnapshot` object for each PVC that it matches. To find the name of the volume snapshots you can describe the `GroupVolumeSnapshot` object:

```
oc describe groupvolumesnapshot | grep "Volume Snapshot Name"

    Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-2-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
    Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-1-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
    Volume Snapshot Name:  test-groupsnapshot-group-snapshot-test-0-61d7ca5e-ee87-11e9-8422-fa163e52fd0e
```

To restore any of the PVCs you would create a PVC object and insert the relevant snapshot name:

```
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

#### Cloud snapshots

Portworx allows you to backup snapshots to cloud storage. We'll provide a bucket on our Elastic Cloud Storage with the cluster and set up a cloud credential that can be used. If you'd like to configure snapshots to be sent to your own storage please follow <https://docs.portworx.com/reference/cli/credentials/#overview> to set this up. 

> [!INFO]To find the ID of the cloud credentials provided with your cluster run:
> To find the ID of the cloud credentials provided with your cluster run:
> `PX_POD=$(kubectl get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')`
> `kubectl exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl credentials list`

```
PX_POD=$(kubectl get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')
kubectl exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl credentials list
```

First we'll create a PVC to be used for the cloudsnap:

```
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

To create a cloud snapshot create a `VolumeSnapshot` object with the `portworx/snapshot-type=cloud` annotation:

```
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

You can also provide the cloud credentials for your chosen cloud storage in the `portworx/cloud-cred-id` annotation however this is only necessary when there are multiple configured. In our portworx clusters out of the box you will not need to specify this but it would look like the below:

```
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

The restore process is exactly the same as the local on-demand snapshots, create a PVC in the `stork-snapshot-sc` storage class and give it the `snapshot.alpha.kubernetes.io/snapshot` annotation with the name of the taken snapshot:

```
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

### Scheduled snapshots

You can create snapshot schedules that will take recurring backups at a certain time each day, week month or at a specified interval. For more information on each of the options see <https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-snapshots/scheduled/> In this guide I'm going to create a daily policy that will create snapshots at a certain time each day. First create some `SchedulePolicy` objects:

```
echo "apiVersion: stork.libopenstorage.org/v1alpha1
kind: SchedulePolicy
metadata:
  name: daily
policy:
  daily:
    time: '10:00PM'
    retain: 3" | oc create -f -
```

```
echo "apiVersion: stork.libopenstorage.org/v1alpha1
kind: SchedulePolicy
metadata:
  name: ten-minute
policy:
  interval:
    intervalMinutes: 10
    retain: 3" | oc create -f -
```

Next create a storage class that references one or more schedule policies. Any PVCs created from the storage class will have all schedule policies applied, in my example I'm going to backup the PVC locally every ten minutes and at 10:00PM daily to cloud-storage:

```
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

Now we create a PVC from the storage class:

```
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

This should create some `volumeSnapshotSchedules`, in my case I have the following:

```
oc get volumesnapshotschedules

NAME                             AGE
test-schedule-daily-schedule     1m
test-schedule-default-schedule   1m
```

You can run a describe on these objects to ensure that they have created successfully and will be able to take snapshots.

## Further reading

There are more snapshot types and options that can be used, these are detailed in the Portworx documentation here: <https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-snapshots/>


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
