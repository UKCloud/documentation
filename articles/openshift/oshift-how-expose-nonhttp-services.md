---
title: How to expose non-http services externally | UKCloud Ltd
description: Explains how to expose services outside of your OpenShift cluster without using HTTP or HTTPS
services: openshift
author: Kieran O'Neill

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Expose non-http services externally
toc_fullpath: How To/oshift-how-expose-nonhttp-services.md
toc_mdlink: oshift-how-expose-nonhttp-services.md
---

# How to expose non-http services externally

## Overview

UKCloud for OpenShift enables you to develop, deploy, and manage digital and container-based applications seamlessly across local physical or virtual environments, with full portability to and from UKCloud.

This article explains how you can expose services outside of your OpenShift cluster without using routes.

### Intended audience

This article assumes familiarity with services and routes in OpenShift and access to an account with cluster-admin permissions.

## Prerequisites

To complete the steps in this guide, your cluster must have been deployed from a version of our code that enables our non-http functionality. You can raise a support ticket to: 

- Check if your cluster already provides non-http functionality

- Request a new cluster to be deployed incorporating our non-http functionality.

## Getting the external IP

You'll need to raise a support ticket with us that provides the network you'd like to expose services on and the ports/protocols of the services you'll be exposing. We'll run a stack update against your environment to create the virtual infrastructure needed and provide you with the publicly accessible IP and the local IP this maps to. The local IP will be important for the upcoming steps.

> [!NOTE]
> You can request multiple ports/protocols and networks for external services.

## Exposing your service

Now you need to create the service you would like to expose. Create the service as usual, then patch the local IP we gave you into the service as its external IP using the following command (the example uses a local IP of 10.2.1.120):

```
oc patch svc <service_name> '{"spec":{"externalIPs":["10.2.1.120"]}}'
```

## Deploying ipfailover

OpenShift has a feature called ipfailover that you can use to make an external IP accessible on a subset of nodes in the cluster. Use ipfailover to make your service available on the external IP. Enter the following command to deploy ipfailover (you must have cluster-admin permissions):

```
oc adm ipfailover --virtual-ips=10.2.1.120 --watch-port=0 --replicas=<amount_of_compute_nodes> --selector="node-role.kubernetes.io/compute=true" --vrrp-id-offset=0 --create
```

You must also ensure the ipfailover account in your current project has the required permissions. To do this run the following command:

```
oc adm policy add-scc-to-user privileged -z ipfailover
```

You'll need to pass the IP you've patched into the service as an external IP, using the --virtual-ips argument. You can use any node-selector you like for the --selector argument but make sure it's a valid node label. You must set --watch-port to 0 for the ipfailover deployment to work. The --replicas argument should equal the amount of nodes matching your --selector label. You will need to increment --vrrp-id-offset by one for each ipfailover deployment in your cluster, for example to expose another external IP your command might look like the following:

```
oc adm ipfailover --virtual-ips=10.2.1.121 --watch-port=0 --replicas=<amount_of_compute_nodes> --selector="node-role.kubernetes.io/compute=true" --vrrp-id-offset=1 --create
```

> [!NOTE]
> You can only deploy one instance of ipfailover per project. Also, the deployment may sometimes go into a pending state. If this happens ensure that you've incremented --vrrp-id-offset (if necessary) and have given the ipfailover service account the required permissions inside the project you are deploying in:
> ```
> oc adm policy add-scc-to-user privileged -z ipfailover
> ```

You can now access your service on the public IP tied to the external IP.

> [!TIP]
> You can access multiple services on the same external IP, they just need to be running on a different port.

## Further reading

OpenShift documentation on ipfailover: <https://docs.openshift.com/container-platform/3.10/admin_guide/high_availability.html>


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
