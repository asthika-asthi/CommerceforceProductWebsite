import { React as l, jsx as f } from "../vendor/react.js";

    // --- "Studio Services" page: other services SSAI Consultency offers beyond CommerceForce ---
    export function ie({ onNavigate: e }) {
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
                  children: `Studio Services`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-slate-300 text-lg max-w-xl`,
                  children: `CommerceForce is our flagship — but if you need AI automation, a non-commerce website, or ongoing marketing support, we do that too.`,
                }),
              ],
            }),
          }),
          (0, f.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-10`,
            children: [
              {
                icon: `🤖`,
                title: `AI Automation`,
                colour: `#7C3AED`,
                sub: `Connect your tools. Automate your workflows.`,
                body: `We design and build AI automation systems for small and medium businesses — from simple task automation (auto-reply emails, lead routing, report generation) to custom AI assistants trained on your business knowledge.`,
                bullets: [
                  `Workflow automation (Zapier/Make/n8n + custom)`,
                  `Custom AI chat assistants for your website or internal use`,
                  `Document processing and data extraction`,
                  `CRM and email automation`,
                  `API integrations between your existing tools`,
                ],
              },
              {
                icon: `🌐`,
                title: `Non-Commerce Websites`,
                colour: `#0F1C2E`,
                sub: `Professional websites built fast with AI tooling.`,
                body: `Need a website that isn't a shop? We build brochure sites, landing pages, portfolio sites, and service pages using modern AI-assisted development — faster turnaround, lower cost, same quality.`,
                bullets: [
                  `Service business websites (not needing a booking system)`,
                  `Professional / corporate brochure sites`,
                  `Landing pages for campaigns`,
                  `Portfolio and showcase sites`,
                  `Migration from dated sites to modern, fast builds`,
                ],
              },
              {
                icon: `📊`,
                title: `SEO & Growth`,
                colour: `#059669`,
                sub: `Get found. Then get more.`,
                body: `Whether you're launching a new CommerceForce store or growing an existing site, we offer SEO, PPC, and analytics services as monthly retainers or one-off projects.`,
                bullets: [
                  `Technical SEO audit and on-page optimisation`,
                  `Keyword research and content planning`,
                  `Google Ads (PPC) campaign management`,
                  `GA4 setup and monthly performance reports`,
                  `Local SEO for bricks-and-mortar businesses`,
                ],
              },
              {
                icon: `✍️`,
                title: `Content & Social`,
                colour: `#B45309`,
                sub: `Words and posts that work for you.`,
                body: `From product descriptions to blog posts to social media, we provide content creation services for businesses that want quality written content without hiring in-house.`,
                bullets: [
                  `Product description copywriting`,
                  `Blog posts and articles (SEO-focused)`,
                  `Social media content and scheduling`,
                  `Email newsletter campaigns`,
                  `Brand voice guides`,
                ],
              },
            ].map((e) =>
              (0, f.jsxs)(
                `div`,
                {
                  className: `bg-white rounded-2xl border border-slate-200 overflow-hidden`,
                  children: [
                    (0, f.jsx)(`div`, {
                      className: `p-2`,
                      style: { backgroundColor: e.colour },
                      children: (0, f.jsxs)(`div`, {
                        className: `px-5 py-4 flex items-center gap-3`,
                        children: [
                          (0, f.jsx)(`span`, {
                            className: `text-2xl`,
                            children: e.icon,
                          }),
                          (0, f.jsxs)(`div`, {
                            children: [
                              (0, f.jsx)(`h2`, {
                                className: `text-white text-xl font-bold`,
                                style: { fontFamily: `Inter, sans-serif` },
                                children: e.title,
                              }),
                              (0, f.jsx)(`p`, {
                                className: `text-white/70 text-sm`,
                                children: e.sub,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, f.jsxs)(`div`, {
                      className: `p-7 grid grid-cols-1 md:grid-cols-2 gap-8`,
                      children: [
                        (0, f.jsx)(`p`, {
                          className: `text-slate-600 leading-relaxed`,
                          children: e.body,
                        }),
                        (0, f.jsx)(`ul`, {
                          className: `space-y-2`,
                          children: e.bullets.map((t) =>
                            (0, f.jsxs)(
                              `li`,
                              {
                                className: `flex items-start gap-2 text-slate-600 text-sm`,
                                children: [
                                  (0, f.jsx)(`span`, {
                                    className: `mt-0.5 font-bold shrink-0`,
                                    style: { color: e.colour },
                                    children: `→`,
                                  }),
                                  t,
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
          (0, f.jsx)(`div`, {
            className: `bg-amber-400 py-12 px-4`,
            children: (0, f.jsxs)(`div`, {
              className: `max-w-2xl mx-auto text-center`,
              children: [
                (0, f.jsx)(`h2`, {
                  className: `text-3xl text-[#0F1C2E] mb-4`,
                  style: { fontFamily: `DM Serif Display, serif` },
                  children: `Not sure which service you need?`,
                }),
                (0, f.jsx)(`p`, {
                  className: `text-[#0F1C2E]/70 mb-6`,
                  children: `Book a free consultation. We'll listen, ask the right questions, and tell you honestly what we'd recommend.`,
                }),
                (0, f.jsx)(`button`, {
                  onClick: () => e(`contact`),
                  className: `bg-[#0F1C2E] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#1A2E47] transition-colors`,
                  children: `Book a free consult`,
                }),
              ],
            }),
          }),
        ],
      });
    }
