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

This is a step-by-step guide on expanding persistent storage volumes from the command line. In order to follow this guide your OpenShift cluster needs to be v3.11 or later, you need access to the OpenShift command line tools and you need sufficient permissions to edit the PersistentVolumeClaim that is bound to the target storage.

## Steps

1. Scale down the pod that has the persistent storage attached. Depending whether the pod is backed by a DeploymentConfig or    ReplicationController you will need to specify either rc or dc as the object type in the following command (in my example    I'm targeting a DeploymentConfig named test):
    
   ```
   oc scale --replicas=0 dc test
   ```
   
2. Once the scaling is complete you can edit the PersistentVolumeClaim and adjust the spec.resources.requests.storage value.    For example my PV is currently 20Gi and I want it to be 30Gi. I will edit the spec section from:
  
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

   To:

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
  
   The command used to edit the PersistentVolumeClaim is (in my example the pvc is called test-pvc):
  
   `oc edit pvc test-pvc`
  
   This takes you to a vi interface, use :wq to save your changes.
   
3. At this point if you run `oc describe pvc test-pvc` the capacity will still show as 20Gi but you'll notice in the         conditions section there is a message similiar to:

   ```
   Conditions:
     Type                      Status  LastProbeTime                     LastTransitionTime                Reason  Message
     ----                      ------  -----------------                 ------------------                ------  -------
     FileSystemResizePending   True    Mon, 01 Jan 0001 00:00:00 +0000   Tue, 02 Apr 2019 09:58:23 +0000           Waiting    for user to (re-)start a pod to finish file system resize of volume on node.
   ```

   Now you can scale your application back up, the filesystem of the volume will automatically be resized and the     PersistentVolumeClaim (and bound PersistentVolume) will be the new size specified.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
