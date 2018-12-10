---
title: How to remove access rights from Single Sign-On users | UKCloud Ltd
description: Describes the process for removing access from Single Sign-On (SSO) users
services: other
author: Sue Highmoor

toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Remove access rights from Single Sign-On users
toc_fullpath: How To/other-how-delete-sso-user.md
toc_mdlink: other-how-delete-sso-user.md
---

# How to remove access rights from Single Sign-On (SSO) users

## Overview

When you use the UKCloud Portal to remove a user from an account that includes SSO-enabled services, it's important to note that this does not remove access rights from the corresponding SSO user. To remove the SSO user's access, you must use the Identity & Access Management (IDAM) API to remove that user from all IDAM groups.

SSO-enabled services are:

- UKCloud for OpenShift

- UKCloud for OpenStack

For more information about the IDAM API, see [*Understanding UKCloud's Identity & Access Management API*](other-ref-idam.md).

## Removing access rights from an SSO user

The process for using the IDAM API to remove access rights from an SSO user is as follows:

1. Authenticate with the IDAM API:

    ```bash
    token=$(curl -X POST "https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token" \
     -d username="<username>" \
     -d password="<password>"  \
     -d grant_type=password    \
     -d client_id=portal.ukcloud | jq -r '.access_token')
     ```

    This returns an SSO token to use for authenticating calls to the IDAM API. For example:

    ```json
    {
     "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUU0F1WERTWUt0SGVEWTI5ZHlPVFZVeHZUMWNhYmUyNUpEVVZzajhVRUhrIn0.eyJqdGkiOiI2YWJmYzkw...",
     "expires_in": 300,
     "refresh_expires_in": 1800,
     "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUU0F1WERTWUt0SGVEWTI5ZHlPVFZVeHZUMWNhYmUyNUpEVVZzajhVRUhrIn0.eyJqdGkiOiIyMDkyNjA0...",
     "token_type": "bearer",
     "not-before-policy": 0,
     "session_state": "342ab476-d286-41b9-8b3a-1a236cceefc1"
    }
    ```

    For convenience, the token is saved to the `token` variable in your current shell session. Use this variable in the `Authorization: Bearer` header for all further calls to the IDAM API.

2. List users and note the ID of the user you want to remove:

    ```bash
    curl -s -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users | jq -r '.[] | .id + " " + .username'
    ```

    The `jq` filter on this request returns a list of SSO users and their IDs:

    ```none
    0744f665-2d7a-483c-adb3-72b0effe2356 acc1admin
    1d9e52e6-f833-47b9-9cfa-be727510c910 acc1usr1
    a089698b-8f32-4a32-ab71-790b015aa662 acc1usr2
    ```

3. Find the user that you want to remove and make a note of that user's ID. For example, to remove the user `acc1usr2`, you would need the ID `a089698b-8f32-4a32-ab71-790b015aa662`.

    > [!TIP]
    > If you will have to remove the user from multiple groups, you may find it helpful to store this ID in a variable.

4. List all the groups that you have permission to manage:

    ```bash
    curl -s -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/groups | jq -r '.[].subGroups[] | .id + " " + .name'
    ```

    The `jq` filter on this request returns a list of groups:
    
    ```none
    008d3512-54f9-439e-800a-7b0b5ef76438 idam:Account_101#User
    a4ebc856-222f-4686-a4bf-239c21ffa010 idam:Account_101#Admin
    ```

5. Make a note of the IDs of all the groups. The example above lists two groups:

    - `idam:Account_101#User` with the ID `008d3512-54f9-439e-800a-7b0b5ef76438`

    - `idam:Account_101#Admin` with the ID `a4ebc856-222f-4686-a4bf-239c21ffa010`

6. Remove the user from each group by making a `DELETE` request for that user against each group.

    ```bash
    curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/{{user_id}}/groups/{{group_id}}
    ```

    For example, to remove the SSO user `acc1usr2`, you would need to make two calls:

    ```bash
    curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/a089698b-8f32-4a32-ab71-790b015aa662/groups/008d3512-54f9-439e-800a-7b0b5ef76438

    curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/a089698b-8f32-4a32-ab71-790b015aa662/groups/a4ebc856-222f-4686-a4bf-239c21ffa010
    ```

    If you stored the user ID in a variable, you can use that in the request. For example, if the user ID `a089698b-8f32-4a32-ab71-790b015aa662` is stored in a variable `acc1usr2`, your calls would look like the following:
    
    ```bash
    curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/$acc1usr2/groups/008d3512-54f9-439e-800a-7b0b5ef76438
    
    curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/$acc1usr2/groups/a4ebc856-222f-4686-a4bf-239c21ffa010
    ```

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
