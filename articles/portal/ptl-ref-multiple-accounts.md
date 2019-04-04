---
title: Partitioning projects or end customers using UKCloud accounts | UKCloud Ltd
description: 
services: portal
author: Sophie Wake
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Partitioning projects or end customers using accounts
toc_fullpath: Reference/ptl-ref-multiple-accounts.md
toc_mdlink: ptl-ref-multiple-accounts.md
---

# Partitioning projects or end customers using UKCloud accounts

## Overview

When you request your first service on UKCloud, you're given a single account. An account can represent an organisation, a customer contract or a specific project and contains one or more UKCloud services, such as UKCloud for VMware, Cloud Storage or UKCloud for OpenStack. Within an account, Portal administrators can set permissions for users so that they can access only those services and features that they are allowed to view and use. This is a simple way to manage smaller accounts, however the more projects or end customers you have, the more complicated and confusing the account can become without some degree of separation.

Multiple accounts are very useful when managing separate customer workloads, for example billing and organisation. They can help when different teams are working on separate projects within the same business by separating the projects into different accounts enabling easier identification and management of projects and personnel. This gives the correct level of access to each team to ensure their view of the environments is specific to their work.

If you decide that you would like to bring additional workloads to UKCloud, you should consider whether to stay with a single account or choose to have multiple accounts.

## UKCloud account options

There are two options that you can choose from to manage your projects and end customers. The table below discusses the advantages and disadvantages of each option:

<table>
  <tr>
    <th></th>
    <th>Option 1: Multiple accounts</th>
    <th>Option 2: Single account</th>
  </tr>
  <tr>
    <td><b>Use cases</b></td>
    <td><ul><li>Managed service provider with different end customers</li><li>Organisation with more than one project</li></ul></td>
    <td><ul><li>Single customer, or partner with single customer</li><li>Organisation with more than one project</li></ul></td>
  </tr>
  <tr>
    <td><b>Advantages</b></td>
    <td colspan="2">Enables administrators to set permissions for each account user so that they can access only the services that they are authorised to view and use.</td>
  </tr>
  <tr>
    <td></td>
    <td>Enables easy identification of which services and users are associated with each account.</td>
    <td>Provides easy access to all your projects in one place.</td>
  </tr>
  <tr>
    <td></td>
    <td>Facilitates greater visibility of users within each account and better security with multiple end customers by reducing the risk of human error, ensuring that each user has the correct permissions associated with their UKCloud services within the accounts.</td>
    <td>Enables easy tracking of billing for all your services in one place without the need to switch between accounts.</td>
  </tr>
  <tr>
    <td></td>
    <td>Provides the ability to tighten and loosen security requirements based on the specifics of that workload.</td>
    <td>Reduces the risk of human error, for example, raising a ticket in the wrong account.</td>
  </tr>
  <tr>
    <td></td>
    <td>Provides the ability to increase or decrease security requirements on an account by account basis. For example, with our Two Factor Authentication, Portal administrators can set the optional extra security for some or all accounts.</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Makes it easier to view individual account tickets without the need of a filter.</td>
    <td></td>
  </tr>
  <tr>
    <td><b>Disadvantages</b></td>
    <td>Necessitates switching view in the Portal to see the services and tickets within each account.</td>
    <td>Provides less visibility of users and tickets that are all together in single lists.</td>
  </tr>
  <tr>
    <td></td>
    <td>Introduces risk of human error, for example, raising a ticket in the wrong account.</td>
    <td>Limits granularity of authentication; cannot set individual authentication methods for different workloads.</td>
  </tr>
</table>

## Creating multiple accounts

When you bring a new workload to UKCloud, your Technical Account Manager (TAM) or Customer Success Manager (CSM) will discuss your requirements and whether you want to create an additional account. If you decide that an additional account is best for your setup, UKCloud will create it for you. Once the additional account is created, the Portal administrator for the account can then add existing UKCloud Portal users to the account by raising a Service Request via MyCalls or add new users to the UKCloud Portal onto the new account, which the administrator can add themselves.

## Related articles

- [*How to raise and escalate incidents and service requests*](ptl-how-raise-escalate-service-request.md)

- [*How to create a new user in the UKCloud Portal*](ptl-how-create-users.md)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
