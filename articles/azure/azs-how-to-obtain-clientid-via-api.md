---
title: How to obtain your Azure Stack Client ID using the REST API | UKCloud Ltd
description: How to obtain your Client ID via the REST API for Azure Stack
services: azure-stack
author: Paul Brown

toc_rootlink: Users
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: Obtain Azure Stack Client ID - REST API
toc_fullpath: Users/How To/azs-how-to-obtain-clientid-via-api.md
toc_mdlink: azs-how-to-obtain-clientid-via-api.md
---

# How to obtain your Azure Stack Client ID using the REST API

## Overview

The Client ID for your application can be found if you know the application name and this name will be used for the query to obtain its ID. As with every other API query in Azure we will need to authenticate first.

In order to authenticate with any API endpoints you will need to obtain an access token. To get the Client ID we will have to authenticate with graphEndpoint as our resource.

## Management endpoints

Management Endpoint for Administrators is <https://adminportal.frn00006.azure.ukcloud.com>

## Obtain additional endpoints

Query <https://adminportal.frn00006.azure.ukcloud.com/metadata/endpoints?api-version=2015-01-01>

## Authentication

### Obtain access token

In order to obtain an access token you will need to create a request body and use Rest API POST against Authentication/Login Endpoint.

### Request Body fields

|Name  |Description  |
|---------|---------|
|grant_type     |  The OAuth 2 grant type: password       |
|resource     |  The app to consume the token, such as Microsoft Graph, Azure AD Graph or your own Restful service       |
|client_id     | The Client Id of a registered application in Azure AD (can be a new app or built-in one)        |
|username   | The user account in Azure AD        |
|password     |   The password of the Azure AD user account      |
|scope     |   optional, such as openid to get Id Token      |

### Request Authentication endpoint

The Authentication/Login Endpoint can be https:/\/login.microsoftonline.com/{tenant id}/oauth2/token or https:/\/login.windows.net/{tenant id}/oauth2/token

> [!IMPORTANT]
> You can use the  {tenant id}  value in the path of the request to control who can sign into the application.
>
> The allowed values are tenant identifiers, for example,  8eaef023-2b34-4da1-9baa-8bc8c9d6a490  or  contoso.onmicrosoft.com  or  common  for tenant-independent tokens.

### How to obtain access token Request Body and Authentication Information

1. Grant_type

   - This is static value and in order to get the access token you need to set it to "password". Example:  **Grant_type = password**

2. Resource - Application ID URI / graphEndpoint

   - Can be found in the Endpoint query above. Example: https://graph.windows.net/

3. ClientID (Application ID)

   - In our case we can use built-in ClientIDs

|Application  |ApplicationID  |
|---------|---------|
|LegacyPowerShell    |0a7bdc5c-7b57-40be-9939-d4c5fc7cd417         |
|PowerShell     |  1950a258-227b-4e31-a9cf-717495945fc2       |
|WindowsAzureActiveDirectory     |  00000002-0000-0000-c000-000000000000       |
|VisualStudio     |    872cd9fa-d31f-45e0-9eab-6e460a02d1f1     |
|AzureCLI     |    04b07795-8ddb-461a-bbee-02f9e1bf7b46     |

> [!NOTE]
> Do not use LegacyPowerShell as it does not have all permissions

5. Username

   - Your usename for Azure Active Directory. i.e. user\@domain.onmicrosoft.com

6. Password

   - Password for your account.

7. TenantID

   - Query https://\<your domain>\.onmicrosoft.com\.well-known\/openid-configuration

   - In the output from the query above look for token_endpoint value (i.e. https://login.windows.net/0000ffff-1111-cccc-0000-888888888888/oauth2/token) and in this example your Tenant ID is **0000ffff-1111-cccc-0000-888888888888**.

8. Request Authentication Endpoint/URI of Azure Authentication Endpoint

   - Query https:/\/login.windows.net/\<your domain>.onmicrosoft.com/.well-known/openid-configuration

## Example of Authentication Request

Request Body

|Name  |Value  |
|---------|---------|
|grant_type | password         |
|resource | https://graph.windows.net/         |
|client_id | 1950a258-227b-4e31-a9cf-717495945fc2        |
|username |  i.e. user\@domain.onmicrosoft.com       |
|password |  Password123       |
|scope | openid         |

Post

```
POST /{tenant id}/oauth2/token HTTP/1.1
Host: https://login.microsoftonline.com
grant_type=password
&client_id=1950a258-227b-4e31-a9cf-717495945fc2
&resource=https://graph.windows.net/
&username=user@domain.onmicrosoft.com
&password=Password123
&scope=openid
```

Successful Response

```
{
  "token_type": "Bearer",
  "scope": "62e90394-69f5-4237-9190-012177145e10",
  "expires_in": "3600",
  "ext_expires_in": "0",
  "expires_on": "1512740986",
  "not_before": "1512737086",
  "resource": "https://graph.windows.net",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyIsImtpZCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0Iiwi
aXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTYwZjUzOWYtODU3MS00Yzk2LTkzNjEtNzk3NjQ1YzI0ZTc1LyIsImlhdCI6MTUxMjczNzA4NiwibmJmIjoxNTEyNzM3MDg2LCJleHAiOjE1MTI3NDA5ODYsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84R0FBQUFL
QTJxQmF6bXJNL0JJZXZhNzRHVXN4QXcrRGVqMStFOTMvYnN4a2FDUklvPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIxOTUwYTI1OC0yMjdiLTRlMzEtYTljZi03MTc0OTU5NDVmYzIiLCJhcHBpZGFjciI6IjAiLCJpcGFkZHIiOiIzNy4yNi44OC43MyIsIm5hbWUi
OiJhZG1pbiIsIm9pZCI6IjM5YzYxZTIzLWM2YmQtNGMyMS04ZTU3LWU0NWE3ZWNhZDRkYiIsInB1aWQiOiIxMDAzQkZGREE1ODY2Mzc1Iiwic2NwIjoiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwic3ViIjoib1FsQkRVTmI5UzUtb2RieE1a
TXR1TU5GTlRmMnBDUG5fbXVybjhUSGdYNCIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6IjE2MGY1MzlmLTg1NzEtNGM5Ni05MzYxLTc5NzY0NWMyNGU3NSIsInVuaXF1ZV9uYW1lIjoiYWRtaW5AY2hhcmxpZWpsbGV3ZWxseW5nbWFpbC5vbm1pY3Jv
c29mdC5jb20iLCJ1cG4iOiJhZG1pbkBjaGFybGllamxsZXdlbGx5bmdtYWlsLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6ImtZa19Ha2NjSUVTLWprVFBHQW9mQUEiLCJ2ZXIiOiIxLjAifQ.lB9oMc4FTM5LseP09LKmePAO8iX25osgYzBJOSZi4DuxsJXwy5SVEA7pO
VN8tSF_MXHoBjcGSIyODzXxAMY0TnxsgLreKtMrEIwifjA6qC3kIgHBFARHM_159xg3egQyoysUF6PLNND5BXDbpcKgA-ORcVQyo6g-lDS_837Q-UZvKxcmucVOk2mFML6u_ObeE1o2r4dUi2_9mDieynSvUK_7PAQ5i2_3clTsBJZWRiRUuxZXxlIe_tT15LH01MYPr
XVNRN48XBa3ZLMIP5snXCOlPwfpwToX2L_OU8DXC4uLzMJf8v2EURazL-C-pGj_kHsjlrO269sZzShJCWy7MQ",
  "refresh_token": "AQABAAAAAABHh4kmS_aKT5XrjzxRAtHzTtZlel2djo9DgPeH4jwTm7En-kTPI-jq8PjwsE9keTLze8237GoANqAyTjBA7Lt2OL9LB8IDN9Cb1Vfkdft5dMent1akhH7XQ-jOXv6TCoDSGJP-qWN3jJ4KvWRHeTvHKMyewq0pdMRAd-rEsNFR
OUvgzPmf3j2Djv242fyYPDFKG9RoiGXI2_aRzkDyHPNgOgPgn7qUdPmZvXISzFzzpFT1Sw2_N6v9nccvX3auWda_QTwpQpu3TakIaUMQeSog5PM4bwCoB2_Q1JgVWF2cNyq4i9keFNh6VNsZ21ICQ_DJri00iM54kmF43bjyy4ISleM8GxFE9_GUNYx_2FI5R6qUszUt
jsFqJAwrzKr28rlz1D_3YyS9VDfUBj78Vq3tZrD4NRIIIbMhiAosYQ4aBsJvuvFcw60IblHxhkwC8GZc72qYLmfRizFUM5BNLgxCJ503-ZufWdiNt0D2i4fLUGYWBrtchPi52CnB1uJvXRKfiQBjEJIJ067wtA9dSn7upKxjhNjiaYu5be-EiUeOAWsNMK7MIYo0o_64
O3F7vc_ZrLSu4FfJxfHHClfRGKvDF2LgkRDVA_ZWvS89KHFOKtOS3z_nWwO7CF0oSd8QyCxN6R7o2EDaFT75hDoWKxkDKkUBuoNiHblQyGW0iJrh0k7EbP_B2UVxy5PoYI_2HAAgAA",
  "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIxOTUwYTI1OC0yMjdiLTRlMzEtYTljZi03MTc0OTU5NDVmYzIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8xNjBmNTM5Zi04NTcxLTRjOTYtOTM2MS03OTc2NDVjMjRlN
zUvIiwiaWF0IjoxNTEyNzM3MDg2LCJuYmYiOjE1MTI3MzcwODYsImV4cCI6MTUxMjc0MDk4NiwiYW1yIjpbInB3ZCJdLCJpcGFkZHIiOiIzNy4yNi44OC43MyIsIm5hbWUiOiJhZG1pbiIsIm9pZCI6IjM5YzYxZTIzLWM2YmQtNGMyMS04ZTU3LWU0NWE3ZWNhZDRkY
iIsInN1YiI6ImFSeHhiX01YYU5NOG1KS2p3VzlzWnNvV0xkZnF5bF9jYmJVcEc4aWNHX28iLCJ0aWQiOiIxNjBmNTM5Zi04NTcxLTRjOTYtOTM2MS03OTc2NDVjMjRlNzUiLCJ1bmlxdWVfbmFtZSI6ImFkbWluQGNoYXJsaWVqbGxld2VsbHluZ21haWwub25taWNyb
3NvZnQuY29tIiwidXBuIjoiYWRtaW5AY2hhcmxpZWpsbGV3ZWxseW5nbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.
}
```
## API queries

1. Append Token

    Once you obtained your Access Token for Graph API Endpoint you will need to append it to each of your API requests.
    In order to do so you need to create a header "authorization" with value: "Bearer \<access token>"    
    
    Example:
    
    ```
    GET /data HTTP/1.1
    Host: service.contoso.com
    Authorization:
     Bearer
    eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik5HVEZ2ZEstZnl0aEV1THdqcHdBSk9NOW4tQSJ9.eyJhdWQiOiJodHRwczovL3NlcnZpY2UuY29udG9zby5jb20vIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2ZlODE0NDctZGE1Ny00Mzg1LWJlY2ItNmRlNTdmMjE0NzdlLyIsImlhdCI6MTM4ODQ0MDg2MywibmJmIjoxMzg4NDQwODYzLCJleHAiOjEzODg0NDQ3NjMsInZlciI6IjEuMCIsInRpZCI6IjdmZTgxNDQ3LWRhNTctNDM4NS1iZWNiLTZkZTU3ZjIxNDc3ZSIsIm9pZCI6IjY4Mzg5YWUyLTYyZmEtNGIxOC05MWZlLTUzZGQxMDlkNzRmNSIsInVwbiI6ImZyYW5rbUBjb250b3NvLmNvbSIsInVuaXF1ZV9uYW1lIjoiZnJhbmttQGNvbnRvc28uY29tIiwic3ViIjoiZGVOcUlqOUlPRTlQV0pXYkhzZnRYdDJFYWJQVmwwQ2o4UUFtZWZSTFY5OCIsImZhbWlseV9uYW1lIjoiTWlsbGVyIiwiZ2l2ZW5fbmFtZSI6IkZyYW5rIiwiYXBwaWQiOiIyZDRkMTFhMi1mODE0LTQ2YTctODkwYS0yNzRhNzJhNzMwOWUiLCJhcHBpZGFjciI6IjAiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJhY3IiOiIxIn0.JZw8jC0gptZxVC-7l5sFkdnJgP3_tRjeQEPgUn28XctVe3QqmheLZw7QVZDPCyGycDWBaqy7FLpSekET_BftDkewRhyHk9FW_KeEz0ch2c3i08NGNDbr6XYGVayNuSesYk5Aw_p3ICRlUV1bqEwk-Jkzs9EEkQg4hbefqJS6yS1HoV_2EsEhpd_wCQpxK89WPs3hLYZETRJtG5kvCCEOvSHXmDE6eTHGTnEgsIk--UlPe275Dvou4gEAwLofhLDQbMSjnlV5VLsjimNBVcSRFShoxmQwBJR_b2011Y5IuD6St5zPnzruBbZYkGNurQK63TJPWmRd3mbJsGM0mf3CUQ
    ```

2. Request URI

    URI Syntax https:/\/graph.windows.net/{tenant id}/{resource-path}?{OPTIONAL: filter-expression}?{api-version}
    
    URI Example
    
    ```
    https://graph.windows.net/160f539f-8571-4c96-9361-797645c24e75/applications?$filter=startswith(displayName,%27yourCloudAutomation%27)&api-version=1.6
    ```
    > [!IMPORTANT] 
    > Application name in this example is yourCloudAutomation.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
