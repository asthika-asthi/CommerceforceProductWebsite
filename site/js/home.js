import { React as l, jsx as f } from "../vendor/react.js";

    var h = [
        `✓ No transaction fees`,
        `✓ No long-term contract`,
        `✓ Card, bank transfer & PayPal`,
        `✓ HTTPS + nightly backups`,
        `✓ Your own server`,
        `✓ GDPR-ready`,
        `✓ 2FA security`,
        `✓ Any currency (£ $ € ₹)`,
        `✓ Abandoned-cart recovery`,
        `✓ No transaction fees`,
        `✓ No long-term contract`,
        `✓ Card, bank transfer & PayPal`,
        `✓ HTTPS + nightly backups`,
        `✓ Your own server`,
        `✓ GDPR-ready`,
        `✓ 2FA security`,
        `✓ Any currency (£ $ € ₹)`,
        `✓ Abandoned-cart recovery`,
      ],
      g = [
        {
          icon: `⊞`,
          title: `One dashboard for everything`,
          body: `Products, orders, customers, pricing, marketing, and your site's look — all from one place. No juggling five tools.`,
          color: `#0F1C2E`,
        },
        {
          icon: `◎`,
          title: `Built for your type of business`,
          body: `Retail card checkout, trade credit accounts and wholesale pricing, or service appointment booking. You get exactly what fits.`,
          color: `#059669`,
        },
        {
          icon: `⬡`,
          title: `You own it — no platform tax`,
          body: `No monthly rent to a platform, no transaction fees on every sale, no mandatory app bills. Your store, on your server, outright.`,
          color: `#1A2E47`,
        },
        {
          icon: `✦`,
          title: `You stay in control`,
          body: `Change prices, add products, run promotions, and update your homepage yourself — in minutes, no developer needed.`,
          color: `#B45309`,
        },
        {
          icon: `◈`,
          title: `Premium out of the box`,
          body: `Fast, mobile-first storefront in your brand's colours. Set a handful of core colours; the full palette is generated for you.`,
          color: `#7C3AED`,
        },
        {
          icon: `↑`,
          title: `Grows with you`,
          body: `Loyalty points, coupons, abandoned-cart recovery, reviews, newsletters, AI chat, 2FA — all included and switch-on-ready.`,
          color: `#E85D4A`,
        },
      ],
      _ = [
        {
          label: `Add a product in under a minute`,
          tag: `Products`,
          lines: [
            `Tarpaulin 4×3m — £18.99`,
            `Dust Sheet 3m — £6.50`,
            `Cable Ties (100pk) — £3.20`,
            `+ New Product`,
          ],
          active: 0,
        },
        {
          label: `See every order in one place`,
          tag: `Orders`,
          lines: [
            `#1042  Smith & Sons  £340.00  Shipped`,
            `#1041  Jane Cooper  £84.50  Confirmed`,
            `#1040  Buildco Ltd  £1,200  Processing`,
          ],
          active: 1,
        },
        {
          label: `Drag homepage sections into place`,
          tag: `Homepage Builder`,
          lines: [
            `≡  Hero Banner`,
            `≡  Category Grid`,
            `≡  Featured Products`,
            `≡  Testimonials`,
          ],
          active: 2,
        },
      ];
    // --- Home page: hero banner, industries teaser, "three steps", pricing teaser, demo call-to-action ---
    export function v({ onNavigate: e }) {
      let [t, n] = (0, l.useState)({ name: ``, email: ``, type: `` }),
        [r, i] = (0, l.useState)(!1),
        [a, o] = (0, l.useState)(0);
      return (0, f.jsxs)(`div`, {
        children: [
          (0, f.jsxs)(`section`, {
            className: `bg-[#0F1C2E] min-h-[88vh] flex items-center overflow-hidden relative`,
            children: [
              (0, f.jsx)(`div`, {
                className: `absolute inset-0 opacity-5`,
                style: {
                  backgroundImage: `radial-gradient(circle at 70% 50%, #F59E0B 0%, transparent 60%)`,
                },
              }),
              (0, f.jsxs)(`div`, {
                className: `max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full`,
                children: [
                  (0, f.jsxs)(`div`, {
                    children: [
                      (0, f.jsxs)(`div`, {
                        className: `afu-1 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-3 py-1 mb-6`,
                        children: [
                          (0, f.jsx)(`span`, {
                            className: `w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse`,
                          }),
                          (0, f.jsx)(`span`, {
                            className: `text-amber-400 text-xs font-medium`,
                            children: `Retail · Trade · Service businesses`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(`h1`, {
                        className: `afu-2 text-white text-5xl sm:text-6xl leading-[1.05] mb-6`,
                        style: { fontFamily: `DM Serif Display, serif` },
                        children: [
                          `Juggling five tools`,
                          (0, f.jsx)(`br`, {}),
                          (0, f.jsx)(`em`, {
                            className: `text-amber-400 not-italic`,
                            children: `to run one shop?`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(`p`, {
                        className: `afu-3 text-slate-300 text-lg leading-relaxed mb-3 max-w-lg`,
                        children: [
                          `CommerceForce gives retail shops, trade businesses, and service providers a premium branded store and everything to run it — `,
                          (0, f.jsx)(`strong`, {
                            className: `text-white`,
                            children: `owned outright, no transaction fees.`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(`p`, {
                        className: `afu-3 text-slate-400 text-sm mb-8`,
                        children: [
                          `We build it. You run it. We're here when you need us. `,
                          (0, f.jsx)(`span`, {
                            className: `text-amber-400`,
                            children: `No long-term tie-in.`,
                          }),
                        ],
                      }),
                      r
                        ? (0, f.jsxs)(`div`, {
                            className: `afu-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl p-5 max-w-md text-center`,
                            children: [
                              (0, f.jsx)(`p`, {
                                className: `text-emerald-400 text-xl mb-1`,
                                children: `✓`,
                              }),
                              (0, f.jsxs)(`p`, {
                                className: `text-white font-semibold`,
                                children: [`Thanks, `, t.name, `!`],
                              }),
                              (0, f.jsx)(`p`, {
                                className: `text-slate-300 text-sm mt-1`,
                                children: `We'll be in touch within one business day to arrange your demo.`,
                              }),
                            ],
                          })
                        : (0, f.jsxs)(`form`, {
                            onSubmit: (e) => {
                              (e.preventDefault(),
                                t.name && t.email && t.type && i(!0));
                            },
                            className: `afu-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 max-w-md`,
                            children: [
                              (0, f.jsx)(`p`, {
                                className: `text-white font-semibold text-sm mb-1`,
                                children: `Book a free demo — no obligation`,
                              }),
                              (0, f.jsx)(`input`, {
                                type: `text`,
                                placeholder: `Your name`,
                                value: t.name,
                                onChange: (e) => n({ ...t, name: e.target.value }),
                                className: `w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400`,
                                required: !0,
                              }),
                              (0, f.jsx)(`input`, {
                                type: `email`,
                                placeholder: `Email address`,
                                value: t.email,
                                onChange: (e) => n({ ...t, email: e.target.value }),
                                className: `w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400`,
                                required: !0,
                              }),
                              (0, f.jsxs)(`select`, {
                                value: t.type,
                                onChange: (e) => n({ ...t, type: e.target.value }),
                                className: `w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 text-white`,
                                required: !0,
                                style: { color: t.type ? `white` : `#94a3b8` },
                                children: [
                                  (0, f.jsx)(`option`, {
                                    value: ``,
                                    disabled: !0,
                                    style: { color: `#64748b` },
                                    children: `What type of business?`,
                                  }),
                                  (0, f.jsx)(`option`, {
                                    value: `retail`,
                                    style: { color: `#0F1C2E` },
                                    children: `Retail shop`,
                                  }),
                                  (0, f.jsx)(`option`, {
                                    value: `trade`,
                                    style: { color: `#0F1C2E` },
                                    children: `Trade / wholesale`,
                                  }),
                                  (0, f.jsx)(`option`, {
                                    value: `service`,
                                    style: { color: `#0F1C2E` },
                                    children: `Service business`,
                                  }),
                                  (0, f.jsx)(`option`, {
                                    value: `unsure`,
                                    style: { color: `#0F1C2E` },
                                    children: `Not sure yet`,
                                  }),
                                ],
                              }),
                              (0, f.jsx)(`button`, {
                                type: `submit`,
                                className: `w-full bg-amber-400 hover:bg-amber-500 text-[#0F1C2E] font-semibold py-2.5 rounded-lg text-sm transition-colors`,
                                children: `Book my free demo →`,
                              }),
                            ],
                          }),
                      (0, f.jsxs)(`p`, {
                        className: `afu-5 text-slate-500 text-xs mt-4`,
                        children: [
                          `Or call us: `,
                          (0, f.jsx)(`a`, {
                            href: `tel:+447484129061`,
                            className: `text-slate-400 hover:text-amber-400 transition-colors`,
                            children: `+44 7484 129061`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, f.jsx)(`div`, {
                    className: `afu-3 hidden lg:block`,
                    children: (0, f.jsxs)(`div`, {
                      className: `bg-[#1A2E47] rounded-2xl overflow-hidden shadow-2xl border border-white/10`,
                      children: [
                        (0, f.jsxs)(`div`, {
                          className: `bg-[#0d1824] px-4 py-3 flex items-center gap-2 border-b border-white/10`,
                          children: [
                            (0, f.jsx)(`span`, {
                              className: `w-3 h-3 rounded-full bg-red-500/70`,
                            }),
                            (0, f.jsx)(`span`, {
                              className: `w-3 h-3 rounded-full bg-amber-500/70`,
                            }),
                            (0, f.jsx)(`span`, {
                              className: `w-3 h-3 rounded-full bg-green-500/70`,
                            }),
                            (0, f.jsx)(`div`, {
                              className: `flex-1 mx-3 bg-white/10 rounded px-3 py-1 text-xs text-slate-400`,
                              children: `your-store.com/admin`,
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`div`, {
                          className: `flex`,
                          style: { minHeight: `340px` },
                          children: [
                            (0, f.jsxs)(`div`, {
                              className: `bg-[#0F1C2E] w-36 p-3 border-r border-white/10 shrink-0`,
                              children: [
                                (0, f.jsx)(`div`, {
                                  className: `text-amber-400 text-xs font-bold mb-4 px-1`,
                                  children: `CF Admin`,
                                }),
                                [
                                  `Dashboard`,
                                  `Products`,
                                  `Orders`,
                                  `Customers`,
                                  `Marketing`,
                                  `Branding`,
                                  `Settings`,
                                ].map((e, t) =>
                                  (0, f.jsx)(
                                    `div`,
                                    {
                                      className: `text-xs px-2 py-1.5 rounded mb-0.5 cursor-pointer ${t === [0, 1, 2][a] + 1 ? `bg-amber-400/20 text-amber-400` : `text-slate-400 hover:text-slate-200`}`,
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                            (0, f.jsxs)(`div`, {
                              className: `flex-1 p-5`,
                              children: [
                                (0, f.jsxs)(`div`, {
                                  className: `flex items-center justify-between mb-4`,
                                  children: [
                                    (0, f.jsx)(`h3`, {
                                      className: `text-white font-semibold text-sm`,
                                      children: _[a].tag,
                                    }),
                                    (0, f.jsx)(`span`, {
                                      className: `bg-amber-400 text-[#0F1C2E] text-xs font-semibold px-2 py-0.5 rounded`,
                                      children: `+ New`,
                                    }),
                                  ],
                                }),
                                (0, f.jsx)(`div`, {
                                  className: `space-y-2`,
                                  children: _[a].lines.map((e, t) =>
                                    (0, f.jsx)(
                                      `div`,
                                      {
                                        className: `text-xs px-3 py-2 rounded ${t === 0 ? `bg-amber-400/10 border border-amber-400/20 text-amber-300` : `bg-white/5 text-slate-300`}`,
                                        children: e,
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsx)(`div`, {
                          className: `bg-[#0d1824] px-4 py-3 border-t border-white/10 flex items-center gap-2`,
                          children: _.map((e, t) =>
                            (0, f.jsx)(
                              `button`,
                              {
                                onClick: () => o(t),
                                className: `text-xs px-3 py-1 rounded-full transition-all ${a === t ? `bg-amber-400 text-[#0F1C2E] font-semibold` : `text-slate-400 hover:text-white`}`,
                                children: e.label,
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, f.jsx)(`section`, {
            className: `bg-amber-400 py-3 overflow-hidden`,
            children: (0, f.jsx)(`div`, {
              className: `flex whitespace-nowrap ticker`,
              children: h.map((e, t) =>
                (0, f.jsxs)(
                  `span`,
                  {
                    className: `inline-flex items-center gap-6 px-6 text-[#0F1C2E] text-sm font-medium`,
                    children: [
                      e,
                      ` `,
                      (0, f.jsx)(`span`, {
                        className: `text-[#0F1C2E]/30`,
                        children: `|`,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-white py-16`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `text-slate-400 text-sm uppercase tracking-widest mb-8 text-center`,
                  children: `Built for your type of business`,
                }),
                (0, f.jsx)(`div`, {
                  className: `grid grid-cols-1 md:grid-cols-3 gap-4`,
                  children: [
                    {
                      page: `retail`,
                      accent: `#0F1C2E`,
                      icon: `🛍`,
                      title: `Retail`,
                      sub: `I sell products to the public`,
                      bullets: [
                        `Card & PayPal checkout`,
                        `Loyalty & coupons`,
                        `Abandoned-cart recovery`,
                        `Product variants`,
                      ],
                    },
                    {
                      page: `trade`,
                      accent: `#059669`,
                      icon: `🏭`,
                      title: `Trade & Wholesale`,
                      sub: `I sell to businesses / the trade`,
                      bullets: [
                        `Credit accounts & limits`,
                        `Wholesale pricing`,
                        `Trade approval flow`,
                        `Request for quote (RFQ)`,
                      ],
                    },
                    {
                      page: `services-page`,
                      accent: `#E85D4A`,
                      icon: `📅`,
                      title: `Service Business`,
                      sub: `I sell time, not (just) products`,
                      bullets: [
                        `Appointment booking`,
                        `Provider calendars`,
                        `Client records & notes`,
                        `Salon · clinic · consultant`,
                      ],
                    },
                  ].map((t) =>
                    (0, f.jsxs)(
                      `button`,
                      {
                        onClick: () => e(t.page),
                        className: `text-left border-2 border-slate-200 hover:border-amber-400 rounded-xl p-6 transition-all group hover:shadow-lg`,
                        children: [
                          (0, f.jsx)(`div`, {
                            className: `text-3xl mb-3`,
                            children: t.icon,
                          }),
                          (0, f.jsx)(`h3`, {
                            className: `font-bold text-lg text-[#0F1C2E] mb-1 group-hover:text-amber-600 transition-colors`,
                            style: { fontFamily: `Inter, sans-serif` },
                            children: t.title,
                          }),
                          (0, f.jsx)(`p`, {
                            className: `text-slate-500 text-sm mb-4`,
                            children: t.sub,
                          }),
                          (0, f.jsx)(`ul`, {
                            className: `space-y-1.5`,
                            children: t.bullets.map((e) =>
                              (0, f.jsxs)(
                                `li`,
                                {
                                  className: `flex items-center gap-2 text-sm text-slate-600`,
                                  children: [
                                    (0, f.jsx)(`span`, {
                                      style: { color: t.accent },
                                      className: `font-bold`,
                                      children: `✓`,
                                    }),
                                    ` `,
                                    e,
                                  ],
                                },
                                e,
                              ),
                            ),
                          }),
                          (0, f.jsx)(`p`, {
                            className: `mt-5 text-sm font-semibold text-slate-400 group-hover:text-amber-600 transition-colors`,
                            children: `See how it works for you →`,
                          }),
                        ],
                      },
                      t.page,
                    ),
                  ),
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-[#F8F7F4] py-20`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `max-w-xl mb-14`,
                  children: [
                    (0, f.jsxs)(`h2`, {
                      className: `text-4xl text-[#0F1C2E] mb-4`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: [
                        `Everything in one place.`,
                        (0, f.jsx)(`br`, {}),
                        `Nothing you don't need.`,
                      ],
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-500 text-lg`,
                      children: `Six reasons businesses choose CommerceForce over patching together a platform, five apps, and a developer on retainer.`,
                    }),
                  ],
                }),
                (0, f.jsx)(`div`, {
                  className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,
                  children: g.map((e) =>
                    (0, f.jsxs)(
                      `div`,
                      {
                        className: `bg-white rounded-xl p-7 border border-slate-100 hover:shadow-md transition-shadow`,
                        children: [
                          (0, f.jsx)(`div`, {
                            className: `text-2xl mb-4`,
                            style: { color: e.color },
                            children: e.icon,
                          }),
                          (0, f.jsx)(`h3`, {
                            className: `font-semibold text-[#0F1C2E] text-base mb-2`,
                            style: { fontFamily: `Inter, sans-serif` },
                            children: e.title,
                          }),
                          (0, f.jsx)(`p`, {
                            className: `text-slate-500 text-sm leading-relaxed`,
                            children: e.body,
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-[#0F1C2E] py-20`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,
              children: [
                (0, f.jsxs)(`div`, {
                  children: [
                    (0, f.jsxs)(`h2`, {
                      className: `text-4xl text-white mb-6`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: [
                        `Own your store.`,
                        (0, f.jsx)(`br`, {}),
                        (0, f.jsx)(`em`, {
                          className: `text-amber-400 not-italic`,
                          children: `Don't rent it.`,
                        }),
                      ],
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-300 text-lg leading-relaxed mb-8`,
                      children: `Shopify looks cheap at £39/month — until you add 5–10 apps (£100–£500+/mo), transaction fees on every sale, and the agency you'd hire anyway. The real bill is 3–5× the headline price.`,
                    }),
                    (0, f.jsxs)(`p`, {
                      className: `text-slate-300 leading-relaxed mb-8`,
                      children: [
                        `CommerceForce bundles loyalty, coupons, abandoned-cart recovery, trade accounts, credit limits, RFQ, scheduling, GDPR tools, and AI chat — all included. No per-transaction cut. No per-app bills. Your store runs on `,
                        (0, f.jsx)(`strong`, {
                          className: `text-white`,
                          children: `your own server.`,
                        }),
                      ],
                    }),
                    (0, f.jsx)(`div`, {
                      className: `grid grid-cols-2 gap-4`,
                      children: [
                        [`£0`, `Transaction fees, ever`],
                        [`~50`, `Homepage sections included`],
                        [`5 mins`, `To update your homepage`],
                        [`1`, `Dashboard for everything`],
                      ].map(([e, t]) =>
                        (0, f.jsxs)(
                          `div`,
                          {
                            className: `bg-white/5 border border-white/10 rounded-xl p-4`,
                            children: [
                              (0, f.jsx)(`p`, {
                                className: `text-amber-400 text-2xl font-bold mb-1`,
                                style: { fontFamily: `DM Serif Display, serif` },
                                children: e,
                              }),
                              (0, f.jsx)(`p`, {
                                className: `text-slate-400 text-xs`,
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
                (0, f.jsx)(`div`, {
                  className: `bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto`,
                  children: (0, f.jsxs)(`table`, {
                    className: `w-full text-sm text-left`,
                    children: [
                      (0, f.jsx)(`thead`, {
                        children: (0, f.jsxs)(`tr`, {
                          className: `border-b border-white/10`,
                          children: [
                            (0, f.jsx)(`th`, {
                              className: `text-slate-400 font-medium pb-3 pr-4 text-xs uppercase tracking-wide`,
                              children: `What you'd pay`,
                            }),
                            (0, f.jsx)(`th`, {
                              className: `text-slate-400 font-medium pb-3 pr-4 text-xs uppercase tracking-wide text-center`,
                              children: `Shopify`,
                            }),
                            (0, f.jsx)(`th`, {
                              className: `text-amber-400 font-semibold pb-3 text-xs uppercase tracking-wide text-center`,
                              children: `CommerceForce`,
                            }),
                          ],
                        }),
                      }),
                      (0, f.jsx)(`tbody`, {
                        className: `divide-y divide-white/5`,
                        children: [
                          [
                            `Base subscription`,
                            `£39–£399/mo`,
                            `Setup + flat monthly`,
                          ],
                          [`B2B / trade features`, `+£100–300/mo apps`, `Included`],
                          [`Loyalty & coupons`, `+ extra app`, `Included`],
                          [`Abandoned cart`, `+ extra app`, `Included`],
                          [`Appointment booking`, `Not available`, `Included`],
                          [
                            `Transaction fees`,
                            `0.5–2% every sale`,
                            `£0 — none ever`,
                          ],
                          [`Own your store`, `No — rented`, `Yes — yours outright`],
                        ].map(([e, t, n]) =>
                          (0, f.jsxs)(
                            `tr`,
                            {
                              children: [
                                (0, f.jsx)(`td`, {
                                  className: `text-slate-300 py-2.5 pr-4`,
                                  children: e,
                                }),
                                (0, f.jsx)(`td`, {
                                  className: `text-slate-400 py-2.5 pr-4 text-center text-xs`,
                                  children: t,
                                }),
                                (0, f.jsx)(`td`, {
                                  className: `text-emerald-400 py-2.5 text-center text-xs font-medium`,
                                  children: n,
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-white py-20`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden`,
                  children: [
                    (0, f.jsxs)(`div`, {
                      className: `bg-slate-800 px-4 py-2.5 flex items-center gap-2`,
                      children: [
                        (0, f.jsx)(`span`, {
                          className: `w-2.5 h-2.5 rounded-full bg-red-500/70`,
                        }),
                        (0, f.jsx)(`span`, {
                          className: `w-2.5 h-2.5 rounded-full bg-amber-500/70`,
                        }),
                        (0, f.jsx)(`span`, {
                          className: `w-2.5 h-2.5 rounded-full bg-green-500/70`,
                        }),
                        (0, f.jsx)(`span`, {
                          className: `text-slate-400 text-xs ml-2`,
                          children: `your-store.com/admin/orders`,
                        }),
                      ],
                    }),
                    (0, f.jsxs)(`div`, {
                      className: `p-5`,
                      children: [
                        (0, f.jsxs)(`div`, {
                          className: `flex items-center justify-between mb-4`,
                          children: [
                            (0, f.jsx)(`h4`, {
                              className: `font-semibold text-slate-800`,
                              children: `Orders`,
                            }),
                            (0, f.jsx)(`span`, {
                              className: `text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium`,
                              children: `12 today`,
                            }),
                          ],
                        }),
                        [
                          {
                            id: `#1042`,
                            co: `Buildco Ltd`,
                            amt: `£1,200.00`,
                            status: `Shipped`,
                            dot: `bg-emerald-500`,
                          },
                          {
                            id: `#1041`,
                            co: `Jane Cooper`,
                            amt: `£84.50`,
                            status: `Confirmed`,
                            dot: `bg-blue-500`,
                          },
                          {
                            id: `#1040`,
                            co: `Smith & Sons Ltd`,
                            amt: `£340.00`,
                            status: `Processing`,
                            dot: `bg-amber-500`,
                          },
                          {
                            id: `#1039`,
                            co: `R. Patel`,
                            amt: `£29.99`,
                            status: `Delivered`,
                            dot: `bg-slate-300`,
                          },
                        ].map((e) =>
                          (0, f.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0`,
                              children: [
                                (0, f.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, f.jsx)(`span`, {
                                      className: `text-slate-400 text-xs font-mono`,
                                      children: e.id,
                                    }),
                                    (0, f.jsx)(`span`, {
                                      className: `text-slate-700 text-sm`,
                                      children: e.co,
                                    }),
                                  ],
                                }),
                                (0, f.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, f.jsx)(`span`, {
                                      className: `text-slate-800 text-sm font-medium`,
                                      children: e.amt,
                                    }),
                                    (0, f.jsxs)(`span`, {
                                      className: `flex items-center gap-1 text-xs text-slate-500`,
                                      children: [
                                        (0, f.jsx)(`span`, {
                                          className: `w-1.5 h-1.5 rounded-full ${e.dot}`,
                                        }),
                                        e.status,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(`div`, {
                  children: [
                    (0, f.jsxs)(`h2`, {
                      className: `text-4xl text-[#0F1C2E] mb-6`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: [
                        `You're in control.`,
                        (0, f.jsx)(`br`, {}),
                        `No developer required.`,
                      ],
                    }),
                    (0, f.jsx)(`div`, {
                      className: `space-y-5`,
                      children: [
                        {
                          icon: `📦`,
                          head: `Add a product in under a minute`,
                          body: `Name, price, images, stock, variants — done. Tick Featured and it appears on your homepage.`,
                        },
                        {
                          icon: `📋`,
                          head: `See every order in one place`,
                          body: `Track orders from placed → confirmed → shipped → delivered. Add a tracking number and the customer is emailed instantly.`,
                        },
                        {
                          icon: `🎨`,
                          head: `Update your homepage yourself`,
                          body: `Drag, drop, and reorder from ~50 ready-made sections. No code, no agency call, no waiting.`,
                        },
                        {
                          icon: `💳`,
                          head: `Accept any payment method`,
                          body: `Stripe card, bank transfer, PayPal, cash on delivery, or credit accounts for trade customers — all in one checkout.`,
                        },
                      ].map((e) =>
                        (0, f.jsxs)(
                          `div`,
                          {
                            className: `flex gap-4`,
                            children: [
                              (0, f.jsx)(`span`, {
                                className: `text-xl shrink-0 mt-0.5`,
                                children: e.icon,
                              }),
                              (0, f.jsxs)(`div`, {
                                children: [
                                  (0, f.jsx)(`p`, {
                                    className: `font-semibold text-[#0F1C2E] mb-0.5`,
                                    style: { fontFamily: `Inter, sans-serif` },
                                    children: e.head,
                                  }),
                                  (0, f.jsx)(`p`, {
                                    className: `text-slate-500 text-sm leading-relaxed`,
                                    children: e.body,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.head,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-[#F8F7F4] py-20`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `text-center max-w-xl mx-auto mb-14`,
                  children: [
                    (0, f.jsx)(`h2`, {
                      className: `text-4xl text-[#0F1C2E] mb-4`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: `How it works`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-500`,
                      children: `Three steps. You're selling in weeks, not months.`,
                    }),
                  ],
                }),
                (0, f.jsx)(`div`, {
                  className: `grid grid-cols-1 md:grid-cols-3 gap-8`,
                  children: [
                    {
                      n: `1`,
                      head: `We build & brand your store`,
                      body: `We set up your CommerceForce store — colours, logo, homepage layout, payment methods, and whichever features your business needs. Typically live within 2–3 weeks.`,
                    },
                    {
                      n: `2`,
                      head: `You go live and start selling`,
                      body: `We hand you the keys. You add products, set prices, and open your store. Your customers see a fast, polished shop that looks like you paid ten times more for it.`,
                    },
                    {
                      n: `3`,
                      head: `You run it yourself — we're here if needed`,
                      body: `Change prices, add products, run promotions, update your homepage — all from your dashboard. We're available for support, growth add-ons, or new features whenever you need us.`,
                    },
                  ].map((e) =>
                    (0, f.jsxs)(
                      `div`,
                      {
                        className: `relative`,
                        children: [
                          (0, f.jsx)(`div`, {
                            className: `text-6xl font-bold text-slate-100 mb-2 leading-none`,
                            style: { fontFamily: `DM Serif Display, serif` },
                            children: e.n,
                          }),
                          (0, f.jsx)(`h3`, {
                            className: `font-semibold text-[#0F1C2E] text-lg mb-2 -mt-2`,
                            style: { fontFamily: `Inter, sans-serif` },
                            children: e.head,
                          }),
                          (0, f.jsx)(`p`, {
                            className: `text-slate-500 text-sm leading-relaxed`,
                            children: e.body,
                          }),
                        ],
                      },
                      e.n,
                    ),
                  ),
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-white py-20`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `text-center max-w-xl mx-auto mb-12`,
                  children: [
                    (0, f.jsx)(`h2`, {
                      className: `text-4xl text-[#0F1C2E] mb-4`,
                      style: { fontFamily: `DM Serif Display, serif` },
                      children: `Simple, honest pricing`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-500`,
                      children: `One setup. One monthly fee. No transaction fees, ever. Exact quote confirmed after your demo.`,
                    }),
                  ],
                }),
                (0, f.jsx)(`div`, {
                  className: `grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto`,
                  children: [
                    {
                      name: `Retail`,
                      colour: `#0F1C2E`,
                      features: [
                        `Branded storefront`,
                        `Card, bank transfer & PayPal`,
                        `Product variants`,
                        `Coupons & auto-discounts`,
                        `Abandoned-cart recovery`,
                        `Loyalty points`,
                        `Reviews, newsletter, AI chat`,
                        `GDPR, 2FA, analytics`,
                      ],
                    },
                    {
                      name: `Trade Pro`,
                      colour: `#059669`,
                      popular: !0,
                      features: [
                        `Everything in Retail`,
                        `Trade account application`,
                        `Wholesale / credit pricing`,
                        `Credit accounts & limits`,
                        `Request for Quote (RFQ)`,
                        `Bulk CSV import/export`,
                        `Priority order management`,
                      ],
                    },
                    {
                      name: `Service`,
                      colour: `#E85D4A`,
                      features: [
                        `Everything in Retail`,
                        `Appointment scheduling`,
                        `Provider & availability setup`,
                        `Calendar & double-booking guard`,
                        `Client records & notes`,
                        `Confirmation emails`,
                        `Optional product catalogue`,
                      ],
                    },
                  ].map((e) =>
                    (0, f.jsxs)(
                      `div`,
                      {
                        className: `rounded-xl border-2 p-6 relative ${e.popular ? `border-emerald-500 shadow-lg` : `border-slate-200`}`,
                        children: [
                          e.popular &&
                            (0, f.jsx)(`span`, {
                              className: `absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full`,
                              children: `Most popular`,
                            }),
                          (0, f.jsx)(`div`, {
                            className: `w-8 h-1 rounded mb-3`,
                            style: { backgroundColor: e.colour },
                          }),
                          (0, f.jsx)(`h3`, {
                            className: `font-bold text-lg text-[#0F1C2E] mb-1`,
                            style: { fontFamily: `Inter, sans-serif` },
                            children: e.name,
                          }),
                          (0, f.jsx)(`p`, {
                            className: `text-slate-400 text-sm mb-5`,
                            children: `Get a quote`,
                          }),
                          (0, f.jsx)(`ul`, {
                            className: `space-y-2 mb-6`,
                            children: e.features.map((e) =>
                              (0, f.jsxs)(
                                `li`,
                                {
                                  className: `flex items-start gap-2 text-sm text-slate-600`,
                                  children: [
                                    (0, f.jsx)(`span`, {
                                      className: `text-emerald-500 mt-0.5 shrink-0`,
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
                            onClick: () => {},
                            className: `w-full py-2.5 rounded-lg text-sm font-semibold transition-colors`,
                            style: {
                              backgroundColor: e.colour,
                              color: e.colour === `#F59E0B` ? `#0F1C2E` : `white`,
                            },
                            children: `Book a free demo`,
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
                (0, f.jsx)(`p`, {
                  className: `text-center text-slate-400 text-sm mt-6`,
                  children: `No long-term contract · Cancel with 30 days' notice · Setup fee + monthly — confirmed at demo`,
                }),
              ],
            }),
          }),
          (0, f.jsx)(`section`, {
            className: `bg-amber-400 py-16`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-3xl mx-auto px-4 sm:px-6 text-center`,
              children: [
                (0, f.jsx)(`h2`, {
                  className: `text-4xl text-[#0F1C2E] mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Ready to see it in action?`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-[#0F1C2E]/70 text-lg mb-8`,
                  children: `Book a free, no-obligation demo. We'll show you exactly how CommerceForce works for your type of business.`,
                }),
                (0, f.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row gap-3 justify-center`,
                  children: [
                    (0, f.jsx)(`button`, {
                      onClick: () =>
                        document
                          .getElementById(`hero-form`)
                          ?.scrollIntoView({ behavior: `smooth` }),
                      className: `bg-[#0F1C2E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1A2E47] transition-colors`,
                      children: `Book a free demo`,
                    }),
                    (0, f.jsx)(`a`, {
                      href: `tel:+447484129061`,
                      className: `border-2 border-[#0F1C2E] text-[#0F1C2E] font-semibold px-8 py-3 rounded-lg hover:bg-[#0F1C2E]/10 transition-colors inline-block`,
                      children: `Call +44 7484 129061`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
