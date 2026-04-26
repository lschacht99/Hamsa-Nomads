/* =========================================================
   HAMSA NOMADS — SHARED HEADER / FOOTER / SHARE / ROUTE LINE
   File: assets/site-components.js
   ========================================================= */

/*
  For hamsanomads.com, keep data-base empty or omitted.

  If one day you use GitHub Pages in a subfolder, load the script like:
  <script src="/Hamsa-Nomads/assets/site-components.js" data-base="/Hamsa-Nomads"></script>
*/

const HN_CURRENT_SCRIPT = document.currentScript;
const BASE = HN_CURRENT_SCRIPT?.dataset?.base
  ? HN_CURRENT_SCRIPT.dataset.base.replace(/\/$/, "")
  : "";

function hnPath(path) {
  return `${BASE}${path}`;
}

/* =========================================================
   GLOBAL ROUTE LINE BACKGROUND
   ========================================================= */

function insertGlobalRouteLine() {
  if (document.getElementById("hnGlobalRouteOverlay")) return;

  const routeHTML = `
    <div class="hn-global-route-overlay" id="hnGlobalRouteOverlay" aria-hidden="true">
      <svg viewBox="0 0 1440 5200" preserveAspectRatio="none">
        <path class="hn-global-route-line back hn-global-route-draw" d="M220 260 C360 250, 420 320, 610 305 C820 288, 980 295, 1110 310 C1240 325, 1290 410, 1180 470 C1050 540, 860 500, 690 495 C520 490, 340 500, 215 560" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M220 260 C360 250, 420 320, 610 305 C820 288, 980 295, 1110 310 C1240 325, 1290 410, 1180 470 C1050 540, 860 500, 690 495 C520 490, 340 500, 215 560" />

        <path class="hn-global-route-line back hn-global-route-draw" d="M210 1120 C310 1010, 520 980, 760 1005 C980 1030, 1100 1060, 1210 1050 C1310 1042, 1360 1140, 1280 1260 C1195 1390, 1050 1380, 915 1365 C760 1347, 570 1335, 380 1350 C255 1360, 165 1275, 170 1180 C174 1160, 182 1140, 210 1120" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M210 1120 C310 1010, 520 980, 760 1005 C980 1030, 1100 1060, 1210 1050 C1310 1042, 1360 1140, 1280 1260 C1195 1390, 1050 1380, 915 1365 C760 1347, 570 1335, 380 1350 C255 1360, 165 1275, 170 1180 C174 1160, 182 1140, 210 1120" />

        <path class="hn-global-route-line back hn-global-route-draw" d="M240 1980 C390 1880, 650 1910, 835 1980 C980 2035, 1110 2088, 1195 2080 C1290 2070, 1365 2150, 1315 2300 C1260 2460, 1100 2525, 900 2515 C720 2505, 605 2395, 485 2390 C365 2385, 225 2470, 160 2335 C110 2228, 145 2055, 240 1980" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M240 1980 C390 1880, 650 1910, 835 1980 C980 2035, 1110 2088, 1195 2080 C1290 2070, 1365 2150, 1315 2300 C1260 2460, 1100 2525, 900 2515 C720 2505, 605 2395, 485 2390 C365 2385, 225 2470, 160 2335 C110 2228, 145 2055, 240 1980" />

        <path class="hn-global-route-line back hn-global-route-draw" d="M95 3100 C220 3010, 380 3140, 560 3130 C700 3122, 740 3055, 770 2935 C790 2855, 860 2780, 980 2805 C1115 2835, 1235 2945, 1320 3000 C1385 3045, 1405 3170, 1300 3270 C1195 3370, 1020 3390, 850 3360 C690 3332, 520 3360, 320 3400 C210 3420, 130 3340, 90 3210 C75 3160, 70 3130, 95 3100" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M95 3100 C220 3010, 380 3140, 560 3130 C700 3122, 740 3055, 770 2935 C790 2855, 860 2780, 980 2805 C1115 2835, 1235 2945, 1320 3000 C1385 3045, 1405 3170, 1300 3270 C1195 3370, 1020 3390, 850 3360 C690 3332, 520 3360, 320 3400 C210 3420, 130 3340, 90 3210 C75 3160, 70 3130, 95 3100" />

        <path class="hn-global-route-line back hn-global-route-draw" d="M235 3960 C420 3890, 640 3915, 835 3880 C990 3852, 1110 3895, 1220 3930 C1325 3965, 1360 4090, 1268 4170 C1178 4250, 1000 4215, 840 4230 C665 4247, 505 4295, 312 4275 C165 4260, 90 4195, 78 4098 C68 4020, 112 3942, 235 3960" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M235 3960 C420 3890, 640 3915, 835 3880 C990 3852, 1110 3895, 1220 3930 C1325 3965, 1360 4090, 1268 4170 C1178 4250, 1000 4215, 840 4230 C665 4247, 505 4295, 312 4275 C165 4260, 90 4195, 78 4098 C68 4020, 112 3942, 235 3960" />

        <path class="hn-global-route-line back hn-global-route-draw" d="M230 4680 C410 4705, 645 4750, 835 4840 C980 4908, 1120 4960, 1270 5010 C1360 5040, 1400 5080, 1415 5125" />
        <path class="hn-global-route-line front hn-global-route-draw" d="M230 4680 C410 4705, 645 4750, 835 4840 C980 4908, 1120 4960, 1270 5010 C1360 5040, 1400 5080, 1415 5125" />

        <circle class="hn-global-route-dot" cx="1110" cy="310" r="7" />
        <circle class="hn-global-route-dot" cx="1210" cy="1050" r="7" />
        <circle class="hn-global-route-dot" cx="1195" cy="2080" r="7" />
        <circle class="hn-global-route-dot" cx="1320" cy="3000" r="7" />
        <circle class="hn-global-route-dot" cx="1220" cy="3930" r="7" />
      </svg>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", routeHTML);

  const drawPaths = Array.from(document.querySelectorAll(".hn-global-route-draw"));
  const dots = Array.from(document.querySelectorAll(".hn-global-route-dot"));

  drawPaths.forEach((path) => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
  });

  function updateGlobalRouteLine() {
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );

    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    drawPaths.forEach((path, index) => {
      const len = path.getTotalLength();

      /*
        The back/front paths come in pairs.
        This keeps each pair drawing together instead of slightly offset.
      */
      const pairIndex = Math.floor(index / 2);
      const stagger = pairIndex * 0.075;
      const localProgress = Math.max(
        0,
        Math.min(1, (progress - stagger) / 0.74)
      );

      path.style.strokeDashoffset = len * (1 - localProgress);
    });

    dots.forEach((dot, index) => {
      const threshold = 0.14 + index * 0.145;
      dot.classList.toggle("is-visible", progress > threshold);
    });
  }

  window.addEventListener("scroll", updateGlobalRouteLine, { passive: true });
  window.addEventListener("resize", updateGlobalRouteLine);
  updateGlobalRouteLine();
}

/* =========================================================
   HEADER
   ========================================================= */

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="hn-shared-header">
      <div class="hn-shared-container hn-shared-nav">
        <a href="${hnPath("/index.html")}" class="hn-shared-brand">
          <img
            class="hn-shared-brand-logo"
            src="${hnPath("/logo/logo-hamsa-nomads.png")}"
            alt="Hamsa Nomads logo"
          />

          <div class="hn-shared-brand-text">
            <div class="hn-shared-brand-name">Hamsa Nomads</div>
            <div class="hn-shared-brand-sub">Kosher travel</div>
          </div>
        </a>

        <nav class="hn-shared-nav-links" aria-label="Main navigation">
          <a href="${hnPath("/index.html#experience")}" data-nav="experience">Experience</a>
          <a href="${hnPath("/index.html#gallery")}" data-nav="gallery">Gallery</a>
          <a href="${hnPath("/trips-page/trips.html")}" data-nav="trips">Upcoming trips</a>
          <a href="${hnPath("/faq.html")}" data-nav="faq">FAQ</a>
          <a href="${hnPath("/about-us/about-us.html")}" data-nav="about">About us</a>
          <a href="${hnPath("/Forms/apply.html")}" class="hn-shared-button" data-nav="apply">Join the retreat</a>
        </nav>
      </div>
    </header>
  `;

  markActiveNav();
}

/* =========================================================
   FOOTER
   ========================================================= */

function insertSiteFooter() {
  const footerTarget = document.getElementById("site-footer");
  if (!footerTarget) return;

  footerTarget.innerHTML = `
    <footer class="hn-shared-footer">
      <div class="hn-shared-footer-container">
        <div class="hn-shared-footer-col hn-shared-footer-brand">
          <div class="hn-shared-footer-logo-row">
            <img
              class="hn-shared-footer-logo-img"
              src="${hnPath("/logo/logo-hamsa-nomads.png")}"
              alt="Hamsa Nomads logo"
            />

            <div>
              <h2 class="hn-shared-footer-logo">Hamsa Nomads</h2>
              <p class="hn-shared-footer-tagline">Curated kosher travel</p>
            </div>
          </div>

          <p class="hn-shared-footer-text">
            Curated kosher travel experiences for meaningful Jewish connection,
            beautiful places, and warm community.
          </p>

          <a class="hn-shared-footer-cta" href="${hnPath("/Forms/apply.html")}">
            Join us for Shavuos
          </a>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="${hnPath("/index.html#experience")}">Experience</a></li>
            <li><a href="${hnPath("/index.html#gallery")}">Gallery</a></li>
            <li><a href="${hnPath("/trips-page/trips.html")}">Trips</a></li>
            <li><a href="${hnPath("/about-us/about-us.html")}">About us</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Retreat</h4>
          <ul>
            <li><a href="${hnPath("/index.html#pricing")}">Pricing</a></li>
            <li><a href="${hnPath("/Forms/apply.html")}">Apply</a></li>
            <li>Shavuos in Vermont</li>
            <li>Private home</li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Info</h4>
          <ul>
            <li><a href="${hnPath("/faq.html")}">FAQ</a></li>
            <li><a href="${hnPath("/terms.html")}">Terms</a></li>
            <li><a href="${hnPath("/privacy.html")}">Privacy</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col hn-shared-footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hamsanomads@gmail.com">hamsanomads@gmail.com</a></li>
            <li>Text: 347-988-8869</li>
            <li>New York, USA</li>
          </ul>
        </div>
      </div>

      <div class="hn-shared-footer-bottom">
        <span>© 2026 Hamsa Nomads — All rights reserved</span>
        <span>Small curated trips. Meaningful Jewish connection.</span>
      </div>
    </footer>
  `;
}

/* =========================================================
   FLOATING SHARE BUTTON
   ========================================================= */

function insertFloatingShare() {
  if (document.getElementById("hnSharedFloatingShare")) return;

  const shareHTML = `
    <div class="hn-shared-floating-share" id="hnSharedFloatingShare">
      <button
        class="hn-shared-share-main-btn"
        id="hnSharedShareBtn"
        type="button"
        aria-label="Share this page"
      >
        Share around you
      </button>

      <div class="hn-shared-share-options" id="hnSharedShareOptions">
        <a id="hnSharedWhatsappShare" target="_blank" rel="noopener">WhatsApp</a>
        <a id="hnSharedFacebookShare" target="_blank" rel="noopener">Facebook</a>
        <a id="hnSharedEmailShare">Email</a>
        <button id="hnSharedCopyLinkBtn" type="button">Copy link</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", shareHTML);

  const shareBtn = document.getElementById("hnSharedShareBtn");
  const shareOptions = document.getElementById("hnSharedShareOptions");
  const copyLinkBtn = document.getElementById("hnSharedCopyLinkBtn");

  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title || "Hamsa Nomads");

  document.getElementById("hnSharedWhatsappShare").href =
    `https://wa.me/?text=${pageTitle}%20${pageUrl}`;

  document.getElementById("hnSharedFacebookShare").href =
    `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

  document.getElementById("hnSharedEmailShare").href =
    `mailto:?subject=${pageTitle}&body=${pageUrl}`;

  shareBtn.addEventListener("click", async (event) => {
    event.stopPropagation();

    const canUseNativeShare =
      navigator.share &&
      window.matchMedia("(max-width: 760px)").matches;

    if (canUseNativeShare) {
      try {
        await navigator.share({
          title: document.title || "Hamsa Nomads",
          url: window.location.href
        });
        return;
      } catch (error) {
        // If cancelled, fall back to the custom menu.
      }
    }

    shareOptions.classList.toggle("is-open");
  });

  copyLinkBtn.addEventListener("click", async (event) => {
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(window.location.href);
      copyLinkBtn.textContent = "Copied!";
      setTimeout(() => {
        copyLinkBtn.textContent = "Copy link";
      }, 1600);
    } catch (err) {
      copyLinkBtn.textContent = "Copy manually";
      setTimeout(() => {
        copyLinkBtn.textContent = "Copy link";
      }, 1600);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".hn-shared-floating-share")) {
      shareOptions.classList.remove("is-open");
    }
  });
}

/* =========================================================
   ACTIVE NAV
   ========================================================= */

function markActiveNav() {
  const path = window.location.pathname;

  const navMap = [
    { key: "faq", match: "/faq.html" },
    { key: "trips", match: "/trips-page/trips.html" },
    { key: "about", match: "/about-us/about-us.html" },
    { key: "apply", match: "/Forms/apply.html" }
  ];

  const active = navMap.find((item) => path.endsWith(item.match));
  if (!active) return;

  const activeLink = document.querySelector(`[data-nav="${active.key}"]`);
  if (activeLink) activeLink.classList.add("is-active");
}

/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  insertGlobalRouteLine();
  insertSiteHeader();
  insertSiteFooter();
  insertFloatingShare();
});
