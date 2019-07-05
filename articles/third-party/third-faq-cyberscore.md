---
title: XQ Cyber CyberScore from UKCloud FAQs | UKCloud Ltd
description: Frequently asked questions for XQ Cyber CyberScore from UKCloud
services: third-party
author: Sue Highmoor
reviewer:
lastreviewed: 
toc_rootlink: XQ Cyber CyberScore
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: XQ Cyber CyberScore from UKCloud FAQs
toc_fullpath: XQ Cyber CyberScore/third-faq-cyberscore.md
toc_mdlink: third-faq-cyberscore.md
---

# XQ Cyber CyberScore from UKCloud FAQs

<sup>*</sup> All links to CyberScore support documents will require you to log in.

## General

### What is CyberScore?

CyberScore&trade; is a fully-automated security testing and rating service that scores a virtual machine’s cyber security posture and explains potential impacts. Results are presented in a range of reports and action plans that help customers rank and rate vulnerabilities and identify key remediations. You can run the service as often as required and CyberScore will show your progress over time.

### What is provided in the service?

For further details on the service, and what is provided, see the [*XQ Cyber CyberScore Service Definition*](third-sd-cyberscore.md).

### Is there an SLA for this service?

No, we do not currently offer an SLA for the CyberScore service.

### Is this service available in both your Assured and Elevated security domains?

The service is available on our Assured security domain, however, due to the need for the CyberScore scanner to talk back to CyberScore HQ over the internet, this service is unavailable on Elevated.

### How can I get support?

If you need any assistance, you can raise a service request from My Calls within the UKCloud Portal.

## Installation and Configuration

### What virtualisation platform can the scanner be installed on?

You can deploy the CyberScore scanner on VMware (including UKCloud for VMware), Hyper-V, AWS or Azure. Support for an OpenStack scanner is coming soon.

### How do I configure the service?

Once you’ve checked the prerequisites (see [*XQ Cyber CyberScore scanner deployment environment requirements*](third-ref-cyberscore-prereqs.md)), download the scanner template from the CyberScore portal, then install and configure the scanner. To help with this process there are [video tutorials](https://secure.cyberscore.com/support/scanner)<sup>*</sup> on the CyberScore Portal.

### What t-shirt size is required for the scanner?

If the scanner is deployed in our UKCloud for VMware Assured security domain then the required size is ESSENTIAL Medium.

## Using CyberScore

### How does it work?

CyberScore aims to prevent harm being done to your organisation by providing a view of your security posture so you can take remedial action. The service scans your internal network using a scanner deployed into your environment, and scans your external, internet facing network from a scanner based in CyberScore HQ, to generate a *CyberScore*, along with Get Well plans and detailed technical reports. Following the scan you can create task lists and Get Well plans to enable you to fix vulnerabilities. All vulnerabilities are listed, highlighting which ones are most important, either because of their nature or their prevalence.

### Why do I need it?

You should use CyberScore as part of a strategy to ensure all systems are secure and free from vulnerabilities, and used in conjunction with change control, QA and testing. You can also use it to:

- Understand what you’re running in your organisation and what its current security posture state is

- Help prepare for a Cyber Essentials+ accreditation

- Act as a routine check outside of CHECK tests to ensure new threats are identified early

- Track and evidence how you’re improving your security posture over time

- Lower the cost of managing the security of your environments

### Are there any sample reports to see what the output looks like?

Yes, we have these sample reports available within our website:

- [Example technical report](https://ukcloud.com/our-products/cyberscore/)

- [Example Get Well plan](https://ukcloud.com/our-products/cyberscore/)

### How often do you recommend I scan and analyse my networks?

We recommend that you plan to monitor your CyberScore daily or weekly, and that you plan to analyse your scans at least monthly. Scanning frequently and monitoring your CyberScore will give you confidence on your cyber risk exposure and alert you if, for example, any new vulnerabilities or patches have been released, or there is a new misconfiguration, which has reduced your CyberScore. If your CyberScore remains satisfactory then you don’t need to do anything, but if it goes down then you will be aware and able to remediate the vulnerability quickly. Your security is only as good as your weakest host.

### Why are authenticated scans necessary?

Using credentials is standard practice when performing vulnerability scans of this nature irrespective of the tool used. The scanner will, by default, carry out an unauthenticated scan which can only perform an outside-in probe of a target host. An authenticated scan, on the other hand, enables the scanner to securely log in to each target host and carry out a thorough investigation of what's installed and how it's configured. For more information, visit [Authenticated scans](https://secure.cyberscore.com/support/scanner#authenticated-scans)<sup>*</sup> on the CyberScore Portal.

### Does it have to scan all the IP addresses?

No, you can set an IP address range, upload a .`csv` file where you can import a list of IP addresses you have elsewhere, set it to scan for a single device and also have multiple scans configured, though it will depend on your environment.

### How does CyberScore categorise vulnerabilities?

Vulnerabilities are sorted into Application Patching, OS Patching, Misconfigurations, and Improving Resilience. If any vulnerabilities are found after scanning, they are rated by severity into Critical, High, Medium, Low, and Negligible.

### How secure is my data with CyberScore?

To minimise the risk to the client organisation, all vulnerability data is removed from a CyberScore scanner once the data has been successfully uploaded. Exposure of the CyberScore platform to insider threats is minimised by stringently limiting the number of XQ staff with any form of access to the live platform environment.

All cryptographically-derived credentials, such as VPN and SSH certificates, are generated using strong cryptography, contain unique identifiers, and are signed by a central XQ certification authority with a limited period of validity.  These credentials can be immediately revoked using certificate revocation lists distributed to individual devices and endpoints.

## Billing

### How much does it cost?

Using CyberScore is free and provides your CyberScore and high-level information.

To unlock the full CyberScore data, sort vulnerabilities, generate or share your Get Well plans, patch reports and technical reports, you’ll be required to pay for CyberScore. Full pricing is available in the [3rd Party Pricing Guide](https://ukcloud.com/wp-content/uploads/2019/06/ukcloud-3rd-party-software-pricing-guide-11.0.pdf).

### How many credits will I need to buy?

You'll need a credit for each IP address that is scanned. When clicking **analyse scan**, if you don't have enough credits for the number of IP addresses scanned, a pop up message will appear saying how many credits are needed and gives you the option for buying more credits.

### Is there a free trial?

A free trial of CyberScore is available for a 2-week period to scan up to 20 devices.

### How can I pay for this service?

You can pay for CyberScore by direct bank transfer (BACS/CHAPS) to UKCloud. You can find bank details for payment on your invoice.

If you signed up with a credit or debit card, your payment card will be automatically charged no sooner than seven (7) days after the invoice date.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
