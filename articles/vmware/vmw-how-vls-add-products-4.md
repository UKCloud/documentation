---
title: How to add products to vCloud Usage Meter
description: Provides instructions for how to add products to the vCloud Usage Meter for the VMware Licence Service
services: vmware
author: mperry
reviewer: mperry
lastreviewed: 24/01/2022
toc_rootlink: How To
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Add products to the vCloud Usage Meter
toc_fullpath: How To/VMware Licence Service/vmw-how-vls-add-products-4.md
toc_mdlink: vmw-how-vls-add-products-4.md
---

# How to add products to the vCloud Usage Meter

## Overview

The VMware Licence Service (VLS) enables you to switch to a flexible, VMware Cloud Provider Programme (VCPP) consumption-based licensing model.

As the VLS licensing model is consumption-based, you must submit reports to VMware to detail your usage of VMware products. To generate these reports, you need to install the vCloud Usage Meter (Usage Meter).

This article provides all the information you need to add popular products to the Usage Meter. For more information about the Usage Meter, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/index.html#about-vcloud-usage-meter-0).

## Prerequisites

You must have installed and registered the vCloud Usage Meter. For more information, see [*How to install the vCloud Usage Meter*](vmw-how-vls-install-usage-meter-4.md).

## Adding products to the Usage Meter

To collect VMware product usage information for your VLS entitlement, you must add each product that you require to be monitored to the Usage Meter. For each product that you add, the Usage Meter might present a certificate that you can verify, which you'll need to accept before proceeding.

The instructions below show how to enable monitoring for some of the base VMware products. For instructions for additional products, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/4.5/Using-and-Managing-vCloud-Usage-Meter/GUID-228A9D22-6993-4E2E-B14B-F30921339DF3.html).

### Adding a vCenter Server to the Usage Meter

You can add one or more vCenter Server instances to the Usage Meter.

#### Creating a role for the Usage Meter

Before you can add a vCenter Server to the Usage Meter, you need to create a new role with the correct read only permission:

1. In vCenter, navigate to **Administration > Roles**, then click the **Create role** button.

2. Enter **Role name**, for example, `usagemeter_RO`.

3. Select the **Profile-driven storage > Profile-driven storage view** permission and click **OK**.

4. Navigate to **Administration > Users and Groups**.

5. Create a new local user, for example, `usagemeter` and record the password.

6. Navigate to **Hosts and Clusters** and select the root server object.

7. Select **Permissions** and click the **Add** button.

8. Enter the user and role created in these steps and select **Propagate to children**, then click **OK**.

#### Adding a vCenter Server

To monitor vCenter Servers using the Usage Meter, verify that you have the host name and the above credentials for the vCenter Server you're adding.

To add a vCenter Server to the Usage Meter:

1. Log in to the Usage Meter web application using the `usagemeter` account.

2. In the main menu bar of the vCloud Usage Meter web interface, click **Products**.

3. In the left navigation pane, click **vCenter / VMware Cloud Foundation**.

4. In the _vCenter / VMware Cloud Foundation_ page, click the **Add** button.

5. In the **Endpoint** field, enter the host name or IP address of the vCenter Server instance. Leave the default port number as 443.

6. In the **Username** and **Password** fields, enter the FQDN credentials of the Usage Meter user created above or created previously, for example, `usagemeter@vsphere.local`.

7. (Optional) If you use an external Platform Services Controller, select the **Use External Platform Services Controller (PSC)** check box and enter the IP address or host name of the external Platform Services Controller.

8. (Optional) Confirm if vCloud Usage Meter must meter the virtual machines that are protected by all Site Recovery Manager instances, associated with the registered vCenter Server instance. To disable the metering of Site Recovery Manager, deselect the **Meter VMs protected by all SRMs** check box.

9. Click **Add**.

10. For each vCenter Server instance that you add, vCloud Usage Meter presents a certificate that you must accept before proceeding.

11. To accept the certificate, on the _vCenter / VMware Cloud Foundation_ page, select the vCenter Server instance and, in the **Status** column, click **Please accept certificate**, then select the vCenter in the popup window.

12. In the _Certificate Info_ window, check the certificate is correct and click **ACCEPT**.

Once added correctly, the status column will report an _OK_ status. If an error occurs, you'll see a message against the server instance indicating the issue.

### Adding NSX-v Manager to the Usage Meter

To meter the product consumption data of NSX Data Center for vSphere, you must add the NSX Manager instance to vCloud Usage Meter.

To Add the NSX Manager to the Usage Meter, you must have already added the vCenter Server instance associated with the NSX-v Manager to the vCloud Usage Meter list of vCenter Server instances.

You must have the CLI Admin username and password for the NSX-v Manager appliance that you want to add.

To add NSX Manager to the Usage Meter:

1. In the main menu bar of the vCloud Usage Meter web interface, click **Products**.

2. In the left navigation bar, click **NSX-v**.

3. On the _NSX-v_ page, click the **Add** button.

4. In the **vCenter Host Name** field, select the appropriate vCenter Server host name or IP address.

5. In the **Endpoint** field, enter the host name or IP address of the NSX-v Manager appliance.

6. In the **Username** and **Password** fields, enter the NSX-v Manager CLI Admin credentials.

7. Click **Add**.

8. For each NSX Manager that you add, vCloud Usage Meter may present a certificate that you must accept before proceeding.

9. To accept the certificate, on the _NSX-v_ page, select the NSX Manager instance and, in the **Status** column, click **Please accept certificate**, then select the NSX-v Manager in the popup window.

10. In the _Certificate Info_ window, check the certificate is correct and click **ACCEPT**.

Once added correctly the status column will report an _OK_ status. If an error occurs, you'll see a message against the server instance indicating the issue.

### Adding NSX-T to the Usage Meter

To meter the product consumption data of NSX-T Data Center, you must add the NSX-T Manager instance to vCloud Usage Meter.

You must add the vCenter Server instance associated with the NSX-T Manager to the vCloud Usage Meter list of vCenter Server instances.

You must have the `CLI Admin` username and password for the NSX-T Manager instance that you want to add.

To add NSX-T to the Usage Meter:

1. In the main menu bar of the vCloud Usage Meter web interface, click **Products**.

2. In the left navigation bar, click **NSX-T**.

3. On the _NSX-T_ page, click the **Add** button.

4. In the **Endpoint** field, enter the host name or IP address of the NSX-T Manager instance.

5. In the **Username** and **Password** fields, enter the NSX-T Manager CLI Admin credentials.

6. Click **Add**.

7. For each NSX-T instance that you add, vCloud Usage Meter may present a certificate that you must accept before proceeding.

8. To accept the certificate, on the _NSX-T_ page, select the NSX Manager instance and, in the Status column, click **Please accept certificate**, then select the NSX-T instance in the popup window.

9. In the _Certificate Info_ window, check the certificate is correct and click **ACCEPT**.

### Adding vRealize Operations Manager to the Usage Meter

The vROPs Manager solutions and adapters must be properly configured. For more information, see _Connecting to Data Sources_ in the vRealize Operations Manager Documentation.

The vROPs Manager instance must be registered as a vCenter Server extension.

The account used for vROPs access must have at least read-only privileges.

> [!NOTE]
> To prevent metering issues with vROps, ensure vROps, vCenter and the Usage Meter are all using the same time zone.

To add vROPs to the Usage Meter:

1. In the main menu bar of the vCloud Usage Meter web interface, click **Products**.

2. In the left navigation bar, click **vRealize Operations**.

3. On the _vRealize Operations_ page, click **Add**.

4. In the **Endpoint** field, enter the host name or IP address of the vRealize Operations Manager instance. The default port number is 443.

5. In the **Username** and **Password** fields, enter the credentials for the vRealize Operations Manager instance.

6. Click **Add**.

7. For each vROPs instance that you add, vCloud Usage Meter may present a certificate that you must accept before proceeding.

8. To accept the certificate, on the _vRealize Operations_ page, select the vROPs Manager instance and, in the Status column, click **Please accept certificate**, then select the vROPs instance in the popup window.

9. In the _Certificate Info_ window, check the certificate is correct and click **ACCEPT**.

#### How to limit the scope of vROPs to only meter a subset of VMs.

vCloud Usage Meter can meter a subset of virtual machines that vRealize Operations Manager controls. To support such a topology, you must create a specific user for vRealize Operations Manager, who is granted access to the VMs in vROPs, and use this account for metering in vCloud Usage Meter.

To enable metering of only a subset of VMs registered in vROPs:

1. Log in to the _Administration_ interface of vRealize Operations Manager.

2. Navigate to _Administration > Access Control_ and on the **User Accounts** tab, click the **Add** button.

3. In the _Add User_ window, enter the basic user information and click **Next**.

4. To assign roles and allocate resources, in the _Assign Groups and Permissions_ window, click **Objects**.

5. From the _Select Role_ drop-down menu, select **Administrator** and select the **Assign this role to the user** check box.

6. In the _Select Object Hierarchies_ pane, select the **vSphere Storage** check box.

7. The vSphere inventory tree appears in the _Select Object_ pane.

8. In the _Select Object_ pane, select the virtual machines to be metered and click **Finish**.

9. Go to the vCloud Usage Meter web interface and add or update the user credentials for vRealize Operations Manager to use the new account.

### Adding Horizon to the Usage Meter

Customers can meter Horizon deployments starting with Horizon 7.10 and up.

> [!NOTE]
> Horizon metering does not include NSX for Desktop or VSAN for Desktop metering, these must be added separately to the Usage Meter using the NSX or vSAN metering.

Horizon usage is based on the highest concurrent connections per month. Usage Meter will track the calendar month statistics and will reset its count at the beginning of a new month. This supports both standard Horizon desktops and Horizon Apps usage.

If a Horizon Connection Server exists behind a load balancer, you must add a Connection Server driectly to vCloud Usage Meter, not via a load balanced IP.

If you've deployed multiple Connection Servers in a load balanced cluster, you must add only one of the Connection Servers to vCloud Usage Meter.

To add Horizon to the Usage Meter:

1. In the main menu bar of the vCloud Usage Meter web interface, click **Products**.

2. In the left navigation bar, click **Horizon**.

3. On the _Horizon_ page, click **Add**.

4. In the **Endpoint** field, enter the host name or IP address of your VMware Horizon instance.

5. In the **Username** and **Password** fields, enter the credentials for the VMware Horizon instance.

6. Enter the VMware Horizon domain name.

7. Click **Add**.

## Checking the monitoring status

Once you've finished adding all of your metered products, you can check monitoring status to ensure the Usage Meter is monitoring products correctly.

1. In the main menu bar of the vCloud Usage Meter web interface, click **Notifications**.

2. Using the Time range fields you can change the dates to display.

3. The top area displays an overall status of each day's collections. Each day is represented by an icon displaying the overall collection status.

4. The bottom area displays the current month's worth of collections, which you can filter using the columns or by clicking on the date in the top section.

5. If collections are failing, hover the mouse over the icon in the top section to display how many errors were recorded. Click the icon to filter the bottom window and display the error messages.

6. If you're unable to diagnose the cause of the errors, you can use the **Support** option from the menu bar to generate a log bundle and then raise a ticket in [My Calls](https://portal.skyscapecloud.com/support/ivanti) and attach the log for investigation.

## Setting licence packs

Once you've completed the addition of VMware products to the Usage Meter and it's performed a discovery of the environment, you need to configure the discovered licences to set the correct billing category.

1. In the main menu bar of the vCloud Usage Meter web interface, click **Licenses**.

3. In the _Licenses_ window, you'll see all the discovered licences.

4. Ensure all UKCloud VLS supplied licences have the **Licenses Category** set to **Rental**.

5. For any old licences that were part of your old perpetual VMware licence, select the licence, click **EDIT** and change the **License Category** to **Perpetual**, then click **SAVE**.

## Related articles

If you're planning to upgrade any of your VLS-licensed VMware products, you must request new licences before upgrading. For more information, see [*How to request a new VLS license*](vmw-how-vls-request-licence.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
