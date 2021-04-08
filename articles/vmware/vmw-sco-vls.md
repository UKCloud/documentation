---
title: VMware Licence Service (VLS) Service Scope
description: Outlines important details regarding the VMware Licence Service (VLS)
services: vmware
author: shall
reviewer: shall
lastreviewed: 22/03/2021

toc_rootlink: Service Information
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Scope
toc_fullpath: Service Information/VMware Licence Service/vmw-sco-vls.md
toc_mdlink: vmw-sco-vls.md
---

# VMware Licence Service (VLS) Service Scope

## About this document

This article describes the boundaries of the UKCloud VMware Licence Service (VLS), along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About the VMware Licence Service

VLS is an innovative licensing model, designed with VMware, to reduce cost and deliver licence flexibility for a customer's existing VMware estate. This flexibility makes it easier to modernise existing VMware environments as the customer's organisation transforms IT services or adopts a multi-cloud approach.

Whether purchasing new licences or providing support and maintenance on an existing VMware estate, VLS enables customers to exchange fixed upfront costs and long-term commitments with a VMware consumption-based licence provided via UKCloud. With this new operations model, the functionality of the VMware licences is identical, only the commercial, cost and commitment term is changed.

## Application process

Customers wanting to discuss the suitability of the service and gain a comparative cost estimate for their VMware environment under the VLS programme should contact us at <info@ukcloud.com> or contact your Account Director. To provide an indicative quote, we will need:

- The customer's written authorisation to request data from VMware on the existing licence estate and renewal details

- The customer's VMware Entitlement Account (EA) number

- A report from vCenter(s) detailing all virtual machines (VMs) and vRAM allocation/reservation, plus additional elements on Horizon, SRM and vSAN, if deployed

- Details of the customer's planned future use of VMware to ensure the correct bundles/features are provisioned in any VLS proposal

We will then work with the customer to find the ideal solution to suit their requirements. This will include discussing monthly or annual upfront payments, which include additional discounts.

Once the quote is supplied and the customer wants to place an order, they must provide a purchase order, with a call off contract if transacted within the G-Cloud framework, where we have a specific VLS service listed. Once received, the order will be confirmed by our sales operations team.

## Service provisioning

To implement the VLS service, there are some simple steps that need to be completed both by UKCloud and the customer. The details that follow assume that the customer has a good understanding of VMware and can carry out the required actions. Note that, if required, UKCloud can provide assistance in these actions at an additional charge, based on our [SFIA Rate Card](http://www.ukcloud.com/sfia) for Professional Services.

### Welcome pack

When we receive an order from the customer, we will provide an emailed welcome pack to the named administrator/contact identified in the order form. The welcome pack includes:

- Log in address of the UKCloud Portal

- Log in credentials for the UKCloud Portal

- Links to useful VLS articles in the Knowledge Centre

- To set up the vCloud Usage Meter, we will provide:

  - UKCloud VMware contract number

  - UKCloud VMware partner ID

  - UKCloud Site ID

In addition to the emailed welcome pack, a Service Delivery Manager will contact the customer to support them with the tasks required (as outlined in this Service Scope) and answer any questions.

### UKCloud Portal access

All UKCloud customers have access to the UKCloud Portal, where they can access the My Calls ticketing system to raise service requests. We also use the UKCloud Portal to track and log all customer enquiries, requests, support issues, communications, and information.

### Knowledge Centre

To assist customers in using our services and all functionality, the UKCloud Knowledge Centre is continually maintained to provide the latest information. Key articles for VLS are listed at the end of this Service Scope.

### Onsite audit

During the initial provisioning of the customer onto VLS, the customer must provide information relating to the current environment to enable UKCloud to deliver the appropriate services. If the customer is unable to provide the necessary information, or provides inaccurate information, UKCloud reserves the right to conduct a chargeable, high-level audit of the customer's VMware environment, and other connected software, to ensure that there will not be any conflicts, incompatibility or potential support issues.

### License keys

To activate the service, UKCloud will make the required licence keys available to the customer. These need to replace the existing licence keys within the customer's VMware environment. The VMware requirements will have been identified in the initial engagement, however, to ensure the right keys are provided, UKCloud Support will engage with the customer to identify the VMware modules that are to be used, including the exact version.

- UKCloud will request the correct keys and will make them available to the customer.

- It is the customer's responsibility to replace their existing keys with the new UKCloud versions. This must be completed immediately.

- The customer may be required to update or add licence keys for additional module usage.

- If the customer wants to use an additional VMware module, then they can request a new licence key as per the Knowledge Centre article.

- The licence keys supplied are for use with UKCloud VLS only and not for any VMware usage outside of the VLS contract. If the service is cancelled by the customer, the UKCloud issued keys are to be removed by the customer.

### Licence eligibility

VLS covers the following:

- vSphere, vRealize Operations, vSAN, NSX, SRM, Horizon, plus all other licences captured by the vCloud Usage Meter

- Existing licence bundles (Essentials Plus Kits, and so on) will be broken into their standard element licence parts

The following are NOT eligible under VLS:

- WSP1, Avi Networks, Velocloud, Carbon Black, Pivotal (until these appear on the product guide)

### Usage Meter

VLS requires the mandatory installation of the vCloud Usage Meter on the customer's environment.

- For customers on a Fixed Price package, the Usage Meter is required for audit purposes and to determine when an uncommitted provision would be a lower cost.

- For customers on a Fully Metered package, the Usage Meter captures all the VMware usage covered by the VLS agreement during the month and creates a report with the number of units consumed for each VMware bundle. This report of total units is used by UKCloud to calculate the customer's invoice for each month and enables the customer to be flexible on what they use in any given month, rather than be committed up front.

- Horizon reporting is manually provided at the end of each month by capturing the 'maximum concurrency' reported in the Horizon portal.

- If both Fixed Price and Fully Metered elements exist in the same environment, then it will be necessary to deploy two Usage Meters.

UKCloud will make the URL of the recommended Usage Meter available to the customer.

- UKCloud provides detailed instructions in the Knowledge Centre for the installation, configuration and reporting of the Usage Meter (see the list of articles at the end of this Service Scope).

- It is the customers responsibility to install and configure the Usage Meter prior to using the service as it is required for reporting and invoicing. The customer can utilise UKCloud Professional Services at an additional cost if assistance is required for this task.

As the Usage Meter is installed in an environment that UKCloud has no access to:

- It is the customer's responsibility to ensure that the Usage Meter is correctly configured and that it is collecting the daily data.

- Customers will need to monitor the Usage Meter to ensure that data is not missing or that the meter has not failed. If there is an issue, it is the responsibility of the customer to resolve this issue or raise a service request to seek assistance.

- It is the customer's responsibility to update the Usage Meter when required when a new version is provided by UKCloud. The customer will be advised as to when the update must be implemented and this may be a requirement for the reporting to be accurate.

- It is the customer's responsibility to add new products to the Usage Meter so that usage is collected.

## Usage reporting

The basis of VLS is that the customer is not committed to any specific VMware modules or usage, which converts their VMware usage from an upfront capital expenditure to a flexible monthly operational expenditure. This enables the customer to increase, decrease, test and remove environments and functionality as they require.

As a result, VLS depends on the vCloud Usage Meter to collect the actual monthly usage on an hourly basis. At the end of each month, the report will identify the exact number of units consumed against the set VMware bundle codes, which is then used to create a total points usage. This total number of points is used to calculate the customer's invoice for the month and it is therefore essential to ensure that the Usage Meter is correctly configured and that reports are sent to UKCloud.

With the current version of Usage Meter, Horizon maximum monthly concurrency must be manually reported to UKCloud, by email, to vls@ukcloud.com.

As part of the configuration of the Usage Meter, automatic reporting on the 1st of each month is emailed to vls@ukcloud.com. If, for any reason, this fails or cannot be configured, it will be the customers responsibility to manually send reports within five (5) working days of the last day of the reporting month (that is, 6 November 2021 for October 2021 usage). It is essential that this is completed so that the usage can be added to UKCloud's VMware usage and reported to VMware. A Knowledge Centre article explains how the usage must be reported.

- If the reports are not received within five working days, the customer's assigned Service Delivery Manager will contact them to request the reports.

- If the reports are not received within 10 working days, the customer's invoice will be estimated based on the previous two months' usage. Once the customer's usage is received or estimated, it will be sent to their Service Delivery Manager who will include this in the monthly updates and reports so that the customer can track their usage and costs. It is important to note that the customer must send Usage Meter reports to UKCloud as this is the basis of the contract and ensures accurate reporting and invoicing.

- If an estimation is used, UKCloud reserves the right to add any additional usage to future invoices once the missing reports are sent to ensure that the customer has been accurately invoiced for their actual usage and that UKCloud correctly reports all VMware usage to VMware.

> [!NOTE]
> UKCloud may audit a customer's Usage Meter and VMware environment to ensure that the correct licensing and reporting is in place and that the usage being reported accurately reflects the customer's actual usage.

## Support

VLS includes your VMware usage and support via our experienced VMware Customer Service infrastructure, which has been responsible for supporting our VMware-based public cloud for nine years. This support is available for all VLS issues or enquiries, and the support availability times are based on the severity of the support ticket.

For more information regarding support hours, SLA and escalation, see the [*How to raise and escalate support tickets with customer support*](https://docs.ukcloud.com/articles/portal/ptl-how-raise-escalate-service-request.html) article on the Knowledge Centre.

Note that there is no limit to the number of tickets that customers can raise.

Horizon support is limited to the functionality of the Horizon VDI solution and does not include ‘desktop end user’ support, image support or the additional support of applications being run through the Horizon VDI solution.

## Customer responsibilities

In addition to the responsibilities already mentioned in this Service Scope, customers are also responsible for:

- As UKCloud does not have any direct physical or network connection to the customer's environment, it is the customer's responsibility to ensure they are on supported versions of VMware software and that any third-party software is within the compatibility matrix. See the following VMware documents for assistance:

  - [VMware Lifecycle Product Matrix](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/support/product-lifecycle-matrix.pdf)

  - [VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php)

  - [Partner Verified and Supported Products (PSVP) Listing](https://www.vmware.com/resources/compatibility/vcl/partnersupport.php)

- The customer is responsible for maintaining their VMware environment, including any software and hardware upgrades, including third-party software that may affect the VMware environment.

- Customers may be asked on occasion to run authorised scripts on their VMware environment for the purpose of maintaining the environment or assisting in fixing reported issues.

- Customers will be advised on how to resolve an issue, and will be responsible for implementing that fix.

- To assist in the resolution of an issue, the customer may be required to share screens using Microsoft Teams or other collaboration application with our support team.

- All support issues must come directly to UKCloud support, and not directly to VMware as UKCloud are contracted to provide support. It is UKCloud's responsibility to escalate an issue to VMware directly if required.

## Pricing and billing

### Pricing packages 

There are two packages available for pricing.

Package       | Description | Use case | Payment options
--------------|-------------|----------|----------------
Fixed Price   | A fixed cost for a specific set of licences, irrespective of the actual usage made of the licences during the month. The price is set at the beginning of the year. | Customers who have a good idea of their usage for the next year and need certainty in their budgets.| Committed 
Fully Metered | Pay-as-you-go - only pay for what you use. Consumption is calculated and the customer invoiced based on actual usage at the end of each month. | Customers who need the ability to scale up and down as required. | Committed<br>Uncommitted 

### Payment options

There are two payment options available for VLS.

Payment option | Description | Benefits
---------------|-------------|---------
Committed       | An estimated annual consumption is calculated using the current usage metrics provided by the customer. This amount is then invoiced and paid up front. Each quarter, using the reported consumption figures, the Service Delivery Manager will report on the amount consumed to date and the remaining value left in the pre-payment. Monthly reports can be requested as the pre-payment approaches zero to ensure that the top amount is applied in good time. At any point, the customer can top up the amount in pre-payment with a new order or, if on the fully metered package, switch to uncommitted billing (pay-as-you-go), as detailed below (note this is not available for the Fixed Price package). | Most cost-effective option.<br>Additional discounting available.
Uncommitted    | Billing is based on actual consumption is billed calculated monthly from customer-supplied Usage Meter reports. Customers are charged on the next month's invoice (first working day of the month). | Flexible, pay-as-you-go.<br>No upfront costs.<br>Cease service at any time, only paying for usage up to that point.<br>Especially suited to customers who are reducing their on-premises VMware estate and migrating to cloud.

For the Committed payment option, whilst the estimated one year consumption calculation is accurate, this is dependent on there being no changes to the environment or usage. Therefore, an increase in usage would result in the committed value expiring prior to 12 months, or likewise a reduction in consumption would result in the committed value covering greater than 12 months. For this reason each committed order is valid for consumption over the next 24 months.

For both of the above options, where, for whatever reason, a usage report is unavailable within the prescribed time after the end of each month, UKCloud will report and invoice based on either the prior month's confirmed usage, or the initial estimated consumption as appropriate.

For full pricing information, see the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

Note that there is a discount level over £40,000 spent per month.

### Invoicing

For monthly invoicing, VLS requires the output of the Usage Meter, and as this is not available until the end of each month, the customer will be invoiced one month in arrears.

As an example, the customer must report October 2021 usage to UKCloud (<vls@ukcloud.com>) by the 6 November 2021 (within five working days). The customer will then be invoiced for this usage on the 30 November.

The customer will receive a monthly report from their Service Delivery Manager based on their submitted Usage Meter usages and total costs.

## Professional Services

This Service Scope sets out the responsibilities of UKCloud and the customer. Although the actions that the customer is responsible for are supported by UKCloud via Knowledge Centre articles and the support team, if a customer requires additional support with their on-premises estate or the installation and configuration of any element of VMware or the Usage Meter, we can arrange for our Professional Services team to assist.

These additional services are charged as per our [SFIA Rate Card](http://www.ukcloud.com/sfia).

If a customer requires the assistance of our Professional Services, they can either contact our support team or their Service Delivery Manager.

## Offboarding

If a customer ceases to use VLS, the following will apply:

- The customer must destroy the UKCloud-issued VMware licences and confirm via email to <info@ukcloud.com> that this has been completed

- UKCloud are no longer able to support the customer for any enquiries relating to their own on-premises VMware infrastructure

- Usage reports are no longer required to be sent at the end of each month

- The customer must ensure that they arrange for VMware support and licences through another partner or via VMware directly

## Supporting documents and resources

For more information about VLS, see the following:

- [*VMware Licence Service Service Definition*](vmw-sd-vls.md)

- [*How to install the vCloud Usage Meter for the VMware Licence Service*](vmw-how-vls-install-usage-meter.md)

- [*How to add products to the vCloud Usage Meter*](vmw-how-vls-add-products.md)

- [*How to report licence usage for the VMware Licence Service*](vmw-how-vls-report-usage.md)

- [*How to request a new VLS licence*](vmw-how-vls-request-licence.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
