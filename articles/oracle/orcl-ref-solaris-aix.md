---
title: Compatibility with Solaris and AIX | UKCloud Ltd
description: Provides advice on how to migrate your applications to UKCloud for Oracle Software depending on the Oracle platform you're using
services: oracle
author: Sue Highmoor
reviewer:
lastreviewed: 12/10/2018 17:42:06

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Compatibility with Solaris and AIX
toc_fullpath: Reference/orcl-ref-solaris-aix.md
toc_mdlink: orcl-ref-solaris-aix.md
---

# Compatibility with Solaris and AIX

## Overview

This article provides advice about how you can migrate your applications to UKCloud for Oracle Software depending on the Oracle platform you're using.

## Solaris and AIX compatibility

Use the diagram below to determine if your current platform is compatible with our Oracle cloud.

![Solaris and AIX compatibility](images/orcl-solaris-aix.png)

## Solaris x86

As Solaris x86 is compatible with virtualisation, it's possible to bring your Solaris workload to our Oracle cloud. We provide a Solaris x86 template for you to use to build your Oracle virtual machines.

You may need to talk to your Technical Account Manager or Cloud Architect to help with the specifics of the project.

## Solaris SPARC

SPARC is a flavour of Solaris that requires SPARC servers to function. However, it may be possible to transform your workload to be compatible with OVM by converting it to Solaris x86.

If you want to use UKCloud for Oracle Software with SPARC, contact your Technical Account Manager or Cloud Architect to discuss how you could achieve this.

## AIX

As AIX is tied to IBM hardware, it's not possible to run natively in our Oracle cloud. However, with the correct scoping and technical assistance, it may be possible to transform the application stack to be OVM-compatible.

If you want to use UKCloud for Oracle Software with AIX, contact your Technical Account Manager or Cloud Architect to discuss how this could be achieved.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
