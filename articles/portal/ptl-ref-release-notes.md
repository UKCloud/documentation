---
title: Portal release notes | UKCloud Ltd
description: Information on latest features included in a Portal update
services: portal
author: Sue Highmoor
reviewer:
lastreviewed: 20/07/2018 12:12:33
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Portal release notes
toc_fullpath: Reference/ptl-ref-release-notes.md
toc_mdlink: ptl-ref-release-notes.md
---

# Portal release notes

This article provides a list of completed Portal releases.

## Release 1.124.0

Date: 30th January 2020

Feature update

Details:

- Display plain text 2FA seed during setup process. Allowing customers that cannot use the QR code directly, to manually copy and paste this into desktop based password management apps.

- Security enhancement, removed the 2FA page when logged in.

## Release 1.122.0

Date: 8th January 2020

Feature update

Details:

- Portal password confirmation page on initial secondary account switch

- Update links to Knowledge Centre articles

## Release 1.121.0

Date: 16th December 2019

Feature update

Details: Removed Memorable Word Authentication.

## Release 1.119.0

Date: 6th November 2019

Feature update

Details: Added better validation when setting up IP address whitelisting to restrict access to the vCloud Director API.

## Release 1.117.0

Date: 7th October 2019

Bug fix and feature update

Details: Fixed left hand menu spacing bug for Support options. Integrated Single Sign-on access management when contacts are added and removed in the Portal.

## Release 1.116.0

Date: 13th September 2019

Bug fix

Details: Fixed bug where newly created VMs on vCloud Director 9.7 cannot be added to a snapshot backup policy.

## Release 1.111.0

Date: 29th July 2019

Feature update

Details: Updated Elevated Knowledge Centre links.

## Release 1.110.0

Date: 18th July 2019

Feature update

Details: Updated links to support the launch of the new UKCloud Communities platorm (https://community.ukcloud.com) which also includes changes to UKCloud Ideas.

## Release 1.109.1

Date: 16th July 2019

Bug fix and feature update

Details: Fixed vCloud Director login timeout issue which made it difficult for users to access vCloud Director after the initial session expired. Removed ability for users to raise support tickets directly in the Portal, this is now done via Ivanti Service Manager.

## Release 1.106.0

Date: 4th June 2019

Feature update

Details: Removed VMware Edge showback functionality from Portal as this is now supported in vCloud Director 9.7 via the Advanced Gateway features.

## Release 1.105.0

Date: 29th May 2019

Feature update

Details: Added new OpenStack Permissions tab behind a feature flag to support user access management of Single Sign-on enabled services. Updated status page links to support move to https://status.ukcloud.com.

## Release 1.104.0

Date: 13th May 2019

Feature update

Details: Added new OpenShift Permissions tab behind a feature flag to support user access management of Single Sign-on enabled services.

## Release 1.102.0

Date: 17th April 2019

Feature update

Details: Added new /api/billing/billing-csv endpoint to provide customers with monthly billing data for OpenStack and VMware. The information included the CSV is the same as the invoice evidence file.

## Release 1.100.0

Date: 28th March 2019

Feature update

Details: Added Single Sign-on (SSO) authentication token request during login to enable the Portal to access SSO related services.

## Release 1.99.0

Date: 21st February 2019

Feature update

Details: Added new My Calls Permissions tab behind a feature flag to support the roll out of the new Ivanti Service Management tool.

## Release 1.98.0

Date: 21st February 2019

Feature update

Details: Added new My Calls Archive tab behind a feature flag to support the roll out of the new Ivanti Service Management tool.

## Release 1.96.1

Date: 22nd January 2019

Feature update

Details: Updated punctuation in Two factor authentication confirmation email.

## Release 1.96.0

Date: 8th January 2019

Bug fix and feature update

Details: Fixed issue stopping the selected protection policy being applied to all VMs when managing the Default VM Snapshot Protection Policy for a VDC. Removed Two factor authentication lockout period option in account security setup.

## Release 1.93.0

Date: 17th December 2018

Feature update

Details: Updated the contact removal process to remind administrators that additional steps are required to fully remove the users access rights if they're using the Single Sign-on enabled service for OpenShift or OpenStack.

## Release 1.92.0

Date: 11th December 2018

Feature update

Details: Added Knowledge Centre banner in Elevated to support move to https://docs.ukcloud.com.

## Release 1.90.0

Date: 21st November 2018

Bug fix

Details: Updated additional Portal Knowledge Centre links following move to https://docs.ukcloud.com.

## Release 1.89.0

Date: 6th November 2018

Bug fix

Details: Fixed account locking issue for administrators under certain circumstances. Updated incorrect Portal Knowledge Centre links.

## Release 1.88.2

Date: 29th October 2018

Bug fix

Details: Fixed error when managing IPsec VPN configuration in Elevated.

## Release 1.84.3

Date: 16th August 2018

Bug fix

Details: Fixed date pickers on monitoring pages.

## Release 1.84.1

Date: 2nd August 2018

Bug fix and feature update

Details: Changing links to point to new Knowledge Centre content, change 2FA setup to use new seed.

## Release 1.82.0

Date: 3rd July 2018

Feature update

Details: Update product names to reflect G-Cloud 10 names, enable self-service ECS user creation.

## Release 1.78.0

Date: 7th June 2018

Bug fix and feature update

Details: Remove power status from My VMs page for VMs and vApps, remove BETA references from UKCloud for Azure.

## Release 1.76.0

Date: 17th May 2018

Feature update

Details: Added an API endpoint that returns a CSV report from the billing API.

## Release 1.73.0

Date: 10th April 2018

Bug fix and feature update

Details: Fixed bug preventing passwords being synched on login. Improved search bar on events and threats briefs page.

## Release 1.72.0

Date: 28th March 2018

Bug fix and feature updates

Details: Fixed minor UI bugs. Added an IP restriction functionality to the admin portal. Added category to events detail page.

## Release 1.71.0

Date: 20th March 2018

Feature update

Details: Inserted an event summary section to every event detail page.

## Release 1.70.1

Date: 7th March 2018

Bug fix and feature updates

Details: Added list of customer specific events to blank events page. Pagination for events list page. Added correct latest status for each customer specific event. Added total log scans for past 24 hours. Fixed My VMs page displaying missing information. Added search box to customer specific events page. Added message when search on customer specific events returns no results. Added Sovereign Azure page to the navigation. 

## Release 1.66.0

Date: 9th January 2018

Bug fix and feature updates

Details: Fixed the 2 factor authentication setup for new users. Added CAPTCHA to the forgot password page on the portal. Added in new Zerto links for Elevated.

## Release 1.62.1

Date: 1st November 2017

Bug fix

Details: Fixed the Portal grid paging control not always rendering

## Release 1.62.0

Date: 26th October 2017

User Feature

Details: Added a caveat warning for links within cyber security news

## Release 1.60.6

Date: 14th September 2017

User Feature

Details: Cyber Security news feed has been added to showback security threats to customers

## Release 1.60.5

Date: 24th August 2017

Bug fix

Details: fixed bug that was causing IPsec config tool to break when edge gateways were missing public IPs

## Release 1.59.2

Date: 19th July 2017

Feature update

Details: Set elevated mail server details. 

## Release 1.59.0

Date: 11th July 2017

Feature update

Details: Actioned a UKCloud idea by changing the Login History time format from 12-hour to 24-hour on the Login History page. Added new Zerto URLs for the Assured zones in regions 1 & 2, an extension of the Zerto service.

## Release 1.58.0

Date: 29th June 2017

Feature update

Details: Customers can now see all pinned notifications, rather than just the top three. Notifications provide customers with important information regarding UKCloud's platform and/or products.

## Release 1.56.0

Date: 21st June 2017

Bug fix

Details: Updated background images and removed Skyscape -> UKCloud rename banner from the login page.

## Release 1.55.9

Date: 8th June 2017

Bug fix

Details: Fixed an issue where customers were unable to delete contacts from the contacts section of the Portal.

## Release 1.55.8

Date: 6th June 2017

Bug fix

Details: Fixed a bug within the bandwidth showback section of the Portal, as some customers were unable to see their bandwidth utilisation metrics. For more details on how to retrive bandwidth showback metrics, please see this FAQ.  

## Release 1.55.5

Date: 17th May 2017

Feature updates

Details: The 'List All Articles' button in the Knowledge Centre has now been moved to the top of the categories menu for better visibility. 

## Release 1.55.0

Date: 2nd May 2017

Feature updates

Details: Internet Bandwidth consumption showback available to all customers. Please see the Bandwidth Monitoring FAQ document in the Knowledge Centre for more details. 

## Release 1.54.0

Date: 27th April 2017

Feature updates and bug fixes 

Details: Updated Edge Gateway IPSec configuration User Interface. Based upon customer feedback we have organised the SLA report by creation date, found within the Reports section of the Portal.  

## Release 1.52.1

Date: 4th April 2017

Bug fix

Details: Fixed an issue on the My Calls form preventing tickets from being created which have the Incident Classification field populated.  

## Release 1.52.0

Date: 4th April 2017

Feature updates and bug fixes  

Details: Allow customers to create/build compute services within eligible zones through the Portal UI. Cleaned up display of wide tables which was causing issues for users with narrow monitors or low resolution displays.

## Release 1.51.0

Date: 28th March 2017

Feature updates and bug fixes

Details: Launch of self service of VDCs and Edge Gateways through the Portal UI. This will be available to Administrators of compute services in regions 5 & 6, enabling more of our customers to use the self-service provisioning functionality that currently existing within the Portal API. Fixed a bug that was causing an error message to be displayed when a customer tries to modify an edge without an IPSec Configuration in the IPSEC Configuration tool pages. This ensures customers are better informed about how to use the tool.  

## Release 1.50.0

Date: 16th March 2017

Feature updates and bug fixes  

Details: Added Admin API endpoints to help find out if a VM has a Snapshot protection policy associated with it. Fixed a bug that was causing issues on the My VMs page where there was no associated edge gateway with the Enterprise Compute Cloud service.

## Release 1.49.0

Date: 14th March 2017

Feature updates and bug fixes

Details: Released a new feature allowing customers to modify IPsec configuration of VPNs through the UKCloud Portal. A bug fix that was preventing users from removing subnets and modifying VPNs without tunnels.

## Release 1.48.3

Date: 9th March 2017

Bug fixes

Details: Fixed bug to redirect back to original page after login feature.

## Release 1.48.2

Date: 27th February 2017

Feature updates and bug fixes

Details: New link in the Portal within the Knowledge Centre section which provides at a glance a list of all articles currently available. Bug fix to replace all instances of Skyscape to UKCloud to be consistent with brand and a bug fix that now allows customers to view correct details of the account they are viewing.  

## Release 1.48.1

Date: 16th February 2017

Bug fixes

Details: Patch updates fixing an issue raised by Release 1.48.0 

## Release 1.48.0

Date: 16th February 2017

Feature updates and bug fixes

Details: Added validation of VDC names to the API endpoint. Updated the main menu of the UKCloud portal to add more clarity for customers. Extended the availability of the provisioning tool to allow for self-provisioning of edges in the Elevated environment. Added self-provisioning reports via API and added more information to build statuses in the API. Fixed a bug that was preventing a contact's OpenStack permissions from being persistent. A fix for rendering snapshot protection text and tab has been completed. Small CSS fixes to improve layout and a fix to the user interface which now retains the VDC information after changing the default snapshot retention.  

## Release 1.47.0

Date: 19th January 2017

Feature updates

Details: Improved user experience by setting the VM status to queuing when a default protection policy is applied to the VDC. More details are now visible to customers regarding snapshot policy history for VDCs and VMs.

## Release 1.46.1

Date: 11th January 2017

Bug fixes

Details: Repaired dead link on the VM overview page which allows customers to find information about their compute service in the Knowledge Centre. A fix has been applied to the Knowledge Centre search button, plus the replacement of missing assets.

## Release 1.46.0

Date: 9th January 2017

Bug fixes

Details: Bug fixed to send all possible client names to the avamar API. Removal of references to Skyscape from the Portal and replace with UKCloud.

## Release 1.45.3

Date: 22nd December 2016

Bug fix

Details: Bug fixed that prevented links to videos appearing in knowledge Centre articles so that customers can download videos from the article.

## Release 1.45.2

Date: 23rd December 2016

Bug fix

Details: Corrected wording for retention policy forms. 

## Release 1.45.1

Date: 15th December 2016

Bug fix and feature updates   

Details: Updated link to confirmation syntax to ensure alert dialog pops up on atmos and notifications pages. Fix redirect after login so that when a user follows a deep link to tan article in the Knowledge Centre, after login, the user is redirected to the linked page. Updated Zerto text and URLs for Assured and Elevated so customers are redirected to the correct Zerto login page.

## Release 1.45.0

Date: 13th December 2016

Bug fix and feature updates  

Details: Removal of CSV exports and changing them to HTML displays. Addition of admin API endpoint to retrieve a VDC audit record. Addition of API endpoint to allow users (with admin permission) to create vOrgs. Bug fixed regarding the number of articles returned in the Knowledge Centre as this was incorrect. Fixed link in "my_vms" to filter by correct category to allow customers to view documentation relevant to their search.

## Release 1.44.2

Date: 13th December 2016

Maintenance release    

Details: My Calls security enhancements.

## Release 1.44.0

Date: 8th December 2016

Bug fixes and feature updates

Details: Addition of article type GUIDs for Service Definitions. Updated links in VMs overview page so that customers can view relevant documention. Bug fixed where the use of wildcards within the Knowledge Centre searches caused a search error. Added the feature to allow customers to backup VMs at the VDC level. Removal of defunct AccountService and AccountServiceMeta models.

## Release 1.43.0

Date: 23rd November 2016

Feature updates  

Details: Allow customers to filter articles in the Knowledge Centre by the subject, "UKCloud for OpenStack". Replacement of sidekiq functionality to make backup policy changes and start using rabbit mq with the new avamar-worker. 

## Release 1.42.0

Date: 29th November 2016

Bug fixes and functionality updates    

Details: Bug fixed regarding locked landesk tickets and min or issues. Fixes applied to the admin portal API authentication to improve security. Adding the functionality to display the users company and account name in the menu bar even if they only have one account.  

## Release 1.41.0

Date: 23rd November 2016

Feature update    

Details: Support added for client-side zipping in the Portal and uploading files to landesk which allows customers to upload screenshots, logs and other files to tickets. 

## Release 1.40.0

Date: 23rd November 2016

Functionality updates   

Details: Addition of OpenStack support for sending user creation requests, password changes and assigning/unassigning OpenStack projects. Addition of article type GUIDs to the lookup files for the creation of new article types. 

## Release 1.39.0

Date: 17th November 2016

Functionality updates    

Details: Adding tests to Contacts model to ensure emails will not be duplicated when users create new contacts. Adding the admin portal API back and the ability to alter a backup policy. Addition of a VM backup whitelist table to enable tracking of which VMS are being backed up. Addition of the ability to get and update AvamarAudit records via the admin API. 

## Release 1.38.2

Date: 15th November 2016

Maintenance release    

Details: Movement of errbit host and API key configs to environment variables as part of the containerisation project. 

## Release 1.38.1

Date: 11th November 2016

Functionality update    

Details: Addition of a button to allow customers to mark all notifications as read. 

## Release 1.38.0

Date: 9th November 2016

Functionality and feature updates    

Details: the Knowledge Centre search has been updated to force the search engine treat all terms individually to make it easier for customers to search for a specific article. Log Portal API requests to ElasticSearch. Enhancement to the companies page by displaying company ID on the admins Portal Company page, and adding "DataTables" to make searching and pagination easier. Addition of VDC and vApp name to vMotion events API.  

## Release 1.37.3

Date: 1st November 2016

Bug fixes and functionality updates    

Details: Rewrite of Knowledge Centre article categories to reflect G-Cloud 8 changes. Bug fixes in the Knowledge Centre CSS to allow customers to view changes made to the stylesheets. 

## Release 1.37.2

Date: 31st October 2016

Bug fixes   

Details: Bug fixes regarding permissions for Compute services missing off the contact edit page

## Release 1.37.1

Date: 25th October 2016

Bug fixes and functionality updates    

Details: Added condition to fix error where contacts without an associated user account couldn't be edited. Added a message to the API endpoint my_vm. Added the ability for users to clone permissions from a chosen contact on the edit permissions page which should speed up the contact-creation process. Addition of rescue blocks to the API to log to Airbrake and return apologetic responses to the users when handling errors. Added pagination ability to the API to enable faster, smaller queries being made to the API. Fixed bug from the Rails upgrade that has prevented the Avamar Audits displaying int he Admin Portal. added the ability to resubmit failed backup policy changes via the Admin Portal.  

## Release 1.36.3

Date: 17th October 2016

Maintenance release    

Details: Maintenance release for support 

## Release 1.36.2

Date: 10th October 2016

New feature    

Details: Ability to add password confirmation checks to the edit-user forms in the front and back end 

## Release 1.36.1

Date: 3rd October 2016

Bug fix   

Details: Fixes bug preventing edge gateway deployments in the Portal API 

## Release 1.36.0

Date: 3rd October 2016

Maintenance release   

Details: Maintenance release for support 

## Release 1.35.0

Date: 30th September 2016

New Feature/Bug fix  

Details: New API to show DRS (vMotion) event to the user. Allow users to alter a backup policy if the last attempt was successful

## Release 1.34.0

Date: 28th September 2016

New Features 

Details: Ability to print ticket details via the Actions menu. Ability to print contacts within accounts

## Release 1.33.1

Date: 22nd September 2016

Maintenance release

Details: Maintenance release for support 

## Release 1.33.0

Date: 21st September 2016

Bug fix/feature release

Details: Improved notification flows when Portal notifications are added/updated, Ability to self-close Service Requests by customer within the portal & enable Snapshot Protection Self-management  - find KC article entitled “Snapshot Protection (backup)” for further details on how to use the feature 

## Release 1.32.0

Date: 16th September 2016

Maintenance release

Details: Maintenance release for support

## Release 1.31.3

Date: 16th September 2016

Bug fix

Details: Prevent backup icons shrinking on browser resize & Knowledge Centre layout fix

## Release 1.31.2

Date: 6th September 2016

Minor fixes

Details: Fix bug in creating a new vm_extended_attributes record with the latest policy retention, Further Enhancements to penetration testing protection

## Release 1.31.1

Date: 31st August 2016

Minor fixes

Details: Fix bug in backup management by increasing the read timeout when making requests to the Avamar service. Improve user experience interacting with backup management. 

## Release 1.31.0

Date: 24th August 2016

Minor fixes

Details: Allow Mob Phone field to store more than 11 characters. Rebranding to UKCloud 

## Release 1.30.5

Date: 17th August 2016

Maintenance Release

Details: Maintenance release for support 

## Release 1.30.4

Date: 12th August 2016

Feature 

Details: CSV export of 'My-VMs' to be an HTML table display 

## Release 1.30.3

Date: 11th August 2016

Minor fixes

Details: Contact details validation around Email address and Contact Name 

## Release 1.30.2

Date: 10th August 2016

Minor fixes

Details: Ideas URL rebrand, Validation to input fields, Javascript disabled warning 

## Release 1.30

Date: 1st August 2016

Feature

Details: UKCloud rebrand

## Release 1.27.2

Date: 14th July 2016

Feature

Details: Launch of UKCloud Ideas

## Release 1.27.1

Date: 4th July 2016

Feature

Details: Add PW description details to the "reset-password" form, and enforce session time-out after 15 minutes

## Release 1.27

Date: 27th June 2016

Bug fix

Details: Include priority on support call export facility, and fix error on VM List on around Backup details “TypeError: no implicit conversion of nil into String”

## Release 1.26

Date: 14th June 2016

Feature

Details: Various updates to improve UKCloud portal management

## Release 1.25.3

Date: 24th May 2016

Minor bug fix

Details: Various updates to improve UKCloud monitoring and performance

## Release 1.25.2

Date: 24th May 2016

Minor bug fix

Details: Admin Portal bug fix

## Release 1.25.1

Date: 19th May 2016

Minor bug fix

Details: Portal 500 Error fix

## Release 1.25

Date: 12th May 2016

Feature

Details: Total number of VMs information session expiry

## Release 1.24

Date: 27th May 2016

Feature

Details: Merge and deploy vShield Manager Portal work for platform 1.5

## Release 1.23

Date: 19th April 2016

Minor bug fix

Details: Performance improvements

## Release 1.22

Date: 15th April 2016

Minor bug fix

Details: Maintenance release for support (improvements required after upgrading LANDesk version)

## Release 1.21

Date: 13th April 2016

Feature

Details: Add Memorable word feature

## Release 1.20

Date: 23rd March 2016

Feature

Details: Improvements to admin portal

## Release 1.19

Date: 4th February 2016

Minor bug fix

Details: Bugfixes and improvements to Knowledge Centre

## Release 1.18.1

Date: 15th January 2016

Minor bug fix

Details: Improvements to vCloud session cookies and UI improvements to MyCalls

## Release 1.17.1

Date: 7th December 2015

Feature

Details: Improvements to Compute service API

## Release 1.16

Date: 16th October 2015

Feature

Details: Display additional information against VMs and updated Cloudera "Getting Started" information.

## Release 1.15.1

Date: 8th September 2015

Minor bug fix

Details: Improvements to Admin portal

## Release 1.14.2

Date: 20th August 2015

Minor bug fix

Details: Fixes to "My VMs" and export improvements to notifications

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
