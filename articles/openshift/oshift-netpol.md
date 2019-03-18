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
toc_title: Using network policy
toc_fullpath: How To/oshift-netpol.md
toc_mdlink: oshift-netpol.md
---

# How to use NetworkPolicy objects to connect services between projects

## Overview

In v3.11 clusters, deployed from mid-February 2019, the default SDN plugin has been changed from ovs-multitenant to ovs-networkpolicy. This gives you the ability to create NetworkPolicy objects which allow granular control over the flow of communication between pods/services/projects inside your cluster. 

By default we put in place NetworkPolicy objects that allow all pods to communicate with each other inside the same project and allow communication from all pods/services to the default and openshift-monitoring projects. This mirrors the default pod security provided with the ovs-multitenant plugin. One of these objects will exist in all projects, including projects created after the cluster is deployed and have the name 'allow-from-same-and-privileged-namespaces'

## Interacting with NetworkPolicy objects

NetworkPolicy objects can interacted with on the command line using the full name networkpolicy or short name netpol, for example:

``` oc get netpol ``` - List NetworkPolicy objects in the current project.

``` oc describe netpol <name> ``` - Provides more detailed information on the NetworkPolicy object.

``` oc get netpol <name> -o yaml ``` - Provides yaml output of the NetworkPolicy object. Useful to reference existing rules when creating new objects.

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

Inside the spec field we'll pass in the rules that will determine what our NetworkPolicy object does. The first thing you need to consider is the pods you want to target, this is done using the podSelector field. 
You can use this to match all pods in a project or alternatively to match all pods with a certain label. If you leave this field blank it will match all pods. If you want to match pods with the label 'role=webserver' 
it would look like:

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

At this point we've matched the pods inside our webserver project that have the label role=webserver. Let's say for example we want to allow these pods to connect to a service inside a project we've named 'database' we could
achieve this using a namespace selector, which evaluates projects based on a label. In this case we are going to be looking for the namespace label database=true. Firstly we need to ensure this label is applied using the 
following command:

> [!NOTE]
> The cluster administrator role is required to add labels to namespaces.

``` oc label namespace database database=true ```

Our netpol object will now look like:

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

We now have a template for a NetworkPolicy object that will match any pods labeled role=webserver inside the webserver project and allow them to communicate out to any projects labeled database=true. This is only half of the work,
if we created this object now our desired connectivity would not work as we still need the ingress allowance inside the database project. The template for that object will look like:

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

This object will be created in the database project, it will match any pods in the project with the label "role=database" and allow ingress traffic from any project labeled "webserver=true" in order to achieve our desired outcome we will need to label our webserver project:

> [!NOTE]
> The cluster administrator role is required to add labels to namespaces.

``` oc label namespace webserver webserver=true ```

We are now ready to create our objects, in my case the objects have been saved in files called netpol.yaml and netpol1.yaml, substitute the relevant filenames for your environment into the below commands:

``` oc create -f netpol.yaml ```

``` oc create -f netpol1.yaml ```

Now we have created the objects any pods inside the webserver project matching the label role=webserver will be able to communicate out to the service inside the database project exposed by pods matching the label role=database.

> [!NOTE]
> You can test connectivity by curling the desired target service from the terminal of a pod which has been allowed access to the service. You can find the terminal in the UI or use 'oc rsh' to enter the pod.

## Further reading

In order to get a full understanding of the capabilities and options of a NetworkPolicy object we recommend reading: <https://kubernetes.io/docs/concepts/services-networking/network-policies>

Documemtation on efficient netpol rules: <https://docs.openshift.com/container-platform/3.11/admin_guide/managing_networking.html#admin-guide-networking-using-networkpolicy-efficiently>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
