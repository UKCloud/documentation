---
title: How to install VMware Tools
description: Recommended practices for installing and maintaining VMware tools on the Assured platform
services: vmware
author: shighmoor
reviewer: shighmoor
lastreviewed: 06/11/2020
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Install VMware Tools
toc_fullpath: Reference/vmw-how-install-vmware-tools.md
toc_mdlink: vmw-how-install-vmware-tools.md
---

# How to install VMware Tools

VMware provides tools that should be installed into all virtual machines running on UKCloud. The tools provide additional features such as automated customisation as well as improved performance by implementing optimised drivers such as storage, network and display. You can find more information [here](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=340).

## Windows

1. In VMware Cloud Director/vCloud Director, locate the virtual machine in which you want to install VMware Tools.

2. In the card for the VM, select **Actions**, then **Install VMware tools**.

3. Login to the operating system and follow the wizard to install the tools.

4. Reboot.

## Linux

There are two methods of installing the VMware tools for Linux, from within VMware Cloud Director/vCloud Director using the method above or installing the open-vm-tools, which are now supported by VMware. Not all distributions provide support for the open-vm-tools however the following well known distributions do:

Centos 5/6/7

Redhat 5/6/7

Ubuntu 12.04/14.04

Installing the VMware tools via VMware Cloud Director/vCloud Director requires modules to be built against the running kernel. If the kernel is updated, the administrator needs to run the VMWare tools setup again to recompile the modules. UKCloud recommends using the open-vm-tools because this maintenance is handled by the package manager when the kernel is updated.

### Redhat/Centos 5/6/7

The open-vm-tools is available via the epel repository.

1. Add epel repository.

    `sudo yum install epel-release`

    If the command above fails then you can run the following commands dependent on the version you are running:

    **Redhat/Centos 5**

    `wget http://dl.fedoraproject.org/pub/epel/5/x86_64/epel-release-5-4.noarch.rpm sudo rpm -Uvh epel-release-5*.rpm`

    **Redhat/Centos 6**

    `wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm sudo rpm -Uvh epel-release-6*.rpm`

    **Redhat/Centos 7**

    `wget http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm sudo rpm -Uvh epel-release-7*.rpm`

2. Install open-vm-tools

No reboot required.

### Ubuntu

Install open-vm-tools

`sudo apt-get install open-vm-tools`

No reboot required.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
