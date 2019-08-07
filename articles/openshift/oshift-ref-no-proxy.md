---
title: Community network proxy configuration | UKCloud Ltd
description: Provides information regarding proxy environment variables in v3.11 OpenShift clusters deployed with government community network connectivity.
services: openshift
author: Ben Bacon
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Community network proxy configuration
toc_fullpath: Reference/oshift-ref-no-proxy.md
toc_mdlink: oshift-ref-no-proxy.md
---

# Community network proxy configuration

## Overview

This article aims to describe the purpose of the `no_proxy` variable in OpenShift deployments with connectivity to government community networks. By default, where containers have the relevant proxy environment variables set, all outbound HTTP(S) requests will be initiated via the proxy (which only has internet connectivity). Adding entries to the `no_proxy` variable enables outbound traffic destined for specific hosts or CIDRs to bypass Squid proxy on nodes with access to alternative networks.

### Intended audience

To follow the steps in this article you must have access to a cluster that is running OpenShift Container Platform v3.11 (or newer) with connectivity to government community networks (such as HSCN, PSN or Janet). Within this cluster configuration we deploy Squid proxy to enable non-internet connected nodes to request internet resources and data in a restricted manner.

## Squid

Squid proxy enables containers running on worker nodes (with government community network access) to request resources from the internet. Our default configuration only permits access to specific endpoints to ensure compliance with network regulatory requirements. You can find more information regarding these endpoints in [*How to permit outbound access to internet hosts in deployments with government community network connectivity*](oshift-how-add-domains-proxy-whitelist.md).

## Purpose of no_proxy

`no_proxy` is an environment variable used in conjunction with `http_proxy` and `https_proxy`. If an HTTP(S) connection attempt is destined for an address or hostname listed in `no_proxy`, the traffic will not be requested via the proxy and will instead use the routes on the current node, ensuring connectivity is not lost with community or private networks.

## Viewing proxy environment variables

To view the required proxy environment variables for your OpenShift cluster, you can refer to the environment values set for the `docker-registry` Deployment Config in the `default` project with a breakdown of these variables following: 

```
$ oc describe dc docker-registry -n default | grep PROXY
      NO_PROXY:							.cluster.local,.svc,10.2.1.13,10.2.1.19,10.2.1.5,169.254.169.254,172.30.0.1,console.local-domain,cor00005.cni.ukcloud.com,frn00006.cni.ukcloud.com,master-infra-0.local-domain,master-infra-1.local-domain,master-infra-2.local-domain,worker-infra-0.local-domain,worker-infra-1.local-domain,worker-tenant-s-0.local-domain,worker-tenant-s-1.local-domain
      HTTP_PROXY:						http://10.2.1.10:3128
      HTTPS_PROXY:						http://10.2.1.10:3128
```

- `NO_PROXY`: String containing hosts/addresses to be accessed without traversing the proxy

- `HTTP_PROXY`: Cluster Proxy URL for HTTP requests

- `HTTPS_PROXY`: Cluster Proxy URL for HTTPS requests

When building containers within OpenShift, these environment variables will be passed through to the image pushed to your local registry. When working with images that have been imported from an external source, you may need to apply these environment values to ensure that you can access whitelisted internet resources from your community network nodes.

## Identifying where you might need to add entries to no_proxy

Typically you can identify where the proxy is denying requests by looking for keywords such as `forbidden` or when receiving HTTP 403 status code responses. Below you can see an example where an HTTPS request to `registry.exampleurl.com` has been blocked by the proxy.

```
$ oc new-app centos/ruby-25-centos7~https://github.com/sclorg/ruby-ex.git
W0412 13:52:16.288545   50288 dockerimagelookup.go:233] Docker registry lookup failed: Get https://registry.exampleurl.com: Forbidden
error: unable to locate any images in image streams, local docker images with name "centos/ruby-25-centos7"
```

In the example above this is an internet URL so it would be best to add this specific domain (or all subdomains using `.exampleurl.com`) to the `proxy-whitelist` configmap in the `whitelist` project, as documented in [*How to permit outbound access to internet hosts in deployments with government community network connectivity*](oshift-how-add-domains-proxy-whitelist.md). If this URL was accessible on another network other than the internet, this would be a good candidate to be added to `no_proxy` to ensure the proxy was bypassed.

## Adding entries to no_proxy

Entries can be added to `no_proxy` pre-deployment if included in the Service Request requesting the environment. Otherwise if you identify additional endpoints that you would like to bypass the proxy post-deployment, you will need to raise a Support Request via the UKCloud Portal as a restart of the master-services is required.

Examples of domains you may want to bypass the proxy could be:

- Private DNS Zone/CIDR

- Community Domain/CIDR

When supplying `no_proxy` items, you can reference any of the following types:

- A specific IP

- CIDR

- `domain.tld`

- `subdomain.domain.tld`

- `.domain.tld` (includes domain and all subdomains)

## Further information

<https://docs.openshift.com/container-platform/3.11/install_config/http_proxies.html>

<https://docs.openshift.com/container-platform/3.11/dev_guide/environment_variables.html>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
