import { React as l, jsx as f } from "../vendor/react.js";

    // --- Top navigation bar: logo, menu links, phone number banner ---
    export function p({ currentPage: e, onNavigate: t }) {
      let [n, r] = (0, l.useState)(!1),
        i = (n, i) =>
          (0, f.jsx)(`button`, {
            onClick: () => {
              (t(n), r(!1));
            },
            className: `text-sm font-medium transition-colors hover:text-amber-500 ${e === n ? `text-amber-500` : `text-slate-600`}`,
            children: i,
          });
      return (0, f.jsxs)(`nav`, {
        className: `sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm`,
        children: [
          (0, f.jsxs)(`div`, {
            className: `bg-[#0F1C2E] text-white text-xs py-1.5 px-4 flex items-center justify-between`,
            children: [
              (0, f.jsxs)(`span`, {
                className: `opacity-70`,
                children: [
                  `CommerceForce by `,
                  (0, f.jsx)(`strong`, { children: `SSAI Consultency` }),
                  ` — built for trade, retail & service businesses`,
                ],
              }),
              (0, f.jsxs)(`a`, {
                href: `tel:+447484129061`,
                className: `flex items-center gap-1.5 font-semibold hover:text-amber-400 transition-colors`,
                children: [
                  (0, f.jsx)(`svg`, {
                    width: `12`,
                    height: `12`,
                    viewBox: `0 0 24 24`,
                    fill: `currentColor`,
                    children: (0, f.jsx)(`path`, {
                      d: `M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z`,
                    }),
                  }),
                  `+44 7484 129061`,
                ],
              }),
            ],
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between`,
            children: [
              (0, f.jsxs)(`button`, {
                onClick: () => t(`home`),
                className: `flex items-center gap-2.5 group`,
                children: [
                  (0, f.jsx)(`div`, {
                    className: `w-8 h-8 bg-[#0F1C2E] rounded flex items-center justify-center`,
                    children: (0, f.jsx)(`span`, {
                      className: `text-amber-400 font-bold text-sm font-mono`,
                      children: `CF`,
                    }),
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `leading-none`,
                    children: [
                      (0, f.jsx)(`span`, {
                        className: `text-[#0F1C2E] font-bold text-base tracking-tight`,
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
              (0, f.jsxs)(`div`, {
                className: `hidden md:flex items-center gap-7`,
                children: [
                  i(`features`, `Features`),
                  (0, f.jsxs)(`div`, {
                    className: `relative group`,
                    children: [
                      (0, f.jsxs)(`button`, {
                        className: `text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors flex items-center gap-1`,
                        children: [
                          `Who it's for`,
                          (0, f.jsx)(`svg`, {
                            width: `12`,
                            height: `12`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            children: (0, f.jsx)(`path`, { d: `m6 9 6 6 6-6` }),
                          }),
                        ],
                      }),
                      (0, f.jsx)(`div`, {
                        className: `absolute top-full left-0 mt-2 w-52 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-1`,
                        children: [
                          [`retail`, `For Retail`],
                          [`trade`, `For Trade / Wholesale`],
                          [`services`, `For Service Businesses`],
                        ].map(([e, n]) =>
                          (0, f.jsx)(
                            `button`,
                            {
                              onClick: () => {
                                (t(e), r(!1));
                              },
                              className: `w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors`,
                              children: n,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  i(`pricing`, `Pricing`),
                  i(`about`, `About`),
                  i(`services`, `Services`),
                ],
              }),
              (0, f.jsxs)(`div`, {
                className: `hidden md:flex items-center gap-3`,
                children: [
                  (0, f.jsx)(`button`, {
                    onClick: () => t(`demo`),
                    className: `text-sm font-medium text-slate-600 hover:text-[#0F1C2E] transition-colors`,
                    children: `See demo`,
                  }),
                  (0, f.jsx)(`button`, {
                    onClick: () => t(`contact`),
                    className: `bg-amber-400 hover:bg-amber-500 text-[#0F1C2E] text-sm font-semibold px-4 py-2 rounded transition-colors`,
                    children: `Book a free demo`,
                  }),
                ],
              }),
              (0, f.jsx)(`button`, {
                onClick: () => r(!n),
                className: `md:hidden p-2 text-slate-600`,
                children: (0, f.jsx)(`svg`, {
                  width: `22`,
                  height: `22`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `2`,
                  children: n
                    ? (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsx)(`path`, { d: `M18 6 6 18` }),
                          (0, f.jsx)(`path`, { d: `m6 6 12 12` }),
                        ],
                      })
                    : (0, f.jsx)(f.Fragment, {
                        children: (0, f.jsx)(`path`, {
                          d: `M4 6h16M4 12h16M4 18h16`,
                        }),
                      }),
                }),
              }),
            ],
          }),
          n &&
            (0, f.jsx)(`div`, {
              className: `md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-3`,
              children: [
                [`home`, `Home`],
                [`features`, `Features`],
                [`retail`, `For Retail`],
                [`trade`, `For Trade`],
                [`services-page`, `For Service Businesses`],
                [`pricing`, `Pricing`],
                [`about`, `About`],
                [`services`, `Studio Services`],
                [`demo`, `See Demo`],
                [`contact`, `Book Free Demo`],
              ].map(([e, n]) =>
                (0, f.jsx)(
                  `button`,
                  {
                    onClick: () => {
                      (t(e), r(!1));
                    },
                    className: `text-left text-sm font-medium text-slate-700 py-1 hover:text-amber-500 transition-colors`,
                    children: n,
                  },
                  e,
                ),
              ),
            }),
        ],
      });
    }
