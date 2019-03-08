---
title: Making the most of your UKCloud for OpenShift trial
description: Provides information to get up and running with UKCloud for OpenShift trials
services: openshift
author: Mudasar Hussain

toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Making the most of your UKCloud for OpenShift trial
toc_fullpath: Reference/oshift-ref-trial.md
toc_mdlink: oshift-ref-trial.md
---

# Making the most of your UKCloud for OpenShift trial

## Overview

Welcome to your UKCloud for OpenShift trial. Your trial OpenShift cluster is a secure, single-tenant private deployment on UKCloud's Assured OpenStack cloud, avoiding any noisy neighbour issues. During an OpenShift trial the OpenShift cluster is typically only connected to the internet, however connectivity to many other government community networks is available in OpenShift clusters after the trial phase. The purpose of an OpenShift trial is for you to get hands-on experience with Red Hat&trade; OpenShift container orchestration technology to see if this is the correct technology for you.

### Intended audience

This article is intended for developers who have signed up for an OpenShift trial with UKCloud. Developers are expected to have a good understanding of containerisation and container orchestration technologies to maximise their benefit from an OpenShift trial.

## Introduction to UKCloud for OpenShift trials

OpenShift provides platform-as-a-service, which means that you don't need to worry about the underlying hardware or operating system. Instead, you can focus on developing, deploying, scaling and monitoring your applications in OpenShift, maximising your return on investment in terms of money and time.

With UKCloud for OpenShift, you have administrator access to your cluster, giving you the control you need to create, deploy and administer your environment as you see fit.

All OpenShift deployments get a Foundation Pack, which includes the management and orchestration planes. These are essentially three master nodes, two infrastructure nodes and load balancers for the control and data planes.

During a trial, each cluster is also provisioned with two small Runtime Packs. These are essentially two OpenStack VMs running RedHat Atomic OS with 16GB RAM, 2vCPUs and 100GB disks each. This is also the minimum number of Runtime Packs UKCloud recommends in each OpenShift deployment in order to provide minimal resilience and enable interruption free patching. After the trial phase it is possible to deploy larger and more nodes for your cluster.

**OpenShift documentation:** [*Architecture*](https://docs.openshift.com/container-platform/3.11/architecture/index.html)

## GUI and CLI Access

To access the OpenShift cluster GUI, you need an internet-enabled device running an HTML5-capable browser. You will also be set up for access to the UKCloud Portal and given the relevant access to your OpenShift deployment.

**OpenShift documentation:** [*Web Console Walkthrough*](https://docs.openshift.com/container-platform/3.11/getting_started/developers_console.html)

In addition to GUI access, you can also access OpenShift through the CLI. To do this, you need to install the `oc` client on your machines. To avoid any compatibility issues please install the same version of the `oc` client as your OpenShift cluster. 

**OpenShift documentation:** [*Installing the OC CLI*](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html#installing-the-cli)

## Storage

Each trial deployment has a block storage quota of 2TB across either Tier 1 or Tier 2 storage. This is enforced at the OpenStack project layer. This storage is available to the projects you create within OpenShift and you can consume the storage by creating Persistent Volume Claims (PVCs) for your applications. It is good practice to use PVCs for any persistent storage requirements as any data stored within local volumes will be lost when pods are moved from one node to another; for example as a result of node evacuations during patching. You can increase your storage quotas by creating a service request in the UKCloud Portal.

OpenShift is deployed with an internal image registry making use of UKCloud's object storage service for persistence.  This includes 60GB of free storage capacity which does not consume your 2TB block storage quota; rather this is in addition to the 2TB data limit. UKCloud do provision an Elasticsearch, Fluentd and Kibana stack which uses 40GB, Hawkular Metrics backed by a Cassandra database which uses 10GB and the Prometheus Operator which uses 106GB of Tier 2 storage (which consumes some of the 2TB storage limit).

## Image Security

You should take care when creating your container images to ensure the images do not run as root. You should set up containers to run as a user who has just enough rights to run the container workload.

**OpenShift documentation:** [*Creating images*](https://docs.openshift.com/container-platform/3.11/creating_images/index.html) and [*Using images*](https://docs.openshift.com/container-platform/3.11/getting_started/index.html)

## RedHat OpenShift Getting Started Documentation

**OpenShift documentation:** [*Getting Started*](https://www.openshift.com/learn/get-started/) and [*Getting Started Docs*](https://docs.openshift.com/container-platform/3.11/getting_started/index.html)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
