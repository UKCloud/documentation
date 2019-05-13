---
title: How to view UKCloud service status information | UKCloud Ltd
description: Describes how to access the UKCloud Status Status page to view information on the status of the services on the platform
services: other
author: Sue Highmoor
reviewer:
lastreviewed: 

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: View service status information
toc_fullpath: How To/other-how-view-status-info.md
toc_mdlink: other-how-view-status-info.md
---

# How to view UKCloud service status information

## Overview

The [UKCloud Service Status page](https://status.ukcloud.com) enables you to monitor the availability and overall health of the services on the UKCloud platform.

![UKCloud Service Status page](images/other-status-page.png)

## Viewing status information

### Platform status

Incidents are displayed at the top of the page and are indicated by a yellow (performance degraded) or red (outage) banner, with details of the incident and its current status.

![Incident](images/other-status-incident.png)

Scheduled maintenance is indicated by a blue banner, with details of what the maintenance work involves and its current status.

![Scheduled maintenance](images/other-status-maintenance.png)

If there are no incident or scheduled maintenance alerts, a green banner at the top displays `All Systems Operational`.

![All Systems Operational](images/other-status-all-operational.png)

Below the alerts for incidents and maintenance, you can see any general information about the status of the platform.

Click **View historical uptime** to view uptime and incident information for past months.

![Historic uptime](images/other-status-history.png)

Upcoming maintenance work and recent incidents are listed at the bottom of the status page.

### Service status

As well as the overall status of the platform, the status page also shows the status of each service on the UKCloud platform.

For each service, you can see the availability over the last 90 days, with each day represented by a bar. Hover over a bar to see a popup with details for that day. If there are no issues with a service, the status is reported as `Operational`.

![Service status](images/other-status-service.png)

The uptime figure indicates what percentage of the last 90 days the service was available for.

Click the **+** icon to expand the service to see the status of specific components within the service. For example, for Connectivity, you can see the status of each connectivity type (Internet, PSN, HSCN, Janet, RLI); for UKCloud for VMware, you can see the status for each UKCloud zone.

If service availability is impacted, the bar for that day displays in a different colour and the status is reported as `Under Maintenance`, `Degraded Performance` or `Outage`.

![Service with degraded performance](images/other-status-outage.png)

## Subscribing to the status page

You can subscribe to the status page to receive updates when information is updated.

1. On the UKCloud Service Status page, click the **Subscribe to Updates** button.

    ![Subscribe to Updates button](images/other-status-btn-subscribe.png)

2. To receive email notifications:

    1. Click the envelope icon, enter your email address, then click **Subscribe via Email**.

        ![Subscribe via Email](images/other-status-notification-email.png)

    2. Confirm your subscription by clicking the **Confirm subscription** button in the email you receive.

    3. On the *Notifications Subscription* page, you can specify individual components for which you want to receive notifications.

        ![Notifications Subscription page](images/other-status-subscriptions.png)

3. To receive text notifications:

    1. Click the telephone handset icon, enter your phone number, then click **Subscribe via Text Message**.

        ![Subscribe via Text Message](images/other-status-notification-text.png)

    2. Click the link in the confirmation text message you receive to manage your subscriptions.

4. To receive webhook notifications, click the code icon (**<>**), enter the URL to send the webhook to and the email address to send any associated error messages to, then click **Subscribe to Notifications**.

    ![Subscribe via Webhook](images/other-status-notification-webhook.png)

5. To subscribe to the Atom/RSS feed, click the RSS icon and then click the **Atom Feed** or **RSS Feed** link.

    ![Subscribe to RSS](images/other-status-notification-rss.png)

6. For more information about UKCloud Support, click the speech bubble icon, then click the **support site** link.

        ![Help](images/other-status-help.png)

7. You can also subscribe to notifications for a specific incident or maintenance:

    1. Click the **Subscribe** link in the banner for that incident or maintenance alert.

        ![Subscribe link for incident](images/other-status-incident-subscribe.png)

    2. Enter your email address or phone number, then click **Subscribe to Incident**.

        ![Subscribe to Incident dialog box](images/other-status-subscribe-incident.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.