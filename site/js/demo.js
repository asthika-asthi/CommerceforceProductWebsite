import { React as l, jsx as f } from "../vendor/react.js";

    // --- "See It In Action" page: promo video / product demo showcase ---
    export function ae({ onNavigate: e }) {
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
                  children: `See it in action`,
                }),
                (0, f.jsx)(`h1`, {
                  className: `text-5xl text-white mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Live demo`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `Browse a live demo store, watch the walkthrough video, or book a personalised demo for your business type.`,
                }),
              ],
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
            children: [
              (0, f.jsx)(`div`, {
                className: `bg-[#0F1C2E] rounded-2xl aspect-video flex items-center justify-center mb-10 relative overflow-hidden max-w-3xl mx-auto border border-white/10`,
                children: (0, f.jsxs)(`div`, {
                  className: `text-center`,
                  children: [
                    (0, f.jsx)(`div`, {
                      className: `w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4`,
                      children: (0, f.jsx)(`svg`, {
                        width: `24`,
                        height: `24`,
                        viewBox: `0 0 24 24`,
                        fill: `#0F1C2E`,
                        children: (0, f.jsx)(`path`, { d: `M8 5v14l11-7z` }),
                      }),
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-white font-semibold mb-1`,
                      children: `Promo video coming soon`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-400 text-sm`,
                      children: `60–90 second walkthrough — retail, trade, and service businesses`,
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto`,
                children: [
                  {
                    type: `Retail demo`,
                    desc: `Browse a live product store with card checkout, loyalty points, and coupons.`,
                    accent: `#0F1C2E`,
                    icon: `🛍`,
                  },
                  {
                    type: `Trade demo`,
                    desc: `See the trade account flow, wholesale pricing, and credit account checkout.`,
                    accent: `#059669`,
                    icon: `🏭`,
                  },
                  {
                    type: `Service demo`,
                    desc: `Book an appointment, see the provider calendar and client record flow.`,
                    accent: `#E85D4A`,
                    icon: `📅`,
                  },
                ].map((e) =>
                  (0, f.jsxs)(
                    `div`,
                    {
                      className: `bg-white border border-slate-200 rounded-xl p-6 text-center`,
                      children: [
                        (0, f.jsx)(`div`, {
                          className: `text-3xl mb-3`,
                          children: e.icon,
                        }),
                        (0, f.jsx)(`h3`, {
                          className: `font-semibold text-[#0F1C2E] mb-2`,
                          style: { fontFamily: `Inter, sans-serif` },
                          children: e.type,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-500 text-xs mb-4 leading-relaxed`,
                          children: e.desc,
                        }),
                        (0, f.jsx)(`button`, {
                          className: `w-full py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90`,
                          style: { backgroundColor: e.accent },
                          children: `Browse demo store →`,
                        }),
                      ],
                    },
                    e.type,
                  ),
                ),
              }),
              (0, f.jsxs)(`div`, {
                className: `max-w-3xl mx-auto`,
                children: [
                  (0, f.jsx)(`h2`, {
                    className: `text-3xl text-[#0F1C2E] mb-8 text-center`,
                    style: { fontFamily: `DM Serif Display, serif` },
                    children: `What you and your customers see`,
                  }),
                  (0, f.jsx)(`div`, {
                    className: `space-y-4`,
                    children: [
                      {
                        side: `Admin`,
                        label: `Products dashboard`,
                        desc: `Every product with thumbnail, SKU, price, and stock at a glance.`,
                        tag: `Admin`,
                      },
                      {
                        side: `Admin`,
                        label: `Orders in one place`,
                        desc: `Full order lifecycle — pending, confirmed, shipped, delivered. Add a tracking number and the customer is emailed instantly.`,
                        tag: `Admin`,
                      },
                      {
                        side: `Storefront`,
                        label: `Product page with variant picker`,
                        desc: `The storefront updates price, image, and stock live as the shopper picks size, colour, or pack size.`,
                        tag: `Storefront`,
                      },
                      {
                        side: `Storefront`,
                        label: `Appointment booking flow`,
                        desc: `Pick a provider, choose a time slot, confirm. Customers receive an email; you see it in your calendar.`,
                        tag: `Service`,
                      },
                    ].map((e) =>
                      (0, f.jsxs)(
                        `div`,
                        {
                          className: `bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4`,
                          children: [
                            (0, f.jsx)(`div`, {
                              className: `w-24 h-16 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center`,
                              children: (0, f.jsxs)(`span`, {
                                className: `text-slate-300 text-xs text-center`,
                                children: [
                                  e.tag,
                                  (0, f.jsx)(`br`, {}),
                                  `screenshot`,
                                ],
                              }),
                            }),
                            (0, f.jsxs)(`div`, {
                              children: [
                                (0, f.jsx)(`span`, {
                                  className: `text-xs font-medium uppercase tracking-wide text-slate-400`,
                                  children: e.side,
                                }),
                                (0, f.jsx)(`h4`, {
                                  className: `font-semibold text-[#0F1C2E] mt-0.5 mb-1`,
                                  style: { fontFamily: `Inter, sans-serif` },
                                  children: e.label,
                                }),
                                (0, f.jsx)(`p`, {
                                  className: `text-slate-500 text-sm leading-relaxed`,
                                  children: e.desc,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.label,
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
                  children: `Want a personalised walkthrough?`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-[#0F1C2E]/70 mb-6`,
                  children: `Book a free demo and we'll show you exactly what CommerceForce looks like set up for your business.`,
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
