---
title: Shared Secret Length Issues IPSec VPN - Watchguard/Sonicwall | UKCloud Ltd
description: Outlines a potential issue and it's resolution for using an IPsec VPN tunnel with Watchguard or Sonicwall devices
services: vmware
author: Sue Highmoor
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

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.