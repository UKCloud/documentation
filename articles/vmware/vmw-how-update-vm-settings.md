---
title: How to view and update virtual machine settings | UKCloud Ltd
description: Describes how to view and update the different virtual machine (VM) settings in vCloud Director
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 10/09/2018 14:50:11
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: View and update virtual machine settings
toc_fullpath: How To/vmw-how-update-vm-settings.md
toc_mdlink: vmw-how-update-vm-settings.md
---

# How to view and update virtual machine settings

## Viewing and updating VM settings

After you've deployed a virtual machine (VM), you can view and update its configuration.

1. In the vCloud Director *Virtual Datacentres* dashboard, select the VDC where the vApp that contains the VM is located.

2. In the left navigation panel, click **vApps**.

    ![vApps menu option](images/vmw-vcd-tab-vapps.png)

3. In the card for the vApp that contains the VM, click **Details**.

    ![vApp Details option](images/vmw-vcd-mnu-vapp-details.png)

4. Click the name of the VM for which you want to view configuration information.

5. Expand each section to view the settings for the VM and change them if required.

6. When you're done, click **Save** to save any changes you've made, or **Discard Changes** to close without saving.

## General

View and changes properties such as the VM/host name, OS type and version. You can also see if VMware Tools is installed on the VM and change the storage policy for the VM. For more information on storage policies, see [*Storage policies*](vmw-ref-storage-policies.md).

![Virtual Machines: General section](images/vmw-vcd91-vm-general.png)

## Hardware

On the **Hardware** tab, you can:

- See and change the number of virtual CPUs and the amount of RAM associated with the VM.

- Specify the number of cores per socket and number of vCPUs. You can use this for software applications that have per-socket licensing. First set the number of vCPUs you require, and then set the number of cores per socket.

- Run virtualisation servers as a VM. For example, run a Windows 2008 or 2012 server with Hyper-V, or a VMware ESX host. Select the **Expose hardware-assisted CPU virtualization** check box in these cases.

- Add or remove hard disks and network adapters.

    > [!WARNING]
    > If you remove a hard disk, make sure you have a backup of the data. Removal of a hard disk is not reversible, and will result in the deletion of the hard disk and its data.

![Virtual Machines: Hardware section](images/vmw-vcd-vm-hardware.png)

## Guest OS Customization

By default, a password is randomly generated and assigned when the VM is first booted. You can use this tab to determine the login password, or to specify the password that will be assigned to the administrator/root user for the VM.

The password must meet the OS password complexity requirements (at least eight characters long, and including upper and lower case letters and numbers).

For guest customisation to work, VMware Tools must be installed and running in the VM.

For Windows VMs, there is an option for guest customisation to change the SID of the operating system. Bear in mind that changing the SID can corrupt VMs running applications, such as Active Directory, that rely on a known SID.

![Virtual Machines: Guest OS Customization section](images/vmw-vcd-vm-guestos.png)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
