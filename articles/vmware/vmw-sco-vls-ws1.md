---
title: UKCloud VMware Workspace ONE VMware License Service (VLS) Service Scope
description: Outlines important details regarding the UKCloud VMware Workspace ONE VMware License Service (VLS)
services: vmware
author: gmartin
reviewer: 
lastreviewed: 25/04/2022

toc_rootlink: Service Information
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Scope
toc_fullpath: Service Information/VMware Licence Service/vmw-sco-vls-ws1.md
toc_mdlink: vmw-sco-vls-ws1.md
---

# UKCloud VMware Workspace ONE VMware License Service (VLS) Service Scope

## About this document

This article describes the boundaries of the UKCloud VMware Workspace ONE VMware License Service (VLS), along with the division of responsibilities between VMware, UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About UKCloud VMware Workspace ONE VLS

### About VLS

VLS is an innovative licensing model, designed with VMware, to reduce cost and deliver licence flexibility for a customer's existing VMware estate. This flexibility makes it easier to modernise existing VMware environments as the customer's organisation transforms IT services or adopts a multi-cloud approach.

Whether purchasing new licences or providing support and maintenance on an existing VMware estate, VLS enables customers to exchange fixed upfront costs and long-term commitments with a VMware consumption-based licence provided via UKCloud. With this new operation model, the functionality of the VMware licences is identical, only the commercial, cost and commitment term is changed.

### About VMware Workspace ONE

VMware Workspace ONE&reg; is an intelligence-driven digital workspace platform that simply and securely delivers and manages any application on any device by integrating access control, application management and multi-platform endpoint management. Workspace ONE is built on the VMware Workspace ONE Unified Endpoint Management (UEM) technology and integrates with virtual application delivery on a common identity framework. With Workspace ONE organisations can now evolve silo-ed cloud and mobile investments, enabling all employees, devices and things across the organisation to accelerate their digital transformation journey with a platform-based approach.

Workspace ONE enables customers to drastically improve experiences and tasks that were previously costly, time consuming and resource intensive. With Workspace ONE, IT organisations can:

- Onboard a new employee with all of their applications and devices in under an hour, without tickets and help desk calls

- Set and enforce access and data policies across all applications, devices and locations in ONE place

- Complete business processes from a mobile device, similar to consumer experiences

- Provision a new corporate laptop out of the box, anywhere in the world, from the cloud within minutes

- Get insights and automation capabilities across the entire digital workspace environment

## Service architecture

The UKCloud service architecture is as follows:

- **Company.** A contract with UKCloud is associated with a company, which provides a single owner for the contract, regardless of how many accounts are created.

- **Account.** We use accounts to separate financial ownership. An account could represent an organisation, a customer contract or a specific project. An account can also have several UKCloud or VMware services associated with it, such as VMware Workspace ONE, UKCloud for VMware, Cloud Storage and VLS. Customers can also use accounts to separate users based on access requirements or permissions.

## VMware Workspace ONE edition provided by UKCloud

VMware Workspace ONE is the simple and secure enterprise platform that delivers and manages any application on any smartphone, tablet or laptop. The UKCloud service is based on the Workspace ONE Standard Edition. Customers requiring other editions or add-on features should contact UKCloud for further discussion.

The VMware Workspace ONE Editions comparison table is available [here](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/products/workspace-one/vmw-workspace-one-edition-comparison-guide.pdf).

## Application process

Customers wanting to discuss the suitability of the service and gain a comparative cost estimate for their VMware Workspace ONE environment under the VLS programme should contact us at <info@ukcloud.com> or contact their Client Director. To provide an indicative quote, we will need:

- The customer's written authorisation to request data from VMware on the existing licence estate and renewal details

- The customer's VMware Entitlement Account (EA) number

- Details of the customer's planned future use of VMware to ensure the correct bundles/features are provisioned in any VLS proposal

We will then work with the customer to find the ideal solution to suit their requirements. This will include discussing monthly or annual upfront payments, which include additional discounts.

Once the quote is supplied and the customer wants to place an order, they must provide a purchase order, with a call-off contract if transacted within the G-Cloud framework, where we have a specific VLS service listed. Once received, the order will be confirmed by our sales operations team.

## Service provisioning

After UKCloud receives a purchase order for VMware Workspace ONE, we'll contact the customer to advise them when the environment will be available. Within 1 business day of accepting an order (shorter deployment times are typically achieved and can be prioritised on request), UKCloud will create the customer's Primary Administrator account and send a Welcome Pack, which includes the URL for the UKCloud Portal and any relevant documentation.

The VMware Workspace UEM environment will be configured and available within 72 hours of receiving the order; shorter deployment times are typically achieved and can be prioritised on request.

UKCloud has created several videos, help guides, manuals and FAQs to help train and instruct users so that they are up and running quickly and easily. These are available within the Knowledge Centre.

UKCloud also has a large ecosystem of partners who can deliver additional services, such as support and professional services. UKCloud can introduce customers to the right partner to suit their needs.

## End user device and application licensing responsibilities

Each end user device requires a Workspace ONE licence. Each application hosted within the environment will have an appropriate licensing agreement that is required as well. The customer is responsible for all end user device and application software licensing.

## Platform management

Customers can access, manage and view the VMware Workspace ONE platform, accessing only those features allowed by their role, in any of the following ways:

- **Workspace ONE UEM portal.** Provides a graphical user interface (GUI) to access the customer's Workspace ONE environment (depending on assigned permissions).

- **Workspace ONE API.** Enables the programmatic creation and management of the services inside the platform.

- **UKCloud Portal.** Provides access to incident and request management.

Customers cannot access the underlying infrastructure. This includes (but isn't limited to) the hardware.

## UKCloud and VMware Workspace ONE service and maintenance status

Customers are advised to subscribe to notifications for information on services provided by UKCloud and VMware using the links below:

- <https://status.ukcloud.com/> - Visibility and subscription for UKCloud platform maintenance notifications and service status reports

- <https://status.workspaceone.com/> - Visibility and subscription for VMware Workspace ONE maintenance notifications and service status reports

All Workspace ONE software upgrades will be managed by VMware. Customers will be notified of updates to the platform with 7 days' notice. Full details of the VMware Workspace ONE UEM maintenance windows are detailed [here](https://kb.vmware.com/s/article/2960724). The maintenance schedule for 2022 is available [here](https://kb.vmware.com/s/article/81448).

## Service location

VMware Workspace ONE is a cloud service delivered by VMware out of an AWS data centre in Germany.

The UKCloud Portal and support is delivered out of the UK.

## Billing process

Workspace ONE licences must be purchased upfront for the service term (either 1, 2 or 3 years).

Each month UKCloud will check actual licence usage and where actual usage exceeds the agreed license volume, an invoice will be raised to cover the additional licenses used during the month.

## Requesting additional VMware Workspace ONE licences

Customers requiring additional licences should contact their Client Director or Service Delivery Manager. All additional licences will be aligned to the existing service term.

## Customer service

**Service Delivery Manager (SDM).** An assigned point of contact who will provide customers with any assistance required during their use of the service, including onboarding, service reviews and incident reporting and escalation.

**Support Desk.** After the initial onboarding and design phase, customers can utilise the standard UKCloud support entitlement. For more information, see [*Raising and escalating support tickets with customer support*](../portal/ptl-ref-raise-escalate-service-request.md).

## Technical support levels and ownership

### Customer responsibilities

The customer is responsible for:

- Assessing whether the VMware Workspace ONE platform can support the various requirements of their application.

- The control and management of access and responsibilities for end users including appropriate connectivity, security and accreditation if required.

- Gathering and identifying errors in logs; answering installation, configuration, and usage questions; problem isolation and identification; determining if a problem is documented in VMware publications; reviewing the symptoms-solutions database for known problem resolutions.

- Performing an in-depth analysis of the suspected problem, including attempting to re-create the problem and providing acceptable problem resolution or workaround.

The Workspace ONE Knowledge Base is available at <https://support.workspaceone.com/>.

### UKCloud and VMware responsibilities

Services are provided by VMware to resolve problems that are determined to, or highly probable to:

- Be the result of a design or manufacturing defect

- Be the result of a complex interaction between VMware's product and another product

- Not be possible to be resolved by the customer

- Require product design knowledge or expertise to isolate and effect a problem resolution

During Level 3 support interactions, UKCloud is responsible for managing the support relationship and ongoing communication with the customer via the UKCloud Portal and support team.

### Professional Services

This Service Scope sets out the responsibilities of UKCloud and the customer. Although the actions that the customer is responsible for are supported by UKCloud via Knowledge Centre articles and the support team, if a customer requires additional support with their Workspace ONE environment we can arrange for our Professional Services team to assist.

These additional services are charged as per our [SFIA Rate Card](https://ukcloud.com/sfia).

If a customer requires the assistance of our Professional Services team, they can either contact our support team or their Service Delivery Manager.

### Service level agreement

VMware Workspace ONE is a SaaS solution delivered by VMware. VMware will use commercially reasonable efforts to ensure that each component of the service offering maintains at least 99.9% availability during a given billing period.

For more details, see <https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/support/vmw-workspace-one-uem-sla.pdf>.

### Service constraints

For information about UKCloud Planned and Emergency Maintenance, see [*Understanding UKCloud service maintenance windows*](../other/other-ref-maintenance-windows.md).

### Support target response times

Customer experience is important to us. We measure our performance against service targets across our customers to ensure that we provide a service our customers can trust.

Ticket priority | Initial response target
----------------|------------------------
P1 incident     | 30 minutes or less; 24 x 7
P2 incident     | 4 business hours; 12 x 5
P3 incident     | 8 business hours; 12 x 5
P4 incident     | 12 business hours; 12 x 5

Root cause analysis can be provided on request via the support team for P1 support requests.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
