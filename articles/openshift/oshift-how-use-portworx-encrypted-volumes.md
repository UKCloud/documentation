---
title: How to use Portworx encrypted volumes | UKCloud Ltd
description: Explains how to use encrypted volumes in a Portworx integrated OpenShift cluster
services: openshift
author: Ben Bacon
reviewer:
lastreviewed: 09/10/2019
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use Portworx encrypted volumes
toc_fullpath: How To/oshift-how-use-portworx-encrypted-volumes.md
toc_mdlink: oshift-how-use-portworx-encrypted-volumes.md
---

# How to use Portworx encrypted volumes

## Overview

This article describes how encryption can be enabled for Portworx volumes. Portworx is a cloud-native storage solution that is now available as an integration with our OpenShift offering.

### Intended audience

This article assumes you have access to a Portworx integrated OpenShift 3.11 cluster and that you have cluster-admin rights. It also assumes familiarity with `oc`, the OpenShift command-line client. 

If you are interested in a free 30 day trial of Portworx, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Encryption Scope

Portworx uses passphrase encryption to protect volume data both at rest and in transit using an AES-256 cipher. Passphrases are stored as OpenShift secrets and can be set both cluster-wide and per volume. From here passphrases will be referred to as keys.

### Cluster-wide

Where a persistent volume claim (pvc) is created against a storage class that has the parameter `secure: "true"` set in its spec, the volume is encrypted using a cluster-wide key. 

This key can be set by using the following command to create a secret:

```
$ oc create secret generic px-vol-encryption --from-literal=cluster-wide-secret-key='<desired-key>' -n portworx
```

The name of the key within the `px-vol-encryption` secret needs to be passed to Portworx, which can be done with the below commands:

```
$ PX_POD=$(oc get pods -l name=portworx -n kube-system -o jsonpath='{.items[0].metadata.name}')

$ oc exec $PX_POD -n kube-system -c portworx -- /opt/pwx/bin/pxctl secrets set-cluster-key --secret cluster-wide-secret-key
```

Now that the cluster key has been set, pvcs created using a secure storage class will be encrypted with the key. Below is an example of a pvc spec using a storage class with encryption enabled:

```
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: pvc-with-cluster-key
spec:
  storageClassName: portworx-repl1-encrypted
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```

Alternatively you can set a pvc to use the cluster key when using a non-secure storage class by adding the following annotation to the pvc spec:

```
metadata:
  annotations:
    px/secure: "true"
```

### Per volume

As an alternative to using a cluster-wide key, it is possible to use a secret per persistent volume claim (pvc). The desired key should be stored within a secret in the portworx project and can be referenced in the pvc spec using the following annotations:

```
metadata:
  annotations:
    px/secret-name: volume-secrets-name
    px/secret-namespace: portworx
    px/secret-key: specific-pvc-key
```

`px/secret-name` refers to the secret object, `px/secret-namespace` should be portworx as the Portworx pods have privileges to read secrets in this project and `px/secret-key` refers to the specific key within the `px/secret-name` secret.

Below is an example spec for a pvc that is encrypted using an individual secret:

```
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: pvc-with-individual-key
  annotations:
    px/secret-name: volume-secrets
    px/secret-namespace: portworx
    px/secret-key: pvc-with-individual-key

spec:
  storageClassName: portworx-repl1
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```

## Further reading

https://2.1.docs.portworx.com/key-management/kubernetes-secrets/pvc-encryption-using-annotations/#portworx-encrypted-volumes

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
