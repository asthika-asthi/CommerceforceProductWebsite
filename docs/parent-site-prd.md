# Product Requirements Document: Digital Tek Parent Company Website

| | |
|---|---|
| **Domain** | digital-tek.co.uk |
| **Brand name** | "Digital-tek" (the CommerceForce site now uses this name too, replacing "SSAI Consultency") |
| **Status** | Draft v1 |
| **Date** | 2026-10-21 |
| **Design inspiration** | https://akshatbahety.com/ |
| **Related docs** | [`code-guide-for-non-programmers.md`](./code-guide-for-non-programmers.md), [`deployment-procedure.md`](./deployment-procedure.md) |

---

## 1. Overview and goals

### 1.1 What this is
A website for the parent company. It leads with **services** (what we do for clients today) and gives **products** a home that grows as they are built. CommerceForce is the first product and already has its own site at www.commerceforce.uk.

### 1.2 Goals
1. **Generate qualified service enquiries.** Visitors should reach a "Start a project" conversation in two clicks from any page.
2. **Build credibility** for a small, in-house UK team through case studies, testimonials and plain-English explanations.
3. **Give products a scalable home.** Adding a product means adding one entry, not redesigning the site.
4. **Be easy for a non-programmer to edit**, in line with the existing per-page file structure in `site/`.

### 1.3 Non-goals (v1)
- Online checkout or payments.
- Client login or portal.
- A blog CMS (blog is a v2 candidate).
- Rebuilding or replacing the CommerceForce product site.

---

## 2. Audience

| Persona | Who they are | What they need from the site |
|---|---|---|
| **The SMB owner** | Owner of a UK trade, retail or service business with a dated website or none at all | To understand quickly what we do, that we are real and small enough to care, and how to start |
| **The operations manager** | Runs day-to-day work, drowning in manual tasks | Concrete examples of AI automation that saves time, and an honest sense of cost |
| **The CommerceForce prospect** | Wants an online shop, arrives via the parent brand | A clear route to the product site |
| **The future product user** | Arrives when a new product launches | A product page with status and sign-up |

---

## 3. Positioning and messaging

- **Services first.** The home page headline is about what we do for clients, not about any single product.
- **Tone:** plain English, no jargon, honest. Mirrors the existing About copy ("hand you the keys", "no long-term tie-in").
- **Proof over claims.** Every service is backed by a case study or concrete example once available.
- **Product line:** "We also build our own products" supports the services, because it shows we ship what we sell.

Suggested home headline direction (to be refined in copywriting): *"AI automation, websites and growth for businesses that want results, not jargon."*

---

## 4. Information architecture

```
Home
├── Services
│   ├── AI Automation
│   ├── Websites (non-commerce)
│   ├── SEO & Growth
│   └── Content & Social
├── Work (case studies)
├── Products
│   └── CommerceForce (live, links to commerceforce.uk)
│   └── [future products: "Coming soon" cards]
├── About
└── Contact / Start a project
```

**Top navigation** (sticky, pill style as on the reference site): Services · Work · Products · About · Contact, plus a primary button "Start a project". Testimonials appear as a section on Home and Work rather than a separate page.

**Footer:** short company line, nav links, contact details, legal links (Privacy, Terms, Cookies), link to CommerceForce.

---

## 5. Page-by-page requirements

### 5.1 Home
**Purpose:** say what we do, prove it, drive to contact.

Sections, in order:
1. **Hero.** Eyebrow chip (e.g. "AI · Web · Growth"), large serif headline with one italic highlighted word, one-sentence lede, two buttons: "Start a project" (primary) and "See our work" (ghost).
2. **Services overview.** Four cards (see 5.2), each with a one-line promise and a link.
3. **Selected work.** Two or three case-study cards.
4. **Products strip.** "Products we've built": CommerceForce card plus a "More coming" card.
5. **Testimonials.** Two or three short quotes with name, role and company.
6. **How we work.** Three or four steps: listen, build, hand over, support.
7. **CTA band.** "Not sure which fits?" with a "Book a free chat" button.

**Acceptance criteria:** a first-time visitor can state what the company does within five seconds; both CTAs link to the contact page; the page passes the performance budget in section 8.

### 5.2 Services (overview and four service sections)
One overview page with a card per service and an anchor or sub-page for each. Content for each comes from the existing studio services page:

| Service | Promise | Key offerings |
|---|---|---|
| **AI Automation** | Connect your tools. Automate your workflows. | Workflow automation (Zapier, Make, n8n plus custom); custom AI chat assistants for a website or internal use; document processing and data extraction; CRM and email automation; API integrations between existing tools |
| **Websites (non-commerce)** | Professional websites built fast with AI tooling | Service-business sites; corporate brochure sites; campaign landing pages; portfolio sites; migration from dated sites |
| **SEO & Growth** | Get found. Then get more. | Technical SEO audit and on-page work; keyword research and content planning; Google Ads (PPC) management; GA4 setup and monthly reports; local SEO |
| **Content & Social** | Words and posts that work for you | Product description copywriting; SEO-focused blog posts; social content and scheduling; email newsletters; brand voice guides |

Each service section includes: promise, who it is for, what you get, a typical engagement shape (one-off project or monthly retainer), a related case study (when available), and a CTA.

**Acceptance criteria:** all four services are present with the offerings above; each has a working "Start a project" link that pre-selects that service on the contact form.

### 5.3 Work (case studies)
- Grid of case-study cards: title, one-line tagline, service tag, outcome metric.
- Detail view: problem, what we built, result, tech used, quote.
- The reference site uses the same pattern (title plus tagline cards, for example "AI Transformation for a Construction Business: Automations, agents, and adoption, end to end").

**Content dependency:** at least three real case studies (anonymised if needed). Until then, v1 ships with the section hidden or with a short "Recent projects" list.

### 5.4 Products
- A product hub page listing every product as a card: name, one-line description, **status badge** (Live / Beta / Coming soon), and a link.
- **CommerceForce:** status Live, links to www.commerceforce.uk. Short description: complete online store for retail, trade and service businesses, owned outright, no transaction fees.
- Future products appear as "Coming soon" cards with an optional "Notify me" email capture.
- Each product may later get its own detail page using a shared template (mirroring how `industry-page-template.js` is shared by three pages today).

**Acceptance criteria:** adding a product requires adding one data entry (name, description, status, link) and no layout changes.

### 5.5 About
- Who we are: small, focused, in-house team that does not subcontract; mostly UK SMB clients.
- Why we exist, including the story of why CommerceForce was built.
- Principles (for example: you own what we build; no lock-in; plain English).
- Team section (names, roles, photos) once the team is happy to be shown.

### 5.6 Contact / Start a project
- Form fields: name, email, phone (optional), company, **service of interest** (dropdown plus "Not sure"), message.
- Alternative contact: phone +44 7484129061, email aiasthika@gmail.com (as in the current site; confirm these before launch).
- Confirmation message after submission and an email notification to the team.
- Spam protection (honeypot field or CAPTCHA).

**Acceptance criteria:** a submission arrives in the team inbox within one minute; invalid input shows clear error messages; the form works on mobile.

### 5.7 Legal pages
Privacy policy, Terms, Cookie notice (UK GDPR and PECR compliant), linked from the footer.

---

## 6. Product extensibility

- Products are defined in **one plain data list** (for example `site/js/products-data.js`) with fields: `name`, `tagline`, `status`, `url`, `icon/colour`.
- The Home products strip and the Products hub both read from that list.
- Retiring or launching a product is a one-line change to `status`.
- A reusable **product detail template** is created when the second product launches, not before.

---

## 7. Design system (inspired by akshatbahety.com)

We borrow the *feel*, a warm, editorial, friendly look, not the content or exact assets.

### 7.1 Tokens (from the reference)
| Token | Value |
|---|---|
| Background | `#FBF6EE` (warm cream) |
| Ink (text) | `#1a1f2e` |
| Soft / muted ink | `#3a4055` / `#6b7183` |
| Accents | Peach `#F4C9B8`, Sky `#B8D4E0`, Sand `#E8D4B8`, Mint `#C8DCC8` |
| Surface (cards) | `#FFFDF8` |
| Borders | ink at 12% opacity |
| Headings font | Instrument Serif (italic for emphasis) |
| Body font | DM Sans |
| Eyebrow / labels font | JetBrains Mono, uppercase, small |

Digital Tek should choose its own accent set within this family so it is clearly distinct from the reference. Final palette and logo to be confirmed.

### 7.2 Components
- **Sticky top bar** with blurred background and a **pill-shaped nav** group; active item filled with ink.
- **Eyebrow chip**: small outlined pill with a coloured dot above page titles.
- **Large serif page titles** (up to about 80px on desktop) with one italic highlighted word.
- **Pill buttons**: primary (filled ink) with an offset-shadow lift on hover; ghost (outlined).
- **Service and case-study cards**: rounded, pastel-tinted, with a title and tagline.
- **CTA band** at the foot of key pages.
- **Light and dark mode** toggle.

### 7.3 Motion
- Page-enter animation: short fade, slight upward move and blur-to-sharp (about 0.5s).
- Hover lifts of 1 to 2px on buttons and cards.
- Respect `prefers-reduced-motion`.

### 7.4 Accessibility
WCAG 2.1 AA: colour contrast, visible focus states, keyboard navigation, alt text, semantic headings, and form labels.

---

## 8. Functional and non-functional requirements

| Area | Requirement |
|---|---|
| **Responsive** | Works from 360px phones to large desktops; nav collapses to a menu on mobile |
| **Performance** | Lighthouse performance 90+ on mobile for Home; images compressed and lazy-loaded; fonts preloaded |
| **SEO** | Unique title and meta description per page; Open Graph tags; `sitemap.xml` and `robots.txt`; schema.org `Organization` and `Service` markup; one H1 per page. Note: today's site renders client-side, so confirm search engines index it, or pre-render the pages |
| **Analytics** | GA4 with events for form submit, CTA clicks and product-card clicks; cookie consent banner |
| **Forms** | Server-side or form-service delivery to email; spam protection; no data stored longer than needed |
| **Security** | HTTPS only (TLS), security headers, no secrets in client code |
| **Browser support** | Latest two versions of Chrome, Safari, Edge, Firefox |
| **Editability** | Page text lives in plain, clearly named per-page files so a non-programmer can change copy safely |

---

## 9. Technical approach

- **Reuse the current pattern:** static site under a `site/`-style folder with one file per page, deployed to the VPS as described in [`deployment-procedure.md`](./deployment-procedure.md). No server changes are needed for new static files.
- **Separate project folder** (or separate site directory) for digital-tek.co.uk so the CommerceForce product site remains independent.
- **Shared content in data files:** services, products, case studies and testimonials live in simple data lists the pages read from.
- **Hosting:** same VPS with a new server block for digital-tek.co.uk; TLS certificate issued for the new domain; HTTP redirects to HTTPS; `www` and bare domain both resolve.
- **Open technical decision:** keep the current React-bundle approach, or move to a simple static-site generator or plain HTML for better SEO and simpler editing (see section 13).

---

## 10. Content and asset dependencies

| Item | Owner | Needed by |
|---|---|---|
| Final brand name and logo | Founder | Before design starts |
| Colour palette sign-off | Founder | Design |
| Service copy review (use section 5.2 as the starting point) | Founder | Build |
| 3 to 5 case studies with results and permission to publish | Founder / clients | v2 (v1 can ship without) |
| 2 to 3 testimonials with permission | Founder / clients | v1 if available |
| Team photos and bios | Team | About page |
| Privacy, Terms and Cookie text | Founder / legal review | Before launch |
| Domain DNS and TLS for digital-tek.co.uk | Founder / ops | Before launch |
| Confirmed contact phone and email | Founder | Before launch |

---

## 11. Success metrics

| Metric | Target (first 90 days after launch, to be validated) |
|---|---|
| Qualified enquiries via the contact form | 8 to 12 per month |
| Contact page to form-submit conversion | 20%+ |
| Home to Services click-through | 40%+ |
| Organic search visits | Month-on-month growth after indexing |
| Lighthouse (mobile) | Performance 90+, Accessibility 95+, SEO 95+ |
| CommerceForce referrals from the parent site | Tracked as an event |

---

## 12. Phasing

| Phase | Scope |
|---|---|
| **v1: Launch** | Home, Services (all four), Products hub (CommerceForce live, placeholders), About, Contact form, legal pages, analytics, SEO basics, light/dark mode |
| **v2: Proof** | Work / case studies, testimonials section populated, "Notify me" for coming-soon products, optional blog or insights |
| **v3: Products** | Product detail template, a page per new product as each launches, optional pricing / packages page for services |

---

## 13. Risks and open questions

1. **Brand name.** Confirm the exact spelling and legal entity name ("Digital-tek Ltd"?). The CommerceForce site's nav, About, Studio Services and footer have been updated from "SSAI Consultency" to "Digital-tek".
2. **Case studies.** Do we have clients who will allow their work to be shown? Without them the Work page is weak at launch.
3. **Pricing visibility.** Show starting prices, a "from" price, or "get a quote" only? The reference site favours quotes; the CommerceForce site shows prices.
4. **Rendering approach and SEO.** The current React bundle renders in the browser. Is a static or pre-rendered build worth the change for search visibility?
5. **Forms backend.** Use a hosted form service or build a small endpoint on the VPS?
6. **Contact details.** Confirm the phone and email in the current site are right for the parent brand.
7. **Differentiation from the reference.** The reference is a personal brand; ours is a company. We should use "we" language and avoid copying layout details one-to-one.
8. **Scope of AI Automation claims.** Only publish capabilities and results we can back up with examples.
