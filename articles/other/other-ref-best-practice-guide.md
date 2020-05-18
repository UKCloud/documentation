---
title: Best practice customer guide
description: Provides useful best practice information and other helpful advice to ensure good performance from our products
services: vmware
author: Dan Baker
reviewer:
lastreviewed: 17/08/2018 13:00:42
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Best practice customer guide
toc_fullpath: Reference/other-ref-best-practice-guide.md
toc_mdlink: other-ref-best-practice-guide.md
---

# Best practice customer guide

## Overview

At UKCloud, we strive to ensure that our products deliver the most value to your business. To help us to achieve this, we've created this guide with useful information to ensure good performance from our products and other helpful advice.

## Best Practices - UKCloud for VMware

This section provides some best practices to ensure you get the most out of UKCloud for VMware.

### Removing out of date snapshots

Snapshot Protection automatically takes an image of the protected VM every 24 hours and stores the image outside the core platform for either 14 or 28 days, depending on your chosen snapshot retention profile.

You should remove snapshots that are no longer needed within 24-48 hours. If snapshots aren't removed, this can cause the following issues:

- Depending on the size of the snapshot, it may delay the time it takes your virtual machine to power on

- Snapshot back-ups are likely to fail

- You may be billed for additional storage due to the size of the snapshot

To reduce this potential impact, ensure that you remove any old snapshots within 48 hours once they are no longer needed. For more information, see the following articles: [*Virtual machine disk limits and considerations*](../vmware/vmw-ref-vmdk-limits.md)
and [*Snapshot Protection FAQs*](../vmware/vmw-faq-snapshot-protection.md).

### Resolving failed backups

There are many reasons why a back-up may fail. The main occurrences are where the VM is over 2TB or where a database has a high change rate. Occasionally, the VM may not be suitable for this type of backup. If your backups have failed three times within a 14-day period, our engineers will be in touch to make you aware and discuss troubleshooting options.

For more information, see the following articles: [*Snapshot Protection Service Scope*](../vmware/vmw-sco-snapshot-protection.md) and [*Snapshot Protection FAQs*](../vmware/vmw-faq-snapshot-protection.md).

### Creating affinity rules

Affinity and anti-affinity rules determine if VMs are kept together as they are moved around within an environment.

- Affinity rules keep VMs together on the same host

- Anti-affinity rules ensure that VMs are distributed across different hosts

For example, if it is important that your application has very low latency, you can create affinity rules to make sure that the application's VMs are always kept on the same host. If you want your application to be robust in the event of host failures, you can create anti‑affinity rules to spread the VMs across multiple hosts.

If you're considering setting affinity rules, please be aware of the impact this may have if a host becomes unavailable at any time.

For information on affinity and anti-affinity rules, see [*How to use affinity and anti-affinity rules*](../vmware/vmw-how-use-affinity-rules.md).

### Maintaining updated VMware Tools

VMware provides tools that we recommend you install into any virtual machines running on UKCloud. These tools provide additional features, such as automated customisation, as well as improved performance by implementing optimised drivers, such as storage, network and display.

As UKCloud releases upgraded products, VMware Tools may become out of date and you may experience slow performance and potentially some failures.

For information on how to ensure your VMware Tools are up to date, see [*VMware Tools installation*](../vmware/vmw-ref-vmware-tools-installation.md).

### Enabling firewalls

At UKCloud, we take the security of your data very seriously and want to make sure that your data is never at risk from being compromised. If your firewall is disabled for any reason, your data may become compromised and open to potential attack.

We strongly recommend that you ensure that your firewalls are always enabled and that your source traffic has been specified to meet your security requirements.

For more information on ensuring your firewalls are enabled, see [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md).

### Backing up edge gateway configuration

If you want to export your edge gateway configuration data (firewall rules, NAT rules, load balancer virtual servers and DHCP pools), for example, for backup or disaster recovery purposes, you can use PowerShell. If you do not export your edge configuration data before redeployment of an edge, you will not be able to roll back to a previous version if the redeployment is unsuccessful.

For more information, see [*How to export vCNS Edge configuration data using PowerShell*](../vmware/vmw-how-ps-export-edge-data.md).

### Capturing edge gateway logs

VMware logs can be a useful way of identifying a root cause for an issue and troubleshooting. These logs can only be viewed by our engineers at UKCloud and cannot be accessed through the UKCloud Portal. If an edge is redeployed, these logs will be deleted and cannot be recovered.

If you'd like to retain your VMware logs and are planning to redeploy an edge, raise a ticket requesting these logs. Allow two days for this request to be completed.

### Setting up syslog collection

Your edge gateway is globally configured to send syslog messages to a specific IP address. By configuring a new network or IP address within your virtual data centre (VDC) and deploying a collector with the syslog IP address, you can access your edge gateway syslog data. You can then use this data to check:

- Allowed and denied network traffic

- Load balancer statistics

- Load balancer health

For more information, see [*How to access syslog data for your edge gateway*](../vmware/vmw-how-access-syslog-data.md).

### Choosing the appropriate compute sizing

At UKCloud, we're proud to provide a range of products, solutions and pricing tailored to suit the needs of your business. We've designed our compute 't-shirt' sizes with the optimum level of RAM and CPU to deliver ideal performance. However, if these levels are increased, this may degrade performance over time.

For more information on the range of VM sizes that we offer, see our latest [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## Best Practices - general information

### Maintaining up-to-date contacts for your account

In the event of an incident, it's important that we have the correct contact details for you. Ensure that:

- Your account has two nominated administrators. The administrator has access rights to create and set up new users and reset passwords. In the event of an incident, our support team will always contact the administrator first to resolve the issue.

- Your contact details are up to date. Please review account permissions regularly when people leave your business or change roles to ensure they are correct

There are contact details listed for both primary and secondary technical contacts. We proactively create support tickets for these contacts when an action is required in your environment so it's important these are up to date.

If you're already a nominated administrator and would like to set up an additional administrator or make changes to any contacts, you can do so via the **Contacts** option in the UKCloud Portal.

### Subscribing to platform updates

To provide you with the latest information on the availability and overall health of our platforms, we have set-up the [UKCloud status page](https://status.ukcloud.com/). This page shows the status of our services and connections, split by region and zone, and details of planned maintenance.

To subscribe to updates, at the bottom of the page, click **Subscribe**, enter your email address then select the services you're interested in. You'll receive an email confirming your subscription to the status page; be sure to click **Verify** to ensure you'll receive updates on your selected services.

For more information on finding the region and zone, see [*How to locate your virtual data centre on the UKCloud platform*](../vmware/vmw-how-locate-vdc.md). If you're experiencing issues that aren't reflected on the status page, please contact us through the [UKCloud Portal](https://portal.ukcloud.com/).

### Locating your VDCs

UKCloud provides information about the location of a VDC in the VDC metadata. Using this metadata, you can locate a VDC by site, region and zone. Knowing where your VDCs are located can be useful for:

- Determining how resilient your applications are

- Determining how maintenance or an unplanned outage may affect your applications

- Providing additional information to help with support call resolution

- More detailed billing information per VM

For more information, see [*How to locate your virtual data centre on the UKCloud platform*](../vmware/vmw-how-locate-vdc.md).

### Renewing, adding and revoking SRA certificates

Secure Remote Access (SRA) certificates enable you to securely connect to UKCloud's Elevated OFFICIAL security domain using NCSC-approved internet virtual private network (VPN) technologies and the walled garden architectural pattern.

System administrators and mobile workers can securely access workloads running on Elevated OFFICIAL from locations that don't have alternative secure network connections such as PSN or HSCN.

- SRA certificates last for 12 months. You'll need to renew certificates no later than two weeks before the certificates expire to avoid any interruption to your service.

- To add additional certificates, raise a service request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal, selecting the **Request Additional SRAS Certificate(s)** option.

- To renew or revoke your certificate, raise a service request via the UKCloud Portal, selecting the **Renew and/or Revoke SRAS Certificate** option.

- For renewals, it's important you give us at least two weeks' notice to prevent a break in your service.

- If you have multiple certificates to renew or revoke, you can do this in a single service request by selecting the **Renew and/or Revoke multiple SRAS Certificates** option in the UKCloud Portal. Attach the *Secure Remote Access bulk renewal/revoke form* containing all the certificates.

For more information, see the following articles: [*Secure Remote Access FAQs*](../sra/sra-faq.md), [*Secure Remote Access Factsheet*](https://ukcloud.com/wp-content/uploads/2018/01/SRA-Factsheet.pdf) and [*Secure Remote Access Service Definition*](../sra/sra-sd.md).

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <feedback@ukcloud.com>.
