---
title: Browser requirements for services on the UKCloud platform | UKCloud Ltd
description: Provides information about browser requirements for various services on the UKCloud platform
services: other
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: Reference/other-ref-browsers.md
toc_mdlink: other-ref-browsers.md
---

# Browser requirements for services on the UKCloud platform

## Overview

To get the best interaction with the UKCloud platform, it's important to use a browser that is compatible with all aspects of the services with which you interact.

This document outlines the browser requirement for UKCloud services.

## UKCloud for VMware

For UKCloud for VMware, we recommend that you use the Mozilla Firefox Extended Support Release (ESR 52) 32-bit browser. This browser is supported by both the UKCloud Portal and by the Web Console for vCloud Director 8.20 (the version used by UKCloud for VMware).

Firefox ESR 52 is an older version of Firefox, updated with new security patches, that remains compatible with the plugin type that the vCloud Director Web Console uses on our platform. You can find Firefox ESR at:

<https://www.mozilla.org/en-US/firefox/organizations/>

> [!NOTE]
> Make sure you download ESR 52, which is the last ESR release to support legacy add-ons. Support for ESR 52 ends in August 2018, but by this time we will have upgraded UKCloud for VMware to vCloud Director 9.1, which will eliminate the need for the Web Console plugin. For more information, see <https://blog.mozilla.org/addons/2017/10/03/legacy-add-on-support-on-firefox-esr/>. You should also make sure that you download the 32-bit version of the browser.

Although Internet Explorer 8.*x* , 9.*x* and 10.*x* are supported by the vCloud Director 8.20 Web Console, if you've applied any group policy restrictions you may encounter problems.

The vCloud Director Web Console has the following additional requirements:

- Adobe Flash Player version 11.2 or later (32-bit version only)

    > [!NOTE]
    > This is a known issue with Adobe Flash Player version 27.0.0.170. If you encounter problems, make sure you update to version 27.0.0.183 or later.

- JRE 1.6.0 update 10 or later installed and enabled (32-bit version only)

> [!NOTE]
> VMware are redeveloping the Flash-based UI for vCloud Director and replacing it with a fully-featured HTML5-based interface. The first part of this redeveloped UI (provding HTML5 options for advanced networking features) has been made available in vCloud Director 8.20. More features will move to an HTML5-based UI in future releases.

## UKCloud for OpenStack

UKCloud for OpenStack is powered by OpenStack and uses the Horizon project to provide its dashboard capabilities. Horizon is built around modern HTML5 standards and requires no auxiliary plugins to operate. Therefore, it is compatible with all latest browser versions.

## UKCloud for Microsoft Azure

Interaction with UKCloud for Microsoft Azure is through the Azure Stack portal. Microsoft recommends using the most up-to-date browser for your operating system.

## Cloud GPU

Cloud GPU has the same browser requirements as [UKCloud for VMware](#ukcloud-for-vmware).

## High Performance Compute

High Performance Compute has the same browser requirements as [UKCloud for VMware](#ukcloud-for-vmware).

#Email and Collaboration as a Service

For the most up to date list of supported browsers for Email and Collaboration as a Service, refer to the [*Zimbra Collaboration Supported Systems*](https://wiki.zimbra.com/wiki/Zimbra_Releases/8.7.0/Supported_Systems) document.

- Firefox and Chrome on Windows, Mac, Linux
- Internet Explorer on Windows
- Safari on Mac and Windows

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved.