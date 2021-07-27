---
title: Portal permissions
description: A guide to the various permissions available to Portal users and what behaviour they enable
services: portal
author: shighmoor
reviewer: bsaunders
lastreviewed: 27/07/2021
toc_rootlink: Reference
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Portal permissions
toc_fullpath: Reference/ptl-ref-overview-permissions.md
toc_mdlink: ptl-ref-overview-permissions.md
---

# Portal permissions

## Overview

System administrators are presented with several options to control user permissions through the UKCloud Portal. The information below is intended as a brief guide to which permissions are applied using each setting.

![Portal permissions page](images/portal_permissions.png)

Some user permissions are controlled on other pages. See the following articles:

- [*How to manage My Calls users*](ptl-how-manage-my-calls.md)

- [*How to manage OpenShift access in the UKCloud Portal*](../openshift/oshift-how-manage-user-access.md)

- [*How to manage UKCloud for OpenStack accounts in the UKCloud Portal*](../openstack/ostack-how-manage-accounts-portal.md)

## User is admin?

User gets full administrative privileges across the entire account. This includes all of the permissions listed below.

## Permissions for Settings

**Update:** A user can update all of the account settings. This includes changing the security methods applied to the account, such as updating security restrictions to require password timeout and 2FA. These users can also change the details of the account's primary and secondary contacts.

**All:** Presently this offers the same capability the update permission.

Leave these boxes unchecked to deny a user these capabilities.

## Permissions for Contacts

Contact and user permissions dictate whether the user is able to make changes to who has access to the account, and their role inside of it.

A contact is just contact details, they may not necessarily have an actual user account. To enable a contact to have user access, they must be marked as "active".

&nbsp; | Create | Read | Update | Delete | All
------ | ------ | ---- | ------ | ------ | ---
**Contact** | Can create a new contact for that account. | Can view existing contacts in that account. | Can edit existing contacts but cannot create new ones. | Can delete existing contacts. | All of the above.
**User** | Can create a user associated to a contact for that account and assign permissions. | Can view existing users for contacts. | Can edit existing users and their permissions. | Can delete existing users from contacts. | All of the above.

## Permissions for UKCloud for VMware

UKCloud for VMware service permissions are based on the VMware Cloud Director RBAC (role based access control) permissions. These roles are applied on a service by service basis - for example someone might be a Catalogue Author of one service, and a Console Only user in a second service.

The roles exposed are:

- Admin

- Catalogue Author

- vApp Author

- vApp User

- Console Only

You can find further details of these roles in the [VMware Cloud Director Service Provider Admin Portal Guide](https://docs.vmware.com/en/VMware-Cloud-Director/10.1/VMware-Cloud-Director-Service-Provider-Admin-Portal-Guide/GUID-BC504F6B-3D38-4F25-AACF-ED584063754F.html).

In addition, UKCloud have created an API Only role that restricts users with VMware Cloud Director permissions to accessing VMware Cloud Director solely via the API, with no GUI access.

> [!NOTE]
> The API Only role must be selected in addition to one of the VMware Cloud Director roles (Admin, Catalogue Author, vApp Author, vApp User or Console Only); you should not select the API Only role on its own.

## Permissions for Cloud Storage

Users need to be granted access to the relevant namespace. Once access is granted, the user will be able to see the namespace, list the buckets in the namespace and reset the secret key. The user will also be able to see consumption data for namespaces and buckets.

## Permissions for Billing

Users with **API** permissions can retrieve billing information using the Portal API. For more information, see the *GET /api/billing/billing-csv* section of the [*UKCloud Portal API Reference Guide*](ptl-ref-portal-api.md).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
