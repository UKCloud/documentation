---
title: Specifying endpoints to avoid being proxied in deployments with government community network connectivity | UKCloud Ltd
description: 
services: openshift
author: Ben Bacon
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: Reference/oshift-ref-no_proxy.md
toc_mdlink: oshift-ref-no_proxy.md
---

# Specifying endpoints to avoid being proxied in deployments with government community network connectivity

## Overview

This article aims to describe the purpose of the `no_proxy` variable in OpenShift deployments with connectivity to government community networks. By default, where containers have the relevant proxy environment variables set, all outbound HTTP(S) requests will be initiated via the proxy (which only has internet connectivity). Adding entries to the `no_proxy` variable enables outbound traffic destined for specific hosts/CIDRs to bypass Squid proxy on nodes with access to alternative networks.

### Intended audience

This reference guide applies to users who have access to a cluster that is running OpenShift Container Platform v3.11 (or newer) with connectivity to government community networks (such as: HSCN, PSN, Janet). Within this cluster configuration we deploy Squid proxy to enable non-internet connected nodes to request internet resources/data in a restricted manner.

## Squid

Squid proxy is installed as a service on the control plane load balancers and enables containers running on worker nodes (with government community network access) to request resources from the internet. Our default configuration only permits access to specific endpoints to ensure compliance with network regulatory requirements. More information regarding these endpoints can be found in our [*How to permit outbound access to internet hosts in deployments with government community network connectivity*](oshift-how-add-domains-proxy-whitelist.md) guide. This guide also provides steps as to how you can add your own domains from within OpenShift.

## Purpose of no_proxy

`no_proxy` is an environment variable used in conjunction with `http_proxy` and `https_proxy`. If an HTTP(S) connection attempt is destined for an address or hostname listed in `no_proxy` the traffic will not be requested via the proxy and will instead use the routes on the current node, ensuring connectivity is not lost with alternate networks such as HSCN or a VRF.

## Viewing proxy environment variables

To view the required proxy environment variables for your OpenShift cluster, you can refer to the environment values set for the `docker-registry` Deployment Config in the `default` project with a breakdown of these variables following: 

```
$ oc describe dc docker-registry -n default | grep PROXY
      NO_PROXY:							.cluster.local,.svc,10.2.1.13,10.2.1.19,10.2.1.5,169.254.169.254,172.30.0.1,console.local-domain,cor00005.cni.ukcloud.com,frn00006.cni.ukcloud.com,master-infra-0.local-domain,master-infra-1.local-domain,master-infra-2.local-domain,worker-infra-0.local-domain,worker-infra-1.local-domain,worker-tenant-s-0.local-domain,worker-tenant-s-1.local-domain
      HTTP_PROXY:						http://10.2.1.10:3128
      HTTPS_PROXY:						http://10.2.1.10:3128
```

- `NO_PROXY`: String containing hosts/addresses to not be requested via proxy
- `HTTP_PROXY`: Cluster Proxy URL for HTTP requests
- `HTTPS_PROXY`: Cluster Proxy URL for HTTPS requests

When building containers within OpenShift, these environment variables will be passed through to the image pushed to your local registry. When working with images that have been imported from an external source, you may need to apply these environment values to ensure that you can access internet resources from your community network nodes.

## Identifying where you might need to add entries to no_proxy

Typically you can identify where the proxy is denying requests by looking for keywords such as "forbidden" or when receiving HTTP 403 status code responses. Below you can see an example where an HTTPS request to `registry-1.docker.io` has been blocked by the proxy.

```
$ oc new-app centos/ruby-25-centos7~https://github.com/sclorg/ruby-ex.git
warning: Cannot find git. Ensure that it is installed and in your path. Git is required to work with git repositories.
W0412 13:52:16.288545   50288 dockerimagelookup.go:233] Docker registry lookup failed: Get https://registry-1.docker.io/v2/: Forbidden
error: unable to locate any images in image streams, local docker images with name "centos/ruby-25-centos7"
```

In the example above this is an internet URL so it would be best to add this domain (or all subdomains using `.docker.io`) to the `proxy-whitelist` configmap in the `whitelist` project, as documented in our [*How to permit outbound access to internet hosts in deployments with government community network connectivity*](oshift-how-add-domains-proxy-whitelist.md) guide. If this URL was accessible on another network other than the internet, this would be a good candidate to be added to no_proxy to ensure the proxy was bypassed.

We are planning to develop functionality to allow showback of Squid access logs within future deployments to assist with diagnosing where the proxy may be denying requests that may not be as easy to trace.

## Adding entries to no_proxy

When provisioning your environment (and provided you have highlighted that you require connectivity with a government community network) we will contact you to ask if there are any specific endpoints that you wish to bypass the proxy. Examples of these could be:

- Private DNS Zone/CIDR
- Community Domain/CIDR

When supplying no_proxy items, you can reference any of the following types:
- a specific IP
- CIDR
- domain.tld
- subdomain.domain.tld
- .domain.tld (includes domain and all subdomains)

Currently entries can only be added by the OpenShift team as doing so requires a restart of the master-services within your cluster. If you have highlighted any additional entries you would like to add to `no_proxy`, please raise a Support Request via the UKCloud Portal.

We are planning to develop functionality to make this a self-service option within future deployments.

## Further reading

https://docs.openshift.com/container-platform/3.11/install_config/http_proxies.html
https://docs.openshift.com/container-platform/3.11/dev_guide/environment_variables.html

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
