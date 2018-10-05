---
title: How to create static IPs for OpenStack instances  | UKCloud Ltd
description: Instructions on how to create static IPs and assign them to instances
services: openstack
author: Bryce Nicholls
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

    ```
    $ openstack network create testnet
    ```

    This command will return the following:
    
    ```
    +---------------------------+--------------------------------------+
    | Field                     | Value                                |
    +---------------------------+--------------------------------------+
    | admin_state_up            | UP                                   |
    | availability_zone_hints   |                                      |
    | availability_zones        |                                      |
    | created_at                | 2018-09-05T12:20:30Z                 |
    | description               |                                      |
    | dns_domain                | None                                 |
    | id                        | dd4f624a-1101-4b01-a388-308c5972742a |
    | ipv4_address_scope        | None                                 |
    | ipv6_address_scope        | None                                 |
    | is_default                | None                                 |
    | is_vlan_transparent       | None                                 |
    | mtu                       | 1446                                 |
    | name                      | testnet                              |
    | port_security_enabled     | True                                 |
    | project_id                | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | provider:network_type     | None                                 |
    | provider:physical_network | None                                 |
    | provider:segmentation_id  | None                                 |
    | qos_policy_id             | None                                 |
    | revision_number           | 3                                    |
    | router:external           | Internal                             |
    | segments                  | None                                 |
    | shared                    | False                                |
    | status                    | ACTIVE                               |
    | subnets                   |                                      |
    | tags                      |                                      |
    | updated_at                | 2018-09-05T12:20:30Z                 |
    +---------------------------+--------------------------------------+
    ```
    
2. Create a subnet and attach to the network:

    ```
    $ openstack subnet create --network testnet --subnet-range 10.1.1.0/24 testnet-sub
    ```

    This command will return the following:

    ```
    +-------------------+--------------------------------------+
    | Field             | Value                                |
    +-------------------+--------------------------------------+
    | allocation_pools  | 10.1.1.2-10.1.1.254                  |
    | cidr              | 10.1.1.0/24                          |
    | created_at        | 2018-09-05T12:22:46Z                 |
    | description       |                                      |
    | dns_nameservers   |                                      |
    | enable_dhcp       | True                                 |
    | gateway_ip        | 10.1.1.1                             |
    | host_routes       |                                      |
    | id                | fc333721-47c8-4445-871b-d261eb195b41 |
    | ip_version        | 4                                    |
    | ipv6_address_mode | None                                 |
    | ipv6_ra_mode      | None                                 |
    | name              | testnet-sub                          |
    | network_id        | dd4f624a-1101-4b01-a388-308c5972742a |
    | project_id        | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |
    | revision_number   | 2                                    |
    | segment_id        | None                                 |
    | service_types     |                                      |
    | subnetpool_id     | None                                 |
    | tags              |                                      |
    | updated_at        | 2018-09-05T12:22:46Z                 |
    +-------------------+--------------------------------------+
    ```
    
3. Create a port and attach to the network & subnet: 

    ```
    $ openstack port create --network testnet --fixed-ip subnet=testnet-sub,ip-address=10.1.1.10 test-static-ip-1
    ```

    This command will return the following:

    ```
    +-----------------------+--------------------------------------------------------------------------+
    | Field                 | Value                                                                    |
    +-----------------------+--------------------------------------------------------------------------+
    | admin_state_up        | UP                                                                       |
    | allowed_address_pairs |                                                                          |
    | binding_host_id       | None                                                                     |
    | binding_profile       | None                                                                     |
    | binding_vif_details   | None                                                                     |
    | binding_vif_type      | None                                                                     |
    | binding_vnic_type     | normal                                                                   |
    | created_at            | 2018-09-05T12:26:55Z                                                     |
    | data_plane_status     | None                                                                     |
    | description           |                                                                          |
    | device_id             |                                                                          |
    | device_owner          |                                                                          |
    | dns_assignment        | None                                                                     |
    | dns_domain            | None                                                                     |
    | dns_name              | None                                                                     |
    | extra_dhcp_opts       |                                                                          |
    | fixed_ips             | ip_address='10.1.1.10', subnet_id='fc333721-47c8-4445-871b-d261eb195b41' |
    | id                    | f6c6ace7-3e33-4159-a0ce-f9d70ba69bf2                                     |
    | mac_address           | fa:16:3e:4f:70:b6                                                        |
    | name                  | test-static-ip-1                                                         |
    | network_id            | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                         |
    | port_security_enabled | True                                                                     |
    | project_id            | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                         |
    | qos_policy_id         | None                                                                     |
    | revision_number       | 5                                                                        |
    | security_group_ids    | 01ea0a6f-1a39-4196-b798-47db89499379                                     |
    | status                | DOWN                                                                     |
    | tags                  |                                                                          |
    | trunk_details         | None                                                                     |
    | updated_at            | 2018-09-05T12:26:55Z                                                     |
    +-----------------------+--------------------------------------------------------------------------+
    ```

4. Launch an instance with the static IP attached:

    ```
    $ openstack server create --flavor t1.nano --port test-static-ip-1 --image cirros ukc-test --wait
    ```

    This command will return the following:

    ```
    +-----------------------------+----------------------------------------------------------+`
    | Field                       | Value                                                    |`
    +-----------------------------+----------------------------------------------------------+`
    | OS-DCF:diskConfig           | MANUAL                                                   |`
    | OS-EXT-AZ:availability_zone | availability.zone                                        |`
    | OS-EXT-STS:power_state      | Running                                                  |`
    | OS-EXT-STS:task_state       | None                                                     |`
    | OS-EXT-STS:vm_state         | active                                                   |`
    | OS-SRV-USG:launched_at      | 2018-09-05T12:36:32.000000                               |`
    | OS-SRV-USG:terminated_at    | None                                                     |`
    | accessIPv4                  |                                                          |`
    | accessIPv6                  |                                                          |`
    | addresses                   | testnet=10.1.1.10                                        |`
    | adminPass                   | adminPass                                                |`
    | config_drive                |                                                          |`
    | created                     | 2018-09-05T12:36:25Z                                     |`
    | flavor                      | t1.nano (flavor-id)                                      |`
    | hostId                      | host-id                                                  |`
    | id                          | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         |`
    | image                       | cirros (xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    )            |`
    | key_name                    | None                                                     |`
    | name                        | ukc-test                                                 |`
    | progress                    | 0                                                        |`
    | project_id                  | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         |`
    | properties                  |                                                          |`
    | security_groups             | name='default'                                           |`
    | status                      | ACTIVE                                                   |`
    | updated                     | 2018-09-05T12:36:32Z                                     |`
    | user_id                     | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                         |`
    | volumes_attached            |                                                          |`
    +-----------------------------+----------------------------------------------------------+`
    ```
    
## Next steps

The following Red Hat document provides more options for configuring ports when using UKCloud for OpenStack.

[*Red Hat OpenStack Platform 10 Command-Line Interface Reference for configuring ports*](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/port.html)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
