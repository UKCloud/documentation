---
title: How to secure an HTTPS endpoint using Octavia and Barbican
description: Provides information on using the Octavia TERMINATED_HTTPS endpoint type
services: openstack
author: srelf
reviewer: shighmoor
lastreviewed: 18/01/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Secure an HTTPS endpoint using Octavia and Barbican
toc_fullpath: How To/ostack-how-secure-octavia.md
toc_mdlink: ostack-how-secure-octavia.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

#  How to secure an HTTPS endpoint using Octavia and Barbican

## Overview

Octavia is the OpenStack Load Balancing as a Service (LBaaS), which provides the option to use TERMINATED_HTTPS listeners. This type of listener accepts HTTPS connections, and then passes traffic to the backend servers on standard HTTP. This helps to reduce load on the backend servers by having all encryption and decryption happen on a seperate device.

This article provides instructions on how to use Octavia and Barbican to setup a TERMINATED_HTTPS listener.

## Prerequisites

This article assumes familiarity with setting up Octavia load balancers. For more information, see [*How to use Octavia Load Balancing as a Service on UKCloud for OpenStack*](ostack-how-use-octavia.md) for basic instructions.

- You'll need a valid certificate chain in pkcs12 format

  You can convert from a PEM to pkcs12 format using the following command: `openssl pkcs12 -export -inkey server.key -in server.crt -passout pass: -out server.p12`

## Use cases

With a TLS-terminated HTTPS load balancer, web clients communicate with the load balancer over TLS protocols. The load balancer terminates the TLS session and forwards the decrypted requests to the back-end servers. By terminating the TLS session on the load balancer, we offload the CPU-intensive encryption work to the load balancer, and enable the possibility of using advanced load balancer features, like Layer 7 features and header manipulation.

## CLI example creating a new TERMINATED_HTTPS listener

### Store your SSL certificate in Barbican

```none
openstack secret store --name='tls_secret1' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server.p12)"
+---------------+----------------------------------------------------------------------------------------+
| Field         | Value                                                                                  |
+---------------+----------------------------------------------------------------------------------------+
| Secret href   | https://frn00003.cni.ukcloud.com:13311/v1/secrets/<REDACTED>                           |
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

To create the load balancer, follow the steps in [*How to use Octavia Load Balancing as a Service on UKCloud for OpenStack*](ostack-how-use-octavia.md) until you reach the section *Create a listener*.

### Create a TERMINATED_HTTPS listener

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
| name                        | listener1                            |
```

Now you've created the TERMINATED_HTTPS listener, go back to [*How to use Octavia Load Balancing as a Service on UKCloud for OpenStack*](https://docs.ukcloud.com/articles/openstack/ostack-how-use-octavia.html) and follow the remaining steps to continue the creation of the load balancer.

## CLI example updating or changing the SSL certificate used by the listener

### Upload the new SSL certificate to Barbican

```none
openstack secret store --name='tls_secret2' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < server-new.p12)"
+---------------+----------------------------------------------------------------------------------------+
| Field         | Value                                                                                  |
+---------------+----------------------------------------------------------------------------------------+
| Secret href   | https://frn00003.cni.ukcloud.com:13311/v1/secrets/<REDACTED>                           |
| Name          | tls_secret2                                                                            |
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

### Update the listener to use the new SSL certificate

```none
openstack loadbalancer listener set <listener_ID> --default-tls-container-ref "https://frn00003.cni.ukcloud.com:13311/v1/secrets/SECRET_ID"
```

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
