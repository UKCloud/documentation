---
title: How to use Portworx shared volumes | UKCloud Ltd
description: Explains how to use shared volumes in a Portworx integrated OpenShift cluster
services: openshift
author: Ben Bacon
reviewer:
lastreviewed: 16/10/2019
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use Portworx shared volumes
toc_fullpath: How To/oshift-how-use-portworx-shared-volumes.md
toc_mdlink: oshift-how-use-portworx-shared-volumes.md
---

# How to use Portworx shared volumes

## Overview

Portworx is a cloud-native storage solution that is now available as an integration with our OpenShift offering. This article describes how to create shared volumes.

### Intended audience

This article assumes you have access to a Portworx integrated OpenShift 3.11 cluster and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. 

If you're interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Shared volumes

Portworx enables persistent volumes claims to be mounted to multiple containers across multiple nodes enabling ease of pod-scaling.

### Storage Class

We create a number of storage classes when provisioning an OpenShift cluster with the Portworx integration, below is an example of a storage class from which shared persistent volume claims (pvc) with a single replica can be provisioned:

```
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
    name: portworx-repl1-shared
provisioner: com.openstorage.pxd
parameters:
   repl: "1"
   shared: "true"
```

If you want to use different attributes to the pre-provisioned storage classes, below are the values which must be included within the spec:

```
provisioner: com.openstorage.pxd
parameters:
	shared: "true"
```

> [!IMPORTANT]
> Within OpenShift, Portworx shared volumes make use of the Container Storage Interface (CSI) via the `com.openstorage.pxd` provisioner. OpenShift 3.11 uses v0.3 of the CSI spec which is a beta release so use of shared volumes is not recommended within a production environment.

### Creating a persistent volume claim

Below is persistent volume claim (pvc) spec using a shared storage class, note the `ReadWriteMany` access mode:

```
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
   name: pvc-shared
   annotations:
     volume.beta.kubernetes.io/storage-class: portworx-repl1-shared
spec:
   accessModes:
     - ReadWriteMany
   resources:
     requests:
       storage: 10Gi
```

Once you have created the pvc, verify that its status shows as `Bound` to confirm it has been provisioned by Portworx:

```
$ oc get pvc
NAME             STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS            AGE
pvc-shared   Bound     pvc-3654b857-efa1-11e9-8422-fa163e52fd0e   10Gi       RWX            portworx-repl1-shared   1m
```

### Verifying a shared volume

We can verify that a shared persistent volume is working as expected by creating two deployments which schedule to different nodes and mount the same volume. This example assumes you have created a shared volume named `pvc-shared`. On your machine, create a file named `sharedvolumedemo.yaml` with the below contents:

```
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: portworx-sharedvolumedemo-a
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: portworx-sharedvolumedemo
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: node-role.kubernetes.io/compute
                operator: Exists
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: app
                  operator: In
                  values:
                  - portworx-sharedvolumedemo
              topologyKey: kubernetes.io/hostname
      volumes:
      - name: shared-data
        persistentVolumeClaim:
          claimName: pvc-shared
      containers:
      - name: debian-container
        image: debian
        volumeMounts:
        - name: shared-data
          mountPath: /pod-data
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: "250m"
          requests:
            cpu: "250m"
        command: ["/bin/sh"]
        args:
          - "-c"
          - >
            while true; do
              sleep 300;
            done
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: portworx-sharedvolumedemo-b
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: portworx-sharedvolumedemo
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: node-role.kubernetes.io/compute
                operator: Exists
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: app
                  operator: In
                  values:
                  - portworx-sharedvolumedemo
              topologyKey: kubernetes.io/hostname
      volumes:
      - name: shared-data
        persistentVolumeClaim:
          claimName: pvc-shared
      containers:
      - name: debian-container
        image: debian
        volumeMounts:
        - name: shared-data
          mountPath: /pod-data
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: "250m"
          requests:
            cpu: "250m"
        command: ["/bin/sh"]
        args:
          - "-c"
          - >
            while true; do
              date >> /pod-data/sharedfile;
              echo Hello from the second pod >> /pod-data/sharedfile;
              sleep 1;
            done

```

You can now create the deployments with command: `oc create -f sharedvolumedemo.yaml` which should output:
```
deployment.extensions/portworx-sharedvolumedemo-a created
deployment.extensions/portworx-sharedvolumedemo-b created
```

Once the deployments have been created, retrieve the pod names which have been created by the ReplicaSet and verify that these have been scheduled to different nodes:

```
$ oc get pods -o wide
NAME                                           READY     STATUS    RESTARTS   AGE       IP            NODE                            NOMINATED NODE
portworx-sharedvolumedemo-a-5c5f975f5-sbphh    1/1       Running   0          38s       10.128.4.8    worker-tenant-m-2.portworx-demo   <none>
portworx-sharedvolumedemo-b-57896c87dd-t55vs   1/1       Running   0          38s       10.131.0.10   worker-tenant-m-0.portworx-demo   <none>
```

The `b` pod writes the current datetime and a message to a file every minute on the mounted shared volume. With the `a` pod, we can tail this same file on the shared volume to verify that the volume is mounted to multiple pods across multiple nodes:

```
$ date
Wed Oct 16 11:36:45 UTC 2019
$ oc exec portworx-sharedvolumedemo-a-5c5f975f5-sbphh -- /usr/bin/tail -n 4 /pod-data/sharedfile
Wed Oct 16 11:36:45 UTC 2019
Hello from the second pod
Wed Oct 16 11:36:46 UTC 2019
Hello from the second pod

```

## Further reading

<https://docs.portworx.com/concepts/shared-volumes/>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
