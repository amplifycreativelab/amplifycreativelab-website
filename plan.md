# Migration Plan: WordPress → Astro Static Site
Target site: 5–6 page portfolio site for a local photographer (home, portfolio, services, about, contact, thank-you).  
Goal: Rebuild the site with **Astro** as a static site, **preserving SEO and URLs** while making the code cleaner and easier to maintain.

---

## Phase 0 – Prerequisites

1. **Tools you need installed**
   - Node.js (LTS, e.g. 18+).
   - npm (comes with Node).
   - A code editor (VS Code is ideal).
   - Git (optional but recommended).

2. **Where your new project will live**
   - Create or choose a folder on your machine, e.g.:  
     `C:\Users\You\CODING\photographer-astro`

You’ll put the Astro project in there and later deploy the built `/dist` folder to your host.

---

## Phase 1 – Audit the existing WordPress site

The goal of this phase is to **extract all the SEO-critical information and structure** from your current WP site so you can recreate it in Astro without losing anything.

### 1.1. List all important URLs

1. Open your current site in the browser.
2. Collect all key URLs, for example:
   - `/` (home)
   - `/portfolio` or `/gallery`
   - `/services` or `/pricing`
   - `/about`
   - `/contact`
   - `/thank-you` (if it exists)
3. Ways to find them:
   - **WordPress Admin → Pages**: note the slug of each important page.
   - If you use an SEO plugin (Yoast, RankMath, SEOPress), open its **sitemap** (often `https://yourdomain.com/sitemap_index.xml` or `/sitemap.xml`).
   - Copy these into a small table in a notes file, e.g.:

   | Page           | Current URL path        | Notes (ranking, backlinks)      |
   |----------------|-------------------------|----------------------------------|
   | Home           | /                       | main landing page               |
   | Portfolio      | /portfolio              | important for “photography”     |
   | Services       | /services               | pricing details                 |
   | About          | /about                  | bio + trust                     |
   | Contact        | /contact                | quote/enquiry form              |
   | Thank You      | /thank-you              | after form submission           |

You’ll later map each of these to an Astro page with **the same path**.

### 1.2. Save titles and meta descriptions

For each important page:

1. Open the page in the browser.
2. In the tab, right-click → “View Page Source” or use DevTools.
3. Find:
   - `<title> ... </title>` → page title.
   - `<meta name="description" content="...">` → description (if present).
4. If you use a plugin like Yoast/RankMath:
   - Edit the page in WP.
   - Scroll to the SEO box and copy the **SEO title** and **meta description** fields.

Save them in your notes:

| Page      | Title (current)                              | Meta description (current)                      |
|-----------|----------------------------------------------|-------------------------------------------------|
| Home      | Local Wedding Photographer in Perth | Brand | …                                             |
| Portfolio | Portfolio | Brand Name                        | …                                             |
| ...       |                                              |                                                 |

You’ll paste these into the `<head>` section of each Astro page.

### 1.3. Save content structure (H1, H2, text)

For each page:

1. Look at the live page and note:
   - The **H1** (main headline).
   - Any **H2/H3** section headings.
   - Important paragraphs and lists.
2. You can copy them from:
   - WordPress editor (Block editor or Elementor).
   - The rendered HTML (`View source` or `Inspect`).

You don’t need to perfect the HTML now; just make sure you know **what content must exist** on each page.

### 1.4. Image inventory

Because it’s a photographer’s site, images matter a lot.

1. In WordPress Admin → **Media → Library**, export a list (or just scroll through):
   - Which images are used on home, portfolio, services, etc.
2. For each important image:
   - Download the original file (you’ll optimize it later).
   - Note if it has important **alt text**; you’ll reuse it.

You’ll later place these in Astro’s `/public` folder.

---

## Phase 2 – Create the Astro project

### 2.1. Run the Astro setup wizard

In your terminal, inside the folder where you want your project:

```bash
npm create astro@latest
```

Follow the prompts (you can adjust as you like, but here’s a simple baseline):

- **Where should we create your new project?**  
  `./photographer-astro` (or any name)
- **How would you like to start?**  
  Choose something like “Minimal” or “Empty” starter.
- **Use TypeScript?**  
  Up to you; “Yes, but use JSDoc” or “No” is fine.
- **Install dependencies?**  
  Yes.
- **Initialize git?**  
  Optional.

Then:

```bash
cd photographer-astro
npm run dev
```

Open the dev URL (usually `http://localhost:4321`) – you should see the starter page.

### 2.2. Understand the basic Astro structure

Typical structure after creation:

```text
photographer-astro/
  astro.config.mjs        # Astro config
  package.json            # dependencies, scripts
  public/                 # static files (images, CSS, JS)
  src/
    pages/                # page routes live here
      index.astro
    layouts/              # (you will create this)
    components/           # (you will create this)
```

Key ideas:

- Files in `src/pages` → **routes**:
  - `index.astro` → `/`
  - `about.astro` → `/about`
  - `portfolio.astro` → `/portfolio`, etc.
- Everything in `public` is served as-is:
  - `/public/img/photo1.webp` → `/img/photo1.webp` in the browser.

---

## Phase 3 – Define your layout and pages

You want **one central layout** with shared header/footer + SEO tags, and then 1 file per page that uses it.

### 3.1. Create a BaseLayout

Create `src/layouts/BaseLayout.astro`:

```astro
---
const {
  title = 'Photographer Name',
  description = '',
} = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    {description && (
      <meta name="description" content={description} />
    )}
    <link rel="stylesheet" href="/css/main.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <a href="/" class="logo">Photographer</a>
        <nav class="nav">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>© {new Date().getFullYear()} Photographer Name. All rights reserved.</p>
      </div>
      <script src="/js/main.js" defer></script>
    </footer>
  </body>
</html>
```

Later you’ll replace the logo text, classes, and markup with your own HTML/CSS. For now it’s a skeleton.

### 3.2. Create the required pages

Inside `src/pages`, create these files (or rename existing ones):

- `index.astro`           → `/`
- `about.astro`           → `/about`
- `portfolio.astro`       → `/portfolio`
- `services.astro`        → `/services`
- `contact.astro`         → `/contact`
- `thank-you.astro`       → `/thank-you` (optional but recommended)

Example: `src/pages/index.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Home | Photographer Name"
  description="Local wedding and portrait photographer in Perth, capturing timeless images for couples and families."
>
  <section class="hero">
    <div class="container">
      <h1>Perth-based wedding & portrait photographer</h1>
      <p>Short value proposition paragraph...</p>
      <a href="/contact" class="btn btn-primary">Request a quote</a>
    </div>
  </section>

  <!-- Add more sections: featured work, services highlights, testimonials, etc. -->
</BaseLayout>
```

For each other page, repeat the same pattern:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout
  title="Services | Photographer Name"
  description="Photography packages and services in Perth: weddings, portraits, events."
>
  <section class="page-header">
    <div class="container">
      <h1>Photography services</h1>
      <!-- Your HTML here -->
    </div>
  </section>
</BaseLayout>
```

You will later paste in the actual HTML from your current site (re-cleaned) into these sections.

### 3.3. Set up your CSS and JS

In `public` create:

```text
public/
  css/
    main.css
  js/
    main.js
  img/
    ... (your photos)
```

- Copy/translate your existing CSS into `main.css`, simplifying as you go.
- Copy any JavaScript you need (menu toggle, sliders, etc.) into `main.js`.

Update `BaseLayout.astro` to make sure the paths are correct:

```html
<link rel="stylesheet" href="/css/main.css" />
<script src="/js/main.js" defer></script>
```

---

## Phase 4 – Move content & visuals from WordPress to Astro

Now that structure is ready, you’ll **move content page by page**, preserving SEO and layout.

### 4.1. Home page

1. Open your current WP home page.
2. Copy the content section by section:
   - Hero heading and subheading (H1, H2, paragraphs).
   - Call-to-action buttons.
   - Featured images / galleries.
   - Testimonials, etc.
3. Paste into `index.astro` inside your `<BaseLayout>` as semantic HTML.
4. Make sure the **H1** on the page matches the main intent (e.g. “Perth wedding & portrait photographer”).

### 4.2. Other pages (About, Services, Portfolio, Contact)

For each page:

1. Match the URL path with your audit table (so `/about` remains `/about`, etc.).
2. Set `<BaseLayout title="...">` and `description="..."` using the values from your audit (you can improve them, but keep the same main keyword focus).
3. Paste the cleaned HTML content into the `<BaseLayout>`.
4. Rebuild headings structure properly (only one H1 per page, then H2/H3 for sections).

### 4.3. Images

1. Download images from WP (or from existing `wget` archive).
2. Optimize them (optional but recommended):
   - Resize to reasonable widths (e.g. 1600px max for hero, 1200px for gallery).
   - Export as WebP/JPEG with good compression.
3. Put them in `public/img/...`.
4. In your `.astro` files, update `<img>` tags to point to `/img/...` and always add `alt` text:

```html
<img
  src="/img/wedding-001.webp"
  alt="Bride and groom at sunset in Perth"
  loading="lazy"
>
```

---

## Phase 5 – Preserve and improve SEO

### 5.1. Keep the same URL structure (critical)

- For each page from your audit:
  - If the old URL is `/services`, your Astro page must be `src/pages/services.astro` so it builds to `/services`.
- If your old site had `.html` endings or other quirks, decide whether you can match them:
  - If you can’t, then you **must add 301 redirects** from old paths to new ones (see 5.3).

### 5.2. Recreate meta titles and descriptions

In each page’s `<BaseLayout>` call:

- Set `title="..."` to match (or improve) your old SEO title.
- Set `description="..."` to match (or improve) your old meta description.

Keep the main keywords similar so Google recognizes the content is the same topic.

### 5.3. Handle redirects (if any URLs change)

If any URLs change (for example `/wedding-photography` becomes `/services/weddings`):

1. Make a mapping list:

   | Old URL path             | New URL path             |
   |--------------------------|--------------------------|
   | /wedding-photography     | /services/wedding        |
   | /pricing                 | /services                |

2. Implement **301 redirects** on your host:
   - On Netlify, you’d use a `_redirects` file in the project root, e.g.:  
     `"/wedding-photography  /services/wedding  301"`
   - On other hosts (Cloudflare Pages, cPanel, etc.), use their redirect or “URL rewrite” interface.

301 redirects tell search engines “this has permanently moved here”, so ranking signals transfer.

### 5.4. Robots.txt and sitemap.xml

- Create a simple `robots.txt` in `public/`:

```text
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

- For sitemap:
  - Either create a static `sitemap.xml` in `public/`, or
  - Use an Astro integration/plugin later.
  - For a small 5–6 page site, a static file is fine.

Simple static sitemap example (you can expand it):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
  </url>
  <url>
    <loc>https://yourdomain.com/portfolio</loc>
  </url>
  <url>
    <loc>https://yourdomain.com/services</loc>
  </url>
  <url>
    <loc>https://yourdomain.com/about</loc>
  </url>
  <url>
    <loc>https://yourdomain.com/contact</loc>
  </url>
  <url>
    <loc>https://yourdomain.com/thank-you</loc>
  </url>
</urlset>
```

### 5.5. Local SEO details

On your new Astro pages, make sure you still clearly show:

- City and region (e.g. “Perth wedding photographer”).
- Contact details (phone, email).
- Links to your Google Business Profile from contact or footer.

These should all exist already on your WP site – you’re just making sure they’re preserved or improved.

---

## Phase 6 – Contact / quote form

You said you’ll handle HTML/CSS/JS. High-level approach:

1. In `contact.astro`, create a `<form>` that POSTs to your chosen service (e.g. Web3Forms).
2. Include fields:
   - Name
   - Email
   - Phone
   - Type of shoot
   - Date / location (optional)
   - Message
3. After successful submission, redirect users to `/thank-you` so they get a confirmation page.

Example structure (you’ll fill in the actual `action` and hidden fields as per your form provider):

```html
<form
  method="POST"
  action="https://your-form-endpoint"
  class="quote-form"
>
  <!-- inputs here -->
</form>
```

The important SEO piece: **make sure `/thank-you` exists as a page** in Astro with a simple message and a link back to home or portfolio. Mark it `noindex` if you don’t want it in search (by adding `<meta name="robots" content="noindex">` for that page only).

---

## Phase 7 – Performance pass

Before deploying:

1. Run `npm run build` to make sure it builds without errors.
2. Start the preview server (`npm run preview`) and open the site.
3. In Chrome DevTools → Lighthouse:
   - Run audits on home, portfolio, services, contact.
4. Fix issues:
   - Large images → compress or resize.
   - CLS (layout shift) → set width/height on images.
   - Slow JS → remove unnecessary scripts.

Because Astro ships zero JS by default, most performance issues will come from **images** and **third-party scripts** (fonts, analytics, form provider).

---

## Phase 8 – Deploy and monitor SEO

### 8.1. Deploy the Astro site

Typical deployment flow:

1. Push the Astro project to GitHub (optional but recommended).
2. Connect repo to a static host (Netlify, Vercel, Cloudflare Pages, etc.) OR upload the built `/dist` manually if your host wants files.
3. Ensure DNS is pointing to the new host for your domain.

### 8.2. Post-deploy checks

1. Visit your site over HTTPS and click through all pages.
2. Check:
   - Header/footer links work.
   - Contact form works and redirects to `/thank-you`.
   - No broken images.

3. In **Google Search Console**:
   - Make sure your domain property is set up.
   - Submit your new `sitemap.xml`.
   - Watch for:
     - Coverage errors (404s, etc.)
     - Performance over the next weeks.

If you kept URLs the same and used redirects where necessary, you **should not lose domain authority** just because you switched to Astro. Over time, improved speed and structure can help rankings.

---

## Summary

You now have a clear path:

1. **Audit WP**: URLs, titles, descriptions, headings, content, images.
2. **Create Astro project**: `npm create astro@latest` and understand `src/pages`, `public`.
3. **Define layout**: `BaseLayout.astro` with shared header/footer and SEO props.
4. **Create pages**: `index.astro`, `about.astro`, `portfolio.astro`, `services.astro`, `contact.astro`, `thank-you.astro`.
5. **Move content**: copy and clean HTML/CSS from WordPress into Astro components.
6. **Preserve SEO**: same URLs, meta titles/descriptions, sitemap, robots, and redirects if needed.
7. **Optimize performance**: especially images.
8. **Deploy & monitor**: use Search Console to ensure a smooth transition.

You handle the detailed visuals/HTML/CSS/JS inside this structure; Astro gives you the maintainable skeleton and routing so you can avoid duplication and keep SEO strong.
