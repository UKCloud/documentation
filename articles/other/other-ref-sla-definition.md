---
title: SLA definition | UKCloud Ltd
description: Definition of the UKCloud Service Level Agreement (SLA)
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 23/07/2018 14:44:15
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: SLA definition
toc_fullpath: Reference/other-ref-sla-definition.md
toc_mdlink: other-ref-sla-definition.md
---

# SLA Definition

## Availability

UKCloud will use reasonable endeavours to ensure that the availability of the UKCloud service purchased by the customer (the service) in a given calendar month equals the applicable Availability Commitment. To define availability, UKCloud monitors a number of service elements — some generic, some service specific — which collectively enable the customer to use or access the service. If the availability of the service is less than the associated Availability Commitment, the customer may request Service Credits for the service within 30 calendar days of the service being deemed unavailable. 

## Unavailability and Service Level Agreement events

Subject to the Service Level Agreement (SLA) limitations detailed below, the service will be considered unavailable (and an SLA event will be deemed as having taken place) if UKCloud’s monitoring detects that the service or component has failed for five consecutive minutes. The total number of minutes that the service is unavailable is measured from the time that UKCloud confirms the SLA event has occurred until the time that UKCloud resolves the issue and the service becomes available to the customer. If two or more SLA events occur simultaneously, the SLA event with the longest duration will be used to determine the total number of minutes for which the service was unavailable.

## Service Credits

If the availability of the service for a particular month falls below the Availability Commitment specified in the applicable SLA (subject to the SLA limitations provided below), customers will be eligible to request Service Credits. Service Credits will be calculated as a percentage of the fees billed for the monthly period during which the SLA event occurred (to be applied at the end of the billing cycle, or of the subsequent cycle if a claim is made after an invoice has been paid).

You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud’s [*Terms and Conditions*](../other/other-ref-terms-and-conditions.md) including the UKCloud System Interconnect Security Policy
(SISP).

## Service Level Agreement limitations

The following will be excluded from any time-based calculations related to the service being unavailable:

- Service dependant — planned maintenance windows (as specified in the applicable service description)

- Emergency maintenance (as specified in the applicable service description)

- Your misuse of a particular service (as defined in the UKCloud [*Terms and Conditions*](../other/other-ref-terms-and-conditions.md) and the UKCloud System Interconnect Security Policy (SISP))

- A *force majeure* event

- Denial of service attacks, virus or hacking attacks for which there is no commercially reasonable, known solution; or any other events that are not within the direct control of UKCloud or that could not have been avoided with commercially reasonable care

- Packet loss, network or connectivity (for example, internet, MPLS) problems beyond UKCloud’s management boundary (for example, border router) supporting our connectivity to the public internet or government secure networks

- Any customer-defined/customer-controlled event (for example, unavailability of service resulting from inadequate customer-subscribed services, resources or configuration)

The customer will not be eligible to receive a Service Credit if the service account has any undisputed payments outstanding beyond their due date, or you are in violation of UKCloud’s [*Terms and Conditions*](../other/other-ref-terms-and-conditions.md) including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement claims

To request a Service Credit, the customer must file a Support Request within thirty (30) calendar days of the relevant suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable.

Service Credits will be issued only to the customer that UKCloud invoices for the applicable instance of the service, as a separate credit note that can be applied towards a future invoice for that service only. If the customer’s contract term for the service expires or is terminated prior to a Service Credit being issued, the Service Credit will become void as of the date of the expiration or termination.

## UKCloud SLA monitoring

UKCloud monitors various elements across the service to ensure that availability can be measured appropriately and realistically. Some elements are generic across all services others are service specific.

&nbsp; | &nbsp;
-------|-------
**Generic service component monitored** | UKCloud Portal: UKCloud monitors the customer self-service portal, (https://portal.ukcloud.com (or Elevated equivalent)). This includes the UKCloud for VMware API which provides programmatic control of the UKCloud Compute service.
**Availability Commitment** | 99.90%
**Service Credits** | % of monthly spend per 1% below the Availability Commitment or part thereof for services.

### Basic Managed VM

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | Depends on VM service level: <br>- 99.95% (contended)<br>- >99.99% (uncontended)
**Portal level agreement**  | 99.90%
**Availability calculation**| Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Measurement of SLA**      | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the infrastructure, storage, power, internal networking (such as physical firewalls and routers) or hypervisor layer, or lower level.
**Key exclusions**          | The following are examples of what is not covered by the SLA:<br>- Faults within your control, such as client applications<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit**          | 0% of monthly spend per 5% below service level target or part thereof for the service. <br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Cloud GPU

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.90%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days).
**Emergency and Planned Maintenance** | Excluded from calculations
**Measurement of SLA** | Unavailability applies to inability to connect to a new GPU resource in the event of a failure of a GPU service within a single zone. Failure condition is following a hardware fault recognised at the IaaS layer or below and within UKCloud-controlled components.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client application issues<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit** | 3% of monthly spend per 5% below service level target or part thereof for affected compute platform. <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Cloud Storage

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | **STANDARD:** 99.95%<br>**ENHANCED:** 99.99%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to existing data where the data becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- The fault is within the customer's control (applications and user networks)<br>- Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit**  | **STANDARD:** 10% of monthly spend<br>**ENHANCED:** 15% of monthly spend
&nbsp; | 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Cross Domain Security Zone

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.90%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to the UKCloud Guard or the underlying Cross Domain Security Zone infrastructure due to a fault recognised at the IaaS layer, data centre facilities, physical firewalls or routers.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- The fault is within the customer's control (such as VM configuration, customer networks, application logic)<br>- Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit** | 10% of monthly spend on the Cross Domain Security Zone. <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Disaster Recovery as a Service (DRaaS)

Although we don't offer an SLA relating the performance of the Zerto software, we do provide one relating to the availability of the UKCloud for VMware platform that hosts the solution.

&nbsp; | &nbsp;
-------|---------------------------
&nbsp; | **UKCloud for VMware (POWER)**
**Service level agreement** | 99.99%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance** | Included in calculations
**Measurement of SLA** | Unavailability applies to existing storage that has become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers. Although we don't offer an SLA relating to the performance of the Zerto software, we do offer an SLA around the availability of the self-service portal, and one relating to the availability of the UKCloud for VMware platform that hosts the solution.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client application issues<br>- Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud<br>- Replication faults introduced by your environment, or your implementation of Zerto
**Service Credit** | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform. <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Email and Collaboration as a Service

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.99%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to existing mailboxes that become unresponsive due to a fault recognised at the SaaS layer or below. That is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power or internal networking (such as physical firewalls and routers).
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client applications and mailbox configuration<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud<
**Service Credit** | 10% of monthly spend per 5% below service level target or part thereof for the service. <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### High Performance Compute

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.90%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on processor core hours. This is calculated by dividing the actual number of processor core hours that were available by the potential number of processor core hours that could have been available. <br> This is based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to processor cores that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client application issues and dependency on individual VMs<br>- Routine failures of individual hosts<br>- Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud<br>- Specific VMs and data using ephemeral storage
**Service Credit** | 5% of monthly spend for the affected compute platform

### Multi-Cloud Backup Storage

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | **STANDARD:** 99.95%<br>**REPLICATED:** 99.99%
**Portal level agreement** | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to existing data where the data on the backup target becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the backup infrastructure, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions** | The following are examples of what is not covered by the SLA:<br>- The fault is within the customer's control (backup software or application and user networks)<br>- Incompatible applications or backup software (eg a change of backup software leading to incompatibility, or incompatible software versions)<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud
**Service Credit** | **STANDARD:** 10% of monthly Backup Storage spend<br>**REPLICATED:** 15% of monthly Backup Storage spend<br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal

### Private Cloud for Compute

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.99%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA** | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower: <br>- Fault is not within the customer’s control (OS configuration, customer applications and customer networks)<br>- Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers
**Key exclusions** | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<br>- Deletion or modification of VM by customer.<br>- Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds.<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud.<br>- Any connectivity between data centres that is out of the control of UKCloud.<br>**Customer-supplied hardware:** As above, plus any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system.<br>**CHDC:** As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control).
**Service Credit** | 10% of monthly spend for Private Cloud for Compute <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Private Cloud for Oracle Software

&nbsp; | &nbsp;
-------|-------
**Platform SLA** | 99.99%
**Portal SLA** | 99.90%
**Availability calculation** | Availability indication is based on an average 730 hours per month. Excludes planned and emergency maintenance.
**SLA measurement** | **Applies to All-Inclusive and UKCloud Hosted & Managed:** Availability of all or part of the Private Cloud for Oracle Software infrastructure.<br>**Applies to UKCloud Hosted:** Availability of power and cooling to your Private Cloud for Oracle Software infrastructure
**Key exclusions** | **Applies to All-Inclusive, UKCloud Hosted and UKCloud Hosted and Managed:**<br>- Deletion or modification of files by customer resulting in data loss.<br>- Any access provided by you to your user base that takes the Oracle system beyond its recommended performance and connectivity thresholds.<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud.<br>- Any connectivity between data centres that is out of the control of UKCloud.<br>**Applies to customer/Oracle-supplied hardware:** As above, plus any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional components into the system.<br>**Applies to UKCloud Hosted:** As above, plus any platform outages of the Private Cloud for Oracle Software infrastructure caused by the party managing the Oracle infrastructure hosted within UKCloud, or by failures at the physical or logical infrastructure layer outside of UKCloud's responsibility.
**Service credits** | 10% of monthly spend for Private Cloud for Oracle Software.<br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Private Cloud for Storage

&nbsp; | &nbsp;
-------|-------
**Platform SLA** | 99.99%
**Portal SLA** | 99.90%
**Availability calculation** | Availability indication is based on an average 730 hours per month. Excludes planned and emergency maintenance.
**SLA measurement** | Availability of all or part of the storage infrastructure.
**Key exclusions** | The following are examples of what is not covered<br>**All-Inclusive, UKCloud Hosted and CHDC Hosted:**<br>- Deletion or modification of files by customer resulting in data loss.<br>- Any access provided by you to your user base that takes the storage system beyond its recommended performance and connectivity thresholds.<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud.<br>- Any connectivity between data centres that is out of the control of UKCloud.<br>**Customer-supplied hardware:** As above, plus any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system.<br>**CHDC:** As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control).
**Service Credit** | 10% of monthly spend for Private Cloud – Storage <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### Secure Remote Access

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.90%
**Portal level agreement** | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Measurement of SLA** | Unavailability applies to the Secure Remote Access VPN endpoints due to a fault recognised at the IaaS layer or lower (such as the virtual infrastructure, storage, power, physical firewalls, routers or VPN concentrators).
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as operating systems, applications, user networks, local device failure or software failure<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud
**Service Credit** | 10% of monthly spend on the Secure Remote Access Service. <br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### UKCloud for Microsoft Azure

&nbsp; | &nbsp;
-------|-------
&nbsp; | **UKCloud for Microsoft Azure IaaS**
**Service level agreement** | 99.90%  (a single VM deployed as a single instance deployed inside and availability zone)<br>99.95% (a single VM with two instances deployed inside an availability zone) 
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance** | Included in calculations
**Measurement of SLA** | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers
**Key exclusions** | The following are examples of what is not covered by the SLA:<br>- Faults within your control, such as client application issues<br>- Faults within external connectivity providers (for example DDoSprotected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit** | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal. 

### UKCloud for OpenShift

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | 99.50%
**Portal level agreement**  | 99.90%
**Availability calculation**| Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA**      | Unavailability applies when the OpenShift environment becomes unresponsive owing to a fault in the UKCloud-controlled OpenShift infrastructure and services which lies with:<br>- UKCloud-controlled components such as the virtual infrastructure, storage, power, and physical firewalls and routers<br>- UKCloud-maintained OpenShift services (Master Nodes, Worker Nodes, Routing Layer)
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within user control, that is, any code owned and controlled by the customer<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud<br>- Issues arising from bugs introduced as part of any new releases published by Red Hat (UKCloud will conduct thorough testing prior to applying any new releases)
**Service Credit** | 3% of monthly spend for affected UKCloud deployed OpenShift platform. <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.

### UKCloud for OpenStack

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | **Infrastructure platform per region:** 99.95%<br>**Control plane (OpenStack API and Horizon GUI):** 99.95%<br>**UKCloud Portal:** 99.90%<br>*Customers should increase the availability of their solutions by engineering them across multiple regions*
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days). Planned and emergency maintenance periods are **_excluded from any downtime calculation._**
**SLA event** | **Infrastructure platform:** Inability to deploy/re-instantiate an Instance via the API at the same time as an existing Instance failing. <br> **Control plane:** Inability to receive a response to any valid requests submitted to the appropriate OpenStack API endpoint after seven retries in any consecutive 10-minute period.
**Key exclusions** | The following are examples of what is not covered by the SLA:<br>- Faults within your control, such as client applications and custom configurations (for example customer-defined networks)<br>- Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit** | **Infrastructure platform:**<br>Per region: 2% of monthly spend<br>Global: 10% of monthly spend<br>**Control plane:**<br>Global: 1% of monthly spend per 1% below service level target or part thereof

### UKCloud for Oracle Software

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | **Non-HA OVM:** 99.95%<br>**HA OVM:** 99.99%
**Portal level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any planned and emergency maintenance.
**Measurement of SLA**      | Unavailability applies to existing workloads that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical infrastructure availability, storage, power and internal networking such as physical firewalls and routers. <br> Owing to the nature of Oracle workloads and the need to pin them to processor cores, workloads will be moved only in the event of a hardware failure. This will not be a live migration and an application restart is likely to be required.
**Key exclusions**          | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client application issues<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit**         | 10% of monthly spend <br> 1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal

### UKCloud for VMware

&nbsp; | &nbsp;
-------|-------
**Service level agreement** | **ESSENTIAL:** 99.95%<br>**POWER:** 99.99%<br>**PRIORITY:** 99.95%
**Portal level agreement**   | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance** | **ESSENTIAL:** Included in calculations<br>**POWER:** Included in calculations<br>**PRIORITY:** Excluded from calculations
**Measurement of SLA** | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions** | The following are examples of what is not covered by the SLA: <br>- Faults within your control, such as client application issues<br>- Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components colocated at UKCloud
**Service Credit** | **ESSENTIAL:** 3% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>**POWER:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>**PRIORITY:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>1% of monthly spend per 1% below service level target or part thereof for the UKCloud API and Portal.
**Protection-improved Service Credits** | Combination of Snapshot Protection with the POWER service type increases Service Credits to 10% of monthly spend per 5% below service level target or part thereof for affected compute platform. <br> Inclusion of Synchronous Protection increases Service Credits to 15% of monthly spend per 5% below service level target or part thereof for affected compute platform.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
