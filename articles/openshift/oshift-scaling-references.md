---
title: Considerations When Scaling an OpenShift Cluster | UKCloud Ltd
description: Gives information on things to consider when scaling a cluster
services: openshift
author: Kieran O'Neill
toc_rootlink: References
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Considerations When Scaling an OpenShift Cluster
toc_fullpath: References/oshift-scaling-references.md
toc_mdlink: oshift-scaling-references.md
---

# Considerations When Scaling an OpenShift Cluster

### Infrastructure applications

With your UKCloud for OpenShift cluster we deploy a number of infrastructure applications by default. These are quality of life features that are intended to help you with the administration, management and application development within your cluster. Examples are the EFK stack, Hawkular Metrics, the integrated registry, the service catalog and; with v3.11 deployments onwards, Prometheus and Grafana.

These applications run their components on the infrastructure nodes (these are the nodes with the naming convention worker-infra) your cluster comes out of the box with 2 of these nodes and each has 16GB of memory and 2 vCPUs. This is a perfectly reasonable amount of resource for the infrastructure components for a small cluster running light development workloads. If you are looking to scale out the cluster to a larger size and start running more intensive applications or builds these nodes may not be enough. For example, the more applications and nodes you have in your environment the more logs will be gathered off the nodes by fluentd and sent off to Elasticsearch for indexing. This will result in significantly higher resource usage. In the same vein, the more pods and nodes are running in your environment the more stats hawkular metrics will be gathering and storing in the Cassandra database.

#### Recommendations

It's recommended by us to have a minimum of 3 infrastructure nodes with a deployment, especially with v3.11 deployments onwards as there are now more infrastructure components. As well as having more resource available to the infrastructure applications, running your infrastructure nodes at a scale of 3 or more will give you increased resilience for these components during patching as the applications will be able to scale up on the 2 available nodes while the 3rd is being patched.

Finally you will want to consider the storage usage of the infrastructure applications. As previously mentioned: the more applications and nodes you have in your environment the more logs will be gathered off the nodes by fluentd and sent off to Elasticsearch for indexing. This means the persistent volume used by Elasticsearch will have more data to store. By default, we provide 14 days retention and a 20GB persistent volume with Elasticsearch. If this volume fills to 100% then the EFK stack will not work until indices are deleted or more space is provided. If you are relying on the EFK stack for your logs then you will want to determine an average of how much storage your cluster is consuming on logs per day and request an increase of the persistent volume to fit your desired retention.

### Planning your scale out

You'll want to estimate how many pods you are expecting to fit on a node. Things to take into account are the CPU, memory and storage (If your pod is going to be writing to the local filesystem rather than persistent storage) requirements of your applications. This will give you an idea of the size and amount of nodes you will need. More information regarding planning for application requirements can be found here: https://docs.openshift.com/container-platform/3.11/scaling_performance/cluster_limits.html#scaling-performance-planning-your-environment-according-to-application-requirements

### Scaling

If you would like to scale up your cluster raise a Servcice Request via the portal and provide us with the size, amount and network connectivity of the nodes you would like. 

> [!NOTE]
> The network connectivity you request for the scaled up nodes must be present in the cluster.

### Further Reading

Below are some documentation pages regarding scaling of a cluster:

https://docs.openshift.com/container-platform/3.11/scaling_performance/scaling_cluster_metrics.html
https://docs.openshift.com/container-platform/3.11/scaling_performance/scaling_cluster_monitoring.html

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
