---
title: How to retrieve billing information from the CSP Portal via API
description: How to retrieve billing information from the CSP Portal via API
services: azure-stack
author: David Woffendin

toc_rootlink: Operators
toc_sub1: How To
toc_sub2: 
toc_sub3:
toc_sub4:
toc_title: Retrieve billing information from the CSP Portal via API
toc_fullpath: Operators/How To/azs-how-to-retrieve-billing-api.md
toc_mdlink: azs-how-to-retrieve-billing-api.md
---
# How to retrieve billing information from the CSP Portal via API

The purpose of this guide is to help obtain billing information from the CSP Portal via the API.

## Authentication 

Authentication requires obtaining an AAD token and then a CSP token, which is based on the JWT token, from the Partner Portal and then appending those tokens to each request.

## AAD Token

### Login endpoint
```
https://login.microsoftonline.com/{tenant id}/oauth2/token
or
https://login.windows.net/{tenant id}/oauth2/token
```
The tenant ID can either be:
- Default value for tenant independent keys - common

- The tenant ID, for example, XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

- The tenant domain, for example, example.your.domain.com

### Body

- **grant_type** - This is the type of authentication scheme you will be using. In this example the value is "password".

- **clientid** - This value is unique to your CSP portal for example, XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.

- **resource** - The resource the token will be used to access, https://api.partnercenter.microsoft.com.

- **username** - The Azure Stack AAD account email.

- **password** - The Azure Stack AAD account password.

### PowerShell Example:

```PowerShell
$url  = "https://login.windows.net/common/oauth2/token"
$body = "grant_type=password&"
$body = $body + "client_id=$clientid&"
$body = $body + "resource=$resource&"
$body = $body + "username=$username&"
$body = $body + "password=$password&"
$body = $body + "scope=openid"
```
### Bash Example:

```bash
curl -X "POST" "https://login.windows.net/common/oauth2/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    --data-urlencode "client_id=$clientid" \
    --data-urlencode "grant_type=password" \
    --data-urlencode "username=$username" \
    --data-urlencode "password=$password" \
    --data-urlencode "resource=$resource"
```

## CSP Token

### Login Endpoint:

```
https://api.partnercenter.microsoft.com/generatetoken
```

### Body

```
grant_type=jwt_token
```
**grant_type:** This is the type of authentication scheme you will be using. In this example the value is **jwt_token**. 

**jwt_token:** This is the JSON Web Token.

### PowerShell Example:

```PowerShell
$url  = "https://api.partnercenter.microsoft.com/generatetoken"
$body = "grant_type=jwt_token"
$headers=@{Authorization="Bearer $aadtoken"} 

$responseCSPToken = Invoke-RestMethod -Uri $url -Headers $headers -Body $body -method "POST" #-Debug -Verbose
$responseCSPToken.access_token 

$headerstest= @{Authorization="Bearer  $($responseCSPToken.access_token)"}
```

### Bash Example:

```bash
curl -X "POST" "https://api.partnercenter.microsoft.com/generatetoken" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -H "Authorization: Bearer $ADToken" \
    --data-urlencode "grant_type=jwt_token" \
    | grep -o -P '(?<=access_token":").*(?=","token_type)'
```

## CSP API Request

URL Endpoints will be determined from the CSP API guide:

- https://docs.microsoft.com/en-us/partner-center/develop/partner-center-rest-api-reference

- https://docs.microsoft.com/en-us/partner-center/develop/get-a-customer-s-utilization-record-for-azure

- https://docs.microsoft.com/en-us/partner-center/develop/get-prices-for-microsoft-azure

### PowerShell Example:

```PowerShell
$CSPQuery = Invoke-WebRequest -uri "https://api.partnercenter.microsoft.com/v1/invoices/<"Insert Invoice Name">/documents/statement" -UseBasicParsing -Headers $headerstest -OutFile c:\temp\test1.pdf
$CSPQuery
```

### Bash Example:

```bash
curl -X "GET" "https://api.partnercenter.microsoft.com/v1/invoices/<"Insert Invoice Name">/lineitems/Azure/UsageLineItems" \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
-H "Authorization: Bearer $CSPToken"
```

## Sample Code

### PowerShell

```PowerShell
#########################################

# Variables
$domain = "common"
$resource = 'https://api.partnercenter.microsoft.com'
$clientid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
$username = "XXXXXXXXX@XXXXXXXXX.com"
$password = 'XXXXXXXXXXXX'

# Obtain AAD Token
$url  = "https://login.windows.net/{0}/oauth2/token" -f $domain
$body = "grant_type=password&"
$body = $body + "client_id=$clientid&"
$body = $body + "resource=$resource&"
$body = $body + "username=$username&"
$body = $body + "password=$password&"
$body = $body + "scope=openid"
 
$response = Invoke-RestMethod -Uri $url -Body $body -method "POST" -Headers $headers
$response.access_token
$aadtoken = $response.access_token
 
# Obtain CSP token based on AAD token
$url  = "https://api.partnercenter.microsoft.com/generatetoken"
$body = "grant_type=jwt_token"
$headers=@{Authorization="Bearer $aadtoken"} 

$responseCSPToken = Invoke-RestMethod -Uri $url -Headers $headers -Body $body -method "POST" 
$responseCSPToken.access_token 

$headerstest= @{Authorization="Bearer  $($responseCSPToken.access_token)"}

# Query CSP Portal
$CSPQuery = Invoke-WebRequest -uri "https://api.partnercenter.microsoft.com/v1/invoices/<"Insert Invoice Name">/documents/statement" -UseBasicParsing -Headers $headerstest -OutFile c:\temp\test1.pdf
$CSPQuery

#########################################
```

### Bash

```bash
#########################################

 # Variables
 domain='common'
 resource='https://api.partnercenter.microsoft.com'
 clientid = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
 username = 'XXXXXXXXX@XXXXXXXXX.com'
 password = 'XXXXXXXXXXXX'
  
 # Obtain AAD Token
 ADToken=$(curl -X "POST" "https://login.windows.net/common/oauth2/token" \
 -H "Content-Type: application/x-www-form-urlencoded" \
 --data-urlencode "client_id=$clientid" \
 --data-urlencode "grant_type=password" \
 --data-urlencode "username=$username" \
 --data-urlencode "password=$password" \
 --data-urlencode "resource=$resource"  \
  |grep -o -P '(?<=access_token":").*(?=","refresh_token)')
 
 # Obtain CSP token based on AAD token
 CSPToken=$(curl -X "POST" "https://api.partnercenter.microsoft.com/generatetoken" \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -H "Authorization: Bearer $ADToken" \
 --data-urlencode "grant_type=jwt_token" \
 | grep -o -P '(?<=access_token":").*(?=","token_type)')

 # Query CSP Portal  
 curl -X "GET" "https://api.partnercenter.microsoft.com/v1/invoices/<"Insert Invoice Name">/lineitems/Azure/BillingLineItems" \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: Bearer $CSPToken" \
 > billing.csv

 #########################################
 ```
## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [*UKCloud Ideas*](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
