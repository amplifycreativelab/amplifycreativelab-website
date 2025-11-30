# Blog System Guide

This folder contains the template and example files used to create
consistent, styled blog posts that match the Amplify Creative Lab
website.

The blog system is built around:

-   A **shared blog layout**: `BlogPostLayout.astro`
-   **Individual post pages**: one `.astro` file per article
-   A **blog index page**: `/src/pages/blog/index.astro`

------------------------------------------------------------------------

## Files Overview

### Layout

-   `src/layouts/BlogPostLayout.astro`\
    Shared layout used by all blog posts.\
    It handles:
    -   Page `<title>` and meta description (via `BaseLayout`)
    -   Canonical URL (passed in from each post)
    -   Blog **header** (title, category, date, read time, tags)
    -   Optional **featured image**
    -   Main **article body** via `<slot />`
    -   Social sharing buttons
    -   Bottom **call-to-action**
    -   All blog-specific **styling** (colors, typography, layout)

### Example Post

-   `src/pages/blog/food-photography-tips-restaurants.astro`\
    Complete example of a real post using `BlogPostLayout.astro`.

### Blog Index

-   `src/pages/blog/index.astro`\
    Lists all blog posts as cards and links to each article.

------------------------------------------------------------------------

## How the Blog System Works

1.  **Each blog post** is its own `.astro` file in `src/pages/blog`.
2.  The post file:
    -   Imports `BlogPostLayout.astro`
    -   Creates a `post` object (of type `BlogPost`)
    -   Calculates a `canonicalUrl` for SEO
    -   Renders `<BlogPostLayout {...post}>` and places the article body
        inside as children.
3.  **`BlogPostLayout.astro`**:
    -   Receives all metadata (title, description, dates, tags, etc.)
    -   Renders the full layout and styling
    -   Injects structured data (JSON-LD) for SEO
4.  **`/blog/index.astro`**:
    -   Contains a `posts` array with summaries (slug, title,
        description, etc.)
    -   Displays each one as a card linking to `/blog/[slug]/`.

------------------------------------------------------------------------

## BlogPostLayout Props (Metadata)

`BlogPostLayout.astro` expects a `BlogPost` object with these
properties:

### Required

  -------------------------------------------------------------------------
  Property         Type     Description
  ---------------- -------- -----------------------------------------------
  `title`          string   Article title (shown as H1 and in `<title>`
                            tag)

  `description`    string   Short SEO summary for meta description

  `publishDate`    string   Date in `YYYY-MM-DD` format

  `canonicalUrl`   string   Full canonical URL for this article
  -------------------------------------------------------------------------

### Optional

  -------------------------------------------------------------------------------------------
  Property          Type         Default                    Description
  ----------------- ------------ -------------------------- ---------------------------------
  `author`          string       `"Amplify Creative Lab"`   Article author

  `category`        string       `"Photography"`            Small label above the title

  `readTime`        string       `"5 min read"`             Estimated reading time

  `featuredImage`   string       `undefined`                URL for hero image
                                                            (e.g. `/images/blog/...jpg`)

  `tags`            string\[\]   `[]`                       List of tags shown under the
                                                            header
  -------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 1. Creating a New Blog Post

### Step 1: Create the file

Create a new `.astro` file inside:

    src/pages/blog/

Name it using a clean, SEO‑friendly slug, for example:

    restaurant-branding-photo-shoots.astro

This becomes the URL:

    /blog/restaurant-branding-photo-shoots/

------------------------------------------------------------------------

### Step 2: Add metadata + layout

Add this at the top of the new file:

``` astro
---
import BlogPostLayout, {
  type BlogPost,
} from "../../layouts/BlogPostLayout.astro";

const canonicalUrl = new URL(
  "/blog/restaurant-branding-photo-shoots/",
  "https://amplifycreativelab.com"
).toString();

const post: BlogPost = {
  title: "How to Plan a Restaurant Branding Photo Shoot",
  description:
    "A practical guide for Perth venues planning a branding photo shoot, from shot lists to styling.",
  publishDate: "2025-01-10",
  author: "Amplify Creative Lab",
  category: "Branding",
  readTime: "6 min read",
  featuredImage: "/images/blog/restaurant-branding-photo-shoots.jpg",
  tags: ["Branding", "Restaurant Photography", "Perth"],
  canonicalUrl,
};
---
```

------------------------------------------------------------------------

### Step 3: Write the article body

``` astro
<BlogPostLayout {...post}>
  <p>Your content here…</p>

  <h2>Section Title</h2>
  <p>More paragraphs…</p>
</BlogPostLayout>
```

You may use:

-   `<h2>`, `<h3>` for headings\
-   `<p>` for paragraphs\
-   `<ul>`, `<ol>`, `<li>` for lists\
-   `<strong>` and `<em>` for emphasis

All styling is handled by the shared layout.

------------------------------------------------------------------------

## 2. Adding Posts to the Blog Index

Open:

    src/pages/blog/index.astro

Inside, add a new object to the `posts` array:

``` ts
{
  slug: "restaurant-branding-photo-shoots",
  title: "How to Plan a Restaurant Branding Photo Shoot",
  description:
    "Step-by-step advice for planning a branding photo shoot for your venue.",
  publishDate: "2025-01-10",
  readTime: "6 min read",
  category: "Branding",
  featuredImage: "/images/blog/restaurant-branding-photo-shoots.jpg",
},
```

Make sure:

-   The slug matches your file name\
-   The image exists in `/public/images/blog/`

The index page automatically updates.

------------------------------------------------------------------------

## 3. Image Storage

Place all blog images inside:

    /public/images/blog/

Recommended hero image size:

-   **1200×630px**\
-   JPG, compressed under \~500KB

------------------------------------------------------------------------

## 4. Customising Blog Layout

To change styling or CTA:

Edit:

    src/layouts/BlogPostLayout.astro

Any change here updates **all blog posts automatically**.

------------------------------------------------------------------------

## 5. URL Structure

-   Blog index: `/blog/`\
-   Blog posts: `/blog/[slug]/`

Examples:

-   `food-photography-tips-restaurants.astro` →
    `/blog/food-photography-tips-restaurants/`
-   `restaurant-branding-photo-shoots.astro` →
    `/blog/restaurant-branding-photo-shoots/`

------------------------------------------------------------------------

## 6. Quick Checklist for New Posts

1.  Create `.astro` file in `/blog/`
2.  Import layout + define `post` object
3.  Generate `canonicalUrl`
4.  Add article content inside layout
5.  Add post summary to `index.astro`
6.  Add images to `/public/images/blog/`
7.  Test locally

Done! New posts will automatically match the site's design.
