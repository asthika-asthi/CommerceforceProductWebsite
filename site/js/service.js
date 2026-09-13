import { React as l, jsx as f } from "../vendor/react.js";
import { C } from "./industry-page-template.js";

    // --- "For Service Business" industry page (content only — uses the template above) ---
    export function re({ onNavigate: e }) {
      return (0, f.jsx)(C, {
        accent: `#E85D4A`,
        icon: `📅`,
        title: `For Service Businesses`,
        sub: `Salons · Clinics · Consultants · Repair shops`,
        onNavigate: e,
        hero: `Your website and booking system in one dashboard. Stop paying for both separately.`,
        pain: `Most service businesses pay for a basic website somewhere and a booking tool (Booksy, Acuity, Calendly) somewhere else. Two logins, two monthly bills, two sets of customer data, double-entry for every appointment. If you also sell retail products alongside your services — hair care, supplements, parts — you're adding a third platform.`,
        bullets: [
          `Provider and staff setup — name, photo, appointment types`,
          `Availability windows and holiday exceptions per provider`,
          `Customer-facing booking page — pick a provider, type, and time`,
          `Calendar view in your admin with all bookings`,
          `Double-booking prevention — automatic`,
          `Confirmation emails to customers on booking`,
          `Client records with private visit journal entries`,
          `Optional retail product catalogue alongside bookings`,
          `Same payment methods — card, bank transfer, PayPal`,
          `Your branded website, not a Booksy or Calendly subdomain`,
        ],
        story: `Why this beats separate tools`,
        why: [
          `**One dashboard.** Appointments, client records, products, orders, and your website's look — all in one place. No context-switching.`,
          `**No booking-tool branding.** Your customers see your domain and your brand — not "book via Calendly" or a Booksy widget.`,
          `**Client notes that stay private.** Keep visit journal entries per customer — useful for clinics, therapists, hair colourists. Stored with the client record, not in a public review.`,
          `**Shopify has no equivalent.** Appointment scheduling isn't available on Shopify at any price tier. This is a feature built for businesses that sell time, not just products.`,
        ],
        cta: `Book a free demo for service businesses`,
      });
    }
