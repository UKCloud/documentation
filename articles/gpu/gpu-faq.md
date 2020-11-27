---
title: Cloud GPU FAQs
description: Frequently asked questions for Cloud GPU
services: gpu
author: Matt Warner
reviewer: Guy Martin
lastreviewed: 20/08/2019
toc_rootlink: FAQs
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud GPU FAQs
toc_fullpath: FAQs/gpu-faq.md
toc_mdlink: gpu-faq.md
---

# Cloud GPU FAQs

> [!IMPORTANT]
> This product is no longer available for sale. This article is provided to support existing customers of the product only.

## General

### What is Cloud GPU?

Cloud GPU is a supplementary Graphics Processing Unit (GPU) option that enables customers to meet the specialist compute requirements of certain advanced applications. This falls into two categories:

- Visualisation workloads - taking advantage of the traditional use of GPU for powerful desktop/server applications which use graphically intensive content, such as computer-aided design (CAD), simulations and video encoding, rendering or streaming.

- Computational workloads - The parallel nature of general purpose Graphics Processing Unit (GPGPU) cores enables initiatives such as deep learning, analytics and large-scale mathematical modelling.

### What can the service help you achieve?

Cloud GPU enables UKCloud customers to supplement their cloud compute resources with GPU capabilities:

- Improve the speed at which you can gain insight into your data. Cloud GPU’s massively parallelised capabilities enable you to process large data sets at a much faster rate, allowing for greater operational efficiency.

- Bring GPU-reliant applications to the cloud. Applications that have previously struggled to transition to the cloud because of GPU requirements can now be moved — improving manageability of your data and applications, while increasing collaboration opportunities.

- Improve access to your most important applications. Cloud GPU lets you centralise your applications so that staff can access the tools they need, from anywhere, on commodity devices.

- Streamline compute resources. Offload processing power to GPUs, reducing the CPU footprint needed to run applications.

### What technology does Cloud GPU use?

The service is provisioned using NVIDIA cards in the required hosts. Different cards are utilised depending on the use case:

- Visualisation - NVIDIA [M60](https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/solutions/resources/documents1/nvidia-m60-datasheet.pdf) cards with GRID are designed to share virtual GPUs across multiple virtual desktop and application instances

- Computational (GPGPU) - NVIDIA Tesla [P100](https://www.nvidia.com/en-us/data-center/tesla-p100/) cards are designed to accelerate the compute-intensive elements of applications

### How does Cloud GPU work?

Cloud GPU utilises NVIDIA's GRID engine to expose GPU resources to client virtual machines (VMs). The GPU card is exposed as a shared PCI device which can then be used by the customer's VM.

### Are there any prerequisites?

Yes. To take advantage of the Cloud GPU service, you must also have UKCloud for VMware VMs running on the UKCloud platform. These VMs must be running in a PRIORITY virtual data centre as the GPU mapping requires 100% memory allocation to the VM. Further to this, VMs wanting to utilise GPGPUs (NVIDIA Tesla P100) must be built from specific GPGPU enabled templates providing specific BIOS settings.

### Does UKCloud require specific NVIDIA driver versions?

Yes. VMs utilising the NVIDIA GRID solution must use the GRID driver matching the driver installed on the vSphere hosts. For information about installing drivers, see [*How to set up Cloud GPU Compute for UKCloud for VMware*](../vmware/vmw-how-setup-gpu-compute.md#installing-nvidia-drivers) or [*How to set up Cloud GPU Visualisation for UKCloud for VMware*](../vmware/vmw-how-setup-gpu-visualisation.md#installing-nvidia-drivers).

### Which compute services support Cloud GPU?

Currently, Cloud GPU only supports environments provisioned on UKCloud for VMware in regions 5 and 6. There are future plans to enable the service on UKCloud for OpenStack and High Performance Compute.

### How do I set up Cloud GPU for UKCloud for VMware?

For information about how to set up Cloud GPU for UKCloud for VMware, see:

- [*How to set up Cloud GPU Compute for UKCloud for VMware*](../vmware/vmw-how-setup-gpu-compute.md)

- [*How to set up Cloud GPU Visualisation for UKCloud for VMware*](../vmware/vmw-how-setup-gpu-visualisation.md)

### How is it billed?

Cloud GPU is billed per card per hour for GPGPU, and per vGPU per hour for visualisation. This is in addition to the UKCloud for VMware VM charge. You have the option to power off Cloud GPU when not required to avoid unnecessary costs. All usage is billed and invoiced at the end of each month.

### Where can I find more information on NVIDIA GRID?

You can find the latest information regarding GRID on the NVIDIA website [here](https://www.nvidia.com/en-gb/design-visualization/grid-vpc-vapps/).

### Where can I find more information on NVIDIA CUDA?

You can find the latest information regarding CUDA on the NVIDIA website [here](https://developer.nvidia.com/cuda-zone).

### What is the SLA?

The SLA for Cloud GPU is 99.90%. You can find full details regarding the SLA in [*SLA definition*](../other/other-ref-sla-definition.md).

### What happens if the card fails?

If a card failure occurs, our support team will identify the issue and re-instantiate your service on another GPU-enabled host.

### Can I have multiple GPUs associated with a single VM?

No. Each VM can only be mapped to a single GPU.

### Can the GPU service be added to one of our existing servers or would it require a new server?

If you're using GPU for Visualisation then yes, it could be added to an existing server if the VM is in a GPU-enabled region. If your existing VM is not in the correct region then we would need to move it to a new server before enabling GPU for Visualisation on it.

If you're planning on using GPU for Compute then you would need a new VM as a different BIOS is required.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
