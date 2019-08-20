---
title: Explanation of the custom dashboards we provide with the aggregated logging kibana | UKCloud Ltd
description: Explains what our custom dashboards in Kibana show and how this data can be used.
services: openshift
author: Kieran O'Neill
reviewer:
lastreviewed: 

toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Explanation of the custom dashboards we provide with the aggregated logging kibana
toc_fullpath: Reference/oshift-ref-kibana-dashboard.md
toc_mdlink: oshift-ref-kibana-dashboard.md
---

# Explanation of the custom dashboards we provide with the aggregated logging kibana

## Overview

This documentation contains an explanation of the two custom dashboards we configure with the Kibana deployment in your cluster, these are called "Hosts Logging" and "Response Codes". It explains what data is being shown and what information you can derive from this.  

## Intended audience

The "Hosts Logging" dashboard is available in 3.9-3.11 clusters and the "Response Codes" dashboard is available in 3.11 clusters.

## How to Access

Open the kibana route, depending on your cluster version it will have the following format:
`https://kibana.xxxx-xxxxx.region.cna.ukcloud.com` or `https://kibana.xxx-xxx-xx-xxxxx.region.cna.ukcloud.com` 

This will take you to the Kibana UI, from here you can select the dashboards option. On 3.9 clusters:

![3.9 Kibana screenshot](images/oshift-kibana-dash-39.png)

On 3.10+ clusters:

![3.1+ Kibana screenshot](images/oshift-kibana-dash-311.png)

## Dashboards

### Hosts Logging

This dasboard contains a graph for each host in the cluster that shows amount of messages on the Y axis and time on the X axis. It can be used to look for an increase in messages being generated on hosts when new applications are deployed, this can help determine that you will need to expand the persistent storage of your Elasticsearch: [*Expand OpenShift persistent storage*](https://docs.ukcloud.com/articles/openshift/oshift-how-expand-persistent-vols.html)

It can also be used to ensure that all hosts are sending logs to Elasticsearch. If a host is not showing it may indicate a problem with the fluentd container on that node. 


### Response Codes



## Next steps


## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
