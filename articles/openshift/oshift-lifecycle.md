---
title: UKCloud for OpenShift lifecycle and patch management | UKCloud Ltd
description: Provides an overview of how UKCloud manages the patching and lifecycle support of its OpenShift service
services: openshift
author: Steve Dixon
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenShift lifecycle and patch management
toc_fullpath: openshift/oshift-lifecycle.md
toc_mdlink: oshift-lifecycle.md
---

# UKCloud for OpenShift life cycle and patch management

## Overview

This article outlines the life cycle of supported OpenShift releases along with UKCloud's approach to patching exisitng OpenShift environments in order for customers to effectively plan, deploy, and support their infrastructure. UKCloud publishes this life cycle in an effort to provide as much transparency as possible and may make exceptions from these policies as conflicts may arise.

### Intended audience

Administrators and operators of the UKCloud for OpenShift service.

## Life cycle managament

Red Hat's official versioning for their OpenShift Container Platform is _**X.Y**_ where _**X**_ indicates the major version number and _**Y**_ indicates a minor version.

Although Red Hat officially fully support each major _**X**_ version of the OpenShift Container Platform for five years, as a service provider this duration is too long for UKCloud to ensure the highest levels of security, performance and features to their customers. As such, UKCloud will officially support the current and previous two minor versions **_(Y-2)_**. As minor versions are released roughly every six months, this provides users with the assurance their environments will be fully maintained for 18 months.

![Lifecycle](images/oshift-supported-versions.png)

### Upgrades of major _**X**_ and minor _**Y**_ versions

Currently UKCloud does not offer in-place upgrades. This is to provide our customers with the flexiblility to upgrade at a time convenient to them, as well as providing the ability to test exisiting code and applications against any new versions prior to moving in to production.

To facilitate any upgrades in version, UKCloud will provide the latests tested and approved release to customers free of charge for thirty days in order to conduct any testing and migrate workloads over to the new environment. At the end of thirty days UKCloud will shutdown and remove the customers old environment to prevent any double-charging.

[!NOTE]
UKCloud will actively work with the customer during this period to help ensure a smooth migration and will not turn off any old environments until advised as safe to do so by the customer.

### Patching within current version
Red Hat will routinely release patches for vulnerabilities or issues identified within the currently supported version of OpenShift. Once UKCloud has reviewed and tested any patches as being fit for release in to product, we will work with customers to advised of the patch and schedule a convenient time to apply.

## Feedback

Each article should end with a feedback section that includes the following text:

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
