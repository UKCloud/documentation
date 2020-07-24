---
title: Retrieving snapshot summaries for multiple accounts using the Portal API
description: Provides an example script to show how to use the Portal API to retrieve information about the status of your Snapshot Protection backups across multiple accounts
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 24/07/2020
toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Retrieving snapshot summaries for multiple accounts
toc_fullpath: Reference/vmw-ref-snapshot-summary-api.md
toc_mdlink: vmw-ref-snapshot-summary-api.md
---

# Retrieving snapshot summaries for multiple accounts using the Portal API

## Overview

In the UKCloud Portal, you can view backup summary reports for all the compute services (vOrgs) in an account (see the [*Monitoring the status of Snapshot Protection*](vmw-how-manage-snapshot-protection.md#monitoring-the-status-of-snapshot-protection) section of *How to manage Snapshot Protection for your VMs*).

If you want to retrieve snapshot information from multiple accounts, rather than navigating to each account and viewing separate reports, you can use the Portal API to retrieve and aggregate the information and pipe it into a single list or export it into a file.

This article provides an example script to demonstrate how you can use the Portal API to retrieve a snapshot summary for all your compute services across multiple accounts.

## About the Portal API endpoints

The `compute_services` API endpoint retrieves information about each compute service in an account. The information includes backup details for each VM:

```none
"inBackup": true,
"lastBackupStatus": "Successful",
"lastBackup": "Completed on the night of: 24/04/2020",
"retentionLength":28,
"backups":[
  {
    "status":"Completed","backupSlot":"night of: 24/04/2020",
    "backupStart":"24/04/2020 01:32",
    "backupEnd":"24/04/2020 01:35",
    "snapshotRemovalStart":"24/04/2020 01:34",
    "snapshotRemovalEnd":"24/04/2020 01:35"
```

For more information, see the [*GET /api/accounts*](../portal/ptl-ref-portal-api.md#get-apiaccounts) section of the *UKCloud Portal API Reference Guide*.

The `accounts` endpoint returns the account IDs of each account associated with the currently authenticated user (see the [*GET /api/accounts/:account_id/compute_services*](../portal/ptl-ref-portal-api.md#get-apiaccountsaccount_idcompute_services) section of the *UKCloud Portal API Reference Guide*). You can then use these IDs with the `compute_services` endpoint to loop through each account, retrieving all the backup information in a single operation.

## About the script

After authenticating with the API, the example script pipes in objects retrieved using the `accounts` endpoint and uses the ID field to loop through all accounts associated with the authenticated user and retrieve the compute services for them, providing information on organisations, VDCs, vApps and VMs. The script generates a snapshot summary report from selected fields and this report can be listed in the pipeline or exported to a `.csv` file.

## The script

> [!NOTE]
> Edit the script to provide your Portal user name and password and to select your preferred output method.

```none
Function Get-UKCComputeService{

Param (
    [Parameter(ValueFromPipeline)]$Accounts
)
    Process {
        Foreach ($Account in $Accounts){
            $ComputeEP = "https://portal.skyscapecloud.com/api/accounts/" + $Account.id + "/compute_services"
            Invoke-RestMethod -Method GET -Uri $ComputeEP -WebSession $CoreSession
        }
    }
}

##################################################################################################################################

### Initial authentication - token will expire after 15 minutes - fill in your portal email and password and they will be passed into the body of the request
$PortalEmail = "YourPortalUsername"
$PortalPassword = "YourPortalPassword"
Invoke-WebRequest -Uri https://portal.skyscapecloud.com/api/authenticate -Method POST -Body @{email=$PortalEmail;password=$PortalPassword} -SessionVariable CoreSession

### Retrieve the accounts that your Portal user has access to
$Accounts = Invoke-RestMethod -Method GET -Uri "https://portal.skyscapecloud.com/api/accounts" -WebSession $CoreSession

### Retrieve the compute services associated with those accounts
$ComputeServices = $Accounts | Get-UKCComputeService

### Loop through and drill down to build a backup report for each VM
$Report = Foreach ($ComputeService in $ComputeServices){
    Foreach ($vOrg in $ComputeService.vOrgs){
        Foreach ($VDC in $vOrg.VDCs){
            Foreach ($vApp in $VDC.vApps){
                Foreach ($VM in $VApp.VMs){
                    [PSCustomObject]@{
                        Organisation = $vOrg.serviceId
                        VDC = $VDC.name
                        vApp = $vApp.name
                        VM = $VM.name
                        "Last Backup Status" = $VM.lastBackupStatus
                        "In Backup" = $VM.inBackup
                        "Last Backup Date" = $VM.LastBackup
                    }
                }
            }
        }
    }
}

### Output report to pipeline
$Report | Out-Gridview

(Or to export as a .csv as follows):

$Report | Export-Csv -Path "Drive:\path\filename - $(Get-Date -Format 'yyyy.MM.dd').csv" -NoTypeInformation
```

## Example

```none
$Accounts = Invoke-RestMethod -Method GET -Uri "https://portal.skyscapecloud.com/api/accounts" -WebSession $CoreSession
$Accounts | Get-UKCComputeService
#>
Param (
    [Parameter(ValueFromPipeline)]$Accounts
)
    Process {
        Foreach ($Account in $Accounts){
            $ComputeEP = "https://portal.skyscapecloud.com/api/accounts/" + $Account.id + "/compute_services"
            Invoke-RestMethod -Method GET -Uri $ComputeEP -WebSession $CoreSession
        }
    }
}
```

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
