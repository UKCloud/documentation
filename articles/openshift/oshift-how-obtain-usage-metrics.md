---
title: How to obtain usage metrics to use for OpenShift capacity management | UKCloud Ltd
description: Shows you how to obtain various statistics about your UKCloud for OpenShift cluster that you can use to help with capacity management
services: openshift
author: Sue Highmoor
reviewer:
lastreviewed: 14/11/2019 18:21:38

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Obtain usage metrics to use for OpenShift capacity management
toc_fullpath: How To/oshift-how-obtain-usage-metrics.md
toc_mdlink: oshift-how-obtain-usage-metrics.md
---

# How to obtain usage metrics to use for OpenShift capacity management

## Overview

This article provides examples of the self-service commands you can execute against your UKCloud for OpenShift cluster to gain usage metrics and statistics to help manage your ongoing capacity requirements.

A UKCloud deployed OpenShift cluster comprises a single Starter Pack, plus a number of Runtime Packs as required by your workload demands.

- **Starter Pack** - Provides the foundation OpenShift services to support the orchestration and management of the container runtime environments, along with additional infrastructure nodes to support services such as log aggregation and metric collection.

    Each customer environment requires only a single Starter Pack.

- **Runtime Pack** - Nodes on which your containerised applications and services run. You have the choice of difference size Runtime Packs.

    You can call off Runtime Packs individually, however, we strongly recommend the initial deployment of two or more Runtime Packs for production environments to provide resilience to your workloads in the event of the failure of a single Runtime Pack.

    To add or remove Runtime Packs, raise a Service Request via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

The sections in this guide, show you how to obtain various statistics about the platform, including:

- Overall status of each node in the cluster

- Uptime per node

- CPU usage

- Memory usage

- Block storage consumption (used by persistent volumes)

- Object storage consumption (used by the registry)

### Intended audience

To complete the steps in this guide you must have access to and a working knowledge of `oc`, the OpenStack command-line client (CLI). For more information, see OpenShift's [*Get Started with the CLI*](https://docs.openshift.com/container-platform/3.9/cli_reference/get_started_cli.html).

## Identifying capacity statistics

The OpenStack CLI provides the ability to list the nodes in your cluster and then retrieve status information about a specific node. You can use this information to determine if the nodes in your cluster have enough available disk space and memory.

1. To obtain the list of nodes that make up the OpenStack cluster, enter the following command:

       oc get nodes

2. The results show you the overall readiness of each node and how long they've been running. For example:

       $ oc get nodes
       NAME                            STATUS    ROLES     AGE       VERSION
       master-infra-0.5623-f84e8e      Ready     master    310d      v1.11.0+d4cacc0
       master-infra-1.5623-f84e8e      Ready     master    310d      v1.11.0+d4cacc0
       master-infra-2.5623-f84e8e      Ready     master    310d      v1.11.0+d4cacc0
       worker-infra-0.5623-f84e8e      Ready     infra     310d      v1.11.0+d4cacc0
       worker-infra-1.5623-f84e8e      Ready     infra     310d      v1.11.0+d4cacc0
       worker-tenant-s-0.5623-f84e8e   Ready     compute   310d      v1.11.0+d4cacc0
       worker-tenant-s-1.5623-f84e8e   Ready     compute   310d      v1.11.0+d4cacc0

3. A summary of the resource usage on each node can be displayed using the following command:

       oc adm top nodes

4. The results show the percentage and absolute value of CPU and MEMORY usage on each node. For example:

       $ oc adm top nodes
       NAME                            CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%
       master-infra-0.5623-f84e8e      276m         7%        3367Mi          22%
       master-infra-1.5623-f84e8e      258m         6%        3597Mi          23%
       master-infra-2.5623-f84e8e      370m         9%        4167Mi          27%
       worker-infra-0.5623-f84e8e      281m         15%       7697Mi          50%
       worker-infra-1.5623-f84e8e      566m         31%       7946Mi          52%
       worker-tenant-s-0.5623-f84e8e   405m         22%       12229Mi         80%
       worker-tenant-s-1.5623-f84e8e   258m         14%       2451Mi          16%	   

    > [!NOTE]
    > For the `oc adm top` command to work, Hawkular metrics must be running in your cluster. This command can also report on images and pods.

5. To find the detailed status of a node, enter the following command:

       oc describe node <nodename>

6. The results show a large amount of information about disk status (pressure and out-of-disk), memory pressure and usage, CPU usage and resource consumption from any running pods. For example:

       $ oc describe node worker-tenant-s-0.5623-f84e8e
       Name:               worker-tenant-s-0.5623-f84e8e
       Roles:              compute
       Labels:             beta.kubernetes.io/arch=amd64
                           beta.kubernetes.io/instance-type=363e3898-1fb5-4d7f-b0b6-9466fe2448c2
                           beta.kubernetes.io/os=linux
                           failure-domain.beta.kubernetes.io/region=regionOne
                           failure-domain.beta.kubernetes.io/zone=00021-2
                           internet=true
                           kubernetes.io/hostname=worker-tenant-s-0.5623-f84e8e
                           logging-infra-fluentd=true
                           node-role.kubernetes.io/compute=true
                           tenant=true
       Annotations:        node.openshift.io/md5sum=5d575cf13ea3d2813ed294fa00e72234
                           volumes.kubernetes.io/controller-managed-attach-detach=true
       CreationTimestamp:  Mon, 07 Jan 2019 17:50:31 +0000
       Taints:             <none>
       Unschedulable:      false
       Conditions:
         Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
         ----             ------  -----------------                 ------------------                ------                       -------
         OutOfDisk        False   Thu, 14 Nov 2019 10:13:12 +0000   Mon, 04 Nov 2019 14:44:23 +0000   KubeletHasSufficientDisk     kubelet has sufficient disk space available
         MemoryPressure   False   Thu, 14 Nov 2019 10:13:12 +0000   Mon, 04 Nov 2019 14:44:23 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
         DiskPressure     False   Thu, 14 Nov 2019 10:13:12 +0000   Mon, 04 Nov 2019 14:44:23 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
         PIDPressure      False   Thu, 14 Nov 2019 10:13:12 +0000   Mon, 07 Jan 2019 17:50:31 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
         Ready            True    Thu, 14 Nov 2019 10:13:12 +0000   Mon, 04 Nov 2019 14:44:23 +0000   KubeletReady                 kubelet is posting ready status
       Addresses:
         InternalIP:  10.3.1.7
         Hostname:    worker-tenant-s-0.5623-f84e8e
       Capacity:
        cpu:            2
        hugepages-1Gi:  0
        hugepages-2Mi:  0
        memory:         16266524Ki
        pods:           250
       Allocatable:
        cpu:            1800m
        hugepages-1Gi:  0
        hugepages-2Mi:  0
        memory:         15639836Ki
        pods:           250
       System Info:
        Machine ID:                 4c43666486044496beef8fc81fdda75a
        System UUID:                4C436664-8604-4496-BEEF-8FC81FDDA75A
        Boot ID:                    e95bc874-b6d2-4284-9215-e589c91836a2
        Kernel Version:             3.10.0-1062.4.1.el7.x86_64
        OS Image:                   Red Hat Enterprise Linux Server 7.7 (Maipo)
        Operating System:           linux
        Architecture:               amd64
        Container Runtime Version:  docker://1.13.1
        Kubelet Version:            v1.11.0+d4cacc0
        Kube-Proxy Version:         v1.11.0+d4cacc0
       ProviderID:                  openstack:///4c436664-8604-4496-beef-8fc81fdda75a
       Non-terminated Pods:         (58 in total)
         Namespace                  Name                                                  CPU Requests  CPU Limits  Memory Requests  Memory Limits
         ---------                  ----                                                  ------------  ----------  ---------------  -------------
         argo                       argo-ui-78b65f59b5-s2fgh                              0 (0%)        0 (0%)      0 (0%)           0 (0%)
         argo                       workflow-controller-685875596-4cttz                   0 (0%)        0 (0%)      0 (0%)           0 (0%)
         backup-test                ruby-ex-2-gj927                                       0 (0%)        0 (0%)      0 (0%)           0 (0%)
         bluegreen                  blue-1-nkgr5                                          0 (0%)        0 (0%)      0 (0%)           0 (0%)
         bluegreen                  green-1-h2n6z                                         0 (0%)        0 (0%)      0 (0%)           0 (0%)
         connect-test               ruby-ex-1-597fv                                       0 (0%)        0 (0%)      0 (0%)           0 (0%)
         development                myapp-1-4sws5                                         0 (0%)        0 (0%)      0 (0%)           0 (0%)
         locust-ingress             ruby-ex-1-l7dcc                                       0 (0%)        0 (0%)      0 (0%)           0 (0%)
         locust                     locust-master-1-v6q69                                 0 (0%)        0 (0%)      0 (0%)           0 (0%)
         pytest                     pytest-3-gfdt8                                        0 (0%)        0 (0%)      0 (0%)           0 (0%)
         new-backup-test            ruby-ex-1-8fk75                                       0 (0%)        0 (0%)      0 (0%)           0 (0%)
         openshift-logging          logging-fluentd-ktvkm                                 100m (5%)     0 (0%)      756Mi (4%)       756Mi (4%)
         openshift-monitoring       node-exporter-h6czw                                   10m (0%)      20m (1%)    20Mi (0%)        40Mi (0%)
         openshift-node             sync-krb68                                            0 (0%)        0 (0%)      0 (0%)           0 (0%)
         openshift-sdn              ovs-nfbjx                                             100m (5%)     0 (0%)      300Mi (1%)       0 (0%)
         openshift-sdn              sdn-lsbft                                             100m (5%)     0 (0%)      200Mi (1%)       0 (0%)
         postgres                   postgresql-3-wr7gq                                    0 (0%)        0 (0%)      512Mi (3%)       512Mi (3%)
         samplepipeline             jenkins-1-862f5                                       0 (0%)        0 (0%)      512Mi (3%)       512Mi (3%)
         samplepipeline             mongodb-1-jzvgd                                       0 (0%)        0 (0%)      512Mi (3%)       512Mi (3%)
         samplepipeline             nodejs-mongodb-example-1-74qlc                        0 (0%)        0 (0%)      512Mi (3%)       512Mi (3%)
         testproject                cotd-2-cnkvq                                          0 (0%)        0 (0%)      0 (0%)           0 (0%)
		 ...
       Allocated resources:
         (Total limits may be over 100 percent, i.e., overcommitted.)
         Resource  Requests      Limits
         --------  --------      ------
         cpu       1060m (58%)   1020m (56%)
         memory    4220Mi (27%)  3612Mi (23%)
       Events:     <none>	   

5. You can also obtain some of the above information via the REST API, by using something like:

       curl -H "Authorization: Bearer $token" -H 'Accept: application/json' https://ocp.\$clustername:8443/api/v1/nodes

For more information about accessing this data, see [*How to monitor your OpenShift cluster*](oshift-how-monitor-cluster.md).

## Identifying block storage consumption

For capacity management, it's also useful to know much block storage your cluster is using.

1. To obtain block storage consumption (persistent volumes) information, enter the following command:

       oc get pv

2. The results will look similar to the following, where we can see there is one item consuming 50 GB of storage.

       $ oc get pv
       NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS    CLAIM                                                           STORAGECLASS   REASON    AGE
       pvc-08237e69-cff9-11e9-a9ef-fa163e5c5959   5Gi        RWO            Delete           Bound     postgres/postgresql                                             tier2                    69d
       pvc-4da7258e-12a6-11e9-ad9d-fa163e12bba5   22Gi       RWO            Delete           Bound     openshift-logging/logging-es-0                                  tier2                    310d
       pvc-58268285-12a5-11e9-ad4e-fa163e5c5959   50Gi       RWO            Delete           Bound     openshift-monitoring/prometheus-k8s-db-prometheus-k8s-0         tier2                    310d
       pvc-88a3dfdc-12a5-11e9-ad4e-fa163e5c5959   50Gi       RWO            Delete           Bound     openshift-monitoring/prometheus-k8s-db-prometheus-k8s-1         tier2                    310d
       pvc-ac9597cc-12a5-11e9-ad4e-fa163e5c5959   2Gi        RWO            Delete           Bound     openshift-monitoring/alertmanager-main-db-alertmanager-main-0   tier2                    310d
       pvc-bf06155b-12a5-11e9-ad4e-fa163e5c5959   2Gi        RWO            Delete           Bound     openshift-monitoring/alertmanager-main-db-alertmanager-main-1   tier2                    310d
       pvc-bf2656a8-12a5-11e9-ad9d-fa163e12bba5   10Gi       RWO            Delete           Bound     openshift-infra/metrics-cassandra-1                             tier2                    310d
       pvc-e61b15ac-12a5-11e9-ad4e-fa163e5c5959   2Gi        RWO            Delete           Bound     openshift-monitoring/alertmanager-main-db-alertmanager-main-2   tier2                    310d


## Identifying object storage consumption

Object storage is used only for the OpenShift registry, therefore, you can calculate how much object storage your cluster is using by adding up the resources in the registry.

1. To obtain information about resources in the registry, enter the following two commands:

       oc adm top imagestreams
       oc adm top images

2. The output from these commands will look something like the following:

       $ oc adm top images
       NAME                                                                    IMAGESTREAMTAG                                                                                                                                                      P
       ARENTS                                                                                                                            USAGE                                                                     METADATA STORAGE
       sha256:d2e75dac02681ed5aded89115b736ba5e83011294686cd6d04780aebffc0ff5d openshift/fuse7-eap-openshift (1.0), openshift/jboss-fuse70-eap-openshift (1.0)                                                                                     <
       none>                                                                                                                             <none>                                                                    no       869.2MiB
       sha256:ba287c1998c4785d968b30862d0718b664ae755ad6d7eec316db91e4f835b29c backup-test/ruby-25-centos7 (latest), new-backup-test/ruby-25-centos7 (latest)                                                                                      <
       none>                                                                                                                             <none>                                                                    no       193.8MiB
       sha256:57fa0cb158aa31193908df27fc707afcfdd4bdaf93b3286f5602d5f804e1927f openshift/fuse7-java-openshift (1.0), openshift/jboss-fuse70-java-openshift (1.0)                                                                                   <
       none>                                                                                                                             <none>                                                                    no       156.6MiB
       sha256:be51ee43b1596078a17756f38a0017e9338c902f9094f1ad677844d165a02d43 openshift/fuse7-karaf-openshift (1.0), openshift/jboss-fuse70-karaf-openshift (1.0)                                                                                 <
       none>                                                                                                                             <none>                                                                    no       156.6MiB
       sha256:58fe06c9b5cf48bbaea47d18511958f51b6b50b764e6d879b65b4715477d0385 openshift/fuse7-console (1.0), openshift/jboss-fuse70-console (1.0)                                                                                                 <
       none>                                                                                                                             <none>                                                                    no       91.88MiB
       sha256:1f8e264d6fe3a1868e29ba2ad85612ccfc380707dd9f2026f2e5058224dced2c openshift/jboss-decisionserver62-openshift (1.2)	  
       ...
       
       $ oc adm top imagestreams
       NAME                                                   STORAGE  IMAGES LAYERS
       openshift/jboss-eap64-openshift                        5.061GiB 9      48
       openshift/fuse7-eap-openshift                          3.845GiB 5      29
       openshift/jboss-processserver64-openshift              3.167GiB 7      41
       openshift/jboss-decisionserver64-openshift             3.167GiB 7      41
       openshift/rhpam70-businesscentral-openshift            2.948GiB 3      21
       openshift/eap-cd-openshift                             2.856GiB 6      30
       openshift/jboss-datavirt63-openshift                   2.607GiB 5      35
       openshift/jboss-eap70-openshift                        2.595GiB 5      29
       openshift/rhpam70-businesscentral-monitoring-openshift 2.569GiB 3      21
       openshift/rhpam70-kieserver-openshift                  2.433GiB 3      21
       openshift/rhpam70-controller-openshift                 2.14GiB  3      21

    > [!NOTE]
    > For the `oc adm top` command to work, Hawkular metrics must be running in your cluster. This command can also report on nodes and pods.

3. The appendix at the end of this guide provides some sample Python code to sum the sizes of resources from these two `oc adm top` commands.

## Other monitoring options

You can find a simple example of a custom monitoring application, using the REST API described above, in [*How to monitor your OpenShift cluster*](oshift-how-monitor-cluster.md) and as a [UKCloud blog post](https://ukcloud.com/hub/news/simple-openshift-monitoring/).

You can also perform monitoring using Hawkular, which is built into the product. You can access Hawkular from the browser-based console at:

`https://ocp.<your-deployment-name>.cna.ukcloud.com:8443`

Or directly at:

`https://hawkular-metrics.<your-deployment-name>.cna.ukcloud.com/hawkular/metrics`

## Next steps

Further cluster capacity management options are discussed at:

<https://blog.openshift.com/full-cluster-capacity-management-monitoring-openshift>

## Appendix - Example code for adding up storage contents

You can use the following code to add up the values from `oc adm top`.

``` python
#!/usr/bin/env python3

"""
Add up storage values.

oc adm top imagestreams gives us storage usage for each storage use for each imagestream, and oc adm top images gives us the same for images

Storage is suffixed with 'MiB' or 'GiB', so each value needs converting to a number before we can add them up.

Output from oc adm top is tabulated, so input-processing is needed.
"""

import re
import subprocess
import sys

VERBOSE = False

def add_sizes(command_output, size_column):
    sum_sizes = 0
    for row in command_output.split("\n"):
        if row == '' or re.match('NAME\t+', row):
            continue
        values = re.split('\t+', row)
        storage = values[size_column]

        if 'MiB' in storage:
            multiplier = 1
        elif 'GiB' in storage:
            multiplier = 1024
        else:
            print("ERROR: Found unexpected storage size {}".format(storage))
            sys.exit(1)

        mtch = re.match('([\d.]+)[MG]iB$', storage)
        if mtch:
            size = float(mtch.group(1)) * multiplier
            sum_sizes += size
            if VERBOSE:
                print("{}\t{} ".format(storage, size))
            else:
                print("Did not match -- {}".format(storage))
    return sum_sizes

output = subprocess.run(['oc', 'adm', 'top', 'imagestreams'],
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE) 
imagestream_size = add_sizes(output.stdout.decode('utf-8'), 1)
```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
