---
title: Getting Started Guide for UKCloud for OpenShift trials| UKCloud Ltd
description: Provides information to get up and running with UKCloud for OpenShift trials
services: openshift
author: Mudasar Hussain

toc_rootlink: Getting Started
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for OpenShift
toc_fullpath: Getting Started/oshift-trials-gs.md
toc_mdlink: oshift-trials-gs.md
---

# Getting Started Guide for UKCloud for OpenShift trials

## Overview

Welcome to your Red Hat&trade; OpenShift on UKCloud trial. Your trial OpenShift cluster is a secure, single-tenant private deployment on UKClouds assured OpenStack cloud which avoids any noisy neighbour issues. During an OpenShift trial the OpenShift cluster is typically only connected to the internet, however connectivity to many other Government Community Networks is available in OpenShift clusters post trial phase. The purpose of an OpenShift trial is for customers to get hands on with Red Hat&trade; OpenShift container orchestration technology to see if this is the correct technology for them.

### Intended audience

This guide is intended for developers who have signed up for a OpenShift trial with UKCloud. Developers are expected to have a good understanding of containerisation and container orchestration technologies to maximise their benefit from an OpenShift trial.

## Introduction to UKCloud for OpenShift trials

OpenShift is a platform as a service, this means that you no longer need to worry about the underlying hardware or operating system, instead you can focus on developing, deploying, scaling and monitoring your applications in OpenShift which maximises your returns on investment both monetary and time.

With UKCloud OpenShift you have admin access to OpenShift giving you the control you need to create, deploy and administer your cluster as you see fit.

All OpenShift deployments get a starter pack which includes the management and orchestration planes of OpenShift. These are essentially 3 Master nodes, 2 Infrastructure nodes and load balancers for the control and data planes.

During a trial each cluster is also provisioned with 2 small run time packs. These are essentially 2 OpenStack VM's running RedHat atomic OS with 16GB RAM, 2vCPU's and 100GB disks each. This is also the minimum number of Runtime Packs UKCloud recommends in each OpenShift deployment in order to provide minimal resilience and enable interruption free patching. After the trial phase it is possible to deploy larger and more nodes for your cluster.

**OpenShift documentation:** [*Architecture*](https://docs.openshift.com/container-platform/3.11/architecture/index.html)

## GUI and CLI Access

In order to access the OpenShift cluster GUI customers require a internet-enabled device running a HTML5 capable browser and need to be set up for access in the UKCloud Portal. Customers will also be set up with the relevant access in their OpenShift deployment.

**OpenShift documentation:** [*Web Console Walkthrough*](https://docs.openshift.com/container-platform/3.11/getting_started/developers_console.html)

In addition to GUI access customers can also access OpenShift through the CLI, in order to do this customers need to have installed the OC client on their machines. 

**OpenShift documentation:** [*Installing the OC CLI*](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html#installing-the-cli)

## Storage

Each trial deployment has a block storage limit allocated to the OpenStack project of 2TB. The storage is available to the OpenShift projects customers deploy within OpenShift, customers can consume that storage by creating Persistant Storage Claims for there applications. It is good practice to use PVC's for any persistant storage requirements as any data stored within pods will be lost when clusters are patched. After trials if customers require more than 2TB of storage to be available to there clusters than customers can request this. 

OpenShift is deployed with an internal image registry with a 60GB capacity. Customers can make use of this registry which is backed by UKClouds object storage. This does not come out of customers 2TB storage capacity, rather this is in addition to customers 2TB data limit. However UKCloud do provision ElasticSearch, FluentD and Kibana stack which uses 20GB and Hawkular Metrics backed by a Cassandra database which uses 10GB and the Prometheus Operator which uses 106GB of tier 2 storage which is taken out of the 2TB storage limit.  

## Image Security

Customers should take care when creating there container images to ensure the images do not run as root. Containers should be set up to run as a user which has just enough rights to run the container workload. 

**OpenShift documentation:** [*Creating images*](https://docs.openshift.com/container-platform/3.11/creating_images/index.html) and [*Using images*](https://docs.openshift.com/container-platform/3.11/getting_started/index.html)

## RedHat OpenShift Getting Started Documentation

**OpenShift documentation:** [*Getting Started*](https://www.openshift.com/learn/get-started/) and [*Getting Started Docs*](https://docs.openshift.com/container-platform/3.11/getting_started/index.html)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
