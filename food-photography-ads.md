# Perth Food Photography — Google Ads Campaign Plan (Copy/Paste)

## What You’re Promoting (service summary)

- Service: `Perth food photographer` for `restaurant menus`, `websites`, `social media`, and delivery platforms like `Uber Eats`, `DoorDash`, `Deliveroo`.
- Typical workflow: on-location shoots at restaurants/cafes/bars across Perth metro (lighting brought to venue).
- Pricing hook used on your site: `Intro rate $200/hr` for the first booking (site notes typical market $250–$500/hr).
- Primary CTA path: Service page → `/contact/` form → `/thank-you/` (conversion event fires on thank-you).

## Before You Build the Campaign (do this first)

### 1) Turn off auto-applied changes (important for beginners)

- Google Ads → **Tools (wrench)** → **Setup** → **Recommendations (Auto-apply)** → turn **OFF** anything that auto-expands keywords/targeting/budgets.

### 2) Confirm tracking is ready (so Google can optimize for leads)

- Google Ads tag is present site-wide: `AW-17539052212` (see `src/layouts/PromoLayout.astro`).
- Thank-you page fires event: `conversion_event_submit_lead_form_2` (see `src/pages/thank-you.astro`).
- Quick test: submit the form once → confirm `/thank-you/` loads → verify the event using **Google Tag Assistant** or **GA4 DebugView**.

### 3) Choose ONE conversion method (avoid double-counting)

- **Beginner-easiest (no code): GA4 import**
  - GA4 → **Admin** → **Events** → find `conversion_event_submit_lead_form_2` → mark as **Conversion / Key event**
  - Google Ads → **Goals (trophy)** → **Conversions** → **New conversion action** → **Import** → **Google Analytics 4 (web)** → select that event → **Import**
- **Best for fastest Google Ads bidding feedback (requires conversion label): direct Google Ads conversion**
  - Google Ads → **Goals → Conversions → New conversion action → Website → Submit lead form**
  - After saving, Google gives `Conversion ID / Label`
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
  - Exclusion = keep default

### 4) Language

- English

### 5) Bidding

- If conversions are recording: **Maximize Conversions**
- If not reliably recording yet: **Maximize Clicks** with a CPC cap (temporary), then switch to **Maximize Conversions**

### 6) Budget (starter)

- Conservative starter: `A$20–A$60/day` for 7–14 days (adjust after you see CPC + conversion rate)

### 7) Campaign name (copy/paste)

- `AU | Perth | Search | Food Photography`

## Landing Page URLs (use these in ads/assets)

- Primary landing page: `https://amplifycreativelab.com/perth-food-photography/`
- Contact page (primary lead form): `https://amplifycreativelab.com/contact/`
- Portfolio: `https://amplifycreativelab.com/portfolio/`
- FAQ: `https://amplifycreativelab.com/faq/`
- Blog (prep guide): `https://amplifycreativelab.com/blog/how-to-prepare-your-kitchen-for-a-successful-food-shoot/`
- Blog (delivery sales): `https://amplifycreativelab.com/blog/uber-eats-vs-direct-ordering-how-photography-impacts-commission-costs/`
- Blog (menu engineering): `https://amplifycreativelab.com/blog/menu-engineering-how-photography-boosts-dish-sales/`

---

## Ad Group Structure + Keywords (copy/paste)

**Match type rule (simple):** start with **Phrase** (`"keyword"`) + **Exact** (`[keyword]`) only. Add Broad later only if you check search terms 2–3x/week and keep negatives tight.

### Ad Group 1 — `Food Photographer Perth` (core intent)

Paste keywords (one per line):

```
"perth food photographer"
"food photographer perth"
"food photography perth"
"food photographer near me"
"restaurant food photographer"
"commercial food photographer"
[perth food photographer]
[food photographer perth]
[food photography perth]
[commercial food photographer]
```

### Ad Group 2 — `Menu Photography` (menu + website)

```
"menu photography perth"
"restaurant menu photography"
"menu photos perth"
"menu photography"
"restaurant menu photos"
"cafe menu photos"
[menu photography perth]
[restaurant menu photography]
[menu photos perth]
```

### Ad Group 3 — `Hospitality Venues` (restaurants/cafes/bars)

```
"restaurant photographer perth"
"cafe photographer perth"
"bar photographer perth"
"hospitality photographer perth"
"restaurant photography perth"
"cafe photography perth"
"bar photography perth"
[restaurant photographer perth]
[cafe photographer perth]
[bar photographer perth]
[hospitality photographer perth]
```

### Ad Group 4 — `Delivery Apps` (Uber Eats / DoorDash / Deliveroo)

```
"uber eats photography"
"ubereats photography"
"uber eats food photos"
"doordash food photos"
"doordash photography"
"deliveroo food photos"
"food photography for delivery apps"
"delivery app menu photos"
"uber eats menu photos"
[uber eats photography]
[uber eats food photos]
[food photography for delivery apps]
```

### Ad Group 5 — `Ongoing Updates` (seasonal / recurring shoots)

```
"seasonal menu photography"
"menu update photography"
"monthly menu photos"
"quarterly menu photos"
"ongoing food photography"
[seasonal menu photography]
[menu update photography]
```

---

## Negative Keywords (copy/paste “Day 1” list)

Create a **Shared Negative Keyword List**: Google Ads → **Tools** → **Shared library** → **Negative keyword lists** → `Food - Common Negatives` → apply to this campaign.

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
recipe
recipes
cooking
cookbook
book
books
free images
free photos
stock
stock photos
download
pdf

camera
cameras
lens
lenses
tripod
lighting kit
lightroom
photoshop
editing
editor
presets

wedding
weddings
engagement
newborn
maternity
family
portrait
portraits
headshot
headshots

cheap
cheapest
free
```

Note: if you *do* want “budget” leads, remove `cheap/cheapest/free`. If you want only hospitality/commercial leads, keep them.

---

## Responsive Search Ads (RSAs) — copy/paste assets

Make **1 RSA per ad group** at launch (2 if you want extra testing).

### RSA Template A (core service + platforms)

- Final URL: `https://amplifycreativelab.com/perth-food-photography/`
- Path 1: `food`
- Path 2: `photography`

Headlines (paste up to 15):

```
Perth Food Photographer
Menu Photography Perth
Restaurant Photo Shoots
Cafe & Bar Photography
Photos For Uber Eats
DoorDash & Deliveroo
Intro Rate $200/hr
On-Location In Perth
Lighting Help Included
Consistent Menu Images
Boost Orders Online
Web & Print Files Included
Seasonal Menu Updates
Get A Fast Quote
Amplify Creative Lab
```

Descriptions (paste 4):

```
Premium food photos for Perth venues. Menus, socials & delivery apps. Get a quote.
First booking $200/hr. We bring lighting to your venue and keep the shoot efficient.
Optimised exports for Uber Eats, DoorDash & Deliveroo. Clean, consistent imagery.
Receive a curated gallery of edited photos plus web-ready files for fast posting.
```

### RSA Template B (venue-focused angle)

Use this in the `Hospitality Venues` ad group (swap in 5 headlines below).

```
Restaurant Photographer Perth
Cafe Photographer Perth
Bar Photography Perth
Hospitality Specialists
Designed To Increase Orders
```

---

## Ad Assets (Extensions) — copy/paste ready

Add at **Campaign level**: Google Ads → **Assets** → **+**.

### Sitelinks (add 6)

Sitelink 1

- Text: `Food Photography Perth`
- Desc 1: `Menus, socials, delivery apps`
- Desc 2: `Perth venue shoots`
- URL: `https://amplifycreativelab.com/perth-food-photography/`

Sitelink 2

- Text: `Get A Quote`
- Desc 1: `Tell us your venue + menu`
- Desc 2: `Reply in 1 business day`
- URL: `https://amplifycreativelab.com/contact/`

Sitelink 3

- Text: `View Our Portfolio`
- Desc 1: `Food, product & events`
- Desc 2: `See real client work`
- URL: `https://amplifycreativelab.com/portfolio/`

Sitelink 4

- Text: `Food Shoot Prep Guide`
- Desc 1: `Kitchen checklist + timing`
- Desc 2: `Make shoot day smooth`
- URL: `https://amplifycreativelab.com/blog/how-to-prepare-your-kitchen-for-a-successful-food-shoot/`

Sitelink 5

- Text: `Delivery Platform Guide`
- Desc 1: `Uber Eats photo impact`
- Desc 2: `Boost online orders`
- URL: `https://amplifycreativelab.com/blog/uber-eats-vs-direct-ordering-how-photography-impacts-commission-costs/`

Sitelink 6

- Text: `Menu Engineering Guide`
- Desc 1: `Photos that sell dishes`
- Desc 2: `Turn views into orders`
- URL: `https://amplifycreativelab.com/blog/menu-engineering-how-photography-boosts-dish-sales/`

### Callouts (add 8)

Keep each callout short (≤ 25 characters).

```
Intro Rate $200/hr
Perth Metro Coverage
On-Location Shoots
Hospitality Specialists
Delivery App Optimised
Edited Files Included
Web & Print Exports
Seasonal Menu Updates
```

### Structured snippet (add 1)

- Header: `Services`
- Values (paste as separate items):

```
Menu Photos
Delivery App Photos
Social Media Photos
Hero Dish Photos
Venue Atmosphere
Drinks & Cocktails
```

### Call asset (phone)

- Number: `+61 460 526 441`
- Turn on **Call reporting**
- Conversion: count calls ≥ `60s` (optional but recommended)

### Location asset

- Link your Google Business Profile and enable **Location asset** (adds trust for local searches).

### Image assets (recommended)

Upload a mix of `1.91:1` (landscape) and `1:1` (square). Suggested themes:

- Hero dish close-ups (high contrast, appetising)
- Flat-lays / table spreads
- Drinks/cocktails
- Venue atmosphere (busy service, ambience)
- Detail shots (hands plating, steam, texture)
- Delivery-platform style crops (tight, clear framing)

---

## Tracking (UTM) — copy/paste

Set at **Campaign** level: **Campaign settings → Additional settings → Campaign URL options**

- Final URL suffix:

```
utm_source=google&utm_medium=cpc&utm_campaign=food_photography_search&utm_term={keyword}&utm_content={adgroupid}-{creative}
```

---

## Launch Checklist (don’t skip)

- Conversion is **Primary** and you’ve tested a real submission → `/thank-you/` loads
- Display Network is **OFF**
- Location option is **Presence** (in/regularly in Perth)
- At least **4 sitelinks** + **6 callouts** + **1 structured snippet**
- Search terms checked after 48–72 hours (add negatives immediately)
- After ~2 weeks: review CPA + search terms, then expand keywords or test Search Partners

