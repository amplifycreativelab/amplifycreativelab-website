---
description: SEO & GEO Content Strategy Plan for Amplify Creative Lab - blog expansion, content clusters, and topic pillars
---

# SEO & GEO Content Strategy Plan

A comprehensive content strategy to improve SEO and GEO for amplifycreativelab.com through strategic blog expansion, content clusters, and topic pillars.

**Last Updated:** 2025-12-14

---

## ⚠️ Image Generation Guidelines (CRITICAL)

When generating featured images for blog posts, follow these brand guidelines carefully:

### Brand Identity

| Element | Value | Notes |
|---------|-------|-------|
| **Brand Name** | Amplify Creative Lab | Use full name or "Amplify" |
| **Primary Color** | `#24360f` (Deep Forest Green) | Buttons, primary accents |
| **Secondary Color** | `#152705` (Dark Green) | Headings |
| **Accent/Hover** | `#7a6753` (Warm Brown) | Secondary accents |
| **Background** | `#fef8eb` (Warm Cream) | Light, warm background |
| **Text Color** | `#544F49` (Warm Grey) | Body text |
| **Heading Font** | Abril Fatface | Serif, elegant display |
| **Body Font** | Montserrat | Clean sans-serif |

### Image Generation Rules

**✅ DO include brand elements when:**
- Creating infographic-style images
- Designing abstract/conceptual graphics
- Making illustrations or diagrams
- Creating images with text overlays

**❌ DO NOT include brand elements when:**
- Generating realistic photography (food shots, product photos, venues)
- Creating lifestyle imagery
- Making images that should appear as genuine photography

### Prompt Guidelines

**For branded/graphic images, include in prompt:**
```
"Include subtle branding with deep forest green (#24360f) and warm cream (#fef8eb) color palette. 
Modern, elegant aesthetic matching Amplify Creative Lab brand identity."
```

**For realistic photography, include in prompt:**
```
"Professional photography style, natural lighting, authentic Perth/Western Australian setting.
Warm, inviting aesthetic with earthy tones."
```

### Image Technical Requirements

| Requirement | Specification |
|-------------|---------------|
| Output Format | WebP (convert from PNG) |
| Quality | 85% WebP compression |
| Location | `src/assets/images/blog/` |
| Naming | `kebab-case-descriptive-name.webp` |
| Alt Text | Descriptive, keyword-rich, under 125 characters |

### Conversion Command

After generating images, convert to WebP using:
```javascript
// Create convert-images.cjs with sharp conversion
const sharp = require('sharp');
await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
```

---

## Implementation Progress

| Cluster | Planned | Completed | Status |
|---------|---------|-----------|--------|
| Local SEO | 7 | 4 | In Progress |
| Event Photography | 6 | 3 | In Progress |
| Food Photography | 5 | 2 | In Progress |
| Website Development | 4 | 4 | ✅ Complete |
| Product Photography | 5 | 5 | ✅ Complete |
| Suburb-Specific | 8 | 1 | In Progress |
| **Total** | **35** | **19** | **54% Complete** |

---

## Current State Analysis

### Existing Content Inventory
- **52 blog posts** across 17 categories (now 55 with new posts)
- **4 service pages**: Food Photography, Product Photography, Event Photography, Website Development
- **Geographic focus**: Perth, Western Australia with suburb-level targeting

### Content Category Breakdown
| Category | Posts | Coverage |
|----------|-------|----------|
| Food Photography | 12 | ★★★★★ Strong |
| Web Design | 9 | ★★★★☆ Good |
| Digital Marketing | 7 | ★★★★☆ Good |
| Performance | 8 | ★★★★☆ Good |
| Local SEO | 3 → 4 | ★★★☆☆ Improving |
| Product Photography | 3 | ★★★☆☆ Moderate |
| Event Photography | 2 → 3 | ★★☆☆☆ Improving |
| Business Strategy | 2 | ★★☆☆☆ Needs work |

---

## Content Cluster Strategy

### Pillar 1: Perth Food Photography (Primary Service Cluster)

**Pillar Page**: `/perth-food-photography` ✓ Exists

**Existing Cluster Posts (12)**: ✓ Well-covered

**New Blog Posts Needed** (5 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Food Photography for Perth Food Trucks & Pop-Ups | ✅ **DONE** | `food-photography-perth-food-trucks-popups.mdx` |
| 2 | Wine & Beverage Photography for Swan Valley Wineries | ⬜ Pending | |
| 3 | Dark & Moody Food Photography for Perth Bars | ⬜ Pending | |
| 4 | Breakfast & Brunch Photography for Perth Cafés | ✅ **DONE** | `breakfast-brunch-photography-perth-cafes.mdx` |
| 5 | Seasonal Menu Photography: Updating Images Quarterly | ⬜ Pending | |

---

### Pillar 2: Perth Website Development (Secondary Service Cluster)

**Pillar Page**: `/perth-website-development` ✓ Exists

**New Blog Posts Needed** (4 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Single Page vs Multi-Page Websites for Perth Small Businesses | ✅ **DONE** | `single-page-vs-multipage-websites-perth.mdx` |
| 2 | Website Redesign Checklist for Perth Cafés Moving from WordPress | ✅ **DONE** | `website-redesign-checklist-perth-cafes-wordpress-migration.mdx` |
| 3 | E-commerce for Perth Food Producers | ✅ **DONE** | `ecommerce-perth-food-producers.mdx` |
| 4 | QR Code Menus Done Right: Best Practices for Perth Venues | ✅ **DONE** | `qr-code-menus-best-practices-perth-venues.mdx` |

---

### Pillar 3: Perth Local SEO & Google Maps (HIGH PRIORITY)

**Current State**: 2 → 4 posts (new: How Perth Suburbs Search Differently)

**New Blog Posts Needed** (7 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Complete Google Business Profile Setup for Perth Restaurants ⭐ | ✅ **DONE** | `google-business-profile-setup-perth-restaurants.mdx` |
| 2 | Local Citation Building for Perth Hospitality | ✅ **DONE** | `local-citation-building-perth-hospitality.mdx` |
| 3 | Voice Search Optimization for Perth Restaurants | ✅ **DONE** | `voice-search-optimization-perth-restaurants.mdx` |
| 4 | How Perth Suburbs Search Differently | ✅ **DONE** | `how-perth-suburbs-search-differently.mdx` |
| 5 | Competitor Analysis for Perth Cafés | ⬜ Pending | |
| 6 | Perth Restaurant Review Strategy | ⬜ Pending | |
| 7 | Local Landing Pages for Perth Restaurants | ⬜ Pending | |

---

### Pillar 4: Perth Event Photography (CRITICAL GAP)

**Pillar Page**: `/perth-event-photography` ✓ Exists

**Current State**: 2 → 3 posts (new: Festival & Markets)

**New Blog Posts Needed** (6 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Corporate Event Photography Perth: What to Expect | ✅ **DONE** | `corporate-event-photography-perth-guide.mdx` |
| 2 | Brand Launch Photography: Capturing Your Perth Product Debut | ✅ **DONE** | `brand-launch-photography-perth-product-debut.mdx` |
| 3 | Charity Event Photography in Perth | ⬜ Pending | |
| 4 | Festival & Activation Photography for Perth Markets | ✅ **DONE** | `festival-activation-photography-perth-markets.mdx` |
| 5 | Team Retreats & Staff Events Photography | ⬜ Pending | |
| 6 | Wedding & Private Celebration Photography | ⬜ Pending | |

---

### Pillar 5: Perth Product Photography (Growing Cluster)

**Pillar Page**: `/perth-product-photography` ✓ Exists

**New Blog Posts Needed** (5 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Skincare & Beauty Product Photography Perth | ✅ **DONE** | `skincare-beauty-product-photography-perth.mdx` |
| 2 | Candles & Homewares Photography for Perth Makers | ✅ **DONE** | `candles-homewares-photography-perth-makers.mdx` |
| 3 | Gift Hamper Photography | ✅ **DONE** | `gift-hamper-photography-perth-premium-product-images.mdx` |
| 4 | Flat Lay Photography for Perth Ecommerce | ✅ **DONE** | `flat-lay-photography-perth-ecommerce.mdx` |
| 5 | 360° Product Photography & Video | ✅ **DONE** | `360-product-photography-video-perth.mdx` |

---

## Suburb-Specific Content (GEO Enhancement)

| # | Suburb | Topic | Status | File |
|---|--------|-------|--------|------|
| 1 | **Fremantle** | Complete Digital Guide for Fremantle Cafés & Bars | ✅ **DONE** | `fremantle-hospitality-digital-guide.mdx` |
| 2 | Northbridge | Nightlife Marketing: Digital Strategies for Northbridge Bars | ⬜ Pending | |
| 3 | Mount Lawley | Fine Dining Digital Presence Guide | ⬜ Pending | |
| 4 | Leederville | Trendy Cafe Marketing on Oxford Street | ⬜ Pending | |
| 5 | Scarborough | Beachside Branding for Scarborough Venues | ⬜ Pending | |
| 6 | Victoria Park | Multicultural Cuisine Marketing Guide | ⬜ Pending | |
| 7 | Subiaco | Premium Brand Building for Subiaco Hospitality | ⬜ Pending | |
| 8 | Joondalup | Growing Your Joondalup Venue Online | ⬜ Pending | |

---

## Content Calendar

### ✅ Completed (Priority 1 & 2)
1. ~~Google Business Profile complete guide~~ ✅
2. ~~Corporate event photography guide~~ ✅
3. ~~Fremantle hospitality guide~~ ✅
4. ~~Local citation building guide~~ ✅
5. ~~Breakfast & brunch photography guide~~ ✅
6. ~~Voice search optimization~~ ✅
7. ~~Brand launch photography~~ ✅
8. ~~QR code menus guide~~ ✅
9. ~~Skincare product photography~~ ✅
10. ~~Single page vs multi-page websites~~ ✅
11. ~~Candles & homewares photography~~ ✅

### ✅ Recently Completed (Priority 2)
12. ~~Website redesign checklist for WordPress migration~~ ✅
13. ~~Gift hamper photography~~ ✅
14. ~~Flat lay photography for Perth ecommerce~~ ✅
15. ~~E-commerce for Perth food producers~~ ✅

### ✅ Recently Completed (Priority 3)
16. ~~360° Product Photography & Video~~ ✅
17. ~~How Perth Suburbs Search Differently~~ ✅
18. ~~Festival & Activation Photography for Perth Markets~~ ✅
19. ~~Food Photography for Perth Food Trucks & Pop-Ups~~ ✅

### Next Up (Priority 3 - Medium-term)
20. Wine & Beverage Photography for Swan Valley Wineries
21. Charity event photography Perth
22. Competitor analysis for Perth cafés
23. Team Retreats & Staff Events Photography

### Ongoing: Location Content
- 1 suburb-focused post per month for remaining 7 suburbs

---

## Technical SEO Requirements

All new posts follow this structure:
- ✅ `updatedDate` in frontmatter
- ✅ `ogTitle` and `ogDescription` for social
- ✅ `keywords` array (6-8 terms)
- ✅ `faq` array (5+ questions) for schema
- ✅ `relatedServices` linking
- ✅ `targetLocations` for GEO
- ✅ Key takeaways section
- ✅ Data tables where applicable
- ✅ Internal links (3+ per post)
- ✅ FAQ section at end
- ✅ WebP featured images with descriptive alt text
