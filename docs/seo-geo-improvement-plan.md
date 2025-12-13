---
description: 
---

# Comprehensive SEO & GEO Improvement Plan for Amplify Creative Lab

**Site:** amplifycreativelab.com | **Framework:** Astro | **Focus:** Perth, Western Australia  
**Created:** 2025-12-11

---

## Current State Assessment

### ✅ Strong Foundation Already in Place

| Component | Status | Details |
|-----------|--------|---------|
| **Schema.org Markup** | ✅ Excellent | LocalBusiness, Organization, Service, Person, BlogPosting, FAQPage schemas |
| **Sitemap** | ✅ Configured | `@astrojs/sitemap` integration active |
| **Canonical URLs** | ✅ Present | Dynamic canonicals in `BaseLayout.astro` |
| **Open Graph Tags** | ✅ Basic | OG title, description, image, URL present |
| **Content Collection** | ✅ Enhanced | GEO fields (`faq`, `keywords`, `targetLocations`) in schema |
| **Blog Content** | ✅ Rich | 46 MDX articles with local Perth focus |

---

## 🎯 Priority Improvements

### Priority 1: GEO (Generative Engine Optimization)

- Ensure all 46 blog posts have 5-8 FAQs in frontmatter
- Add `<aside className="key-takeaways">` to every post
- Include Perth/WA statistics and data points
- Add author credentials for E-E-A-T signals
- Convert comparisons into HTML tables

### Priority 2: Technical SEO

- Create `public/robots.txt` with sitemap reference
- Add Twitter Card meta tags
- Implement Breadcrumb schema
- Audit all images for descriptive alt text

### Priority 3: Local SEO for Perth/WA

- Create suburb landing pages (Northbridge, Fremantle, Subiaco, etc.)
- Submit to Australian local directories
- Optimize Google Business Profile
- Implement review generation strategy

### Priority 4: Content Optimization

- Write conversational headers matching voice search
- Start paragraphs with direct answers
- Update `updatedDate` on all posts
- Add visible "Last Updated" dates

### Priority 5: Performance (Core Web Vitals)

- LCP < 2.5s: Preload hero images
- INP < 200ms: Minimize client JS
- CLS < 0.1: Set image dimensions

---

## Implementation Roadmap

### Phase 1: Quick Wins (1-2 days) ✅ COMPLETED 2025-12-11
- [x] Create/improve `robots.txt` - Enhanced with AI bot permissions (GPTBot, ClaudeBot, PerplexityBot, etc.)
- [x] Add Twitter Card meta tags - Added to `BaseLayout.astro`
- [x] Fix missing image alt tags - Verified all img elements have alt attributes
- [x] Update `updatedDate` on blog posts - All 46 posts already have `updatedDate`

### Phase 2: GEO Enhancement (1 week)
- [x] Ensure all posts have 5+ FAQs - COMPLETED 2025-12-11 (Audited & Fixed all 46 posts)
- [x] Add Key Takeaways sections - COMPLETED 2025-12-11 (Audited all 46 posts)
- [x] Create internal linking strategy
- [x] Add statistical citations

### Phase 3: Local SEO (2 weeks)
- [x] Create 5 suburb-specific pages - Completed as Blog Posts (Fremantle, Subiaco, Vic Park, Mt Lawley, CBD)
- [ ] Submit to local directories
- [ ] Implement review workflow
- [ ] Optimize Google Business Profile

### Phase 4: Ongoing
- [x] Add Breadcrumb schema - COMPLETED 2025-12-12 (Added to BlogPostLayout.astro for all blog posts)
- [x] Add visible "Last Updated" dates - COMPLETED 2025-12-12 (Shows freshness signals to users)
- [x] Create review landing page - COMPLETED 2025-12-12 (/review/ page with Google & Facebook CTAs)
- [ ] Monitor Core Web Vitals
- [ ] Quarterly content audits

---

## Verification Tools

| Test | URL |
|------|-----|
| Schema Validation | https://search.google.com/test/rich-results |
| Core Web Vitals | https://pagespeed.web.dev/ |
| Mobile-Friendliness | https://search.google.com/test/mobile-friendly |
