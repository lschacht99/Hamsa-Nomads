const BASE = "";

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
          <a href="${BASE}/index.html#experience" data-nav="experience">Experience</a>
          <a href="${BASE}/index.html#gallery" data-nav="gallery">Gallery</a>
          <a href="${BASE}/trips-page/trips.html" data-nav="trips">Upcoming trips</a>
          <a href="${BASE}/faq.html" data-nav="faq">FAQ</a>
          <a href="${BASE}/about-us/about-us.html" data-nav="about">About us</a>
          <a href="${BASE}/Forms/apply.html" class="button" data-nav="apply">Join the retreat</a>
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

function insertFloatingShare() {
  if (document.getElementById("globalFloatingShare")) return;

  const shareHTML = `
    <div class="floating-share" id="globalFloatingShare">
      <button class="share-main-btn" id="globalShareBtn" type="button" aria-label="Share this page">
        Share around you
      </button>

      <div class="share-options" id="globalShareOptions">
        <a id="globalWhatsappShare" target="_blank" rel="noopener">WhatsApp</a>
        <a id="globalFacebookShare" target="_blank" rel="noopener">Facebook</a>
        <a id="globalEmailShare">Email</a>
        <button id="globalCopyLinkBtn" type="button">Copy link</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", shareHTML);

  const shareBtn = document.getElementById("globalShareBtn");
  const shareOptions = document.getElementById("globalShareOptions");
  const copyLinkBtn = document.getElementById("globalCopyLinkBtn");

  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title || "Hamsa Nomads");

  document.getElementById("globalWhatsappShare").href =
    `https://wa.me/?text=${pageTitle}%20${pageUrl}`;

  document.getElementById("globalFacebookShare").href =
    `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

  document.getElementById("globalEmailShare").href =
    `mailto:?subject=${pageTitle}&body=${pageUrl}`;

  shareBtn.addEventListener("click", async () => {
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
        // If native share is cancelled or unavailable, open the custom menu.
      }
    }

    shareOptions.classList.toggle("open");
  });

  copyLinkBtn.addEventListener("click", async () => {
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
    if (!event.target.closest(".floating-share")) {
      shareOptions.classList.remove("open");
    }
  });
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
  if (activeLink) activeLink.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  insertSiteHeader();
  insertSiteFooter();
  insertFloatingShare();
});
