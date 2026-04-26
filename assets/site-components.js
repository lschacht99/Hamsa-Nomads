const BASE = document.currentScript?.dataset.base || "";

function withBase(path) {
  return `${BASE}${path}`;
}

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="hn-shared-header">
      <div class="hn-shared-container hn-shared-nav">
        <a href="${withBase("index.html")}" class="hn-shared-brand" aria-label="Hamsa Nomads home">
          <img class="hn-shared-brand-logo" src="${withBase("Image/logo-hamsa-nomads.png")}" alt="Hamsa Nomads logo" />
          <div class="hn-shared-brand-text">
            <div class="hn-shared-brand-name">Hamsa Nomads</div>
            <div class="hn-shared-brand-sub">Kosher travel</div>
          </div>
        </a>

        <nav class="hn-shared-nav-links" aria-label="Main navigation">
          <a href="${withBase("index.html#experience")}" data-nav="experience">Experience</a>
          <a href="${withBase("index.html#gallery")}" data-nav="gallery">Gallery</a>
          <a href="${withBase("trips-page/trips.html")}" data-nav="trips">Upcoming trips</a>
          <a href="${withBase("faq.html")}" data-nav="faq">FAQ</a>
          <a href="${withBase("about-us/about-us.html")}" data-nav="about">About us</a>
          <a href="${withBase("Forms/apply.html")}" class="hn-shared-button" data-nav="apply">Join the retreat</a>
        </nav>
      </div>
    </header>
  `;

  markActiveNav();
}

function insertSiteFooter() {
  const footerTarget = document.getElementById("site-footer");
  if (!footerTarget) return;

  footerTarget.innerHTML = `
    <footer class="hn-shared-footer">
      <div class="hn-shared-footer-container">

        <div class="hn-shared-footer-brand">
          <div class="hn-shared-footer-logo-row">
            <img src="${withBase("Image/logo-hamsa-nomads.png")}" alt="Hamsa Nomads logo" class="hn-shared-footer-logo-img" />
            <div>
              <h2 class="hn-shared-footer-logo">Hamsa Nomads</h2>
              <p class="hn-shared-footer-tagline">Curated kosher travel experiences</p>
            </div>
          </div>

          <p class="hn-shared-footer-text">
            Meaningful Jewish travel, beautiful places, warm community, and small curated retreats built around connection.
          </p>

          <a href="${withBase("Forms/apply.html")}" class="hn-shared-footer-cta">
            Join the Shavuos retreat
          </a>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Retreat</h4>
          <ul>
            <li><a href="${withBase("index.html#experience")}">Experience</a></li>
            <li><a href="${withBase("index.html#gallery")}">The house</a></li>
            <li><a href="${withBase("index.html#details")}">Weekend rhythm</a></li>
            <li><a href="${withBase("index.html#pricing")}">Pricing</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="${withBase("trips-page/trips.html")}">Upcoming trips</a></li>
            <li><a href="${withBase("about-us/about-us.html")}">About us</a></li>
            <li><a href="${withBase("faq.html")}">FAQ</a></li>
            <li><a href="${withBase("Forms/apply.html")}">Apply</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${withBase("terms.html")}">Terms & Conditions</a></li>
            <li><a href="${withBase("privacy.html")}">Privacy Policy</a></li>
            <li>New York, USA</li>
          </ul>
        </div>

        <div class="hn-shared-footer-col hn-shared-footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hamsanomads@gmail.com">hamsanomads@gmail.com</a></li>
            <li><a href="tel:+13479888869">347-988-8869</a></li>
            <li>Shavuos in Vermont</li>
          </ul>
        </div>

      </div>

      <div class="hn-shared-footer-bottom">
        <span>© 2026 Hamsa Nomads. All rights reserved.</span>
        <span>Small curated kosher travel experiences.</span>
      </div>
    </footer>
  `;
}

function markActiveNav() {
  const path = window.location.pathname;

  const navMap = [
    { key: "faq", match: "faq.html" },
    { key: "trips", match: "trips-page/trips.html" },
    { key: "about", match: "about-us/about-us.html" },
    { key: "apply", match: "Forms/apply.html" }
  ];

  const normalizedPath = path.replace(/^\/+/, "");
  const active = navMap.find(item => normalizedPath.endsWith(item.match));

  if (!active) return;

  const activeLink = document.querySelector(`[data-nav="${active.key}"]`);
  if (activeLink) activeLink.classList.add("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  insertSiteHeader();
  insertSiteFooter();
});
