---
title: Known bugs with the UKCloud Pricing Estimation Tool
description: Known bugs with the UKCloud Pricing Estimation Tool
services: other
author: Dan Baker
reviewer: hferris
lastreviewed: 05/05/2020

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Known bugs with the UKCloud Pricing Estimation Tool
toc_fullpath: Reference/other-ref-pricing-tool-bugs.md
toc_mdlink: other-ref-pricing-tool-bugs.md
---

# Known bugs in the Pricing Estimation Tool

This is an accompanying article to [*How to use the UKCloud Pricing Estimation Tool*](other-how-use-pricing-tool.md). We'll update this article to document new bugs and issues as they are discovered and to remove resolved bugs and issues when we update the tool.

## Current version

The current version of the tool:

- **Windows version**: 11.0.6

- **Mac version**: 11.0.6

## Known issues with v11.0.6 (current version)

- The Mac version of the Pricing Estimation Tool is a 32-bit application, so will not work on the latest version of the Mac OS.

## Known issues with previous versions

### Known issues with v10.2.8 (fixed in v10.3.1)

#### Windows

1. In the UKCloud for VMware section, entering an amount of additional storage GiB without selecting the Storage type does not display an error message.

If you specify an amount of storage without specify a Storage type, the storage is added to the estimate but the calculation shows the additional storage as being free, which is incorrect.

Workaround: When including additional storage in your estimate, be sure to select the storage type first. If you select a storage type but do not enter a storage amount, an error message is displayed.

![Storage Bug](images/pricing-bug-win-1.png)

#### Mac

The following are known issues with the Mac version of the Pricing Estimation Tool.

1. You cannot select a date in the date picker. Instead you must enter the date manually.

    ![Date Picker](images/pricing-bug-mac-1.png)

2. When creating an estimate for **Cloud GPU for HPC**, if you click the increase counter for **Cloud GPU Cards** the number is added twice. You'll need to manually edit the field to remove the duplicated number.

    ![Cloud GPU Bug](images/pricing-bug-mac-2.png)

3. If you select **Save as** from the main menu, you'll see the following error message:

    ![Save As Bug](images/pricing-bug-mac-3.png)

    If you click **Abort**, the tool closes and your estimate will not be saved. Instead, click **OK** to save the estimate successfully.

4. If you minimise the tool's window, there is no way to resize it. You must close the tool and reopen it.

## Related videos

- [*UKCloud Pricing Estimation Tool overview video*](other-vid-pricing-tool-overview.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
