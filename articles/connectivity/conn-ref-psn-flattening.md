---
title: PSN flattening | UKCloud Ltd
description: Provides information about plans to flatten the PSN Assured and PSN Protected networks
services: connectivity
author: Sue Highmoor

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: PSN flattening
toc_fullpath: Reference/conn-ref-psn-flattening.md
toc_mdlink: conn-ref-psn-flattening.md
---

# PSN flattening

## Overview

The Public Services Network (PSN) is being flattened to converge PSN Assured and PSN Protected into a single network. This process is planned for completion by 2019, when new DNS services will be available, and service providers of both PSN Assured and PSN Protected are expected to have enabled routing between Assured and Protected, creating a single, flat network.

For more information about flattening, see the [PSN Authority's documentation](https://www.gov.uk/government/publications/flattening-obligations-for-psn-protected-network-service-providers/flattening-obligations-for-psn-protected-network-service-providers).

## Allowing traffic between PSN Protected and PSN Assured

Until the flattening has taken place, if you use PSN in your UKCloud environment and require access for traffic to traverse PSN Protected to PSN Assured or vice versa, you must raise a service request with Vodafone to open the PSN Protected to PSN Assured firewall to allow traffic to go between the networks.

To request this change, you must have a PSN Core Service contract with Vodafone. For more information about PSN core services, see [*Understanding PSN core services*](conn-ref-psn-core-services.md).

UKCloud are not responsible for raising service requests with Vodafone for customers' PSN core service changes. You must raise these changes directly with Vodafone.

This change is universal and only needs to be performed once for each PSN IP. Once complete, all traffic with a source or destination of that IP will be routable through the Vodafone Firewall without raising further change requests.

The change request is chargeable per IP. You should request a quote from Vodafone before submitting the change to avoid surprising charges on your invoice from Vodafone.

## Requesting a change

To request a change for your firewall:

- If you're a non-GCF customer, go to:

    <https://www.gov.uk/government/publications/psn-dns-change-forms>

- If you're a GCF customer, go to:

    <https://www.gov.uk/government/publications/gcf-customer-change-form>

## More information

For an overview of the future of PSN, including updates about PSN flattening, see our [*Future of PSN - what you really need to know!*](https://ukcloud.com/hub/news/the-future-of-psn/) blog post.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
