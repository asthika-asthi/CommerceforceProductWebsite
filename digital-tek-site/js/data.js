/*
 * DIGITAL-TEK SITE CONTENT
 * ------------------------
 * Plain lists of the things that change over time. Edit the text between the
 * quote marks; leave the quote marks, commas and brackets alone.
 *
 * To add a product: copy one block inside PRODUCTS, paste it after the last
 * one, and change the words. status must be "live", "beta" or "soon".
 */
window.DT = {
  company: {
    name: "Digital-tek",
    domain: "digital-tek.co.uk",
    email: "aiasthika@gmail.com",
    phone: "+44 7484129061",
    phoneLink: "+447484129061",
  },

  SERVICES: [
    {
      id: "ai-automation",
      icon: "◐",
      tint: "peach",
      title: "AI Automation",
      promise: "Connect your tools. Automate your workflows.",
      summary:
        "We design and build AI automation for small and medium businesses, from simple task automation (auto-reply emails, lead routing, report generation) to custom AI assistants trained on your business knowledge.",
      offerings: [
        "Workflow automation (Zapier, Make, n8n plus custom)",
        "Custom AI chat assistants for your website or internal use",
        "Document processing and data extraction",
        "CRM and email automation",
        "API integrations between your existing tools",
      ],
    },
    {
      id: "websites",
      icon: "◧",
      tint: "sky",
      title: "Websites",
      promise: "Professional websites built fast with AI tooling.",
      summary:
        "Need a website that isn't a shop? We build brochure sites, landing pages, portfolio sites and service pages using modern AI-assisted development: faster turnaround, lower cost, same quality.",
      offerings: [
        "Service business websites",
        "Professional and corporate brochure sites",
        "Landing pages for campaigns",
        "Portfolio and showcase sites",
        "Migration from dated sites to modern, fast builds",
      ],
    },
    {
      id: "seo-growth",
      icon: "◔",
      tint: "mint",
      title: "SEO & Growth",
      promise: "Get found. Then get more.",
      summary:
        "Whether you're launching a new store or growing an existing site, we offer SEO, PPC and analytics as monthly retainers or one-off projects.",
      offerings: [
        "Technical SEO audit and on-page optimisation",
        "Keyword research and content planning",
        "Google Ads (PPC) campaign management",
        "GA4 setup and monthly performance reports",
        "Local SEO for bricks-and-mortar businesses",
      ],
    },
    {
      id: "content-social",
      icon: "◑",
      tint: "sand",
      title: "Content & Social",
      promise: "Words and posts that work for you.",
      summary:
        "From product descriptions to blog posts to social media, we provide content for businesses that want quality written content without hiring in-house.",
      offerings: [
        "Product description copywriting",
        "Blog posts and articles (SEO-focused)",
        "Social media content and scheduling",
        "Email newsletter campaigns",
        "Brand voice guides",
      ],
    },
    {
      id: "design-creative",
      icon: "◈",
      tint: "lilac",
      title: "Design & Creative",
      promise: "Look as good as you work.",
      summary:
        "Supporting design for your website and campaigns: logos and branding, refreshed graphics, leaflets, animation and short product videos. Our product videos are AI-generated, and we say so up front.",
      offerings: [
        "Logo design and branding (colours, fonts, simple brand guide)",
        "Graphics updates and refreshes for your website and social media",
        "Promotional leaflets and flyers, supplied as print-ready PDFs",
        "Animation, such as animated logos and graphics",
        "AI-generated product videos to make your website better (we edit your own footage only when really needed)",
      ],
      note: "No photography, printing or filming. Every project is quoted in writing, with the number of changes included.",
      more: { label: "How it works and pricing", url: "/services/design-creative/how-it-works/" },
    },
  ],

  PRODUCTS: [
    {
      name: "CommerceForce",
      tagline:
        "A complete online store for retail, trade and service businesses. Owned outright, no transaction fees.",
      status: "live",
      url: "https://www.commerceforce.uk",
      tint: "peach",
    },
    {
      name: "More on the way",
      tagline:
        "We build tools for the problems we keep seeing in client work. New products will appear here as they launch.",
      status: "soon",
      url: "",
      tint: "sky",
    },
  ],

  STEPS: [
    ["Listen", "A free chat about your business, your tools and what's slowing you down."],
    ["Build", "We design and build it in-house. We don't subcontract."],
    ["Hand over", "You own what we build, and we teach you to run it."],
    ["Support", "Help, growth and new features when you need them. No long-term tie-in."],
  ],
};
