---
title: How to create and deploy a basic Heat template 
description: Instructions on how to deploy a basic heat template
services: openstack
author: Bryce Nicholls
reviewer:
lastreviewed: 15/02/2019 16:36:23
toc_rootlink: How to
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create and deploy a basic Heat template 
toc_fullpath: How To/ostack-how-create-heat-template.md
toc_mdlink: ostack-how-create-heat-template.md
---

# How to create and deploy a basic Heat template 

## Overview

This articles provides a basic Heat Orchestration template that creates a Heat stack.

This template will create the following and connect them up:

- A network

- A static IP

- A router

- An instance

- A floating IP

- A volume

## The Heat template

> [!NOTE]
> The template must be in yaml format and be saved with the .yaml file extension. You should also make sure that you use the correct indentation.

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
      dns_nameservers: ["8.8.8.8"]
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
> You must source your RC file before you run the commands below.

Create a stack by running the following command in the OpenStack CLI:

```none
openstack stack create -t  <template name> <stack name>
```
    
For example, for the template above, run:
    
```none
$ openstack stack create -t basic-stack.yaml basic-stack
```

This command will return the following:

```none
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
    
## Next steps

This article demonstrated how to create a basic Heat template. You should now be able to create your own templates.

If you want to create template from your existing environment, you can use a tool like Flame that converts an existing environment into a Heat template. For more information, see https://github.com/openstack/flame

The following document provides more options for configuring and creating Heat templates when using UKCloud for OpenStack:

[*Heat Orchestration Template (HOT) specification*](https://docs.openstack.org/heat/rocky/template_guide/hot_spec.html)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
