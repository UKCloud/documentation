---
title: VM compatibility with UKCloud for Oracle Software | UKCloud Ltd
description: Provides information about the compatibility of Oracle virtual machines with UKCloud for Oracle Software
services: oracle
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: 
toc_fullpath: Reference/orcl-ref-vm-compatibility.md
toc_mdlink: orcl-ref-vm-compatibility.md
---

# VM compatibility with UKCloud for Oracle Software


## Introduction

This article outlines what you need to do to make sure your Oracle VMs
(OVMs) are compatible with UKCloud for Oracle Software service. You may find this useful if you're moving VMs from
UKCloud for VMware to UKCloud for Oracle Software.

## OVF and VMDK

OVF and VMDK files are not compatible with Oracle Enterprise Manager
(OEM), the management plane that's used to deploy and manage your UKCloud for Oracle Software
environment. To make sure your VMs are compatible with UKCloud for Oracle Software you may need
to transform your VMs.

OVA files (Assembly option) and tar.gz/tgz (Template option) are the
only accepted file formats.

## OVA


If you select the **Assembly** option on the upload page, then the
uploader will expect an OVA Assembly package file (ova file). Your .ova
file should contain the following files (in the exact order listed):

- *MyVM*.ovf --- the OVF descriptor file, which contains all VM specs
    metadata and links to the embedded virtual disk image file (with a
    .vmdk extension)

- *MyVM*.mf --- contains metadata that is used for integrity and
    authenticity checks; this data must be correct for the .ova file to
    be accepted in most cases

- *MyVM*.vmdk --- the embedded virtual disk image file

As the exported .ova file also contains file hashes that are unique to
the files included in the package, simply creating a tar file with these
contents will not work in most cases. For most virtualisation platforms,
it\'s best to use the export functionality from the source
virtualisation platform to generate the .ova file.

One way of converting your VMs to an .ova file would be to use the OVF
Tool, for example:

ovftool \"original.ovf\" \"original.ova\"

**Tip!** Make sure you include the quotation marks (\").

You can download the OVF Tool from:

<https://my.vmware.com/web/vmware/details?downloadGroup=OVFTOOL400&productId=353>

## TAR

If you select the **Template** option on the upload page, then the
uploader will expect an Oracle VM Template file (either a .tgz or
.tar.gz file). This gzipped tarball file normally contains the following
files (in the exact order listed):

- *MyVM*.cfg --- contains the VM specs metadata and links to the
    embedded RAW disk image file, normally named system.img

- system.img --- the embedded RAW disk image file, either exported
    from another XEN platform or converted from other virtual disk
    formats

## Upload size

For any uploads larger than 500 MB, you'll need to allow sufficient time
for the upload to complete before clicking the **Upload** button or it
will fail and the item will not appear in your software library. There
is currently no upload progress indicator on OEM. Oracle is aware of
this but are treating it as an enhancement request therefore there\'s
currently no indication of when the upload progress indicator will be
added on future releases of the platform software.

## Feedback

If you have any comments on this document or any other aspect of your
UKCloud experience, please send them to <feedback@ukcloud.com>.

&copy; [UKCloud Ltd](http://ukcloud.com), 2018. All Rights Reserved.