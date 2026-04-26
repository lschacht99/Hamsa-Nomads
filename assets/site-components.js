const BASE = ""; 
// If your site is on hamsanomads.com, keep BASE = "";
// If your site is on github.io/Hamsa-Nomads, use:
// const BASE = "/Hamsa-Nomads";

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a href="${BASE}/index.html" class="brand">
          <img class="brand-logo" src="${BASE}/logo/logo-hamsa-nomads.png" alt="Hamsa Nomads logo" />
          <div class="brand-text">
            <div class="brand-name">Hamsa Nomads</div>
            <div class="brand-sub">Kosher travel</div>
          </div>
        </a>

        <nav class="nav-links">
          <a href="${BASE}/index.html#experience">Experience</a>
          <a href="${BASE}/index.html#gallery">Gallery</a>
          <a href="${BASE}/trips-page/trips.html">Upcoming trips</a>
          <a href="${BASE}/faq.html">FAQ</a>
          <a href="${BASE}/about-us/about-us.html">About us</a>
          <a href="${BASE}/Forms/apply.html" class="button">Join the retreat</a>
        </nav>
      </div>
    </header>
  `;
}

function insertSiteFooter() {
  const footerTarget = document.getElementById("site-footer");
  if (!footerTarget) return;

  footerTarget.innerHTML = `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-col footer-brand">
          <h2 class="footer-logo">HAMSA NOMADS</h2>
          <p class="footer-text">
            Curated kosher travel experiences for meaningful Jewish connection, beautiful places, and warm community.
          </p>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="${BASE}/index.html#experience">Experience</a></li>
            <li><a href="${BASE}/trips-page/trips.html">Trips</a></li>
            <li><a href="${BASE}/about-us/about-us.html">About us</a></li>
            <li><a href="${BASE}/index.html#pricing">Pricing</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Info</h4>
          <ul>
            <li><a href="${BASE}/faq.html">FAQ</a></li>
            <li><a href="${BASE}/terms.html">Terms</a></li>
            <li><a href="${BASE}/privacy.html">Privacy</a></li>
            <li>Shavuos in Vermont</li>
          </ul>
        </div>

        <div class="footer-col footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hamsanomads@gmail.com">hamsanomads@gmail.com</a></li>
            <li>Text: 347-988-8869</li>
            <li>New York, USA</li>
            <li><a href="${BASE}/Forms/apply.html">Join us for Shavuos</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 Hamsa Nomads — All rights reserved
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  insertSiteHeader();
  insertSiteFooter();
});
