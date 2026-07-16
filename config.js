/* ==============================================================
   EDIT ME: CONFIG — the one file you edit.
   Change values, save, re-upload just this file to GitHub.
   (Big changes like new pages or rewritten text: ask Claude to
   regenerate the site so Google's schema stays in sync too.)
   ============================================================== */
const CONFIG = {
  phoneDisplay: "(561) 371-7073",
  phoneDial: "+15613717073",                        // keep the +1, digits only
  bookingUrl: "/book",  // ← swap when booking moves to your own domain
  logoFile: "/logo.webp",                           // set to "" to hide the logo
  hours: "Mon\u2013Sat, 8am\u20136pm",
  minItemPrice: "$150",
  prices: {                                         // must match the tier names on the site
    "\u00bc Load": "$225",
    "\u00bd Load": "$400",
    "\u00be Load": "$550",
    "Full Load": "$650"
  }
};
/* ============== end CONFIG — no edits needed below ============== */
(function () {
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var roles = el.getAttribute("data-cfg").split(" ");
    roles.forEach(function (role) {
      if (role === "phoneHref") el.setAttribute("href", "tel:" + CONFIG.phoneDial);
      if (role === "bookHref") el.setAttribute("href", CONFIG.bookingUrl);
      if (role === "phoneText") el.textContent = CONFIG.phoneDisplay;
      if (role === "minPrice") el.textContent = CONFIG.minItemPrice;
      if (role === "hoursText") el.textContent = CONFIG.hours;
      if (role === "logoSrc") {
        if (CONFIG.logoFile) el.setAttribute("src", CONFIG.logoFile);
        else el.style.display = "none";
      }
      if (role.indexOf("price-") === 0) {
        var tier = role.slice(6);
        if (CONFIG.prices[tier]) el.textContent = CONFIG.prices[tier];
      }
    });
  });
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
