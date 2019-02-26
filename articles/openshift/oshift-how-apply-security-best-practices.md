---
title: How to apply security best practices in OpenShift
description: Apply security best practices in OpenShift
services: openshift
author: Mudasar Hussain
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Apply security best practices in OpenShift
toc_fullpath: How To/apply-security-best-practices.md
toc_mdlink: oshift-how-apply-security-best-practices.md
---

# How to apply security best practices in OpenShift

## Overview

This knowledge centre article sets out some of the best practices which can be adhered to in order to minimise the attack vector to a UKCloud OpenShift cluster and its workloads. As the nature of running container-based workloads reduces the threat to your underlying infrastructure, it is not completely eliminated, as such great care and attention must be taken when designing, developing and deploying your container-based workloads to minimise the risks to your container-based deployments in UKCloud OpenShift. Unfortunately, as is the nature of technology any cloud-based service is vulnerable to exploits from both hackers and insiders just the same as traditional environments. There are risks of data stealing, crypto mining, ransomware and service disruption to name a few.

### Intended audience

This article is at everybody who is using UKCloud OpenShift. It will highlight just some of the best practices to keep OpenShift workloads secure.

### Security best practices for UKCloud OpenShift

- Role Based Access Control - Within OpenShift users are granted various levels of access which can be cluster-wide or limited to a particular project within OpenShift. Both the users and groups can be associated with multiple roles at the same time. Users with the cluster-admin default cluster role bound cluster-wide can perform any action on any resource. Users with the admin default cluster role bound locally can manage roles and bindings in that project. Please see a pre-defined list of cluster roles and local roles [here] (https://docs.openshift.com/container-platform/3.11/architecture/additional_concepts/authorization.html#roles). It is good practice to follow the 'Principle of least Access' with OpenShift access. Customers should follow the following guide to create [new OpenShift users](https://docs.ukcloud.com/articles/openshift/oshift-how-create-users.html). This guide also explains how to enable two-factor authentication (2FA) when logging in to OpenShift. Users are also capable of changing their passwords regularly from the UKCloud portal.
Users with access to UKCloud OpenShift should ensure account credentials are not shared rather individual user accounts are created for each individual user with the correct role binding. With this said individual users should also ensure the physical security of the terminal from which they login from.

- Service accounts - Service accounts should be used for all API access which is done by an automated processes, never using a regular users credentials. Usually a service accounts username is the same as the project it is created for followed by its name.

    ```bash
    i.e system:serviceaccount:<project>:<name>
    e.g system:serviceaccount:continious-intergration:jenkins
    ```

You can read more about Service accounts [here] (https://docs.openshift.com/container-platform/3.11/dev_guide/service_accounts.html)

- Creating and deploying vulnerable container images - There have many incidents in recent history whereby containers which contain severe vulnerabilities have been deployed into production clusters. To avoid this from happening users should use base images from trusted sources. i.e from RedHats container registry. These containers are scanned for vulnerabilities on a daily basis and given a security rating based on known security risks at that moment in time. Docker Hub also provides some certified containers. Users can also choose to build their own base containers from scratch. However, containers built from scratch could still contain vulnerable packages. Therefore, it would be good practice to set up an automated image scanning process as part of your container building/deploying process which can scan the built image and provide an image security rating. It is also possible to use these image scanning tools to certify your own images before they are deployed so that only images with a security rating which has been deemed to be satisfactory by your OpenShift administrators are deployed.
Just some container image scanning tools are as follows:
  -  OpenSCAP-docker
  -  Black Duck Hub
  -  JFrog Xray
  -  Twistlock
  -  Image-inspector
  -  Clair

User should also apply 'Principle of least Access' with containers too. Containers should never be run as root user instead always run as a user with just enough privileges to run the required container work load.

- Secrets - Sensitive information like passwords, SSH Keys, tokens, Certificates etc are some examples of what could be considered to be a secret. As such secrets should never be stored in any place in readable format (Source code, GitHub Repo etc). It is imperative that when secrets are required in OpenShift they are set up in OpenShift as OpenShift Secrets. This allows the secrets to be encrypted within OpenShift and accessed only by the relevant containers at the time of need.

- Limiting Resources - Containers should always be set up with resources limits, in the case of a denial of service attack or just a burst of very high load on a service these resource limits will prevent pods from using all available resources on the node they are running on. You can read more about setting resource quotas and limits [here](https://docs.openshift.com/container-platform/3.11/dev_guide/compute_resources.html)

- Privileged ports - TCP/IP ports below port 1024 are considered to be Privileged Ports and should not be used to front any Service that is deployed into OpenShift.

- Route security - Within OpenShift users can expose their services using routes. Creating a route to a service allows the user to access the service through a URL on a browser. By default, the URLS which are created are exposed on HTTP port 80 without any SSL certificate. Users can secure these routes with SSL encryption using one of three SSL termination methods:
     1. Edge - SSL termination is done on the HAProxy router from which point onwards the traffic is un-encrypted.
     2. Passthrough termination - No SSL de-Cryption on the routers instead connections are passed straight through the routers to the OpenShift apps which are then responsible for SSL certificate termination and traffic decryption.
     3. Re-Encrypt - This process uses 2 certificates, first certificate is held on HAProxy router and the second in the pods. Whereby securing the traffic all the way down to the application.

It is possible to further securing routes by applying IP Whitelisting on routes, we have documented this process here [IP Whitelisting](https://docs.ukcloud.com/articles/openshift/oshift-how-restrict-access-to-openshift-routes-by-ip-address.html).

UKCloud can whitelist source IP's/Subnets in OpenShift to the OpenShift GUI/Metrics page and the services that customers deploy which are exposed on various community networks with the use of security groups. These restrictions can be applied at the time cluster deployment or later through a service request to UKCloud OpenShift team.

- OpenShift uses a Software-Defined Networking (SDN) approach to provide cluster wide networking that enables communication between pods across the OpenShift cluster. This Container Networking Interface (CNI) runs in the 'OpenShift SDN' project and creates an overlay network using the Open vSwitch (OVS) networking plugin. However, the main thing to note here is that UKCloud will be deploying OpenShift clusters as of February 2019 with the ovs-networkpolicy plugin. This plugin allows project administrators to configure their own isolation policies using [NetworkPolicy objects](https://docs.openshift.com/container-platform/3.6/admin_guide/managing_networking.html#admin-guide-networking-networkpolicy).

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.


