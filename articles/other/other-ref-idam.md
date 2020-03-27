---
title: Understanding UKCloud's Identity & Access Management API
description: Provides information on managing permissions using the Identity & Access Management API
services: other
author: Simon Fish
reviewer:
lastreviewed: 08/11/2018 10:25:23

toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Identity & Access Management API
toc_fullpath: Reference/other-ref-idam.md
toc_mdlink: other-ref-idam.md
---

# Understanding UKCloud's Identity & Access Management API

UKCloud's Identity & Access Management API (IDAM) enables you to manage user access to products within your account. Adding a user to a group changes which permissions they have.

Full documentation for the IDAM API is available on [SwaggerHub](https://app.swaggerhub.com/apis/ukcloud/idam-service).

## Typical usage

To add a user to a permission group, you first need to list the users and permission groups to find the IDs for both. Then you can use those IDs to add the user to the appropriate group.

### Prerequisites

This article provides examples using [`curl`](https://curl.haxx.se/) and [`jq`](https://stedolan.github.io/jq/).

### Authentication

Before you begin, you'll need to retrieve a single sign-on token to authenticate with IDAM. For ease of use, this is saved to a variable `token` in your current shell session using the below command.

```sh
echo "enter your Portal email address"
read username
echo "enter your Portal password"
read -s password

token=$(curl -X POST "https://idp.ukcloud.com/auth/realms/client-assured/protocol/openid-connect/token" \
     --data-urlencode "username=$username" \
     --data-urlencode "password=$password" \
     -d grant_type=password \
     -d client_id=portal.ukcloud | jq -r '.access_token')

unset password
```

This token is used in bearer authentication with IDAM. Requests to the IDAM API are prefaced with `curl -H "Authorization: Bearer $token"`.

### Listing users

The first step would be to find the ID of the user whose permissions you wish to edit.

The below command lists all users you are entitled to manage with their IDs and usernames. Take a note of your target user's ID.

```sh
curl -s -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users | jq -r '.[] | .id + " " + .username'
```

### Listing groups

The next step is to find the ID of the permission you would like to give or take from the user. These are known as *groups* internally to IDAM.

The below command lists all groups you are entitled to manage with their IDs and names.

```sh
curl -s -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/groups | jq -r '.[].subGroups[] | .id + " " + .name'
```

### Adding a user to a group

To give a user a particular permission, use the IDs that you have found to make a request to grant the user that permission.

You can add a user to a group with this PUT request. Expect a response code of 204 if this is successful.

```sh
curl -X PUT -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/{{user_id}}/groups/{{group_id}}
```

### Removing a user from a group

A `DELETE` request, as opposed to a `PUT` request, will remove a permission from a user by removing them from a group.

You can remove a user from a group with this DELETE request. Expect a response code of 204 if this is successful.

```sh
curl -X DELETE -H "Authorization: Bearer $token" https://idam.ukcloud.com/v1/users/{{user_id}}/groups/{{group_id}}
```

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
