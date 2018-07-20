---
title: Network configuration for Janet and internet access | UKCloud Ltd
description: Describes the network configuration required to enable connectivity to both the Janet network and the internet
services: connectivity
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Network configuration for Janet and internet access
toc_fullpath: Reference/conn-ref-janet-config-internet.md
toc_mdlink: conn-ref-janet-config-internet.md
---

# Network configuration for Janet and internet access

## Overview

If you want to have connectivity to both the Janet network and the internet for one or more virtual machines (VMs), you'll need to configure custom routing. For smaller implementations you can do this on the VM itself, but for a more scalable solution, we recommend that you configure a virtual network device.

The [Janet routing table](#janet-routing-table) is provided at the end of this document.

## Small or single instance implementation

If you are confident that your environment will not need to scale much past its original size, you can configure a simple implementation to gain a working connection to the Janet network.

To gain access to the Janet network and the internet, the VM must have at least two network interface cards (NICs): one to connect to the internet vCNS Edge and the other to the Janet vCNS Edge. The configuration will differ depending on your operating system (OS), so for details on how to configure this for your OS, refer to the vendor documentation.

Once completed, the topology should look something like that shown in the diagram below.

![Network topology for a simple solution](images/topology_simple.png)

## Scalable implementation

If you need your environment to scale, or you plan to add additional services (such as PSN) in the future, we recommend that you deploy a centralised virtual networking device, such as pfSense, to connect to the multiple upstream vCNS Edge devices.

This solution enables the VMs within your environment to maintain a single NIC with routing configured as a single default gateway and no additional routes. You must configure the custom routing on the centralised virtual network devices. For details on how to do this, refer to the vendor documentation.

The diagram below shows the recommended topology for a scalable solution for Janet and internet connectivity.

![Network topology for a scalable solution](images/topology_scalable.png)

## Janet routing table

5.150.64.0/24
5.150.65.0/24
5.150.66.0/24
5.150.67.0/24
5.150.68.0/24
5.150.69.0/24
5.150.70.0/24
5.150.71.0/24
5.150.74.0/24
5.150.76.0/24
5.150.80.0/20
5.150.96.0/19
5.158.88.0/21
46.60.128.0/17
46.60.252.64/27
46.60.252.96/27
46.254.200.0/21
62.40.111.0/24
62.40.119.0/24
78.40.232.0/21
80.249.48.0/22
80.249.52.0/22
80.249.56.0/24
80.249.57.0/24
80.249.58.0/24
80.249.59.0/24
80.249.60.0/23
81.87.0.0/16
85.12.64.0/18
85.31.136.0/21
85.119.224.0/21
89.207.208.0/21
91.194.152.0/23
91.194.220.0/23
91.198.180.0/24
91.216.181.0/24
91.223.46.0/24
91.224.26.0/23
91.225.16.0/22
91.227.178.0/24
91.231.90.0/23
91.236.56.0/24
91.237.231.0/24
91.240.2.0/23
91.240.24.0/24
91.244.229.0/24
92.42.56.0/21
92.43.64.0/21
92.245.224.0/19
93.93.216.0/21
95.130.144.0/21
128.16.0.0/16
128.40.0.0/16
128.41.0.0/18
128.86.0.0/16
128.232.0.0/16
128.240.0.0/16
128.243.0.0/16
129.11.0.0/16
129.12.0.0/16
129.31.0.0/16
129.67.0.0/16
129.169.0.0/16
129.215.0.0/16
129.234.0.0/16
130.88.0.0/16
130.159.0.0/16
130.209.0.0/16
130.246.0.0/16
131.111.0.0/16
131.227.0.0/16
131.231.0.0/16
131.251.0.0/16
134.36.0.0/16
134.83.0.0/16
134.151.0.0/16
134.219.0.0/16
134.220.0.0/16
134.225.0.0/16
136.148.0.0/16
136.156.0.0/16
137.44.0.0/16
137.50.0.0/16
137.73.0.0/16
137.108.0.0/16
137.195.0.0/16
137.205.0.0/16
137.222.0.0/16
138.37.0.0/16
138.38.0.0/16
138.40.0.0/16
138.250.0.0/15
138.253.0.0/16
139.133.0.0/16
139.153.0.0/16
139.166.0.0/16
139.184.0.0/16
139.222.0.0/16
140.97.0.0/16
141.163.0.0/16
141.170.64.0/19
141.170.96.0/22
141.170.100.0/23
141.241.0.0/16
143.52.0.0/15
143.117.0.0/16
143.167.0.0/16
143.210.0.0/16
143.234.0.0/16
144.32.0.0/16
144.82.0.0/16
144.124.0.0/16
144.173.0.0/16
146.80.0.0/16
146.87.0.0/16
146.97.0.0/16
146.169.0.0/16
146.176.0.0/16
146.179.0.0/16
146.191.0.0/16
146.227.0.0/16
147.143.0.0/16
147.188.0.0/16
147.197.0.0/16
148.79.0.0/16
148.88.0.0/16
148.197.0.0/16
149.155.0.0/16
149.170.0.0/16
150.204.0.0/16
150.237.0.0/16
151.133.238.0/23
152.71.0.0/16
152.78.0.0/16
152.105.0.0/16
155.198.0.0/16
155.245.0.0/16
157.140.0.0/16
157.228.0.0/16
158.94.0.0/16
158.125.0.0/16
158.143.0.0/16
158.223.0.0/16
159.86.128.0/18
159.92.0.0/16
160.5.0.0/16
160.9.0.0/16
161.23.0.0/16
161.73.0.0/16
161.74.0.0/16
161.76.0.0/16
161.112.0.0/16
163.1.0.0/16
163.119.0.0/16
163.119.4.0/24
163.160.0.0/16
163.167.0.0/16
164.11.0.0/16
171.33.192.0/21
171.33.200.0/21
171.33.208.0/21
171.33.216.0/21
185.83.168.0/22
192.5.28.0/24
192.5.29.0/24
192.5.30.0/24
192.12.72.0/24
192.18.195.0/24
192.35.172.0/24
192.41.104.0/21
192.41.112.0/20
192.41.128.0/22
192.68.153.0/24
192.76.6.0/23
192.76.8.0/21
192.76.16.0/20
192.76.32.0/22
192.82.153.0/24
192.84.5.0/24
192.84.75.0/24
192.84.76.0/22
192.84.80.0/22
192.84.212.0/24
192.88.9.0/24
192.88.10.0/24
192.94.235.0/24
192.100.78.0/24
192.100.154.0/24
192.107.168.0/24
192.107.178.0/24
192.108.120.0/24
192.124.46.0/24
192.133.244.0/24
192.146.136.0/24
192.149.111.0/24
192.150.180.0/22
192.150.184.0/24
192.153.213.0/24
192.156.162.0/24
192.160.194.0/24
192.171.128.0/18
192.171.139.0/24
192.171.192.0/21
192.173.1.0/24
192.173.2.0/23
192.173.4.0/24
192.173.128.0/21
192.188.157.0/24
192.188.158.0/24
192.190.201.0/24
192.190.202.0/24
192.195.42.0/23
192.195.105.0/24
192.195.116.0/23
192.195.118.0/24
193.25.116.0/23
193.32.22.0/24
193.35.144.0/24
193.35.232.0/21
193.36.16.0/20
193.36.34.0/24
193.37.225.0/24
193.38.143.0/24
193.39.80.0/21
193.39.172.0/22
193.39.212.0/24
193.60.0.0/14
193.63.66.0/24
193.105.13.0/24
193.105.48.0/24
193.107.116.0/22
193.130.15.0/24
193.133.28.0/23
193.138.86.0/24
193.142.216.0/24
193.200.145.0/24
194.8.54.0/24
194.11.18.0/24
194.32.32.0/20
194.32.69.0/24
194.32.218.0/23
194.34.138.0/24
194.35.93.0/24
194.35.186.0/24
194.35.192.0/19
194.35.241.0/24
194.36.1.0/24
194.36.2.0/23
194.36.8.0/22
194.36.152.0/21
194.61.79.0/24
194.61.92.0/23
194.61.92.0/24
194.61.93.0/24
194.61.94.0/24
194.66.0.0/16
194.80.0.0/14
194.126.247.0/24
194.140.226.0/24
194.140.226.32/30
194.140.226.48/28
194.140.226.64/27
194.140.226.96/27
194.140.226.128/25
194.150.176.0/23
194.165.12.0/23
194.165.28.0/23
194.187.32.0/22
194.213.28.0/24
194.246.79.0/24
195.62.8.0/23
195.88.20.0/23
195.191.66.0/23
195.194.0.0/15
195.195.206.16/28
195.225.188.0/22
195.246.108.0/23
195.246.108.0/24
195.246.109.0/24
212.121.0.0/19
212.121.192.0/19
212.219.0.0/16
217.23.224.0/20
217.65.158.0/24

## For more help

If you need more help, contact UKCloud Support via the [My Calls](https://portal.ukcloud.com/support/my_calls) area of the UKCloud Portal.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.