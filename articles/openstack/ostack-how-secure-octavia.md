---
title: How to secure a HTTPS endpoint using Octavia and Barbican.
description: Provides information on using Octavia TERMINATED_HTTPS endpoint type.
services: openstack
author: srelf
reviewer: 
lastreviewed: 

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use Octavia and Barbican to secure an HTTPS endpoint.
toc_fullpath: How To/ostack-how-secure-octavia.md
toc_mdlink: ostack-how-secure-octavia.md
---

#  How to secure a HTTPS endpoint using Octavia and Barbican.

## Overview

Octavia is the OpenStack Load Balancing as a Service (LBaaS), which provides the option to use terminated_https listeners. This type of listener accepts HTTPS connections, and then passes traffic to the backend servers on standard HTTP. This helps to reduce load on the backend servers by having all encryption/decryption happen on a seperate device.

This article will provide instructions on how to make use of Octavia and Barbican to setup a terminated_https listener.


## Prerequisites

This guide assumes familiarity with setting up Octavia loadbalancers. For more information please see [How to use Octavia Load Balancing as a Service on UKCloud for OpenStack](https://docs.ukcloud.com/articles/openstack/ostack-how-use-octavia.html) for basic instructions.

- You will require a valid certificate chain in pkcs12 format
    - You can convert from a PEM to pkcs12 format using the following command "openssl pkcs12 -export -inkey server.key -in server.crt -passout pass: -out server.p12"

## Use cases

With a TLS-terminated HTTPS load balancer, web clients communicate with the load balancer over TLS protocols. The load balancer terminates the TLS session and forwards the decrypted requests to the back-end servers. By terminating the TLS session on the load balancer, we offload the CPU-intensive encryption work to the load balancer, and enable the possibility of using advanced load balancer features, like Layer 7 features and header manipulation

### CLI example creating a new terminated_https listener.

#### Store your SSL certificate in Barbican

```none
openstack secret store --name='tls_secret1' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server.p12)"
+---------------+----------------------------------------------------------------------------------------+
| Field         | Value                                                                                  |
+---------------+----------------------------------------------------------------------------------------+
| Secret href   | https://frn00003.cni.ukcloud.com:13311/v1/secrets/<REDACTED> |
| Name          | tls_secret1                                                                            |
| Created       | None                                                                                   |
| Status        | None                                                                                   |
| Content types | {u'default': u'application/octet-stream'}                                              |
| Algorithm     | aes                                                                                    |
| Bit length    | 256                                                                                    |
| Secret type   | opaque                                                                                 |
| Mode          | cbc                                                                                    |
| Expiration    | None                                                                                   |
+---------------+----------------------------------------------------------------------------------------+
```

Please follow [How to use Octavia Load Balancing as a Service on UKCloud for OpenStack](https://docs.ukcloud.com/articles/openstack/ostack-how-use-octavia.html) until you reach the section "Create A listener"

#### Create a listener

```none
openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name listener1 --default-tls-container=$(openstack secret list | awk '/ tls_secret1 / {print $2}') my-lbaas
+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2021-07-29T09:17:01                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | 20f6ceda-b77f-433f-b171-fbc93668c536 |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | 5e815730-8cde-4d31-8761-f50422767c49 |
| name                        | listener1               |
```

Now go back and follow [How to use Octavia Load Balancing as a Service on UKCloud for OpenStack](https://docs.ukcloud.com/articles/openstack/ostack-how-use-octavia.html) until you reach the section "Create A listener" to continue the creation of the loadbalancer.

### CLI example updating or changing the SSL certificate used by the listener.

#### Upload the new SSL certificate to Barbican

```none
openstack secret store --name='tls_secret2' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server-new.p12)"
+---------------+----------------------------------------------------------------------------------------+
| Field         | Value                                                                                  |
+---------------+----------------------------------------------------------------------------------------+
| Secret href   | https://frn00003.cni.ukcloud.com:13311/v1/secrets/<REDACTED> |
| Name          | tls_secret2                                                                         |
| Created       | None                                                                                   |
| Status        | None                                                                                   |
| Content types | {u'default': u'application/octet-stream'}                                              |
| Algorithm     | aes                                                                                    |
| Bit length    | 256                                                                                    |
| Secret type   | opaque                                                                                 |
| Mode          | cbc                                                                                    |
| Expiration    | None                                                                                   |
+---------------+----------------------------------------------------------------------------------------+
```

#### Update the listener to use the new SSL certificate
```none
openstack loadbalancer listener set <listener_ID> --default-tls-container-ref "https://frn00003.cni.ukcloud.com:13311/v1/secrets/SECRET_ID"
```

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
