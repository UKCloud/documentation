---
title: SLA definition
description: Definition of the UKCloud service level agreement (SLA)
services: other
author: shighmoor
reviewer: shall
lastreviewed: 10/09/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: SLA definition
toc_fullpath: Reference/other-ref-sla-definition.md
toc_mdlink: other-ref-sla-definition.md
---

# SLA definition

## Availability

UKCloud will use reasonable endeavours to ensure that the availability of the UKCloud service purchased by the customer (the service) in a given calendar month equals the applicable *availability commitment*. To define availability, UKCloud monitors a number of service elements — some generic, some service specific — which collectively enable the customer to use or access the service. If the availability of the service is less than the associated Availability Commitment, the customer may request Service Credits for the service within 30 calendar days of the service being deemed unavailable.

## Unavailability and service level agreement events

Subject to the service level agreement (SLA) limitations detailed below, the service will be considered unavailable (and an SLA event will be deemed as having taken place) if UKCloud's monitoring detects that the service or component has failed for five consecutive minutes. The total number of minutes that the service is unavailable is measured from the time that UKCloud confirms the SLA event has occurred until the time that UKCloud resolves the issue and the service becomes available to the customer. If two or more SLA events occur simultaneously, the SLA event with the longest duration will be used to determine the total number of minutes for which the service was unavailable.

## Service Credits

If the availability of the service for a particular month falls below the availability commitment specified in the applicable SLA (subject to the SLA limitations provided below), customers will be eligible to request Service Credits. Service Credits will be calculated as a percentage of the fees billed for the monthly period during which the SLA event occurred (to be applied at the end of the billing cycle, or of the subsequent cycle if a claim is made after an invoice has been paid).

> [!NOTE]
> You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud's Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement limitations

The following will be excluded from any time-based calculations related to the service being unavailable:

- Service dependent — Planned Maintenance windows (as specified in the applicable Service Definition)

- Emergency Maintenance (as specified in the applicable Service Definition)

- Your misuse of a particular service (as defined in the UKCloud Terms and Conditions and the UKCloud System Interconnect Security Policy (SISP))

- A *force majeure* event

- Denial of service attacks, virus or hacking attacks for which there is no commercially reasonable known solution; or any other events that are not within the direct control of UKCloud or that could not have been avoided with commercially reasonable care

- Packet loss, network or connectivity (for example, internet, MPLS) problems beyond UKCloud's management boundary (for example, border router) supporting our connectivity to the public internet or government secure networks

- Any customer-defined or customer-controlled event (for example, unavailability of service resulting from inadequate customer-subscribed services, resources or configuration)

The customer will not be eligible to receive a Service Credit if the service account has any undisputed payments outstanding beyond their due date, or you are in violation of UKCloud's Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement claims

To request a Service Credit, the customer must file a support ticket within thirty (30) calendar days of the relevant suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable.

Service Credits will be issued only to the customer that UKCloud invoices for the applicable instance of the service as a separate credit note that can be applied towards a future invoice for that service only. If the customer's contract term for the service expires or is terminated prior to a Service Credit being issued, the Service Credit will become void as of the date of the expiration or termination.

## UKCloud service level agreement monitoring

### Generic service components

UKCloud monitors various elements across the service to ensure that availability can be measured appropriately and realistically. Some elements are generic across all services others are service specific.

#### UKCloud Portal

UKCloud monitors the customer self-service UKCloud Portal, (<https://portal.ukcloud.com> (or Elevated equivalent)). This includes the UKCloud for VMware API, which provides programmatic control of the UKCloud for VMware service.

&nbsp;                      | UKCloud Portal
----------------------------|---------------
**Availability commitment** | 99.90%
**Service Credit**          | 1% of monthly spend per 1% below the service level target or part thereof for services.

### UKCloud for Microsoft Azure Stack Hub

&nbsp;                       | UKCloud for Microsoft Azure Stack Hub
-----------------------------|--------------------------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<ul><li>Deletion or modification of VM by customer<li>Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**CHDC:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit**           | 10% of monthly spend for Private Cloud. thereof for affected compute platform.

### UKCloud for OpenStack

&nbsp;                       | UKCloud for OpenStack
-----------------------------|----------------------
**Availability commitment**  | **Data plane per region (instances):** 99.95%<br>**Control plane (OpenStack API and Horizon GUI):** 99.95%<br>*Customers should increase the availability of their solutions by engineering them across multiple regions*
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded where a customer solution has been engineered to a single region
**Measurement of SLA**       | **Data plane:** Inability to deploy/re-instantiate an instance via the API at the same time as an existing instance failing<br>**Control plane:** Inability to receive a response to any valid requests submitted to the appropriate OpenStack API endpoint after seven retries in any consecutive 10-minute period
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and custom configurations (for example customer-defined networks)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | **Data plane:** Per region: 2% of monthly spend; Global: 10% of monthly spend<br>**Control plane:** Global: 1% of monthly spend per 1% below service level target or part thereof

### UKCloud for Oracle Software

> [!IMPORTANT]
> This service is no longer available for sale. The following information is provided to support existing customers of the service only.

&nbsp;                       | UKCloud for Oracle Software
-----------------------------|----------------------------
**Availability commitment**  | **Non-HA:** 99.95%<br>**HA:** 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | The service is deemed unavailable if a customer is unable to restart a VM after it becomes unresponsive due to a fault recognised as the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical infrastructure availability, storage, power and internal networking, such as physical firewalls and routers.<br>As Oracle workloads are pinned to processor cores, VMs will only be automatically moved in the event of a host failure if the HA feature has been enabled by the customer on each VM. Customers are responsible for enabling the HA feature. If the HA feature is not enabled, UKCloud will need to move Oracle VMs to a new host so they can be restarted. The manual movement of VMs is covered by the Non-HA SLA.<br>Customers are responsible for restarting VMs and should configure alerts to be notified if an Oracle VM failure occurs. This will not be a live migration and an application restart will be required. Customers will be advised if an action is to be performed.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend

### UKCloud for Red Hat OpenShift

&nbsp;                       | UKCloud for Red Hat OpenShift
-----------------------------|------------------------------
**Availability commitment**  | 99.95% (control plane)<br>99.95% (data plane)
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies when the OpenShift environment becomes unresponsive owing to a fault in the UKCloud-controlled OpenShift infrastructure and services which lies within:<ul><li>UKCloud-controlled components such as the virtual infrastructure, storage, power, and physical firewalls and routers<li>UKCloud-maintained OpenShift services (master nodes, infrastructure nodes, routing layer)</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within user control, that is, any code owned and controlled by the customer<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Issues arising from bugs introduced as part of any new releases published by Red Hat (UKCloud will conduct thorough testing prior to applying any new releases)</ul>
**Service Credit**           | 3% of monthly spend for affected UKCloud deployed OpenShift platform

### UKCloud for VMware

&nbsp;                       | UKCloud for VMware
-----------------------------|-------------------
**Availability commitment**  | **ESSENTIAL:** 99.95%<br>**POWER:** 99.99%<br>**PRIORITY:** 99.95%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | **ESSENTIAL:** Included<br>**POWER:** Included<br>**PRIORITY:** Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | **ESSENTIAL:** 3% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**POWER:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**PRIORITY:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**Protection-improved Service Credit**:<ul><li>Combination of **Snapshot Protection** with the **POWER** service type increases Service Credits to 10% of monthly spend per 5% below service level target or part thereof for affected compute platform<li>Inclusion of **Synchronous Protection** increases Service Credits to 15% of monthly spend per 5% below service level target or part thereof for affected compute platform</ul>

### Cloud Storage

&nbsp;                       | Cloud Storage
-----------------------------|--------------
**Availability commitment**  | **STANDARD:** 99.95%<br>**ENHANCED:** 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing data where the data becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power and internal networking such as physical firewalls and routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud</ul>
**Service Credit**           | **STANDARD:** 10% of monthly spend<br>**ENHANCED:** 15% of monthly spend

### Cross Domain Security Zone

&nbsp;                       | Cross Domain Security Zone
-----------------------------|---------------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the underlying Cross Domain Security Zone infrastructure due to a fault recognised at the IaaS layer, data centre facilities, physical firewalls or routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>The fault is within the customer's control (such as VM configuration, customer networks, application logic)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Cross Domain Security Zone

### Dedicated Compute v2

&nbsp;                       | Dedicated Compute v2
-----------------------------|---------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform

### Disaster Recovery as a Service (DRaaS)

Due to the service being dependent on connectivity between the customer data centre and UKCloud, we are unable to offer an SLA relating to the performance of this service. For full details of the SLA for the UKCloud for VMware platform that hosts the solution, see [*UKCloud for VMware*](#ukcloud-for-vmware).

### Email and Collaboration as a Service

> [!IMPORTANT]
> This service is no longer available for sale. The following information is provided to support existing customers of the service only.

&nbsp;                       | Email and Collaboration as a Service
-----------------------------|-------------------------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing mailboxes that become unresponsive due to a fault recognised at the SaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power or internal networking (such as physical firewalls and routers)
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and mailbox configuration<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend per 5% below service level target or part thereof for the service

### Extended Network Support from UKCloud

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### Managed Monitoring as a Service

Service levels for Managed Monitoring as a Service are split into the following two targets:

- **Availability** - UKCloud offers an availability SLA of 99.99% (excluding Planned Maintenance) for all elements of our monitoring service that reside within UKCloud's direct control. For the avoidance of doubt, this scope covers the entire data flow path from the VPN termination point within our 'Management Bubble' through to the customer ticket notification being generated by our IT service management tooling (Ivanti).

- **Alert Notification** - UKCloud will notify the customer within 15 minutes of the point when UKCloud receives any event meeting the agreed conditions to trigger an alert.

### Migration to the Cloud

Due to the service being dependent on connectivity between the customer data centre and UKCloud, we are unable to offer an SLA relating to the performance of this service.

### Neustar DDoS Protection from UKCloud

&nbsp;                       | Neustar DDoS Protection from UKCloud
-----------------------------|-------------------------------------
**Availability commitment**  | 99.9998%
**Time to mitigate**         | 5 minutes (L3/4); 15 minutes (L7)<br>Time from redirection to mitigation
**Scrubbing efficacy**       | 95%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Included
**Planned Maintenance**      | Included
**Measurement of SLA**       | Availability of service refers to availability of the DDoS Protect platform.<br>Neustar shall begin mitigation within:<br><ul><li>5 minutes for Layer 3 & 4 attacks<li>15 minutes for Layer 7 attacks</ul>From the time traffic is redirected to UltraDDoS Protect platform and Neustar has detected malicious traffic. Each attack vector change shall start a new Time to mitigate.<br>95% clean pass-through. Neustar shall clean the traffic such that no more than 5% of dirty/malicious traffic shall be passed to customer endpoint(s).
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Fault is within the customer's control (configuration, customer applications and customer networks)<li>Faults associated with customer's domain name registrar<li>Faults associated with third party/service provider networks</ul>
**Service Credit**           | None

### Neustar UltraDNS from UKCloud

&nbsp;                       | Neustar UltraDNS from UKCloud
-----------------------------|------------------------------
**Availability commitment**  | 100%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Included
**Planned Maintenance**      | Included
**Measurement of SLA**       | Availability applies to the customer assigned network within the Neustar Server Network being available to respond to Authoritative DNS queries
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Fault is within the customer's control (configuration, customer applications and customer networks)<li>Faults associated with customer's domain name registrar<li>Faults associated with third party/service provider networks</ul>
**Service Credit**           | None

### Private Cloud

&nbsp;                       | Private Cloud
-----------------------------|-------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<ul><li>Deletion or modification of VM by customer<li>Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**CHDC:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit**           | 10% of monthly spend for Private Cloud.

### Private Cloud for Oracle Software

&nbsp;                       | Private Cloud for Oracle Software
-----------------------------|----------------------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | **All-Inclusive and UKCloud Managed:** Availability of all or part of the Private Cloud for Oracle Software infrastructure<br>**UKCloud Hosted:** Availability of power and cooling to your Private Cloud for Oracle Software infrastructure
**Key exclusions**           | The following are examples of what is not covered:<br>**All-Inclusive and UKCloud Managed:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the Oracle system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer Managed and UKCloud Managed**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional components into the system</ul>**UKCloud Hosted:**<ul><li>As above, plus any platform outages of the Private Cloud for Oracle Software infrastructure caused by the party managing the Oracle infrastructure hosted within UKCloud, or by failures at the physical or logical infrastructure layer outside of UKCloud's responsibility</ul>**Applies to CHDC hosted or On-Premises:**<ul><li>As above, plus any platform outages of the Private Cloud for Oracle Software infrastructure caused by data centre failures outside of UKCloud control</ul>
**Service credits**          | 10% of monthly spend for Private Cloud for Oracle Software

### Private Cloud for Storage

&nbsp;                       | Private Cloud for Storage
-----------------------------|--------------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Availability of all or part of the storage infrastructure
**Key exclusions**           | The following are examples of what is not covered:<br>**All-Inclusive, UKCloud Hosted and Crown Campus Hosted:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the storage system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the storage system</ul>**Applies to Crown Campus Hosted:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit** | 10% of monthly spend for Private Cloud for Storage.

### Secure Remote Access

&nbsp;                       | Secure Remote Access
-----------------------------|---------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the Secure Remote Access VPN endpoints due to a fault recognised at the IaaS layer or lower (such as the virtual infrastructure, storage, power, physical firewalls, routers or VPN concentrators)
**Key exclusions**           | The following are examples of what is not covered:<ul><li>Faults within your control, such as operating systems, applications, user networks, local device failure or software failure<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Secure Remote Access Service

### Security Operations Service

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### VMware Licence Support

There is no SLA for this service. For information about customer service targets for support response, see [*How to raise and escalate support tickets with customer support*](../portal/ptl-how-raise-escalate-service-request.md)).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
