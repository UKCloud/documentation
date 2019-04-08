---
title: Windows Server activation | UKCloud Ltd
description: A point of reference regarding activating Windows Server against UKCloud's Key Management Server (KMS), along with how to resolve any failures
services: other
author: Sue Highmoor
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Windows Server activation
toc_fullpath: Reference/vmw-ref-windows-server-activation.md
toc_mdlink: vmw-ref-windows-server-activation.md
---

# Windows Server activation

## KMS Activation

After your server has been deployed and installed correctly the next step is to run Windows activation against the UKCloud KMS server. The process requests that the admin/user run the following steps:

1. Launch command prompt with administrator rights
2. Enter: 

        C:\>slmgr /skms kms.ukcloud.com:1688

If successful you'll be greeted with the following:

![machine name set success message](images/windows_activation.png)

If however, you see a response that gives the error “The activation server determined the specified product key is blocked”, you'll then need to run the following command, to verify the error and rectify the problem:

    C:\>slmgr /dli

The above command will display the current licensing information along with activation status. Once you have run this command you will see a similar message (The message should state “VOLUME_KMSCLIENT channel”)

![KMS Client info](images/kms_client_info.png)

If the above message differs and references “RETAIL”, then the Windows license you have is not compatible and cannot be activated by the KMS server, and as such will require you to convert the current retail license to a volume activation license.

To complete this process you'll need to have your exact version of Windows and cross reference the product key with the distribution on the Microsoft KB.

http://technet.microsoft.com/en-us/library/ff793409.aspx#E4IAC 

You can then update the key and re-activate the VM by typing:

    C:\>slmgr /ipk “PRODUCTKEY”

Once finished, simply follow the standard activation process.

## “Error: 0xC004C003 The activation server determined the specified product key is blocked”

This error can usually be attributed to the software license key being assigned to software product itself. If you are intending to utilise a ‘retail’ version of Windows Server, within the UKCloud infrastructure, the license key will need to be modified in order for the UKCloud KMS server to recognise the version and activate the software.

The steps in the attachment should help to successfully rectify the error being returned by the UKCloud KMS server but, before starting, please ensure: 

- You must have full admin access to the Windows VM you are activating

- You must know the exact version of Windows you are running

- You reference the following Microsoft KB article: http://technet.microsoft.com/en-us/library/ff793409.aspx#E4IAC

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.