/* =========================================================
   HAMSA NOMADS — SHARED HEADER / FOOTER / SHARE / TRIP LINE
   File: assets/site-components.js
   ========================================================= */

/*
  On hamsanomads.com, use:
  <script src="/assets/site-components.js" defer></script>

  If testing from a subfolder, use:
  <script src="../assets/site-components.js" data-base=".." defer></script>
*/

const HN_CURRENT_SCRIPT = document.currentScript;
const BASE = HN_CURRENT_SCRIPT?.dataset?.base
  ? HN_CURRENT_SCRIPT.dataset.base.replace(/\/$/, "")
  : "";

function hnPath(path) {
  return `${BASE}${path}`;
}

/* =========================================================
   REMOVE OLD BACKGROUND LINES
   Prevents previous route-line designs from stacking.
   ========================================================= */

function removeOldBackgroundLines() {
  document
    .querySelectorAll(
      "#hnGlobalRouteOverlay, .hn-global-route-overlay, #hnTripLineOverlay, .hn-trip-line-overlay, .line-overlay"
    )
    .forEach((el) => el.remove());
}

/* =========================================================
   GLOBAL TRIPS.HTML-STYLE DRAWING LINE
   SAFE VERSION: fill="none" is written directly into SVG.
   This prevents the black blob issue even if CSS fails.
   ========================================================= */

function insertGlobalTripLine() {
  if (document.getElementById("hnTripLineOverlay")) return;

  const lineHTML = `
    <div
      class="hn-trip-line-overlay"
      id="hnTripLineOverlay"
      aria-hidden="true"
      style="position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; opacity: 0.74;"
    >
      <svg
        viewBox="0 0 1400 1800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="width: 100%; height: 100%; overflow: visible;"
      >
        <path
          id="hnTripLineBack"
          class="hn-trip-path-main back"
          fill="none"
          stroke="rgba(16, 14, 11, 0.22)"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
          opacity="0.68"
          d="M -80 140 C 120 40, 230 250, 390 190 S 640 60, 810 250 S 1030 520, 1220 390 S 1510 300, 1450 610 C 1390 900, 1040 780, 920 1040 S 690 1350, 430 1220 S 20 1180, 150 1500 S 620 1740, 980 1580"
        />

        <path
          id="hnTripLineFront"
          class="hn-trip-path-main front"
          fill="none"
          stroke="rgba(16, 14, 11, 0.22)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
          opacity="0.92"
          d="M -80 140 C 120 40, 230 250, 390 190 S 640 60, 810 250 S 1030 520, 1220 390 S 1510 300, 1450 610 C 1390 900, 1040 780, 920 1040 S 690 1350, 430 1220 S 20 1180, 150 1500 S 620 1740, 980 1580"
        />

        <path
          id="hnTripSliceBack"
          class="hn-trip-path-slice back"
          fill="none"
          stroke="rgba(16, 14, 11, 0.22)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
          opacity="0.68"
          d="M 1010 1580 C 1080 1510, 1175 1515, 1230 1600 C 1170 1655, 1080 1665, 1010 1580 Z"
        />

        <path
          id="hnTripSliceFront"
          class="hn-trip-path-slice front"
          fill="none"
          stroke="rgba(16, 14, 11, 0.22)"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
          opacity="0.92"
          d="M 1010 1580 C 1080 1510, 1175 1515, 1230 1600 C 1170 1655, 1080 1665, 1010 1580 Z"
        />
      </svg>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", lineHTML);

  const drawPaths = [
    document.getElementById("hnTripLineBack"),
    document.getElementById("hnTripLineFront")
  ].filter(Boolean);

  const slicePaths = [
    document.getElementById("hnTripSliceBack"),
    document.getElementById("hnTripSliceFront")
  ].filter(Boolean);

  const allPaths = [...drawPaths, ...slicePaths];

  allPaths.forEach((path) => {
    path.setAttribute("fill", "none");
    path.style.fill = "none";

    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
  });

  function updateTripLine() {
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );

    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    drawPaths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDashoffset = len * (1 - Math.min(progress * 1.06, 1));
    });

    const sliceProgress = Math.max(0, (progress - 0.82) / 0.18);

    slicePaths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDashoffset = len * (1 - sliceProgress);
    });
  }

  window.addEventListener("scroll", updateTripLine, { passive: true });
  window.addEventListener("resize", updateTripLine);
  updateTripLine();
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

        <div class="hn-shared-footer-credit">
          <div class="hn-shared-footer-credit-topline">
            <span class="hn-shared-footer-credit-dot"></span>
            <span>Website design</span>
          </div>

          <div class="hn-shared-footer-credit-main">
            by Moshé Cohen
          </div>

          <a href="mailto:hamsanomads@gmail.com" class="hn-shared-footer-credit-link">
            Need a website? Get in touch
          </a>
        </div>
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
        /* If cancelled, fall back to the custom menu. */
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
  removeOldBackgroundLines();
  insertGlobalTripLine();
  insertSiteHeader();
  insertSiteFooter();
  insertFloatingShare();
});
