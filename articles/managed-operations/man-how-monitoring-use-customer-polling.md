---
title: How to use my own polling (monitoring) tooling with Managed Monitoring as a Service
description: Describes how you can connect your own polling (monitoring) tooling to UKCloud's Managed Monitoring as a Service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 29/07/2022
toc_rootlink: Managed IT Operations
toc_sub1: Managed Monitoring as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use your own polling (monitoring) tooling
toc_fullpath: Managed IT Operations/Managed Monitoring as a Service/man-how-monitoring-use-customer-polling.md
toc_mdlink: man-how-monitoring-use-customer-polling.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to use your own polling (monitoring) tooling with Managed Monitoring as a Service

## Overview

With Managed Monitoring as a Service, our Network Operations Centre (NOC) monitors your devices, receiving and reacting to any abnormal events, only escalating those events that genuinely require your attention.

By default, we use our own monitoring systems to poll devices and perform remote checks. In certain situations, you may have your own monitoring tooling already established, but still want to forward your polling events to UKCloud's Managed Monitoring as a Service so that you can leverage UKCloud's 24x7x365 Network Operations Centre (NOC) capabilities.

This article provides information and considerations regarding connecting your own polling (monitoring) solution to UKCloud's Managed Monitoring as a Service.

## Customer polling (monitoring) technology considerations

### Prerequisites

While we're confident that modern monitoring tooling, such as Opsview, ManageEngine OpManager, Nagios and SolarWinds, should be able to pass their polling events to UKCloud's Managed Monitoring as a Service, we do need to perform an integration assessment (potentially chargeable) so that we can validate compatibility. 

> [!NOTE]
> We cannot guarantee integration with any/all monitoring technologies if an assessment has not been completed.

### Alert forwarding method

If you want to provide your own polling service it must support one of UKCloud's accepted methods of receiving alerts, which are:

- HTTPS GET/POST

- SNMP traps

- Local command execution (for example, a script that can be executed that can generate an SNMP trap or make a POST or GET request to a URL)

In addition to being able to forward alert information, the data must contain the hostname of the device and be able to provide a reference to a [*Playbook*](#playbooks), which will be used by UKCloud to indicate the correct contact and escalation instructions for any live alert.

> [!NOTE]
> We cannot guarantee that your polling technology will be compatible with the service until the forwarding method has been investigated, confirmed and tested by UKCloud.

### Non-standard monitoring checks

Our standard checks are outlined in the [*Managed Monitoring as a Service Service Scope*](man-sco-monitoring.md). If non-standard monitoring checks are required, these must be confirmed as cleared by UKCloud before go-ahead can be given.

## Connectivity between the customer and UKCloud 

### Standard connectivity

Connecting your own polling (monitoring) service to UKCloud's Managed Monitoring as a Service requires a method over which polling of devices can take place. As standard, this will be performed via a single site to site/IPsec VPN between a UKCloud VMware NSX Edge Gateway device and your network device. See [*Non-standard connectivity*](#non-standard-connectivity) for more information beyond this standard implementation.
 
Any customer VPN endpoint must be able to support Internet Key Exchange Version (IKEv1 or IKEv2) with the following configuration for the UKCloud VPN termination:

**Phase 1**

Configuration item                        | Value
------------------------------------------|------
Encryption Algorithm for protection suite | AES256
UpdHash Algorithm for protection suite    | SHA-256
Authentication Method                     | PreShareKey
Diffie-Hellman group                      | DH-16
Lifetime (seconds)                        | 28800
Exchange                                  |  esp

**Phase 2**

Configuration item                                | Value
--------------------------------------------------|------
Encryption Algorithm                              | AES256
Hash Algorithm                                    | SHA-256
Lifetime (seconds)                                | 3600
SA Lifetime Expiration (Traffic Volume in KBytes) | NA
Perfect Forward Secrecy (PFS)                     | NA
Protocol                                          | esp
 
### Non-standard connectivity
 
If there's a requirement for using one of the following non-standard connectivity methods, it must be assessed by a UKCloud design authority before continuing:
 
- Failover via alternative/multiple VPN endpoints

- Leased line termination

- Monitoring via non-encrypted Internet (without a secure VPN)
 
Further information may be required as to the specific network architecture.

## Playbooks

UKCloud's Managed Monitoring as a Service uses the concept of playbooks to indicate the actions to be performed on receipt of an alert to UKCloud's NOC.
 
A typical contact playbook provides UKCloud's NOC with your contact and escalation details, along with the following details on an alert by alert basis:
 
- Contact name/team name

- Contact number

- Contact email

- Whether telephone authentication is required, and the information to perform it
 
At the very least, a single default playbook will be established for a given customer. Additionally, you can add more playbooks with specific contact instructions tied to individual alert types should a different contact or team be required for different alerts.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
