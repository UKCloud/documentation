---
title: How to use the Azure Stack API | UKCloud Ltd
description: Describes how to use the Azure Stack API with UKCloud for Microsoft Azure
services: azure-stack
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use the Azure Stack API
toc_fullpath: Users/How To/azs-how-use-azure-api.md
toc_mdlink: azs-how-use-azure-api.md
---

# How to use the Azure Stack API

## Overview

The Azure Stack API enables you to interact programmatically with your UKCloud for Microsoft Azure environment. For example, you can use API calls to manage your UKCloud for Microsoft Azure tenancy.

This guide shows you how to get started with the Azure Stack API.

### Intended audience

To complete the steps in this guide you must have the appropriate permissions on the resource you are trying to access.

## Authenticating to the API

Azure Stack API authentication uses access tokens to validate requests.

To obtain an access token:

1. Send a POST request to the Azure REST authentication/login endpoint:

    `https://login.microsoftonline.com/<tenant_id>/oauth2/token`

    where `tenant_id` is one of:

    - Your tenant domain, for example, `ukcloud.onmicrosoft.com`, `ukcloud.com`, `example.mydomain.com`
    - Your tenant ID, for example `8eaef023-2b34-4da1-9baa-8bc8c9d6a490`
    - The default value for tenant independent keys: `common`

2. Pass the following parameters in the request body:

    - `grant_type` - The type of authentication scheme to use: `password`

    - `client_id` - Hard-coded to a default value of `1950a258-227b-4e31-a9cf-717495945fc2`

        Other options for specific scenarios are:

        - LegacyPowerShell - `0a7bdc5c-7b57-40be-9939-d4c5fc7cd417*`
        - PowerShell - `1950a258-227b-4e31-a9cf-717495945fc2`
        - WindowsAzureActiveDirectory - `00000002-0000-0000-c000-000000000000`
        - VisualStudio - `872cd9fa-d31f-45e0-9eab-6e460a02d1f1`
        - AzureCLI - `04b07795-8ddb-461a-bbee-02f9e1bf7b46`

    - `resource` - The endpoint of the resource the token will be used to access, for example,
    `https://management.ukcloud.onmicrosoft.com/4de154de-a8a8-4017-af41-df619da68154`

        You can obtain the resource endpoint by querying the Azure Stack management metadata endpoint. The resource endpoint is returned in the `audiences` section of the response.

        For example, to find the endpoint for the `operators` resource send a request to `https://adminmanagement.<region>.<AzureStackdomain>/metadata/endpoints?api-version=2015-01-01`

    - `username` - The Azure Stack AAD account, for example `azurestackadmin@ukcloud.onmicrosoft.com`

    - `password` - The password for the Azure Stack AAD account

    - `scope` - optional, such as `openid` to get the ID token

    For example:

    ```
    grant_type=password
    &client_id=1950a258-227b-4e31-a9cf-717495945fc2
    &resource=(endpoint returned in the audiences section below)
    &username=admin@ukcloud.onmicrosoft.com
    &password=Password123
    &scope=openid
    ```

    > [!NOTE]
    > Format the request body using the Content-Type `x-www-form-urlencoded`.

3. An example request might look something like the following

    ```
    curl -X "POST" "https://login.windows.net/160f539f-8571-4c96-9361-797645c24e75/oauth2/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    --data-urlencode "client_id=1950a258-227b-4e31-a9cf-717495945fc2" \
    --data-urlencode "grant_type=password" \
    --data-urlencode "username=admin@ukcloud.onmicrosoft.com" \
    --data-urlencode 'password=Password12345' \
    --data-urlencode "resource=https://management.ukcloud.onmicrosoft.com/c0a3a144-57ae-42e2-a5da-19e945a25deb"

4. If the authentication is successful, the endpoint returns an access token. For example:

    ```
    {
      "token_type": "Bearer",
      "scope": "user_impersonation",
      "expires_in": "3599",
      "ext_expires_in": "0",
      "expires_on": "1512574780",
      "not_before": "1512570880",
      "resource": "https://management.ukcloud.onmicrosoft.com/c0a3a144-57ae-42e2-a5da-19e945a25deb",
      "access_token": "eyJ0eXAiOi...truncated for readability..."
    }
    ```

5. You must include this token in the Authorization header of each subsequent API request. For example:

    ```
    curl -H "Authorization: Bearer eyJ0eXAiOi...truncated for readability..." 'https://management.local.azurestack.external/subscriptions?api-version=2016-05-01'
    ```

## Calling Azure Stack API endpoints

A REST request URI consists of:

`<URI-scheme>://<URI-host>/<resource-path>?<query-string>`

where:

- `URI-scheme` is the protocol used to transmit the request, for example `http` or `https`.
- `URI-host` is the domain name or IP address of the server where the REST service endpoint is hosted, for example `management.local.azurestack.external`.
- `resource-path` is the resource or resource collection, which may include multiple segments, used by the service in determining the selection of those resources. For example `beta/applications/00003f25-7e1f-4278-9488-efc7bac53c4a/owners` is the resource path to a specific application's owners within the applications collection.
- `query-string` provides additional simple parameters, such as the API version or resource selection criteria.

The syntax of an Azure Stack request URI is:

`https://management.local.azurestack.external/<subscription-id>/resourcegroups/<resource-group>/providers/<provider>/<resource-path>?<filter-expression>&api-version=<api-version>`

where:

- `subscription-id` is your tenant subscription ID
- `resource-group` is the resource group you want to query
- `provider` is the provider you want to query
- `resource-path` is the resource you want to query
- `filter-expression` is an optional list of arguments to filter the results of the query
- `api-version` is the version of the Azure Stack API being called, for example `api-version=2016-05-01`

For example, the following API call returns information about region health:

`https://management.local.azurestack.external/subscriptions/800c4168-3eb1-405b-a4ca-919fe7ee42e9/resourcegroups/system.local/providers/microsoft.infrastructureinsights.admin/regionhealths/local/Alerts?$filter=(Properties/State eq 'Active') and (Properties/Severity eq 'Critical')&$orderby=Properties/CreatedTimestamp desc&api-version=2016-05-01"`

## Next steps

For general information about the Azure API, see the *Azure REST API Reference* at:

<https://docs.microsoft.com/en-gb/rest/api/?view=Azure>

In particular, you may find the following documents useful:

- <https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-rest-api-use>

- <https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-protocols-oauth-code>

- <https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-authentication-scenarios>

- <https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-v2-protocols-oauth-code>

- <https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-stack/azure-stack-provider-resource-api.md>

There is not currently an API reference guide for Azure Stack Users; however, there is an Admin API guide that you can find [here]("https://docs.microsoft.com/en-us/rest/api/azure-stack/"). We'll update this guide when one becomes available.

For more information about UKCloud for Microsoft Azure, see:

- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)
- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.