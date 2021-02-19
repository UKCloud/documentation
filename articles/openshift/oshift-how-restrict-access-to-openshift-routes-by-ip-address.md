---
title: How to restrict access to OpenShift routes by IP address
description: Restrict access to OpenShift routes by IP address
services: openshift
author: Mudasar Hussain
reviewer: Steve Mulholland
lastreviewed: 21/12/2020 10:46:43
toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Restrict access to OpenShift routes by IP address
toc_fullpath: How To/restrict-access-to-openshift-routes-by-ip-address.md
toc_mdlink: oshift-how-restrict-access-to-openshift-routes-by-ip-address.md
---

# How to restrict access to OpenShift routes by IP address

## Overview

This knowledge centre article explains how OpenShift developers can restrict access to the routes they create to their deployed services in OpenShift by IP address. Restricting access in this way increases the security of a route by allowing only trusted IPs to access the OpenShift route.

### Intended audience

OpenShift developers who have created and deployed services into OpenShift, and created and exposed routes for those services. This article describes how to further secure access to those exposed routes by allowing only trusted IPs to access them.

## Restricting access to a route

After creating and exposing a route in OpenShift in the usual manner, you can then add an annotation to the route specifying the IP address(es) that you would like to add to the allow-list.

> [!IMPORTANT]
> Adding this annotation for an IP address or list of addresses/subnets automatically denies all traffic from addresses outside this list.

You apply the annotation to a route in the following manner:

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="<ip_address>"

> [!IMPORTANT]
> You must do this for every route that you wish to apply the restriction to.

## Examples

To allow a single IP address through to the route, use the following:

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="192.168.1.10"

To allow several IP addresses through to the route, separate each IP with a space (do not use commas to separate IPs):

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="192.168.1.10 192.168.1.11 192.168.1.12"

To allow a CIDR block through to the route, declare the CIDR block as so:

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="192.168.1.10/24"

You can even use a mix of IP addresses and a CIDR block:

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="192.168.1.10 180.5.61.153 192.168.1.0/24 10.0.0.0/8"

To delete the IPs from the annotation, you can run the command:

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist-
    
## Known issues   

As of OpenShift version 4.4+, pod DNS lookups will return the internal IP of a route rather than the public IP. This means traffic will not leave the cluster for pod to route communication. For a route with an allow-list to accept traffic from a pod in the same cluster, you must add the internal cluster subnet to the allow-list rather than the cluster's egress IP. The following examples show a lookup from a local client machine and from inside a pod, demonstrating the difference in resolution:

**DNS lookup on local machine:**

 ![Local machine lookup](images/oshift-local-lookup.png)

**DNS lookup from inside a pod:**

 ![Pod lookup](images/oshift-pod-lookup.png)

In this case you would run the following command to apply an allow-list to your route (assuming your cluster local subnet is 10.0.0.0/24):

    oc annotate route <route_name> haproxy.router.openshift.io/ip_whitelist="10.0.0.0/24"

## More information

For further information, see the following OpenShift documentation:

- [OpenShift v3](https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html)

- [OpenShift v4](https://docs.openshift.com/container-platform/4.5/networking/routes/route-configuration.html)

> [!IMPORTANT]
> This functionality is available by default in UKCloud for Managed OpenShift deployments of version 3.10 or later. For all previous versions, you must raise a request with UKCloud to have this functionality enabled.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
