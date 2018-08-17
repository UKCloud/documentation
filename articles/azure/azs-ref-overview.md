---
title: Understanding UKCloud for Microsoft Azure | UKCloud Ltd
description: Overview of UKCloud for Microsoft Azure
services: azure-stack
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: Reference
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding UKCloud for Microsoft Azure
toc_fullpath: Users/Reference/azs-ref-overview.md
toc_mdlink: azs-ref-overview.md
---
# Understanding UKCloud for Microsoft Azure

## Introduction

UKCloud for Microsoft Azure provides you with new options to harness Microsoft Azure alongside other cloud platforms, including Oracle, VMware and OpenStack. This gives you the flexibility to accommodate diverse workloads within a low latency, accredited platform with native connectivity to non-cloud workloads in Crown Hosting and the networks that are vital to the public sector: from PSN Protected to N3/HSCN and RLI.

This article provides an introduction to UKCloud for Microsoft Azure and helps you get up and running.

## Supported features

UKCloud for Microsoft Azure supports the following Azure Stack IaaS features:

### Compute

Virtual machines (VMs) provide the basic building block providing compute in Azure Stack. For a list of available VM sizes, see: <https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes>.

You can deploy VMs using the Azure Stack portal and other tooling. VMs have the following support:

- API
- Azure Stack Marketplace - Provides access to pre-created images that help speed up application delivery
- Azure Resource Manager - Enables you to write templates to deploy, update and delete Azure Stack resources in a single co-ordinated operation

<https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-considerations>

### Network

- Virtual networks - Azure Stack enables you to configure virtual private clouds, create and manage your private address space within Azure; you can configure this via the UI, API and other tooling
- Load balancers (IPv4 only) — You can deploy basic load balancers
- VPN gateway — You can use the Azure Stack VPN gateway to create site-to-site VPNs to remote infrastructure
- Routing — You can configure basic custom defined routing on virtual networks; Vnet to Vnet peering is not yet supported

<https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-network-differences>

### Storage

Type of storage | Description | Notes vs Azure
----------------|-------------|---------------
Azure Blob Storage (block) | Object storage; good for storing documents, videos, images and so on | Size of disk storage differs significantly, as well as naming standards like name length
Azure Blob Storage (page) | Used to support virtual machine disks; good for randomly accessed large files
Azure Blob Storage (append) | Used for log files | &nbsp;
Azure Queue Storage | Message queue as a service to provide asynchronous scale out micro-services, among other things | &nbsp;
Azure Table Storage | NoSQL database service; good for highly scalable, eventually consistent database support | Max sizes differ

### Advanced features

- Key Vault — Azure Stack provides cryptographic secret storage for applications and services. These services can be consumed by both portal and API.

<https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-kv-intro>

## Design considerations

When designing your UKCloud for Microsoft Azure applications, consider the following:

### Compute

- Azure Stack supports a subset of Azure VM extensions; UKCloud for Microsoft Azure currently supports the following:
  - BGInfo v2.1
  - CustomScriptExtension v1.8
  - JsonADDomainExtension v1.3
  - VMAccessAgent v2
  - CustomScriptForLinux v1.5.2.0
  - OSPatchingForLinux v2.3.0.1
  - VMAccessForLinux v1.4.0.0
  - DockerExtension v1.1.1606092330
  - DSC v2.19.0.0
  - IaaSAntimalware v1.4.0.0
  - IaaSDiagnostics v1.10.1.1
  - MicrosoftMonitoringAgent v1.0.10900.0

  For an up-to-date list of the supported extensions, perform the following steps:

    First, ensure that you've installed the relevant Azure PowerShell tools from the following links:

    https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-powershell-install

    https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-powershell-download

    Then run the following commands:

    ```powershell
    Add-AzureRMEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com"
    Login-AzureRmAccount -EnvironmentName "AzureStackAdmin"
    Get-AzureRmVmImagePublisher -Location frn00006 | ` Get-AzureRmVMExtensionImageType | ` Get-AzureRmVMExtensionImage | ` Select Type, Version | ` Format-Table -Property * -AutoSize
    ```

- Use load balancers to make the best use of IP address quota
- Azure Stack API may be a couple of releases behind Azure
- Single region and single state set (affects availability)
- VM sets don't support auto-scale, so consider how to handle load
- Check Azure Resource Manager (ARM) templates to see if they're compatible with Azure Stack

### Storage

Azure Stack storage is all served from the same pool of disks and does not provide “limitless” storage, so you should consider the following:

- Use blob storage (object storage) to support the application; not for multiple petabytes of data storage
- Put large volume data on UKCloud's Cloud Storage
- Clean up backups to conserve storage
- Consider use of temporary storage
- There is a difference in maximum blob storage between Azure and Azure Stack
- No guarantees around IOPs
- Use blob storage for queues to help deliver scalable micro-services

## Accessing UKCloud for Microsoft Azure

You can access UKCloud for Microsoft Azure from the following location:

<https://portal.frn00006.azure.ukcloud.com/>

## Further information

For more information about Azure Stack, see the following Microsoft resources:

- [*Get Started with Azure*](https://azure.microsoft.com/en-gb/get-started/)
- [*Azure Stack Operator Documentation*](https://docs.microsoft.com/en-us/azure/azure-stack/)

For more information about UKCloud for Microsoft Azure, see:

- [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md)
- [*UKCloud for Microsoft Azure FAQs*](azs-faq.md)

## Feedback

If you have any comments on this article, or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.