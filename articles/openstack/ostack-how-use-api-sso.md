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
toc_title: Use the OpenStack API with an SSO user
toc_fullpath: How To/ostack-how-use-api-sso.md
toc_mdlink: ostack-how-use-api-sso.md
---

# How to use the OpenStack API using an SSO enabled user

## Overview

If your OpenStack user account is SSO-enabled, and you want to use the OpenStack API you'll need to make a few changes to your downloaded OpenStack RC file. These changes allow any API calls that you make to be correctly passed to the SSO service.

## Downloading your RC file

See the *Bind your OpenStack credentials* section of [*How to use the OpenStack Command Line*](ostack-how-use-cli.md) for details on where to get your RC file. 

> [!NOTE]
> You will require the v3 version of the OpenStack RC file. 

## Modifying your RC file

Once you've downloaded your RC file, open it in your editor of choice and remove the following line: 

```bash
export OS_USER_DOMAIN_NAME="Federated"
```

now add the following lines to the bottom of the file:

```bash 
export OS_IDENTITY_PROVIDER="sso"
export OS_PROTOCOL="oidc"
export OS_AUTH_TYPE="v3oidcpassword"
```

You also need to add the following items to the bottom of the file, substituting the appropriate values from the table below depending on the OpenStack regions you're connecting to:

```bash
export OS_CLIENT_ID=""
export OS_CLIENT_SECRET=""
export OS_ACCESS_TOKEN_ENDPOINT=""
```


| Site | Variable | Value|
| ---  | ---------|------|
| Farnborough  | OS_CLIENT_ID | `cni.1.frn00006` |
| &nbsp; | OS_CLIENT_SECRET | User defined |
| &nbsp; | OS_ACCESS_TOKEN_ENDPOINT | `https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token` |
| Corsham  | OS_CLIENT_ID | `cni.1.cor00005` |
| &nbsp; | OS_CLIENT_SECRET | User defined |
| &nbsp; | OS_ACCESS_TOKEN_ENDPOINT | `https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token` |
| Corsham-2 (OSP13)  | OS_CLIENT_ID | `cni.2.cor00005` |
| &nbsp; | OS_CLIENT_SECRET | 56160ec2-17d1-4047-a42a-e6f9f70a3179 |
| &nbsp; | OS_ACCESS_TOKEN_ENDPOINT | `https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token` |

**Now save your changes and close the file.**

Your OpenStack RC file is now ready to be used as normal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
