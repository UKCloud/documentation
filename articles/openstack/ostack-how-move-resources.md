---
title: How to move resources between OpenStack regions
description: Helps you understand how you can move resources between OpenStack regions
services: openstack
author: Sue Highmoor
reviewer: ribeck
lastreviewed: 07/01/2022

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Move resources between OpenStack regions
toc_fullpath: How To/ostack-how-move-resources.md
toc_mdlink: ostack-how-move-resources.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to move resources between OpenStack regions

## Overview

This article provides examples of how to move OpenStack resources (for example, instance images and volumes) between the different independent regions currently offered by UKCloud to help ensure the highest level of application resilience and availability.

### Intended audience

Anyone responsible for the design and implementation of applications and services deployed on UKCloud for OpenStack, and should be familiar with using the OpenStack dashboard and API/CLI.

## Background

UKCloud's OpenStack service has been engineered specifically for today's modern, digital, cloud based applications. Unlike our VMware service, OpenStack expects applications to be designed with resilience engineered at the application level, rather than relying upon the underlying cloud infrastructure. To cater for this, our OpenStack service offers the following two resiliency concepts:

- **Regions** - Where applications are served from a choice of multiple regions (for example, data centres) with each region having independent, isolated control (for example, dashboard, API), data (for example, compute workloads) and storage (for example, persistent block volumes) planes. Engineering your applications to span multiple regions offers the greatest level of resilience, however requires effort from a design and implementation perspective.

- **Zones** - Where applications are served from a single region (for example, data centre) and share a single control plane and resilient storage, however the data plane (for example, compute  workloads) can be placed within different fault tolerant failure domains. Zones offer a lower level of resilience when compared to regions, however they require the least effort to utilise.

UKCloud strongly recommends engineering across multiple regions for any production workloads.

## OpenStack regions & zones

The following table outlines the regions and zones that are currently available on the OpenStack service:

Site | Region | Zone
-----|--------|-----
Farnborough | 00006 (frn00006.cni.ukcloud.com) | 00021-1
&nbsp; | &nbsp; | 00021-2
Corsham 2 | 00005 (cor00005-2.cni.ukcloud.com) | 00026-1
&nbsp; | &nbsp; | 00026-2

Details correct at date of publication. Current details can be found in the UKCloud Knowledge Centre.

## Migrating instances between regions

UKCloud has deliberately engineered its regions to be fully independent to allow a high level of isolation and customer control as to which resources and data is shared/distributed. As a result, the only way to share instances between regions is to export them from the current region, then import them into the new region.

The following provides a code example of how to achieve this export and import of an image using the OpenStack CLI:

1. To identify the id of the source instance:

    - Source the originating region's `cred rc` file

    - Enter the following command:

          openstack server list

    Note the `ID` of your source instance as shown in the resulting output.

2. To create the image of the source instance, enter the following command:

        openstack server image create --name <name-for-image> <id-of-server>

    Note the `id` shown in the resulting output.

3. To check image has finished creating, enter the following command:

        openstack image show <id-of-image>

    Once complete, the `status` field should show as `active`.

4. To download source image snapshot, enter the following command:

        openstack image save <id-of-image-to-download> --file <output-location> 

    If the image size is greater than the memory of the local host, the following may be required:
       
        glance image-download --file <output-location> --progress <id-of-image-to-download>

    > [!NOTE]
    > As glance CLI commands don't work with SSO accounts, you'll need a keystone user to run this command. Contact UKCloud Support to request a keystone account, if necessary.

5. To upload source image to the target region:

    - Source the target region's `cred rc` file

    - Enter the following command:

          openstack image create  --file <path-to-file-to-upload> --disk-format qcow2 --container-format bare <name-for-upload>

6. You can now start the migrated instance from file you've just uploaded.

## Migrating volumes between regions

As with instances, volumes have been engineered to be fully independent across regions. For  moving volumes two options are available.

### Option 1 - Direct transfer between instances

Once instances have been migrated (see above) and are running, data can be copied directly between the instances.

To achieve this across different regions, the use of a VPN may be required. Details on how to deploy a VPN within the OpenStack platform can be found in [*Blueprint: Configuring IPsec VPN in UKCloud for OpenStack*](https://ukcloud.com/wp-content/uploads/2018/08/ukc-gen-476-configuring-ipsec-vpn-in-cloud-native-infrastructure-blueprint.pdf).

### Option 2 - Export and import of existing volumes

1. Detach the volume to be migrated from all instances to ensure all writes are completed.

    a. To show a list of all volumes in your project:

    - Source the originating region's `cred rc` file

    - Enter the following command:

          openstack volume list

        If your source volume shows as being `Attached to` in the resulting output then note the `ID` of your source volume and proceed to step 1b, otherwise note the `ID` of your source volume and proceed to step 2.

    b. To detach your source volume from an instance, enter the following command:

        openstack server remove volume <id-of-server> <id-of-volume>

    Double check the volume has been detached by running the command in step 1a.

2. Upload the source volume to the OpenStack Glance image repository using the following command:

        openstack image create --volume <id-of-volume> <name-for-image>

3. Download the source volume image to your local device using the following command:

        openstack image save <id-of-image-to-download> --file <output-location>

    If the image size is greater than the memory of the local host, the following may be required:
        
        glance image-download --file <output-location> --progress <id-of-image-to-download>

    > [!NOTE]
    > As glance CLI commands don't work with SSO accounts, you'll need a keystone user to run this command. Contact UKCloud Support to request a keystone account, if necessary.

4. To upload the source volume image to the target region:

    - Source the target region's `cred rc` file

    - Enter the following command:

          openstack image create --file <path-to-file-to-upload> --disk-format raw --container-format bare <name-for-upload>

5. To create a new volume in the target region based upon the original source volume, enter the following command:

        openstack volume create --image <id-of-image> --size <size-of-volume-to-create> --type <TIER1/TIER2> <name-for-volume>

## Next steps

You can find more information about UKCloud's sites, regions and zones in the following Knowledge Centre articles:

- [Understanding sites, regions and zones](../other/other-ref-sites-regions-zones.md)

- [UKCloud services by region](../other/other-ref-services-by-region.md)

You can find full details for the OpenStack command-line interface (OpenStack CLI) at:

<https://access.redhat.com/webassets/avalon/d/Red_Hat_OpenStack_Platform-10-Command-Line_Interface_Reference_Guide-en-US/Red_Hat_OpenStack_Platform-10-Command-Line_Interface_Reference_Guide-en-US.pdf>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
