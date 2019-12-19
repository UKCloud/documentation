---
title: Data Transfer Facility Service Scope | UKCloud Ltd
description: Outlines important details regarding the Data Transfer Facility
services: enablement
author: Steve Hall
reviewer:
lastreviewed: 23/07/2018 11:55:40
toc_rootlink: Service Scope
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Data Transfer Facility Service Scope
toc_fullpath: Service Scope/enbl-sco-dtf.md
toc_mdlink: enbl-sco-dtf.md
---

# Data Transfer Facility Service Scope

## About this document

This document explains what is and isn't included in the scope of this service.

## About the Data Transfer Facility

Our Data Transfer Facility enables customers to use the secure network connections at our Farnborough office to manage systems or transfer data into or out of their environments.

It's useful if, for example, you don't have enough network bandwidth, or you're waiting for appropriately accredited connectivity to be installed.

If you want to bring in more than 500GiB of VMs, we also offer a [Mass Transfer facility](enbl-sco-mtf-nas.md).

## Booking and booking conditions

To use the Data Transfer Facility, you need to book. The first step is to raise a service request through the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

The Data Transfer Facility is available on a whole-day basis, between 0900 and 1700 on normal business days. The minimum booking period is one day at a cost of £500 per day.

A maximum of 2 workstations are available allowing for 2 concurrent users.

The person nominated to carry out the activity must:

- Understand your environment

- Have a plan of action

- Have the permissions to execute the plan

- And if supported by a partner - a technically competent consultant

You are responsible for sizing the amount of time needed to transfer your data. Data transfers can't be left to run over night.

You will be billed for use of the facility on your next monthly statement.

You can cancel your booking, but we reserve the right to charge for cancellations made less than 24 hours before the start of the booking period.

If a third party is to carry out the work on your behalf, you must give us appropriate authorisation in advance. Third parties cannot book the Data Transfer Facility themselves - you must initiate the request.

## Before your visit

As the UKCloud office is on a secure site, you need to book with at least 48 hours' notice.

If you're a non-UK national, you need to give us at least 21 days' notice.

You need to bring a valid form of photo ID with you - a passport or driving licence.

If you bring an encrypted drive with you, this must be a hardware encrypted drive only. You are not allowed to bring a software encrypted drive, as installation of non-UKCloud software is not authorised.

If you intend to bring your own devices with you to use in the Data Transfer Facility, you must complete the [SIRO approval form](https://portal.skyscapecloud.com/support/knowledge_centre/15ac1fa0-a724-432e-91ec-6c9d17c42c9c).

## During your visit

You'll be notified of your UKCloud contact before your visit to the site, so please ask for them at reception when you arrive. You'll need to sign in. We'll give you a red 'Escorted' badge, and you'll be escorted round the site by your UKCloud contact.

You'll have access to a PC connected to our Assured or Elevated platform, as specified when you book.

It's expected that you or a third party working on your behalf will be able to complete the data transfer or system management activities without any help from UKCloud.

To help make your day comfortable, the Data Transfer Facility has:

- An Xbox One - you can bring your own compatible games

- Tea and coffee making facilities, a microwave and a fridge in the kitchen next door

- Wifi internet access

You won't be able to leave the site for lunch, so you should either bring your own or ask your UKCloud contact to take you to the onsite café where a variety of food and refreshments are on sale. The onsite ATM accepts all major bank cards.

You can leave the Data Transfer Facility to use the kitchen or restrooms by the main reception area. However, you cannot leave that area, move about the office or go into any other offices unless you're escorted by your UKCloud contact.

## At the end of your visit

At the end of your visit we'll re-image the PC you've been using to remove any data you stored on it.

## Supported media and connectivity

You can use the following media for data upload:

- External hard drive - either unencrypted or hardware encrypted only

- CD

- DVD

- USB pen drive - either unencrypted or hardware encrypted only

- NAS

Data can be connected via the following interfaces:

- USB1/2/3

- 1Gb Ethernet port

Supported file systems:

- External hard drive -

  - NTFS

- CD/DVD

  - CD-R, finalised CD-RW

  - DVD-R, DVD+R, finalised DVD-RW, finalised DVD+RW

- USB pen drive

  - FAT/FAT32, NTFS

- NAS

  - Must support Windows shares

Supported virtual machine (VM) formats:

- OVF (vCloud and vCenter)

- OVA (vCloud and vCenter)

- Hardware version: \<=9

- Disk format: thick, thin

- Maximum single VM size: 1.5TB

If your VMs are in a different format, you can use the OVF Tool and VMware vCenter Converter to upload them.

## Supported network ports and protocols

To maintain a secure infrastructure, we whitelist a set of ports that can be used to transfer data. If you want to use ports outside of this range, you need to make a request before you use the Data Transfer Facility.

### Inbound ports

TCP ports | UDP ports | VPN ports
----------|-----------|----------
SSH - 22 | DNS - 53 | AH
SMTP - 25 | &nbsp; | ESP
HTTP - 80 and 8080 | &nbsp; | IPsec - UDP 4500
HTTPS - 443, 444 and 8443 | &nbsp; | ISAKMP --- UDP 500
Secure SMTP - 465 | &nbsp; | &nbsp;
FTPS (Control) - 990 | &nbsp; | &nbsp;
IMAPS - 993 | &nbsp; | &nbsp;
POP3S - 995 | &nbsp;| &nbsp;

### Outbound ports

TCP ports | UDP ports | VPN ports
----------|-----------|----------
SSH - 22 | DNS --- 53 | AH
SMTP - 25 | NTP - 123 | ESP
HTTP -80 and 8080 | &nbsp; | IPsec - UDP 4500
HTTPS - 443, 444 and 8443 | &nbsp; | ISAKMP - UDP 500
Secure SMTP - 465 | &nbsp;| &nbsp;
FTPS (Data) - 989 | &nbsp; | &nbsp;

## Connectivity

By default the Assured data upload PC is connected to your environment's internet gateway. You can connect from the PC to an external IP in your environment. The IP address of the data upload pc can be added to a firewall rule in your environment to secure access

Access to environments on other networks (e.g HSCN or PSN) will require additional configuration. Please discuss this with your Service Delivery Manager if required

## Platform performance

The speed of data transfer to the UKCloud platform isn't guaranteed. However, during tests of the upload and download speeds, an average of 8 Mbit/s was achieved for VM import/export and 40 Mbit/s for data transferred over FTPS.

For a transfer time calculator, go to <https://techinternets.com/copy_calc?do>.

If you use FTPS to upload data to or download it from your environment, you can transfer up to 1TB of data in a day.

## Anticipated transfer speeds

Transfer speeds will vary based on a number of factors such as the protocol being used or the system being targeted.

The following table can help you calculate the time required to upload data based on estimated speeds derived from our testing and simulations:

Upload type | Protocol | Estimated transfer speed
----------- |----------|-----------------------------
vCloud VM import | SSL | 8 Mbit/s
vCloud data store file upload | SSL | 8 Mbit/s
vCloud multi-threaded upload | SSL | 16 Mbit/s
File upload to virtual machine | SCP | 20 Mbit/s </br> FTPS 40 Mbit/s </br> FTP 40 Mbit/s

If the Data Transfer Facility doesn't provide the performance you need, you can engage a Cloud Architect to discuss other options.

For more information on using multi-threaded uploads, visit the Knowledge Centre.

## Software

We provide PC images running Windows 7 with the following pre-installed software:

- Firefox web browser v38.0

- PuTTY v0.64

- PuTTY gen v0.64

- FileZilla v3.11.0-rc1

- WinSCP v5.7.3

- 7-ZIP v9.2.0

- Java v8 Update 45

- vCloud Director Client Integration plugin v5.5.0

- VM Power CLI v6.0 R1

- VMware OVF Tool v4.1.0

- Python v2.7.6

- EMC Geodrive v1.3

- Atmos Fox v1.5

- Rest Client for vCloud Director API access v2.0.3

## Technical support

If you experience a technical issue during your visit, please raise this with your UKCloud contact.

If the issue doesn't directly relate to the Data Transfer Facility, you'll need to raise a service request as normal. Service requests will be treated using normal business SLAs.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
