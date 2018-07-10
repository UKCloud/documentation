---
title: Getting Started Guide for Cloud GPU Visualisation | UKCloud Ltd
description: Provides information to get up and running with Cloud GPU Visualisation
services: gpu
author: Sue Highmoor

toc_rootlink: Getting Started
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloud GPU Visualisation
toc_fullpath: Getting Started/gpu-gs-visualisation.md
toc_mdlink: gpu-gs-visualisation.md
---

# Getting Started Guide for Cloud GPU Visualisation

## Introduction

Cloud GPU enables you to supplement your on-platform compute resources with GPU capabilities.

This service enables you to use UKCloud's main infrastructure platforms to meet the specialist requirements of some advanced applications, with the benefits of a cloud environment. It supports the following types of
workloads:

- **Compute workloads.** GPUs have become prevalent in a world that needs a lot of data processing, fast. The parallel nature of GPU cores lends itself perfectly to supporting initiatives such as deep or machine learning and large-scale mathematical modelling.
- **Visualisation workloads.** Describes the traditional use cases for GPU processing --- these include simulation, powering desktop applications with graphics content (such as computer aided design), video encoding, rendering or streaming.

This Getting Started Guide provides an introduction for how to use Cloud GPU for visualisation workloads and describes the tasks you need to perform to get the service up and running.

### Intended audience

To complete the steps in this guide you must have access to the UKCloud Portal and vCloud Director.

## Cloud GPU overview

We offer two GPU variants for use with our cloud platform:

Use case | Compute | Visualisation
---------|---------|--------------
Likely card | NVIDIA&reg; Tesla&reg; P100 | NVIDIA M60 Series Card with GRID&trade;
Overview | NVIDIA Tesla P100 GPU accelerators are the most advanced ever built. Designed to accelerate the compute-intensive elements of applications, they are ideal if you\'re looking to deliver deep learning, analytics or HPC solutions. | NVIDIA GRID is designed to share virtual GPUs (vGPUs) across multiple virtual desktop and applications instances. This enables you to deliver graphically intensive applications such as design software and video streaming.
Precision | Double precision | Single precision
Delivery model | vGPU | vGPU

With Cloud GPU Visualisation, you can:

- **Bring any application to the cloud** --- Applications that have previously struggled to transition to the cloud because of GPU requirements can now be moved, improving manageability of your data and applications, while increasing collaborative opportunities.
- **Centralise your applications** --- Cloud GPU enables you to centralise your applications to improve access to them. By doing so, users can access the tools they need from anywhere, anytime on commodity devices.
- **Visualise data in real-time** --- Improved visualisation capabilities provided by Cloud GPU Visualisation enables you to visualise data in real-time to render virtualised environments when you need them. This helps you to:

  - Design using Computer Aided Design applications in a centralised environment, enabling ease of collaboration
  - Create and run simulations
  - Render and analyse high resolution images and video

## Before you begin

When using our Cloud GPU service for visualisation workloads, you should consider the following:

- Before requesting your Cloud GPU Visualisation service:

  - You must create a virtual machine (VM) for the service.

    You can use any template for the VM, but bear in mind that the operating system must be compatible with the vGPU profile that you select for the service (see table in [Provisioning your Cloud GPU service](#provisioning-your-cloud-gpu-service)).

  - Your Cloud GPU VM must be in a PRIORITY virtual data centre (VDC).

  - Your Cloud GPU VM should be using hardware version 11 (to upgrade the hardware version, right-click the VM and select **Upgrade Virtual Hardware Version**).

  - You must power off the vApp that contains your Cloud GPU VM so that UKCloud can migrate the VM to a GPU-enabled server.

- Snapshot Protection is not available for your VM, so you must implement your own backup solution.

- Currently, there is no high availability or disaster recovery option; your VM cannot be migrated to a different host in the event of host failure. In the event of a host failure, you must wait for the host to be returned to service.

## Provisioning your Cloud GPU service

When your VM is ready, make sure it is powered off and then use My Calls in the UKCloud Portal to raise a service request for the Cloud GPU service. Provide the following details in the ticket so that UKCloud can
complete the setup of your service:

- Service type: GPU -- Visualisation
- VDC name
- vApp name
- VM name
- vGPU profile that you want to use (see table below)

vGPU profile | Intended use case | Frame buffer (Mbytes) | Virtual display heads | Maximum resolution per display head | Effective number of vGPUs
-------------|-------------------|-----------------------|-----------------------|-------------------------------------|--------------------------
M60-8Q* | Designer | 8192 | 4 | 4096x2160 | 8
M60-4Q* | Designer | 4096 | 4 | 4096x2160 | 4
M60-2Q* | Designer | 2048 | 4 | 4096x2160 | 2
M60-1Q* | Power User, Designer | 1024 | 2 | 4096x2160 | 1
M60-8A | Virtual Application User | 8192 | 1 | 1280x1024 | 8
M60-4A | Virtual Application User | 4096 | 1 | 1280x1024 | 4
M60-2A | Virtual Application User | 2048 | 1 | 1280x1024 | 2
M60-1A | Virtual Application User | 1024 | 1 | 1280x1024 | 1

\* M60-Q profiles are for 64-bit Linux

UKCloud will confirm that you've set up your VM correctly and that it meets all the necessary prerequisites. If the VM meets all requirements, UKCloud will migrate the VM to a GPU‑enabled host and attach the GPU
card to your VM.

## Installing NVIDIA drivers

When UKCloud has provisioned your Cloud GPU server, you can install the appropriate NVIDIA drivers.

To install NVIDIA drivers:

1. Power on your VM.

2. Right-click your VM and select **Insert CD/DVD from Catalog**.

    ![Insert CD/DVD from Catalog menu option](images/gpu-vcd-vm-mnu-insert-cd.png)

3. In the *Insert CD* dialog box, in the search field, enter vGPU and click the **Refresh** icon.

    ![Insert CD dialog box](images/gpu-vcd-vm-insert-cd.png)

4. Select the vGPU driver ISO and click **Insert**.

5. Check the console of VM to ensure that the ISO is mounted.

6. Run the appropriate executable (Windows) or binary (Linux).

    **On Windows:**

    - From Explorer, double click the driver installer file (NVIDIA\*.\*.exe).
    - Select **Custom (Advanced)**.
    - Select **Perform a clean installation**.

        ![Custom installation options in NVIDIA Installer](images/gpu-nvidia-win-install-driver.png)

    - Click **Next**.
    - Restart and connect to the VM.

    **On Linux:**

    - Update the system:

            \# yum update

    - Install gcc with Kernel Modules:

            \# yum install kernel-devel gcc

    - Make the driver package executable:

            \# chmod +x NVIDIA-Linux-x86\_64-384.73-grid.run

    - Run the driver installer:

            \# ./NVIDIA-Linux-x86\_64-384.73-grid.run

    - Accept the defaults.

        > [!NOTE]
        > If you don't have a GUI installed, you can ignore the messages relating to X.

    - Confirm that the driver is installed and the card is detected:

        ```
        \# nvidia-smi
        Thu Oct 5 14:57:43 2017
        +------------------------------------------------------------------------------+
        | NVIDIA-SMI 384.73                 Driver Version: 384.73                     |
        |------------------------------------------------------------------------------|
        | GPU  Name        Persistence-M| Bus-Id        Disp.A |  Volatile Uncorr. ECC |
        | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage |   GPU-Util Compute M. |
        |===============================+======================+=======================|
        |   0  GRID P100-16Q       On   | 00000000:02:01.0 Off |                   N/A |
        | N/A   N/A    P0    N/A /  N/A |   1040MiB / 16383MiB |        0%     Default |
        |-------------------------------+----------------------------------------------|
        |------------------------------------------------------------------------------|
        | Processes:                                                       GPU Memory  |
        |  GPU       PID    Type    Process name                           Usage       |
        |==============================================================================|
        | No running processes found                                                   |
        +------------------------------------------------------------------------------+
        ```

## Licensing your VM for Cloud GPU

To enable full functionality of the NVIDIA GPU card, your VM must obtain a valid licence from   The NVIDIA GRID License Server. To do this, you must configure your edge gateway to allow  traffic to and from the license server.

#### Configuring the edge gateway

To enable access to the NVIDIA GRID License Server from your network, you must create the following firewall rule on your edge gateway:

- **Source/Source Port:** as appropriate for your source network
- **Destination:** 51:179.197.53
- **Destination Port:** 7070
- **Protocol:** TCP
- **Action:** Allow

![Add firewall rule dialog box](images/gpu-vcd-add-firewall-rule.png)

If you need more detailed instructions for creating firewall rules, see [*vCNS Edge services: firewall*](https://portal.ukcloud.com/support/knowledge_centre/e8ec5a0b-e5c7-4e44-b353-ab89505fefbe).

#### Retrieving a licence (Windows)

To license GRID Virtual GPU on Windows:

1. Right-click on the desktop and select **Nvidia Control Panel**.

2. In the *NVIDIA Control Panel*, under **Licensing**, select **Manage License**.

    ![Manage License page](images/gpu-nvidia-manage-license.png)

3. In the **License Server** field, enter `gpuls.ukcloud.com`.

4. Leave the **Port Number** field empty to default to port 7070, which is the default port number used by the NVIDIA GRID License Server.

5. Click **Apply**.

6. The server will attempt to connect to the license server and pull a licence from the available pool.

    ![License acquired message](images/gpu-nvidia-licence-acquired.png)

7. Once configured, licensing settings persist across reboots.

#### Retrieving a licence (Linux)

To license GRID Virtual GPU on Linux

1. Copy the template grid licensing config file:

        \# cp /etc/nvidia/gridd.conf.template /etc/nvidia/gridd.conf

2. Edit the file and set the following values:

    - ServerAddress=gpuls.ukcloud.com
    - ServerPort=7070
    - FeatureType=1

3. Save your changes.

4. Restart the GRID service:

        \# service nvidia-gridd restart

5. Check the log messages to confirm the licence is enabled (this may take a minute or two):

    ```
    \#tail -f /var/log/messages

    Oct 5 15:04:45 localhost systemd: Starting NVIDIA Grid Daemon\...\
    Oct 5 15:04:45 localhost nvidia-gridd: Started (16224)\
    Oct 5 15:04:45 localhost systemd: Started NVIDIA Grid Daemon.\
    Oct 5 15:05:16 localhost nvidia-gridd: Service provider detection complete.\
    Oct 5 15:05:17 localhost nvidia-gridd: License acquired successfully. Server URL : http://51.179.209.134:7070/request\
    Oct 5 15:05:17 localhost nvidia-gridd: Your system is licensed for GRID vGPU.
    ```

6. Alternatively, if you have the GUI installed, you can set up the details for the license server in the NVIDIA Settings dialog box.

    - Open the settings tools from your desktop or from the command line:

            \# nvidia-settings

    - Select Manage License and input the following server details:

      - **License Server:** gpuls.ukcloud.com
      - **Port Number:** 7070

### Choosing a remote desktop application

For a list of remote desktop applications that utilise GPU acceleration and can support the high resolution and frame rate required by graphically intensive workloads, see the following NVIDIA support page:

<http://nvidia.custhelp.com/app/answers/detail/a_id/4187/~/nvidia-grid-nvenc-availability-for-hardware-accelerated-protocol-encode-%E2%80%93-rgs%2C>

We've tested the following applications against our Cloud GPU service to confirm that they work successfully:

- VMware Blast Extreme
- HP Remote Graphics Software

> [!NOTE]
> Citrix XenDesktop is not supported on the UKCloud platform. We've not yet tested NICE DVC, so cannot currently confirm if it works successfully.

## Next steps

In this guide, you've learned how to set up your environment to enable the provisioning of your Cloud GPU service and you can now start creating your GPU‑powered applications.

For information about NVIDIA virtual GPU software specific to your OS, see:

<https://docs.nvidia.com/grid/latest/index.html>

## Glossary

This section provides a glossary of terms specific to Cloud GPU.

**Cloud GPU**&nbsp;&nbsp;A UKCloud IaaS service that enables you to supplement your on-platform
compute resources with GPU capabilities that help meet specialist requirements of advanced applications, such as visualisation workloads or large-scale mathematical modelling.

**GPU**&nbsp;&nbsp;Graphics processing unit.

**NVIDIA GRID**&nbsp;&nbsp;The software that enables the GPU card to be exposed as a shared PCI
device.

**PRIORITY VM**&nbsp;&nbsp;An Enterprise Compute Cloud VM type with uncontended compute resource
allocation (CPU/RAM). Automated rebalancing is configured to reduce workload movement around the platform, reducing workload disruption.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved. UKC-GEN-635
