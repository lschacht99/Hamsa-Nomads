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
   Visible nav stays.
   Slide menu is additional.
   ========================================================= */

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="hn-shared-header hn-additional-menu-header">
      <div class="hn-shared-container hn-shared-nav hn-additional-menu-nav">
        <a href="${hnPath("/index.html")}" class="hn-shared-brand hn-additional-menu-brand">
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

        <nav class="hn-shared-nav-links hn-visible-nav-links" aria-label="Main navigation">
          <a href="${hnPath("/index.html#experience")}" data-nav="experience">Experience</a>
          <a href="${hnPath("/index.html#gallery")}" data-nav="gallery">Gallery</a>
          <a href="${hnPath("/trips-page/trips.html")}" data-nav="trips">Trips</a>
          <a href="${hnPath("/faq.html")}" data-nav="faq">FAQ</a>
          <a href="${hnPath("/about-us/about-us.html")}" data-nav="about">About</a>
        </nav>

        <div class="hn-header-actions">
          <a
            href="${hnPath("/Forms/apply.html")}"
            class="hn-shared-button hn-join-always"
            data-nav="apply"
          >
            <span class="hn-join-full">Join the retreat</span>
            <span class="hn-join-short">Join</span>
          </a>

          <button
            class="hn-more-menu-toggle"
            id="hnMoreMenuToggle"
            type="button"
            aria-label="Open more navigation"
            aria-expanded="false"
            aria-controls="hnMoreDrawer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div class="hn-more-menu-overlay" id="hnMoreMenuOverlay"></div>

      <aside
        class="hn-more-drawer"
        id="hnMoreDrawer"
        aria-hidden="true"
      >
        <div class="hn-more-drawer-top">
          <div>
            <div class="hn-more-drawer-brand">Hamsa Nomads</div>
            <div class="hn-more-drawer-sub">More places to explore</div>
          </div>

          <button
            class="hn-more-menu-close"
            id="hnMoreMenuClose"
            type="button"
            aria-label="Close more navigation"
          >
            ×
          </button>
        </div>

        <nav class="hn-more-drawer-links" aria-label="More navigation">
          <a href="${hnPath("/index.html")}">
            <span>Home</span>
            <small>Back to the main page</small>
          </a>

          <a href="${hnPath("/index.html#pricing")}">
            <span>Pricing</span>
            <small>Rooming, camping, and retreat options</small>
          </a>

          <a href="${hnPath("/trips-page/trips.html")}" data-nav="trips">
            <span>Upcoming trips</span>
            <small>See what is coming next</small>
          </a>

          <a href="${hnPath("/schedule/call.html")}">
            <span>Schedule a call</span>
            <small>Ask questions before applying</small>
          </a>

          <a href="${hnPath("/Forms/apply.html")}" data-nav="apply">
            <span>Apply for Shavuos</span>
            <small>Join the retreat</small>
          </a>

          <a href="${hnPath("/Forms/payment.html")}">
            <span>Payment page</span>
            <small>Confirm your spot after approval</small>
          </a>

          <a href="${hnPath("/about-us/about-us.html")}" data-nav="about">
            <span>About us</span>
            <small>Meet the people behind Hamsa Nomads</small>
          </a>

          <a href="${hnPath("/faq.html")}" data-nav="faq">
            <span>FAQ</span>
            <small>Food, rooms, Shabbos, travel, and details</small>
          </a>

          <a href="${hnPath("/terms.html")}">
            <span>Terms</span>
            <small>Retreat policies and conditions</small>
          </a>

          <a href="${hnPath("/privacy.html")}">
            <span>Privacy</span>
            <small>How information is handled</small>
          </a>

          <a href="mailto:hamsanomads@gmail.com">
            <span>Email us</span>
            <small>hamsanomads@gmail.com</small>
          </a>
        </nav>
      </aside>
    </header>
  `;

  markActiveNav();
  initMoreSlideMenu();
}

/* =========================================================
   ADDITIONAL SLIDE MENU STYLES
   ========================================================= */

function insertMoreSlideMenuStyles() {
  if (document.getElementById("hnMoreSlideMenuStyles")) return;

  const style = document.createElement("style");
  style.id = "hnMoreSlideMenuStyles";

  style.textContent = `
    .hn-additional-menu-header {
      position: relative !important;
      z-index: 99999 !important;
      overflow: visible !important;
    }

    .hn-additional-menu-nav {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 18px !important;
      flex-wrap: nowrap !important;
      overflow: visible !important;
    }

    .hn-additional-menu-brand {
      flex: 0 0 auto !important;
      min-width: 0 !important;
    }

    .hn-visible-nav-links {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
      white-space: nowrap !important;
      overflow: visible !important;
    }

    .hn-visible-nav-links a {
      white-space: nowrap !important;
      flex: 0 0 auto !important;
    }

    .hn-header-actions {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      gap: 10px !important;
      flex: 0 0 auto !important;
      white-space: nowrap !important;
    }

    .hn-join-always {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      white-space: nowrap !important;
      flex: 0 0 auto !important;
    }

    .hn-join-short {
      display: none;
    }

    .hn-more-menu-toggle {
      display: flex !important;
      width: 44px !important;
      height: 44px !important;
      border: 1px solid rgba(23, 79, 25, 0.18) !important;
      border-radius: 999px !important;
      background: rgba(247, 243, 234, 0.82) !important;
      backdrop-filter: blur(14px) !important;
      -webkit-backdrop-filter: blur(14px) !important;
      cursor: pointer !important;
      align-items: center !important;
      justify-content: center !important;
      flex-direction: column !important;
      gap: 4px !important;
      padding: 0 !important;
      position: relative !important;
      z-index: 100002 !important;
      box-shadow: 0 12px 28px rgba(16, 14, 11, 0.08) !important;
      flex: 0 0 auto !important;
    }

    .hn-more-menu-toggle span {
      display: block !important;
      width: 19px !important;
      height: 1.7px !important;
      border-radius: 999px !important;
      background: #174F19 !important;
      transition: transform 0.28s ease, opacity 0.28s ease !important;
    }

    .hn-more-menu-overlay {
      position: fixed !important;
      inset: 0 !important;
      background: rgba(16, 14, 11, 0.32) !important;
      opacity: 0 !important;
      pointer-events: none !important;
      transition: opacity 0.3s ease !important;
      z-index: 100000 !important;
    }

    .hn-more-drawer {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      width: min(88vw, 420px) !important;
      height: 100vh !important;
      background: #f7f3ea !important;
      box-shadow: -24px 0 70px rgba(16, 14, 11, 0.22) !important;
      transform: translateX(105%) !important;
      transition: transform 0.38s cubic-bezier(.2,.8,.2,1) !important;
      z-index: 100001 !important;
      padding: 28px 24px 34px !important;
      display: flex !important;
      flex-direction: column !important;
      border-left: 1px solid rgba(23, 79, 25, 0.12) !important;
      overflow-y: auto !important;
    }

    .hn-more-drawer-top {
      display: flex !important;
      justify-content: space-between !important;
      align-items: flex-start !important;
      gap: 20px !important;
      padding-bottom: 22px !important;
      border-bottom: 1px solid rgba(23, 79, 25, 0.14) !important;
    }

    .hn-more-drawer-brand {
      font-family: Georgia, "Times New Roman", serif !important;
      font-size: 1.42rem !important;
      color: #174F19 !important;
      letter-spacing: 0.02em !important;
    }

    .hn-more-drawer-sub {
      margin-top: 5px !important;
      font-size: 0.78rem !important;
      color: rgba(16, 14, 11, 0.58) !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
    }

    .hn-more-menu-close {
      border: 0 !important;
      background: transparent !important;
      font-size: 2.1rem !important;
      line-height: 1 !important;
      color: #174F19 !important;
      cursor: pointer !important;
      padding: 0 !important;
      margin-top: -4px !important;
    }

    .hn-more-drawer-links {
      display: flex !important;
      flex-direction: column !important;
      gap: 0 !important;
      margin-top: 20px !important;
    }

    .hn-more-drawer-links a {
      color: #174F19 !important;
      text-decoration: none !important;
      padding: 15px 0 !important;
      border-bottom: 1px solid rgba(23, 79, 25, 0.11) !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 4px !important;
    }

    .hn-more-drawer-links a span {
      font-size: 1.02rem !important;
      line-height: 1.2 !important;
    }

    .hn-more-drawer-links a small {
      font-size: 0.78rem !important;
      line-height: 1.35 !important;
      color: rgba(16, 14, 11, 0.58) !important;
    }

    .hn-more-drawer-links a.is-active span {
      font-weight: 700 !important;
    }

    body.hn-more-menu-is-open {
      overflow: hidden !important;
    }

    body.hn-more-menu-is-open .hn-more-menu-overlay {
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    body.hn-more-menu-is-open .hn-more-drawer {
      transform: translateX(0) !important;
    }

    body.hn-more-menu-is-open .hn-more-menu-toggle span:nth-child(1) {
      transform: translateY(5.7px) rotate(45deg) !important;
    }

    body.hn-more-menu-is-open .hn-more-menu-toggle span:nth-child(2),
    body.hn-more-menu-is-open .hn-more-menu-toggle span:nth-child(3) {
      opacity: 0 !important;
    }

    body.hn-more-menu-is-open .hn-more-menu-toggle span:nth-child(4) {
      transform: translateY(-5.7px) rotate(-45deg) !important;
    }

    @media (max-width: 1180px) {
      .hn-additional-menu-nav {
        gap: 13px !important;
      }

      .hn-visible-nav-links {
        gap: 15px !important;
      }

      .hn-visible-nav-links a {
        font-size: 0.88rem !important;
      }

      .hn-join-always {
        font-size: 0.86rem !important;
        padding: 10px 14px !important;
      }

      .hn-more-menu-toggle {
        width: 42px !important;
        height: 42px !important;
      }
    }

    @media (max-width: 980px) {
      .hn-additional-menu-nav {
        gap: 9px !important;
      }

      .hn-additional-menu-brand {
        gap: 8px !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-logo {
        width: 40px !important;
        height: auto !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-name {
        font-size: 1.08rem !important;
        letter-spacing: 0.06em !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-sub {
        font-size: 0.74rem !important;
      }

      .hn-visible-nav-links {
        gap: 10px !important;
      }

      .hn-visible-nav-links a {
        font-size: 0.74rem !important;
      }

      .hn-join-always {
        font-size: 0.72rem !important;
        padding: 8px 10px !important;
      }

      .hn-more-menu-toggle {
        width: 38px !important;
        height: 38px !important;
      }

      .hn-more-menu-toggle span {
        width: 17px !important;
      }
    }

    @media (max-width: 760px) {
      .hn-additional-menu-nav {
        gap: 6px !important;
      }

      .hn-additional-menu-brand {
        gap: 5px !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-logo {
        width: 26px !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-name {
        font-size: 0.68rem !important;
        letter-spacing: 0.04em !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-sub {
        display: none !important;
      }

      .hn-visible-nav-links {
        gap: 6px !important;
        justify-content: center !important;
      }

      .hn-visible-nav-links a {
        font-size: 0.55rem !important;
        letter-spacing: 0 !important;
      }

      .hn-join-full {
        display: none !important;
      }

      .hn-join-short {
        display: inline !important;
      }

      .hn-join-always {
        font-size: 0.56rem !important;
        padding: 6px 7px !important;
        min-height: 29px !important;
      }

      .hn-more-menu-toggle {
        width: 32px !important;
        height: 32px !important;
        gap: 3px !important;
      }

      .hn-more-menu-toggle span {
        width: 15px !important;
        height: 1.5px !important;
      }
    }

    @media (max-width: 420px) {
      .hn-visible-nav-links {
        gap: 5px !important;
      }

      .hn-visible-nav-links a {
        font-size: 0.5rem !important;
      }

      .hn-additional-menu-brand .hn-shared-brand-name {
        font-size: 0.61rem !important;
      }

      .hn-join-always {
        font-size: 0.52rem !important;
        padding: 5px 6px !important;
      }

      .hn-more-menu-toggle {
        width: 30px !important;
        height: 30px !important;
      }
    }

    @media (max-width: 370px) {
      .hn-additional-menu-brand .hn-shared-brand-logo {
        display: none !important;
      }

      .hn-visible-nav-links a {
        font-size: 0.47rem !important;
      }

      .hn-join-always {
        font-size: 0.49rem !important;
      }
    }
  `;

  document.head.appendChild(style);
}

function initMoreSlideMenu() {
  insertMoreSlideMenuStyles();

  const toggle = document.getElementById("hnMoreMenuToggle");
  const drawer = document.getElementById("hnMoreDrawer");
  const overlay = document.getElementById("hnMoreMenuOverlay");
  const closeBtn = document.getElementById("hnMoreMenuClose");

  if (!toggle || !drawer || !overlay || !closeBtn) return;

  function openMenu() {
    document.body.classList.add("hn-more-menu-is-open");
    toggle.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    document.body.classList.remove("hn-more-menu-is-open");
    toggle.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  }

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (document.body.classList.contains("hn-more-menu-is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
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

  const footer = document.querySelector(".hn-shared-footer");

  if (footer && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .getElementById("hnSharedFloatingShare")
              ?.classList.add("is-hidden-by-footer");
          } else {
            document
              .getElementById("hnSharedFloatingShare")
              ?.classList.remove("is-hidden-by-footer");
          }
        });
      },
      {
        root: null,
        threshold: 0.02
      }
    );

    footerObserver.observe(footer);
  }
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

  const activeLinks = document.querySelectorAll(`[data-nav="${active.key}"]`);
  activeLinks.forEach((link) => link.classList.add("is-active"));
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
