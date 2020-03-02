---
title: Understanding the difference between GB and GiB
description: Explains the difference between GB and GiB and why it's important
services: other
author: Sue Highmoor

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Understanding the difference between GB and GiB
toc_fullpath: Reference/other-ref-gib.md
toc_mdlink: other-ref-gib.md
---

# Understanding the difference between GB and GiB

## Overview

This article provides information about disk capacity and explains when viewed by an operating system, why the capacity of a drive differs from what is reported by a vendor.

## Why is this important?

When purchasing disk drives, 1 GB is often defined as 1,000,000,000 bytes. However, when viewed by an operating system, the capacity displayed is often less than this. For example, a new 1 TB hard drive would be reported by the OS as 931 GB (this is 931 GiB). GiB (Gibibytes) is a standard unit used in the field of data processing and transmission and is defined as base 1024 rather than base 1000.

For example, 1 GB is defined as 1000&sup3; bytes, whereas 1 GiB is defined as 1024&sup3; bytes.

Unit of measure | Bytes
----------------|------
Kilobyte (KB)   | 1000&sup1; = 1,000
Megabyte (MB)   | 1000&sup2; = 1,000,000
Gigabyte (GB)   | 1000&sup3; = 1,000,000,000
Terabyte (TB)   | 1000&#8308; = 1,000,000,000,000
Petabyte (PB)   | 1000&#8309; = 1,000,000,000,000,000
&nbsp;          | &nbsp;
Kibibyte (KiB)  | 1024&sup1; = 1,024
Mebibyte (MiB)  | 1024&sup2; = 1,048,576
Gibibyte (GiB)  | 1024&sup3; = 1,073,741,824
Tebibyte (TiB)  | 1024&#8308; = 1,099,511,627,776
Pebibyte (PiB)  | 1024&#8309; = 1,125,899,906,842,624

## How is this converted?

- GB to GiB

  - Multiply by (1000&sup3; / 1024&sup3;), equivalent to 0.931323

  - Divide by this value to go from GiB to GB

- TB to TiB

  - Multiply by (1000&#8308; / 1024&#8308;), equivalent to 0.909495

  - Divide by this value to go from TiB to TB

- GiB to TiB

  - Divide by 1024

  - Multiply by 1024 to go from TiB to GiB

- GiB to TB

  - Convert into GB by dividing by 0.931323, then divide by 1000 to get into TB

## Examples of conversions

- 1 GB = 0.93 GiB

- 1 TB = 0.91 TiB = 931 GiB

- 1 TiB = 1.1 TB = 1100 GB

## Full worked example

Example customer has two disks in each server, with each disk capacity being 2.2 TB SSD. Therefore, the total drive size equals 4.4 TB or 4.001777 TiB which across 100 hosts would mean the capacity totals 440 TB or 400.1777 TiB.

The monthly charge would therefore be 400.1777 TiB, which when multiplied by 1024 to convert into GiB is 409,781.9 GiB. At a rate of 10p/GiB, the monthly charge would be £40,978.19 per month, equating to £409.78 per server.

To illustrate the difference between GiB and GB, if we charged at a rate of 10p/GB (instead of GiB) then you would be charged for 440,000 GB which equates to a total cost of £44,000 or £440 per server. This provides a significant price difference of £3,121.81 per month, a 7.6% increase in cost. By pricing our services at £/GiB you will be charged for around 93% of the total cost had prices been listed per GB.

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.