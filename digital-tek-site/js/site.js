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

  /* ---- Header / footer ---- */
  function header() {
    var cur = path();
    var links = NAV.map(function (n) {
      var on = cur.indexOf(n[0]) === 0 ? ' aria-current="page"' : "";
      return '<li><a href="' + n[0] + '"' + on + ">" + n[1] + "</a></li>";
    }).join("");
    return (
      '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="topnav">' +
      '<a class="logo" href="/" aria-label="Digital-tek home"><span class="logo-mark" aria-hidden="true">d</span>Digital-tek</a>' +
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
      "<div><a class=\"logo\" href=\"/\"><span class=\"logo-mark\" aria-hidden=\"true\">d</span>Digital-tek</a>" +
      '<p style="color:var(--ink-soft);max-width:340px">AI automation, websites and growth for businesses that want results, not jargon.</p></div>' +
      "<div><h4>Explore</h4><ul>" +
      NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      '<li><a href="https://www.commerceforce.uk">CommerceForce</a></li></ul></div>' +
      "<div><h4>Talk to us</h4><ul>" +
      '<li><a href="mailto:' + h(c.email) + '">' + h(c.email) + "</a></li>" +
      '<li><a href="tel:' + h(c.phoneLink) + '">' + h(c.phone) + "</a></li>" +
      '<li><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/cookies/">Cookies</a></li></ul></div>' +
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
          "<p>" + h(s.summary) + '</p><div class="btn-row"><a class="btn btn-primary" href="/contact/?service=' + s.id + '">Start a project</a></div></div>' +
          '<div><h3 style="font-size:20px;margin-bottom:14px">What you get</h3><ul>' +
          s.offerings.map(function (o) { return "<li>" + h(o) + "</li>"; }).join("") +
          "</ul></div></article>"
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

  /* ---- Contact form ---- */
  function initForm(form) {
    var q = new URLSearchParams(location.search).get("service");
    if (q && form.service) form.service.value = q;
    var msg = document.getElementById("form-msg");

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
    if (bottom) bottom.innerHTML = footer();

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

    // Jump to a service when arriving with #anchor (content is built above).
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView();
    }
  });
})();
