import { React as l, jsx as f } from "../vendor/react.js";
import { C } from "./industry-page-template.js";

    // --- "For Retail" industry page (content only — uses the template above) ---
    export function te({ onNavigate: e }) {
      return (0, f.jsx)(C, {
        accent: `#0F1C2E`,
        icon: `🛍`,
        title: `For Retail`,
        sub: `Sell to the public`,
        onNavigate: e,
        hero: `A fast, premium shop that looks great, converts visitors, and is yours to run — no developer, no platform fees.`,
        pain: `Most retail businesses have a website that's either dated, slow, or built on a rented platform that takes a cut of every sale and bills you extra for loyalty, abandoned-cart, and reviews. You're paying for the platform, the apps, and the agency — every month, forever.`,
        bullets: [
          `Polished, mobile-first storefront in your brand's colours`,
          `Card payments (Stripe), bank transfer, PayPal, cash on delivery`,
          `Abandoned-cart recovery emails — automatically bring shoppers back`,
          `Loyalty points scheme — earn on every order, redeem at checkout`,
          `Coupons and automatic "spend over £X, save Y%" discounts`,
          `Product variants — sizes, colours, pack sizes, each with own price and stock`,
          `Product reviews (moderated by you before they go live)`,
          `Newsletter subscriber capture + AI chat assistant`,
          `~50 homepage sections — drag and drop to update your own layout`,
          `GDPR, 2FA, GA4 + Meta Pixel with cookie consent — all included`,
        ],
        story: `Why retail businesses choose us over Shopify`,
        why: [
          `**No transaction fees.** Shopify charges 0.5–2% on every sale. On £200,000/year revenue that's up to £4,000 gone. CommerceForce charges zero — ever.`,
          `**Everything bundled.** Loyalty, abandoned-cart recovery, reviews, AI chat, analytics integration — all included. On Shopify these are separate apps, often £15–50/mo each.`,
          `**You own your store outright.** It runs on your own server. No platform can change the rules, raise prices, or shut you down.`,
          `**Update your homepage yourself.** Drag-and-drop sections mean you don't need to call us every time you want to change a banner or add a featured product.`,
        ],
        cta: `Book a free demo for your retail shop`,
      });
    }
