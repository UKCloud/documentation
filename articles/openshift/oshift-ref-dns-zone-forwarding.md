---
title: DNS Zone Forwarding in OpenShift Clusters | UKCloud Ltd
description: Provides information regarding DNS Zone Forwarding which can be configured in OpenShift clusters to enhance service discovery on deployments with private networks
services: openshift
author: Ben Bacon
reviewer:
lastreviewed:
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: DNS Zone Forwarding in OpenShift Clusters
toc_fullpath: Reference/oshift-ref-dns-zone-forwarding.md
toc_mdlink: oshift-ref-dns-zone-forwarding.md
---

# DNS Zone Forwarding in OpenShift Clusters

## Overview

This article documents the ability to forward DNS zones within OpenShift deployments. Forwarding zones can assist in resolving services on private networks if you have existing private DNS resolvers configured within your wider UKCloud environment. This removes the need to manually add domains to a node's local host file and can aid consumption of private services from within OpenShift.

### Intended audience

This article is best aimed at those with OpenShift deployments with connectivity to a VRF as other networks commonly have open resolvers available.

## OpenShift Cluster DNS Architecture

We deploy HAProxy load balancer pairs as part of an OpenShift deployment; primarily to provide redundancy for inbound traffic. As a minimum, all clusters will have: control plane load balancers (forwarding to the OpenShift API/Web Console, Grafana, Kibana and Prometheus routes) and data plane load balancers (forwarding to routes exposed on the default OpenShift routers). Deployments with connectivity to government community networks have an additional data plane load balancer pair (forwarding to routes exposed on the secondary OpenShift routers) which only have inbound connectivity from the secondary network.

On the control plane load balancers, we configure BIND (also referred to as `named`) to resolve the local zone within the cluster (performing internal hostname resolution) and all other zones are forwarded outbound to an open internet resolver. All internet OpenShift nodes reference the control plane load balancers as resolvers.

Where a deployment has connectivity with government community networks, we forward the local zone and a small number of internet zones (required for provisioning and ongoing maintenance) to the control plane BIND service, with all remaining zones being forwarded to open resolvers on the secondary network. All secondary network nodes reference the secondary network data plane load balancers as resolvers.

## Identifying Forward Zones

A zone is a domain (for example domain.com) and configuring a forward zone will forward any DNS queries received for that domain and all sub-domains to the configured IP address.

In OpenShift deployments with connectivity to a VRF, you may wish to resolve a pre-existing internal zone using a private resolver, instead of forwarding these requests to an external service (and therefore routing traffic over an external network) which gives you the benefit of being able to locate private services that may be restricted or inaccessible from these networks. Such examples of services that could be consumed from OpenShift include: container image registry, binary repository, version control system.

## Requesting DNS Zone Forwarding

When provisioning your environment (and provided you have highlighted that you require connectivity with a VRF) we'll contact you to ask if there are any zones which you want to forward and request the IP addresses of the corresponding DNS resolvers. We will test that queries are being replied to as expected and assist you in diagnosing issues. You may need to make firewall changes to permit your OpenShift cluster to both make DNS queries and to access the desired services. If you identify additional domains you want to be resolved internally during the day to day use of your cluster - these can be added post-deployment.

Currently forward zones can only be configured by the OpenShift team as the load balancers cannot be managed from within OpenShift. 

## Further Information

https://docstore.mik.ua/orelly/networking_2ndEd/dns/ch10_05.htm

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
