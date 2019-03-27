---
title: Security best practices for UKCloud for Openshift
description: Provides security best practices in OpenShift that you could follow to keep the risk of attack to your UKCloud OpenShift deployment to a minimum 
services: openshift
author: Mudasar Hussain
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Security best practices
toc_fullpath: Reference/oshift-ref-security-best-practices.md
toc_mdlink: oshift-ref-security-best-practices.md
---

# Security best practices for UKCloud for OpenShift

## Overview

As is the nature of technology, any cloud-based service is vulnerable to exploits from both hackers and insiders just the same as traditional environments. Such risks include data stealing, crypto-mining, ransomware and service disruption to name a few. Although the nature of running container-based workloads reduces the threat to your underlying infrastructure, that threat is not completely eliminated and you should still take care when designing, developing and deploying your container-based workloads to minimise the risks to those deployments in UKCloud for OpenShift.

This article sets out some best practices to follow to minimise the attack vector to a UKCloud for OpenShift cluster and its workloads.

### Intended audience

This article is intended for anyone who is using UKCloud for OpenShift. It highlights some of the best practices to keep OpenShift workloads secure.

## Role Based Access Control

Within OpenShift, you can grant various levels of access to users, which can be cluster-wide or limited to a particular OpenShift object. You can associate users and groups with multiple roles at the same time.

You can view a pre-defined list of cluster roles and local roles [here](https://docs.openshift.com/container-platform/3.11/architecture/additional_concepts/authorization.html#roles).

 - Users with the cluster-admin default cluster role bound cluster-wide can perform any action on any resource.

 - Users with the admin default cluster role bound locally can manage roles and bindings in that project.

It is good practice to follow the [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) with OpenShift access. For information about creating new OpenShift users, see [*How to create new UKCloud for OpenShift users in the UKCloud Portal*](oshift-how-create-users.md). This article also explains how to enable two-factor authentication (2FA) when logging in to OpenShift. Users are also encouraged to change their passwords regularly, which is possible to do from the UKCloud Portal.

You should ensure that OpenShift account credentials are not shared between multiple users. Instead, you should create individual user accounts for each user with the correct role binding. It is also the responsibility of each individual user to ensure the physical security of the terminal from which they access OpenShift.

## Service accounts

You should use service accounts for all API access, which should be accomplished by an automated process; never use a regular user's credentials. Usually a service account's username is the same as the project it is created for, followed by its name:

```bash
system:serviceaccount:<project>:<name>. 
```

For example:

```bash
system:serviceaccount:continuous-integration:jenkins
```

You can read more about service accounts [here](https://docs.openshift.com/container-platform/3.11/dev_guide/service_accounts.html).

## Creating and deploying vulnerable container images

There have been many incidents in recent history whereby containers that contain severe vulnerabilities have been deployed into production clusters. To avoid this from happening, you should use base images from trusted sources, that is, from Red Hat's container registry. These containers are scanned for vulnerabilities on a daily basis and given a security rating based on known security risks at that moment in time. Docker Hub also provides some certified containers. Users can also choose to build their own base containers from scratch. However, containers built from scratch could still contain vulnerable packages. Therefore, it is good practice to set up an automated image scanning process, as part of your container building and deployment process, which can scan the built image and provide an image security rating. It is also possible to use image scanning tools to certify your own images before they are deployed so that only images with an acceptable security rating set by your OpenShift administrators are deployed.

Some container image scanning tools include:

  -  OpenSCAP-docker

  -  Black Duck Hub

  -  JFrog Xray

  -  Twistlock

  -  Image-inspector

  -  Clair

You should also apply the Principle of least privilege with containers too. If it can be avoided you should never run containers as the root user; instead always run as a user with just enough privileges to run the required container workload.

## Secrets

Sensitive information, such as passwords, SSH keys, tokens and certificates, are examples of information that could be considered secret. Such secrets should never be stored in any place in readable format (for example, in source code, GitHub repositories, and so on). It is imperative that when secrets are required in OpenShift, they are set up as OpenShift Secrets. This allows the secrets to be encrypted within OpenShift and accessed only by the relevant containers when they are needed.

## Limiting resources

You should always set up containers with resource limits. In the event of a denial of service attack, or even just a burst of very high load on a service, these resource limits will prevent pods from using all available resources in the node they are running on. You can read more about setting resource quotas and limits [here](https://docs.openshift.com/container-platform/3.11/dev_guide/compute_resources.html).

## Privileged ports

TCP/IP ports below port 1024 are considered to be privileged ports and you should not use them to front any service that is deployed into OpenShift.

## Route security

Within OpenShift, you can expose your services using routes. Creating a route to a service enables your users to access the service through a URL on a browser. By default, the URLs that are created are exposed on HTTP port 80 without any SSL certificate. You can secure these routes with SSL encryption using one of three SSL termination methods:

 - Edge - SSL termination is done on the HAProxy router from which point onwards the traffic is un-encrypted

 - Passthrough termination - There is no SSL decryption on the routers; instead connections are passed straight through the routers to the OpenShift applications, which are then responsible for SSL certificate termination and traffic decryption.

 - Re-Encrypt - This process uses two certificates: the first certificate is held on the HAProxy router and the second in the pods. This secures traffic all the way down to the application.

It is possible to further secure routes by applying IP whitelisting on routes. We have documented the process of IP whitelisting [here](oshift-how-restrict-access-to-openshift-routes-by-ip-address.md).

UKCloud can whitelist individual IP addresses or entire subnets to access the OpenShift console and metrics page. It is also possible to do the same for the services that you create and deploy in OpenShift, even if those services are exposed to various Government Community Networks with the use of security groups. These restrictions can be applied at the time the cluster is deployed or can be done later via a Service Request to the UKCloud OpenShift team.

## Software-defined networking (SDN)

OpenShift uses a software-defined networking (SDN) approach to provide cluster-wide networking that enables communication between pods across the OpenShift cluster. This Container Networking Interface (CNI) runs in the OpenShift SDN project and creates an overlay network using the Open vSwitch (OVS) networking plugin.

However, from February 2019, UKCloud will be deploying OpenShift clusters with the ovs-networkpolicy plugin. This plugin allows project administrators to configure their own isolation policies using [NetworkPolicy objects](https://docs.openshift.com/container-platform/3.11/admin_guide/managing_networking.html#admin-guide-networking-networkpolicy). You can find an article regarding NetworkPolicy [here](oshift-netpol.md).


## Feedback
If you find an issue with this article, click *Improve this Doc* to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com/). Alternatively, you can contact us at <products@ukcloud.com>.
