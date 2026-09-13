import { React as l, jsx as f } from "../vendor/react.js";

    var x = [
        {
          name: `Retail`,
          colour: `#0F1C2E`,
          textLight: !1,
          tagline: `For shops selling to the public`,
          features: [
            `Modern branded storefront`,
            `Card, bank transfer & PayPal`,
            `Product variants`,
            `Abandoned-cart recovery`,
            `Coupons & auto-discounts`,
            `Loyalty points`,
            `Product reviews`,
            `Newsletter capture`,
            `AI chat assistant`,
            `GA4 + Meta Pixel + cookie consent`,
            `GDPR self-service & 2FA`,
            `HTTPS + nightly backups`,
          ],
        },
        {
          name: `Trade Pro`,
          colour: `#059669`,
          textLight: !0,
          popular: !0,
          tagline: `For trade/wholesale or dual retail+trade`,
          features: [
            `Everything in Retail`,
            `Trade account application & approval`,
            `Wholesale / credit-account pricing`,
            `Credit accounts with spending limits`,
            `Request for Quote (RFQ) workflow`,
            `Bulk CSV catalogue import/export`,
            `Trade-only checkout path`,
            `Priority order management`,
          ],
        },
        {
          name: `Service`,
          colour: `#E85D4A`,
          textLight: !0,
          tagline: `For salons, clinics, repair shops, consultants`,
          features: [
            `Everything in Retail`,
            `Appointment scheduling`,
            `Provider & availability management`,
            `Calendar with double-booking prevention`,
            `Customer-facing booking flow`,
            `Booking confirmation emails`,
            `Client records & private visit notes`,
            `Optional product catalogue add-on`,
          ],
        },
      ],
      ee = [
        {
          name: `SEO Foundations Review`,
          desc: `One-off technical audit, keyword map, on-page fixes on your new store.`,
          tag: `One-off`,
        },
        {
          name: `SEO Management`,
          desc: `Monthly retainer: keyword targeting, content, backlinks. We handle Google.`,
          tag: `Monthly`,
        },
        {
          name: `PPC / Google Ads`,
          desc: `Campaign setup, optimisation, and reporting. Drive traffic from day one.`,
          tag: `Monthly`,
        },
        {
          name: `Social Media Management`,
          desc: `Content creation and scheduling for 1–2 platforms. We post, you sell.`,
          tag: `Monthly`,
        },
        {
          name: `Content & Copywriting`,
          desc: `Product descriptions, blog posts, landing page copy. Words that sell.`,
          tag: `Per project`,
        },
        {
          name: `Monthly Performance Report`,
          desc: `Curated analytics summary and recommendations — no need to open GA4.`,
          tag: `Monthly`,
        },
        {
          name: `Email Campaign Management`,
          desc: `Design and send newsletter campaigns to your subscriber list.`,
          tag: `Monthly`,
        },
      ];
    // --- Pricing page: plans, comparison table vs. competitors, optional add-ons, FAQ, quote CTA ---
    export function S({ onNavigate: e }) {
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
                  children: `Transparent pricing`,
                }),
                (0, f.jsx)(`h1`, {
                  className: `text-5xl text-white mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Pricing`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `One setup. One monthly fee. No transaction fees, ever. Final quote confirmed after your demo.`,
                }),
                (0, f.jsx)(`div`, {
                  className: `mt-4 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-lg px-4 py-2`,
                  children: (0, f.jsx)(`span`, {
                    className: `text-amber-400 text-sm`,
                    children: `No long-term contract · Cancel with 30 days' notice`,
                  }),
                }),
              ],
            }),
          }),
          (0, f.jsx)(`div`, {
            className: `bg-white border-b border-slate-200 py-8 px-4`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-3xl mx-auto text-center`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `text-slate-500 text-sm mb-1 uppercase tracking-wide font-medium`,
                  children: `The real comparison`,
                }),
                (0, f.jsx)(`h2`, {
                  className: `text-2xl text-[#0F1C2E] mb-3`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `What you'd actually pay elsewhere`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-500 text-sm leading-relaxed max-w-xl mx-auto`,
                  children: `A Shopify plan looks cheap at £39/mo — until you add B2B apps (£100–500+/mo), transaction fees on every sale (0.5–2%), and the agency you'd hire anyway to set it up. CommerceForce bundles everything. No per-app bills. No per-sale cut.`,
                }),
              ],
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
            children: [
              (0, f.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                children: x.map((t) =>
                  (0, f.jsxs)(
                    `div`,
                    {
                      className: `rounded-2xl overflow-hidden border-2 flex flex-col ${t.popular ? `border-emerald-500 shadow-xl` : `border-slate-200`}`,
                      children: [
                        t.popular &&
                          (0, f.jsx)(`div`, {
                            className: `bg-emerald-500 text-white text-xs font-semibold text-center py-2 tracking-wide uppercase`,
                            children: `Most popular`,
                          }),
                        (0, f.jsx)(`div`, {
                          className: `p-2`,
                          style: { backgroundColor: t.colour },
                          children: (0, f.jsxs)(`div`, {
                            className: `p-5`,
                            children: [
                              (0, f.jsx)(`h3`, {
                                className: `text-white text-xl font-bold mb-1`,
                                style: { fontFamily: `Inter, sans-serif` },
                                children: t.name,
                              }),
                              (0, f.jsx)(`p`, {
                                className: `text-white/70 text-sm`,
                                children: t.tagline,
                              }),
                            ],
                          }),
                        }),
                        (0, f.jsxs)(`div`, {
                          className: `bg-white flex-1 p-6`,
                          children: [
                            (0, f.jsxs)(`div`, {
                              className: `mb-6`,
                              children: [
                                (0, f.jsx)(`p`, {
                                  className: `text-2xl font-bold text-[#0F1C2E]`,
                                  style: { fontFamily: `DM Serif Display, serif` },
                                  children: `Get a quote`,
                                }),
                                (0, f.jsx)(`p`, {
                                  className: `text-slate-400 text-xs mt-1`,
                                  children: `Setup fee + monthly · confirmed after demo`,
                                }),
                              ],
                            }),
                            (0, f.jsx)(`ul`, {
                              className: `space-y-2.5 mb-8`,
                              children: t.features.map((e) =>
                                (0, f.jsxs)(
                                  `li`,
                                  {
                                    className: `flex items-start gap-2.5 text-sm text-slate-600`,
                                    children: [
                                      (0, f.jsx)(`span`, {
                                        className: `mt-0.5 shrink-0 font-bold`,
                                        style: { color: t.colour },
                                        children: `✓`,
                                      }),
                                      e,
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, f.jsx)(`button`, {
                              onClick: () => e(`contact`),
                              className: `w-full py-3 rounded-lg text-sm font-semibold transition-colors text-white`,
                              style: { backgroundColor: t.colour },
                              children: `Book a free demo`,
                            }),
                          ],
                        }),
                      ],
                    },
                    t.name,
                  ),
                ),
              }),
              (0, f.jsx)(`p`, {
                className: `text-center text-slate-400 text-sm mt-6`,
                children: `Need both trade + service, or trade + retail? We build combined setups — ask at your demo.`,
              }),
              (0, f.jsxs)(`div`, {
                className: `mt-20`,
                children: [
                  (0, f.jsxs)(`div`, {
                    className: `mb-10`,
                    children: [
                      (0, f.jsx)(`h2`, {
                        className: `text-3xl text-[#0F1C2E] mb-3`,
                        style: { fontFamily: `DM Serif Display, serif` },
                        children: `Optional add-ons`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-slate-500 max-w-xl`,
                        children: `Your store comes complete — but if you want us to help grow it too, these are available as studio retainers.`,
                      }),
                    ],
                  }),
                  (0, f.jsx)(`div`, {
                    className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
                    children: ee.map((e) =>
                      (0, f.jsxs)(
                        `div`,
                        {
                          className: `bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow`,
                          children: [
                            (0, f.jsxs)(`div`, {
                              className: `flex items-start justify-between gap-3 mb-2`,
                              children: [
                                (0, f.jsx)(`h4`, {
                                  className: `font-semibold text-[#0F1C2E] text-sm`,
                                  style: { fontFamily: `Inter, sans-serif` },
                                  children: e.name,
                                }),
                                (0, f.jsx)(`span`, {
                                  className: `bg-amber-100 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full shrink-0`,
                                  children: e.tag,
                                }),
                              ],
                            }),
                            (0, f.jsx)(`p`, {
                              className: `text-slate-500 text-xs leading-relaxed`,
                              children: e.desc,
                            }),
                          ],
                        },
                        e.name,
                      ),
                    ),
                  }),
                  (0, f.jsx)(`p`, {
                    className: `text-slate-400 text-sm mt-5`,
                    children: `Add-on pricing discussed at demo. No obligation to take any add-on.`,
                  }),
                ],
              }),
              (0, f.jsxs)(`div`, {
                className: `mt-20 max-w-2xl`,
                children: [
                  (0, f.jsx)(`h2`, {
                    className: `text-3xl text-[#0F1C2E] mb-8`,
                    style: { fontFamily: `DM Serif Display, serif` },
                    children: `Common questions`,
                  }),
                  (0, f.jsx)(`div`, {
                    className: `space-y-6`,
                    children: [
                      [
                        `Is there a long-term contract?`,
                        `No. We ask for 30 days' notice to cancel. No lock-in, no penalties.`,
                      ],
                      [
                        `What does "setup fee" cover?`,
                        `Building and branding your store — logo, colours, homepage layout, payment setup, and configuring whichever features your business needs. Typically takes 2–3 weeks.`,
                      ],
                      [
                        `What does the monthly fee cover?`,
                        `Hosting on your own server, nightly backups, security updates, and support. No platform cut, no transaction fees.`,
                      ],
                      [
                        `Can I switch tiers later?`,
                        `Yes. If your business adds trade customers or starts offering appointments, we can add those features to your existing store.`,
                      ],
                      [
                        `What if I already have a Shopify store?`,
                        `We can migrate your catalogue, products, and customer data. Ask at your demo.`,
                      ],
                      [
                        `Do you handle SEO and marketing?`,
                        `Your store is built with SEO-ready foundations. For ongoing SEO, PPC, social, or content management, we offer these as optional studio add-ons.`,
                      ],
                    ].map(([e, t]) =>
                      (0, f.jsxs)(
                        `div`,
                        {
                          className: `border-b border-slate-200 pb-6`,
                          children: [
                            (0, f.jsx)(`p`, {
                              className: `font-semibold text-[#0F1C2E] mb-2`,
                              style: { fontFamily: `Inter, sans-serif` },
                              children: e,
                            }),
                            (0, f.jsx)(`p`, {
                              className: `text-slate-500 text-sm leading-relaxed`,
                              children: t,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, f.jsx)(`div`, {
            className: `bg-amber-400 py-14 px-4`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-2xl mx-auto text-center`,
              children: [
                (0, f.jsx)(`h2`, {
                  className: `text-3xl text-[#0F1C2E] mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Get your exact quote`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-[#0F1C2E]/70 mb-6`,
                  children: `Book a free demo. We'll scope your requirements and send a clear proposal — no surprises.`,
                }),
                (0, f.jsx)(`button`, {
                  onClick: () => e(`contact`),
                  className: `bg-[#0F1C2E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1A2E47] transition-colors`,
                  children: `Book a free demo`,
                }),
              ],
            }),
          }),
        ],
      });
    }
