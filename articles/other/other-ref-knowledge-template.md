---
title: UKCloud Knowledge Centre article template | UKCloud Ltd
description: Provides a template to help when you're creating new UKCloud Knowledge Centre articles
services: other
author: Sue Highmoor
reviewer: Sue Highmoor
lastreviewed: 22/07/2019
toc_rootlink: Reference
toc_sub1: 
toc_sub2:
toc_sub3:
toc_sub4:
toc_title: Knowledge Centre article template
toc_fullpath: Reference/other-ref-knowledge-template.md
toc_mdlink: other-ref-knowledge-template.md
---

# UKCloud Knowledge Centre article template

The first thing in your article after the metadata should be the main article title. Use the following to help you decide on the title for your article

- Titles (and all other headings) should be in sentence caps (that is, the first word should start with an uppercase letter and all other words should be all lowercase unless they are proper nouns)

- Use a single # for the article title (and don't forget the space after the #)

- How To Guide titles should start with How to and then a verb to describe the task described in the article, for example *How to create a virtual machine*.

- Reference Guides should start with a noun if possible

Generally, you should not include any text below the article title, but should go straight to the first (*Overview*) heading. However, if the article is very short and does not require any subheadings, you can include the content directly below the article title.

## Overview

The first section after the article title should be *Overview* and should provide an introduction to the purpose of the article.

### Intended audience

For How To Guides, if appropriate, you can include an *Intended audience* subsection below the *Overview* section to indicate any particular access or permissions a user might need to complete the steps in the task described by the guide.

## Further sections

Use additional sections to break the article up into manageable chunks to make it easier to read.

Section headings should be in sentence caps (that is, the first word should start with an uppercase letter and all other words should be all lowercase unless they are proper nouns).

In How To articles, you may just have a single additional section describing the task being described in the article -- you should use gerunds for the section headings (words ending in -ing). For example *Logging into the OpenStack Horizon dashboard*. If the article includes multiple tasks, put each task into its own section.

Reference Guides can include as many sections as necessary to keep the content easy to read. But don't use too many levels of subsections as it can be difficult for users to keep track of where they are if the subsections go too deep.

### Bulleted lists

Include an empty line in between each item in the list.

``` none
- Bulleted lists

- Look

- Like this

  - with sub lists

  - if required
```

### Numbered lists for How To Guides

Include an empty line in between each item in the list.

``` none
1. Numbered lists

2. In a How To Guide

3. Look

4. Like this

    - you can include

    - bulleted lists
```

## More useful markdown

### Images

Markdown for images looks like:

``` none
![alt-text](images/image-filename.png)
```

The `alt-text` is read out by screen readers and provides a brief description of the image to help visually impaired users determine what the image is illustrating. Image files should be located in an `images` directory underneath the main product directory.

## Links to web pages

To link to a web page, use the following markdown:

``` none
<https://ukcloud.com/>
```

<https://ukcloud.com/>

To use descriptive text for the link, rather than just the URL, use the following markdown:

``` none
[UKCloud](https://ukcloud.com/)
```

[UKCloud](https://ukcloud.com/)

## Links to other Knowledge Centre articles

Links to other articles for the same product look like:

``` none
[*topic-title*](topic-filename.md)
```

For example:

``` none
[*UKCloud Knowledge Centre guidelines*](other-ref-knowledge-guidelines.md)
```

[*UKCloud Knowledge Centre guidelines*](other-ref-knowledge-guidelines.md)

Links to other articles for a different product look like:

``` none
[*topic-title*](../product/topic-filename.md)
```

For example:

``` none
[*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)
```

[*Getting Started Guide for the UKCloud Portal*](../portal/ptl-gs.md)

### Tips, notes and warnings

#### Tips

A tip provides helpful, but not necessarily important, information.

Markdown:

``` none
> [!TIP]
> This is a tip, which provides helpful, but not necessarily important, information.
```

Looks like:

> [!TIP]
> This is a tip, which provides helpful, but not necessarily important, information.

#### Notes

A note provides important information.

Markdown:

``` none
> [!NOTE]
> This is a note, which provides important information.
```

Looks like:

> [!NOTE]
> This is a note, which provides important information.

#### Important notes

Important notes provide important information that requires particular attention.

Markdown:

``` none
> [!IMPORTANT]
> This is an important note, which requires particular attention.
```

Looks like:

> [!IMPORTANT]
> This is an important note, which requires particular attention.

#### Warnings

Warnings provide important information about something which could have significant implications if ignored.

Markdown:

``` none
> [!WARNING]
> This is a warning, which provides users with information about something which could have significant implications if ignored.
```

Looks like:

> [!WARNING]
> This is a warning, which provides users with information about something which could have significant implications if ignored.

## Feedback

Each article should end with a feedback section that includes the following text:

If you find an issue with this article, click **Improve this Doc** to suggest a change. If you have an idea for how we could improve any of our services, visit the [Ideas](https://community.ukcloud.com/ideas) section of the [UKCloud Community](https://community.ukcloud.com).
