---
title: How to deploy and configure the Azure Stack Hub Development Kit
description: Deploy and configure the Azure Stack Hub Development Kit (ASDK)
services: azure-stack
author: Paul Brown
reviewer: William Turner
lastreviewed: 26/05/2020

toc_rootlink: Operators
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Deploy and configure the Azure Stack Hub Development Kit
toc_fullpath: Operators/How To/azs-how-deploy-asdk.md
toc_mdlink: azs-how-deploy-asdk.md
---

# How to deploy and configure the Azure Stack Hub Development Kit

The Azure Stack Hub Development Kit (ASDK) is a single server instance of Azure Stack Hub. It is not fit for production workloads and has some subtle differences vs the real Azure Stack Hub integrate appliance, however for most test scenarios it will suffice.

The ASDK is used in two modes within UKCloud:

- Physical hardware (pre-production) - Community support with Microsoft.

- Virtual servers (development and testing) - Not officially supported by Microsoft.

## Step 1 - Hardware pre-requisites

Detailed specifications can be found [here](https://docs.microsoft.com/en-us/azure-stack/asdk/asdk-deploy-considerations)

| Device     | Details         |
|------------|-----------------|
| CPU        | \>=16 cores     |
| RAM        | \>=192GB        |
| OS Disks   | \>=200GB        |
| Data Disks | \>=4 \* \>=240G |

### [Virtual Deployment](#tab/tabid-1)

VMware HW version must be \>=11, and CPU virtual extension pass-through must be enabled.

> [!IMPORTANT]
> If you deploy your VM with Hardware Version 11 and Operating System Family as Windows Server 2016 you will not be able to create S2D Cluster as disk UUIDs are not exposed.
>
> - Either create it with Windows Server 2012 and change it later.
>
> - Or in Configuration Parameters, click Add Row. In the Name column, enter disk.EnableUUID. In the Value column, enter TRUE. This will show correct disk IDs in Get-PhysicalDisk cmdlets and the cluster should build.

### [Physical Deployment](#tab/tabid-2)

The first two drives must be setup in a RAID 1 configuration, with the rest passed through as JBOD (Just a Bunch Of Drives). Additionally, you need to specify your VLAN as ACCESS in the CIMC.

***

## Step 2 - Install base operating system

Install Windows Server 2016 to the OS disk implementing a static IP address.

### [Virtual Deployment](#tab/tabid-1)

VMware tools must be installed and the VMware Tools drivers must be exported onto the C: drive (VMwareKB). Additionally, the disks have to be online and initialised as MBR.

### [Physical Deployment](#tab/tabid-2)

On the RAID 1 disk, the following drivers must be downloaded, extracted and installed:

[https://software.cisco.com/download/release.html?mdfid=286281356&softwareid=283291009&os=Windows%202016%2064-bit&release=3.0(3a)&relind=AVAILABLE&rellifecycle=&reltype=latest](https://software.cisco.com/download/release.html?mdfid=286281356&softwareid=283291009&os=Windows%202016%2064-bit&release=3.0(3a)&relind=AVAILABLE&rellifecycle=&reltype=latest)

***

## Step 3 - Initial setup

Download the appliance and prep the virtual disk (vhdx) for the ASDK.

Implement the following steps from the Microsoft documentation:

- [Download and extract the development kit](https://docs.microsoft.com/en-us/azure-stack/asdk/asdk-download)

- [Prepare the development kit host](https://docs.microsoft.com/en-us/azure-stack/asdk/asdk-prepare-host)

The following details should be used:

| Option        | Parameter                                                                          |
|---------------|------------------------------------------------------------------------------------|
| NTP           | 46.227.200.76                                                                      |
| DNS Forwarder | 8.8.8.8                                                                            |
| Drivers       | Browse to path of either the extracted Cisco drivers or the extracted VMware tools |
| Computer Name | Anything but "azurestack", for example, "azurestackhost"                            |
| Static IP     | IP details assigned to the current interface                                       |

### [Virtual Deployment](#tab/tabid-1)

Before running the installer, open `C:\AzureStack\_Installer\asdk-installer.ps1` and edit as follows:

| Line Number | Current Code | Updated code |
|-------------|--------------|--------------|
| 1917 | `elseif ((get-disk | Where-Object {$_.isboot -eq $true}).Model -match 'Virtual Disk') {` | `elseif ((get-disk | Where-Object -FilterScript { $_.isboot -eq $true }).Model -match 'null') {` |

To edit, run:

```powershell
$GetScript = Get-Content -Path "C:\AzureStack_Installer\asdk-installer.ps1"

$GetScript = $GetScript | ForEach-Object { ($_ -replace "elseif \(\(get-disk \| Where-Object \`{\`$`_.isboot -eq \`$true\`}\).Model -match 'Virtual Disk'\) \`{", "elseif ((get-disk | Where-Object -FilterScript { `$====_.isboot -eq `$true }).Model -match 'null') {") -replace "====","" }

$GetScript | Set-Content -Path "C:\AzureStack_Installer\asdk-installer.ps1" -Force
```

To verify, run:

```powershell
Select-String -Path "C:\AzureStack_Installer\asdk-installer.ps1" -Pattern "elseif \(\(get-disk \| Where-Object -FilterScript \`{ \`$`_.isboot -eq \`$true \`}\).Model -match 'null'\) \`{"
```

### [Physical Deployment](#tab/tabid-2)

No additional steps.

***

<br>

Once step 3 is complete the box will have been rebooted from the vhdx downloaded above.

## Step 4 - Install ASDK

Implement the following steps from the Microsoft documentation:

- [Deploy the development kit](https://docs.microsoft.com/en-us/azure-stack/asdk/asdk-install)

The following details should be used:

| Option        | Parameter     |
|---------------|---------------|
| NTP           | 46.227.200.76 |
| DNS Forwarder | 8.8.8.8       |
| Type          | Azure AD - this should be either your own AAD account where you are the system admin or one you have setup for Azure Stack Hub, for example, `contoso.onmicrosoft.com` |
| Static IP     | Different IP than what you currently have, for example, if your current IP is 10.0.0.101 then you could use 10.0.0.191. |

### [Virtual Deployment](#tab/tabid-1)

> [!NOTE]
> If the installer cannot see any network adapters - you can manually install VMware Tools and reboot the box.

After completing the wizard BUT before clicking deploy, copy the command as the install will fail.

```powershell
E:\AzureStack_Installer\asdk-installer.ps1

Initialize environment. Please wait...
```

This will just end with nothing after exiting the installer wizard.

Then you need to run the copied InstallAzureStackPOC.ps1 command to create the Roles directory, which will contain the below script.

Open `C:\CloudDeployment\Roles\PhysicalMachines\Tests\BareMetal.Tests.ps1` and edit as follows:

| Line Number | Current code | Updated code | Reference |
|-------------|--------------|--------------|-----------|
| 780 | `PartNumber = $_.PartNumber.Trim();` | `PartNumber = $_.PartNumber;` | <https://social.msdn.microsoft.com/Forums/en-US/f9060fe2-4408-41a4-b387-09a3e9a09f00/ltstacktracegtat-line-762-in?forum=AzureStack> |
| 1202 | `($physicalMachine.Processors.NumberOfEnabledCores | Measure-Object -Sum).Sum | Should Not BeLessThan $minimumNumberOfCoresPerMachine` | `($physicalMachine.Processors.NumberOfEnabledCores | Measure-Object -Sum).Sum | Should Not BeLessThan 0` |   |

To edit, run:

```powershell
$GetScript = Get-Content -Path "C:\CloudDeployment\Roles\PhysicalMachines\Tests\BareMetal.Tests.ps1"

$GetScript = $GetScript | ForEach-Object { $_ -replace "$_.PartNumber.Trim\(\);", "$_.PartNumber;" }
$GetScript = $GetScript | ForEach-Object { $_ -replace "\(\`$physicalMachine.Processors.NumberOfEnabledCores \| Measure-Object -Sum\).Sum \| Should Not BeLessThan \`$minimumNumberOfCoresPerMachine", "(`$physicalMachine.Processors.NumberOfEnabledCores | Measure-Object -Sum).Sum | Should Not BeLessThan 0" }

$GetScript | Set-Content -Path "C:\CloudDeployment\Roles\PhysicalMachines\Tests\BareMetal.Tests.ps1" -Force
```

To verify, run:

```powershell
Select-String -Path "C:\CloudDeployment\Roles\PhysicalMachines\Tests\BareMetal.Tests.ps1" -Pattern "PartNumber = \`$_.PartNumber;"

Select-String -Path "C:\CloudDeployment\Roles\PhysicalMachines\Tests\BareMetal.Tests.ps1" -Pattern "\(\`$physicalMachine.Processors.NumberOfEnabledCores \| Measure-Object -Sum\).Sum \| Should Not BeLessThan 0"
```

After you've modified it, run:

```powershell
$AdminPass = ConvertTo-SecureString -String 'Password123'-AsPlainText -Force
$Username = "azurestackadmin@<domain>.onmicrosoft.com"
$Password = "<password>"
$Password = ConvertTo-SecureString -String $Password -AsPlainText -Force
$Credentials = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username, $Password

cd C:\CloudDeployment\Setup
.\InstallAzureStackPOC.ps1 -AdminPassword $AdminPass -InfraAzureDirectoryTenantAdminCredential $credentialsS -InfraAzureDirectoryTenantName <domain>.onmicrosoft.com -DNSForwarder 8.8.8.8 -TimeServer 46.227.200.76
```

### [Physical Deployment](#tab/tabid-2)

> [!NOTE]
> Before running the installation, make sure only one network adapter is enabled, otherwise the install will fail.
>
> For some reason the driver injection does not work and you have to manually add Ethernet Adapters from Device Manager, then disable everything but management-0. Configure its IP address and then run the install.

Example of Automated Physical Kit Deployment:

```powershell
$AdminPass = ConvertTo-SecureString -String 'Password123' -AsPlainText -Force
$Username = "azurestackadmin@<domain>.onmicrosoft.com"
$Password = "<password>"
$Password = ConvertTo-SecureString -String $Password -AsPlainText -Force
$Credentials = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username, $Password

cd C:\CloudDeployment\Setup
.\InstallAzureStackPOC.ps1 -AdminPassword $AdminPass -InfraAzureDirectoryTenantAdminCredential $Credentials -InfraAzureDirectoryTenantName <domain>.onmicrosoft.com -DNSForwarder 8.8.8.8 -TimeServer 46.227.200.76
```

***

<br>

> [!IMPORTANT]
> Do not set the `InfraAzureDirectoryTenantAdminCredential` parameter if the AAD account has MFA enabled as you will not be able to authenticate correctly. Instead, leave it blank and you will be prompted for the AAD account a few minutes after you run the script.

### Fix for Potential Installation Failure

1803 install failed with the below error:

```powershell
Invoke-EceAction : Type 'Deployment' of Role 'Domain' raised an exception: 'AzS-DC01' failed to start.
Virtual machine 'AzS-DC01' could not be started because the hypervisor is not running.
'AzS-DC01' failed to start. (Virtual machine ID DA2A3A2D-F30B-42C3-AB39-C4BF11E07CEE)
Virtual machine 'AzS-DC01' could not be started because the hypervisor is not running (Virtual machine ID DA2A3A2D-F30B-42C3-AB39-C4BF11E07CEE).
The following actions may help you resolve the problem:
1) Verify that the processor of the physical computer has a supported version of hardware-assisted virtualization.
2) Verify that hardware-assisted virtualization and hardware-assisted data execution protection are enabled in the BIOS of the physical computer. (If you edit the BIOS to enable either setting, you must turn off the power to the physical computer and then turn it back on. Resetting the physical computer is not sufficient.)
3) If you have made changes to the Boot Configuration Data store, review these changes to ensure that the hypervisor is configured to launch automatically.
at New-ManagementVM, C:\Program Files\WindowsPowerShell\Modules\NewManagementVM\NewManagementVM.psm1: line 493
at DeployOneVM, C:\CloudDeployment\Classes\Common\Image\VirtualMachineRole.psm1: line 1321
at DeployVms, C:\CloudDeployment\Classes\Common\Image\VirtualMachineRole.psm1: line 1501
at Deployment, C:\CloudDeployment\Classes\Common\Image\VirtualMachineRole.psm1: line 1600
at <ScriptBlock>, <No file>: line 39
at <ScriptBlock>, <No file>: line 37
At C:\CloudDeployment\Setup\DeploySingleNode.ps1:676 char:5
+ Invoke-EceAction -RolePath $masterRole -ActionType $actionPlan @d ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 + CategoryInfo : NotSpecified: (:) [Invoke-EceAction], InterfaceInvocationFailedException
 + FullyQualifiedErrorId : OperationFailed,Microsoft.HyperV.PowerShell.Commands.StartVM,CloudEngine.Cmdlets.InvokeCmdlet
Invoke-EceAction : Action: Invocation of step PhysicalMachineAndInitialConfiguration.15 failed. Stopping invocation of action plan.
At C:\CloudDeployment\Setup\DeploySingleNode.ps1:676 char:5
+ Invoke-EceAction -RolePath $masterRole -ActionType $actionPlan @d ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 + CategoryInfo : InvalidOperation: (:) [Invoke-EceAction], ActionExecutionException
 + FullyQualifiedErrorId : Unspecified error,CloudEngine.Cmdlets.InvokeCmdlet
Invoke-EceAction : Action: Invocation of step PhysicalMachineAndInitialConfiguration failed. Stopping invocation of action plan.
At C:\CloudDeployment\Setup\DeploySingleNode.ps1:676 char:5
+ Invoke-EceAction -RolePath $masterRole -ActionType $actionPlan @d ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 + CategoryInfo : InvalidOperation: (:) [Invoke-EceAction], ActionExecutionException
 + FullyQualifiedErrorId : Unspecified error,CloudEngine.Cmdlets.InvokeCmdlet
```

Verification of Physical kit showed that virtualisation is in fact enabled but Hyper-V is not starting on boot.

To verify, you can run systeminfo and it will show whether the BIOS is set correctly, and so on. In our case it was set correctly, only the boot settings were not.

To fix it, run the below from an elevated command prompt:

```powershell
BCDEDIT /Set {current} hypervisorlaunchtype auto
```

Then reboot the box and continue the install.

## Post-Deployment Troubleshooting

### Service Principal creation failed during registration process

When registering the ASDK, you may experience a timeout during the Service Principal creation. If you inspect the action plan you will see that this is actually caused by an issue with connecting to the below addresses, which are the client and admin portals.

```xml
TCP connection failed for the following VIPs: 'SDRInternal' 192.168.105.8:19007 'SDRInternal' 192.168.105.8:19000.
```

A potential fix is to try increasing the memory and disk space of the 'AzS' virtual machines in Hyper-V manager. As a general guide, make sure that you assign enough memory to meet the *Memory Demand* listed in the **Memory** tab for each virtual machine.

After making any changes, you should restart the ASDK as follows:

```powershell
# Create your Credentials
$AzsUsername = "AzureStack\CloudAdmin"
$AzsPassword = 'Password123!'
$AzsUserPassword = ConvertTo-SecureString -String $AzsPassword -AsPlainText -Force
$AzsCred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $AzsUsername, $AzsUserPassword

$Session = New-PSSession -ComputerName AzS-ERCS01 -Credential $AzsCred -ConfigurationName PrivilegedEndpoint

Enter-PSSession $Session

# This will shutdown the machine after a few minutes. You will need to manually start the VM again once it is shutdown (e.g. through VMWare vCloud Director)
Stop-AzureStack

# When the machine is back up, create the PSSession again and run the below command to retrieve the status of Start-AzureStack
Get-ActionStatus Start-AzureStack
```

If the above does not resolve the issue, then you will likely need to redeploy the ASDK from the beginning.

## Useful Links

- [Develop templates for Azure Stack Hub](https://docs.microsoft.com/en-us/azure-stack/user/azure-stack-develop-templates)

- [Deploy templates with PowerShell](https://docs.microsoft.com/en-us/azure-stack/user/azure-stack-deploy-template-powershell)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
