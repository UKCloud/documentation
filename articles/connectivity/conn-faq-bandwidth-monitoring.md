---
title: Bandwidth monitoring FAQs | UKCloud Ltd
description: Frequently asked questions for bandwidth monitoring
services: connectivity
author: Matt Warner
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Bandwidth monitoring FAQs
toc_fullpath: FAQs/conn-faq-bandwidth-monitoring.md
toc_mdlink: conn-faq-bandwidth-monitoring.md
---

# Bandwidth monitoring FAQs

## What bandwidth monitoring is available?

You can currently find out how much internet bandwidth you are consuming either via the UKCloud Portal or [Portal API](../portal/ptl-ref-portal-api.md).

## Where can I view the internet usage reporting on the UKCloud Portal?

Within the My VMs section on the UKCloud Portal, select the vOrg you are interested in. Then, click on the "My VMs" tab and then select the "Bandwidth Monitoring" option. You can then select the edge gateway you wish to retrieve usage metrics for. Alternatively, the Bandwidth Monitoring section can be accessed via the Compute dropdown and by selecting the appropriate vOrg.

## What information does the report provide?

You will have visibility of usage per edge gateway, where you have the options for Hourly Average/Peak, Interval Average/Peak, Hourly Total Usage and Interval Total Usage.

## I clicked on the edge gateway and I can't see any usage information?

If your edge gateway does not have a connection to the internet you will not be able to see any usage information. If your VDC has just been provisioned, it can take up to 4 hours to show utilisation metrics. If these cases do not apply to you, please contact us by raising a Service Request.

## Are other bandwidth monitoring types available?

We have just released a new "per internet-connected edge gateway" internet bandwidth report through the UKCloud Portal and we're investigating bandwidth reporting for edge gateways connected to other networks such as N3 (HSCN) and PSN which are on our backlog.

## We have been using the bandwidth monitoring reporting for some time, what has changed?

As part of our continued programme of platform upgrades, we have recently enhanced our internet bandwidth reporting capability, moving to a software- based solution to enable enhanced functionality and increased features for our customers.

## What regions is bandwidth monitoring available for?

Regions 1,2,5 & 6 with edge gateways connected to the internet will show bandwidth usage.

## Can I use the application programming interface (API) to view my internet bandwidth usage?

Yes, as well as viewing your internet bandwidth usage via the UKCloud Portal, we have also enabled the use of the API. For examples
on how to use the Portal API, please see the [*UKCloud Portal API Reference Guide*](../portal/ptl-ref-portal-api.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.