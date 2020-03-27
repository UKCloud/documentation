---
title: Managed Monitoring from UKCloud Service Scope
description: Outlines important details regarding the Managed Monitoring from UKCloud service
services: managed-services
author: Steve Dixon
reviewer:
lastreviewed: 20/28/2019 15:17:17
toc_rootlink: Managed Monitoring
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Managed Monitoring from UKCloud Service Scope
toc_fullpath: Managed Monitoring/man-monitoring-sco.md
toc_mdlink: man-monitoring-sco.md
---

# Managed Monitoring from UKCloud Service Scope

## About this document

This document is for customers considering purchasing our Managed Monitoring from UKCloud service.

It describes the boundaries of the service, along with the division of responsibilities between UKCloud and the customer to facilitate the service.

## About Managed Monitoring from UKCloud

Managed Monitoring from UKCloud is UKCloud's multi-cloud monitoring service, designed for customers who want to:

- Incorporate, consolidate and extend your current monitoring platforms and any new requirements in to a single, as a service, solution

- Gain a reliable and trusted view of the health of your entire IT infrastructure

- Monitor any device from anywhere, via the internet or the various community networks UKCloud supports

- Concentrate on creating and managing applications and increasing business value rather than managing virtual infrastructure

- Reduce the number of ‘false-positive’ alerts and associated out of hours call-outs. Utilise UKCloud’s 24x7x365 Network Operations Centre to be the initial responder to events, only escalating those that genuinely need further investigation

- Increase the uptime of your IT estate through faster identification, triage and alert escalations

- Leverage the insights that UKCloud’s AIOps platform can provide in identifying trends and anomalies

## Scope of Managed Monitoring from UKCloud

The following table outlines the scope of the Managed Monitoring from UKCloud service:

| Monitoring Element | Detail |
|--------|--------|
| Event Monitors | - Ping check <BR> - SNMP check  <BR> - Application port checks <BR> - Webhooks (only HTTP/HTTPS RestAPI inbound to UKCloud) <BR> - Operating system service status change |
| Compute, Disk, Memory (CDM) Monitoring    | Reactive monitoring and alerting  of Compute, Disk and Memory capacity events. <BR> Thresholds will initially be set with default values unless otherwise advised by the customer. <BR> Changes to default thresholds can be requested via a service request from within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.      |
| Alerting | UKCloud will alert customers via a support ticket based on above triggers.    |
| Automated Remediation | Pre-approved reboots of compute resources in response to an alert to help ensure service availability. <BR> UKCloud is currently unable to offer this element of the service to any compute resources being monitored outside of a UKCloud operated cloud stack.    |

## Service provisioning

You can request Managed Monitoring from UKCloud via your Service Delivery Manager or by using the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Within 5 business days of accepting an order, UKCloud will create the customer's monitoring environment with default thresholds (unless otherwise specified) and commence monitoring any environments that have been elected by the customer to be monitored.

## Customer responsibilities

The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required. If access is required over government secure networks such as HSCN, Janet, RLI or PSN (including legacy networks), the customer is responsible for adhering to the Code of Connection.

Allowing UKCloud access into your environments to capture any necessary metrics, alerts or triggers within the customer's environment required to provide accurate and reliable monitoring.

Ensuring only appropriate data (for example OFFICIAL) is stored and processed by applications on this environment and that they comply with the UKCloud Security Operating Procedures (SyOps) and other Information Assurance requirements as specified in the UKCloud System Interconnect and Security Policy (SISP) and associated accreditation documentation sets.

## Published features not currently available

The following features published in the [*Managed Monitoring from UKCloud Service Definition*](man-sd-monitoring.md) are not currently available:

- Application Performance Management (APM)

- Pulling metrics or events from resources deployed outside of a UKCloud operated cloud stack (client-side push events may be considered)
  
- Network performance and availability monitoring

- Execution of customer defined ‘playbook’

We are actively working on delivering these features.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
