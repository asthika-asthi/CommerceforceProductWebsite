# Plan: Offer urgency banner on Digital-tek, plus an advanced SEO plan

## Context
The user is running a special offer on **e-commerce websites** that **ends on 31 December 2026**. Decision: the site does **not** mention "first 5 customers" or how many places are left (too much upkeep). The only public urgency is the real end date. (Internally the user still limits it to 5 because Digital-tek does not subcontract; that is handled in conversation, not on the site.) They want visitors on digital-tek.co.uk to feel they should get in touch now, and they want SEO that goes beyond the basics, plus a decision on whether SEO belongs on CommerceForce or Digital-tek.

Earlier work this replaces: the old build/deploy plan is complete (site is live at HEAD `108bf0d`). Nothing from it is needed.

Constraints that carry over:
- Do not touch commerceforce.uk, its nginx config, or the Docker containers. Only `digital-tek-site/` (and docs) change.
- Back up, `nginx -t`, reload not restart, checksum-compare after deploy. Commit/push/deploy only when the user says so.
- Urgency must be **true**. The only urgency signal is the real end date (31 December 2026). No fake countdown, no rolling "ends tonight" timer, no stock or places claims (UK CMA / consumer-protection rules on misleading urgency). Because the user may close the offer early once five customers are in, the banner should say "ends 31 December" and the user turns it off with one setting if it closes sooner.
- Step 1 on approval: save this plan into the repo as `docs/offer-and-seo-plan.md` (plain-English copy of this file), before any code changes.

## Part A: Urgency (small, ready to build)

### Open details to confirm with the user when we build (not blockers for the plan)
1. What the offer actually is (discount, free extras, fixed price?). I will not invent terms. Until given, wording is "Special offer on e-commerce websites".
2. Whether the offer is shown on the Home hero too.

### Changes
- `digital-tek-site/js/data.js`: add one config object, e.g. `window.DT.offer = { active: true, title: "...", endsOn: "2026-12-31", href: "/contact/?offer=ecommerce" }`. One place to edit; `active:false` or a date past `endsOn` (end of that day, UK time) hides it automatically, so the banner can never go stale after 31 December and needs no upkeep.
- `digital-tek-site/js/site.js`: render a slim top banner on every page ("E-commerce website offer, ends 31 December. Get in touch today"). A plain "N days left" may be shown because the date is real; no animated countdown. Add a sticky "Claim your place" button on mobile and desktop (bottom corner, clear of the cookie banner, `env(safe-area-inset-bottom)`). Banner can be dismissed for the session (sessionStorage in try/catch). Contact page reads `?offer=ecommerce`, pre-selects the Websites service and prefills the message. Add `track("offer_cta_click")` and include the offer in `form_submit` (existing consent-gated analytics).
- `digital-tek-site/css/style.css`: banner and sticky button using existing tokens (`--peach`, `--ink`, `--paper`), dark mode via existing token blocks, `prefers-reduced-motion` respected, no layout shift (reserve banner height).
- `digital-tek-site/index.html` hero: add one line under the hero CTA pointing at the offer (optional, per question 3).
- Accessibility: banner is a `role="region"` with a label, not an alert; sticky button does not cover content or the consent banner.
- SEO safety: no popup/interstitial (Google penalises intrusive interstitials); banner text is not the page H1.

If the offer closes early, set `active:false` and redeploy the same day. Otherwise it switches itself off after 31 December. Add as backlog item O13.

## Part B: Advanced SEO plan

### Where it belongs: Digital-tek first, CommerceForce as a supporting asset
- **Digital-tek (digital-tek.co.uk) is the primary SEO investment.** It sells the services (the revenue-driving, higher-intent searches: "e-commerce website design UK", "AI automation for small business"). It is a new domain, so every link and page built now compounds. It is also the brand the user is building.
- **CommerceForce (commerceforce.uk) is a product site.** Optimise it for its own product keywords at a basic level (titles, descriptions, speed). It is also the best source of authority for Digital-tek: link from CommerceForce footer/about to Digital-tek ("by Digital-tek") and keep Digital-tek's Products page linking back. Do not duplicate service content on CommerceForce.
- Keep them as **separate domains** (do not merge or subfolder CommerceForce into Digital-tek). Different audiences; CommerceForce is a live product.
- Sequence: Digital-tek technical foundation, then service pages and content, then authority/links, then CommerceForce cross-links last (a small, low-risk edit that needs separate approval).

### Phase 1: Foundation (weeks 1 to 2): backlog S1, S3, S4, S7, S12
1. **Pre-render Services/Products into static HTML** (S1). Highest priority: service text is currently JS-built. Small build script generates HTML from `js/data.js` (reuse the existing generator approach; keep plain HTML/CSS/JS).
2. Google Search Console and Bing Webmaster verification via DNS TXT in IONOS, submit `sitemap.xml` (S3). User action required.
3. og:image and Twitter cards (S4), custom 404, sitemap `lastmod` (S12).
4. Lighthouse on Home/Services/Contact; fix font loading, contrast (S7, S8). Core Web Vitals is a ranking input.

### Phase 2: Pages that can rank (weeks 2 to 6): S2, S5, S6
5. **One page per service**, each with unique title, H1, 600+ words of useful copy, FAQ, internal links, Service + FAQPage + BreadcrumbList schema. Priority order: **E-commerce websites** (the live offer), AI automation, Websites, SEO & Growth, Design & Creative.
6. **Keyword research** (UK terms, intent, difficulty) before writing copy; map one primary keyword to one page (no cannibalisation). Semrush / Ahrefs connectors are available but need the user to authenticate; otherwise Google Keyword Planner / Search Console data.
7. **Organization schema** complete: logo, contactPoint, sameAs, legal name (needs company details).
8. **Local/service-area intent**: if serving a UK area, add location wording and Google Business Profile (S11).

### Phase 3: Content and authority (ongoing): S9, S10, S11
9. **Case studies** and testimonials (strongest trust signal; needs client permission). Even one e-commerce case study from the offer customers will help; ask permission up front when they sign.
10. **Insights/blog**: 2 articles per month, each answering a specific buyer question ("how much does an e-commerce site cost UK", "Shopify vs custom"), linked to the matching service page. Target long-tail queries a new domain can win.
11. **Links/authority**: CommerceForce to Digital-tek link; UK directories (Clutch, Yell, local chambers); partner/client "built by Digital-tek" credit links; guest posts. Quality over quantity; no bought links.
12. **AI-search visibility** (answer engines): clear factual pages, FAQ markup, consistent business facts across the web (S11), `llms.txt` optional. The `small-business:seo-ai-visibility` skill can audit this.

### Phase 4: Measure and iterate (monthly): S13
13. GA4 (needs Measurement ID, O3) with conversions: form submit, offer CTA click, phone/email click. Search Console review monthly: impressions, queries, indexed pages; adjust titles and content for pages with impressions but low clicks.
14. Quarterly: refresh top pages, re-run Lighthouse, review backlinks.

### Realistic expectations (to state to the user)
A new domain usually takes about 3 to 6 months to rank for competitive terms. Technical SEO and service pages make it indexable and correct quickly; rankings come from content and links over time. The offer is a faster route to leads now (direct outreach, Google Business Profile, LinkedIn); SEO is the compounding channel.

## Files to change
- Part A (to build after approval): `digital-tek-site/js/data.js`, `js/site.js`, `css/style.css`, `index.html` (optional hero line), `contact/index.html` (offer prefill via `site.js`).
- Docs (first step on approval): `docs/offer-and-seo-plan.md` is a copy of this plan. Then replace backlog SEO section with this phased plan in `docs/backlog.md` (keep S/O numbering), add O13 (offer upkeep) and a new `docs/seo-plan.md` with the phases above.
- Not touched: anything under `site/`, nginx, Docker.

## Verification
- Run `python serve.py 8002 digital-tek-site`; on Home, Services, Contact and legal pages check: banner shows, dismisses, does not shift layout, works in dark mode and at 400px width, sticky button does not overlap the footer or consent banner, `?offer=ecommerce` preselects Websites and prefills the message.
- Set `active:false`, and separately set `endsOn` to yesterday: banner and button disappear everywhere in both cases.
- Keyboard focus and reduced motion checked; no console errors.
- Deploy only on user approval: same safeguards (backup, checksum compare of changed files, commerceforce.uk and the 3 Docker containers unchanged, Digital-tek pages 200).
- SEO phase 1 checks later: view-source shows service text, Search Console accepts the sitemap, Lighthouse targets (mobile Performance 90+, Accessibility 95+, SEO 95+).
