---
title: Deploying an application into OpenShift Service Mesh
description:
services: openshift
author: Andrew Garner
reviewer: Alex Lillistone
lastreviewed: 05/08/2022

toc_rootlink: Reference
toc_sub1: OpenShift v4.x
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Deploying an application into OpenShift Service Mesh
toc_fullpath: Reference/v4/oshift-ref-deploy-app-into-service-mesh.md
toc_mdlink: oshift-ref-deploy-app-into-service-mesh.md
---

# Deploying an application into OpenShift Service Mesh

## Overview

Red Hat OpenShift Service Mesh (OSM) provides an easy way to create a network of deployed services that provides discovery, load balancing, service-to-service authentication, failure recovery, metrics and monitoring. OSM is based on the open source [Istio](https://istio.io/) project.

This article explains how to deploy a cloud-native sample application into OSM and highlights some key differences with using OSM compared to Istio.

### Intended audience

This article is intended for teams familiar with OpenShift, microservices and the service mesh concept who are preparing to deploy microservices into OpenShift Service Mesh.

### Prerequisites

- Familiarity with the concepts involved in a Service Mesh.

- The OpenShift Service Mesh (OSM) Operator is installed into your OpenShift cluster. See the [OpenShift documentation](https://docs.openshift.com/container-platform/4.7/service_mesh/v2x/preparing-ossm-installation.html) for an installation guide.

- The istio-system project exists and the target project for the sample application deployment has been added to the OSM `ServiceMeshMemberRole` configuration.

## Preparing services for deployment

### Sidecar injection

The OSM uses the same Envoy proxy sidecar container as Istio does to manage traffic within the service mesh. OSM requires deployments to specify the annotation `sidecar.istio.io/inject: "true"` to opt-in to the sidecar injection.

### Traffic ingress

Incoming traffic must enter the Service Mesh via a route that the Service Mesh has created. A route will be automatically created for every instance of a gateway. Replace any explicit route creation with gateways.

When using the istio-system as a multi-tenant control plane, each ingress needs a VirtualService instance, which defines the traffic routing at the point of ingress. As a minimum, the traffic must be routed to the correct VirtualService based on the traffic's incoming DNS name.

### Services

Kiali can access the Service Mesh components configuration and will report on configuration errors. While not required for functionality, all services should be labelled and ports should have a name and protocol defined to avoid Kiali reporting configuration errors.

### Internal traffic routing

Destination rules for each service must exist for traffic to be routed to the pods. In the most basic example, all traffic is routed to all pods in a service. The destination rules typically use the version label on pods to route traffic accordingly.

### Pods

Pods must have specific labels for Pilot to manage traffic routing and for Kiali to display the service mesh correctly. Pods must have metadata labels called `app` and `version`, which identify the microservice application and the version of the application code running in the pod.

## Example application

Weaveworks has a sample microservice-based application called the Sock Shop that UKCloud has modified to run inside OSM v1. See the sample code on GitHub at https://github.com/UKCloud/sock-shop-service-mesh.

With the release of OSM v2, Red Hat has documented how to install a sample application into OSM v2. You can find more details in the [Red Hat Service Mesh documentation](https://docs.openshift.com/container-platform/4.7/service_mesh/v2x/ossm-create-mesh.html#ossm-tutorial-bookinfo-overview_ossm-create-mesh).

## References

- Weaveworks Sock Shop project - https://microservices-demo.github.io/

- UKCloud Sock Shop for OSM v1 - https://github.com/UKCloud/sock-shop-service-mesh

- Deploying applications on Red Hat OpenShift Service Mesh v2 - https://docs.openshift.com/container-platform/4.7/service_mesh/v2x/ossm-create-mesh.html

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
