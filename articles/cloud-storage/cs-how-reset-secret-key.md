---
title: How to reset your Cloud Storage secret key | UKCloud Ltd
description: Describes how to reset your Cloud Storage secret key
services: cloud-storage
author: Sue Highmoor

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Reset your Cloud Storage secret key
toc_fullpath: How To/cs-how-reset-secret-key.md
toc_mdlink: cs-how-reset-secret-key.md
---

# How to reset your Cloud Storage secret key

## Overview

Cloud Storage is UKCloud's object storage solution based on Dell EMC Elastic Cloud Storage (ECS).

Each user who can access Cloud Storage has an associated secret key to enable secure authentication. When attempting to access Cloud Storage, you must specify the appropriate secret key. If you forget the secret key for your user ID, you can reset it in the UKCloud Portal.

### Intended audience

To complete the steps in this guide you must have been granted access to the relevant namespace.

## Resetting your secret key

For security purposes, the UKCloud Portal does not display secret keys, if you forget your secret key, you must reset it to generate a new one.

1. In the Portal navigation panel, expand the **Cloud Storage** option and select **ECS**.

2. Click the **Users** button for the namespace for which you want to reset the secret key.

    ![Users button](images/cs-portal-btn-users.png)

3. The *Users* tab lists the different user IDs associated with the namespace.

    ![Users page](images/cs-portal-users.png)

4. Click the **Reset Secret** button next to the appropriate user ID.

5. Click **OK** to confirm that you want to reset the secret key.

    ![Reset Secret dialog box](images/cs-portal-reset-secret.png)

6. Stay on the current page until a popup dialog box displays the new secret key.

    ![New secret key](images/cs-portal-new-key.png)

7. Make a note of the key and then click **Close**.

    > [!NOTE]
    > After you close this dialog box, you will not be able to see the secret key again in the UKCloud Portal. If you do not make a note of the secret key or if you forget or lose it, you will need to reset it again.

## Next steps

This guide has shown you how to reset your Cloud Storage secret key. For information about how to use the service, see the following articles:

- [*Getting Started Guide for Cloud Storage*](cs-gs.md)
- [*How to create a new Cloud Storage user in the UKCloud Portal*](cs-how-create-user.md)
- [*How to view Cloud Storage information in the UKCloud Portal*](cs-how-view-info-portal.md)
- [*Blueprint -- Using storage gateways with Cloud Storage*](https://ukcloud.com/wp-content/uploads/2016/04/UKC-GEN-574-Blueprint-Using-storage-gateways-with-Cloud-Storage-ECS-v1.pdf)
- [*Blueprint -- Using file browsers with Cloud Storage*](https://ukcloud.com/wp-content/uploads/2016/04/UKC-GEN-575-Blueprint-Using-file-browsers-with-Cloud-Storage-ECS-v1.pdf)

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.