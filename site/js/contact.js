import { React as l, jsx as f } from "../vendor/react.js";

    // --- Contact / "Book a free demo" page: the lead-capture form visitors fill in ---
    export function oe() {
      let [e, t] = (0, l.useState)({
          name: ``,
          company: ``,
          email: ``,
          phone: ``,
          type: ``,
          situation: ``,
          message: ``,
        }),
        [n, r] = (0, l.useState)(!1),
        i = (e, n) => t((t) => ({ ...t, [e]: n }));
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
                  children: `Get in touch`,
                }),
                (0, f.jsx)(`h1`, {
                  className: `text-5xl text-white mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Book a free demo`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `No obligation, no hard sell. We'll show you exactly how CommerceForce works for your type of business and send a clear proposal.`,
                }),
              ],
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-14`,
            children: [
              (0, f.jsx)(`div`, {
                className: `lg:col-span-3`,
                children: n
                  ? (0, f.jsxs)(`div`, {
                      className: `bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center`,
                      children: [
                        (0, f.jsx)(`div`, {
                          className: `w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4`,
                          children: (0, f.jsx)(`svg`, {
                            width: `24`,
                            height: `24`,
                            viewBox: `0 0 24 24`,
                            fill: `white`,
                            children: (0, f.jsx)(`path`, { d: `M20 6 9 17l-5-5` }),
                          }),
                        }),
                        (0, f.jsx)(`h2`, {
                          className: `text-2xl text-[#0F1C2E] mb-2`,
                          style: { fontFamily: `DM Serif Display, serif` },
                          children: `We've got your request`,
                        }),
                        (0, f.jsxs)(`p`, {
                          className: `text-slate-600`,
                          children: [
                            `Thanks, `,
                            e.name,
                            `! We'll be in touch within one business day to arrange your demo.`,
                          ],
                        }),
                      ],
                    })
                  : (0, f.jsxs)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(), r(!0));
                      },
                      className: `space-y-5`,
                      children: [
                        (0, f.jsx)(`p`, {
                          className: `text-[#0F1C2E] font-semibold text-lg mb-1`,
                          children: `Tell us about your business`,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-500 text-sm mb-6`,
                          children: `We'll get back to you within one business day. No long-term contract required to get started.`,
                        }),
                        (0, f.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                          children: [
                            (0, f.jsxs)(`div`, {
                              children: [
                                (0, f.jsx)(`label`, {
                                  className: `block text-sm font-medium text-slate-700 mb-1.5`,
                                  children: `Your name *`,
                                }),
                                (0, f.jsx)(`input`, {
                                  required: !0,
                                  value: e.name,
                                  onChange: (e) => i(`name`, e.target.value),
                                  className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white`,
                                  placeholder: `Jane Smith`,
                                }),
                              ],
                            }),
                            (0, f.jsxs)(`div`, {
                              children: [
                                (0, f.jsx)(`label`, {
                                  className: `block text-sm font-medium text-slate-700 mb-1.5`,
                                  children: `Business name *`,
                                }),
                                (0, f.jsx)(`input`, {
                                  required: !0,
                                  value: e.company,
                                  onChange: (e) => i(`company`, e.target.value),
                                  className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white`,
                                  placeholder: `Smith & Sons Ltd`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                          children: [
                            (0, f.jsxs)(`div`, {
                              children: [
                                (0, f.jsx)(`label`, {
                                  className: `block text-sm font-medium text-slate-700 mb-1.5`,
                                  children: `Email address *`,
                                }),
                                (0, f.jsx)(`input`, {
                                  required: !0,
                                  type: `email`,
                                  value: e.email,
                                  onChange: (e) => i(`email`, e.target.value),
                                  className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white`,
                                  placeholder: `jane@smithandsons.co.uk`,
                                }),
                              ],
                            }),
                            (0, f.jsxs)(`div`, {
                              children: [
                                (0, f.jsxs)(`label`, {
                                  className: `block text-sm font-medium text-slate-700 mb-1.5`,
                                  children: [
                                    `Phone `,
                                    (0, f.jsx)(`span`, {
                                      className: `text-slate-400 font-normal`,
                                      children: `(we'll call if you prefer)`,
                                    }),
                                  ],
                                }),
                                (0, f.jsx)(`input`, {
                                  type: `tel`,
                                  value: e.phone,
                                  onChange: (e) => i(`phone`, e.target.value),
                                  className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white`,
                                  placeholder: `+44 7700 000000`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`div`, {
                          children: [
                            (0, f.jsx)(`label`, {
                              className: `block text-sm font-medium text-slate-700 mb-1.5`,
                              children: `Type of business *`,
                            }),
                            (0, f.jsxs)(`select`, {
                              required: !0,
                              value: e.type,
                              onChange: (e) => i(`type`, e.target.value),
                              className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white text-slate-700`,
                              children: [
                                (0, f.jsx)(`option`, {
                                  value: ``,
                                  children: `Select your business type`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `retail`,
                                  children: `Retail — selling products to the public`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `trade`,
                                  children: `Trade / wholesale — selling to businesses`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `both`,
                                  children: `Both retail and trade`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `service`,
                                  children: `Service business (salon, clinic, consultant, repair shop)`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `service-retail`,
                                  children: `Service business with a retail catalogue`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `unsure`,
                                  children: `Not sure yet — want to explore options`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`div`, {
                          children: [
                            (0, f.jsx)(`label`, {
                              className: `block text-sm font-medium text-slate-700 mb-1.5`,
                              children: `Current situation`,
                            }),
                            (0, f.jsxs)(`select`, {
                              value: e.situation,
                              onChange: (e) => i(`situation`, e.target.value),
                              className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white text-slate-700`,
                              children: [
                                (0, f.jsx)(`option`, {
                                  value: ``,
                                  children: `Select your situation`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `none`,
                                  children: `No website yet`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `basic`,
                                  children: `Have a basic or dated site`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `shopify`,
                                  children: `Moving from Shopify / WooCommerce`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `other`,
                                  children: `Moving from another platform`,
                                }),
                                (0, f.jsx)(`option`, {
                                  value: `explore`,
                                  children: `Just exploring options`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, f.jsxs)(`div`, {
                          children: [
                            (0, f.jsx)(`label`, {
                              className: `block text-sm font-medium text-slate-700 mb-1.5`,
                              children: `Anything else we should know?`,
                            }),
                            (0, f.jsx)(`textarea`, {
                              value: e.message,
                              onChange: (e) => i(`message`, e.target.value),
                              rows: 3,
                              className: `w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white resize-none`,
                              placeholder: `Size of catalogue, current platform, specific features you need...`,
                            }),
                          ],
                        }),
                        (0, f.jsx)(`button`, {
                          type: `submit`,
                          className: `w-full bg-amber-400 hover:bg-amber-500 text-[#0F1C2E] font-semibold py-3 rounded-lg transition-colors`,
                          children: `Send my request — we'll be in touch within one business day`,
                        }),
                        (0, f.jsx)(`p`, {
                          className: `text-slate-400 text-xs text-center`,
                          children: `No spam. No obligation. We'll never pass your details to third parties.`,
                        }),
                      ],
                    }),
              }),
              (0, f.jsxs)(`div`, {
                className: `lg:col-span-2 space-y-6`,
                children: [
                  (0, f.jsxs)(`div`, {
                    className: `bg-white border border-slate-200 rounded-xl p-6`,
                    children: [
                      (0, f.jsx)(`h3`, {
                        className: `font-semibold text-[#0F1C2E] mb-4`,
                        style: { fontFamily: `Inter, sans-serif` },
                        children: `Prefer to call?`,
                      }),
                      (0, f.jsxs)(`a`, {
                        href: `tel:+447484129061`,
                        className: `flex items-center gap-3 text-[#0F1C2E] hover:text-amber-600 transition-colors mb-3`,
                        children: [
                          (0, f.jsx)(`div`, {
                            className: `w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center shrink-0`,
                            children: (0, f.jsx)(`svg`, {
                              width: `16`,
                              height: `16`,
                              viewBox: `0 0 24 24`,
                              fill: `#B45309`,
                              children: (0, f.jsx)(`path`, {
                                d: `M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z`,
                              }),
                            }),
                          }),
                          (0, f.jsx)(`span`, {
                            className: `font-semibold`,
                            children: `+44 7484 129061`,
                          }),
                        ],
                      }),
                      (0, f.jsxs)(`a`, {
                        href: `mailto:aiasthika@gmail.com`,
                        className: `flex items-center gap-3 text-slate-600 hover:text-amber-600 transition-colors`,
                        children: [
                          (0, f.jsx)(`div`, {
                            className: `w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center shrink-0`,
                            children: (0, f.jsxs)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `#64748B`,
                              strokeWidth: `2`,
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
                          }),
                          (0, f.jsx)(`span`, {
                            className: `text-sm`,
                            children: `aiasthika@gmail.com`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `bg-[#0F1C2E] rounded-xl p-6 text-white`,
                    children: [
                      (0, f.jsx)(`h3`, {
                        className: `font-semibold mb-4`,
                        style: {
                          fontFamily: `DM Serif Display, serif`,
                          fontSize: `1.2rem`,
                        },
                        children: `What happens next`,
                      }),
                      (0, f.jsx)(`ol`, {
                        className: `space-y-3`,
                        children: [
                          `We read your request and reply within one business day`,
                          `We schedule a 30-minute video call at a time that suits you`,
                          `We demo CommerceForce for your business type and answer your questions`,
                          `We send a clear proposal — scope, setup, and monthly cost`,
                          `You decide. No pressure, no lock-in.`,
                        ].map((e, t) =>
                          (0, f.jsxs)(
                            `li`,
                            {
                              className: `flex items-start gap-3 text-slate-300 text-sm`,
                              children: [
                                (0, f.jsx)(`span`, {
                                  className: `w-5 h-5 bg-amber-400 text-[#0F1C2E] rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5`,
                                  children: t + 1,
                                }),
                                e,
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `bg-emerald-50 border border-emerald-200 rounded-xl p-5`,
                    children: [
                      (0, f.jsx)(`p`, {
                        className: `text-emerald-800 text-sm font-semibold mb-1`,
                        children: `No long-term contract`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-emerald-700 text-sm`,
                        children: `Cancel with 30 days' notice at any time. No penalties, no lock-in.`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
