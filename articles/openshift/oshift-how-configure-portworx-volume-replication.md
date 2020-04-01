---
title: How to configure Portworx replication
description: Explains how to configure volume replication in a Portworx integrated OpenShift cluster
services: openshift
author: Ben Bacon
reviewer:
lastreviewed: 14/10/2019
toc_rootlink: How To
toc_sub1: Use Portworx with OpenShift
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Configure Portworx volume replication
toc_fullpath: How To/Use Portworx with OpenShift/oshift-how-configure-portworx-volume-replication.md
toc_mdlink: oshift-how-configure-portworx-volume-replication.md
---

# How to configure Portworx volume replication

## Overview

Portworx is a cloud-native storage solution that is now available as an integration with our OpenShift offering. This article describes how to configure replication for Portworx volumes. 

### Intended audience

This article assumes you have access to a Portworx integrated OpenShift 3.11 cluster (or later) and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. For one of the steps you will also need to have `jq` installed.

If you're interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Replication

Portworx runs as a container on all compute nodes in a cluster and stores volume data on block storage attached to each of these nodes. This volume data can be synchronously replicated between nodes to provide redundancy and increase read speed using parallelism across nodes.

### Configuring the replication factor

The replication factor of a volume is determined by the storage class from which a persistent volume claim is created. Use the following parameter to set the replication factor to a value between 1 and 3 within the storage class spec:

```none
parameters:
   repl: "2"
```

If a pod is running on a node that becomes isolated, the pod can be scheduled to an alternate node provided there is a replica on that same node.

The following example shows the spec for a storage class with a replication factor of 3:

```none
kind: StorageClass
apiVersion: storage.k8s.io/v1beta1
metadata:
    name: portworx-repl3
provisioner: kubernetes.io/portworx-volume
parameters:
   repl: "3"
```

### Modifying a volume replication factor

You can increase or decrease the replication factor for a Portworx volume after it has been created using the Portworx command line tool `pxctl`. For the purpose of this article, we will use a persistent volume claim named pvc-repl2.

1. Before proceeding, identify the volume name for the persistent volume claim and store this to an environment variable so it can be referenced in multiple commands:

    ```none
    $ VOLUME=$(oc get pvc pvc-repl2 -o custom-columns=VOLUME:.spec.volumeName --no-headers)

    $ echo $VOLUME
    pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
    ```

    > [!NOTE]
    > The `pxctl` binary is available within the Portworx container, therefore the easiest way to execute commands against the Portworx cluster is to do so remotely using the [`oc exec`](https://docs.openshift.com/container-platform/3.11/dev_guide/executing_remote_commands.html) command. 

2. To reduce command complexity, we will set an environment variable named PX_POD containing the name of a Portworx pod so we can re-use it throughout the article.

    ```none
    $ PX_POD=$(oc get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')

    $ echo PX_POD
    portworx-7cqq6
    ```

3. Verify the current replication factor and the IPs of the nodes storing the replicas:

    ```none
    $ oc exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl volume inspect $VOLUME | grep -E 'HA|Node'
            HA                        :  2
                      Node            : 10.254.254.14 (Pool 0)
                      Node            : 10.254.254.12 (Pool 0)
    ```

4. To replicate the volume to an additional node, we need to determine its Portworx node ID. To do so we will export the ID and IP for each node. In this case, by eliminating the IPs returned in the previous step we can identify that the remaining node ID is 6dcb56bc-9402-41ea-b819-56f2c9e1c742:

    ```none
    $ oc exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl cluster list -j | jq '(.cluster.Nodes[] | {"ID": .Id, "IP": .DataIp})'
    {
        "ID": "6dcb56bc-9402-41ea-b819-56f2c9e1c742",
        "IP": "10.254.254.13"
    }
    {
        "ID": "433f83c2-32d1-458e-a71c-b0d56cb29023",
        "IP": "10.254.254.14"
    }
    {
        "ID": "a1993b47-2c97-4847-94d7-3eb79962d3cc",
        "IP": "10.254.254.12"
    }
    ```

5. You can then replicate the volume to the remaining node:

    ```none
    $ oc exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl volume ha-update --repl=3 --node 6dcb56bc-9402-41ea-b819-56f2c9e1c742 $VOLUME
    Update Volume Replication: Replication update started successfully for volume pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
    ```

6. Verify that the volume has been replicated to the additional node:

    ```none
    $ oc exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl volume inspect $VOLUME | grep -E 'HA|Node'
            HA                       :  3
                       Node          : 10.254.254.14 (Pool 0)
                       Node          : 10.254.254.12 (Pool 0)
                       Node          : 10.254.254.13 (Pool 0)
    ```

7. You can remove a replica from a node by specifying the node ID and reducing the replication factor:

    ```none
    $ oc exec $PX_POD -n kube-system -- /opt/pwx/bin/pxctl volume ha-update --repl=2 --node 6dcb56bc-9402-41ea-b819-56f2c9e1c742 $VOLUME
    Update Volume Replication: Replication update started successfully for volume pvc-e15d82b2-ed46-11e9-8422-fa163e52fd0e
    ```

## Further reading

<https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-pvcs/dynamic-provisioning/#using-dynamic-provisioning>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
