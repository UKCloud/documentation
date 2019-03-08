---
title: Blocked vCloud Director API calls | UKCloud Ltd
description: Explains which vCloud director API calls are blocked to maintain the security of our multitenant cloud.
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Blocked vCloud Director API calls
toc_fullpath: Reference/vmw-ref-block-vcd-calls.md
toc_mdlink: vmw-ref-block-vcd-calls.md
---

# Blocked vCloud Director API calls

UKCloud block the following vCloud Director API calls:

    /api/admin/extension/*

### POST

    /api/admin/org/*/settings/ldap
    /api/admin/org/*/users
    /api/admin/org/*/vdcs
    /api/admin/orgs

### PUT

    /api/admin/org/*/settings/ldap
    /api/admin/right
    /api/admin/role
    /api/admin/user

### DELETE

    /api/admin/org
    /api/admin/right
    /api/admin/role
    /api/admin/user

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.