---
title: How to use file browsers with Cloud Storage | UKCloud Ltd
description: Using file browsers with Cloud Storage
services: cloud-storage
author: Dan Baker
reviewer: Sue Highmoor
lastreviewed: 02/01/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Use file browsers with Cloud Storage
toc_fullpath: How To/cs-how-use-file-browsers.md
toc_mdlink: cs-how-use-file-browsers.md
---

# How to use file browsers with Cloud Storage

## Overview

UKCloud's Cloud Storage service is an object storage solution based on Dell EMC Elastic Cloud Storage (ECS). Access is via a RESTful application programming interface (API).

Web applications can easily interact with the API, but the ability to browse the contents of the storage using a graphical client can be useful, as it provides a user friendly interface to the storage. This enables, for example:

- Verification by developers that their applications or scripts work as intended with the storage

- Bulk import or export of content by users

- Easy maintenance and housekeeping of the objects in the storage system

ECS provides two APIs that you can use to manage Cloud Storage: the S3 compatible API and the EMC ECS Atmos API.

> [!NOTE]
> The ECS Atmos API has been deprecated, we therefore suggest customers re-engineer their solutions to make use of the defacto S3-compatible API.

> [!IMPORTANT]
> If you write content to Cloud Storage using one of the APIs, you cannot subsequently access that content using the other API. Choose carefully which API you want to use before beginning a project, as it will be difficult to move between them.

In this article, we'll look at a couple of the many applications that enable you to browse an object storage system.

The inclusion of applications in this article should not be taken as an endorsement or recommendation of them by UKCloud. However, we have tested them with our Cloud Storage service and verified that they work correctly.

> [!NOTE]
> While there are S3 browser extensions available, none of them include the functionality to customise the server host name, which is a requirement for connecting to Cloud Storage. If we find S3 browser extensions that offer this functionality in the future, we'll update this article.

## API endpoints

Cloud Storage provides different API endpoints to access your storage, depending on the UKCloud site and connectivity type you are using. Make sure you use the correct endpoint to ensure the best possible performance for your solution.

S3 API endpoints:

- **Corsham (Assured)**

  - Internet: `cas.cor00005.ukcloud.com`

  - PSN Assured: `cas.cor00005.psnassured.ukcloud.com`

  - HSCN: `cas.cor00005.ukcloud.thirdparty.nhs.uk/`
  
- **Farnborough (Assured)**

  - Internet: `cas.frn00006.ukcloud.com`

  - PSN Assured: `cas.frn00006.psnassured.ukcloud.com`

  - HSCN: `cas.frn00006.ukcloud.thirdparty.nhs.uk/`

Contact UKCloud support if you are unsure which endpoint to use.

## Cyberduck

Cyberduck is an open source cross platform file browser for HTTP based object storage solutions. It utilises the S3 endpoints to establish connectivity with the ECS platform over HTTPS.

To install and configure Cyberduck:

1. Download [Cyberduck](https://cyberduck.io/).

2. Install Cyberduck using either the default settings or specifying your own configuration.

3. Download the Cloud Storage Cyberduck profile from [Connecting to ECS with Cyberduck](https://community.emc.com/docs/DOC-27683).

    > [!NOTE]
    > If you download this profile using a browser, ensure the file name is `.cyberduckprofile`.

4. Browse to the downloaded file and double click to open it.

    ![Cyberduck icon](images/cs-file-browsers-1.png)

5. Complete the fields in the new connection dialog box:

    - Ensure you enter the correct endpoint in the **Server** field, as shown in [API endpoints](#api-endpoints)

    - The **Access Key ID** is your User ID, which you can find in the *Storage* section of the UKCloud Portal

    - When you're done, click the **x** icon to close the dialog box

    ![s3 configuration](images/cs-file-browsers-2.png)

6. You can see the new connection in the Cyberduck UI.

    ![New connection window](images/cs-file-browsers-3.png)

7. Right-click the connection and select **Connect to server**.

    ![Connect to server](images/cs-file-browsers-4.png)

8. In the *Login* dialog box, in the **Secret Access Key** field, enter your Cloud Storage secret key.

    If you've forgotten or don't know your secret key, you can reset it in the *Storage* section of the Portal.

    > [!NOTE]
    > Unless you want the password to be saved, deselect the **Save password** check box.

    ![s3 login](images/cs-file-browsers-5.png)

9. After you've authenticated yourself with your secret key, you can view, upload and download files as normal.

    ![Cyberduck interface](images/cs-file-browsers-6.png)

10. For additional information, see [Connecting to ECS with Cyberduck](https://community.emc.com/docs/DOC-27683).

## S3 Browser

S3 Browser is a Windows client for Amazon S3 that you can easily configure to work with the S3 compatible API on Cloud Storage. It’s free for personal use; a licence fee is payable for business use.

To install and configure S3 Browser:

1. Download [S3 Browser](https://s3browser.com/).

2. Execute the installer and follow the prompts in the wizard to complete the installation.

3. The first time you launch S3 Browser, you'll be prompted for your account credentials. Fill in the form with your Cloud Storage credentials:

    a. From the **Account Type** list, select **S3 Compatible Storage**.

    b. Ensure you enter the correct endpoint in the **REST Endpoint** field, as shown in [API endpoints](#api-endpoints).

    c. The **Access Key ID** is your User ID, which you can find in the *Storage* section of the Portal.

    d. The **Secret Access Key** is your secret key. If you've forgotten or don't know your secret key, you can reset it in the *Storage* section of the Portal.

    e. If you're using version 6.*x*.*x* of the browser, be sure to select **Use secure transfer (SSL/TLS)**. This option is not available or necessary for version 5.*x*.*x*.

    ![S3 Browser Edit Account dialog box](images/cs-file-browsers-s3.png)

4. When you're done, click **Save changes**. The application automatically connects to Cloud Storage and displays your buckets (if you have any).

5. For detailed usage instructions, see the documentation available on the S3 Browser web site.

    > [!NOTE]
    > Not all S3 features are implemented by the ECS S3 compatible API, so some functionality may not work. However, common file operations (create, read, write and delete) all work well.

## Next steps

This article has shown you how to browse Cloud Storage buckets using a couple of different applications. For more information about how to use the service, see the following articles:

- [*Getting Started Guide for Cloud Storage*](cs-gs.md)

- [*How to view Cloud Storage information in the UKCloud Portal*](cs-how-view-info-portal.md)

- [*How to create a new Cloud Storage user in the UKCloud Portal*](cs-how-create-user.md)

- [*How to install the GeoDrive Client 2.0*](cs-how-install-geodrive2-client.md)

- [*How to use file browsers with Cloud Storage*](cs-how-use-file-browsers.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
