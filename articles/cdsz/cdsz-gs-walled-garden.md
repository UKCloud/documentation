---
title: Getting Started Guide for the Cross Domain Security Zone Walled Garden
description: Provides information to get up and running with the Cross Domain Security Zone
services: cdsz
author: Sue Highmoor
reviewer:
lastreviewed: 10/07/2018 12:06:26

toc_rootlink: Getting Started
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cross Domain Security Zone Walled Garden
toc_fullpath: Getting Started/cdsz-gs-walled-garden.md
toc_mdlink: cdsz-gs-walled-garden.md
---

# Getting Started Guide for the Cross Domain Security Zone Walled Garden

## Overview

The UKCloud Walled Garden provides self-service access to the Cross Domain Security Zone (CDSZ) so that you can design, implement and manage your own cross‑domain solution, using technology and application services of your choice. UKCloud provides an assurance wrap by managing firewalls between the security domains and ensuring you use appropriate risk management to understand and mitigate identified risks.

The Walled Garden is ideal if you require more control and flexibility over what is passed between security domains, to support a wider range of use cases.

This guide covers the steps you need to follow to get your Walled Garden up and running.

### Intended audience

This guide is intended for customers who have:

- Completed the CDSZ Walled Garden assurance wrap

- Been approved to have a Base Implementation of the Walled Garden to allow data to pass between the Assured and Elevated security domains on the UKCloud platform

## Before you begin

Before you can start to implement a walled garden, you must have completed and passed the appropriate application process. For more information, see the [*UKCloud Cross Domain Security Zone application process*](cdsz-ref-application-process.md).

After your Walled Garden application has been approved, a service request is raised to implement the Walled Garden virtual data centre (VDC) and, if necessary, Elevated and Assured VDCs.

> [!NOTE]
> If a service request for this implementation already exists, the existing request is used and a new one is not raised.

You can track the progress of the service request in the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

During the provisioning of the Walled Garden service, we'll ask you for some additional information via the service request:

- The customer account in which you would like the Walled Garden VDC to be provisioned, if different from the customer completing the Walled Garden application.

- Whether you plan to have a single or dual site solution.

- How many VDCs you need to be set up in each security domain.

- If you're connecting new or existing VDCs to the Walled Garden VDC.

  - If you're connecting to existing VDCs, we'll need to know information such as NFT details, customer account, and so on.

- The external source IP addresses from which you'd like to access the Assured VDC (up to a maximum of 50).

    These IP addresses are the locations from which you can build and test the environment (for example, offices or end user premises).

The build phase of the Walled Garden environment can take up to 10 working days depending on the complexity of the deployment. When the environment has been fully provisioned, your Customer Success Manager (CSM) will send you the information you need to access it.

## Building your Walled Garden service

As soon as you have access to your environment, you can start to build your Walled Garden services. 

It is important to remember that while the UKCloud Portal for the Assured security domain is accessible from the internet, the Portal for the Elevated security domain and Walled Garden services is accessible only through the PSN Protected network or through UKCloud's Secure Remote Access (SRA) service.

### Setting up your networking

First, you need to replicate the networking that you set out in your Walled Garden application diagrams. This involves the creation of external and internal networking, as well as the creation of rules on the virtual firewall within your environment. For information about creating networks and firewall rules, see the [*Getting Started Guide for UKCloud for VMware*](../vmware/vmw-gs.md) and [*How to build a virtual machine with UKCloud for VMware*](../vmware/vmw-gs-build-vm-vcd.md).

You also need to create the rules that allow connectivity between the different VDCs through the Walled Garden. This involves the creation of firewall rules, static routes and/or NAT rules.

#### Networking examples

There are two options for networking between the VDCs in the Walled Garden service:

- **Option 1:** Create static routes between the VDCs; this is the simplest option for connecting VDCs

- **Option 2:** Use NAT rules on top of the static routes; this option may be appropriate if you want to abstract the static routes

The diagrams below provide examples for both options.

> [!NOTE]
> For both options:
> - You cannot route public IP addresses to the vCNS Edges in the Walled Garden
> - The Org VDC networks 192.168.XXX.XX in the examples below are illustrative and you should replace these with your own details
> - You must have one VM in the Walled Garden VDC connecting to both vCNS Edges
> - Each of the examples below assumes that the appropriate firewall rules are in place
> - You must apply an SNAT rule in the Elevated security domain to enable connectivity to UKCloud services

![Option 1 example: Static routes & SNAT in Elevated](images/cdsz-static-routes-snat.jpg)

![Option 2 example: SNAT/DNAT transit address](images/cdsz-snat-dnat.jpg)

### Building your virtual machines

The next step is to build the VMs that you outlined in the Walled Garden application. This involves deploying the VMs from either the vCloud Director catalog or from template VMs as OVF files. The VMs must be able to access UKCloud services, such as OS repositories, the network time server, the Key Management Server (KMS), and so on. You may also need to access external services, such as antivirus repositories. You must configure this access in your VDC networking. For more information about creating VMs and accessing UKCloud services, see the [*Getting Started Guide for UKCloud for VMware*](../vmware/vmw-gs.md).

### Testing your environment

When you've built your VMs and networking, you can start to test the environment. If you've configured the networking correctly, your VMs should be able to talk to each other across the Walled Garden. If you have any issues, check your network rules.

### Performing the IT Health Check

As part of the CDSZ application process, you're required to outline any IT Health Check (ITHC) you intend to perform on the environment. The ITHC should be conducted by an independent CHECK Service Provider, approved and classified as Green Light by the National Cyber Security Centre (NCSC). You can verify appropriate providers on the [NCSC web site](https://www.ncsc.gov.uk/section/products-services/verify-supplier?q=&defaultTypes=organisation&sort=date%2Bdesc&start=0&rows=20).

Before beginning the ITHC, notify UKCloud by raising a service request in [My Calls](https://portal.skyscapecloud.com/support/ivanti) and completing the [*External Security Review Test (ESRT) application form*](https://portal.ukcloud.com/support/knowledge_centre/4f052cee-0400-4e12-9e90-827a768ea7ad). Ideally, we require five working days' notice before the work is due to be carried out.

The ITHC scope should be relevant to the environment. For example, if you're using the Walled Garden to pull application and antivirus updates from the internet, then security controls relevant to facilitate this should be in scope. Bear in mind that the end customer accreditor may dictate the scope of the ITHC.


## Glossary

This section provides a glossary of terms specific to the Cross Domain Security Zone Walled
Garden.

**assurance wrap**&nbsp;&nbsp;A process for ensuring that customers understand, have identified and can mitigate potential risks when using a customer-defined solution within the UKCloud platform.

**Assured OFFICIAL**&nbsp;&nbsp;A security domain on the UKCloud platform that provides access to public networks, such as PSN Assured or the internet.

**Base Implementation**&nbsp;&nbsp;A limited instantiation of a service for the purpose of building, testing and providing evidence of appropriate security checks for a customer-defined solution on the UKCloud platform.

**Cross Domain Security Zone (CDSZ)**&nbsp;&nbsp;A UKCloud IaaS service that provides the ability to securely transfer data between our Assured OFFICIAL and Elevated OFFICIAL security domains using CESG-approved cross-domain security patterns and our Secure Remote Access service.

**Elevated OFFICIAL**&nbsp;&nbsp;A security domain on the UKCloud platform that provides secure access to restricted networks such as PSN Protected, HSCN or Janet.

**evidence pack**&nbsp;&nbsp;A collection of evidence to prove that a customer-defined solution on the UKCloud platform aligns with all appropriate security measures and risk mitigation, including the 12 PMCs of GPG13.

**Good Practice Guide 13 (GPG13)**&nbsp;&nbsp;A set of controls covering protective monitoring, such as event log management and intrusion detection and prevention systems, required to prevent accidental or malicious data loss. Also referred to as Protective Monitoring Controls (PMCs).

**IT Health Check (ITHC)**&nbsp;&nbsp;An IT security assessment, performed by an independent security organisation, to confirm that a service provides the appropriate level of security required by the UK government.

**Live Implementation**&nbsp;&nbsp;A full instantiation of a service after it has passed all stages of the assurance wrap and been approved by the UKCloud SIRO.

**National Cyber Security Centre (NCSC)**&nbsp;&nbsp;A department of GCHQ that acts as a bridge between industry and government to help reduce the cyber security risk to the UK by providing cyber security advice and cyber incident management.

**Protective Monitoring Controls (PMC)**&nbsp;&nbsp;*See* GPG13.

**Senior Information Risk Owner (SIRO)**&nbsp;&nbsp;The person within an organisation who owns the organisation's information risk policy.

**Walled Garden**&nbsp;&nbsp;A Cross Domain Security Zone (CDSZ) service option that provides you with self-service access to the CSDZ so that you can design, implement and manage your own cross-domain solution, using technology and application services of your choice.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
