import { React as l, jsx as f } from "../vendor/react.js";

    // --- Footer: shown at the bottom of every page (contact details, quick links, copyright line) ---
    export function m({ onNavigate: e }) {
      let t = (t, n) =>
        (0, f.jsxs)(`div`, {
          children: [
            (0, f.jsx)(`p`, {
              className: `text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4`,
              children: t,
            }),
            (0, f.jsx)(`ul`, {
              className: `space-y-2.5`,
              children: n.map(([t, n]) =>
                (0, f.jsx)(
                  `li`,
                  {
                    children: (0, f.jsx)(`button`, {
                      onClick: () => e(t),
                      className: `text-sm text-slate-300 hover:text-amber-400 transition-colors`,
                      children: n,
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      return (0, f.jsx)(`footer`, {
        className: `bg-[#0F1C2E] text-white pt-16 pb-8`,
        children: (0, f.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6`,
          children: [
            (0, f.jsxs)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `md:col-span-2`,
                  children: [
                    (0, f.jsxs)(`div`, {
                      className: `flex items-center gap-2.5 mb-4`,
                      children: [
                        (0, f.jsx)(`div`, {
                          className: `w-8 h-8 bg-amber-400 rounded flex items-center justify-center`,
                          children: (0, f.jsx)(`span`, {
                            className: `text-[#0F1C2E] font-bold text-sm font-mono`,
                            children: `CF`,
                          }),
                        }),
                        (0, f.jsxs)(`div`, {
                          className: `leading-none`,
                          children: [
                            (0, f.jsx)(`span`, {
                              className: `text-white font-bold text-base tracking-tight`,
                              children: `CommerceForce`,
                            }),
                            (0, f.jsx)(`span`, {
                              className: `block text-[10px] text-slate-400 tracking-widest uppercase`,
                              children: `by SSAI Consultency`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-slate-300 text-sm leading-relaxed max-w-xs mb-5`,
                      children: `Your whole business — retail, trade, or service — run from one dashboard. Built and deployed for you. Yours to run.`,
                    }),
                    (0, f.jsxs)(`div`, {
                      className: `space-y-2 text-sm text-slate-300`,
                      children: [
                        (0, f.jsxs)(`p`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, f.jsx)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `currentColor`,
                              className: `text-amber-400 shrink-0`,
                              children: (0, f.jsx)(`path`, {
                                d: `M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z`,
                              }),
                            }),
                            (0, f.jsx)(`a`, {
                              href: `tel:+447484129061`,
                              className: `hover:text-amber-400 transition-colors`,
                              children: `+44 7484 129061`,
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`p`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, f.jsxs)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2`,
                              className: `text-amber-400 shrink-0`,
                              children: [
                                (0, f.jsx)(`rect`, {
                                  width: `20`,
                                  height: `16`,
                                  x: `2`,
                                  y: `4`,
                                  rx: `2`,
                                }),
                                (0, f.jsx)(`path`, {
                                  d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`,
                                }),
                              ],
                            }),
                            (0, f.jsx)(`a`, {
                              href: `mailto:aiasthika@gmail.com`,
                              className: `hover:text-amber-400 transition-colors`,
                              children: `aiasthika@gmail.com`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, f.jsx)(`p`, {
                      className: `text-xs text-slate-500 mt-4`,
                      children: `No long-term contract. Cancel with 30 days' notice.`,
                    }),
                  ],
                }),
                t(`CommerceForce`, [
                  [`features`, `All Features`],
                  [`retail`, `For Retail`],
                  [`trade`, `For Trade & Wholesale`],
                  [`services-page`, `For Service Businesses`],
                  [`pricing`, `Pricing`],
                  [`demo`, `See a Demo`],
                  [`contact`, `Book a Free Demo`],
                ]),
                t(`Studio Services`, [
                  [`services`, `AI Automation`],
                  [`services`, `Non-Commerce Websites`],
                  [`services`, `SEO & Growth`],
                  [`services`, `Social & Content`],
                ]),
                t(`Company`, [
                  [`about`, `About SSAI Consultency`],
                  [`contact`, `Contact Us`],
                  [`features`, `Why Not Shopify?`],
                ]),
              ],
            }),
            (0, f.jsxs)(`div`, {
              className: `pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `text-xs text-slate-500`,
                  children: `© 2026 SSAI Consultency Ltd. CommerceForce is our flagship product.`,
                }),
                (0, f.jsxs)(`div`, {
                  className: `flex items-center gap-5 text-xs text-slate-500`,
                  children: [
                    (0, f.jsx)(`button`, {
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Privacy Policy`,
                    }),
                    (0, f.jsx)(`button`, {
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Terms of Service`,
                    }),
                    (0, f.jsx)(`button`, {
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Cookie Settings`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
