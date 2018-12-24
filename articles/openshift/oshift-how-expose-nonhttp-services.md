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
toc_title: Expose Non-HTTP Services Externally
toc_fullpath: How To/oshift-how-expose-nonhttp-services.md
toc_mdlink: oshift-how-expose-nonhttp-services.md
---

# How to expose non-http services externally

## Overview

UKCloud for OpenShift enables you to develop, deploy, and manage digital and container-based applications seamlessly across local physical or virtual environments, with full portability to and from UKCloud.

This guide explains how you can expose services outside of your OpenShift cluster without using routes.

### Intended audience

This guide assumes familiarity with services and routes in OpenShift and access to an account with cluster-admin permissions.

### Prerequisites

To complete the steps in this guide, you must have the a cluster deployed on the right version of our code. You can raise a support ticket to check if this is possible in your cluster or to request a newer cluster deployed from the relevant code.

### Getting the external IP

You will need to raise a support request with us and provide us with; the network you would like to expose services on and the ports/protocols of the services you will be exposing. We will run a stack update against your environment to create the virtual infrastructure needed and provide you with the publically accessible IP and the local IP this maps to. The local IP will be important for the upcoming steps.

> [!NOTE]
> You can request multiple ports/protocols and networks for external services.

### Exposing your service

Now you need to create the service you would like to expose, this can be done as you normally would, afterwards you want to patch the local IP we give you into the service as its 'External IP' using the following command(assuming the local IP you were given was 10.2.1.120):

```oc patch svc <service_name> '{"spec":{"externalIPs":["10.2.1.120"]}}'```

### Deploying ipfailover

OpenShift has a feature called ipfailover that can be used to make an external IP accessible on a subset of nodes in the cluster. This is what will be used to make your service accessible on the external IP. The following command is used to deploy ipfailover, it requires cluster-admin permissions:

```oc adm ipfailover --virtual-ips=10.2.1.120 --watch-port=0 --replicas=<amount_of_compute_nodes> --selector="node-role.kubernetes.io/compute=true" --vrrp-id-offset=0 --create```

You will need to pass the IP you have patched into the service as an external IP to the --virtual-ips argument, you can use any node-selector you would like for the --selector argument but make sure it is a valid node label. --watch-port needs to be 0 for the ipfailover deployment to work. --replicas should equal the amount of nodes matching your --selector label. --vrrp-id-offset will need to be incremented by one for each ipfailover deployment in your cluster, for example if I wanted to expose another external IP my command might look like this:

```oc adm ipfailover --virtual-ips=10.2.1.121 --watch-port=0 --replicas=<amount_of_compute_nodes> --selector="node-role.kubernetes.io/compute=true" --vrrp-id-offset=1 --create```

>[!NOTE]
>You can only deploy one instance of ipfailover per project. Also you may sometimes get the deployment go into a pending state, if this is the case ensure the --vrrp-id-offset has been incremented(if neccessary) and try running the following command inside the project you are deploying in:
> ```oc adm policy add-scc-to-user privileged -z ipfailover```

You can now access your service on the public IP tied to the external IP!

>[!TIP]
> You can access multiple services on the same external IP, they will just need to be running on a different port.

## Further reading

OpenShift documentation on ipfailover: https://docs.openshift.com/container-platform/3.10/admin_guide/high_availability.html


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
