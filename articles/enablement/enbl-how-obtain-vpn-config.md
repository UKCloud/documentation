---
title: How to obtain full IPsec VPN configuration via the Cloud Director API
description: Describes how to obtain full IPsec VPN configuration when migrating edge configuration data to another edge
services: enablement
author: brees
reviewer: brees
lastreviewed: 07/10/2021
toc_rootlink: How To
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Obtain full IPsec VPN configuration
toc_fullpath: How To/enbl-how-obtain-vpn-config.md
toc_mdlink: enbl-how-obtain-vpn-config.md
---

#### UKCloud Limited (“UKC”) and Virtual Infrastructure Group Limited (“VIG”) (together “the Companies”) – in Compulsory Liquidation

On 25 October 2022, the Companies were placed into Liquidation with the Official Receiver appointed as Liquidator and J Robinson and A M Hudson simultaneously appointed as Special Managers to manage the liquidation process on behalf of the Official Receiver.

Further information regarding the Liquidations can be found here: <https://www.gov.uk/government/news/virtual-infrastructure-group-limited-and-ukcloud-limited-information-for-creditors-and-interested-parties>

Contact details:<br>
For any general queries relating to the Liquidations please email <ukcloud@uk.ey.com><br>
For customer related queries please email <ukcloudcustomers@uk.ey.com><br>
For supplier related queries please email <ukcloudsuppliers@uk.ey.com>

# How to obtain full IPsec VPN configuration via the Cloud Director API

## Overview

Due to changes in VMware Cloud Director and how edge configuration is stored and retrieved, the current documented process for retrieving the edge gateway configuration does not include the full IPsec VPN configuration, specifically the Pre-Shared Key (PSK).

Through testing, UKCloud has identified how to obtain the full IPsec configuration, but unfortunately not as a single configuration file. You must obtain and query the IPsec VPN configuration separately.

This article provides instructions on how to obtain the PSK of your configured IPsec VPNs on an edge gateway via the Cloud Director API. This can also be achieved via the VMware Cloud Director GUI.

The PSK is not necessarily required when updating edge or VPN configuration. Changes in configuration to an existing VPN can be applied to an edge via the API without the PSK being present in the XML body. In this case, the PSK will remain unaltered. If you're configuring a new VPN or updating the PSK, then this information will need to be present in the XML body.

For instructions on how to export, amend and post the configuration from one edge gateway to another, see [*How to migrate edge configuration data to another edge*](enbl-how-migrate-edge-config.md).

## Retrieving the edge gateway API endpoint

Follow the instructions in [*How to migrate edge configuration data to another edge*](enbl-how-migrate-edge-config.md), up to and including *Retrieving edge gateway configuration via the API*. As per this section of the article, you should be able to retrieve the API endpoint of your edge gateway.

For example:

`https://<api_url>/api/admin/edgeGateway/<edge_id>`

The endpoint you need to obtain the full IPsec configuration is slightly different to this, however, following this method you'll be able to retrieve the edge ID that you need. Append the edge ID to the following endpoint:

`https://<api_url>/network/edges/<edge_id>`

## Obtaining edge gateway configuration

Performing a GET request against the API endpoint shown in the previous section will return a more detailed configuration of your edge gateway, including additional parameters for your IPsec VPNs that weren't previously returned. However, the PSK will be obfuscated.

To display the PSK, you need to amend the endpoint to only obtain the IPsec configuration and append an additional switch to display the sensitive data:

`https://<api_url>/network/edges/<edge_id>/ipsec/config?showSensitiveData=true`

A GET request against this endpoint should now return the full IPsec configuration, along with the PSK in plain text.

## Applying the new configuration

Unfortunately, you cannot post this XML configuration back to an edge, and will also be unable to modify the edge via this API endpoint. You'll need to format your XML configuration and apply it as documented in the *Modifying the IPsec VPN configuration* and *Applying the new configuration* sections of [*How to change IPsec VPN settings via the Cloud Director API*](../vmware/vmw-how-change-ipsec-vpn-api.md).

As mentioned earlier in this article, you can post the VPN configuration to the edge without the PSK being present in the XML configuration. The PSK will remain the same. However, if you need to amend the PSK or configure a new VPN, you can find instructions for this in the *Amending the shared secret* section of the article linked above.

## Next steps

If you need any further assistance, or if you want to discuss any aspect of this service or settings specific to your domain, log a support ticket via the [My Calls](https://portal.skyscapecloud.com/support/ivanti) section of the UKCloud Portal.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
