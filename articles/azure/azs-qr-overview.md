---
title: Understanding Sovereign Azure BETA | UKCloud Ltd
description: Overview of UKCloud for Microsoft Azure BETA
services: azure
author: Sue Highmoor

toc_rootlink: Users
toc_sub1: Reference
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding Sovereign Azure BETA
toc_fullpath: Users/Guides/azs-qr-overview.md
toc_mdlink: azs-qr-overview.md
---
# Understanding Sovereign Azure BETA

## Introduction

UKCloud's Sovereign Azure cloud provides you with new options to harness Microsoft Azure alongside other cloud platforms, including Oracle, VMware and OpenStack. This gives you the flexibility to accommodate diverse workloads within a low latency, accredited platform with native connectivity to non-cloud workloads in Crown Hosting and the networks that are vital to the public sector: from PSN Protected to N3/HSCN and RLI.

This article provides an introduction to the Sovereign Azure cloud and helps you get up and running with the demonstrator units that we're providing as a BETA environment.

## About Sovereign Azure

At UKCloud, we understand that there is no "one cloud fits all" solution. There are usually many factors to consider when looking to move your applications to the cloud, including existing technology investment and skills. Additionally, while some applications can easily move to the public cloud, there are others that for various reasons (latency, connectivity, security, regulation) must run on-premises.

Microsoft Azure Stack is an extension of Azure that provides on-premises Infrastructure-as-a-Service (IaaS) and Platform-as-a-Service (PaaS) that enables you to leverage the benefits of cloud in an on-premises environment. The Sovereign Azure cloud brings the advantages of the Microsoft Cloud platform to our assured UK-sovereign platform, helping you realise the benefits that a true hybrid cloud environment has to offer, while balancing the right amount of flexibility and control.

With Sovereign Azure, you can:

- Leverage existing Azure investment, knowledge and skills
- Use Azure Stack alongside other technologies, for example, VMware, OpenStack and Oracle
- Connect to government community networks, including PSN, N3/HSCN, Janet and RLI
- Meet specific compliance directives, such as data sovereignty or security

The two main delivery models provided by our Sovereign Azure cloud are:

- A multi-tenant IaaS and PaaS platform available in both UKCloud security domains (Assured OFFICIAL and Elevated OFFICIAL), connected to government community networks with UKCloud's award-winning support
- Private cloud deployment of Sovereign Azure dedicated to a single customer

## Supported features

Our Sovereign Azure cloud is currently offered as a BETA opportunity for our customers to familiarise themselves with our Azure service. This is intended as a first look&mdash;with the service evolving throughout the BETA to represent the live production service. Subsequently, some features may be added, altered or withdrawn throughout the BETA as our understanding evolves.

At initial launch, Sovereign Azure BETA supports the following Azure Stack IaaS features:

### Compute

Virtual machines (VMs) provide the basic compute building blocks in Azure Stack. The table below lists the VM sizes available.

Size | vCPU | Memory (GiB) | Temp storage (GiB)
-----|------|--------------|-------------------
Standard_D1_v2 | 1 | 3.5 | 50
Standard_D2_v2 | 2 | 7 | 100
Standard_D3_v2 | 4 | 14 | 200
Standard_D4_v2 | 8 | 28 | 400
Standard_A0 | 1 | 0.768 | 20
Standard_A1 | 1 | 1.75 | 70
Standard_A2 | 2 | 3.5 | 135
Standard_A3 | 4 | 7 | 285
Standard_A4 | 8 | 14 | 605
Standard_A5 | 2 | 14 | 135
Standard_A6 | 4 | 28 | 285
A0\Basic_A0 | 1 | 768 MB | 20 GB
A1\Basic_A1 | 1 | 1.74 GB | 40 GB
A2\Basic_A2 | 2 | 3.5 GB | 60 GB
A3\Basic_A3 | 4 | 7 GB | 120 GB
A4\Basic_A4 | 8 | 14 GB | 240 GB
Standard_DS11_v2 | 2 | 14 | 28
Standard_DS12_v2 | 4 | 28 | 56

**_need to confirm list above is correct and up to date_**

You can deploy VMs using the Azure Stack portal and other tooling. VMs have the following support:

- API
- Azure Stack Marketplace&mdash;provides access to pre-created images which help speed up application delivery
- Azure Resource Manager&mdash;enables you to write templates to deploy, update and delete Azure Stack resources in a single coordinated operation

   https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-vm-considerations

### Network

- Virtual networks&mdash;Configure virtual private clouds, create and manage your private address space within Azure; you can configure this via the UI, API and other tooling
- Load balancers (IPv4 only)&mdash;Deploy basic load balancers
- VPN gateway&mdash;Create site-to-site VPNs to remote infrastructure with the Azure Stack VPN gateway
- Routing&mdash;Configure basic custom-defined routing on virtual networks; Vnet to Vnet peering is not yet supported

   https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-network-differences

### Storage

Type of storage | Description | Notes vs Azure
----------------|-------------|---------------
Azure Blob Storage (block) | Object storage; good for storing documents, videos, images and so on | Size of disk storage differs significantly, as well as naming standards like name length
Azure Blob Storage (page) | Used to support VM disks; good for randomly accessed large files
Azure Blob Storage (append) | Used for log files
Azure Queue Storage | Message queue as a service to provide asynchronous scale out micro-services, among other things
Azure Table Storage | NoSQL database service; good for highly scalable, eventually consistent database support | Max sizes differ

### Advanced features

- Key Vault&mdash;Azure Stack provides crytographic secret storage for applications and services. These services can be consumed by both the portal and API.

   https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-kv-intro

## Design considerations

When designing your Sovereign Azure applications using our BETA service, you should consider the following:

### Compute

- Resource restrictions&mdash;UKCloud will provide BETA customers with an amount of useable compute resource (which will be advised upon onboarding). Customers will be able to use this resource as they wish&mdash;but will not be able to exceed this resource. Consider the VM sizes required to prove the functionality required.
- Azure Stack supports a subset of Azure VM extensions; Sovereign Azure currently supports the following:
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

> [!NOTE] 
> For an up-to-date list of the supported extensions, perform the following steps:

First, ensure that you've installed the relevant Azure PowerShell tools from the following links:

https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-powershell-install
https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-powershell-download

Then run the following commands:

```powershell
Add-AzureRMEnvironment -Name "AzureStackAdmin" -ArmEndpoint "https://management.frn00006.azure.ukcloud.com" Login-AzureRmAccount -EnvironmentName "AzureStackAdmin" Get-AzureRmVmImagePublisher -Location frn00006 | ` Get-AzureRmVMExtensionImageType | ` Get-AzureRmVMExtensionImage | ` Select Type, Version | ` Format-Table -Property * -AutoSize
```

- Use load balancers to make the best use of IP address quota.
- Azure Stack API may be a couple of releases behind Azure.
- Single region and single state set (affects availability).
- VM sets don't support auto-scale, so consider how to handle load.
- Check Azure Resource Manager (ARM) templates to see if they're compatible with Azure Stack.

### Storage

Azure Stack storage is all served from the same pool of disks and doesn't provide "limitless" storage, so you should consider the following:

- Use blob storage (object storage) to support the application; not for multiple petabytes of data storage
- Put large volume data on UKCloud's Cloud Storage
- Clean up backups to conserve storage
- Consider use of temporary storage
- There is a difference in maximum blob storage between Azure and Azure Stack
- No guarantees around IOPs
- Use blob storage for queues to help deliver scalable micro-services

## Accessing Sovereign Azure demonstrator units

You can access Sovereign Azure from the following location:

https://portal.frn00006.azure.ukcloud.com/

## Further information

For more information about Azure Stack, see the following Microsoft resources:

[Get Started with Azure](https://azure.microsoft.com/en-gb/get-started/)
[Azure Stack Operator Documentation](https://docs.microsoft.com/en-us/azure/azure-stack/)

For more information about our Sovereign Azure service, see:

[Sovereign Azure BETA FAQs](https://portal.ukcloud.com/support/knowledge_centre/de19b410-f844-419b-afd0-bb3dbab0a217)

## Feedback

If you have any comments on this article, or any other aspect of your UKCloud experience, send them to feedback@ukcloud.com.

(c) UKCloud Ltd, 2018. All Rights Reserved.
