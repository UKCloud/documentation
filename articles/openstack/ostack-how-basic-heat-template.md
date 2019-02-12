---
title: How to create and deploy a basic heat template  | UKCloud Ltd
description: Instructions on how to deploy a basic heat template
services: openstack
author: Bryce Nicholls
toc_rootlink: How to
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create and deploy a basic heat template 
toc_fullpath: How To/ostack-how-static-ip.md
toc_mdlink: ostack-how-basic-heat-template.md
---

# How to create and deploy a basic heat template 

## Overview

This is a basic heat ochestration template create a heat stack.

This template will create the following and connect them up.
- A network
- A static IP
- A router
- An instance
- A floating IP
- A volume

## The heat template

> [!NOTE]
> Make sure you check the indentation and file extension. It needs to be in yaml format.

```yaml
heat_template_version: 2016-10-14

parameters:
  flavor:
    type: string
    description: I am using the smallest flavor available because i'll be spinning up a cirros instance. You can use an environment file to override the defaults.
    default: t1.tiny
    constraints:
      - custom_constraint: nova.flavor
  image:
    type: string
    description: This uses a cirros image but you can create an environment file to change the default values.
    default: cirros
    constraints:
      - custom_constraint: glance.image
  heat_volume_size:
    type: number
    label: Volume Size (GB)
    description: External Volume Size in GB
    default: 1

resources:
  heat_volume:
    type: OS::Cinder::Volume
    properties:
      size: { get_param: heat_volume_size }
  heat_volume_attachement:
    type: OS::Cinder::VolumeAttachment
    properties:
      volume_id: { get_resource: heat_volume }
      instance_uuid: { get_resource: heat_server }
  heat_network:
    type: OS::Neutron::Net
    properties:
      admin_state_up: true
      name: heat_network
  heat_network_subnet:
    type: OS::Neutron::Subnet
    properties:
      network: { get_resource: heat_network }
      cidr: "10.1.1.0/24"
      dns_nameservers: ["155.231.231.3"]
      gateway_ip: "10.1.1.1"
      ip_version: 4
  heat_router:
    type: OS::Neutron::Router
    properties:
      external_gateway_info: { network: internet }
      name: heat_router
  heat_router_interface:
    type: OS::Neutron::RouterInterface
    properties:
      router_id: { get_resource: heat_router }
      subnet: { get_resource: heat_network_subnet }
  heat_server_port:
    type: OS::Neutron::Port
    properties:
      network: { get_resource: heat_network }
      fixed_ips:
        - subnet_id: { get_resource: heat_network_subnet }
  heat_server:
    type: OS::Nova::Server
    properties:
      name: heat_server
      flavor: { get_param: flavor }
      image: { get_param: image }
      networks:
        - port: { get_resource: heat_server_port}
  heat_server_public_ip:
    type: OS::Neutron::FloatingIP
    properties:
      floating_network: "internet"
  heat_server_ip_assoc:
    type: OS::Neutron::FloatingIPAssociation
    properties:
      floatingip_id: { get_resource: heat_server_public_ip }
      port_id: { get_resource: heat_server_port }


outputs:
  heat_server_public_ip:
    description: IP Address of the deployed heat_server instance
    value: { get_attr: [ heat_server_public_ip, floating_ip_address ]}   
```

## Deploying the stack

> [!NOTE]
> You will need to source your RC file before you run the commands below.

1. Create a stack by running the following command in the OpenStack CLI:

    ```
    $ openstack stack create -t basic-stack.yaml basic-stack
    ```
    SYNTAX:
    ```
    openstack stack create -t  <template name> <stack name>
    ```

    This command will return the following:
    
    ```
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | id                  | 6be269ec-d22f-4cf0-bf04-df71cc6dcf75 |
    | stack_name          | basic-stack                          |
    | description         | No description                       |
    | creation_time       | 2019-02-12T15:58:20Z                 |
    | updated_time        | None                                 |
    | stack_status        | CREATE_IN_PROGRESS                   |
    | stack_status_reason | Stack CREATE started                 |
    +---------------------+--------------------------------------+
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
