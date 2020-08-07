---
title: How to install the vCloud Usage Meter for the VMware Licence Service
description: Provides instructions for how to install the vCloud Usage Meter for the VMware Licence Service (VLS)
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 04/08/2020
toc_rootlink: How To
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install the vCloud Usage Meter
toc_fullpath: How To/VMware Licence Service/vmw-how-vls-install-usage-meter.md
toc_mdlink: vmw-how-vls-install-usage-meter.md
---

# How to install the vCloud Usage Meter for the VMware Licence Service

## Overview

The VMware Licence Service (VLS) enables you to switch to a flexible, VMware Cloud Provider Programme (VCPP) consumption-based licensing model.

As the VLS licensing model is consumption-based, you must send reports to UKCloud each month to detail your usage of VMware products. To generate these monthly reports, you need to install the vCloud Usage Meter (Usage Meter).

This article provides all the information you need to install the Usage Meter in your UKCloud environment. For more information about the Usage Meter, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/3.6/com.vmware.vcum.usersguide.doc/GUID-AE1277B2-6B5A-4CAE-832A-DF89C1BD71DC.html).

## Prerequisites

To install and perform initial configuration of the Usage Meter, you need the following:

- Usage Meter OVA and hot patch 5, available [here](https://cas.frn00006.ukcloud.com/Docs/UKCloud_VLS/UsageMeter.zip?AWSAccessKeyId=438-1048-5-aefff7-1&Expires=1627052235&Signature=fuLTrucDhJbZwGMqswWndKsy6fQ%3D)

- A Static IP address, DNS server IP address and DNS domain name

- A vCenter network that has access to vCenter, the ESXi Host Management interface and other products to be metered

- A Network Protocol Profile created in vCenter (see steps [below](#creating-a-network-protocol-profile)), attached to the network where the Usage Meter will reside

- Access to an SMTP server (if the VM won't have access to an SMTP server, let us know as soon as possible by raising a support ticket in [My Calls](https://portal.skyscapecloud.com/support/ivanti) and we'll provide the necessary information to work around this issue)

- Two passwords created and recorded for the Usage Meter's `root` and `usgmtr` accounts

- SCP or WinSCP access to the Usage Meter IP to transfer the patch file

### Creating a Network Protocol Profile

If you don't already have a Network Protocol Profile attached to the network where the Usage Meter will reside, you must create one before you start the installation.

To create the Network Profile within vCenter:

1. Log on to the vCenter where you want to host the Usage Meter.

2. Navigate to the data center object in the vSphere hierarchy where you want to host the Usage Meter, then select the **Configure** tab.

3. Select **Network Protocol Profiles**, then click **Add**.

4. In the *Add Network Protocol Profile* dialog box, enter the following information:

    - *Name and Network* page: Enter a **Name** for the profile and, in the *Assign Networks* section, select the network on which the Usage Meter will be deployed.

    - *Configure IPv4* page: Enter the network **Subnet**, **Gateway** IP and **DNS server addresses**.

    - *Set other network configurations* page: Enter the **DNS domain** and use the DNS domain for the **DNS search path**.

    - *Ready to complete* page: Review the information you entered.

5. When you're done, click **Finish**.

## Installing the Usage Meter

To use VLS, you must install the Usage Meter to collect usage information and generate the reports that you need to send to UKCloud.

> [!NOTE]
> The following steps use the Flex vCenter client, however they should be the same for the HTML5 client.

### Deploying and setting up the Usage Meter appliance

To deploy and set up the Usage Meter:

1. Download the Usage Meter OVA file from the link provided in the [Prerequisites](#prerequisites) section.

2. In vCenter, navigate to the folder where you want to deploy the Usage Meter.

3. From the **Actions** menu, select **Deploy OVF Template**.

4. In the *Deploy OVF Template* dialog box, select **Local file** and browse for the Usage Meter OVA file, then click **Next**.

5. Enter a **Name** for the VM and ensure the correct folder is selected (if not, select it now), then click **Next**.

6. Select a cluster or ESXi server to host the VM, then click **Next**.

7. Review the OVA file details, then click **Next**.

8. Review the licence agreement and click **Accept**, then click **Next**.

9. Select the desired data store on which to deploy the VM and, from the **Select virtual disk format** list, select **Thin Provision**, then click **Next**.

10. Select the network you want the Usage Meter to reside on and, from the **IP Allocation** list, select **Static - Manual**.

11. On the *Customize template* page, set the passwords to use for the Usage Meter `root` and `usgmtr` accounts.

12. Depending on the vCenter client used, expand the *Networking Properties* section and enter the following information (where possible), then click **Next**.

    - **Network 1 IP Address**: Enter the IP address to assign to the Usage Meter

    - **Gateway**: Gateway IP for the network where the Usage Meter is located

    - **Domain name**: AD Domain name where the ESXi and vCenter host is located

    - **DNS search path**: Use the AD Domain name

    - **DNS servers**: Use the DNS server IPs for the domain

    - **Netmask**: Subnet mask of the network where the Usage Meter is located

13. Review the configuration of the import, then click **Finish**.

14. When the appliance has been deployed, power it on.

#### Setting the time zone

For the data collection process to work correctly, it's important that the Usage Meter is in the same time zone as vCenter.

1. Open the Usage Meter VM console.

2. Select the **Set Timezone** option.

3. Enter `7` for Europe, then enter `49` for United Kingdom.

4. If the time shown for **Selected time is now** is correct, enter `1` to confirm.

#### Setting the web application password

You access the Usage Meter via a web application. Before you can access the application, you need to set a password.

1. In the Usage Meter VM console, select the **Login** option.

2. Log in with the `usgmtr` username and the password that you configured at installation.

3. At the prompt, enter `webpass`.

4. Enter a password for the Usage Meter web application.

    > [!NOTE]
    > Make a note of the password as you'll need it later to log in to the web application.

5. Enter `exit` to log out.

### Applying the latest patch to the Usage Meter appliance

VMware has released several rollup patch packs for Usage Meter 3.6.1. You need to apply the latest patch: Hot patch 5.

1. Download the hot patch zip file from the link provided in the [Prerequisites](#prerequisites) section.

2. In vCenter, take a snapshot of the Usage Meter appliance.

3. Open the Usage Meter VM console and log on as `root`.

4. Edit the `/etc/ssh/sshd.conf` file using vi and, in the `# Authentication` section, change the `PermitRootLogin` option to `yes`, then save the file.

5. Start the SSH service using the following command:

    `service sshd start`.

6. Using SCP or WinSCP, open a connection to the Usage Meter using the `root` account and transfer the hot patch zip file to the `/home/usgmtr` folder. Close SCP/WinSCP when complete.

7. Switch back to the Usage Meter VM console and stop the SSH service using the following command:

    `service sshd stop`

8. Edit the `/etc/ssh/sshd.conf` file using vi and, in the `# Authentication` section, change the `PermitRootLogin` option back to `no`, then save the file.

9. Change directory to `/home/usgmtr` and unzip the hot patch file using the following command:

    `unzip vCloudUsageMeter-3.6.1.0-16604978-hot_patch_5.zip`

10. Run `cat vCloudUsageMeter-3.6.1.0-16604978-hot_patch_5.rpm.sha1` to display its sha1 hash value.

11. Run `sha1sum vCloudUsageMeter-3.6.1.0-16604978-hot_patch_5.rpm` and compare the output to that of the `cat` output to confirm that they match. If they don't, repeat from step 6.

12. Install the patch using the following command:

    `rpm --install vCloudUsageMeter-3.6.1.0-16604978-hot_patch_5.rpm`

13. When the patch has installed, check the services are up and running using `service tomcat status` and, if everything has worked, the service should be active. If not, regress the snapshot taken earlier and perform the steps again.

14. If the patch was applied successfully, delete the snapshot taken in step 2.

### Configuring the Usage Meter

After installing the Usage Meter and applying the latest patch, you need to perform a couple of configuration tasks to complete the setup of the appliance.

#### Performing initial configuration

First, you need to configure a provider and and email server:

1. In your web browser, connect to the URL that is displayed in the Usage Meter VM console, and log in to the web application using the account `admin` and the password you created earlier.

2. On first login, you'll be presented with a dialog box asking to give your permission to submit data to VMware. Click **Accept**.

3. On the **Provider** tab, configure the provider as follows:

    - **Company**: Enter your company name

    - **Contact Name**: Enter the name of your company contact

    - **Phone**: Enter a phone number for your company contact

    - **Email**: Enter the email address to use as the sender address on any system generated emails

    - **Partner ID**: Enter the details given to you during the onboarding of your service

    - **Contract Number**: Enter the details given to you during the onboarding of your service

    - **Site ID**: Enter the details given to you during the onboarding of your service

4. Click **Save**.

5. On the **Email** tab, configure the email server as follows:

    > [!NOTE]
    > If the Usage Meter VM doesn't have access to an SMTP server, let us know as soon as possible by raising a support ticket in [My Calls](https://portal.skyscapecloud.com/support/ivanti) and we'll provide the necessary information to work around this issue.

    - **Host**: The IP address of your SMTP relay

    - **Port**: Port details of the SMTP relay

    - **Connection Security**: Set the type of the SMTP connection

    - **User**: Enter the username if authentication is required

    - **Password**: Enter the password if authentication is required

6. Click **Send email** to send a test email.

7. When you've completed all the fields and sent a test email, you'll be able to click **Save** on the **Email** tab.

#### Completing Usage Meter configuration

After finishing the initial Usage Meter configuration successfully, you can select the other tabs on the *Manage* page to complete the configuration, clicking **Save** on each tab when you're done.

1. On the **Proxy** tab, in the **IP or hostname** field, enter a dummy IP to prevent the Usage Meter from sending data directly to VMware.

2. On the **Collections** tab, from the **Start at minute** list, select the minute of each hour when you want the Usage Meter to attempt to collect usage information from each product.

3. If you've connected the Usage Meter to your SMTP server, on the **Email Alerts** tab, complete the following fields to inform UKCloud of any failed collections:

    - **From Email**: Enter a sender email address, for example, `usagemeter@<domain>`

    - **To Email**: Enter `vls@ukcloud.com` (if you also want to to receive failed collection alerts, use a comma between addresses and enter your internal email address)

    - **Alerts**: Ensure **Failed collection** is selected

    - **Testing**: Select **Send a test email alert after saving**

## Next steps

This article described how to install and configure the vCloud Usage Meter. Next, you need to give the Usage Meter access to the products that you need it to report on and send monthly usage reports to UKCloud.

- [*How to add products to the vCloud Usage Meter*](vmw-how-vls-add-products.md)

- [*How to report licence usage for the VMware Licence Service*](vmw-how-vls-report-usage.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
