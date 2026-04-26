const BASE = "";
// Keep BASE = "" for hamsanomads.com.
// If you deploy only on GitHub Pages under a repo path, use: const BASE = "/Hamsa-Nomads";

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="hn-shared-header">
      <div class="hn-shared-container hn-shared-nav">
        <a href="${BASE}/index.html" class="hn-shared-brand" aria-label="Hamsa Nomads home">
          <img class="hn-shared-brand-logo" src="${BASE}/logo/logo-hamsa-nomads.png" alt="Hamsa Nomads logo" />
          <div class="hn-shared-brand-text">
            <div class="hn-shared-brand-name">Hamsa Nomads</div>
            <div class="hn-shared-brand-sub">Kosher travel</div>
          </div>
        </a>

        <nav class="hn-shared-nav-links" aria-label="Main navigation">
          <a href="${BASE}/index.html#experience" data-nav="experience">Experience</a>
          <a href="${BASE}/index.html#gallery" data-nav="gallery">Gallery</a>
          <a href="${BASE}/trips-page/trips.html" data-nav="trips">Upcoming trips</a>
          <a href="${BASE}/faq.html" data-nav="faq">FAQ</a>
          <a href="${BASE}/about-us/about-us.html" data-nav="about">About us</a>
          <a href="${BASE}/Forms/apply.html" class="hn-shared-button" data-nav="apply">Join the retreat</a>
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
            <img src="${BASE}/logo/logo-hamsa-nomads.png" alt="Hamsa Nomads logo" class="hn-shared-footer-logo-img" />
            <div>
              <h2 class="hn-shared-footer-logo">Hamsa Nomads</h2>
              <p class="hn-shared-footer-tagline">Curated kosher travel experiences</p>
            </div>
          </div>

          <p class="hn-shared-footer-text">
            Meaningful Jewish travel, beautiful places, warm community, and small curated retreats built around connection.
          </p>

          <a href="${BASE}/Forms/apply.html" class="hn-shared-footer-cta">
            Join the Shavuos retreat
          </a>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Retreat</h4>
          <ul>
            <li><a href="${BASE}/index.html#experience">Experience</a></li>
            <li><a href="${BASE}/index.html#gallery">The house</a></li>
            <li><a href="${BASE}/index.html#details">Weekend rhythm</a></li>
            <li><a href="${BASE}/index.html#pricing">Pricing</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="${BASE}/trips-page/trips.html">Upcoming trips</a></li>
            <li><a href="${BASE}/about-us/about-us.html">About us</a></li>
            <li><a href="${BASE}/faq.html">FAQ</a></li>
            <li><a href="${BASE}/Forms/apply.html">Apply</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${BASE}/terms.html">Terms & Conditions</a></li>
            <li><a href="${BASE}/privacy.html">Privacy Policy</a></li>
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
    { key: "faq", match: "/faq.html" },
    { key: "trips", match: "/trips-page/trips.html" },
    { key: "about", match: "/about-us/about-us.html" },
    { key: "apply", match: "/Forms/apply.html" }
  ];

  const active = navMap.find(item => path.endsWith(item.match));
  if (!active) return;

  const activeLink = document.querySelector(`[data-nav="${active.key}"]`);
  if (activeLink) activeLink.classList.add("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  insertSiteHeader();
  insertSiteFooter();
});
