---
title: How to use Octavia LBaaS on UKCloud for OpenStack
description: Provides information on using Octavia Load Balancing as a Service (LBaaS) within your OpenStack environment
services: openstack
author: Blane Bramble
reviewer: 
lastreviewed: 

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use Octavia Load Balancing as a Service
toc_fullpath: How To/ostack-how-use-octavia.md
toc_mdlink: ostack-how-use-octavia.md
---
# Using Octavia Load Balancing as a Service (LBaaS)
> [!NOTE]
> TBD: region restrictions
## Overview

Octavia is the OpenStack Load Balancing as a Service (LBaaS) solution and forms part of the solution to availability and scaling that modern systems require.

Octavia currently supports a number of configurations:

- TCP, HTTP, HTTPS, Terminated HTTP and UDP support
- Source IP, Round-Robin and Least Connections balancing
- Health monitoring using Ping, HTTP, TLS-Hello and UDP

## Prerequisites

### If you intend to manage with the OpenStackCLI

- Octavia uses port 13876 for communication. This port will need to be open to manage Octavia.
- A recent version of the OpenStackCLI if managing vi

## Use Cases

Use cases for Octavia include:

- Scaling out web-site traffic by balancing it over multiple servers
- Increasing availability of a service with active-standby or active-active pools

## Octavia components

Octavia consists of a number of service components that need to be configured as follows:

### Load Balancer

At the top of the Octavia component stack is the Load Balancer. The Octavia Load Balancer connects to an OpenStack network and provides the entry point for traffic. A Load Balancer may be assigned a Floating IP to connect it to internet traffic.

### Listener

An Octavia Listener defines an IP protocol and service that the Load Balancer will accept. This can be TCP, UDP, HTTP or HTTPS (direct or terminated). Each Load Balancer may have multiple listeners to support more than one service (e.g. HTTP and HTTPS).

### Pool

An Octavia Pool defines a list of servers that will accept the traffic 

### Monitor
