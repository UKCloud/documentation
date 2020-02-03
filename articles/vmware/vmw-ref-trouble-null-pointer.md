---
title: Fixing your advanced gateway if you encounter NullPointerException error
description: Intended for customers who are experiencing the NullPointerException error when attempting to view their edge gateway properties
services: vmware
author: Sue Highmoor
reviewer: lthangarajah
lastreviewed: 20/08/2019
toc_rootlink: Troubleshooting
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Fixing your advanced gateway if you encounter NullPointerException error
toc_fullpath: Troubleshooting/vmw-ref-trouble-null-pointer.md
toc_mdlink: vmw-ref-trouble-null-pointer.md
---

# Fixing your advanced gateway if you encounter NullPointerException error

With the upgrade to NSX version 6.4, edges that have been converted to an advanced gateway may produce an error when attempting to view the properties of the edge gateway in vCloud Director. This does not affect access to the tenant portal GUI, where you can set up firewall rules and so on, this only affects viewing the edge properties such as the IP addresses assigned to an edge.

To complete the steps in this article, you must have access to vCloud Director.

To fix your edge to enable viewing of its properties:

1. In vCloud Director, access the edge gateway settings for the edge with the broken VPN.

    For more detailed instructions, see [*How to access edge gateway settings*](vmw-how-access-edge.md).

2. Select the **Routing** tab.

3. Select **Routing Configuration**.

4. Under the *Static Routing Default Gateway* section, The **MTU** field will contain a value of `0`. Change the value from `0` to `1500`.

5. When you're done, click **Save Changes** at the top of the page.

6. Close vCloud Director and attempt to view the properties of the edge gateway in vCloud.

    You should no longer get the `NullPointerException` error and the properties should be displayed.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
