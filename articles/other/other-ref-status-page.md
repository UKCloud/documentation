---
title: Understanding the UKCloud Service Status page
description: Provides information about using the UKCloud Service Status page to view information about the status of the services on the platform
services: other
author: shighmoor
reviewer: gsmith
lastreviewed: 17/01/2022

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud Service Status page
toc_fullpath: Reference/other-ref-status-page.md
toc_mdlink: other-ref-status-page.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Understanding the UKCloud Service Status page

## Overview

The [UKCloud Service Status page](https://status.ukcloud.com) enables you to monitor the availability and overall health of services on the UKCloud platform.

![UKCloud Service Status page](images/other-status-page.png)

## Viewing service status information

### Platform status

Incidents are displayed at the top of the page and are indicated by a yellow (performance degraded) or red (outage) banner, with details of the incident and its current status.

![Incident](images/other-status-incident.png)

Scheduled maintenance is indicated by a blue banner, with details of what the maintenance work involves and its current status.

![Scheduled maintenance](images/other-status-maintenance.png)

If there are no incident or scheduled maintenance alerts, a green banner at the top displays **All Systems Operational**.

![All Systems Operational](images/other-status-all-operational.png)

Below the alerts for incidents and maintenance, you can see any general information about the status of the platform.

### Service status

As well as the overall status of the platform, the Service Status page also shows the status of each service on the UKCloud platform.

For each service, you can see the current availability. If there are no issues with a service, the status is reported as **Operational**.

![Service status](images/other-status-service.png)

Click the **+** icon to expand the service to see the status of specific components within the service (when collapsed, the service shows the status of the most degraded child component within the service). For example, for Connectivity, you can see the status of each connectivity type (for example, Internet, PSN, HSCN, Janet, HybridConnect); for UKCloud for VMware, you can see the status for each UKCloud zone.

If service availability is impacted, the status is reported as **Under Maintenance**, **Degraded Performance** or **Outage**.

![Service with degraded performance](images/other-status-outage.png)

### Upcoming maintenance

Below the individual service status information, you can see details of upcoming maintenance work. And below that, you'll find a list of recently completed maintenance and resolved incidents.

## Subscribing to the Service Status page

You can subscribe to the Service Status page to receive updates when information on the page is updated. For more information, see [*How to subscribe to service status notifications*](other-how-subscribe-service-status.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
