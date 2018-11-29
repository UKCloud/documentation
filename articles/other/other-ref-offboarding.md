---
title: Terminating your UKCloud services | UKCloud Ltd
description: Provides useful information for offboarding UKCloud services, including key customer and UKCloud responsibilities
services: other
author: Sue Highmoor

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Terminating your UKCloud services
toc_fullpath: Reference/other-ref-offboarding.md
toc_mdlink: other-ref-offboarding.md
---

# Terminating your UKCloud services

## Overview

UKCloud is easy to adopt, easy to use and easy to leave, so our intention is to make the service termination process, sometimes referred to as offboarding, as simple as possible.

This article clearly outlines customer and UKCloud responsibilities for terminating your UKCloud services.

## Notice requirements

The notice required to terminate UKCloud services varies depending on the service. For UKCloud notice period requirements on a per-product basis, refer to [*Services at a glance*](other-ref-product-overview.md).

## Single service termination vs account termination

You can request the termination of one or more services within your account. In this case, the termination is restricted to the chargeable items within that service (for example, a VMware environment within a customer account).

If you want to terminate your whole account with UKCloud, you must raise separate termination requests for each service associated with your customer contract. The final stage of the termination of a complete customer account will be the decommissioning of the last UKCloud Portal user, decommissioning of all customer reports and termination of the ability to access customer ticket details and service reports through the Portal.

## Customer responsibilities

- When you decide to terminate a service, you should first contact your Technical Account Manager (TAM) or Cloud Delivery Manager (CDM). Your TAM or CDM will help you to determine the relevant environment details for termination and the Effective Date of Termination.

- After speaking to your TAM or CDM, an administrator of your Portal account must raise a Service Request via the Portal, following the relevant prompts for information to enable our support team to action the request as quickly as possible.

> [!NOTE]
> If you do not raise a Service Request to initiate a formal termination of service, your environment may not be completely decommissioned and you may end up still being charged for objects remaining on the platform.

- Before the decommissioning of the services can take place, you are responsible for the removal of all the data within the environment. Refer to [*Responsibilities by service*](#responsibilities-by-service) below for a list of environment items that you need to clear ahead of UKCloud decommissioning the service.

> [!NOTE]
> If you do not removal all the environment items listed, UKCloud will not be able to complete the termination process and you may still be charged for those remaining items.

- All users with access to the service being terminated must be removed from the Portal by an administrator within the customer organisation.

## UKCloud responsibilities

After you've removed all of the items from your account that you're responsible for, UKCloud will:

- Remove service-specific environment items as listed in [*Responsibilities by service*](#responsibilities-by-service) below.

- Securely and permanently erase any residual customer data and configurations that remain.

    Our data removal solution is independently validated by periodic IT Security Health Check tests. While the solution does not align with the documented requirements of HMG IA Standard No.5, it has successfully passed all CHECK/ITSHC activities, and has been assessed and validated by the National Cyber Security Centre (NCSC) on behalf of specific customers.

- Remove your account (and company, if necessary).

- Return to you any data or materials that cannot be deleted or exported.

- Return any prepaid sums for services that you have not consumed (unless otherwise required by the associated Service Definition).

- Arrange to return all confidential information.

## Costs

There are no termination costs associated with cancelling UKCloud services. However, you should consider the following:

- You are responsible for extracting your own data from the service and any costs that may incur.

- We may make additional charges for transferring data out of the service.

- We reserve the right to pass through third-party price rises that are not within our direct control.

- If you use service options with minimum terms, such as Global Load Balancing or Application-tuned DDoS Protection, you will continue to be charged for these until the end of those terms.

- We reserve the right to charge for any content that you leave in your environment or for retrieving and returning your content.

## Responsibilities by service

### Multi-cloud platforms

#### [UKCloud for Microsoft Azure](#tab/tabid-1)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Resource groups (which contain virtual machines, storage and virtual networks) | User subscriptions, offers, plans and quotas

#### [UKCloud for OpenShift](#tab/tabid-2)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Pods | Entire environment
Projects |
Volumes |

#### [UKCloud for OpenStack](#tab/tabid-3)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Instances | External networks (HSCN, etc.)
Internal networks |
Routers |
Floating IPs |
Volumes |
Volume snapshots |
Images |

<!-- #### [UKCloud for Oracle Software](#tab/tabid-4)

Customer responsibilities | UKCloud responsibilities
--------------------------|------------------------- -->

#### [UKCloud for VMware](#tab/tabid-5)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Virtual machines | Edges
vApps | VDC
Templates | vOrg
ISOs | Existing snapshot backups
Catalogs | ZORG/assigned VDCs for Journaling Protection
Org VDC networks |
NAT/firewall/DHCP/static routes/VPN |
Disable snapshot backups |
VPGs for Journaling Protection |

### Multi-cloud enabling

#### [Cloud GPU](#tab/tabid-6)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Uninstall NVIDIA software | Remove GPU mapping from virtual machine
Power off GPU-enabled virtual machine |

#### [Cloud Storage](#tab/tabid-7)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Data | Default bucket
Customer-created buckets | Accounts

#### [Cross Domain Security Zone](#tab/tabid-8)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Virtual machines | Edges
vApps | VDC
Templates | vOrg
ISOs |
Catalogs |
Org VDC networks |
NAT/firewall/DHCP/static routes/VPN |

#### [Disaster Recovery as a Service](#tab/tabid-9)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
On-premises ZVMs and VRAs | ZORG/assigned VDCs
VPGs |

#### [Email and Collaboration](#tab/tabid-10)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Mail accounts | Final admin account

#### [Migration to the Cloud](#tab/tabid-12)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
On-premises ZVMs and VRAs | ZORG/assigned VDCs
VPGs |

#### [Secure Remote Access](#tab/tabid-14)

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Additional VMs (including Bastion) | Org VDC networks
vApps (excluding Bastion vApp) | NAT/firewall/DHCP/static routes/VPN
Templates | Edges
ISOs | VDC
Catalogs | vOrg
&nbsp; | Certificates and Active Directory

### Connectivity

Customer responsibilities | UKCloud responsibilities
--------------------------|-------------------------
Customer-provided private networks | External network connections
Customer-provided IP ranges | Allocated IP ranges
Customer co-lo'd kit | Private VLANs/VRFs

***

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.