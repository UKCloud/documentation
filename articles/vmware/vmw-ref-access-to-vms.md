---
title: Access to virtual machines on the UKCloud platform
description: Outlines what access and controls UKCloud has in place with regards to customer virtual machines.
services: vmware
author: Sue Highmoor
reviewer:
lastreviewed: 19/07/2018 12:45:48
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Access to virtual machines on the UKCloud platform
toc_fullpath: Reference/vmw-ref-access-to-vms.md
toc_mdlink: vmw-ref-access-to-vms.md
---

# Access to virtual machines on the UKCloud platform

## What access does UKCloud have to our running virtual machines and the memory they are using?

Our default policy is that no UKCloud personnel have access to any of our customer’s environments. We would need a specific, customer approved change ticket in order to gain access to a customers’ environment if we are to assist them with resolving any issues.

UKCloud provides compute in line with the NIST defined IaaS cloud delivery model, which means that we manage the components up to and including the hypervisor, but we do not manage the virtual machine (VM) or anything within it (for example, the operating system or local disks). Each customer has complete autonomy in provisioning their VMs and therefore has exclusive control over the security credentials they use for each VM. As UKCloud does not have access to these security credentials, our personnel have no ability to authenticate and gain access to customer VMs.

UKCloud personnel do have access to the vSphere hypervisors, physical servers and storage in which customer VMs run, so that they can effectively manage and maintain the cloud platform. This does not give them access to individual VMs, but rather the underlying resource pool.

## What controls do you have in place to prevent access to our data, either on disk or in memory?

UKCloud was one of the first cloud service providers to achieve NCSC Pan Government Accreditation to host government data classified up to and including UK RESTRICTED (IL3 under the Government Protective Marking Scheme) and is one of the few cloud service providers who maintain PSN Accreditation, as well as the approval of the Health and Social Care Information Commission (HSCIC) to provide access to HSCN and Personally Identifiable Data. This heritage means that we have mature and well developed security controls throughout our organisation. This encompasses robust and multi-tiered physical, logical and technical security systems and controls.

Given the low-level access that UKCloud personnel have to the cloud platform, we have implemented a variety of interconnected controls which include people, process and technology.

We have a comprehensive Role Based Access Control (RBAC) system, which ensures that only authorised personnel can access appropriate elements of the cloud platform as required to undertake the authorised tasks of their role

In addition, UKCloud is subject to regular ITSC CHECK Tests which provide a comprehensive and in-depth independent assessment of technical and security configurations, and check alignment of the assurance of UKCloud to Service Definitions, published RMADS and appropriate UK Government and industry standards.

UKCloud maintains a protective monitoring service aligned with NCSC Good Practice Guidance GPG13 and the prescribed protective monitoring controls PMC1-12. This ensures that UKCloud has a comprehensive and detailed audit log, tracking which personnel have accessed and performed tasks on the cloud platform.

All UKCloud personnel are appropriately vetted and security cleared so that customers can be assured that engineers with access to the underlying infrastructure are operating at the highest levels of trust (for example, through vetting and clearance frameworks including like BPSS, SC, DV and NPPV).

UKCloud benefits from a full-time internal compliance function, which regularly audits company functions and processes to assess whether they are being correctly followed (for example by maintaining clear evidence where customers request and permit UKCloud to access their VMs). Any non-conformance is documented, reported to Board Level, and followed up to ensure that effective remedial actions are implemented.

Finally, to complement the high levels of security inherent within the UKCloud platform, UKCloud recommends that customers use appropriate controls within the VM or application, such as data at rest encryption (for example, Bitlocker or Becrypt), session encryption (for example, HTTPS or VPN), and the implementation of appropriate protective monitoring.

UKCloud has produced extensive security collateral to explain how we provide an assured cloud platform, including our [Government Security Classification Policy](https://ukcloud.com/wp-content/uploads/2016/08/UKCloud_WhitePaper_RGB_Digital_Government_Security_Classifications_policy.pdf) whitepaper, relevant evidence packs and RMADS. If you would like to discuss this further, we can arrange for an Account Director, a Cloud Architect or a member of the Compliance Team to contact you.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
