---
title: HSCN and SSL certificates | UKCloud Ltd
description: Outlines how you can get SSL certificates for web services hosted on HSCN
services: connectivity
author: Sue Highmoor

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: HSCN and SSL certificates
toc_fullpath: Reference/conn-ref-hscn-ssl.md
toc_mdlink: conn-ref-hscn-ssl.md
---

# HSCN and SSL certificates

## Overview

This article outlines how you can get SSL certificates for web services hosted on HSCN.

## Domain names

Before you can get SSL certificates for your web site, you must get a domain name that you can use on the HSCN. This can come in two forms:

- `nhs.uk` domain

- non `nhs.uk` domain

### nhs.uk domain

Typically `nhs.uk` domains are reserved for NHS organisations only, however in some circumstances these may be successfully applied for by private organisations. There is guidance available about domain namespace policy available at <https://digital.nhs.uk/services/networking-addressing/namespace-policy>. You should apply for an `nhs.uk` domain by emailing the NHS DNS Team (<dnsteam@nhs.net>).

If you have an `nhs.uk` domain name, you'll get a subdomain on the HSCN internal DNS service with a suitable A record.

### Non nhs.uk domain

If you don't have an `nhs.uk` domain name, you may use your own domain name that has been adapted for use on HSCN. For example, if you don't already have a domain then you can create the internet domain of `example.org` then purchase an internet-based DNS service and create an A record in the DNS that maps to your HSCN IP address, for example, `hscn.example.org` maps to `HSCN.IP.x.x`.

## Getting SSL certificates

When you have set up your domain, you can then get an SSL certificate.

Go to a certificate provider, for example, Comodo or GoDaddy, and go through the validation process. Generally, this involves validation against emails to the specific domain you want to get a certificate for, for example, `hostmaster@example.nhs.uk` or `administrator@example.org`, though this process differs between providers. You should also decide what type of certificate you want, and this will affect the validation process. If you're unable to validate against an email address, then you should talk to your supplier about other methods of validation.

Neither UKCloud nor NHS Digital provide SSL certificates and neither have preferred suppliers for SSL certs.

## Installing SSL certificates

You are responsible for the installation of the SSL certificates in the appropriate place(s), for example, load balancers, SSL offloaders or web servers, by whoever administers the web site. UKCloud are not responsible for the installation or management of certificates.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
