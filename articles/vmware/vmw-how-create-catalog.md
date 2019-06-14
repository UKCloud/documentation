---
title: How to create a catalog | UKCloud Ltd
description: Shows you how to create a catalog within vCloud Director
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 18/07/2018 12:04:00

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

1. In vCloud Director, click the menu icon and select **Libraries**.

    ![Libraries menu option in vCloud Director](images/vmw-vcd-mnu-libraries.png)

2. In the left navigation panel, click **Catalogs**.

    ![Catalogs menu option](images/vmw-vcd-mnu-catalogs.png)

3. Click **New** to create a new catalog.

    ![Add catalog button](images/vmw-vcd-catalog-btn-add.png)

4. In the *Create Catalog* dialog box, **Name** the catalog and give it a **Description** if needed.

5. From the **Storage Policy** list, select the storage type used to store the catalog.

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

    You can give users different access levels: **Ready Only**, **Full Control** or **Change**. Change allows users to change permissions.

    ![Share With Users and Groups dialog box](images/vmw-vcd91-share-users-groups.png)

10. When you've added all the people who you want to access the catalog, click **OK**.

11. When you're done, click **Save**.

## Populating a catalog

There are two ways to populate a catalog:

- By [uploading an OVF package](#uploading-an-ovf-package)

- By [creating a template from an existing vApp](#adding-an-existing-vapp)

### Uploading an OVF package

To upload an OVF package and assign it to a catalog:

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

    Depending on template size and network speed, the upload may take some time.

### Adding an existing vApp

To create a catalog from an existing vApp:

1. In the vCloud Director *Virtual Datacenters* dashboard, select the VDC where the vApp is located.

2. In the left navigation panel, click **vApps**.

    ![vApps menu option](images/vmw-vcd-tab-vapps.png)

3. In the card for the vApp that you want to add to the catalog, select **Actions** then **Add to Catalog**.

    ![Add to Catalog menu option](images/vmw-vcd-mnu-add-to-catalog.png)

    You can add both running and stopped vApps to the catalog, although it's worth noting that creating a catalog image from a running vApp could affect performance.

4. You can now choose the catalog you want to add the vApp to, give the vApp a new name, assign a storage lease, and define whether vApps deployed using this template are identical or customisable.

    You can also overwrite an existing catalog item. If the catalog you are adding the vApp to is published externally, you'll see a warning.

    ![Add to Catalog dialog box](images/vmw-vcd91-add-to-catalog.png)

5. When you're done, click **OK**.

    A status bar will appear on top with the message: Please wait. You can close the window and check the progress under Libraries > vApp Templates.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
