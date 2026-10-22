# Digital-tek website: plain-English guide

The Digital-tek site lives in the `digital-tek-site/` folder. It is separate from the CommerceForce site (`site/`), so changes to one never affect the other.

## See it on your computer

```
python serve.py 8002 digital-tek-site
```

Then open http://localhost:8002. (Port 8001 is used by another app on this machine.)

## Where things are

```
digital-tek-site/
├── index.html              Home page
├── services/index.html     Services page
├── products/index.html     Products page
├── about/index.html        About page
├── contact/index.html      Contact form page
├── privacy/ terms/ cookies/  Legal pages (placeholders, see below)
├── css/style.css           Colours, fonts, spacing
├── js/data.js              Services, products, steps and contact details
├── js/site.js              Menu, footer, dark mode, contact form behaviour
└── favicon.svg, robots.txt, sitemap.xml
```

## The two files you will edit most

- **`js/data.js`** holds the services, the products, the "how we work" steps, and your phone and email. Change the words between the quote marks. Leave the quote marks, commas and brackets alone.
- **Page files** (`index.html` etc.) hold the headline and text that belong to one page only.

## Add a new product

Open `js/data.js`, find `PRODUCTS`, copy one `{ ... }` block, paste it after the last one (keep the comma), and change the name, tagline and link. Set `status` to `"live"`, `"beta"` or `"soon"`. It then appears on the Home and Products pages automatically. If you add a product that is "coming soon", you can delete the "More on the way" block.

## Change a colour

Open `css/style.css`. The colours are at the top under `:root` (light mode) and `[data-theme="dark"]` (dark mode).

## Before going live

1. **Legal pages** (`privacy`, `terms`, `cookies`) are placeholders marked "noindex". Replace them with reviewed text, then remove the `<meta name="robots" content="noindex">` line from each.
2. **Contact form:** with no form service set, it opens the visitor's email app with the message filled in. To receive messages directly, create an account with a form service (for example Formspree) and put its URL in `FORM_ENDPOINT` at the top of `js/site.js`.
3. **Contact details** (phone and email) are in `js/data.js`, plus the contact page and the structured data on the Home page. Confirm they are right.
4. **Case studies and testimonials** are not included yet because there are no real ones to show. Add them when you have them.
5. **Analytics and cookie banner** are not set up yet. Add them before launch (PRD section 8).

## Deploying

See the deployment plan: the site goes to `/var/www/digital-tek/` on the VPS alongside CommerceForce, served by its own nginx block for `digital-tek.co.uk`.

## Switching on analytics and the contact form

Both are set near the top of `digital-tek-site/js/site.js`:

- **Analytics:** paste your Google Analytics 4 measurement ID (it looks like `G-XXXXXXXXXX`) between the quotes of `GA_ID`. A cookie banner then appears for new visitors, and analytics loads only for those who accept. While it is empty, nothing is loaded and no banner shows.
- **Contact form:** paste the address your form service gives you (for example from Formspree) between the quotes of `FORM_ENDPOINT`. While it is empty, the form opens the visitor's email app instead.

Test both on your computer before uploading the changed file.

