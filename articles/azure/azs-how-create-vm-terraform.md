---
title: How to create a virtual machine using Terraform | UKCloud Ltd
description: Learn how to create a VM using Terraform on Azure Stack
services: azure-stack
author: Chris Black
reviewer: Alexa Evans
lastreviewed: 11/07/2019 9:00:00

toc_rootlink: Users
toc_sub1: How To
toc_sub2: Create a Virtual Machine
toc_sub3:
toc_sub4:
toc_title: Create a virtual machine - Terraform
toc_fullpath: Users/How To/Create a Virtual Machine/azs-how-create-vm-terraform.md
toc_mdlink: azs-how-create-vm-terraform.md
---

# How to create a virtual machine using Terraform on Azure Stack

This document explains how to create a VM using the **azurestack** Terraform provider with Service Principal Name authentication.

## Prerequisites

Prerequisites from a Windows-based external client.

- Terraform executable

  - [Download Terraform](https://www.terraform.io/downloads.html)

- An active Azure *Subscription* (required to create SPN if you want to use the same SPN for both Azure and Azure Stack)

- Service Principal Name

  - [How To create Service Principal Name for Azure Stack](azs-how-create-spn-powershell.md)

## Official Documentation

- [Azure Stack Provider Website](https://www.terraform.io/docs/providers/azurestack)

- [Azure Stack Provider GitHub Repository](https://github.com/terraform-providers/terraform-provider-azurestack)

# How to use Terraform with Azure Stack

## Authentication

In order to authenticate with Terraform you will need to have a valid Service Principal Name (SPN) - how to create one is described in [Prerequisites](#prerequisites).

> [!NOTE]
> You only need your Service Principal Name (SPN) to be assigned to your Azure Stack subscription, despite what official Terraform documentation says.

The process of authentication can be handled in one of two ways, either as **Environment Variables** or in the **Provider Block**.

[Environment Variables Option](#example-of-environment-variables) - you can create your **terraform plan** by putting only the plan itself into `example.tf` and then keep `variables.tf` separate. You have to declare the actual values in the `terraform.tfvars` file. This is the file that you will need to populate with your actual credential details.

> [!NOTE]
> You can also put the content of `variables.tf` in the `example.tf` at the top of the file.

[Provider Block Option](#example-of-provider-block) - you can create your **terraform plan** by putting everything in one `example.tf` file, which then contains your Provider and variables settings explicitly in said plan.

Official [Variables Guide](https://www.terraform.io/intro/getting-started/variables.html)

### Example of How Variables are Used in Terraform

#### `variables.tf`

  ```hcl
  variable "arm_endpoint" {}
  variable "subscription_id" {}
  variable "client_id" {}
  variable "client_secret" {}
  variable "tenant_id" {}
  ```

#### `main.tf`

  ```hcl
  provider "azurestack" {
    arm_endpoint    = "${var.arm_endpoint}"
    subscription_id = "${var.subscription_id}"
    client_id       = "${var.client_id}"
    client_secret   = "${var.client_secret}"
    tenant_id       = "${var.tenant_id}"
  }
  ```

#### `terraform.tfvars`

  ```hcl
  # Configure the Azure Stack Provider
  arm_endpoint    = "https://management.{region}.{domain}"
  subscription_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  client_id       = "{applicationId}@{tenantDomain}"
  client_secret   = "{applicationSecret}"
  tenant_id       = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  ```

#### Argument Reference

- `arm_endpoint` - The Azure Resource Manager API Endpoint for your Azure Stack instance. This will be **`https://management.{region}.{domain}`**.

> [!NOTE]
> For UKCloud Region it is **`https://management.frn00006.azure.ukcloud.com`**.

- `subscription_id` - The ID of your Azure Stack Subscription.

- `client_id` - The Application GUID that you configured your Service Principal Name (SPN) to use.

- `client_secret` - The Application password that you configured your Service Principal Name (SPN) to use.

- `tenant_id` - The tenant ID of your Azure Active Directory tenant domain. It can either be the actual GUID or your Azure Active Directory tenant domain name.

## Creating a VM

The examples that follow show how to create VM's using Terraform. The code changes depending on whether you are creating a VM with an unmanaged disk or a managed disk. Select the the type of disk you want to use to update the examples below with the appropriate code.

## Declare Variables

| Variable Name        | Variable Description                                                                                                        | Input                                                        |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| \$arm_endpoint       | The Azure Resource Manager API Endpoint for your Azure Stack instance. This will be https://management.{region}.{domain}.   | <form oninput="result.value=arm_endpoint.value" id="arm_endpoint" style="display:inline;"><input type="text" id="arm_endpoint" name="arm_endpoint" style="display:inline;" placeholder="https://management.{region}.{domain}"/></form> |
| \$subscription_id    | The ID of your Azure Stack Subscription.    | <form oninput="result.value=subscription_id.value" id="subscription_id" style="display:inline;"><input type="text" id="subscription_id" name="subscription_id" style="display:inline;" placeholder="xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"/></form> |
| \$client_id    | The Application GUID that you configured your Service Principal Name (SPN) to use.    | <form oninput="result.value=client_id.value" id="client_id" style="display:inline;"><input type="text" id="client_id" name="client_id" style="display:inline;" placeholder="{applicationId}@{tenantDomain}"/></form> |
| \$client_secret    | The Application password that you configured your Service Principal Name (SPN) to use.    | <form oninput="result.value=client_secret.value" id="client_secret" style="display:inline;"><input type="text" id="client_secret" name="client_secret" style="display:inline;" placeholder="{applicationPassword}"/></form> |
| \$tenant_id    | The tenant ID of your Azure Active Directory tenant domain. It can either be the actual GUID or your Azure Active Directory tenant domain name. | <form oninput="result.value=tenant_id.value" id="tenant_id" style="display:inline;"><input type="text" id="tenant_id" name="tenant_id" style="display:inline;" placeholder="xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"/></form> |
| \$vm_count           | The number of VM's you wish to create    | <form oninput="result.value=vm_count.value" id="vm_count" style="display:inline;"><input type="text" id="vm_count" name="vm_count" style="display:inline;" placeholder="1"/></form> |
| \$vm_username        | The username you wish to create with the VM    | <form oninput="result.value=vm_username.value" id="vm_username" style="display:inline;"><input type="text" id="vm_username" name="vm_username" style="display:inline;" placeholder="user"/></form> |
| \$vm_password        | The password you wish to assign to the VM    | <form oninput="result.value=vm_password.value" id="vm_password" style="display:inline;"><input type="text" id="vm_password" name="vm_password" style="display:inline;" placeholder="Password123!"/></form> |
| \$vm_image    | The Operating System you wish to use    | <form onchange="result.value=vm_image.value" id="vm_image" style="display: inline;"><select name="vm_image" id="vm_image" style="display: inline;"><option value="OpenLogic/CentOS/6.10/latest">CentOS-based 6.10</option><option value="OpenLogic/CentOS/6.9/latest">CentOS-based 6.9</option><option value="OpenLogic/CentOS/7.3/latest">CentOS-based 7.3</option><option value="OpenLogic/CentOS/7.5/latest" selected>CentOS-based 7.5</option><option value="Canonical/UbuntuServer/14.04.5-LTS/latest">Ubuntu Server 14.04 LTS</option><option value="Canonical/UbuntuServer/16.04-LTS/latest">Ubuntu Server 16.04 LTS</option><option value="Canonical/UbuntuServer/18.04-LTS/latest">Ubuntu Server 18.04 LTS</option><option value="MicrosoftWindowsServer/WindowsServerSemiAnnual/Datacenter-Core-1709-with-Containers-smalldisk/latest">Windows Server, version 1709 with Containers - Pay as you use</option><option value="MicrosoftSQLServer/SQL2016SP1-WS2016/SQLDEV/latest">Free License: SQL Server 2016 SP1 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP2-WS2016/SQLDEV/latest">Free License: SQL Server 2016 SP2 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP2-WS2016/Express/latest">Free License: SQL Server 2016 SP2 Express on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2017-SLES12SP2/SQLDEV/latest">Free SQL Server License: SQL Server 2017 Developer on SLES 12 SP2</option><option value="MicrosoftSQLServer/SQL2017-WS2016/SQLDEV/latest">Free SQL Server License: SQL Server 2017 Developer on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2017-SLES12SP2/Express/latest">Free SQL Server License: SQL Server 2017 Express on SLES 12 SP2</option><option value="MicrosoftSQLServer/SQL2017-WS2016/Express/latest">Free SQL Server License: SQL Server 2017 Express on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP1-WS2016/Enterprise/latest">SQL Server 2016 SP1 Enterprise on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP1-WS2016/Standard/latest">SQL Server 2016 SP1 Standard on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP2-WS2016/Enterprise/latest">SQL Server 2016 SP2 Enterprise on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2016SP2-WS2016/Standard/latest">SQL Server 2016 SP2 Standard on Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2017-SLES12SP2/Enterprise/latest">SQL Server 2017 Enterprise on SLES 12 SP2</option><option value="MicrosoftSQLServer/SQL2017-WS2016/Enterprise/latest">SQL Server 2017 Enterprise Windows Server 2016</option><option value="MicrosoftSQLServer/SQL2017-SLES12SP2/Standard/latest">SQL Server 2017 Standard on SLES 12 SP2</option><option value="/MicrosoftSQLServer/SQL2017-WS2016/Standard/latest">SQL Server 2017 Standard on Windows Server 2016</option><option value="MicrosoftWindowsServer/WindowsServer/2012-Datacenter/latest">Windows Server 2012 Datacenter - Pay as you use</option><option value="MicrosoftWindowsServer/WindowsServer/2012-R2-Datacenter/latest">Windows Server 2012 R2 Datacenter - Pay as you use</option><option value="MicrosoftWindowsServer/WindowsServer/2016-Datacenter/latest">Windows Server 2016 Datacenter - Pay-as-you-use</option><option value="MicrosoftWindowsServer/WindowsServer/2016-Datacenter-Server-Core/latest">Windows Server 2016 Datacenter - Server Core - Pay as you use</option><option value="MicrosoftWindowsServer/WindowsServer/2016-Datacenter-with-Containers/latest">Windows Server 2016 Datacenter - with Containers - Pay as you use</option><option value="MicrosoftWindowsServer/WindowsServer/2019-Datacenter/latest">Windows Server 2019 Datacenter</option><option value="MicrosoftWindowsServer/WindowsServer/2019-Datacenter-with-Containers/latest">Windows Server 2019 Datacenter with Containers</option><option value="MicrosoftWindowsServer/WindowsServer/2019-Datacenter-Core/latest">Windows Server 2019 Datacenter Core</option><option value="MicrosoftWindowsServer/WindowsServer/2019-Datacenter-Core-with-Containers/latest">Windows Server 2019 Datacenter Core with Containers</option></select></form> |
| \$instance_size    | Size of the virtual machine to be created    | <form onchange="result.value=vm_size.value" id="vm_size" style="display: inline;" ><select name="vm_size" id="vm_size" style="display: inline;"><optgroup label="Basic A"><option value="Basic_A0">Basic A0</option><option value="Basic_A1">Basic A1</option><option value="Basic_A2">Basic A2</option><option value="Basic_A3">Basic A3</option><option value="Basic_A4">Basic A4</option></optgroup><optgroup label="Standard A"><option value="Standard_A0">Standard A0</option><option value="Standard_A1">Standard A1</option><option value="Standard_A2">Standard A2</option><option value="Standard_A3">Standard A3</option><option value="Standard_A4">Standard A4</option><option value="Standard_A5">Standard A5</option><option value="Standard_A6">Standard A6</option><option value="Standard_A7">Standard A7</option></optgroup><optgroup label="Av2-Series"><option value="Standard_A1_v2">Standard A1 v2</option><option value="Standard_A2_v2">Standard A2 v2</option><option value="Standard_A4_v2">Standard A4 v2</option><option value="Standard_A8_v2">Standard A8 v2</option><option value="Standard_A2m_v2">Standard A2m v2</option><option value="Standard_A4m_v2">Standard A4m v2</option><option value="Standard_A8m_v2">Standard A8m v2</option></optgroup><optgroup label="D-Series"><option value="Standard_D1">Standard D1</option><option value="Standard_D2">Standard D2</option><option value="Standard_D3">Standard D3</option><option value="Standard_D4">Standard D4</option><option value="Standard_D11">Standard D11</option><option value="Standard_D12">Standard D12</option><option value="Standard_D13">Standard D13</option><option value="Standard_D14">Standard D14</option></optgroup><optgroup label="Dv2-Series"><option value="Standard_D1_v2">Standard D1 v2</option><option value="Standard_D2_v2">Standard D2 v2</option><option value="Standard_D3_v2">Standard D3 v2</option><option value="Standard_D4_v2">Standard D4 v2</option><option value="Standard_D5_v2">Standard D5 v2</option><option value="Standard_D11_v2">Standard D11 v2</option><option value="Standard_D12_v2">Standard D12 v2</option><option value="Standard_D13_v2">Standard D13 v2</option><option value="Standard_D14_v2">Standard D14 v2</option></optgroup><optgroup label="DS-Series"><option value="Standard_DS1">Standard DS1</option><option value="Standard_DS2">Standard DS2</option><option value="Standard_DS3">Standard DS3</option><option value="Standard_DS4">Standard DS4</option><option value="Standard_DS11">Standard DS11</option><option value="Standard_DS12">Standard DS12</option><option value="Standard_DS13">Standard DS13</option><option value="Standard_DS14">Standard DS14</option></optgroup><optgroup label="DSv2-Series"><option value="Standard_DS1_v2">Standard DS1 v2</option><option value="Standard_DS2_v2" selected>Standard DS2 v2</option><option value="Standard_DS3_v2">Standard DS3 v2</option><option value="Standard_DS4_v2">Standard DS4 v2</option><option value="Standard_DS5_v2">Standard DS5 v2</option><option value="Standard_DS11_v2">Standard DS11 v2</option><option value="Standard_DS12_v2">Standard DS12 v2</option><option value="Standard_DS13_v2">Standard DS13 v2</option><option value="Standard_DS14_v2">Standard DS14 v2</option></optgroup><optgroup label="F-Series"><option value="Standard_F1">Standard F1</option><option value="Standard_F2">Standard F2</option><option value="Standard_F4">Standard F4</option><option value="Standard_F8">Standard F8</option><option value="Standard_F16">Standard F16</option></optgroup><optgroup label="Fs-Series"><option value="Standard_F1s">Standard F1s</option><option value="Standard_F2s">Standard F2s</option><option value="Standard_F4s">Standard F4s</option><option value="Standard_F8s">Standard F8s</option><option value="Standard_F16s">Standard F16s</option></optgroup><optgroup label="Fsv2-Series"><option value="Standard_F2s_v2">Standard F2s v2</option><option value="Standard_F4s_v2">Standard F4s v2</option><option value="Standard_F8s_v2">Standard F8s v2</option><option value="Standard_F16s_v2">Standard F16s v2</option><option value="Standard_F32s_v2">Standard F32s v2</option><option value="Standard_F64s_v2">Standard F64s v2</option></optgroup></select></form> |

## [Windows VM](#tab/tabid-1)

## [Linux VM](#tab/tabid-2)

***
> [!IMPORTANT]
> This example is only the `main.tf` file. You will still need the `variables.tf` and `terraform.tfvars` files as shown in the following section

### Defining the Required Azure Stack Resources in the `main.tf` File

> [!TIP]
> Resource attributes such as "name" can also be hardcoded as opposed to through the use of variables, allowing for the use of `main.tf` without the external variable files.

### [Windows VM with Managed Disks](#tab/tabid-a/tabid-1)

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "${var.arm_endpoint}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  tenant_id       = "${var.tenant_id}"
}

resource "random_string" "rg-affix" {
  length  = 4
  special = false
  number  = true
  upper   = false
  lower   = true
}

# Create a resource group
resource "azurestack_resource_group" "rg" {
  name     = "rg${random_string.rg-affix.result}"
  location = "frn00006"

  tags = {
    environment = "Production"
  }
}

resource "azurestack_network_security_group" "nsg" {
  name                = "${azurestack_resource_group.rg.name}-SecurityGroup"
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"

  security_rule {
    name                        = "rdp"
    priority                    = "100"
    direction                   = "Inbound"
    access                      = "Allow"
    protocol                    = "tcp"
    source_port_range           = "*"
    destination_port_range      = "3389"
    source_address_prefix       = "*"
    destination_address_prefix  = "*"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_network" "virtual-network" {
  name                = "${azurestack_resource_group.rg.name}-VirtualNetwork"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"
}

resource "azurestack_subnet" "subnet1" {
  name                            = "${azurestack_resource_group.rg.name}-Subnet1"
  resource_group_name             = "${azurestack_resource_group.rg.name}"
  virtual_network_name            = "${azurestack_virtual_network.virtual-network.name}"
  address_prefix                  = "10.0.2.0/24"
  network_security_group_id       = "${azurestack_network_security_group.nsg.id}"
}

resource "azurestack_public_ip" "public-ip" {
  count                         = "${var.vm_count}"
  name                          = "public-ip-${count.index + 1}"
  location                      = "${azurestack_resource_group.rg.location}"
  resource_group_name           = "${azurestack_resource_group.rg.name}"
  public_ip_address_allocation  = "static"
}

resource "azurestack_network_interface" "nic" {
  name                                  = "${azurestack_resource_group.rg.name}-NIC${count.index + 1}"
  count                                 = "${var.vm_count}"
  location                              = "${azurestack_resource_group.rg.location}"
  resource_group_name                   = "${azurestack_resource_group.rg.name}"

  ip_configuration {
    name                            = "nic-ip-config1"
    subnet_id                       = "${azurestack_subnet.subnet1.id}"
    private_ip_address_allocation   = "dynamic"
    public_ip_address_id            = "${element(azurestack_public_ip.public-ip.*.id, count.index)}"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_machine" "vm" {
  count                 = "${var.vm_count}"
  name                  = "vm-${count.index + 1}"
  location              = "${azurestack_resource_group.rg.location}"
  resource_group_name   = "${azurestack_resource_group.rg.name}"
  network_interface_ids = ["${element(azurestack_network_interface.nic.*.id, count.index)}"]
  vm_size               = "${var.vm_size}"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "${element(split("/", var.vm_image_string), 0)}"
    offer     = "${element(split("/", var.vm_image_string), 1)}"
    sku       = "${element(split("/", var.vm_image_string), 2)}"
    version   = "${element(split("/", var.vm_image_string), 3)}"
  }

  storage_os_disk {
    name                = "vm-${count.index + 1}-OS-Disk"
    caching             = "ReadWrite"
    managed_disk_type   = "Standard_LRS"
    create_option       = "FromImage"
  }

  # Optional data disks
  storage_data_disk {
    name                = "vm-${count.index + 1}-Data-Disk"
    disk_size_gb        = "100"
    managed_disk_type   = "Standard_LRS"
    create_option       = "Empty"
    lun                 = 0
  }

  os_profile {
    computer_name  = "host${count.index + 1}"
    admin_username = "${var.admin_username}"
    admin_password = "${var.admin_password}"
  }

  os_profile_windows_config {
  }

  tags = "${azurestack_resource_group.rg.tags}"
}
</code></pre>

### [Windows VM with Unmanaged Disks](#tab/tabid-b/tabid-1)

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "${var.arm_endpoint}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  tenant_id       = "${var.tenant_id}"
}

resource "random_string" "rg-affix" {
  length  = 4
  special = false
  number  = true
  upper   = false
  lower   = true
}

# Create a resource group
resource "azurestack_resource_group" "rg" {
  name     = "rg${random_string.rg-affix.result}"
  location = "frn00006"

  tags = {
    environment = "Production"
  }
}

resource "azurestack_network_security_group" "nsg" {
  name                = "${azurestack_resource_group.rg.name}-SecurityGroup"
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"

  security_rule {
    name                        = "rdp"
    priority                    = "100"
    direction                   = "Inbound"
    access                      = "Allow"
    protocol                    = "tcp"
    source_port_range           = "*"
    destination_port_range      = "3389"
    source_address_prefix       = "*"
    destination_address_prefix  = "*"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_network" "virtual-network" {
  name                = "${azurestack_resource_group.rg.name}-VirtualNetwork"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"
}

resource "azurestack_subnet" "subnet1" {
  name                            = "${azurestack_resource_group.rg.name}-Subnet1"
  resource_group_name             = "${azurestack_resource_group.rg.name}"
  virtual_network_name            = "${azurestack_virtual_network.virtual-network.name}"
  address_prefix                  = "10.0.2.0/24"
  network_security_group_id       = "${azurestack_network_security_group.nsg.id}"
}

resource "azurestack_public_ip" "public-ip" {
  count                         = "${var.vm_count}"
  name                          = "public-ip-${count.index + 1}"
  location                      = "${azurestack_resource_group.rg.location}"
  resource_group_name           = "${azurestack_resource_group.rg.name}"
  public_ip_address_allocation  = "static"
}

resource "azurestack_network_interface" "nic" {
  name                                  = "${azurestack_resource_group.rg.name}-NIC${count.index + 1}"
  count                                 = "${var.vm_count}"
  location                              = "${azurestack_resource_group.rg.location}"
  resource_group_name                   = "${azurestack_resource_group.rg.name}"

  ip_configuration {
    name                            = "nic-ip-config1"
    subnet_id                       = "${azurestack_subnet.subnet1.id}"
    private_ip_address_allocation   = "dynamic"
    public_ip_address_id            = "${element(azurestack_public_ip.public-ip.*.id, count.index)}"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_storage_account" "storage-account" {
  count                             = "${var.vm_count}"
  name                              = "${azurestack_resource_group.rg.name}accsa${count.index + 1}"
  resource_group_name               = "${azurestack_resource_group.rg.name}"
  location                          = "${azurestack_resource_group.rg.location}"
  account_tier                      = "Standard"
  account_replication_type          = "LRS"

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_storage_container" "storage-container" {
  count                             = "${var.vm_count}"
  name                              = "vhds${count.index + 1}"
  resource_group_name               = "${azurestack_resource_group.rg.name}"
  storage_account_name              = "${element(azurestack_storage_account.storage-account.*.name, count.index)}"
  container_access_type             = "private"
}

resource "azurestack_virtual_machine" "vm" {
  count                 = "${var.vm_count}"
  name                  = "vm-${count.index + 1}"
  location              = "${azurestack_resource_group.rg.location}"
  resource_group_name   = "${azurestack_resource_group.rg.name}"
  network_interface_ids = ["${element(azurestack_network_interface.nic.*.id, count.index)}"]
  vm_size               = "${var.vm_size}"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "${element(split("/", var.vm_image_string), 0)}"
    offer     = "${element(split("/", var.vm_image_string), 1)}"
    sku       = "${element(split("/", var.vm_image_string), 2)}"
    version   = "${element(split("/", var.vm_image_string), 3)}"
  }

  storage_os_disk {
    name                = "vm-${count.index + 1}-OS-Disk"
    vhd_uri             = "${element(azurestack_storage_account.storage-account.*.primary_blob_endpoint, count.index)}${element(azurestack_storage_container.storage-container.*.name, count.index)}/vm-${count.index + 1}-osdisk.vhd"
    caching             = "ReadWrite"
    create_option       = "FromImage"
  }

  # Optional data disks
  storage_data_disk {
    name                = "vm-${count.index + 1}-Data-Disk"
    vhd_uri             = "${element(azurestack_storage_account.storage-account.*.primary_blob_endpoint, count.index)}${element(azurestack_storage_container.storage-container.*.name, count.index)}/vm-${count.index} + 1}-datadisk.vhd"
    disk_size_gb        = "100"
    create_option       = "Empty"
    lun                 = 0
  }

  os_profile {
    computer_name  = "host${count.index + 1}"
    admin_username = "${var.admin_username}"
    admin_password = "${var.admin_password}"
  }

  os_profile_windows_config {
  }

  tags = "${azurestack_resource_group.rg.tags}"
}
</pre></code>

### [Linux VM with Managed Disks](#tab/tabid-a/tabid-2)

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "${var.arm_endpoint}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  tenant_id       = "${var.tenant_id}"
}

resource "random_string" "rg-affix" {
  length  = 4
  special = false
  number  = true
  upper   = false
  lower   = true
}

# Create a resource group
resource "azurestack_resource_group" "rg" {
  name     = "rg${random_string.rg-affix.result}"
  location = "frn00006"

  tags = {
    environment = "Production"
  }
}

resource "azurestack_network_security_group" "nsg" {
  name                = "${azurestack_resource_group.rg.name}-SecurityGroup"
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"

  security_rule {
    name                        = "ssh"
    priority                    = "100"
    direction                   = "Inbound"
    access                      = "Allow"
    protocol                    = "tcp"
    source_port_range           = "*"
    destination_port_range      = "22"
    source_address_prefix       = "*"
    destination_address_prefix  = "*"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_network" "virtual-network" {
  name                = "${azurestack_resource_group.rg.name}-VirtualNetwork"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"
}

resource "azurestack_subnet" "subnet1" {
  name                            = "${azurestack_resource_group.rg.name}-Subnet1"
  resource_group_name             = "${azurestack_resource_group.rg.name}"
  virtual_network_name            = "${azurestack_virtual_network.virtual-network.name}"
  address_prefix                  = "10.0.2.0/24"
  network_security_group_id       = "${azurestack_network_security_group.nsg.id}"
}

resource "azurestack_public_ip" "public-ip" {
  count                         = "${var.vm_count}"
  name                          = "public-ip-${count.index + 1}"
  location                      = "${azurestack_resource_group.rg.location}"
  resource_group_name           = "${azurestack_resource_group.rg.name}"
  public_ip_address_allocation  = "static"
}

resource "azurestack_network_interface" "nic" {
  name                                  = "${azurestack_resource_group.rg.name}-NIC${count.index + 1}"
  count                                 = "${var.vm_count}"
  location                              = "${azurestack_resource_group.rg.location}"
  resource_group_name                   = "${azurestack_resource_group.rg.name}"

  ip_configuration {
    name                            = "nic-ip-config1"
    subnet_id                       = "${azurestack_subnet.subnet1.id}"
    private_ip_address_allocation   = "dynamic"
    public_ip_address_id            = "${element(azurestack_public_ip.public-ip.*.id, count.index)}"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_machine" "vm" {
  count                 = "${var.vm_count}"
  name                  = "vm-${count.index + 1}"
  location              = "${azurestack_resource_group.rg.location}"
  resource_group_name   = "${azurestack_resource_group.rg.name}"
  network_interface_ids = ["${element(azurestack_network_interface.nic.*.id, count.index)}"]
  vm_size               = "${var.vm_size}"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "${element(split("/", var.vm_image_string), 0)}"
    offer     = "${element(split("/", var.vm_image_string), 1)}"
    sku       = "${element(split("/", var.vm_image_string), 2)}"
    version   = "${element(split("/", var.vm_image_string), 3)}"
  }

  storage_os_disk {
    name                = "vm-${count.index + 1}-OS-Disk"
    caching             = "ReadWrite"
    managed_disk_type   = "Standard_LRS"
    create_option       = "FromImage"
  }

  # Optional data disks
  storage_data_disk {
    name                = "vm-${count.index + 1}-Data-Disk"
    disk_size_gb        = "100"
    managed_disk_type   = "Standard_LRS"
    create_option       = "Empty"
    lun                 = 0
  }

  os_profile {
    computer_name  = "host${count.index + 1}"
    admin_username = "${var.admin_username}"
    admin_password = "${var.admin_password}"
  }

  os_profile_linux_config {
    disable_password_authentication = false
  }

  tags = "${azurestack_resource_group.rg.tags}"
}
</code></pre>

### [Linux VM with Unmanaged Disks](#tab/tabid-b/tabid-2)

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "${var.arm_endpoint}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  tenant_id       = "${var.tenant_id}"
}

resource "random_string" "rg-affix" {
  length  = 4
  special = false
  number  = true
  upper   = false
  lower   = true
}

# Create a resource group
resource "azurestack_resource_group" "rg" {
  name     = "rg${random_string.rg-affix.result}"
  location = "frn00006"

  tags = {
    environment = "Production"
  }
}

resource "azurestack_network_security_group" "nsg" {
  name                = "${azurestack_resource_group.rg.name}-SecurityGroup"
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"

  security_rule {
    name                        = "ssh"
    priority                    = "100"
    direction                   = "Inbound"
    access                      = "Allow"
    protocol                    = "tcp"
    source_port_range           = "*"
    destination_port_range      = "22"
    source_address_prefix       = "*"
    destination_address_prefix  = "*"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_virtual_network" "virtual-network" {
  name                = "${azurestack_resource_group.rg.name}-VirtualNetwork"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.rg.location}"
  resource_group_name = "${azurestack_resource_group.rg.name}"
}

resource "azurestack_subnet" "subnet1" {
  name                            = "${azurestack_resource_group.rg.name}-Subnet1"
  resource_group_name             = "${azurestack_resource_group.rg.name}"
  virtual_network_name            = "${azurestack_virtual_network.virtual-network.name}"
  address_prefix                  = "10.0.2.0/24"
  network_security_group_id       = "${azurestack_network_security_group.nsg.id}"
}

resource "azurestack_public_ip" "public-ip" {
  count                         = "${var.vm_count}"
  name                          = "public-ip-${count.index + 1}"
  location                      = "${azurestack_resource_group.rg.location}"
  resource_group_name           = "${azurestack_resource_group.rg.name}"
  public_ip_address_allocation  = "static"
}

resource "azurestack_network_interface" "nic" {
  name                                  = "${azurestack_resource_group.rg.name}-NIC${count.index + 1}"
  count                                 = "${var.vm_count}"
  location                              = "${azurestack_resource_group.rg.location}"
  resource_group_name                   = "${azurestack_resource_group.rg.name}"

  ip_configuration {
    name                            = "nic-ip-config1"
    subnet_id                       = "${azurestack_subnet.subnet1.id}"
    private_ip_address_allocation   = "dynamic"
    public_ip_address_id            = "${element(azurestack_public_ip.public-ip.*.id, count.index)}"
  }

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_storage_account" "storage-account" {
  count                             = "${var.vm_count}"
  name                              = "${azurestack_resource_group.rg.name}accsa${count.index + 1}"
  resource_group_name               = "${azurestack_resource_group.rg.name}"
  location                          = "${azurestack_resource_group.rg.location}"
  account_tier                      = "Standard"
  account_replication_type          = "LRS"

  tags = "${azurestack_resource_group.rg.tags}"
}

resource "azurestack_storage_container" "storage-container" {
  count                             = "${var.vm_count}"
  name                              = "vhds${count.index + 1}"
  resource_group_name               = "${azurestack_resource_group.rg.name}"
  storage_account_name              = "${element(azurestack_storage_account.storage-account.*.name, count.index)}"
  container_access_type             = "private"
}

resource "azurestack_virtual_machine" "vm" {
  count                 = "${var.vm_count}"
  name                  = "vm-${count.index + 1}"
  location              = "${azurestack_resource_group.rg.location}"
  resource_group_name   = "${azurestack_resource_group.rg.name}"
  network_interface_ids = ["${element(azurestack_network_interface.nic.*.id, count.index)}"]
  vm_size               = "${var.vm_size}"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "${element(split("/", var.vm_image_string), 0)}"
    offer     = "${element(split("/", var.vm_image_string), 1)}"
    sku       = "${element(split("/", var.vm_image_string), 2)}"
    version   = "${element(split("/", var.vm_image_string), 3)}"
  }

  storage_os_disk {
    name                = "vm-${count.index + 1}-OS-Disk"
    vhd_uri             = "${element(azurestack_storage_account.storage-account.*.primary_blob_endpoint, count.index)}${element(azurestack_storage_container.storage-container.*.name, count.index)}/vm-${count.index + 1}-osdisk.vhd"
    caching             = "ReadWrite"
    create_option       = "FromImage"
  }

  # Optional data disks
  storage_data_disk {
    name                = "vm-${count.index + 1}-Data-Disk"
    vhd_uri             = "${element(azurestack_storage_account.storage-account.*.primary_blob_endpoint, count.index)}${element(azurestack_storage_container.storage-container.*.name, count.index)}/vm-${count.index} + 1}-datadisk.vhd"
    disk_size_gb        = "100"
    create_option       = "Empty"
    lun                 = 0
  }

  os_profile {
    computer_name  = "host${count.index + 1}"
    admin_username = "${var.admin_username}"
    admin_password = "${var.admin_password}"
  }

  os_profile_linux_config {
    disable_password_authentication = false
  }

  tags = "${azurestack_resource_group.rg.tags}"
}
</pre></code>

***

### Assign Values to the Variables in the `terraform.tfvars` File Through the Table Found at the Top of the Document

<pre><code class="language-hcl">
  arm_endpoint    = "<output form="arm_endpoint" name="result" style="display: inline;">https://management.{region}.{domain}</output>"
  subscription_id = "<output form="subscription_id" name="result" style="display: inline;">xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx</output>"
  client_id       = "<output form="client_id" name="result" style="display: inline;">{applicationId}@{tenantDomain}</output>"
  client_secret   = "<output form="client_secret" name="result" style="display: inline;">{applicationPassword}</output>"
  tenant_id       = "<output form="tenant_id" name="result" style="display: inline;">xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx</output>"

  vm_count        = <output form="vm_count" name="result" style="display: inline;">1</output>
  vm_image_string = "<output form="vm_image" name="result" style="display: inline;">OpenLogic/CentOS/7.5/latest</output>"
  vm_size         = "<output form="vm_size" name="result" style="display: inline;">Standard_DS2_v2</output>"

  admin_username  = "<output form="vm_username" name="result" style="display: inline;">user</output>"
  admin_password  = "<output form="vm_password" name="result" style="display: inline;">Password123!</output>"
</code></pre>

### Declare the Variables Here in the `variables.tf` File For Use in the Main Script

<pre><code class="language-hcl">
  variable "arm_endpoint" {
    type = "string"
  }

  variable "subscription_id" {
    type = "string"
  }

  variable "client_id" {
    type = "string"
  }

  variable "client_secret" {
    type = "string"
  }

  variable "tenant_id" {
    type = "string"
  }

  variable "admin_username" {
    type     = "string"
    default  = "username"
  }

  variable "admin_password" {
    type     = "string"
    default  = "Password1234!"
  }

  variable "vm_count" {
    default  = 1
  }

  variable "vm_image_string" {
    type    = "string"
  }

  variable "vm_size" {
    type    = "string"
    default = "Standard_D2_v2"
  }
</code></pre>

## How to Execute a Terraform Plan

> [!TIP]
> Terraform by default scans your execution directory and looks for all `tf` files.

From a PowerShell prompt, navigate to the directory that contains your `tf` files (including your variable files) and run the following commands:

```powershell
# Check if your environment is setup correctly
.\terraform.exe init

Initializing provider plugins...

The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.azurestack: version = "~> 0.8"
* provider.random: version = "~> 2.1"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

```powershell
# Verify your plan
.\terraform.exe plan -var-file=C:\<DirectoryName>\testvars.tfvars
# Apply your plan
.\terraform.exe apply -var-file=C:\<DirectoryName>\testvars.tfvars
```

> [!NOTE]
> You can also add `-auto-approve` to the apply command for it to not ask you to apply changes for full automation.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
