---
title: How to install the vCloud Usage Meter 4 for the VMware Licence Service
description: Provides instructions for how to install the vCloud Usage Meter for the VMware Licence Service (VLS)
services: vmware
author: mperry
reviewer: mperry
lastreviewed: 024/01/2022
toc_rootlink: How To
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install the vCloud Usage Meter 4
toc_fullpath: How To/VMware Licence Service/vmw-how-vls-install-usage-meter-4.md
toc_mdlink: vmw-how-vls-install-usage-meter-4.md
---

# How to install the vCloud Usage Meter for the VMware Licence Service

## Overview

The VMware Licence Service (VLS) enables you to switch to a flexible, VMware Cloud Provider Programme (VCPP) consumption-based licensing model.

As the VLS licensing model is consumption-based, you must submit reports to VMware to detail your usage of VMware products. To generate these reports, you need to install the vCloud Usage Meter (Usage Meter).

This article provides all the information you need to install the Usage Meter in your UKCloud environment. For more information about the Usage Meter, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/4.5/Getting-Started-vCloud-Usage-Meter/GUID-AE1277B2-6B5A-4CAE-832A-DF89C1BD71DC.html).

## Prerequisites

To install and perform initial configuration of the Usage Meter, you need the following:

- Usage Meter software, available [here](https://cas.cor00005.ukcloud.com/Docs/UKCloud_VLS/UsageMeter4x.zip?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1674593692&Signature=lQPfSuNylwxGS8bd9E%2BIG8L4BcA%3D)

- A Static IP address, DNS server IP address and DNS domain name

- A vCenter network that has access to vCenter management IP and other products to be metered

- Internet access via port 443 to the URL **ums.cloud.vmware.com** for the usage meter IP

- If using vCenter version 6.5, please see note regarding a potential deployment issue and workaround [here](https://kb.vmware.com/s/article/85154)

- Three passwords created and recorded for the usage meter's `root`, `usagemeter` and `umauditor` accounts

### Deploying and setting up the Usage Meter appliance

To deploy and set up the Usage Meter:

1. Download and unzip the Usage Meter OVA file from the link provided in the [Prerequisites](#prerequisites) section.

2. In vCenter, navigate to the folder where you want to deploy the Usage Meter.

3. From the **Actions** menu, select **Deploy OVF Template**.

4. In the *Deploy OVF Template* dialog box, select **Local file** and browse for the Usage Meter OVA file, then click **Next**.

5. Enter a **Name** for the VM and ensure the correct folder is selected (if not, select it now), then click **Next**.

6. Select a cluster or ESXi server to host the VM, then click **Next**.

7. Review the OVA file details, then click **Next**.

8. Review the licence agreement and click **Accept**, then click **Next**.

9. Select the desired data store on which to deploy the VM and, from the **Select virtual disk format** list, select **Thin Provision**, then click **Next**.

10. Select the network you want the Usage Meter to reside on and, from the **IP Allocation** list, select **Static - Manual**.

11. On the *Customize template* page, set the passwords to use for the Usage Meter `root` and `usagemeter` and `umauditor` accounts.

12. Depending on the vCenter client used, expand the *Networking Properties* section and enter the following information (where possible), then click **Next**.

    - **Hostname**: Host name of the usage meter appliance
    
    - **Host Network Default Gateway**: Gateway IP for the network where the Usage Meter is located

    - **Domain name**: The domain name of this VM

    - **DNS search path**: Use the AD Domain name

    - **Domain Name Servers**: The domain name servers IP Addresses for this VM
    
    - **Network 1 IP Address**: Enter the IP address to assign to the Usage Meter

    - **Network 1 Netmask. Netmask in CIDR notation.**: The network mask for this interface. Netmask in CIDR notation (e.g. input 24 for 255.255.255.0, 28 for 255.255.255.240)

13. Review the configuration of the import, then click **Finish**.

14. When the appliance has been deployed, power it on.

#### Setting the time zone

To avoid configuration issues, configure the metered vCenter Server instances, the metered vROPs Manager instances, and vCloud Usage Meter to use the same time zone.

1. Once the appliance is up and running, using a browser enter the following URL https://<UM_IP_ADDRESS>:5480.

2. Log in using the root account and password.

3. In the left menu select the "Time" option.

4. In the right window, this will show the current timezone setting, click edit if you wish to change the timezone setting and save the setting.

#### Performing usage meter registration.

You access the Usage Meter via a web application. Before you can access the application, you need to set a password.

1. Using a browser, connect to the URL https://<UM_IP_ADDRESS>.

2. Log onto the usage meter UI using the account `usagemeter`.

3. On first login, you will be presented with a welcome screen asking to agree to the terms and conditions, click `I agree...` and click `NEXT..`

4. You will now need to configure an internet connection, if you have a HTTP/HTTPS Proxy, select the field and enter the server information and account credentials. If internet access is a direct connection, then select Direct. Click `NEXT..` to initiate a connectivity test to VMware.

5. If the test is successful, the Summary screen is displayed. At this point it will give you a unique usage meter ID number. You will need to copy this ID and send it to your UKCloud CSM contact, so that we can register your usage meter. Once registered you will then be able to continue with adding your products to be metered.

## Next steps

This article described how to install and configure the vCloud Usage Meter 4. Next, you need to give the Usage Meter access to the products that are required to be metered for consumption.

- [*How to add products to the vCloud Usage Meter 4*](vmw-how-vls-add-products-4.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
