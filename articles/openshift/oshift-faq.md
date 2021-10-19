---
title: UKCloud for Red Hat OpenShift FAQs
description: Frequently asked questions about our UKCloud for Red Hat OpenShift service
services: openshift
author: mwarner
reviewer: alillistone
lastreviewed: 13/10/2020
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud for Red Hat OpenShift FAQs
toc_fullpath: FAQs/oshift-faq.md
toc_mdlink: oshift-faq.md
---

# UKCloud for Red Hat OpenShift FAQs

### What is UKCloud for Red Hat OpenShift?

UKCloud for Red Hat OpenShift is UKCloud's OpenShift powered Kubernetes Platform as a Service (PaaS). The service provides a secure, private deployment of the Red Hat&trade; OpenShift&trade; Container Platform. The service is delivered as a managed platform, enabling developers to build automation pipelines and leverage the benefits of containerised solutions, helping to deliver modern, cloud-native applications and accelerate digital transformation.

UKCloud deploys, monitors and updates the platform, freeing up your DevOps resources to focus on adding value further up the stack through the rapid delivery of quality controlled code, all without having to worry about the underlying infrastructure or platform services.

For an overview what the service offers, see the [*UKCloud for Red Hat OpenShift Service Definition*](oshift-sd.md). For specific details about the implementation and boundaries of the service, see the [*UKCloud for Red Hat OpenShift Service Scope*](oshift-sco.md).

### Why deliver UKCloud for Red Hat OpenShift as a cloud service?

Although UKCloud for Red Hat OpenShift is a simple, benefits-rich service to consume, it's a complex platform of inter-dependent servers and services, whose deployment, configuration and maintenance requires time and expertise.

By offering this service, we take on all that complexity so that customers can immediately realise the value of UKCloud for Red Hat OpenShift by simply consuming it.

### Does my data leave the UK?

As the service is delivered from UK data centres by a UK company, your data doesn't leave the UK when at rest.

### Is the service Pan Government Accredited?

UKCloud's existing PGA continues to apply to the infrastructure underpinning our services. But since the move to the Government Security Classification Policy (GSCP), we can no longer seek PGA for newer services, such as UKCloud for Red Hat OpenShift.

We are now required to self-assert our services, with customers taking responsibility for assessing and selecting the most appropriate cloud services to meet their individual security requirements.

We provide confidence that our OpenShift service still meets the highest level of information assurance, which is why we continue to have our platform independently tested and validated, and have the findings made available to customers and partners. This enables SIROs to make an informed decision about any service they choose to consume.

### What languages and frameworks are compatible with UKCloud for Red Hat OpenShift?

The service supports many popular development frameworks and languages such as:

- Java

- Spring

- Ruby

- Sinatra

- Node.js

- Python

- PHP

- GoLang

For the full list, see https://access.redhat.com/articles/2176281?hsLang=en-us and https://access.redhat.com/articles/4763741.

### Does UKCloud for Red Hat OpenShift support any data services?

Our OpenShift service provides popular open source data service packages deployable within the platform, all supported by the global open source community, including:

- MySQL, an open source relational database

- Postgres, a relational database based on PostgreSQL

- MongoDB, a scalable, open, document-based database

- RabbitMQ, for reliable, scalable and portable messaging for applications

Note that these services are offered 'as is' with no management, support or availability commitment from UKCloud. We strongly suggest customers ensure they maintain a original copy or backup copy of any persistent or dynamic data hosted on this service (such as MySQL DB) by using, for example, a data service provided by a managed service provider on our UKCloud for VMware platform.

### How scalable is UKCloud for Red Hat OpenShift?

As a true cloud platform, UKCloud for Red Hat OpenShift provides full elasticity and scalability. However, in order to protect the integrity of the platform and manage customer spend, soft limits on the number and size of application instances will be in place. These limits may be extended upon request.

### Which ports are open to the platform from the internet by default?

By default, ports 80 and 443 are open for customer application traffic. Further ports can be opened on request either at time of deployment or post-deployment by raising a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

### How do I add users?

To add new users, you will need to raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

### What monitoring of the services is provided by default in a trial?

By default, no specific monitoring service is integrated. However, we recommend external monitoring services such as Datadog or Coscale for production-grade OpenShift hosted applications. Alternatively, you can implement your own simple monitoring solution as described in [How to monitor your OpenShift cluster](oshift-how-monitor-cluster.md).

### What monitoring of the services is provided on a billable service?

By default, no specific monitoring service is integrated. It is our expectation that customers may want to use a third party or their own monitoring service to ensure cluster availability. There is a metrics service deployed into the cluster that provides utilisation stats of the cluster, and a wide range of metrics about both the cluster itself and the containers running within it can be extracted via the API to this service.

### Can I integrate external monitoring SaaS providers or my own monitoring agents to the service?

We will happily work with customers during a trial period to integrate an external monitoring service that enables customer monitoring of the cluster and applications where infrastructure level configuration is required.

### How do I add extra capacity to my cluster?

To add extra capacity to you cluster, you will need to raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal. We hope to provide portal integration to enable customers to be in control of this in the future.

### How many persistent volumes can I claim/attach to each worker node?

In line with current restrictions on the OpenStack service underpinning OpenShift, you can claim/attach 25 additional persistent volume claims (PVCs) to each worker node.

### Can I have integrated container logging deployed with the platform?

Yes, this can be requested at time of deployment, or added post-deployment. The services can be run on either the infrastructure  nodes or the worker nodes in the cluster. By default, we would place them on the infrastructure nodes, but you may wish to change this placement to be more suitable for the specific cluster performance you desire.

### How much control do I have over the policies and configuration of the platform once it has been deployed?

Customers have full administrative rights over the cluster configuration via the UI and API. Due to the varied nature of configurations that customers may want, such as the ability to merge projects and add service accounts for applications, we provide customers with the ability to self-serve on cluster administration from the beginning. Only infrastructure level tasks are controlled by UKCloud, such as adding users, scaling environments and patching.

### Can I run a privileged container?

Yes, it is possible to run a privileged container. However, this is not recommended as it goes against security best practices.

### What is the underlying architecture of the starter deployment?

![OpenShift Architecture](images/oshift-architecture.png)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
