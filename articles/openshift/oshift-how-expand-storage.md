---
title: How to expand persistent volumes | UKCloud Ltd
description: Shows how to expand persistent volumes using the OpenShift CLI
services: openshift
author: Kieran O'Neill

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Expand persistent volumes
toc_fullpath: How To/oshift-how-expand-storage.md
toc_mdlink: oshift-how-expand-storage.md
---

# How to expand persistent volumes

## Overview

This is a step-by-step article showing how to expand persistent storage volumes from the command line.

### Intended audience

To complete the steps in this article:

- Your OpenShift cluster needs to be v3.11 or later

- You need access to the OpenShift command line tools

- You need sufficient permissions to edit the PersistentVolumeClaim that is bound to the target storage

## Pre-checks

Before you can carry out this task you need to confirm the storage class can be expanded. We currently support this on OpenStack Cinder backed persistent volumes only. To verify if your storage class is based on this carry out the following checks.

In this example we're verifying that the `tier2` storage class is able to be expanded.

```none
oc describe sc tier2

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

You can see from the `Provisioner` that this is OpenStack Cinder based storage, and from the `AllowVolumeExpansion: True` parameter that this storage class has expansion enabled.

With this example we are able to proceed.

## Expanding persistent volumes

To expand a persistent storage volume from the command line:

1. Scale down the pod that has the persistent storage attached. Depending whether the pod is backed by a `DeploymentConfig` or    `ReplicationController` you'll need to specify either `rc` or `dc` as the object type in the following command (the example below targets a `DeploymentConfig` named test):
    
   ```
   oc scale --replicas=0 dc test
   ```
   
2. Once the scaling is complete, you can edit the `PersistentVolumeClaim` and adjust the `spec.resources.requests.storage` value. In the example, we're changing the persistent volume from 20Gi to 30Gi, by editing the `spec` section as follows:
  
   ```
   spec:
     accessModes:
     - ReadWriteOnce
     resources:
       requests:
         storage: 20Gi
     storageClassName: tier2
     volumeName: pvc-eaa490f7-4afd-11e9-bb37-fa163e0da1a5
   ```

   Changed to:

   ```
   spec:
     accessModes:
     - ReadWriteOnce
     resources:
       requests:
         storage: 30Gi
     storageClassName: tier2
     volumeName: pvc-eaa490f7-4afd-11e9-bb37-fa163e0da1a5
     ```
  
   The command used to edit the `PersistentVolumeClaim` is (using an example `pvc` called `test-pvc`):
  
   ```
   oc edit pvc test-pvc
   ```
  
   This takes you to a vi interface, use `:wq` to save your changes.
   
3. At this point if you run `oc describe pvc test-pvc`, the capacity will still show as 20Gi but you'll notice in the `Conditions` section there is a message similiar to:

   ```
   Conditions:
     Type                      Status  LastProbeTime                     LastTransitionTime                Reason  Message
     ----                      ------  -----------------                 ------------------                ------  -------
     FileSystemResizePending   True    Mon, 01 Jan 0001 00:00:00 +0000   Tue, 02 Apr 2019 09:58:23 +0000           Waiting    for user to (re-)start a pod to finish file system resize of volume on node.
   ```

   Now you can scale your application back up, the file system of the volume will automatically be resized and the     `PersistentVolumeClaim` (and bound `PersistentVolume`) will be the new size specified.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
