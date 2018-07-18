---
title: How to connect to the UKCloud Windows Server Update Services (WSUS) | UKCloud Ltd
description:  Shows how to connect to the UKCloud Windows Update Services within vCloud Director
services: vmware
author: Sue Highmoor
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Connect to the UKCloud Windows Server Update Services (WSUS)
toc_fullpath: How To/vmw-how-connect-windows-update.md
toc_mdlink: vmw-how-connect-windows-update.md
---

# How to connect to the UKCloud Windows Server Update Services (WSUS)

## Overview

When you create a virtual machine (VM) running a Windows Server operating system, you need to register it with the UKCloud Windows Server Update Services to receive updates for it.

> [!NOTE]
> UKCloud provides Windows updates for server operating systems and SQL.

Before you establish a connection to the update services, you need to ensure your VMs can communicate with the update server, which exists outside your cloud organisation. This may involve editing the NAT and firewall settings on your edge gateway to allow traffic to traverse out of your virtual data centre (VDC). You'll need to open ports `443` and `80` on your firewall to the update server. For more information on how to do this, see [*How to create NAT rules*](vmw-how-create-nat-rules.md) and [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

## Configuring Windows update

In this section you'll need to replace the IP addresses of `x.x.x.x` with the IP address for the update server you're targeting. The IP address depends on whether your VMs are on the Assured OFFICIAL or Elevated OFFICIAL security domain. To get the IP addresses for the update servers, raise a service via My Calls in the UKCloud Portal.

1. Open a console to the VM you want to update.

2. Test connectivity to the update servers by opening an Internet Explorer browser window, then opening a connection to one of the update servers on `https://x.x.x.x`.

3. Confirm that a certificate error displays.

    If it doesn't, connectivity hasn't been established and you'll need to troubleshoot the NAT and firewall rules before you continue.

4. Confirm the certificate error, then click the certificate icon in the browser and select **Show Certificate** to show the **Issued to: _servername_**. Make a note of this **_servername_** for use in the next steps.

5. Create the host file entry for `x.x.x.x` to resolve to the **_servername_** from the step above.

6. Restart IE and open a connection to `https://servername`. Confirm that a certificate error displays, and confirm the certificate error.

7. Click the certificate icon to display the certificate and click **Install certificate**.

8. **For Windows Server 2008:**</br>
    Select Place all certificates in the following store.</br>
    In the Select Certificate Store select the option Show Physical Stores.</br>
    Install the certificate into Trusted Root Certification authorities/local PC.</br>
    </br>
    **For Windows Server 2012:**</br>
    On the welcome screen of the Certificate import wizard, select Local Machine, then click Next.</br>
    Select Place all certificates in the following store, and click Browse.</br>
    Highlight Trusted Root Certification Authorities and click OK.</br>
    Click Next and confirm the import settings, then click Finish.

9. Restart your browser and open a connection to `https://servername`.

10. Confirm that no certificate warnings appear, and that the certificate icon in IE is green.

11. Run `gpedit.msc`.

12. In the Group Policy Management Editor, expand and navigate to Computer Configuration > Administrative Templates > Windows Components > Windows Update.

13. Enable and configure the following settings:

    - Specify intranet Microsoft update service location --- enter `https://servername` in both boxes
    - Configure Automatic Updates --- enter required settings
    - Enable client-side targeting --- enter `client` in the group name field

14. Open an elevated command prompt and enter `gpupdate /force`.

15. Open Windows update and click Check for updates.

## Replicating settings to other Windows VMs

To quickly replicate the settings defined above to other windows VMs in your environment:

1. Copy the update server record in the host file to the additional VMs.

2. Export the certificate from the trusted root folder to a file and import it to the additional VMs.

3. Export from the registry the key

        KEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate

    and import it onto the additional VMs.

4. Restart the Windows update service on the additional VMs.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.