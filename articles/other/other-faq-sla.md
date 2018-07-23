---
title: Service Level Agreement FAQs | UKCloud Ltd
description: Frequently asked questions for Service Level Agreements
services: other
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Level Agreement FAQs
toc_fullpath: FAQs/other-faq-sla.md
toc_mdlink: other-faq-sla.md
---

# Service Level Agreement FAQs

## General

### How does UKCloud determine if a service is available or not?

UKCloud's approach to measuring service availability is to consider all the various elements and components (such as internal networks, the portal and the service technology stack) that can ultimately affect the availability of a service. These individual components are monitored and if one fails, the service may be deemed unavailable. We believe this approach gives a more representative and pragmatic view of service availability. More information about our services and the specific monitors for availability can be found later in this document.

### How does UKCloud calculate the availability of its services?

UKCloud calculates availability by monitoring specific components and then using the following formula to determine the percentage that a service was available for:

P = A-B x 100 A, where: P= Percentage availability A= Total number of minutes in month B = Total number of whole minutes that service is unavailable

### How often do you monitor your services to determine availability?

UKCloud polls our services every minute using a variety of methods that range from a basic ping test to a synthetic transaction which replicates a user's journey. The method used will depend on the specific component or service being monitored.

### At what point is a service deemed unavailable?

UKCloud deem a service to be unavailable if after five consecutive negative responses, normal service has not resumed. At this point, the downtime will start to be recorded.

### Are any periods of downtime excluded from the availability SLA?

UKCloud excludes any time needed to complete planned or emergency maintenance from any time-based calculations related to service availability. In these events, you will be notified accordingly as described in the appropriate Service Definition. Other exceptions are outlined in UKCloud's Terms and Conditions.

### Are there any reasons why you wouldn't pay a Service Credit if it was due?

You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud's Terms and Conditions including the UKCloud  System Interconnect Security Policy (SISP).

### Can I use my own information to report downtime of a service?

No, UKCloud's monitoring tools, data and records (including support tickets) will be the sole source of information used to track and validate service availability.

### How do I request a Service Credit?

To request a Service Credit, customers must raise a support call on the [UKCloud Portal](https://portal.ukcloud.com/support/my_calls/new) within thirty (30) calendar days of the suspected SLA Event. UKCloud will review the request and issue a Service Credit if applicable either during that billing cycle or the subsequent one if the claim is made just after an invoice has been paid.

### Does UKCloud have an SLA that covers customer-owned hardware or appliances such as routers?

If you wish to co-locate additional devices in UKCloud's data centre(s), this falls outside of UKCloud's responsibility and control, and therefore the devices will not be covered by a UKCloud SLA. If you are co-locating devices in our data centre(s), you should be aware that doing so could introduce single points of failure.

### Do you monitor your data centre networks and components?

UKCloud monitors the data centre network between the physical hypervisor hosts or storage platform and the outside interface connecting the data centre network to any third-party networks (for example, PSN, Janet, internet, private circuits, and colocation environments).

## Portal

### How is the UKCloud portal monitored? What if I am unable to access my portal account?

To confirm that the [UKCloud Portal](https://portal.ukcloud.com/) is available, UKCloud performs synthetic transactions by authenticating access to an account by a simulated user and retrieving a support ticket. This process demonstrates whether the UKCloud portal is accessible and that this element of the service is available. If you are unable to access your portal account to raise a support ticket, then you will need to call UKCloud on 01252 303300 and select option 2.

## Connectivity

### What SLA does UKCloud offer on connectivity?

UKCloud does not offer any SLA covering the performance or availability of any external connection to the UKCloud platform, this includes internet, PSN or Janet, for example. Connections between services within UKCloud are covered by the SLA representing the services, including inter-DC connectivity between UKCloud's regions and sites.

## UKCloud for VMware

### How do you offer an SLA on UKCloud for VMware?

UKCloud monitors three main components of the UKCloud for VMware service to provide the best overall measure of service availability. The first component is the physical host server that the VM is running on. This confirms that the VM has resources and can be available. The second component is the data store which ensures that the storage associated with the VM is accessible. The last component monitored is the UKCloud for VMware API (available on the [UKCloud Portal](https://portal.ukcloud.com/)) which you may use to programmatically control your UKCloud for VMware environment. By monitoring these three components, UKCloud believes that we can provide the best overall view of the availability of the service.

### How do you monitor the availability of the physical servers?

UKCloud will monitor the underlying physical servers every minute using internal systems and tools to verify that the server is responsive and available.

### How are the UKCloud for VMware data store(s) monitored?

UKCloud monitors the UKCloud for VMware data stores every minute using internal systems and tools to verify the status of the UKCloud for VMware storage.

### Do you offer an SLA on the UKCloud-provided virtual firewall?

Virtual firewalls are covered by the UKCloud management plane (IaaS layer or below) SLA. Customers can claim service credits for affected VMs in the event of an outage, where the fault is within UKCloud-controlled components. Further details are available in the Service Definition.

### Does UKCloud offer an SLA covering the performance of a VM or its storage?

No, UKCloud does not offer an SLA covering the performance of the VM or its storage. However, server capacity and resources are managed by UKCloud to ensure you receive a consistent level of service.

### How many credits would I receive if there was an SLA Event?

This would depend on how long the service was unavailable for and the Service Level selected when the VM was purchased. For example, if an SLA Event occurs and the percentage availability falls below the commitment stated in your SLA, then UKCloud will offer you a Service Credit as a percentage of the total amount billed during the month for the VM affected.

### Do I receive a Service Credit if the VM is turned off during an SLA Event?

No, you will only receive a Service Credit if the service provided was affected. For example, the VM was powered on.

### Can you give me a worked example for the UKCloud for VMware SLA?

Example factors

- Total hours in January = 744

- Cost of a VM per hour = £1.00

- Availability Commitment = 99.95%

- Service Credit Payment = 5%

- Service Credit Payment cap = 5%

Scenario - A VM is running and available for the month of January except for a two-hour period when the service is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of service is 99.73% which is below the Availability Commitment of 99.95% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £742 (before credits are applied)

- The Service Credit is 5% of the amount billed to that VM during the calendar month = £37.10

- The amount billed to the customer is therefore £742 - £37.10 = £704.90

## UKCloud for OpenStack

### How do you offer an SLA on UKCloud for OpenStack?

UKCloud monitors three main components of the compute services within CNI to provide the best overall measure of service availability. The first component is the physical host server that instances are running on, this confirms that instances have resources and can be available. The second component is the data store which ensures that the storage associated with instances is accessible. The last component monitored is the control plane API which you may use to programmatically control your UKCloud for OpenStack environment. By monitoring these three components, UKCloud believes that we can provide the best overall view of the availability of the service.

### How do you monitor the availability of the physical servers?

UKCloud will monitor the underlying physical servers every minute using internal systems and tools to verify that the server is responsive and available.

### How are the data store(s) monitored?

UKCloud monitors the data stores every minute using internal systems and tools to verify the status of UKCloud for OpenStack storage services.

### Does UKCloud offer an SLA covering the performance of an instance or its storage?

No, UKCloud does not offer an SLA covering the performance of instances or their storage. However, platform capacity and resources are managed by UKCloud to ensure you receive a consistent level of service.

### How many credits would I receive if there was an SLA Event?

The calculation of service credits will also depend upon whether a customer has engineered their solution to utilise multiple availability zones and regions. For example, if an SLA Event occurs and the percentage availability falls below the commitment stated in your SLA, then UKCloud will offer you a Service Credit as a percentage of the total amount billed during the month for the instances affected.

### Do I receive a Service Credit if the instance is turned off during an SLA Event?

No, you will only receive a Service Credit if the service provided was affected. For example, the instance was turned on.

### Can you give me a worked example for the UKCloud for OpenStack SLA?

Example factors

- Total hours in January = 744

- Cost of an instance per hour = £1.00

- Availability Commitment - Data plane = 99.95%

- Availability Commitment -- Control plane = 99.95%

Scenario A - An instance is running as part of a globally deployed solution and available for the month of January except for a two-hour period when the data plane is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of service is 99.73% which is below the Availability Commitment of 99.95% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £744 (before credits are applied)

- The Service Credit is 10% of the amount billed to that instance during the calendar month = £74.40

- The amount billed to the customer is therefore £744 - £74.40 = **£669.60**

Scenario B - An instance is running within a single region and available for the month of January except for a two-hour period when the data plane is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of service is 99.73% which is below the Availability Commitment of 99.95% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £744 (before credits are applied)

- The Service Credit is 2% of the amount billed to that instance during the calendar month = £14.88

- The amount billed to the customer is therefore £744 - £74.40 = **£729.12**

## Cloud Storage

### Does UKCloud offer an SLA covering the durability of data stored?

No. UKCloud only offers an SLA covering the availability of the service, not the durability of the data.

### How do you monitor the availability of Cloud Storage for the STANDARD Service Level?

UKCloud performs a synthetic transaction that mimics a user authenticating and the "posting" of data on to the platform. An SLA Event will be deemed to have occurred and the service deemed unavailable (specifically, a failure of storage hosts and authentication sub-system) if the monitoring fails for five consecutive minutes.

### How do you monitor the availability of Cloud Storage for ENHANCED and ENHANCED Plus?

UKCloud performs a synthetic transaction that mimics a user authenticating and the "posting" of data on to the platform. An SLA Event will have occurred and the service deemed unavailable (specifically, concurrent failure of storage hosts and authentication sub-system in both data centre locations) if the monitoring fails in both data centres at the same time for five consecutive minutes.

### Can you give me a worked example for the Cloud Storage SLA?

Example factors

- Total hours in January = 744

- Cost of 100GiB of storage per month = £1.00 per hour

- Availability Commitment = 99.95%

- Service Credit Payment = 10%

- Service Credit Payment cap = 10%

Scenario - 100GiB of data is stored on the platform at an expected cost of £100 per month, however the UKCloud synthetic transaction monitor fails for two hours so the service is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of Service is 99.73%, which is below the Availability Commitment of 99.95% --- the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £100 (before credits are applied)

- The Service Credit is 10% of the amount billed to that VM during the calendar month = £10.00

- The amount billed to the Customer is therefore £100 - £10 = **£90.00**

## UKCloud for OpenShift

### Does UKCloud offer an SLA covering the durability of data stored?

No. UKCloud only offers an SLA covering the availability of the service, not the durability of the data. Data generated by UKCloud for OpenShift applications should be considered transient; as such any data which requires persistency and durability should be stored in an alternative storage solution such as UKCloud's Cloud Storage.

### How do you monitor the UKCloud for OpenShift service?

UKCloud monitors the underpinning infrastructure and UKCloud for OpenShift services to ensure the highest levels of platform availability. In addition, we perform a synthetic transaction that mimics the publication "push" of an application which is accessible to a test consumer. An SLA Event will be deemed to have occurred and the service deemed unavailable if the monitoring fails for five consecutive minutes.

### Can you give me a worked example for UKCloud for OpenShift SLA?

Example factors (Assured Public UKCloud for OpenShift)

- Total hours in January = 744

- Cost of 100GiB of Application RAM per month

- £0.10 x 100 = £10.00 per hour

- £10.00 x 744 = £7,440 per month

- Availability Commitment = 99.50%

- Service Credit Payment = 3% of monthly spend

- Service Credit Payment cap = 3% of monthly spend

Scenario - 100GiB of application RAM is consumed on the platform at an expected cost of £7,440 per month, however the UKCloud synthetic transaction monitor fails for five hours so the service is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,340

- The five-hour outage means Percentage Availability of Service is 99.33%, which is below the Availability Commitment of 99.50% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £7,440 (before credits are applied)

- The Service Credit is 3% of the amount billed to that UKCloud for OpenShift instance during the calendar month = £223.20

- The amount billed to the Customer is therefore £7,440 - £223.20= **£7,216.80**

## Cloud GPU

### What is the SLA for Cloud GPU?

The SLA for Cloud GPU is 99.90%.

### How is the SLA measured?

Unavailability applies to the inability to connect to a new GPU resource in the event of a failure of a GPU service within a single zone. Failure condition is following a hardware fault recognised at the IaaS layer or below, and within UKCloud-controlled components.

### How does this change the SLA of my UKCloud for VMware VMs?

The SLA of 99.90% supersedes any other SLA relating to the VM that the GPU is associated with.

### Is maintenance included in this calculation?

Emergency and planned maintenance is excluded from calculations.

### How do you monitor the availability of Cloud GPU?

We use NVIDIA GRID to relay health information from each individual GPU to our Network Operations Centre (NOC) monitoring tools. If a GPU alert is generated that shows GPU failure we will attempt to move any workloads from that GPU onto a new GPU. If we are unable to move the VM to a new GPU, then an SLA event is triggered.

### Can you give me a worked example for Cloud GPU SLA?

Example factors

- Total hours in January = 744

- Cost of a GPU per hour = £1.28

- Availability Commitment = 99.90%

- Service Credit Payment = 3%

Scenario - A GPU enabled VM is running and available for the month of January except for a two-hour period when the service is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of service is 99.73% which is below the Availability Commitment of 99.90% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £952.32 (before credits are applied)

- The Service Credit is 3% of the amount billed to that VM during the calendar month = £28.57

- The amount billed to the customer is therefore £952.32 - £28.57 = £923.75

## UKCloud for Oracle Software

### How do you offer an SLA on UKCloud for Oracle Software?

UKCloud monitors two main components of the UKCloud for Oracle Software service to provide the best overall measure of service availability. The first component is the physical host server that the Oracle Virtual Machine (OVM) is running on. This confirms that the OVM has resources and can be available. The second component is the data store which ensures that the storage associated with the OVM is accessible. By monitoring these two components, UKCloud believes that we can provide the best overall view of the availability of the service.

### How do you monitor the availability of the physical servers?

UKCloud will monitor the underlying physical servers every minute using internal systems and tools to verify that the server is responsive and available.

### How are the Compute data store(s) monitored?

UKCloud monitors the Oracle data stores every minute using internal systems and tools to verify the status of the UKCloud for Oracle Software storage.

### Does UKCloud offer an SLA covering the performance of an OVM or its storage?

No, UKCloud does not offer an SLA covering the performance of the OVM or its storage. However, server capacity and resources are managed by UKCloud to ensure you receive a consistent level of service.

### How many credits would I receive if there was an SLA Event?

This would depend on how long the service was unavailable for and the Service Level selected when the OVM was purchased. For example, if an SLA Event occurs and the percentage availability falls below the commitment stated in your SLA, then UKCloud will offer you a Service Credit as a percentage of the total amount billed during the month for the OVM affected.

### Do I receive a Service Credit if the OVM is turned off during an SLA Event?

No, you will only receive a Service Credit if the service provided was affected i.e. the OVM was turned on.

### Do you offer an SLA on the UKCloud-provided virtual firewall?

Virtual firewalls are covered by the UKCloud management plane SLA. Customers can claim service credits for affected VMs in the event of an outage, where the fault is within UKCloud-controlled components. Further details are available in the Service Definition.

### Can you give me a worked example for the UKCloud for Oracle Software SLA?

Example factors

- Total hours in January = 744

- Cost of a VM per hour = £1.00

- Availability Commitment = 99.95%

- Service Credit Payment = 10%

Scenario - A VM is running and available for the month of January except for a two-hour period when the service is deemed unavailable.

Are Service Credits applicable?

- Total minutes in the month = 44,640

- Total minutes service available = 44,520

- The two-hour outage means Percentage Availability of service is 99.73% which is below the Availability Commitment of 99.95% - the customer is therefore eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £742 (before credits are applied)

- The Service Credit is 10% of the amount billed to that VM during the calendar month = £74.20

- The amount billed to the customer is therefore £742 - £74.20 = **£667.80**

## Email and Collaboration as a Service

### How do you offer an SLA on Email and Collaboration as a Service?

Unavailability applies to existing mailboxes that become unresponsive due to a fault recognised at the SaaS layer or below. That is, the fault is within UKCloud-controlled components, such as the messaging infrastructure, storage, power or internal networking (such as physical firewalls and routers).

### What is not included in the SLA?

The following are examples of what is not covered by the SLA:

- Faults within your control, such as client applications and mailbox configuration

- Faults within external connectivity providers (for example DDoS protected internet, PSN, Janet or N3/HSCN) and components collocated at UKCloud 

### Can you give me a worked example for the Email and Collaboration as a Service SLA?

Example factors (Email and Collaboration as a Service)

- Cost of 5,000 mailboxes all using 2GiB and archiving 1GiB, on Assured and using DDoS-protected internet as connectivity, per month

- Price per month + storage + archived + connectivity = total price per month

- £3.50 + (5,000 x £1.00) + (5,000 x £0.34) + £0.00 = £6,703.50 per month

- Availability Commitment = 99.99%

- Service Credit Payment = 10% of monthly spend for every 5% below SLA target

Scenario - 5,000 mailboxes all using 2GiB of storage and archiving 1GiB, on Assured and using the DDoS-protected internet, at an expected cost of £6,703.50 per month. However, the UKCloud service monitoring reports unavailability for 2 days.

Are Service Credits applicable?

- Total days in the month = 30

- Total days service available = 28

The 1-day outage means Percentage Availability of Service is 93%, which is below the Availability Commitment of 99.99% - the customer is, therefore, eligible for a Service Credit.

How much is payable?

- The bill for the customer at the end of the month would be £6,703.50 (before credits are applied)

- The Service Credit is 10% of the amount billed for the amount used on Email and Collaboration as a Service during the calendar month = £670.35

- The amount billed to the Customer is, therefore, £6,703.50 - £670.35 = **£6,033.10**

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.