---
title: VMware Tools installation | UKCloud Ltd
description: Recommended practices for installing and maintaining VMware tools on the Assured platform
services: vmware
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware Tools installation
toc_fullpath: Reference/vmw-ref-vmware-tools-installation.md
toc_mdlink: vmw-ref-vmware-tools-installation.md
---

# VMware Tools installation

VMware provide tools which should be installed into any virtual machines running on UKCloud. The tools provide additional features such as automated customisation as well as improved performance by implementing optimised drivers such as storage, network and display. Further information can be found [here](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=340).

## Windows

The VMware tools from windows can be installed directly from within the vCloud director interface.

Step 1 - Browse to the virtual machine within the vApp

Step 2 - Right click the virtual machine and click install tools

Step 3 - Login to the operating system and follow the wizard to install the tools

Step 4 - Reboot

## Linux

There are two methods of installing the VMware tools for Linux, from within vCloud Director using the method above or installing the open-vm-tools, which are now supported by VMware. Not all distributions provide support for the open-vm-tools however the following well known distributions do:

Centos 5/6/7

Redhat 5/6/7

Ubuntu 12.04/14.04

Installing the VMware tools via vCloud Director requires modules to be built against the running kernel. If the kernel is updated the administrator needs to run the VMWare tools setup again to recompile the modules. UKCloud recommends using the open-vm-tools because this maintenance is handled by the package manager when the kernel is updated.

## Redhat/Centos 5/6/7

The open-vm-tools is available via the epel repository.

Step 1 - Add epel repository

    sudo yum install epel-release

If the command above fails then you can run the following commands dependent on the version you are running:

**Redhat/Centos 5**

    wget http://dl.fedoraproject.org/pub/epel/5/x86_64/epel-release-5-4.noarch.rpm sudo rpm -Uvh epel-release-5*.rpm

**Redhat/Centos 6**

    wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm sudo rpm -Uvh epel-release-6*.rpm

**Redhat/Centos 7**

    wget http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm sudo rpm -Uvh epel-release-7*.rpm

Step 2 - Install open-vm-tools

No reboot is required

## Ubuntu

Step 1 - Install open-vm-tools

    sudo apt-get install open-vm-tools

No reboot required

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.