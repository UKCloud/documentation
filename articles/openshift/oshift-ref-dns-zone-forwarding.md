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

This article documents the ability to forward DNS zones within OpenShift deployments. Forwarding zones can assist in resolving services on private networks if you have existing private DNS resolvers configured within your wider UKCloud environment. This removes the need to individually add domains to a node's local host file and can aid consumption of private services from within OpenShift.

### Intended audience

This article is best aimed at those with OpenShift deployments with connectivity to a private network as other networks commonly have open resolvers available.

## OpenShift Cluster DNS Architecture

We deploy load balancer pairs as part of an OpenShift deployment; primarily to provide redundancy for inbound traffic but also to resolve DNS requests.

One pair resolves the local zone within the cluster (performing internal hostname resolution) and forwards all undefined zones outbound to an upstream open internet resolver. Zones can be configured to be forwarded to a separate upstream server. All internet OpenShift nodes reference this load balancer pair.

Where a deployment has connectivity with government community networks, another pair forwards the local zone and a small number of internet zones (required for provisioning and ongoing maintenance) to the previously mentioned load balancer pair, with all remaining zones being forwarded to upstream open resolvers on the secondary network. All secondary network nodes reference the secondary network load balancers as resolvers.

## Identifying Forward Zones

A zone is a domain (for example domain.com) and configuring a forward zone will forward any DNS queries received for that domain and all sub-domains to the configured IP address. This allows different domains to be resolved by separate DNS servers at a granular level if required.

In OpenShift deployments with connectivity to a private network, you may want to resolve a pre-existing internal zone using a private resolver, instead of forwarding these requests to an external service (and therefore routing traffic over an external network) which gives you the benefit of being able to locate private services that may otherwise be restricted or inaccessible from these networks. Such examples of services that could be consumed from OpenShift include: container image registry, binary repository, version control system.

## Requesting DNS Zone Forwarding

Any zones (including the IPs of the corresponding DNS resolvers) you want to forward DNS requests for can be provided within a Service Request. This can be as part of a deployment request or post-deployment, provided your environment has connectivity to a private network.

We will test that queries are being replied to as expected and assist you in diagnosing issues. You may need to make firewall changes to permit your OpenShift cluster to both send DNS queries and to access the desired services.

## Further Information

https://docstore.mik.ua/orelly/networking_2ndEd/dns/ch10_05.htm

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
