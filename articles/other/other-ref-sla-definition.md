---
title: SLA definition | UKCloud Ltd
description: Definition of the UKCloud Service Level Agreement (SLA)
services: other
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 05/08/2019
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

> [!NOTE]
> You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud’s Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service Level Agreement limitations

The following will be excluded from any time-based calculations related to the service being unavailable:

- Service dependent — planned maintenance windows (as specified in the applicable service definition)

- Emergency maintenance (as specified in the applicable service definition)

- Your misuse of a particular service (as defined in the UKCloud Terms and Conditions and the UKCloud System Interconnect Security Policy (SISP))

- A *force majeure* event

- Denial of service attacks, virus or hacking attacks for which there is no commercially reasonable known solution; or any other events that are not within the direct control of UKCloud or that could not have been avoided with commercially reasonable care

- Packet loss, network or connectivity (for example, internet, MPLS) problems beyond UKCloud’s management boundary (for example, border router) supporting our connectivity to the public internet or government secure networks

- Any customer-defined or customer-controlled event (for example, unavailability of service resulting from inadequate customer-subscribed services, resources or configuration)

The customer will not be eligible to receive a Service Credit if the service account has any undisputed payments outstanding beyond their due date, or you are in violation of UKCloud’s Terms and Conditions including the UKCloud System Interconnect Security Policy (SISP).

## Service level agreement claims

To request a Service Credit, the customer must file a Support Request within thirty (30) calendar days of the relevant suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable.

Service Credits will be issued only to the customer that UKCloud invoices for the applicable instance of the service as a separate credit note that can be applied towards a future invoice for that service only. If the customer’s contract term for the service expires or is terminated prior to a Service Credit being issued, the Service Credit will become void as of the date of the expiration or termination.

## UKCloud SLA monitoring

### Generic service components

UKCloud monitors various elements across the service to ensure that availability can be measured appropriately and realistically. Some elements are generic across all services others are service specific.

&nbsp;                                  | Generic service components
----------------------------------------|---------------------------
**Generic service component monitored** | UKCloud Portal: UKCloud monitors the customer self-service portal, (<https://portal.ukcloud.com> (or Elevated equivalent)). This includes the UKCloud for VMware API which provides programmatic control of the UKCloud Compute service.
**Availability commitment**             | 99.90%
**Service Credit**                      | 1% of monthly spend per 1% below the Availability Commitment or part thereof for services.

### UKCloud for Microsoft Azure

&nbsp;                       | UKCloud for Microsoft Azure (public multi-tenant)
-----------------------------|--------------------------------------------------
**Service level agreement**  | 99.90% (single VM - deployed inside an availability zone).<br>99.95% (single VM - two instances deployed inside an availability zone).
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Included
**Measurement of SLA**       | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.

### UKCloud for OpenShift

&nbsp;                       | UKCloud for OpenShift
-----------------------------|----------------------
**Service level agreement**  | 99.50
**Portal level agreement**   | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies when the OpenShift environment becomes unresponsive owing to a fault in the UKCloud-controlled OpenShift infrastructure and services which lies with:<ul><li>UKCloud-controlled components such as the virtual infrastructure, storage, power, and physical firewalls and routers<li>UKCloud-maintained OpenShift services (Master Nodes, Worker Nodes, Routing Layer)</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within user control, that is, any code owned and controlled by the customer<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Issues arising from bugs introduced as part of any new releases published by Red Hat (UKCloud will conduct thorough testing prior to applying any new releases)</ul>
**Service Credit**           | 3% of monthly spend for affected UKCloud deployed OpenShift platform.

### UKCloud for OpenStack

&nbsp;                       | UKCloud for OpenStack
-----------------------------|----------------------
**Service level agreement**  | **Data plane per region (Instances):** 99.95%<br>**Control plane (OpenStack API and Horizon GUI):** 99.95%<br>*Customers should increase the availability of their solutions by engineering them across multiple regions*
**GPU**                      | 99.90% - see [Cloud GPU](#cloud-gpu)
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded where a customer solution has ben engineered to a single region.
**Measurement of SLA**       | **Data plane:** Inability to deploy/re-instantiate an Instance via the API at the same time as an existing Instance failing.<br>**Control plane:** Inability to receive a response to any valid requests submitted to the appropriate OpenStack API endpoint after seven retries in any consecutive 10-minute period.
**Key exclusions** | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and custom configurations (for example customer-defined networks)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit** | **Data plane:** Per region: 2% of monthly spend. Global: 10% of monthly spend.<br>**Control plane:** Global: 1% of monthly spend per 1% below service level target or part thereof.

### UKCloud for Oracle Software

&nbsp;                       | UKCloud for Oracle Software
-----------------------------|----------------------------
**Service level agreement**  | **Non-HA x86:** 99.95%<br>**HA x86:** 99.99%<br>**SPARC / Dedicated SPARC with resilience:** 99.95%<br>**Dedicated SPARC without resilience:** 95.00%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | The service is deemed unavailable if a customer is unable to restart a VM after it becomes unresponsive due to a fault recognised as the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical infrastructure availability, storage, power and internal networking, such as physical firewalls and routers.<br>Oracle workloads are pinned to processor cores and will power off in the event of a host failure. Migrations are not live and VM restart will be required. UKCloud will advise customers if VM restart is required.<br><b>HA-enabled x86 VMs</b> will be automatically moved to a new host in the event of a host failure, but may require restarting. Automatic movement of VMs is covered by the HA x86 SLA. Customers are responsible for enabling the HA feature on x86 VMs and for restarting VMs.<br><b>Non-HA x86 VMs</b> require UKCloud to move Oracle VMs to a new host so they can be restarted. UKCloud's manual movement of VMs is covered by the Non-HA x86 SLA. Customers are responsible for restarting VMs<br><b>SPARC VMs</b> require UKCloud to move Oracle VMs to a new host so they can be restarted. UKCloud's manual movement of VMs is covered by the SPARC SLAs. Customers are responsible for restarting VMs.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend.

### UKCloud for VMware

&nbsp;                                  | UKCloud for VMware
----------------------------------------|-------------------
**Service level agreement**             | **ESSENTIAL:** 99.95%<br>**POWER:** 99.99%<br>**PRIORITY:** 99.95%
**GPU**                                 | 99.90% - see [Cloud GPU](#cloud-gpu)
**Availability calculation**            | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**                 | **ESSENTIAL:** Included<br>**POWER:** Included<br>**PRIORITY:** Excluded
**Measurement of SLA**                  | Unavailability applies to existing VMs that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**                      | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**                      | **ESSENTIAL:** 3% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>**POWER:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>**PRIORITY:** 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.
**Protection-improved Service Credit** | Combination of **Snapshot Protection** with the **POWER** service type increases Service Credits to 10% of monthly spend per 5% below service level target or part thereof for affected compute platform.<br>Inclusion of **Synchronous Protection** increases Service Credits to 15% of monthly spend per 5% below service level target or part thereof for affected compute platform.

### Basic Managed Compute from UKCloud

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### CloudSOC from UKCloud

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### Cloud GPU

&nbsp;                       | Cloud GPU
-----------------------------|----------
**Service level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to inability to connect to a new GPU resource in the event of a failure of a GPU service within a single zone. Failure condition is following a hardware fault recognised at the IaaS layer or below and within UKCloud-controlled components.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 3% of monthly spend per 5% below service level target or part thereof for affected compute platform.

### Cloud Storage

&nbsp;                       | Cloud Storage
-----------------------------|--------------
**Service level agreement**  | **STANDARD:** 99.95%<br>**ENHANCED:** 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing data where the data becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>The fault is within the customer's control (applications and user networks)<li>Faults within external connectivity providers (for example DDoS- protected internet, PSN, Janet or HSCN) and components colocated at UKCloud</ul>
**Service Credit**           | **STANDARD:** 10% of monthly spend.<br>**ENHANCED:** 15% of monthly spend.

### Cross Domain Security Zone

&nbsp;                       | Cross Domain Security Zone
-----------------------------|---------------------------
**Service level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the underlying Cross Domain Security Zone infrastructure due to a fault recognised at the IaaS layer, data centre facilities, physical firewalls or routers.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>The fault is within the customer's control (such as VM configuration, customer networks, application logic)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Cross Domain Security Zone.

### Dedicated Compute v2

&nbsp;                       | Dedicated Compute v2
-----------------------------|---------------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer’s control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>

### Disaster Recovery as a Service (DRaaS)

Although we don't offer an SLA relating the performance of the Zerto software, we do provide one relating to the availability of the UKCloud for VMware platform that hosts the solution.

&nbsp;                       | UKCloud for VMware (POWER)
-----------------------------|---------------------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Included
**Measurement of SLA**       | Unavailability applies to existing storage that has become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers. Although we don't offer an SLA relating to the performance of the Zerto software, we do offer an SLA around the availability of the self-service portal, and one relating to the availability of the UKCloud for VMware platform that hosts the solution.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Replication faults introduced by your environment, or your implementation of Zerto</ul>
**Service Credit**           | 5% of monthly spend per 5% below service level target or part thereof for affected compute platform.

### Email and Collaboration as a Service

&nbsp;                       | Email and Collaboration as a Service
-----------------------------|-------------------------------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing mailboxes that become unresponsive due to a fault recognised at the SaaS layer or below. That is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power or internal networking (such as physical firewalls and routers).
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client applications and mailbox configuration<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud.</ul>
**Service Credit**           | 10% of monthly spend per 5% below service level target or part thereof for the service.

### Extended Network Support from UKCloud

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### High Performance Compute

&nbsp;                       | High Performance Compute
-----------------------------|-------------------------
**Service level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on processor core hours. This is calculated by dividing the actual number of processor core hours that were available by the potential number of processor core hours that could have been available.<br>This is based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to processor cores that become unresponsive due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the physical host availability, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>Faults within your control, such as client application issues and dependency on individual VMs<li>Routine failures of individual hosts<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Specific VMs and data using ephemeral storage</ul>
**Service Credit**           | 5% of monthly spend for the affected compute platf

### Managed Monitoring from UKCloud

SLA varies based on the chosen cloud technology. See the appropriate section of this article for more information.

### Migration to the Cloud

Due to the service being dependent on connectivity between the customer data centre and UKCloud, we are unable to offer an SLA relating to the performance of this service.

### Multi-Cloud Backup Storage

&nbsp;                       | Multi-Cloud Backup Storage
-----------------------------|---------------------------
**Service level agreement**  | **STANDARD:** 99.95%<br>**REPLICATED:** 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | **STANDARD:** Excluded<br>**REPLICATED:** Included
**Measurement of SLA**       | Unavailability applies to existing data where the data on the backup target becomes inaccessible due to a fault recognised at the IaaS layer or below, that is, the fault is within UKCloud-controlled components, such as the backup infrastructure, storage, power and internal networking such as physical firewalls and routers.
**Key exclusions**           | The following are examples of what is not covered by the SLA:<ul><li>The fault is within the customer's control (for example, backup software or application and user networks)<li>Incompatible applications or backup software (for example, a change of backup software leading to incompatibility, or incompatible software versions)<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud</ul>
**Service Credit** | **STANDARD:** 10% of monthly Backup Storage spend.<br>**REPLICATED:** 15% of monthly Backup Storage spend.

### Private Cloud

&nbsp;                       | Private Cloud
-----------------------------|-------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to existing VMs when the compute platform becomes inaccessible due to a fault recognised at the IaaS layer or lower:<ul><li>Fault is not within the customer’s control (OS configuration, customer applications and customer networks)<li>Fault is within UKCloud-controlled components such as the dedicated compute infrastructure, UKCloud data centre facilities, physical firewalls and routers</ul>
**Key exclusions**           | The following are examples of what is not covered:<br>**All-inclusive, platform only and platform only in CHDC:**<ul><li>Deletion or modification of VM by customer<li>Any access provided by you to your user base that takes the compute system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Customer-supplied hardware:**<ul><li>As above, plus any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**CHDC:**<ul><li>As above, plus any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit**           | 10% of monthly spend for Private Cloud.

### Private Cloud for Oracle Software

&nbsp;                       | Private Cloud for Oracle Software
-----------------------------|----------------------------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month, excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**          | **Applies to All-Inclusive and UKCloud Managed:** Availability of all or part of the Private Cloud for Oracle Software infrastructure.<br>**Applies to UKCloud Hosted:** Availability of power and cooling to your Private Cloud for Oracle Software infrastructure.
**Key exclusions**           | The following are examples of what is not covered:<br>**Applies to All-Inclusive and UKCloud Managed:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the Oracle system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Applies to Customer Managed and UKCloud Managed**<ul><li>As above, plus: any loss of connectivity or data, including data corruption as a result of you or your suppliers installing new or additional components into the system</ul>**Applies to UKCloud Hosted:**<ul><li>As above, plus: any platform outages of the Private Cloud for Oracle Software infrastructure caused by the party managing the Oracle infrastructure hosted within UKCloud, or by failures at the physical or logical infrastructure layer outside of UKCloud's responsibility</ul>**Applies to CHDC hosted or On-Premises:**<ul><li>As above, plus: any platform outages of the Private Cloud for Oracle Software infrastructure caused by data centre failures outside of UKCloud control</ul>
**Service credits**          | 10% of monthly spend for Private Cloud for Oracle Software.

### Private Cloud for Storage

&nbsp;                       | Private Cloud for Storage
-----------------------------|--------------------------
**Service level agreement**  | 99.99%
**Availability calculation** | Availability indication is based on an average 730 hours per month, excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**          | Availability of all or part of the storage infrastructure.
**Key exclusions**           | The following are examples of what is not covered:<br>**Applies to All-Inclusive, UKCloud Hosted and Crown Campus Hosted:**<ul><li>Deletion or modification of files by customer resulting in data loss<li>Any access provided by you to your user base that takes the storage system beyond its recommended performance and connectivity thresholds<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN) and components co-located at UKCloud<li>Any connectivity between data centres that is out of the control of UKCloud</ul>**Applies to customer-supplied hardware:**<ul><li>As above, plus: any loss of connectivity or data including data corruption as a result of you or your suppliers installing new or additional capacity to the compute system</ul>**Applies to Crown Campus Hosted:**<ul><li>As above, plus: any platform outages causing disruption to power and cooling (as they're out of UKCloud's control)</ul>
**Service Credit** | 10% of monthly spend for Private Cloud for Storage.

### Secure Remote Access

&nbsp;                       | Secure Remote Access
-----------------------------|---------------------
**Service level agreement**  | 99.90%
**Availability calculation** | Availability is calculated based on the number of hours in the billing month (for example, 744 hours for months with 31 days), excluding any emergency maintenance.
**Planned maintenance**      | Excluded
**Measurement of SLA**       | Unavailability applies to the Secure Remote Access VPN endpoints due to a fault recognised at the IaaS layer or lower (such as the virtual infrastructure, storage, power, physical firewalls, routers or VPN concentrators).
**Key exclusions**           | The following are examples of what is not covered:<ul><li>Faults within your control, such as operating systems, applications, user networks, local device failure or software failure<li>Faults within external connectivity providers (for example DDoS-protected internet, PSN, Janet or HSCN and components co-located at UKCloud</ul>
**Service Credit**           | 10% of monthly spend on the Secure Remote Access Service.

### Third-Party Software

For third-party product service level agreements, refer to the [End User Licence Agreement](../third-party/third-ref-eula.md) or support agreement of the specific product.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
