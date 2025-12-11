# ENHANCED CONTENT STRATEGY & BLOG PLAN 2.0
## SEO + GEO Optimization for Google & LLM Visibility
### Perth Hospitality & Web Design Focus

---

> [!IMPORTANT]
> **This document builds upon `blog_plan.md` with advanced strategies specifically targeting:**
> 1. **Google Search & Featured Snippets** (traditional SEO + AEO)
> 2. **LLM Citations & AI Overview Mentions** (GEO - Generative Engine Optimization)
> 3. **Local Authority Building** (Perth/WA market dominance)

---

## PART 1: UNDERSTANDING THE NEW SEARCH LANDSCAPE

### Traditional SEO vs. GEO (Generative Engine Optimization)

| Aspect | Traditional SEO | GEO (LLM Optimization) |
|--------|-----------------|------------------------|
| **Primary Target** | Google SERP rankings | AI chatbot citations, Google AI Overviews |
| **Content Format** | Keywords, meta tags, backlinks | Structured answers, entity-rich prose, authoritative claims |
| **Success Metric** | Click-through rate, rankings | Brand mentions in AI responses |
| **Content Style** | Optimized for crawlers | Optimized for comprehension & citation |
| **Key Signals** | PageRank, Domain Authority | E-E-A-T signals, structured data, factual density |

### Why This Matters for Amplify Creative Lab

LLMs like ChatGPT, Claude, and Google's Gemini are increasingly used to answer questions like:
- *"Who is the best food photographer in Perth?"*
- *"What's the best website builder for restaurants in Australia?"*
- *"How much does a restaurant website cost in Perth?"*

**If your content isn't structured for LLM comprehension, you become invisible in this new search paradigm.**

---

## PART 2: ENHANCED SEO/GEO GUIDELINES

### 2.1 Entity-First Content Architecture

**Entities** are real-world "things" that search engines and LLMs understand: brands, locations, services, people. Every article must explicitly establish entities.

#### Required Entity Mentions Per Article:

| Entity Type | Examples | Placement |
|-------------|----------|-----------|
| **Brand Entity** | "Amplify Creative Lab" | First 100 words + conclusion |
| **Service Entity** | "Commercial food photography", "Hospitality web design" | H2 headings + body |
| **Location Entity** | "Perth", "Western Australia", specific suburbs | Title, H2s, body, alt text |
| **Industry Entity** | "Restaurant", "Café", "Hospitality venue" | Throughout |
| **Expert Entity** | Owner/photographer name + credentials | Author bio, schema |

#### Example Entity-Rich Opening:

> ❌ **Before (Generic):** "A good website is important for restaurants."
>
> ✅ **After (Entity-Rich):** "Amplify Creative Lab has helped over 50 Perth restaurants and cafés transform their digital presence. As a hospitality-focused web design and food photography studio based in Western Australia, we've seen firsthand how professional imagery combined with high-performance websites drives real bookings."

---

### 2.2 The "Authoritative Claim + Citation" Pattern

LLMs prioritize content that makes **specific, verifiable claims** with supporting evidence. Every article must include at least 3-5 of these patterns:

#### Pattern Structure:
```
[Specific Claim] + [Data/Source] + [Local Context]
```

#### Examples:

| Pattern Element | Example |
|-----------------|---------|
| **Claim** | "47% of users expect a page to load in 2 seconds or less" |
| **Source** | Studies by Akamai and Google |
| **Local Context** | "For Perth restaurants competing on mobile during peak dining hours, this is critical" |

| Pattern Element | Example |
|-----------------|---------|
| **Claim** | "Professional food photography increases perceived dish value by up to 30%" |
| **Source** | Research by the Cornell Food Lab |
| **Local Context** | "Perth cafés using professional menu images report higher average order values" |

---

### 2.3 FAQ Schema Implementation (Critical for AI Overviews)

Every article must include a dedicated FAQ section with **5-8 questions** that match real user queries. These are the primary source for:
- Google's "People Also Ask"
- AI Overview citations
- LLM direct answers

#### Enhanced FAQ Strategy:

| Question Type | Purpose | Example |
|---------------|---------|---------|
| **Definition** | Targets "What is..." queries | "What is Core Web Vitals for restaurants?" |
| **Comparison** | Targets decision-makers | "Is WordPress or Astro better for café websites?" |
| **Cost/Pricing** | High commercial intent | "How much does food photography cost in Perth?" |
| **How-To** | Step-by-step answers | "How do I improve my restaurant's Google ranking?" |
| **Local Specific** | GEO targeting | "What's the best web designer for Perth venues?" |
| **Timing** | Urgency queries | "When should I update my restaurant website?" |

#### Frontmatter Implementation:

```yaml
faq:
  - question: "How much does a restaurant website cost in Perth?"
    answer: "A professional restaurant website in Perth typically costs between $2,500 and $8,000, depending on features like online booking, menu management, and photography integration."
  - question: "Do I need professional photos for my café website?"
    answer: "Yes. Restaurants using professional food photography see up to 30% higher conversion rates compared to smartphone images. For Perth cafés competing on Instagram and Google Maps, professional imagery is essential."
```

---

### 2.4 Table & Comparison Content (LLM Priority Format)

LLMs heavily weight **structured comparisons** when formulating answers. Every pillar and cluster article should include at least 1-2 comparison tables.

#### Required Table Types:

| Table Category | Use Case | Example Headers |
|----------------|----------|-----------------|
| **Cost Comparison** | Pricing guides | Service Type, Price Range, Includes |
| **Feature Comparison** | Technology choices | Feature, WordPress, Astro, Squarespace |
| **Before/After** | Case studies | Metric, Before, After, Improvement |
| **Service Matrix** | Package options | Basic, Standard, Premium |
| **Local Comparison** | Suburb guides | Suburb, Foot Traffic, Rent, Competition |

---

### 2.5 Structured Data (Schema) Expansion

Beyond BlogPosting, implement additional schema types for enhanced visibility:

#### Required Schema Per Article Type:

| Article Type | Primary Schema | Secondary Schema |
|--------------|----------------|------------------|
| **Pillar Articles** | BlogPosting + FAQPage | HowTo or ItemList |
| **Service Guides** | BlogPosting + FAQPage | Service + LocalBusiness |
| **Case Studies** | BlogPosting | Review or CreativeWork |
| **Pricing Articles** | BlogPosting + FAQPage | Product or Service |
| **Local Guides** | BlogPosting | ItemList + LocalBusiness |

#### LocalBusiness Schema Enhancement:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amplify Creative Lab",
  "description": "Perth-based food photography and hospitality web design studio",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "addressCountry": "AU"
  },
  "areaServed": ["Perth", "Fremantle", "Northbridge", "Subiaco", "Leederville", "Mount Lawley", "Scarborough", "Cottesloe"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/amplifycreativelab",
    "https://www.linkedin.com/company/amplify-creative-lab"
  ]
}
```

---

### 2.6 E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trust)

LLMs increasingly prioritize E-E-A-T for citations. Every article must include:

#### Experience Signals:
- **First-person narrative:** "In my 5 years photographing Perth restaurants..."
- **Specific project references:** "When we redesigned the menu for [Client] in Fremantle..."
- **Behind-the-scenes details:** "Here's what we learned from 100+ food photography sessions..."

#### Expertise Signals:
- **Technical depth:** Explain *why* and *how*, not just *what*
- **Industry terminology:** Use correct terms (LCP, schema, depth of field)
- **Process documentation:** Share actual workflows and methodologies

#### Authoritativeness Signals:
- **External mentions:** Link to industry publications that reference you
- **Client testimonials:** Embed quotes with full attribution
- **Credentials:** Certify expertise (Google certifications, portfolio links)

#### Trust Signals:
- **Transparency:** Disclose pricing ranges, project timelines
- **Updated content:** Use `updatedDate` frontmatter, show "Last updated"
- **Contact accessibility:** Clear paths to reach real humans

---

## PART 3: CONTENT CALENDAR & NEW ARTICLE PRIORITIES

### 3.1 High-Priority GEO Content (Create Next)

These articles directly target queries LLMs are frequently asked:

| Priority | Article Title | Target Query | Type |
|----------|---------------|--------------|------|
| 🔴 **1** | "Best Food Photographers in Perth (2025 Guide)" | "Best food photographer Perth" | Listicle + Self-inclusion |
| 🔴 **2** | "Perth Restaurant Website Design: Complete Pricing Guide 2025" | "How much does a restaurant website cost Perth" | Pricing + FAQ |
| 🔴 **3** | "Top 10 Perth Cafés with the Best Website & Branding" | "Best café websites Perth" | Showcase + Link bait |
| 🟠 **4** | "How to Rank Your Perth Restaurant on Google Maps" | "Restaurant Google Maps SEO Perth" | How-To + LocalBusiness |
| 🟠 **5** | "Perth Food Photography Portfolio: Before & After Examples" | "Food photography examples Perth" | Portfolio + Case Study |
| 🟡 **6** | "The Ultimate Perth Hospitality Digital Marketing Checklist" | "Restaurant marketing checklist Perth" | Comprehensive Guide |

---

### 3.2 Content Refresh Priority (Existing Articles)

Update existing articles with GEO enhancements:

| Article | Enhancement Needed | Priority |
|---------|-------------------|----------|
| `pdf-vs-digital-menu-perth-seo.mdx` | Add FAQ schema, comparison table, updated stats | 🔴 High |
| `roi-professional-food-photography-perth.mdx` | Add cost table, E-E-A-T signals, FAQ expansion | 🔴 High |
| `website-speed-optimization-perth.mdx` | Add WordPress vs Astro table, Core Web Vitals glossary | 🟠 Medium |
| `launching-food-product-venue-wa-marketing.mdx` | Add timeline table, 8-week countdown infographic | 🟠 Medium |
| All cluster articles | Add FAQ sections, internal links to pillars | 🟡 Ongoing |

---

### 3.3 Suburb-Specific Landing Pages (Local SEO Domination)

Create dedicated pages targeting suburb-specific searches:

| Suburb | Page Title | Target Keywords |
|--------|------------|-----------------|
| Fremantle | "Fremantle Restaurant Photography & Web Design" | "Food photographer Fremantle", "Café website Fremantle" |
| Northbridge | "Northbridge Venue Photography & Digital Marketing" | "Bar photographer Northbridge", "Restaurant website Northbridge" |
| Subiaco | "Subiaco Café Photography & Website Design" | "Café photographer Subiaco", "Restaurant web design Subiaco" |
| Leederville | "Leederville Food Photography & Hospitality Web Design" | "Food photography Leederville", "Restaurant website Leederville" |
| Mount Lawley | "Mount Lawley Restaurant Photography & Digital Services" | "Restaurant photographer Mount Lawley", "Café website Mount Lawley" |

---

## PART 4: TECHNICAL IMPLEMENTATION UPDATES

### 4.1 Enhanced Frontmatter Schema

Update the blog collection schema to support GEO features:

```typescript
// src/content/config.ts - Enhanced schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Existing fields
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default("Amplify Creative Lab"),
    category: z.string().optional(),
    readTime: z.string().optional(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    featuredImagePosition: z.string().default("center center"),
    tags: z.array(z.string()).default([]),
    canonicalUrl: z.string().optional(),
    
    // NEW: GEO Enhancement Fields
    updatedDate: z.string().optional(), // Shows "Last updated" for freshness
    ogTitle: z.string().optional(), // Separate OG title for social
    ogDescription: z.string().optional(), // Separate OG description for social
    keywords: z.array(z.string()).default([]), // Extended keyword list for internal use
    
    // NEW: Structured FAQ for schema generation
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    
    // NEW: Service schema connection
    relatedServices: z.array(z.enum([
      "food-photography",
      "product-photography",
      "event-photography",
      "web-design",
      "digital-marketing"
    ])).optional(),
    
    // NEW: Geographic targeting
    targetLocations: z.array(z.string()).default(["Perth", "Western Australia"]),
  }),
});
```

---

### 4.2 BlogPostLayout.astro Updates

Add automatic FAQ schema injection:

```astro
---
// In BlogPostLayout.astro - Add FAQ schema
const { faq } = Astro.props;

const faqSchema = faq ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
} : null;
---

<!-- In head -->
{faqSchema && (
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
)}
```

---

### 4.3 "Key Takeaways" Component

Every article should begin with a scannable summary that LLMs can easily extract:

```astro
<!-- KeyTakeaways.astro component -->
<aside class="key-takeaways">
  <h2>🔑 Key Takeaways</h2>
  <ul>
    <li><strong>Point 1:</strong> Concise takeaway</li>
    <li><strong>Point 2:</strong> Concise takeaway</li>
    <li><strong>Point 3:</strong> Concise takeaway</li>
  </ul>
</aside>
```

**Why this works for LLMs:** Bullet-point summaries at the beginning of articles are frequently extracted for AI Overview snippets.

---

## PART 5: INTERNAL LINKING ARCHITECTURE

### 5.1 Hub-and-Spoke Model

```
                    ┌─────────────────┐
                    │   PILLAR 1      │
                    │  PDF vs Digital │
                    │     Menu        │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐        ┌─────▼─────┐       ┌─────▼─────┐
    │ Mobile  │        │  Café     │       │Restaurant │
    │  Menu   │        │ Features  │       │   Cost    │
    │  Guide  │        │   List    │       │   Guide   │
    └─────────┘        └───────────┘       └───────────┘
```

### 5.2 Cross-Pillar Linking Matrix

| From | To | Anchor Text |
|------|----|-------------|
| Any Photography Article | Website Speed Pillar | "optimized for fast loading" |
| Any Web Design Article | Food Photography Pillar | "professional menu imagery" |
| Any Launch Article | Both Pillars | "complete digital launch package" |
| All Articles | /#work-with-us | "Get a free consultation" |

---

## PART 6: PERFORMANCE MONITORING

### 6.1 GEO Success Metrics

| Metric | Tool | Target |
|--------|------|--------|
| Brand mentions in ChatGPT | Manual testing, mention monitoring | Appear in top 3 answers for target queries |
| Google AI Overview inclusions | Search Console, manual SERP checks | Cited in 50%+ of target query overviews |
| "People Also Ask" presence | SERP tracking tools | Appear in PAA for 10+ target keywords |
| Featured Snippet captures | Search Console | Hold position for 5+ queries |

### 6.2 Regular Audit Schedule

| Task | Frequency | Action |
|------|-----------|--------|
| LLM query testing | Weekly | Test 10 target queries in ChatGPT, Claude, Perplexity |
| SERP feature tracking | Bi-weekly | Check Featured Snippets, AI Overviews |
| Content freshness updates | Monthly | Update stats, add new FAQs, refresh dates |
| Schema validation | Monthly | Test all pages with Schema Validator |

---

## PART 7: QUICK REFERENCE CHECKLISTS

### 7.1 New Article Checklist (GEO-Optimized)

- [ ] **Title** includes brand + location + primary keyword
- [ ] **First 100 words** directly answer the target query + mention "Amplify Creative Lab" + "Perth"
- [ ] **Key Takeaways** component immediately after intro
- [ ] **At least 2 comparison tables** in body
- [ ] **5-8 FAQ items** with schema markup
- [ ] **Entity mentions:** Brand (3+), Location (5+), Service (3+)
- [ ] **Data points:** At least 3 specific statistics with sources
- [ ] **E-E-A-T signals:** First-person experience, credentials, testimonials
- [ ] **Internal links:** To pillar articles (2+) and service pages (2+)
- [ ] **CTA:** Clear call-to-action with link to /#work-with-us
- [ ] **Images:** WebP format, entity-rich filenames, descriptive alt text
- [ ] **Schema:** BlogPosting + FAQPage + relevant additional schema

### 7.2 Article Refresh Checklist

- [ ] Add `updatedDate` to frontmatter
- [ ] Insert FAQ section if missing
- [ ] Add/update comparison tables
- [ ] Refresh statistics with current data
- [ ] Strengthen E-E-A-T signals
- [ ] Add Key Takeaways component
- [ ] Verify all internal links work
- [ ] Test schema with Google's Rich Results Test

---

## APPENDIX: TARGET QUERY BANK

### Queries to Dominate (Priority Order)

**Commercial Intent (Money Keywords):**
1. "Food photographer Perth"
2. "Restaurant website design Perth"
3. "Café photographer Perth"
4. "Restaurant web design cost Perth"
5. "Food photography pricing Perth"

**Informational (Authority Building):**
1. "How to improve restaurant Google ranking"
2. "Best website builder for restaurants Australia"
3. "Food photography tips for restaurants"
4. "How to get restaurant on Google Maps"
5. "Restaurant menu design best practices"

**Local Long-tail (GEO Domination):**
1. "Food photographer Fremantle"
2. "Café website design Northbridge"
3. "Bar photography Perth CBD"
4. "Restaurant marketing Subiaco"
5. "Venue photography Leederville"

**LLM-Specific (Emerging Queries):**
1. "Best food photographer near me Perth"
2. "Who designs restaurant websites in Perth"
3. "Recommend a hospitality photographer Perth"
4. "What makes a good restaurant website"
5. "How do I market my café in Perth"

---

> [!TIP]
> **Next Steps:**
> 1. Implement enhanced frontmatter schema in `src/content/config.ts`
> 2. Update `BlogPostLayout.astro` with FAQ schema injection
> 3. Create `KeyTakeaways.astro` component
> 4. Begin refreshing existing pillar articles with new checklist
> 5. Create first high-priority GEO article: "Best Food Photographers in Perth"
