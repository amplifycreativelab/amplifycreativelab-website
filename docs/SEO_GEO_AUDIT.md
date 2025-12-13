# SEO + GEO Audit Report (Astro site)

Generated: 2025-12-13  
Scope: Static output (`dist/`) + source (`src/`, `public/`, `astro.config.mjs`)

## Remediation Update (Implemented)

- Moved `src/pages/components/**` → `src/components/**`
- Moved `src/pages/layouts/**` → `src/layouts/**`
- Added a single `<h1>` to `/perth-food-photography/`, `/perth-event-photography/`, and `/portfolio/`
- Set `/thank-you/` to `noindex, nofollow` and excluded it from the sitemap
- Set `/review/` to `noindex, follow` and excluded it from the sitemap
- Reduced CLS risk by ensuring service/portfolio images ship explicit dimensions (or use `astro:assets` `<Image>`)
- Improved social CTR by wiring per-post OG title/description/image for blog posts
- Verified `dist/components/` and `dist/layouts/` do not exist
- Verified `dist/sitemap-0.xml` contains **73** URLs and **0** under `/components/` or `/layouts/`
- Verified static HTML output: **76** HTML files, **0** missing `<html>`, and **0** pages with 0 or >1 `<h1>`

## Executive Summary

**Overall: strong foundations (canonicals, descriptions, GA, core schemas). The main technical SEO issue found (unintended component/layout routes) is fixed, and remaining P2 performance/social sharing items are now implemented.**

### Top issues (highest impact first)

1. **P0 - Fixed: component/layout routes were being published and included in the sitemap**  
   Root cause was UI components and layouts living under `src/pages/`, which Astro treats as routable pages. This has been fixed by moving them to `src/components/` and `src/layouts/`. Current build output no longer contains `dist/components/` or `dist/layouts/`, and the sitemap no longer includes those URLs.

2. **P1 - Fixed: key commercial pages now have a single `<h1>`**  
   `/perth-food-photography/`, `/perth-event-photography/`, and `/portfolio/` now each render exactly one `<h1>`.

3. **P2 - Fixed: reduced CLS risk and improved per-post social sharing**  
   Service/portfolio images now ship explicit `width`/`height` (or use `astro:assets` `<Image>`), and blog posts now support per-post `ogTitle` / `ogDescription` plus post-specific OG images.

## Inventory / What's Being Published

### Real pages (intended)

Routes inferred from `src/pages/*.astro` and `src/pages/**/index.astro` include:
- `/`, `/about/`, `/contact/`, `/faq/`, `/portfolio/`, `/privacy/`, `/terms/`, `/review/`, `/thank-you/`
- Service pages: `/perth-event-photography/`, `/perth-food-photography/`, `/perth-product-photography/`, `/perth-website-development/`
- Blog: `/blog/` and `/blog/[slug]/`

### Unintended published routes (status)

Resolved:
- Components and layouts are no longer under `src/pages/`, so they are no longer published routes.
- Current sitemap (`dist/sitemap-0.xml`) contains **73** URLs and **0** under `/components/` or `/layouts/`.
- `/thank-you/` and `/review/` are now `noindex` and excluded from the sitemap.

## Technical SEO Findings

### Indexation control (robots / meta robots)

**Robots.txt**
- Location: `public/robots.txt` (copied to `dist/robots.txt`)
- Current behavior: allows everything except `/api/`, `/_astro/`, and `*.json`.
- GEO: explicitly allows common AI crawlers (e.g. `GPTBot`, `Google-Extended`, `PerplexityBot`).

Recommendations:
- (Optional) Keep `Disallow: /components/` and `Disallow: /layouts/` as a safety net, even though the routing issue is now fixed.
- Consider removing/ignoring `Host:` (non-standard; only supported by a subset of crawlers). It doesn't help Google.
- Keep the `Sitemap:` line; it's correct and useful.

**Meta robots**
- Implemented in `src/layouts/BaseLayout.astro` via `noIndex` prop; good pattern.
- With the routing fix applied, the previous "thin fragment pages without meta robots/canonicals" issue should no longer occur.

### Sitemap quality

- Generated via `@astrojs/sitemap` (`astro.config.mjs`).
- Current sitemap excludes utility pages like `/thank-you/` and `/review/`, and excludes unintended routes (`/components/**`, `/layouts/**`).

Impact:
- If utility pages are linked externally or discovered elsewhere, crawlers may still find them, but they are now `noindex` and not promoted via the sitemap.
- Crawl budget and site quality signals can be diluted, especially if these pages are seen as "doorways/thin content".

### Canonicals

- `src/layouts/BaseLayout.astro` sets canonical using `Astro.url.pathname` + `siteUrl` by default; output looks correct (e.g. `https://amplifycreativelab.com/about/`).
- Blog posts compute a canonical URL in `src/pages/blog/[slug].astro`, and `BaseLayout` now accepts a `canonical` prop for overrides (used by `src/layouts/BlogPostLayout.astro`).

### HTML validity / "fragment pages"

Automated check on `dist/`:
- Total HTML files: **76**
- HTML files missing `<html>`: **0**

Impact:
- These pages are not full documents, but they are still crawlable URLs. That's a quality + UX problem if indexed.

## On-Page SEO Findings (Titles, Descriptions, Headings)

### Titles + meta descriptions

Good news:
- All pages that render a full `<html>` document have a `<title>` and `meta name="description"` (from `BaseLayout`).

### Headings (H1)

After remediation, a build check found **0** pages with 0 or >1 `<h1>`.

## Structured Data (Schema) Audit

### Sitewide schemas (good)

`src/layouts/BaseLayout.astro` injects a JSON-LD graph including:
- `Organization` / `LocalBusiness` / `ProfessionalService`
- `Service` entities for core offerings
- `Person` entities for team members
- `geo` coordinates and `areaServed` (strong local signals)

### Blog schemas (good + GEO-ready)

`src/layouts/BlogPostLayout.astro` emits:
- `BlogPosting` schema
- `BreadcrumbList`
- Optional `FAQPage` schema if a post provides FAQ data

Notes:
- `src/content/config.ts` supports GEO enhancement fields (`updatedDate`, `faq`, `targetLocations`, etc.).
- Per-post `ogTitle` / `ogDescription` are now used to generate social meta tags, and blog posts now set `og:type="article"`.

### Opportunity improvements (nice-to-have)

- Consider adding `inLanguage: "en-AU"` in schemas and/or setting `<html lang="en-AU">` instead of `en` to better match Australia targeting.

## GEO (Geographic / Local SEO) Review

What's already strong:
- Clear Perth/WA positioning in titles, descriptions, and schemas.
- Services broken into dedicated location/service pages (good for local intent).
- Review funnel page exists (`/review/`) and links to Google review URL (supports GBP reputation growth).

Gaps / recommendations:
- Ensure NAP consistency: phone/email are present in schema; consider including them visibly on `/contact/` and footer if not already.
- If you serve specific suburbs, consider adding a small "service area" section with internal links to relevant blog posts (you already reference suburbs in FAQs).
- For maximum local pack support, consider embedding a Google Map or linking prominently to the Google Business Profile (if available).

## Performance & Accessibility Signals (SEO-adjacent)

### Images & Core Web Vitals

Previously flagged pages had `<img>` tags without explicit dimensions:
- `dist/perth-event-photography/index.html`
- `dist/perth-food-photography/index.html`
- `dist/perth-product-photography/index.html`
- `dist/portfolio/index.html`

Current status (after remediation):
- All `<img>` tags in those pages include both `width` and `height` (0 missing in a post-build scan).

### Alt text

After remediation, a build scan found **0** pages with `<img>` tags missing `alt`.

## Priority Fix Plan (Actionable)

### P0 (completed)

1. **Move non-route files out of `src/pages/` (done)**
   - `src/pages/components/**` → `src/components/**`
   - `src/pages/layouts/**` → `src/layouts/**`

2. **Regenerate sitemap without unintended routes (done)**
   - `dist/sitemap-0.xml` contains **73** URLs and **0** under `/components/` or `/layouts/`.

3. **Stop indexing previously published unintended URLs (recommended if they were indexed)**
   - In Google Search Console, inspect a few old `/components/...` or `/layouts/...` URLs and request removal if needed.
   - (Optional) Keep `Disallow: /components/` and `Disallow: /layouts/` in `public/robots.txt` as a safety net.

### P1 (completed)

4. **Add one H1 to key pages missing it (done)**
   - Build verification found **0** pages with 0 or >1 `<h1>`.

5. **Mark conversion/utility pages as noindex (done)**
   - `/thank-you/` is now `noindex, nofollow` and excluded from `dist/sitemap-0.xml`.
   - `/review/` is now `noindex, follow` and excluded from `dist/sitemap-0.xml`.

### P2 (completed)

6. **Reduce layout shift by adding image dimensions (done)**
   - Implemented in `src/components/perth-food-photography/FoodServiceLayout.astro`, `src/components/perth-event-photography/EventServiceLayout.astro`, plus `src/components/portfolio/PortfolioGallery.astro` + `public/js/main.js` for the portfolio lightbox.

7. **Improve social CTR (done)**
   - Implemented in `src/layouts/BaseLayout.astro`, `src/layouts/BlogPostLayout.astro`, and `src/pages/blog/[slug].astro` using per-post `ogTitle` / `ogDescription` and `featuredImage` for OG image.

## Quick Verification Checklist

- `npm run build` and verify:
  - `dist/components/` does not exist
  - `dist/layouts/` does not exist
  - `dist/sitemap-0.xml` excludes `/components/`, `/layouts/`, `/thank-you/`, and `/review/`
  - `dist/thank-you/index.html` includes `noindex, nofollow`
  - `dist/review/index.html` includes `noindex, follow`
- In Search Console:
  - Resubmit sitemap
  - Inspect a few previously published `/components/...` URLs and request removal if they were indexed
