---
title: DNS zone forwarding in OpenShift clusters
description: Provides information regarding DNS zone forwarding which can be configured in OpenShift clusters
services: openshift
author: koneill
reviewer: gellner
lastreviewed: 19/11/2021

toc_rootlink: Reference
toc_sub1: OpenShift v4.x
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: DNS zone forwarding in OpenShift clusters
toc_fullpath: Reference/oshift-ref-dns-zone-forwarding-v4.md
toc_mdlink: oshift-ref-dns-zone-forwarding-v4.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# DNS zone forwarding in OpenShift clusters

## Overview

This article documents the ability to forward DNS zones within OpenShift deployments. Forwarding zones can assist in resolving services on private networks if you have existing private DNS resolvers configured within your wider UKCloud environment.

### Intended audience

This article is best aimed at those with OpenShift deployments with connectivity to a private network as other networks commonly have open resolvers available.

## OpenShift cluster DNS architecture

The DNS operator inside OpenShift runs a CoreDNS daemonset and creates a service for the daemonset. Pods are instructed to use the CoreDNS service IP for name resolution. 

If there is a server block configured for the zone being resolved, requests will be forwarded on to those resolvers. If there are no matching server blocks, the request will fall back to the servers specified in `/etc/resolv.conf`. The nodes will always be configured to have name servers able to resolve names on the external network your cluster is deployed to (for example, internet or community networks).

## Identifying forward zones

A zone is a domain (for example, `domain.com`) and configuring a forward zone will forward any DNS queries received for that domain, and all sub-domains, to the configured IP address. This allows different domains to be resolved by separate DNS servers at a granular level if required.

In OpenShift deployments with connectivity to a private network, you may want to resolve a pre-existing internal zone using a private resolver, instead of forwarding these requests to an external service (and therefore routing traffic over an external network). This gives you the benefit of being able to locate private services that may otherwise be restricted or inaccessible from these networks. Examples of services that could be consumed from OpenShift include: container image registry, binary repository or version control system.

## Requesting DNS zone forwarding

You can provide any zones that you want to forward DNS requests for (including the IPs of the corresponding DNS resolvers) as part of a deployment request provided your environment has connectivity to a private network.

We'll test that queries are being replied to as expected and assist you in diagnosing issues. You may need to make firewall changes to permit your OpenShift cluster to both send DNS queries and to access the desired services.

## Implementing DNS zone forwarding

You can implement your own zone forwarding by editing DNS operator config. The steps to add upstream servers of `10.0.0.1` and `10.0.0.2` on port `5353` for the zone `example.com` are as follows:

1. Edit the DNS operator config:

    `oc edit dns.operator/default` 

2. At the `spec.servers` level add the following yaml block:

```yaml
- name: example-dns
  zones: 
    - example.com
  forwardPlugin:
    upstreams: 
      - 10.0.0.1
      - 10.0.0.2:5353
```

3. To verify the changes are successful you can view the dns-default configmap to ensure the forward zones are present as configured:

    `oc get configmap/dns-default -n openshift-dns -o yaml`

## Further information

<https://docs.openshift.com/container-platform/4.9/networking/dns-operator.html#nw-dns-forward_dns-operator>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
