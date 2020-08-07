---
title: VMware Licence Service Service Scope
description: Outlines important details regarding the VMware Licence Service (VLS)
services: vmware
author: shall
reviewer:
lastreviewed: 07/08/2020

toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware Licence Service Service Scope
toc_fullpath: Service Scope/vmw-sco-vls.md
toc_mdlink: vmw-sco-vls.md
---

# VMware Licence Service Service Scope

## About this document

This article describes the boundaries of the UKCloud VMware Licence Service (VLS), along with the division of responsibilities between UKCloud and the customer, to facilitate the provisioning and ongoing use of the service.

## About the VMware Licence Service

The VMware Licence Service (VLS) is an innovative licensing model designed with VMware to reduce cost and deliver licence flexibility for a customer's existing VMware estate. This flexibility makes it easier to modernise existing VMware environments as the customer's organisation transforms IT services or adopts a multi-cloud approach.

Whether purchasing new licences or providing support and maintenance on an existing VMware estate, VLS enables customers to exchange fixed upfront costs and long-term commitments with a VMware consumption-based licence provided via UKCloud. With this new operations model, the functionality of the VMware licences is identical, only the commercial, cost and commitment term is changed.

## Application process

Customers wanting to discuss the suitability of the service and gain a comparative cost estimate for their VMware environment under the VLS programme should contact us at <vls@ukcloud.com> or contact your Account Director. To provide an indicative quote, we will need:

- The customer's VMware EA number

- The total number of active virtual machines and average vRAM allocation

We will then work with the customer to find the ideal solution to suit their requirements.

Once the quote is supplied and the customer wants to place an order, they must provide a purchase order, with a call off contract if transacted within the G-Cloud framework. Once received, the order will be confirmed by our sales operations team.

When we receive an order from the customer, we will create account and login details and send them to the customer.

## Service provisioning

To implement the VLS service, there are some simple steps that need to be completed both by UKCloud and the customer. The details that follow assume that the customer has a good understanding of VMware and can carry out the required actions. Note that, if required, UKCloud can provide assistance in these actions at an additional charge, based on our SFIA rate card for Professional Services.

### UKCloud Portal access

All UKCloud customers have access to the UKCloud Portal, where they can access the My Calls ticketing system to raise service requests. We also use the UKCloud Portal to track and log all customer enquiries, requests, support issues, communications, and information.

### Knowledge Centre

To assist customers in using our services and all functionality, the UKCloud Knowledge Centre is continually maintained to provide the latest information. Key articles for VLS are listed at the end of this Service Scope.

### Onsite audit

During the initial provisioning of the customer onto VLS, UKCloud will need to conduct a high level audit of the customer's VMware environment, and other connected software, to ensure that there will not be any conflicts, incompatibility or potential support issues.

### License keys

To activate the service, UKCloud will make the required licence keys available to the customer. These need to replace the existing licence keys within the customer's VMware environment. The VMware requirements will have been identified in the initial engagement, however, to ensure the right keys are provided, UKCloud Support will engage with the customer to identify the VMware modules that are to be used including the exact version.

- UKCloud will request the correct keys, and will make them available to the customer

- It is the customers responsibility to replace existing keys with the new UKCloud versions

- The customer may be required to update or add licence keys for additional application usage

### Licence eligibility

VLS covers the following:

- vSphere, vRealize Operations, vSAN, NSX, SRM, plus all other licences captured by the Usage Meter

- Existing licence bundles (Essentials Plus Kits, and so on) will be broken into their standard element licence parts

The following are NOT eligible under VLS:

- WSP1, Avi Networks, Velocloud, Carbon Black, Pivotal (until these appear on the product guide)

### Usage Meter

The VLS requires the installation of the vCloud Usage Meter on the customer's environment. This Usage Meter captures all of the VMware usage covered by the VLS agreement during the month, and creates a report with the number of units consumed for each VMware bundle. This report with total units is used by UKCloud to calculate the customer's invoice for each month, and enables the customer to be flexible on what they use in any given month, rather than be committed up front.

- UKCloud will make the recommended vCloud Usage Meter available to the customer.

- UKCloud will provide detailed instructions in the Knowledge Centre for the installation, configuration and reporting of the Usage Meter.

- It is the customers responsibility to install and configure the Usage Meter prior to using the service as it is required for reporting and invoicing. The customer can utilise UKCloud Professional Services at an additional cost if assistance is required for this task.

- As the Usage Meter is installed in an environment that UKCloud has no access to:

  - It is the customers responsibility to ensure that the Usage Meter is correctly configured, and that it is collecting the daily data

  - Customers will need to monitor the Usage Meter to ensure that data is not missing or that the meter has failed. If there is an issue, it is the responsibility of the customer to resolve this issue, or raise a Service request to seek assistance.

  - It is the customers responsibility to update the Usage Meter when required which will be provided by UKCloud. The customer will be advised as to when the update must be implemented and may be a requirement for the reporting to be accurate.

## Usage reporting

The basis of VLS is that the customer is not committed to any specific VMware modules or usage, which converts their VMware usage from an upfront capital expenditure to a flexible monthly operational expenditure. This enables the customer to increase, decrease, test and remove environments and functionality as they require.

As a result, VLS depends on the vCloud Usage Meter to collect the actual monthly usage on an hourly basis. At the end of each month, the report will identify the exact number of units consumed against the set VMware bundle codes.

It is the customer's responsibility to send the output reports to <vls@ukcloud.com> within 5 working days of the last day of the reporting month (that is, 7 August 2020 for July 2020 usage). It is essential that this is completed so that the usage can be added to UKCloud's VMware usage and reported to VMware.

- If the reports are not received within 5 working days, the customer's assigned Service Delivery Manager will contact them to request the reports

- If the reports are not received within 10 working days, the customer's invoice will be estimated based on the previous 2 months' usage. 
Once the customer's usage is received or estimated, it will be sent to their Service Delivery Manager who will include this in the monthly updates and reports so that the customer can track their usage and costs.

## Support

VLS includes your VMware usage and support via our experienced VMware Customer Service infrastructure, which has been responsible for supporting our VMware based public cloud for 9 years. This support is available for all VLS issues or enquiries, and the support availability times are based on the severity of the support ticket.

For more information regarding support hours, SLA and escalation, see the [*How to raise and escalate support tickets with customer support*](https://docs.ukcloud.com/articles/portal/ptl-how-raise-escalate-service-request.html) article on the Knowledge Centre.

Note that there is no limit to the number of tickets that customers can raise.

## Customer responsibilities

In addition to the responsibilities already mentioned in this Service Scope, customers are also responsible for:

- As UKCloud does not have any direct physical or network connection to the customers environment, it is the customer's responsibility to ensure they are on supported versions of VMware software and that any 3rd party software is within the compatibility matrix. See the following VMware documents for assistance:

  - [VMWare Lifecycle Product Matrix](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/support/product-lifecycle-matrix.pdf)

  - [VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php)

  - [Partner Verified and Supported Products (PSVP) Listing](https://www.vmware.com/resources/compatibility/vcl/partnersupport.php)

- The customer is responsible to maintaining their VMware environment including any software and hardware upgrades, including 3rd party software that may affect the VMware environment

- Customers may be asked on occasion to run authorised scripts on their VMware environment for the purpose of maintaining the environment, or assisting in fixing reported issues

- Customers will be advised as to resolve an issue, and will be responsible for implementing that fix

- To assist in the resolution of an issue, the customer may be required to share screens using Microsoft Teams or other collaboration application with our support team.

- All support issues must come directly to UKCloud support, and not directly to VMware as UKCloud are contracted to provide support. It is UKCloud's responsibility to escalate an issue to VMware directly if required.

## Billing

VLS requires the output of the vCloud Usage Meter, and as this is not available until the end of each month, the customer will be billed one month in arrears.

As an example, the customer must report July 2020 usage to UKCloud (<vls@ukcloud.com>) by the 7 August 2020 (within 5 working days). The customer will then be invoiced for this usage on the 2 September (first working day of September).

The customer will receive a monthly report based on their submitted vCloud Usage Meter usages and total costs.

### Cost options

VLS is priced per point consumed and is charged on either a monthly "uncommited" basis or upfront "committed" basis. Note that there is a discount level over 100,000 points per month.

<table>
  <tr>
    <th></th>
    <th colspan="2">Public Sector (Non-Academia)</th>
    <th colspan="2">Academia</th>
  </tr>
  <tr>
    <td></td>
    <td>Cost per committed point</td>
    <td>Cost per uncommitted point</td>
    <td>Cost per committed point</td>
    <td>Cost per uncommitted point</td>
  </tr>
  <tr>
    <td><strong>Up to 100,000 points per month</strong></td>
    <td>£0.60</td>
    <td>£0.66</td>
    <td>£0.44</td>
    <td>£0.48</td>
  </tr>
  <tr>
    <td><strong>100,000+ points per month
    <td>£0.58</td>
    <td>£0.64</td>
    <td>£0.43</td>
    <td>£0.47</td>
  </tr>
</table>

- **Committed VLS billing.** This is the most cost-effective method of purchasing points as it offers additional discounting. The customer will commit to an amount based on estimated usage and this will be invoiced and paid up front. The customer then has 24 months in which to consume this usage which will be drawn down against the initial commitment. Each month, once the customer has reported their usage, their Service Delivery Manager will report on the cost for that month and the points used to ensure that the customer is aware of the amount of points used and what is remaining. At any point, the customer can top up the amount of committed points with either an additional committed order or using flexible monthly billing on a pay as you go basis as detailed below.

- **Uncommitted VLS billing.** To avoid upfront costs, the customer can opt for flexible monthly pay as you go billing. Once UKCloud receives the monthly Usage Meter report, this will be calculated and charged on the next month's invoice (first working day of the month). Although this option does not offer a discounted rate, it enables the customer to be flexible on their usage and may suit customers that are slowing reducing their on-premises VMware estate and migrating to cloud as they have no committed spend. They can therefore cease to use the service at any time, only paying for their usage up to that point.

## Professional Services

This Service Scope sets out the responsibilities of UKCloud and the customer. Although the actions that the customer is responsible for are supported by UKCloud via Knowledge Centre articles and the support team, if a customer requires additional support with their on-premises estate or the installation and configuration of any element of VMware or the Usage Meter, we can arrange for our Professional Services team to assist.

These additional services are charged as per our SFIA rate card:

<table>
  <tr>
    <th></th>
    <th>Strategy & architecture</th>
    <th>Business change</th>
    <th>Solution development & implementation</th>
    <th>Service management</th>
    <th>Procurement & management support</th>
    <th>Client interface</th>
  <tr>
  <tr>
    <td><strong>1. Follow</strong></td>
    <td>£350</td>
    <td>£350</td>
    <td>£350</td>
    <td>£350</td>
    <td>£350</td>
    <td>£350</td>
  </tr>
  <tr>
    <td><strong>2. Assist</strong></td>
    <td>£500</td>
    <td>£500</td>
    <td>£500</td>
    <td>£500</td>
    <td>£500</td>
    <td>£500</td>
  </tr>
  <tr>
    <td></strong> 3. Apply</strong></td>
    <td>£600</td>
    <td>£600</td>
    <td>£600</td>
    <td>£600</td>
    <td>£600</td>
    <td>£600</td>
  </tr>
  <tr>
    <td><strong>4. Enable</strong></td>
    <td>£750</td>
    <td>£750</td>
    <td>£750</td>
    <td>£750</td>
    <td>£750</td>
    <td>£750</td>
  </tr>
  <tr>
    <td><strong>5. Ensure/Advise</strong></td>
    <td>£900</td>
    <td>£900</td>
    <td>£900</td>
    <td>£900</td>
    <td>£900</td>
    <td>£900</td>
  </tr>
  <tr>
    <td><strong>6. Initiate/Influence</strong></td>
    <td>£1,000</td>
    <td>£1,000</td>
    <td>£1,000</td>
    <td>£1,000</td>
    <td>£1,000</td>
    <td>£1,000</td>
  </tr>
  <tr>
    <td><strong>Set Strategy/Inspire</strong></td>
    <td>£1,200</td>
    <td>£1,200</td>
    <td>£1,200</td>
    <td>£1,200</td>
    <td>£1,200</td>
    <td>£1,200</td>
  </tr>
</table>

If a customer requires the assistance of our Professional Services, they can either contact our support team or their Service Delivery Manager.

## Supporting documents and resources

For more information about VLS, see the following:

- [*VMware Licence Service Service Definition*](vmw-sd-vls.md)

- [*How to install the vCloud Usage Meter for the VMware Licence Service*](vmw-how-vls-install-usage-meter.md)

- [*How to add products to the vCloud Usage Meter*](vmw-how-vls-add-products.md)

- [*How to report licence usage for the VMware Licence Service*](vmw-how-vls-report-usage.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
