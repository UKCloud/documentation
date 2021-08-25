---
title: How to access VMware Cloud Director through the vCloud API
description: Describes how to get started with the vCloud API
services: vmware
author: shighmoor
<<<<<<< Updated upstream
reviewer: jwhittingham
lastreviewed: 28/06/2021
=======
reviewer: Gsmith
lastreviewed: 01/08/2021
>>>>>>> Stashed changes

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access VMware Cloud Director through the vCloud API
toc_fullpath: How To/vmw-how-access-vcloud-api.md
toc_mdlink: vmw-how-access-vcloud-api.md
---

# How to access VMware Cloud Director through the vCloud API

## Overview

To perform some tasks within your UKCloud for VMware environment, you may need to access VMware Cloud Director through the vCloud API. This guide shows you how to access the vCloud API.

## Before you begin

Before using the vCloud API, we recommend that you install a REST client that enables you to access the API. The steps in this article use a plugin called YARC. For information about how to install this plugin, see [*How to install a REST client to access the vCloud API*](vmw-how-install-vcloud-api-rest-client.md).

## Finding your vCloud API credentials

Before using the vCloud API, you first need to find your API credentials.

1. Log in to the UKCloud Portal.

    For more detailed instructions, see the [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md).

2. Select your account.

3. In the top right corner of the page, click your username and then select **API**.

    ![API menu option in UKCloud Portal](images/vmw-portal-mnu-api.png)

4. The *API* page provides a view of your personal credentials for accessing the vCloud API. In particular, the page provides the following information for each compute service:

    - **API URL** - Use this URL at the beginning of your calls to the vCloud API.

        > [!NOTE]
        > This URL will be different depending on the region in which your compute service is located.

    - **API Username** - The user ID to use to authenticate yourself with the vCloud API.

        > [!NOTE]
        > The compute service ID is appended to the end of the username. This is because you may have access to multiple compute services.

    - **Username** - The API username without the appended compute service ID.

    - **Org ID** - Use this to uniquely identify the compute service (or vOrg) when using the vCloud API.

    - **Password** - For authentication with the vCloud API. This password is the same as the one you use to log in to the UKCloud Portal.

    ![API page](images/vmw-portal-api-details.png)

5. Make a note of the **Org ID**, the **API URL** and your **API Username**.

## Obtaining an authorisation token

To start interacting with the vCloud API, you first need to obtain an `x-vmware-vcloud-access-token` token; to do this you need to adjust some settings in your chosen RESTClient.

1. From the **Method** menu, make sure **POST** has been selected.

    ![POST request method](images/vmw-restclient-request-method-post1.png)

2. In the **API** field, enter the API URL you recorded earlier and append the following to the end of the URL:

        /api/sessions

    ![API URL](images/vmw-restclient-request-method-post1.png)

3. Next add a Basic Authentication header. To do this, from the **Authentication** menu select **Add Credentials**.

    ![Basic Authentication menu option](images/vmw-restclient-basic-authentication1.png)

4. In the *Basic Authentication* dialog box, in the **Username** field, enter your API username recorded earlier from the API page.

5. In the **Password** field enter your UKCloud Portal password and then click **Okay**.

    ![Basic Authentication dialog box](images/vmw-restclient-authentication-details1.png)

6. Next add an Accept header. To do this, from the **Headers** menu, select **Custom Header**.

    ![Custom Header menu option](images/vmw-restclient-custom-header1.png)

7. In the *Request Header* dialog box, in the **Header Name** field, enter `Accept`.

8. In the **Value** field enter `application/*+xml;version=34.0` and then click **Save**.

    ![Request Headers dialog box](images/Request_Headers_dialog_box_2.1.png)

9. The *Headers* section should now be displayed, containing the Accept header.

    ![Headers section with Accept header](images/vmw-restclient-accept-header1.png)

10. The RESTClient has now got all the required settings in place to make a request to the vCloud API to obtain a `x-vmware-vcloud-access-token` token.

11. When a response is received the **Headers** tab in the *Response* section will be populated, including an `x-vmware-vcloud-access-token` token.

    ![API response with authentication token](images/vmw-restclient-authentication-token.png)

12. The `x-vmware-vcloud-access-token` token becomes part of an Authorization header, which will replace the Basic Authentication header added earlier. To do this highlight and copy the string of characters displayed after the word `x-vmware-vcloud-access-token`.

    > [!NOTE]
    > If at any point while following the instructions in this guide, the output displayed in the RESTClient does not look similar to that shown in the images, you can use the value of the **Status Code** field to determine what went wrong and needs investigation. In this case above, **Status Code** received was HTTP 200 OK, which means that the request succeeded. For a list of HTTP response codes, see [HTTP Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

13. Next, add an Authorization header. To do this, from the **Headers** menu, select **Custom Header**.

14. In the *Request Header* dialog box, in the **Name** field enter 'Authorization'.

15. In the **Value** field, enter 'Bearer ' (with a trailing space), then paste the string of characters copied in the previous step, then click **Save**.

    ![Authorization token in request headers](images/vmw-restclient-request-headers-token1.png)

16. Now that you've obtained an `x-vmware-vcloud-access-token` token, you can remove the Basic Authentication. This was added in step 4.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
