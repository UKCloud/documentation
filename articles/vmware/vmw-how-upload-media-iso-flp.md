---
title: How to upload ISO or FLP media
description: Shows you how to upload ISO (CD/DVD) and FLP (floppy disk) media within the vCloud Director/VMware Cloud Director Tenant Portal
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 06/11/2020

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Upload ISO or FLP media
toc_fullpath: How To/vmw-how-upload-media-iso-flp.md
toc_mdlink: vmw-how-upload-media-iso-flp.md
---

# How to upload ISO or FLP media

## Overview

You may find you need to upload ISO (DVD/CD) or FLP (floppy disk) media to vCloud that have already been provided by UKCloud. These media can then:

- Be consumed by users within your organisation

- Facilitate the creation of VMs from scratch, which can then be saved to your catalog for future deployment

## Uploading media in vCloud Director 9.7

In vCloud Director 9.7, you can use the Tenant Portal to upload media [from a file on your local machine](#uploading-media-from-a-local-file). You can also use the Legacy UI to upload media [from a URL](#uploading-media-from-a-url).

### Uploading media from a local file

1. In vCloud Director, click the menu icon and select **Libraries**.

    ![Libraries menu option in vCloud Director](images/vmw-vcd-mnu-libraries.png)

2. In the left navigation panel, click **Media & Other**.

    ![Media & Other tab](images/vmw-vcd-mnu-media.png)

3. Click **Add**.

    ![Upload media button](images/vmw-vcd-btn-add-media.png)

4. In the *Upload Media* dialog box, select the **Catalog** to which you want to upload the media.

5. Enter a **Name** for the media file if you want to use something more user-friendly than the file name.

6. Click the **Upload** icon and browse to the ISO or FLP file that you want to upload.

    ![Upload Media dialog box](images/vmw-vcd91-upload-media.png)

    > [!NOTE]
    > If you want to upload media from a URL, you must use the Legacy UI.

7. When you're done, click **OK**.

    In the *Media & Other* page, you can monitor the progress of the upload. You can carry on with other work while the upload takes place.

### Uploading media from a URL

1. In the vCloud Director Legacy UI, select the **Catalogs** tab.

    ![Catalogs tab in vCloud Director](images/vmw-vcd-tab-catalogs.png)

    For information about how to access the Legacy UI, see [*How to switch to the vCloud Director Legacy UI*](vmw-how-switch-web-console.md).

2. Select the **Media & Other** tab.

    ![Media & Other tab](images/vmw-vcd-tab-media.png)

3. Click the **Upload** icon.

    ![Upload icon](images/vmw-vcd-ico-upload-media.png)

4. In the *Upload Media & Other* dialog box you can:

    - Paste in a URL for the ISO or FLP media

    - Browse to the ISO or FLP file on your local device and select it (for this to work, you need to have Java JRE available on your device)

    ![Upload Media & Other dialog box](images/vmw-vcd-upload-media-source.png)

5. You can give the media a name and then choose which catalog to put it in.

    ![Specify destination for media](images/vmw-vcd-upload-media-destination.png)

6. When you're done, click **Upload**.

    During the upload, you'll see a status window. You can carry on with other work while the upload takes place.

7. You can close (and reopen) the window by clicking the **View uploads and downloads** icon.

    ![View uploads and downloads icon](images/vmw-vcd-ico-upload-progress.png)

    This opens the *Transfer process* dialog box.

    ![Transfer process dialog box](images/vmw-vcd-transfer-process.png)

## Uploading media in VMware Cloud Director 10.1

In VMware Cloud Director 10.1, you can upload media from a file on your local machine.

1. In VMware Cloud Director, click the menu icon and select **Libraries**.

    ![Libraries menu option in VMware Cloud Director](images/vmw-vcd10.1-mnu-libraries.png)

2. In the left navigation panel, click **Media & Other**.

    ![Media & Other tab](images/vmw-vcd10.1-mnu-media.png)

3. Click **Add**.

    ![Upload media button](images/vmw-vcd-btn-add-media.png)

4. In the *Upload Media* dialog box, select the **Catalog** to which you want to upload the media.

5. Enter a **Name** for the media if you want to use something more user-friendly than the file name.

6. Click the **Upload** icon and browse to the ISO or FLP file that you want to upload.

    ![Upload Media dialog box](images/vmw-vcd10.1-upload-media.png)

7. When you're done, click **OK**.

    You can monitor the progress of the upload in the *Recent Tasks* panel.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
