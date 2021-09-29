---
title: Scale an OpenShift v4 cluster
description: Describes how to do self-service scaling in OpenShift v4
services: openshift
author: Gareth Ellner
reviewer: 
lastreviewed: 
toc_rootlink: How To
toc_sub1: OpenShift v4.x
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Scale an OpenShift v4 cluster
toc_fullpath: How To/oshift-how-v4-scale.md
toc_mdlink: oshift-how-v4-scale.md
---

# How to scale an OpenShift v4 cluster

In OpenShift v4 clusters, worker nodes are managed by "MachineSets". These are objects which define the configuration of worker nodes, and can be scaled to set the number of workers of that type in the cluster.

To view available MachineSets and their current scale, check the "Compute ... MachineSets" section of the OpenShift web console, or run the following oc command:

    ```bash
    oc get MachineSets -n openshift-machine-api
    ```

To scale a MachineSet up or down, set the scale against the MachineSet in the OpenShift web console, or run:

    ```bash
    oc scale MachineSet <machinesetname> -n openshift-machine-api --replicas=<scale>
	# Where <machinesetname> is the name of the MachineSet to scale, and <scale> is the number of workers desired from that MachineSet
    ```

After approximately 3 minutes, the new nodes should be visible in the OpenShift web console or in the output of:

    ```bash
    oc get nodes
    ```
	
> [!NOTE]
> When a MachineSet is scaled down, some workers will be drained and deleted. Workloads will automatically restart on remaining nodes if sufficient capacity remains. If all worker MachineSets are scaled to "0", workloads may stop completely.


### Default MachineSets available

UKCloud offers three charging models for OpenShift workers:
- Hourly - This is charged by the hour, with a 1 hour minimum charge.
- Monthly - This is charged by the month, with a 1 month minimum charge. However, when used for the entire month, the cost is lower than running a hourly worker for the entire month.
- Annual - This is charged by the year, with a 1 year minimum charge. However, when used for the entire year, the cost is lower than running a monthly worker for the entire year. If you would like annual MachineSets added to your cluster, please raise a Service Request via the My Calls section of the UKCloud Portal and provide us with the size, network connectivity of the MachineSets you'd like to add.

Hourly MachineSets are particularly useful for short-term testing or for bursts of demand.

By default, UKCloud OpenShift clusters have the following MachineSets available:
- <clusterid>-hourly-m1-medium - 4 CPU, 16GB RAM - charged by the hour
- <clusterid>-monthly-m1-medium - 4 CPU, 16GB RAM - charged by the month
- <clusterid>-hourly-r1-small - 8 CPU, 16GB RAM - charged by the hour
- <clusterid>-monthly-r1-small - 8 CPU, 16GB RAM - charged by the month
- <clusterid>-hourly-m1-large - 4 CPU, 32B RAM - charged by the hour
- <clusterid>-monthly-m1-large - 4 CPU, 32GB RAM - charged by the month
- <clusterid>-hourly-r1-medium -  8 CPU, 32GB RAM - charged by the month
- <clusterid>-monthly-r1-medium - 8 CPU, 32GB RAM - charged by the month

Costs for each flavour and charging model can be found in section 2.1.3 of the [UKCloud Pricing Guide](https://ukcloud.com/pricing-guide)

> [!NOTE]
> MachineSets for larger flavours of node can be added by UKCloud - raise a Service Request via the My Calls section of the UKCloud Portal and provide us with the size, network connectivity of the MachineSets you'd like to add.



### Further information

For more information, see the Red Hat OpenShift Documentation:
https://docs.openshift.com/container-platform/4.8/machine_management/manually-scaling-machineset.html


## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
