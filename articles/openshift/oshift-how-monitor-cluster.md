---
title: How to monitor your OpenShift cluster | UKCloud Ltd
description: Explains how to set up a simple system to monitor an OpenShift Cloud Native Application Platform cluster
services: openshift
author: Sue Highmoor

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Monitor your OpenShift cluster
toc_fullpath: How To/oshift-how-monitor-cluster.md
toc_mdlink: oshift-how-monitor-cluster.md
---

# How to monitor your OpenShift cluster

## Overview

UKCloud for OpenShift enables you to develop, deploy, and manage digital and container-based applications seamlessly across local physical or virtual environments, with full portability to and from UKCloud.

This guide explains how you can set up a simple system to monitor an OpenShift cluster.

### Intended audience

This guide assumes familiarity with the Linux command line, and with the `oc` command set to manage an OpenShift cluster.

### Prerequisites

To complete the steps in this guide, you must have the `oc` command installed and have a suitable account on your OpenShift cluster. Specifically, it is assumed you know the authentication credentials that need to be supplied to `oc` login.

## Generating an authentication token

The first step is to create a service account within your OpenShift cluster that your monitoring system can use, and create an authentication token for it.

> [!TIP]
> The token may have already been created, so it's worth checking first.

1. Log in to OpenShift on the command line:

       oc login ...
       oc project openshift-infra

2. Check if a monitoring account already exists:

       oc get serviceaccount --all-namespaces | grep infra | \
       grep monitoring

    If the account exists, the command above prints the name, and you can move on to [Reading the authentication token](#reading-the-authentication-token). If it prints nothing, you need to create the account as described in the remaining steps below.

3. Create the monitoring account if it does not exist:

       oc create serviceaccount monitoring

4. Add the role cluster-reader to the account:

       oc adm policy add-cluster-role-to-user cluster-reader \
       system:serviceaccount:openshift-infra:monitoring

## Reading the authentication token

Next, you need to retrieve the authentication token that you created in the previous step.

1. If you haven't already done so, ensure you are logged in to OpenShift and connected to the right project:

       oc login ...
       oc project openshift-infra

2. Find the name of the monitoring account's token IDs:

       oc describe serviceaccount monitoring

    This lists the IDs of one or more token names, for example, `monitoring-token-1abc2`.

3. Find the actual authentication token by querying the secret by the name given in the previous step, for example:

       oc describe secret <monitoring-token>

    Where `monitoring-token` is the token name you found in the previous step.

    This lists a few values, including the 179-character authentication token.

## Using the authentication token

The OpenShift API provides a way of determining the health of the cluster; the data required to do this is obtainable by requesting the API at `/api/vi/nodes`. You must supply the authentication token in the HTTP `Authorization` header.

The following example shows how to query this data from a shell command using curl.

    $ token="<authentication_token>"
    $ endpoint= https://ocp.<my-cluster-url>.ukcloud.com:8443
    $ curl -k -H "Authorization: Bearer ${token}" \
      -H 'Accept: application/json' ${endpoint}/api/v1/nodes

You'll need to customise the query above by providing the correct values for endpoint and token.

This API call returns a reasonable amount of JSON-encoded data, which may be hard to parse using shell commands. It's also necessary to fetch items from various places within this data. The Python program in the following section shows you how to accomplish this.

## Using the OpenShift API to obtain cluster status

The code example below uses the OpenShift API to obtain information about the health of the cluster, and prints a summary showing if each node is healthy.

``` python
#!/usr/bin/env python3
import urllib.request
import json
import ssl

def get_all_nodes(endpoint, token):
    """Fetch the nodes data from the openshift cluster"""
    request = urllib.request.Request(endpoint + "/api/v1/nodes")
    request.add_header('Authorization', 'Bearer ' + token)
    request.add_header('Accept', 'application/json')
    ssl_context = None  # or ssl._create_unverified_context()
    result = urllib.request.urlopen(request, context=ssl_context)
    return result.read()

def get_status_from_node(data_item):
    """ Extract the status conditions from the data"""
    addresses = data_item['status']['addresses']
    address = None
    for addr in addresses:
        if addr['type'] == 'Hostname':
            address = addr['address']
    return {'hostname': address,
            'conditions': data_item['status']['conditions']}

def find_faults(cond_data):
    """ find whether each node is in a failed state"""
    cells = []
    for node in cond_data:
        hostname = node['hostname']
        state = 'OK  '
        for cond in node['conditions']:
            if cond['status'] != "False" and cond['type'] != "Ready":
                state = 'FAIL'
            elif cond['status'] != "True" and cond['type'] == "Ready":
                state = 'FAIL'
        cells.append('{} {} '.format(state, hostname))
    return cells

def main():
    all_nodes = json.loads(get_all_nodes(ENDPOINT, TOKEN))
    all_conditions = []
    for node in all_nodes['items']:
        all_conditions.append(get_status_from_node(node))
    print("Status of Cluster at {}".format(ENDPOINT))
    for node in find_faults(all_conditions):
        print(node)

ENDPOINT = 'https://ocp.my-cluster-url.ukcloud.com:8443'
TOKEN = 'eyJhb...the.179.char.token'
main()
```

> [!TIP]
> If you encounter problems copying and pasting the source code above, we also provide the code in the following blog post:

<https://ukcloud.com/hub/news/simple-openshift-monitoring/>

## Next steps

For more information about UKCloud for OpenShift service, see:

- [*Getting Started Guide for UKCloud for OpenShift*](oshift-gs.md)

- [*UKCloud for OpenShift FAQs*](oshift-faq.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.