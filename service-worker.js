if (!self.define) {
  let e,
    s = {};
  const i = (i, r) => (
    (i = new URL(i + ".js", r).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, n) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let o = {};
    const c = (e) => i(e, a),
      f = { module: { uri: a }, exports: o, require: c };
    s[a] = Promise.all(r.map((e) => f[e] || c(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-2083f33d"], function (e) {
  "use strict";
  e.setCacheNameDetails({ prefix: "coursework_app" }),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.precacheAndRoute(
      [
        {
          url: "images/calculator.png",
          revision: "253300f4976e82429b44a4554f72b273"
        },
        {
          url: "images/css-3.png",
          revision: "621f21fa891b48023ff7c4dff12c7aa0"
        },
        {
          url: "images/eng.png",
          revision: "ad8b8b7ffe114e3a3a2ebbfe161e2cb4"
        },
        {
          url: "images/history.png",
          revision: "35ecd13fe9c3764253aba0a094f48c72"
        },
        {
          url: "images/html-5.png",
          revision: "31039a53ab57f00b4eff33fb7bcfa2e8"
        },
        {
          url: "images/java-script.png",
          revision: "d9de75e5bf3a7b0ef2a48321acc06e88"
        },
        {
          url: "images/logo.png",
          revision: "82b9c7a5a3f405032b1db71a25f67021"
        },
        {
          url: "images/musical-note.png",
          revision: "230d989d5ebd20c62abb7a05880ae3be"
        },
        { url: "index.html", revision: "82254b9861ba3ad4fc4d5546ee3b996b" },
        { url: "js/app.066fc869.js", revision: null },
        { url: "js/chunk-vendors.5919bbb2.js", revision: null },
        { url: "manifest.json", revision: "5c036a10d257eff5750edd73e63dca13" },
        { url: "robots.txt", revision: "735ab4f94fbcd57074377afca324c813" }
      ],
      {}
    ),
    e.registerRoute(
      ({ request: e }) => "image" === e.destination,
      new e.StaleWhileRevalidate(),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) =>
        "https://cw2-backend-eywd.onrender.com" === e.origin &&
        "lessons" === e.pathname,
      new e.StaleWhileRevalidate({ cacheName: "api-cache", plugins: [] }),
      "GET"
    );
});
//# sourceMappingURL=service-worker.js.map
