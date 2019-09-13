---
title: IPsec VPN Foundation and PRIME profiles | UKCloud Ltd
description: Provides information about UKCloud for VMware's support of Foundation and PRIME profiles
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 21/03/2019 13:53:58
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: IPsec VPN Foundation and PRIME profiles
toc_fullpath: Reference/vmw-ref-ipsec-vpn.md
toc_mdlink: vmw-ref-ipsec-vpn.md
---

# IPsec VPN Foundation and PRIME profiles

## Overview

UKCloud for VMware supports IPsec VPN to provide secure access to your UKCloud environment. The National Cyber Security Centre (NCSC) provides guidance to help ensure that such connections meet strict security requirements through the application of Foundation and PRIME cryptographic profiles.

## Foundation profile

The tables below list the requirements of the Foundation IPsec profile and indicate whether UKCloud for VMware meets them:

IKEv1 | Selection | Meets requirement
------|-----------|------------------
Encryption | AES with 128-bit keys in CBC mode (RFC3602) | &check;
Pseudo-Random Function | HMAC-SHA-256 (RFC4868) | &check;
Diffie-Hellman Group | Group 14 (2048-bit MODP Group) (RFC3526) | &check;
Authentication | X.509 certificates with RSA signatures (2048 bits) and SHA-256 (RFC4945 and RFC4055) | &check;

ESP | Selection | Meets requirement
----|-----------|------------------
Encryption | AES with 128-bit keys in CBC mode (RFC3602) | &check;
Integrity | SHA-256 (RFC4868) | &check;

SA lifetimes | Selection | Meets requirements
-------------|-----------|-------------------
Phase 1      | 86400 seconds (1 day) | X
Phase 2      | 28800 seconds (8 hours) | X

While UKCloud for VMware meets the cryptographic requirements of the Foundation profile and therefore provides an equivalent standard, the SA lifetimes are shorter than those specified. If your application requires strict adherence to the Foundation profile, you can bring your own firewall (BYOF) that enables you to configure the SA lifetimes to the required length.

## PRIME profile

The tables below lists the requirements of the PRIME IPsec profile and indicates whether UKCloud for VMware meets them:

IKEv2 | Selection | Meets requirement
------|-----------|------------------
Encryption | AES-128 in GCM-128 (and optionally CBC) | &check;
Pseudo-Random Function | HMAC-SHA256 | &check;
Diffie-Hellman Group | 256bit random ECP (RFC5903) Group 19 | X
Authentication | ECDSA-256 with SHA256 on P-256 curve | &check;

ESP | Selection | Meets requirement
----|-----------|------------------
Encryption | AES-128 in GCM-128 | X

SA lifetimes | Selection | Meets requirements
-------------|-----------|-------------------
Phase 1      | 86400 seconds (1 day) | X
Phase 2      | 28800 seconds (8 hours) | X

Currently, this configuration is not available via the NSX edge gateway included with vCloud. If you have a requirement to use the PRIME IPsec profile, you can bring your own firewall (BYOF) that does support this configuration.

## Further information

- For more information about IPsec VPN and the Foundation and PRIME profiles, see the NCSC guidance at [Using IPsec to protect data](https://www.ncsc.gov.uk/guidance/using-ipsec-protect-data).

- For a list of third-party firewalls known to work with UKCloud for VMware, see [*Bring Your Own Firewall - Known working and non-working firewalls*](https://docs.ukcloud.com/articles/vmware/vmw-ref-byof-working-firewalls.html).

- For information about how to implement your own firewall within UKCloud for VMware, see the [*Bring your own firewall to UKCloud*](https://ukcloud.com/wp-content/uploads/2018/08/ukc-gen-310-bring-your-own-firewall-blueprint.pdf) blueprint.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
