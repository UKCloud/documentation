---
title: How to back up files and folders on Azure Stack VMs using PowerShell | UKCloud Ltd
description: Provides details on how to install and configure the Microsoft Azure Recovery Services (MARS) agent to backup files and folders on Azure Stack
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed:

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Back up files and folders - PowerShell
toc_fullpath: Users/How To/azs-how-configure-mars-backups-powershell.md
toc_mdlink: azs-how-configure-mars-backups-powershell.md
---

# How to automatically back up files and folders on Azure Stack VMs using PowerShell

## Overview

This article explains how to setup the Microsoft Azure Recovery Services (MARS) agent to backup files and folders from Azure Stack VMs to Recovery Services vaults.

Recovery Services vaults store all backups and recovery points you create over time, and contains the backup policy applied to backed up machines.

## Official documentation

[MARS agent support matrix](https://docs.microsoft.com/en-us/azure/backup/backup-support-matrix-mars-agent)

[Back up windows machines using MARS](https://docs.microsoft.com/en-us/azure/backup/backup-configure-vault)

[MARS agent backup process](https://docs.microsoft.com/en-us/azure/backup/backup-architecture#architecture-direct-backup-of-on-premises-windows-server-machines-or-azure-vm-files-or-folders)

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in both public Azure and Azure Stack portals.

> [!IMPORTANT]
> The MARS agent is **only** supported on Windows VMs. Linux is **not** supported.

## Setup the MARS agent using PowerShell

The script used in this article can be found [here](https://github.com/UKCloud/AzureStack/blob/master/Users/Extensions/Windows/AzureBackupConfig.ps1). It provides docstrings on additional parameters which are not used in this article.

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ClientID    | The application ID of a service principal with contributor permissions on Azure.                 | <form oninput="result.value=clientid.value" id="clientid" style="display: inline;"><input type="text" id="clientid" name="clientid" style="display: inline;" placeholder="00000000-0000-0000-0000-000000000000"/></form> |
| \$ClientSecret    | The password of the service principal specified in the ClientId parameter.                 | <form oninput="result.value=clientsecret.value" id="clientsecret" style="display: inline;"><input type="text" id="clientsecret" name="clientsecret" style="display: inline;" placeholder="ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jk]="/></form> |
| \$TenantID    | The Tenant/Directory ID of your AAD domain.                 | <form oninput="result.value=tenantid.value" id="tenantid" style="display: inline;"><input type="text" id="tenantid" name="tenantid" style="display: inline;" placeholder="31537af4-6d77-4bb9-a681-d2394888ea26"/></form> |
| \$VaultName    | The name of the recovery services vault to be created on public Azure.                 | <form oninput="result.value=vaultname.value" id="vaultname" style="display: inline;"><input type="text" id="vaultname" name="vaultname" style="display: inline;" placeholder="AzureStackVault"/></form> |
| \$EncryptionKey    | The encryption key to encrypt the backups with.                 | <form oninput="result.value=encryptionkey.value" id="encryptionkey" style="display: inline;"><input type="text" id="encryptionkey" name="encryptionkey" style="display: inline;" placeholder="ExampleEncryptionKey"/></form> |
| \$BackupDays    | A comma separated list of the days to backup on.                 | <form oninput="result.value=backupdays.value" id="backupdays" style="display: inline;"><input type="text" id="backupdays" name="backupdays" style="display: inline;" placeholder="Wednesday, Sunday"/></form> |
| \$BackupTimes    | A comma separated list of the times to backup at on the specified backup days.                 | <form oninput="result.value=backuptimes.value" id="backuptimes" style="display: inline;"><input type="text" id="backuptimes" name="backuptimes" style="display: inline;" placeholder="16:00, 20:00"/></form> |
| \$FoldersToBackup    | A comma separated list of folders to backup. By default it will back up all drives.             | <form oninput="result.value=folderstobackup.value" id="folderstobackup" style="display: inline;"><input type="text" id="folderstobackup" name="folderstobackup" style="display: inline;" placeholder="C:\Users, C:\Important"/></form> |

1. Create a [public Azure and Azure Stack service principal name (SPN)](azs-how-create-spn-powershell.md).

2. From an elevated (administrator) PowerShell console, run the following script to download the required module and execute the backup process:

    <pre><code class="language-PowerShell"># Declare variables
    $ModulePath = "C:\Users\$env:USERNAME\Documents\WindowsPowerShell\Modules\"
    $ModuleName = "AzureBackupConfig.ps1"

    $ClientID = "<output form="clientid" name="result" style="display: inline;">00000000-0000-0000-0000-000000000000</output>"
    $ClientSecret = "<output form="clientsecret" name="result" style="display: inline;">ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jk|]=</output>"
    $TenantID = "<output form="tenantid" name="result" style="display: inline;">31537af4-6d77-4bb9-a681-d2394888ea26</output>"
    $VaultName = "<output form="vaultname" name="result" style="display: inline;">AzureStackVault</output>"
    $EncryptionKey = "<output form="encryptionkey" name="result" style="display: inline;">ExampleEncryptionKey</output>"
    $BackupDays = "<output form="backupdays" name="result" style="display: inline;">Wednesday", "Sunday</output>"
    $BackupTimes = "<output form="backuptimes" name="result" style="display: inline;">16:00", "20:00</output>"
    $FoldersToBackup = "<output form="folderstobackup" name="result" style="display: inline;">C:\Users", "C:\Important</output>"

    # Download the AzureBackupConfig script
    Write-Output -InputObject "Downloading AzureBackupConfig.ps1 script"
    $OutPath = Join-Path -Path $ModulePath -ChildPath $ModuleName
    $WebClient = New-Object System.Net.WebClient
    $WebClient.DownloadFile("https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/AzureBackupConfig.ps1", $OutPath)

    # Run the AzureBackupConfig script
    Write-Output -InputObject "Running AzureBackupConfig with provided parameters"
    . "$ModulePath\$ModuleName" -ClientID $ClientID -ClientSecret $ClientSecret -TenantID $TenantID -VaultName $VaultName -EncryptionKey $EncryptionKey -BackupDays $BackupDays -BackupTimes $BackupTimes -FoldersToBackup $FoldersToBackup -BackupNow
    </code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).