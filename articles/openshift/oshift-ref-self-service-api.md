---
title: UKCloud for OpenShift API Reference Guide | UKCloud Ltd
description: Shows how to interact with UKCloud for OpenShift via use of an application programming interface (API)
services: openshift
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenShift API Reference Guide
toc_fullpath: Reference/oshift-ref-self-service-api.md
toc_mdlink: oshift-ref-self-service-api.md
---

# UKCloud for OpenShift API Reference Guide

## Overview

In your UKCloud for OpenShift cluster, there are some operations that you need to perform on the underlying OpenStack infrastructure, such as verifying the status of the VMs underpinning the cluster, or rebooting a node. To help you accomplish these operations, OpenShift provides a REST API.

This article shows how to use the API, providing curl commands to show example usage.

## Authenticating with the API

You will be provided with the URL and authentication details to connect to the REST API. You will need to contact UKCloud to request an account. Here is the general syntax for the URL:

`https://self-service-example-url.ukcloud.com/api/openshift/<CLUSTER_ID>/<ACTION>`

To connect to the API, you'll need the following four pieces of information:

- The URL for the self-service API
- The `CLUSTER_ID` - This will usually be the same as the domain name part of your cluster, for example, `mycompany.cor00005.cna.ukcloud.com`, and must be specified in all requests
- Username† - This may not be the same as your `oc` username for managing the cluster
- Password† - This may not be the same as your `oc` password for managing the cluster

† Username and Password will be replaced with Single Sign On (SSO) credentials for customers running OpenShift Container Platform v3.10 or greater.

Users are assigned roles. By default, a user will have read-only access to the self-service API. You must request additional roles, for example, to reboot a node, from UKCloud by raising a service request.

## API responses

Nearly all responses from the REST API are JSON.

In some error situations, the REST API may respond with HTML error messages.

## Retrieving the status of all VM nodes

To request the status of the nodes in the cluster, use the `nodestatus` endpoint.

### Authorisation role required

Any valid user

### Request

Methods supported | Path syntax
------------------|------------
`GET` | `GET /api/openshift/${CLUSTER_ID}/nodestatus`

#### Example request

``` bash
curl -X GET -u "$USERNAME:$PASSWORD" https://${CLUSTER_URL}/api/openshift/${CLUSTER_ID}/nodestatus
```

### Response

The returned data is JSON. An array of the hostnames and their current status, as reported by OpenStack is provided. This lists the HAProxy nodes, masters and workers.

#### Example response

``` json
[
  {
    "nodename": "haproxy-0.openstacklocal",
    "status": "ACTIVE"
  },
  {
    "nodename": "haproxy-1.openstacklocal",
    "status": "ACTIVE"
  },
  // etc...
]
```

## Retrieving the status of a (previously started) job

Some actions performed in the REST API are asynchronous. To retrieve the status and results of one of these actions, use the `job` endpoint.

This call can be used only against jobs for which you know the Job ID.

### Authorisation role required

Any valid user

### Request

Methods supported | Path syntax
------------------|------------
`GET` | `GET /api/openshift/${CLUSTER_ID}/job/${JOB_ID}`

#### Example request

``` bash
curl -X GET -u "$USERNAME:$PASSWORD" https://${CLUSTER_URL}/api/openshift/${CLUSTER_ID}/job/${JOB_ID}
```

### Response

The returned data is JSON and contains the `stdout` and `stderr` output from the job.

#### Example response

``` json
{"output": "some_output\nDone", "errors": ""}
```

## Initiating a reboot of a VM node

To reboot a node (a VM underpinning the OpenShift cluster), use the `reboot` endpoint and specify the node name in the HTTP Post Data.

### Authorisation role required

Only users who are granted the `reboot` role may initiate a reboot. You must request this additional role from UKCloud by raising a service request.

### Request

Methods supported | Path syntax
------------------|
`POST` | `POST /api/openshift/${CLUSTER_ID}/reboot` (with a variable called `target` the HTTP Post Data)

#### Example request

``` bash
curl -X POST -u "${USERNAME}:${PASSWORD}" -d "target=${NODE_NAME}" https://${CLUSTER_URL}/api/openshift/${CLUSTER_ID}/reboot
```

### Response

The reboot task will take a few minutes. The API responds immediately with a block of JSON describing the background job that has been started, which you can subsequently query to find out how the reboot is progressing.

If a `target` is supplied that is not a recognised node, the `reboot` API will respond with a 404 error and the message:

```
{"error": "Node Not found"}
```

If the user does not have permission to reboot a node, the `reboot` API will respond with a 404 error and the message:

```
{"error": "Node Not found"}
```

#### Example response

The response from the `reboot` endpoint looks like the following (the `status_url` endpoint is described above):

``` json
{
  "state": "started",
  "job_id": "tmp123abcd",
  "status_url": "https://self-service-example-url.ukcloud.com/api/openshift/exampleClusterId/job/tmp123abcd"
}
```

### Monitoring the progress of a reboot

You can use the `job_id` in the response from `reboot` against the `job/${jobid}` endpoint to see the progress of the job. For convenience, the full URL to the job status is also supplied as `status_url`.

The reboot task will repeatedly append the node status to the output, and when complete, will include the word `Done` on a line on its own.

Repeated requests for `job/${jobid}` will see the output grow.

In the event of a failure, the output will end with the word `Fail` instead.

#### Example response

```
worker-0.openstacklocal REBOOT
worker-0.openstacklocal REBOOT
worker-0.openstacklocal REBOOT
worker-0.openstacklocal REBOOT
worker-0.openstacklocal ACTIVE
Done
```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.