// ============================================================
// COOKIE CONSENT: Google Analytics (GA4) only sets cookies after Accept
// ============================================================
// The Google tag itself is in index.html with Consent Mode set to "denied".
// This file shows the banner, remembers the choice, and tells Google
// when the visitor accepts. The footer's "Cookie Settings" button reopens it.
(function () {
  var KEY = "cf-consent";
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function update(v) {
    if (window.gtag) window.gtag("consent", "update", { analytics_storage: v === "yes" ? "granted" : "denied" });
  }
  function banner() {
    var old = document.getElementById("cf-consent");
    if (old) old.remove();
    var b = document.createElement("div");
    b.id = "cf-consent";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookie choices");
    b.innerHTML =
      "<p>We would like to use Google Analytics to see which pages are useful. It sets cookies only if you accept.</p>" +
      '<div class="cf-consent-btns"><button type="button" data-c="yes">Accept</button><button type="button" data-c="no">Decline</button></div>';
    b.addEventListener("click", function (e) {
      var c = e.target.getAttribute && e.target.getAttribute("data-c");
      if (!c) return;
      set(c); update(c); b.remove();
    });
    document.body.appendChild(b);
  }
  function init() {
    var c = get();
    if (c === "yes") update("yes"); else if (!c) banner();
    window.addEventListener("cf-cookie-settings", banner);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
