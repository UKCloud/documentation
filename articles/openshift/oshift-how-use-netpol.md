---
title: How to use NetworkPolicy objects to connect services between projects | UKCloud Ltd
description: Shows how to create a basic NetworkPolicy object to connect services in two projects
services: openshift
author: Kieran O'Neill

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use NetworkPolicy objects
toc_fullpath: How To/oshift-how-use-netpol.md
toc_mdlink: oshift-how-use-netpol.md
---

# How to use NetworkPolicy objects to connect services between projects

## Overview

In v3.11 clusters deployed from mid-February 2019, the default SDN plugin has been changed from ovs-multitenant to ovs-networkpolicy. This gives you the ability to create NetworkPolicy objects which allow granular control over the flow of communication between the pods, services and projects inside your cluster. 

By default, we create a NetworkPolicy object, named allow-from-same-and-privileged-namespaces, in every project, including those created after the cluster is deployed. This object allows all pods to communicate with each other inside the same project and allows communication from all pods and services to the default and openshift-monitoring projects. This mirrors the default pod security provided with the ovs-multitenant plugin.

This document refers to namespaces and projects. A project is an OpenShift construct on top of a Kuberenetes namespace. For the purpose of this guide they can be thought of as the same thing, however, the `oc label` commands that are performed on a namespace must be applied to the namespace object, they will not work if you attempt to apply them to the project object.

## Verifying the cluster SDN

In order to verify if the cluster has the ovs-networkpolicy SDN you can use the following command:

```oc get clusternetwork```

This will show redhat/openshift-ovs-networkpolicy under the PLUGIN NAME. If this shows ovs-multitenant instead and you wish to use NetworkPolicy objects you will need to raise a service request to look at the options for switching SDN.

## Interacting with NetworkPolicy objects

You can interact with NetworkPolicy objects from the command line using the full name networkpolicy or short name netpol, for example:

`oc get netpol` - List NetworkPolicy objects in the current project.

`oc describe netpol <name>` - Provides more detailed information on the named NetworkPolicy object.

`oc get netpol <name> -o yaml` - Provides yaml output of the named NetworkPolicy object. Useful to reference existing rules when creating new objects.

## Example of connecting services from two different projects

NetworkPolicy objects are scoped at the project level. This means if you create a NetworkPolicy object using a template it will be created inside the project you're in and the rules will apply to pods within that project, with the exception of remote projects you may be referencing inside the rule. The object without any rules will look like the following:

```
apiVersion: extensions/v1beta1
kind: NetworkPolicy
metadata:
  name: <desired_name_of_object>
  namespace: <desired_project> (if not provided this will default to the project you are in when you run oc create)
spec:
```

Inside the spec key, you can pass in rules that determine what the NetworkPolicy object does. The first thing you need to consider is the pods you want to target. You can do this using the `podSelector` key.

You can use this to match all pods in a project or alternatively to match all pods with a certain label. You can leave the key blank to match all pods in a project or you can match all pods with a certain label. In our example, we want to match pods with the label `role=webserver`:

```
apiVersion: extensions/v1beta1
kind: NetworkPolicy
metadata:
  name: webserver-egress 
  namespace: webserver
spec:
  podSelector:
    matchLabels:
      role: webserver
```

We've matched the pods inside our webserver project that have the label `role=webserver`. Now we want to allow these pods to connect to a service inside a project we've named database. To do this, we'll use a namespace selector, which evaluates projects based on a label. In this case, we're going to be looking for the namespace label `database=true`. First, we need to ensure that this label is applied using the following command:

> [!NOTE]
> The cluster administrator role is required to add labels to namespaces.

``` oc label namespace database database=true ```

Our example NetworkPolicy object now looks like the following:

```
apiVersion: extensions/v1beta1
kind: NetworkPolicy
metadata:
  name: webserver-egress
  namespace: webserver
spec:
  podSelector:
    matchLabels:
      role: webserver
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          database: "true"
```

We now have a template for a NetworkPolicy object that matches any pods labeled `role=webserver` inside the webserver project and allows them to communicate out to any projects labeled `database=true`. This is only half the work; we still need the ingress allowance inside the database project. Our example template for that object looks like the following:

```
apiVersion: extensions/v1beta1
kind: NetworkPolicy
metadata:
  name: database-ingress
  namespace: database
spec:
  podSelector:
    matchLabels:
      role: database
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          webserver: "true"
```

This object is created in the database project and matches any pods in the project with the label `role=database` and allows ingress traffic from any project labeled `webserver=true`. To achieve our desired outcome, we need to label our webserver project as follows:

> [!NOTE]
> The cluster administrator role is required to add labels to namespaces.

``` oc label namespace webserver webserver=true ```

In our example, we've saved our templates in files called netpol.yaml and netpol1.yaml. Use the following commands to create the objects, substituting in the relevant filename:

``` oc create -f netpol.yaml ```

``` oc create -f netpol1.yaml ```

Now we've created the objects, any pods inside the webserver project matching the label `role=webserver` can communicate out to the service inside the database project exposed by pods matching the label `role=database`.

> [!NOTE]
> You can test connectivity by curling the desired target service from the terminal of a pod that has been allowed access to the service. You can find the terminal in the UI or use `oc rsh` to enter the pod.

## Further information

To get a full understanding of the capabilities and options of a NetworkPolicy object we recommend reading: <https://kubernetes.io/docs/concepts/services-networking/network-policies>

Documentation on efficient NetworkPolicy rules: <https://docs.openshift.com/container-platform/3.11/admin_guide/managing_networking.html#admin-guide-networking-using-networkpolicy-efficiently>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
