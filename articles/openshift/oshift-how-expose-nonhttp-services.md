---
title: How to expose non-http services externally | UKCloud Ltd
description: Explains how to expose services outside of your OpenShift cluster without using HTTP or HTTPS
services: openshift
author: Kieran O'Neill

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Expose Non-HTTP Services Externally
toc_fullpath: How To/oshift-how-expose-nonhttp-services.md
toc_mdlink: oshift-how-expose-nonhttp-services.md
---

# How to expose non-http services externally

## Overview

UKCloud for OpenShift enables you to develop, deploy, and manage digital and container-based applications seamlessly across local physical or virtual environments, with full portability to and from UKCloud.

This guide explains how you can expose services outside of your OpenShift cluster without using routes.

### Intended audience

This guide assumes familiarity with services and routes in OpenShift and access to an account with cluster-admin permissions.

### Prerequisites

To complete the steps in this guide, you must have the a cluster deployed on the right version of our code. You can raise a support ticket to check if this is possible in your cluster or to request a newer cluster deployed from the relevant code.

### Getting the external IP

You will need to raise a support request with us and provide us with; the network you would like to expose services on and the ports/protocols of the services you will be exposing. We will run a stack update against your environment to create the virtual infrastructure needed and provide you with the publically accessible IP and the local IP this maps to. The local IP will be important for the upcoming steps.

> [!NOTE]
> You can request multiple ports/protocols and networks for external services.

