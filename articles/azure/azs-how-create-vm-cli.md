---
title: How to create a virtual machine using the Azure CLI | UKCloud Ltd
description: Provides help for creating a virtual machine on UKCloud for Microsoft Azure using Azure CLI
services: azure-stack
author: Bailey Lawson
toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine - CLI
toc_fullpath: Users/How To/Create a Virtual Machine/azs-how-create-vm-cli.md
toc_mdlink: azs-how-create-vm-cli.md
---

# How to create a virtual machine using the Azure CLI

## Overview

With UKCloud for Microsoft Azure, you can leverage the power of Microsoft Azure to create virtual machines (VMs) for your on-premises applications. 
As UKCloud for Microsoft Azure is built on UKCloud’s assured, UK-sovereign multi-cloud platform, those applications can work alongside other cloud platforms, such as Oracle,
VMware and OpenStack, and benefit from native connectivity to non-cloud workloads in Crown Hosting and government community networks, including PSN, HSCN and RLI.

## Prerequisites

Ensure your Azure CLI environment is setup as detailed in [Configure the Azure Stack user's PowerShell environment](azs-how-configure-cli.md).

## Creating a resource group

Before create a VM, you must create a resource group to deploy the VM to. If you've already created the resource group, you can skip this step.

```Bash
az group create --name '<Resource Group Name>' --location 'frn00006'
```

## Creating a virtual machine

When you've created the resource group, you must choose which image template to use for your VM. To obtain a list of available images run the following command:

```Bash
az vm image list --all --output table
You are retrieving all the images from server which could take more than a minute. To shorten the wait, provide '--publisher', '--offer' or '--sku'. Partial name search is supported.
Offer                    Publisher               Sku                Urn                                                                      Version
-----------------------  ----------------------  -----------------  -----------------------------------------------------------------------  -----------------
KaliServer               KaliLinux               14.04.12-LTS       KaliLinux:KaliServer:14.04.12-LTS:1.0.0                                  1.0.0
UbuntuServer             Canonical               14.04.5-LTS        Canonical:UbuntuServer:14.04.5-LTS:14.04.20180818                        14.04.20180818
SQL2016SP1-WS2016        MicrosoftSQLServer      Enterprise         MicrosoftSQLServer:SQL2016SP1-WS2016:Enterprise:13.1.900310              13.1.900310
UbuntuServer             Canonical               16.04-LTS          Canonical:UbuntuServer:16.04-LTS:16.04.201808140                         16.04.201808140
CentOS                   OpenLogic               6.10               OpenLogic:CentOS:6.10:6.10.20180803                                      6.10.20180803
SQL2016SP1-WS2016        MicrosoftSQLServer      SQLDEV             MicrosoftSQLServer:SQL2016SP1-WS2016:SQLDEV:13.1.900310                  13.1.900310
UbuntuServer             Canonical               18.04-LTS          Canonical:UbuntuServer:18.04-LTS:18.04.201808140                         18.04.201808140
SQL2016SP1-WS2016        MicrosoftSQLServer      Standard           MicrosoftSQLServer:SQL2016SP1-WS2016:Standard:13.1.900310                13.1.900310
CentOS                   OpenLogic               6.9                OpenLogic:CentOS:6.9:6.9.20180118                                        6.9.20180118
CentOS                   OpenLogic               7.3                OpenLogic:CentOS:7.3:7.3.20170925                                        7.3.20170925
CentOS                   OpenLogic               7.5                OpenLogic:CentOS:7.5:7.5.20180815                                        7.5.20180815
SQL2016SP2-WS2016        MicrosoftSQLServer      Express            MicrosoftSQLServer:SQL2016SP2-WS2016:Express:13.1.900310                 13.1.900310
WindowsServer            MicrosoftWindowsServer  2016-Datacenter    MicrosoftWindowsServer:WindowsServer:2016-Datacenter:2016.127.20180815   2016.127.20180815
SQL2016SP2-WS2016        MicrosoftSQLServer      SQLDEV             MicrosoftSQLServer:SQL2016SP2-WS2016:SQLDEV:13.1.900310                  13.1.900310
SQL2016SP2-WS2016        MicrosoftSQLServer      Standard           MicrosoftSQLServer:SQL2016SP2-WS2016:Standard:13.1.900310                13.1.900310
SQL2017-SLES12SP2        MicrosoftSQLServer      Enterprise         MicrosoftSQLServer:SQL2017-SLES12SP2:Enterprise:14.0.1000320             14.0.1000320
SQL2017-SLES12SP2        MicrosoftSQLServer      Express            MicrosoftSQLServer:SQL2017-SLES12SP2:Express:14.0.1000320                14.0.1000320
SQL2017-SLES12SP2        MicrosoftSQLServer      SQLDEV             MicrosoftSQLServer:SQL2017-SLES12SP2:SQLDEV:14.0.1000320                 14.0.1000320
SQL2017-SLES12SP2        MicrosoftSQLServer      Standard           MicrosoftSQLServer:SQL2017-SLES12SP2:Standard:14.0.1000320               14.0.1000320
SQL2017-WS2016           MicrosoftSQLServer      Enterprise         MicrosoftSQLServer:SQL2017-WS2016:Enterprise:14.0.1000320                14.0.1000320
SQL2017-WS2016           MicrosoftSQLServer      Express            MicrosoftSQLServer:SQL2017-WS2016:Express:14.0.1000320                   14.0.1000320
SQL2017-WS2016           MicrosoftSQLServer      SQLDEV             MicrosoftSQLServer:SQL2017-WS2016:SQLDEV:14.0.1000204                    14.0.1000204
SQL2017-WS2016           MicrosoftSQLServer      Standard           MicrosoftSQLServer:SQL2017-WS2016:Standard:14.0.1000320                  14.0.1000320
```

After you've decided which image you want to use, run the following command, substituting your own variables where applicable. The 'az vm create' command will also create any resources required for the VM (for example, a network interface card, a network security group, and so on)

```Bash
az vm create --resource-group '<Resource Group Name>' --name '<VM Name>' --image '<Image URN>' --admin-username '<Username>' --admin-password '<password>' --use-unmanaged-disk --location 'frn00006'
```

For example, to create an Ubuntu 18.04-LTS server:

```Bash
az vm create --resource-group 'myResourceGroup' --name 'myVM' --image 'Canonical:UbuntuServer:18.04-LTS:18.04.201808140' --admin-username 'username' --admin-password 'Password1234!' --use-unmanaged-disk --location 'frn00006'


- Running ..
{
  "fqdns": "",
  "id": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM",
  "location": "frn00006",
  "macAddress": "111111111111",
  "powerState": "VM running",
  "privateIpAddress": "10.0.0.1",
  "publicIpAddress": "11.111.111.11",
  "resourceGroup": "myResourceGroup"
}
```

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
