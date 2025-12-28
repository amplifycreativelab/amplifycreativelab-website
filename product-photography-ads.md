# Perth Product Photography — Google Ads Campaign Plan (Copy/Paste)

## What You’re Promoting (service summary)

- Service: `Perth product photographer` specialising in `studio packshots` and `lifestyle product photography` for ecommerce + retail brands.
- Good-fit products mentioned on your site: `food & beverage`, `skincare`, `candles`, `gift products`, `homewares`, packaged goods.
- Platforms mentioned on your site: `Shopify`, `WooCommerce`, `Amazon`, `Etsy`.
- Convenience hook: `Ship & Shoot` (mail products to the Doubleview studio; shoot + return).
- Pricing hook used on your site: `Intro rate $200/hr` for the first booking (site notes typical market $250–$500/hr).
- Primary CTA path: Service page → `/contact/` form → `/thank-you/` (conversion event fires on thank-you).

## Before You Build the Campaign (do this first)

### 1) Turn off auto-applied changes (important for beginners)

- Google Ads → **Tools (wrench)** → **Setup** → **Recommendations (Auto-apply)** → turn **OFF** anything that auto-expands keywords/targeting/budgets.

### 2) Confirm tracking is ready (so Google can optimize for leads)

- Google Ads tag is present site-wide: `AW-17539052212`.
- Thank-you page fires event: `conversion_event_submit_lead_form_2`.
- Quick test: submit the form once → confirm `/thank-you/` loads → verify the event using **Google Tag Assistant** or **GA4 DebugView**.

### 3) Choose ONE conversion method (avoid double-counting)

- **Beginner-easiest (no code): GA4 import**
  - GA4 → **Admin** → **Events** → find `conversion_event_submit_lead_form_2` → mark as **Conversion / Key event**
  - Google Ads → **Goals (trophy)** → **Conversions** → **New conversion action** → **Import** → **Google Analytics 4 (web)** → select that event → **Import**
- **Best for fastest Google Ads bidding feedback (requires conversion label): direct Google Ads conversion**
  - Google Ads → **Goals → Conversions → New conversion action → Website → Submit lead form**
  - Add event snippet on `/thank-you/` with `send_to: 'AW-.../LABEL'`

---

## Campaign Build (Search campaign for leads)

### 1) New campaign

- Google Ads → **+ New campaign**
- Objective: **Leads**
- Campaign type: **Search**
- Conversions: select your **lead** conversion (make sure it’s **Primary**)

### 2) Networks (important)

- **Search Network:** ON
- **Display Network:** OFF
- **Search Partners:** Optional (beginner-safe choice: start OFF, then test later)

### 3) Locations (Perth-focused, beginner-safe)

- Target: `Perth, Western Australia` (or a radius around `Doubleview WA 6018`)
- Location options:
  - Target = **Presence**: “People in or regularly in your targeted locations”

### 4) Language

- English

### 5) Bidding

- If conversions are recording: **Maximize Conversions**
- If not reliably recording yet: **Maximize Clicks** with a CPC cap (temporary), then switch to **Maximize Conversions**

### 6) Budget (starter)

- Conservative starter: `A$20–A$60/day` for 7–14 days (adjust after you see CPC + conversion rate)

### 7) Campaign name (copy/paste)

- `AU | Perth | Search | Product Photography`

## Landing Page URLs (use these in ads/assets)

- Primary landing page: `https://amplifycreativelab.com/perth-product-photography/`
- Contact page (primary lead form): `https://amplifycreativelab.com/contact/`
- Portfolio: `https://amplifycreativelab.com/portfolio/`
- FAQ: `https://amplifycreativelab.com/faq/`
- About: `https://amplifycreativelab.com/about/`

---

## Ad Group Structure + Keywords (copy/paste)

**Match type rule (simple):** start with **Phrase** (`"keyword"`) + **Exact** (`[keyword]`) only. Add Broad later only if you check search terms 2–3x/week and keep negatives tight.

### Ad Group 1 — `Product Photographer Perth` (core intent)

```
"product photographer perth"
"perth product photographer"
"product photography perth"
"product photographer near me"
"commercial product photographer"
[product photographer perth]
[product photography perth]
[commercial product photographer]
```

### Ad Group 2 — `Ecommerce Product Photos` (Shopify/WooCommerce)

```
"ecommerce product photography"
"ecommerce product photographer"
"product photos for ecommerce"
"shopify product photography"
"shopify product photographer"
"woocommerce product photography"
"online store product photos"
[ecommerce product photography]
[shopify product photographer]
[woocommerce product photography]
```

### Ad Group 3 — `Packshots / White Background`

```
"packshot photography perth"
"packshot photographer perth"
"white background product photos"
"clean product photos"
"catalogue product photography"
"catalogue product photographer"
"studio product photography perth"
[packshot photography perth]
[white background product photos]
[studio product photography perth]
```

### Ad Group 4 — `Lifestyle Product Photography` (styled scenes)

```
"lifestyle product photography"
"lifestyle product photography perth"
"styled product photography"
"creative product photography perth"
"brand product photography"
[lifestyle product photography perth]
[styled product photography]
```

### Ad Group 5 — `Ship & Shoot` (mail-in)

```
"ship and shoot product photography"
"mail in product photography"
"send products to photographer"
"remote product photography"
[ship and shoot product photography]
[mail in product photography]
```

### Optional Ad Group 6 — `Amazon / Etsy`

```
"amazon product photography"
"etsy product photography"
"marketplace product photos"
[amazon product photography]
[etsy product photography]
```

---

## Negative Keywords (copy/paste “Day 1” list)

Create a **Shared Negative Keyword List**: Google Ads → **Tools** → **Shared library** → **Negative keyword lists** → `Product - Common Negatives` → apply to this campaign.

Paste (one per line):

```
job
jobs
career
careers
hiring
salary
internship
resume
cv
course
courses
class
classes
training
tutorial
tutorials
how to
diy

camera
cameras
lens
lenses
tripod
lightroom
photoshop
editing
editor
presets

passport
passport photo
id photo
headshot
headshots
portrait
portraits
family
newborn
maternity
wedding
weddings

printing
print
prints
photo printing
framing
frame
frames

free
cheap
cheapest
```

Note: if you accept budget leads, remove `cheap/cheapest/free`.

---

## Responsive Search Ads (RSAs) — copy/paste assets

Make **1 RSA per ad group** at launch (2 if you want extra testing).

### RSA Template A (ecommerce + packshots + ship & shoot)

- Final URL: `https://amplifycreativelab.com/perth-product-photography/`
- Path 1: `product`
- Path 2: `photography`

Headlines (paste up to 15):

```
Perth Product Photographer
Ecommerce Product Photos
Packshots On White
Lifestyle Product Photos
Ship & Shoot Available
Doubleview Studio Perth
Intro Rate $200/hr
Shopify-Ready Images
WooCommerce Photo Sets
Amazon & Etsy Photos
Clean Retouched Images
Consistent Catalogue Sets
Food & Beverage Products
Skincare & Candle Photos
Get A Fast Quote
```

Descriptions (paste 4):

```
Studio + lifestyle product photography in Perth for ecommerce, retail & campaigns.
First booking $200/hr. Clean packshots or styled scenes that match your brand.
Ship & Shoot: mail products to our Doubleview studio. We shoot and return safely.
Files delivered for web + print. Shopify, WooCommerce, Amazon, Etsy-ready formats.
```

### RSA Template B (packshot-specific angle)

Use this in the `Packshots / White Background` ad group (swap in 5 headlines below).

```
White Background Packshots
Clean Consistent Images
Catalogue Photography
Studio Lighting & Styling
Perfect For Online Stores
```

---

## Ad Assets (Extensions) — copy/paste ready

Add at **Campaign level**: Google Ads → **Assets** → **+**.

### Sitelinks (add 6)

Sitelink 1

- Text: `Product Photography Perth`
- Desc 1: `Packshots + lifestyle`
- Desc 2: `Ecommerce-ready files`
- URL: `https://amplifycreativelab.com/perth-product-photography/`

Sitelink 2

- Text: `Ship & Shoot`
- Desc 1: `Mail products to our studio`
- Desc 2: `We shoot and return safely`
- URL: `https://amplifycreativelab.com/perth-product-photography/`

Sitelink 3

- Text: `Get A Quote`
- Desc 1: `Tell us your products`
- Desc 2: `Reply in 1 business day`
- URL: `https://amplifycreativelab.com/contact/`

Sitelink 4

- Text: `View Our Portfolio`
- Desc 1: `Food, product & events`
- Desc 2: `See real client work`
- URL: `https://amplifycreativelab.com/portfolio/`

Sitelink 5

- Text: `FAQ`
- Desc 1: `Booking + deliverables`
- Desc 2: `Usage/licensing info`
- URL: `https://amplifycreativelab.com/faq/`

Sitelink 6

- Text: `About Us`
- Desc 1: `Meet the studio team`
- Desc 2: `Perth-based creators`
- URL: `https://amplifycreativelab.com/about/`

### Callouts (add 8)

Keep each callout short (≤ 25 characters).

```
Intro Rate $200/hr
Doubleview Studio
Ship & Shoot Available
Packshots On White
Styled Lifestyle Sets
Retouching Included
Ecommerce Ready Files
Web & Print Exports
```

### Structured snippet (add 1)

- Header: `Services`
- Values (paste as separate items):

```
Packshots
Lifestyle Photos
Catalogue Sets
Ecommerce Images
Styled Scenes
Marketplace Photos
```

### Call asset (phone)

- Number: `+61 460 526 441`
- Turn on **Call reporting**
- Conversion: count calls ≥ `60s` (optional but recommended)

### Location asset

- Link your Google Business Profile and enable **Location asset** (adds trust for local searches).

### Image assets (recommended)

Upload a mix of `1.91:1` (landscape) and `1:1` (square). Suggested themes:

- White background packshots (clean shadows, consistent angle)
- Lifestyle scene (product in-use / gifting / tabletop)
- Flat-lays (multiple SKUs)
- Bottles/jars (skincare, beverages)
- Detail crops (labels, texture, ingredients)
- Group shots (range / bundles / hampers)

---

## Tracking (UTM) — copy/paste

Set at **Campaign** level: **Campaign settings → Additional settings → Campaign URL options**

- Final URL suffix:

```
utm_source=google&utm_medium=cpc&utm_campaign=product_photography_search&utm_term={keyword}&utm_content={adgroupid}-{creative}
```

---

## Launch Checklist (don’t skip)

- Conversion is **Primary** and you’ve tested a real submission → `/thank-you/` loads
- Display Network is **OFF**
- Location option is **Presence** (in/regularly in Perth)
- At least **4 sitelinks** + **6 callouts** + **1 structured snippet**
- Search terms checked after 48–72 hours (add negatives immediately)
- After ~2 weeks: review CPA + top queries; expand into Broad match only if search terms are clean

