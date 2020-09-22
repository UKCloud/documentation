---
title: UKCloud Desktop as a Service Service Definition
description: Provides an overview of what is provided by the UKCloud Desktop as a Service service
services: daas
author: shighmoor
reviewer: shighmoor
lastreviewed: 22/09/2020
toc_rootlink: Service Information
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Service Definition
toc_fullpath: Service Information/daas-sd.md
toc_mdlink: daas-sd.md
---

# UKCloud Desktop as a Service Service Definition

## What is UKCloud Desktop as a Service?

UKCloud Desktop as a Service provides a platform to deliver, protect and manage desktops and apps whilst containing costs and ensuring that end users can work anytime, anywhere, across any device.

UKCloud Desktop as a Service provides significant security and compliance benefits to your organisation, whilst increasing workforce enablement through smarter more flexible working. This aligns with government policy around smart working within new Government Hubs. UKCloud Desktop as a Service also enables the Bring Your Own Device (BYOD) policy and supports remote working, without compromising application availability, security, and compliance.

## What the service can help you achieve

- **Deliver both persistent and non-persistent Windows 10 desktops.** Supports both standard and complex requirements within your organisation.

- **Virtualize individual applications.** Stream individual applications for those users that don't require a full desktop experience.

- **Deliver apps to any device, anywhere.** Provide access to published apps running on any device through a single unified workspace.

- **Enable flexible, remote working.** Leverage your BYOD policy; supporting employees accessing their work-related desktops and apps across both corporate and personal devices.

- **Improve security and compliance.** Achieved through central control and management of Windows images, ensuring all end users run a consistent and fully patched OS.

- **Extend PC lifecycle.** Reduce the need to replace existing endpoints or upgrade operating systems by providing digital workspaces and applications that can be delivered on demand.

- **Low latency connection into Crown Hosting.** Stream your applications running within Crown Hosting data centres, and benefit from low latency due to the proximity of UKCloud.

- **Choice of OFFICIAL-SENSITIVE security domains.** Deploy on established, trusted Assured OFFICIAL or Elevated OFFICIAL security domains to segregate sensitive data.

- **Native network connections.** Connect via the DDoS-protected internet, PSN, HSCN, Janet or RLI networks.

## Product options

UKCloud Desktop as a Service provides a flexible solution for delivering virtual desktops and applications, including dedicated or shared desktops and hosted applications. The following options are available.

UKCloud will engage with you to assess your current desktop landscape, this includes understanding the end user roles, applications requirements, performance expectations, end user devices, security requirements, and connectivity needs. Following this initial assessment UKCloud will be able to recommend the most suitable deployment model and recommend desktop and application sizing to meet your requirement.

### Desktop options

&nbsp;                         | vCPU | RAM (GiB) | Storage (GiB) | £ / month
-------------------------------|------|-----------|---------------|----------
Small Desktop                  | 1    | 2         | 30            | £30.00
Medium Desktop                 | 2    | 4         | 50            | £43.00
Large Desktop                  | 4    | 8         | 50            | £60.00
Extra Large Desktop            | 8    | 16        | 100           | £100.00

Additional memory is £3.50 per GiB per month (additional memory is limited based on the desktop option selected. For further details, see the UKCloud Desktop as a Service Service Scope).

### Session hosting

&nbsp;                    | vCPU | RAM (GiB) | Storage (GiB) | £ / month
--------------------------|------|-----------|---------------|----------
RDS Small Windows Server  | 8    | 16        | 250           | £200.00
RDS Medium Windows Server | 8    | 32        | 250           | £260.00
RDS Large Windows Server  | 8    | 48        | 500           | £320.00

Additional storage is £0.10 per GiB per month.

Session user licence (required for each user accessing via RDSH) is £15.00.

### Support options

- **Platform Support - Inclusive.** Suitable where the customer has VDI experience and in-house resource and technical skills to build, deploy and manage the end user desktop environment. UKCloud is responsible for maintaining the underlying platform and connectivity only, everything else is the customer responsibility.

    Additional chargeable support options are detailed below.

- **Option 1: Support Services (£2,500 per month).** Suitable where the customer has VDI experience and in-house resource and technical skills to build, deploy and manage the end user desktop environment. This 3rd line support service provides contact to VMware Horizon specialist engineers to help troubleshoot and resolve deployment and performance issues. **Includes 16 Hours 3rd line support per month.**

- **Option 2: Fully Managed.** Recommended for customers with zero or limited knowledge of managing a virtual desktop environment. This option will be configured based on your environment needs and covers application/image/desktop management, application packaging, user environment and customisation and support and administration.

> [!NOTE]
> Microsoft Windows OS licence, Windows Server Access Licenses, endpoints, printers, backend applications and service desk are the responsibility of the customer. Full details of the above support options available can be found in the UKCloud Desktop as a Service Scope.

## Pricing and packaging

UKCloud Desktop as a Service can achieve an effective price from £24.30 per desktop per month or £12.15* per user per month for Session Hosting access (*excluding RDS hosting). Full pricing with all options, including licensing and connectivity, are available in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide). Additional UKCloud commitment discounts apply for this service.

## Customer considerations

With the exception of any applications that have been explicitly identified as part of the desktop support service option 2, all customer applications, including desktop and business applications that are packaged within the desktop images, are the full responsibility of the end customer. This includes licensing, packaging, patching, monitoring, performance and support of these applications. For any support issues the customer should contact the application vendor directly.

Desktop images built by and provided by the customer will not be managed by UKCloud unless they have been explicitly identified as part of the above support option 2, in which case the packaging and patching of these applications is included as defined in the managed service terms that have been agreed.

Microsoft Windows Desktop OS licensing customers must use their own licences purchased through their Microsoft licensing distributor. Customers are required to initiate all in-guest troubleshooting through their Microsoft Support process.

Microsoft Client Access Licenses required for RDS Session Hosting can be purchased thorough UKCloud on a monthly subscription basis.

## Accreditation and information assurance

The security of our platform is our number one priority. We've always been committed to adhering to exacting standards, frameworks and best practice. Everything we do is subject to regular independent validation by government accreditors, sector auditors and management system assessors. Details are available on the [UKCloud website](https://ukcloud.com/governance/).

## Connectivity options

UKCloud provides one of the best-connected cloud platforms for the UK Public Sector. We enable access to our secure platform by DDoS-protected internet, PSN, Janet, HSCN, RLI and your own leased lines via our HybridConnect or Crown Connect services. The full range of flexible connectivity options is detailed in the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide).

## The small print

For full terms and conditions, including onboarding and responsibilities, refer to the [*Terms and conditions documents*](../other/other-ref-terms-and-conditions.md).

## Why UKCloud?

UKCloud is dedicated to the digital transformation of our nation's public services through our flexible, secure and cost-effective multi-cloud platform and the expertise of our people and partners. We believe that diversity of technology drives value and innovation and so we bring together different cloud technologies, with different deployment models spanning on-premises (private cloud), on-campus (Government's Crown Campus) and off-campus global public cloud services. This enables you to choose the right cloud for creating new workloads or migrating or replacing existing applications to the cloud with specialist SaaS solutions.

![UKCloud services](images/ukc-services-g12.png)

We recognise the importance of public services to UK citizens and businesses, which is why we include the highest level of support to all our customers at no extra cost. This includes dedicated 24/7 UK support, a Network Operations Centre (NOC), utilising protective and proactive monitoring tools, and access to UKCloud's experts. UKCloud can also provide outcome-based professional services or managed services to help you with digital transformation.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
