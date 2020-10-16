---
title: How to use a customer's own polling (monitoring) tooling with Managed Monitoring as a Service
description: Describes how connect a customer's own polling (monitoring) tooling in to UKCloud's Managed Monitoring as a Service
services: managed-services
author: sdixon
reviewer: shighmoor
lastreviewed: 16/10/2020
toc_rootlink: Managed IT Operations
toc_sub1: Managed Monitoring as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use a customer's own polling (monitoring) tooling
toc_fullpath: Managed IT Operations/Managed Monitoring as a Service/man-monitoring-how-use-customer-polling.md
toc_mdlink: man-monitoring-how-use-customer-polling.md
---

# How to use a customer's own polling (monitoring) tooling with Managed Monitoring as a Service

## Overview

With Managed Monitoring as a Service, our Network Operations Centre (NOC) monitors your devices, receiving and reacting to any abnormal events, only escalating those events that genuinely require your attention.

By default UKCloud's Managed Monitoring as a Service will use our own monitoring systems to poll devices and perform remote checks. In certain situations customers may have their own monitoring tooling already established, but still want to forward their polling events to UKCloud's Managed Monitoring as a Service in order to leverage UKCloud's 24x7x365 Network Operations Centre (NOC) capabilities.

This article provides information and considerations regarding connecting a customer's own polling (monitoring) solution to UKCloud's Managed Monitoring as a Service.

## Customer Polling (Monitoring) Technology Considerations

### Pre-requisites
We are confident that customers operating modern monitoring tooling such as Opsview, ManageEngine OpManager, Nagios, SolarWinds should be able to pass their polling events to UKCloud's Managed Monitoring as a Service, however we would need to perform an integration assessment (potentially chargeable) in order to validate compatibility. 

Please note that we are not able to guarantee integration with any/all monitoring technologies before an assessment has been completed.

### Alert Forwarding Method
If the customer is to provide their own polling service, then it must support one of the UKCloud accepted methods of accepting alerts, which are:
 
- HTTPS GET/POST
- API Integration with Moogsoft AIOps via HTTP/HTTPS reverse proxy
- SNMP Traps
- Local command execution (for example, a script that can be executed that can generate an SNMP trap or make a POST or GET request to a URL)
 
In addition to being able to forward alert information, the data must contain the hostname of the device and be able to provide a reference to a [Playbook](#playbooks), which will be used by UKCloud to indicate the correct contact and escalation instructions for any live alert.
 
Please note that we are unable to guarantee that the customer's polling technology will be compatible with the service until the forwarding method has been investigated, confirmed and tested by UKCloud.

### Non-standard Monitoring Checks
Our standard checks are outlined in the Managed Monitoring as a Service [Service Scope](https://docs.ukcloud.com/articles/managed-services/man-monitoring-sco.html). If non-standard monitoring checks are required, these must be confirmed as cleared by UKCloud before go-ahead can be given.

## Connectivity between the customer and UKCloud 

### Standard Connectivity
Connecting a customer's own polling (monitoring) service to UKCloud's Managed Monitoring as a Service requires a method over which polling of devices can take place. As standard, this will be performed via a single site to site/IPSec VPN between a UKCloud VMware NSX Edge Gateway device and the customer's network device. Please see "Non-standard Connectivity" below for more information beyond this standard implementation.
 
Any customer VPN endpoint must be able to support Internet Key Exchange Version (IKEv1 or IKEv2) with the following configuration for the UKCloud VPN termination:

***Phase 1***
Configuration Item                        | Value
------------------------------------------|------------
Encryption Algorithm for protection suite | AES256
UpdHash Algorithm for protection suite    | SHA-256
Authentication Method                     | PreShareKey
Diffie-Hellman group                      | DH-16
Lifetime (seconds)                        | 28800
Exchange                                  |  esp

***Phase 2***	 
Configuration Item | Value
-------------------|---------
Encryption Algorithm                              | AES256
Hash Algorithm                                    | SHA-256
Lifetime (seconds)                                | 3600
SA Lifetime Expiration (Traffic Volume in KBytes) | NA
Perfect Forward Secrecy (PFS)                     | NA
Protocol                                          | esp
 
### Non-standard Connectivity
 
If there is a requirement for using one of the following non-standard connectivity methods it must be assessed by a UKCloud design authority before continuing:
 
- Failover via alternative/multiple VPN endpoints
- Leased line termination
- Monitoring via non-encrypted Internet (without a secure VPN)
 
Further information may be required as to the specific network architecture.

## Playbooks
UKCloud's Managed Monitoring as a Service uses a concept called Playbooks to indicate the actions to be performed on the receipt of an alert to UKCloud's Network Operations Centre (NOC).
 
A typical contact playbook provides UKCloud's NOC with a customer's contact and escalation details, along with the following details on an alert by alert basis:
 
- Contact Name/Team Name
- Contact Number
- Contact Email
- Whether Telephone Authentication is required, and the information to perform it
 
At the very least, a single default playbook will be established for a given customer. Additionally, more playbooks with specific contact instructions can be added and tied to individual alert types should a different contact or team be required for different alerts.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
