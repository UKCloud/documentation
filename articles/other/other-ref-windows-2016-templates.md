---
title: Windows Server 2016 templates | UKCloud Ltd
description: This article explains the current status and availability of Windows Server 2016 templates on UKCloud compute services.
services: x-platform
author: Sue Highmoor
reviewer:
lastreviewed: 23/07/2018 14:44:15
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Windows Server 2016 templates
toc_fullpath: Reference/other-ref-windows-2016-templates.md
toc_mdlink: other-ref-windows-2016-templates.md
---

# Windows Server 2016 templates

## Overview

Microsoft launched Windows Server 2016 on 13 October 2016 and we're committed to supporting this latest operating system (OS) and making it available on our platform.

## Windows Server 2016 support for our compute services (UKCloud for VMware and UKCloud for OpenStack)

To enable Windows Server 2016 for our compute services, we've deployed new Key Management Servers (KMS) and updated host hardware versions to enable platform‑wide deployment of the new OS.

### UKCloud for VMware

In vCloud Director, we provide a public catalogue (Windows Templates Catalogue) for you to use that contains standard virtual machine (VM) sizes and operating systems. This public catalogue in our Assured and Elevated security domains now includes templates for Windows Server 2016.

The Windows Template Catalogue for UKCloud for VMware includes templates for both Datacenter and Standard Editions of Windows 2016. Templates are available in our standard range of resource configurations (CPU/RAM).

You can license the templates using our existing Microsoft KMS infrastructure, with the following caveats:

- Windows 2016 is available for our compute services provided 2016 templates are used. However, VMware does not currently support Windows 2016 and we do not have a timescale for when this will be available.

- The Guest OS Customisation feature in vCloud Director is available for Microsoft Windows Server 2016 (64-bit), however it is not officially supported by VMware.

- The templates have been built as OS type Windows Server 2012 (64-bit) -- see point above.

For more information about licensing Windows VMs, see [*How to set up the UKCloud Key Management Server*](../vmware/vmw-how-setup-kms.md).

You can deploy and manage the Windows Server 2016 templates in exactly the same way as any other template from our public catalogue. For more information, see [*How to create a virtual machine from a template*](../vmware/vmw-how-create-vm-from-template.md).

### UKCloud for OpenStack

In UKCloud for OpenStack, we provide an image catalogue containing Windows Server 2016 Standard image, which you can use to build instances from.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
