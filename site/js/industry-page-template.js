import { React as l, jsx as f } from "../vendor/react.js";

    // --- Reusable "industry page" template: one shared layout used by the Retail, Trade, and Service pages below (each just passes in its own text/colours) ---
    export function C({
      accent: e,
      icon: t,
      title: n,
      sub: r,
      hero: i,
      story: a,
      bullets: o,
      pain: s,
      why: c,
      cta: l,
      onNavigate: u,
    }) {
      return (0, f.jsxs)(`div`, {
        className: `bg-[#F8F7F4] min-h-screen`,
        children: [
          (0, f.jsx)(`div`, {
            className: `py-16 px-4`,
            style: { backgroundColor: e },
            children: (0, f.jsxs)(`div`, {
              className: `max-w-7xl mx-auto`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `text-white/60 text-sm font-medium mb-3 uppercase tracking-widest`,
                  children: r,
                }),
                (0, f.jsxs)(`h1`, {
                  className: `text-5xl text-white mb-4 flex items-center gap-3`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: [(0, f.jsx)(`span`, { children: t }), ` `, n],
                }),
                (0, f.jsx)(`p`, {
                  className: `text-white/80 text-lg max-w-xl`,
                  children: i,
                }),
              ],
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`,
            children: [
              (0, f.jsxs)(`div`, {
                children: [
                  (0, f.jsx)(`h2`, {
                    className: `text-3xl text-[#0F1C2E] mb-5`,
                    style: { fontFamily: `DM Serif Display, serif` },
                    children: `The problem`,
                  }),
                  (0, f.jsx)(`p`, {
                    className: `text-slate-600 leading-relaxed mb-8 text-base`,
                    children: s,
                  }),
                  (0, f.jsx)(`h2`, {
                    className: `text-3xl text-[#0F1C2E] mb-5`,
                    style: { fontFamily: `DM Serif Display, serif` },
                    children: `What CommerceForce gives you`,
                  }),
                  (0, f.jsx)(`ul`, {
                    className: `space-y-3 mb-8`,
                    children: o.map((t) =>
                      (0, f.jsxs)(
                        `li`,
                        {
                          className: `flex items-start gap-3 text-slate-700`,
                          children: [
                            (0, f.jsx)(`span`, {
                              className: `mt-0.5 shrink-0 font-bold`,
                              style: { color: e },
                              children: `✓`,
                            }),
                            (0, f.jsx)(`span`, { children: t }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, f.jsx)(`button`, {
                    onClick: () => u(`contact`),
                    className: `text-white font-semibold px-7 py-3 rounded-lg transition-colors hover:opacity-90`,
                    style: { backgroundColor: e },
                    children: l,
                  }),
                ],
              }),
              (0, f.jsxs)(`div`, {
                children: [
                  (0, f.jsx)(`h2`, {
                    className: `text-2xl text-[#0F1C2E] mb-6`,
                    style: { fontFamily: `DM Serif Display, serif` },
                    children: a,
                  }),
                  (0, f.jsx)(`div`, {
                    className: `space-y-4`,
                    children: c.map((e) =>
                      (0, f.jsx)(
                        `div`,
                        {
                          className: `bg-white border border-slate-200 rounded-xl p-5 text-slate-600 text-sm leading-relaxed`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5`,
                    children: [
                      (0, f.jsx)(`p`, {
                        className: `text-amber-800 text-sm font-semibold mb-1`,
                        children: `No long-term contract`,
                      }),
                      (0, f.jsx)(`p`, {
                        className: `text-amber-700 text-sm`,
                        children: `Start with a free demo. We scope your requirements, send a clear proposal, and you only commit when you're ready.`,
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
