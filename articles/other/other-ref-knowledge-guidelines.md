---
title: UKCloud Knowledge Centre guidelines
description: Provides guidelines for what to consider when creating and editing Knowledge Centre articles
services: other
author: shighmoor
reviewer: shighmoor
lastreviewed: 31/01/2022
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

If you're contributing content to the UKCloud Knowledge Centre, it's important that you adhere to the following guidelines to ensure that your article is consistent with others in the Knowledge Centre.

For information about how to contribute content, see [*How to contribute to the UKCloud Knowledge Centre*](other-how-contribute-knowledge.md).

## Sensitive content

> [!IMPORTANT]
> Content in the Knowledge Centre is publicly available to anyone, therefore it is extremely important to ensure that articles do not contain any sensitive information, including, but not limited to, names and sensitive IP addresses. This includes information that may be in screenshots or images. If you're unsure about whether information in the article is sensitive, consult with a subject matter expert before submitting your changes.

## Submission of content

By submitting content you're granting UKCloud permission to use your submission in our Knowledge Centre, which is available for public consumption. In addition, you'll also be identified as a contributor to the article in our public GitHub repository.

## Article file naming conventions

Article file names are constructed as follows, with each element separated by a hyphen:

`<product>-<type>-<description>-<tool>.md`

Where:

- `product` indicates which product the topic is for, for example `vmw` for UKCloud for VMware, `conn` for Connectivity or `ptl` for the UKCloud Portal

- `type` indicates the article type, for example `how` for How To Guides, `sd` for Service Definitions or `vid` for Videos

- `description` indicates what the article is about (the description can consist of multiple words, with each word separated by a hyphen)

- `tool` (optional) indicates if the topic is specific to a particular tool (for example, a CLI or API)

## Article metadata

Each article includes metadata at the top of the file, which ensures that the article is included properly in the Knowledge Centre and helps with searches. Metadata includes the article `title`, when it was `lastreviewed` and categorisation and location within the Knowledge Centre.

## Article title

The first thing in your article after the metadata should be the main article title. Use the following to help you decide on the title for your article:

- Titles (and all other headings) should use *Sentence capitalisation* (that is, the first word should start with an uppercase letter and all other words should be all lowercase unless they are proper nouns)

- Use a single `#` for the article title, and make sure there's a space after the `#`

- How To Guide titles should start with How to and then a verb to describe the task described in the article, for example *How to create a virtual machine*

- Reference Guides should start with a noun if possible

Generally, you should not include any text below the article title, but should go straight to the first (*Overview*) section. However, if the article is very short and does not require any subheadings, you can include the content directly below the article title. You can also include important notes immediately after the title (for example, product retirement notifications).

## Article structure

### Overview section

The first section after the article title should be *Overview* and should provide an introduction to the purpose of the article.

#### Intended audience section

For How To Guides, if appropriate, you can include an *Intended audience* subsection within the *Overview* section to indicate any particular access or permissions a user might need to complete the steps in the task described by the guide.

### Prerequisites section

For How To Guides, if appropriate, you can include a *Prerequisites* section after the *Overview* section to indicate any actions a user might need to complete before the steps detailed by the guide.

### Further sections

Use additional sections to break the article up into manageable chunks to make it easier to read.

Section headings should use *Sentence capitalisation* (that is, the first word should start with an uppercase letter and all other words should be all lowercase unless they are proper nouns).

In How To articles, you may just have a single additional section describing the task being described in the article -- you should use gerunds (words ending in -ing) for these section headings. For example *Logging into the OpenStack Horizon dashboard*. If the article includes multiple tasks, put each task into its own section, but avoid having too many tasks in a single article.

Reference Guides can include as many sections as necessary to keep the content easy to read. But don't use too many levels of subsections as it can be difficult for users to keep track of where they are if the subsections go too deep.

### Next steps section

For procedural articles, where possible include a *Next steps* section after describing the tasks within the article to point users to other articles that might be helpful. Lead into the list of articles by recapping what was covered in the current article.

For information about creating links, see [*Links*](#links).

### Related information sections

For reference articles, where possible, include a *Related articles* and/or *Related videos* section at the end to provide pointers for what to read next. You can also include a *Related videos* section at the end of procedural articles if there is a video that shows how to perform one or more of the tasks described in the article.

If there are resources outside of the Knowledge Centre that would be useful to users, for example, vendor articles or web pages, include these in a *More information* section at the end of the article.

For information about creating links, see [*Links*](#links).

### Feedback section

The last section in every article should be the *Feedback* section. This provides users with information about how to provide feedback to UKCloud on their experience either with the Knowledge Centre or with our platform. The feedback section should include the following text:

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.

**Markdown**

```markdown
If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
```

## Using markdown

Knowledge Centre articles are written using GitHub markdown. For more information, see [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

As we use DocFX to generate our Knowledge Centre site, you can also use DocFX markdown to add additional features to your articles. For example, DocFX markdown provides a way of highlighting notes, tips and warnings (for more information, see [*Notes, tips and warnings*](#notes-tips-and-warnings)).

### Headings

Use the `#` symbol to identify headings within the article. Use a single `#` for the article title and add additional `#` symbols to indicate the level of subheading for subsequent sections.

**Markdown:**

```markdown
# Article title

## First level heading

### Second level heading

#### Third level heading
```

### Formatting text

#### Bold

For **bold** text, for example to identify interactive UI elements in a procedural step, enclose the text in double-asterisks.

Markdown | Looks like
---------|-----------
`Click **Improve this Doc** to open the article in GitHub` | Click **Improve this Doc** to open the article in GitHub

#### Italics

For *italic* text, for example to identify non-interacive UI elements in a procedural step, enclose the text in single asterisks.

Markdown | Looks like
---------|-----------
`On the *Open a pull request* page, provide more details about the change you've made.` | On the *Open a pull request* page, provide more details about the change you've made.

#### Monospace

For `monospace` text, enclose the text in backticks.

Markdown | Looks like
---------|-----------
```Enter the IP address, for example, `192.168.1.10`.``` | Enter the IP address, for example, `192.168.1.10`.

### Lists

#### Bulleted lists

Bulleted lists are for lists of items where the order doesn't matter. For lists where the items are short, incomplete sentences, you don't need to include a full stop at the end of each item. For longer sentences or multiple sentences, use full stops. But be consistent within each list; if one item in a list needs a full stop, all items that list should end in a full stop. Include an empty line in between each item in the list.

- Bulleted lists

- Look like this

  - with sub lists

    - if required

**Markdown:**

``` none
- Bulleted lists

- Look like this

  - with sub lists

    - if required
```

#### Numbered lists

Numbered lists are for lists where the order is important. A How To Guide will usually include at least one numbered list. Generally speaking, items in a numbered list will be complete sentences, so they should end with a full stop. Include an empty line in between each item in the list.

1. Do this.

2. Then this.

3. And finally, this.

   - you can include

   - bulleted lists

**Markdown:**

``` none
1. Do this.

2. Then this.

3. And finally, this.

   - you can include

   - bulleted lists
```

### Links

#### Links to external content

To link to content outside of the Knowledge Centre, you can include the URL directly.

Markdown | Looks like
---------|-----------
`<https://ukcloud.com/>` | <https://ukcloud.com/>

Or you can provide some descriptive link text.

Markdown | Looks like
---------|-----------
`[UKCloud website](https://ukcloud.com/)` | [UKCloud website](https://ukcloud.com/)

#### Links to other Knowledge Centre articles

When linking to other Knowledge Centre articles, provide the article title as the link text and use *italics* to identify it as an internal link.

- Links to other articles within the same section of the Knowledge Centre just need to point to the `.md` filename:

  Markdown | Looks like
  ---------|-----------
  `[*How to contribute to the UKCloud Knowledge Centre*](other-how-contribute-knowledge.md)` | [*How to contribute to the UKCloud Knowledge Centre*](other-how-contribute-knowledge.md)

- Links to articles in different sections of the Knowledge Centre need to also include the appropriate folder name:

  Markdown | Looks like
  ---------|-----------
  `[*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)` | [*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)

You can also link to a section within an article using anchors. The anchor is the section heading, in all lowercase with spaces replaced by hyphens. To link to a section in the current article, just provide the anchor.

Markdown | Looks like
---------|-----------
`[*Article file naming conventions*](#article-file-naming-conventions)` | [*Article file naming conventions*](#article-file-naming-conventions)

To link to a section in a different article, provide the anchor after the `.md` filename.

Markdown | Looks like
---------|-----------
`[*Logging in to the UKCloud Portal*](../portal/ptl-gs.md#logging-in-to-the-ukcloud-portal)` | [*Logging in to the UKCloud Portal*](../portal/ptl-gs.md#logging-in-to-the-ukcloud-portal)

### Notes, tips and warnings

#### Notes

A note provides important information.

> [!NOTE]
> This is a note, which provides important information.

**Markdown:**

```none
> [!NOTE]
> This is a note, which provides important information.
```

#### Tips

A tip provides helpful, but not necessarily essential, information.

> [!TIP]
> This is a tip, which provides helpful information for working with a product.

**Markdown:**

```none
> [!TIP]
> This is a tip, which provides helpful information for working with a product.
```

#### Important notes

Important notes provide important information that requires particular attention.

> [!IMPORTANT]
> This is an important note, which requires particular attention.

**Markdown:**

```none
> [!IMPORTANT]
> This is an important note, which requires particular attention.
```

#### Warnings

Warnings provide important information about something which could have significant implications if ignored.

> [!WARNING]
> This is a warning, which provides users with information about something which could cause significant issues if ignored.

**Markdown:**

```none
> [!WARNING]
> This is a warning, which provides users with information about something which could cause significant issues if ignored.
```

### Images

To insert an image into an article use the following markdown:

Markdown | Looks like
---------|-----------
`![UKCloud logo](images/home-ukc-logo.png)` | ![UKCloud logo](images/home-ukc-logo.png)

The text inside the square brackets (`UKCloud logo` in the example above) is called *alt text*  and is a short bit of text that is shown if the image cannot be displayed. This text is also read out by screen readers, which helps users with impaired vision to determine what the image is depicting.

Images used in articles are stored in a separate `images` folder below the main product folder and should use the following file naming convention:

`<product>-<tool>-<ui>-<description>.png`

where:

- `product` indicates which product the image is for, for example `vmw` for UKCloud for VMware, `conn` for Connectivity or `ptl` for the UKCloud Portal

- `tool` (optional) indicates the tool the image is depicting, which may be different for each product

- `ui` (optional) indicates the UI element the image is depicting, for example, `mnu` for a menu, `btn` for a button or `tab` for a tab

- `description` indicates the purpose of the image (the description can consist of multiple words, with each word separated by a hyphen)

## Typographic conventions

Within Knowledge Centre articles we use the following typographic conventions.

Element | Convention | Example
--------|------------|--------
All interactive UI elements (including tabs) | Use **bold** | Select the **Enable** check box.<br>From the **File** menu, select **Open**.<br>On the **VMs** tab, ...
All non-interactive UI elements (for example, windows, pages, dialog boxes, sections on a page) | Use *italics* | On the *User account* page, ...<br>In the *Create new user* dialog box, ...<br>In the *Contact details* section of the *Create new user* dialog box, ...
Commands, code, parameters, user-entered text | Use `monospace` | Use the `slmgr` command to ...<br>`application/*+xml;version=34.0`<br>In the **Name** field, enter `Accept`.

## Related articles

- [*How to contribute to the UKCloud Knowledge Centre*](other-how-contribute-knowledge.md)

## Feedback

If you find a problem with this article, click **Improve this Doc** to make the change yourself or raise an [issue](https://github.com/UKCloud/documentation/issues) in GitHub. If you have an idea for how we could improve any of our services, send an email to <feedback@ukcloud.com>.
