---
title: Data collected by UKCloud's Anti-Virus as a Service
description: Provides information about any customer data that may be collected when subscribed to UKCloud's Anti-Virus as a Service
services: managed-operations
author: sdixon
reviewer: sdixon
lastreviewed: 29/07/2022
toc_rootlink: Managed IT Operations
toc_sub1: Anti-Virus as a Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Data collected by Anti-Virus as a Service
toc_fullpath: Managed IT Operations/Anti-Virus as a Service/man-ref-sentinelone-datacollection.md
toc_mdlink: man-ref-sentinelone-datacollection.md
---

# Data collected by UKCloud's Anti-Virus as a Service

## Overview

UKCloud harnesses the market-leading cyber security services of [SentinelOne](https://https://www.sentinelone.com/) as the engine that powers our Anti-Virus as a Service product.

To ensure the utmost accuracy, reliability and protection of our [*Anti-Virus as a Service*](https://docs.ukcloud.com/articles/managed-services/man-sd-managed-it-ops.html) product, key endpoint metadata must be securely exchanged between SentinelOne's central cloud platform, which sits outside of UKCloud's data centres, and any customer endpoint that has the SentinelOne Agent installed.

This article defines any such metadata that may be exchanged between a customer's endpoint that has the SentinelOne Agent installed and the SentinelOne central cloud platform.

> [!NOTE]
> Any data collected or processed by SentinelOne will be used solely for the delivery of this Anti-Virus as a Service product. A copy of the full data processing agreement that is in place between UKCloud and SentinelOne may be made available upon request.

## Data collected by endpoint agent

### Virtual machine data   

- Architecture

- Memory

- CPU information

- Core count

- Mac address

### User and device data

- Agent ID

- Endpoint name

- Workgroup/domain

- User name

- Disk encryption state

- Installed applications:

  - Installation time

  - Size

  - Publisher

  - Version

- OS type

- OS version

- SentinelOne Agent version

- SMTP username

- User login/out time

### Process activity

- Time of machine activity

- Full file path

- In cases of suspected threats, the SentinelOne Agent collects for each process:

  - Hash

  - File type

  - Command-line arguments

  - Network access metadata only:

    - IP Address

    - Protocol

  - Registry:
 
    - Created keys

    - Deleted keys

    - Modified key names

### Network data

- Internal network IP address

- Public IP address

- Inbound/outbound connections, metadata only (source, target, port, and application)

### Fetched files

- Any file fetched by user for further inspection (encrypted at rest, deleted after 72 hours)

## SentinelOne central platform

### General

- Users usernames, emails, and phone numbers (UKCloud credentials)

- SentinelOne customer corporate name (UKCloud credentials)

- Solutions agent information, including endpoint name and user ID

- Policies names and policies creator name (UKCloud credentials)

- Threat information (exchanged by end-point agent):

  - File path

  - Agent IDs

  - Time stamp

  - Threat description

  - Resolution (Yes/No)

  - Detection source

### Agent information

- Number of endpoints and respective operating systems

- Endpoint grouping information (named as per users selection)

- Endpoint crash dumps

- Agent logs

### Endpoint information:

- Global configuration of connected endpoints

### Research data collection 

Research data includes certain telemetric data sent from the customer's management consoles to the SentinelOne cloud. From the SentinelOne cloud, the research team extracts research data and uses it to improve the understanding of known malicious behaviors, predict additional likely malicious behaviors, and otherwise improve artificial intelligence-based detection of unknown malware. Research data is stored on AWS servers in the U.S. and consists of the following data components:

- Endpoint and Agent build information

  - Agent boot – Uptime of the Agent service, indicating when endpoints are rebooted, restarted, or the time in which Agents are down due to bugs or other issues

  - Agent id – Internal identifier of the SentinelOne Agent in use, for communication with its Management

  - Agent version – SentinelOne software version

  - Operating system – Which OS is installed on the device

  - Has timestamp – Internal time stamp

  - Endpoint Name – Endpoint name given by the customer

  - File Name – Name of files inspected for suspected malware presence as given by the customer

- Process data

  - RootName – Process name

### Deep visibility data  

This data is collected by Agents and correlated by Deep Visibility to provide enhanced details, search and monitor capabilities

- General

- Network actions

- Processes

- DNS actions

- URL actions

- Files

- Registry actions

- Scheduled Tasks

- Logins

- Indicators

- Modules

- K8S/containers

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
