---
title: Understanding PSN core services | UKCloud Ltd
description: Outlines the responsibilities between you and UKCloud with regards to Public Services Network (PSN) core services, such as DNS and email filtering. 
services: connectivity
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding PSN core services
toc_fullpath: Reference/conn-ref-psn-core-services.md
toc_mdlink: conn-ref-psn-core-services.md
---

# Understanding PSN core services

## Overview

This document outlines the responsibilities between you and UKCloud with regards to Public Services Network (PSN) core services, such as DNS and email filtering.

The intended audience is organisations who are either consuming or presenting a service over the PSN --- both PSN Assured and PSN Protected.

To be connected to the PSN, you must have a PSN compliance certificate. For more information, see <https://www.gov.uk/guidance/public-services-network-psn-compliance>.

In this article, we use PSN to represent both PSN Protected and PSN Assured unless otherwise specified.

## PSN core services

While you can procure PSN connectivity from multiple service providers, PSN core services are provided by Vodafone only. Traditionally, this was through the GSI Convergence Framework (GCF), whereby all core services were bundled into a single contract, regardless of whether you used them all.

Core services include:

- DNS

- Network Time Protocol (NTP)

- Email filtering and relay

- Gateways to other networks, both government and public

UKCloud has procured PSN connectivity on your behalf, giving you access to the PSN through a shared bandwidth model. We'll supply you with PSN IP addresses, enabling you to present and consume services over the PSN.

PSN connectivity **does not** grant you access to PSN core services. Access to these must be purchased as a separate contract with Vodafone, and is available through Government Digital Marketplace (G-Cloud) or via Direct Award through the Network Services Framework with Vodafone. If you are a commercial organisation then you can take a contract out directly with Vodafone for core services.

## Making changes to PSN core services

When you have a contract with Vodafone for PSN core services, you can add and change these to suit your service.

To add or change the core services, complete the appropriate forms and send them to Vodafone for approval to raise a change. Depending on the contract you have with Vodafone, you will need to raise these changes differently.

### GCF contract customers

If you have a GCF contract still in place with Vodafone, complete and submit the GCF change form:

<https://www.gov.uk/government/publications/gcf-customer-change-form>

### G-Cloud, direct award or commercial contract customers

If you have contracted through G-Cloud, have been directly awarded a contract or have a commercial contract with Vodafone, complete and submit the PSN change forms:

<https://www.gov.uk/government/publications/psn-dns-change-forms>

## Responsibilities

When completing the change forms, it's important that you complete the correct forms and that they are submitted by the correct people.

As per GDS guidance, requests for new PSN domain names must be accompanied by the PSN domain name authorisation form. This needs to be completed by the domain contract owner.

All requests for changes to the core services must come from the core service contract owner. If anyone else requests changes then they will be referred to the contract owner, which could cause a delay.

### Customer responsibility

When you're given PSN connectivity by UKCloud, we'll provide you with all the IP information you require to submit a PSN core service change request to Vodafone. You are responsible for the creation of domain names and additional information that may need to be submitted in the change form.

You are responsible for completing and submitting the PSN core service change forms.

### UKCloud's responsibility

UKCloud has no responsibility for facilitating a contract between Vodafone and our customers or partners for PSN core services. You must approach and contract with Vodafone directly.

UKCloud has no responsibility for completing or submitting any change forms for changes to PSN core services on behalf of customers or partners. We may help you complete the form but you are ultimately responsible for validating and submitting the forms. UKCloud does not accept responsibility for incorrect information supplied within the change forms.

### Complex responsibility

In certain circumstances, there may be complex aspects to responsibility:

- **Scenario 1** - If a non-government organisation has not got a direct contract with Vodafone, but is contracted through a managed service provider, then responsibilities may be shared between the organisation and MSP.

    Both parties may need to complete the form, however as per GDS guidance, it is ultimately the domain contract owner who owns the validation and submission of the forms. The domain contract should sit with the non-government organisation and not the managed service provider.

- **Scenario 2** - If a non-government organisation is currently hosted on a different hosting provider, and is thinking about moving to UKCloud, then they need to consider their current contracting relationship for core services with Vodafone.

    If the non-government organisation has no direct contract with Vodafone but is contracted through the hosting provider, then when they move to UKCloud they may need to take out a new contract directly with Vodafone for PSN core services.

    Another consideration is the domain contract ownership. As only the domain contract owner can validate and submit change requests, it's important to ensure that the domain is owned by the non-government organisation, and not the hosting provider. If the hosting provider is the current domain contract owner, then the non-government organisation should work with the hosting provider to change the ownership before moving services to UKCloud.

## New PSN DNS

A new PSN DNS is being developed that will be free at the point of use for PSN users, relieving them of the responsibility to contract with Vodafone for DNS services. This is currently not fully operational so should not yet be relied upon, however it may be worth signing up to have early access to it upon availability.

For more information visit <https://www.gov.uk/guidance/introducing-the-uk-public-sector-dns>

## More information

For more information about PSN, see the [*Public Services Network (PSN) FAQs*](conn-faq-psn.md).

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.