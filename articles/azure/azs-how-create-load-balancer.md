---
title: How to create a load balancer for Azure Stack Hub
description: Provides help for creating a load balancer on UKCloud for Microsoft Azure
services: azure-stack
author: Bailey Lawson
reviewer: William Turner
lastreviewed: 30/03/2020

toc_rootlink: Users
toc_sub1: How To
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a load balancer
toc_fullpath: Users/How To/azs-how-create-load-balancer.md
toc_mdlink: azs-how-create-load-balancer.md
---

# How to create a load balancer for Azure Stack Hub

## Overview

A load balancer provides scale and availability by spreading incoming requests across multiple virtual machines within a load balancing pool. This guide shows you how to create a pool of back-end servers and a load balancer to spread traffic across them. In this example, the load balancer spreads traffic across two web servers.

### Intended audience

To complete the steps in this guide, you must have appropriate access to a subscription in the Azure Stack Hub portal.

## Creating a load balancer

In this section we will create a load balancer with a public IP address.

1. Log in to the Azure Stack Hub portal.

   For more detailed instructions, see the [*Getting Started Guide for UKCloud for Microsoft Azure*](azs-gs.md).

2. In the favourites panel, select **Create a resource**.

   ![Create a resource option in favourites panel](images/azsp_newmenu.png)

3. In the **New** blade, select **Networking**.

   ![Networking option in New blade](images/azs-browser-new-networking.png)

4. In the **Featured** section, select **Load Balancer**.

   ![Create new networking resource](images/azs-browser-networking-create.png)

5. In the **Create load balancer** blade, enter the following information:

   - **Name** - The name of the load balancer.

   - **Type** - You can use internal load balancers to balance traffic from private IP addresses. Public load balancers can balance traffic originating from public IP addresses. For this example we will be creating a public load balancer.

   - **Public IP Address** - The public IP address that will be assigned to this load balancer. To create a new public IP address:

     - Select the **Create new** option under the **Public IP address** variable.

     - Enter a name for the public IP address.

     - Expand the **Configure public IP address** dropdown.

     - Under **Assignment**, select either the **Dynamic** or **Static** option. It is recommended to select the **Static** option when creating a load balancer.

   - **Subscription** - This is your UKCloud for Microsoft Azure subscription and will be pre-populated by default.

   - **Resource Group** - Select an existing resource group, or create a new one by clicking the **Create new** link and then typing a name for your new resource group in the pop out window.

   - **Location** - This will be `frn00006`, which is the location of the Azure Stack Hub.

     ![Create new load balancer](images/azs-browser-create-load-balancer.png)

6. Click **Create**.

## Create back-end servers

In this section we will create a virtual network and two virtual machines which exist on this network. This will form the back-end pool of the load balancer.

### Create a virtual network

1. In the favourites panel, select **Create a resource**.

   ![Create a resource option in favourites panel](images/azsp_newmenu.png)

2. In the **New** blade, select **Networking**.

   ![Networking option in New blade](images/azs-browser-new-networking.png)

3. In the **Featured** section, select **Virtual network**.

   ![Create new networking resource](images/azs-browser-networking-create.png)

4. In the **Create virtual network** blade, enter the following information:

   - **Name** - The name of the virtual network.

   - **Address Space** - The virtual network's address range in CIDR notation (for example, 192.168.1.0/16).

   - **Subscription** - This is your UKCloud for Microsoft Azure subscription and will be pre-populated by default.

   - **Resource Group** - Select an existing resource group, or create a new one by clicking the **Create new** link and then typing a name for your new resource group in the pop out window.

   - **Location** - This will be `frn00006`, which is the location of the Azure Stack Hub.

   - **Subnet Name** - The name of the first subnet within the virtual network.

   - **Address Range** - The subnet's address range in CIDR notation (for example, 192.168.1.0/24). It must be contained by the address space of the virtual network. The address range of a subnet which is in use can't be edited.

     ![Create new virtual network](images/azs-browser-create-virtual-network.png)

5. Click **Create**.

### Create the virtual machines

1. In the favourites panel, select **Create a resource**.

   ![Create a resource option in favourites panel](images/azsp_newmenu.png)

2. In the **New** blade, select **Compute**.

   ![Compute option in New blade](images/azsp_newblade.png)

3. In the **Compute** blade, select the template that you want to use for your VM.

    ![List of VM images in Compute blade](images/azsp_computeblade.png)

4. In the **Create virtual machine** blade, in the **Basics** step, enter general information about the VM, including a name, credentials and resource group, then click **OK**.
  
   ![Create virtual machine > Basics](images/azsp_createvm_basics.png)

5. In the *Size* step, select the appropriate size for your VM, depending on its purpose, then click **Select**.

   For information about the different available VM sizes, see <https://docs.microsoft.com/en-gb/azure/azure-stack/user/azure-stack-vm-sizes>.

   > [!TIP]
   > By default, the list shows a selection of recommended VM sizes. To see all available VM sizes, click **View all**.

   ![Create virtual machine > Size](images/azsp_createvm_size.png)

6. In the **Settings** step, change any of the optional settings as required for your VM, then click **OK**. Ensure that the virtual network created earlier is selected and that the VM belongs to an availability set. To create a new availability set:

   - Click **Availability set** on the **Create virtual machine** blade.

   - Select **Create new** on the **Change availability set** blade.

   - Enter a name for the availability set and the number of fault domains and update domains, then click **OK**.

   ![Create virtual machine > Settings](images/azs-browser-vm-settings-as.png)

7. In the **Summary** step, review the selections you've made and then click **OK** to start the deployment.

8. Create another VM, ensuring that the **Availability set**, **Virtual network**, **Subnet** and **Network Security Group** are the same.

### Create network security group rules

In this section we will create NSG rules to allow inbound traffic.

1. Navigate to your network security group by clicking on **All services** in the favourites panel, then selecting **Network security groups** under the networking section.

2. Select the network security group your VMs are using from the list.

3. In the blade for your network security group, select **Inbound security rules** under the **Settings** section.

4. Click the **+Add** button.

5. In the **Add inbound security rule** blade, enter the following information:

   - **Source** - The source filter can be Any, an IP address range, or a default tag. It specifies the incoming traffic from a specific source IP address range that will be allowed or denied by this rule.

   - **Source port range** - Provide a single port, such as 80, or a port range, such as 1024-65535. This specifies from which ports traffic will be allowed or denied by this rule. Use an asterisk (\*) to allow traffic on any port.

   - **Destination** - The destination filter can be Any, an IP address range, or a default tag. It specifies the outgoing traffic for a specific destination IP address range that will be allowed or denied by this rule.

   - **Destination port range** - Provide a single port, such as 80, or a port range, such as 1024-65535. This specifies from which ports traffic will be allowed or denied by this rule. Use an asterisk (\*) to allow traffic on any port.

   - **Protocol** - Specify whether to allow inbound traffic using UDP, TCP or both.

   - **Action** - Choose whether the rule allows or denies the traffic specified.

   - **Priority** - Rules are processed in priority order; the lower the number, the higher the priority. We recommend leaving gaps between rules - 100, 200, 300, etc. - so that it's easier to add new rules without having to edit existing rules.

   - **Name** - The name of the security rule.

   - **Description** - A description of the security rule.
  
    ![Add an inbound security rule](images/azs-browser-add-in-security-rule.png)

6. Click **Add**.

### Create a back-end address pool

To spread traffic load across the VMs, you must create a back-end address pool. This pool contains the IP addresses of the VMs.

1. Navigate to your load balancer by clicking **All services** in the favourites panel, then selecting **Load balancers** under the networking section.

2. From the list, select the load balancer you created earlier.

3. In the blade for your load balancer, select **Backend pools** under the **Settings** section.

4. Click the **+Add** button.

5. In the **Add backend pool** blade, enter a name for the backend pool.

6. Select **Availability set** for the **Associated to** option, then select the availability set that you created in the previous section.

7. Click the **+ Add a target network IP configuration** button, select the first VM you created in the previous section and select the network IP to be associated with the back-end pool.

8. Repeat step 7 for the second VM.

   ![Add a backend pool](images/azs-browser-add-backend-pool.png)

9. Click **OK**.

### Create a health probe

When creating a load balancer, you can use a health probe to monitor the status of your application. In Azure Stack Hub, the health probe adds and removes VMs from the load balancer back-end pool based on their current status.

1. Navigate to your load balancer by clicking **All services** in the favourites panel, then selecting **Load balancers** under the networking section.

2. From the list, select the load balancer you created earlier.

3. In the blade for your load balancer, select **Health Probes** under the **Settings** section.

4. Click the **+Add** button.

5. In the **Add health probe** blade, enter the following information:

   - **Name** - The name of your health probe.

   - **Protocol** - The protocol that the health probe uses to monitor the status of your VMs.

   - **Port** - The port that the health probe uses to monitor the status of your VMs.

   - **Interval** - The number of seconds between probe attempts.

   - **Unhealthy threshold** - The number of consecutive probe failures that must occur before a virtual machine is considered unhealthy and is removed from the pool.
  
    ![Add a health probe](images/azs-browser-add-health-probe.png)

6. Click **OK**.

### Create a load balancing rule

A load balancer rule defines how traffic is distributed between VMs. The rule listens for traffic on a front-end IP address, then distributes it among the back-end pool.

1. Navigate to your load balancer by clicking on **All services** in the favourites panel, then selecting **Load balancers** under the networking section.

2. From the list, select the load balancer you created earlier.

3. In the blade for your load balancer, select **Load balancing rules** under the **Settings** section.

4. Click the **+Add** button.

5. In the **Add load balancing rule** blade, enter the following information:

   - **Name** - The name of your load balancing rule.

   - **Frontend IP address** - Clients communicating with this load balancer on the selected IP address and service will have their traffic routed to the target virtual machine by this NAT rule.

   - **Protocol** - The protocol that the rule redirects traffic for.

   - **Port** - The front-end port that the rule listens on.

   - **Backend port** - You can choose to route traffic to the virtual machines in the back-end pool using a different port than the one clients use to communicate with the load balancer.

   - **Backend pool** - The virtual machines in the selected back-end pool will be the target for the load-balanced traffic of this rule. Select the pool that you created in the previous section.

   - **Health probe** - The selected probe is used by this rule to determine which virtual machines in the back-end pool are healthy and can receive load-balanced traffic. Select the probe that you created in the previous section.

   - **Session Persistence** - Session persistence specifies that traffic from a client should be handled by the same virtual machine in the back-end pool for the duration of a session.

      - **None** specifies that successive requests from the same client may be handled by any virtual machine.

      - **Client IP** specifies that successive requests from the same client IP address will be handled by the same virtual machine.

      - **Client IP and protocol** specifies that successive requests from the same client IP address and protocol combination will be handled by the same virtual machine.

   - **Idle timeout** - Keep a TCP or HTTP connection open without relying on clients to send keep-alive messages.

    ![Add a load balancing rule](images/azs-browser-add-lb-rule.png)

6. Click **OK**.

## Test the load balancer

After installing the application that is being load-balanced on each of the VMs, the load balancer is ready to test.

1. Navigate to your load balancer by clicking **All services** in the favourites panel, then selecting **Load balancers** under the networking section.

2. From the list, select the load balancer you created earlier.

3. Copy the **Public IP address** from the **Overview** section.

4. Test the connection to your application. For example, if the app is a web server, paste the public IP into the address bar of your browser. The home page of the web server should be displayed.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
