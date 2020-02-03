---
title: How to create static IPs for OpenStack instances 
description: Instructions on how to create static IPs and assign them to instances
services: openstack
author: Bryce Nicholls
reviewer: scassidy
lastreviewed: 08/01/2019
toc_rootlink: How to
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create static IPs for OpenStack instances
toc_fullpath: How To/ostack-how-static-ip.md
toc_mdlink: ostack-how-static-ip.md
---

# How to create static IPs for OpenStack instances

## Overview

Static IPs  are assigned to instances in OpenStack by creating ports and adding them to the instance.

A port is a connection point for attaching a single device, such as the NIC of a server, to a network. The port also describes the associated network configuration, such as the MAC and IP addresses to be used on that port.

## Creating a static IP

> [!NOTE]
> You will need to source your RC file before you run the commands below.

1. Create a network by entering the following command in the OpenStack CLI:

    ```none
    openstack network create testnet
    ```

    This command will return the following:

    ```none
    +-------------------------+--------------------------------------+
     Field                   | Value                                |
    +-------------------------+--------------------------------------+
    | admin_state_up          | UP                                   |
    | availability_zone_hints |                                      |
    | availability_zones      |                                      |
    | created_at              | 2020-01-07T15:42:48Z                 |
    | description             |                                      |
    | headers                 |                                      |
    | id                      | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
    | ipv4_address_scope      | None                                 |
    | ipv6_address_scope      | None                                 |
    | mtu                     | 1446                                 |
    | name                    | testnet                              |
    | port_security_enabled   | True                                 |
    | project_id              | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | project_id              | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | qos_policy_id           | None                                 |
    | revision_number         | 3                                    |
    | router:external         | Internal                             |
    | shared                  | False                                |
    | status                  | ACTIVE                               |
    | subnets                 |                                      |
    | tags                    | []                                   |
    | updated_at              | 2020-01-07T15:42:48Z                 |
    +-------------------------+--------------------------------------+
    ```

2. Create a subnet and attach to the network:

    ```none
    openstack subnet create --network testnet --subnet-range 10.1.1.0/24 testnet-sub
    ```

    This command will return the following:

    ```none
    +-------------------+--------------------------------------+
    | Field             | Value                                |
    +-------------------+--------------------------------------+
    | allocation_pools  | 10.1.1.2-10.1.1.254                  |
    | cidr              | 10.1.1.0/24                          |
    | created_at        | 2020-01-07T15:44:18Z                 |
    | description       |                                      |
    | dns_nameservers   |                                      |
    | enable_dhcp       | True                                 |
    | gateway_ip        | 10.1.1.1                             |
    | headers           |                                      |
    | host_routes       |                                      |
    | id                | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
    | ip_version        | 4                                    |
    | ipv6_address_mode | None                                 |
    | ipv6_ra_mode      | None                                 |
    | name              | testnet-sub                          |
    | network_id        | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
    | project_id        | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | project_id        | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | revision_number   | 2                                    |
    | service_types     | []                                   |
    | subnetpool_id     | None                                 |
    | updated_at        | 2020-01-07T15:44:18Z                 |
    +-------------------+--------------------------------------+
    ```

3. Create a port and attach to the network & subnet: 

    ```none
    openstack port create --network testnet --fixed-ip subnet=testnet-sub,ip-address=10.1.1.10 test-static-ip-1
    ```

    This command will return the following:

    ```none
    +-----------------------+--------------------------------------------------------------------------+
    | Field                 | Value                                                                    |
    +-----------------------+--------------------------------------------------------------------------+
    | admin_state_up        | UP                                                                       |
    | allowed_address_pairs |                                                                          |
    | binding_vnic_type     | normal                                                                   |
    | created_at            | 2020-01-07T15:45:38Z                                                     |
    | description           |                                                                          |
    | device_id             |                                                                          |
    | device_owner          |                                                                          |
    | extra_dhcp_opts       |                                                                          |
    | fixed_ips             | ip_address='10.1.1.10', subnet_id='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' |
    | headers               |                                                                          |
    | id                    | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                                     |
    | mac_address           | xx:xx:xx:xx:xx:xx                                                        |
    | name                  | test-static-ip-1                                                         |
    | network_id            | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                                     |
    | port_security_enabled | True                                                                     |
    | project_id            | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                         |
    | project_id            | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                         |
    | qos_policy_id         | None                                                                     |
    | revision_number       | 5                                                                        |
    | security_groups       | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                                     |
    | status                | DOWN                                                                     |
    | updated_at            | 2020-01-07T15:45:38Z                                                     |
    +-----------------------+--------------------------------------------------------------------------+
    ```

4. Launch an instance with the static IP attached:

    ```none
    openstack server create --flavor t1.tiny --nic port-id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image cirros --wait test-instance1
    ```

    > [!TIP]
    > To retrieve the `port-id`, use the `openstack port list` command.

    This command will return the following:

    ```none
    +--------------------------------------+----------------------------------------------------------+
    | Field                                | Value                                                    |
    +--------------------------------------+----------------------------------------------------------+
    | OS-DCF:diskConfig                    | MANUAL                                                   |
    | OS-EXT-AZ:availability_zone          | 0000c-2                                                  |
    | OS-EXT-STS:power_state               | Running                                                  |
    | OS-EXT-STS:task_state                | None                                                     |
    | OS-EXT-STS:vm_state                  | active                                                   |
    | OS-SRV-USG:launched_at               | 2020-01-07T15:48:20.000000                               |
    | OS-SRV-USG:terminated_at             | None                                                     |
    | accessIPv4                           |                                                          |
    | accessIPv6                           |                                                          |
    | addresses                            | testnet=10.1.1.10                                        |
    | adminPass                            | cxATS5Zjp6Hv                                             |
    | config_drive                         |                                                          |
    | created                              | 2020-01-07T15:48:13Z                                     |
    | flavor                               | t1.tiny (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)           |
    | hostId                               | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |
    | id                                   | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                     |
    | image                                | cirros (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)            |
    | key_name                             | None                                                     |
    | name                                 | test-instance1                                           |
    | os-extended-volumes:volumes_attached | []                                                       |
    | progress                             | 0                                                        |
    | project_id                           | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         |
    | properties                           |                                                          |
    | security_groups                      | [{u'name': u'default'}]                                  |
    | status                               | ACTIVE                                                   |
    | updated                              | 2020-01-07T15:48:20Z                                     |
    | user_id                              | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         |
    +--------------------------------------+----------------------------------------------------------+
    ```

## Next steps

The following Red Hat document provides more options for configuring ports when using UKCloud for OpenStack.

[*Red Hat OpenStack Platform 10 Command-Line Interface Reference for configuring ports*](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/port.html)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
