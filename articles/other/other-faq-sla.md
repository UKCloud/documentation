---
title: Service Level Agreement FAQs
description: Frequently asked questions for Service Level Agreements
services: other
author: mwarner
reviewer: shighmoor
lastreviewed: 07/02/2022
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Level Agreement FAQs
toc_fullpath: FAQs/other-faq-sla.md
toc_mdlink: other-faq-sla.md
---

# Service Level Agreement FAQs

## Service availability

### How does UKCloud determine if a service is available or not?

UKCloud's approach to measuring service availability is to consider all the various elements and components (such as internal networks, the UKCloud Portal and the service technology stack) that can ultimately affect the availability of a service. These individual components are monitored and if one fails, the service may be deemed unavailable. We believe this approach gives a more representative and pragmatic view of service availability. For more information about our services and the specific monitors for availability, see the [*SLA definition*](other-ref-sla-definition.md).

### How does UKCloud calculate the availability of its services?

UKCloud calculates availability by monitoring specific components and then using the following formula to determine the percentage that a service was available for:

P = A-B x 100 A, where: P= Percentage availability A= Total number of minutes in month B = Total number of whole minutes that service is unavailable

### At what point is a service deemed unavailable?

UKCloud deem a service to be unavailable if after five consecutive negative responses, normal service has not resumed. At this point, the downtime will start to be recorded.

## Monitoring

### How often do you monitor your services to determine availability?

UKCloud polls our services every minute using a variety of methods that range from a basic ping test to a synthetic transaction which replicates a user's journey. The method used will depend on the specific component or service being monitored.

### Do you monitor your data centre networks and components?

UKCloud monitors the data centre network between the physical hypervisor hosts or storage platform and the outside interface connecting the data centre network to any third-party networks (for example, PSN, Janet, internet, private circuits, and colocation environments).

## Service Credits

### How do I request a Service Credit?

To request a Service Credit, you must raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal within thirty (30) calendar days of the suspected SLA event. UKCloud will review the request and issue a Service Credit if applicable either during that billing cycle or the subsequent one if the claim is made just after an invoice has been paid.

### Are there any reasons why you wouldn't pay a Service Credit if it was due?

You will not be eligible to receive a Service Credit if your account has any undisputed payments outstanding beyond their due date or you are in violation of UKCloud's Terms and Conditions including the UKCloud  System Interconnect Security Policy (SISP).

## Exclusions

### Are any periods of downtime excluded from the availability SLA?

UKCloud excludes any time needed to complete Planned or Emergency Maintenance from any time-based calculations related to service availability. In these events, you'll be notified accordingly as described in our [*Terms and Conditions*](other-ref-terms-and-conditions.md). Other exceptions are also outlined in the Terms and Conditions.

### Can I use my own information to report downtime of a service?

No, UKCloud's monitoring tools, data and records (including support tickets) will be the sole source of information used to track and validate service availability.

### Does UKCloud have an SLA that covers customer-owned hardware or appliances such as routers?

If you want to co-locate additional devices in UKCloud's data centre(s), this falls outside of UKCloud's responsibility and control, and therefore the devices will not be covered by a UKCloud SLA. If you are co-locating devices in our data centre(s), you should be aware that doing so could introduce single points of failure.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
