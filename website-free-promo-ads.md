# Free Website Promo — Google Ads Campaign Plan (Copy/Paste)

## What You’re Promoting (offer summary)

- Offer: “Professional $0 upfront website design” + ongoing plan `$60/month` (hosting, maintenance, support), `12‑month minimum`, “You own the domain”.
- Primary CTA path: Promo page → `/contact/` form → `/thank-you/` (Netlify form posts to `/thank-you/`).

## Before You Build the Campaign (do this first)

### 1) Turn off auto-applied changes (important for beginners)

- Google Ads → **Tools (wrench)** → **Setup** → **Recommendations (Auto-apply)** → turn **OFF** anything that auto-expands keywords/targeting/budgets.

### 2) Confirm tracking is ready (so Google can optimize for leads)

- Your site already has Google Ads tag `AW-17539052212` in `src/layouts/PromoLayout.astro`.
- Your thank-you page already fires an event: `conversion_event_submit_lead_form_2` in `src/pages/thank-you.astro`.
- Quick test (recommended): open the site + submit the contact form once → confirm `/thank-you/` loads → use **Google Tag Assistant** / GA4 DebugView to verify the event fires.

### 3) Choose ONE conversion method (avoid double-counting)

- **Beginner-easiest (no code): GA4 import**
  - GA4 → **Admin** → **Events** → find `conversion_event_submit_lead_form_2` → mark as **Conversion / Key event**
  - Google Ads → **Goals (trophy)** → **Conversions** → **New conversion action** → **Import** → **Google Analytics 4 (web)** → select that event → **Import**
- **Best for fastest Google Ads bidding feedback (requires conversion label): direct Google Ads conversion**
  - Google Ads → **Goals → Conversions → New conversion action → Website → Submit lead form**
  - After saving, Google gives `Conversion ID / Label`
  - Add event snippet on `/thank-you/` (I can implement this for you if you want)

## Campaign Build (Search campaign for leads)

Create **one Search campaign** dedicated to this promo (keeps budgets + messaging clean).

### 1) New campaign

- Google Ads → **+ New campaign**
- Objective: **Leads**
- Campaign type: **Search**
- Conversions: select your **lead** conversion (form submit / imported GA4 event). Make sure it’s **Primary**.

### 2) Networks

- **Search Network:** ON
- **Display Network:** OFF (avoid banner traffic diluting budget)

### 3) Locations (Perth-focused, beginner-safe)

- Target: `Perth, Western Australia` (or radius around `Doubleview WA 6018`)
- Location options: set **Presence** = “People in or regularly in your targeted locations” (prevents Sydney users searching “Perth web design” from seeing ads)

### 4) Language

- English

### 5) Bidding

- If conversions are recording: **Maximize Conversions**
- If not reliably recording yet: **Maximize Clicks** with a CPC cap (temporary), then switch to **Maximize Conversions** once tracking is confirmed

### 6) Budget (starter)

- Conservative starter: `A$20–A$50/day` for 7–14 days (adjust after you see CPC + conversion rate)

### 7) Campaign name (copy/paste)

- `AU | Perth | Search | Free Website Promo`

## Landing Page URLs (use these in ads/assets)

- Primary landing page (likely): `https://amplifycreativelab.com/free-website-promo/`
- Contact page: `https://amplifycreativelab.com/contact/`
- Thank-you page (conversion): `https://amplifycreativelab.com/thank-you/`
- Privacy policy (for lead form asset): `https://amplifycreativelab.com/privacy/`

---

## Ad Group Structure + Keywords (copy/paste)

**Match type rule (simple):** start with **Phrase** (`"keyword"`) + **Exact** (`[keyword]`) only. Add Broad later only if you can manage search terms + negatives.

### Ad Group 1 — `No Upfront / Free Website`

Paste keywords (one per line):

```
"free website design perth"
"no upfront website design"
"no upfront web design"
"website design no upfront cost"
"website design payment plan"
"pay monthly website design"
"monthly website design perth"
"subscription web design"
"website design subscription"
"affordable web design perth"
[free website design perth]
[no upfront website design]
[no upfront web design]
[website design payment plan]
[pay monthly website design]
[subscription web design]
```

### Ad Group 2 — `Web Design Perth`

```
"website design perth"
"web design perth"
"web designer perth"
"perth web designer"
"web design agency perth"
"website development perth"
"website developer perth"
"custom website perth"
"small business web design perth"
[website design perth]
[web design perth]
[web designer perth]
[website development perth]
[website developer perth]
```

### Ad Group 3 — `Small Business Websites`

```
"small business website design"
"small business web design"
"business website design"
"local business website design"
"website design for small business"
"professional business website"
"service business website design"
[small business website design]
[business website design]
[website design for small business]
```

### Ad Group 4 — `Hospitality (Restaurants/Cafes)`

(Your page explicitly mentions restaurants/cafes + menu updates.)

```
"restaurant website design perth"
"cafe website design perth"
"hospitality website design perth"
"menu website design"
"restaurant web design"
"cafe web design"
[restaurant website design perth]
[cafe website design perth]
[hospitality website design perth]
```

### Ad Group 5 — `Tradies & Local Services`

(Your page explicitly mentions tradies + portfolio sites.)

```
"tradie website design"
"tradie website design perth"
"plumber website design perth"
"electrician website design perth"
"builder website design perth"
"local service website design"
"trade business website"
[tradie website design perth]
[plumber website design perth]
[electrician website design perth]
```

---

## Negative Keywords (copy/paste “Day 1” list)

Create a **Shared Negative Keyword List**: Google Ads → **Tools** → **Shared library** → **Negative keyword lists** → `Common Negatives` → apply to this campaign.

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
certificate
certification
tutorial
tutorials
how to
diy
template
templates
theme
themes
free template
free templates
free theme
free themes
builder
website builder
wix
squarespace
wordpress theme
elementor
plugin
plugins
woocommerce
shopify
shopify store
ecommerce
e-commerce
online store
shopping cart
hosting free
free hosting
github
download
pdf
```

Optional negatives **only if you see junk traffic** (don’t add blindly):

```
cheap
cheapest
```

---

## Responsive Search Ads (RSAs) — copy/paste assets

Make **1 RSA per ad group** at launch (2 if you want extra testing). Use **no more than 1–2 pins**.

### RSA Template A (Offer-focused) — use in every ad group

- Final URL: `https://amplifycreativelab.com/free-website-promo/`
- Path 1: `free-website`
- Path 2: `perth`

Headlines (paste up to 15):

```
Free Website Design $0
No Upfront Website Costs
Perth Web Design Studio
Custom Mobile-First Sites
$60/Month Hosting & Care
Limited Spots Available
Fast Secure Website Hosting
Monthly Content Updates
You Own Your Domain
Modern Non-WordPress Site
Built For Local Businesses
Restaurants, Tradies & More
Get Your Website Started
See Examples Of Our Work
Amplify Creative Lab Perth
```

Descriptions (paste 4):

```
Get a custom website with $0 upfront. $60/mo hosting, updates & support. Perth-based.
Limited-time offer for Perth businesses. Mobile-first design built for conversions. Apply now.
Skip the $3,000 upfront fee. Modern, secure website. Cancel anytime after 12 months.
Restaurants, tradies & services. You own your domain. Enquire in 2 minutes.
```

### RSA Template B (Ad-group keyword mirror) — swap in 3–5 headlines per ad group

For each ad group, add these headlines (keep the rest from Template A):

#### No Upfront / Free Website

```
No Upfront Web Design
Pay Monthly Website Design
$0 Upfront, Just $60/mo
Website Design Payment Plan
Free Upfront Design Offer
```

#### Web Design Perth

```
Website Design Perth
Web Designer Perth
Web Design Agency Perth
Custom Websites In Perth
Perth Website Development
```

#### Small Business Websites

```
Small Business Websites
Website For Small Business
Professional Business Site
High-Trust Website Design
Modern Business Websites
```

#### Hospitality

```
Restaurant Website Design
Cafe Website Design
Menu Updates Included
Websites For Hospitality
Built For Venue Bookings
```

#### Tradies

```
Tradie Website Design
Websites For Tradies
Portfolio Sites That Convert
High-Trust Service Websites
Get More Local Leads
```

---

## Ad Assets (Extensions) — copy/paste ready

Add at **Campaign level**: Google Ads → **Assets** → **+**.

### Sitelinks (add 6)

Sitelink 1

- Text: `Free Website Offer`
- Desc 1: `See $0 upfront website design`
- Desc 2: `Just $60/mo hosting & support`
- URL: `https://amplifycreativelab.com/free-website-promo/`

Sitelink 2

- Text: `Apply Now`
- Desc 1: `Secure a spot for the offer`
- Desc 2: `Fast response within 1 day`
- URL: `https://amplifycreativelab.com/contact/`

Sitelink 3

- Text: `Our Portfolio`
- Desc 1: `See real client work`
- Desc 2: `Websites built for conversion`
- URL: `https://amplifycreativelab.com/portfolio/`

Sitelink 4

- Text: `Website Development`
- Desc 1: `How we build fast websites`
- Desc 2: `Modern, SEO-friendly builds`
- URL: `https://amplifycreativelab.com/perth-website-development/`

Sitelink 5

- Text: `FAQs`
- Desc 1: `12-month minimum explained`
- Desc 2: `Domain ownership details`
- URL: `https://amplifycreativelab.com/faq/`

Sitelink 6

- Text: `Areas We Serve`
- Desc 1: `Perth + surrounding suburbs`
- Desc 2: `Local support and delivery`
- URL: `https://amplifycreativelab.com/areas-we-serve/`

### Callouts (add 8)

```
$0 Upfront Design
$60/Month Care Plan
Perth-Based Studio
Custom Mobile-First
Secure Fast Hosting
Monthly Content Updates
You Own The Domain
No Hidden Fees
```

### Structured snippet (add 1)

- Header: `Services`
- Values (paste as separate items):

```
Website Design
Website Hosting
Website Maintenance
Content Updates
Technical Support
Security Patching
```

### Call asset (phone)

- Number: `+61 460 526 441`
- Turn on **Call reporting**
- Conversion: count calls ≥ `60s` (optional but recommended)

### Location asset

- Link your **Google Business Profile** (Doubleview address) and enable **Location asset** for trust + local intent.

### Optional: Price asset (great for this offer)

Type: Services

- Item 1: `Website Care Plan` → `A$60 / month` → URL `https://amplifycreativelab.com/free-website-promo/`
- Item 2: `Website Design (Upfront)` → `A$0` → URL `https://amplifycreativelab.com/free-website-promo/`

### Optional: Lead form asset (only if you want leads without landing page)

- Headline: `Get The $0 Upfront Website Offer`
- Business name: `Amplify Creative Lab`
- Description: `$60/mo hosting & support. Limited spots. Perth-based.`
- CTA: `Get quote`
- Fields: Name, Email, Phone, Business Name
- Privacy policy URL: `https://amplifycreativelab.com/privacy/`

---

## Tracking (UTM) — copy/paste

Set at **Campaign** level: **Campaign settings → Additional settings → Campaign URL options**

- Final URL suffix (paste exactly):

```
utm_source=google&utm_medium=cpc&utm_campaign=free_website_promo_search&utm_term={keyword}&utm_content={adgroupid}-{creative}
```

---

## Launch Checklist (don’t skip)

- Conversion is **Primary** and you’ve tested a real submission → `/thank-you/` loads
- Display Network is **OFF**
- Location option is **Presence** (in/regularly in Perth)
- At least **4 sitelinks** + **6 callouts** + **1 structured snippet**
- No “auto-apply recommendations” that expands targeting
- Search terms checked after 48–72 hours (add negatives immediately)

If you want, tell me your exact service area (just Perth vs all WA/remote) and your starting daily budget, and I’ll tailor the keyword lists + ad copy to match that tighter.

