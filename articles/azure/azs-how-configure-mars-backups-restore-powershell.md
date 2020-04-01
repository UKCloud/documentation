---
title: How to backup and restore files and folders on Azure Stack Hub VMs using PowerShell | UKCloud Ltd
description: Provides details on how to install and configure the Microsoft Azure Recovery Services (MARS) agent to backup and restore files and folders on Azure Stack Hub
services: azure-stack
author: Daniel Brennand
reviewer:
lastreviewed: 01/04/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Backup and restore files and folders - PowerShell
toc_fullpath: Users/How To/azs-how-configure-mars-backups-restore-powershell.md
toc_mdlink: azs-how-configure-mars-backups-restore-powershell.md
---

# How to automatically backup and restore files and folders on Azure Stack Hub VMs using PowerShell

## Overview

This article explains how to set up the Microsoft Azure Recovery Services (MARS) agent to backup and restore files and folders from Azure Stack Hub VMs to Recovery Services vaults.

Recovery Services vaults store all backups and recovery points you create over time, and contains the backup policy applied to backed up machines.

## Official documentation

[MARS agent support matrix](https://docs.microsoft.com/en-us/azure/backup/backup-support-matrix-mars-agent)

[Backup Windows machines using MARS](https://docs.microsoft.com/en-us/azure/backup/backup-configure-vault)

[MARS agent backup process](https://docs.microsoft.com/en-us/azure/backup/backup-architecture#architecture-direct-backup-of-on-premises-windows-server-machines-or-azure-vm-files-or-folders)

## Prerequisites

To complete the steps in this article, you must have appropriate access to a subscription in both the public Azure and Azure Stack Hub portals.

> [!IMPORTANT]
> The MARS agent is **only** supported on Windows VMs. Linux VMs are **not** supported.

# Backup 

## Setup the MARS agent using PowerShell

The script used in this article can be found [here](https://github.com/UKCloud/AzureStack/blob/master/Users/Extensions/Windows/AzureBackupConfig.ps1). It provides docstrings on additional parameters which are not used in this article.

### Declare variables

Enter details below to provide values for the variables in the scripts in this article:

| Variable name   | Variable description                                               | Input            |
|-----------------|--------------------------------------------------------------------|------------------|
| \$ArmEndpoint    | The Azure Resource Manager endpoint for Azure Stack Hub.                 | <form oninput="result.value=armendpoint.value" id="armendpoint" style="display: inline;"><input type="text" id="armendpoint" name="armendpoint" style="display: inline;" placeholder="https://management.frn00006.azure.ukcloud.com"/></form> |
| \$RGName        | Name of the resource group which the VM resides in.                           | <form oninput="result.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| \$VMName        | Name of the virtual machine                          | <form oninput="result.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| \$CustomScriptFileName        | The name of the custom script file.                         | <form oninput="result.value=customscriptfilename.value" id="customscriptfilename" style="display: inline;"><input type="text" id="customscriptfilename" name="customscriptfilename" style="display: inline;" placeholder="AzureBackupConfig.ps1"/></form> |
| \$FileUri        | URL to the custom script.                          | <form oninput="result.value=fileuri.value;result2.value=fileuri.value" id="fileuri" style="display: inline;"><input type="text" id="fileuri" name="fileuri" style="display: inline;" placeholder="https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/AzureBackupConfig.ps1"/></form> |
| \$ScriptArguments        | The command to execute.                          | <form oninput="result.value=scriptargs.value;result2.value=scriptargs.value" id="scriptargs" style="display: inline;"><input type="text" id="scriptargs" name="scriptargs" style="display: inline;" placeholder="-ClientID $ClientID -ClientSecret $ClientSecret -TenantID $TenantID -VaultName $VaultName -EncryptionKey $EncryptionKey -AzureLocation $AzureLocation -BackupDays $BackupDays -BackupTimes $BackupTimes -FoldersToBackup $FoldersToBackup -BackupNow"/></form> |
| \$ClientID    | The application ID of a service principal with contributor permissions on Azure.                 | <form oninput="result.value=clientid.value;result2.value=clientid.value" id="clientid" style="display: inline;"><input type="text" id="clientid" name="clientid" style="display: inline;" placeholder="00000000-0000-0000-0000-000000000000"/></form> |
| \$ClientSecret    | The password of the service principal specified in the ClientId parameter.                 | <form oninput="result.value=clientsecret.value;result2.value=clientsecret.value" id="clientsecret" style="display: inline;"><input type="text" id="clientsecret" name="clientsecret" style="display: inline;" placeholder="ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jk]="/></form> |
| \$TenantID    | The Tenant/Directory ID of your AAD domain.                 | <form oninput="result.value=tenantid.value;result2.value=tenantid.value" id="tenantid" style="display: inline;"><input type="text" id="tenantid" name="tenantid" style="display: inline;" placeholder="contoso.onmicrosoft.com"/></form> |
| \$VaultName    | The name of the recovery services vault to be created on public Azure.                 | <form oninput="result.value=vaultname.value;result2.value=vaultname.value" id="vaultname" style="display: inline;"><input type="text" id="vaultname" name="vaultname" style="display: inline;" placeholder="AzureStackVault"/></form> |
| \$EncryptionKey    | The encryption key to encrypt the backups with.                 | <form oninput="result.value=encryptionkey.value;result2.value=encryptionkey.value" id="encryptionkey" style="display: inline;"><input type="text" id="encryptionkey" name="encryptionkey" style="display: inline;" placeholder="ExampleEncryptionKey"/></form> |
| \$AzureLocation    | The location in public Azure to deploy the Recovery Services vault.                 | <form oninput="result.value=azurelocation.value;result2.value=azurelocation.value" id="azurelocation" style="display: inline;"><input type="text" id="azurelocation" name="azurelocation" style="display: inline;" placeholder="ukwest"/></form> |
| \$BackupDays    | A comma separated list of the days to backup on.                 | <form oninput="result.value=backupdays.value;result2.value=backupdays.value" id="backupdays" style="display: inline;"><input type="text" id="backupdays" name="backupdays" style="display: inline;" placeholder="Wednesday, Sunday"/></form> |
| \$BackupTimes    | A comma separated list of the times to backup at on the specified backup days.                 | <form oninput="result.value=backuptimes.value;result2.value=backuptimes.value" id="backuptimes" style="display: inline;"><input type="text" id="backuptimes" name="backuptimes" style="display: inline;" placeholder="16:00, 20:00"/></form> |
| \$FoldersToBackup    | A comma separated list of folders to backup. By default it will backup all drives.           | <form oninput="result.value=folderstobackup.value;result2.value=folderstobackup.value" id="folderstobackup" style="display: inline;"><input type="text" id="folderstobackup" name="folderstobackup" style="display: inline;" placeholder="C:\Users, C:\Important\*.txt"/></form> |

1. Create a [public Azure and Azure Stack Hub service principal name (SPN)](azs-how-create-spn-powershell.md).

2. From an elevated (administrator) PowerShell console, run either the custom script extension or PowerShell script to download the required module and execute the backup process:

## [Custom script extension](#tab/tabid-1)

<pre><code class="language-PowerShell"># Initialise environment and variables

# Declare endpoint
$ArmEndpoint = "<output form="armendpoint" name="result" style="display: inline;">https://management.frn00006.azure.ukcloud.com</output>"

# Add environment
Add-AzureRmEnvironment -Name "AzureStackUser" -ArmEndpoint $ArmEndpoint

# Login
Connect-AzureRmAccount -EnvironmentName "AzureStackUser"

# Get location of Azure Stack Hub
$Location = (Get-AzureRmLocation).Location

# Input variables
$ClientID = "<output form="clientid" name="result" style="display: inline;">00000000-0000-0000-0000-000000000000</output>"
$ClientSecret = "<output form="clientsecret" name="result" style="display: inline;">ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jk]=</output>"
$TenantID = "<output form="tenantid" name="result" style="display: inline;">31537af4-6d77-4bb9-a681-d2394888ea26</output>"
$VaultName = "<output form="vaultname" name="result" style="display: inline;">AzureStackVault</output>"
$EncryptionKey = "<output form="encryptionkey" name="result" style="display: inline;">ExampleEncryptionKey</output>"
$AzureLocation = "<output form="azurelocation" name="result" style="display: inline;">ukwest</output>"
$BackupDays = '"<output form="backupdays" name="result" style="display: inline;">Wednesday, Sunday</output>"'
$BackupTimes = '"<output form="backuptimes" name="result" style="display: inline;">16:00, 20:00</output>"'
$FoldersToBackup = '"<output form="folderstobackup" name="result" style="display: inline;">C:\Users, C:\Important\*.txt</output>"'
$RGName = "<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>"
$VMName = "<output form="vmname" name="result" style="display: inline;">MyVM</output>"
$CustomScriptFileName = "<output form="customscriptfilename" name="result" style="display: inline;">AzureBackupConfig.ps1</output>"
$FileUri = "<output form="fileuri" name="result" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/AzureBackupConfig.ps1</output>"
$ScriptArguments = "<output form="scriptargs" name="result" style="display: inline;">-ClientID $ClientID -ClientSecret $ClientSecret -TenantID $TenantID -VaultName $VaultName -EncryptionKey $EncryptionKey -AzureLocation $AzureLocation -BackupDays $BackupDays -BackupTimes $BackupTimes -FoldersToBackup $FoldersToBackup -BackupNow</output>"
$CommandToExecute = "$CustomScriptFileName $ScriptArguments"

# Add custom script extension to existing Windows VM
Write-Output -InputObject "Adding custom script extension to VM: $VMName"
Set-AzureRmVMCustomScriptExtension -FileUri $FileUri -VMName $VMName -ResourceGroupName $RGName -Name $CustomScriptFileName -Location $Location -Run $CommandToExecute -SecureExecution
</code></pre>

## [PowerShell script](#tab/tabid-2)

<pre><code class="language-PowerShell"># Declare variables
$ScriptPath = "C:\Users\$env:USERNAME\Downloads"
$ScriptName = "AzureBackupConfig.ps1"

$ClientID = "<output form="clientid" name="result2" style="display: inline;">00000000-0000-0000-0000-000000000000</output>"
$ClientSecret = "<output form="clientsecret" name="result2" style="display: inline;">ftE2u]iVLs_J4+i-:q^Ltf4!&{!w3-%=3%4+}F2jk]=</output>"
$TenantID = "<output form="tenantid" name="result2" style="display: inline;">31537af4-6d77-4bb9-a681-d2394888ea26</output>"
$VaultName = "<output form="vaultname" name="result2" style="display: inline;">AzureStackVault</output>"
$EncryptionKey = "<output form="encryptionkey" name="result2" style="display: inline;">ExampleEncryptionKey</output>"
$AzureLocation = "<output form="azurelocation" name="result2" style="display: inline;">ukwest</output>"
$BackupDays = '"<output form="backupdays" name="result2" style="display: inline;">Wednesday, Sunday</output>"'
$BackupTimes = '"<output form="backuptimes" name="result2" style="display: inline;">16:00, 20:00</output>"'
$FoldersToBackup = '"<output form="folderstobackup" name="result2" style="display: inline;">C:\Users, C:\Important\*.txt</output>"'
$FileUri = "<output form="fileuri" name="result2" style="display: inline;">https://raw.githubusercontent.com/UKCloud/AzureStack/master/Users/Extensions/Windows/AzureBackupConfig.ps1</output>"
$ScriptArguments = "<output form="scriptargs" name="result2" style="display: inline;">-ClientID $ClientID -ClientSecret $ClientSecret -TenantID $TenantID -VaultName $VaultName -EncryptionKey $EncryptionKey -AzureLocation $AzureLocation -BackupDays $BackupDays -BackupTimes $BackupTimes -FoldersToBackup $FoldersToBackup -BackupNow</output>"

# Download the AzureBackupConfig.ps1 script
Write-Output -InputObject "Downloading AzureBackupConfig.ps1 script..."
$OutPath = Join-Path -Path $ScriptPath -ChildPath $ScriptName
Invoke-WebRequest -Uri $FileUri -OutFile $OutPath

# Run the AzureBackupConfig.ps1 script
Write-Output -InputObject "Running AzureBackupConfig.ps1 with provided parameters"
powershell -Command "$ScriptPath\$ScriptName $ScriptArguments"
</code></pre>

***

# Restore

## Restore files and folders using the MARS agent GUI

1. On your desktop, click the **Microsoft Azure Backup** shortcut.

    ![Microsoft Azure Backup icon](images/azs-msft-azure-backup-icon.png)

2. In the new window, in the right menu under *Actions*, click **Recover Data**.

    ![Microsoft Azure Recovery Services Agent recover data](images/azs-msft-azure-backup-recover-data.png)

3. In the new *Recover Data Wizard* window, select **This server** and click **Next >**.

    ![Microsoft Azure Recovery Services Agent recover data wizard getting started](images/azs-msft-azure-backup-recover-data-wizard-getting-started.png)

4. In the *Recover Data Wizard* window, select **Individual files and folders** and click **Next >**.

    ![Microsoft Azure Recovery Services Agent recover data wizard select recovery mode](images/azs-msft-azure-backup-recover-data-wizard-select-recovery-mode.png)

5. In the *Recover Data Wizard* window, select the:

    - **Volume** to restore files and folders from using the dropdown menu

    - **Date** of the backup to restore from

    - **Time** of the backup to restore from

        ![Microsoft Azure Recovery Services Agent recover data wizard select volume and date](images/azs-msft-azure-backup-recover-data-wizard-select-volume-date.png)

6. Click **Mount**.

    - The Microsoft Azure Recovery Services Agent will begin mounting the volume from the specific backup date and time.

7. Click **Browse** to view the contents of the mounted backup volume.

    ![Microsoft Azure Recovery Services Agent recover data wizard browse](images/azs-msft-azure-backup-recover-data-wizard-browse.png)

    - A file explorer window will open showing your backed up files and folders.

        ![Microsoft Azure Recovery Services Agent mounted backup volume](images/azs-msft-azure-backup-recover-mounted-backup-volume.png)

        ![Microsoft Azure Recovery Services Agent mounted backup volume files](images/azs-msft-azure-backup-recover-mounted-backup-volume-files.png)

        > [!TIP]
        > You can drag and drop files and folders to restore them to a desired location on the VM.
        >
        > ![Microsoft Azure Recovery Services Agent mounted backup volume drag and drop](images/azs-msft-azure-backup-recover-mounted-backup-volume-drag-drop.png)

8. When finished, in the *Recover Data Wizard* window, click **Unmount** to detach the backup volume from the VM.

    ![Microsoft Azure Recovery Services Agent recover data wizard unmount](images/azs-msft-azure-backup-recover-data-wizard-unmount.png)

9. In the *Confirm Recovery Volume Unmount* window, click **Yes**.

    ![Microsoft Azure Recovery Services Agent recover confirm recovery volume unmount](images/azs-msft-azure-backup-recover-confirm-recovery-volume-unmount.png)

10. The recovery volume will now detach from the VM. You have successfully restored files and folders using the MARS agent GUI.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.