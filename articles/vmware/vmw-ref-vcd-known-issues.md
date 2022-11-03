---
title: Known Issues in VMware Cloud Director
description: Provides details of known issues in VMware Cloud Director and how to resolve them
services: vmware
author: dbroderick
reviewer: 
lastreviewed: 11/06/2021
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Known Issues in VMware Cloud Director
toc_fullpath: Reference/vmw-ref-vcd-known-issues.md
toc_mdlink: vmw-ref-vcd-known-issues.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Known Issues in VMware Cloud Director

## Overview

This article describes some of the issues we've identified when using VMware Cloud Director, along with workarounds if available.

## VMRC console window doesn't show correct VM name

### Issue

When you change the name of a VM, the VMRC console shows the old VM name.

### Solution

There currently isn't a fix for the VMRC console. We recommend using the web console instead, which should show the new VM name.

## Date formats are in MM/DD/YYY format

### Issue

Dates are displayed using the American MM/DD/YYYY format.

### Solution

It isn't currently possible to change the date formatting. We've raised a request with VMware to enable the customisation of date formatting.

## vApp search functionality doesn't work correctly

### Issue

1. Search for a vApp using the search icon on the right-hand side of the menu bar.

   ![Search icon](images/vmw-vcd-issue-search1.png)

2. Select the vApp.

   ![Select vApp](images/vmw-vcd-issue-search2.png)

3. The details of the vApp are displayed, including the VMs contained in the vApp.

   ![List of VMs](images/vmw-vcd-issue-search3.png)

4. Search for a different vApp using the same search method and select it.

5. The details of the second vApp are displayed, but the name of vApp is still shown as the first vApp.

   ![Second vApp](images/vmw-vcd-issue-search4.png)

6. Any options selected from the Actions menu will apply to the first searched vApp not the second one.

### Solution

We recommend searching for vApps by clicking vApps in the left navigation panel, then using the search functionality on the vApps page.

![Search functionality on the vApps page](images/vmw-vcd-issue-search5.png)

## Cannot amend VM hardware configuration

### Issue

If you've enabled the **Enable VM to join domain** options for a VM, either currently or in the past, you won't be able to amend the hardware configuration of the VM.

### Solution

If you encounter this issue, you can raise a Service Request to obtain a workaround.

## Guest customisation failing

### Issue

Guest customisation is failing in the following:

- For existing VMs - Windows 2012, Windows 2012R2 and Windows 2016

- For new VMs - Windows 2012, Windows 2012R2

When setting a new administrator password and/or changing the IP address then forcing re-customisation at power-on, the settings are ignored.

### Solution

The workaround is to deploy the template, but before powering on, change the VM type to Windows 2016. Power on using Force Customization.

## Additional information

For other known issues with VMware Cloud Director 10.1, see the [VMware Cloud Director 10.1 Release Notes](https://docs.vmware.com/en/VMware-Cloud-Director/10.1/rn/VMware-Cloud-Director-101-Release-Notes.html).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.