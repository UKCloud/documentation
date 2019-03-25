---
title: How to use the OpenStack API using an SSO enabled user | UKCloud Ltd
description: Explains the changes needed to make use of the OpenStack API with an SSO enabled user.
services: openstack
author: Steve Relf

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: OpenStack API with SSO users
toc_fullpath: How To/ostack-sso-rcfile.md
toc_mdlink: ostack-sso-rcfile.md
---

# How to use the OpenStack API using an SSO enabled user

## Overview

In order to use the OpenStack API with your SSO enabled user, you will need to make a few changes to your downloaded OpenStack RC file. This is to allow your API calls to be correctly passed to the SSO service.

## Downloading your RC file.

Please see [this guide](ostack-how-use-cli.md) section five for details on where to ger your RC file. You will require the v3 version. 

## Modifying your RC file.

Once you have downloaded your RC file you will need to add the following items to the bottom of the file.


* export OS_IDENTITY_PROVIDER="sso"
* export OS_PROTOCOL="oidc"
* export OS_AUTH_TYPE="v3oidcpassword"

You will also need to add the below items, and using the table below choose the correct entries for the OpenStack region you are connecting too.
* export OS_CLIENT_ID=""
* export OS_CLIENT_SECRET=""
* export OS_ACCESS_TOKEN_ENDPOINT=""

| Site | Variable | Value|
| ---  | ---------|------|
| FRN  | OS_CLIENT_ID | cni.1.frn00006 |
| FRN  | OS_CLIENT_SECRET | "Can be anything" |
| FRN  | OS_ACCESS_TOKEN_ENDPOINT | https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token |
| COR  | OS_CLIENT_ID | cni.1.cor00005 |
| COR  | OS_CLIENT_SECRET | "can be anything" |
| COR  | OS_ACCESS_TOKEN_ENDPOINT | https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token |

You have now updated your RC file.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
