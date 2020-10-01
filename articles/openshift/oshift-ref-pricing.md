---
title: Pricing information for UKCloud for Managed OpenShift
description: Provides useful information about UKCloud for Managed OpenShift pricing, including pricing examples
services: openshift
author: shighmoor
reviewer:
lastreviewed: 28/09/2020
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/oshift-ref-pricing.md
toc_mdlink: oshift-ref-pricing.md
---

# Pricing information for UKCloud for Managed OpenShift

## Overview

UKCloud for Managed OpenShift pricing starts at £1.13 per hour. Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

OpenShift is packaged to provide you with a high level of flexibility to scale your environments inline with your workloads.

> [!NOTE]
> The information in this article is applicable to OpenShift Container Platform (OCP) v4 or higher. For information about OCP 3.x, request the G-Cloud 11 UKCloud Pricing Guide.

## UKCloud deployed Red Hat OpenShift Container Platform

This deployment option provides a full Red Hat OCP that has been deployed by UKCloud and is ready to consume without delay.

We will deploy an OpenShift cluster that contain multiple nodes: master nodes for the control plane, infrastructure nodes for infrastructure services and application nodes for application servers. The number of nodes within your cluster will dictate the monthly charge.

### Master and infrastructure nodes

OpenShift requires a minimum of three master nodes to provide the control plane and we recommend a minimum of two infrastructure nodes to provide additional services such as ingress controllers, metrics, developer console and aggregated logging.

### Application nodes

You'll need at least one application node to run your application and we recommend a minimum of two nodes for resilience.

Application node pricing includes a Red Hat OpenShift subscription component.

## Pricing examples

### [Example 1: Small deployment](#tab/tabid-1)

**Master nodes:** 3 x m1.medium<br>
**Infrastructure nodes:** None<br>
**Application nodes:** 2 x m1.small (monthly pricing)<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage<br>

**Master node cost per month**

Three m1.medium master nodes cost 3 x £0.170 per hour = **£0.510** per hour.

In an average **730** hour month, the monthly master node cost works out at:

Hours in operation | x | Master node cost | = | Master node cost per month
-------------------|---|------------------|---|---------------------------
730                | x | £0.510           | = | **£372.30**

**Infrastructure node cost per month**

There are no infrastructure nodes, so there is no infrastructure node cost.

> [!NOTE]
> As there are no infrastructure nodes, aggregated logging is not available.

**Application node cost per month**

Two m1.small application nodes cost 2 x £237.00 per month = **£474.00**.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

**Total basic cost**

Calculate the total basic cost by adding together the master, infrastructure and application node and storage costs.

Master node cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost per month
-----------------|---|---------------------|---|-----------------------|---|--------------|---|---------------------------
£372.30          | + | £0.00               | + | £474.00               | + |  £6.00       | = |  **£852.30**

### [Example 2: Medium deployment](#tab/tab-2)

**Master nodes:** 3 x m1.medium<br>
**Infrastructure nodes:** 2 x m1.medium<br>
**Application nodes:** 2 x m1.small node and 1 x r1.medium (monthly pricing)<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage and 40GiB Tier 1 persistent storage<br>

**Master node cost per month**

Three m1.medium master nodes cost 3 x £0.170 per hour = **£0.510** per hour.

In an average **730** hour month, the monthly master node cost works out at:

Hours in operation | x | Master node cost | = | Master node cost per month
-------------------|---|------------------|---|---------------------------
730                | x | £0.510           | = | **£372.30**

**Infrastructure node cost per month**

Two m1.medium infrastructure nodes cost 2 x £0.170 per hour = **£0.340** per hour.

In an average **730** hour month, the monthly infrastructure node cost works out at:

Hours in operation | x | Infrastructure node cost | = | Infrastructure node cost per month
-------------------|---|--------------------------|---|-----------------------------------
730                | x | £0.340                   | = | **£248.20**

**Application node cost per month**

Two m1.small application nodes cost 2 x £237.00 per month = **£474.00**.

One r1.medium application node costs **£641.90** per month.

The total cost of application nodes is £474.00 + £641.90 = **£1,115.90** per month.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

Tier 1 persistent block storage costs **£0.25** per GiB month, so the storage cost for 40GiB is **£10.00**.

The total cost of storage is £6.00 + £10.00 = **£16.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the master, infrastructure and application node and storage costs.

Master node cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost per month
-----------------|---|---------------------|---|-----------------------|---|--------------|---|---------------------------
£372.30          | + | £248.20             | + | £1,115.90             | + |  £16.00      | = |  **£1,749.40**

### [Example 3: Hourly application node pricing](#tab/tab-3)

**Master nodes:** 3 x m1.medium<br>
**Infrastructure nodes:** 2 x m1.medium<br>
**Application nodes:** 2 x m1.small node (monthly pricing) and 1 x r1.medium (hourly pricing)<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage and 40GiB Tier 1 persistent storage<br>

**Master node cost per month**

Three m1.medium master nodes cost 3 x £0.170 per hour = **£0.510** per hour.

In an average **730** hour month, the monthly master node cost works out at:

Hours in operation | x | Master node cost | = | Master node cost per month
-------------------|---|------------------|---|---------------------------
730                | x | £0.510           | = | **£372.30**

**Infrastructure node cost per month**

Two m1.medium infrastructure nodes cost 2 x £0.170 per hour = **£0.340** per hour.

In an average **730** hour month, the monthly infrastructure node cost works out at:

Hours in operation | x | Infrastructure node cost | = | Infrastructure node cost per month
-------------------|---|--------------------------|---|-----------------------------------
730                | x | £0.340                   | = | **£248.20**

**Application node cost per month**

Two m1.small application nodes cost 2 x £237.00 per month = **£474.00**.

One r1.medium application node with hourly pricing costs **£1.41** per hour

If the r1.medium application node is used for **200** hours to cover increased demand, the monthly cost works out at:

Hours in operation | x | Application node cost | = | Application node cost per month
-------------------|---|-----------------------|---|-----------------------------------
200                | x | £1.41                 | = | **£282.00**

The total cost of application nodes is £474.00 + £282.00 = **£756.00** per month.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

Tier 1 persistent block storage costs **£0.25** per GiB month, so the storage cost for 40GiB is **£10.00**.

The total cost of storage is £6.00 + £10.00 = **£16.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the master, infrastructure and application node and storage costs.

Master node cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost
-----------------|---|---------------------|---|-----------------------|---|--------------|---|-----------------
£372.30          | + | £248.20             | + | £756.00               | + |  £16.00      | = |  **£1,392.50**

***

## Discount options

The following discount and purchase schemes are available with UKCloud for Managed OpenShift:

- Commitment discount - application node pricing is available at hourly, monthly or annual rates, with the relevant discounts built in

- Cloud Credits

For more information about the discount and purchase schemes offered by UKCloud, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Additional pricing notes

### Additional networks

- By default, your OpenShift cluster will only be connected to the internet. Your OpenShift environment can be provisioned on other networks, such as HSCN, Janet, RLI or PSN, at a flat fee of £50 per month per network, plus the addtional network charges as defined within the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

### Registry storage

- UKCloud uses our Cloud Storage service for registry storage, which is charged at the prevailing rate. For more information, see the [*Cloud Storage Service Definition*](../cloud-storage/cs-sd.md).

### Enhanced Aggregated Logging

- By default, an EFK (Elasticsearch, Fluentd, Kibana) stack is deployed onto infrastructure nodes to aggregate logs for a range of OpenShift Enterprise services. To provide this service, UKCloud will need to provision an initial allocation of Tier 2 persistent volume, charged at the prevailing rate, for the storage of logs.

- If you don't have any infrastructure nodes, aggregated logging is not available.

### Enhanced Metric Collection

- UKCloud will provision a Prometheus-based metrics platform to collect and publish your cluster's metrics from all containers and components in one user interface. This will run on infrastructure nodes if you have them, or application nodes otherwise. To provide this service, UKCloud will need to provision an initial allocation of Tier 2 persistent volume, charged at the prevailing rate, to store these metrics.

## Billing and payment information

Billing for the service is one month in arrears.

Payment can be made by direct bank transfer. You can find bank details for payment on your invoice.

## Termination fees

There are no termination fees for the service. You are responsible for extracting your own data from the platform if required. UKCloud may make an additional charge for transferring data out of the service.

## Free trials

We offer a 30-day free trial so that you can test and evaluate our service without commitment. Your trial provides you with a live environment on the UKCloud platform to test our services and verify whether they are suited to your needs. If you're new to UKCloud, you can request a trial via the [UKCloud website trial page](https://ukcloud.com/free-trial-sign-up). If you're an existing customer, contact your Service Delivery Manager. For more information about free trials, see the [*Free Trials Service Scope*](../other/other-sco-free-trials.md).

## Service scope

For information about what is and isn't included in the UKCloud for Managed OpenShift service, as well as UKCloud and customer responsibilities, see the [*UKCloud for Managed OpenShift Service Scope*](oshift-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
