import { React as l, jsx as f } from "../vendor/react.js";
import { C } from "./industry-page-template.js";

    // --- "For Trade & Wholesale" industry page (content only — uses the template above) ---
    export function ne({ onNavigate: e }) {
      return (0, f.jsx)(C, {
        accent: `#059669`,
        icon: `🏭`,
        title: `For Trade & Wholesale`,
        sub: `B2B and dual-channel selling`,
        onNavigate: e,
        hero: `Credit accounts, trade approval, wholesale pricing, and RFQ — natively. Not bolted on.`,
        pain: `Serving trade customers on a standard retail platform is painful. Shopify's cheap plans cap at 3 price catalogues with no per-customer approval flow, no credit accounts, and no request-for-quote. Getting those features on Shopify Plus costs £2,300+/mo. Building them on WooCommerce takes a developer and months. CommerceForce has them built in from day one.`,
        bullets: [
          `Trade account application form on your public storefront`,
          `You review and approve each trade application`,
          `Approved customers unlock wholesale pricing at checkout`,
          `Credit accounts with spending limits — they buy "on account"`,
          `Balances restore automatically if an order is cancelled`,
          `Request for Quote (RFQ) for bulk or custom orders`,
          `RFQ workflow: draft → submitted → under review`,
          `Bank transfer and PayPal with manual Mark as Paid`,
          `Bulk CSV catalogue import and order export for accounting`,
          `Full retail checkout still works for public customers in parallel`,
        ],
        story: `What you get that Shopify's cheap tier can't match`,
        why: [
          `**Per-customer credit accounts.** Shopify caps at 3 market-level catalogues. CommerceForce gives each approved trade customer their own credit limit and account.`,
          `**Trade application & approval.** Shopify has no built-in registration/approval form for B2B customers. We do — it's part of your public storefront.`,
          `**RFQ workflow.** No equivalent on standard Shopify. Trade customers submit a quote request; you work through it in a structured workflow.`,
          `**One checkout for retail + trade.** Retail customers pay by card or PayPal. Trade customers see their account, credit balance, and buy on account — all in the same storefront.`,
        ],
        cta: `Book a free demo for trade & wholesale`,
      });
    }
