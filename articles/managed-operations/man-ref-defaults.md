---
title: Default monitoring thresholds and alert handling procedures
description: Lists the default monitoring thresholds and alert handling procedures defined for the Managed IT Operations Managed Monitoring as a Service option 
services: managed-operations
author: shighmoor
reviewer: sdixon
lastreviewed: 29/07/2022
toc_rootlink: Managed IT Operations
toc_sub1: Managed Monitoring as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Default thresholds and procedures
toc_fullpath: Managed IT Operations/Managed Monitoring as a Service/man-ref-defaults.md
toc_mdlink: man-ref-defaults.md
---

# Default monitoring thresholds and alert handling procedures

## Overview

With Managed Monitoring as a Service, our Cloud Operations team monitors your devices, receiving and reacting to any abnormal events, only escalating those events that genuinely require your attention.

When we first provision the service, we set it up with default thresholds for the devices you've selected to monitor, unless you specified different thresholds in your initial request. At any time, you can raise a Service Request, via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, to change these thresholds and other service configuration details. For more details about how to do this, see [*How to change your service configuration for Managed Monitoring as a Service*](man-how-monitoring-change-config.md).

This article provides information about the default monitoring thresholds and alerting procedures.

## Managed Monitoring as a Service default configuration

### Default monitoring thresholds

Managed Monitoring as a Service thresholds determine when alerts are raised against your monitored devices. The following table shows the default thresholds used by the service. If you want to use different thresholds you can identify these in your initial request or change them later.

Item                                 | Alert type     | Default threshold
-------------------------------------|----------------|------------------
Processor load                       | Major Alert    | 80%
Processor load                       | Critical Alert | 90%
Available memory                     | Major Alert    | 85%
Available memory                     | Critical Alert | 95%
Swap space used                      | Major Alert    | 80%
Global disk space used               | Major Alert    | 75%
Global disk space used               | Critical       | 85%
Specific file system disk space used | Major Alert    | 75%
Specific file system disk space used | Critical Alert | 85%

### Default alert handling procedures

If a threshold is exceeded, a major or critical alert is raised as appropriate. The procedure followed for these alerts is dependent on the alert type and whether you have identified the device as critical. The following table shows the default alert handling procedures for the different alert types and criticality.

Alert type     | Critical item | UKCloud action
---------------|---------------|---------------
Major Alert    | No            | <ol><li>Incident logged against the escalation contact via the UKCloud Portal.</li><li>Email notification to escalation contact with ticket details.</li><li>Ticket remains as "Waiting for Customer" until customer acknowledges and closes the incident via the UKCloud Portal.</li></ol>
Major Alert    | Yes           | As above.
Critical Alert | No            | As above.
Critical Alert | Yes           | <ol><li>Incident logged against the escalation contact via the UKCloud Portal.</li><li>Email notification to escalation contact with ticket details.</li><li>Ticket remains as "Waiting for Customer" until customer acknowledges and closes the incident via the UKCloud Portal.</li><li>Phone call to escalation contact. If no response, then voicemail and update ticket with voicemail details.</li><ol>

## Related articles

- [*How to add devices to and remove devices from Managed IT Operations*](man-how-add-remove-device.md)

- [*How to change your service configuration for Managed Monitoring as a Service*](man-how-monitoring-change-config.md)

- [*How to update contact information for Managed IT Operations*](man-how-update-contact-info.md)

- [*How to provide notification of maintenance windows for Managed IT Operations*](man-how-notify-maintenance.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
