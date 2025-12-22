# How to Use Google Ads (Comprehensive 2025

# Guide)

## Introduction to Google Ads

Google Ads is an online advertising platform that allows businesses to display ads across Google Search
results, partner websites, YouTube, and mobile apps. It operates on a pay-per-click (PPC) model,
meaning advertisers bid on keywords and pay when users click their ads. Google Ads offers highly targeted
advertising – you can target by keywords, user interests, demographics, location, and more. One major
advantage of Google Ads is the ability to **measure results in real time** : you can track impressions, clicks,
website visits, and conversions (such as form submissions or sales) and immediately adjust bids, budgets,
keywords, or ad copy based on performance.

**Account Structure:** Google Ads is organized hierarchically. At the top level is your **Google Ads account** ,
which contains one or more **campaigns**. Each campaign can focus on a specific advertising goal (such as
Search ads for a product line or region), and has its own settings like budget, location targeting, and
bidding strategy. Within each campaign, you create **ad groups** , which contain **keywords** (for Search
campaigns) or other targeting criteria, and the **ads** themselves. This structure allows you to group related
keywords and ads together for better relevance and control.

**Campaign Types:** Google Ads supports multiple campaign types to reach users on different networks and
formats: - **Search Campaigns:** Text ads that appear on Google search results when people search for your
targeted keywords. (This guide will focus heavily on Search campaigns for lead generation as a primary
example.) - **Display Campaigns:** Image or banner ads shown on the Google Display Network (a collection of
partner websites, apps, and Gmail). - **Video Campaigns:** Video ads (often through YouTube). - **Shopping
Campaigns:** Ads that showcase products with images and prices (for e-commerce, using product feeds via
Google Merchant Center). - **Performance Max Campaigns:** A newer campaign type that uses Google’s AI to
serve ads across all channels (Search, Display, YouTube, Discover, Gmail, Maps) from a single campaign,
using a mix of assets you provide. Performance Max is designed to maximize conversions by finding the
best channel and audience; it’s especially useful for e-commerce or broad marketing goals. - **Demand Gen
Campaigns:** Introduced in recent years (replacing Discovery campaigns), Demand Gen focuses on visually
rich ads across YouTube, Discover feed, and Gmail to drive engagement (often using audience targeting
rather than keywords).

Each campaign type has its own setup process and asset requirements. In this training guide, we will
primarily walk through **Search campaigns** as a foundational example, and highlight differences or
additional steps for other campaign types where relevant. By the end, you should be able to launch a
Search campaign from start to finish – including conversion tracking – and have an understanding of how to
leverage Google Ads’ features to optimize performance.

```
1
```
```
1
```
```
2
```

## Setting Up Your Google Ads Account and Linking Tools

Before diving into campaign creation, ensure you have the proper account setup and access in place:

```
Google Ads Account Access: Make sure you have administrative access to the Google Ads account
you’ll be working with. If you’re working as part of an agency or team, you might use a Manager
Account (MCC) to oversee multiple client accounts. Ensure billing is configured for the account (a
valid payment method) so that your ads can run.
```
```
Google Analytics 4 (GA4) Access: It’s highly recommended to link Google Analytics to Google Ads
for better tracking and audience data. You’ll need Editor or Administrator access to the GA4 property
for the website.
```
```
Google Business Profile Access: If your business has a physical location or service area, having
Manager access to the Google Business Profile (GBP) is important. Linking GBP allows you to use
location extensions (now called location assets) so your ads can show your address or map to users
nearby.
```
Once you have access, proceed to **link these accounts** to Google Ads:

**Link Google Analytics 4 to Google Ads:** 1. In Google Ads, click the **Tools** menu (wrench icon in the top
navigation bar). In the dropdown, look for **Data Manager** (this has replaced the old “Linked accounts”
section in the new UI). 2. In **Data Manager** , click **+ Connect Product**. Select **Google Analytics (GA4) &
Firebase**. 3. Choose the GA4 property you want to link and click **Next** , then enable data sharing options.
For example, toggle on importing GA4 conversions and audiences if prompted. 4. Click **Link** to finalize.
Linking GA4 allows Google Ads to import conversion events and use GA4 audiences for remarketing.

Alternatively (or additionally), you can initiate linking from GA4’s side: go to **GA4 Admin → Product Links →
Google Ads Links** , then click “Link” and follow the prompts to select your Google Ads account. Make
sure to enable the options to share GA4 site metrics and conversions with Ads during linking.

**Link Google Business Profile to Google Ads:** Google Ads now uses the Data Manager for Business Profile
linking as well, or you can link during asset creation: - _Via Data Manager:_ In Google Ads Tools menu, go to
**Data Manager**. Under **Connected products** , find **Google Business Profile** , and click **Manage & link**.
From there, you can search for your business by name or enter your Business Profile ID to send a link
request. The Business Profile owner will need to approve the link request via email. - _Via Assets (Location
Asset):_ You can also add a **Location asset** directly. In the Google Ads interface, navigate to **Assets**
(previously “Ads & assets”) in the left menu. Click the **+ (plus)** button and select **Location**. Choose “Our
locations” and click Continue. Google Ads will attempt to find a Business Profile matching your domain.
Select the correct business from the list (or specify the Business Profile manager account if you manage it)
and proceed to send a linking request. Once approved, your Google Business Profile’s locations will
be linked and can serve as location extensions in your ads (showing your address and phone).

**Link Other Accounts (if applicable):** In the **Data Manager** you can also connect other Google products: -
**Google Merchant Center** (for Shopping campaigns/Performance Max with products), - **YouTube** (to run

#### • • • 3 3 4 5 6 7 8 8

```
9 10
```

Video campaigns or use video remarketing), - **Google Ads to Search Console** (to view organic vs paid query
data), etc.

To link any of these, go to Tools → Data Manager and look under **Connect a product** or **Connected
products** for the relevant service (e.g., Google Merchant Center) , and follow similar steps. For instance,
linking Merchant Center might require entering your Merchant Center ID and approving the link from the
Merchant Center side.

**Recommendation – Disable Auto-Applied Recommendations:** Google Ads provides a Recommendations
tab with suggestions (e.g. adding keywords, ads, or budgets). Some of these can auto-apply changes. It’s
wise to review the auto-apply settings before launch: Go to **Tools (Wrench icon) → Setup →
Recommendations (Auto-apply)**. Turn **OFF** any auto-applied recommendations that you do not want
Google to implement automatically. In particular, auto-applying things like keyword expansions or targeting
tweaks is not advised for a new campaign focused on lead quality, since it can broaden your targeting
without your oversight. Keeping control initially will lead to higher quality traffic.

By completing account setup and linking relevant products, you set the stage for accurate tracking and
richer ad features (like location info). Next, we’ll configure conversion tracking – a critical step to ensure you
can measure results and optimize campaigns effectively.

## Setting Up Conversion Tracking (Before Launch)

**Why Conversion Tracking Matters:** A “conversion” in Google Ads is an action deemed valuable to your
business – typically a form submission, purchase, sign-up, or phone call. By tracking conversions, you’ll
know which clicks turn into leads or sales, enabling Google’s bidding algorithms to optimize for those
outcomes. For a lead-generation campaign, our primary conversions might be **contact form submissions**
or **phone calls** from prospective customers.

We will cover setting up website conversion tracking and phone call tracking. There are two main
approaches for website conversions in 2025:

```
Option A: Use the Google Ads tag (Global Site Tag or Google Tag) to track conversions directly
in Google Ads. This involves adding a conversion snippet to your site or using Google Tag Manager.
It provides fast, reliable conversion data directly into Google Ads.
Option B: Import conversions from Google Analytics 4 (GA4). This involves marking an event in
GA4 as a conversion and linking/importing it into Google Ads. It can work well but often has a slight
reporting delay.
```
We’ll outline both, but using Option A (direct Google Ads tagging) is recommended for the most immediate
and seamless data in Google Ads, especially for optimizing with Smart Bidding.

### 1. Verify the Base Site Tag (Google Tag) is Installed

Before creating any conversion actions, ensure your website has the base Google tagging implemented. In
our scenario, the site already had the Google tag (gtag.js) configured site-wide – which covers both GA4 and
Google Ads remarketing tags. If you’re starting fresh: - Go to **Tools → Ads & Assets → Google Tag** (or in
some interfaces, Tools → Summary under “Measurement” or “Goals” section). - If no global site tag exists,

```
11
```
#### •

#### •


you can set one up (Google will provide a <script> to place on your site). However, many sites use
Google Tag Manager or already have GA4 installed, which can double as your base tag.

To quickly check, use **Google Tag Assistant** (a Chrome extension): 1. Navigate to your website and enable
Tag Assistant. 2. Look for presence of a GA4 tag (e.g., G-XXXXXXXXX) and a Google Ads tag (AW-
XXXXXXXXX) in the Tag Assistant results. 3. If the tags are present, you’re good to proceed. In our
reference example, the site had G-4KRYBTPCTN (GA4 ID) and AW-17539052212 (Google Ads ID) already
installed in the global tag snippet.

### 2. Create a Conversion Action for Form Submissions (Website Lead)

Our goal is to track form submissions (enquiry leads) as conversions. We’ll assume the site directs form
completions to a **Thank You page** (e.g., /thank-you/). The site already fires a GA4 event named
conversion_event_submit_lead_form on the thank-you page. We can use that event in either
method:

**Option A: Google Ads Conversion Tracking using a “Submission” event tag**

```
In Google Ads, navigate to Goals > Conversions (Goals is the trophy icon in the left menu in the new
UI). This opens the Conversion Actions summary page.
Click the + New conversion action button (usually a blue plus).
Select Website as the source for your conversion.
You’ll be prompted to enter your website domain (if not provided earlier) and then presented with
conversion category options. Choose “Submit lead form” (or equivalent category) since this is a lead
form submission.
Name the conversion (e.g., “Lead Form Submission”). Set the Value of the conversion:
If you don’t have a specific value for each lead, you can choose “Don’t use a value” (this will count
conversions without monetary value) or assign a fixed value (e.g., $50 per lead) if you want to
roughly quantify them.
Set Count to “One” (for lead forms, typically you count one conversion per ad click – if the same user
submits multiple forms, you might still only want to count it once).
Set the conversion window (how long after a click a conversion can be counted). The default is 30
days for lead forms, which is usually fine.
Attribution model: choose Data-driven if available (this requires sufficient data), otherwise you can
use the default or another model. Data-driven gives Google’s AI flexibility to credit the conversion
across touchpoints, but since Google Ads conversions only consider ad interactions , data-
driven here will learn from the ad click patterns.
After configuring, Save and you’ll get a snippet (code) or instructions. Google Ads will provide a
Conversion ID and Conversion Label for this action.
Implement the conversion tag on your site: Since the global site tag (gtag.js) is already present, you
can fire the conversion by adding a gtag('event', 'conversion', { send_to: 'AW-
XXXXXXXX/label' }); on the Thank You page. In our example, the thank-you page already calls
gtag("event", "conversion_event_submit_lead_form"); we would modify or supplement
it with the specific Ads conversion send_to ID. For instance:
```
```
12 3
```
#### 1.

```
13
2.
3.
4.
```
#### 5.

#### 6.

#### 7.

#### 8.

#### 9.

```
14 15
```
#### 10.

#### 11.


```
<script>
gtag('event', 'conversion', { send_to: 'AW-17539052212/ABC123XYZ' });
</script>
```
```
where AW-17539052212 is the Google Ads ID and ABC123XYZ is the conversion label provided.
Once implemented, test it by submitting the form yourself and seeing if the Tag Assistant reports a
conversion event firing on the thank-you page.
```
Google Ads will record these conversion hits typically within a few hours. You can verify by going to **Tools →
Conversions** and checking the **Status** of the new conversion action (there’s a Diagnostics or “Recording
conversions” indicator that shows if data is coming in). After your test submission, it should indicate at least
one recent conversion or no issues.

**Option B: Import GA4 Conversion Event into Google Ads**

If you prefer to use GA4’s tracking (or cannot edit the site code to add a direct Ads tag), you can import the
conversion from GA4: 1. In **GA4** , go to **Admin → Events**. Find the event that is triggered on form
submission (in our case, conversion_event_submit_lead_form). Mark this event as a **Conversion** in
GA4 (toggle it on or mark as “key event”). You may also rename it to something readable like “Lead Form
Submission” in GA4. 2. In **Google Ads** , go to **Goals → Conversions** again, click **+ New conversion action** ,
and choose **Import**. Then select **Google Analytics (GA4) – web**. 3. Google Ads will list the GA
properties linked. Select the property and then the conversion event you marked (e.g., “Lead Form
Submission”) from GA4’s conversion list. 4. Import and save. This creates a conversion action in Google Ads
that relies on GA4 data.

After this, any time the GA4 event fires, it will be imported into Google Ads. **Important:** GA4 imported
conversions often have a delay in reporting. Google Ads data updates faster (often within hours) than GA4,
which can have a processing delay up to 24–48 hours for conversions. This means your Google Ads
conversion numbers might lag a day behind real-time. For optimization (especially automated bidding), the
direct tag method (Option A) is usually preferred to give the algorithms quicker feedback.

_Best practice:_ If you implement both Option A and Option B for redundancy, **be careful to avoid double
counting.** You would need to mark one of them as “Secondary” in Google Ads (so it doesn’t count toward
bidding). For example, you might keep the Google Ads direct conversion as Primary (for bidding) and mark
the imported GA4 conversion as Secondary (just for observation or using in GA4 reports). Usually,
implementing _one_ method consistently is sufficient.

### 3. Verify Conversion Tracking

Regardless of the method chosen, do a quick test: - Use **Google Tag Assistant** or **GA4 DebugView** to
ensure a conversion event is firing when it should (for example, on the thank-you page load). - In Google
Ads, check **Conversions > Summary** to see if the new action’s status shows “No recent conversions” or
“Recording conversions”. If you see it recording (after your test), you’re all set. - It can take a couple
hours for Google Ads to register the first test conversion. Google Ads also has a _Conversion Action_ column
you can add in campaign view to confirm conversions coming in once campaigns run.

#### 12.

```
16
```
```
17
```
```
18
```

### 4. Set up Phone Call Conversions (if applicable)

For many service businesses, phone calls are as valuable as form submissions. Google Ads can track calls in
a few ways: - **Calls from Ads:** when someone **clicks the call button on your ad** (using a call extension/
asset or call-only ad) or manually dials the Google forwarding number displayed. These are tracked via
Google’s forwarding phone numbers. - **Calls from Website:** when someone **clicks your ad, lands on your
site, and then calls** the phone number on your website (replacing your number with a Google forwarding
number). - **Click-to-call clicks:** simply tracking if someone clicked a phone link on your mobile site (not
necessarily resulting in a connected call – this is usually tracked via Analytics events).

We’ll focus on the first two, as they directly tie calls to ad clicks and can be counted as conversions.

**Enable Call Reporting:** First, ensure your account has call reporting enabled. In Google Ads, go to **Settings**
(for the account) and look for **Call reporting** – it should be turned ON. This allows use of Google’s
forwarding numbers to track call details.

**Create Call Conversion Actions:** 1. Go to **Goals > Conversions** (Conversions summary) and click **+ New
conversion action**. 2. Select **Phone calls** as the conversion source. 3. You will see three options for call
conversions : - _Calls from ads using call extensions or call-only ads_ – we’ll set this up (tracks calls that
originate from clicking on a call-enabled ad). - _Calls to a phone number on your website_ – we’ll set this up if
you have a phone number on the site. - _Clicks on your number on your mobile website_ – optional, often not
needed if you do the above, and not a “true” conversion (just a click).

```
Choose the first option “Calls from ads” and click Continue. Configure it:
Name it (e.g., “Calls from Ads”).
Value: You can either not use a value or assign a rough value per call (some businesses might value a
call, say $100).
Count: Typically “One” (count one conversion per ad click; if the same person calls multiple times
from one ad interaction, you might count one).
Call length: Set a threshold (in seconds) for a call to count as a conversion. Default might be 60
seconds. Choose a duration that represents a qualified call (for example, 30 seconds or 60
seconds indicates a real conversation as opposed to quick hang-ups).
Click-through conversion window: e.g., 30 days (how long after the ad click a call can happen to still
count – calls from ads usually happen immediately, so this isn’t critical).
Attribution model: can leave default (this mostly matters if one user clicks multiple ads before
calling).
Save the action.
```
_Note:_ Often, a “Calls from ads” conversion action might be created automatically by Google once you use a
call asset and start getting calls longer than 60s. Setting it up manually as above lets you control the
settings from the start (e.g., using a custom call length or naming convention).

```
Next, if you want to track calls from your website (after ads clicks):
Choose “Calls to a phone number on your website” in the Phone calls conversion setup.
Google will ask for your phone number (the one that appears on your site) and the country.
```
```
19
```
```
20
21
```
#### 1.

#### 2.

#### 3.

#### 4.

#### 5.

```
22
```
#### 6.

#### 7.

#### 8.

```
19
23
```
#### 1.

#### 2.

#### 3.


```
It will provide a snippet of code to put on your website. This code dynamically swaps your phone
number on the site with a Google forwarding number only for visitors who came via a Google Ads click.
When those users call, it routes through Google’s system to track the call duration and completion.
Configure name, value, count, etc., similarly. (For example, name it “Calls from Website”. Count one,
choose a duration threshold, etc.)
Implement the code on your site (often this is a small JavaScript snippet that you put on pages where
your phone number is displayed, e.g., header or contact page). If using Google Tag Manager, Google
provides a GTM tag template for phone call tracking.
```
```
This is a bit technical, so involve your web developer if needed. Once set up, test by clicking your ad
(once live) or using the Google Ads preview, then calling the number shown on the site.
```
```
After setting up these conversion actions, they will appear in your Conversions list. Decide if you
want to mark phone call conversions as Primary (included in the “Conversions” column and used for
bidding optimization). If phone leads are valuable, mark them Primary. If you prefer to track them
separately, mark as Secondary.
```
Now, with conversion tracking for forms and calls in place, your Google Ads account will log every lead
interaction. **This is crucial before you start spending on ads** , because it allows you to optimize campaigns
for what really matters (leads) rather than just clicks. It also enables the use of Smart Bidding strategies like
Target CPA or Maximize Conversions effectively.

_(Advanced notes:)_

- **Enhanced Conversions:** Google Ads offers an option to send hashed customer data (like email or phone)
along with conversion pings for better attribution, especially in a world of stricter privacy. For lead forms, if
you capture emails/phones, you can set up Enhanced Conversions for Leads, which involves adding code to
send that data on conversion. It can improve measurement accuracy. This is optional and can be configured
after basic tracking works. - **Offline Conversions Import:** If you have a longer sales cycle (e.g., you
generate leads, then later some convert to sales or qualified opportunities), you can import offline
conversion data to Google Ads. For example, you might import a “Qualified Lead” or “Sale” event with the
Google Click ID (GCLID) from the original lead. This is more advanced and requires capturing GCLIDs in your
lead forms and uploading data later. As your campaigns mature, this can help Google optimize not just for
raw leads but for quality (if you feed back which leads became customers).

With tracking set up, let’s move on to building the campaign structure.

## Planning Your Campaign Structure and Settings

Proper campaign structure is the foundation of a successful Google Ads account. We recommend
structuring campaigns in a way that **aligns with your business goals and budgets**. A common approach is
to have separate campaigns for distinct services, products, or target markets. This way, each campaign can
have its own budget and settings, and performance can be managed separately.

In our example (Amplify Creative Lab, Perth) we planned to create **four core Search campaigns** , one for
each service offering: 1. **Search – Food Photography – Perth** 2. **Search – Product Photography – Perth** 3.
**Search – Event Photography – Perth** 4. **Search – Website Development – Perth** 5. _(Optional:_ Search –
Brand campaign for the company name)

#### 4.

#### 5.

#### 6.

#### 7.

#### 8.


Each campaign targets keywords related to that service and sends clicks to the corresponding landing page
on the website. By separating them, the budget for, say, Food Photography ads won’t be eaten up by Event
Photography ads, and vice versa. It also makes it easier to write very relevant ads for each group of
keywords.

**Campaign Settings to Consider:** - **Campaign Name:** Use a clear naming convention. For example, include
the country/region, network, and product. In the example above, “AU | Perth | Search | Food Photography”
succinctly tells us what the campaign targets. Consistent names help when you have many campaigns. -
**Campaign Goal (Objective):** When creating a campaign, Google Ads will ask for your objective (Sales,
Leads, Website Traffic, etc.). If you choose **Leads** or **Sales** , Google will default to using conversion-based
bidding strategies and ask which conversion actions to optimize for. If you choose **Website Traffic** or
“Create without a goal’s guidance”, you have more manual control. Since we have conversion tracking ready,
using **Leads** as the goal for our campaigns makes sense (so Google knows we care about conversions).
Ensure that the correct conversion actions (e.g., lead form submit, calls) are selected as the **primary goals**
for the campaign’s optimization. _Note:_ Even if you select "no goal guidance", Google now requires at
least one conversion action in the campaign settings (this appears under “Use these conversion goals for
campaign performance optimization”) – so you would select your lead form conversion there.

```
Network Settings: For a Search campaign, you’ll typically want Search Network enabled and
Display Network off. By default, Google may tick “Include Google search partners” and “Include
Google Display Network”. It’s recommended to uncheck the Display Network for a pure Search
campaign to avoid spending on banner ads on other sites (which can dilute your budget and are
managed better via separate Display campaigns). Keeping “Search Partners” on is optional –
search partner sites can include smaller search engines and certain Google properties; they can
sometimes yield conversions at lower cost, but monitor performance. You can start with them on
and turn off later if quality is low.
```
```
Location Targeting: Set the locations where you want your ads to show. For our Perth-focused
campaigns, we would target the Perth, Western Australia metro area. You can target by city,
region, or a radius around an area. If the business only serves a specific city/region, stick to that. For
example, target “Perth” (city) plus maybe a 30-50 km radius to cover suburbs if needed.
```
```
Click Location options and choose the targeting mode: select “Presence: People in or regularly in
your targeted locations”. This is very important. The default often includes “People searching
for or showing interest in your target location,” which can show ads to people outside the area (e.g.,
someone in Sydney who searches “Perth photographer” might see your ad if you leave the default).
For local services, usually you want only people physically located in your area to click (presence). So
choose the presence option for Target, and for Exclusion (if you set exclusions) you can use the
default.
```
```
If you want to exclude any locations (e.g., maybe exclude a region you don’t serve within the broader
area), you can add exclusions. For example, if targeting all of Australia, you might exclude other
states, etc.
```
```
Language: Select the language of your customers. Typically English (if your ads and site are in
English) or any language your customers speak. For our case, English. This setting is based on the
user’s Google interface language, and can usually be left as default if you only serve one language.
```
```
24
```
```
24
```
#### •

```
25 26
```
#### •

#### •

```
27
```
#### •

#### •


```
Bidding Strategy: Here you decide how to bid for clicks. Google will suggest a strategy based on
your goal selection:
```
```
If you chose Leads/Sales, it may suggest Maximize Conversions (possibly with an option to set a
Target CPA). Using Maximize Conversions is ideal once conversion tracking is functioning , as it automates
bids to get as many conversions as possible within your budget. If you have some historical data or a
specific cost per lead target, you can set a Target CPA (target cost per action) which guides the bids.
Early on, if you have no data, you might run Maximize Conversions with no target or with a
reasonable target after a couple of weeks of data.
If conversion tracking is not yet reliable (e.g., you’re still testing or expect low volume initially), you
could use Maximize Clicks as a temporary strategy to generate traffic, then switch to conversion-
based bidding later.
Other strategies: Manual CPC gives full control but requires more oversight and doesn’t
automatically optimize for conversions (you might use it in special cases or if you want to control
bids for each keyword manually). Target ROAS is for value-based optimization (mainly e-commerce
with revenue tracking). Impression Share targeting is for brand awareness (ensure your ad appears
X% of the time), not typically used for lead gen.
```
For our campaigns, we planned: if everything is tracking, use Maximize Conversions (Primary actions) from
the start. If not, Maximize Clicks with a bid cap (to avoid overspending per click) until we gather some
conversion data, then switch to Max Conversions.

In the campaign setup workflow, choose your bidding focus. For example: “Focus on Conversions” if
available (or “Clicks” if doing Max Clicks). You can optionally set a target CPA at campaign creation or
leave it to optimize freely for a bit. Remember, automated bidding works best when it has solid conversion
data to learn from.

```
Budget: Set a daily budget for each campaign. This should be based on how much you are willing to
spend per day for that service, or backing in from a monthly budget divided by 30.4. For instance, if
you plan to spend $900 per month on Google Ads across all campaigns and want it evenly split, and
you have 3 campaigns, each could be $10/day (roughly $304/month each). Or you might allocate
more to a priority service. Budgets can be adjusted anytime. Note that Google Ads will sometimes
spend up to 2x the daily budget on a given day (to capture opportunities) but will try not to exceed
the daily budget * 30.4 in a month.
```
```
Ad Schedule (optional): By default, ads run 24/7. If your business only wants leads during business
hours, or you have data showing certain times are unproductive, you can set an ad schedule. For a
start, many leave it open 24/7 (especially if using automated bidding, as it will allocate budget by
itself). You can always restrict hours later or use bid adjustments for certain times.
```
```
Ad Rotation: Google removed the old rotation options in favor of mostly automated. Essentially,
with responsive ads, Google will optimize rotation automatically. Ensure it’s set to “Optimize: Prefer
best performing ads”. If you have multiple ads, Google will serve the one expected to perform better
more often. (There used to be an “rotate indefinitely” option, but not anymore for RSAs).
```
After setting these, you’ll proceed to the next steps: creating ad groups, keywords, and ads.

#### •

#### •

#### •

#### •

```
28
```
#### •

#### •

#### •

```
29
```

## Building Ad Groups and Keyword Lists

Within each campaign, organize your keywords into **ad groups**. An ad group contains a set of related
keywords and the ads that will serve for those keywords. The goal is to have tightly themed ad groups so
that the ads can be very relevant to all keywords in that group.

**Keyword Match Types (2025 Update):** Google Ads offers three match types for search keywords: - **Exact
Match** – [brackets] – Ads may show for searches with the same meaning or intent as the keyword. Exact
match is quite tight, but can include close variants (misspellings or plural forms, etc.). Example: [food
photographer perth] will match searches for “food photographer perth” or close variants like “perth food
photographers”. - **Phrase Match** – "quotes" – Ads may show for searches that include the meaning of your
keyword, possibly with other words before or after. Order can be important if it changes meaning. Example:
"food photography perth" might match “affordable food photography perth” or “perth food photography
services” but not “photography food Perth” (which is nonsensical order). - **Broad Match** – no punctuation,
just keyword – Ads may show for searches related to your keywords, including synonyms and related
concepts, even if not containing the exact words. Example: food photographer perth (broad) could match
“commercial photography of restaurants in WA” or “food photo shoot in Fremantle” due to Google’s AI
understanding. Broad match provides the widest reach and relies heavily on Google’s algorithms to
interpret intent.

In recent years, broad match has become more “smart” when combined with Smart Bidding (Google will
look at conversion data to decide which broad matches are likely to perform). However, broad can also bring
in a lot of irrelevant traffic if not paired with strong conversion signals and negative keywords. For a new
campaign, it’s often wise to **start with Phrase and Exact match** keywords, which give you more controlled
targeting, and then expand with Broad once you have data and a list of negatives to filter out bad queries.

**How to Research and Select Keywords:** - **Brainstorm:** Think of terms a customer would search for when
looking for your product/service. In our case, for “Food Photography Perth,” obvious ones are “food
photographer perth”, “restaurant photography Perth”, “menu photos for restaurant”, etc. - **Use Keyword
Planner:** Google’s Keyword Planner (found under **Tools → Planning → Keyword Planner** ) can help you find
related keywords and see search volume. You can input a few seed terms (like “food photography
Perth”) and the planner will suggest other related terms along with their approximate monthly searches
and competition level. - **Competitive Research:** Search on Google for your service and see what words
competitors use in their copy (this can hint at keywords). Also, tools like Google’s autocomplete or “People
also ask” can inspire keywords. - **Long-tail vs Short-tail:** Try to include specific multi-word phrases (“long-
tail keywords”) that indicate high intent. For example, “food photographer for restaurants in Perth” is long
and specific – it might have low volume, but anyone searching it likely needs your service. Shorter terms like
“photographer” are too broad and not worth targeting alone.

**Organizing Ad Groups:** Group keywords by theme so you can write focused ads. For instance: - In the **Food
Photography** campaign, you might have one ad group for generic food photography terms, another for
restaurant-focused terms, another for maybe “menu photos” specifically, etc. - Ad Group: _Food Photographer
Perth_ – keywords: “food photographer perth”, [food photographer perth], “food photography Perth”, [food
photography Perth], etc. - Ad Group: _Restaurant Photography_ – keywords: “restaurant photographer perth”,
[restaurant photographer perth], “cafe photography Perth”, etc. - Ad Group: _Menu Photos_ – keywords around
menus: “menu photo shoot”, “food menu photography perth” etc. - In **Product Photography** campaign, you
might split: one ad group for generic “product photography Perth”, another for “packshot photography”,

```
30
```

another for “ecommerce photos”, etc. - In **Event Photography** : maybe one ad group for general event
photographer terms, another for corporate events (conference photographer, etc.), another for weddings if
you offered that (or exclude if not). - In **Web Development** : one for “web design Perth”, one for “website
design for restaurants” if that’s a niche, etc.

This way, each ad group’s ads can use the specific keywords (like “Food Photographer Perth” in the headline
for that group, vs “Event Photographer Perth” in the event group).

When adding keywords in Google Ads: - Enter them one per line, and include the punctuation for match
type. For example:

```
"food photographer perth"
[food photographer perth]
```
This would add two keywords: one phrase, one exact.

Google Ads may also suggest keywords during setup based on your website – use your judgment; you can
accept relevant suggestions but avoid broad or irrelevant ones.

**Keyword Quantity:** You don’t need hundreds of keywords. A focused list of, say, 10-20 keywords per ad
group (even fewer, like 5 highly relevant ones, to start) is fine. You can always expand later based on search
terms that actually trigger your ads (we’ll cover optimization).

**Tip:** Since phrase and exact match in modern Google Ads also match close variants, you don’t need to add
every slight variation. For example, “photographers” vs “photographer” or plural vs singular – Google will
match them. You also don’t need to add both “food photography Perth” and “Perth food photography” in
phrase; one will cover many word order variations that don’t change meaning. Focus on distinct intent
keywords.

We will add **negative keywords** next, which is equally important to prevent mismatches.

## Adding Negative Keywords

Negative keywords prevent your ads from showing on searches that are not relevant or are poor quality. A
well-thought-out negative keyword list can save you from wasting budget on clicks that have little to no
chance of converting.

For example, common negative themes: - **Job Seekers & Education:** If someone searches “food
photography **jobs** ” or “photography **course** ”, they’re not looking to hire a photographer – they want a job or
to learn. So “jobs”, “careers”, “salary”, “courses”, “classes” etc., are good negatives for a services campaign

. - **Irrelevant Services:** If you do _commercial_ photography and not consumer photography, terms like
“wedding”, “engagement”, “family portraits” might be irrelevant – add as negatives (unless you offer those).
- **DIY or Research:** Words like “how to”, “tutorial”, “presets”, “free tips” might indicate someone looking to do
it themselves or just research, not hire. - **Price Shoppers (if low-budget leads are a waste):** Some add

```
31
```

negatives like “free”, “cheap” if they want to avoid bargain hunters. But use with caution – sometimes “cheap
[service]” searches might still convert if you have competitive pricing.

**Implementing Negatives:** - You can add negatives at the **campaign level** or **ad group level**. Campaign-
level is common for broad exclusions that apply to all ad groups in that campaign. - If you have multiple
campaigns that share the same negatives (e.g., “jobs” is irrelevant across all your campaigns), you can use a
**Shared Negative Keyword List**. This is created under **Tools → Shared Library → Negative keyword lists**.
You create a list (e.g., “Common negatives”) and add all those terms. Then apply that list to all relevant
campaigns at once. This ensures consistency and easier management. - For our example, we created
shared lists such as: - **“Jobs and Education Negatives”** : containing terms like job, jobs, career, hiring,
internship, course, class, training, etc. (Add plural/singular variations, though Google will usually cover
both; adding just “job” might cover “jobs” automatically, but we often list both). - **“Consumer Photography
Negatives”** (since Amplify only does commercial): wedding, weddings, engagement, newborn, family,
maternity, etc. - **“Photography Gear Negatives”** : people searching for cameras, equipment, editing
software (e.g., “Canon camera”, “Lightroom presets” are not customers). - **“Free/Cheap Leads Negatives”** :
free, cheap, cheapest, etc., if desired to filter out low-budget queries (optional). - Once lists are made, apply
them to all campaigns except a brand campaign (you typically don’t negative these out on brand, since
brand terms are very specific). In Google Ads UI, when viewing the Negative Lists, you can choose **Apply to
Campaigns** and check the campaigns.

You can also add negatives on the fly from the Search Terms report (which we’ll discuss in optimization). For
instance, after launch, you see search queries that triggered your ad. If one is irrelevant, you can click “Add
as negative keyword” right there, to the campaign or ad group.

**Important:** Use the appropriate match type for negatives: - By default, negative keywords are treated as
**broad match negatives** , which already match a broad range of variants. There is no equivalent of broad-
modifier anymore, and phrase/exact negatives have slightly different behavior (phrase negative will block
queries containing that phrase string; exact negative blocks that exact query only). - Usually just adding a
single word like **job** as a broad negative will block any query containing “job” or “jobs”. That’s typically
sufficient. - If you add a multi-word negative without quotes, it will block queries containing all those words
in any order. For example, adding **wedding photography** as a broad negative means queries that have
both “wedding” and “photography” somewhere will be blocked (like “photography for wedding” or “wedding
photographer”). - To be safe, sometimes people add both singular and plural as separate negatives (though
Google’s algorithm usually covers both).

Our recommendation is to **add a comprehensive list of obvious negatives on day 1** (based on your
knowledge of the industry), but be prepared to continually refine. After launch, check queries and add
negatives for anything irrelevant that slipped through.

By applying negatives early, you protect your budget from known bad traffic and improve the overall lead
quality.

## Writing Effective Ads (Responsive Search Ads)

With keywords set, the next step is creating ads that will compel users to click and contact you. Google
Search ads (as of 2025) use **Responsive Search Ads (RSAs)** exclusively – the older Expanded Text Ads have


been fully phased out. An RSA allows you to provide multiple headlines and descriptions, and Google will
mix-and-match them to find the best performing combinations for each query.

**Ad Components:** - **Final URL:** The landing page URL where the user goes after clicking. Use the most
relevant page for the ad group. E.g., for the Food Photography ad group, the final URL might be https://
yourwebsite.com/perth-food-photography. - **Display Path:** You can specify up to two path terms to
append to your domain in the ad (these aren’t actual directories, just for display). E.g., ad might show as
_yourwebsite.com/Food/Photography_. Keep it short and relevant, using keywords if possible. - **Headlines:** You
can enter up to **15 headlines** , each up to 30 characters. These should include different angles and
keywords. Google will show up to 3 at a time (in different orders). Aim to: - Include the core keyword in at
least one or two headlines (to increase relevance – oftentimes one headline should simply be something
like “Food Photographer Perth” if that’s the query). - Highlight unique selling propositions (USPs) or key
offers in others. E.g., “Menu Photos That Sell”, “Fast Turnaround – 48h”, “On-Location Shoots”, “Over 50+
★★★★★ Reviews”, “Affordable Rates Available”, etc. Anything that would make a user choose you. - Use
action-oriented language in some: “Get a Quote in 24 Hours”, “Book Your Shoot Today”, etc. - Try different
formats: questions (“Looking for a Food Photographer?”), statements, including maybe the business name
in one if it’s recognized. - **Descriptions:** You can enter up to **4 descriptions** , each up to 90 characters.
Google will show up to 2 (each ad shows 2 descriptions max). Use these to elaborate on your services,
include a call to action and more detail that couldn’t fit in headlines. - E.g., “Professional food photography
for Perth restaurants and cafes. Mouth-watering images that boost your sales. Request a quote now.” -
Another: “Fast turnaround and flexible on-site shoots. From $200/hr introductory rate. Get your menu and
social media photos done by experts.” - Make sure each description can stand alone, since any 2 could be
paired. - **Business Name & Logos:** In 2023, Google introduced the ability to add your Business Name and
Logo as an asset to Search ads, which can display as a heading above the ad (especially on mobile).
Ensure your campaign (or account) has the Business Name set correctly (usually pulled from your
verification info) and your logo uploaded in the Assets section. This can increase brand recognition.

When writing RSAs, **provide as many distinct headlines and descriptions as you can**. Google’s machine
learning will assemble them in various ways to find what works best. Ads with multiple asset combinations
generally perform better, since they can serve more tailored messages. Aim to use all 15 headlines and
at least 3-4 descriptions if possible.

**Pinning (optional):** You can “pin” a headline or description to a specific position (1, 2, or 3 for headlines; 1
or 2 for descriptions). Only do this if necessary (for instance, you _must_ have your brand name in headline 1
every time). Pinning too much can defeat the purpose of RSA testing. In most cases, let Google mix freely,
or pin maybe one crucial element (like a “Call now” headline pinned to position 3 if you really want that
always visible).

**Ad Policy and Best Practices:** Ensure your ads follow Google’s policies (no excessive capitalization, no
disallowed content, etc.). Also, try to have some diversity: - If all your headlines are very similar or all contain
the keyword, you miss the chance to test different angles. Mix in some that focus on benefits, some on
features, some on offers. - You might include one headline with an exclamation (not at the end, Google
disallows “!” in headlines, but an excited tone like “Fast Turnaround Available”). - Use as much of the
character limit as you can, especially in descriptions, for compelling info, but do stay concise and clear.

For example, here are sample RSA elements for **Food Photography Perth** : - **Headlines Ideas:** “Perth Food
Photographer”, “Restaurant Menu Photography”, “Mouth-Watering Food Shots”, “Delivery App Photo

```
32
```
```
33
```

Experts”, “On-Location Shoots in Perth”, “Studio Available for Food Shoots”, “Fast Turnaround (48h)”, “From
$200 Intro Rate”, “5-Star Rated Photographer”, “Get a Quote in 24 Hours”, “Boost Your Restaurant Sales”,
“Food Photos for UberEats & More”. - **Description Ideas:** “Stop losing orders to average photos. Pro food
photography for Perth venues – get a quote in 24 hours.”, “Menu, social media, and delivery app images
shot to make your food irresistible. Fast, reliable service in Perth.”, “Affordable intro rates from $200/hr.
High-quality images, professional lighting, and editing included.”, “Trusted by 50+ local restaurants and
cafes. We handle on-site shoots, studio product shots, and rapid image delivery.”

Each ad group’s RSA should be tailored to its theme. For the _Event Photography_ campaign, headlines might
include “Event Photographer Perth”, “Corporate & Conference Photography”, etc., and descriptions
highlight event types and quick delivery of photos for social media. The _Web Development_ campaign’s ads
would talk about “Web Design in Perth”, “Fast, SEO-Friendly Websites”, “Custom Restaurant Websites”, etc.

Aim to create **1 RSA per ad group** at launch. Google allows more than one RSA per ad group, but initially
one well-crafted RSA is sufficient. Over time, you can test a second RSA with different messaging if needed
(though Google’s recommendation is usually to have only one RSA per ad group and let it optimize
internally; however, some advertisers do test multiple RSAs).

**Ad Strength:** Google will give an “Ad Strength” indicator (Poor to Excellent) for RSA as you add headlines/
descriptions. Try to get it to Good or Excellent by adding more variety, using keywords in some headlines,
and not having too many redundant phrases. It’s a guideline, not absolute – sometimes you have a specific
niche where it’s hard to be “Excellent”, but usually you can get there by following the prompts.

## Utilizing Ad Assets (Extensions)

Ad Assets (formerly known as ad extensions) are additional pieces of information or links that can show
alongside your ad. They make your ad larger and more informative, often improving click-through rate.
Importantly, Google favors ads with multiple relevant assets – ads with more asset types often perform
better and can get a higher Ad Rank for the same bid. You should **enable all asset types that
make sense** for your campaign to maximize performance.

Here are the key asset types to consider for a Search campaign and how to use them:

```
Sitelink Assets: These are extra links that appear below your main ad, directing users to specific
pages on your site. Each sitelink has a title (link text) and can have two-line description (optional, but
recommended to make it larger). You should add at least 4 sitelinks (Google can show up to 4 at a
time, or fewer on mobile). For example:
Food Photography sitelinks: “Portfolio – Food”, “Pricing & Packages”, “Client Testimonials”, “Contact
Us”.
```
```
General sitelinks for all campaigns: “About Us”, “Our Portfolio”, “Reviews”, “Get a Quote”, etc. Each
sitelink needs a URL. They can be added at the campaign or account level if they’re broadly
applicable. Tip: For generic sitelinks like “Contact Us”, ensure the landing page is relevant to all
campaigns you apply it to (or else add them per campaign). Sitelinks make it easier for users to
navigate directly to what they want, and also take up more screen space, which is good. Use
descriptive text (avoid duplicating the ad headline text).
```
```
33 34
```
#### •

```
35 36
```
-

#### •

```
37
```

```
Callout Assets: Short snippets of text (not clickable) that highlight additional benefits or features.
They appear as a bullet-separated or dot-separated list. Each callout can be up to 25 characters, but
shorter is often better (a few words). Aim to add at least 4-6 callouts. Examples: “Perth-
Based”, “24h Quote Turnaround”, “No Contracts Required”, “50+ 5-Star Reviews”, “Award-Winning
Team”, “Affordable Rates”, “Free Initial Consultation”, etc. Think of these as bullet-point selling points.
They’ll show in addition to the ad copy, so use them to say things you might not have room for in the
ad. Don’t repeat content that’s already in your ad or sitelinks. Callouts apply at campaign or
account level typically.
```
```
Structured Snippet Assets: These provide a list of specific items under a predefined header. For
example, a header could be "Services" and you list “Food Photography, Product Photography, Event
Photography, Web Development” – these would show under your ad as “Services: Food Photography,
Product Photography, ...”. Choose a header that fits your business. Common headers: Types,
Services, Locations, Amenities, etc. For our case, Services is fitting to list the different creative services
offered. Each snippet value should be concise (12 characters or fewer is ideal for mobile) and not
promotional (just factual). Add as many values as relevant (Google will show as many as fit).
Structured snippets help set user expectations by giving a quick overview of offerings.
```
```
Call Asset (Phone Number): This attaches a phone number to your ad, showing a “Call” link
especially on mobile. It’s crucial for campaigns where calls are desired. For our campaigns, we’d add
the business phone as a call asset. Ensure you select the country and number, and turn on Call
Reporting (to use a forwarding number for tracking). With call assets, you can count phone calls as
conversions (as we set up) and even have bids optimize for calls. Note: As of late 2025,
Google is deprecating call-only ads in favor of using call assets on regular ads. So, the call asset
is the way to ensure your phone number appears. You can schedule call assets to only show during
business hours if you only want calls at those times. This is done in the asset settings.
```
```
Location Asset: If you linked your Google Business Profile, you can enable location extensions (now
location assets). This will show your business address and a map link below the ad (on applicable
searches, usually local intent queries). It can also display distance to the location for nearby users.
For Amplify, if there’s an office or studio address in GBP, attaching it will lend credibility and attract
local clients. To add it, ensure the GBP is linked (as done), then just add a Location asset (it typically
will ask which linked Business Profile to use). If you have multiple locations, you can filter by labels or
use radius targeting to show the nearest, etc. Location assets are very useful for local businesses as
they enable your ads to appear in Maps and local search results too when relevant.
```
```
Image Assets: Google now allows adding images to Search ads (they show alongside your text ad
on mobile, as a small image thumbnail). If you have high-quality images relevant to your service, you
can upload them as image assets. E.g., a great photo from your portfolio (watermarked or branded
subtly) can draw the eye. Provide various sizes (1:1 square, 1.91:1 landscape). Make sure images
meet Google’s guidelines (clear, relevant, no excessive text). Image assets can improve engagement
by giving a visual preview. Not all searches will show images, but when they do, it can set you
apart. For a photography business, this is quite relevant. You can add up to 20 images per account
that can be used in campaigns.
```
```
Lead Form Asset: This is an advanced asset where users can submit a form (name, email, etc.)
directly from the ad without going to the website. It can be useful if you want to capture leads from
```
#### •

```
38 39
```
```
40
```
#### •

```
41
```
```
42
42
```
#### •

```
43 44
45
```
#### •

#### •

```
46 47
```
#### •


```
the SERP. If you choose to use it, you’ll need to specify the form fields and have a privacy policy URL.
For a start, you might skip it and focus on driving to your site’s form, but it’s an option for mobile-
heavy audiences. If lead quality via the on-ad form is high in tests, it could be added. You can ask up
to a few questions (Google provides preset questions or fields like Name, Email, Phone, City, etc.).
More questions can yield higher quality but fewer submissions. This asset is shown as a call-to-
action button on the ad (like “Learn more” which pops the form). We mark this as optional –
something to experiment with later.
```
```
Price Asset & Promotion Asset: These might be more relevant to e-commerce or specific
promotions:
```
```
Price assets show a menu of products or service categories with prices (and a link for each). For
example, you could list “Product Photography – from $300, Event Photography – from $500” with
links to those pages. It can make an ad larger and give an idea of pricing upfront (the content
from the doc above suggests price assets are available).
```
```
Promotion assets highlight a sale or special offer with a label (like “10% off holiday offer, Code
HOLIDAY”). If you have a time-bound discount or promo, you can use this.
```
```
Other assets: There are also App assets (if you want to promote app downloads), Affiliate location
(for showing retail chains carrying your product), etc., which likely don’t apply in our scenario.
```
**Implementing Assets:** - In the Google Ads interface, assets can be added at **Account** , **Campaign** , or **Ad
Group** level. - Use **Account-level** for assets that are universally applicable (like a generic callout “100%
Satisfaction Guarantee” that applies to all ads). - Use **Campaign-level** for assets relevant to that service or
location (likely for most of these in our case). - Use **Ad Group-level** if something is highly specific (usually,
we try to keep at campaign level for simplicity, unless an ad group is very distinct). - To add, go to **Assets** in
the left menu, click the blue **+** and choose the asset type. You’ll be prompted to create new or reuse existing
ones. - For sitelinks, callouts, structured snippets: you can either create them at one level and then apply to
others. Google Ads now has an “Asset library” concept where you create an asset and attach it to one or
more campaigns easily. For example, you can create a set of 8 callouts and attach to all campaigns with a
few clicks. - Don’t forget to add descriptions to sitelinks (optional but recommended, as it gives you a two-
line snippet under each sitelink, making your ad even larger – these show especially on desktop searches)

. - Ensure no asset is left blank or with placeholder text (Google might flag or just not show them).

**Performance of Assets:** Google will report on asset performance (how often each asset showed and if it
was clicked). Usually, they don’t all show at once – which ones appear depends on factors like ad rank,
relevance, and available space. The system automatically decides the best combination per auction. The
more eligible assets you have, the more chances your ad has to occupy real estate and gain that advantage
.

In summary, enable as many of these as make sense. For our launch checklist earlier, we had: - 6–8 sitelinks
(covering main services and key pages), - ~8 callouts (highlighting top features/benefits), - 1 structured
snippet (Services list), - Call asset with the phone number, - Location asset linked to GBP, - Potentially a lead
form asset (optional), - Possibly image assets with some portfolio images.

```
48
```
#### •

#### •

```
49
```
#### •

#### •

```
50
```
```
33
```
```
34
```

This thorough use of assets will set your campaign up for a strong quality score and higher probability of
clicks converting.

## Final Pre-Launch Checklist

Before turning the campaigns live, go through a checklist to make sure everything is in order. This ensures
no costly mistakes on launch day:

```
Conversion Tracking Verified: Double-check that your conversion actions (form submits, calls) are
active and receiving test data. Use Google Tag Assistant on the thank-you page, and ensure Google
Ads shows the conversion status as recording data (no tagging errors). If using GA4 import, check
GA4 Realtime when you submit a form (you should see the conversion event) and that it’s marked as
conversion in GA4.
```
```
Primary vs Secondary Conversions: In Google Ads > Conversions, ensure the actions you care
about (e.g., “Lead Form Submit” and maybe “Calls from ads”) are marked Primary (so they count in
the “Conversions” column and for bidding). If you have any secondary ones (like an imported GA
event but you prefer the direct one to be primary), set those appropriately.
```
```
Campaign Settings Review:
```
```
Right locations targeted? (and presence setting used).
Right budget set (not too high or low, and allocated correctly across campaigns).
Bidding strategy chosen appropriately (if Max Conversions, did you select the right conversion goal
in the campaign settings? If Max Clicks, did you put a bid cap if needed?).
Search Network vs Display: confirm Display expansion is off for Search campaigns (unless
intentionally using it).
Language is correct.
```
```
Ad schedule if any restrictions needed (e.g., maybe you only want calls 9-5, you set the call asset
scheduling or ad schedule).
```
```
Ads and Assets:
```
```
Each ad group has at least one RSA, with no glaring errors (no placeholder “Lorem ipsum” text, etc.).
Ad Strength is decent.
The final URLs of ads and sitelinks are correct (go to the correct pages and not broken).
Assets: at least 4 sitelinks (with URLs and preferably descriptions), callouts, structured snippets
added. Call asset with correct number (test by clicking the “Call” button in the ad preview if possible,
to ensure it dials the right number). Location asset showing the correct address. These should be
attached to the campaigns.
```
```
If using images in assets or image extensions, are they approved? (Google might require a review for
images – check the asset status).
```
```
Negative Keywords: Make sure your negative lists are applied to all applicable campaigns. For
example, apply the “Jobs/education” list and others to every campaign except maybe the Brand
```
#### • • • • • • •

```
25
```
- • • • • • • •


```
campaign. Also add any campaign-specific negatives you thought of. (E.g., if in “Website
Development” campaign you want to negative out “photography” terms, though if structure is good,
that shouldn’t be needed much).
```
```
Budget Allocation: Check that the sum of daily budgets across campaigns roughly matches your
planned total spend. Early on, one campaign might spend more and others less depending on
search volume, so monitor and adjust budgets if needed to ensure important campaigns have
enough budget.
```
```
Account-Level Settings: If this is a new account, also verify:
```
```
Correct time zone and currency (should have been set at account creation, not changeable later).
Billing is active (no holds).
No unwanted account-level negatives or placements (rare unless you added some).
```
```
Auto-tagging is ON (by default, Google Ads auto-tagging adds GCLID to URLs for Analytics
integration – ensure it’s on in Settings so GA4 can attribute conversions properly ).
```
```
Landing Page QA: Since ads point to landing pages, do a final check on those pages:
```
```
Do they load quickly and properly on mobile and desktop?
Is the contact form working and sending leads to the right place (and reaching the thank-you page
to fire conversion)?
Is the messaging on the page consistent with the ad (to ensure users don’t get confused)?
```
Once everything looks good, you can proceed to **enable** the campaigns (if they were created but paused).
On launch day, monitor closely for any issues (e.g., disapproved ads/assets notifications, or rapid spend
anomalies).

## Monitoring and Optimizing Performance

Launching the campaigns is just the beginning. Google Ads requires active monitoring and optimization,
especially in the first few weeks, to ensure it’s performing efficiently. Here’s a framework for ongoing
management:

### First 1-2 Weeks (Launch Phase):

**Daily (or every 1-2 days) Check-ins:** - **Search Terms Review:** Navigate to each campaign’s **Search terms**
report (under Keywords). This shows the actual queries people typed that triggered your ads. Look for
**irrelevant queries** and add them as negatives immediately. For example, if you see “food photography
classes” triggering your ad, add “classes” or “class” as a negative. Early on, you may find quite a few;
cleaning them out will improve your spend efficiency quickly. - **Adjust Bids/Budgets if Needed:** If using
automated bidding (Max Conversions), you won’t manually adjust keyword bids. But keep an eye on spend
by campaign vs. conversions coming in. If one campaign is spending a lot without results and another is
limited but performing, you might shift budgets between them. It’s early though, so mostly observe. - **Ad
Approval & Quality:** Check **Ads & assets → Ads** to ensure all ads are approved. If any are disapproved (for
policy), address it (edit text or request review). Also glance at Quality Scores for keywords (1-10 score in

#### • • • • • •

```
12
```
#### •

#### •

#### •

#### •


Keywords view) – initially they might be null or average ~6-7. If you see any 3 or below, something’s off
(maybe ad not relevant to keyword or landing page slow). It might be too early to act, but keep note.

**Lead Quality Feedback:** If possible, as leads start coming in (forms or calls), assess their quality.
Sometimes PPC campaigns can generate spam or poor-fit leads initially. If you notice patterns (e.g., many
people asking for free stuff or job inquiries), think if additional negatives or ad copy clarifications can filter
those (for instance, adding “Hiring a Photographer” in ad copy can sometimes dissuade job seekers, or
adding “Professional Service – not a class” etc., though that uses valuable space).

### Weekly Optimization Routine (After initial two weeks and ongoing):

Each week, perform deeper optimizations: - **Search Terms and Negative Expansion:** This is ongoing. Every
week, add any new negatives. Also, identify any **positive search terms** that are performing well
(converting) but that you hadn’t explicitly added as keywords. **Promote** those to keywords (in exact match
especially). For example, if you only had “food photographer perth” but see many converting searches for
“food styling photographer Perth”, add that as a keyword in phrase/exact. - **Refine Ad Groups/Keywords:** If
an ad group is picking up two distinct themes in search terms, consider splitting it. For instance, suppose
your “Event Photographer Perth” ad group also starts showing for a lot of “wedding photographer” queries
(if not negatived yet and if you chose to allow it). You might split “Wedding Photography” into its own ad
group with tailored ads, or decide to negative it if you don’t want those. The idea is to keep each ad group
tightly relevant. - **Ad Performance:** Check metrics like CTR (click-through rate) and conversion rate by ad.
RSA makes it tricky to evaluate individual headline combos, but you can see overall ad stats. If one ad
group’s RSA isn’t getting a good CTR (compared to others or relative to search avg), you may try adding a
second RSA with some different messaging to test. Also, look at the Asset report: Are your sitelinks/callouts
showing? Do some have low performance (maybe rewrite them for clarity or appeal)? - **A/B Test Ad Copy:**
Every couple of weeks, consider rotating in a new headline or two (or swapping out a low-performing
description) within the RSA to test improvements. Keep an eye on **Ad Strength** – if you make changes and it
drops, address any suggestions. - **Landing Page Improvements:** Use GA4 or Google Ads’ **Behavior** metrics
(like bounce rate, time on site if imported) to see how users engage after clicking. If a particular campaign
has lots of clicks but low conversion rate, the landing page might need optimization (maybe the form is
hard to find, or the content doesn’t match what the ad promised). Tweaking landing pages (better
headlines, adding testimonials, clarity in the offer) can boost conversion rates significantly. - **Bid Strategy
Adjustments:** After you have ~15-30 conversions in a campaign, evaluate performance. If using Max Clicks,
it might be time to switch to **Maximize Conversions** or even **Target CPA**. If using Max Conversions, see
what average CPA you’re getting and whether it meets your goals. You could then set a Target CPA slightly
above that average (or at the average) to give Google a goal. However, only set tCPA if you have enough
volume; otherwise, it might limit impressions. Google’s recommendations or the bid strategy report can
guide this. - **Add Broad Match (maybe):** Once you have a solid negative list and some conversion data, you
could experiment with adding **Broad match keywords** for some ad groups to see if Google finds additional
converting queries. When doing this, keep an eye on search terms more closely. Broad can help you
discover new keywords, but always manage it with negatives and strong bidding signals (i.e., conversion
tracking). If a broad keyword spends a lot without good results, pause it.

### Monthly or Periodic Deeper Analysis:

```
Performance by Time/Location: Look at Reports or Segments for performance by hour of day, day
of week, or by geography (if you have multiple locations or a wide area). For example, if you see
```
#### •


```
almost all conversions happen on weekdays, you might lower bids or budgets on weekends. Or if a
certain suburb or zip code produces poor leads, exclude it.
Quality Score Components: If some important keywords have low Quality Scores, check the
components (Expected CTR, Ad Relevance, Landing Page Experience). Address what you can: for ad
relevance – perhaps your ads need to mention that keyword explicitly. For landing page – ensure the
page is indeed relevant and perhaps improve load speed if that’s an issue (use PageSpeed Insights).
Budget Reallocation: Identify which campaigns give the best Cost per Conversion (CPCvs. If
“Product Photography” campaign yields leads at half the cost of “Event Photography”, and you have
unlimited capacity, you might want to put more budget into the product one to get more total leads.
On the other hand, if one campaign is your priority service (maybe higher profit), you might
intentionally invest more there even if CPA is higher. Adjust daily budgets accordingly.
Scaling: If you are meeting your CPA goals and have capacity for more business, consider scaling up:
Increase budgets on campaigns that are limited by budget (Google Ads will show “Limited by
budget” if applicable, meaning it could get more exposure if budget allowed).
Expand geographically if it makes sense (maybe target a broader region or additional cities, if
serviceable).
Add new keywords or campaign types (e.g., try a Display Remarketing campaign to re-engage past
site visitors with banner ads, or a Performance Max campaign for a holistic approach).
```
```
Ensure your negative lists are also applied to new efforts accordingly.
```
```
Remarketing and Audiences: After a while, you will accumulate a list of people who clicked but
didn’t convert. Setting up RLSA (Remarketing Lists for Search Ads) can be beneficial: you can add
your site visitors as an Observation audience to your search campaigns and bid slightly higher for
them if you want (since someone who already visited might be more likely to convert on a return
search). In Google Ads, you’d create an audience of “All Visitors (last 30 days)” from GA4 or Ads, then
in Campaign settings under Audiences, add it as Observation and set, say, +20% bid adjustment. This
is an advanced tweak to squeeze more out of the interested users.
```
```
Google’s Recommendations & Score: Google Ads provides a Optimization Score with suggestions.
Treat these with caution. Not all recommendations are good for your goals (e.g., “add broad
keywords” or “raise budgets” – only do so if it aligns with your strategy). However, recommendations
like “Add audience observation” or “Use optimized targeting” might appear – evaluate them. Since
you want control on lead quality, you might avoid “optimized targeting” (which auto-expands beyond
your keywords) initially. The score itself doesn’t directly affect performance, but acting on useful
recommendations (and dismissing the irrelevant ones) keeps the account tidy.
```
In summary, optimization is about **iteratively improving targeting and ads based on data** : - Trim what’s
not working (irrelevant queries, poor keywords, underperforming ads). - Invest more in what is working
(best keywords, ads, times). - Experiment carefully with new ideas (new ad copy, new keywords or bid
strategies). - Always measure the impact of changes on your conversion volume and cost per conversion.

#### • • • • • • • • •


## Advanced Campaign Types and Features

While Search campaigns are often the cornerstone for active intent (people searching for what you offer),
Google Ads in 2025 offers other powerful campaign types and features you might integrate into your
strategy:

```
Performance Max Campaigns: As mentioned, Performance Max (PMax) uses AI to show ads across
all Google channels. It’s goal-driven (you must have conversion tracking set up). PMax is great for
capturing additional conversions that search might miss, and for e-commerce with a product feed. It
will find customers on YouTube, Gmail, Display, Discover, as well as Search (including some keyword-
less search ads for broad matches). PMax now includes more controls than before – for example, you
can add negative keyword lists at the campaign level to steer it away from certain terms , and
get channel performance reports (seeing how it did in YouTube vs Search, etc.). To use PMax
effectively, provide a good set of assets: headlines, descriptions, images, logos, videos (optional but
if not provided, Google will auto-generate video which may be suboptimal). For Amplify’s case, a
PMax campaign could be set up to promote all services with a mix of display and search inventory.
However, one should be careful: if Search campaigns are already covering core keywords, you’d want
to add those as negatives in PMax to avoid overlap. PMax is like a black box but can drive volume; it’s
something to test once your search campaigns are stable.
```
```
Demand Gen Campaigns: This new campaign type (rolled out around 2023-2024) is the evolution of
Discovery campaigns, tailored for visually engaging ads across YouTube Home feed, YouTube Shorts,
Discover feed, and Gmail. It’s aimed at mid-funnel or social-type outreach rather than search intent.
You can use images and videos, and target specific audiences (like custom segments, affinity, etc.). If
your goal is to generate awareness or interest (not just capture intent), Demand Gen can
complement your search campaigns. For example, you could run a Demand Gen campaign targeting
people interested in “Food & Dining” with a catchy video ad of a photoshoot, to create awareness of
your brand – then later, those people might search for you or at least recognize you.
```
```
Remarketing Display Campaign: Separate from PMax, you might want a classic Display
remarketing campaign. This would show banner ads to people who visited your site (or a specific
page) as they browse other websites. It’s a good way to stay top-of-mind. Setting it up requires
adding your GA4 or Ads audience list of website visitors to a Display campaign and creating image
ads (or responsive display ads which use headlines, descriptions, images similarly to PMax). This
typically has low cost and can bring back some visitors to convert on a second try.
```
```
YouTube Video Campaigns: If you have video content (like a showreel of your work or client
testimonials), running a YouTube ad campaign can be valuable for brand building. For lead
generation, YouTube can introduce your services to new prospects. You can also use Video Action
Campaigns that show ads in stream with a call-to-action, which can drive people to your site. This
tends to be more top-of-funnel, but with the right targeting (custom intent audiences who recently
searched certain keywords), it can find interested users.
```
```
Geo or Local Campaigns: If foot traffic or local presence is important, consider Local campaigns
(though these are now largely folded into PMax for store goals). Also, ensure you utilize Location
targeting and extensions as discussed, since that’s crucial for local businesses to appear in map
results.
```
#### •

```
51
```
#### •

#### •

#### •

#### •


```
Automated Rules and Scripts: As you manage multiple campaigns, you might use automated rules
to do things like pause ads that have low CTR, raise budgets on days with good conversion rate, etc.
For beginners, this might not be needed, but it’s something to be aware of. Google Ads Scripts
(JavaScript programs) can also automate complex tasks (like pausing keywords with high cost/no
conv). This is advanced and optional.
```
```
Experimenting with Bid Strategies: Once you have significant data, you can try Google’s other bid
strategies: e.g., Target CPA (we mentioned) or Target ROAS if you assign values to conversions. Also,
Maximize Conversion Value (with ROAS target) is more for ecom, but if you gave different values to
different conversions (like a call being worth more than a form), that could be used. Generally for
lead gen, Target CPA is common.
```
```
Seasonality and Adjustments: If your business has seasonality (say certain months are peak), plan
ahead. Increase budgets or bids leading into peak season. Use the “Seasonality Adjustment” tool in
Google Ads if you plan a short drastic change (though that’s mainly if you use target CPA or ROAS
and you expect conversion rates to temporarily spike or drop – this feature tells Google’s bidding to
anticipate that). For example, if you run a big promotion next week and expect double conversions, a
seasonality adjustment can prevent the algorithm from lowering bids thinking the high conv rate is a
fluke.
```
```
Conversion Value Rules: In GA4 or Ads, if certain types of conversions are more valuable (e.g., a
phone call leads to bigger projects than a form fill), you can adjust their values or use conversion
value rules to prioritize one. Or if leads from certain locations are more lucrative, you can have
conversion value rules boosting value for those, which smart bidding will then favor.
```
Google Ads is continuously evolving. In 2025, there’s a strong emphasis on AI-driven features (for example,
Google’s rollout of **AI-powered campaign suggestions and automatically created assets** ). Keep an eye
on new features in the interface: - The **Recommendations** tab might show things like “enable automatically
created assets” (which uses Google AI to generate additional headlines/descriptions for your RSAs based on
your site). You can try these if you feel adventurous, but always monitor their content for accuracy/brand
voice. - Google also introduced a feature called **Conversational campaign setup** (beta) where you can chat
with an AI to create a campaign. It’s interesting, but for training purposes, knowing the manual method as
we’ve done is crucial for understanding how everything works.

Finally, always adhere to Google Ads policies and ensure you’re using the platform’s features to enhance
user experience (relevant ads, not just for gaming the system). Google rewards relevance and quality.

## Measuring Results and Reporting

To gauge success, you need to regularly look at the metrics and perhaps produce reports for stakeholders.
Key metrics for lead-generation campaigns include:

```
Conversions: The number of conversions (form submissions, calls) is the primary success metric.
Track this per campaign and in total.
Cost per Conversion (CPA): How much you spent on average per lead. This is your cost per lead;
compare it with the value of a lead to ensure profitability.
```
#### • • • • • •


```
Conversion Rate: The percentage of clicks that converted. This helps judge the quality of traffic. A
higher conversion rate means your keywords and ads are attracting the right audience and your
landing page is effective. If one campaign has a much lower conversion rate than another,
investigate why (targeting, ad message, or landing page mismatch).
Clicks and CTR: Click-through rate (CTR) is the percentage of impressions that turned into clicks. A
healthy CTR on Search could be anywhere from 3% to 15% depending on position and brand vs non-
brand. A low CTR might indicate your ads aren’t resonating or competitors have more compelling
ads. Improving ads/keywords can raise CTR. However, focus on CTR in conjunction with conversion
rate (you want relevant clicks, not just many clicks).
Impressions & Impression Share: Impression share tells you how often your ad is showing out of
the total opportunities. If it’s low due to budget (“Impression share lost to budget”) and your
campaign is profitable, you might increase budget. If it’s low due to rank, consider increasing bids
(or improving quality) – or accept that for some broad terms you won’t win all auctions.
Quality Score: As mentioned, this is more of a diagnostic for your keywords (scale 1-10). Use it to
identify areas to improve ad relevance or landing page experience.
```
**Google Ads Reporting Tools:** - **Campaign and Ad Group view:** The default interface where you can see
metrics by campaign, ad group, ad, keyword, etc. Customize columns to show the metrics above (especially
conversion-related columns). You can save column sets for convenience. - **Segments:** Use segmenting to
break down data, e.g., by device (see if mobile vs desktop has different performance – maybe you need to
adjust bids or ensure your site is mobile-optimized if mobile conv rate is low), or by day of week, etc. -
**Reports (Custom Reports):** Google Ads allows creation of custom tables or charts in the Reports section
(accessible via the top menu or left menu under “Insights and reports”). For example, a report showing
conversions by day, or a specific combination of dimensions. This can be useful for periodic reporting or
analysis outside the default view. - **Google Analytics 4:** Since GA4 is linked, you can also use GA4’s reports
to see post-click behavior. GA4 will show Google Ads traffic and you can verify metrics like engagement
time, events, etc., to supplement understanding. If you imported Google Ads cost data to GA4 (GA4 can
automatically import cost for linked Google Ads), you can see ROAS or cost per session metrics in GA as
well. - **Looker Studio (formerly Data Studio):** If you need to prepare a dashboard for a team or client,
Looker Studio can visualize Google Ads data nicely. It can combine GA4 and Google Ads data as well if
needed. For internal training, perhaps not needed immediately, but as an analyst it’s a useful skill to
automate reporting.

**Lead Quality Tracking:** Not all conversions are equal. If possible, track offline what happens to leads: - Did
they result in a sale? If you can tag conversions with a lead ID and later see which ones closed, that’s
valuable. In Google Ads, you could then import an “Offline Conversion” (like “Deal Won”) for those,
attributing it back to the original click. This requires capturing the GCLID for each lead and later matching it.
It’s complex but powerful because it lets Google’s algorithm optimize for actual revenue or qualified leads
instead of just any form fill. - If offline import is too complex, at least maintain a separate spreadsheet or
CRM where you mark lead quality. Over time, observe if certain campaigns or keywords produce better
leads. That insight can guide budget allocation (e.g., maybe “Website Development” leads often are bigger
projects, so even if the CPA is higher than photography leads, it might be worth more investment).

**Periodic Performance Reviews:** At least monthly, do a summary: - How many leads did we get from
Google Ads? - What was the total spend? Hence, cost per lead overall. - Which campaign had the best CPL
(cost per lead)? Which had the worst? - Did we hit our targets (e.g., < $X per lead or Y number of leads)? -
Compare month-over-month trends: are we improving? (e.g., CTR up, CPA down – great. Or conversions
dropped – investigate if it’s a seasonal thing or competitor activity increased.)

#### •

#### •

#### •

#### •


If you notice trends like rising CPCs, check the auction insights report – maybe a new competitor entered.
You might need to adjust bids or improve ads to maintain results.

Also, watch for **Google Ads policy or platform changes** (Google often updates the UI or features, as you
saw with the new Goals section and Data Manager). Staying informed via the Google Ads Announcements
page or industry blogs (Search Engine Land, etc.) will help you proactively adapt.

## Conclusion and Next Steps

By following this guide, you should be able to go from a fresh account to a fully functional Google Ads
campaign setup, including robust conversion tracking and a structured approach to keywords, ads, and
optimization. We covered everything from initial account linking and tracking configuration, through
campaign creation step-by-step, to ongoing management techniques and advanced features.

**Key takeaways:** - Always ensure tracking is in place **before** spending significant budget – data is your
compass for optimization. - Structure your campaigns and ad groups logically so that ads are highly
relevant to the keywords and audience. - Use all relevant features (ad assets, negative keywords, call
tracking) to maximize performance and lead quality. - Treat the first month as a learning period: gather
data, refine targeting, and don’t be afraid to pause what’s not working. - Leverage Google’s automation
(Smart Bidding, broad match with caution, Performance Max, etc.) once you have sufficient data, as it can
unlock scale – but keep a human eye on the outputs. - Continuously improve landing pages and follow
through – ads can drive leads, but closing the sale is the ultimate goal, so ensure the sales process after the
lead is solid.

With the fundamentals in place, the next steps are to actually implement these campaigns and then
maintain a steady optimization routine as described. Over time, this will become a cycle of measure ->
analyze -> optimize -> repeat. Encourage team members to stay curious and up-to-date, since Google Ads in
2025 is heavily influenced by AI and will keep evolving (for example, new AI features like automatically
created assets or improved AI recommendations are coming regularly ).

By training employees with this comprehensive approach, you’ll build a strong in-house capability to run
efficient and effective Google Ads campaigns that generate real business results. Happy advertising!

**Sources:**

```
Google Ads Help Center – Official guidance on campaign setup and features
AnalyticsMates – Insights on GA4 vs Google Ads conversion tracking and data delays
Google Ads New Features Announcements (2025) – Notable changes like call asset transitions
CustomerLabs Blog – Walkthrough of new Google Ads UI for conversion tracking (Goals >
Conversions)
Digital Agency Bangkok – Definition of Google Ads platform reach
Google Ads Best Practices – Using assets to improve ad performance
```
How Much Does Google Ads Cost? Pricing & Charging Explained
https://digitalagencybangkok.com/google-ads-cost-pricing/

```
52
```
#### •^5333545

#### •^17

#### •^45

#### •^13

#### •^1

#### •^3338

```
1 2
```

[GA4] Product linking: Link Google Analytics 4 properties and Google Ads - Google Ads Help
https://support.google.com/google-ads/answer/7519537?hl=en

Connect Google Ads to Google Analytics
https://support.google.com/analytics/answer/9379420?hl=en

Product Linking: Link your Google Business Profile to Google Ads - Google Ads Help
https://support.google.com/google-ads/answer/13450314?hl=en

Link a Google Ads account to Merchant Center
https://support.google.com/google-ads/answer/12499498?hl=en

New Google Ads UI Update: A Step-by-Step Guide (2025) • CustomerLabs 1PD Ops
https://www.customerlabs.com/blog/new-google-ads-ui-update-a-step-by-step-guide-2025/?
srsltid=AfmBOopx2ed1tKOEXv_lJNX2hf9U520yYPYDlSnRLg-Rg6HzoaFLsLHj

How GA4 vs. Google Ads Attribution Uncovers Deeper Conversion Insights
https://www.analyticsmates.com/post/how-ga4-vs-google-ads-attribution-uncovers-deeper-conversion-insights

[GA4 Migration] Switch to Google Analytics 4 conversions manually
https://support.google.com/google-ads/answer/12495138?hl=en

The Right Way To Set Up Google Ads Call Tracking | Intigress
https://intigress.com/blog/tracking/google-ads-call-tracking

Create a Search campaign - Google Ads Help
https://support.google.com/google-ads/answer/9510373?hl=en

UI reference map - Google Ads Help
https://support.google.com/google-ads/answer/13359357?hl=en

How to Set Up and Run your First Google Ads Campaign
https://business.google.com/in/google-ads/how-ads-work/

Use as many asset types as possible -
Google Ads Help
https://support.google.com/google-ads/answer/12073962?hl=en

New features & announcements - Google Ads Help
https://support.google.com/google-ads/announcements/9048695?hl=en

```
3 4 5 12
```
```
6
```
```
7 8 9 10
```
```
11
```
```
13
```
```
14 15 17
```
```
16
```
```
18 19 20 21 22 23
```
```
24 25 26 27 28 29 53
```
```
30
```
```
31
```
```
32 33 34 35 36 37 38 39 40 41 42 43 44 46 47 48 49 50
```
```
45 51 52
```

