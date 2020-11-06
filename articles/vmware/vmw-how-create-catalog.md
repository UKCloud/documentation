---
title: How to create a catalog
description: Shows you how to create a catalog within the vCloud Director/VMware Cloud Director Tenant Portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 17/09/2020

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Create a catalog
toc_fullpath: How To/vmw-how-create-catalog.md
toc_mdlink: vmw-how-create-catalog.md
---

# How to create a catalog

## Overview

UKCloud provides a public catalog for you to use that contains standard virtual machine (VM) sizes and operating systems. The public catalog is a good place to start when you first deploy VMs into the UKCloud platform. However, you may want to create your own catalogs, containing specific applications or gold images, which you can then use to deploy VMs quickly.

## Creating a catalog

The first step is to create an empty catalog:

### [vCloud Director 9.7](#tab/tabid-a)

1. In vCloud Director, click the menu icon and select **Libraries**.

    ![Libraries menu option in vCloud Director](images/vmw-vcd-mnu-libraries.png)

2. In the left navigation panel, click **Catalogs**.

    ![Catalogs menu option](images/vmw-vcd-mnu-catalogs.png)

3. Click **New** to create a new catalog.

    ![Add catalog button](images/vmw-vcd-catalog-btn-add.png)

4. In the *Create Catalog* dialog box, **Name** the catalog and give it a **Description** if needed.

5. To specify a particular storage policy for the catalog, select the **Pre-provision on specific storage policy** option then select the desired **Storage Policy**: 

    - **Tier1** is for high performance, high IOPS VMs

    - **Tier2** is for everything else less demanding (recommended for ISO and templates)

    ![Create Catalog dialog box](images/vmw-vcd-create-catalog.png)

6. When you're done, click **OK**.

7. To make the catalog visible to others within your organisation, click the three vertical dots and select **Share**.

    ![Share catalog menu option](images/vmw-vcd-mnu-share-catalog.png)

8. In the *Share Catalog* dialog box, click the **Add** button.

    ![Share Catalog dialog box](images/vmw-vcd-share-catalog.png)

9. In the *Share With Users and Groups* dialog box, select:

    - **Share with everyone in the organisation** to add everyone in the organisation

    - **Share with specific users or groups** to add individual users or groups of users

    You can give users different access levels: **Read Only**, **Full Control** or **Change**. Change allows users to change permissions.

    ![Share With Users and Groups dialog box](images/vmw-vcd91-share-users-groups.png)

10. When you've added all the people who you want to access the catalog, click **OK**.

11. When you're done, click **Save**.

### [VMware Cloud Director 10.1](#tab/tabid-b)

1. In the VMware Cloud Director menu bar, select **Libraries**.

    ![Libraries menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-libraries.png)

2. In the left navigation panel, under *Content Libraries*, select **Catalogs**.

    ![Catalogs menu option](images/vmw-vcd10.1-mnu-catalogs.png)

3. On the *Catalogs* page, click **New** to create a new catalog.

    ![New catalog button](images/vmw-vcd10.1-catalog-btn-new.png)

4. In the *Create Catalog* dialog box, enter a **Name** for the catalog and give it a **Description** if needed.

5. To specify a particular storage policy for the catalog, select the **Pre-provision on specific storage policy** option then select the desired **Storage Policy**:

    - **Tier1** is for high performance, high IOPS VMs

    - **Tier2** is for everything else less demanding (recommended for ISO and templates)

    ![Create Catalog dialog box](images/vmw-vcd10.1-create-catalog.png)

6. When you're done, click **OK**.

7. To make the catalog visible to others within your organisation, click the three vertical dots and select **Share**.

    ![Share catalog menu option](images/vmw-vcd10.1-mnu-share-catalog.png)

8. In the *Share Catalog* dialog box, from the **Share with** radio buttons, select:

    - **All Users and Groups** to share the catalog with everyone in the organisation.

    - **Specific Users and Groups** to share the catalog with individual users or groups of users. Select the users and groups from the lists below by selecting the check box for the user or group and selecting the appropriate access level (**Read Only**, **Read/Write** or **Full Control**).

    ![Share Catalog dialog box](images/vmw-vcd10.1-share-catalog.png)

9. When you've added all the people who you want to access the catalog, click **Save**.

***

## Populating a catalog

There are two ways to populate a catalog:

- By [creating a template from an OVF package](#uploading-an-ovf-package)

- By [creating a template from an existing vApp](#adding-an-existing-vapp)

### Creating a template from an OVF package

> [!NOTE]
> Depending on the file size and network speed, the upload may take some time.

To upload an OVF package and assign it to a catalog:

#### [vCloud Director 9.7](#tab/tabid-a)

1. In the *Libraries* page, in the left navigation panel, select **vApp Templates**.

    ![vApp Templates menu option](images/vmw-vcd-mnu-vapp-templates.png)

2. Click **Add** to open an OVF upload window.

    ![Add vApp template button](images/vmw-vcd-btn-add-vapp-template.png)

3. In the *Create vApp template from OVF* dialog box, select the source of the OVF: either enter a **URL** or **Browse** for a local file.

    ![Select Source step of the Create vApp template from OVF dialog box](images/vmw-create-vapp-template-source.png)

    > [!TIP]
    > You can select multiple files by pressing the CTRL key and selecting other files.

4. Click **Next**.

5. Review the details of the OVF template and then click **Next**.

6. Enter a **Name** and **Description** for the template and from the **Catalog** list, select the catalog in which you want to put the OVF. Click **Next** to continue.

    ![Select vApp Template Name step of the Create vApp template from OVF dialog box](images/vmw-create-vapp-template-catalog.png)

7. Review the details of the vApp template and when you're done, click **Finish** to deploy.

### [VMware Cloud Director 10.1](#tab/tabid-b)

1. On the *Libraries* page, in the left navigation panel, under *Content Libraries*, select **vApp Templates**.

    ![vApp Templates menu option](images/vmw-vcd10.1-mnu-vapp-templates.png)

2. On the *vApps Templates* page, click **New**.

    ![Add vApp template button](images/vmw-vcd10.1-btn-add-vapp-template.png)

3. In the *Create vApp template from OVF* dialog box, select the source of the OVF either by entering a **URL** or clicking the **Browse** icon to locate the file on your computer.

    ![Create vApp template from OVF dialog box - Select Source page](images/vmw-vcd10.1-create-vapp-template-source.png)

    > [!TIP]
    > You can select multiple files by pressing the CTRL key and selecting additional files.

4. Click **Next**.

5. On the *Review details* page, confirm the details of the OVF template and then click **Next**.

6. On the *Select vApp Template Name* page, enter a **Name** and **Description** for the template.

7. From the **Catalog** list, select the catalog in which you want to put the OVF, then click **Next**.

    ![Create vApp template from OVF dialog box - Select vApp Template Name page](images/vmw-vcd10.1-create-vapp-template-catalog.png)

8. On the *Ready to Complete* page, review the details of the vApp template and when you're done, click **Finish** to deploy.

***

### Adding an existing vApp

#### [vCloud Director 9.7](#tab/tabid-a)

To create a catalog from an existing vApp:

1. In vCloud Director, click the menu icon and select **Datacenters**.

    ![Datacenters menu option in vCloud Director](images/vmw-vcd-mnu-dcs.png)

2. Select the VDC where the vApp is located.

3. In the left navigation panel, click **vApps**.

    ![vApps menu option](images/vmw-vcd-tab-vapps.png)

4. In the card for the vApp that you want to add to the catalog, select **Actions** then **Add to Catalog**.

    ![Add to Catalog menu option](images/vmw-vcd-mnu-add-to-catalog.png)

    You can add both running and stopped vApps to the catalog, although it's worth noting that creating a catalog image from a running vApp could affect performance.

5. You can now choose the catalog you want to add the vApp to, give the vApp a new name, assign a storage lease, and define whether vApps deployed using this template are identical or customisable.

    You can also overwrite an existing catalog item. If the catalog you are adding the vApp to is published externally, you'll see a warning.

    ![Add to Catalog dialog box](images/vmw-vcd-add-to-catalog.png)

6. When you're done, click **OK**.

    A status bar will appear on top with the message: **Please wait**. You can close the window and check the progress by expanding the *Recent Tasks* section at the bottom of the vCloud Director interface.

### [VMware Cloud Director 10.1](#tab/tabid-b)

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC in which the vApp you want to use is located.

2. In the left navigation panel, select **vApps**.

    ![vApps menu option](images/vmw-vcd10.1-tab-vapps.png)

3. In the card for the vApp that you want to add to the catalog, select **Actions** then **Add To Catalog**.

    ![Add To Catalog menu option](images/vmw-vcd10.1-mnu-add-to-catalog.png)

    You can add both running and stopped vApps to the catalog, although it's worth noting that creating a catalog image from a running vApp could affect performance.

4. In the *Add to Catalog* dialog box, click the **Catalog** list, then select the catalog you want to add the vApp to.

5. Give the vApp template a **Name** and **Description** and define whether vApps deployed using this template are identical or customisable.

    You can also overwrite an existing catalog item. If the catalog you are adding the vApp to is published externally, you'll see a warning.

    ![Add to Catalog dialog box](images/vmw-vcd10.1-add-to-catalog.png)

6. When you're done, click **OK**.

    A status bar will appear on top with the message: **Please wait**. You can close the window and check the progress by expanding the *Recent Tasks* section at the bottom of the vCloud Director interface. [confirm]

***

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
