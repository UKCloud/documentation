---
title: How to report licence usage for the VMware Licence Service
description: Provides instructions for how to create the licence usage report for the VMware Licence Service
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 31/07/2020
toc_rootlink: How To
toc_sub1: VMware Licence Service
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Report VLS licence usage
toc_fullpath: How To/VMware Licence Service/vmw-how-vls-report-usage.md
toc_mdlink: vmw-how-vls-report-usage.md
---

# How to report licence usage for the VMware Licence Service

## Overview

The VMware Licence Service (VLS) enables you to switch to a flexible, VMware Cloud Provider Programme (VCPP) consumption-based licensing model.

As the VLS licensing model is consumption-based, you must generate reports in the vCloud Usage Meter (Usage Meter) and send them to UKCloud each month to detail your usage of VMware products.

This article provides all the information you need to use the Usage Meter to generate usage reports for VLS. For more information about the Usage Meter, see the VMware documentation [here](https://docs.vmware.com/en/vCloud-Usage-Meter/3.6/com.vmware.vcum.usersguide.doc/GUID-AE1277B2-6B5A-4CAE-832A-DF89C1BD71DC.html).

## Prerequisites

Before you can create usage reports, you must have:

- Installed and configured the vCloud Usage Meter (see [*How to install the vCloud Usage Meter*](vmw-how-vls-install-usage-meter.md))

- Added your VMware products to the Usage Meter and completed the discovery of the environment (see [*How to add products to the vCloud Usage Meter*](vmw-how-vls-add-products.md))

## Creating a customer record

To create usage reports, you must have a customer record in the Usage Meter.

1. Log in to the Usage Meter web application.

2. In the top-right menu, select **Customers**, then click **Add**.

3. In the _Add/Edit Customer_ dialog box, in the **Name** field, enter your customer name.

4. From the **Country** list, select **United Kingdom**.

5. In the **Postal Code** field, enter your postcode.

6. Click **Save**.

## Creating licence reporting rules

After creating the customer record, you need to create a rule to map resources to your environment.

1. In the top-right menu of the Usage Meter web application, select **Rules**.

2. From the **Customer** list, select your customer name.

3. On the **Create Rules** tab, in the _Rule Creator_ section, from the **Object Type** list, select your vCenter Server.

4. From the **vCenter** list, select the IP of your vCenter, then click **Create**.

5. Repeat the steps above for all the vCenters in the list.

    You can see all the rules you create on the **Rules List** tab.

6. After a few minutes, you can check that the Usage Meter has assigned all the VMs to the customer record by clicking the **Display Mapped Virtual Machines** button. You should see a list of VMs.

## Generating the licence usage report

Every month, you're required to send the following reports to <vls@ukcloud.com>:

- Customer Monthly Usage report

- Monthly Usage report

If you've connected the Usage Meter to your SMTP sever, you can automatically email the reports each month. Otherwise, you can generate the reports manually and email them to UKCloud.

> [!NOTE]
> You must provide the usage reports to UKCloud within the first five working days of each month. Failure to do so is a breach of contract and costs will be estimated.

### Enabling automatic reporting

If you've connected the Usage Meter to your SMTP server, you can automatically email the reports to UKCloud each month.

To enable automatic reporting:

1. In the top-right menu of the Usage Meter web application, select **Automatic Reporting**.

2. In the _Submit reports to self_ section, complete the fields as follows:

    - **Name**: Enter the name for the reporting, for example, `UKCloud VLS reports`

    - **Reporting Day**: Select the day on which you want to send the reports (you must provide usage reports to UKCloud within the first five working days of each month)

    - **Reports**: Select the **Customer Monthly Usage** and **Monthly Usage** check boxes

    - **From Email**: Enter your sender email address, for example `usagemeter@<domain>`

    - **To Email**: Enter `vls@ukcloud.com`

3. Click **Save**.

    The **Last time report sent** field shows the date when the usage reports were last sent, so that you can confirm that the reports are being sent correctly.

### Generating usage reports manually

You can also manually generate and email the monthly usage reports.

1. In the top-right menu of the Usage Meter web application, select **Reports**.

2. From the **Report** field, select **Customer Monthly Usage**.

3. In the **Month of** field, select the current month and year.

4. Select the **Zip** check box, then click **Export**.

5. Repeat the steps above, this time selecting the **Monthly Usage** report.

6. When you have both reports, send them to <vls@ukcloud.com>.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
