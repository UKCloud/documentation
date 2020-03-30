---
title: How to use the UKCloud Portal API
description: Demonstrates how to use the Portal API by stepping you through the process of creating a VDC
services: portal
author: Sue Highmoor
reviewer: wllewellyn
lastreviewed: 24/10/2019

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use the UKCloud Portal API
toc_fullpath: How To/ptl-how-use-api.md
toc_mdlink: ptl-how-use-api.md
---

# How to use the UKCloud Portal API

## Overview

The UKCloud Portal API enables you to interact programmatically with your UKCloud environment. For example, you can use API calls to view information about the components of your environment.

This guide shows you how to use the API by providing a worked example that steps through the process of creating a new virtual data centre (VDC).

For more information about any of the API endpoints used in this guide, see the [*UKCloud Portal API User Guide*](ptl-ref-portal-api.md).

## About the examples in this guide

The examples in this guide use endpoints that are available only in regions 5 and 6 of the UKCloud platform. If your environment is in a different region, you won't be able to use these endpoints yourself, however you should still find the guide useful as a reference for how to
use the Portal API. For more information about UKCloud regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md).

The examples in this guide are shown as curl commands, but you may find it easier to work with the API by installing a REST client (for example, Insomnia).

Before reading this guide, you may find it useful to understand the following:

- **Versioning** - The Portal API uses a version scheme that you can specify in the Accept header:

        Accept: application/vnd-skyscapecloud-v1

    The examples in this guide use V1 of the API. As V1 is the default version, the examples don't explicitly set the API version.

- **Accept headers** - Within your API call, set the `Accept` header for the type of response you'd like returned:

  - `Accept: application/json` - for a response in JSON format

  - `Accept: application/xml` - for a response in XML format

       The examples in this guide accept JSON responses. As JSON is the default format, the examples don't explicitly set the response type. If you require XML responses, you must include the appropriate `Accept` header.

       You can add `.json` or `.xml` to the end of the API endpoint URL to override the `Accept` header.

## Authenticating to the API

The Portal API uses session authentication. Before calling any of the API endpoints, you must first authenticate to the API.

1. Send a POST request to the authenticate endpoint.

2. Pass the following parameters in the request body:

    - email - the email address you use to log in to the UKCloud Portal

    - password - the password you use to log in to the UKCloud Portal

        For example:

        ```
        read portal_email # Enter your Portal email address
        read -s portal_password # Enter your Portal password
        
        curl -c cookies.txt 'https://portal.skyscapecloud.com/api/authenticate' -X POST -d '{
          "email": "'"$portal_email"'",
          "password": "'"$portal_password"'"
        }' -H 'Content-Type: application/json'
        ```

3. If the authentication is successful, the endpoint returns a cookie that provides authentication for the next 900 seconds (15 minutes) and a response that tells you how long the session will last:

        {"expire_after":900}

    If the authentication is unsuccessful, the endpoint returns a 401 status code (Authentication Error).

## Using the Portal API to create a VDC

The steps for creating a VDC are:

- [Requesting a list of accounts](#requesting-a-list-of-accounts)

- [Requesting a list of vOrgs](#requesting-a-list-of-vorgs)

- [Creating a VDC](#creating-a-vdc)

### Requesting a list of accounts

To create a VDC, you need to know the ID of the account in which you want to create it.

1. If you need to find your account ID, send a GET request to the accounts endpoint to return a list of all your accounts.

    For example:

    ```
    curl -b cookies.txt 'https://portal.skyscapecloud.com/api/accounts' | json_pp
    ```

    If you need to authenticate to the Portal API first, see [Authenticating to the API](#authenticating-to-the-api).

2. The response lists the accounts associated with the email address you authenticated against. Find the account you want to work in and make a note of the account ID.

    In our example, we want to create a VDC in the account called `My Account`. The list of accounts returned by the API includes `My Account` and we can see that the ID of that account is `676`.

    ```
    [
      ..., // other accounts filtered out
      {
        "name": "My Account",
        "id": 676
      }
    ]
    ```

### Requesting a list of vOrgs

Each account can have multiple vOrgs associated with it, so you also need to know the ID of the vOrg in which you want to create your new VDC.

1. If you don't know the vOrg ID, send a `GET` request to the `vorgs` endpoint.

    If you need to authenticate to the Portal API first, see [Authenticating to the API](#authenticating-to-the-api).

2. Pass the following parameter in the request URL:

    - `account_id` - the ID of the account in which you want to create your VDC

        For example:

        ```
        curl -b cookies.txt 'https://portal.skyscapecloud.com/api/accounts/676/vorgs/' | json_pp
        ```

3. This returns a list of vOrgs associated with the specified account.

4. A vOrg ID is made up of two numbers separated by a hyphen: the ID of the account to which the vOrg belongs and a number to identify the vOrg within the account. In our example, we want to create our VDC in the vOrg, `My Org`. We can see from the response to our API call that the vOrg ID we need is `676-2`.

    ```
    {
      "data": [
        {
          "id": "676-2",
          "type": "vOrg",
          "attributes": {
            "name": "My Org"
          }
        }
      ]
    }

### Creating a VDC

When you have the account and vOrg IDs, you can go ahead and create your VDC.

1. Send a `POST` request to the `vdcs` endpoint.

    If you need to authenticate to the Portal API first, see [Authenticating to the API](#authenticating-to-the-api).

2. Pass the following parameters in the request URL:

    - `account_id` - the ID of the account in which you want to create your VDC

    - `vorg_id` - the unique number that identifies the vOrg in the account in which you want to create your VDC

    Pass the following parameters in the request body:

    - `type` - you're creating a VDC, so the type is VDC

    - `vmType` - the workload type of the VMs in the VDC:

        - `ESSENTIAL` - VMs can have contended resource allocation; automated rebalancing is enabled to ensure the workload receives the requested performance

        - `POWER` - VMs have uncontended compute resource allocation; automated rebalancing is enabled to pre-emptively optimise performance and availability

        - `PRIORITY` - VMs have uncontended compute resource allocation; automated rebalancing is configured to reduce workload movement around the platform

    - `name` - a name for the VDC; the name can be up to 32 characters
    long and can include any character except `+`

    For example:

    ```
    curl -b cookies.txt 'https://portal.skyscapecloud.com/api/accounts/676/vorgs/2/vdcs' -i -X POST -d '{
      "data": {
        "type": "VDC",
        "attributes": {
          "vmType": "POWER",
          "name": "My VDC"
        }
      }
    }' -H 'Content-Type: application/json'
    ```

    > [!NOTE]
    > Use the `-i` option in the request to view response headers so that you can see the `Location` header in the response.

3. A successful response to this call includes information about the status of the build and a `Location` header that provides an address you can use to monitor the build process.

    The following example shows that the current `state` of the build is `approved`, meaning that the request to build the VDC was successful but the VDC creation process has not yet started.

    ```
    HTTP/1.1 202 Accepted
    ...
    Content-Type: application/json
    Location: /api/vdc-builds/9
    ...
    {
      "data": {
        "type": "VDC-build",
        "id": "9",
        "attributes": {
          "createdAt": "2016-07-28T14:16:11+01:00",
          "createdBy": "user@example.com",
          "state": "approved"
        }
      }
    }
    ```
4. Send a `GET` request to the `vdc-builds` endpoint to monitor the progress of the build.

5. Pass the following parameter in the request URL:

    - `build_id` - the ID of the build process

        In our example, the build ID is `9`, so we can send the following request:

    ```
    curl -b cookies.txt 'https://portal.skyscapecloud.com/api/vdc-builds/9' | json_pp
    ```

6. If the build has started and is still in progress, the `state` changes to `running`. For example:

    ```
    {
      "data": {
        "type": "VDC-build",
        "id": "9",
        "attributes": {
          "createdAt": "2016-07-28T14:16:11+01:00",
          "createdBy": "user\@example.com",
          "state": "running"
        }
      }
    }
    ```

7. If the build has been completed and the VDC has been successfully created, the `state` changes to `completed`. For example:

    ```
    {
      "data": {
        "type": "VDC-build",
        "id": "9",
        "attributes": {
          "createdAt": "2016-07-28T14:16:11+01:00",
          "createdBy": "user@example.com",
          "state": "completed"
        }
      }
    }
    ```

8. You have now created your VDC.

## Using the Portal API to create an edge gateway

After creating your VDC, you need to create an edge gateway so that your users can access it.

The steps for creating an edge gateway are:

- [Finding the VDC URN](#finding-the-vdc-urn)

- [Creating an edge gateway](#creating-an-edge-gateway)

### Finding the VDC URN

The first thing you need to do is find the URN of the VDC for which you want to create the edge gateway.

1. If you don't know the URN, send a `GET` request to the `vdcs` endpoint.

    If you need to authenticate to the Portal API first, see [Authenticating to the API](#authenticating-to-the-api).

2. Pass the following parameters in the request URL:

    - `account_id` - the ID of the account to which the VDC belongs

        To find an account ID, see [Requesting a list of accounts](#requesting-a-list-of-accounts).

    - `vorg_id` - the ID of the vOrg to which the VDC belongs

        To find a vOrg ID, see [Requesting a list of vOrgs](#requesting-a-list-of-vorgs).

        For example:

        ```
        curl -b cookies.txt 'https://portal.skyscapecloud.com/api/accounts/676/vorgs/2/vdcs' | json_pp
        ```

3. This returns a list of VDCs associated with the specified vOrg.

    In our example, we want to create an edge gateway for the VDC we just created (`My VDC`). We can see from the response to our API call that the URN we need is
    `urn:vcloud:vdc:1a7570ea-29d9-4090-9714-75c262a123ad`.

    ```
    {
      "data": [
        {
          "id": "urn:vcloud:vdc:1a7570ea-29d9-4090-9714-75c262a123ad",
          "type": "VDC",
          "attributes": {
            "name": "My VDC"
          }
        },
        {
          "id": "urn:vcloud:vdc:f204dc27-c832-4aa5-9abd-19ca83fcfff1",
          "type": "VDC",
          "attributes": {
            "name": "Another VDC"
          }
        }
      ]
    }
    ```

4. Make a note of the VDC's full URN. You'll use this in the next step.

### Creating an edge gateway

Now that you have your VDC URN, you can use the Portal API to create your edge gateway.

1. Send a POST request to the edge-gateways endpoint.

    If you need to authenticate to the Portal API first, see
    [Authenticating to the API](#authenticating-to-the-api).

2. Pass the following parameters in the request URL:

    - `account_id` - the ID of the account in which you want to create your edge gateway

    - `vorg_id` - the unique number that identifies the vOrg in the account in which you want to create your edge gateway

    - `vdc_urn` - the URN of the VDC for which you want to create the edge gateway

    Pass the following parameter in the request body:

    - `type` - you're creating an edge gateway, so the type is `EdgeGateway`

    - `connectivityType` - the type of connectivity the edge gateway provides into the VDC:

    - `Internet` - in the Assured security domain

    - `External` - in the Elevated security domain

    For example:

    ```
    curl -b cookies.txt -i 'https://portal.skyscapecloud.com/api/accounts/676/vorgs/2/vdcs/urn:vcloud:vdc:1a7570ea-29d9-4090-9714-75c262a123ad/edge-gateways' -X POST -d '{
      "data": {
        "type": "EdgeGateway",
        "attributes": {
          "connectivityType": "Internet"
        }
      }
    }' -H 'Content-Type: application/json'
    ```

3. As when you created your VDC, the response to this call includes a `Location` header with the build ID so that you can monitor the progress of the build. For example:

    ```
    HTTP/1.1 202 Accepted
    ...
    Content-Type: application/json
    Location: /api/edge-gateway-builds/10

    {
      "data": {
        "type": "EdgeGateway-build",
        "id": "10",
        "attributes": {
          "createdAt": "2016-07-28T16:41:47+01:00",
          "createdBy": "user@example.com",
          "state": "approved"
        }
      }
    }
    ```

4. After leaving some time for the edge gateway to be created, send a `GET` request to the `edge-gateway-builds` endpoint to check the progress of the build.

5. Pass the following parameter in the request URL:

    - `build_id` - the ID of the build process

    For example:

    ```
    curl -b cookies.txt 'https://portal.skyscapecloud.com/api/edge-gateway-builds/10' | json_pp
    ```

6. when the edge gateway has been successfully created, the `state` changes to completed. For example:

    ```
    {
      "data": {
        "type": "EdgeGateway-build",
        "id": "10",
        "attributes": {
          "createdAt": "2016-07-28T16:41:47+01:00",
          "createdBy": "user@example.com",
          "state": "completed"
        }
      }
    }
    ```

7. You have now created your edge gateway.

## Next steps

For more information about any of the API endpoints used in this guide, see the [*UKCloud Portal API User Guide*](ptl-ref-portal-api.md).

If you need any further assistance, contact our support team via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) area of the UKCloud Portal.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
