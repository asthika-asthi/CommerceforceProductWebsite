// ============================================================
// MAIN APP: the entry point that starts the whole site
// ============================================================
// This is the file index.html loads first. It:
//   1. Pulls in React itself, and every page of the site
//   2. Keeps track of which page the visitor is currently on
//   3. Shows the navigation bar + the current page + the footer
//   4. Places the finished result onto the actual web page
//
// The menu items map to pages like this:
//   "home"          -> Home page            (home.js)
//   "features"      -> Features page        (features.js)
//   "pricing"       -> Pricing page         (pricing.js)
//   "retail"        -> For Retail page      (retail.js)
//   "trade"         -> For Trade page       (trade.js)
//   "services-page" -> For Service Business (service.js)
//   "about"         -> About Us page        (about.js)
//   "services"      -> Studio Services page (studio-services.js)
//   "demo"          -> See It In Action     (demo.js)
//   "contact"       -> Contact / book demo  (contact.js)

import { React as l, ReactDOM as u, jsx as f } from "../vendor/react.js";
import { p } from "./nav.js";
import { m } from "./footer.js";
import { v } from "./home.js";
import { b } from "./features.js";
import { S } from "./pricing.js";
import { te } from "./retail.js";
import { ne } from "./trade.js";
import { re } from "./service.js";
import { w } from "./about.js";
import { ie } from "./studio-services.js";
import { ae } from "./demo.js";
import { oe } from "./contact.js";

// --- Main App: decides which page above to show based on what the visitor clicked, and places the finished website into the page ---
function se() {
  let [e, t] = (0, l.useState)(`home`),
    n = (e) => {
      (t(e), window.scrollTo({ top: 0, behavior: `smooth` }));
    };
  return (0, f.jsxs)(`div`, {
    className: `min-h-screen flex flex-col`,
    children: [
      (0, f.jsx)(p, { currentPage: e, onNavigate: n }),
      (0, f.jsx)(`main`, {
        className: `flex-1`,
        children: (() => {
          switch (e) {
            case `home`:
              return (0, f.jsx)(v, { onNavigate: n });
            case `features`:
              return (0, f.jsx)(b, { onNavigate: n });
            case `pricing`:
              return (0, f.jsx)(S, { onNavigate: n });
            case `retail`:
              return (0, f.jsx)(te, { onNavigate: n });
            case `trade`:
              return (0, f.jsx)(ne, { onNavigate: n });
            case `services-page`:
              return (0, f.jsx)(re, { onNavigate: n });
            case `about`:
              return (0, f.jsx)(w, { onNavigate: n });
            case `services`:
              return (0, f.jsx)(ie, { onNavigate: n });
            case `demo`:
              return (0, f.jsx)(ae, { onNavigate: n });
            case `contact`:
              return (0, f.jsx)(oe, {});
            default:
              return (0, f.jsx)(v, { onNavigate: n });
          }
        })(),
      }),
      (0, f.jsx)(m, { onNavigate: n }),
    ],
  });
}
(0, u.createRoot)(document.getElementById(`root`)).render(
  (0, f.jsx)(l.StrictMode, { children: (0, f.jsx)(se, {}) }),
);
