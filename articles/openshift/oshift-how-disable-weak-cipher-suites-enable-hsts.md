---
title: How to disable weak cipher suites and enable HSTS in OpenShift
description: Provides instructions regarding disabling insecure cipher suites and enabling HSTS for OpenShift clusters
services: openshift
author: Ben Bacon
reviewer: 
lastreviewed: 24/06/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Disable weak cipher suites and enable HSTS
toc_fullpath: How To/oshift-how-disable-weak-cipher-suites-enable-hsts.md
toc_mdlink: oshift-how-disable-weak-cipher-suites-enable-hsts.md
---

# How to disable weak cipher suites and enable HSTS

## Overview

This article outlines steps to increase the security of externally exposed routes from your OpenShift cluster, through the use of more secure cipher suites and HTTP Strict Transport Security (HSTS).

### Intended audience

OpenShift developers who have created and deployed services into OpenShift and created and exposed secure routes for those services.

## Disable weak cipher suites

Cipher suites perform an important role in determining the security of a TLS connection. Over time, vulnerabilities have been identified in the algorithms used by cipher suites, which has resulted in published methods of decrypting and manipulating encrypted traffic. It's therefore generally recommended to use as modern a cipher suite as possible.

### UKCloud for OpenShift v3.x

#### Data plane

To provide extended client compatibility, the OpenShift router supports cipher suites from TLS 1.0 - TLS 1.2 by default. Some of these cipher suites (especially older ones) are vulnerable to man-in-the-middle (MITM) attacks.

If exposed secure routes are only being accessed from modern clients (that support TLS 1.2 and above),  you can disable the weak cipher suites by adding the following environment variable to any router `DeploymentConfig`:

```
oc set env dc/router ROUTER_CIPHERS=modern -n default
```

This triggers a rollout of the `DeploymentConfig`. Going forward, the new router pods will only accept cipher suites from TLS 1.2.

#### Control plane

By default, the OpenShift control plane (web console) only supports TLS 1.2 ciphers, although these do not provide forward secrecy.

We can restrict the ciphers to only those that provide forward secrecy. To do this, raise a Service Request with the UKCloud OpenShift Support team via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

### UKCloud for OpenShift v4.x

#### Data plane

There are no weak ciphers supported by the OpenShift `IngressController` since by default it supports TLS 1.2 cipher suites with forward secrecy. It is possible to further restrict the ciphers by modifying the default `IngressController` object, specifically the value of `IngressController.spec.tlsSecurityProfile`:

```
oc edit ingresscontroller default -n openshift-ingress-operator
```

As an example, the below would omit cipher suites using the DHE key exchange:

```
apiVersion: operator.openshift.io/v1
kind: IngressController
metadata:
  name: example
  namespace: openshift-ingress-operator
spec:
  tlsSecurityProfile:
    type: Custom
    custom:
      ciphers:
        - TLS_AES_128_GCM_SHA256
        - TLS_AES_256_GCM_SHA384
        - TLS_CHACHA20_POLY1305_SHA256
        - ECDHE-ECDSA-AES128-GCM-SHA256
        - ECDHE-RSA-AES128-GCM-SHA256
        - ECDHE-ECDSA-AES256-GCM-SHA384
        - ECDHE-RSA-AES256-GCM-SHA384
        - ECDHE-ECDSA-CHACHA20-POLY1305
        - ECDHE-RSA-CHACHA20-POLY1305
      minTLSVersion: VersionTLS12
```

#### Control plane

There are no weak ciphers supported by the OpenShift control plane (API) since by default it supports TLS 1.2 and 1.3 cipher suites with forward secrecy.

## Enable HSTS

HSTS (HTTP Strict Transport Security) prevents MITM attacks, such as protocol downgrading by setting a header within HTTPS responses. This header (`Strict-Transport-Security`) is cached by a browser and ensures that future requests to the same host always use HTTPS rather than HTTP.

> [!NOTE]
> It is currently not possible to enable HSTS for the the OpenShift v3.x web console or OpenShift v4.x API server.

> [!WARNING]
> You should enable HSTS only on routes that currently have a valid certificate. If the certificate becomes invalid, the route will be inaccessible, due to how browsers' HSTS mechanisms works. You should exercise particular caution if you're using a non-standard hostname (that is, not ending in `<your-cluster-hostname>.ukcloud.com`) for a route. In this case you should ensure a valid certificate is contained within the route spec (for edge and re-encrypt routes) or within the container (if using the pass-through TLS encryption method).

Enable HSTS on secure routes by using the following command:

```
oc annotate route <routename> haproxy.router.openshift.io/hsts_header=max-age=31536000
```

By default in UKCloud for OpenShift v4.x clusters, the following apps routes provisioned during deployment have HSTS enabled:

- OpenShift Console

- Kibana

- AlertManager

- Grafana

- Prometheus

- Thanos

## Further reading

- <https://wiki.mozilla.org/Security/Server_Side_TLS>

- <https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security>

### UKCloud for OpenShift v3.x Specific

- <https://docs.openshift.com/container-platform/3.11/install_config/router/default_haproxy_router.html#bind-ciphers>

- <https://docs.openshift.com/container-platform/3.11/admin_guide/managing_networking.html#admin-guide-enabling-hsts>

### UKCloud for OpenShift v4.x Specific

- <https://docs.openshift.com/container-platform/4.4/networking/routes/route-configuration.html#nw-enabling-hsts_route-configuration>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
