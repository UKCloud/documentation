---
title: Known bugs with the UKCloud Pricing Estimator Tool | UKCloud Ltd
description: Known bugs with the UKCloud Pricing Estimator Tool
services: other
author: Dan Baker

toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Known bugs with the UKCloud Pricing Estimator Tool
toc_fullpath: Reference/other-ref-pricing-tool-bugs.md
toc_mdlink: other-ref-pricing-tool-bugs.md
---

# Known bugs in the Pricing Estimator Tool

This is an accompanying article to the [Pricing Estimator Tool guide](other-how-use-pricing-tool.md). This article intends to be a constantly updated list of issues and bugs users experience will the tool. As we update the tool, this article will be updated accordingly.

## Current version

The current version of the tool:

- **Windows version**: 10.2.8

- **Mac version**: 10.2.8

## Known issues

### Windows

1. Within the UKCloud for VMware section, a user can add additional storage GiB without selecting the Storage type – with no error message.

This storage is added to the estimate BUT the calculation does not work. It displays the additional storage as being free, which is incorrect.

Workaround: if the user selects the storage type first and not enter any GiB then an error message appears which is correct.

![Storage Bug](images/pricing-bug-win-1.png)

### Mac

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

- [UKCloud Pricing Estimator](https://vimeo.com/300701961)

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit [UKCloud Ideas](https://ideas.ukcloud.com). Alternatively, you can contact us at <products@ukcloud.com>.
