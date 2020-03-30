---
title: How to use the Azure Stack Hub API
description: Describes how to use the Azure Stack Hub API with UKCloud for Microsoft Azure
services: azure-stack
author: Sue Highmoor
reviewer: Daniel Brennand
lastreviewed: 27/03/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use the Azure Stack Hub API
toc_fullpath: Users/How To/azs-how-use-azure-api.md
toc_mdlink: azs-how-use-azure-api.md
---

# How to use the Azure Stack Hub API

## Overview

The Azure Stack Hub API enables you to interact programmatically with your UKCloud for Microsoft Azure environment. For example, you can use API calls to manage your UKCloud for Microsoft Azure tenancy.

This article shows you how to get started with the Azure Stack Hub API.

When interacting with Azure Stack Hub resources via the API, you must specify an API version. You can find a full list of supported API versions [here](https://docs.microsoft.com/en-us/azure-stack/user/azure-stack-profiles-azure-resource-manager-versions).

### Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription on Azure Stack Hub and permissions on the resources you are trying to access.

## Authenticating to the API

Azure Stack Hub API authentication uses access tokens to validate requests.

To obtain an access token:

1. Send a POST request to the Azure REST authentication/login endpoint:

    `https://login.microsoftonline.com/<tenant_id>/oauth2/token`

    where **tenant_id** is one of the following:

    - Your tenant domain, for example: `ukcloud.onmicrosoft.com`, `ukcloud.com`, `example.mydomain.com`

    - Your tenant ID, for example: `8eaef023-2b34-4da1-9baa-8bc8c9d6a490`

    - The default value for tenant independent keys: `common`

2. Pass the following parameters in the request body:

    - **grant_type** - The type of authentication scheme to use: `password`

    - **client_id** - Hard-coded to a default value of `1950a258-227b-4e31-a9cf-717495945fc2`

        Other options for specific scenarios are:

        - PowerShell - `1950a258-227b-4e31-a9cf-717495945fc2`

        - LegacyPowerShell - `0a7bdc5c-7b57-40be-9939-d4c5fc7cd417*`

        - WindowsAzureActiveDirectory - `00000002-0000-0000-c000-000000000000`

        - VisualStudio - `872cd9fa-d31f-45e0-9eab-6e460a02d1f1`

        - AzureCLI - `04b07795-8ddb-461a-bbee-02f9e1bf7b46`

    - **resource** - The endpoint of the resource that the token will be used to access, for example:
    `https://management.as2ukcloud.onmicrosoft.com/90ada28c-5aed-4248-90c7-0538504217f1`

       > [!NOTE]
       > You can obtain the resource endpoint by querying the Azure Stack Hub management metadata endpoint. The resource endpoint is returned in the `audiences` section of the response.
       >
       > For example, to find the endpoint for the `users` resource, send a request to `https://management.frn00006.azure.ukcloud.com/metadata/endpoints?api-version=2017-12-01`.

    - **username** - The Azure Stack Hub AAD account, for example: `user@contoso.onmicrosoft.com`

    - **password** - The password for the Azure Stack Hub AAD account

    > [!NOTE]
    > Ensure you format the request body using Content-Type `x-www-form-urlencoded`.

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name           | Variable description                                                                       | Input            |
|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| \$Tenant           | The tenant ID or domain to authenticate to                                      | <form oninput="result.value=tenant.value;result2.value=tenant.value;result3.value=tenant.value" id="tenant" style="display: inline;"><input type="text" id="tenant" name="tenant" style="display: inline;" placeholder="contoso.onmicrosoft.com"/></form> |
| \$AzureStackUsername         | The username of a user for Azure Stack Hub  | <form oninput="result.value=azsusername.value;result2.value=azsusername.value" id="azsusername" style="display: inline;"><input type="text" id="azsusername" name="azsusername" style="display: inline;" placeholder="user"/></form> |
| \$AzureStackUserPassword     | The password of a user for Azure Stack Hub  | <form oninput="result.value=azspassword.value;result2.value=azspassword.value" id="azspassword" style="display: inline;"><input type="text" id="azspassword" name="azspassword" style="display: inline;" placeholder="Password123!"/></form> |
| \$ClientID     | The application ID to authenticate against the Azure Stack Hub API   | <form oninput="result.value=clientid.value;result2.value=clientid.value" id="clientid" style="display: inline;"><input type="text" id="clientid" name="clientid" style="display: inline;" placeholder="1950a258-227b-4e31-a9cf-717495945fc2"/></form> |

### [Bash](#tab/tabid-1)

<pre><code class="language-bash"># Send POST request to Azure REST authentication/login endpoint to retrieve access token. 
curl -X "POST" "https://login.microsoftonline.com/<output form="tenant" name="result" style="display: inline;">contoso.onmicrosoft.com</output>/oauth2/token" \
-H "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode "client_id=<output form="clientid" name="result" style="display: inline;">1950a258-227b-4e31-a9cf-717495945fc2</output>" \
--data-urlencode "grant_type=password" \
--data-urlencode "username=<output form="azsusername" name="result" style="display: inline;">user</output>@<output form="tenant" name="result2" style="display: inline;">contoso.onmicrosoft.com</output>" \
--data-urlencode "password=<output form="azspassword" name="result" style="display: inline;">Password123!</output>" \
--data-urlencode "resource=https://management.as2ukcloud.onmicrosoft.com/90ada28c-5aed-4248-90c7-0538504217f1"
</code></pre>

### [PowerShell](#tab/tabid-2)

<pre><code class="language-PowerShell"># Declare variables
$Tenant = "<output form="tenant" name="result3" style="display: inline;">contoso.onmicrosoft.com</output>"
$UserName = "<output form="azsusername" name="result2" style="display: inline;">user</output>@$Tenant"
$UserPassword = "<output form="azspassword" name="result2" style="display: inline;">Password123!</output>"
$AuthRequestBody = @{
    "grant_type" = "password"
    "client_id" = "<output form="clientid" name="result2" style="display: inline;">1950a258-227b-4e31-a9cf-717495945fc2</output>"
    "resource" = "https://management.as2ukcloud.onmicrosoft.com/90ada28c-5aed-4248-90c7-0538504217f1"
    "username" = $UserName
    "password" = $UserPassword
}

# Send POST request to Azure REST authentication/login endpoint to retrieve access token.
$AuthResp = Invoke-RestMethod -Method "POST" -Uri "https://login.microsoftonline.com/$Tenant/oauth2/token" -Body $AuthRequestBody -ContentType "application/x-www-form-urlencoded"

$AuthResp
</code></pre>

***

3. If the authentication is successful, the endpoint returns an access token, for example:

    ```json
    {
      "token_type": "Bearer",
      "scope": "user_impersonation",
      "expires_in": "3599",
      "ext_expires_in": "0",
      "expires_on": "1512574780",
      "not_before": "1512570880",
      "resource": "https://management.as2ukcloud.onmicrosoft.com/90ada28c-5aed-4248-90c7-0538504217f1",
      "access_token": "eyJ0eXAiOi...truncated for readability...",
      "refresh_token": "AQABAAAAAA...truncated for readability..."
    }
    ```

5. You must include this token in the Authorization header of each subsequent API request, for example:

    ### [Bash](#tab/tabid-1)

    ```bash
    curl -H "Authorization: Bearer eyJ0eXAiOi...truncated for readability..." 'https://management.frn00006.azure.ukcloud.com/subscriptions?api-version=2017-12-01'
    ```

    ### [PowerShell](#tab/tabid-2)

    ```powershell
    # Add access token to header object for subsequent API requests
    $AuthHeader = @{"Authorization" = "Bearer $($AuthResp.access_token)"}

    # Query the Azure Stack Hub API for subscriptions
    Invoke-RestMethod -Method "GET" -Uri "https://management.frn00006.azure.ukcloud.com/subscriptions" -Headers $AuthHeader -Body @{"api-version" = "2017-12-01"} -ContentType "application/x-www-form-urlencoded"
    ```

    ***

## Calling Azure Stack Hub API endpoints

A REST request URI consists of:

   `<URI-scheme>://<URI-host>/<resource-path>?<query-string>`

where:

- **URI-scheme** is the protocol used to transmit the request, for example `http` or `https`

- **URI-host** is the domain name or IP address of the server where the REST service endpoint is hosted, for example: `management.frn00006.azure.ukcloud.com`

- **resource path** is the resource or resource collection used by the service in determining the selection of those resources (the path may include multiple segments), for example: `/subscriptions` is the resource path to obtain information about Azure Stack Hub subscriptions

- **query-string** provides additional parameters, such as the API version or resource selection criteria

    > [!NOTE]
    > For Bash, you can add the **query-string** to the end of the request URI following a question mark. For example, to specify use of a specific API version: `https://management.frn00006.azure.ukcloud.com/subscriptions?api-version=2017-12-01`. <br>For PowerShell, you can provide a **query-string** in the **-Body** parameter hash table. For example: `-Body @{"api-version" = "2017-12-01"}`

The syntax of an Azure Stack Hub request URI is:

`https://management.frn00006.azure.ukcloud.com/<subscription-id>/<resource-group>/<provider>/<resource-path>&api-version=<api-version>?<filter-expression>`

where:

- `subscription-id` is your tenant subscription ID

- `resource-group` is the resource group you want to query

- `provider` is the provider you want to query

- `resource-path` is the resource you want to query

- `api-version` is the version of the Azure Stack Hub API being called, for example `api-version=2017-12-01`

- `filter-expression` is an optional list of arguments to filter the results of the query

For example, the following API call returns a list of all virtual machines in the specified Azure Stack Hub subscription:
`https://management.frn00006.azure.ukcloud.com/subscriptions/800c4168-3eb1-405b-a4ca-919fe7ee42e9/providers/Microsoft.Compute/virtualMachines?api-version=2017-12-01"`

## Next steps

For general information about the Azure API, see the *Azure REST API Reference* at:

[Azure API documentation page](https://docs.microsoft.com/en-gb/rest/api/?view=Azure)

In particular, you may find the following documents useful:

- [Azure Stack Hub REST API](https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-rest-api-use)

- [AD protocols oauth](https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-protocols-oauth-code)

- [AD auth scenarios](https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-authentication-scenarios)

- [AD V2 protocol oauth](https://docs.microsoft.com/en-gb/azure/active-directory/develop/active-directory-v2-protocols-oauth-code)

- [Azure Stack Hub resource provider API](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-provider-resource-api)

This is guidance for Azure Stack Hub users. Currently, there is no official API reference guide for Azure Stack Hub users; however, there is an admin API guide that you can find [here](https://docs.microsoft.com/en-us/rest/api/azure-stack/). We'll update this article when an API guide becomes available.

For more information about UKCloud for Microsoft Azure, see:

- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)

- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
