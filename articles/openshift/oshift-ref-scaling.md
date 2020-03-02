---
title: Considerations when scaling an OpenShift cluster
description: Provides information on things to consider when scaling a cluster
services: openshift
author: Kieran O'Neill
reviewer:
lastreviewed: 14/03/2019 09:48:26
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Considerations when scaling an OpenShift cluster
toc_fullpath: Reference/oshift-ref-scaling.md
toc_mdlink: oshift-ref-scaling.md
---

# Considerations when scaling an OpenShift cluster

### Infrastructure applications

With your UKCloud for OpenShift cluster we deploy a number of infrastructure applications by default. These are quality of service features that are intended to help you with the administration, management and application development within your cluster. Examples include the EFK stack, Hawkular Metrics, the integrated registry, the service catalog and, with v3.11 deployments onwards, Prometheus and Grafana.

These applications run their components on the infrastructure nodes (these are the nodes with the naming convention worker-infra). Your cluster comes out of the box with two of these nodes and each has 16GB of memory and two vCPUs. This is a perfectly reasonable amount of resource for the infrastructure components for a small cluster running light development workloads. If you're looking to scale out the cluster to a larger size and start running more intensive applications or builds, these nodes may not be enough. For example, the more applications and nodes you have in your environment, the more logs will be gathered off the nodes by fluentd and sent off to Elasticsearch for indexing. This will result in significantly higher resource usage. In the same vein, the more pods and nodes are running in your environment, the more stats hawkular metrics will be gathering and storing in the Cassandra database.

#### Recommendations

We recommend having a minimum of three infrastructure nodes with a production deployment where you expect to make use of these additional services, especially with v3.11 deployments onwards as there are now more infrastructure components. As well as having more resource available to the infrastructure applications, running your infrastructure nodes at a scale of three or more will give you increased resilience for these components during patching as the applications will be able to scale up on the two available nodes while the third is being patched.

Additionally, scaling of the infrastructure applications to make them more resilient is possible but may require additional infrastructure nodes to be deployed. For example to scale Elasticsearch to three nodes/containers we recommend having a minimum of four infrastructure nodes. To have these applications scaled up or down raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

Finally, you'll want to consider the storage usage of the infrastructure applications. As previously mentioned, the more applications and nodes you have in your environment the more logs will be gathered off the nodes by fluentd and sent off to Elasticsearch for indexing. This means the persistent volume used by Elasticsearch will have more data to store. By default, we provide 14 days retention and a 20GB persistent volume with Elasticsearch. If this volume fills to 100% then the EFK stack will not work until indices are deleted or more space is provided. If you're relying on the EFK stack for your logs then you'll want to determine an average of how much storage your cluster is consuming on logs per day and request an increase of the persistent volume to fit your desired retention.

### Planning your scale out

You'll want to estimate how many pods you are expecting to fit on a node. Things to take into account are the CPU, memory and storage (if your pod is going to be writing to the local file system rather than persistent storage) requirements of your applications. This will give you an idea of the size and amount of nodes you'll need. For more information regarding planning for application requirements, see the following OpenShift documentation page: https://docs.openshift.com/container-platform/3.11/scaling_performance/cluster_limits.html#scaling-performance-planning-your-environment-according-to-application-requirements

### Scaling

If you'd like to scale up your cluster, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal and provide us with the size, network connectivity and quantity of nodes you'd like to add. The same process should be followed to scale a cluster down, this time providing the details of the node(s) you want to remove.

> [!NOTE]
> The network connectivity you request for the scaled up nodes must be present in the cluster.

### Further information

Below are some useful OpenShift documentation pages regarding scaling of a cluster:

https://docs.openshift.com/container-platform/3.11/scaling_performance/scaling_cluster_metrics.html
https://docs.openshift.com/container-platform/3.11/scaling_performance/scaling_cluster_monitoring.html

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
