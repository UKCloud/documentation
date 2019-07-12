---
title: UKCloud Portal API Reference Guide | UKCloud Ltd
description: Shows how to interact with the UKCloud Portal via use of an application programming interface (API)
services: portal
author: Sue Highmoor
reviewer:
lastreviewed: 20/07/2018 12:12:33
toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: API Reference Guide
toc_fullpath: Reference/ptl-ref-portal-api.md
toc_mdlink: ptl-ref-portal-api.md
---

# UKCloud Portal API Reference Guide

## Overview

This is an application programmer's guide designed for those wanting to interact with the UKCloud Portal via use of an application programming interface (API).

We will update this document with API calls as they become available.

## Accessing the Portal API

The entry point URL for the Portal API is:

`https://portal.skyscapecloud.com/api`

For information and examples about how to use the Portal API, see [*How to use the UKCloud Portal API*](ptl-how-use-api.md).

## Response HTTP status codes

Code | Reason
-----|-------
200 | All OK
201 | Created resource OK
202 | Accepted
400 | Bad request
401 | Authorization error
403 | Forbidden
404 | URL resource not found
422 | Unprocessable entity
500 | Error with operation

## POST /api/authenticate

Authenticates your API session.

### API version

v1

### Request

#### Request body

```
{"email": "email@example.com", "password": "password"}
```

#### Parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  email |           User's email address |  String |  Y
  password |        User's password |       String |  Y

#### URI parameters

None

#### Example request (Curl)

```bash
curl -c /tmp/cookies.txt -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -d '{"email": "email@example.com", "password": "password"}' https://portal.skyscapecloud.com/api/authenticate
```

#### Example request (Ruby)

```
conn = Faraday.new('https://portal.skyscapecloud.com') { |f| f.request :json }
resp = conn.post('/api/authenticate', {'email' => 'email@example.com', 'password' => 'password'})
cookies = resp.env[:response_headers]['set-cookie']
```

### Response

#### Successful HTTP response

201 Created --- The authentication request was successful

#### Unsuccessful HTTP response

400 Bad request --- The email and password was not provided

401 Unauthorized --- The user could not be authenticated

#### Response body

  Attribute | Type | Value | Example
  ----------|------|-------|--------
  expire_after | String | Amount of time (in seconds) that the session is valid for | 900

The endpoint also returns a session cookie that provides authentication for your API calls. You must send this cookie with any subsequent authenticated call, for example:

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts
```

#### Example response

```
{"expire_after": 900}
```

## GET /api/my_vm

Returns a list of up to 10 VMs with billing data.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

None

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/my\vm
```

#### Example request (Ruby)

```
resp = conn.get('/api/my_vm') { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

#### Response body

Returns a response with a list of up to 10 VMs

#### Example response

```
{"account":
  {"vapps":
    ["_id":1,
     "urn":"urn:vcloud:vapp:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
     "name":"My vApp",
     "ps":"On",
     "total_vms":1,
     "month_to_date":"£0.15",
     "estimated_monthly_total":"£0.34"
    ],
    "vms":
    ["_id":1,
     "urn":"urn:vcloud:vm:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
     "name":"My VM",
     "size":"small",
     "ps":"On",
     "os":"Microsoft Windows Server 2008 R2 (64-bit)",
     "cpu":"2x2GHz",
     "mem":"4096MB",
     "storage":"50GB",
     "created_at":"01/01/2015 09:00",
     "updated_at":"01/01/2015 09:00",
     "month_to_date":"£0.15",
     "estimated_monthly_total":"£0.34",
     "comment":null,
     "last_backup_status":"Successful",
     "in_backup":true,
     "last_backup":"Completed on the night of: 01/01/2015",
     "retention_length":14,
     "billed_hours_powered_on":8,
     "billed_hours_powered_off":14,
     "backups":
     [{"status":"Completed",
       "backup_slot":"night of: 01/01/2015",
       "backup_start":"01/01/2015 23:23",
       "backup_end":"01/01/2015 23:31",
       "snapshot_removal_start":"01/01/2015 23:33",
       "snapshot_removal_end":"01/01/2015 23:38"
     }]
    ]
  }
}
```

## My Calls API (Removed)

> [!IMPORTANT]
> With the move to the new [My Calls](https://portal.ukcloud.com/support/ivanti) service management tool, this functionality is no longer available.

### GET /api/my_calls

Returns a complete list of support calls (similar to the MyCalls view in the UKCloud Portal).

### GET /api/my_calls/:ticket_id

Returns a single ticket and its updates and changes.

### PUT /api/my_calls/:ticket_id

Adds a new note to a ticket.

### POST /api/my_calls

Adds a new ticket.

### PUT /api/my_calls/:ticket_id/subscribe

Subscribes a user to a ticket.

### PUT /api/my_calls/:ticket_id/unsubscribe

Unsubscribes a user from a ticket.

### PUT /api/my_calls/:ticket_id/reopen

Reopens a ticket.

### PUT /api/my_calls/:ticket_id/change_owner

Change the owner of a ticket.

### PUT /api/my_calls/:ticket_id/cancel

Cancels a ticket.

### PUT /api/my_calls/:ticket_id/close

Closes a ticket.

## GET /api/ping

An endpoint to test API functionality.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

None

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/ping
```

#### Example request (Ruby)

```
resp = conn.get('/api/ping') { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

#### Response body

Returns OK if the user has been authenticated.

#### Example response

```
{"response":"OK"}
```

## GET /api/accounts

Returns a list of accounts associated with the current user.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

None

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts
```

#### Example request (Ruby)

```
resp = conn.get('/api/accounts') { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

#### Response body

Returns an array of accounts with the ID and name.

#### Example response

```
[{"name":"UKCloud Development Team","id":48},{"name":"Demo","id":1}]
```

### JSON schema

```
{
"description": "The Portal accounts that your user has access to",
"items": {
"properties": {
"id": {
"description": "The ID of the account",
"type": "integer"
},
"name": {
"description": "The name of the account",
"type": "string"
}
},
"required": [
"id",
"name"
],
"type": "object"
},
"title": "GET /api/accounts/",
"type": "array",
"uniqueItems": true
}
```

## GET /api/accounts/:account_id/compute_services

Returns a list of compute services (vOrgs), VDCs, vApps and VMs associated with the specified account.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y
  per_page | The number or records (vOrgs) to display per page of results | Integer | N (25)
  page | The specific page of results to display | Integer | N (1)

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/compute_services?page=10&per_page=20
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/compute_services?page=10&per_page=20") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

Returns an array of compute services.

To specify how many vOrgs to display per page of results, set the `per_page` URL parameter in the query string. To return a specific page of results, set the page parameter. If you do not set these parameters, all results are returned.

#### Example response

```
{
  "account": {
    "id": 1
  },
  "vOrgs": [
    {
      "VDCs": [
        {
          "name": "UKCloud (IL0-PROD-BASIC)",
          "urn": "urn:vcloud:vdc:3f78f9db-be9b-4517-a013-f1a6e39d5f5d",
          "vApps": [
            {
              "VMs": [
                {
                  “_id”: 2
                  "billedHoursPoweredOff": 443,
                  "billedHoursPoweredOn": 0,
                  "estimatedMonthlyTotal": "4.88",
                  "memory": 16384,
                  "monthToDate": "2.91",
                  "name": "RedHat-v6.4-x86_64",
                  "numberOfCPUs": 4,
                  "operatingSystem": "Red Hat Enterprise Linux 6 (64-bit)",
                  "powerStatus": "POWERED_OFF",
                  "storage": 65536,
                  "urn": "urn:vcloud:vm:3272ed5b-8e59-4ce4-bc10-5b575fd25787",
                  "inBackup": true,
                  "lastBackupStatus": "Successful",
                  "lastBackup": "Completed on the night of: 23/06/2015",
                  "inBackup": true,
                  "lastBackupStatus": "Successful",
                  "retentionLength":28,
                  "backups":[
                    {
                      "status":"Completed","backupSlot":"night of: 23/06/2015",
                      "backupStart":"24/06/2015 01:32",
                      "backupEnd":"24/06/2015 01:35",
                      "snapshotRemovalStart":"24/06/2015 01:34",
                      "snapshotRemovalEnd":"24/06/2015 01:35"
                    }
                  ]
                }]
              "name": "Demo vApp 2",
              "urn": "urn:vcloud:vapp:ca8517e8-e4f5-4289-8563-3afb86577972"
            }
          ]
        }
      ],
      "name": "UKCloud Demo vCloud",
      "serviceId": "1-1-1-9836cf",
      "urn": "urn:vcloud:org:66bf4c1d-24de-4793-8bdf-95f4fd3d737f"
    }
  ]
}

```

### JSON schema

```
{
  "description":"The compute services (vOrgs), VDCs, vApps, VMs within your account",
  "properties":{
    "account":{
      "properties":{
        "id":{
          "type":"integer"
        }
      },
      "required":[
        "id"
      ],
      "type":"object"
    },
    "vOrgs":{
      "items":{
        "description":"A compute service (vOrg)",
        "properties":{
          "VDCs":{
            "items":{
              "description":"A virtual data center (VDC)",
              "properties":{
                "name":{
                  "type":"string"
                },
                "urn":{
                  "pattern":"^urn:vcloud:vdc:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$",
                  "type":"string"
                },
                "vApps":{
                  "items":{
                    "description":"A virtual app (vApp)",
                    "properties":{
                      "VMs":{
                        "items":{
                          "description":"A virtual machine (VM)",
                          "properties":{
                            "_id":{
                              "type":"integer"
                            },
                            "billedHoursPoweredOff":{
                              "description":"The number of hours the virtual machine has been powered off this month, as used in the billing calculation.",
                              "minimum":0,
                              "type":"integer"
                            },
                            "billedHoursPoweredOn":{
                              "description":"The number of hours the virtual machine has been powered on this month, as used in the billing calculation.",
                              "minimum":0,
                              "type":"integer"
                            },
                            "estimatedMonthlyTotal":{
                              "anyOf":[
                                {
                                  "pattern":"^\\d+\\.\\d{2}$",
                                  "type":"string"
                                },
                                {
                                  "type":"null"
                                }
                              ],
                              "description":"The estimated cost of the virtual machine for this month. In pound sterling (GBP \u00a3). Will be null at the beginning of the month."
                            },
                            "memory":{
                              "description":"The amount of memory allocated to the virtual machine in MiB (1MiB = 1024KiB = 1024 \u2715 1024B).",
                              "minimum":0,
                              "type":"integer"
                            },
                            "monthToDate":{
                              "description":"The cost of the virtual machine so far this month. In pound sterling (GBP \u00a3).",
                              "pattern":"^\\d+\\.\\d{2}$",
                              "type":"string"
                            },
                            "name":{
                              "type":"string"
                            },
                            "numberOfCPUs":{
                              "type":"integer"
                            },
                            "operatingSystem":{
                              "type":"string"
                            },
                            "powerStatus":{
                              "enum":[
                                "POWERED_ON",
                                "POWERED_OFF",
                                "UNKNOWN"
                              ],
                              "type":"string"
                            },
                            "storage":{
                              "description":"The amount of storage allocated to the virtual machine.",
                              "minimum":0,
                              "type":"integer"
                            },
                            "size":{
                              "description":"The name of the virtual machine size.",
                              "oneOf":[
                                {
                                  "enum":[
                                    "Micro",
                                    "Tiny",
                                    "Small",
                                    "Medium",
                                    "Medium High Memory",
                                    "Large",
                                    "Large High Memory",
                                    "Tier 1 App Small",
                                    "Tier 1 App Medium",
                                    "Tier 1 App Large"
                                  ],
                                  "type":"string"
                                },
                                {
                                  "type":"null"
                                }
                              ]
                            },
                            "lastBackupStatus":{
                              "description":"A description of the status of the last backup.",
                              "enum":[
                                "No data for last backup",
                                "Excluded from backup",
                                "Successful",
                                "Failed",
                                "Not in policy"
                              ],
                              "type":"string"
                            },
                            "inBackup":{
                              "description":"False if the virtual machine is excluded from backup.",
                              "type":"boolean"
                            },
                            "lastBackup":{
                              "description":"If there is a backup, a human-readable sentence containing its status and backupSlot.",
                              "oneOf":[
                                {
                                  "pattern":"^.+ on the night of: [0-9]{2}\/[0-9]{2}\/[0-9]{4}$",
                                  "type":"string"
                                },
                                {
                                  "enum":[
                                    "No backup"
                                  ],
                                  "type":"string"
                                }
                              ]
                            },
                            "retentionLength":{
                              "description":"Number of days for which the backup will be retained.",
                              "type":"integer"
                            },
                            "urn":{
                              "pattern":"^urn:vcloud:vm:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$",
                              "type":"string"
                            },
                            "backups":{
                              "items":{
                                "properties":{
                                  "status":{
                                    "description":"The final status of the backup. Possible values include 'Completed', 'Completed w/Exception(s)', and 'Failed'",
                                    "type":"string"
                                  },
                                  "backupSlot":{
                                    "description":"Human-readable description of the date and approximate time slot for the backup.",
                                    "pattern":"^night of: [0-9]{2}\/[0-9]{2}\/[0-9]{4}$",
                                    "type":"string"
                                  },
                                  "backupStart":{
                                    "description":"The date and time the backup started.",
                                    "oneOf":[
                                      {
                                        "pattern":"^[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-2][0-9]:[0-5][0-9]$",
                                        "type":"string"
                                      },
                                      {
                                        "type":"null"
                                      }
                                    ]
                                  },
                                  "backupEnd":{
                                    "description":"The date and time the backup ended.",
                                    "oneOf":[
                                      {
                                        "pattern":"^[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-2][0-9]:[0-5][0-9]$",
                                        "type":"string"
                                      },
                                      {
                                        "type":"null"
                                      }
                                    ]
                                  },
                                  "snapshotRemovalStart":{
                                    "description":"The date and time the VM's hard disk drive was stunned for consolidation.",
                                    "oneOf":[
                                      {
                                        "pattern":"^[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-2][0-9]:[0-5][0-9]$",
                                        "type":"string"
                                      },
                                      {
                                        "type":"null"
                                      }
                                    ]
                                  },
                                  "snapshotRemovalEnd":{
                                    "description":"The date and time the VM's hard disk drive returned to normal service.",
                                    "oneOf":[
                                      {
                                        "pattern":"^[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-2][0-9]:[0-5][0-9]$",
                                        "type":"string"
                                      },
                                      {
                                        "type":"null"
                                      }
                                    ]
                                  }
                                },
                                "required":[
                                  "status",
                                  "backupSlot",
                                  "backupStart",
                                  "backupEnd",
                                  "snapshotRemovalStart",
                                  "snapshotRemovalEnd"
                                ],
                                "type":"object"
                              },
                              "type":"array"
                            }
                          },
                          "required":[
                            "_id",
                            "name",
                            "urn",
                            "monthToDate",
                            "estimatedMonthlyTotal",
                            "billedHoursPoweredOn",
                            "billedHoursPoweredOff",
                            "powerStatus",
                            "operatingSystem",
                            "numberOfCPUs",
                            "memory",
                            "storage",
                            "size",
                            "lastBackupStatus",
                            "inBackup",
                            "lastBackup",
                            "retentionLength",
                            "backups"
                          ],
                          "type":"object"
                        },
                        "type":"array"
                      },
                      "name":{
                        "type":"string"
                      },
                      "urn":{
                        "pattern":"^urn:vcloud:vapp:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$",
                        "type":"string"
                      }
                    },
                    "required":[
                      "name",
                      "VMs",
                      "urn"
                    ],
                    "type":"object"
                  },
                  "type":"array"
                }
              },
              "required":[
                "name",
                "vApps",
                "urn"
              ],
              "type":"object"
            },
            "type":"array"
          },
          "name":{
            "type":"string"
          },
          "serviceId":{
            "pattern":"^\\d+-\\d+-\\d+-[a-zA-Z0-9]{5,6}$",
            "type":"string"
          },
          "urn":{
            "pattern":"^urn:vcloud:org:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$",
            "type":"string"
          }
        },
        "required":[
          "name",
          "VDCs",
          "serviceId",
          "urn"
        ],
        "type":"object"
      },
      "type":"array"
    }
  },
  "required":[
    "account",
    "vOrgs"
  ],
  "title":"GET /api/accounts/:account_id/compute_services",
  "type":"object"
}
```

## GET /api/accounts/:account_id/compute_services/:vorg_id

Returns information about the VDCs, vApps and VMs associated with the specified compute service (vOrg).

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | &nbsp; | &nbsp;
  vorg_id | The ID of the vOrg about which you want to retrieve information | &nbsp; | &nbsp;

For information about how to find the vOrg ID, see [*GET /api/accounts/:account_id/vorgs*](#get-apiaccountsaccount_idvorgs)

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/compute_services/12
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

404 Not Found --- The vOrg does not exist in the specified account

#### Response body

Returns a list of VDCs, vApps and VMs.

#### Example response

```
{"compute_service_id": 12,
  "name": "Example Service Name",
  "serviceId": "Service ID",
  "urn": "urn",
  "VDCs": [
    {
      "name": "Example VDC Name (IL2-PROD)",
      "urn": "urn",
      "vApps": [
        {
          "name": "Example vAPP name",
          "urn": "urn",
          "VMs": [
            {
              "_id": VM ID,
              "name": "testVm",
              "urn": "urn",
              "size": null,
              "monthToDate": "0.00",
              "estimatedMonthlyTotal": "0.00",
              "billedHoursPoweredOn": 0,
              "billedHoursPoweredOff": 0,
              "powerStatus": "POWERED_ON",
              "operatingSystem": "Ubuntu",
              "numberOfCPUs": 1,
              "memory": 512,
              "storage": 1024,
              "lastBackupStatus": "Excluded from backup",
              "inBackup": false,
              "lastBackup": "No backup",
              "retentionLength": 0,
              "backups": []
            }
          ]
        },
      ]
      },
  ]
}
```

## GET /api/accounts/:account_id/api_credentials

Returns a list of vCloud API credentials associated with the specified account.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/api_credentials
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/api_credentials") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

Returns an array of vCloud Director API credentials.

#### Example response

```
{
  "UKCloud Demo (1-1-1-9836cf)": {
    "service_id": "1-1-1-9836cf",
    "username": "11.12.132f4c@1-1-1-9836cf"
  },
  "UKCloud Test (1-1-2-883623)": {
    "service_id": "1-1-2-883623",
    "username": "11.12.132f4c@1-1-2-883623"
  }
}
```

### JSON schema

```
{
  "description":"The vCloud Director API credentials for a given account",
  "type": "object",
  "patternProperties": {
    "^.*\\(\\d+-\\d+-\\d+-[a-zA-Z0-9]{5,6}\\)$": {
      "type": "object",
      "properties": {
        "service_id": {
          "pattern":"^\\d+-\\d+-\\d+-[a-zA-Z0-9]{5,6}$",
          "type":"string"
        },
        "username": {
          "pattern":"^\\d+.\\d+.[a-zA-Z0-9]{6}@\\d+-\\d+-\\d+-[a-zA-Z0-9]{5,6}$",
          "type":"string"
        }
      },
      "required": ["service_id", "username"]
    }
  }
}
```

## GET /api/accounts/:account_id/vorgs

Returns a list of basic information about VMware compute services (vOrgs) associated with the specified account.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/vorgs
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/vorgs") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

  Attribute | Type | Value | Example
  ----------|------|-------|--------
  id | String | The ID of the compute service | 42-56
  type | String | vOrg | &nbsp;
  name | String | The name of the compute service | Proof of Concept

#### Example response

```
{
    "data": [
        {
            "id": "42-56",
            "type": "vOrg",
            "attributes": {
                "name": "Proof of Concept"
            }
        },
        {
            "id": "42-57",
            "type": "vOrg",
            "attributes": {
                "name": "Second vOrg"
            }
        }
    ]
}
```

### JSON schema

```
{
    "title":"GET /api/accounts/:account_id/vorgs",
    "description":"The vOrgs within your account",
    "oneOf": [
        {
            "$ref": "#/definitions/success"
        },
        {
            "$ref": "#/definitions/failure"
        }
    ],
    "definitions": {
        "success": {
            "type": "object",
            "required": [
                "data"
            ],
            "properties": {
                "data": {
                    "$ref": "#/definitions/data"
                }
            }
        },
        "failure": {
            "$ref": "#/definitions/error"
        },
        "data":{
            "type":"array",
            "items":{
                "title":"vOrgs",
                "type":"object",
                "properties":{
                    "id":{
                        "type":"string",
                        "pattern":"^\\d+-\\d+$"
                    },
                    "type":{
                        "type":"string",
                        "enum":["vOrg"]
                    },
                    "attributes":{
                        "type": "object",
                        "properties":{
                            "name": {
                                "type":"string"
                            }
                        },
                        "required":[
                            "name"
                        ]
                    }
                },
                "required":[
                    "id",
                    "type",
                    "attributes"
                ]
            }
        },
        "error": {
            "type": "object",
            "properties": {
                "error": {
                    "description": "A short, human-readable summary of the problem.",
                    "type": "string"
                },
                "detail": {
                    "description": "A human-readable explanation of the problem.",
                    "type": "string"
                }
            },
            "required":[
                "error"
            ]
        }
    }
}
```

## POST /api/accounts/:account_id/vorgs

Creates a vOrg in the specified account in the specified zone.

The authenticated user who creates the vOrg is automatically granted full administrative control of the compute service, enabling creation of VDCs and edge gateways immediately via the Portal API.

> [!NOTE]
> This API endpoint is available only in Regions 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

```
{"data": {"type": "Vorg", "attributes": {"zoneId": "B", "name": "DEMO"}}}
```

#### Parameters

Parameter name | Description | Type | Mandatory (Default)
---------------|-------------|------|--------------------
type | The object type; must be Vorg | String | Y
name | The name of the vOrg | String | Y
zone id | The zone in which to create the vOrg</br>Valid values:</br>- B (for Region 5, Assured)</br>- D (for Region 5, Elevated)</br>- F (for Region 6, Assured)</br>- 12 (for Region 6, Elevated) | String | Y

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt https://portal.skyscapecloud.com/api/accounts/53/vorgs -X POST -d '{"data": {"type": "Vorg", "attributes": {"zoneId": "B", "name": "DEMO"}}}' -H 'Accept: application/json' -H 'Content-Type: application/json'
```

### Response

#### Successful HTTP response

202 Accepted --- Includes a location header (for example Location: /api/vorg-builds/10)

#### Unsuccessful HTTP response

400 Invalid --- The data uploaded does not match the expected schema or there is a validation problem

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user is not an administrator for the account

404 Not Found --- The user does not have access to the account or the account does not exist

500 Server Error --- There was a problem creating the vOrg in the specified zone, either because the specified zone was not valid or because of a problem with UKCloud's systems

#### Response body

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | Vorg-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example. com
state | String | The state of the build</br>Valid values:</br>- approved -- vOrg creation process has been approved</br>- running -- vOrg is in the process of being created</br>- completed -- vOrg has been successfully created</br>-   failed -- vOrg creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
serviceName | String | The name of the vOrg (as specified in the build request) | My compute service
zoneId | String | The zone in which the vOrg is located (as specified in the build request) | B

### Example response

```
{
  "data":{
    "type": "Vorg-build",
    "id": "10",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "approved",
      "serviceName": "My Compute Service",
      "zoneId": "B"
    }
  }
}
```

### JSON schema

```
{
  "title": "vOrg-build",
  "description": "Progress of a Vorg-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Vorg-build"
          ]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": [
                "approved",
                "running",
                "completed",
                "failed"
              ]
            },
            "serviceName": {
              "description": "The name that was submitted for the compute service as part of the build request.",
              "type": "string"
            },
            "zoneId": {
              "description": "The zone in which the vOrg was requested to be built",
              "type": "string",
              "pattern": "^[A-F0-9]+$"
            }
          },
          "required": [
            "createdAt",
            "createdBy",
            "state",
            "serviceName",
            "zoneId"
          ]
        }
      },
      "required": [

```

## GET /api/vorg-builds/:build_id

Returns information about the progress of a specific vOrg build.

> [!NOTE]
> This API endpoint is available only in Region 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  build_id | The unique ID of the vOrg build | String | Y

#### Example request

```bash
curl -b /tmp/cookies.txt -H 'Accept: application/json' -H 'Content-Type: application/json' https://portal.skyscapecloud.com/api/vorg-builds/10 -X GET
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

404 Not Found --- The vOrg build could not be found or the user does not have access to the vOrg build

#### Response body

Attribute | Type | Value | Example
type | String | Vorg-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- vOrg creation process has been approved</br>- running -- vOrg is in the process of being created<br>- completed -- vOrg has been successfully created</br>- failed -- vOrg creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
serviceName | String | The name of the vOrg (as specified in the build request) | My compute service
zoneId | String | The zone in which the vOrg is located (as specified in the build request) | B

#### Example response

```
{
  "data":{
    "type": "Vorg-build",
    "id": "10",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "approved",
      "serviceName": "My Compute Service",
      "zoneId": "B"
    }
  }
}
```

### JSON schema

```
{
  "title": "vOrg-build",
  "description": "Progress of a Vorg-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Vorg-build"
          ]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": [
                "approved",
                "running",
                "completed",
                "failed"
              ]
            },
            "serviceName": {
              "description": "The name that was submitted for the compute service as part of the build request.",
              "type": "string"
            },
            "zoneId": {
              "description": "The zone in which the vOrg was requested to be built",
              "type": "string",
              "pattern": "^[A-F0-9]+$"
            }
          },
          "required": [
            "createdAt",
            "createdBy",
            "state",
            "serviceName",
            "zoneId"
          ]
        }
      },
      "required": [
        "type",
        "attributes",
        "id"
      ]
    }
  },
  "required": [
    "data"
  ]
}
```

## GET /api/accounts/:account\_id/vorg-builds

Returns information about all self-service vOrg builds for an account.

### API version

v1

### Request

#### Request body

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/vorg-builds
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/vorg-builds") {|req| Req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

Returns an array of vOrg builds

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | Vorg-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- vOrg creation process has been approved</br>- running -- vOrg is in the process of being created</br>- completed -- vOrg has been successfully created</br>- failed -- vOrg creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
serviceName | String | The name of the vOrg (as specified in the build request) | My compute service
zoneId | String | The zone in which the vOrg is located (as specified in the build request) | B

#### Example response

```
{
  "data": [
    {
      "type": "Vorg-build",
      "id": "10",
      "attributes":{
        "createdAt": "2016-07-08T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "approved",
        "serviceName": "My Compute Service",
        "zoneId": "B"
      }
    },
    {
      "type": "Vorg-build",
      "id": "11",
      "attributes":{
        "createdAt": "2016-07-09T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "running",
        "serviceName": "My Compute Service",
        "zoneId": "B"

      }
    }
    ...
  ]
}
```

### JSON schema

```
{
  "title": "GET /api/accounts/:account_id/vorg-builds",
  "description": "The vOrg builds within this account",
  "oneOf": [
    {
      "$ref": "#/definitions/success"
    },
    {
      "$ref": "#/definitions/failure"
    }
  ],
  "definitions": {
    "success": {
      "type": "object",
      "required": [
        "data"
      ],
      "properties": {
        "data": {
          "$ref": "#/definitions/data"
        }
      }
    },
    "failure": {
      "$ref": "#/definitions/error"
    },
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Vorg-build"
            ]
          },
          "id": {
            "type": "string",
            "pattern": "^[0-9]+$"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "createdAt": {
                "description": "When the request for the build was received by the Portal.",
                "type": "string",
                "format": "date-time"
              },
              "createdBy": {
                "description": "The email address of the user to request the build from the Portal.",
                "type": "string",
                "format": "email"
              },
              "state": {
                "type": "string",
                "enum": [
                  "approved",
                  "running",
                  "completed",
                  "failed"
                ]
              },
              "serviceName": {
                "description": "The name that was submitted for the compute service as part of the build request.",
                "type": "string"
              },
              "zoneId": {
                "description": "The zone in which the vOrg was requested to be built",
                "type": "string",
                "pattern": "^[A-F0-9]+$"
              }
            },
            "required": [
              "createdAt",
              "createdBy",
              "state",
              "serviceName",
              "zoneId"
            ]
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ]
      }
    },
    "error": {
      "type": "object",
      "properties": {
        "error": {
          "description": "A short, human-readable summary of the problem.",
          "type": "string"
        },
        "detail": {
          "description": "A human-readable explanation of the problem.",
          "type": "string"
        }
      },
      "required": [
        "error"
      ]
    }
  }
}
```

## GET /api/accounts/:account_id/vorgs/:vorg_id/vdcs

Returns a list of basic information about the virtual data centres (VDCs) in the specified account under the specified vOrg.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y
  vorg_id | The ID of the vOrg in which the VDC resides | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/vorgs/12/vdcs
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have permissions for the vOrg

404 Not Found --- The user does not have access to the account, the account does not exist or the vOrg does not exist

#### Response body

  Attribute | Type | Value | Example
  ----------|------|-------|--------
  id | String | The ID of the VDC | 53-12-3
  type | String | VDC | &nbsp;
  name | String | The name of the VDC | My VDC

#### Example response

```
{
    "data": [
        {
            "id": "53-12-3",
            "type": "VDC",
            "attributes": {
                "name": "My VDC"
            }
        },
        {
            "id": "53-12-5",
            "type": "VDC",
            "attributes": {
                "name": "My Second VDC"
            }
        }
    ]
}
```

### JSON schema

```
{
    "title":"GET /api/accounts/:account_id/vorgs/:vorg_id/vdcs",
    "description":"The VDCs within this vOrg",
    "oneOf": [
        {
            "$ref": "#/definitions/success"
        },
        {
            "$ref": "#/definitions/failure"
        }
    ],
    "definitions": {
        "success": {
            "type": "object",
            "required": [
                "data"
            ],
            "properties": {
                "data": {
                    "$ref": "#/definitions/data"
                }
            }
        },
        "failure": {
            "$ref": "#/definitions/error"
        },
        "data":{
            "type":"array",
            "items":{
                "title":"VDCs",
                "type":"object",
                "properties":{
                    "id":{
                        "type":"string",
                        "pattern":"^urn:vcloud:vdc:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
                    },
                    "type":{
                        "type":"string",
                        "enum":["VDC"]
                    },
                    "attributes":{
                        "type": "object",
                        "properties":{
                            "name": {
                                "type":"string"
                            }
                        },
                        "required":[
                            "name"
                        ]
                    }
                },
                "required":[
                    "id",
                    "type",
                    "attributes"
                ]
            }
        },
        "error": {
            "type": "object",
            "properties": {
                "error": {
                    "description": "A short, human-readable summary of the problem.",
                    "type": "string"
                },
                "detail": {
                    "description": "A human-readable explanation of the problem.",
                    "type": "string"
                }
            },
            "required":[
                "error"
            ]
        }
    }
}
```

## POST /api/accounts/:account_id/vorgs/:vorg_id/vdcs

Creates a VDC in the specified account under the specified compute service (vOrg).

> [!NOTE]
> This API endpoint is available only in Region 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

```
{"data": {"type": "VDC", "attributes": {"vmType": "POWER", "name": "DEMO"}}}
```

#### Parameters

Parameter name | Description | Type | Mandatory (Default)
---------------|-------------|------|--------------------
vmType | The type of VM workloads used in the VDC</br>Valid values:</br>- POWER</br>- ESSENTIAL</br>- PRIORITY | String | Y
name | The name of the VDC<br>The name can be up to 32 characters long and can include any character except + | String | Y

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y
  vorg_id | The ID of the vOrg in which you want to create the VDC | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt https://portal.skyscapecloud.com/api/accounts/53/vorgs/1/vdcs -X POST -d '{"data": {"type": "VDC", "attributes": {"vmType": "POWER", "name": "DEMO"}}}' -H 'Accept: application/json' -H 'Content-Type: application/json'
```

### Response

#### Successful HTTP response

202 Accepted --- Includes a location header (for example Location: /api/vdc-builds/10)

#### Unsuccessful HTTP response

400 Invalid --- The data uploaded does not match the expected schema or there is a validation problem

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user is not an administrator for the vOrg

404 Not Found --- The VDC could not be found, the user does not have access to the account or the account does not exist

#### Response body

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | VDC-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created   | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid valudes:</br>- approved -- VDC creation process has been approved</br>- running -- VDC is in the process of being created</br>- completed -- VDC has been successfully created</br>- failed -- VDC creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
vdcName | String | The name of the VDC (as specified in the build request) | My VDC
vmType | String | The type of VM workloads in the VDC (as specified in the build request)</br>Valid values:</br>- POWER</br>- ESSENTIAL</br>- PRIORITY | POWER
serviceName | String | The name of the vOrg to which the VDC belongs | My Compute Service

#### Example response

```
{
  "data":{
    "type": "VDC-build",
    "id": "10",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "approved"",
      "vdcName": "My VDC",
      "vmType": "POWER",
      "serviceName": "My Compute Sercice"
    }
  }
}
```

### JSON schema

```
{
  "title": "VDC-build",
  "description": "Progress of a VDC-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "VDC-build"
          ]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": [
                "approved",
                "running",
                "completed",
                "failed"
              ]
            },
            "vdcName": {
              "description": "The name that was submitted for the VDC as part of the build request.",
              "type": "string"
            },
            "vmType": {
              "description": "The VM type that was submitted for the VDC as part of the build request.",
              "type": "string",
              "enum": [
                "ESSENTIAL",
                "POWER",
                "PRIORITY"
              ]
            },
            "serviceName": {
              "oneOf": [
                { "type": "string" },
                { "type": "null" }
              ]
            }
          },
          "required": [
            "createdAt",
            "createdBy",
            "state",
            "vdcName",
            "vmType",
            "serviceName"
          ]
        }
      },
      "required": [
        "type",
        "attributes",
        "id"
      ]
    }
  },
  "required": [
    "data"
  ]
}
```

## GET /api/vdc-builds/:build_id

Returns information about the progress of a specific VDC build.

> [!NOTE]
> This API endpoint is available only in Region 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  build_id | The unique ID of the VDC build | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -H 'Accept: application/json' -H 'Content-Type: application/json' https://portal.skyscapecloud.com/api/vdc-builds/10 -X GET
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

404 Not Found --- The VDC build cannot be found or the user does not have access to the VDC build

#### Response body

Attribute | Type | Value | Example
type | String | VDC-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created    | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- VDC creation process has been approved</br>- running -- VDC is in the process of being created</br>- completed -- VDC has been successfully created</br>- failed -- VDC creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
vdcName | String | The name of the VDC (as specified in the build request) | My VDC
vmType | String | The type of VM workloads used in the VDC (as specified in the build request)</br>Valid values:</br>- POWER</br>- ESSENTIAL</br>- PRIORITY  | POWER
serviceName | String | The name of the vOrg to which the VDC belongs | My Compute Service

#### Example response

```
{
  "data":{
    "type": "VDC-build",
    "id": "10",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "completed",
      "vdcName": "My VDC",
      "vmType": "POWER",
      "serviceName": "My Compute Service"
    }
  }
}
```

### JSON schema

```
{
  "title": "VDC-build",
  "description": "Progress of a VDC-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "VDC-build"
          ]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": [
                "approved",
                "running",
                "completed",
                "failed"
              ]
            },
            "vdcName": {
              "description": "The name that was submitted for the VDC as part of the build request.",
              "type": "string"
            },
            "vmType": {
              "description": "The VM type that was submitted for the VDC as part of the build request.",
              "type": "string",
              "enum": [
                "ESSENTIAL",
                "POWER",
                "PRIORITY"
              ]
            },
            "serviceName": {
              "oneOf": [
                { "type": "string" },
                { "type": "null" }
              ]
            }
          },
          "required": [
            "createdAt",
            "createdBy",
            "state",
            "vdcName",
            "vmType",
            "serviceName"
          ]
        }
      },
      "required": [
        "type",
        "attributes",
        "id"
      ]
    }
  },
  "required": [
    "data"
  ]
}
```

## GET /api/accounts/:account_id/vdc-builds

Returns information about all self-service VDC builds for an account.

### API version

v1

### Request

#### Request body

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/vdc-builds
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/vdc-builds") {|req| Req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

Returns an array of VDC builds

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | VDC-build | &nbsp;
id | String | The unique identifier of the build | 10
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- VDC creation process has been approved</br>- running -- VDC is in the process of being created</br>- completed -- VDC has been successfully created</br>- failed -- VDC creation has failed (raise a Service Request to resolve and rerun) | &nbsp;
vdcName | String | The name of the VDC (as specified in the build request) | My VDC
vmType | String | The type of VM workloads used in the VDC (as specified in the build request)</br>Valid values:</br>- POWER</br>- ESSENTIAL</br>- PRIORITY | POWER
serviceName | String | The name of the vOrg to which the VDC belongs | My Compute Service

#### Example response

```
{
  "data": [
    {
      "type": "VDC-build",
      "id": "10",
      "attributes":{
        "createdAt": "2016-07-08T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "completed",
        "vdcName": "My VDC",
        "vmType": "POWER",
        "serviceName": "My Compute Service"
      }
    },
    {
      "type": "VDC-build",
      "id": "11",
      "attributes":{
        "createdAt": "2016-07-09T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "completed",
        "vdcName": "My VDC",
        "vmType": "POWER",
        "serviceName": "My Compute Service"
      }
    }
    ...
  ]
}
```

### JSON schema

```
{
  "title": "GET /api/accounts/:account_id/vdc-builds",
  "description": "The VDC builds within this account",
  "oneOf": [
    {
      "$ref": "#/definitions/success"
    },
    {
      "$ref": "#/definitions/failure"
    }
  ],
  "definitions": {
    "success": {
      "type": "object",
      "required": [
        "data"
      ],
      "properties": {
        "data": {
          "$ref": "#/definitions/data"
        }
      }
    },
    "failure": {
      "$ref": "#/definitions/error"
    },
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "VDC-build"
            ]
          },
          "id": {
            "type": "string",
            "pattern": "^[0-9]+$"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "createdAt": {
                "description": "When the request for the build was received by the Portal.",
                "type": "string",
                "format": "date-time"
              },
              "createdBy": {
                "description": "The email address of the user to request the build from the Portal.",
                "type": "string",
                "format": "email"
              },
              "state": {
                "type": "string",
                "enum": [
                  "approved",
                  "running",
                  "completed",
                  "failed"
                ]
              },
              "vdcName": {
                "description": "The name that was submitted for the VDC as part of the build request.",
                "type": "string"
              },
              "vmType": {
                "description": "The VM type that was submitted for the VDC as part of the build request.",
                "type": "string",
                "enum": [
                  "ESSENTIAL",
                  "POWER",
                  "PRIORITY"
                ]
              },
              "serviceName": {
                "oneOf": [
                  { "type": "string" },
                  { "type": "null" }
                ]
              }
            },
            "required": [
              "createdAt",
              "createdBy",
              "state",
              "vdcName",
              "vmType",
              "serviceName"
            ]
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ]
      }
    },
    "error": {
      "type": "object",
      "properties": {
        "error": {
          "description": "A short, human-readable summary of the problem.",
          "type": "string"
        },
        "detail": {
          "description": "A human-readable explanation of the problem.",
          "type": "string"
        }
      },
      "required": [
        "error"
      ]
    }
  }
}
```

## GET /api/accounts/:account_id/vorgs/:vorg_id/vdcs/:vdc_urn/edge-gateways

Returns basic information about the edge gateways in the specified account under the specified VDC.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y
  vorg_id | The ID of the vOrg in which the edge gateway resides | String | Y
  vdc_urn | The full URN of the VDC in which the edge gateway resides, including the urn:vcloud:vdc: prefix | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/vorgs/12/vdcs/urn:vcloud:vdc:1a7570ea-29d9-4090-9714-75c262a123ad/edge-gateways
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have permissions for the vOrg

404 Not Found --- The user does not have access to the account, the account does not exist or the vOrg does not exist

#### Response body

If the call returns an empty list, check that the specified VDC URN is correct.

  Attribute | Type | Value | Example
  ----------|------|-------|--------
  type | String | EdgeGateway | &nbsp;
  id | String | The ID of the edge gateway | urn:vcloud:gateway:90693edd-c94b-4bf0-9544-d9123a77720c
  name | String | The name of the edge gateway | My Edge - nft00002i2 SL3

#### Example response

```
{
    "data": [
        {
            "type": "EdgeGateway",
            "id": "urn:vcloud:gateway:90693edd-c94b-4bf0-9544-d9123a77720c",
            "attributes": {
                "name": "My Edge - nft00002i2 SL3"
            }
        }
    ]
}
```

### JSON schema

```
{
    "title":"GET /api/accounts/:account_id/vorgs/:vorg_id/vdcs/:vdc_urn/edge-gateways",
    "description":"The edge-gateways within this VDC.",
    "oneOf": [
        {
            "$ref": "#/definitions/success"
        },
        {
            "$ref": "#/definitions/failure"
        }
    ],
    "definitions": {
        "success": {
            "type": "object",
            "required": [
                "data"
            ],
            "properties": {
                "data": {
                    "$ref": "#/definitions/data"
                }
            }
        },
        "failure": {
            "$ref": "#/definitions/error"
        },
        "data":{
            "type":"array",
            "items":{
                "title":"Edge Gateways",
                "type":"object",
                "properties":{
                    "id":{
                        "type":"string",
                        "pattern":"^urn:vcloud:gateway:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
                    },
                    "type":{
                        "type":"string",
                        "enum":["EdgeGateway"]
                    },
                    "attributes":{
                        "type": "object",
                        "properties":{
                            "name": {
                                "type":"string"
                            }
                        },
                        "required":[
                            "name"
                        ]
                    }
                },
                "required":[
                    "id",
                    "type",
                    "attributes"
                ]
            }
        },
        "error": {
            "type": "object",
            "properties": {
                "error": {
                    "description": "A short, human-readable summary of the problem.",
                    "type": "string"
                },
                "detail": {
                    "description": "A human-readable explanation of the problem.",
                    "type": "string"
                }
            },
            "required":[
                "error"
            ]
        }
    }
}
```

## POST /api/accounts/:account_id/vorgs/:vorg_id/vdcs/:vdc_urn/edge-gateways

Creates an edge gateway in the specified account under the specified organisation and VDC.

> [!NOTE]
> This API endpoint is available only in Region 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

```
{"data": {"type": "EdgeGateway", "attributes": {"connectivityType": "Internet"}}}
```

#### Parameters

Parameter name | Description | Type | Mandatory (Default)
---------------|-------------|------|--------------------
Type | EdgeGateway | String | Y
connectivityType | The type of connection</br>Valid values:</br>- Internet (in the Assured security domain)</br>- External (in the Elevated security domain) | String | Y

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y
  vorg_id | The ID of the vOrg in which you want to create the edge gateway | String | Y
  vdc_urn | The full URN of the VDC in which you want to create the edge gateway, including the urn:vcloud:vdc: prefix | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt https://portal.skyscapecloud.com/api/accounts/53/vorgs/1/vdcs/urn:vcloud:vdc:345a5d90-1c8c-4fb2-bf4f-f480de82c594/edge-gateways -X POST -d '{"data": {"type": "EdgeGateway", "attributes": {"connectivityType": "Internet"}}}' -H 'Accept: application/json' -H 'Content-Type: application/json'
```

### Response

#### Successful HTTP response

202 Accepted --- Includes a location header (for example Location: /api/edge-gateway-builds/23)

#### Unsuccessful HTTP response

400 Invalid --- The data uploaded does not match the expected schema or there is a validation problem

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user is not an administrator for the vOrg

404 Not Found --- The VDC could not be found, the user does not have access to the account or the account does not exist

#### Response body

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | EdgeGateway-build | &nbsp;
id | String | The unique identifier of the build | 23
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>-approved -- edge gateway creation process has been approved</br>- running -- edge gateway is in the process of being created</br>- completed -- edge gateway has been successfully created</br>- failed -- edge gateway creation has failed (raise a Service Request to resolve and rerun) | completed

#### Example response

```
{
  "data":{
    "type": "EdgeGateway-build",
    "id": "23",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "approved"
    }
  }
}
```

### JSON schema

```
{
  "title": "EdgeGateway-build",
  "description": "Progress of an EdgeGateway-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": ["EdgeGateway-build"]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": ["approved", "running", "completed", "failed"]
            }
          },
          "required": ["createdAt", "createdBy", "state"]
        }
      },
      "required": ["type", "attributes", "id"]
    },
  },
  "required": ["data"]
}
```

## GET /api/edge-gateway-builds/:build_id

Provides information about the progress of a specific edge gateway build.

> [!NOTE]
> This API endpoint is available only in Region 5 and 6 (for information about regions, see [*Understanding sites, regions and zones*](../other/other-ref-sites-regions-zones.md)).

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  build_id | The unique ID of the edge gateway build | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -H 'Accept: application/json' -H 'Content-Type: application/json' https://portal.skyscapecloud.com/api/edge-gateway-builds/23 -X GET
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

404 Not Found --- The edge gateway build could not be found or the user does not have access to the edge gateway build

#### Response body

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | EdgeGateway-build | &nbsp;
id | String | The unique identifier of the build | 23
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- edge gateway creation process has been approved</br>- running -- edge gateway is in the process of being created</br>- completed -- edge gateway has been successfully created</br>- failed -- edge gateway creation has failed (raise a Service Request to resolve and rerun) | completed

#### Example response

```
{
  "data":{
    "type": "EdgeGateway-build",
    "id": "23",
    "attributes":{
      "createdAt": "2016-07-08T10:42:14+01:00",
      "createdBy": "auser@example.com",
      "state": "completed"
    }
  }
}
```

### JSON schema

```
{
  "title": "EdgeGateway-build",
  "description": "Progress of an EdgeGateway-build",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": ["EdgeGateway-build"]
        },
        "id": {
          "type": "string",
          "pattern": "^[0-9]+$"
        },
        "attributes": {
          "type": "object",
          "properties": {
            "createdAt": {
              "description": "When the request for the build was received by the Portal.",
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "description": "The email address of the user to request the build from the Portal.",
              "type": "string",
              "format": "email"
            },
            "state": {
              "type": "string",
              "enum": ["approved", "running", "completed", "failed"]
            }
          },
          "required": ["createdAt", "createdBy", "state"]
        }
      },
      "required": ["type", "attributes", "id"]
    },
  },
  "required": ["data"]
}
```

## GET /api/accounts/:account_id/edge-gateway-builds

Returns information about all self-service edge gateway builds for an account.

### API version

v1

### Request

#### Request body

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/edge-gateway-builds
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/edge-gateway-builds") {|req| Req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

401 Unauthorized --- The user could not be authenticated

403 Forbidden --- The user does not have access to the account or the account does not exist

#### Response body

Returns an array of edge gateway builds

Attribute | Type | Value | Example
----------|------|-------|--------
type | String | EdgeGateway-build | &nbsp;
id | String | The unique identifier of the build | 23
createdAt | Date | The date and time when the build was created | 2016-07-08T10:42:14+01:00
createdBy | String | The user who created the build | auser\@example.com
state | String | The state of the build</br>Valid values:</br>- approved -- edge gateway creation process has been approved</br>- running -- edge gateway is in the process of being created</br>- completed -- edge gateway has been successfully created</br>- failed -- edge gateway creation has failed (raise a Service Request to resolve and rerun) | completed

#### Example response

```
{
  "data": [
    {
      "type": "EdgeGateway-build",
      "id": "23",
        "attributes":{
        "createdAt": "2016-07-08T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "completed"
      }
    },
    {
      "type": "EdgeGateway-build",
      "id": "24",
        "attributes":{
        "createdAt": "2016-07-09T10:42:14+01:00",
        "createdBy": "auser@example.com",
        "state": "completed"
      }
    }
    ...
  ]
}
```

### JSON schema

```
{
  "title": "GET /api/accounts/:account_id/edge-gateway-builds",
  "description": "The Edge gateway builds within this account",
  "oneOf": [
    {
      "$ref": "#/definitions/success"
    },
    {
      "$ref": "#/definitions/failure"
    }
  ],
  "definitions": {
    "success": {
      "type": "object",
      "required": [
        "data"
      ],
      "properties": {
        "data": {
          "$ref": "#/definitions/data"
        }
      }
    },
    "failure": {
      "$ref": "#/definitions/error"
    },
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "EdgeGateway-build"
            ]
          },
          "id": {
            "type": "string",
            "pattern": "^[0-9]+$"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "createdAt": {
                "description": "When the request for the build was received by the Portal.",
                "type": "string",
                "format": "date-time"
              },
              "createdBy": {
                "description": "The email address of the user to request the build from the Portal.",
                "type": "string",
                "format": "email"
              },
              "state": {
                "type": "string",
                "enum": [
                  "approved",
                  "running",
                  "completed",
                  "failed"
                ]
              }
            },
            "required": [
              "createdAt",
              "createdBy",
              "state"
            ]
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ]
      }
    },
    "error": {
      "type": "object",
      "properties": {
        "error": {
          "description": "A short, human-readable summary of the problem.",
          "type": "string"
        },
        "detail": {
          "description": "A human-readable explanation of the problem.",
          "type": "string"
        }
      },
      "required": [
        "error"
      ]
    }
  }
}
```

## GET /api/accounts/:account_id/platform_visibility/vmotion_events

Returns a list of VMotion events that occurred in the specified account over the last 12 hours.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  account_id | The ID of your account | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H 'Accept: application/json' https://portal.skyscapecloud.com/api/accounts/1/platform_visibility/vmotion_events
```

#### Example request (Ruby)

```
resp = conn.get("/api/accounts/#{account_id}/platform_visibility/vmotion_events") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful

#### Unsuccessful HTTP response

403 Forbidden --- The user does not have access to the account or any compute services

#### Response body

Returns an array of VMotion events for the last 12 hours.

> [!NOTE]
> The maximum number of characters displayed for the VM and vApp names is 32 characters. If your VM or vApp names are longer than this, only the first 32 characters will be shown.

#### Example response

```
{
    "event_created_time": "2016-10-04T00:08:01+01:00",
    "service_id": 12,
    "user_name": "System",
    "virtual_machine": "abc0001a (abcdedfg-abcd-abcd-abcd-abcdefghijkl)",
    "vdc_name": "MyVDCName",
    "vapp_name": "My VAPP Name"
}
```

### JSON schema

```
{
    "description": "vMotion events for the last 12 hours within your account",
    "type": "object",
    "properties": {
      "event_created_time": {
        "type": "string"
      },
      "service_id": {
        "type": "integer",
      },
      "user_name": {
        "enum": [
          "System",
          "Administrator",
          "UKCloud User"
        ]
        "type": "string"
      },
      "virtual_machine": {
        "type": "string",
        "maxLength": 32
      },
      "vdc_name": {
        "type": "string",
      },
      "vapp_name": {
        "type": "string",
        "maxLength": 32
      }
    }
```

## GET /api/billing/cloud-storage-report

Returns billing information for Cloud Storage.

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  date | The date for which you require the monthly report | String | Y
  org_id | The ID of the compute service for which you want the billing report | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H "Accept: application/json" -k https://portal.skyscapecloud.com/api/billing/cloud-storage-report?date=2018-01-01&org_id=xx-xx-xx-xxxxxxx
```

#### Example request (Ruby)

```
resp = conn.get("/api/billing/cloud-storage-report?date=#{date}&org_id=#{org_id}") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful</br>Content-Type (text/csv)

#### Unsuccessful HTTP response

400 Bad Request

401 Unauthorized --- The user could not be authenticated

#### Response body

Returns a CSV report for the whole month specified including the date provided.

  CSV header | Description
  -----------|------------
  Org Id | Customer identifier
  Company Id | Company identifier
  Account Id | Account identifier
  Service Id | Service identifier
  Bucket Name | Name given to the storage bucket
  Service Level | Grade of service charged
  Consumption (GB) | Average storage used over the month in gigabytes
  Cost | Amount that would be charged if this were for a whole month (in pounds)

## GET /api/billing/billing-csv

Returns a CSV containing billing data for the period given.

For more information about this CSV, see [*Understanding your invoice evidence file*](../other/other-ref-invoice-evidence-file.md) and the [*Invoice and billing FAQs*](../other/other-faq-billing.md).

### API version

v1

### Request

#### Request body

None

#### Parameters

None

#### URI parameters

  Parameter name | Description | Type | Mandatory (Default)
  ---------------|-------------|------|--------------------
  period | The date for which you require the monthly report in the format YYYY-MM | String | Y
  org_id | The ID of the compute service for which you want the billing report | String | Y

#### Example request (Curl)

```bash
curl -b /tmp/cookies.txt -X GET -H "Accept: application/json" -k https://portal.skyscapecloud.com/api/billing/billing-csv?period=2018-01&org_id=xx-xx-xx-xxxxxxx
```

#### Example request (Ruby)

```
resp = conn.get("/api/billing/billing-csv?period=#{period}&org_id=#{org_id}") { |req| req.headers['cookie'] = cookies }
```

### Response

#### Successful HTTP response

200 OK --- The request was successful</br>Content-Type (text/csv)

#### Unsuccessful HTTP response

400 Bad Request

401 Unauthorized --- The user could not be authenticated

#### Response body

Returns a CSV report for the period specified.


  CSV Header                        | Description
  ----------------------------------|------------
  EventDate                         | Date of this event
  ProjectID                         | ID of the project this VM is assigned to
  vAPP                              | The vApp that this VM is running in
  vDC                               | The vDC that this VM is running in
  ResourceName                      | Friendly name of this resource
  ResourceId                        | Unique URN for this VM
  OSID                              | The OS this VM is running
  Service                           | Service Type of this VM
  Metadata                          | JSONB object containing service metadata
  StartTime                         | Start time that this row is valid from
  EndTime                           | End time that this row is valid to
  PowerState                        | VM Power status
  UsageMinsWithinPeriod             | How many minutes within this period the VM was in use for
  UsageHoursWithinPeriod            | How many hours within this period the VM was in use for
  ComputeMachineType                | Size of the VM
  PowerType                         | Power type of the VM
  SecurityDomain                    | Security domain this VM is running in
  Compute vCPU                      | Configured vCPU count
  ComputeMemory                     | Configured memory in MB
  ComputePricePerHour               | Hourly price of the compute section of this VM
  ComputeTotalPrice                 | Price of the compute section of this VM
  GPUType                           | Configured GPU type
  GPUCount                          | Configured GPU count
  GPUPricePerHour                   | Hourly price of the GPU section of this VM
  GPUTotalPrice                     | Price of the GPU section of this VM
  Tier1StorageUsed                  | Amount of Tier 1 storage used in GB
  Tier1SnapshotStorageUsed          | Amount of Tier 1 snapshot storage used in GB
  Tier1StorageIncluded              | Amount of Tier 1 storage included with this VM in GB
  Tier1StorageChargeable            | Amount of Tier 1 storage outside the included amount in GB
  Tier1StoragePricePerHour          | Hourly price of the Tier 1 storage for this VM
  Tier1StoragePrice                 | Price of the Tier 1 storage for this VM
  Tier2StorageUsed                  | Amount of Tier 2 storage used in GB
  Tier2SnapshotStorageUsed          | Amount of Tier 2 snapshot storage used in GB
  Tier2StorageIncluded              | Amount of Tier 2 storage included with this VM in GB
  Tier2StorageChargeable            | Amount of Tier 2 storage outside the included amount in GB
  Tier2StoragePricePerHour          | Hourly price of the Tier 2 storage for this VM
  Tier2StoragePrice                 | Price of the Tier 2 storage for this VM
  Geo-resilientStorageUsed          | Amount of Geo-Resilient storage used in GB
  Geo-resilientSnapshotStorageUsed  | Amount of Geo-Resilient snapshot storage used in GB
  Geo-resilientStorageIncluded      | Amount of Geo-Resilient storage included with this VM in GB
  Geo-resilientStorageChargeable    | Amount of Geo-Resilient storage outside the included amount in GB
  Geo-resilientStoragePricePerHour  | Hourly price of the Geo-Resilient storage for this VM
  Geo-resilientStoragePrice         | Price of the Geo-Resilient storage for this VM
  Protection Type                   | Protection Type of this VM
  ComputeProtectionPerHour          | Hourly price of Compute protection
  ComputeProtectionTotalPrice       | Price of Compute protection
  Tier1ProtectionPricePerHour       | Hourly price of Tier 1 storage protection
  Tier2ProtectionPricePerHour       | Hourly price of Tier 2 storage protection
  Geo-resilientProtectionPerHour    | Hourly price of Geo-Resilient storage protection
  Tier1ProtectionTotalPrice         | Price of Tier 1 storage protection
  Tier2ProtectionTotalPrice         | Price of Tier 2 storage protection
  Geo-resilientProtectionTotalPrice | Price of Geo-Resilient storage protection
  ProtectionTotalPrice              | Total price of all protection options on this VM
  LicencePricePerHour               | Hourly price of any licenses attached to this VM
  LicenceTotalPrice                 | Price of any licenses attached to this VM
  TotalPrice                        | Total price of this VM

## Further information

If you want to discuss any aspect of the service or settings specific to your domain, log a Service Request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
