---
title: How to expand OpenShift persistent volumes | UKCloud Ltd
description: Outlines methods to expand OpenShift persistent volumes in v3.11 OpenShift clusters.
services: openshift
author: Gareth Ellner
reviewer:
lastreviewed: 
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: How to expand OpenShift persistent volumes
toc_fullpath: How To/oshift-how-add-domains-proxy-whitelist.md
toc_mdlink: oshift-how-add-expand-persistent-vols.md
---

# How to expand OpenShift persistent volumes

## Overview

In OpenShift clusters running OpenShift v3.11 or later, it is possible to expand existing persistent volumes. It is necessary to shutdown any pod/container using the volume before the expansion can be performed. In earlier versions (such as v3.9) it is necessary to raise a support request with UKCloud so that UKCloud admins can facilitate the expansion.

>[!TIP]
>To check the version of your cluster, either click "(?)" in the top-right of the web UI and select "About" or run the following while connected in the CLI client:
>```
>$ oc version
>oc v3.11.51
>kubernetes v1.11.0+d4cacc0
>features: Basic-Auth GSSAPI Kerberos SPNEGO
>
>Server https://console.5649-f44e8f:8443
>openshift v3.11.51
>kubernetes v1.11.0+d4cacc0
>```

## Prerequisites

To complete the steps in this guide, you must have access to a cluster that is running OpenShift Container Platform v3.11 (or newer).

You must also have access to:

- `oc`, the OpenShift command-line client (CLI). For more information, see OpenShift's [*Get Started with the CLI*](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html)

## Scale down any pod which is using the volume.


## Further reading

https://wiki.squid-cache.org/SquidFaq/SquidAcl

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
