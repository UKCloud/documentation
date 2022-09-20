---
title: SLA definition
description: Definition of the UKCloud service level agreement (SLA)
services: other
author: shighmoor
reviewer: shighmoor
lastreviewed: 20/09/2022
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

UKCloud will use reasonable endeavours to ensure that the availability of the UKCloud service purchased by the customer in a given calendar month equals the applicable *availability commitment*.

To define availability, UKCloud monitors a number of service elements &nbsp; some generic, some service specific &nbsp; which collectively enable the customer to use or access the service. These individual components are monitored and if one fails, the service may be deemed unavailable. We believe this approach gives a more representative and pragmatic view of service availability.

UKCloud polls our services every minute using a variety of methods that range from a basic ping test to a synthetic transaction that replicates a user's journey. The method used will depend on the specific component or service being monitored.

UKCloud also monitors the data centre network between the physical hypervisor hosts or storage platform and the outside interface connecting the data centre network to any third-party networks (for example, internet, PSN, Janet or private circuits).

If the availability of the service is less than the associated availability commitment, the customer may request Service Credits for the service within 30 calendar days of the service being deemed unavailable.

> [!NOTE]
> UKCloud's monitoring tools, data and records (including support tickets) will be the sole source of information used to track and validate service availability.

## Unavailability and service level agreement events

Subject to the service level agreement (SLA) limitations detailed below, the service will be considered unavailable (and an SLA event will be deemed as having taken place) if UKCloud's monitoring detects that the service or component has failed for five consecutive minutes. The total number of minutes that the service is unavailable is measured from the time that UKCloud confirms the SLA event has occurred until the time that UKCloud resolves the issue and the service becomes available to the customer. If two or more SLA events occur simultaneously, the SLA event with the longest duration will be used to determine the total number of minutes for which the service was unavailable.

UKCloud calculates availability by monitoring specific components and then using the following formula to determine the percentage that a service was available for:

`P = (A - B) x 100`

Where:

- `P` = Percentage availability

- `A` = Total number of minutes in month

- `B` = Total number of whole minutes that service is unavailable

## Service Credits

If the availability of the service for a particular month falls below the availability commitment specified in the applicable SLA (subject to the SLA limitations provided below), customers will be eligible to request Service Credits.

Service Credits will be calculated as a percentage of the fees billed for the monthly period during which the SLA event occurred (to be applied at the end of the billing cycle, or of the subsequent cycle if a claim is made after an invoice has been paid). For some examples of how this might work for different services, see [*Worked examples*](#worked-examples) later in this article.

To request a Service Credit, you must raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal within 30 calendar days of the suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable either during that billing cycle or the subsequent one if the claim is made just after an invoice has been paid.

> [!NOTE]
> You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud's Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement limitations

The following will be excluded from any time-based calculations related to the service being unavailable:

- Service dependent — Planned Maintenance windows (as specified in the service-specific information below)

- Emergency Maintenance (as specified in the service-specific information below)

- Your misuse of a particular service (as defined in the UKCloud Terms and Conditions and the UKCloud System Interconnect Security Policy (SISP))

- A *force majeure* event

- Denial of service attacks, virus or hacking attacks for which there is no commercially reasonable known solution; or any other events that are not within the direct control of UKCloud or that could not have been avoided with commercially reasonable care

- Packet loss, network or connectivity (for example, internet, MPLS) problems beyond UKCloud's management boundary (for example, border router) supporting our connectivity to the public internet or government secure networks

- Any customer-defined or customer-controlled event (for example, unavailability of service resulting from inadequate customer-subscribed services, resources or configuration)

If you want to co-locate additional devices in UKCloud's data centres, this falls outside of UKCloud's responsibility and control, and therefore the devices will not be covered by a UKCloud SLA. If you're co-locating devices in our data centres, you should be aware that doing so could introduce single points of failure.

You will not be eligible to receive a Service Credit if the service account has any undisputed payments outstanding beyond their due date, or you are in violation of UKCloud's Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement claims

To request a Service Credit, the customer must file a support ticket within thirty (30) calendar days of the relevant suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable.

Service Credits will be issued only to the customer that UKCloud invoices for the applicable instance of the service as a separate credit note that can be applied towards a future invoice for that service only. If the customer's contract term for the service expires or is terminated prior to a Service Credit being issued, the Service Credit will become void as of the date of the expiration or termination.

## Service level agreement by service

### Generic service components

#### UKCloud Portal SLA

&nbsp;                      | UKCloud Portal
----------------------------|---------------
**Availability commitment** | 99.90%
**Service Credit**          | 1% of monthly spend per 1% below the service level target or part thereof for services.

#### Connectivity SLA

UKCloud does not offer any SLA covering the performance or availability of any external connection to the UKCloud platform, this includes internet, PSN, HSCN or Janet, for example. Connections between services within UKCloud are covered by the SLA representing the services, including inter-DC connectivity between UKCloud's regions and sites.

### UKCloud for Microsoft Azure SLA

&nbsp;                       | UKCloud for Microsoft Azure
-----------------------------|----------------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<ul><li>Deletion or modification of VM by customer<li>Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**CHDC:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit**           | 10% of monthly spend for Private Cloud

### UKCloud for OpenStack SLA

&nbsp;                       | UKCloud for OpenStack
-----------------------------|----------------------
**Availability commitment**  | **Data plane per region (instances):** 99.95%<br>**Control plane (OpenStack API and Horizon GUI):** 99.95%<br>*Customers should increase the availability of their solutions by engineering them across multiple regions*
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded where a customer solution has been engineered to a single region
**Measurement of SLA**       | **Data plane:** Inability to deploy/re-instantiate an instance via the API at the same time as an existing instance failing<br>**Control plane:** Inability to receive a response to any valid requests submitted to the appropriate OpenStack API endpoint after seven retries in any consecutive 10-minute period
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and custom configurations (for example customer-defined networks)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | **Data plane:** Per region: 2% of monthly spend; Global: 10% of monthly spend<br>**Control plane:** Global: 1% of monthly spend per 1% below service level target or part thereof

### UKCloud for Oracle Software SLA

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

### UKCloud for Red Hat OpenShift SLA

&nbsp;                       | UKCloud for Red Hat OpenShift
-----------------------------|------------------------------
**Availability commitment**  | 99.95% (control plane)<br>99.95% (data plane)
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies when the OpenShift environment becomes unresponsive owing to a fault in the UKCloud-controlled OpenShift infrastructure and services which lies within:<ul><li>UKCloud-controlled components such as the virtual infrastructure, storage, power, and physical firewalls and routers<li>UKCloud-maintained OpenShift services (master nodes, infrastructure nodes, routing layer)</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within user control, that is, any code owned and controlled by the customer<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Issues arising from bugs introduced as part of any new releases published by Red Hat (UKCloud will conduct thorough testing prior to applying any new releases)</ul>
**Service Credit**           | 3% of monthly spend for affected UKCloud deployed OpenShift platform

### UKCloud for VMware SLA

&nbsp;                       | UKCloud for VMware
-----------------------------|-------------------
**Availability commitment**  | **ESSENTIAL:** 99.95%<br>**POWER:** 99.99%<br>**PRIORITY:** 99.95%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | **ESSENTIAL:** Included<br>**POWER:** Included<br>**PRIORITY:** Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | **ESSENTIAL:** 3% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**POWER:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**PRIORITY:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform<br>**Protection-improved Service Credit**:<ul><li>Combination of **Snapshot Protection** with the **POWER** service type increases Service Credits to 10% of monthly spend per 5% below service level target or part thereof for affected compute platform<li>Inclusion of **Synchronous Protection** increases Service Credits to 15% of monthly spend per 5% below service level target or part thereof for affected compute platform</ul>

### Cloud Storage SLA

&nbsp;                       | Cloud Storage
-----------------------------|--------------
**Availability commitment**  | **STANDARD:** 99.95%<br>**ENHANCED:** 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing data where the data becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power and internal networking such as physical firewalls and routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud</ul>
**Service Credit**           | **STANDARD:** 10% of monthly spend<br>**ENHANCED:** 15% of monthly spend

### Cross Domain Security Zone SLA

&nbsp;                       | Cross Domain Security Zone
-----------------------------|---------------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the underlying Cross Domain Security Zone infrastructure due to a fault recognised at the IaaS layer, data centre facilities, physical firewalls or routers
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>The fault is within the customer's control (such as VM configuration, customer networks, application logic)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Cross Domain Security Zone

### Dedicated Compute v2 SLA

&nbsp;                       | Dedicated Compute v2
-----------------------------|---------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform

### Disaster Recovery as a Service (DRaaS) SLA

Due to the service being dependent on connectivity between the customer data centre and UKCloud, we are unable to offer an SLA relating to the performance of this service. For full details of the SLA for the UKCloud for VMware platform that hosts the solution, see [*UKCloud for VMware*](#ukcloud-for-vmware).

### Email and Collaboration as a Service SLA

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

### Extended Network Support from UKCloud SLA

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### Managed Monitoring as a Service SLA

Service levels for Managed Monitoring as a Service are split into the following two targets:

- **Availability** - UKCloud offers an availability SLA of 99.99% (excluding Planned Maintenance) for all elements of our monitoring service that reside within UKCloud's direct control. For the avoidance of doubt, this scope covers the entire data flow path from the VPN termination point within our 'Management Bubble' through to the customer ticket notification being generated by our IT service management tooling (Ivanti).

- **Alert Notification** - UKCloud will notify the customer within 15 minutes of the point when UKCloud receives any event meeting the agreed conditions to trigger an alert.

Managed Monitoring as a Service customers can raise a request for Service Credits if they feel a breach of the Service Level Agreement has occurred. Customers are entitled to claim 1% of Managed Monitoring as a Service spend, per affected customer environment, where one of the following conditions are met:

- Per 1% breach of Availability target

- Per 5 minutes over Alert Notification target

A monthly cap on Service Credits applies, up to and not beyond the full amount a customer is charged for the Managed Monitoring as a Service service within the same billing period that Service Credit entitlement occurred.

> [!NOTE]
> A claim for Service Credits against the Alert Notification target cannot be raised within the same period where a claim for Availability Service Credits has also been made.

### Migration to the Cloud SLA

Due to the service being dependent on connectivity between the customer data centre and UKCloud, we are unable to offer an SLA relating to the performance of this service.

### Neustar DDoS Protection from UKCloud SLA

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

### Neustar UltraDNS from UKCloud SLA

&nbsp;                       | Neustar UltraDNS from UKCloud
-----------------------------|------------------------------
**Availability commitment**  | 100%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Included
**Planned Maintenance**      | Included
**Measurement of SLA**       | Availability applies to the customer assigned network within the Neustar Server Network being available to respond to Authoritative DNS queries
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Fault is within the customer's control (configuration, customer applications and customer networks)<li>Faults associated with customer's domain name registrar<li>Faults associated with third party/service provider networks</ul>
**Service Credit**           | None

### Private Cloud SLA

&nbsp;                       | Private Cloud
-----------------------------|-------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer's control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<ul><li>Deletion or modification of VM by customer<li>Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**CHDC:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit**           | 10% of monthly spend for Private Cloud

### Private Cloud for Oracle Software SLA

&nbsp;                       | Private Cloud for Oracle Software
-----------------------------|----------------------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | **All-Inclusive and UKCloud Managed:** Availability of all or part of the Private Cloud for Oracle Software infrastructure<br>**UKCloud Hosted:** Availability of power and cooling to your Private Cloud for Oracle Software infrastructure
**Key exclusions**           | The following are examples of what is not covered:<br>**All-Inclusive and UKCloud Managed:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the Oracle system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer Managed and UKCloud Managed**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional components into the system</ul>**UKCloud Hosted:**<ul><li>As above, plus any platform outages of the Private Cloud for Oracle Software infrastructure caused by the party managing the Oracle infrastructure hosted within UKCloud, or by failures at the physical or logical infrastructure layer outside of UKCloud's responsibility</ul>**Applies to CHDC hosted or On-Premises:**<ul><li>As above, plus any platform outages of the Private Cloud for Oracle Software infrastructure caused by data centre failures outside of UKCloud control</ul>
**Service credits**          | 10% of monthly spend for Private Cloud for Oracle Software

### Private Cloud for Storage SLA

&nbsp;                       | Private Cloud for Storage
-----------------------------|--------------------------
**Availability commitment**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Availability of all or part of the storage infrastructure
**Key exclusions**           | The following are examples of what is not covered:<br>**All-Inclusive, UKCloud Hosted and Crown Campus Hosted:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the storage system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data, including data corruption, as a result of you or your suppliers installing new or additional capacity to the storage system</ul>**Applies to Crown Campus Hosted:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit** | 10% of monthly spend for Private Cloud for Storage

### Secure Remote Access SLA

&nbsp;                       | Secure Remote Access
-----------------------------|---------------------
**Availability commitment**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days)
**Emergency Maintenance**    | Excluded
**Planned Maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the Secure Remote Access VPN endpoints due to a fault recognised at the IaaS layer or lower (such as the virtual infrastructure, storage, power, physical firewalls, routers or VPN concentrators)
**Key exclusions**           | The following are examples of what is not covered:<ul><li>Faults within your control, such as operating systems, applications, user networks, local device failure or software failure<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Secure Remote Access Service

### Security Operations Service SLA

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### VMware Licence Support SLA

There is no SLA for this service. For information about customer service targets for support response, see [*Raising and escalating support tickets with customer support*](../portal/ptl-ref-raise-escalate-service-request.md)).

## UKCloud service level agreement monitoring

### Generic service components

UKCloud monitors various elements across the service to ensure that availability can be measured appropriately and realistically. Some elements are generic across all services others are service specific.

#### UKCloud Portal

UKCloud monitors the customer self-service UKCloud Portal, (<https://portal.ukcloud.com> (or Elevated equivalent)). This includes the UKCloud for VMware API, which provides programmatic control of the UKCloud for VMware service.

To confirm that the Portal is available, UKCloud performs synthetic transactions by authenticating access to an account by a simulated user and retrieving a support ticket. This process demonstrates whether the UKCloud Portal is accessible and that this element of the service is available.

If you're unable to access your Portal account to raise a support ticket, then you'll need to call UKCloud on 01252 303300 and select option 2.

### UKCloud for OpenStack

UKCloud monitors three main components of the compute services within UKCloud for OpenStack to provide the best overall measure of service availability:

- The physical host server that instances are running on, this confirms that instances have resources and can be available.

- The data store which ensures that the storage associated with instances is accessible.

- The control plane API which you may use to programmatically control your UKCloud for OpenStack environment.

UKCloud will monitor the underlying physical servers every minute using internal systems and tools to verify that the server is responsive and available. UKCloud monitors the data stores every minute using internal systems and tools to verify the status of UKCloud for OpenStack storage services.

UKCloud does not offer an SLA covering the performance of instances or their storage. However, platform capacity and resources are managed by UKCloud to ensure you receive a consistent level of service.

The calculation of Service Credits will depend upon whether a customer has engineered their solution to utilise multiple availability zones and regions. For example, if an SLA event occurs and the percentage availability falls below the commitment stated in your SLA, then UKCloud will offer you a Service Credit as a percentage of the total amount billed during the month for the instances affected. You'll only receive a Service Credit if the service provided was affected, for example, the instance was turned on.

### UKCloud for Red Hat OpenShift

UKCloud monitors the underpinning infrastructure and UKCloud for Red Hat OpenShift services to ensure the highest levels of platform availability. In addition, we perform a synthetic transaction that mimics the publication "push" of an application which is accessible to a test consumer. An SLA event will be deemed to have occurred and the service deemed unavailable if the monitoring fails for five consecutive minutes.

UKCloud only offers an SLA covering the availability of the service, not the durability of the data. Data generated by UKCloud for Red Hat OpenShift applications should be considered transient; as such any data which requires persistency and durability should be stored in an alternative storage solution such as UKCloud's Cloud Storage.

### UKCloud for VMware

UKCloud monitors three main components of the UKCloud for VMware service to provide the best overall measure of service availability:

- The physical host server that the VM is running on. This confirms that the VM has resources and can be available.

- The data store which ensures that the storage associated with the VM is accessible.

- The UKCloud for VMware API (available on the [UKCloud Portal](https://portal.ukcloud.com/)) which you may use to programmatically control your UKCloud for VMware environment.

By monitoring these three components, UKCloud believes that we can provide the best overall view of the availability of the service.

UKCloud will monitor the underlying physical servers every minute using internal systems and tools to verify that the server is responsive and available. UKCloud monitors the UKCloud for VMware data stores every minute using internal systems and tools to verify the status of the UKCloud for VMware storage.

Virtual firewalls are covered by the UKCloud management plane (IaaS layer or below) SLA. Customers can claim service credits for affected VMs in the event of an outage, where the fault is within UKCloud-controlled components. Further details are available in the [*SLA definition*](other-ref-sla-definition.md).

UKCloud does not offer an SLA covering the performance of the VM or its storage. However, server capacity and resources are managed by UKCloud to ensure you receive a consistent level of service.

The number of Service Credits received depends on how long the service was unavailable for and the Service Level selected when the VM was purchased. For example, if an SLA event occurs and the percentage availability falls below the commitment stated in your SLA, then UKCloud will offer you a Service Credit as a percentage of the total amount billed during the month for the VM affected.

You'll only receive a Service Credit if the service provided was affected. For example, the VM was powered on.

### Cloud Storage

For the STANDARD, UKCloud performs a synthetic transaction that mimics a user authenticating and the "posting" of data on to the platform. An SLA event will be deemed to have occurred and the service deemed unavailable (specifically, a failure of storage hosts and authentication sub-system) if the monitoring fails for five consecutive minutes.

For for ENHANCED, UKCloud performs a synthetic transaction that mimics a user authenticating and the "posting" of data on to the platform. An SLA event will be deemed to have occurred and the service deemed unavailable (specifically, concurrent failure of storage hosts and authentication sub-system in both data centre locations) if the monitoring fails in both data centres at the same time for five consecutive minutes.

UKCloud only offers an SLA covering the availability of the service, not the durability of the data.

## Worked examples

UKCloud uses the following formula to determine the percentage that a service was available for:

P = A-B x 100 / A, where: P= Percentage availability A= Total number of minutes in month B = Total number of whole minutes that service is unavailable

### UKCloud for OpenStack

#### Example factors

- Total hours in January = 744

- Example cost of an instance per hour = £1.00

- Availability commitment (Data plane) = 99.95%

- Service Credit payment (Data plane) = Per region: 2% of monthly spend; Global: 10% of monthly spend

### [Scenario A - global deployment](#tab/tabid-1)

An instance is running as part of a globally deployed solution and available for the month of January except for a two-hour period when the data plane is deemed unavailable.

#### Are Service Credits applicable?

- Total minutes in the month (A) = 44,640

- Total minutes service unavailable (B) = 120

- Percentage availability of service (P) = (44,640 - 120) x (100 / 44,640) = 99.73%

The two-hour outage means percentage availability of service is 99.73%, which is below the availability commitment of 99.95%. The customer is therefore eligible for a Service Credit.

#### How much is payable?

- The bill for the customer at the end of the month would be £744 (before credits are applied)

- The Service Credit for global deployment is 10% of the amount billed to that instance during the calendar month = £74.40

- The amount billed to the customer is therefore £744 - £74.40 = **£669.60**

### [Scenario B - single region deployment](#tab/tab-2)

An instance is running within a single region and available for the month of January except for a two-hour period when the data plane is deemed unavailable.

#### Are Service Credits applicable?

- Total minutes in the month (A) = 44,640

- Total minutes service unavailable (B) = 120

- Percentage availability of service (P) = (44,640 - 120) x (100 / 44,640) = 99.73%

The two-hour outage means percentage availability of service is 99.73%, which is below the availability commitment of 99.95%. The customer is therefore eligible for a Service Credit.

#### How much is payable?

- The bill for the customer at the end of the month would be £744 (before credits are applied)

- The Service Credit for single region deployment is 2% of the amount billed to that instance during the calendar month = £14.88

- The amount billed to the customer is therefore £744 - £14.88 = **£729.12**

***

### UKCloud for Red Hat OpenShift

An OpenShift deployment with an expected cost of £1,000 per month, however the UKCloud synthetic transaction monitor fails for three hours so the service is deemed unavailable.

#### Example factors

- Total hours in January = 744

- Example cost of deployment per month = £1,000

- Availability commitment (Data plane) = 99.95%

- Service Credit payment = 3% of monthly spend for affected UKCloud deployed OpenShift platform

#### Are Service Credits applicable?

- Total minutes in the month (A) = 44,640

- Total minutes service unavailable (B) = 300

- Percentage availability of service (P) = (44,640 - 180) x (100 / 44,640) = 99.60%.

The three-hour outage means percentage availability of service is 99.60%, which is below the availability commitment of 99.95%. The customer is therefore eligible for a Service Credit.

#### How much is payable?

- The bill for the customer at the end of the month would be £1,000 (before credits are applied)

- The Service Credit is 3% of the amount billed to that UKCloud for Red Hat OpenShift deployment during the calendar month = £30

- The amount billed to the Customer is therefore £1,000 - £30 = **£970**

### UKCloud for VMware

A POWER virtual machine is running and available for the month of January except for a one-hour period when the service is deemed unavailable.

#### Example factors

- Total hours in January = 744

- Example cost of a VM per hour = £1.00

- Availability commitment (POWER) = 99.99%

- Service Credit payment (POWER) = 5% of monthly spend per 5% below service level target or part thereof for affected compute platform

#### Are Service Credits applicable?

- Total minutes in the month (A) = 44,640

- Total minutes service unavailable (B) = 60

- Percentage availability of service (P) = (44,640 - 60) x (100 / 44,640) = is 99.87%

The one-hour outage means percentage availability of service is 99.87%, which is below the availability commitment of 99.99%. The customer is therefore eligible for a Service Credit.

#### How much is payable?

- The bill for the customer at the end of the month would be £744 (before credits are applied)

- The Service Credit for a POWER VM is 5% of the amount billed to that VM during the calendar month = £37.20

- The amount billed to the customer is therefore £744 - £37.20 = **£706.80**

### Cloud Storage

100GiB of STANDARD-level data is stored on the platform at an expected cost of £100 per month, however the UKCloud synthetic transaction monitor fails for two hours so the service is deemed unavailable.

#### Example factors

- Total hours in January = 744

- Example cost of 100GiB of storage per month = £1.00 per hour

- Availability Commitment (STANDARD) = 99.95%

- Service Credit payment (STANDARD) = 10% of monthly spend

#### Are Service Credits applicable?

- Total minutes in the month (A) = 44,640

- Total minutes service unavailable (B) = 120

- Percentage availability of service (P) = (44,640 - 120) x (100 / 44,640) = 99.73%

The two-hour outage means percentage availability of service is 99.73%, which is below the availability commitment of 99.95%. The customer is therefore eligible for a Service Credit.

#### How much is payable?

- The bill for the customer at the end of the month would be £100 (before credits are applied)

- The Service Credit is 10% of the amount billed for that storage during the calendar month = £10

- The amount billed to the Customer is therefore £100 - £10 = **£90**

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
