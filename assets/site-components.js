const BASE = "";

function insertSiteHeader() {
  const headerTarget = document.getElementById("site-header");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="hn-shared-header">
      <div class="hn-shared-container hn-shared-nav">
        <a href="${BASE}/index.html" class="hn-shared-brand">
          <img
            class="hn-shared-brand-logo"
            src="${BASE}/logo/logo-hamsa-nomads.png"
            alt="Hamsa Nomads logo"
          />

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
        <div class="hn-shared-footer-col hn-shared-footer-brand">
          <div class="hn-shared-footer-logo-row">
            <img
              class="hn-shared-footer-logo-img"
              src="${BASE}/logo/logo-hamsa-nomads.png"
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

          <a class="hn-shared-footer-cta" href="${BASE}/Forms/apply.html">
            Join us for Shavuos
          </a>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="${BASE}/index.html#experience">Experience</a></li>
            <li><a href="${BASE}/index.html#gallery">Gallery</a></li>
            <li><a href="${BASE}/trips-page/trips.html">Trips</a></li>
            <li><a href="${BASE}/about-us/about-us.html">About us</a></li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Retreat</h4>
          <ul>
            <li><a href="${BASE}/index.html#pricing">Pricing</a></li>
            <li><a href="${BASE}/Forms/apply.html">Apply</a></li>
            <li>Shavuos in Vermont</li>
            <li>Private home</li>
          </ul>
        </div>

        <div class="hn-shared-footer-col">
          <h4>Info</h4>
          <ul>
            <li><a href="${BASE}/faq.html">FAQ</a></li>
            <li><a href="${BASE}/terms.html">Terms</a></li>
            <li><a href="${BASE}/privacy.html">Privacy</a></li>
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

document.addEventListener("DOMContentLoaded", () => {
  insertSiteHeader();
  insertSiteFooter();
  insertFloatingShare();
});
