---
title: Cloud GPU FAQs | UKCloud Ltd
description: Frequently asked questions for Cloud GPU
services: gpu
author: Matt Warner
reviewer:
lastreviewed: 19/07/2018 17:56:05
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

- Visualisation - NVIDIA [M60](http://www.nvidia.com/object/tesla-m60.html) cards with GRID are designed to share virtual GPUs across multiple virtual desktop and application instances

- Computational (GPGPU) - NVIDIA Tesla [P100](http://www.nvidia.com/object/tesla-p100.html) cards are designed to accelerate the compute-intensive elements of applications.

### How does Cloud GPU work?

Cloud GPU utilises NVIDIA's GRID engine to expose GPU resources to client virtual machines (VMs). The GPU card is exposed as a shared PCI device which can then be used by the customer's VM.

### Does UKCloud require specific NVIDIA driver versions?

Yes. VMs utilising the NVIDIA GRID solution must use the GRID driver matching the driver installed on the vSphere hosts (currently 385.41). This driver can be downloaded from the [UKCloud Knowledge Centre](https://portal.skyscapecloud.com/support/knowledge_centre/76dcd09f-3bd4-411f-8343-9fb21be0ceb1).

### Which compute services support Cloud GPU?

Currently, Cloud GPU only supports environments provisioned on UKCloud for VMware in regions 5 and 6. There are future plans to enable the service on UKCloud for OpenStack and High Performance Compute.

### Are there any prerequisites?

Yes. To take advantage of the Cloud GPU service, you must also have UKCloud for VMware VMs running on the UKCloud platform. These VMs must be running in a 'Priority' virtual data centre as the GPU mapping requires 100% memory allocation to the VM. Further to this, VMs wishing to utilise GPGPUs (NVIDIA Tesla P100) must be built from specific GPGPU enabled templates providing specific BIOS settings.

### How do I set up Cloud GPU for UKCloud for VMware?

For information about how to set up Cloud GPU for UKCloud for VMware, see:

- [*How to set up Cloud GPU Compute for UKCloud for VMware*](../vmware/vmw-how-setup-gpu-compute.md)

- [*How to set up Cloud GPU Visualisation for UKCloud for VMware*](/../vmware/vmw-how-setup-gpu-visualisation.md)

### How is it billed?

Cloud GPU is billed per card per hour for GPGPU, and per vGPU per hour for visualisation. Please note that this is in addition to the UKCloud for VMware VM charge. You have the option to power off Cloud GPU when not required to avoid unnecessary costs. All usage is billed and invoiced at the end of each month.

### Where can I find more information on NVIDIA GRID?

The full NVIDIA GRID documentation is available on the NVIDIA website [here](http://www.nvidia.co.uk/object/grid-enterprise-resources-uk.html).

### Where can I find more information on NVIDIA CUDA?

You can find the latest information regarding CUDA on the NVIDIA website [here](http://www.nvidia.co.uk/object/cuda-parallel-computing-uk.html).

### What is the SLA?

The SLA for Cloud GPU is 99.90%. You can find full details regarding the SLA in [*SLA definition*](../other/other-ref-sla-definition.md).

### What happens if the card fails?

If a card failure occurs, our support team will identify the issue and re-instantiate your service on another GPU-enabled host.

### Can I have multiple GPUs associated with a single VM?

Yes.

### Can the GPU service be added to one of our existing servers or would it require a new server?

If you are using the GPU for Visualisation then yes, it could be added to an existing server, if the VM is in a GPU-enabled region. If your existing VM is not in the correct region then we would need to move it to a new server before enabling GPU for Visualisation on it.

If you are planning on using GPU for Compute then you would need a new VM as a different BIOS is required.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
