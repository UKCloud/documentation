---
title: UKCloud response to Spectre and Meltdown | UKCloud Ltd
description: Explains the implications of Spectre and Meltdown for the UKCloud platform
services: x-platform
author: Sue Highmoor
reviewer:
lastreviewed: 23/07/2018 14:44:15
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: UKCloud response to Spectre and Meltdown
toc_fullpath: Reference/other-ref-spectre-meltdown.md
toc_mdlink: other-ref-spectre-meltdown.md
---

# UKCloud response to Spectre and Meltdown

## Introduction

This article explains the implications of Spectre and Meltdown for the UKCloud platform and describes what steps UKCloud are taking to mitigate against these vulnerabilities.

## What are Spectre and Meltdown?

Meltdown and Spectre are attack methods that exploit speculative execution techniques, intended to improve performance, used by Intel CPUs. Meltdown and Spectre use the fact that speculative execution allows unsecured access to kernel memory to attempt to obtain protected information.

For more detailed information, see:

- **Spectre variant 1:**
    <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753>

- **Spectre variant 2:**
    <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715>

- **Meltdown:**
    <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754>

## How does this affect the UKCloud platform?

The main fear for cloud customers in multi-tenant environments is that processor-level vulnerabilities are shared with neighbouring customers on the same server. One advantage that UKCloud has as a specialist serving only UK Public Sector and healthcare organisations is that all clients are known to be upstanding organisations serving taxpayers and patients in the UK. This is like a gated community of neighbours that have all been vetted.

### Underlying platform

Like most organisations, UKCloud's underlying infrastructure is susceptible to all three of these recently identified vulnerabilities. We're working with our infrastructure partners to ensure that we take the appropriate corrective actions to ensure that the vulnerabilities are mitigated. We've identified which parts of our infrastructure are at greatest risk of exploitation and will prioritise patches to those parts first, working backwards from the highest to lowest risk.

### Customer applications

While UKCloud works to patch the underlying infrastructure, you should also be working to ensure that you're patching your virtual machines. You should also be aware that patches for all three vulnerabilities exist and UKCloud customers can self-serve these by downloading them from our on-platform patch repositories. We expect additional patches to land in the coming weeks and months, which we'll make available in our repository, so be on the lookout for updates from your vendors.

### Platform benchmarks

There is a minor performance overhead caused by the patches supplied by hardware and software vendors used to address Meltdown and Spectre. All modern IT systems, including those platforms operated by cloud providers, are in the same situation --- needing to apply patches, and initial indications are that systems are having to accept the resultant performance hit. Recent benchmark reports show that the performance of our platform is market-leading; we don't expect this lead to be impacted by the changes required to mitigate Spectre and Meltdown.

### UKCloud for VMware

As and when we receive, test and apply patches from VMware, we'll perform benchmark tests to assess the performance impact on the service. We'll update this article when the results of these tests are available.

### UKCloud for OpenStack

UKCloud takes the performance of its UKCloud for OpenStack platform seriously, and has been benchmarking the possible effects of the Spectre and Meltdown patches. To perform these tests, we use Google's Perf Kit
(<https://github.com/GoogleCloudPlatform/PerfKitBenchmarker>) to run a set of repeatable benchmarks (<https://github.com/UKCloud/perfkit>).

The benchmarks were run against our pre-production environment, with a zero workload. First, we ran the benchmarks with no patches applied and ran the tests for two days on a repeating cycle. We then applied the required patches to both the underlying infrastructure and the guest OS, and then reran the same tests.

We ran the following workloads:

- storage_benchmarks:

  - aerospike

  - mongodb_ycsb

  - sysbench_oltp

  - fio

- block_storage_workload:

  - workload_mode:

    - logging

    - database

    - streaming

- network_benchmarks:

  - iperf:

  - copy_throughput:

- copy_benchmark_mode:

  - scp

  - dd

  - cp

- compute_benchmarks:

  - silo:

  - hpcc:

  - redis:

- platform:

  - cluster_boot:

You can find details of each of the individual workload types and how they are performed in the perfkit link above.

As expected, we've seen some degradation in performance. Our hardest hit application was Redis, which suffered the largest drop in performance. MongoDB and aerospike saw decreases, but only of single digit percentages.

Storage and network throughputs were also affected. Network throughput performance decreased by around 15%, and we saw an increase in IO load while running these benchmarks. However, we saw no noticeable increase in storage volume storage latency.

Workloads that only utilise the CPU saw no change.

In conclusion, you should be aware that the application of the mitigations of Spectre 1 and 2 and Meltdown will have an effect on currently running workloads.

> [!NOTE]
> These workload tests are auto-generated and do not conform to real-world application usage. Customers running these workloads may experience a greater or lesser impact.

## Ongoing activities

One of the advantages of moving to the cloud is the ability to roll out upgrades and security patches quickly and with ease across an entire estate.

UKCloud assesses the security of our environment on a daily basis, in line with best practice and international standards, and are committed to reacting promptly and appropriately to investigate and address any threats or vulnerabilities which have been identified.

Our partners and vendors release frequent patches to address security vulnerabilities. We've already allocated specialist UKCloud resources to work with our vendors on this matter given its context within our environments. When received, these patches are assessed for relevance, installed and undergo extensive integration testing.

We'll provide regular updates via the UKCloud Portal and recommend that you subscribe to notifications. For more information about how to do this, see [*Signing up to Portal notifications*](../portal/ptl-how-signup-notifications.md).

## Best practices

While we'll continue to assess the security of our platform and react promptly and appropriate to address the threat posed by these vulnerabilities, there are some things you can do to protect your own
environment:

- Upgrade your edge gateway to the latest version (currently, 6.2.7). For more information, see [*How to upgrade your edge gateway*](../vmware/vmw-how-upgrade-edge.md).

- Ensure that you implement robust firewall rules, which are not too open, to control what traffic can get through to your virtual machines. For more information, see [*How to create firewall rules*](../vmware/vmw-how-create-firewall-rules.md).

- Make sure that you're implementing strong password policies to prevent unauthorised access to your VMs.

- Keep checking the Cyber Security News page in the UKCloud Portal for the latest details on Spectre and Meltdown and advice on proactive actions you should take to mitigate and protect your environment. For more information, see [*Understanding the Cyber Security News page*](other-ref-cyber-security-news.md).

- Download any relevant vendor patches as soon as they are available and make sure your thoroughly test them in a pre-production environment before applying to your live environment.

## Summary

UKCloud is working with our partners and vendors to ensure that the relevant patches to mitigate against the vulnerabilities raised by Spectre and Meltdown are applied in a safe and effective manner. We'll continue to update you on our progress via Portal notifications.

As we apply patches, we're performing benchmark testing to determine the effect these changes may have on the performance of our platform.

We recommend that you follow best practice advice to ensure that your own environments are protected as much as possible against these current threats, as well as any other potential threats that may arise in the future.

All cloud providers are facing similar challenges to address these threats and deal with the resultant performance impact. UKCloud remains committed to providing its customers with a proven market-leading assured cloud platform.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
