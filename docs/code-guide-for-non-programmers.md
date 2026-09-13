# A Plain-English Guide to the CommerceForce Website Code

This document explains what's inside the `site/` folder in plain language —
no programming background needed. It's meant as a map: if you want to find
a price, a sentence, a phone number, or understand what a part of the site
does, start here.

## The big picture

The website used to be one giant file (`commerceforce-website.html`,
~19,000 lines, with an entire code library mixed in alongside the site's
own content). It's now split into separate, clearly-named files under the
`site/` folder — one file per page, plus a couple of shared files. Nothing
about how the website *looks* or *behaves* changed; visitors still get one
smooth, instant site with no page reloads when they click the menu. Only
the underlying organisation changed, to make it easier to find things.

## The folder layout

```
site/
├── index.html                       the shell every visitor loads first
├── style.css                        every colour, font, and spacing rule
├── vendor/
│   └── react.js                     borrowed library code (not ours — see below)
└── js/
    ├── app.js                       ties every page together + starts the site
    ├── nav.js                       the top menu bar shown on every page
    ├── footer.js                    the bottom section shown on every page
    ├── home.js                      the Home page
    ├── features.js                  the Features page ("Everything included")
    ├── pricing.js                   the Pricing page
    ├── industry-page-template.js    shared layout used by the 3 pages below
    ├── retail.js                    the "For Retail" page
    ├── trade.js                     the "For Trade & Wholesale" page
    ├── service.js                   the "For Service Business" page
    ├── about.js                     the "About Us" page
    ├── studio-services.js           the "Studio Services" page
    ├── demo.js                      the "See It In Action" page
    └── contact.js                   the "Book a free demo" contact form page
```

Every file above (except `vendor/react.js`) now maps to exactly **one**
menu item or shared piece of the site — if you know which page you want
to change, you know which file to open.

## What's in each kind of file

- **`index.html`** — very short. It just says "load the styling, then load
  `js/app.js`, then put everything into an empty box on the page." You
  won't usually need to touch this.
- **`style.css`** — every colour, spacing, and font rule, generated
  automatically by a design tool (Tailwind CSS). Not meant to be
  hand-edited line by line.
- **`vendor/react.js`** — off-the-shelf code (the React framework) that
  isn't specific to CommerceForce at all. It's what makes the page
  interactive under the hood. You should never need to open this file.
- **`js/app.js`** — the "traffic controller." It remembers which page the
  visitor is currently looking at, shows the menu bar and footer on every
  page, and swaps in whichever page component belongs in the middle.
- **Every other file in `js/`** — one specific page's own wording,
  layout, and behaviour, e.g. `pricing.js` has all the prices and the
  comparison table; `contact.js` has the whole booking form.

## How to find and safely change something

Just like before, the actual wording, prices, and contact details sit as
plain text inside backtick characters, like this:

```
children: `Book a free demo`,
```

To change what a visitor reads:

1. Work out which page it's on (use the folder layout above), and open
   that one file — e.g. to change a price, open `js/pricing.js` instead
   of searching a 19,000-line file.
2. Use **Find** (Ctrl+F) inside that file for the exact words currently
   shown (e.g. `Simple, honest pricing` or `+447484129061`).
3. Change only the text between the backticks (`` ` ``). Leave the
   backticks, commas, curly braces `{ }`, and `function`/`import`/`export`
   lines exactly as they are — those hold the page together, and an
   accidental deletion there can make that whole page (or the whole site)
   go blank for every visitor.
4. Save the file.

If you're ever unsure whether a change is safe, ask before saving, or
keep a backup copy of the file first.

## A couple of files hold data shared between two things

Three of the `js/` files start with a block of data *before* the page
content itself:

- `home.js` starts with the small feature-highlight lists used partway
  down the Home page.
- `features.js` starts with the categorised list of everything included
  (Selling, Marketing, Operations, etc.).
- `pricing.js` starts with the comparison-table data (what Retail/Trade/
  Service businesses get, and the add-on list).

These are still just plain-text lists you can edit the same way as
anything else — they just happen to sit above the `export function ...`
line in their file rather than inside it.

## Where contact details live

The phone number and email address appear in a few places: the top
banner (`nav.js`), the bottom of every page (`footer.js`), and the
contact page (`contact.js`). Searching for `447484129061` or
`aiasthika@gmail.com` across the `js/` folder will find every spot.

## Where this lives once published

See [`deployment-procedure.md`](./deployment-procedure.md) and
[`deployment-plan.md`](./deployment-plan.md) for how these files get
from your computer onto the live website at www.commerceforce.uk. The
live server's configuration already serves whatever files exist in its
folder, so uploading the whole `site/` folder (instead of the old single
`commerceforce-website.html`) needs no server changes — just re-upload.

The original single-file version, `commerceforce-website.html`, is left
in the project as-is for reference; it is no longer what should be
edited or deployed going forward.
