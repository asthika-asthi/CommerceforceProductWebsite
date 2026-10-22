/*
 * Writes the service, product and step lists straight into the HTML pages, so
 * search engines and link previews see the text without running JavaScript.
 * The browser still rebuilds the same content on load (js/site.js), so the two
 * always match. Run after editing digital-tek-site/js/data.js:
 *
 *     node tools/prerender.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..", "digital-tek-site");
const win = {};
const ctx = vm.createContext({
  window: win,
  document: { addEventListener() {} },
  location: { pathname: "/", search: "", hash: "" },
  sessionStorage: {},
  localStorage: {},
});
for (const f of ["js/data.js", "js/site.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
}
const R = ctx.window.DT_RENDER;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith(".html") ? [path.join(dir, e.name)] : []
  );
}

// The generated HTML sits between <!--r--> and <!--/r--> inside the element, so
// running this again replaces it cleanly. A fresh element starts out empty.
const re = /(<(?:div|select)\b[^>]*data-render="([\w-]+)"[^>]*>)(?:<!--r-->[\s\S]*?<!--\/r-->)?/g;
let changed = 0;
for (const file of walk(root)) {
  const src = fs.readFileSync(file, "utf8");
  const out = src.replace(re, (m, open, name) => {
    if (!R[name]) throw new Error("No renderer named " + name + " in " + file);
    return open + "<!--r-->" + R[name]() + "<!--/r-->";
  });
  if (out !== src) {
    fs.writeFileSync(file, out);
    changed++;
    console.log("updated", path.relative(root, file));
  }
}
console.log(changed + " page(s) updated");
