---
title: How to create load balancing services on UKCloud for OpenStack | UKCloud Ltd
description: Provides information to deploy a load balancing solution (LBaaS) within your OpenStack environment
services: openstack
author: Sue Highmoor

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create load balancing services
toc_fullpath: How To/ostack-how-create-load-balancer.md
toc_mdlink: ostack-how-create-load-balancer.md
---

# Creating load-balancing services on UKCloud for OpenStack

## Overview

Although OpenStack's Neutron project does support load-balancing natively, our testing has shown that this is not a highly available solution which could result in the loss of traffic flow to a project in the event of a host failure, this view has been echoed by many other OpenStack vendors. In order to mitigate against this scenario, we have created the following article, which enables you to easily deploy our load-balancing solution within your OpenStack projects.

Benefits of this solution include:

- Highly Available implementation of an OpenStack load-balancing solution

- Advanced load-balancing services provided by HAProxy (for example, SSL support, session stickiness)

- Fully scripted repeatable deployment (HEAT template available on the UKCloud Knowledge Centre alongside this article)

## Caveats

This solution utilises HAProxy and keepalived, both of which are complicated software products. This guide will help you set up UKCloud for OpenStack to enable you to deploy a load-balancing solution based on keepalived and haProxy, but additional tuning and configuration may be required depending on your intended setup. Please take a moment to have a read through the documentation for both the keepalived project -
<http://www.keepalived.org/documentation.html> and the HAProxy project - <http://www.haproxy.org>.

## Prerequisites

This guide assumes that you have the following already configured in your environment:

- A router connected to the internet external network.

- A jump server with required security groups to allow you to SSH to that server and to SSH inside your environment.

- At least two servers inside your environment running a web server to test the HAProxy configuration against.

- The Ubuntu 16.04 amd64 image (id: `b8617599-495f-4d00-abf9-57b431caeb4c`) has been used throughout this document.

## Implementation steps

1. Create the network in which your front edge load balancers sit.

    **Command:** `neutron net-create <network-name>`

    **Example:** `neutron net-create FrontEdge`

    **Result:**

    ![Results of net-create command](images/ostack-neutron-net-create.png)

2. Create the subnet in which your load-balancers will be placed (we recommend creating a `/28`, as four addresses will be used internally by OpenStack).

    **Command:** `neutron subnet-create --name <subnetName> <networkName> <cidr>`

    **Example:** `neutron subnet-create --name FrontEdge FrontEdge 192.168.0.0/28`

    **Result:**

    ![Results of subnet-create command](images/ostack-neutron-subnet-create.png)

3. Attach your internet router to the newly created network.

    - Locate your router.

        **Command:** `neutron router-list`

        **Result:**

        ![Results of router-list command](images/ostack-neutron-router-list.png)

    - Add the Interface to the router.

        **Command:** `neutron router-interface-add <RouterName> <NetworkName>`

        **Example:** `neutron router-interface-add R1 FrontEdge`

        **Result:**

        ![Results of router-inteface-add command](images/ostack-neutron-router-interface-add.png)

4. Create a port to be used as the VIP addresses.

    **Command:** `neutron port-create --fixed-ip subnet_id=<subnetName>,ip_address=<vipIP> <NetworkName>`

    **Example:** `neutron port-create --fixed-ip subnet_id=FrontEdge,ip_address=192.168.0.5 FrontEdge`

    **Result:**

    ![Results of port-create command](images/ostack-neutron-port-create.png)

    Make a note of the ID and the IP you set as you will need this information later.

5. Associate Floating IP with newly created VIP port.

    - Get a new floating IP.

        **Command:** `neutron floatingip-create <floatingIPPoolName>`

        **Example:** `neutron floatingip-create internet`

        **Result:**

        ![Results of floatingip_create command](images/ostack-neutron-floatingip-create.png)

        Make a note of the ID you will need it in the next step.

    - Associate the floating IP to VIP port-create.

        **Command:** `neutron floatingip-associate <floatingIPID> <portID>`

        **Example:** `neutron floatingip-associate 247b7001-f145-4a61-8988-7bdf61915e4f6653ae36-6a30-4eed-8c5a-da567c92610d`

        **Result:**

        ![Results of floatingip-associate command](images/ostack-neutron-floatingip-associate.png)

6. Create and boot the two load-balancer instances.

    - Get a list of availability zones to ensure resilience of the LB pair.

        **Command:** `nova availability-zone-list`

        **Result:**

        ![Results for availability-zone-list command](images/ostack-nova-availability-zone-list.png)

        Make a note of available zones, as you'll want to boot one server into one zone and the other into the other.

    - Get available flavours.

        **Command:** `nova flavor-list`

        **Result:**

        ![Results of flavor-list command](images/ostack-nova-flavor-list.png)

        Make a note of the ID of the flavour you want to use.

    - Get available images.

        **Command:** `glance image-list`

        **Result:**

        ![Results of image-list command](images/ostack-glance-image-list.png)

        Make a note of the ID of the image you want to boot.

    - Boot the first server.

        **Command:** `nova boot --flavor <flavorID> --image <imageID> --key-name <keyName> --availability-zone <availabilityZone> --nic net-name=<networkName>,v4-fixed-ip=<fixedIP> <name>`

        **Example:** `nova boot --flavor 43746228-0c64-4e33-b39d-c3f91bedb7cc --image b8617599-495f-4d00-abf9-57b431caeb4c --key-name user-laptop --availability-zone 0000c-1 --nic net-name=FrontEdge,v4-fixed-ip=192.168.0.6 LB1-node1`

        **Result:**

        ![Results of boot command](images/ostack-nova-boot.png)

    - Boot the second server, remembering to change the availability zone and the IP address of the server.

        **Command:** `nova boot --flavor <flavorID> --image <imageID> --key-name <key-name> --availability-zone <availability-zone> --nic net-name=<networkName>,v4-fixed-ip=<fixedIP> <name>`

        **Example:** `nova boot --flavor 43746228-0c64-4e33-b39d-c3f91bedb7cc --image b8617599-495f-4d00-abf9-57b431caeb4c --key-name user-laptop --availability-zone 0000c-2 --nic net-name=FrontEdge,v4-fixed-ip=192.168.0.7 LB1-node2`

        **Result:**

        ![Results of second boot command](images/ostack-nova-boot.png)

7. Update ports to allow traffic to be sent via VIP IP.

    - Get the port IDs that need updating.

        **Command:** `neutron port-list network-id <network-id>`

        **Example:** `neutron port-list --network-id e1909abc-9ce6-45e7-8a3a-9c53d7c4af2b`

        **Result:**

        ![Results of port-list command](images/ostack-neutron-port-list.png)

        You need to locate the ports that are attached to your load-balancer instances. Once you've located them, note down the IDs as you'll need them in the next steps.

    - Update the first port to allow traffic to pass on VIP IP.

        **Command:** `neutron update-port <portID> --allowed_address_pairs list=true type=dict ip_address=<VIPIP>`

        **Example:** `neutron port-update cbe044c6-8501-4e9f-9b68-7bedc45cd0ee -allowed_address_pairs list=true type=dict ip_address=192.168.0.5`

        **Result:**

        ![Results of update-port command](images/ostack-neutron-update-port.png)

    - Update the second port to allow traffic to pass on VIP IP.

        **Command:** `neutron update-port <portID> --allowed_address_pairs list=true type=dict ip_address=<VIPIP>`

        **Example:** `neutron port-update 4dd06a59-6c18-4996-b80f-7c1577a1595e -allowed_address_pairs list=true type=dict ip_address=192.168.0.5`

        **Result:**

        ![Results of second update-port command](images/ostack-neutron-update-port2.png)

8. Patch and install keepalived and HAProxy.

    - SSH to your jump server, and then through to the first load-balancer.

    - Run a system update.

           sudo apt-get update -y
           sudo apt-get upgrade -y

    - Install keepalived and HAProxy.

           sudo apt-get install haproxy keepalived -y

9. Configure keepalived.

    - Copy example configuration to keepalive config directory.

           sudo cp /usr/share/doc/keepalived/samples/keepalived.conf.vrrp /etc/keepalived/keepalivd.conf

    - Delete lines 36 through 79 in `/etc/keepalived/keepalived.conf`.

    - Set the email address you want to receive notifications in the `Notification_email` section.

    - Set the `notification_email_from` email addresses.

    - Set the SMTP server IP.

    - Set the interface name to be the name of the first network interface on the server (not loopback).

    - Set the `Router_ID` to a description of the router's function.

    - Set the `auth_pass` to a new secure password (avoid special characters).

    - Remove all items inside the `virtual_ipaddress` section.

    - Add the VIP IP from earlier to the `virtual_ipaddress` section (This is the internal IP NOT the floating IP).

    - Save and exit the file.

    - Take a copy of the file, and transfer it to the second load balancer machine.

10. Enable non-local IP binding on the first load balancer.

    - Add `net.ipv4.ip_forward = 1` to `/etc/sysctl.conf`

    - Add `net.ipv4.ip_nonlocal_bind = 1` to `/etc/sysctl.conf`

    - `sudo sysctl -p`

11. Configure the second load balancer.

    - Place a copy of the first load balancer's `keepalived.conf` into `/etc/keepalived/keepalived.conf`.

    - Edit `/etc/keepalived/keepalived.conf` and make the following changes

        - Change state to BACKUP

        - Change priority to 90

        - Save and exit the file

12. Enable non-local IP binding on the second server.

    - Add `net.ipv4.ip_forward = 1` to `/etc/sysctl.conf`

    - `sudo sysctl -p`

13. Start keepalived on first load balancer.

        sudo service keepalived start

14. Start keepalived on the second load balancer.

        sudo service keepalived start

15. Check to ensure that the VIP IP has come up on the first load balancer.

        ip add -4 -o a

    You should see the VIP showing up in the resulting list.

16. Fail the first load balancer and ensure that the VIP moves to the second load balancer.

17. Configure HAProxy on the first load balancer by adding a frontend and     backend

    - Edit `/etc/haproxy/haproxy.conf`

    - Add the following section to the bottom of the file:

            frontend localnodes
                    bind <VIPIP>:80
                    mode http
                    default_backend nodes

    - Add the following section below the frontend section:

            backend nodes
                   mode http
                   balance roundrobin
                   option forwardfor
                   server <Name> <ServerIP>:<serverPort> check
            server <Name> <ServerIP>:<serverPort> check

    - Copy the changes from the first load balancer to the second load balancer.

    - On both load balancers issue a reload command to hot restart HAProxy and load in the new changes.

            sudo service haproxy reload

18. Set up security groups required for your application, and apply them to the load-balancer servers. You will also need to apply security groups to your backend servers to allow the required traffic to pass from the load-balancer nodes to the required ports on the back-end servers.

19. Testing - Once HAProxy has reloaded on both servers, you should be able to connect to your floating IP address and the content hosted on your web servers should now be visible. Try disabling keepalived on the first load-balancer after a few seconds traffic should flow through to the second load-balancer and your content should still be available.

## Post installation

Depending on the amount of traffic you expect to see, you may need to make  additional tuning changes to your load balancer systems. Usually these changes take the form of increasing the number of available ephemeral ports, and the enablement of `tcp_tw_reuse`. Please do careful research on these settings before making changes. We recommend making these changes on a non-live system and testing before applying these changes to a production system.

You may also wish to investigate keepalived ability to monitor applications on the local system and force a fail over if an application crashes. For example, keepalived can be made to monitor HAProxy and to fail over if HAProxy stops or fails. Instructions on how to do this can be found in the keepalived  documentation.

## First free load balancer

To meet the UKCloud for OpenStack G-Cloud Service Definition commitment of one free load balancer per per project, we will credit the first two instances in a project which match the following criteria:

  Region | Flavor ID | Image ID | Instance name prefix
  -------|-----------|----------|---------------------
  COR00005 | 43746228-0c64-4e33-b39d-c3f91bedb7cc | b8617599-495f-4d00-abf9-57b431caeb4c | LB1-

> [!NOTE]
> UKCloud has the right to remove this free solution with 30 days notice once the default OpenStack LBaaS service has been made available.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.