---
title: Shared Secret Length Issues IPSec VPN - Watchguard/Sonicwall
description: Outlines a potential issue and it's resolution for using an IPsec VPN tunnel with Watchguard or Sonicwall devices
services: vmware
author: shighmoor
reviewer: pmanchili
lastreviewed: 02/08/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Shared Secret Length Issues IPSec VPN
toc_fullpath: Reference/vmw-ref-shared-secret-issues.md
toc_mdlink: vmw-ref-shared-secret-issues.md
---

# Shared Secret Length Issues IPSec VPN - Watchguard/Sonicwall

When setting up an IPSec VPN tunnel with a Watchguard or Sonicwall device you may discover Phase1 negotiations having issues establishing a tunnel with errors similar to the below in your local firewall logs:

    Check Payloads : illegal payload length(####) total=####

    xxxx-xx-xx xx:xx:xx iked (<SOURECEIP><-><TARGETIP>)WARNING: Failed to decrypt packet from <SOURCEIP>:<PORT>.

There is a possible shared secret mismatch.

vCloud-created AES256 IPSec VPNs create a random shared secret by default with a length of 64 characters.

From testing, we recommend that you reduce the shared secret to the minimum 32 character length. This should enable the VPN to establish the tunnel without an issue.

For information about how to configure your IPSec VPN settings, see [*How to configure IPSec VPN*](vmw-how-configure-ipsec-vpn.md). You can change the shared key on the **Global Configuration** tab.

## Related articles

- [*IPSec VPN Foundation and PRIME profiles*](vmw-ref-ipsec-vpn.md)

## Related information

You can also find more information about configuring IPSec VPN in the following VMware documentation:

- [Configure the IPsec VPN Site Connections for the Edge Gateway](https://docs.vmware.com/en/VMware-Cloud-Director/10.0/com.vmware.vcloud.tenantportal.doc/GUID-EDFE41C7-C93C-41E7-8437-85163C5278B1.html)

- [Configure IPsec VPN](https://docs.vmware.com/en/VMware-Cloud-Director/10.0/com.vmware.vcloud.tenantportal.doc/GUID-1B933A00-56CE-4375-8824-6DDEC76A19F8.html)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
