---
title: Cloning vApps using PowerCLI
description: Provides customers with a scripted facility to clone an existing vApp.
services: vmware
author: shighmoor
reviewer: geverett
lastreviewed: 10/10/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Cloning vApps using PowerCLI
toc_fullpath: Reference/vmw-ref-cloning-vapps.md
toc_mdlink: vmw-ref-cloning-vapps.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# Cloning vApps using PowerCLI

You can clone a vApp whilst it's running as long as there's enough storage available on the source storage profiles associated with the existing vApp. There's a manual GUI option where you can copy a vApp, however this can be a lengthy process if there are number of vApps needing to be copied over. A good use case for this method is for utilising like for like copies of production for pre-production environments.

To perform the cloning efficiently, you need to use a PowerCLI script. This article guides you through the scripts required to automate the process of cloning, as well as removing the cloned vApp once it's no longer required. You can plug the PowerCLI scripts into various different configuration tools, such as Puppet or Chef, and also integrate them into orchestration tools, such as Jenkins and Ansible.

### Script to clone vApps

We've provided an example of a PowerCLI script to clone and remove a vApp on UKCloud's GitHub repository: <https://github.com/ukcloud/knowledge_centre/tree/master/CloningvAPPsUsingPowerCLI>

The example script clones the specified vApp into an existing catalogue within the appropriate VDC. The script also provides an option for deployment once it has cloned the vApp. If you select this option, the script deploys the vApp.

### Stop and remove vApp using PowerCLI

When you no longer require the cloned vApp, there's a remove PowerCLI script that provides an automated way of removing the cloned environment. This script stops the vApp and then deletes it from the catalogue specified.

Execute the scripts using VMware vSphere PowerCLI. VMware vSphere PowerCLI is a command-line interface (CLI) tool for automating vSphere and vCloud management.

You can access download, installation and reference documentation on the VMware Developer portal: <https://developer.vmware.com/powercli>.

![Screenshot of vSphere PowerCLI](images/vsphere_powercli.png)

### Typical Use Case

The figure below shows the flow between cloning a production environment to be re-used as pre-production and the environment being stopped and removed - using the scripts in UKCloud Github repository.

![vApp Clone use case](images/vapp_clone.jpg)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
