---
title: How to expand OpenShift persistent volumes | UKCloud Ltd
description: Outlines methods to expand OpenShift persistent volumes in v3.11 OpenShift clusters.
services: openshift
author: Gareth Ellner
reviewer:
lastreviewed: 
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to expand OpenShift persistent volumes
toc_fullpath: How To/oshift-how-expand-persistent-vols.md
toc_mdlink: oshift-how-expand-persistent-vols.md
---

# How to expand OpenShift persistent volumes

## Overview

In OpenShift clusters running OpenShift v3.11 or later, you can expand existing persistent volumes. In earlier versions (such as v3.9) you need to raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal so that UKCloud OpenShift administrators can facilitate the expansion.

> [!TIP]
> To check the version of your cluster, either click **(?)** in the top-right of the web UI and select **About** or run the following while connected in the CLI client:
>
> ```
> $ oc version
> ...
> Server https://console.5678-89abcd:8443
> openshift v3.11.51
> kubernetes v1.11.0+d4cacc0
> ```

> [!NOTE]
> You must scale down any pod or container using the volume before you can perform the expansion.

### Intended audience

To complete the steps in this article, you must have access to a cluster that is running OpenShift Container Platform v3.11 (or newer).

You must also have access to `oc`, the OpenShift command-line client (CLI). For more information, see OpenShift's [*Get Started with the CLI*](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html).

## Prerequisites

If the cluster is v3.11 or newer, the storage class should be enabled for Volume Expansion. You can confirm this as follows:

```
$ oc describe storageclass tier2
Name:                  tier2
IsDefaultClass:        Yes
Annotations:           storageclass.beta.kubernetes.io/is-default-class=true
Provisioner:           kubernetes.io/cinder
Parameters:            availability=nova,type=TIER2
AllowVolumeExpansion:  True
MountOptions:          <none>
ReclaimPolicy:         Delete
VolumeBindingMode:     Immediate
Events:                <none>
```

## Stop any pod that is using the volume

In this article, we'll expand the volume for a cluster's default Elasticsearch deployment, which is located in the `openshift-logging` project. The pod using the persistent volume in this example is named `logging-es-data-master` and the pvc (Persistent Volume Claim) name is `logging-es-0`. This is a common scenario - a high throughput of logs may cause Elasticsearch to enter a CrashLoop when the logging volume fills up.

You can apply the same procedure to any other pods that use persistent volumes.

```
$ oc project openshift-logging
Now using project "openshift-logging" on server "https://console.5678-89abcd:8443".
$ oc get pods
NAME                                      READY     STATUS      RESTARTS   AGE
logging-es-data-master-7bqadxxd-1-wrlqh   2/2       Running     2          2d
...
logging-kibana-1-n7j8t                    2/2       Running     2          2d
$ oc get dc
NAME                              REVISION   DESIRED   CURRENT   TRIGGERED BY
logging-es-data-master-7bqadxxd   1          1         1
logging-kibana                    1          1         1         config
```

In this example, the `logging-kibana` pod depends on the `logging-es-data-master` pod so it's good practice to also scale this down during the expansion of the persistent volume for `logging-es-data-master`:

```
$ for i in $(oc get dc | awk 'NR>1 {print $1}') ; do oc scale --replicas=0 dc $i; done
deploymentconfig.apps.openshift.io/logging-kibana scaled
deploymentconfig.apps.openshift.io/logging-es-data-master-7bqadxxd scaled

# For a single deployment, generally:
oc scale --replicas=0 dc <deployment_name>
```

Confirm that the pod that uses the volume has been terminated:

```
$ oc get pods | grep logging-es-data-master
# (nothing returned)
```

## Resize the persistent volume

Once the pod dependent on the volume is stopped, you can edit the pvc to resize the volume:

```
$ oc get pvc
NAME           STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
logging-es-0   Bound     pvc-4ad7258e-12a6-11e9-bc9d-fa163e12bba5   20Gi       RWO            tier2          2d
$ oc edit pvc logging-es-0
...
```

`oc edit` causes the configuration of the object to open in a text editor. Edit the size within the `spec:` array only (do not touch the size listed under `status:`):

```
...
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 30Gi   # (edited from 20Gi)
  storageClassName: tier2
...
```

When the edit is completed, the pvc will *continue to show the old size* but will be listed as being in a `FileSystemResizePending` state:

```
$ oc describe pvc logging-es-0
Name:          logging-es-0
Namespace:     openshift-logging
StorageClass:  tier2
Status:        Bound
Volume:        pvc-4ad7258e-12a6-11e9-bc9d-fa163e12bba5
Labels:        logging-infra=support
Annotations:   pv.kubernetes.io/bind-completed=yes
               pv.kubernetes.io/bound-by-controller=yes
               volume.beta.kubernetes.io/storage-provisioner=kubernetes.io/cinder
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      20Gi
Access Modes:  RWO
Conditions:
  Type                      Status  LastProbeTime                     LastTransitionTime                Reason  Message
  ----                      ------  -----------------                 ------------------                ------  -------
  FileSystemResizePending   True    Mon, 01 Jan 0001 00:00:00 +0000   Thu, 11 Apr 2019 17:43:26 +0000           Waiting for user to (re-)start a pod to finish file system resize of volume on node.
Events:                     <none>
```

## Scale up the pod

When you start the pod that uses the persistent volume, the persistent volume will be resized as it starts.

Since we scaled down the `logging-es-data-master` deployment and its dependent `logging-kibana` in this example, we'll scale up both deployments:

```
$ for i in $(oc get dc | awk 'NR>1 {print $1}') ; do oc scale --replicas=1 dc $i; done
deploymentconfig.apps.openshift.io/logging-kibana scaled
deploymentconfig.apps.openshift.io/logging-es-data-master-7bqadxxd scaled

# For a single deployment, generally:
oc scale --replicas=1 dc <deployment_name>
```

Once the pod has started, you can check the file system has resized correctly by logging into the new pod and checking the mount point for the new size:

```
$ oc rsh logging-es-data-master-7bqadxxd-1-7rb9x
sh-4.2$ df -h                                  
Filesystem                             Size  Used Avail Use% Mounted on
...
/dev/vdd                               30G  7.5G   23G  33% /elasticsearch/persistent
...
```

## Further reading

<https://docs.openshift.com/container-platform/3.11/dev_guide/expanding_persistent_volumes.html#expanding_file_system_pvc>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
