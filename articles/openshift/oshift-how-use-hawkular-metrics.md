---
title: How to use the Hawkular Metrics API | UKCloud Ltd
description: Shows how to structure basic queries to the Hawkular Metrics API in order to get resource statistics back
services: openshift
author: Kieran O'Neill

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use the Hawkular Metrics API
toc_fullpath: How To/oshift-how-use-hawkular-metrics.md
toc_mdlink: oshift-how-use-hawkular-metrics.md
---

# How to use the Hawkular Metrics API

## Overview

This guide is intended to give you enough information to forumulate basic memory usage or cpu queries against nodes in your cluster. For more advanced usage please refer to the Hawkular documentation at <https://www.hawkular.org/hawkular-metrics/docs/user-guide/#_metrics> or the OpenShift Hawkular repository readme at <https://github.com/openshift/origin-metrics/blob/master/docs/hawkular_metrics.adoc>.

## Using the API

1. To query the API, you must be authenticated as a user that has reader permissions on the OpenShift project that contains the Hawkular-Tenant you are querying. If you are querying the _system tenant then you must also have cluster-reader permissions.

2. To get a list of all node level counters and gauges you can use, run the following:
    ```
    curl -X GET https://hawkular-metrics.$(cluster-url)/hawkular/metrics/metrics "Content-Type: application/json" -H "Hawkular-Tenant: _system" -H "Authorization: Bearer $token"
    ```

    Where `$token` is a variable storing the output of `oc whoami -t` from an OpenShift user with the correct permissions to view metrics and `$cluster-url` is the domain suffix of your cluster.
    
    For example; if your cluster URL is `https://ocp.openshift-test.cna.ukcloud.com:8443` your query would be the following:
    ```
    curl -X GET https://hawkular-metrics.openshift-test.cna.ukcloud.com/hawkular/metrics/metrics "Content-Type: application/json" -H "Hawkular-Tenant: _system" -H "Authorization: Bearer $token"
    ```

3. You will need to pass the output from the request into some form of JSON parser to get human readable results. It will return a series of JSON blocks similiar to the following:
```
    {
        "dataRetention": 7,
        "id": "cluster/memory/usage",
        "maxTimestamp": 1543500090000,
        "minTimestamp": 1543491120000,
        "tags": {
            "descriptor_name": "memory/usage",
            "group_id": "/memory/usage",
            "type": "cluster",
            "units": "bytes"
        },
        "tenantId": "_system",
        "type": "gauge"
    }
```
This is the gauge for cluster memory usage and you can query the raw data using the id from the above block as follows:

```
    curl -X GET https://hawkular-metrics.openshift-test.cna.ukcloud.com/hawkular/metrics/gauges/cluster%2Fmemory%2Fusage/raw     "Content-Type: application/json" -H "Hawkular-Tenant: _system" -H "Authorization: Bearer $token"
```

This will return a series of data points like the following:

    {
        "timestamp": 1543491120000,
        "value": 3593875456.0
    }

The timestamp is in Epoch and you can determine the value by looking at the gauge object. The code sample in step 3 shows that the value is in bytes ("units": "bytes").

[!NOTE]
You must encode the ID returned in the first request (cluster/memory/usage) correctly in the second request by replacing the / with %2F.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
