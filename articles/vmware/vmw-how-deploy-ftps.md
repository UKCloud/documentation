---
title: Deploying an FTPS server for data transfer | UKCloud Ltd
description: FTPS is a protocol that allows efficient transfer of data in a secure fashion. This document explains how to deploy and configure the UKCloud FTPS server to your UKCloud compute environment to upload data
services: vmware
author: Matt Warner
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: Reference/vmw-how-deploy-ftps.md
toc_mdlink: vmw-how-deploy-ftps.md
---

# Deploying an FTPS server for data transfer

## Deploy Template

1. Login to vCloud director via the UKCloud portal.

![My Cloud](images/my_cloud)

2. Select “Public Catalogs” from the drop down and select “All templates” and search for “ftps”

3. Select the template “UKCloud_Centos_6_FTPS_...” and click “Next”

![Public Catalogs](images/public_catalogs)

4. Name the vApp and choose the datacentre you wish to deploy to.

5. Select the network you wish to deploy to (this network must be connected to the internet).

6. Click next, check “power on” and click finish.

7. Once the deployment is complete open the vApp and take note of the private IP address.

![vApp IP Address](images/vapp_ip_address)

## Configure Firewall

Determine your cloud IP addresses. 

1. Selecting Administration from the top tabs

2. Double-clicking your virtual datacentre

3. Selecting the Edge gateways tab

4. Right clicking your edge gateway and selecting "Properties"

![IP Address Properties](images/ip_properties)

5. Click the Sub-Allocated pools tab and record the IP addresses in the lower corner

6. Click "OK"

![Sub-allocated IP tools](images/sub_allocated_tools)

## Add NAT rules

1. Navigating back to the vShield edge gateway, then right-click it and select "Edge Gateway Services"

2. Clicking the "NAT" tab

3. Click “Add DNAT”

4. Select the external interface “nft….”

5. Add the external IP address recorded above

6. Add the port listed in the table below to both original and translated port

7. Add the private IP address recorded during the virtual machine deployment

![Destination NAT rule](images/nat_rule)

8. Repeat this for each port listed in the table below:

Applied on External IP Protocol Source port Internal IP Translated port 
nft... Public IP TCP 989 FTPS Server private IP 989 
nft... Public IP TCP 990 FTPS Server private IP 990 
nft... Public IP TCP 8080 FTPS Server private IP 8080 

## Add firewall rules

1. Navigating back to the vShield edge gateway, then right-click it and select "Edge Gateway Services"

2. Clicking the "Firewall" tab

3. Clicking "Add" in the bottom right-hand corner

4. Enter the following details:

• Enabled: "Checked"

• Name: "FTPS"

• Source: "37.26.88.70"

• Source port: "any"

• Destination: "The first address from the Sub-Allocated pool list above"

• Destination port from the list below

• Protocol: "TCP"

• Action: "Allow"

• Log Network traffic: "Checked"

5. Click "OK"

![Edit Firewall Rule](images/firewall_rule)

Name Source Protocol Source port Internal IP Translated port 
FTPS 37.26.88.70 TCP Any Public IP 989 
FTPS 37.26.88.70 TCP Any Public IP 990 
FTPS 37.26.88.70 TCP Any Public IP 8080 

## Configure FTPS

Login to the FTPS server and run the following command.
/usr/local/bin/setupFTPS.sh <public ip address> 
e.g.
/usr/local/bin/setupFTPS.sh 83.56.212.12 
Connect with Filezilla

1. Finally configure filezilla with the following settings:

2. Click on “File”  “Site manager”, choose “New Site”

• Host: public IP

• FTP protocol: “FTP…”

• Encryption: “Require implicit FTP over SSL”

• Logon Type: ”Interactive”

• User: ftpuser

3. Click on the “Transfer settings” tab

4. Transfer mode: “Passive”

5. Click “connect”

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved.