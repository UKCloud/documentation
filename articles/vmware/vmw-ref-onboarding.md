---
title: Onboarding responsibilities for UKCloud for VMware
description: Outlines UKCloud and customer responsibilities when onboarding UKCloud for VMware
services: vmware
author: bchallis
reviewer: shighmoor
lastreviewed: 10/06/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Onboarding responsibilities
toc_fullpath: Reference/vmw-ref-onboarding.md
toc_mdlink: vmw-ref-onboarding.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Onboarding responsibilities for UKCloud for VMware

## Overview

When UKCloud for VMware is initially provisioned (a process sometimes referred to as onboarding), responsibilities are divided between UKCloud and the customer.

This article indicates which activities are the responsibility of UKCloud and which are the responsibility of the customer.

## Responsibilities

The following table outlines the boundaries of responsibilities for onboarding UKCloud for VMware.

<u>Key</u>

- **R = Responsible** - The person who performs an activity or does the work

- **A = Accountable** - The person who is ultimately accountable and has Yes/No/Veto

- **C = Consulted** - A person who needs to feedback and contribute to the activity

- **I = Informed** - A person who needs to know of the decision or action

Onboarding activity                                                                         | UKCloud  | Customer | Notes
--------------------------------------------------------------------------------------------|----------|----------|------
Project management                                                                          | C        | R/A      | UKCloud project management available as a [*Professional Service*](../pro-services/ps-home.md)
Solution design, incuding HLD/LLDs                                                          | C        | R/A      | UKCloud solution design and documentation available as a [*Professional Service*](../pro-services/ps-home.md)
Systems configuration documentation                                                         | R/A      |          |
Provision of customer account                                                               | R/A      | C        |
Provide named UKCloud customer success contact                                              | R/A      | I        |
Provide named UKCloud Service Delivery Manager                                              | R/A      | I        |
Creation of customer virtual environments within account                                    | I        | R/A      |
Creation of Global Administrator                                                            | R/A      | R/C      |
Creation of administrators                                                                  | I        | R/A      |
Provide introduction/overview to UKCloud service and Portal                                 | R/A      | C        |
Provide access to customer Knowledge Centre                                                 | R/A      | I        |
Application to join government networks                                                     | C        | R/A      | UKCloud can provide guidance where appropriate to join government networks
Provision of customer external connectivity to internet/native government networks          | R/A      | R/C      |
Ordering external private networks (for example, leased lines into UKCloud DC Campus (Ark)) | C        | R/A      | Customer should order from a Telco who has presence in Ark; UKCloud will supply information to assist in ordering
Installing external private networks into UKCloud DC campus (Ark)                           | R/C      | R/A      | Telco will work directly with Ark to install private network
Installing cross-connects from private networks into customer environments                  | R/A      | I        | Ark provide physical cabling from Telco termination point to UKCloud Cloud location within Ark
Configuration of private network presentation to customer environment                       | R/A      | R/C      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Provision of complementary firewall services (NSX)                                          | R/A      | C/I      |
Provision of Bring Your Own Firewall (BYOF)                                                 | R/C      | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Creation of firewall rules                                                                  | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Creation of virtual networks within customer environment                                    | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Creation of virtual machines within customer environment                                    | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Make available general VM OS templates (for example, Windows Server)                        | R/A      | I        |
Upload of VM image templates                                                                | C/I      | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Import of existing data                                                                     | C/I      | R/A      | Bulk data transfer services available on demand using [*Mass Data Transfer*](../enablement/enbl-sco-mtf-nas.md)
Provision of storage volumes for customer environment                                       | R/A      | C        |
Creation of VM-attached storage                                                             | I        | RA       | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Provision of VM OS update repositories and licencing services                               | R/A      | I        |
VM base configuration (NTP/licence activation/connect to repositories)                      | C        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
VM security configuration (for example, hardening, AV installation)                         | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
VM advanced configuration (for example, application/DB installation)                        | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
VM optimisation and troubleshooting                                                         | C        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Configuration of VM power schedules                                                         | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Install and configure VM Protective Monitoring solution                                     | I        | R/A      | UKCloud [Security Operations Service](https://ukcloud.com/app/uploads/2022/08/ukc-svc-239-security-operations-service-service-definition-13.0.pdf) available on demand
IT Health Check / accreditation activities                                                  | C        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Provision of backup target storage                                                          | R/A      | I        |
Enabling backups for specific VMs                                                           | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Provision of Zerto Journaling Protection for disaster recovery                              | R/A      | C        |
Configuration of Zerto service to replicate virtual machines                                | I        | R/A      | Customer environment build available as a [*Professional Service*](../pro-services/ps-home.md)
Provision of physical hosting for co-location                                               | R/A      | C        | Co-location is available as a [*Cloud Enablement*](../enablement/enbl-sco-hosting.md) service
Purchase of physical infrastructure required within co-location                             | C        | R/A      | UKCloud can resell hardware (for example, firewalls) to a customer if required
Installation of physical infrastructure in hosting service                                  | R/A      | R/A      | Co-location is available as a [*Cloud Enablement*](../enablement/enbl-sco-hosting.md) service
Escorting for physical infrastructure installation in hosting service                       | R/A      | R/C      | Co-location is available as a [*Cloud Enablement*](../enablement/enbl-sco-hosting.md) service

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
