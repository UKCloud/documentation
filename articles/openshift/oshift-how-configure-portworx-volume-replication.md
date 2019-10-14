---
title: How to configure Portworx replication | UKCloud Ltd
description: Explains how to configure volume replication in a Portworx integrated OpenShift cluster
services: openshift
author: Ben Bacon
reviewer:
lastreviewed: 14/10/2019
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure Portworx volume replication
toc_fullpath: How To/oshift-how-configure-portworx-volume-replication.md
toc_mdlink: oshift-how-configure-portworx-volume-replication.md
---

# How to configure Portworx volume replication

## Overview

Portworx is a cloud-native storage solution that is now available as an integration with our OpenShift offering. This article describes how to configure replication for Portworx volumes and provides an overview of Portworx failover capabilities.

### Intended audience

This article assumes you have access to a Portworx integrated OpenShift 3.11 cluster and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. 

If you're interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Replication

Portworx runs as a container on all compute nodes in a cluster and stores volume data on block storage attached to each of these nodes. This volume data can be synchronously replicated between nodes to provide redundancy and increase read speed using parallelism across nodes.

### Configuring replication factor

The replication factor of a volume is determined by the storage class from which a persistent volume claim is created. Below is the parameter that can be set to a value between 1 and 3 within the storage class spec:

```
parameters:
   repl: "2"
```

In the event that a pod is running on a node which becomes isolated, the pod can be scheduled to an alternate node provided there is a replica on that same node.

Below is an example spec for a storage class with a replication factor of 3:

```
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
    name: portworx-repl3
provisioner: com.openstorage.pxd
parameters:
   repl: "3"
```

### Modifying a volume replication factor

It is possible to increase or decrease the replication factor for a Portworx volume after it has been created using the `pxctl` command. Before proceeding, you will need to identify the volume name for the persistent volume claim:

```
$ oc get pvc | awk '{print $1" "$3}'
NAME VOLUME
pvc-repl2 pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
```

The current replication factor and the nodes storing the replicas should be verified, substituting the volume name returned in the previous step:

```
$ PX_POD=$(oc get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')

$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl volume inspect pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e | grep -E 'HA|Node'
	HA              	 :  2
		  Node 		 : 10.254.254.14 (Pool 0)
		  Node 		 : 10.254.254.12 (Pool 0)
```

Excluding the IPs from the previous output we can retrieve the remaining node which the volume is not being replicated to:

```
$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl cluster list | grep -vE '10.254.254.14|10.254.254.12'
Cluster ID: px-cluster-0db6c5ee-f3e9-4773-a863-3eb77d8d30ca
Cluster UUID: 48f080dd-56f2-4d4e-8df4-99cf5dbfd8a9
Status: OK

Nodes in the cluster:
ID					SCHEDULER_NODE_NAME		DATA IP		CPU		MEM TOTAL	MEM FREE	CONTAINERS	VERSION			Kernel				OS						STATUS
6dcb56bc-9402-41ea-b819-56f2c9e1c742	worker-tenant-m-0.ben-sandbox	10.254.254.13	2.402023	17 GB		15 GB		N/A		2.1.3.0-651d5d4		3.10.0-957.21.2.el7.x86_64	Red Hat Enterprise Linux Atomic Host 7.6.5	Online
```

The volume can be replicated to the remaining node:

```
$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl volume ha-update --repl=3 --node 6dcb56bc-9402-41ea-b819-56f2c9e1c742 pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
Update Volume Replication: Replication update started successfully for volume pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
```

Verify that the volume has been replicated to the additional node:

```
$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl volume inspect pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e | grep -E 'HA|Node'
	HA              	 :  3
		  Node 		 : 10.254.254.14 (Pool 0)
		  Node 		 : 10.254.254.12 (Pool 0)
		  Node 		 : 10.254.254.13 (Pool 0)
```

A replica can be removed from a node by specifying the node ID and reducing the replication factor:

```
$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl volume ha-update --repl=2 --node 6dcb56bc-9402-41ea-b819-56f2c9e1c742 pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
Update Volume Replication: Replication update started successfully for volume pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
```

## Failover

During a failover event (when using non-Portworx provisioned persistent volumes) the backing block storage device requires reattaching to the node where a pod is rescheduled. This can lead to increased recovery times, which Portworx aims to reduce through replication and a storage-aware scheduler which can schedule pods to nodes where a replica exists.

### The STORK scheduler

STORK (STorage Operator Runtime for Kubernetes) is an open source storage scheduler plugin that extends the default scheduler by exposing information regarding the capabilities and state of the underlying storage provider. Using a storage-aware scheduler improves scheduling decisions resulting in improved performance and reduced recovery times for persistent volumes.

To configure your pods to use the STORK scheduler, you should add the following to your pod spec:

```
schedulerName: stork
```

## Further reading

<https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-pvcs/dynamic-provisioning/#using-dynamic-provisioning>

<https://github.com/libopenstorage/stork/blob/master/README.md>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
