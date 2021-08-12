---
title: How to use NetworkPolicy objects to connect services
description: Shows how to create a NetworkPolicy objects to connect services in two projects
services: openshift
author: Gareth Ellner
reviewer: 
lastreviewed: 

toc_rootlink: How To
toc_sub1: OpenShift v4.x
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use NetworkPolicy objects in OpenShift v4
toc_fullpath: How To/OpenShift v4.x/oshift-how-use-netpol-v4.md
toc_mdlink: oshift-how-use-netpol.md
---

# How to use NetworkPolicy objects to connect services between projects

## Overview

By default you'll find NetworkPolicy objects, named `allow-from-same-namespace` and `allow-from-ingress-routers` in every project created after the cluster is deployed (in clusters deployed since May 2021). The effect of these is to ensure that pod IPs and services are only accessible from pods inside that same project, or via routes.

This document refers to namespaces and projects. A project is an OpenShift construct on top of a Kubernetes namespace. For the purpose of this guide you can think of them as the same thing, however, you must apply the `oc label` commands that you perform on a namespace to the namespace object; they will not work if you attempt to apply them to the project object.

> [!NOTE]
> If your OpenShift v4 cluster was deployed before May 2021 and you'd like the NetworkPolicy objects added to the default project template, raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Interacting with NetworkPolicy objects

You can interact with NetworkPolicy objects from the command line using the full name NetworkPolicy or short name netpol, for example:

`oc get netpol` - List NetworkPolicy objects in the current project.

`oc describe netpol <name>` - Provides more detailed information on the named NetworkPolicy object.

`oc get netpol <name> -o yaml` - Provides yaml output of the named NetworkPolicy object. Useful to reference existing rules when creating new objects.

> [!NOTE]
> If you delete the default NetworkPolicy objects from a project, that project's Pod IPs and services will be accessible from all other projects. This is not recommended; it's preferable to explicitly specify additional NetworkPolicy objects to enable the required cross-project communication. Only users with cluster-admin priviledges can add, edit or delete NetworkPolicies from a project.

## Example of connecting services from two different projects

NetworkPolicy objects are scoped at the project level. This means if you create a NetworkPolicy object using a template it will be created inside the project you're in and the rules will apply to pods within that project. The object without any rules will look like the following:

```none
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: <desired_name_of_networkpolicy>
  namespace: <desired_project> #(if not provided this will default to the project you are in when you run oc create)
spec:
```

Inside the spec key, you can pass in rules that determine what the NetworkPolicy object does.

### Matching specific pods using podSelector clauses

You can use this to match all pods in a project, or alternatively to match all pods with a certain label. You can leave the key blank to match all pods in a project or you can match all pods with a certain label. In our example, we want to match pods with the label `role=webserver`:

```none
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: webserver-ingess
  namespace: database
spec:
  podSelector:
    matchLabels:
      role: webserver
```

### Matching all pods in specific projects using namespaceSelector clauses

Alternatively, you may want to allow all pods in one or more project(s) to connect to a service inside the "database" project. To do this, use a namespace selector, which evaluates projects based on a label. In our example, we're going to be looking for the namespace label `webserveraccess=true`. First, we need to ensure that this label is applied to one or more project(s) using the following command:

> [!NOTE]
> Your user must have cluster-admin privileges to add labels to namespaces and to create NetworkPolicies.

```none
oc label namespace exampleproject webserveraccess=true
```

```none
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: webserver-namespace-access
  namespace: database
spec:
  namespaceSelector:
    matchLabels:
      webserveraccess: true
```

In our example, we've saved our templates in files called `netpol.yaml`. Use the following command to create the object, substituting in the relevant filename:

```none
oc create -f netpol.yaml
```

> [!NOTE]
> You can test connectivity by curling the desired target service from the terminal of a pod that has been allowed access to the service. You can find the terminal in the UI or use `oc rsh` to enter the pod.

## Further information

To get a full understanding of NetworkPolicy objects in OpenShift v4 we recommend reading: <https://docs.openshift.com/container-platform/4.7/networking/network_policy/about-network-policy.html>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
