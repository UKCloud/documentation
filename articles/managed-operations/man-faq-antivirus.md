---
title: Anti-Virus as a Service FAQs
description: Frequently asked questions for Anti-Virus as a Service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 29/07/2022
toc_rootlink: Managed IT Operations
toc_sub1: Anti-Virus as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Anti-Virus as a Service FAQs
toc_fullpath: Managed IT Operations/Anti-Virus as a Service/man-faq-antivirus.md
toc_mdlink: man-faq-antivirus.md
---

# Anti-Virus as a Service FAQs

## Service

### What is the service?

As customer solutions start to expand beyond their own data centres into embracing the benefits of leveraging multi-cloud, the day-to-day management and control of anti-virus and endpoint protection across various technology stacks and locations become highly complex and resource intensive. Anti-Virus as a Service helps to reduce these challenges, whilst increasing your level of trust and confidence in the security health of of your solution stack.

Anti-Virus as a Service provides you with the confidence that your environments are protected from the dangers of viruses and malware, all without the usual headaches associated with the deployment, management and operation of an anti-virus solution.

### What technologies do you use?

Building on the capabilities of our [Managed Monitoring as a Service](man-sco-monitoring.md), UKCloud uses the industry-leading endpoint security platform [SentinelOne](https://www.sentinelone.com/) as the engine for Anti-Virus as a Service, harnessing the power of machine learning to providing protection that goes beyond that of traditional anti-virus or anti-malware solutions.

For further details as to how we leverage SentinelOne as an approved third party in the delivery of this service, see the [Anti-Virus as a Service Service Scope](man-sco-antivirus.md).

### What actions will UKCloud perform on positive detection?

Our service uses the following two detection types:

Detection Type | Description | Default Actions
---------------|-------------|----------------
Malicious      | SentinelOne has detected a file or process as being harmful | <ul><li>Quarantine the affected file<li>Notify the customer</ul>
Suspicious     | SentinelOne has detected a file or process as having the potential to be harmful | <ul><li>Notify the customer<li>Take no action on the affected file</ul>

### How do I get alerted on events?

All alerting will be performed via a support ticket or any special escalation process agreed between UKCloud and the customer.

### How does UKCloud provide urgent maintenance notifications and incident reports?

We don't envisage any scenarios that prevent UKCloud from meeting the Anti-Virus as a Service platform availability KPI defined within the [Service Scope](man-sco-antivirus.md) for this service. Current Service Status and past incident reports are published on the [UKCloud Service Status page](https://status.ukcloud.com/).

> [!NOTE]
> Should the central Anti-Virus as a Service platform become unavailable, any SentinelOne agents installed locally to the endpoint will remain active and continue to provide protection.

## About SentinelOne

### What is SentinelOne?

The SentinelOne Singularity platform is an industry-first data lake that seamlessly fuses together the data, access, control and integration planes of its endpoint protection (EPP), endpoint detection and response (EDR), IoT security and cloud workload protection (CWPP) into a centralised platform.

### How good is SentinelOne?

SentinelOne is regularly apprised by industry-leading analyst firms and independent third-party testing such as:

* Gartner Best Endpoint Detection and Response (EDR) Solutions as Reviewed by Customers.

* Gartner Best Endpoint Protection Platforms (EPP) as Reviewed by Customers.

* SentinelOne received 100% ratings across all testing categories in Protection Accuracy, Legitimate Accuracy and Total Accuracy in [SE Labs's Breach Response Test](https://www.businesswire.com/news/home/20201008005586/en/SentinelOne-Receives-Highest-Possible-Rating-Across-All-Critical-Categories-in-SE-Labs-Breach-Response-Test-Wins-Best-New-Endpoint-Award). 

* MITRE ATT&CK APT29 report:
  
  * SentinelOne Singularity Platform had the highest number of combined high-quality detections and the highest number of automated correlations.
  
  * SentinelOne grouped all data over the 3-day MITRE test into a mere 11 console alerts, with each alert containing all the details within. Fewer alerts in the Management console are better than more alerts, and Singularity successfully grouped together relevant related data, context and correlation, making it easier for analysts to understand and act.
  
  * SentinelOne had the highest number of tool-only detections and the highest number of human/MDR detections.

Analysts are drowning in data and simply aren't able to keep up with sophisticated attack vectors. SentinelOne helps turn data into stories, so analysts can focus on the alerts that matter most.

### Which certifications does SentinelOne have?

SentinelOne participates in a variety of testing and has won awards. The most recent third-party tests and awards include:

* MITRE ATT&CK APT29 report: Highest number of combined high-quality detections and the highest number of automated correlations, highest number of tool-only detections and the highest number of human/MDR detections.

* The first and only Next Gen cybersecurity solution to receive VB100 certification from Virus Bulletin. The VB100 certification is a well-respected recognition in the anti-virus and malware communities due to its stringent testing requirements.

* Gartner Best Endpoint Detection and Response (EDR) Solutions as Reviewed by Customers.

* Gartner Best Endpoint Protection Platforms (EPP) as Reviewed by Customers.

* Passmark's January 2019 performance test compares SentinelOne to several legacy AV products. Testing showed that SentinelOne performs better than other vendors when the agent is under heavy load. During normal user workload, customers typically see less than 5% CPU load.

## Endpoint security

### What is endpoint security software?

Endpoint security software is a program that is installed on laptops, desktops and/or servers that protects them from the slew of attacks that can infect an endpoint – malware, exploits, live attacks, script-based attacks, and more – with the purpose of stealing data, profiting financially or otherwise harming systems, individuals or organizations.

### Is endpoint security the same as anti-virus?

Endpoint security solution is not an anti-virus. Anti-virus is an antiquated, legacy technology that relies on malware file signatures. SentinelOne Endpoint Security does not use traditional anti-virus signatures to spot malicious attacks. Instead, it uses a combination of static machine learning analysis and dynamic behavioral analysis to protect systems. All files are evaluated in real time before they execute and as they execute. Because SentinelOne technology does not use signatures, you don't have to worry about network intensive updates or local system I/O intensive daily disk scans.

### SentinelOne provides "Next Gen endpoint protection". What is this?

Next Gen endpoint security solutions are proactive. They preempt and predict threats in a number of ways. By evaluating all activity in a network, both in the kernel and in user space, these tools keep a close eye on anything that looks suspicious. Machine learning processes are proficient at predicting where an attack will occur. Security tools may use things like out-of-band monitoring to make the surveillance more robust and to catch viruses, malware and other kinds of attacks early.

### What detection capabilities does SentinelOne have?

SentinelOne utilises multiple cascading engines: reputation, StaticAI and ActiveEDR capabilities to prevent and detect different types of attacks at different phases.

* Detection - Patented Behavioral AI recognizes malicious actions regardless of vector. SentinelOne is the only endpoint security vendor to detect fileless, zero-day and nation-grade attacks in real time.

* Prevention - Static AI on the endpoint prevents attacks inline in real time. Consistently ranked for highest efficacy and lowest false-positives, SentinelOne's static AI model replaces legacy antivirus.

### Does SentinelOne provide malware prevention?

SentinelOne is designed to prevent all kinds of attacks, including those from malware. SentinelOne's Endpoint Prevention (EPP) component uses StaticAI Prevention to analyse (online or offline) executable files pre-execution; this replaces the need for traditional signatures, which are easily bypassed, require constant updating and require resource-intensive scans on the device.

The SentinelOne engine also performs analysis of PDF, Microsoft OLE documents (legacy MS Office) and MS Office XML formats (modern MS Office) as well as other kinds of files that may contain executable code. The goal of StaticAI in the product is to detect commodity and some novel malware with a compact, on-agent machine learning model that serves as a substitute for the large signature databases used in legacy AV products.

### Can SentinelOne detect in-memory attacks?

SentinelOne can detect in-memory attacks.

SentinelOne is integrated with hardware-based Intel&reg; Threat Detection Technology (Intel TDT) for accelerated Memory Scanning capabilities.

### Will the SentinelOne agent slow down my endpoints?

The SentinelOne agent does not slow down the endpoint on which it is installed. The SentinelOne agent is designed to have as little impact on the end user as possible while still providing effective protection both online and offline.

In contrast to other anti-malware products that require constant `.dat` file signature updates and daily disk scans, the agent instead uses static file AI and behavioral AI, which saves on CPU, memory and disk I/O. End users have better computer performance as a result. System resource consumption will vary depending on system workload.

## Management

### How do I access my Anti-Virus as a Service environment?

As it is assumed UKCloud will manage all anti-virus aspects as part of this service, there is currently no environment for customers to access.

### How do I manage my services?

As it is assumed UKCloud will manage all anti-virus aspects as part of this service, there is currently no way for a customer to directly manage this service.

Any changes to the service for items such as file or folder exclusions should be requested initially by raising a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### How do I instantiate a manual or scheduled scan?

Unlike traditional anti-virus solutions, SentinelOne's real-time AI threat recognition capabilities prevents viruses from embedding themselves into systems, removing the traditional concept of ad-hoc full system scans.

### Do I get access to a dashboard or reports?

As it is assumed UKCloud will manage all anti-virus aspects as part of this service, there are currently no dashboard or reporting features for customers to access.

## Support

### How do I raise a support ticket?

The secure online [UKCloud Portal](https://portal.ukcloud.com/login) provides most common service management functionality. You can raise tickets within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### What are your service maintenance windows?

See [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

### Can UKCloud provide notifications for service status and maintenance?

Yes, you can subscribe to the [UKCloud Service Status page](https://status.ukcloud.com/) to be alerted to service status and maintenance notifications. Notifications can be via email, text, webhook or Atom/RSS feed. For more information, see [*How to subscribe to service status notifications*](../other/other-how-subscribe-service-status.md).

## Onboarding

### How can I get started with the service?

Within 5 business days of accepting an order, UKCloud will create the customer's anti-virus environment and commence anti-virus any environments in-line with the Device Group schedules they have opted-in to.

### Is there a free trial?

Due to the initial complexity of configuring the anti-virus environment, UKCloud is currently unable to offer a free trial of this service.

## Billing and legal

### What is the smallest unit of time I will be billed for?

The minimum unit of time for use is monthly. Part months will be rounded up.

### Will I be charged for resources in a 'shut off' state?

UKCloud will continue to charge for any resources for which you have elected to have anti-virus protection regardless of the state they're in. To stop any charges, you'll need to raise a ticket within the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the Portal. Alternatively, you can contact UKCloud Support by phone or email.

### How can I view billing information?

Online visibility of real-time or historic billing information is currently not available as a service provided by UKCloud.

### How can I pay for the services?

Payment for UKCloud services can be made by direct bank transfer (BACS/CHAPS). You can find bank details for payment on your invoice.

### What are the termination fees?

There are no termination costs for this service.

## Security

### Do I need to install an agent on my endpoints to enable this service?

Yes, you'll need to deploy the SentinelOne agent to each endpoint so that it can run autonomously on each device, without reliance on an internet connection. The agent sits at the kernel level and monitors all processes in real time. This process is performed by the agent's Dynamic Behavioral Tracking engine, and enables users to see exactly what happened on an endpoint at each stage of execution. This includes origin, patient zero, process and file activity, registry event, network connections and forensic data.

### How is any data related to this service kept secure?

UKCloud will deploy and manage all agents used to deliver this service, with all traffic being passed via HTTPS.

Any customer data that UKCloud collects as part of this service will never leave a UKCloud data centre or be shared with a third party.

### Is there a protective monitoring service?

Protective monitoring is included with all our IaaS platforms at the hypervisor level and below and follows GPG 13. For more information, see [*Protective Monitoring from UKCloud*](../other/other-ref-promon.md).

If you require protective monitoring services above the hypervisor we offer our Security Operations Service to monitor your virtual estate (additional charges apply). For more information, see the [*Security Operations Service Service Definition*](../soc/soc-sd.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
