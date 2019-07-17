---
title: Internet access to the Elevated OFFICIAL security domain | UKCloud Ltd
description: Provides information about the process for providing internet access to the UKCloud Elevated OFFICIAL security domain
services: connectivity
author: Sue Highmoor
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Internet access to the Elevated OFFICIAL security domain
toc_fullpath: Reference/conn-ref-internet-access-elevated.md
toc_mdlink: conn-ref-internet-access-elevated.md
---

# Internet access to the Elevated OFFICIAL security domain

## Overview

UKCloud's Elevated OFFICIAL security domain is natively connected to secure government networks such as PSN Protected; there is no direct internet connectivity. If you want access to the internet, we operate an internet gateway service that enables limited access to internet resources from our Elevated security domain.

The internet gateway isn't designed to support general web access, rich web applications or patch downloads. Instead, it's intended to facilitate access to basic web services such as postcode lookups, payment card authorisation, mapping data, and so on. Only white-labelled web services may be accessed via the gateway.

![Data flow from the Elevated Platform to the Internet](images/data-flow.png)

## Gaining access to the gateway

To gain access to the gateway, raise a service request containing the following information:

- Business justification of the requirement

- The NFT or IP address(es) from which the requests will originate

- Details of the target for the request (including the full URLs and HTTP methods)

HTTPS access is allowed, but the content must be decrypted so that it can be inspected. When a new client is provisioned, you'll be issued with the proxy RootCA certificate, which you need to install in your trusted root authority certificate store. The individual ProxyCA certificates can then be trusted by your application.

### Business justification review

If internet access via the gateway is part of a Cross Domain Security Zone (CDSZ) submission, sign-off authorisation for it is given through the UKCloud assurance wrap process.

For an individual request that isn't related to a CDSZ submission, we follow the steps below for sign off:

1. We review the service request to see whether it overlaps with any previously approved requests.

2. We carry out a review to see if the request types fall within the recommended criteria.

3. We make a recommendation to the UKCloud Compliance team detailing whether the request should be approved or rejected.

4. Compliance will approve as a checkpoint.

5. If the business justification is unclear, we may seek validation with the NCSC.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
