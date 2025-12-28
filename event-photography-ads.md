# Perth Event Photography — Google Ads Campaign Plan (Copy/Paste)

## What You’re Promoting (service summary)

- Service: `Perth event photographer` for `corporate functions`, `conferences`, `brand activations`, `product launches`, `hospitality events`, plus select `private celebrations`.
- Style: `candid, story-driven` coverage with deliverables suitable for `websites` + `social media` (LinkedIn/Instagram/Facebook).
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

- `AU | Perth | Search | Event Photography`

## Landing Page URLs (use these in ads/assets)

- Primary landing page: `https://amplifycreativelab.com/perth-event-photography/`
- Contact page (primary lead form): `https://amplifycreativelab.com/contact/`
- Portfolio: `https://amplifycreativelab.com/portfolio/`
- FAQ: `https://amplifycreativelab.com/faq/`
- About: `https://amplifycreativelab.com/about/`

---

## Ad Group Structure + Keywords (copy/paste)

**Match type rule (simple):** start with **Phrase** (`"keyword"`) + **Exact** (`[keyword]`) only. Add Broad later only if you check search terms 2–3x/week and keep negatives tight.

### Ad Group 1 — `Event Photographer Perth` (core intent)

```
"event photographer perth"
"perth event photographer"
"event photography perth"
"event photographer near me"
[event photographer perth]
[event photography perth]
```

### Ad Group 2 — `Corporate Events`

```
"corporate event photographer perth"
"corporate event photography perth"
"company event photographer perth"
"corporate function photographer"
"corporate function photography"
[corporate event photographer perth]
[corporate event photography perth]
```

### Ad Group 3 — `Conferences & Functions`

```
"conference photographer perth"
"conference photography perth"
"conference event photographer"
"awards night photographer perth"
"gala event photographer perth"
[conference photographer perth]
[conference photography perth]
```

### Ad Group 4 — `Brand Activations & Launches`

```
"brand activation photographer"
"brand activation photographer perth"
"brand activation photography"
"product launch photographer perth"
"launch event photographer perth"
"marketing event photographer perth"
[brand activation photographer perth]
[product launch photographer perth]
```

### Ad Group 5 — `Hospitality Events`

```
"hospitality event photographer"
"hospitality event photographer perth"
"restaurant event photographer"
"venue event photographer perth"
"bar event photographer perth"
[hospitality event photographer perth]
[venue event photographer perth]
```

### Optional Ad Group 6 — `Private Celebrations` (only if you want these leads)

```
"party photographer perth"
"birthday photographer perth"
"private event photographer perth"
[party photographer perth]
[private event photographer perth]
```

---

## Negative Keywords (copy/paste “Day 1” list)

Create a **Shared Negative Keyword List**: Google Ads → **Tools** → **Shared library** → **Negative keyword lists** → `Event - Common Negatives` → apply to this campaign.

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

photo booth
photobooth
videographer
video

free
cheap
cheapest
```

If you **do not** want weddings, add these too:

```
wedding
weddings
bridal
bride
groom
engagement
```

If you **only** want corporate/brand/hospitality (no private parties), add these too:

```
birthday
18th
21st
30th
40th
50th
kids
```

---

## Responsive Search Ads (RSAs) — copy/paste assets

Make **1 RSA per ad group** at launch (2 if you want extra testing).

### RSA Template A (corporate + brand + hospitality)

- Final URL: `https://amplifycreativelab.com/perth-event-photography/`
- Path 1: `event`
- Path 2: `photography`

Headlines (paste up to 15):

```
Perth Event Photographer
Corporate Event Photography
Conference Photography Perth
Brand Activation Photos
Product Launch Photographer
Hospitality Event Coverage
Candid Story-Driven Style
Intro Rate $200/hr
On-Site Coverage In Perth
Fast Gallery Delivery
Web & Social Files Included
Photos For LinkedIn & PR
Capture Key Moments
Get A Custom Quote
Amplify Creative Lab
```

Descriptions (paste 4):

```
Candid event photography in Perth for corporate functions, venues and launches.
First booking $200/hr. Professional coverage with a fast, easy booking process.
Receive a curated gallery plus web-ready files for LinkedIn, Instagram and web.
Perth metro coverage. Travel to Swan Valley or regional WA available by quote.
```

### RSA Template B (conference-specific angle)

Use this in the `Conferences & Functions` ad group (swap in 5 headlines below).

```
Conference Photographer Perth
Speaker & Stage Coverage
Crowd & Networking Photos
Branding & Detail Shots
Fast Turnaround Options
```

---

## Ad Assets (Extensions) — copy/paste ready

Add at **Campaign level**: Google Ads → **Assets** → **+**.

### Sitelinks (add 6)

Sitelink 1

- Text: `Event Photography Perth`
- Desc 1: `Corporate, brand, venues`
- Desc 2: `Candid story-driven style`
- URL: `https://amplifycreativelab.com/perth-event-photography/`

Sitelink 2

- Text: `Get A Quote`
- Desc 1: `Tell us date + venue`
- Desc 2: `Reply in 1 business day`
- URL: `https://amplifycreativelab.com/contact/`

Sitelink 3

- Text: `View Our Portfolio`
- Desc 1: `Food, product & events`
- Desc 2: `See real client work`
- URL: `https://amplifycreativelab.com/portfolio/`

Sitelink 4

- Text: `About Us`
- Desc 1: `Meet the studio team`
- Desc 2: `Perth-based creators`
- URL: `https://amplifycreativelab.com/about/`

Sitelink 5

- Text: `FAQ`
- Desc 1: `Booking + deliverables`
- Desc 2: `Usage/licensing info`
- URL: `https://amplifycreativelab.com/faq/`

Sitelink 6

- Text: `Food Photography`
- Desc 1: `Menus + delivery apps`
- Desc 2: `Hospitality specialists`
- URL: `https://amplifycreativelab.com/perth-food-photography/`

### Callouts (add 8)

Keep each callout short (≤ 25 characters).

```
Intro Rate $200/hr
Perth Metro Coverage
Corporate & Brand Events
Hospitality Specialists
Candid Storytelling
Fast Gallery Delivery
Web & Social Exports
Easy Booking Process
```

### Structured snippet (add 1)

- Header: `Types`
- Values (paste as separate items):

```
Corporate Functions
Conferences
Brand Activations
Product Launches
Hospitality Events
Private Celebrations
```

### Call asset (phone)

- Number: `+61 460 526 441`
- Turn on **Call reporting**
- Conversion: count calls ≥ `60s` (optional but recommended)

### Location asset

- Link your Google Business Profile and enable **Location asset** (adds trust for local searches).

### Image assets (recommended)

Upload a mix of `1.91:1` (landscape) and `1:1` (square). Suggested themes:

- Speaker on stage (clean composition)
- Networking/candid moments
- Branding/signage/detail shots
- Venue atmosphere
- Team/group photos (professional)
- Awards/presentations

---

## Tracking (UTM) — copy/paste

Set at **Campaign** level: **Campaign settings → Additional settings → Campaign URL options**

- Final URL suffix:

```
utm_source=google&utm_medium=cpc&utm_campaign=event_photography_search&utm_term={keyword}&utm_content={adgroupid}-{creative}
```

---

## Launch Checklist (don’t skip)

- Conversion is **Primary** and you’ve tested a real submission → `/thank-you/` loads
- Display Network is **OFF**
- Location option is **Presence** (in/regularly in Perth)
- At least **4 sitelinks** + **6 callouts** + **1 structured snippet**
- Search terms checked after 48–72 hours (add negatives immediately)
- After ~2 weeks: split out high-volume themes into new ad groups (e.g. “Conference” vs “Brand Activation”)

