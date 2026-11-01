# Website Audit Checklist

A repeatable checklist for reviewing a client's website. Use it to find what is wrong, explain it in plain English, and agree what to fix first. It answers the two questions clients ask most:

1. **"Why are people not visiting my website?"** (a traffic problem)
2. **"Why are visitors not becoming customers?"** (a conversion problem)

It covers brochure/service sites, local businesses, e-commerce stores and SaaS/product sites. Every check can be done with **free tools**. Paid tools (Semrush, Ahrefs) are mentioned only as optional shortcuts.

---

## 1. How to use this checklist

### Steps
1. **Get access (or ask for it).** Ideally: Google Search Console, Google Analytics 4 (GA4), Google Business Profile (if local), and the CMS or hosting login. If the client has none of these, that is your first finding (see section A).
2. **Start with the diagnosis guide (section 2)** to choose where to look first, then work through the sections.
3. **Score each item:** `2` = pass, `1` = partly done or inconsistent, `0` = fail or missing, `N/A` = not relevant to this site.
4. **Give each failure a severity:**
   - **Critical**: stops the site being found or used, or loses money now (site not indexed, checkout broken, no tracking).
   - **High**: clearly costs visitors or enquiries (slow mobile pages, no clear call to action).
   - **Medium**: a real weakness, but not urgent (missing alt text, thin secondary pages).
   - **Low**: polish.
5. **Write up findings** using the template in section 8 and the scorecard in section 9. Lead with the 5 to 10 highest-impact fixes, not the whole list.

### Free tools used
| Purpose | Free tool | Optional paid equivalent |
|---|---|---|
| Search visibility, indexing, queries | Google Search Console | Semrush / Ahrefs site audit and rank tracking |
| Visitors, behaviour, conversions | Google Analytics 4, Looker Studio | n/a |
| Speed and Core Web Vitals | PageSpeed Insights, web.dev/measure, Chrome DevTools Lighthouse | n/a |
| Crawl the site for errors | Screaming Frog (free to 500 URLs), browser "View source" | Semrush Site Audit, Ahrefs Site Audit |
| Structured data | Google Rich Results Test, Schema Markup Validator | n/a |
| Mobile usability | Chrome DevTools device mode, a real phone | n/a |
| Accessibility | Lighthouse, WAVE, keyboard-only navigation | n/a |
| Security headers, HTTPS | SecurityHeaders.com, SSL Labs | n/a |
| Backlinks | Google Search Console "Links" report, Bing Webmaster Tools | Ahrefs, Semrush Backlink Analytics |
| Keywords and competitors | Google autocomplete, "People also ask", Google Keyword Planner, Google Trends | Semrush, Ahrefs |
| Broken links | Screaming Frog, Search Console coverage report | Ahrefs, Semrush |
| Local listing | Google Business Profile, Bing Places, manual NAP search | BrightLocal, Semrush Listing Management |
| Behaviour (heatmaps, recordings) | Microsoft Clarity (free) | Hotjar |

**Note:** if a paid tool is not available, the free column is enough for every item below.

---

## 2. Diagnosis guide: start here

### A. "Nobody is visiting"
Run these in order. Stop at the first failure and fix it before moving on.

1. **Is tracking working?** If there is no analytics, you cannot trust any "no visitors" claim. Run section A.
2. **Is the site indexed?** Search `site:clientdomain.com` in Google. Check Search Console "Pages" report. Zero or very few pages indexed means a technical problem. Run section B.
3. **Do they appear for anything?** In Search Console "Performance", are there impressions?
   - **No impressions:** indexing, thin content, no target keywords. Run sections B and C.
   - **Impressions but few clicks:** weak titles and descriptions, low rankings (position 8+), or rich results missing. Run section C.
4. **Are the pages targeting what people really search for?** Run the keyword and intent checks in section C.
5. **Is the site fast and usable on mobile?** Google ranks and users leave on this. Run sections D and E.
6. **Does the site have authority?** Few or no links and mentions from other sites. Run section 4.
7. **Local business?** Run the Local module (section 5.1). For many local firms this is the biggest lever.
8. **Is there any marketing at all?** Social, email, paid, partnerships, print. A good site without promotion gets no visitors.

### B. "People visit but do not convert"
1. **Can you tell what a "conversion" is?** Form submit, call click, purchase, sign-up, booking. If it is not tracked, fix section A first.
2. **Is the traffic the right traffic?** Check what visitors searched for (Search Console) and where they came from (GA4). Wrong audience is a content/SEO problem, not a design problem.
3. **Does the first screen explain the offer in five seconds?** Run section F.
4. **Is there a clear next step on every page?** Run section F.
5. **Do visitors trust the business?** Run section G.
6. **Is the site slow or broken on mobile?** Most traffic is mobile. Run sections D and E.
7. **Is the form, booking or checkout hard to complete?** Run section F, and the E-commerce or SaaS module in section 5.
8. **Where do people drop off?** In GA4 look at landing pages, exits and funnel steps; in Clarity watch 5 to 10 session recordings.

### Quick map from symptom to sections
| What the client says | Likely cause | Go to |
|---|---|---|
| "Google doesn't show my site" | Not indexed, blocked, new site | B |
| "I'm on page 5" | Weak content, no authority, wrong keywords | C, 4 |
| "I get impressions but no clicks" | Poor titles/descriptions, low ranking | C |
| "Traffic but no enquiries" | Unclear offer, weak CTA, no trust | F, G |
| "Mobile visitors leave straight away" | Slow, hard to use on a phone | D, E |
| "People add to basket but don't buy" | Checkout friction, hidden costs, no trust | 5.2 |
| "Free trial sign-ups don't activate" | Onboarding, unclear value | 5.3 |
| "Competitors outrank us" | Content gaps, authority | C, 4, 6 |
| "We had traffic and lost it" | Technical change, penalty, redirects, seasonality | B, A |

---

## 3. Core checklist

Format for each item: **Check.** Why it matters (say this to the client). *How to verify.* Severity if failed.

### A. Tracking and measurement
- [ ] **GA4 is installed on every page and receiving data.** Without it nobody knows what is working. *GA4 Realtime report; Tag Assistant.* **Critical**
- [ ] **Google Search Console is set up and verified** (domain property if possible). It is the only source of the real search queries and indexing problems. *Search Console > Settings.* **Critical**
- [ ] **Conversions are defined and tracked** (form submit, phone click, email click, purchase, sign-up). Visits mean little without outcomes. *GA4 > Admin > Events, mark as key events.* **Critical**
- [ ] **Phone and email link clicks are tracked** (`tel:`, `mailto:`). Many leads never use the form. *GA4 events or Tag Manager.* **High**
- [ ] **Thank-you page or event fires after a form submission or purchase.** Proves the conversion really happened. *Submit a test form and check Realtime.* **High**
- [ ] **No duplicate or internal traffic skewing data** (own team filtered, no double tags). *Tag Assistant; GA4 internal traffic filter.* **Medium**
- [ ] **Cookie consent is respected before tracking** (UK/EU). Required by law and protects the client. *Load the site in a clean browser; check cookies before accepting.* **High**
- [ ] **Search Console and GA4 are linked, and more than one person has access.** Avoids losing data when one person leaves. **Medium**
- [ ] **Bing Webmaster Tools set up** (optional, also feeds some AI search). **Low**

### B. Technical SEO
- [ ] **Site is HTTPS everywhere, and HTTP redirects to HTTPS** (single redirect, to one preferred version of `www` / non-`www`). Browsers warn on insecure sites. *Type the `http://` and non-preferred URLs.* **Critical**
- [ ] **Pages are indexable.** No stray `noindex`, no `robots.txt` block of the whole site. A site left on "discourage search engines" after launch is common. *View source for `<meta name="robots">`; open `/robots.txt`; Search Console URL Inspection.* **Critical**
- [ ] **An XML sitemap exists, lists only live canonical pages, and is submitted in Search Console.** Helps Google find everything. *Open `/sitemap.xml`; Search Console > Sitemaps.* **High**
- [ ] **Search Console "Pages" report: most important pages are indexed; errors and exclusions are understood.** Pages not indexed cannot rank. **High**
- [ ] **Each page has one canonical URL** (`rel=canonical`) and no duplicate versions (trailing slash, parameters, uppercase). Splits ranking between copies. *View source; Screaming Frog.* **High**
- [ ] **No broken links or 404s on internal pages; redirects are single-step (301)** with no chains or loops. Wasted visits and wasted ranking. *Screaming Frog.* **High**
- [ ] **A friendly custom 404 page exists** with links back to key pages. **Medium**
- [ ] **Clean, readable URLs** (short, lowercase, words not IDs). **Low**
- [ ] **Logical site structure: key pages within 3 clicks of the home page**, no orphan pages. *Screaming Frog crawl depth.* **Medium**
- [ ] **Structured data (schema) present and valid:** Organization/LocalBusiness, Service or Product, FAQ where genuine, Breadcrumb, Article. Can earn rich results. *Rich Results Test.* **Medium**
- [ ] **JavaScript-built content is visible to search engines** (rendered HTML contains the text; important content is not loaded only after interaction). A fully client-rendered site may show Google an empty page. *URL Inspection > View crawled page; View source vs inspected DOM.* **High**
- [ ] **International/multi-language sites: `hreflang` correct.** **Medium**
- [ ] **Staging/test copies are not indexed.** **Medium**
- [ ] **Server errors (5xx) and uptime** are acceptable. *Search Console "Crawl stats"; uptime monitor (free: UptimeRobot).* **High**

### C. On-page and content SEO
- [ ] **Every page has a unique, descriptive title tag** (about 50 to 60 characters, main keyword near the front, brand last). The title is what appears in Google and drives clicks. *Screaming Frog > Page Titles.* **High**
- [ ] **Every page has a unique meta description** (about 120 to 155 characters, benefit plus call to action). Improves click-through. **Medium**
- [ ] **One H1 per page that says what the page is about; headings follow a logical H2/H3 order.** Helps users and search engines scan. **High**
- [ ] **Each important page targets one clear search intent/keyword set** found through research, not guesswork. *Google autocomplete, People also ask, Keyword Planner, Search Console queries.* **High**
- [ ] **Content answers the question the searcher has, better than the pages currently ranking.** Search the target keyword and compare. **High**
- [ ] **Separate pages for each main service/product/location** rather than one page for everything. Gives something to rank for each. **High**
- [ ] **No thin, duplicated or copied content** (manufacturer descriptions, location pages with swapped place names). *Copyscape free check; Screaming Frog duplicates.* **High**
- [ ] **Internal links connect related pages with descriptive anchor text.** Spreads ranking and guides users. **Medium**
- [ ] **Images are compressed, correctly sized, have meaningful alt text and file names.** Speed, accessibility, image search. **Medium**
- [ ] **Content is up to date and shows real expertise** (author/business details, dates, specifics, examples, real photos). Matches Google's helpful-content and E-E-A-T guidance. **Medium**
- [ ] **A blog/resources area exists if it supports the business** and covers questions customers ask, with a plan to keep it fresh. **Medium**
- [ ] **Branded search works:** searching the business name shows the site first, with sitelinks and a correct snippet. **Medium**
- [ ] **Pages are clear for AI search/answer engines:** direct answers near the top, clear headings, FAQs where genuine, consistent business facts. **Low**

### D. Performance and Core Web Vitals
- [ ] **Largest Contentful Paint (LCP) is 2.5 s or less on mobile.** Slow pages lose visitors and rank lower. *PageSpeed Insights (field data first, then lab data).* **High**
- [ ] **Interaction to Next Paint (INP) is 200 ms or less.** The page responds quickly to taps/clicks. **High**
- [ ] **Cumulative Layout Shift (CLS) is 0.1 or less.** Content does not jump around while loading. **Medium**
- [ ] **Hero and large images are compressed, modern format (WebP/AVIF), correctly sized, and lazy-loaded below the fold.** The most common cause of slow pages. **High**
- [ ] **No unnecessary scripts, plugins, fonts or third-party widgets** blocking the page. *Lighthouse "Reduce unused JavaScript", network tab.* **Medium**
- [ ] **Caching and compression (gzip/brotli) are enabled; a CDN is used where the audience is wide.** **Medium**
- [ ] **Hosting response time (TTFB) is under about 800 ms.** **Medium**
- [ ] **Video is not auto-playing a large file on mobile.** **Low**

### E. Mobile, usability and accessibility
- [ ] **Site works properly on a real phone** (no sideways scrolling, text readable without zooming, tap targets at least about 44 px apart). Most traffic is mobile. *Test on at least one iPhone and one Android.* **Critical**
- [ ] **Navigation is simple:** clear menu labels, 7 or fewer top-level items, easy to find contact and the main service. **High**
- [ ] **Search or filters work on larger catalogues.** **Medium**
- [ ] **No intrusive pop-ups or interstitials that cover content on mobile.** Annoys users; can affect ranking. **Medium**
- [ ] **Colour contrast meets WCAG AA (4.5:1 for body text).** *Lighthouse, WAVE.* **Medium**
- [ ] **Everything can be used with the keyboard only; focus is visible.** *Press Tab through the page.* **Medium**
- [ ] **Forms have labels, helpful error messages, and work with autofill.** **Medium**
- [ ] **Images and icons carry text alternatives; no important text inside images.** **Medium**
- [ ] **Consistent design, fonts and spacing across pages.** Looks credible. **Low**
- [ ] **Print/zoom/dark-mode behave sensibly** (if offered). **Low**

### F. Conversion and messaging
- [ ] **Above the fold (first screen) says what you do, who for, and why choose you** in plain words, without jargon. Visitors decide in seconds. **Critical**
- [ ] **One primary call to action per page, visible without scrolling and repeated lower down** (e.g. "Get a free quote", "Book a call"). Buttons use specific, benefit-led text, not "Submit". **Critical**
- [ ] **Clear contact route:** phone number (click-to-call on mobile), email, form, address/hours. Easy to find from every page. **Critical**
- [ ] **Forms are short:** only ask what you truly need, no forced account creation, privacy note beside the form. *Count the fields; try it on a phone.* **High**
- [ ] **Form works and notifies someone:** test a submission, check it arrives, check the autoresponder, check spam folder. Silent form failures are common. **Critical**
- [ ] **A clear explanation of the offer:** what is included, who it is for, process steps, and pricing or "from" pricing/ranges where possible. Hidden pricing causes drop-off. **High**
- [ ] **The visitor's likely objections are answered on the page** (cost, time, risk, "will it work for me?") with FAQs, guarantees, process. **High**
- [ ] **Every service/product page has its own CTA and next step**, not a dead end. **High**
- [ ] **Message matches the source:** ad/search result/social post leads to a page that continues the same promise. **High**
- [ ] **Offer or promotion is real, dated if time-limited, and not misleading.** **Medium**
- [ ] **A lower-commitment option exists** for those not ready to buy (newsletter, guide, quote calculator, free audit, chat). **Medium**
- [ ] **Lead follow-up exists:** replies within a working day, a process for enquiries, CRM or at least a shared inbox. Many "website problems" are follow-up problems. **High**
- [ ] **Analytics shows where visitors drop off, and that funnel has been looked at** (landing page, then key page, then form, then thank-you). **Medium**

### G. Trust and credibility
- [ ] **Real reviews or testimonials shown** (with names, photos, or source links such as Google reviews). **High**
- [ ] **Case studies or before/after examples with specifics and results.** **High**
- [ ] **Real team, business and location information** (About page with photos, names, years trading, company number). **High**
- [ ] **Business details match across the site, Google Business Profile and directories** (name, address, phone). **Medium**
- [ ] **Accreditations, memberships, guarantees, awards, client logos shown where genuine.** **Medium**
- [ ] **Privacy policy, cookie policy, terms visible in the footer; returns, delivery and refund policies for shops.** **High**
- [ ] **Professional look: no broken images, typos, outdated dates, stock-photo-only pages, dead social links.** **Medium**
- [ ] **Secure padlock, no mixed-content warnings, trusted payment badges at checkout.** **High**
- [ ] **Active social profiles linked, and not abandoned.** **Low**

### H. Security and compliance
- [ ] **Valid SSL certificate that auto-renews.** *SSL Labs.* **Critical**
- [ ] **Security headers set** (HSTS, X-Content-Type-Options, Content-Security-Policy where practical). *SecurityHeaders.com.* **Medium**
- [ ] **CMS, plugins and themes are up to date; admin accounts use strong passwords and two-factor.** **High**
- [ ] **Regular backups exist and a restore has been tested.** **High**
- [ ] **Spam protection on forms (honeypot, reCAPTCHA/Turnstile).** **Medium**
- [ ] **UK GDPR / PECR: privacy notice explains what data is collected; cookie consent before non-essential cookies; marketing opt-in is not pre-ticked.** **High**
- [ ] **Accessibility statement or at least no obvious barriers** (relevant for public-facing and larger organisations). **Low**
- [ ] **Business legal information shown where required** (company name, number, registered address, VAT number for UK limited companies and online sellers). **Medium**

---

## 4. Off-site: authority and links
- [ ] **Backlink profile checked:** number of referring domains, quality, any spammy links. *Search Console Links report; Ahrefs/Semrush optional.* **Medium**
- [ ] **Links from relevant local, industry, supplier, partner and press sources** exist or have a plan. **Medium**
- [ ] **Brand mentions without a link are identified and turned into links.** **Low**
- [ ] **Social profiles, YouTube, LinkedIn, industry directories** use consistent name and link back. **Low**
- [ ] **No toxic link patterns or manual actions.** *Search Console > Manual actions.* **High**

---

## 5. Add-on modules (use only those that apply)

### 5.1 Local business
- [ ] **Google Business Profile claimed, verified, complete** (categories, services, hours, photos, description, products, booking link). **Critical**
- [ ] **Name, address and phone (NAP) are identical** on the site, Google, Bing Places, Facebook and directories. **High**
- [ ] **Reviews: volume, rating, recency, and replies to all reviews.** There is a process to ask every happy customer. **High**
- [ ] **Service-area and location pages are genuinely distinct and useful**, not copies with a different town name. **High**
- [ ] **LocalBusiness schema with address, hours, geo, phone.** **Medium**
- [ ] **Embedded map and clear directions on the contact page.** **Low**
- [ ] **Listings in relevant UK directories** (Yell, Thomson Local, Checkatrade, Trustpilot, trade bodies). **Medium**
- [ ] **Local keywords in titles/headings** ("plumber in Leeds"). **Medium**
- [ ] **Photos and posts are updated on Google Business Profile at least monthly.** **Low**

### 5.2 E-commerce store
- [ ] **Product pages:** unique descriptions, clear price, stock, delivery cost/time, returns, multiple good images, size/spec info, reviews. **Critical**
- [ ] **Product and Offer schema valid** (price, availability, ratings). *Rich Results Test.* **High**
- [ ] **Category pages have intro copy, filters, and clear structure; no duplicate or empty categories.** **High**
- [ ] **Faceted/filter URLs and parameters do not create thousands of duplicates** (canonical/noindex rules). **High**
- [ ] **Out-of-stock and discontinued products are handled** (redirect, "back in stock", or related products), not 404. **Medium**
- [ ] **Basket and checkout:** guest checkout available, few steps, progress indicator, no surprise costs until the last step, multiple payment methods incl. Apple/Google Pay and PayPal. *Place a test order on mobile.* **Critical**
- [ ] **Shipping, returns and contact information visible before checkout.** **High**
- [ ] **Abandoned-basket emails set up.** **Medium**
- [ ] **Site search works and handles typos and no-results.** **Medium**
- [ ] **Trust badges, secure payment, reviews at checkout.** **High**
- [ ] **Order confirmation page and email work and track conversions (purchase event with value).** **Critical**
- [ ] **Speed on product and category pages (images, apps/plugins).** **High**
- [ ] **Merchant Center feed set up, if Google Shopping is appropriate.** **Medium**

### 5.3 SaaS / product site
- [ ] **Home page says the problem solved, who it is for, and shows the product (screenshot/video) in the first screen.** **Critical**
- [ ] **Pricing page exists, is clear, with plan comparison and FAQ.** Hidden pricing hurts trust. **High**
- [ ] **Primary CTA (trial, demo, sign-up) is consistent; the sign-up flow is short, with no credit card up-front unless intended.** **Critical**
- [ ] **Feature pages and use-case/industry pages target specific searches.** **High**
- [ ] **Comparison ("X vs Y") and "alternatives to" pages exist for main competitors.** **Medium**
- [ ] **Social proof: customer logos, case studies with numbers, review sites (G2, Capterra).** **High**
- [ ] **Docs/help centre/changelog public and indexable.** **Medium**
- [ ] **Product events tracked** (sign-up started, completed, first key action) so conversion funnel can be measured. **High**
- [ ] **Onboarding and activation emails exist.** **Medium**
- [ ] **Security and compliance information accessible** (data protection, uptime/status, certifications). **Medium**

---

## 6. Content and competitor review (do this once per audit)
- [ ] **Identify 3 real search competitors** (those that rank for the client's target keywords, not necessarily the ones the client names). **High**
- [ ] **Compare:** pages and topics they cover that the client does not, page quality, offers, pricing, trust signals, speed. **High**
- [ ] **List 10 to 20 keyword/topic gaps, grouped by intent** (learn, compare, buy, local). **Medium**
- [ ] **Note what the competitors do better on the conversion side** (offer, CTA, reviews, guarantees). **Medium**
- [ ] **Check Google results for the main terms:** who ranks (businesses, directories, marketplaces, forums), which SERP features appear (map pack, shopping, videos, FAQs, AI overviews). This shows what is realistic. **Medium**

---

## 7. Common symptoms and what to say to the client
| Finding | Plain-English explanation | Typical fix |
|---|---|---|
| No analytics or conversion tracking | "We can't see what's working or how many enquiries come from the site." | Install GA4, define conversions, set up Search Console |
| Site not indexed / `noindex` left on | "Google has been told not to show your site." | Remove the block, submit sitemap, request indexing |
| Titles and descriptions missing or duplicated | "Every search result for you looks the same or unclear, so people don't click." | Rewrite unique titles and descriptions |
| Only one page for all services | "You can't rank for 'boiler repair' and 'gas safety certificate' with a single page." | Create a page per service and location |
| Slow on mobile (LCP over 4 s) | "Most people leave if a page takes more than a few seconds." | Compress images, remove heavy scripts, better hosting/CDN |
| No clear call to action | "Visitors don't know what to do next, so they leave." | One primary CTA per page, repeated |
| Long or broken form | "Each extra field loses some people; a broken form loses all of them." | Shorten, test, add notifications |
| No reviews or case studies | "People don't know whether to trust you." | Collect reviews, publish 2 to 3 case studies |
| Google Business Profile incomplete | "You're missing from 'near me' searches and the map." | Complete and verify profile, ask for reviews |
| Checkout shows unexpected costs late | "Shoppers abandon when they see delivery costs at the end." | Show shipping early, free shipping threshold |
| Stock photos and generic copy | "The site could be anyone's business." | Real photos, specific copy, proof |
| Outdated content and design | "It looks like the business may have closed." | Refresh key pages, update dates, remove old promos |

---

## 8. Findings template (one per issue)

```
Finding:        (short title)
Where:          (URL or section)
Evidence:       (screenshot, tool result, number)
Why it matters: (impact in plain English, tied to visits or enquiries)
Fix:            (specific action)
Severity:       Critical / High / Medium / Low
Effort:         Quick win (<1 hr) / Medium (1 day) / Large (project)
Owner:          Agency / Client
Status:         Open / In progress / Done
```

**Prioritisation rule:** do **Critical** first, then **High with Quick-win effort**, then other High, then Medium, then Low.

---

## 9. Scorecard (copy for each client)

| Section | Max score (2 x items) | Score | % | Notes |
|---|---|---|---|---|
| A. Tracking and measurement | | | | |
| B. Technical SEO | | | | |
| C. On-page and content SEO | | | | |
| D. Performance | | | | |
| E. Mobile, usability, accessibility | | | | |
| F. Conversion and messaging | | | | |
| G. Trust and credibility | | | | |
| H. Security and compliance | | | | |
| Off-site authority (section 4) | | | | |
| Add-on module(s) used | | | | |
| **Total** | | | | |

**Grade:** 90% or more = A (strong), 75 to 89% = B (good, a few gaps), 60 to 74% = C (leaking visits/leads), 40 to 59% = D (major problems), under 40% = F (rebuild the foundations first).

**Weighting tip:** if the client's main complaint is traffic, count sections A, B, C, D and 4 double. If it is conversions, count A, E, F, G and the relevant add-on double.

**Summary for the client (3 lines):** the main reason people are not finding the site; the main reason visitors are not converting; the top 5 actions in order, with expected effort.

---

## 10. After the audit
- Agree the top fixes and who does what, then book a re-check (typically 4 to 8 weeks later; SEO changes take time to show).
- Set 3 to 5 simple targets: indexed pages, impressions and clicks (Search Console), enquiries or sales (GA4), Core Web Vitals pass, review count.
- Re-run this checklist quarterly; keep each audit's scorecard to show progress.

---

## Appendix: worked example (dry run on digital-tek.co.uk, 1 Nov 2026)

Run with free tools only (curl, browser view-source, the site files). Every item tested could be answered without a paid tool.

| Area | Result |
|---|---|
| HTTPS, `http://` and `www` redirect | Pass: single 301 to the preferred HTTPS version |
| robots.txt, sitemap, 404 page | Pass: crawling allowed, 10 URLs in the sitemap, custom 404 returns a real 404 status |
| Title, description, one H1, canonical | Pass on all pages checked |
| Structured data | Present on the home and e-commerce pages; missing on the contact and about pages (Medium, add Breadcrumb/ContactPage) |
| Image alt text | Pass: no images without alt |
| Security headers | Partial: HSTS, nosniff, referrer and permissions policy set; no Content-Security-Policy (Medium) |
| Tracking (section A) | **Fail (Critical):** the GA4 ID is empty, so no visitor or conversion data is being collected. Already logged as backlog item O3 |
| Search Console | Needs account access to confirm: indexed pages, impressions and queries cannot be checked from outside |
| Items needing the client's accounts | Core Web Vitals field data (low traffic), Google Business Profile, backlinks, reviews |

Takeaway: the technical SEO foundation is sound, and the single biggest gap is that nothing is measured yet.
