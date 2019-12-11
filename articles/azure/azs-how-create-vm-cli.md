---
title: How to create a virtual machine using Azure CLI | UKCloud Ltd
description: Provides help for creating a virtual machine on UKCloud for Microsoft Azure using Azure CLI
services: azure-stack
author: Bailey Lawson
reviewer: BaileyLawson
lastreviewed: 14/03/2019 17:00:00

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

Before you begin, ensure your Azure CLI environment is set up as detailed in [Configure the Azure Stack Hub user's PowerShell environment](azs-how-configure-cli.md).

## Creating a virtual machine

When you've created the resource group, you must choose which image template to use for your VM. To obtain a list of available images run the following command:

```azurecli
az vm image list --all --output table

You are retrieving all the images from server which could take more than a minute. To shorten the wait, provide '--publisher', '--offer' or '--sku'. Partial name search is supported.
Offer                Publisher               Sku                                   Urn                                                                                          Version
-------------------  ----------------------  ------------------------------------  -------------------------------------------------------------------------------------------  -----------------
UbuntuServer         Canonical               14.04.5-LTS                           Canonical:UbuntuServer:14.04.5-LTS:14.04.20180818                                            14.04.20180818
UbuntuServer         Canonical               16.04-LTS                             Canonical:UbuntuServer:16.04-LTS:16.04.20180831                                              16.04.20180831
UbuntuServer         Canonical               18.04-LTS                             Canonical:UbuntuServer:18.04-LTS:18.04.20180911                                              18.04.20180911
CentOS               OpenLogic               6.9                                   OpenLogic:CentOS:6.9:6.9.20180118                                                            6.9.20180118
CentOS               OpenLogic               6.10                                  OpenLogic:CentOS:6.10:6.10.20180803                                                          6.10.20180803
CentOS               OpenLogic               7.3                                   OpenLogic:CentOS:7.3:7.3.20170925                                                            7.3.20170925
CentOS               OpenLogic               7.5                                   OpenLogic:CentOS:7.5:7.5.20180815                                                            7.5.20180815
RHEL                 RedHat                  7.5                                   RedHat:RHEL:7.5:7.5.20182111                                                                 7.5.20182111
KaliServer           KaliLinux               14.04.12-LTS                          KaliLinux:KaliServer:14.04.12-LTS:1.0.0                                                      1.0.0
WindowsServer        MicrosoftWindowsServer  2012-Datacenter                       MicrosoftWindowsServer:WindowsServer:2012-Datacenter:3.127.20180216                          3.127.20180216
WindowsServer        MicrosoftWindowsServer  2012-R2-Datacenter                    MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:4.127.20180912                       4.127.20180912
WindowsServer        MicrosoftWindowsServer  2016-Datacenter                       MicrosoftWindowsServer:WindowsServer:2016-Datacenter:2016.127.20180912                       2016.127.20180912
WindowsServer        MicrosoftWindowsServer  2016-Datacenter-with-Containers       MicrosoftWindowsServer:WindowsServer:2016-Datacenter-with-Containers:2016.127.20180912       2016.127.20180912
WindowsServer        MicrosoftWindowsServer  2016-Datacenter-Server-Core           MicrosoftWindowsServer:WindowsServer:2016-Datacenter-Server-Core:2016.127.20180717           2016.127.20180717
WindowsServer        MicrosoftWindowsServer  2019-Datacenter                       MicrosoftWindowsServer:WindowsServer:2019-Datacenter:2019.127.20190521                       2019.127.20190521
WindowsServer        MicrosoftWindowsServer  2019-Datacenter-with-Containers       MicrosoftWindowsServer:WindowsServer:2019-Datacenter-with-Containers:2019.127.20190521       2019.127.20190521
WindowsServer        MicrosoftWindowsServer  2019-Datacenter-Core                  MicrosoftWindowsServer:WindowsServer:2019-Datacenter-Core:2019.127.20190521                  2019.127.20190521
WindowsServer        MicrosoftWindowsServer  2019-Datacenter-Core-with-Containers  MicrosoftWindowsServer:WindowsServer:2019-Datacenter-Core-with-Containers:2019.127.20190521  2019.127.20190521
SQL2014SP2-WS2012R2  MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2014SP2-WS2012R2:Web:12.20.0                                           12.20.0
SQL2016SP1-WS2016    MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2016SP1-WS2016:Web:13.1.900310                                         13.1.900310
SQL2016SP1-WS2016    MicrosoftSQLServer      SQLDEV                                MicrosoftSQLServer:SQL2016SP1-WS2016:SQLDEV:13.1.900310                                      13.1.900310
SQL2016SP1-WS2016    MicrosoftSQLServer      Standard                              MicrosoftSQLServer:SQL2016SP1-WS2016:Standard:13.1.900310                                    13.1.900310
SQL2016SP1-WS2016    MicrosoftSQLServer      Enterprise                            MicrosoftSQLServer:SQL2016SP1-WS2016:Enterprise:13.1.900310                                  13.1.900310
SQL2016SP2-WS2016    MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2016SP2-WS2016:Web:13.1.900310                                         13.1.900310
SQL2016SP2-WS2016    MicrosoftSQLServer      SQLDEV                                MicrosoftSQLServer:SQL2016SP2-WS2016:SQLDEV:13.1.900310                                      13.1.900310
SQL2016SP2-WS2016    MicrosoftSQLServer      Express                               MicrosoftSQLServer:SQL2016SP2-WS2016:Express:13.1.900310                                     13.1.900310
SQL2016SP2-WS2016    MicrosoftSQLServer      Standard                              MicrosoftSQLServer:SQL2016SP2-WS2016:Standard:13.1.900310                                    13.1.900310
SQL2016SP2-WS2016    MicrosoftSQLServer      Enterprise                            MicrosoftSQLServer:SQL2016SP2-WS2016:Enterprise:13.1.900310                                  13.1.900310
SQL2017-WS2016       MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2017-WS2016:Web:14.0.1000320                                           14.0.1000320
SQL2017-WS2016       MicrosoftSQLServer      SQLDEV                                MicrosoftSQLServer:SQL2017-WS2016:SQLDEV:14.0.1000204                                        14.0.1000204
SQL2017-WS2016       MicrosoftSQLServer      Express                               MicrosoftSQLServer:SQL2017-WS2016:Express:14.0.1000320                                       14.0.1000320
SQL2017-WS2016       MicrosoftSQLServer      Standard                              MicrosoftSQLServer:SQL2017-WS2016:Standard:14.0.1000320                                      14.0.1000320
SQL2017-WS2016       MicrosoftSQLServer      Enterprise                            MicrosoftSQLServer:SQL2017-WS2016:Enterprise:14.0.1000320                                    14.0.1000320
SQL2017-SLES12SP2    MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2017-SLES12SP2:Web:14.0.1000320                                        14.0.1000320
SQL2017-SLES12SP2    MicrosoftSQLServer      SQLDEV                                MicrosoftSQLServer:SQL2017-SLES12SP2:SQLDEV:14.0.1000320                                     14.0.1000320
SQL2017-SLES12SP2    MicrosoftSQLServer      Express                               MicrosoftSQLServer:SQL2017-SLES12SP2:Express:14.0.1000320                                    14.0.1000320
SQL2017-SLES12SP2    MicrosoftSQLServer      Standard                              MicrosoftSQLServer:SQL2017-SLES12SP2:Standard:14.0.1000320                                   14.0.1000320
SQL2017-SLES12SP2    MicrosoftSQLServer      Enterprise                            MicrosoftSQLServer:SQL2017-SLES12SP2:Enterprise:14.0.1000320                                 14.0.1000320
SQL2017-Ubuntu1604   MicrosoftSQLServer      Web                                   MicrosoftSQLServer:SQL2017-Ubuntu1604:Web:14.0.1000320                                       14.0.1000320
```

### Declare variables

| Variable          | Variable description                                               | Input            |
|-------------------|--------------------------------------------------------------------|------------------|
| --resource-group  | Name of the resource group to be created                           | <form oninput="result.value=resourcegroup.value;result2.value=resourcegroup.value;result3.value=resourcegroup.value;result4.value=resourcegroup.value" id="resourcegroup" style="display: inline;"><input type="text" id="resourcegroup" name="resourcegroup" style="display: inline;" placeholder="MyResourceGroup"/></form> |
| --location        | The location to deploy the VM in                                  | <form oninput="result.value=location.value;result2.value=location.value;result3.value=location.value" id="location" style="display: inline;"><input type="text" id="location" name="location" style="display: inline;" placeholder="frn00006"/></form> |
| --name            | Name of the virtual machine to be created                          | <form oninput="result.value=vmname.value;result2.value=vmname.value" id="vmname" style="display: inline;"><input type="text" id="vmname" name="vmname" style="display: inline;" placeholder="MyVM"/></form> |
| --image           | The image template to deploy the virtual machine from              | <form onchange="result.value=vmimage.value" id="vmimage" style="display: inline;"><select name="vmimage" id="vmimage" style="display: inline;"><option value="Canonical:UbuntuServer:14.04.5-LTS:14.04.20180818">Ubuntu Server 14.04 LTS</option><option value="Canonical:UbuntuServer:16.04-LTS:16.04.20180831">Ubuntu Server 16.04 LTS</option><option value="Canonical:UbuntuServer:18.04-LTS:18.04.20180911">Ubuntu Server 18.04 LTS</option><option value="OpenLogic:CentOS:6.9:6.9.20180118">CentOS-based 6.9</option><option value="OpenLogic:CentOS:6.10:6.10.20180803">CentOS-based 6.10</option><option value="OpenLogic:CentOS:7.3:7.3.20170925">CentOS-based 7.3</option><option value="OpenLogic:CentOS:7.5:7.5.20180815" selected>CentOS-based 7.5</option><option value="RedHat:RHEL:7.5:7.5.20182111">Red Hat Enterprise Linux 7.5</option><option value="KaliLinux:KaliServer:14.04.12-LTS:1.0.0">Kali Linux</option><option value="MicrosoftWindowsServer:WindowsServer:2012-Datacenter:3.127.20180216">Windows Server 2012 Datacenter - Pay as you use</option><option value="MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:4.127.20180912">Windows Server 2012 R2 Datacenter - Pay as you use</option><option value="MicrosoftWindowsServer:WindowsServer:2016-Datacenter:2016.127.20180912">Windows Server 2016 Datacenter - Pay-as-you-use</option><option value="MicrosoftWindowsServer:WindowsServer:2016-Datacenter-with-Containers:2016.127.20180912 ">Windows Server 2016 Datacenter - with Containers - Pay as you use</option><option value="MicrosoftWindowsServer:WindowsServer:2016-Datacenter-Server-Core:2016.127.20180717">Windows Server 2016 Datacenter - Server Core - Pay as you use</option><option value="MicrosoftWindowsServer:WindowsServer:2019-Datacenter:2019.127.20190521">Windows Server 2019 Datacenter</option><option value="MicrosoftWindowsServer:WindowsServer:2019-Datacenter-with-Containers:2019.127.20190521">Windows Server 2019 Datacenter with Containers</option><option value="MicrosoftWindowsServer:WindowsServer:2019-Datacenter-Core:2019.127.20190521">Windows Server 2019 Datacenter Core</option><option value="MicrosoftWindowsServer:WindowsServer:2019-Datacenter-Core-with-Containers:2019.127.20190521">Windows Server 2019 Datacenter Core with Containers</option><option value="MicrosoftWindowsServer:WindowsServerSemiAnnual:Datacenter-Core-1709-with-Containers-smalldisk:1709.30.20180912">Windows Server, version 1709 with Containers - Pay as you use</option><option value="MicrosoftSQLServer:SQL2016SP1-WS2016:SQLDEV:13.1.900310">Free License: SQL Server 2016 SP1 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP1-WS2016:Standard:13.1.900310">SQL Server 2016 SP1 Standard on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP1-WS2016:Enterprise:13.1.900310">SQL Server 2016 SP1 Enterprise on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP2-WS2016:SQLDEV:13.1.900310 ">Free License: SQL Server 2016 SP2 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP2-WS2016:Express:13.1.900310">Free License: SQL Server 2016 SP2 Express on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP2-WS2016:Standard:13.1.900310">SQL Server 2016 SP2 Standard on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2016SP2-WS2016:Enterprise:13.1.900310">SQL Server 2016 SP2 Enterprise on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2017-WS2016:SQLDEV:14.0.1000204">Free SQL Server License: SQL Server 2017 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2017-WS2016:Express:14.0.1000320">Free SQL Server License: SQL Server 2017 Express on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2017-WS2016:Standard:14.0.1000320">SQL Server 2017 Standard on Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2017-WS2016:Enterprise:14.0.1000320">SQL Server 2017 Enterprise Windows Server 2016</option><option value="MicrosoftSQLServer:SQL2017-SLES12SP2:SQLDEV:14.0.1000320">Free SQL Server License: SQL Server 2017 Developer on SLES 12 SP2</option><option value="MicrosoftSQLServer:SQL2017-SLES12SP2:Express:14.0.1000320">Free SQL Server License: SQL Server 2017 Express on SLES 12 SP2</option><option value="MicrosoftSQLServer:SQL2017-SLES12SP2:Standard:14.0.1000320">SQL Server 2017 Standard on SLES 12 SP2</option><option value="MicrosoftSQLServer:SQL2017-SLES12SP2:Enterprise:14.0.1000320">SQL Server 2017 Enterprise on SLES 12 SP2</option></select></form> |
| --admin-username  | Username of the VM to be created                                   | <form oninput="result.value=vmusername.value" id="vmusername" style="display: inline;"><input type="text" id="vmusername" name="vmusername" style="display: inline;" placeholder="username"/></form> |
| --admin-password  | Password of the VM to be created                                   | <form oninput="result.value=vmpassword.value" id="vmpassword" style="display: inline;"><input type="text" id="vmpassword" name="vmpassword" style="display: inline;" placeholder="Password123!"/></form> |

### Create a resource group

Before creating a VM, you must create a resource group to deploy the VM to. If you've already created the resource group, you can skip this step.

<pre><code class="lang-azurecli hljs">az group create --name '<output form="resourcegroup" name="result" style="display: inline;">MyResourceGroup</output>' --location '<output form="location" name="result" style="display: inline;">frn00006</output>'</code></pre>

### Create the virtual machine

After you've selected which image you want to use, run the following command. The 'az vm create' command will also create any resources required for the VM (for example, a network interface card, a network security group, and so on):

<pre><code class="lang-azurecli hljs">az vm create --resource-group '<output form="resourcegroup" name="result2" style="display: inline;">MyResourceGroup</output>' --name '<output form="vmname" name="result" style="display: inline;">MyVM</output>' --image '<output form="vmimage" name="result" style="display: inline;">OpenLogic:CentOS:7.5:7.5.20180815</output>' --admin-username '<output form="vmusername" name="result" style="display: inline;">username</output>' --admin-password '<output form="vmpassword" name="result" style="display: inline;">Password123!</output>' --location '<output form="location" name="result2" style="display: inline;">frn00006</output>'</code></pre>

This will produce the following output:
<pre><code class="lang-azurecli hljs">- Running ...
{
  "fqdns": "",
  "id": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/<output form="resourcegroup" name="result3" style="display: inline;">MyResourceGroup</output>/providers/Microsoft.Compute/virtualMachines/<output form="vmname" name="result2" style="display: inline;">MyVM</output>",
  "location": "<output form="location" name="result3" style="display: inline;">frn00006</output>",
  "macAddress": "111111111111",
  "powerState": "VM running",
  "privateIpAddress": "10.0.0.1",
  "publicIpAddress": "11.111.111.11",
  "resourceGroup": "<output form="resourcegroup" name="result4" style="display: inline;">MyResourceGroup</output>"
}</code></pre>

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
