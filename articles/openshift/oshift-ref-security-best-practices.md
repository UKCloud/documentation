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

 - Users with the admin default cluster role bound locally can manage roles and bindings within a project.

It is good practice to follow the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) with OpenShift access. For information about creating new OpenShift users, see [*How to create new UKCloud for OpenShift users in the UKCloud Portal*](oshift-how-create-users.md). This article also explains how to enable two-factor authentication (2FA) when logging in to OpenShift. Users are also encouraged to change their passwords regularly, which is possible to do from the UKCloud Portal. You should ensure that OpenShift account credentials are not shared between multiple users. Instead, you should create individual user accounts for each user with the correct role binding. It is also the responsibility of each individual user to ensure the physical security of the terminal from which they access OpenShift.

You should also apply the principle of least privilege to your containers' workloads. This means you should run your workloads as a user with just enough permissions to run the workload within your containers, particularly avoiding running privileged containers if this can be avoided. If however a workload does require to be run as a privileged container, then you should ensure that you set the correct security context constraint (SCC) to run that container. You can read more about setting the correct SCC [here](https://docs.openshift.com/container-platform/3.11/admin_guide/manage_scc.html). Containers that try to run as priviledged without the relevant SCC set will fail to run.

## Service accounts

You should use service accounts for all API access, which should be accomplished by an automated process; never use a regular user's credentials. Usually a service account's username is the same as the project it is created for, followed by its name:

```
system:serviceaccount:<project>:<name>
```

For example:

```
system:serviceaccount:continuous-integration:jenkins
```

You can read more about service accounts [here](https://docs.openshift.com/container-platform/3.11/dev_guide/service_accounts.html).

## Creating and deploying vulnerable container images

Just like traditional software packages, containers also run software, even if they are running that software within a self contained environment of a container. These containers can be built and run using vulnerable software packages/libraries. It is therefore considered good practice to do the following to ensure that you are not introducing vulnerable containers into your clusters:

1. Only use base images from trusted sources, for example, Red Hat's container registry. Red Hat's containers on Red Hat's container registry are scanned for vulnerabilities and given a security rating. Docker Hub also provides some certified containers that are built using best practices, tested and validated against the Docker Enterprise Edition platform and APIs, pass Dockers security requirements, and are collaboratively supported by Docker and the company responsible for the container. You can also build base containers from scratch using only the software packages you need for your workload. However, building containers from scratch and using just enough of the software packages you need to run for your workload does not guarantee that your base image is going to be free of all possible vulnerabilities as it is possible that some of those software packages could contain vulnerabilities.

2. Scan your containers with container vulnerability scanning software as part of your build or deployment process. There are numerous tools available to scan containers. These tools give you a security rating on your final container once it's been created from a secure base container. There are a number of tools available to do this, the following is a small sample we're aware of: 

    -  Black Duck Hub
  
    -  JFrog Xray
  
    -  Twistlock
  
    -  Image-inspector
  
    -  Clair
 
## Secrets

Sensitive information, such as passwords, SSH keys, tokens and certificates, are examples of information that could be considered secret. As such secrets should never be stored in any place in plain text readable format (for example, in source code, GitHub repositories, and so on). It is imperative that when secrets are required in OpenShift, they are set up as OpenShift Secrets. This allows the secrets to be encrypted within OpenShift and accessed only by the relevant containers when they are needed. However there are limits to the current OpenShift secrets ability: the secrets are encoded in base64 encryption, which can be easily decrypted, and stored secrets can be accessible from any container on the same node. You could use a popular solution like Hashicorps Vault software for secret storage. 

## Limiting resources

You should always set up containers with resource limits. In the event of a denial of service attack, or even just a burst of very high load on a service, these resource limits will prevent pods from using all available resources in the node they are running on. You can read more about setting resource quotas and limits [here](https://docs.openshift.com/container-platform/3.11/dev_guide/compute_resources.html).

## Route security

Within OpenShift, you can expose your services using routes. Creating a route to a service enables your users to access the service through a URL in a browser. If you do not specify any SSL certificates for your route than it would be exposed on HTTP port 80 without any SSL certificate. You can secure these routes with SSL encryption using one of three SSL termination methods:

 - Edge - SSL termination is done on the HAProxy router from which point onwards the traffic is un-encrypted

 - Passthrough termination - There is no SSL decryption on the routers; instead connections are passed straight through the routers to the OpenShift applications, which are then responsible for SSL certificate termination and traffic decryption.

 - Re-Encrypt - This process uses two certificates: the first certificate is held on the HAProxy router and the second in the pods. This secures traffic all the way down to the application.

### Control plane and data plane lockdown

As part of the UKCloud for OpenShift service we offer the ability to lockdown the control plane and/or data planes to your cluster. This helps to protect each of these if you know the acceptable sources for all traffic (for example only allowing control plane access from an office network or VPN). This is done with the use of security groups at the cloud platform layer outside OpenShift. These whitelists can be applied at the time of cluster deployment or later via a Service Request to the UKCloud OpenShift Support team. The information we require to apply these rules is which plane you would like these applied to, for example, control plane or data plane (specify internet or community network if applicable) and the source addresses or ranges that will be allowed access. When services are protected by these whitelists then any non-matched traffic is dropped before it reaches OpenShift.

### Whitelisting

At the OpenShift cluster level you can secure your routes by applying whitelists by IP address. The advantage of doing this is that you can do this yourself, however this does allow traffic to reach the OpenShift route before it is either allowed through or dropped based on the whitelisting you may have applied. We have documented the process of IP whitelisting [here](oshift-how-restrict-access-to-openshift-routes-by-ip-address.md). 

## Network Isolation

OpenShift uses software-defined networking (SDN) to provide cluster-wide networking that enables communication between pods across the OpenShift cluster. This Container Networking Interface (CNI) runs in the OpenShift SDN project and creates an overlay network using the Open vSwitch (OVS) SDN plugin. OVS has three different plugins based on the type of pod network cluster admins would like to create. Previously we were using the ovs-multitenant SDN plugin but, as of February 2019 and OpenShift 3.11, we have been deploying OpenShift clusters using the ovs-network-policy SDN plugin. This plugin allows project administrators to configure their own network isolation policies using [NetworkPolicy objects](https://docs.openshift.com/container-platform/3.11/admin_guide/managing_networking.html#admin-guide-networking-networkpolicy). We have documented the process of using Network Policy based isolation [here](oshift-how-use-netpol.md).


## Feedback
If you find an issue with this article, click *Improve this Doc* to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com/). Alternatively, you can contact us at <products@ukcloud.com>.
