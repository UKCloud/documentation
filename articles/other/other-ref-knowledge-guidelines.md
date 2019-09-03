---
title: UKCloud Knowledge Centre guidelines | UKCloud Ltd
description: Provides guidelines for what to consider when creating and editing Knowledge Centre articles
services: other
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 22/07/2019
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Knowledge Centre guidelines
toc_fullpath: Reference/other-ref-knowledge-guidelines.md
toc_mdlink: other-ref-knowledge-guidelines.md
---

# UKCloud Knowledge Centre guidelines

If you're contributing content to the UKCloud Knowledge Centre, it's important that you follow the guidelines listed in this article.

For information about how to contribute content, see [*How to contribute to the UKCloud Knowledge Centre*](other-how-contribute-knowledge.md).

For a template to get you started, see [*UKCloud Knowledge Centre article template*](https://raw.githubusercontent.com/UKCloud/documentation/master/articles/other/other-ref-knowledge-template.md).

## Sensitive content

> [!IMPORTANT]
> Content in the Knowledge Centre is available over the internet to anybody, therefore it is extremely important to ensure that articles do not contain any sensitive information, including, but not limited to, user names and sensitive IP addresses. This includes information that may be in screenshots or images. If you're unsure about whether information in the article is sensitive, consult with a subject matter expert before creating your Pull Request.

## Submission of content

By submitting content you are granting UKCloud permission to use your submission in our Knowledge Centre, which is available for public consumption over the internet. In addition, you will also be identified as a contributor to the article in our public GitHub repository.

## Article file naming conventions

If you're creating a new article, use the following file naming convention

`<product>-<type>-<description>-<tool>.md`

> [!NOTE]
> Each word in the file name should be separated by a hyphen.

where:

- `product` indicates which product the topic is for. One of:

    Code     | Product                     | Code     | Product
    ---------|-----------------------------|----------|--------
    `azs`    | UKCloud for Microsoft Azure | `cdsz`   | Cross Domain Security Zone
    `conn`   | Connectivity                | `cs`     | Cloud Storage
    `dc`     | Dedicated Compute v2        | `draas`  | Disaster Recovery as a Service
    `email`  | Email and Collaboration     | `enbl`   | Cloud Enablement
    `gpu`    | Cloud GPU                   | `hpc`    | High Performance Compute
    `man`    | Managed Services            | `mcbs`   | Multi-Cloud Backup Services
    `migr`   | Migration to the Cloud      | `orcl`   | UKCloud for Oracle Software
    `oshift` | UKCloud for OpenShift       | `ostack` | UKCloud for OpenStack
    `prc`    | Private Cloud               | `ptl`    | UKCloud Portal
    `sra`    | Secure Remote Access        | `third`  | Third-Party Software
    `trans`  | Transition Services         | `vmw`    | UKCloud for VMware

    For articles that do belong to a service or that apply to multiple services, use `other`

- `type` indicates the article type. One of:

    Code   | Article type        | Code  | Article type
    -------|---------------------|-------|-------------
    `faq`  | FAQs                | `gs`  | Getting Started Guides
    `home` | Product home pages  | `how` | How To Guides
    `ref`  | Reference Guides    | `sco` | Service Scopes
    `sd`   | Service Definitions | `vid` | Videos

- `description` indicates the purpose of the article. Use as few words as possible and separate words with hyphens. For Reference Guides start with a noun, for How To guides start with a verb.

    For example:

    - `conn-ref-<psn-core-services>.md`
    - `vmw-how-<create-vm-from-template>.md`

    

- `tool` (optional) indicates if the topic is specific to a particular tool (for example, a CLI or API).

    For example:

    - `ostack-how-manage-accounts-<portal>.md`

    - `azs-how-configure-<cli>.md`

## Metadata

If you're creating a new article, you must make sure that it includes the appropriate metadata. The metadata ensures that the article is included properly in the Knowledge Centre and helps with internet searches. Include the following metadata at the top of the article:

``` none
title: UKCloud Knowledge Centre guidelines | UKCloud Ltd
description: Provides guidelines for what to consider when creating and editing Knowledge Centre articles
services: other
author: A Name
reviewer:
lastreviewed: 27/07/2018 17:59:14
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Knowledge Centre guidelines
toc_fullpath: Reference/other-ref-knowledge-guidelines.md
toc_mdlink: other-ref-knowledge-guidelines.md
```

### title

This is the full title of the article and will appear in the browser title bar.

### description

This is a description of the content of the article. Provide information here that will help target the article in internet searches.

### services

This is the service to which the article belongs. One of:

Metadata value        | Product                     | Metadata value  | Product
----------------------|-----------------------------|-----------------|--------
`azure-stack`         | UKCloud for Microsoft Azure | `cdsz`          | Cross Domain Security Zone
`connectivity`        | Connectivity                | `cloud-storage` | Cloud Storage
`dedicated-compute`   | Dedicated Compute v2        | `draas`         | Disaster Recovery as a Service
`email`               | Email and Collaboration     | `enablement`    | Cloud Enablement
`gpu`                 | Cloud GPU                   | `hpc`           | High Performance Compute
`managed-services`    | Managed Services            | `mcbs`          | Multi-Cloud Backup Services
`migration`           | Migration to the Cloud      | `openshift`     | UKCloud for OpenShift
`openstack`           | UKCloud for OpenStack       | `oracle`        | UKCloud for Oracle Software
`portal`              | UKCloud Portal              | `private-cloud` | Private Cloud
`sra`                 | Secure Remote Access        | `third-party`   | Third-Party Software
`transition-services` | Transition Services         | `vmware`        | UKCloud for VMware

For articles that do belong to a service or that apply to multiple services, use `other`

### author

This is the name of the person who created the article.

### reviewer

This is the name of the person who most recently reviewed the article in its entirety.

### lastreviewed

This is the date when the article was most recently reviewed in its entirety.

### rootlink

**Mandatory.** For most articles, the rootlink will be the article type. One of:

- `About`

- `Getting Started`

- `How To`

- `Reference`

- `FAQs`

- `Blueprints`

- `Service Scopes`

Metadata value | Article type        | Metadata value  | Article type
    -------|---------------------|-------|-------------
    `About` | Product home pages | `FAQs`  | FAQs
    `Getting Started`  | Getting Started Guides | `How To` | How To Guides
    `Reference`  | Reference Guides    | `Service Scope` | Service Scopes
    `Service Definition`   | Service Definitions | `Videos` | Videos

> [!NOTE]
> For UKCloud for Microsoft Azure articles, the `rootlink` is either `Users` for articles intended for tenants or `Operators` for articles intended for service providers. Use the `toc_sub1` metadata tag to identify the article type.
> 
> For Managed Services and Third-Party Software, the `rootlink` is the name of the product. Use the `toc_sub1` metadata tag to identify the article type.

### toc sub1, toc sub2, etc

The `toc_sub1` metadata tag enables you to categorise articles within the root level to group them into related articles. This is useful if the product has lots of articles of the same type.

> [!NOTE]
> For UKCloud for Microsoft Azure, Managed Services and Third-Party Software articles, `toc_sub1` should be the article type as listed in [rootlink](#rootlink).

You can use `toc_sub2`, `toc_sub3` and so on to further categorise articles, but it is not recommended to go too many levels deep.

### toc title

**Mandatory.** This is the title of the article as it will appear in the product topic list. Due to the restricted width of the topic list, the TOC title should not be too long, so consider shortening the full title if appropriate. For How To Guides, remove the initial How to and start with the verb. For example, for the topic *How to create a virtual machine from the Azure Marketplace*, you could set the TOC title to `Create a virtual machine`.

### fullpath

This is the full path of the article within the product topic list. For example:

`Getting Started/vmw-gs.md`
`How To/vmw-how-create-vapp.md`
`Users/Getting Started/azs-gs.md`

### mdlink

**Mandatory.** This is the file name of the article. This must exactly match the file name (see [Article file naming conventions](#article-file-naming-conventions)) and include the `.md` extension.

## Images

If you add images to the article, `.png` is the preferred file format.

> [!NOTE]
> You should make sure that you are not violating any copyright laws with any images that you add.
>
> You should make sure that images, especially screenshots, do not contain any sensitive data, such as user names or IP addresses.

### Image location

Put images in an `images` folder below the main product folder.

### Image file naming conventions

File names for images in Knowledge Centre articles should use the following file naming convention:

`<product>-<tool>-<ui>-<description>.png`

> [!NOTE]
> Each word in the file name should be separated by a hyphen.

where:

- `product` indicates which product the image is for (see [Article file naming conventions](#article-file-naming-conventions) for a list of products).

- `tool` (optional) indicates the tool the image is depicting. This will be different for each product.

    For example, `vmw-<vcd>-add-dhcp-pool-adv.png`, `ostack-<horizon>-create-network.png`

- `ui` (optional) indicates the UI element the image is depicting, for example, <mnu> for a menu, <btn> for a button, <tab> for a tab.

    For example, `vmw-vcd-<btn>-add-static-route.png`

- `description` indicates the purpose of the image. Use as few words as possible and separate words with hyphens.

    For example: `vmw-portal-<build-compute-service>.png`

### Markdown for images

To insert an image into an article use the following markdown:

``` none
![Alt text](images/image-file-name.png)
```

Alt text is a short bit of text that is used by screen readers to provide a description of what the image is showing.

## Other markdown

You should write your article using GitHub markdown. For more information, see [*Basic writing and formatting syntax*](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

As we use DocFX to generate our Knowledge Centre web pages, you can also use DocFX markdown to add additional features to your articles. Specifically, we use DocFX markdown to highlight notes, tips and warnings:

### For tips

Markdown:

``` none
> [!TIP]
> This is a tip, which provides helpful information for working with a product.
```

Looks like:

> [!TIP]
> This is a tip, which provides helpful information for working with a product.

### For notes

Markdown:

``` none
> [!NOTE]
> This is a note, which provides important information.
```

Looks like:

> [!NOTE]
> This is a note, which provides important information.

### For important notes

Markdown:

``` none
> [!IMPORTANT]
> This is an important note, which requires particular attention.
```

Looks like:

> [!IMPORTANT]
> This is an important note, which requires particular attention.

### For warnings

Markdown:

``` none
> [!WARNING]
> This is a warning, which provides users with information about something which could cause significant issues if ignored.
```

Looks like:

> [!WARNING]
> This is a warning, which provides users with information about something which could cause significant issues if ignored.

## Feedback

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
