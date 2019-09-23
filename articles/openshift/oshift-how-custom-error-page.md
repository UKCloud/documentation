---
title: How to customise the Application Not Available page | UKCloud Ltd
description: Explains how to change the error page served by the OpenShift routers
services: openshift
author: Gareth Ellner
reviewer:
lastreviewed: 

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Customise the router error page
toc_fullpath: How To/oshift-how-custom-error-page.md
toc_mdlink: oshift-how-custom-error-page.md
---

# How to customise the "Application Not Available" page

## Overview

UKCloud for OpenShift enables you to develop, deploy, and manage digital and container-based applications seamlessly across local physical or virtual environments, with full portability to and from UKCloud.

This article explains how you can edit the "Application Not Available" (503 error) page which is returned by OpenShift routers when an application is unavailable or when an invalid route is accessed.

### Intended audience

This article assumes familiarity with the Linux command line, and with the `oc` command set to manage an OpenShift cluster.

### Prerequisites

To complete the steps in this article, you must have the `oc` command installed and have a suitable account on your OpenShift cluster. Specifically, it is assumed you know the authentication credentials that need to be supplied to `oc login`.

Your OpenShift cluster must be version 3.11 or later, and must be enabled for router logging. If your OpenShift routers do not have the "syslog" sidecar container enabled then raise a request on the UKCloud Portal requesting this functionality.

## Editing the "Application Not Available" page

On your client PC, create a file called `error-page-503.http` containing the HTML required for the custom error page with the following headers at the top of the file:

       HTTP/1.0 503 Service Unavailable
       Pragma: no-cache
       Cache-Control: private, max-age=0, no-cache, no-store
       Connection: close
       Content-Type: text/html
       
       <html>
       <head>
       ...

	   
