---
title: How to create a catalog
description: Shows you how to create a catalog within VMware Cloud Director
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 20/10/2022

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

1. In the VMware Cloud Director top menu, select **Libraries**.

   ![Libraries menu option in VMware Cloud Director](images/vmw-mnu-libraries-vcd10.3.png)

2. In the left navigation panel, under *Content Libraries*, select **Catalogs**.

   ![Catalogs menu option](images/vmw-mnu-catalogs-vcd10.3.png)

3. On the *Catalogs* page, click **New** to create a new catalog.

   ![New catalog button](images/vmw-catalog-btn-new-vcd10.3.png)

4. In the *Create Catalog* dialog box, enter a **Name** for the catalog and give it a **Description** if needed.

   ![Create Catalog dialog box](images/vmw-catalog-dlg-create-catalog-vcd10.3.png)

5. To specify a particular storage policy for the catalog, select the **Pre-provision on specific storage policy** option. Select the appropriate **Org VDC**, then select the **Storage Policy**.

   ![Create Catalog dialog box - Storage Policy](images/vmw-catalog-dlg-create-catalog-storage-policy-vcd10.3.png)

6. When you're done, click **OK**.

7. To make the catalog visible to others within your organisation, click catalog menu (three vertical dots) and select **Share**.

   ![Share catalog menu option](images/vmw-catalog-mnu-share-vcd10.3.png)

8. In the *Share Catalog* dialog box, from the **Share with** radio buttons, select:

    - **All Users and Groups** to share the catalog with everyone in the organisation.

    - **Specific Users and Groups** to share the catalog with individual users or groups of users. Select the users and groups from the list below by selecting the appropriate check boxes and selecting the appropriate access level (**Read Only**, **Read/Write** or **Full Control**) from the **Access Level** list.

      - **Read Only** to view the contents of the catalog

      - **Read/Write** to view the contents of the catalog and add content to the catalog

      - **Full Control** to have full control of the catalog's content and settings

    ![Share Catalog dialog box](images/vmw-catalog-dlg-share-catalog-vcd10.3.png)

9. When you've added all the people who you want to access the catalog, click **Save**.

## Populating a catalog

There are two ways to populate a catalog:

- [*Create a template from an OVF package*](#creating-a-template-from-an-ovf-package)

- [*Create a template from an existing vApp*](#creating-a-template-from-an-existing-vapp)

### Creating a template from an OVF package

You can add items to a catalog by creating a vApp template from an OVF package.

> [!NOTE]
> Depending on the file size and network speed, the upload of the OVF file may take some time.

1. In the VMware Cloud Director top menu, select **Libraries**.

   ![Libraries menu option in VMware Cloud Director](images/vmw-mnu-libraries-vcd10.3.png)

2. In the left navigation panel, under *Content Libraries*, select **vApp Templates**.

   ![Catalogs menu option](images/vmw-mnu-vapp-templates-vcd10.3.png)

3. On the *vApps Templates* page, click **New**.

    ![Add vApp template button](images/vmw-catalog-btn-new-vapp-template-vcd10.3.png)

4. In the *Create vApp template from OVF* dialog box, select the source of the OVF either by entering a **URL** or clicking the **Browse** icon to locate the file on your computer.

    ![Create vApp template from OVF dialog box - Select Source page](images/vmw-catalog-dlg-create-template-ovf-source-vcd10.3.png)

    > [!TIP]
    > You can select multiple files by pressing the CTRL key and selecting additional files.

5. Click **Next**.

6. On the *Review Details* page, confirm the details of the OVF template and then click **Next**.

7. On the *Select vApp Template Name* page, enter a **Name** and **Description** for the template.

8. From the **Catalog** list, select the catalog to which you want to add the template, then click **Next**.

    ![Create vApp template from OVF dialog box - Select vApp Template Name page](images/vmw-catalog-dlg-create-template-ovf-name-vcd10.3.png)

9. On the *Ready to Complete* page, review the details of the vApp template and when you're done, click **Finish** to deploy.

### Creating a template from an existing vApp

You can also add content to a catalog by creating a vApp template from an existing vApp.

1. In the VMware Cloud Director *Virtual Data Center* dashboard, select the VDC that contains the vApp you want to use for the template.

2. In the left navigation panel, select **vApps**.

   ![vApps menu option](images/vmw-mnu-vapps-vcd10.3.png)

3. In the card for the vApp that you want to use for the template, select **Actions** then **Create Template**.

   ![Create Template menu option](images/vmw-vapp-mnu-create-template-vcd10.3.png)

   > [!NOTE]
   > You can use both running and stopped vApps to create a template, although it's worth noting that creating a template from a running vApp could affect performance.

4. In the *Add to Catalog* dialog box, from the **Catalog** list, select the catalog you want to add the vApp template to.

   ![Add to Catalog dialog box - Select Catalog](images/vmw-vapp-dlg-add-to-catalog-select-catalog-vcd10.3.png)

5. You can overwrite an existing template in the catalog by selecting **Overwrite catalog item** then selecting the item to overwrite. If the catalog you're adding the vApp to is published externally, you'll see a warning.

   ![Add to Catalog dialog box - Overwrite catalog item](images/vmw-vapp-dlg-add-to-catalog-overwrite-item-vcd10.3.png)

6. Give the vApp template a **Name** and **Description**.

   > [TIP]
   > If you've chosen to overwrite an existing catalog item, the name will be taken from that existing item and the **Name** field will not be available.

7. From the **When using this template** radio button, select what should happen when a vApp is created from this template:

   - **Make identical copy** creates an identical copy of the vApp on which the template is based

   - **Customize VM settings** enables customisation of the VM settings

   ![Add to Catalog dialog box](images/vmw-vapp-dlg-add-to-catalog-vcd10.3.png)

8. When you're done, click **OK**.

   You can check the progress by expanding the *Recent Tasks* section at the bottom of the VMware Cloud Director interface.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
