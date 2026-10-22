# Digital-tek website backlog

A shared list of what is still open, so we can pick it up later. Update the status as items are done. The requirements behind these items are in [`parent-site-prd.md`](./parent-site-prd.md).

Last updated: 2026-10-22. Status: **Open**, **Blocked** (needs you) or **Done**.

---

## SEO

Ordered roughly by expected benefit. The phased plan that groups these items (Digital-tek first, CommerceForce as a supporting link source) is in [`offer-and-seo-plan.md`](./offer-and-seo-plan.md).

| # | Item | Why it matters | Status |
|---|---|---|---|
| S1 | **Pre-render the Services and Products content into the HTML.** The service text and product cards are currently built by JavaScript (`data-render` in `js/site.js`), so the page source is almost empty. Google usually copes, but other search engines and link previews do not. Generate the static HTML from `js/data.js` with a small build step. | Biggest risk to indexing. This was open question 4 in the PRD. | Built, not deployed. Run `node tools/prerender.js` after editing `js/data.js`. |
| S2 | **Give each service its own page**, for example `/services/ai-automation/`, with its own title, description, H1 and schema. Today all five share `/services/` with anchors. | Lets each service rank for its own searches, such as "AI automation for small business UK". | Started: E-commerce page built, not deployed (draft copy, needs your check). Other four services still to do. |
| S3 | **Verify the site in Google Search Console** (DNS TXT record in IONOS) and submit `sitemap.xml`. Do the same in Bing Webmaster Tools. | Shows which pages are indexed and which searches bring visitors. Nothing else can be measured without it. | Blocked: needs your Google login |
| S4 | **Add a social preview image** (about 1200 x 630 px) with `og:image` and Twitter card tags on every page. None exist yet. | Shared links look unfinished without one. Can use the new logo. | Built, not deployed (`og-image.png` and tags on every page). |
| S5 | **Keyword research per service** (UK terms, search volume, competitors), then tune each page's title, description and headings. | Titles and descriptions are written by hand today, not from data. | Open |
| S6 | **Fuller Organization markup:** add `logo`, `contactPoint` (contact@digital-tek.co.uk, phone) and `sameAs` links once there are social profiles. Add `BreadcrumbList` on sub-pages. | Better results and a knowledge panel over time. | Partly built: logo and contactPoint added, plus Breadcrumb on the e-commerce page. `sameAs` and legal name still needed. |
| S7 | **Run Lighthouse** on Home, Services and Contact. Targets from the PRD: mobile Performance 90+, Accessibility 95+, SEO 95+. Fix what it finds (font loading and preloading, contrast of the faded headings, image sizes). | We have not measured against the targets yet. | Open |
| S8 | **Check the heading fade for contrast.** The peach end of the faded headings is light on cream. Confirm it meets WCAG AA for large text, or darken it. | Accessibility and readability, and Lighthouse scoring. | Measured: the peach end of the fade is 1.9:1 against the cream (AA large text needs 3:1). Your call whether to darken it. |
| S9 | **Case studies and a Work page**, then testimonials. Real examples are the strongest trust and ranking signal for a services business. | PRD v2. Needs your clients' permission. | Blocked: needs content |
| S10 | **Insights or blog:** a handful of useful articles per service for long-tail searches. | PRD v2 candidate. | Open |
| S11 | **Google Business Profile** and UK business directory listings, with the same name, phone and email everywhere. | Local and brand searches. Most useful if you serve a local area. | Blocked: needs business details |
| S12 | **Custom 404 page**, `lastmod` dates in the sitemap, and a check that `.info` and `.store` redirect to the main domain. | Housekeeping. The redirect needs the DNS items below first. | Partly built: 404 page, sitemap `lastmod`. Needs the nginx `error_page` line in `deploy/digital-tek.conf` applied on deploy. `.info`/`.store` redirects wait on O4. |
| S13 | **Set up GA4 conversions** (form submit, contact button clicks) and a monthly look at them. | The events are built into the site, but not switched on. | Blocked: needs the GA4 ID (see below) |

---

## Site and operations

| # | Item | Status |
|---|---|---|
| O1 | **Contact form delivery without a third party.** You prefer not to use a form service. Build a small endpoint on the VPS behind nginx that emails contact@digital-tek.co.uk. Needs an outgoing mail account to send from. Until then the form opens the visitor's email app. | Open (decision made, not built) |
| O2 | **Create the mailbox contact@digital-tek.co.uk** in IONOS, and test sending and receiving. The domain already has IONOS mail records, but I have not confirmed the mailbox exists. **Do not deploy the email change until it does**, or enquiries will go nowhere. | Blocked: needs you |
| O3 | **Google Analytics:** create the GA4 property and give me the Measurement ID for `GA_ID` in `js/site.js`. | Blocked: needs you |
| O4 | **DNS for digital-tek.info and digital-tek.store:** A records for `@` and `www` to 187.77.101.178, delete the IONOS AAAA record, keep MX. Then issue their certificates. | Blocked: needs you |
| O5 | **Legal review** of the Privacy, Terms and Cookie pages. Confirm the legal entity name ("Digital-tek Ltd"?), the 12-month enquiry retention, and the liability wording. | Blocked: needs you |
| O6 | **Trade mark search** (UK Intellectual Property Office) and reverse image search on the logo before registering it. Check the AI tools' licence terms if any AI-made artwork is used. | Open |
| O7 | **Logo files:** convert the wordmark in `logo-horizontal.svg` and `logo-stacked.svg` to outlines so they look the same without the font installed. Add a dark-mode version of the badge concept if it is ever used. | Open |
| O8 | **Design & Creative samples** (3 to 5 graphics, 2 leaflets, 1 to 2 short videos), each AI-made video labelled "AI-generated". Confirm the proposed defaults in `design-creative-how-it-works.md` (rounds per item, 7-day window, half deposit). | Blocked: needs content and decisions |
| O9 | **Content-Security-Policy header** for the Digital-tek server block. Needs testing against the inline scripts, Google Fonts and Analytics. | Open |
| O10 | **Update `deployment-procedure.md`** to describe the current folder-based deploy and the Digital-tek steps (the backups, `nginx -t`, reload, checksum comparison). | Open |
| O11 | **Check on a real phone and in dark mode:** the faded headings and the mobile layout have only been checked in a desktop browser. | Open |
| O12 | **CommerceForce site email:** changed to admin@commerceforce.uk and deployed. Still to do: confirm the mailbox exists and commit the change; the legacy `commerceforce-website.html` still has the old address. | Open |
| O13 | **E-commerce offer banner** (`offer` in `js/data.js`). It ends itself after 31 December 2026. Set `active: false` and redeploy if the offer closes sooner. Confirm the offer terms (what the customer actually gets) and add them to the Websites service text. | Built, not deployed |
