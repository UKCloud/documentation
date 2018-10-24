# Identity and Access Management (IDAM)

UKCloud's **ID** and **A**ccess **M**anagement system allows users to manage user access to products within their account. Adding a user to a group changes which permissions they have.

Full documentation for the IDAM API is available in [Swagger]({{swagger_url}}).

## Typical usage

In order to add a user to a permission group, you can list the users and permission groups you have access to in order to find the IDs for both.

### Prerequisites

[`curl`](https://curl.haxx.se/) and [`jq`](https://stedolan.github.io/jq/_) will be used during this tutorial.

### Authentication

You'll need to retrieve a token from the Portal to authenticate with IDAM. For ease of use, this is saved to a variable `token` in your current shell session using the below command.

```sh
token=$(curl -k -X POST "{{sso_url}}/auth/realms/{{realm_name}}/protocol/openid-connect/token" \
     -d username="<username>" \
     -d password="<password>"  \
     -d grant_type=password    \
     -d client_id=portal.ukcloud | jq -r '.access_token')
```

This token is used in bearer authentication with IDAM. Requests to the IDAM API are prefaced with `curl -k -H "Authorization: Bearer $token"`

### Listing users

The first step would be to find the ID of the user whose permissions you wish to edit.

The below command will list all users you are entitled to manage with their IDs and usernames. Take a note of your target user's ID.

```sh
curl -k -s -H "Authorization: Bearer $token" {{idam_url}}/v1/users | jq -r '.[] | .id + " " + .username'
```

### Listing groups

The next step is to find the ID of the permission you would like to give or take from the user. These are known as *groups* internally to IDAM.

The below command will list all groups you are entitled to manage with their IDs and names.

```sh
curl -k -s -H "Authorization: Bearer $token" {{idam_url}}/v1/groups | jq -r '.[].subGroups[] | .id + " " + .name'
```

### Adding a user to a group

If you wish to give a user a particular permission, you can then use the IDs that you have found to make a request to grant the user that permission.

You can add a user to a group with this PUT request. Expect a response code of 204 if this is successful.

```sh
curl -k -X PUT -H "Authorization: Bearer $token" {{idam_url}}/v1/users/{{user_id}}/groups/{{group_id}}
```

### Removing a user from a group

A `DELETE` request, as opposed to a `PUT` request, will remove a permission from a user by removing them from a group.

You can remove a user from a group with this PUT request. Expect a response code of 204 if this is successful.

```sh
curl -k -X DELETE -H "Authorization: Bearer $token" {{idam_url}}/v1/users/{{user_id}}/groups/{{group_id}}
```
