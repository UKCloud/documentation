---
title: How to create a VM using Terraform on Azure Stack
description: Learn how to create a VM using Terraform on Azure Stack
services: azure-stack
author: Chris Black
toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a VM using Terraform on Azure Stack
toc_fullpath: Users/How To/azs-how-create-vm-terraform.md
toc_mdlink: azs-how-create-vm-terraform.md
---


# How to create a VM using Terraform on Azure Stack

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

[Provider Block Option](#example-of-provider-block) - you can create your **terraform plan** by putting everything in one `example.tf` file, which then contains your Provider settings explicitly in said plan.

Official [Variables Guide](https://www.terraform.io/intro/getting-started/variables.html)

### Example of Environment Variables

- `variables.tf`

  ```hcl
  variable "arm_endpoint" {}
  variable "subscription_id" {}
  variable "client_id" {}
  variable "client_secret" {}
  variable "tenant_id" {}
  ```

- `example.tf`

  ```hcl
  provider "azurestack" {
    arm_endpoint    = "${var.arm_endpoint}"
    subscription_id = "${var.subscription_id}"
    client_id       = "${var.client_id}"
    client_secret   = "${var.client_secret}"
    tenant_id       = "${var.tenant_id}"
  }
  ```

- `terraform.tfvars`

  ```hcl
  # Configure the Azure Stack Provider
  arm_endpoint    = "https://management.{region}.{domain}"
  subscription_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  client_id       = "{applicationId}@{tenantDomain}"
  client_secret   = "{applicationSecret}"
  tenant_id       = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  ```

### Example of Provider Block

- `example.tf`

  ```hcl
  # Configure the Azure Stack Provider
  provider "azurestack" {
    arm_endpoint    = "https://management.{region}.{domain}"
    subscription_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
    client_id       = "{applicationId}@{tenantDomain}"
    client_secret   = "{applicationPassword}"
    tenant_id       = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  }
  ```

#### Argument Reference

- `arm_endpoint` - The Azure Resource Manager API Endpoint for your Azure Stack instance. This will be **`https://management.frn00006.azure.ukcloud.com`**.

- `subscription_id` - The ID of your Azure Stack Subscription.

- `client_id` - The Application GUID that you configured your Service Principal Name (SPN) to use.

- `client_secret` - The Application password that you configured your Service Principal Name (SPN) to use.

- `tenant_id` - The tenant ID of your Azure Active Directory tenant domain. It can either be the actual GUID or your Azure Active Directory tenant domain name.

## I want to create a VM with:

<form id="diskType" onchange="result.value=name.value;result2.value=name.value">
  <input type="radio" name="name" value=' storage_os_disk {
    name          = "myosdisk1"
    vhd_uri       = "${azurestack_storage_account.test.primary_blob_endpoint}${azurestack_storage_container.test.name}/myosdisk1.vhd"
    caching       = "ReadWrite"
    create_option = "FromImage"
  }' checked>An Unmanaged Disk

  <input type="radio" name="name" value=' storage_os_disk {
    name              = "myosdisk1"
    caching           = "ReadWrite"
    create_option     = "FromImage"
    managed_disk_type = "Standard_LRS"
  }'>A Managed Disk
</form>

## Create a VM with Public IP template - using **Environment Variables** option

> [!IMPORTANT]
> This is only the `example.tf` file. You will still need the `variables.tf` and `terraform.tfvars` files in your folder.

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "${var.arm_endpoint}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  tenant_id       = "${var.tenant_id}"
}

# Create a resource group
resource "azurestack_resource_group" "test" {
  name     = "rg01"
  location = "frn00006"
}

resource "azurestack_public_ip" "test" {
  name                         = "acceptanceTestPublicIp1"
  location                     = "${azurestack_resource_group.test.location}"
  resource_group_name          = "${azurestack_resource_group.test.name}"
  public_ip_address_allocation = "static"

  tags {
    environment = "Production"
  }
}

resource "azurestack_virtual_network" "test" {
  name                = "acctvn"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.test.location}"
  resource_group_name = "${azurestack_resource_group.test.name}"
}

resource "azurestack_subnet" "test" {
  name                 = "acctsub"
  resource_group_name  = "${azurestack_resource_group.test.name}"
  virtual_network_name = "${azurestack_virtual_network.test.name}"
  address_prefix       = "10.0.2.0/24"
}

resource "azurestack_network_interface" "test" {
  name                = "acctni"
  location            = "${azurestack_resource_group.test.location}"
  resource_group_name = "${azurestack_resource_group.test.name}"

  ip_configuration {
    name                          = "testconfiguration1"
    subnet_id                     = "${azurestack_subnet.test.id}"
    private_ip_address_allocation = "dynamic"
    public_ip_address_id          = "${azurestack_public_ip.test.id}"
  }
}

resource "azurestack_storage_account" "test" {
  name                     = "accsa001"
  resource_group_name      = "${azurestack_resource_group.test.name}"
  location                 = "${azurestack_resource_group.test.location}"
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags {
    environment = "staging"
  }
}

resource "azurestack_storage_container" "test" {
  name                  = "vhds"
  resource_group_name   = "${azurestack_resource_group.test.name}"
  storage_account_name  = "${azurestack_storage_account.test.name}"
  container_access_type = "private"
}

resource "azurestack_virtual_machine" "test" {
  name                  = "acctvm"
  location              = "${azurestack_resource_group.test.location}"
  resource_group_name   = "${azurestack_resource_group.test.name}"
  network_interface_ids = ["${azurestack_network_interface.test.id}"]
  vm_size               = "Standard_D2_v2"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "16.04-LTS"
    version   = "latest"
  }

<output form="diskType" name="result" style="display: inline;">  storage_os_disk {
    name          = "myosdisk1"
    vhd_uri       = "${azurestack_storage_account.test.primary_blob_endpoint}${azurestack_storage_container.test.name}/myosdisk1.vhd"
    caching       = "ReadWrite"
    create_option = "FromImage"
  }</output>

  # Optional data disks
  storage_data_disk {
    name          = "datadisk0"
    vhd_uri       = "${azurestack_storage_account.test.primary_blob_endpoint}${azurestack_storage_container.test.name}/datadisk0.vhd"
    disk_size_gb  = "1023"
    create_option = "Empty"
    lun           = 0
  }

  os_profile {
    computer_name  = "hostname"
    admin_username = "testadmin"
    admin_password = "Password1234!"
  }

  os_profile_linux_config {
    disable_password_authentication = false
  }

  tags {
    environment = "staging"
  }
}
</code></pre>

## Create a VM with Public IP template - using **Provider Block** option

<pre><code class="language-hcl">
provider "azurestack" {
  arm_endpoint    = "https://management.{region}.{domain}"
  subscription_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
  client_id       = "{applicationId}@{tenantDomain}"
  client_secret   = "{applicationPassword}"
  tenant_id       = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
}

# Create a resource group
resource "azurestack_resource_group" "test" {
  name     = "rg01"
  location = "frn00006"
}

resource "azurestack_public_ip" "test" {
  name                         = "acceptanceTestPublicIp1"
  location                     = "${azurestack_resource_group.test.location}"
  resource_group_name          = "${azurestack_resource_group.test.name}"
  public_ip_address_allocation = "static"

  tags {
    environment = "Production"
  }
}

resource "azurestack_virtual_network" "test" {
  name                = "acctvn"
  address_space       = ["10.0.0.0/16"]
  location            = "${azurestack_resource_group.test.location}"
  resource_group_name = "${azurestack_resource_group.test.name}"
}

resource "azurestack_subnet" "test" {
  name                 = "acctsub"
  resource_group_name  = "${azurestack_resource_group.test.name}"
  virtual_network_name = "${azurestack_virtual_network.test.name}"
  address_prefix       = "10.0.2.0/24"
}

resource "azurestack_network_interface" "test" {
  name                = "acctni"
  location            = "${azurestack_resource_group.test.location}"
  resource_group_name = "${azurestack_resource_group.test.name}"

  ip_configuration {
    name                          = "testconfiguration1"
    subnet_id                     = "${azurestack_subnet.test.id}"
    private_ip_address_allocation = "dynamic"
    public_ip_address_id          = "${azurestack_public_ip.test.id}"
  }
}

resource "azurestack_storage_account" "test" {
  name                     = "accsa001"
  resource_group_name      = "${azurestack_resource_group.test.name}"
  location                 = "${azurestack_resource_group.test.location}"
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags {
    environment = "staging"
  }
}

resource "azurestack_storage_container" "test" {
  name                  = "vhds"
  resource_group_name   = "${azurestack_resource_group.test.name}"
  storage_account_name  = "${azurestack_storage_account.test.name}"
  container_access_type = "private"
}

resource "azurestack_virtual_machine" "test" {
  name                  = "acctvm"
  location              = "${azurestack_resource_group.test.location}"
  resource_group_name   = "${azurestack_resource_group.test.name}"
  network_interface_ids = ["${azurestack_network_interface.test.id}"]
  vm_size               = "Standard_D2_v2"

  # Uncomment this line to delete the OS disk automatically when deleting the VM
  # delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  # delete_data_disks_on_termination = true

  storage_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "16.04-LTS"
    version   = "latest"
  }

<output form="diskType" name="result2" style="display: inline;">  storage_os_disk {
    name          = "myosdisk1"
    vhd_uri       = "${azurestack_storage_account.test.primary_blob_endpoint}${azurestack_storage_container.test.name}/myosdisk1.vhd"
    caching       = "ReadWrite"
    create_option = "FromImage"
  }</output>

  # Optional data disks
  storage_data_disk {
    name          = "datadisk0"
    vhd_uri       = "${azurestack_storage_account.test.primary_blob_endpoint}${azurestack_storage_container.test.name}/datadisk0.vhd"
    disk_size_gb  = "1023"
    create_option = "Empty"
    lun           = 0
  }

  os_profile {
    computer_name  = "hostname"
    admin_username = "testadmin"
    admin_password = "Password1234!"
  }

  os_profile_linux_config {
    disable_password_authentication = false
  }

  tags {
    environment = "staging"
  }
}
</code></pre>

## How to execute a plan - using **Environment Variables** option

> [!TIP]
> Terraform by default scans your execution directory and is looks for all `tf` files.

From a PowerShell prompt, navigate to the directory which contains your `tf` files and run the following commands:

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

* provider.azurestack: version = "~> 0.1"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

```PowerShell
# Verify your plan
.\terraform.exe plan -var-file=C:\<DirectoryName>\testvars.tfvars
# Apply your plan
.\terraform.exe apply -var-file=C:\<DirectoryName>\testvars.tfvars
```

> [!NOTE]
> You can also add `-auto-approve` to the apply command for it to not ask you to apply changes for full automation.

## How to execute a plan - using **Provider Block** option

> [!TIP]
> Terraform by default scans your execution directory and looks for all `tf` files.

From a PowerShell prompt, navigate to the directory which contains your `tf` files and run the following commands:

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

* provider.azurestack: version = "~> 0.1"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

```PowerShell
# Verify your plan
.\terraform.exe plan
# Apply your plan
.\terraform.exe apply
```

> [!NOTE]
> You can also add `-auto-approve` to the apply command for it to not ask you to apply changes for full automation.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.
