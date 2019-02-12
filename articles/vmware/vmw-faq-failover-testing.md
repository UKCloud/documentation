---
title: Service failover testing FAQs | UKCloud Ltd
description: Details service failover test related Frequently Asked Questions (FAQs)
services: vmware
author: Sue Highmoor

toc_rootlink: FAQs
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service failover testing FAQs
toc_fullpath: FAQs/vmw-faq-failover-testing.md
toc_mdlink: vmw-faq-failover-testing.md
---

# Service failover testing FAQs

## General

### How can I test that my services will failover?

You can test the failover function of the service by requesting a Test Scenario from UKCloud.

The Test Scenario is designed for the following uses:

- Customers that wish to test and understand how their applications might react in a failover where the underlying physical hosts have failed (simulated in the scenario) or when the VMs have been migrated in a live state.

The Test Scenario is not:

- A customisable feature of UKCloud for VMware.

This Test Scenario Service is limited by the following rules:

- UKCloud will only complete a test scenario for a maximum of 10 customer identified VMs. This provides you with an experience similar to what you would experience in a live fail over scenario.

- Test Scenarios will only occur during office hours.

- Customers will build and explicitly identify up to 10 VMs to UKCloud.

- The failover will be deemed a success by UKCloud once we can identify that the VMs are running in the second UKCloud data centre using its own monitors and tools.

### What is not included?

UKCloud will not failover the connectivity and physical firewall during a test failover. You will experience a network latency of a few milliseconds through this firewall.

### What is the process to initiate a Test Scenario?

1. Customer raises a Support Request indicating they wish to complete this test and confirming the VMs (up to 10) that they wish to be failed over, the start and end time, and any other requirements.

2. UKCloud receives the request and responds accordingly with an accept or reject.

3. If accepted, UKCloud will schedule the work to commence at the specified time.

### What options are there?

**Option 1: UKCloud will dynamically move customer VMs between two data centres**

UKCloud will dynamically move customer VMs between the data centres while the VMs remain online. There will be increased network latency between client VMs that are running in the different data centres (approximately 4-4.5 msec).

**Option 2: UKCloud will restart customer VMs between the two data centres**

Customer VMs can be shut down and restarted in the secondary datacentre. If the shutdown is a non-graceful (Power-Off as opposed to a Guest OS shutdown) then this simulates the effect of a physical server outage from an individual VM perspective. This is the equivalent of a total data centre failure.

As the UKCloud platform is multi-tenanted, UKCloud will not replicate a physical host failure to invoke a DR scenario as this may impact other customers.

Failovers will last a maximum of 12 hours before being failed back to the originating data centre.

### What outputs are available?

It's highly likely that the testing of a failover will be seamless to the customer and therefore it will be difficult for them to gauge that the failover has occurred. To provide assurance that the test was successful, UKCloud will produce a report that identifies the following:

- A sanitised (removing ESX host names) report of the ESX servers that the VMs are located on during the period of the failover test

- Comments and observations

### Are there charges for a service failover test?

Typically, UKCloud will only allow a test to last for 1 business day with a charge (based on the [SFIA rate card](https://assets.digitalmarketplace.service.gov.uk/g-cloud-10/documents/92406/258024001448268-sfia-rate-card-2018-05-21-1255.pdf) - level 3 Apply). If you require longer testing periods, this needs to be approved by UKCloud.

### Why is the DR failover Test Scenario not fully automatic and self service?

This is part of the service roadmap.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
