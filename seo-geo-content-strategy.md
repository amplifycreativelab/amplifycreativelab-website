---
description: SEO & GEO Content Strategy Plan for Amplify Creative Lab - blog expansion, content clusters, and topic pillars
---

# SEO & GEO Content Strategy Plan

A comprehensive content strategy to improve SEO and GEO for amplifycreativelab.com through strategic blog expansion, content clusters, and topic pillars.

**Last Updated:** 2025-12-19

---
## ⚠️ Read First (CRITICAL)

Before implementing, explain in deep deatils what you are going to implement and how, after that, ask for confirmation from user, and then implement if user's answer is positive.




## ⚠️ Image Generation Guidelines (CRITICAL)

When generating featured images for blog posts, follow these brand guidelines carefully:

### Brand Identity

| Element | Value | Notes |
|---------|-------|-------|
| **Brand Name** | Amplify Creative Lab | Use full name or "Amplify" |
| **Primary Color** | `#24360f` (Deep Forest Green) | Buttons, primary accents |
| **Secondary Color** | `#152705` (Dark Green) | Headings |
| **Accent/Hover** | `#7a6753` (Warm Brown) | Secondary accents, 'Click' targets |
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
### Image Generation Rate Limits

If rate limits are hit before finishing the generations, update the plan to reflect the missing images, so we can generate later.

**⚠️ Placeholder Images (Action Required Later):**
The following posts are currently using `best-perth-suburbs-hospitality-venues.webp` as a placeholder (verified 2025-12-19) and will need distinct images generated when quota permits:
- `subiaco-premium-brand-building-hospitality.mdx`
- `joondalup-venue-growth-online-digital-strategy.mdx`
- `cottesloe-beachside-dining-marketing.mdx`
- `maylands-indie-cafe-marketing.mdx`
- `south-perth-riverside-dining-views.mdx`
- `perth-cbd-corporate-dining-marketing.mdx`
- `guildford-historic-pubs-heritage-hospitality.mdx`
- `applecross-jacaranda-season-affluent-dining.mdx`

Other image follow-ups:
- `claremont-western-suburbs-premium-dining.mdx` (generated but still using a PNG; convert to WebP)
- `what-is-a-packshot-product-photography.mdx` (needs `cosmetic-cream-swatch-texture-photography-perth.webp`)
- `why-diy-websites-fail-perth-business.mdx` (needs `diy-vs-professional-website-perth.webp`)
---

## Implementation Progress

The initial content build-out is complete. The next growth phase focuses on **rankings, relevance, and keyword breadth** (especially for Content Creation & Production).

### ✅ Content Production (Blog + GEO)

| Cluster | Planned | Completed | Status |
|---------|---------|-----------|--------|
| Local SEO | 7 | 7 | ✅ Complete |
| Event Photography | 6 | 6 | ✅ Complete |
| Food Photography | 5 | 5 | ✅ Complete |
| Website Development | 4 | 4 | ✅ Complete |
| Product Photography | 5 | 5 | ✅ Complete |
| Suburb-Specific | 8 | 8 | ✅ Complete |
| Content Creation | 4 | 4 | ✅ Complete |
| **Total** | **39** | **39** | ✅ Complete |

### 🚀 Growth Execution (What Moves Rankings)

| Workstream | Goal | Status |
|-----------|------|--------|
| **Legacy URL recovery + redirects** | Consolidate historic URLs to avoid lost demand + cannibalisation | ✅ Complete |
| **Service page expansion** | Build/refresh landing pages for high-impression queries | ⏳ Pending |
| **Internal linking pass** | Strengthen hubs and “money pages” with contextual links | ⏳ Pending |
| **CTR & snippet upgrades** | Improve titles/meta + FAQ visibility for high-impression terms | ⏳ Pending |
| **Content refresh cycle** | Update pages/posts that are close to page 1 or have high impressions | ⏳ Pending |

---

## Current State Analysis

### Existing Content Inventory
- **52 blog posts** across 17 categories (now 55 with new posts)
- **4 service pages**: Food Photography, Product Photography, Event Photography, Website Development
- **Geographic focus**: Perth, Western Australia with suburb-level targeting

### Content Category Breakdown
| Category | Posts | Coverage |
|----------|-------|----------|
| Food Photography | 12 | ★★★★★ Strong (Pos 26-35, striking distance) |
| Web Design | 9 | ★★★★☆ Good |
| Digital Marketing | 7 | ★★★★☆ Good |
| Performance | 8 | ★★★★☆ Good |
| Local SEO | 3 → 4 | ★★★☆☆ Improving |
| Content Creation | 0 | ★★★★★ HUGE Potential (2,000+ combined impressions, low rank) |
| Product Photography | 3 | ★★★☆☆ Moderate |
| Event Photography | 2 → 3 | ★★☆☆☆ Improving (Opportunity: Corporate Portraits) |
| Business Strategy | 2 | ★★☆☆☆ Needs work |

**Latest Data Insights (Dec 19, 2025):**
- **Content Creation**: Massive search volume for `content creation perth` (933 imps) and `content production perth` (714 imps) but ranking poorly (Pos 34-80). **Primary growth area.**
- **Striking Distance**: `food photography in perth` (Pos 26), `amplify perth` (Pos 20), `360 photographer perth` (Pos 15).
- **Quick Wins**: `food photography agency` (Pos 10), `restaurant photo shoot` (Pos 9), `core web vitals for hotels` (Pos 10).
- **Missing-but-relevant terms already appearing**: `food photography packages` (Pos 37), `food photography & videography` (Pos 60), `menu photography` (Pos 84), `ecommerce photography perth` (Pos 61), `content marketing perth` (Pos 89).

### ⚠️ Core Issues to Fix (High Impact)

1. **Legacy URL leakage**: GSC shows high impressions for older URLs (e.g. `/perth-content-creation/`, `/perth-portrait-photography/`). If these are missing/redirecting poorly, Google can’t consistently rank the “right” page.
2. **Commercial intent is under-served**: Queries like `content creation perth`, `content creator perth`, `restaurant photography services`, and `food photography packages` require **service landing pages** + tight internal linking, not only blog posts.
3. **Keyword breadth is there—but not mapped**: Similar intents (e.g. *content creation* vs *content production* vs *content marketing*) need dedicated targets to avoid cannibalisation.

---

## Content Cluster Strategy

The cluster tables below include both **completed content** and a short list of **next best expansions** (Pending/Proposed) based on the latest GSC data.

### Pillar 1: Perth Food Photography (Primary Service Cluster)

**Pillar Page**: `/perth-food-photography` ✓ Exists

**Existing Cluster Posts (12)**: ✓ Well-covered

#### Food Photography Keyword Universe (Missing / Underutilised)
The goal is to rank higher for **food photography (service intent)**, then widen coverage to closely-related commercial terms so Google consistently understands the site as the best local provider.

**Primary (must-win)**
- `food photography perth`
- `food photographer perth`
- `food photography in perth`

**Secondary (high commercial intent)**
- `food photography services perth`
- `restaurant food photography perth` / `restaurant photographer perth`
- `cafe food photography` / `cafe photographer perth`
- `bar food photography` / `cocktail photography perth`
- `menu photography perth` / `menu photographer perth`

**Pricing & packaging (strong conversion intent)**
- `food photography packages perth`
- `food photography pricing perth` / `food photography prices perth` / `food photography cost perth`
- `restaurant food photography pricing`
- `food photography quote` / `food photography rates`

**Delivery platforms & online ordering (highly relevant to your audience)**
- `uber eats photography perth` / `ubereats menu photos`
- `deliveroo menu photos` / `doordash menu photos`
- `online ordering photography` / `delivery menu photography`

**Video + multi-format content (ties into your Content Creator offering)**
- `food videography perth`
- `food photography and videography`
- `reels for restaurants perth` / `tiktok for restaurants perth`

**Adjacent commercial terms to intentionally pull in (without cannibalising)**
- `hospitality photographer perth` / `hospitality photography perth`
- `commercial food photography perth` / `commercial photography perth`
- `brand photography perth` (as a supporting section/FAQ, not the primary target)

**Local modifiers (GEO breadth)**
- Perth CBD, Fremantle, Northbridge, Subiaco, Leederville, Mount Lawley, Victoria Park, South Perth
- Swan Valley, Scarborough, Cottesloe (and “Perth metro” / “Western Australia” where appropriate)

**Extra keyword variants to utilise intentionally**
- “Company/agency” variants: `food photography company perth`, `food photography agency perth`
- “Studio/on-location” variants: `food photography studio perth`, `on location food photography perth`
- “Near me” variants: `food photographer near me`, `food photography near me`, `restaurant photographer near me`
- “Service wording” variants: `professional food photography perth`, `commercial food photography perth`
- “Restaurant-menu” variants: `restaurant menu photography perth`, `menu photos for restaurants`, `menu photo shoot`

#### How To Deploy These Keywords (On-Page, Not Stuffing)
Add/refresh these elements primarily on `/perth-food-photography/`, then reinforce via supporting posts:
1. **Heading coverage**: One section each for *restaurants*, *cafes*, *bars/cocktails*, *menus & online ordering*, *packages & pricing*, *process/checklist*.
2. **FAQ expansion for conversion queries**: include “packages”, “pricing”, “how many photos”, “Uber Eats specs”, “turnaround time”, “licensing/usage rights”, “styling”.
3. **Internal linking anchors**: use varied but natural anchors like “food photography packages”, “menu photography”, “restaurant photoshoot”, “Perth food photographer”.
4. **Image alt text**: describe the dish + venue type + Perth (when genuine), e.g. “Cocktail photography for Perth bar menu”.
5. **Schema upgrades (plan-level)**: keep `Service` + `FAQPage`; add an `OfferCatalog`/packages section (even if prices are ranges) (🆕 Proposed); expand `areaServed` list (✅ **DONE**).

#### New Pages / Content Needed (Food Photography Ranking Sprint)
These are designed to capture missing high-intent terms while funnelling authority to `/perth-food-photography/`.

**Option A (preferred): build “sub-service” landing pages** (stronger commercial alignment)
- **Menu Photography Perth** (targets `menu photography perth`, `menu photographer perth`)
- **Restaurant Photography Perth** (targets `restaurant photographer perth`, `restaurant food photography`)
- **Food Photography Packages Perth** (targets `food photography packages perth`, `food photography pricing perth`)

**Option B: keep them as blog posts** (simpler, still works if internal linking is tight)
- Use the Proposed posts below, plus a dedicated “Packages & Pricing” post.

#### Food Photography 30/60/90-Day Execution (Highest Leverage)
**Next 30 days (page 2 → page 1 groundwork)**
- Refresh `/perth-food-photography/` title/meta for CTR and intent coverage: include “restaurant”, “menu”, and “Perth” naturally.
- Add a dedicated **Packages & Pricing** section + FAQ block (answers “packages/pricing/cost” queries directly).
- Add a “Menus & Online Ordering (Uber Eats/DoorDash/Deliveroo)” section with practical specs and deliverables.
- Add internal links *to* `/perth-food-photography/` from: homepage, portfolio, and the best-performing hospitality posts (especially Uber Eats / menu posts).

**Next 60 days (capture missing commercial terms)**
- Publish either sub-service pages (Option A) or the Proposed posts that target: `menu photography perth`, `food photography packages perth`, `restaurant photographer perth`.
- Build a “shoot checklist” lead magnet post that earns links and feeds high-intent pages (and reuse it in your contact funnel).

**Next 90 days (authority + long-tail domination)**
- Expand niche pages/posts: cafe/coffee/brunch, cocktails/low-light, food trucks/pop-ups, seasonal menu updates.
- ✅ **DONE** Add a lightweight “Areas served” page and ensure `areaServed` schema includes the suburbs you want to rank in.
- Add an **Image Search** pass: descriptive filenames, strong alt text, and a small on-page gallery (real shoots) with captions that include venue type + Perth.

**New Blog Posts Needed** (core + expansion):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Food Photography for Perth Food Trucks & Pop-Ups | ✅ **DONE** | `food-photography-perth-food-trucks-popups.mdx` |
| 2 | Wine & Beverage Photography for Swan Valley Wineries | ✅ **DONE** | `wine-beverage-photography-swan-valley-wineries.mdx` |
| 3 | Dark & Moody Food Photography for Perth Bars | ✅ **DONE** | `dark-moody-food-photography-perth-bars.mdx` |
| 4 | Breakfast & Brunch Photography for Perth Cafés | ✅ **DONE** | `breakfast-brunch-photography-perth-cafes.mdx` |
| 5 | Seasonal Menu Photography: Updating Images Quarterly | ✅ **DONE** | `seasonal-menu-photography-updates.mdx` |
| 6 | **Hiring a Food Photography Agency in Perth** | ✅ **DONE** | `hiring-food-photography-agency-perth.mdx` |
| 7 | **Planning Your Restaurant Photo Shoot: A Perth Guide** | ✅ **DONE** | `planning-restaurant-photo-shoot-perth.mdx` |
| 8 | **Food Photography Packages & Pricing in Perth (What’s Included)** | 🆕 Proposed | `food-photography-packages-pricing-perth.mdx` |
| 9 | **Food Photography & Videography in Perth (Reels, Menus, Ads)** | 🆕 Proposed | `food-photography-videography-perth.mdx` |
| 10 | **Menu Photography in Perth: What to Shoot + Formats That Sell** | 🆕 Proposed | `menu-photography-perth.mdx` |
| 11 | **Restaurant Photography in Perth: Menu, Interiors, Team (The Full Shot List)** | 🆕 Proposed | `restaurant-photography-perth-shot-list.mdx` |
| 12 | **Cafe Photography Perth: Coffee, Cabinet Food, and Brunch That Converts** | 🆕 Proposed | `cafe-photography-perth.mdx` |
| 13 | **Cocktail & Bar Photography Perth: Low-Light Shoots Done Right** | 🆕 Proposed | `cocktail-bar-photography-perth.mdx` |
| 14 | **Uber Eats Photos (Perth): Specs, Crops, and What Actually Sells** | 🆕 Proposed | `uber-eats-food-photography-perth.mdx` |
| 15 | **Food Styling for Restaurant Photos: A Practical Guide for Perth Kitchens** | 🆕 Proposed | `food-styling-guide-perth-restaurants.mdx` |
| 16 | **Pub & Brewery Food Photography Perth: Dark Rooms, Fast Service, Great Results** | 🆕 Proposed | `pub-brewery-food-photography-perth.mdx` |

---

### Pillar 2: Perth Website Development (Secondary Service Cluster)

**Pillar Page**: `/perth-website-development` ✓ Exists

#### Website Development Keyword Universe (Missing / Underutilised)
The goal is to rank for **website development/web design (service intent)**, then expand into high-converting sub-intents (hospitality sites, performance, redesigns, and e‑commerce).

**Primary (must-win)**
- `website development perth`
- `web design perth`
- `website designer perth` / `web developer perth`

**Hospitality niche (high fit for Amplify)**
- `restaurant website design perth` / `restaurant website perth`
- `cafe website design perth` / `hospitality web design perth`
- `hotel website design perth` / `accommodation website design perth`
- `restaurant online ordering website` / `restaurant booking website`

**Performance + technical (differentiator; supports SEO + conversion)**
- `core web vitals perth`
- `website speed optimization perth` / `improve website speed perth`
- `page speed optimisation` / `site performance optimisation`

**Redesigns + migrations (strong commercial intent)**
- `website redesign perth`
- `wordpress migration` / `move from wordpress`
- `website rebuild perth`

**E‑commerce**
- `ecommerce website perth`
- `shopify developer perth` / `shopify web design perth`
- `woocommerce developer perth`

**Pricing & “how much” (often the best converting informational intent)**
- `website cost perth` / `website design cost perth`
- `website design packages perth` / `web design pricing perth`

**Local modifiers (GEO breadth)**
- Perth CBD, Fremantle, Northbridge, Subiaco, Leederville, Mount Lawley, Victoria Park, South Perth

**Extra keyword variants to utilise intentionally**
- “Near me” variants: `website developer near me`, `web design near me`
- “Agency/company” variants: `web design agency perth`, `website development company perth`
- “Business type” variants: `small business website perth`, `hospitality website design perth`
- “Landing pages” variants: `landing page design perth`, `coming soon page perth`

#### How To Deploy These Keywords (On-Page, Not Stuffing)
Prioritise `/perth-website-development/` as the canonical hub, then reinforce via niche pages/posts:
1. **Intent sections**: restaurants/cafes, hotels/accommodation, e‑commerce, redesign/migration, performance/Core Web Vitals.
2. **Conversion sections**: “packages/pricing ranges”, “timeline”, “what’s included”, “process”, “what you need from the client”.
3. **FAQ targets**: cost, timeline, platform (WordPress vs custom vs Shopify), ownership, edits/training, ongoing support/maintenance, SEO basics.
4. **Internal link anchors**: vary naturally across “website development Perth”, “restaurant website design”, “Core Web Vitals”, “website redesign”.
5. **Schema direction (plan-level)**: `Service` + `FAQPage`; add `OfferCatalog` (even with ranges) (🆕 Proposed); strengthen `areaServed` (✅ **DONE**).

#### New Pages / Content Needed (Website Development Ranking Sprint)
**Option A (preferred): sub-service landing pages** (stronger commercial intent match)
- **Restaurant Website Design Perth** (menus, bookings, ordering)
- **Website Speed Optimisation Perth** (Core Web Vitals, UX, conversions)
- **E‑commerce Website Development Perth** (Shopify/WooCommerce; for producers + retail)
- **Hotel & Accommodation Website Development Perth** (performance + booking integrations)

**Option B: keep as blog posts** (simpler; works with strong internal linking)
- Publish the “pricing”, “restaurant websites”, and “speed/Core Web Vitals” posts below and link them hard into `/perth-website-development/`.

#### Website Development 30/60/90-Day Execution (Highest Leverage)
**Next 30 days**
- Refresh `/perth-website-development/` title/meta and headings to explicitly include **web design + website development + Perth** and hospitality use-cases.
- Add a **Performance** section (Core Web Vitals, image optimisation, fonts, hosting) with a short checklist and an FAQ block.
- Add a lightweight **pricing range** + “what’s included” section to capture “cost/packages” intent.

**Next 60 days**
- Publish/finish: `core-web-vitals-hotels-accommodation-perth.mdx` and link it from the service page + relevant posts.
- Publish either landing pages (Option A) or the highest-intent posts (pricing + restaurant websites + speed optimisation).

**Next 90 days**
- Add 1–2 mini case studies (even short ones) focused on measurable outcomes: bookings, calls, load time, conversion.
- Expand into platform comparison content (WordPress vs Shopify vs custom) and migration checklists to capture redesign intent.

**New Blog Posts Needed** (core + expansion):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Single Page vs Multi-Page Websites for Perth Small Businesses | ✅ **DONE** | `single-page-vs-multipage-websites-perth.mdx` |
| 2 | Website Redesign Checklist for Perth Cafés Moving from WordPress | ✅ **DONE** | `website-redesign-checklist-perth-cafes-wordpress-migration.mdx` |
| 3 | E-commerce for Perth Food Producers | ✅ **DONE** | `ecommerce-perth-food-producers.mdx` |
| 4 | QR Code Menus Done Right: Best Practices for Perth Venues | ✅ **DONE** | `qr-code-menus-best-practices-perth-venues.mdx` |
| 5 | **Core Web Vitals for Hotels & Accommodation Sites** | ✅ **DONE** | `core-web-vitals-hotels-accommodation-perth.mdx` |
| 6 | **Website Design Cost in Perth: Pricing, Timelines, and What You Get** | 🆕 Proposed | `website-design-cost-perth.mdx` |
| 7 | **Restaurant Website Design Perth: Menus, Bookings, Online Ordering (Blueprint)** | 🆕 Proposed | `restaurant-website-design-perth.mdx` |
| 8 | **Website Speed Optimisation Perth: A Practical Core Web Vitals Checklist** | 🆕 Proposed | `website-speed-optimisation-perth.mdx` |
| 9 | **WordPress vs Shopify vs Custom: Best Website Platform for Perth Businesses** | 🆕 Proposed | `wordpress-vs-shopify-vs-custom-perth.mdx` |
| 10 | **Website Maintenance Perth: Updates, Security, Backups (What Matters)** | 🆕 Proposed | `website-maintenance-perth.mdx` |

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
| 5 | Competitor Analysis for Perth Cafés | ✅ **DONE** | `competitor-analysis-perth-cafes.mdx` |
| 6 | Perth Restaurant Review Strategy | ✅ **DONE** | `perth-restaurant-review-strategy.mdx` |
| 7 | Local Landing Pages for Perth Restaurants | ✅ **DONE** | `local-landing-pages-perth-restaurants.mdx` |

---

### Pillar 4: Perth Event Photography (CRITICAL GAP)

**Pillar Page**: `/perth-event-photography` ✓ Exists

**Current State**: 2 → 3 posts (new: Festival & Markets)

**New Blog Posts Needed** (6 recommended):

| # | Title | Status | File |
|---|-------|--------|------|
| 1 | Corporate Event Photography Perth: What to Expect | ✅ **DONE** | `corporate-event-photography-perth-guide.mdx` |
| 2 | Brand Launch Photography: Capturing Your Perth Product Debut | ✅ **DONE** | `brand-launch-photography-perth-product-debut.mdx` |
| 3 | Charity Event Photography in Perth | ✅ **DONE** | `charity-event-photography-perth.mdx` |
| 4 | Festival & Activation Photography for Perth Markets | ✅ **DONE** | `festival-activation-photography-perth-markets.mdx` |
| 5 | Team Retreats & Staff Events Photography | ✅ **DONE** | `team-retreats-staff-events-photography.mdx` |
| 6 | Wedding & Private Celebration Photography | ✅ **DONE** | `wedding-private-celebration-photography-perth.mdx` |
| 7 | **Corporate Portraits & Headshots: Elevating Your Perth Team** | ✅ **DONE** | `corporate-portraits-headshots-perth.mdx` |

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
| 5 | 360° Product Photography & Video (Update for `360 photographer` kw) | ✅ **DONE** | `360-product-photography-video-perth.mdx` |
| 6 | **360° Virtual Tours for Perth Venues & Real Estate** | ✅ **DONE** | `360-virtual-tours-perth-venues.mdx` |

---

### Pillar 6: Content Creation & Production (NEW - High Potential)

**Data Insight**: High search volume for "content creation perth" (933 imp), "content production perth" (714 imp), and "social media content creation" (158 imp). Current rankings are low (30-80), offering massive upside.

**New Blog Posts Needed** (4 recommended):

| # | Title | Target Keywords | Status | File |
|---|-------|-----------------|--------|------|
| 1 | **Content Creation Services Perth: Elevating Your Brand** | `content creation perth`, `perth content agency` | ✅ **DONE** | `content-creation-services-perth.mdx` |
| 2 | **Why Hire a Professional Content Creator in Perth?** | `content creator perth`, `hire content creator` | ✅ **DONE** | `why-hire-content-creator-perth.mdx` |
| 3 | **Social Media Content Production for Perth Businesses** | `content production perth`, `social media content` | ✅ **DONE** | `social-media-content-production-perth.mdx` |
| 4 | **Restaurant Photography Services: More Than Just Food** | `restaurant photography services`, `restaurant content` | ✅ **DONE** | `restaurant-photography-services-perth.mdx` |

#### Keyword Expansion (Similar Keywords Not in the Plan Yet)
Add/support these related “same-intent” terms via headings, FAQs, and dedicated sections (and new pages where needed):
- **Content creation**: `content creation services perth`, `content creation agency perth`, `creative content perth`, `social media content creator perth`
- **Content production**: `content production company perth`, `video content production perth`, `reels content creation perth`, `tiktok content creator perth`
- **Content marketing**: `content marketing perth`, `content strategy perth`, `content calendar template`, `social media content strategy`
- **Brand/commercial**: `brand photography perth`, `commercial photography perth`, `business photography perth`, `corporate photography perth`

---

## Suburb-Specific Content (GEO Enhancement)

| # | Suburb | Topic | Status | File |
|---|--------|-------|--------|------|
| 1 | **Fremantle** | Complete Digital Guide for Fremantle Cafés & Bars | ✅ **DONE** | `fremantle-hospitality-digital-guide.mdx` |
| 2 | Northbridge | Nightlife Marketing: Digital Strategies for Northbridge Bars | ✅ **DONE** | `northbridge-nightlife-marketing-digital-strategies.mdx` |
| 3 | Mount Lawley | Fine Dining Digital Presence Guide | ✅ **DONE** | `mount-lawley-fine-dining-digital-presence.mdx` |
| 4 | Leederville | Trendy Cafe Marketing on Oxford Street | ✅ **DONE** | `leederville-trendy-cafe-marketing-oxford-street.mdx` |
| 5 | Scarborough | Beachside Branding for Scarborough Venues | ✅ **DONE** | `scarborough-beachside-branding-venues.mdx` |
| 6 | Victoria Park | Multicultural Cuisine Marketing Guide | ✅ **DONE** | `victoria-park-multicultural-cuisine-marketing.mdx` |
| 7 | Subiaco | Premium Brand Building for Subiaco Hospitality | ✅ **DONE** | `subiaco-premium-brand-building-hospitality.mdx` |
| 8 | Joondalup | Growing Your Joondalup Venue Online | ✅ **DONE** | `joondalup-venue-growth-online-digital-strategy.mdx` |

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
20. ~~Wine & Beverage Photography for Swan Valley Wineries~~ ✅
21. ~~Charity event photography Perth~~ ✅
22. ~~Competitor analysis for Perth cafés~~ ✅
23. ~~Team Retreats & Staff Events Photography~~ ✅
24. ~~Dark & Moody Food Photography for Perth Bars~~ ✅
25. ~~Seasonal Menu Photography: Updating Images Quarterly~~ ✅
26. ~~Perth Restaurant Review Strategy~~ ✅
27. ~~Local Landing Pages for Perth Restaurants~~ ✅
28. ~~Wedding & Private Celebration Photography~~ ✅

### ✅ Completed (Priority 4 - Long-term & Suburbs)
29. ~~Northbridge Nightlife Marketing~~ ✅
30. ~~Mount Lawley Fine Dining Guide~~ ✅
31. ~~Leederville Trendy Cafe Marketing~~ ✅
32. ~~Scarborough Beachside Branding~~ ✅
33. ~~**Content Creation Services Perth** (High Priority based on data)~~ ✅
34. ~~**Why Hire a Professional Content Creator in Perth**~~ ✅
35. ~~Victoria Park Multicultural Cuisine Marketing~~ ✅
36. ~~Subiaco Premium Brand Building~~ ✅
37. ~~Joondalup Venue Growth~~ ✅

### Phase 0: URL Recovery + Cannibalisation Fixes (Highest Impact)
**Goal:** Ensure Google consistently ranks the best page for each high-impression intent, and that historic URLs in GSC resolve to the correct target.

| Item | Why it matters | Action |
|------|----------------|--------|
| `/perth-content-creation/` | High impressions historically; currently not a first-class service page | Create/restore as the canonical content creation landing page OR 301 → the chosen canonical (`/content-creator-perth/` or a new `/perth-content-creation/`). |
| `/content-creation/` | Currently redirected to `/` (loses relevance) | Change 301 target to the content creation canonical page. |
| `/perth-portrait-photography/` + `/portrait-photography/` | Queries show meaningful impressions for portrait intent | Create/restore a portrait/headshots landing page and 301 both legacy paths to it. |
| `/home-2/` + other legacy WP pages | Old URLs can still get impressions; 404/soft redirects waste crawl budget | 301 → the closest relevant page (usually `/`). |
| `/brand-story/` | Appears in GSC; likely legacy content | 301 → `/about/` (or the chosen “brand story” page). |
| Duplicate “service intent” URLs | Splits links/impressions across multiple targets | Decide a single canonical per intent; add 301s + canonical tags where appropriate. |

### Phase 1: Service Pages (Commercial Intent Coverage)
**Goal:** Win the highest-impression “money keywords” by aligning **one canonical page per intent**, then supporting it with internal links + blog posts.

| Canonical Target | Primary Keywords | Similar Keywords to Include (On-Page) |
|------------------|------------------|--------------------------------------|
| `/perth-content-creation/` (or chosen canonical) | `content creation perth`, `content creator perth` | `content creation services perth`, `social media content creation perth`, `content production perth`, `content marketing perth` |
| `/perth-food-photography/` | `food photography perth`, `food photographer perth` | `food photography packages`, `food photography agency`, `menu photography`, `food photography & videography` |
| `/perth-portrait-photography/` (or headshots page) | `portrait photography perth` | `corporate headshots perth`, `business headshots perth`, `team headshots`, `personal branding photography perth` |
| `/perth-product-photography/` | (product/packshot intent) | `packshot photography`, `ecommerce photography perth`, `product photoshoot perth`, `360 product photography` |

### Phase 2: Expanded Suburb Coverage (✅ Complete)
| # | Suburb | Topic | Status | File |
|---|--------|-------|--------|------|
| 1 | **Cottesloe** | Iconic Beachside Dining Strategy | ✅ **DONE** | `cottesloe-beachside-dining-marketing.mdx` |
| 2 | **Maylands** | Indie Cafe Marketing & Community Vibes | ✅ **DONE** | `maylands-indie-cafe-marketing.mdx` |
| 3 | **South Perth** | Riverside Dining & Selling the View | ✅ **DONE** | `south-perth-riverside-dining-views.mdx` |
| 4 | **Perth CBD** | Corporate & High-End CBD Dining | ✅ **DONE** | `perth-cbd-corporate-dining-marketing.mdx` |
| 5 | **Guildford** | Historic Pubs & Heritage Hospitality | ✅ **DONE** | `guildford-historic-pubs-heritage-hospitality.mdx` |
| 6 | **Applecross** | Jacaranda Season & Affluent Dining | ✅ **DONE** | `applecross-jacaranda-season-affluent-dining.mdx` |
| 7 | **Claremont** | Western Suburbs Premium Retail & Dining | ✅ **DONE** | `claremont-western-suburbs-premium-dining.mdx` |

### Phase 3: Technical Refinement & Long-Tail (Based on Deep Dive)
**Goal:** Push pages ranking 11-20 onto page 1 and capture "near me" intent.

#### A. Existing Page Optimization (Striking Distance)
These pages are ranking on Page 2 (Pos 11-20). Action: Refresh content, add internal links, update meta description. (Status: content updates completed 2025-12-19; internal linking + re-indexing remain where noted.)

| Page / Topic | Current Pos | Action Required |
|--------------|-------------|-----------------|
| `menu-engineering-decoy-dish-strategy-perth` | 11.6 | ✅ **DONE** (`menu-engineering-decoy-dish-strategy-perth.mdx`): Updated title to "Menu Engineering Perth: The Decoy Dish Strategy for Restaurants" and added a section on the "Shared Plates" trend common in Perth venues. Next: link from new food photography posts. |
| `skincare-beauty-product-photography-perth` | 10.5 | ✅ **DONE** (`skincare-beauty-product-photography-perth.mdx`): Added "cosmetic photography" to keywords and content to capture missing intent. Next: request re-index in GSC. |
| `roi-professional-food-photography-perth` | 10.0 | ✅ **DONE** (`roi-professional-food-photography-perth.mdx`): Updated title to "The ROI of Professional Food Photography in Perth: Is It Worth It?" and added a section on "The Hidden ROI of Social Media Content". |
| `how-to-build-pre-launch-landing-page-captures-emails` | 11.0 | ✅ **DONE** (`how-to-build-pre-launch-landing-page-captures-emails.mdx`): Changed title to "How to Build a High-Converting Coming Soon Page in Perth" and injected "coming soon page" keywords. |
| `fremantle-hospitality-digital-guide` | 12.0 | ✅ **DONE** (`fremantle-hospitality-digital-guide.mdx`): Added specific references to venues like Little Creatures and Bathers Beach House to strengthen local signals. |

#### B. New "Question & Answer" Content
Targeting specific informational queries found in data.

| # | Title | Target Keywords | Status | File |
|---|-------|-----------------|--------|------|
| 1 | **What is a Packshot? Product Photography Explained** | `what is a packshot`, `packshot vs lifestyle` | ✅ **DONE** | `what-is-a-packshot-product-photography.mdx` |
| 2 | **Why DIY Websites Fail for Perth Business** | `wix vs wordpress`, `diy website problems` | ✅ **DONE** | `why-diy-websites-fail-perth-business.mdx` |

#### C. "Near Me" & Local Intent Strategy (Invisible Implementation)
Data shows `food photography near me` (Pos 8) and `digital photography near me` (Pos 19).

**Strategy (No Visual Footer Changes):**
1.  **Expand `areaServed` Schema:** Update `BaseLayout.astro` to include a detailed list of suburbs in the JSON-LD schema (invisible to users, readable by Google).
    - ✅ **DONE** (`src/layouts/BaseLayout.astro`)
2.  **Create "Areas We Serve" Page:** A dedicated text-based page linked from the Sitemap or Contact page, listing all suburbs to capture specific location queries without cluttering the main design.
    - ✅ **DONE** (`src/pages/areas-we-serve.astro`)
3.  **Content Injection:** Subtly mention "Serving [Suburb]" in the intro/outro of existing service pages.
    - 🆕 Proposed

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
