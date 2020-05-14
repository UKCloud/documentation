---
title: How to switch to the vCloud Director Legacy UI
description: Tells customer the basic solution on how to SSH to their edge, customers are now aware that it's something they can do, and contact support for the detailed instructions.
services: vmware
author: Adriano Rapisarda
reviewer: George Smith
lastreviewed: 14/05/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: SSH to an edge
toc_fullpath: How To/vmw-how-to-ssh-to-an-edge.md
toc_mdlink: vmw-how-to-ssh-to-an-edge.md
---

# How to SSH to your edge gateway console

## Overview
You can SSH to your edge gateway console for the purpose of running packet captures, ping and many more commands that can assist with troubleshooting.  

To access your edge gateways console via SSH from a VM networked to your edge within vCloud Director, follow these steps: 

## Enable SSH on your edge gateway 

1. In vCloud Director Virtual Datacenters dashboard, select the VDC that contains the edge gateway you want to SSH to. 
2. In the left navigation panel, select Edges.
3. Select the edge you want to SSH to and click Configure Services
4. Navigate to the Edge Settings tab 
5. Ensure that SSH Status is set to Enabled 
6. Under SSH Settings you can change the credentials used to log in.

## Firewall Rules

Source: IP of Nic on VM
Destination: External IP of your edge gateway
Service: 
-	Protocol: TCP
-	Destination port: 22

## From within the VM
From within your VM you will need to SSH to your edge gateways external IP address and login with the credentials specified earlier. This can be done using PuTTY on a Windows VM or by running the relevant command on your Linux VM.


## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
