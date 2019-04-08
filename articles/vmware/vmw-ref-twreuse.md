---
title: TW_REUSE and TW_RECYCLE settings | UKCloud Ltd
description: Describes the role of TW_reuse and TW_recycle settings on edge gateways, and how these may affect TCP connections in some scenarios.
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: TW_REUSE and TW_RECYCLE settings
toc_fullpath: Reference/vmw-ref-twreuse.md
toc_mdlink: vmw-ref-twreuse.md
---

# TW_REUSE and TW_RECYCLE settings

Recent releases of the VMware edge gateway networking component have the `TW_REUSE` and `TW_RECYCLEe` settings enabled on all interfaces by default. When an edge is redeployed, the configuration reverts to these default settings. These settings are designed to reduce the amount of time TCP connections states are left open, following the cessation of user data traffic flowing across the socket. The reuse and recycle options differ slightly in their operation, with the recycle option being more problematic for devices behind NAT rules.  Both of these settings involve a mechanism by which the TIME-WAIT state of the TCP connection is shortened, allowing the server in the client-server relationship (for example, your edge gateway load balancer) to regain ephemeral ports at a faster rate.  

`TW_REUSE` uses server-side time-stamps to allow the server to use a time-wait socket port number for outbound communications once the time-stamp is larger than the last received packet. The use of these time-stamps allows duplicate packets or delayed packets from the old connection to be discarded safely.

`TW_RECYCLE` uses the same server-side time-stamps, however it affects both inbound and outbound connections. This is useful when the server is the first party to initiate connection closure. This allows a new client inbound connection from the source IP to the server. Due to this difference, it causes issues where client devices are behind NAT devices, as multiple devices attempting to contact the server may be unable to establish a connection until the Time-Wait state has aged out in its entirety.

For a further explanation of the reuse and recycle settings, refer to the following link:

http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html 

Due to the implementation of both of these settings by default, there are instances where TCP sockets are closed prematurely. This is particularly noticeable where a large amount of NAT rules or Load balancers are configured on the edge gateway, with moderate to high traffic throughput. Depending on how the client application layer is designed to handle such interruptions in network layer communications, this may manifest to end users as application hangs or crashes.

These settings can be configured by customers with the appropriate permissions through My VMs > Edge Gateway > System Control Settings.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.