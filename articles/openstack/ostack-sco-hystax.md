---
title: Hystax Acura Workload Migration Service Scope
description: Outlines important details regarding Hystax Acura Workload Migration
services: openstack
author: Steve Dixon
reviewer:
lastreviewed: 28/02/2020
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Hystax Acura Workload Migration Service Scope
toc_fullpath: Service Scope/ostack-sco-hystax.md
toc_mdlink: ostack-sco-hystax.md
---

# Hystax Acura Workload Migration Service Scope

## About this document

This document is for customers considering using the Hystax Acura Workload Migration service for migrating workloads between our UKCloud for OpenStack regions.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the changes required.

## About Hystax Acura Workload Migration

Hystax Acura offers a fully automated and reliable way to lift-and-shift all types of OpenStack workloads without experiencing downtime or complications arising from large-scale migration. Hystax supports all popular OpenStack distributions including UKCloud's Red Hat OpenStack.

This service is designed for customers who:

- Need to migrate workloads, either a single instance or entire project, between UKCloud's OpenStack regions

- Overcome common transfer challenges, such as high costs, long transfer times and security concerns

- Achieve workload migrations with zero downtime

## Default setup

Hystax Acura Workload Migration is delivered as a multi-tenant service, but provides secure isolation of data between customers wanting to migrate their workloads.

Each customer will be provided with an Hystax Acura account in addition to their normal OpenStack credentials. These new credentials enable customers to access the Hystax Acura service so that they can self-manage, control and monitor their workload migrations.

## Hystax Acura Workload Migration management

Hystax Acura Workload Migration is a fully self-service solution, as such it's managed directly by the customer, using the Hystax Acura customer portal or API.

## Service provisioning

You can request access to the Hystax Acura Workload Migration service via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 1 business day of accepting a request, UKCloud will create the customer's Hystax Acura account.

## Customer responsibilities

As a fully self-service solution, the customer is responsible for the creation, management and monitoring of any workload migrations, either manually invoked or scheduled.

## Service Levels

Hystax Acura Workload Migration is delivered by UKCloud as a service, therefore UKCloud takes responsibility for the management, monitoring and availability of the core Hystax Acura software and associated services.

As workload migrations are deemed not to be business as usual (BAU) impacting, coupled with the fact that all actions (for example, invoking a migration or checking the status of a job) are fully controlled by the customer, UKCloud currently provides no SLA for the availability of the Hystax Acura service or the success of any customer invoked workload migrations.

## Support

UKCloud delivers Hystax Acura Workload Migration as a service, as such we're on hand to assist with any issues you may experience via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
