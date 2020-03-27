---
title: How to move resources between OpenStack regions
description: Helps you understand how you can move resources between OpenStack regions
services: openstack
author: Sue Highmoor
reviewer: scassidy
lastreviewed: 08/01/2020

toc_rootlink: How To
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Move resources between OpenStack regions
toc_fullpath: How To/ostack-how-move-resources.md
toc_mdlink: ostack-how-move-resources.md
---

# How to move resources between OpenStack regions

## Overview

This article provides examples of how to move OpenStack resources (for example, instance images and volumes) between the different independent regions currently offered by UKCloud to help ensure the highest level of application resilience and availability.

### Intended audience

Anyone responsible for the design and implementation of applications and services deployed on UKCloud OpenStack service, and should be familiar with using the OpenStack dashboard and API/CLI.

## Background

UKCloud's OpenStack service has been engineered specifically for today's modern, digital, cloud based applications. Unlike our VMware service, OpenStack expects applications to be designed with resilience engineered at the application level, rather than relying upon the underlying cloud infrastructure. To cater for this, our OpenStack service offers the following two resiliency concepts:

- **Regions** - Where applications are served from a choice of multiple regions (for example, data centres) with each region having independent, isolated control (for example, dashboard, API), data (for example, compute workloads) and storage (for example, persistent block volumes) planes. Engineering your applications to span multiple regions offers the greatest level of resilience, however requires effort from a design and implementation perspective.

- **Zones** - Where applications are served from a single region (for example, data centre) and share a single control plane and resilient storage, however the data plane (for example, compute  workloads) can be placed within different fault tolerant failure domains. Zones offer a lower level of resilience when compared to regions, however they require the least effort to utilise.

UKCloud strongly recommends engineering across multiple regions for any production workloads.

## OpenStack regions & zones

The following table outlines the regions and zones that are currently available on the OpenStack service:

Site | Region | Zone
-----|--------|-----
Corsham | 00005 (cor00005.cni.ukcloud.com) | 0000c-1
&nbsp; | &nbsp; | 0000c-2
Farnborough | 00006 (frn00006.cni.ukcloud.com) | 00021-1
&nbsp; | &nbsp; | 00021-2

Details correct at date of publication. Current details can be found in the UKCloud Knowledge Centre.

## Migrating instances between regions

UKCloud has deliberately engineered its regions to be fully independent to allow a high level of isolation and customer control as to which resources and data is shared/distributed. As a result, the only way to share instances between regions is to export them from the current region, then import them into the new region.

The following provides a code example of how to achieve this export and import of an image using the OpenStack CLI:

1. To identify the id of the source instance:

    - Source the originating region's `cred rc` file

    - Enter the following command:

          openstack server list

    Note the `ID` of your source instance as shown in the resulting output.

2. To create the snapshot of the source instance, enter the following command:

        openstack server image create --name <snapshot-name> <id-of-server>

    Note the `id` shown in the resulting output.

3. To check image has finished creating, enter the following command:

        openstack image show <id-of-image>

    Once complete, the `status` field should show as `active`.

4. To download source image snapshot, enter the following command:

        glance image-download --file <output-location> --progress <id-of-image-to-download>

5. To upload source image to the target region:

    - Source the target region's `cred rc` file

    - Enter the following command:

          glance image-create --progress --file <path-to-file-to-upload> --disk-format qcow2 --container-format bare --name <name-for-upload>

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

        If your source volume shows as being Attached to in the resulting output then note the `ID` of your source volume and proceed to step 1b, otherwise note the `ID` of your source volume and proceed to step 2.

    b. To detach your source volume from an instance, enter the following command:

        openstack server remove volume \<server id\> \<volume id\>

    Double check the volume has been detached by running the command in step 1a.

2. Upload the source volume to the OpenStack Glance image repository using the following command:

        cinder --os-volume-api-version 2 upload-to-image <volume id> <name>

3. Download the source volume image to your local device using the following command:

        glance image-download --file <output-location> --progress <id-of-image-to-download>

4. To upload the source volume image to the target region:

    - Source the target region's `cred rc` file

    - Enter the following command:

          glance image-create --progress --file <path-to-file-to-upload> --disk-format qcow2 --container-format bare --name <name-for-upload>

5. To create a new volume in the target region based upon the original source volume, enter the following command:

        openstack volume create --image <uploaded-image> --size <size-of-volume-to-create> --type <TIER1/TIER2> <Name>

## Next steps

You can find more information about UKCloud's sites, regions and zones in the following Knowledge Centre articles:

- [Understanding sites, regions and zones](../other/other-ref-sites-regions-zones.md)

- [Sites, regions and zones map and reference table](../other/other-ref-srz-table.md)

You can find full details for the OpenStack command-line interface (OpenStack CLI) at:

<https://access.redhat.com/webassets/avalon/d/Red_Hat_OpenStack_Platform-10-Command-Line_Interface_Reference_Guide-en-US/Red_Hat_OpenStack_Platform-10-Command-Line_Interface_Reference_Guide-en-US.pdf>

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
