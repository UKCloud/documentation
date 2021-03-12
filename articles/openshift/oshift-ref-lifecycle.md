---
title: UKCloud for Managed OpenShift lifecycle and patch management
description: Provides an overview of how UKCloud manages the patching and lifecycle support of its OpenShift service
services: openshift
author: sdixon
reviewer: koneill
lastreviewed: 12/03/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Lifecycle and patch management
toc_fullpath: Reference/oshift-ref-lifecycle.md
toc_mdlink: oshift-ref-lifecycle.md
---

# UKCloud for Managed OpenShift life cycle and patch management

## Overview

This article outlines the lifecycle of UKCloud-supported OpenShift releases, along with UKCloud's approach to patching existing OpenShift environments so that you can effectively plan, deploy and support your infrastructure. The purpose of this article is to provide as much transparency as possible, but UKCloud may make exceptions from the process described should the need arise.

### Intended audience

Administrators and operators of the UKCloud for Managed OpenShift service.

## Lifecycle management

Red Hat's official versioning for their OpenShift Container Platform is _**X.Y**_ where _**X**_ indicates the major version and _**Y**_ indicates a minor version.

Although Red Hat officially fully supports each major _**X**_ version of the OpenShift Container Platform for five years, as a service provider, this duration is too long for UKCloud to ensure the highest levels of security, performance and features. As such, UKCloud will officially support the current **_(X.Y)_** and previous minor version **_(X.Y-1)_**. As minor versions are released roughly every six months, this provides the assurance that your environments will be fully supported by UKCloud for a minimum of twelve months.

![Lifecycle](images/oshift-supported-versions.png)

### Upgrades of major _**X**_ and minor _**Y**_ versions

Currently, UKCloud does not offer in-place upgrades between major versions. Customers can trigger minor version upgrades inside the cluster at any time, providing total flexibility to upgrade at a convenient time.

We require customers to stay on UKCloud-supported versions, so ask that upgrades are done in a timely manner to stay on a Y-1 release. For more information on performing updates and what happens if customers aren't on Y-1, see [*Supported customer update strategy for version 4 clusters*](oshift-how-v4-update.md). <need update branch merged first to add URL to these docs>

### Patching within current version

Red Hat routinely releases patches for vulnerabilities or issues identified within the currently supported version of OpenShift. UKCloud will release these patches to the stable update channel when they are confirmed to be fit for production workloads.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
