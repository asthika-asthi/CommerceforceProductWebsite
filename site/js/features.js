import { React as l, jsx as f } from "../vendor/react.js";

    var y = [
      {
        id: `selling`,
        label: `Selling`,
        icon: `🛒`,
        colour: `#0F1C2E`,
        features: [
          {
            name: `Product variants`,
            desc: `Sell the same product in sizes, colours, or pack sizes — each with its own price and stock. Images swap live when the shopper picks a variant.`,
          },
          {
            name: `Multiple payment methods`,
            desc: `Stripe card payments, bank transfer, PayPal, cash on delivery, and trade credit accounts — all in one checkout. Manual payments marked paid with one click.`,
          },
          {
            name: `Guest order tracking`,
            desc: `Shoppers look up their order status with just an order number and email — no account required.`,
          },
          {
            name: `Abandoned-cart recovery`,
            desc: `Customers who leave items in their cart get an automatic reminder email, bringing them back to finish.`,
          },
          {
            name: `Any currency`,
            desc: `Each store is set to its own currency (£, $, €, ₹, AUD, CAD, AED, SGD, NZD). Prices, checkout, and Stripe card charges all use it.`,
          },
          {
            name: `Shipping zones`,
            desc: `Set delivery rates by country. The right rate is applied automatically at checkout.`,
          },
          {
            name: `Tax / VAT handling`,
            desc: `Set tax rates by country or region. The correct rate is calculated automatically at checkout based on the customer's address.`,
          },
          {
            name: `SEO-ready foundations`,
            desc: `Semantic HTML, auto-generated sitemap, fast page loads, Open Graph tags, GA4 + Meta Pixel integration. Your store is built to be found.`,
          },
        ],
      },
      {
        id: `trade`,
        label: `Trade & B2B`,
        icon: `🏭`,
        colour: `#059669`,
        features: [
          {
            name: `Trade account application`,
            desc: `Business customers apply via your storefront. You review and approve them, unlocking wholesale pricing and credit.`,
          },
          {
            name: `Wholesale & credit-account pricing`,
            desc: `Approved trade customers see a separate price tier at checkout — configured per customer or group.`,
          },
          {
            name: `Credit accounts with limits`,
            desc: `Set a spending limit for each trade account. They pay "on account" up to that limit; balances restore automatically if an order is cancelled.`,
          },
          {
            name: `Request for Quote (RFQ)`,
            desc: `Trade customers submit quote requests for bulk or custom orders. You work through them in a draft → submitted → under review workflow.`,
          },
          {
            name: `Bulk CSV import/export`,
            desc: `Import your whole catalogue from a spreadsheet. Export orders and products to CSV for accounting or stock management.`,
          },
          {
            name: `B2B checkout flow`,
            desc: `Trade customers see their credit balance, account status, and can pay on account — all in the same checkout as retail customers.`,
          },
        ],
      },
      {
        id: `service`,
        label: `Appointments`,
        icon: `📅`,
        colour: `#E85D4A`,
        features: [
          {
            name: `Provider setup & availability`,
            desc: `Add staff or practitioners, set their working hours and holiday exceptions. Double-booking is prevented automatically.`,
          },
          {
            name: `Appointment types`,
            desc: `Define service types with durations and names (e.g. "60-min consultation", "Cut & Colour"). Customers pick from your available slots.`,
          },
          {
            name: `Calendar view`,
            desc: `View and manage all bookings on a calendar. Cancel or reschedule from the admin.`,
          },
          {
            name: `Confirmation emails`,
            desc: `Customers receive automatic booking confirmation emails. You get a notification too.`,
          },
          {
            name: `Client records & visit notes`,
            desc: `Keep a private record per customer with visit journal entries — useful for clinics, therapists, and anyone tracking notes between visits.`,
          },
          {
            name: `Combined with a product catalogue`,
            desc: `Sell products alongside appointments — e.g. a salon selling haircare retail, or a clinic selling supplements.`,
          },
        ],
      },
      {
        id: `marketing`,
        label: `Marketing & Growth`,
        icon: `📈`,
        colour: `#7C3AED`,
        features: [
          {
            name: `Loyalty points`,
            desc: `Customers earn points on every paid order and redeem them for money off. You control the earn rate, redemption value, and minimum threshold.`,
          },
          {
            name: `Coupons & automatic discounts`,
            desc: `Promo codes (percentage or fixed amount) with expiry, minimum order, and usage cap. Automatic "spend over £X, save Y%" rules with no code needed.`,
          },
          {
            name: `Product reviews`,
            desc: `Customers review products they've actually purchased and received. Reviews wait for your approval before appearing on the storefront.`,
          },
          {
            name: `Newsletter`,
            desc: `Collect subscriber emails from the storefront. View, manage, and export the list.`,
          },
          {
            name: `AI chat assistant`,
            desc: `An on-site chat widget that answers customer questions automatically, around the clock.`,
          },
          {
            name: `GA4 + Meta Pixel`,
            desc: `Connect Google Analytics and Meta Pixel with one setting. Shown to visitors behind a cookie-consent banner — no code required.`,
          },
          {
            name: `Announcement bar`,
            desc: `A bar across the top of your shop for time-limited messages (e.g. "Free delivery this week").`,
          },
          {
            name: `Promotional banners`,
            desc: `Promotional banners on the storefront to highlight offers and seasonal campaigns.`,
          },
        ],
      },
      {
        id: `trust`,
        label: `Trust & Compliance`,
        icon: `🔒`,
        colour: `#1A2E47`,
        features: [
          {
            name: `HTTPS on your own server`,
            desc: `Every store runs on the client's own server, HTTPS-secured.`,
          },
          {
            name: `Nightly backups`,
            desc: `Automatic nightly backups. Your data is safe.`,
          },
          {
            name: `Two-factor authentication`,
            desc: `You and your customers can turn on 2FA — a one-time code emailed after your password.`,
          },
          {
            name: `GDPR self-service tools`,
            desc: `Customers can export their own data or request account deletion — compliant with UK/EU GDPR. Deletion requests go to you for approval.`,
          },
          {
            name: `Email verification`,
            desc: `New customers must confirm their email before they can sign in. Keeps out fake accounts.`,
          },
          {
            name: `Cookie-consent banner`,
            desc: `GA4 and Meta Pixel only activate once visitors accept cookies. Compliant out of the box.`,
          },
        ],
      },
      {
        id: `brand`,
        label: `Your Brand`,
        icon: `🎨`,
        colour: `#B45309`,
        features: [
          {
            name: `Logo, favicon & brand colours`,
            desc: `Set your logo and a handful of core colours. The full palette — hover states, tints, shades — is generated automatically.`,
          },
          {
            name: `~50 homepage sections`,
            desc: `Build your homepage from a library of nearly 50 ready-made sections: hero banners, pricing tables, image galleries, video showcases, testimonials, FAQs, category grids, stats, and more.`,
          },
          {
            name: `Media library`,
            desc: `A central image library with folders. Upload once, reuse across products, categories, and banners.`,
          },
          {
            name: `Mobile-first storefront`,
            desc: `Every store is fully responsive. Looks great on phone, tablet, and desktop without any extra configuration.`,
          },
          {
            name: `Custom domain`,
            desc: `Your store runs on your own domain. No "powered by" badges or platform branding on your shop.`,
          },
        ],
      },
    ];
    // --- "Features" page: "Everything included" list of what comes with CommerceForce ---
    export function b({ onNavigate: e }) {
      let [t, n] = (0, l.useState)(`selling`),
        r = y.find((e) => e.id === t);
      return (0, f.jsxs)(`div`, {
        className: `bg-[#F8F7F4] min-h-screen`,
        children: [
          (0, f.jsx)(`div`, {
            className: `bg-[#0F1C2E] py-16 px-4`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `text-amber-400 text-sm font-medium mb-3 uppercase tracking-widest`,
                  children: `Everything included`,
                }),
                (0, f.jsx)(`h1`, {
                  className: `text-5xl text-white mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Features`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `No extra app bills. No surprises. Everything your business needs is in the box.`,
                }),
              ],
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
            children: [
              (0, f.jsx)(`div`, {
                className: `flex flex-wrap gap-2 mb-10`,
                children: y.map((e) =>
                  (0, f.jsxs)(
                    `button`,
                    {
                      onClick: () => n(e.id),
                      className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${t === e.id ? `text-white border-transparent` : `bg-white text-slate-600 border-slate-200 hover:border-amber-400`}`,
                      style:
                        t === e.id
                          ? { backgroundColor: e.colour, borderColor: e.colour }
                          : {},
                      children: [(0, f.jsx)(`span`, { children: e.icon }), e.label],
                    },
                    e.id,
                  ),
                ),
              }),
              (0, f.jsx)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`,
                children: r.features.map((e) =>
                  (0, f.jsxs)(
                    `div`,
                    {
                      className: `bg-white rounded-xl p-6 border border-slate-100 hover:shadow-sm transition-shadow`,
                      children: [
                        (0, f.jsx)(`div`, {
                          className: `w-6 h-0.5 rounded mb-3`,
                          style: { backgroundColor: r.colour },
                        }),
                        (0, f.jsx)(`h3`, {
                          className: `font-semibold text-[#0F1C2E] mb-2`,
                          style: { fontFamily: `Inter, sans-serif` },
                          children: e.name,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-500 text-sm leading-relaxed`,
                          children: e.desc,
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          (0, f.jsx)(`div`, {
            className: `bg-white border-t border-slate-200 py-14`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-2xl mx-auto text-center px-4`,
              children: [
                (0, f.jsx)(`h2`, {
                  className: `text-3xl text-[#0F1C2E] mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `See every feature live`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-500 mb-6`,
                  children: `Book a free demo and we'll walk through exactly which features suit your business.`,
                }),
                (0, f.jsx)(`button`, {
                  onClick: () => e(`contact`),
                  className: `bg-amber-400 hover:bg-amber-500 text-[#0F1C2E] font-semibold px-8 py-3 rounded-lg transition-colors`,
                  children: `Book a free demo`,
                }),
              ],
            }),
          }),
        ],
      });
    }
