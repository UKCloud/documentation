---
title: UKCloud Knowledge Centre guidelines | UKCloud Ltd
description: Provides guidelines for what to consider when creating and editing Knowledge Centre articles
services: other
author: Sue Highmoor
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
> Content in the Knowledge Centre is available over the internet to anybody, therefore it is extremely important to ensure that articles do not contain any sensitive information, including, but not limited to, user names, sensitive IP addresses. This includes information that may be in screenshots or images. If you're unsure about whether information in the article is sensitive, consult with a subject matter expert before creating your Pull Request.

## Submission of content

By submitting content you are granting UKCloud permission to use your submission in our Knowledge Centre, which is available for public consumption over the internet. In addition, you will also be identified as a contributor to the article in our public GitHub repository.

## Images

If you add images to the article, `.png` is the preferred file format.

> [!NOTE]
> You should make sure that you are not violating any copyright laws with any images that you add.
>
> You should make sure that images, especially screenshots, do not contain any sensitive data, such as user names or IP addresses.

File names for images in Knowledge Centre articles should use the following file naming convention:

`<product>-<tool>-<ui>-<description>.png`

> [!NOTE]
> Each word in the file name should be separated by a hypen.

where:

- `product` indicates which product the image is for (see [Article file naming conventions](#article-file-naming-conventions) for a list of products).

- `tool` (optional) indicates the tool the image is depicting. This will be different for each product.

    For example, `vmw-<vcd>-add-dhcp-pool-adv.png`, `ostack-<horizon>-create-network.png`

- `ui` (optional) indicates the UI element the image is depicting, for example, <mnu> for a menu, <btn> for a button, <tab> for a tab.

    For example, `vmw-vcd-<btn>-add-static-route.png`

- `description` indicates the purpose of the image. Use as few words as possible and separate words with hyphens.

    For example: `vmw-portal-<build-compute-service>.png`

## Article file naming conventions

If you're creating a new article, use the following file naming convention

`<product>-<type>-<description>-<tool>.md`

> [!NOTE]
> Each word in the file name should be separated by a hypen.

where:

- `product` indicates which product the topic is for. One of:

  - `azs` for UKCloud for Microsoft Azure
  - `cdsz` for Cross Domain Security Zone
  - `conn` for Connectivity
  - `cs` for Cloud Storage
  - `draas` for Disaster Recovery as a Service
  - `email` for Email and Collaboration
  - `enbl` for Cloud Enablement
  - `gpu` for Cloud GPU
  - `migr` for Migration to the Cloud
  - `orcl` for UKCloud for Oracle Software
  - `oshift` for UKCloud for OpenShift
  - `ostack` for UKCloud for OpenStack
  - `ptl` for the UKCloud Portal
  - `prc` for Private Cloud for Compute
  - `pro` for Private Cloud for Oracle
  - `prs` for Private Cloud for Storage
  - `sra` for Secure Remote Access
  - `vmw` for UKCloud for VMware
  - For articles that do belong to a service or that apply to multiple services, use `other`

- `type` indicates the article type. One of:
  
  - `faq` for FAQs
  - `gs` for Getting Started Guides
  - `how` for How To Guides
  - `ref` for Reference Guides
  - `sco` for Service Scopes

- `description` indicates the purpose of the article. Use as few words as possible and separate words with hyphens. For Reference Guides start with a noun, for How To guides start with a verb.

    For example: `vmw-how-<create-vm-from-template>.md`, `conn-ref-<psn-core-services>.md`

- `tool` (optional) indicates if the topic is specific to a particular tool (for example, a CLI or API).

    For example: `ostack-how-manage-accounts-<portal>.md`, `azs-how-configure-<cli>.md`

## Metadata

If you're creating a new article, you must make sure that it includes the appropriate metadata. The metadata ensures that the article is included properly in the Knowledge Centre and helps with internet searches. Include the following metadata at the top of the article:

```
---
title: Full title of article | UKCloud Ltd
description: Description of article content
services: Service
author: Your name

toc_rootlink: Article type
toc_sub1:
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Short title of article
toc_fullpath: rootlink/sub1/sub2/etc/filename.md
toc_mdlink: filename.md
---
```

### title

This is the full title of the article and will appear in the browser title bar.

### description

This is a description of the content of the article. Provide information here that will help target the article in internet searches.

### services

This is the service to which the article belongs. One of:

- `azure`
- `cdsz`
- `cloud-storage`
- `connectivity`
- `draas`
- `email`
- `enablement`
- `gpu`
- `migration`
- `openshift`
- `openstack`
- `oracle`
- `portal`
- `private-compute`
- `private-oracle`
- `private-storage`
- `sra`
- `vmware`
- For articles that do belong to a service or that apply to multiple services, use `other`

### author

This is the name of the person who created the article.

### rootlink

For most articles, the rootlink will be the article type. One of:

- `Getting Started`
- `How To`
- `Reference`
- `FAQs`
- `Blueprints`
- `Service Scopes`

> [!NOTE]
> For UKCloud for Microsoft Azure articles, the rootlink is either `Users` for articles intended for tenants or `Operators` for articles intended for service providers.

### sub1, sub2, etc

The sub1 metadata tag enables you to categorise articles within the root level to group them into related articles. This is useful if the product has lots of articles of the same type.

> [!NOTE]
> For UKCloud for Microsoft Azure articles, sub1 should be the article type as listed in [rootlink](#rootlink).

You can use sub2, sub3 and so on to further categorise articles, but it is not recommended to go too many levels deep.

### toc title

This is the title of the article as it will appear in the product topic list. Due to the restricted width of the topic list, the TOC title should not be too long, so consider shortening the full title if appropriate. For How To Guides, remove the initial How to and start with the verb. For example, for the topic *How to create a virtual machine from the Azure Marketplace*, you could set the TOC title to `Create a virtual machine`.

### fullpath

This is the full path of the article within the product topic list. For example:

`Getting Started/vmw-gs.md`
`How To/vmw-how-create-vapp.md`
`Users/Getting Started/azs-gs.md`

### mdlink

This is the file name of the article. This must exactly match the file name and include the `.md` extension.

## Markdown

You should write your article using GitHub markdown. For more information, see [*Basic writing and formatting syntax*](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

As we use DocFX to generate our Knowledge Centre web pages, you can also use DocFX markdown to add additional features to your articles. Specifically, we use DocFX markdown to highlight notes, tips and warnings:

For tips:

    > [!TIP]
    > This is a tip, which provides helpful information for working with a product.

> [!TIP]
> This is a tip, which provides helpful information for working with a product.

For notes:

    > [!NOTE]
    > This is a note, which provides important information.

> [!NOTE]
> This is a note, which provides important information.

For important notes:

    > [!IMPORTANT]
    > This is an important note, which requires particular attention.

> [!IMPORTANT]
> This is an important note, which requires particular attention.

For warnings:

    > [!WARNING]
    > This is a warning, which provides users with information about something which could cause significant issues if ignored.

> [!WARNING]
> This is a warning, which provides users with information about something which could cause significant issues if ignored.

## Feedback

If you have any comments on this document or any other aspect of your UKCloud experience, send them to <products@ukcloud.com>.