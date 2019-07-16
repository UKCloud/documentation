---
title: How to connect to the UKCloud Windows Server Update Services (WSUS) | UKCloud Ltd
description:  Shows how to connect to the UKCloud Windows Update Services within vCloud Director
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 18/07/2018 12:04:00
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

Before you establish a connection to the update service, you need to ensure your VMs can communicate with the update server, which exists outside your cloud organisation.

This may involve editing the NAT and firewall settings on your edge gateway to allow traffic to traverse out of your virtual data centre (VDC). You'll need to open ports `443` and `8530` on your firewall to the update server. For more information on how to do this, see [*How to create NAT rules*](vmw-how-create-nat-rules.md) and [*How to create firewall rules*](vmw-how-create-firewall-rules.md).

## Configuring Windows update

In this section you'll need to use the appropriate address depending on the location you're targeting.

1. Open a console to the VM you want to update.

2. Test connectivity to the update servers by opening an Internet Explorer browser window, then opening a connection to one of the update servers on:

    - `https://wsus.cor.ukcloud.com` (Assured OFFICIAL, Corsham)

    - `https://wsus.frn.ukcloud.com` (Assured OFFICIAL, Farnborough)

    - For Elevated OFFICIAL, raise a Service Request via the My Calls section of the UKCloud Portal to get the appropriate IP address

    > [!NOTE]
    > Ensure that you can resolve this name via DNS or via a host entry you have manually put into your VMs. If you require details on what IP address you need to put into your host file, raise a Service Request via the My Calls section of the UKCloud Portal.

3. Ensure that you have the full certificate chain installed. If not, you may have to install the certificates into your VM manually.

    Links for Root CA and Issuing CA:

    - <https://www.digicert.com/CACerts/DigiCertGlobalRootCA.crt>

    - <https://www.digicert.com/CACerts/DigiCertSHA2SecureServerCA.crt>

    **For Windows Server 2008:**<br>
    Select Place all certificates in the following store.</br>
    In the Select Certificate Store select the option Show Physical Stores.</br>
    Install the certificate into Trusted Root Certification authorities/local PC.</br>
    </br>
    **For Windows Server 2012 and 2016:**</br>
    On the welcome screen of the Certificate import wizard, select Local Machine, then click Next.</br>
    Select Place all certificates in the following store, and click Browse.</br>
    Highlight Trusted Root Certification Authorities and click OK.</br>
    Click Next and confirm the import settings, then click Finish.

4. Restart your browser and open a connection to `https://wsus.cor.ukcloud.com`, `https://wsus.frn.ukcloud.com` or the appropriate Elevated IP address.

5. Confirm that no certificate warnings appear and that the full certificate chain is present.

6. Run `gpedit.msc`.

7. In the Group Policy Management Editor, expand and navigate to Computer Configuration > Administrative Templates > Windows Components > Windows Update.

8. Enable and configure the following settings:

    - Specify intranet Microsoft update service location —  in both boxes enter `https://wsus.cor.ukcloud.com`, `https://wsus.frn.ukcloud.com` or the appropriate Elevated IP address

    - Configure Automatic Updates — enter required settings

    - Enable client-side targeting — enter `client` in the group name field

9. Open an elevated command prompt and type `gpupdate /force`.

10. Open Windows update and click Check for updates.

## Replicating settings to other Windows VMs

To quickly replicate the settings defined above to other Windows VMs in your environment:

1. Copy the update server record in the host file to the additional VMs.

2. Export the certificate from the trusted root folder to a file and import it to the additional VMs.

3. Export the following key from the registry and import it onto the additional VMs:

    `KEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`

4. Restart the Windows update service on the additional VMs.

UKCloud provides a PowerShell script in our public GitHub that changes these settings by changing the registry keys inside the VM. If you use this script, you do so at your own risk.

Another option is to reference these settings in a Group Policy Object if you have Group Policy running in your environment.

These settings will depend on your current setup. The following article provides some useful information:

<https://technet.microsoft.com/en-us/library/cc720539(v=ws.10).aspx>

> [!NOTE]
> UKCloud are not responsible for content published on the URLs in the above guide. If you believe the link is broken or is no longer relevant, contact UKCloud Customer Support via the My Calls section of the UKCloud Portal.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
