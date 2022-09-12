---
title: VMware Licence Service FAQs
description: Frequently asked questions for the VMware Licence Service
services: vmware
author: cjames
reviewer: shighmoor
lastreviewed: 18/03/2022
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware Licence Service FAQs
toc_fullpath: FAQs/vls-faq.md
toc_mdlink: vls-faq.md
---

# VMware Licence Service FAQs

## Overview

This article provides answers to common questions asked about the VMware Licence Service.

If you can't find the answer to your question here, you can also refer to:

- The [Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-226-vmware-licence-service-service-definition-13.0.pdf) for a general service overview

- The [*Service Scope*](vls-sco.md) for more in-depth product details, including what functionality the service provides, and customer and UKCloud responsibilities

## General service information

### What is VMware Licence Service?

With VMware Licence Service (VLS) you can exchange the ongoing subscription and support (SNS) fixed cost of your existing perpetual VMware licenses with a VMware Cloud Provider Programme (VCPP) consumption-based service provided by UKCloud.

### When is it a good time to switch to VLS?

You might want to consider VLS when you reach the expiry date of your existing support service, or when you identify a requirement for new licences.

### How do I know if my environment is suitable for VLS?

VLS will suit you if you're:

- Looking to consider alternatives to the standard fixed term, fixed scope, fixed costs of traditional support agreements from VMware.

- In the midst of a cloud migration and are seeing a slow decrease in your on-premises requirements and therefore seek a flexible licensing model rather than a more traditional  3-year Enterprise License Agreement (ELA) or fixed support contract.

- Wanting to migrate to a full rental/consumption-based model rather than fixed-cost (that is, CAPEX-centric) model.

- Planning to adopt additional VMware products by expanding into the cloud rather than installing these additional VMware products on-premises.

- Wanting to test and try out new VMware options on a flexible basis without long-term commitment.

### What are the benefits of VLS?

Benefits of VLS include:

- VMware costs under VLS are flexible and based upon actual provisioned workloads and additional commissioned functionality. It's not tied to licence ownership or CPU point.

- VLS is entirely flexible, so can scale up and down, matching your requirements. Any under-consumption rolls into funding the next 12 months after the contract term.

- You can change both licence type and quantity  with no penalty to meet requirements.

- An easier and more cost-effective adoption of new VMware technologies. For example, you can avoid the upfront CAPEX and on-premises implementation challenges and costs normally associated with products such as NSX, vSAN, vCloud Foundation or Horizon.

- You can adopt new VMware products as soon as they arrive on the VCPP product usage guide.  

- Costs are likely to be competitive against normal support (SNS) costs and are always competitive against the upfront purchase and support of new perpetual requirements.

- VLS is typically competitive against VMware subscription models that remain scoped against fixed quantities and fixed terms, as opposed to a genuine consumption-based model.

- VLS is a fully supported VMware service delivered by UKCloud, a specialist VMware cloud provider headquartered in the UK and dedicated to serving public sector organisations. UKCloud has:

  - A UK-based service desk, manned 24/7 by vetted and security cleared experts

  - Award winning customer service, with industry leading NPS (customer satisfaction)

  - Service objectives for support that exceed VMware's

  - A dedicated Service Delivery Manager (SDM) for every UKCloud customer

- Migration to multi-cloud (that is, a mix of true public cloud and secure private cloud spanning on-premises, Crown Campus and hyperscaler) becomes cheaper, faster and safer with UKCloud's portfolio of Cloud Services, Professional Services and Managed Services.

- You can utilise both traditional SNS and VLS in the same environment such that existing support arrangements can continue with new VLS licences layered on top. For example, if you have residual licence support, you can layer VLS NSX licences on top of your existing perpetual installed base.

### Why would I use VLS instead of an Enterprise License Agreement?

VLS offers a flexible licensing model rather than a more traditional three-year Enterprise License Agreement (ELA) or fixed support contract.

An ELA is an agreement for a fixed quantity and type of licence, for a fixed period of time for fixed cost. By contrast, under VLS, you can change the licence type and quantity almost on a month-by-month basis. And if this results in any underspend, then you can use this value for consumption in the 12 months following the initial VLS term.

### What do UKCloud do as part of the service provided under VLS?

- Onboarding

  - UKCloud will support you with the installation and configuration of the VMware Usage Meter.

  - UKCloud will provide VLS licence keys across all applicable VMware products within the environment.

- Support service

  - UKCloud becomes the authorised service desk for VMware support (you no longer contact VMware directly).

  - UKCloud provides first- and second-line support to the VMware products within the environment covered.

  - UKCloud will manage escalations to VMware third-line and engineering teams as appropriate.

- Optimisation service (optional)

  - VLS is priced based on actual consumption. There are many operational initiatives that you can take to reduce monthly VLS costs, such as good housekeeping and rightsizing vRAM.

  - UKCloud provides a service to analyse environments and advise you on steps that you can take to reduce costs, whilst maintaining existing VMware performance.

- Monitoring and management service (optional)

  - UKCloud can remotely monitor VMware products within the environment and alert you of any incidents if appropriate.

  - UKCloud provides a high level of engagement appropriate with the level of managed service (for example, designated Service Delivery Manager).

- Transition services (optional)

  - UKCloud can provide specialist Professional Services to help you assess your environment, create an actionable cloud strategy and migrate workloads to multi-cloud.

  - UKCloud can provide expert services to help you adopt cloud native approaches such as DevOps, automation and containerisation.

- Out of scope

  - UKCloud is not responsible for patching, capacity management, performance management or supporting non-VMware products within the environment (for example, Storage Array and Physical Network).

## Licensing

### Can I co-term licences?

There are no problems co-terming licences, and we can complete a calculation to factor in unused VMware SNS.

### What licence flexibility does VLS offer?

VLS does not charge for licences provided and VLS pre-payment is eligible across all licences. This provides:

- Complete flexibility to start and stop licences at any time

- Complete flexibility to change licence types and quantities at any time

- The ability to run certain licences for short periods at regular intervals and only incur costs when capabilities are live

- Flexibility to move from Standard to Advanced/Enterprise versions and back again with no upfront costs, just increment running costs

### What automatic upgrades and included licences are associated with VLS?

VLS doesn't include several VMware licences that have been bundled in past years and only offers vSphere at Enterprise Plus.

Therefore, the following will apply:

- All VLS deployments will come (at no additional cost) with NSX SP Base (the base level of VMware's powerful Network and Security solution)

- All VLS deployments will come (at no additional cost) with vRealize Log insight (intelligent log management for infrastructure and applications)

- All vSphere Standard and Enterprise licences are replaced with vSphere Enterprise Plus

- All bundled Essentials and Acceleration Kits will be replaced by the full version of vSphere and vCenter

### Which versions of vSphere does VLS support?

UKCloud can only provide VLS on vSphere software levels that are fully supported by VMware. Currently supported vSphere software levels are:

- 6.5, 6.7 (these levels will end support in October 2022)

- 7.0

You can receive support for vSphere licences that are out of VMware general support under the UKCloud VMware Extended Support (VES) programme. For more information, see the VMware Extended Support [Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-256-vmware-extended-support-service-definition-13.0-1.pdf) and [*Service Scope*](vls-sco-extended-vmw-support.md).

## Reporting and usage

### How do I report my usage?

As part of the onboarding process, UKCloud guides customers on how to deploy the VMware Usage Meter. This is a VMware product that is used globally by VMware customers to record and report consumption. Usage Meter sits alongside the VMware vCenter and polls usage data out of vCenter. Once you've deployed Usage Meter and correctly set it up to reference the VMware licences that are under the VLS service, then reporting is achieved automatically.

### Can I use VLS for multiple locations?

You can use VLS across multiple locations and consumption is calculated on the overall usage rather than any peaks in a single location.

VLS is available for multi-national deployments. Check with your UKCloud Client Director for country availability.

VLS support for international service is delivered in English and follows UK support hours.

### Can I swap my usage or services?

You can add new products at any time if you have sufficient keys already available. If you require extra keys, you can request these from UKCloud by opening a Service Request. New licence keys typically take four working days to be delivered. You can terminate use of products at any time, and this will be immediately reflected in the reports created by Usage Meter.

Whenever you add new licences, you must add them to the Usage Meter to maintain accurate reporting. For more information about how to do this, see [*How to add products to the vCloud Usage Meter for the VMware Licence Service*](vls-how-vls-add-products-4.md).

### Can I upgrade the software level of my products, for example vSphere 6.7 to vSphere 7.0?

VMware licence keys are associated with a specific software version of the product. When you upgrade to a different version (not including patches), you'll need a new licence key. If you're planning to upgrade any VLS-licensed VMware products, you must request a new upgraded licence to cover the new version before performing the upgrade. For more information, see [*How to request a new VLS licence*](vls-how-vls-request-licence.md).

### Can I upgrade or downgrade my products, for example from Advanced to Enterprise version?

There's no direct cost to upgrading or downgrading products, however, VMware licence keys are associated with a specific version of the product. If you want to change to a different version, you'll need a new licence key. If you're planning to upgrade any VLS-licensed VMware products, you must request a new upgraded licence to cover the new version before performing the upgrade. For more information, see [*How to request a new VLS licence*](vls-how-vls-request-licence.md).

## Billing and legal

### How is VLS priced?

There are three main pricing models for VLS, which depend on the licence types:

- Core vSphere is calculated primarily on the number of VMs and the average vRAM used

- Additional core products are charged with an incremental cost for each extra product utilised, such as NSX, vROps or SRM

- Horizon VDI is calculated on maximum monthly concurrency

- vSAN is costed on actual used storage

### How do I pay for VLS?

UKCloud normally charges for VLS through one-, two-, or three-year (term) prepayment. In each case, the estimated consumption over the term chosen is valid for consumption for the 12 months following the end of the original term.

The term consumption is calculated using the current usage metrics that you provide. This amount is then invoiced and paid up front. Each month (or at your requested frequency), using the reported consumption figures, the Service Delivery Manager reports on the amount consumed to date and the remaining value left in the pre-payment. At any point, you can top up the amount in your pre-payment with a new order if that best suits your annual budgeting cycle. The SDM reviews the consumption reports monthly as the pre-payment approaches zero to ensure that the top-up amount is applied in good time. Whilst UKCloud can provide a term shorter than 12 months, these do not benefit from the same discounts that 12 months or more receive.

### Is there a minimum commitment?

Whilst there's no official minimum value to VLS orders, it's unlikely that you'll see a significant cost difference between VLS and standard support if you have an annual support charge less than £20k per annum.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
