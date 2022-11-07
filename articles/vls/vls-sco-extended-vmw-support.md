---
title: VMware Extended Support Service Scope
description: Outlines important details regarding the VMware Extended Support service
services: vls
author: shall
reviewer: shighmoor
lastreviewed: 23/03/2021

toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware Extended Support Service Scope
toc_fullpath: Service Information/vls-sco-extended-vmw-support.md
toc_mdlink: vls-sco-extended-vmw-support.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# VMware Extended Support Service Scope

## About this document

This article describes the boundaries of the UKCloud VMware Extended Support service, along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About the VMware Extended Support service

The VMware Extended Support service provides ongoing Level 1 and Level 2 support for VMware estates where vSphere licences are operating on currently unsupported versions such as v5.5 and v6.0.

- ESXi 5.5 was End of General Support on September 19th 2018

- ESXi 6.0 was End of General Support on March 12th 2020

This service provides organisations with additional time to plan upgrades to supported levels of VMware or migrations onto new platforms or services, such as UKCloud's range of public and private clouds operating at OFFICIAL and above.

This service is not intended as a permanent solution for providing these levels of VMware support, as the lack of patches and vulnerability fixes will increase the risk factor for cyber-attack and vulnerability.

UKCloud provides support through our award-winning Service Desk, where our 10 years of operating a significant VMware estate has developed depth and breadth in our VMware skills and capabilities.

Support is provided on the basis of all reasonable endeavours. It's important to note that any issues beyond Level 2 cannot be progressed any further, as VMware will not provide any support until the licences have been upgraded to a supported level.

## Application process

Customers wanting to discuss the suitability of the service and gain a comparative cost estimate for their VMware environment under the VMware Extended Support programme should contact us at <info@ukcloud.com> or contact their Client Director. To provide an indicative quote, we will need a report from vCenter(s) detailing all virtual machines (VMs) and vRAM allocation/reservation.

We will then work with the customer to find the ideal solution to suit their requirements. This will include discussing monthly or annual upfront payments, which include additional discounts.

Once the quote is supplied and the customer wants to place an order, they must provide a purchase order. Once received, the order will be confirmed by our sales operations team.

## Service provisioning

To implement the VMware Extended Support service, there are some simple steps that need to be completed both by UKCloud and the customer. The details that follow assume that the customer has a good understanding of VMware and can carry out the required actions. Note that, if required, UKCloud can provide assistance in these actions at an additional charge, based on our [SFIA Rate Card](https://ukcloud.com/sfia) for Professional Services.

### Welcome pack

When we receive an order from the customer, we will provide an emailed welcome pack to the named administrator/contact identified in the order form. The welcome pack includes:

- Log in address of the UKCloud Portal

- Log in credentials for the UKCloud Portal

- Links to useful VMware Extended Support articles in the Knowledge Centre

- To set up the vCloud Usage Meter, we will provide:

  - UKCloud VMware contract number

  - UKCloud VMware partner ID

  - UKCloud Site ID

In addition to the emailed welcome pack, a Service Delivery Manager will contact the customer to support them with the tasks required (as outlined in this Service Scope) and answer any questions.

### UKCloud Portal access

All UKCloud customers have access to the UKCloud Portal, where they can access the My Calls ticketing system to raise service requests. We also use the UKCloud Portal to track and log all customer enquiries, requests, support issues, communications and information.

### Knowledge Centre

To assist customers in using our services and all functionality, the UKCloud Knowledge Centre is continually maintained to provide the latest information. Key articles for VMware Extended Support are listed at the end of this Service Scope.

### Onsite audit

During the initial provisioning of the customer onto VMware Extended Support, the customer must provide information relating to the current environment to enable UKCloud to deliver the appropriate services. If the customer is unable to provide the necessary information, or provides inaccurate information, UKCloud reserves the right to conduct a chargeable, high-level audit of the customer's VMware environment, and other connected software, to ensure that there will not be any conflicts, incompatibility or potential support issues.

### Licence eligibility

VMware Extended Support is operated on the existing perpetual licences owned by the customer. Should additional licences be required, these can be provisioned under the VMware Licence Service (VLS).

VMware Extended Support covers vSphere and vCenter. Other elements of VMware deployment, such as vRealize Operations, vSAN, NSX, SRM and Horizon may be supported on an exception basis.

The following are NOT eligible under VMware Extended Support:

- WSP1, Avi Networks, Velocloud, Carbon Black, Pivotal

### Usage Meter

VMware Extended Support operates on a consumption basis and therefore requires the mandatory installation of the vCloud Usage Meter on the customer's environment, to allow the monthly consumption to be recorded.

The Usage Meter captures all the VMware usage covered by the VMware Extended Support agreement during the month and creates a report with the number of units consumed for each VMware bundle. This report of total units is used by UKCloud to calculate the customer's invoice for each month and enables the customer to be flexible on what they use in any given month, rather than be committed up front.

UKCloud will make the URL of the recommended Usage Meter available to the customer.

- UKCloud provides detailed instructions in the Knowledge Centre for the installation, configuration and reporting of the Usage Meter (see the list of articles at the end of this Service Scope).

- It is the customer's responsibility to install and configure the Usage Meter prior to using the service as it is required for reporting and invoicing. The customer can utilise UKCloud Professional Services at an additional cost if assistance is required for this task.

As the Usage Meter is installed in an environment that UKCloud has no access to:

- It is the customer's responsibility to ensure that the Usage Meter is correctly configured and that it is collecting the daily data.

- Customers will need to monitor the Usage Meter to ensure that data is not missing or that the meter has not failed. If there is an issue, it is the responsibility of the customer to resolve this issue or raise a service request to seek assistance.

- It is the customer's responsibility to update the Usage Meter when required when a new version is provided by UKCloud. The customer will be advised as to when the update must be implemented, and this may be a requirement for the reporting to be accurate.

- It is the customer's responsibility to add new products to the Usage Meter so that usage is collected.

## Usage reporting

The basis of VMware Extended Support is that the customer is not committed to any specific VMware usage. This enables the customer to increase, decrease, test and remove environments and functionality as they require.

As a result, VMware Extended Support depends on the vCloud Usage Meter to collect the actual monthly usage on an hourly basis.

As part of the configuration of the Usage Meter, automatic reporting on the 1st of each month is emailed to vls@ukcloud.com. If, for any reason, this fails or cannot be configured, it will be the customer's responsibility to manually send reports within five (5) working days of the last day of the reporting month (that is, 6 November 2021 for October 2021 usage). It is essential that this is completed so that the usage can be added to UKCloud's VMware usage and reported to VMware. A Knowledge Centre article explains how the usage must be reported.

- If the reports are not received within five working days, the customer's assigned Service Delivery Manager will contact them to request the reports.

- If the reports are not received within 10 working days, the customer's invoice will be estimated based on the previous two months' usage. Once the customer's usage is received or estimated, it will be sent to their Service Delivery Manager who will include this in the monthly updates and reports so that the customer can track their usage and costs. It is important to note that the customer must send Usage Meter reports to UKCloud as this is the basis of the contract and ensures accurate reporting and invoicing.

- If an estimation is used, UKCloud reserves the right to add any additional usage to future invoices once the missing reports are sent to ensure that the customer has been accurately invoiced for their actual usage and that UKCloud correctly reports all VMware usage to VMware.

## Support

VMware Extended Support includes support via our experienced VMware Customer Service Team, which has been responsible for supporting our VMware-based public cloud for nine years.

Support under VMware Extended Support is only provided for Level 1 and Level 2 incidents. These will be resolved with all reasonable endeavours by UKCloud. Level 3 issues and above cannot be escalated to VMware without the environment being upgraded to a current VMware supported vSphere version.

Support is provided specifically to the VMware environment and does not extend to integrations to other services.

This support does not entitle the customer to upgrades, patches or vulnerability fixes on the VMware licences being operated. Should upgrades to licences be required, VMware Extended Support can be  seamlessly replaced with the VMware Licence Service (VLS) to move the licences back onto a supported level.

For more information regarding support hours, SLA and escalation, see the [*How to raise and escalate support tickets with customer support*](../portal/ptl-ref-raise-escalate-service-request.md) article on the Knowledge Centre.

Note that there is no limit to the number of tickets that customers can raise.

## Customer responsibilities

In addition to the responsibilities already mentioned in this Service Scope, customers are also responsible for:

- As UKCloud does not have any direct physical or network connection to the customer's environment, it is the customer's responsibility to ensure they maintain previously supported combinations of VMware software and any third-party software as identified within the compatibility matrix. See the following VMware documents for assistance:

  - [VMware Lifecycle Product Matrix](https://lifecycle.vmware.com/#/)

  - [VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php)

  - [Partner Verified and Supported Products (PSVP) Listing](https://www.vmware.com/resources/compatibility/vcl/partnersupport.php)

- The customer is responsible for maintaining their VMware environment, including any software and hardware upgrades, including third-party software that may affect the VMware environment.

- Customers may be asked on occasion to run authorised scripts on their VMware environment for the purpose of maintaining the environment or assisting in fixing reported issues.

- Customers will be advised on how to resolve an issue and will be responsible for implementing that fix.

- To assist in the resolution of an issue, the customer may be required to share screens using Microsoft Teams or other collaboration applications with our support team.

- All support issues must come directly to UKCloud support.

## Pricing and billing

### Pricing packages

VMware Extended Support is charged on a consumption basis, with costs aligned with the number of VMs and associated vRAM allocation. This consumption is recorded each month by the Usage Meter and reported to UKCloud.

A minimum charge of £1,000 (plus VAT) applies to VMware Extended Support service provision.  

### Payment options

Consumption is estimated at the outset and calculated for a 6 or 12-month initial period. Subsequent periods can be for 6 or 12 months.

### Invoicing

Customers will be invoiced in advance for each 6 or 12-month estimate of consumption.

The customer will receive a monthly report from their Service Delivery Manager based on their submitted Usage Meter usages and total costs.

## Professional Services

This Service Scope sets out the responsibilities of UKCloud and the customer. Although the actions that the customer is responsible for are supported by UKCloud via Knowledge Centre articles and the support team, if a customer requires additional support with their on-premises estate or the installation and configuration of any element of VMware or the Usage Meter, we can arrange for our Professional Services team to assist.

These additional services are charged as per our [SFIA Rate Card](https://ukcloud.com/sfia).

If a customer requires the assistance of our Professional Services, they can either contact our support team or their Service Delivery Manager.

## Supporting documents and resources

For more information about VMware Extended Support, see the following:

- [VMware Extended Support Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-256-vmware-extended-support-service-definition-13.0-1.pdf)

- [*How to install the vCloud Usage Meter for VMware Extended Support*](vls-how-ves-install-usage-meter-3.md)

- [*How to add products to the vCloud Usage Meter*](vls-how-ves-add-products-3.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
