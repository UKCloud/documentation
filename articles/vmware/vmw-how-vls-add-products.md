---
title: How to add products to the vCloud Usage Meter
description: Provides instructions for how to add products to the vCloud Usage Meter for the VMware Licence Service
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 31/07/2020
toc_rootlink: How To
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Add products to the vCloud Usage Meter
toc_fullpath: How To/VMware Licence Service/vmw-how-vls-add-products.md
toc_mdlink: vmw-how-vls-add-products.md
---

# How to add products to the vCloud Usage Meter

## Overview

The VMware Licence Service (VLS) enables you to switch to a flexible, VMware Cloud Provider Programme (VCPP) consumption-based licensing model.

As the VLS licensing model is consumption-based, you must send reports to UKCloud each month to detail your usage of VMware products. To generate these monthly reports, you need to install the vCloud Usage Meter (Usage Meter) and give it access to the products that you need it to report on.

This article provides all the information you need to add products to the Usage Meter. For more information about the Usage Meter, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/3.6/com.vmware.vcum.usersguide.doc/GUID-AE1277B2-6B5A-4CAE-832A-DF89C1BD71DC.html).

## Prerequisites

You must have installed and configured the vCloud Usage Meter. For more information, see [*How to install the vCloud Usage Meter*](vmw-how-vls-install-usage-meter.md).

## Adding products to the Usage Meter

To collect VMware product usage information for your UKCloud environment, you must add each product that you want to be monitored to the Usage Meter. For each product server that you add, the Usage Meter might present a certificate that you can verify, which you'll need to accept before proceeding.

The instructions below show how to enable monitoring for some of the base VMware products. For instructions for additional products, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/3.6/com.vmware.vcum.usersguide.doc/GUID-DDB3AC30-C62E-496D-A543-5FFF6B881B10.html).

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

To monitor vCenter Servers using the Usage Meter, verify that you have the host name and credentials for the vCenter Server you're adding.

> [!NOTE]
> If you're using VMware Site Recovery Manager (SRM), add the recovery site vCenter before adding the protected site vCenter. The Usage Meter performs collections against all added vCenter Server instances and SRM instances in both the protected and recovery sites.

To add a vCenter Server to the Usage Meter:

1. Log in to the Usage Meter web application.

2. In the top-right menu, select **Manage**, then select the **Products** tab.

3. In the _vCenter Server_ section, click the **Add** button.

4. In the _vCenter Server_ dialog box, if you're using an external Platform Services Controller (PSC), select the **External Platform Services Controller** check box and enter the external PSC host name and port (the default port for PSC is `7444`).

5. In the **vCenter Server hostname** field, enter a host name or IP address of the vCenter Server.

6. In the **Administrator User Name** field, enter the Usage Meter user created above.

7. In the **Password** field, enter the password for the Usage Meter user.

8. Select the **Meter** check box.

    > [!NOTE]
    > Do not select **Meter** if this site is a recovery site vCenter Server instance.

9. If you're using VMware SRM and this vCenter Server is a protected site instance, from the **Site Recovery Manager Peer vCenter Server** list, select the corresponding recovery site instance.

10. Click **Save**.

After you accept any required certificates, the vCenter Server instance is added to the list of vCenter Server instances. If an error occurs, you'll see a message and the server instance will not be added.

### Adding NSX-V Manager to the Usage Meter

To monitor NSX-V Managers using the Usage Meter, verify that you have the NSX CLI Admin user name and password for the NSX Manager you're adding.

To add NSX Manager to the Usage Meter:

1. In the top-right menu of the Usage Meter web application, select **Manage**, then select the **Products** tab.

2. In the _NSX Manager_ section, click **Add**.

3. In the **Host Name or IP** field, enter the host name or IP address of the NSX Manager.

4. In the **User Name** field, enter the NSX CLI Admin user name.

5. In the **Password** field, enter the NSX CLI Admin password.

6. In the **vCenter Host Name or IP** field, enter the referencing vCenter Server host name or IP address.

7. Click **Save**.

After you accept any required certificates, the NSX Manager instance is added to the list of NSX Manager instances. If an error occurs, you'll see a message and the server instance will not be added.

> [!NOTE]
> After successfully adding the NSX Manager instance, if you enter an incorrect password when editing it, the NSX Manager will be deleted. To reactivate it, provide the correct credentials.

### Adding vRealize Operations Manager to the Usage Meter

To monitor vRealize Operations Manager (vROps) instances using the Usage Meter, vROps has to be registered correctly against a vCenter Server. During discovery of a vCenter Server, the Usage Meter will populate a vROps entry. To complete the vROps registration and begin metering, you need to provide the required credentials for each vROps instance you meter.

> [!NOTE]
> To prevent metering issues with vROps, ensure vROps, vCenter and the Usage Meter are all using the same time zone.

To complete vROps registration:

1. In the top-right menu of the Usage Meter web application, select **Manage**, then select the **Products** tab.

2. In the _vRealize Operations Manager_ section, click **Edit** and enter the user name and password.

    - If you're logging in with a local user, use the local `user-name`.

    - If you're logging in with a non-local user, the user name must be in the following format: `user-name@domain-name@domain-alias`, where the `domain-alias` is the domain short name or domain alias.

3. To add vRealize Operations Manager, accept the certificate. If you miss accepting the certificate, delete the vCenter Server associated with that vRealize Operations Manager and then reactivate it.

4. Click **Save**.

## Checking the monitoring status

When you've finished adding all of your metered products and the collection time has been reached, you can check the monitoring status to ensure that the Usage Meter is monitoring products correctly.

1. In the top-right menu of the Usage Meter web application, select **Monitor**.

2. Against each day, you can see the times of successful and failed collections.

3. If collections are failing, hover the mouse over the failure times to display which product is failing collections.

4. If you're unable to diagnose the cause of the failures, you can use the Support option from the menu bar to generate a log bundle and then raise a ticket in [My Calls](https://portal.skyscapecloud.com/support/ivanti) and attach the log for investigation.

## Setting licence packs

When you've completed the addition of VMware products to the Usage Meter and it has done a discovery of the environment, you need to configure the discovered licences to the correct billing category.

1. In the top-right menu of the Usage Meter web application, select **Licenses**.

2. On the _Billing Categories_ tab, against each discovered licence, from the **Billing Category** list, select **VCPP**.

## Next steps

This article described how to give the Usage Meter access to the products that you need it to report on. Next, you need to send monthly usage reports to UKCloud so that you can be billed correctly for the VMware Licence Service.

- [*How to report licence usage for the VMware Licence Service*](vmw-how-vls-report-usage.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
