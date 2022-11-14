---
title: VMware vCloud Connector
description: Covers the use of VMware vCloud Connector with the UKCloud platform
services: vmware
author: shighmoor
reviewer: geverett
lastreviewed: 14/11/2022
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: VMware vCloud Connector
toc_fullpath: Reference/vmw-ref-vcloud-connector.md
toc_mdlink: vmw-ref-vcloud-connector.md
---

<br>**UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation**

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# VMware vCloud Connector

> [!IMPORTANT]
> VMware vCloud Connector is now end-of-life and is no longer supported. 
>
> UKCloud offers Disaster Recovery as a Service (DRaaS), powered by Zerto, to support active migration across environments. See the [Disaster Recovery as a Service Service Definition](https://ukcloud.com/app/uploads/2022/08/ukc-svc-231-disaster-recovery-as-a-service-service-definition-13.0.pdf) for more information.

VMware vCloud Connector links your internal private cloud with UKCloud so that you can manage them as a single hybrid environment and transfer workloads back and forth.

The use of vCloud Connector is supported on the platform, but we do not offer support in configuring vCloud Connector or its use.

We have verified the following connection settings as being in the correct format to authenticate against our platform.

## For vCC server

![vCloud Connector Node Details](images/update_node.png)

## For vCC node

![vCloud Registration details](images/cloud_registration.png)

Time Zone settings need to be the same on both Node and Server

Login details are the same as for the *API interaction through PowerCLI*

## vCloud Connector endpoint authentication

When authenticating to our VMware Cloud Director endpoints using vCloud Connector, the details needed are the same as for the Cloud Director API. For example:

URL: `vcd.portal.skyscapecloud.com/api`
Username: `1-1-1@1-1-1-abcdef`

For more information, see [*How to access VMware Cloud Director through the Cloud Director API*](vmw-how-access-vcloud-api.md#finding-your-cloud-director-api-credentials).

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
