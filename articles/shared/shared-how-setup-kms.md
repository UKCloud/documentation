---
title: How to license Windows VMs using the UKCloud KMS
description: Shows how to register virtual machines with the KMS within VMwareCloud Director
services: shared-services
author: shighmoor
reviewer: pcantle
lastreviewed: 01/12/2021

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: License Windows VMs using the UKCloud KMS
toc_fullpath: How To/shared-how-setup-kms.md
toc_mdlink: shared-how-setup-kms.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to license Windows VMs using the UKCloud Key Management Server

## Overview

You need to register the Windows virtual machines (VMs) that you create with the UKCloud Key Management Server (KMS). You need to set up a connection with the KMS to enable registration.

## Setting up a connection with the UKCloud KMS

Before product activation, make sure your VMs can communicate with the UKCloud KMS that exists outside your cloud organisation.

To allow this communication, you need to create a source network address translation (SNAT) and firewall rule on your edge gateway:

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC for which server activation is required.

2. In the left navigation panel, under *Networking*, select **Edges**.

    ![Edges menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-edges.png)

3. On the *Edge Gateways* page, select the edge that you want to configure and click **Services**.

    ![Services option](images/vmw-vcd10.1-edge-btn-services.png)

4. On the *Edge Gateway* page, select the **NAT** tab and create a new SNAT rule.

5. Make sure that the **Applied On** field is set to reflect your network firewall tenant (NFT).

6. In the **Original IP/Range** field, enter the IP address, CIDR or range of addresses you want to SNAT out.

7. For the translated address, enter the external IP address of your edge gateway or one of your external IP address assignments.

    For more information about creating SNAT rules, see [*How to create NAT rules*](../vmware/vmw-how-create-nat-rules.md).

8. Select the **Firewall** tab and make sure that an outbound rule exists on your firewall.

    Contact UKCloud Support for details of the **Destination IP** and **Destination Port**.

    For more information about creating firewall rules, see [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md).

## Activating your Windows licence

1. Open a console to the VM you want to license and activate.

2. Launch a command line with administrator rights.

3. Enter:

        C:\ > slmgr /skms  kms.ukcloud.com:1688

4. You'll see the following pop-up box:

    ![Windows Script Host dialog box](images/shared-windows-kms-activate.png)

5. If an error message appears indicating that the KMS server can't be contacted, it means either that the edge gateway hasn't been configured correctly or that DNS can't be retrieved. Try again by issuing the same command but using the IP address of the activation server:

        C:\ > slmgr /skms  51.179.212.115:1688

   or:

        C:\ > slmgr /skms  51.179.215.211:1688
        
    ![Windows Script Host dialog box](images/shared-windows-kms-activate-ip.png)

6. Click **OK**, then from the same command line window, enter:

        C:\ >slmgr /ato

    ![Product successfully activated](images/shared-windows-kms-activate-success.png)

## Related videos

- [*Licensing Windows VMs using the UKCloud Key Management Server video*](shared-vid-licensing-kms.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
