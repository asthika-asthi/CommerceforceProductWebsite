/*
 * Shared behaviour for every page: header, footer, theme toggle, and the
 * pieces built from the lists in data.js (services, products, steps, form).
 * Pages mark where things go with data-render="..." attributes.
 */
(function () {
  var D = window.DT;
  var NAV = [
    ["/services/", "Services"],
    ["/products/", "Products"],
    ["/about/", "About"],
    ["/contact/", "Contact"],
  ];

  // Placeholder: set this to a form service URL (e.g. Formspree) to send
  // enquiries directly. While empty, the form opens the visitor's email app.
  var FORM_ENDPOINT = "";

  // Placeholder: paste the Google Analytics 4 measurement ID (looks like G-XXXXXXXXXX).
  // While empty, no analytics is loaded and no cookie banner is shown.
  var GA_ID = "";

  var LOGO = '<svg class="logo-mark" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"><circle cx="32" cy="38" r="14"/><path d="M46 12V52"/></g><g stroke="var(--ink)" stroke-width="3"><circle cx="18" cy="38" r="7" fill="var(--peach-deep)"/><circle cx="46" cy="12" r="7" fill="var(--sky)"/><circle cx="46" cy="52" r="7" fill="var(--mint)"/></g></svg>';

  function h(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function path() {
    var p = location.pathname.replace(/index\.html$/, "");
    return p.endsWith("/") ? p : p + "/";
  }

  /* ---- Theme ---- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("dt-theme", t); } catch (e) {}
  }

  /* ---- Offer (banner and button; see "offer" in data.js) ---- */
  function offerState() {
    var o = D.offer;
    if (!o || !o.active) return null;
    var today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/London" });
    var days = Math.round((Date.parse(o.endsOn) - Date.parse(today)) / 864e5);
    if (isNaN(days) || days < 0) return null;
    var date = new Date(o.endsOn).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });
    var left = days === 0 ? "ends today" : days === 1 ? "1 day left" : days + " days left";
    return { o: o, text: h(o.label) + ": ends " + date + " (" + left + ")" };
  }
  function offerBar() {
    var s = offerState();
    try { if (!s || sessionStorage.getItem("dt-offer-closed")) return ""; } catch (e) { if (!s) return ""; }
    return (
      '<div class="offer-bar" role="region" aria-label="Special offer"><p>' + s.text +
      '. <a href="' + h(s.o.href) + '">Get in touch today →</a></p>' +
      '<button class="offer-close" id="offer-close" type="button" aria-label="Dismiss offer banner">×</button></div>'
    );
  }
  function offerFab() {
    var s = offerState();
    if (!s || path().indexOf("/contact/") === 0) return "";
    return '<a class="offer-fab btn btn-primary" href="' + h(s.o.href) + '">Claim the offer</a>';
  }

  /* ---- Header / footer ---- */
  function header() {
    var cur = path();
    var links = NAV.map(function (n) {
      var on = cur.indexOf(n[0]) === 0 ? ' aria-current="page"' : "";
      return '<li><a href="' + n[0] + '"' + on + ">" + n[1] + "</a></li>";
    }).join("");
    return (
      '<a class="skip" href="#main">Skip to content</a>' + offerBar() +
      '<header class="topnav">' +
      '<a class="logo" href="/" aria-label="Digital-tek home">' + LOGO + 'Digital-tek</a>' +
      '<ul class="nav-links" id="nav-links">' + links + "</ul>" +
      '<div class="nav-right">' +
      '<button class="icon-btn" id="theme-btn" type="button" aria-label="Toggle light and dark mode">◐</button>' +
      '<a class="btn btn-primary" href="/contact/">Start a project</a>' +
      '<button class="icon-btn menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">☰</button>' +
      "</div></header>"
    );
  }
  function footer() {
    var c = D.company;
    return (
      '<footer><div class="wrap"><div class="foot-grid">' +
      "<div><a class=\"logo\" href=\"/\">" + LOGO + "Digital-tek</a>" +
      '<p style="color:var(--ink-soft);max-width:340px">AI automation, websites and growth for businesses that want results, not jargon.</p></div>' +
      "<div><h4>Explore</h4><ul>" +
      NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      '<li><a href="/services/design-creative/how-it-works/">How design projects work</a></li>' +
      '<li><a href="https://www.commerceforce.uk">CommerceForce</a></li></ul></div>' +
      "<div><h4>Talk to us</h4><ul>" +
      '<li><a href="mailto:' + h(c.email) + '">' + h(c.email) + "</a></li>" +
      '<li><a href="tel:' + h(c.phoneLink) + '">' + h(c.phone) + "</a></li>" +
      '<li><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/cookies/">Cookies</a>' + (GA_ID ? ' · <button class="linklike" id="cookie-settings" type="button">Cookie settings</button>' : "") + "</li></ul></div>" +
      '</div><p class="fine">© ' + new Date().getFullYear() + " Digital-tek Ltd. CommerceForce is our first product.</p></div></footer>"
    );
  }

  /* ---- Renderers ---- */
  var R = {
    services: function () {
      return D.SERVICES.map(function (s) {
        return (
          '<a class="card" href="/services/#' + s.id + '">' +
          '<span class="chip tint-' + s.tint + '" aria-hidden="true">' + s.icon + "</span>" +
          "<h3>" + h(s.title) + "</h3><p>" + h(s.promise) + '</p><span class="more">Learn more →</span></a>'
        );
      }).join("");
    },
    "service-details": function () {
      return D.SERVICES.map(function (s) {
        return (
          '<article class="service-row" id="' + s.id + '"><div>' +
          '<span class="chip tint-' + s.tint + '" aria-hidden="true">' + s.icon + "</span>" +
          '<h2 style="margin-top:16px">' + h(s.title) + '</h2><p class="promise">' + h(s.promise) + "</p>" +
          "<p>" + h(s.summary) + '</p><div class="btn-row"><a class="btn btn-primary" href="/contact/?service=' + s.id + '">Start a project</a>' +
          (s.more ? '<a class="btn btn-ghost" href="' + h(s.more.url) + '">' + h(s.more.label) + " →</a>" : "") +
          "</div></div>" +
          '<div><h3 style="font-size:20px;margin-bottom:14px">What you get</h3><ul>' +
          s.offerings.map(function (o) { return "<li>" + h(o) + "</li>"; }).join("") +
          "</ul>" + (s.note ? '<p class="fine" style="margin-top:18px">' + h(s.note) + "</p>" : "") + "</div></article>"
        );
      }).join("");
    },
    products: function () {
      var label = { live: "Live", beta: "Beta", soon: "Coming soon" };
      return D.PRODUCTS.map(function (p) {
        var inner =
          '<span class="badge badge-' + p.status + '">' + label[p.status] + "</span>" +
          '<span class="chip tint-' + p.tint + '" aria-hidden="true">' + h(p.name.charAt(0)) + "</span>" +
          "<h3>" + h(p.name) + "</h3><p>" + h(p.tagline) + "</p>" +
          (p.url ? '<span class="more">Visit ' + h(p.name) + " →</span>" : "");
        return p.url
          ? '<a class="card" href="' + h(p.url) + '">' + inner + "</a>"
          : '<div class="card">' + inner + "</div>";
      }).join("");
    },
    steps: function () {
      return D.STEPS.map(function (s) {
        return '<div class="card step"><h3>' + h(s[0]) + "</h3><p>" + h(s[1]) + "</p></div>";
      }).join("");
    },
    "service-options": function () {
      return (
        '<option value="">Select a service</option>' +
        D.SERVICES.map(function (s) { return '<option value="' + s.id + '">' + h(s.title) + "</option>"; }).join("") +
        '<option value="not-sure">Not sure yet</option>'
      );
    },
  };

  // Lets tools/prerender.js build the same HTML ahead of time, so search engines see it.
  window.DT_RENDER = R;

  /* ---- Analytics (only after the visitor accepts) ---- */
  function consent() { try { return localStorage.getItem("dt-consent"); } catch (e) { return null; } }
  function setConsent(v) { try { localStorage.setItem("dt-consent", v); } catch (e) {} }
  function track(name, params) { if (window.gtag) window.gtag("event", name, params || {}); }
  function loadGA() {
    if (!GA_ID || window.gtag) return;
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
  }
  function banner() {
    var old = document.getElementById("consent");
    if (old) old.remove();
    var b = document.createElement("div");
    b.id = "consent"; b.className = "consent"; b.setAttribute("role", "dialog"); b.setAttribute("aria-label", "Cookie choices");
    b.innerHTML = "<p>We would like to use Google Analytics to see which pages are useful. It sets cookies only if you accept. See our <a href=\"/cookies/\">cookie notice</a>.</p>" +
      '<div class="btn-row"><button class="btn btn-primary" type="button" data-c="yes">Accept</button><button class="btn btn-ghost" type="button" data-c="no">Decline</button></div>';
    b.addEventListener("click", function (e) {
      var c = e.target.getAttribute && e.target.getAttribute("data-c");
      if (!c) return;
      setConsent(c); b.remove();
      if (c === "yes") loadGA();
    });
    document.body.appendChild(b);
  }
  function initAnalytics() {
    if (!GA_ID) return;
    var c = consent();
    if (c === "yes") loadGA(); else if (!c) banner();
    var cs = document.getElementById("cookie-settings");
    if (cs) cs.addEventListener("click", banner);
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a) return;
      var href = a.getAttribute("href") || "";
      if (href.indexOf("commerceforce.uk") > -1) track("commerceforce_referral", { link_text: a.textContent.trim() });
      else if (a.classList.contains("card") && href.indexOf("http") === 0) track("product_click", { product: href });
      else if (href.indexOf("offer=") > -1) track("offer_cta_click", { link_text: a.textContent.trim(), from: location.pathname });
      else if (href.indexOf("/contact") === 0) track("cta_click", { link_text: a.textContent.trim(), from: location.pathname });
    });
  }

  /* ---- Contact form ---- */
  function initForm(form) {
    var q = new URLSearchParams(location.search).get("service");
    if (q && form.service) form.service.value = q;
    // Arriving from the offer banner: pick Websites and start the message.
    var fromOffer = new URLSearchParams(location.search).get("offer") === "ecommerce" && offerState();
    if (fromOffer) {
      form.service.value = "websites";
      if (!form.message.value) form.message.value = "I'm interested in the e-commerce website offer. ";
    }
    var msg = document.getElementById("form-msg");
    var hint = document.createElement("p");
    hint.className = "fine"; hint.hidden = true;
    hint.innerHTML = 'Before you send: <a href="/services/design-creative/how-it-works/">how Design &amp; Creative projects and pricing work</a>.';
    form.service.parentNode.appendChild(hint);
    function showHint() { hint.hidden = form.service.value !== "design-creative"; }
    form.service.addEventListener("change", showHint);
    showHint();

    function fail(field, text) {
      var e = document.getElementById("err-" + field.name);
      field.setAttribute("aria-invalid", text ? "true" : "false");
      if (e) e.textContent = text || "";
      return !text;
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (form.website.value) return; // spam trap: real visitors never fill this
      var ok = true;
      ok = fail(form.name, form.name.value.trim() ? "" : "Please tell us your name.") && ok;
      ok = fail(form.email, /^\S+@\S+\.\S+$/.test(form.email.value) ? "" : "Please enter a valid email address.") && ok;
      ok = fail(form.service, form.service.value ? "" : "Please pick a service.") && ok;
      ok = fail(form.message, form.message.value.trim() ? "" : "Please add a short message.") && ok;
      if (!ok) return;
      track("form_submit", { service: form.service.value, offer: fromOffer ? "ecommerce" : "" });

      var data = {
        name: form.name.value, email: form.email.value, phone: form.phone.value,
        company: form.company.value, service: form.service.options[form.service.selectedIndex].text,
        message: form.message.value,
      };
      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset();
            msg.className = "notice"; msg.textContent = "Thanks! We'll reply within one working day.";
          })
          .catch(function () { msg.className = "notice"; msg.textContent = "Sorry, something went wrong. Please email " + D.company.email + "."; });
      } else {
        var body = "Name: " + data.name + "\nCompany: " + data.company + "\nPhone: " + data.phone + "\nService: " + data.service + "\n\n" + data.message;
        location.href = "mailto:" + D.company.email + "?subject=" + encodeURIComponent("Project enquiry: " + data.service) + "&body=" + encodeURIComponent(body);
        msg.className = "notice"; msg.textContent = "Your email app should open with your message ready to send.";
      }
    });
  }

  /* ---- Boot ---- */
  document.addEventListener("DOMContentLoaded", function () {
    var top = document.getElementById("site-header");
    var bottom = document.getElementById("site-footer");
    if (top) top.innerHTML = header();
    if (bottom) bottom.innerHTML = footer() + offerFab();
    var oc = document.getElementById("offer-close");
    if (oc) oc.addEventListener("click", function () {
      try { sessionStorage.setItem("dt-offer-closed", "1"); } catch (e) {}
      oc.parentNode.remove();
    });

    document.querySelectorAll("[data-render]").forEach(function (el) {
      var fn = R[el.getAttribute("data-render")];
      if (fn) el.innerHTML = fn();
    });

    var tb = document.getElementById("theme-btn");
    if (tb) tb.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "light" : "dark");
    });
    var mb = document.getElementById("menu-btn");
    if (mb) mb.addEventListener("click", function () {
      var open = document.getElementById("nav-links").classList.toggle("open");
      mb.setAttribute("aria-expanded", open);
    });

    var form = document.getElementById("contact-form");
    if (form) initForm(form);
    initAnalytics();

    // Jump to a service when arriving with #anchor (content is built above).
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView();
    }
  });
})();
