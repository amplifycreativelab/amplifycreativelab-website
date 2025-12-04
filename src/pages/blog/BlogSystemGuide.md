# Blog System Guide

This folder contains the files used to create
consistent, styled blog posts that match the Amplify Creative Lab
website.

The blog system is built around:

- A **shared blog layout**: `src/pages/layouts/BlogPostLayout.astro`
- An Astro **content collection** of `.mdx` posts: `src/content/blog/*.mdx`
- A **dynamic post route**: `src/pages/blog/[slug].astro`
- A **blog index page**: `src/pages/blog/index.astro`

------------------------------------------------------------------------

## Current Published Posts

These articles are already implemented and live:

- [x] Article 1 – “Why Your PDF Menu is Killing Your Google Ranking (And What to Use Instead)”  
  `src/content/blog/pdf-vs-digital-menu-perth-seo.mdx`
- [x] Article 2 – “Eat With Your Eyes: The ROI of Professional Food Photography for Perth Venues”  
  `src/content/blog/roi-professional-food-photography-perth.mdx`
- [x] Article 3 – “5 Steps to Launching a New Food Product or Venue in WA”  
  `src/content/blog/launching-food-product-venue-wa-marketing.mdx`
- [x] Article 4 – “Speed Kills (Competition): Why Fast Websites Get More Bookings”  
  `src/content/blog/website-speed-optimization-perth.mdx`
- [x] Supporting article – “5 Food Photography Tips That Will Make Your Menu Irresistible”  
  `src/content/blog/food-photography-tips-restaurants.mdx`

------------------------------------------------------------------------

## Files Overview

### Layout (`BlogPostLayout.astro`)

- `src/pages/layouts/BlogPostLayout.astro`  
  Shared layout used by all blog posts. It handles:
  - Page `<title>` and meta description (via `BaseLayout.astro`)
  - Canonical URL (passed in from `[slug].astro`)
  - Blog **header** (title, category, date, read time, tags)
  - Optional **featured image**
  - Main **article body** via `<slot />`
  - Social sharing buttons
  - Bottom **call-to-action**
  - All blog-specific **styling** (colors, typography, layout)

### Content collection (`src/content/blog`)

- `src/content/blog/*.mdx`  
  One MDX file per article, validated by the `blog` content collection schema.  
  Each file contains frontmatter (metadata) plus the article body.

### Dynamic post route (`[slug].astro`)

- `src/pages/blog/[slug].astro`  
  Loads posts from the `blog` content collection and renders them with
  `BlogPostLayout.astro`:
  - Uses `getCollection("blog")` to get all entries.
  - Builds static paths from each entry’s `slug`.
  - Calls `post.render()` to get the MDX Content component.
  - Derives `canonicalUrl` from frontmatter or from `/blog/[slug]/`.

### Blog index (`index.astro`)

- `src/pages/blog/index.astro`  
  Lists all blog posts as cards and links to each article. It:
  - Uses `getCollection("blog")` to fetch all entries.
  - Sorts them by `publishDate` (newest first).
  - Displays title, description, date, optional read time, category,
    and featured image.

------------------------------------------------------------------------

## How the Blog System Works

1. **Content lives in MDX files** under `src/content/blog/*.mdx` as part of
   the `blog` content collection.
2. **`src/pages/blog/[slug].astro`**:
   - Uses the collection to find the post whose `slug` matches the URL.
   - Extracts frontmatter (`data`) and the compiled `Content` component.
   - Computes a `canonicalUrl` if one is not provided in frontmatter.
   - Passes all metadata and `Content` into `BlogPostLayout.astro`.
3. **`BlogPostLayout.astro`**:
   - Receives all metadata (title, description, dates, tags, etc.).
   - Renders the shared blog layout and styling.
   - Injects structured data (JSON-LD `BlogPosting`) for SEO.
4. **`/blog/index.astro`**:
   - Reads all entries from the `blog` collection.
   - Builds the card grid for the `/blog/` index page automatically.

------------------------------------------------------------------------

## MDX Frontmatter Fields (Blog Collection)

Each MDX file in `src/content/blog` must include frontmatter fields that
match the `blog` collection schema.

### Required

  -------------------------------------------------------------------------
  Property        Type     Description
  --------------- -------- ------------------------------------------------
  `title`         string   Article title (shown as H1 and in `<title>`
                           tag)

  `description`   string   Short SEO summary for meta description

  `publishDate`   string   Date in `YYYY-MM-DD` format
  -------------------------------------------------------------------------

### Optional

  ---------------------------------------------------------------------------------------------------
  Property                Type         Default                    Description
  ----------------------- ------------ -------------------------- -----------------------------------
  `author`                string       `"Amplify Creative Lab"`   Article author

  `category`              string       `undefined`                Small label above the title

  `readTime`              string       `undefined`                Estimated reading time

  `featuredImage`         string       `undefined`                URL for hero image
                                                                  (e.g. `/images/blog/...jpg`)

  `featuredImagePosition` string       `"center center"`          CSS `object-position` for hero
                                                                  image in the layout

  `tags`                  string[]     `[]`                       List of tags shown under the header

  `canonicalUrl`          string       generated in `[slug].astro` Full canonical URL for this
                                                                  article; if omitted, built from
                                                                  `/blog/[slug]/`
  ---------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 1. Creating a New Blog Post

### Step 1: Create the MDX file

Create a new `.mdx` file inside:

    src/content/blog/

Name it using a clean, SEO‑friendly slug, for example:

    restaurant-branding-photo-shoots.mdx

This becomes the URL:

    /blog/restaurant-branding-photo-shoots/

------------------------------------------------------------------------

### Step 2: Add frontmatter (metadata)

Add frontmatter at the top of the new file:

```mdx
---
title: "How to Plan a Restaurant Branding Photo Shoot"
description: "A practical guide for Perth venues planning a branding photo shoot, from shot lists to styling."
publishDate: "2025-01-10"
author: "Amplify Creative Lab"
category: "Branding"
readTime: "6 min read"
featuredImage: "/images/blog/restaurant-branding-photo-shoots.jpg"
tags:
  - "Branding"
  - "Restaurant Photography"
  - "Perth"
canonicalUrl: "https://amplifycreativelab.com/blog/restaurant-branding-photo-shoots/"
---
```

------------------------------------------------------------------------

### Step 3: Write the article body

Below the frontmatter, write the article content in MDX/HTML:

```mdx
<p>Your content here…</p>

<h2>Section Title</h2>
<p>More paragraphs…</p>
```

You may use:

- `<h2>`, `<h3>` for headings  
- `<p>` for paragraphs  
- `<ul>`, `<ol>`, `<li>` for lists  
- `<strong>` and `<em>` for emphasis  

All styling is handled by the shared layout.

------------------------------------------------------------------------

## 2. Adding Posts to the Blog Index

No manual index updates are needed.

As soon as you add a valid `.mdx` file to `src/content/blog` with the
required frontmatter, it will automatically appear on `/blog/` because
`src/pages/blog/index.astro` reads from the `blog` collection and builds
the cards dynamically.

------------------------------------------------------------------------

## 3. Image Storage

Place all blog images inside:

    /public/images/blog/

Recommended hero image size:

- **1200×630px**  
- JPG or WebP, ideally under ~500KB

------------------------------------------------------------------------

## 4. Customising Blog Layout

To change styling or the bottom CTA for all posts, edit:

    src/pages/layouts/BlogPostLayout.astro

Any change here updates **all blog posts automatically**.

For global SEO/meta defaults, see:

    src/pages/layouts/BaseLayout.astro

------------------------------------------------------------------------

## 5. URL Structure

- Blog index: `/blog/`  
- Blog posts: `/blog/[slug]/`

Examples (slug → URL):

- `food-photography-tips-restaurants` → `/blog/food-photography-tips-restaurants/`
- `restaurant-branding-photo-shoots` → `/blog/restaurant-branding-photo-shoots/`

------------------------------------------------------------------------

## 6. Quick Checklist for New Posts

1. Create `.mdx` file in `src/content/blog/` with a good slug.  
2. Add frontmatter fields (`title`, `description`, `publishDate`, etc.).  
3. Write the article body using semantic headings, lists and CTAs.  
4. Add images to `/public/images/blog/`.  
5. Run the site locally and confirm the post appears correctly on the
   article page and `/blog/` index.

Done! New posts will automatically match the site's design, layout and
SEO defaults.

