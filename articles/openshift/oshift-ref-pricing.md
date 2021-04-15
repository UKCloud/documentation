---
title: Pricing information for UKCloud for Red Hat OpenShift
description: Provides useful information about UKCloud for Red Hat OpenShift pricing, including pricing examples
services: openshift
author: shighmoor
reviewer:
lastreviewed: 01/04/2021
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Pricing information
toc_fullpath: Service Information/oshift-ref-pricing.md
toc_mdlink: oshift-ref-pricing.md
---

# Pricing information for UKCloud for Red Hat OpenShift

## Overview

UKCloud for Red Hat OpenShift pricing can be as low as 74p per hour (using committed annual pricing option). Full pricing with all options, including licensing and connectivity, is available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

OpenShift is packaged to provide you with a high level of flexibility to scale your environments inline with your workloads.

> [!NOTE]
> The information in this article is applicable to OpenShift Container Platform (OCP) v4 or higher. For information about OCP 3.x, request the G-Cloud 11 UKCloud Pricing Guide.

## UKCloud deployed Red Hat OpenShift Container Platform

This deployment option provides a full Red Hat OCP that has been deployed by UKCloud and is ready to consume without delay.

We will deploy an OpenShift cluster that contain multiple nodes: control plane nodes, infrastructure nodes for infrastructure services and application nodes for application servers. The number of nodes within your cluster will dictate the monthly charge.

### Control plane and infrastructure nodes

OpenShift requires a minimum of three control plane nodes to provide the control plane and we recommend a minimum of two infrastructure nodes to provide additional services such as ingress controllers, metrics, developer console and aggregated logging.

### Application nodes

You'll need at least one application node to run your application and we recommend a minimum of two nodes for resilience.

Application node pricing includes a Red Hat OpenShift subscription component.

## Pricing examples

### [Example 1: Small deployment](#tab/tabid-1)

**Control plane:** 3 x control plane nodes<br>
**Infrastructure nodes:** None<br>
**Application nodes:** 2 x m1.small<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage<br>

**Control plane cost per month**

Monthly pricing for the control plane costs **£412** per month.

**Infrastructure node cost per month**

There are no infrastructure nodes, so there is no infrastructure node cost.

> [!NOTE]
> As there are no infrastructure nodes, aggregated logging is not available.

**Application node cost per month**

Monthly pricing for two m1.small application nodes costs 2 x £134 per month = **£268**.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

**Total basic cost**

Calculate the total basic cost by adding together the control plane, infrastructure and application node and storage costs.

Control plane cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost per month
-------------------|---|---------------------|---|-----------------------|---|--------------|---|---------------------------
£412               | + | £0.00               | + | £268                  | + |  £6.00       | = |  **£686.00**

### [Example 2: Medium deployment](#tab/tab-2)

**Control plane:** 3 x control plane nodes<br>
**Infrastructure nodes:** 2 x m1.medium<br>
**Application nodes:** 2 x m1.small and 1 x r1.medium<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage and 40GiB Tier 1 persistent storage<br>

**Control plane cost per month**

Monthly pricing for the control plane costs **£412** per month.

**Infrastructure node cost per month**

Monthly pricing for two m1.medium infrastructure nodes costs 2 x £115 per month = **£230**.

**Application node cost per month**

Monthly pricing for two m1.small application nodes cost 2 x £134 per month = **£268**.

Monthly pricing for one r1.medium application node costs **£457** per month.

The total cost of application nodes is £268 + £457 = **£725** per month.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

Tier 1 persistent block storage costs **£0.25** per GiB month, so the storage cost for 40GiB is **£10.00**.

The total cost of storage is £6.00 + £10.00 = **£16.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the control plane, infrastructure and application node and storage costs.

Control plane cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost per month
-------------------|---|---------------------|---|-----------------------|---|--------------|---|---------------------------
£412               | + | £230                | + | £725                  | + |  £16.00      | = |  **£1,383.00**

### [Example 3: Hourly application node pricing](#tab/tab-3)

The following provides an example of hourly pricing using an r1.medium application node for burst workloads. 

**Control plane:** 3 x control plane nodes<br>
**Infrastructure nodes:** 2 x m1.medium<br>
**Application nodes:** 2 x m1.small (monthly) and 1 x r1.medium (hourly)<br>
**Persistent volume storage used:** 60GiB Tier 2 persistent volume storage and 40GiB Tier 1 persistent storage<br>

**Control plane node cost per month**

Monthly pricing for the control plane costs **£412** per month.

**Infrastructure node cost per month**

Monthly pricing for two m1.medium infrastructure nodes costs 2 x £115 per month = **£230**.

**Application node cost per month**

Monthly pricing for two m1.small application nodes costs 2 x £134 per month = **£268**.

Hourly pricing for one r1.medium application node costs **£0.65** per hour

If the r1.medium application node is used for **200** hours to cover increased demand, the monthly cost works out at:

Hours in operation | x | Application node cost | = | Application node cost per month
-------------------|---|-----------------------|---|-----------------------------------
200                | x | £0.65                 | = | **£130**

The total cost of application nodes is £268 + £130 = **£398** per month.

**Storage cost per month**

Tier 2 persistent block storage costs **£0.10** per GiB month, so the storage cost for 60GiB is **£6.00**.

Tier 1 persistent block storage costs **£0.25** per GiB month, so the storage cost for 40GiB is **£10.00**.

The total cost of storage is £6.00 + £10.00 = **£16.00** per month.

**Total basic cost**

Calculate the total basic cost by adding together the control plane, infrastructure and application node and storage costs.

Control plane cost | + | Infrastructure cost | + | Application node cost | + | Storage cost | = | Total basic cost
-------------------|---|---------------------|---|-----------------------|---|--------------|---|-----------------
£412               | + | £230                | + | £398                  | + |  £16.00      | = |  **£1,056.00**

***

## Discount options

The following discount and purchase schemes are available with UKCloud for Red Hat OpenShift:

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

For information about what is and isn't included in the UKCloud for Red Hat OpenShift service, as well as UKCloud and customer responsibilities, see the [*UKCloud for Red Hat OpenShift Service Scope*](oshift-sco.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
