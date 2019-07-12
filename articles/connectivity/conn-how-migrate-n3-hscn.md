---
title: How to migrate from N3 to HSCN | UKCloud Ltd
description: This article describes UKCloud's migration strategy for HSCN
services: migration
author: Dan Baker
reviewer:
lastreviewed: 20/07/2018 18:37:23
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Migrate from N3 to HSCN
toc_fullpath: How To/conn-how-migrate-n3-hscn.md
toc_mdlink: conn-how-migrate-n3-hscn.md
---

# How to migrate from N3 to HSCN

> [!NOTE]
> You can migrate your UKCloud environments from N3 to HSCN regardless of whether your end user environments have migrated to HSCN. The HSCN-to-N3 gateway ensures a free-flow of traffic between the two networks.
>
> One consideration is the customer firewalls, which would need to be amended to allow traffic to/from the new HSCN IPs provided by UKCloud, regardless of whether the end customer locations are on N3 or HSCN; you can find more information below. 


## Overview

As of March 2019, NHS Digital will be decommissioning the N3 network, replacing it with the new Health and Social Care Network (HSCN). As a result, UKCloud will be decommissioning our N3 connectivity in January 2019 and users of the N3 network on our platform must migrate their workloads to the HSCN network by then. The two networks (N3 and HSCN) will run in parallel to enable all our customers to migrate off the N3 network.

Our migration strategy from N3 to HSCN will migrate all the services in a single VDC/project at the same time. An alternative option enables you to migrate individual workloads one at a time, but this will require considerably more configuration on your side.

Traffic can traverse the N3 and HSCN networks, so any services on N3 will be able to access HSCN and vice versa.

## UKCloud changes

With the migration to HSCN, there are a few changes to the way UKCloud will present the HSCN network to our customers.

Unlike existing N3 connections for VMware in regions 1 and 2, HSCN addresses will be presented directly down to your VMware edges. This enables you to have more visibility and control over the your assigned HSCN IP addresses. The addresses will be visible on your edges within vCloud, and you'll be able to create your own NAT and firewall rules against these addresses. For VMware and OpenStack customers in Regions 5 and 6, HSCN addresses will be presented to your edges in the same way as your existing N3 connectivity.

Your allocated HSCN addresses for the HSCN network will be different from those you used on the N3 network. If you've previously purchased your own N3 addresses and brought them onto the UKCloud platform, raise a service request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal to discuss this further.

## VMware migration plan

The following information outlines the migration process set by UKCloud to facilitate moving your VMware services from N3 to HSCN.

### Migration overview

When you request a migration, UKCloud will deploy an HSCN edge gateway into your N3 connected VDCs. The required number of HSCN IP addresses will be assigned to this edge. You can then perform testing over the HSCN network in preparation for your migration. When you've completed your testing, you have the following two options:

- **Option 1:** UKCloud will remove the HSCN test edge and then apply the HSCN interface to the existing N3 edge, with the HSCN IPs you were assigned during testing

    or

- **Option 2:** You retain the HSCN edge you used for testing and connect all of your N3 VMs to it

You can create a VM free of charge for testing HSCN connectivity for one month from the date you were provided with the HSCN edge. You can continue testing for longer than a month, however you'll be charged for the VM after the initial month. You should inform UKCloud of the VMs used for HSCN connectivity so that these can be excluded from billing.

While both options do require you to make changes in your configuration yourself, Option 1 is the easier method of migration. See the instructions below for more details.

#### Option 1: Add an HSCN interface to the existing N3 edge

If you choose this option, UKCloud will add an HSCN interface to your existing N3 edge and assign the same HSCN IP addresses you've been using as part of your testing. The newly built HSCN edge will be removed from the VDC prior to this to allow for the IP addresses to be added to the N3 edge. At the time of migration, UKCloud will change the default gateway of the edge to route via the HSCN interface rather than the N3 interface.

##### Adding an HSCN interface: UKCloud actions

1. When you confirm that you're ready to begin testing HSCN connectivity in preparation for your migration, UKCloud will deploy an HSCN edge gateway into the N3-connected VDC.

2. When you confirm that your testing is complete, UKCloud will delete the new HSCN edge and add an HSCN interface to the existing N3 edge.The HSCN IP addresses used for testing will be moved to the old N3 edge.

3. At the time of migration, UKCloud will change the default gateway of the edge to route via the HSCN interface.

4. When you confirm that your new services are successfully working on HSCN, UKCloud will then remove the N3 interface from the edge and update any references of N3 to HSCN, for example, edge names. You'll then stop being billed for N3 connectivity.

##### Adding an HSCN interface: Customer actions

1. When you're ready to begin testing on the HSCN network, log a service request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal to deploy an HSCN Edge into your environment.

2. Create an Org VDC network and connect any required VMs to perform testing.

    > [!IMPORTANT]
    > UKCloud highly recommends creating new vApps and VMs for HSCN testing purposes. When removing the HSCN edge after testing has been completed, any vApps that have been connected to the HSCN edge will need to be powered off for the edge to successfully be deleted.

3. Perform any required testing to ensure that after the migration, all services will work successfully over HSCN rather than N3.

4. When you've completed your testing and UKCloud have added the HSCN interface to the N3 edge, you'll need to add new HSCN NAT and firewall rules to the N3 edge (in a DISABLED state, so that the running N3 service is not affected). You may also need to amend operating system firewalls.

    > [!IMPORTANT]
    > Due to less traffic restrictions being blocked by UKCloud on the HSCN network, it is your responsibility to block or permit traffic on your edge firewalls.

5. At the time of migration, you should disable any NAT or firewall rules that are no longer required and enable the newly created HSCN NAT and firewall rules.

6. UKCloud will change the default gateway of the edge and you should perform further testing to ensure that your services are working successfully post migration on the HSCN network.

#### Option 2: A new HSCN edge

You can continue to use the HSCN edge that UKCloud deploys into your N3-connected VDCs for testing to connect your VMs to the HSCN network. This option requires you to perform a considerable amount of reconfiguration.

### Regions 1 & 2 – Internet Connectivity

If you currently have internet connectivity in your VDC via the N3 enabled edge, the way this works will change after the migration. Both options provided above are still applicable and can still be used to migrate from N3 to HSCN, however there are some slight changes and some additional steps required in order to maintain your internet connectivity. Please find the additional steps below:
 
### Option 1: Add an HSCN interface to the existing N3 edge

If you chose Option 1 for your migration strategy, the following steps are required to maintain internet connectivity:
After the migration, your edge will be left with 2 interfaces; one for internet connectivity and one for HSCN connectivity.
You can decide which interface is used as the default gateway; Internet or HSCN. Depending on your decision, static routes will need to be configured on the edge to route any traffic for the other connectivity type via the additional interface.
Example:
If you decide that the default gateway of the edge should route via the internet interface, you will need to configure static routes on the edge for any HSCN addresses you wish to connect to, to route via the HSCN interface.

> [!IMPORTANT]
> When applying static routes to your edge, these must not conflict with any of your internal ranges. If so, when routing internally, internal traffic could be routed externally to the edge.

### Option 2: A new HSCN edge

If you chose Option 2 for your migration strategy, your internet connectivity and HSCN connectivity will be configured on two different edges. Whereas in the original Option 2 above, your previous N3 edge is removed from your environment after the migration, if you require Internet connectivity in your VDC, this edge will not be deleted. N3 access via this edge will be removed so that it can solely be used for Internet connectivity.
Depending on the connectivity types required on each of your VMs, it may be required for you to configure two NICs; one for HSCN and one for internet connectivity. The routing table within the OS will also need to be configured to route traffic out of the correct NIC as well.

##### New HSCN edge: UKCloud actions

1. When you confirm that you're ready to begin testing HSCN connectivity in preparation for your migration, UKCloud will deploy an HSCN edge gateway into the N3-connected VDC.

##### New HSCN edge: Customer actions

1. When you're ready to begin testing on the HSCN network, log a service request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal to deploy an HSCN edge into your environment.

2. Create an Org VDC network connected the HSCN edge and connect any VMs to perform testing to ensure that after the migration, all services will work successfully over HSCN rather than N3.

    > [!IMPORTANT]
    > UKCloud highly recommends creating new vApps and VMs for HSCN testing purposes.

3. When you've completed your testing, connect the required VMs to the HSCN Org VDC network. This will require adding additional NICs to each of the VMs. You'll also need to amend the routing table on each of the VMs to route any N3 and HSCN traffic out of the HSCN interface.

4. Apply any required firewall and NAT rules on the HSCN edge, and amend any operating system firewalls.

5. Inform UKCloud that the migration is complete. UKCloud will then remove N3 access from the environment and stop any billing for N3 connectivity.

### OpenStack migration plan

UKCloud will give you access to an HSCN network in your OpenStack project and assign you the same number of HSCN addresses as you have on N3.

#### OpenStack migration plan: UKCloud actions

UKCloud will perform these required tasks prior to the migration. These tasks will not cause any disruption to your existing service.

1. UKCloud will add the HSCN network to your OpenStack project.

2. UKCloud will allocate you the same number of HSCN addresses as you have on N3 (addresses will be pre-allocated).

#### OpenStack migration plan: Customer actions

1. Examine all security groups to ensure that they'll only permit the required access via the HSCN networks.

2. Add an HSCN router, connect it to the correct networks (for example, the same networks that have a connection to the N3 router) and add any required routes to the new HSCN router (equivalent to the existing N3 router).

3. To test HSCN, add a new network connected to the HSCN router and build an instance on that network containing the tools and applications that can be used to confirm the connectivity requirements for your production platform.

    > [!IMPORTANT]
    > UKCloud highly recommends creating new instances for HSCN testing purposes.

4. When the migration is due to start, perform the following for each instance:

    - Add an HSCN address to the instance as a floating IP (only for instances that currently have a N3 floating IP).

    - When appropriate, remove the N3 floating IP from the instance.

    - When appropriate, change the default gateway in each instance to point to the HSCN router rather than the N3 router.

    - When the migration is completed, disconnect the old N3 router from all networks and edit the subnets for all the networks such that the HSCN router is used as default gateway for new instances.

5. When you've confirmed functionality on HSCN, disconnect the old N3 router from all networks and delete the N3 router.

6. Inform UKCloud that the migration is complete. UKCloud will then remove N3 access from the project and stop any billing for N3 connectivity.

### HSCN firewall implementation

UKCloud will be replacing the existing N3 firewalls with new next-generation firewall devices for the HSCN network. UKCloud will not be blocking any ports but will have IDS, IPS and malware detection running across all ports as directed by NHS Digital. If you encounter any issues with legitimate packets being dropped or blocked, raise a service request via the [My Calls](https://portal.ukcloud.com/support/ivanti) section of the UKCloud Portal so we can investigate, and if needed, update the next generation firewall rules.

> [!NOTE]
> You should ensure that your firewall rules are suitable for controlling all traffic traversing them, and should not rely on UKCloud to control traffic to your environments.

### Additional changes

The above steps are changes that need to be made to be able to connect your VMs to the HSCN network. You may also need to perform additional steps to migrate your services to the HSCN network including DNS changes and any changes at an application level. As UKCloud does not have visibility at this level, it is your responsibility to identify any additional steps required. UKCloud can help as and where required if the request is within scope of our service.

### NHS Digital guidance on DNS changes

To request a DNS change, email <dnsteam@nhs.net> with following information:

- Domains that you want to change

- Old IP address(es)

- New IP address(es)

- Date and time of change

We recommend giving NHS Digital a couple of days lead time as there may be scheduling issues, though these can be waived in emergencies.

> [!NOTE]
> IP changes are NOT instantaneous and may take some time to propagate fully. NHS Digital can do out-of-hours changes for NHS customers.

### UKCloud services

UKCloud's public services are currently presented on N3 and HSCN. You will need to amend VM host files to re-point to the HSCN IPs of any shared services you use when you migrate from N3 to HSCN. A list of the shared service IPs is available within the UKCloud Portal here: https://portal.skyscapecloud.com/notifications/472  (UKCloud Portal log in required)

> [!NOTE]
> These services will be removed from the N3 on 8th October. You'll need to amend your firewall rules and host files so you can continue to reach these services when we've migrated these services to HSCN. As HSCN is routable from N3, if you're currently still on N3 you'll be able to reach these services if you amend your N3 firewall and host files with the HSCN IPs.

### Cloud Storage

Cloud Storage is now available on HSCN. 

The NHS DNS records for this service will be migrated from N3 to HSCN IPs on 7th December 2018.

If you rely on the NHS DNS service to interact with the Cloud Storage then you'll need to update your firewall and host file records to continue to use this service after this date.

HSCN-connected Cloud Storage has the following URLs and IPs:

-Farnborough: `cas.frn00006.ukcloud.thirdparty.nhs.uk` – `10.200.82.4`
-Corsham: `cas.cor00005.ukcloud.thirdparty.nhs.uk` – `10.200.83.4`

### Next steps

For more information about HSCN, see the [*HSCN connectivity FAQs*](conn-faq-hscn.md).

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
