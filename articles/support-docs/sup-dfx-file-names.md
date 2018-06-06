---
title: File naming conventions for UKCloud Knowledge Centre | UKCloud Ltd
description: Describes how to name files for UKCloud Knowledge Centre
services: docfx
author: Chris Black

toc_rootlink: Support Docs
toc_sub1: DocFX
toc_sub2:
toc_sub3:
toc_sub4:
toc_title:  File naming conventions for UKCloud Knowledge Centre
toc_fullpath: Support Docs/DocFX/sup-dfx-file-names.md
toc_mdlink: sup-dfx-file-names.md
---
# File naming conventions

## Articles

File names for Knowledge Centre articles should use the following file naming convention:

*`product`*-*`type`*-*`tool`*-*`topic`*

(Note the hyphen between each part of the file name.)

where

### Product

*`product`* indicates which product the topic is for:

Product | Use
--------|-------------
Cloud GPU | gpu
Cloud Storage | cs
Cross Domain Security Zone | cdsz
Disaster Recovery as a Service | dr
Email and Collaboration as a Service | email
End User Compute | euc
High Performance Compute | hpc
Migration to the Cloud | migr
Private Cloud for Compute | prc
Private Cloud for Oracle Software | pro
Private Cloud for Storage | prs
Secure Remote Access | sra
UKCloud for Microsoft Azure | azs
UKCloud for OpenShift | oshift
UKCloud for Openstack | ostack
UKCloud for Oracle Software | orcl
UKCloud for VMware | vmw
UKCloud Portal | ptl
Connectivity | conn
Cloud Enablement | enbl

### Article type

*`type`* indicates the article type:

Article type | Use
-------------|----
Getting Started Guide | gs
How To Guide | how
Reference | ref
FAQ | faq
Service Scope | sco

### Tools

*`tool`* indicates the tool used in the article (e.g., PowerShell, API, etc.). For generic topics that don't refer to a particular tool, you can leave this bit out.

### Describe the article

*`topic`* indicates the purpose of the article. Keep it brief and separate words with hyphens. For Reference articles use nouns, for How To articles start with the verb then nouns.

### Examples

Article | File name
--------|----------
Getting Started Guide for Cloud Storage | cs-gs.md
Getting Started Guide for Cloud GPU Compute | gpu-gs-compute.md
How to build virtual machines in UKCloud for VMware | vmw-how-build-vms.md
How to build your UKCloud for VMware estate using the UKCloud Portal | vmw-how-ptl-build-estate.md
Connectivity options in UKCloud for VMware | vmw-ref-connectivity-options.md
Protection for Distributed Denial of Service (DDoS) attacks | conn-ref-ddos-protection.md
Cross Domain Security Zone FAQs | cdsz-faq.md
Public Services Network (PSN) FAQs | conn-faq-psn.md
Data Transfer Facility Service Scope | enbl-sco-data-transfer-facility.md
Snapshot Protection Service Scope | vmw-sco-snapshot-protection.md

## Images

File names for images in Knowledge Centre articles should use the following file naming convention:

*`product`*-*`tool`*-*`image`*

(Note the hyphen between each part of the file name.)

where

### Product

*`product`* indicates which product the image is for (see table for article file names)

### Tools

*`tool`* indicates the tool used for the image (e.g., PowerShell, Portal, etc.). This will be different for each product.

### Image

*`image`* indicates the purpose of the image. Keep it brief and separate words with hyphens.

### Examples

Put some examples here

## Supporting articles

Documents that explain our processes and how to work with the tools that we use.

sup-*`tool`*-*`purpose`*

### Tools

Tool | Use
-----|----
DocFX | dfx
Bitbucket | bb
Confluence | conf
GitHub | gh
Generic software | sw

#### Examples

Article | File name
--------|----------
File naming conventions | sup-dfx-file-names.md