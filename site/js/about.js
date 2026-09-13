import { React as l, jsx as f } from "../vendor/react.js";

    // --- "About Us" page: why CommerceForce was built, SSAI Consultency background ---
    export function w({ onNavigate: e }) {
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
                  children: `SSAI Consultency`,
                }),
                (0, f.jsx)(`h1`, {
                  className: `text-5xl text-white mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `About us`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `We're the team that built CommerceForce — and we use it to build stores for the businesses we serve.`,
                }),
              ],
            }),
          }),
          (0, f.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
            children: (0, f.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-2 gap-16`,
              children: [
                (0, f.jsxs)(`div`, {
                  children: [
                    (0, f.jsx)(`h2`, {
                      className: `text-3xl text-[#0F1C2E] mb-5`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: `Why we built CommerceForce`,
                    }),
                    (0, f.jsxs)(`div`, {
                      className: `prose prose-slate max-w-none space-y-4 text-slate-600 text-base leading-relaxed`,
                      children: [
                        (0, f.jsx)(`p`, {
                          children: `We kept seeing the same problem. A trade business would come to us wanting a proper online shop — one that handled retail customers at the front door and trade customers at the back. They'd get quoted for a Shopify Plus setup (£2,300+/mo) or a custom WooCommerce build that needed a developer on call forever.`,
                        }),
                        (0, f.jsx)(`p`, {
                          children: `Neither option made sense for a builders' merchant with 12 staff, or a packaging supplier whose customers had been phoning in orders for 30 years.`,
                        }),
                        (0, f.jsx)(`p`, {
                          children: `So we built CommerceForce. A complete online store that handles retail, trade wholesale, and service businesses — owned outright by the client, running on their own server, with no transaction fees and no ongoing developer dependency.`,
                        }),
                        (0, f.jsx)(`p`, {
                          children: `We set it up, brand it to your business, hand you the keys, and teach you to run it. Then we're here for support, growth add-ons, or new features — as and when you need us. No long-term tie-in.`,
                        }),
                      ],
                    }),
                    (0, f.jsx)(`div`, {
                      className: `mt-10 grid grid-cols-2 gap-4`,
                      children: [
                        [`3`, `Business types served (retail, trade, service)`],
                        [`~50`, `Homepage sections in the builder`],
                        [`£0`, `Transaction fees on every plan`],
                        [`30 days`, `To cancel — no lock-in`],
                      ].map(([e, t]) =>
                        (0, f.jsxs)(
                          `div`,
                          {
                            className: `bg-white border border-slate-200 rounded-xl p-5`,
                            children: [
                              (0, f.jsx)(`p`, {
                                className: `text-3xl font-bold text-amber-500 mb-1`,
                                style: { fontFamily: `DM Serif Display, serif` },
                                children: e,
                              }),
                              (0, f.jsx)(`p`, {
                                className: `text-slate-500 text-xs leading-tight`,
                                children: t,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, f.jsxs)(`div`, {
                  children: [
                    (0, f.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-2xl p-8 mb-6`,
                      children: [
                        (0, f.jsx)(`div`, {
                          className: `w-16 h-16 bg-[#0F1C2E] rounded-full flex items-center justify-center mb-4`,
                          children: (0, f.jsx)(`span`, {
                            className: `text-amber-400 text-2xl font-bold`,
                            children: `NS`,
                          }),
                        }),
                        (0, f.jsx)(`h3`, {
                          className: `font-bold text-[#0F1C2E] text-lg mb-1`,
                          style: { fontFamily: `Inter, sans-serif` },
                          children: `SSAI Consultency`,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-400 text-sm mb-4`,
                          children: `A digital studio specialising in commerce, AI automation, and web builds for SMBs`,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-600 text-sm leading-relaxed`,
                          children: `We're a small, focused team. Everything we build is done in-house — we don't subcontract. Our clients are mostly UK-based trade and retail businesses, service businesses, and SMBs that have outgrown their current website or are starting from scratch.`,
                        }),
                      ],
                    }),
                    (0, f.jsxs)(`div`, {
                      className: `bg-[#0F1C2E] rounded-2xl p-8 text-white`,
                      children: [
                        (0, f.jsx)(`h3`, {
                          className: `text-xl font-semibold mb-4`,
                          style: { fontFamily: `DM Serif Display, serif` },
                          children: `What we do beyond CommerceForce`,
                        }),
                        (0, f.jsx)(`ul`, {
                          className: `space-y-3 text-sm text-slate-300`,
                          children: [
                            `AI automation — connecting your tools, automating workflows, custom AI assistants`,
                            `Non-commerce websites — brochure sites, landing pages, portfolio sites built with modern AI tooling`,
                            `SEO, PPC, and social management — optional retainers for CommerceForce clients`,
                            `Content and copywriting — product descriptions, blogs, landing pages`,
                          ].map((e) =>
                            (0, f.jsxs)(
                              `li`,
                              {
                                className: `flex items-start gap-2`,
                                children: [
                                  (0, f.jsx)(`span`, {
                                    className: `text-amber-400 mt-0.5 shrink-0`,
                                    children: `→`,
                                  }),
                                  e,
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
              ],
            }),
          }),
          (0, f.jsx)(`div`, {
            className: `bg-amber-400 py-12 px-4`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-2xl mx-auto text-center`,
              children: [
                (0, f.jsx)(`h2`, {
                  className: `text-3xl text-[#0F1C2E] mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `We'd love to hear about your business`,
                }),
                (0, f.jsx)(`button`, {
                  onClick: () => e(`contact`),
                  className: `bg-[#0F1C2E] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#1A2E47] transition-colors`,
                  children: `Book a free, no-obligation chat`,
                }),
              ],
            }),
          }),
        ],
      });
    }
