---
title: UKCloud Cross Domain Security Zone application process | UKCloud Ltd
description: Outlines the application process for the UKCloud Cross Domain Security Zone
services: cdsz
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud Cross Domain Security Zone application process
toc_fullpath: Reference/cdsz-application-process.md
toc_mdlink: cdsz-application-process.md
---

# UKCloud Cross Domain Security Zone application process

## Overview

The UKCloud Cross Domain Security Zone (CDSZ) enables you to securely transfer data between our Assured OFFICIAL and Elevated OFFICIAL security domains using NCSC-approved cross-domain security patterns. Using the CDSZ you can create applications that are accessible to citizens, but ensure data safety.

This document provides an overview of the UKCloud process to be used by customers wanting to purchase CDSZ services (UKCloud Guard, Walled Garden and Secure Remote Access).

There are two approaches to applying for CDSZ services:

- A light touch design review/self-assessment route for customers with simple implementations, or those who are experienced at designing secure solutions. This enables customers who are comfortable with the risk associated with their data to choose which controls and evidence they feel is appropriate to self-certify their cross domain solution.

- An assurance wrap style approach with UKCloud’s experienced professionals for more complex implementations or those customers who would like support and guidance when developing their solutions. This enables customers who require more support to submit their proposed solution with confidence that it effectively mitigates against risk.

In this document, the *customer* is the UKCloud customer, who may or may not be the ultimate end user of the application. The customer will be responsible for completing any compliance process with the end user, including obtaining sign-off from the relevant data owner. The data owner should be a permanent employee at the data owning organisation with evidence of data ownership, for example an IT Security Officer (ITSO), Senior Information Risk Owner (SIRO) or accreditor.

The data owner can choose to sign off for a single CDSZ implementation or setup a *Tell Us Once* agreement that signs off all future CDSZ implementations for the customer on behalf of the data owning organisation. UKCloud will maintain a list of all Tell Us Once agreements and any subsequent CDSZ applications by the customer on behalf of the data owner should reference this agreement.

## Process overview

![Overview of the key stages](images/cdsz-process-overview.png)

The following table provides more detail about each stage:

Stage | Name | Description
----- | ---- | -----------
1 | Initial Contact | Customer contacts UKCloud to register interest in CDSZ service. This can be through My Calls or direct contact with a Sales representative, Technical Account Manager (TAM) or Cloud Architect.
2a | Self-Assessment | Customer creates document pack to illustrate the solution design and provide evidence that all necessary sign-offs and compliance have been obtained.
2b | Assurance Wrap Review | Customer creates document pack with assistance from the UKCloud compliance team and Cloud Architect.
3 | Design Review | Customer presents the technical solution to Cloud Architect for advice and feedback.
4 | Application Submission | Customer raises a Service Request and submits document pack.
5 | Service Implementation | UKCloud provisions service and customer implements their solution.
6 | On-Going Compliance    | UKCloud annually prompts customer to review existing document pack and provide updated information for any changes to design or approvals.

## Required documents

When you apply for a CDSZ service, you must provide the following documents to show that you have identified and mitigated for any risks:

- Details of your proposed implementation that covers the intended design in the CDSZ, the Assured and Elevated VDCs you are connecting to and data flows.

- Evidence (for example, email or signed document) of acceptance of risk from the data owning organisation. This should also indicate if this acceptance is a Tell Us Once agreement that will also apply to future CDSZ implementations by the customer on behalf of the data owner.

    > [!NOTE]
    > If a Tell Us Once agreement is already in place between the customer and the data owner, this evidence is not required, but the customer should indicate that such an agreement is in place so that UKCloud can confirm against our list of trusted partners for the data owner.

- An explicit statement, as part of the Service Request, that the solution has been reviewed by a named UKCloud Cloud Architect or that you do not require a review. The named Cloud Architect must provide review notes as evidence that the review took place. See [Stage 3: Design review](#stage-3-design-review).

- If you're connecting to a PSN Protected enabled VDC, proof of PSN compliance (a copy of PSN CoCo or PSN CoP).

## Stage 1: Initial contact

If you want to use the CDSZ, you can initiate the application process in one of two ways:

- Raise a Service Request through My Calls, specifying the relevant CDSZ product (UKCloud Guard, Walled Garden or Secure Remote Access). One of our Sales representatives, TAMs, or Cloud Architects will arrange a call to discuss your requirements and then close the Service Request.

- Contact one of our Sales representatives, TAMs, or Cloud Architects directly to arrange a call to discuss your requirements.

During your initial conversation, our Cloud Architect will discuss your proposed implementation and help determine the best approach for your situation:

- If your implementation is simple, or you're confident with designing a solution that mitigates the risk associated with your data and choosing the controls and evidence appropriate to that solution, you can follow our self-assessment option.

- If your implementation is complex, or you'd prefer some guidance to identify risks and how to mitigate against them, we can provide an assurance wrap style approach with our experienced professionals for more complex implementations.

The following table lists some examples of simple versus complex designs:

Criteria | Simple | Complex
---------|--------|--------
Business case | Common use cases, aligned with Government Digital Strategy. | Use cases where no precedent has been established.<br>Multi-tenant solutions.
Technical architecture | Standard architecture compliant with NCSC design patterns or UKCloud published blueprints. | Deviations from established models or blueprints.<br>Non-fully virtualised solutions, for example with elements of hosting within our Cloud Enablement service.
Risk ownership | Clear accreditation by a single recognised SIRO within a UK public sector organisation. | Shared accreditation.<br>Accreditation by private sector authority.

## Stage 2a: Self-assessment

If you choose to self-assess your implementation, you must gather all the documents listed in Required Documents.

With self-assessment, you can still request a design review from one of our Cloud Architects. See [Stage 3: Design review](#stage-3-design-review).

## Stage 2b: Assurance wrap review

If you choose an assurance wrap review for your proposed implementation, the UKCloud compliance team and Cloud Architects will work with you to help identify risks to your solution. This includes:

- Review of design and data flow with a Cloud Architect (see [Stage 3: Design review](#stage-3-design-review))

- Advice and guidance for how to design secure solutions with appropriate monitoring and logging

- Conversation between UKCloud SIRO and customer SIRO or nominated representative covering risk management and mitigation, with further workshops if required

- Review of customer-defined ITHC scope and summary with a Cloud Architect

> [!NOTE]
> UKCloud takes no ownership or responsibility for the implementation or running of your proposed solution or ownership for any risks to the data.

> [!NOTE]
> UKCloud reserves the right to charge SFIA day rate charges for time spent on customer projects if you disengage with the assurance wrap review process before completion.

At the end of the review period, you will have generated all the necessary documents to apply for your CDSZ service (as listed in [Required documents](#required-documents)).

## Stage 3: Design review

The design review is facilitated by a Cloud Architect and will gather a clearer understanding of how the proposed design aligns with recognised good security practice.

- Present your technical solution to a Cloud Architect. You can do this via teleconference, Webex or face-to-face as appropriate.

- The Cloud Architect will be looking to see evidence of effective mitigation for common risks (for example, technical controls like firewall, anti-malware and protective monitoring).

- The Cloud Architect will provide advice and guidance on aspects of the solution that are likely to raise concerns.

- You may revise your design to incorporate feedback from the design review.

> [!NOTE]
> If you are self-assessing your proposed implementation, this stage is optional but you must provide a statement in your document pack indicating that you do not require a review.

## Stage 4: Application submission

Raise a Service Request specifying the relevant CDSZ product (UKCloud Guard, Walled Garden or Secure Remote Access) and attach all the [required documents](#required-documents), as well as any review notes from the assurance wrap review. This request will then be assigned to a UKCloud representative to verify that all required information has been provided.

If any documents are missing or empty, a UKCloud representative will contact you to ensure that all required documents are provided before the service is provisioned.

## Stage 5: Service implementation

When the assigned UKCloud representative has determined that all the appropriate information has been provided, the requested CDSZ service will be provisioned within five working days.

When your service has been provisioned, you can implement your proposed solution.

## Stage 6: On-going compliance

On an annual basis, UKCloud requires evidence of on-going compliance. You will be contacted by your Technical Account Manager (TAM) to review the existing documents and inform us if any of the details or approvals have changed.

If you're connecting to a PSN Protected enabled VDC, proof of PSN compliance (a copy of PSN CoCo or PSN CoP) must be provided on a yearly basis.

Once the relevant PSN certificate (if required) is provided, and provided there are no changes the original design, your CDSZ service will continue without interruption.  

If, after examination of the existing documents, you identify that there have been changes, for example if the design has changed from the initial solution or there is a different data owner approver, it is your responsibility to submit a revised evidence pack within 15 days. A UKCloud representative will contact you to discuss your changes.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
