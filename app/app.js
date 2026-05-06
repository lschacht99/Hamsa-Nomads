const HN = {
  config: window.HN_APP_CONFIG || {},
  data: { cities: [], experiences: [], activities: [], community: null },
  routes: {
    home: 'home.html',
    guides: 'guides.html',
    trips: 'trips.html',
    community: 'community.html',
    profile: 'profile.html',
    activities: 'activities.html',
    login: 'login.html',
    signup: 'signup.html'
  }
};

const icons = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V21h14V10.5"/><path d="M9.5 21v-6h5v6"/></svg>',
  explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z"/></svg>',
  trips: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M4 12h16M9 7v14M15 7v14"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 20c0-2.3-1.8-4-4-4s-4 1.7-4 4"/><circle cx="12" cy="10" r="3"/><path d="M20 20c0-1.8-1.1-3.2-2.8-3.8"/><path d="M17 8.2a2.4 2.4 0 0 1 0 4.6"/><path d="M4 20c0-1.8 1.1-3.2 2.8-3.8"/><path d="M7 8.2a2.4 2.4 0 0 0 0 4.6"/></svg>',
  profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.4-4 4.1-6 8-6s6.6 2 8 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  candle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 12h3v9H8zM15 12h3v9h-3z"/><path d="M9.5 12c-1.4-1.4-1.2-3 .4-4.7 1.4 1.4 1.7 3.2-.4 4.7ZM16.5 12c-1.4-1.4-1.2-3 .4-4.7 1.4 1.4 1.7 3.2-.4 4.7Z"/><path d="M6 21h14"/></svg>',
  food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 3v8M4.5 3v8M9.5 3v8M4.5 11h5"/><path d="M7 11v10"/><path d="M17 3c2 2.5 2.5 5.3 0 8v10"/></svg>',
  hamsa: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor"><circle cx="32" cy="32" r="25"/><path d="M22 39c5-7 10-10 18-17"/><path d="M24 22h16v16"/><circle cx="32" cy="32" r="4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 8.4c0 6-8.8 11-8.8 11S3.2 14.4 3.2 8.4A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.4Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z"/><path d="M4 19.5A3.5 3.5 0 0 1 7.5 16H20"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8 8 12l8 4"/><circle cx="18" cy="7" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="17" r="3"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.8-4 4.4-6 8-6s6.2 2 8 6"/></svg>',
  credit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>'
};

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}


function logoSrc(key, fallback = '') {
  const logos = HN.config.logoAssets || {};
  return logos[key] || fallback;
}


function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

async function getJSON(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Could not load ${path}`);
  return res.json();
}

async function loadData() {
  const needCities = document.querySelector('[data-cities], [data-city-detail]');
  const needExperiences = document.querySelector('[data-experiences], [data-experience-detail]');
  const needCommunity = document.querySelector('[data-community-form]');
  const needActivities = document.querySelector('[data-activities], [data-activity-detail], [data-profile]');
  const jobs = [];
  if (needCities) jobs.push(getJSON('data/cities.json').then(data => HN.data.cities = data));
  if (needExperiences) jobs.push(getJSON('data/experiences.json').then(data => HN.data.experiences = data));
  if (needActivities) jobs.push(getJSON('data/activities.json').then(data => HN.data.activities = data));
  if (needCommunity) jobs.push(getJSON('data/community.json').then(data => HN.data.community = data));
  await Promise.all(jobs);
}

function hamsaSVG(extraClass = '') {
  return `<svg class="${extraClass}" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M44 126c-27-24-35-49-23-62 12-13 34 9 44 33V44c0-22 28-22 28 0v63V22c0-25 34-25 34 0v85V44c0-22 27-22 27 0v64c9-23 31-42 43-28 17 20-12 57-43 86-32 30-63 43-105 17"/>
    <path d="M50 161c39 14 82 12 121-6"/>
    <path d="M77 128c25 26 56 27 78 1"/>
  </svg>`;
}

function routeLine() {
  return `<div class="route-line"><svg viewBox="0 0 420 88" preserveAspectRatio="none"><path d="M10 68 C72 18 100 70 154 38 C207 6 244 86 304 44 C346 14 368 42 410 18"/><circle cx="10" cy="68" r="4"/><circle cx="410" cy="18" r="4"/></svg></div>`;
}


function brandRouteAnimation(mode = 'home') {
  const compact = mode === 'welcome' ? 'welcome-route-animation' : 'brand-route-animation';
  return `<section class="${compact}" aria-label="Animated Hamsa Nomads route map">
    <svg class="route-map-svg" viewBox="0 0 420 240" preserveAspectRatio="none" aria-hidden="true">
      <path class="route-shadow" d="M26 168 C78 76 131 128 170 84 C221 27 261 166 318 95 C350 55 377 61 404 37" />
      <path class="route-main" d="M26 168 C78 76 131 128 170 84 C221 27 261 166 318 95 C350 55 377 61 404 37" />
      <circle class="route-dot" cx="26" cy="168" r="5" />
      <circle class="route-dot" cx="205" cy="102" r="5" />
      <circle class="route-dot" cx="404" cy="37" r="5" />
    </svg>
    <a class="route-float-card card-one" href="guides.html"><span>Start here</span><strong>Guides</strong></a>
    <a class="route-float-card card-two" href="trips.html"><span>Next door</span><strong>Retreats</strong></a>
    <div class="route-orb" aria-hidden="true"><span class="route-orb-dot"></span></div>
  </section>`;
}

function topbar(options = {}) {
  const logo = options.compactLogo ? `<img src="${logoSrc('horizontalIcon')}" alt="Hamsa Nomads" class="topbar-logo">` : `<img src="${logoSrc('horizontalIcon')}" alt="Hamsa Nomads" class="topbar-logo">`;
  const left = options.back ? `<button class="icon-button" data-back aria-label="Back">${icons.back}</button>` : `<button class="icon-button" data-menu aria-label="Menu">${icons.menu}</button>`;
  const right = options.right || `<a class="icon-button" href="profile.html" aria-label="Profile">${icons.profile}</a>`;
  return `<header class="topbar">${left}<a class="logo-wordmark logo-wordmark-image" href="home.html">${logo}</a>${right}</header>`;
}

function statusbar() { return ''; }

function nav(active = 'home') {
  const items = [
    ['home', 'Home', 'home.html', icons.home],
    ['explore', 'Explore', 'guides.html', icons.explore],
    ['trips', 'Trips', 'trips.html', icons.trips],
    ['community', 'Community', 'community.html', icons.people],
    ['profile', 'Profile', 'profile.html', icons.profile]
  ];
  return `<nav class="bottom-nav" aria-label="Main navigation">${items.map(([key, label, href, icon]) => `<a class="nav-item ${active === key ? 'active' : ''}" href="${href}">${icon}<span>${label}</span></a>`).join('')}</nav>`;
}



function optionalImage(src, className = 'data-card-image', alt = '') {
  if (!src) return '';
  return `<img class="${className}" src="${src}" alt="${alt}">`;
}

function sectionIllustration(type) {
  const art = {
    current: `${icons.people}`,
    upcoming: `${icons.trips}`,
    escape: `${icons.lock}`
  };
  return `<div class="section-illustration section-illustration-${type}">${art[type] || icons.trips}</div>`;
}

function guideCard(city) {
  return `<a class="guide-card" href="city.html?id=${city.id}">
    ${city.image ? optionalImage(city.image, 'guide-card-photo', city.name) : `<div class="visual-tile ${city.accent || 'sand'}"></div>`}
    <div class="card-body">
      <h3 class="card-title">${city.name}</h3>
      <p class="card-text">${city.subtitle}</p>
      <div class="card-foot"><span class="tiny-pill ${city.accent || ''}">${city.country}</span><span aria-hidden="true">♡</span></div>
    </div>
  </a>`;
}

function cityListCard(city) {
  return `<a class="card list-card" href="city.html?id=${city.id}">
    ${city.image ? optionalImage(city.image, 'list-card-photo', city.name) : `<div class="visual-tile ${city.accent || 'sand'}"></div>`}
    <div>
      <span class="tiny-pill ${city.accent || ''}">${city.region}</span>
      <h3>${city.name}</h3>
      <p>${city.subtitle}</p>
    </div>
  </a>`;
}

function experienceCard(exp) {
  return `<a class="experience-card" href="experience.html?id=${exp.id}">
    <div>
      <span class="tiny-pill ${exp.accent || ''}">${exp.type}</span>
      <h3>${exp.title}</h3>
      <p>${exp.short}</p>
    </div>
    ${exp.image ? optionalImage(exp.image, 'experience-photo', exp.title) : `<div class="experience-art ${exp.accent || ''}"></div>`}
  </a>`;
}

function renderHome() {
  const root = $('[data-home]');
  if (!root) return;
  const cities = HN.data.cities.slice(0, 4);
  const experiences = HN.data.experiences.slice(0, 2);
  const activities = HN.data.activities.slice(0, 2);

  root.innerHTML = `
    ${statusbar()}
    ${topbar()}
    <section class="page-heading">
      <div class="eyebrow">Jewish travel network</div>
      <h1 class="brand-title compact">Find your people, wherever you go.</h1>
      <p>Guides, community access, retreats, and city-based experiences for Jewish and kosher travelers.</p>
    </section>

    <label class="search-box" aria-label="Search guides">
      ${icons.search}<input id="homeSearch" type="search" placeholder="Search cities, guides, experiences...">
    </label>

    <section class="one-line-actions" aria-label="Main actions">
      <a href="guides.html"><span>${icons.pin}</span><strong>Explore</strong><small>City guides</small></a>
      <a href="community.html"><span>${icons.people}</span><strong>Community</strong><small>Request access</small></a>
      <a href="activities.html"><span>${icons.lock}</span><strong>Activities</strong><small>Coming soon</small></a>
    </section>

    <section class="network-now-section">
      <div class="section-head"><h2>Community activities</h2><a href="activities.html">See all</a></div>
      <div class="network-now-grid">
        ${experiences.map(experienceCard).join('')}
        ${activities.map(activityCard).join('')}
      </div>
    </section>

    ${brandRouteAnimation('home')}

    <section class="home-story-card compact-story">
      <div class="eyebrow">About Hamsa Nomads</div>
      <h2>A travel network built around people.</h2>
      <p>We are building a warmer way to travel Jewish: practical kosher notes, real community access, hosted experiences, and local city knowledge that grows over time.</p>
    </section>

    <section>
      <div class="section-head"><h2>Featured guides</h2><a href="guides.html">See all</a></div>
      <div class="horizontal-scroll">${cities.map(guideCard).join('')}</div>
    </section>
  `;

  const search = $('#homeSearch');
  search?.addEventListener('keydown', event => {
    if (event.key === 'Enter' && search.value.trim()) {
      location.href = `guides.html?q=${encodeURIComponent(search.value.trim())}`;
    }
  });
}

function renderGuides() {
  const root = $('[data-cities]');
  if (!root) return;
  const initialQuery = qs('q') || '';
  const initialTag = qs('tag') || '';
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true })}
    <section class="page-heading">
      <div class="eyebrow">City guides</div>
      <h1>Explore the network.</h1>
      <p>Browse city guides by region, map, and local community notes.</p>
    </section>
    ${routeLine()}
    <section class="live-map-card green-map-card">
      <div class="section-head"><h2>Explore on the map</h2></div>
      <div id="cityMap" class="city-map"></div>
      <div class="map-help">Move around the map and tap a city marker to open the guide.</div>
    </section>
    <label class="search-box" aria-label="Search city guides">
      ${icons.search}<input id="guideSearch" type="search" value="${initialQuery || initialTag}" placeholder="Search city, tag, region...">
    </label>
    <div class="tag-row">
      ${['Kosher Food', 'Shabbat', 'Community', 'Events', 'Heritage', 'Cross-Border'].map(tag => `<button class="pill ${tag === initialTag ? 'sage' : ''}" data-filter-tag="${tag}">${tag}</button>`).join('')}
    </div>
    <div class="list-grid" id="guideList"></div>
    <section class="suggest-city-card">
      <h2>Suggest a new city</h2>
      <p>Want Hamsa Nomads to build a guide for a new destination?</p>
      <button class="btn btn-secondary" type="button" data-suggest-city-open>Suggest a city</button>
    </section>
  `;
  const list = $('#guideList');
  const input = $('#guideSearch');
  let activeTag = initialTag;
  initCityMap();
  function draw() {
    const q = (input.value || '').toLowerCase().trim();
    const filtered = HN.data.cities.filter(city => {
      const haystack = [city.name, city.country, city.region, city.subtitle, ...(city.tags || [])].join(' ').toLowerCase();
      const matchesQ = !q || haystack.includes(q);
      const matchesTag = !activeTag || (city.tags || []).includes(activeTag);
      return matchesQ && matchesTag;
    });

    const regionOrder = ['North America', 'Middle East', 'Europe', 'Asia', 'South America', 'Africa'];
    const grouped = filtered.reduce((acc, city) => {
      const region = city.region || 'Other';
      if (!acc[region]) acc[region] = [];
      acc[region].push(city);
      return acc;
    }, {});

    const orderedRegions = [
      ...regionOrder.filter(region => grouped[region]),
      ...Object.keys(grouped).filter(region => !regionOrder.includes(region)).sort()
    ];

    list.innerHTML = filtered.length
      ? orderedRegions.map(region => `
        <section class="region-group">
          <div class="region-heading">
            <h2>${region}</h2>
            <span>${grouped[region].length} ${grouped[region].length === 1 ? 'city' : 'cities'}</span>
          </div>
          <div class="list-grid">${grouped[region].map(cityListCard).join('')}</div>
        </section>
      `).join('')
      : `<div class="empty-state"><h2>No guide yet</h2><p>Add this city to <code>data/cities.json</code> when you are ready.</p></div>`;
  }
  input.addEventListener('input', () => { activeTag = ''; draw(); });
  $all('[data-filter-tag]').forEach(button => {
    button.addEventListener('click', () => {
      activeTag = activeTag === button.dataset.filterTag ? '' : button.dataset.filterTag;
      input.value = activeTag;
      $all('[data-filter-tag]').forEach(b => b.classList.toggle('sage', b.dataset.filterTag === activeTag));
      draw();
    });
  });
  draw();
}



function renderSuggestCityForm() {
  const root = document.querySelector('[data-suggest-city-form]');
  if (!root) return;
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true })}
    <section class="page-heading">
      <div class="eyebrow">Suggest a new city</div>
      <h1>Help us choose the next destination.</h1>
      <p>Tell us which city you want Hamsa Nomads to build next.</p>
    </section>
    <form class="form-card" id="suggestCityForm">
      <div class="form-row"><label for="cityName">City name</label><input id="cityName" name="cityName" required></div>
      <div class="form-row"><label for="country">Country</label><input id="country" name="country" required></div>
      <div class="form-row"><label for="why">Why this city?</label><textarea id="why" name="why" placeholder="Kosher food, community, events, travel value..."></textarea></div>
      <div class="form-row"><label for="email">Your email</label><input id="email" name="email" type="email"></div>
      <button class="btn btn-primary full" type="submit">Send suggestion</button>
      <div class="success-box" id="suggestSuccess"><h3>Suggestion sent</h3><p>We saved your city suggestion.</p></div>
    </form>`;
  document.getElementById('suggestCityForm').addEventListener('submit', handleSuggestCitySubmit);
}

async function handleSuggestCitySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const success = document.getElementById('suggestSuccess');
  const data = Object.fromEntries(new FormData(form).entries());
  data.timestamp = new Date().toISOString();
  data.source = 'Hamsa Nomads Suggest City';
  button.disabled = true;
  button.textContent = 'Sending...';
  try {
    if (HN.config.suggestCityFormEndpoint) {
      await fetch(HN.config.suggestCityFormEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    } else {
      const existing = JSON.parse(localStorage.getItem('hnSuggestCityRequests') || '[]');
      existing.push(data);
      localStorage.setItem('hnSuggestCityRequests', JSON.stringify(existing));
    }
    success.classList.add('show');
    form.reset();
    button.textContent = 'Sent';
  } catch (e) {
    alert('The form could not send. The suggestion was saved locally.');
  } finally {
    setTimeout(() => { button.disabled = false; if (!success.classList.contains('show')) button.textContent = 'Send suggestion'; }, 700);
  }
}



function cityToMapPoint(city) {
  const lat = city.coords?.lat ?? 0;
  const lng = city.coords?.lng ?? 0;
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x: Math.max(6, Math.min(94, x)), y: Math.max(8, Math.min(88, y)) };
}

function drawMapFallbackNotice(el) {
  const points = HN.data.cities.filter(c => c.coords);
  el.innerHTML = `
    <div class="map-canvas">
      <svg viewBox="0 0 100 58" preserveAspectRatio="none" aria-hidden="true">
        <path class="map-land land-one" d="M11 20 C18 10 30 10 36 18 C45 7 60 9 70 18 C82 16 91 24 89 35 C81 39 73 38 66 46 C55 55 42 50 36 43 C29 49 17 46 12 38 C7 31 7 25 11 20Z"/>
        <path class="map-land land-two" d="M9 41 C17 37 25 38 32 44 C41 52 51 53 60 46 C68 40 80 42 91 49"/>
        <path class="map-route" d="M18 32 C30 18 39 38 51 27 C64 15 70 40 84 23"/>
      </svg>
      ${points.map(city => {
        const p = cityToMapPoint(city);
        return `<a class="city-marker" style="left:${p.x}%;top:${p.y}%;" href="city.html?id=${city.id}" aria-label="${city.name}">
          <span></span><strong>${city.name}</strong>
        </a>`;
      }).join('')}
      <div class="map-offline-note">Map tiles did not load. The city markers still work.</div>
    </div>`;
}

function initCityMap() {
  const el = document.getElementById('cityMap');
  if (!el) return;
  const points = HN.data.cities.filter(c => c.coords);
  if (!window.L) {
    drawMapFallbackNotice(el);
    return;
  }

  el.innerHTML = '';
  const map = L.map(el, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([35, 0], 2);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    crossOrigin: true,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const bounds = [];
  points.forEach(city => {
    const marker = L.marker([city.coords.lat, city.coords.lng]).addTo(map);
    marker.bindPopup(`<strong>${city.name}</strong><br>${city.country}<br><a href="city.html?id=${city.id}">Open guide</a>`);
    bounds.push([city.coords.lat, city.coords.lng]);
  });

  if (bounds.length) map.fitBounds(bounds, { padding: [26, 26] });
  setTimeout(() => map.invalidateSize(), 150);
}

function renderCityDetail() {
  const root = $('[data-city-detail]');
  if (!root) return;
  const id = qs('id') || 'jerusalem';
  const city = HN.data.cities.find(c => c.id === id) || HN.data.cities[0];
  if (!city) return;
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true, right: `<button class="icon-button" aria-label="Share">${icons.share}</button>` })}
    <section class="hero-card">
      <div class="hero-illustration ${city.accent || ''}" role="img" aria-label="${city.heroLabel || city.name}"></div>
      <div class="eyebrow">City guide</div>
      <h1 class="detail-title">${city.name}</h1>
      <p>${city.subtitle}</p>
      <div class="tag-row">${city.tags.map(tag => `<span class="pill ${city.accent || ''}">${tag}</span>`).join('')}</div>
      <div class="stat-row">${city.stats.map(stat => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}</div>
    </section>
    <section class="content-section">
      <h2>About this guide</h2>
      <div class="info-card"><p>${city.description}</p></div>
    </section>
    <section class="content-section">
      <h2>Travel notes</h2>
      ${city.sections.map(section => `<article class="info-card"><h3>${section.title}</h3><p>${section.body}</p></article>`).join('')}
    </section>
    <section class="content-section">
      <h2>Build this page with</h2>
      <div class="place-list">${city.places.map(place => `<article class="place-row"><div class="place-icon">${place.type[0]}</div><div><h3>${place.name}</h3><p>${place.note}</p></div></article>`).join('')}</div>
    </section>
    <div class="sticky-actions">
      <a class="btn btn-primary" href="community.html">Ask the community</a>
      <button class="fav-button" data-fav="city:${city.id}" aria-label="Save guide">${icons.heart}</button>
    </div>
  `;
  hydrateFavButtons();
}

function renderTrips() {
  const root = $('[data-experiences]');
  if (!root) return;
  const currentItems = HN.data.experiences.slice(0, 2);
  const upcomingItems = HN.data.experiences.slice(2);
  const escapeItems = HN.data.activities.slice(0, 3);

  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true })}
    <section class="page-heading">
      <div class="eyebrow">What’s going on</div>
      <h1>Things to join, try, and build around.</h1>
      <p>Retreats, hosted weekends, city-based experiences, and membership activities as the network grows.</p>
    </section>

    <section class="trip-section-card">
      <div class="trip-section-head">
        <div>
          <div class="eyebrow">Now</div>
          <h2>Current</h2>
          <p>Experiences already active in the network.</p>
        </div>
        ${sectionIllustration('current')}
      </div>
      <div class="trip-card-grid">
        ${currentItems.map(experienceCard).join('')}
      </div>
    </section>

    <section class="trip-section-card">
      <div class="trip-section-head">
        <div>
          <div class="eyebrow">Soon</div>
          <h2>Upcoming</h2>
          <p>What’s coming next for Hamsa Nomads.</p>
        </div>
        ${sectionIllustration('upcoming')}
      </div>
      <div class="trip-card-grid">
        ${(upcomingItems.length ? upcomingItems : HN.data.experiences.slice(0,1)).map(exp => `
          <a class="trip-mini-row" href="experience.html?id=${exp.id}">
            <div>
              <small>${exp.type || 'Experience'} · ${exp.location || ''}</small>
              <h3>${exp.title}</h3>
              <p>${exp.description}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="trip-section-card">
      <div class="trip-section-head">
        <div>
          <div class="eyebrow">Membership</div>
          <h2>Escape games</h2>
          <p>City-based puzzle experiences we’ll add as the platform grows.</p>
        </div>
        ${sectionIllustration('escape')}
      </div>
      <div class="trip-card-grid">
        ${escapeItems.map(activityCard).join('')}
      </div>
    </section>
  `;
}

function renderExperienceDetail() {
  const root = $('[data-experience-detail]');
  if (!root) return;
  const id = qs('id') || 'vermont-shavuos';
  const exp = HN.data.experiences.find(e => e.id === id) || HN.data.experiences[0];
  if (!exp) return;
  const ctaHref = exp.ctaUrl || HN.config[exp.ctaUrlKey] || 'community.html';
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true, right: `<button class="icon-button" aria-label="Save">${icons.heart}</button>` })}
    <section class="hero-card">
      <div class="hero-illustration ${exp.accent || ''}"></div>
      <span class="pill ${exp.accent || ''}">${exp.type}</span>
      <h1 class="detail-title">${exp.title}</h1>
      <p>${exp.description}</p>
      <div class="stat-row">${exp.details.slice(0,3).map(detail => `<div class="stat"><strong>${detail.value}</strong><span>${detail.label}</span></div>`).join('')}</div>
    </section>
    <section class="content-section">
      <h2>Key details</h2>
      <div class="place-list">${exp.details.map(detail => `<article class="place-row"><div class="place-icon">${detail.label[0]}</div><div><h3>${detail.label}</h3><p>${detail.value}</p></div></article>`).join('')}</div>
    </section>
    <section class="content-section">
      <h2>What is included</h2>
      ${exp.included.map(item => `<article class="place-row"><div class="place-icon">✓</div><div><h3>${item}</h3></div></article>`).join('')}
    </section>
    <div class="sticky-actions">
      <a class="btn btn-primary" href="${ctaHref}">${exp.ctaLabel || 'Continue'}</a>
      <button class="fav-button" data-fav="experience:${exp.id}" aria-label="Save experience">${icons.heart}</button>
    </div>
  `;
  hydrateFavButtons();
}

function renderCommunityForm() {
  const root = $('[data-community-form]');
  if (!root) return;
  const content = HN.data.community || {};
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true })}
    <section class="page-heading">
      <div class="eyebrow">Community access</div>
      <h1>${content.headline || 'Request access'}</h1>
      <p>${content.subheadline || ''}</p>
    </section>
    <div class="safety-note"><strong>Note</strong><span>${content.safetyNote || 'Access is reviewed before invite links are shared.'}</span></div>
    <form class="form-card" id="communityForm">
      <div class="form-row"><label for="firstName">First name</label><input id="firstName" name="firstName" autocomplete="given-name" required></div>
      <div class="form-row"><label for="lastName">Last name</label><input id="lastName" name="lastName" autocomplete="family-name" required></div>
      <div class="form-row"><label for="age">Age</label><input id="age" name="age" inputmode="numeric" required></div>
      <div class="form-row"><label for="phone">Phone / WhatsApp</label><input id="phone" name="phone" autocomplete="tel" required></div>
      <div class="form-row"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
      <div class="form-row"><label for="based">Where are you based?</label><input id="based" name="based" placeholder="City, country"></div>
      <div class="form-row"><label for="about">Tell us a little about you</label><textarea id="about" name="about" placeholder="How do you travel? What kind of community are you looking for?"></textarea></div>
      <button class="btn btn-primary full" type="submit">Request WhatsApp Access</button>
      <div class="success-box" id="successBox"><h3>${content.successTitle || 'Request received'}</h3><p>${content.successBody || 'We will review your request.'}</p></div>
    </form>
  `;
  $('#communityForm').addEventListener('submit', handleCommunitySubmit);
}

async function handleCommunitySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const success = $('#successBox');
  const data = Object.fromEntries(new FormData(form).entries());
  data.timestamp = new Date().toISOString();
  data.source = 'Hamsa Nomads Web App';
  button.disabled = true;
  button.textContent = 'Sending...';
  try {
    if (HN.config.communityFormEndpoint) {
      await fetch(HN.config.communityFormEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } else {
      const existing = JSON.parse(localStorage.getItem('hnCommunityRequests') || '[]');
      existing.push(data);
      localStorage.setItem('hnCommunityRequests', JSON.stringify(existing));
    }
    success.classList.add('show');
    form.reset();
    button.textContent = 'Request sent';
    if (HN.config.redirectToWhatsappAfterSubmit && HN.config.whatsappInviteUrl) {
      setTimeout(() => { window.location.href = HN.config.whatsappInviteUrl; }, 900);
    }
  } catch (error) {
    alert('The form could not send. Your information was saved in this browser for now.');
    const existing = JSON.parse(localStorage.getItem('hnCommunityRequests') || '[]');
    existing.push(data);
    localStorage.setItem('hnCommunityRequests', JSON.stringify(existing));
  } finally {
    button.disabled = false;
    button.textContent = 'Request WhatsApp Access';
  }
}


function getAuthConfigMode() {
  return HN.config.authMode || 'local';
}

function getLocalUsers() {
  return JSON.parse(localStorage.getItem('hnUsers') || '[]');
}

function setLocalUsers(users) {
  localStorage.setItem('hnUsers', JSON.stringify(users));
}

function setCurrentUser(user) {
  if (!user) localStorage.removeItem('hnSession');
  else localStorage.setItem('hnSession', JSON.stringify({ id: user.id, name: user.name, email: user.email, createdAt: user.createdAt || new Date().toISOString() }));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('hnSession') || 'null');
}

function authRedirectTarget() {
  return qs('next') || localStorage.getItem('hnAfterLogin') || 'profile.html';
}

async function apiAuth(path, payload = null) {
  const base = (HN.config.authApiBase || '').replace(/\/$/, '');
  if (!base) throw new Error('authApiBase is missing. Use local mode or deploy the auth Worker.');
  const res = await fetch(`${base}${path}`, {
    method: payload ? 'POST' : 'GET',
    credentials: 'include',
    headers: payload ? { 'Content-Type': 'application/json' } : {},
    body: payload ? JSON.stringify(payload) : undefined
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Auth request failed');
  return data;
}

async function signupUser({ name, email, password }) {
  if (getAuthConfigMode() === 'api') {
    const data = await apiAuth('/api/auth/signup', { name, email, password });
    setCurrentUser(data.user);
    return data.user;
  }
  const users = getLocalUsers();
  const normalized = String(email || '').trim().toLowerCase();
  if (users.some(user => user.email === normalized)) throw new Error('An account already exists with this email.');
  if (!normalized.includes('@')) throw new Error('Enter a valid email.');
  if (!password || password.length < 6) throw new Error('Use at least 6 characters for the password.');
  const user = { id: `local_${Date.now()}`, name: name || normalized.split('@')[0], email: normalized, password, createdAt: new Date().toISOString(), role: 'member' };
  users.push(user);
  setLocalUsers(users);
  setCurrentUser(user);
  return user;
}

async function loginUser({ email, password }) {
  if (getAuthConfigMode() === 'api') {
    const data = await apiAuth('/api/auth/login', { email, password });
    setCurrentUser(data.user);
    return data.user;
  }
  const normalized = String(email || '').trim().toLowerCase();
  const user = getLocalUsers().find(item => item.email === normalized && item.password === password);
  if (!user) throw new Error('Wrong email or password.');
  setCurrentUser(user);
  return user;
}

async function logoutUser() {
  if (getAuthConfigMode() === 'api' && HN.config.authApiBase) {
    try { await apiAuth('/api/auth/logout', {}); } catch (error) {}
  }
  setCurrentUser(null);
}

function paidAccessList() {
  return JSON.parse(localStorage.getItem('hnPaidAccess') || '[]');
}

function hasPaidAccess(id) {
  return paidAccessList().includes(id);
}

function addPaidAccess(id) {
  const access = paidAccessList();
  if (!access.includes(id)) {
    access.push(id);
    localStorage.setItem('hnPaidAccess', JSON.stringify(access));
  }
}

function joinActivityWaitlist(activity) {
  const user = getCurrentUser();
  const list = JSON.parse(localStorage.getItem('hnActivityWaitlist') || '[]');
  list.push({ activityId: activity.id, title: activity.title, email: user?.email || '', name: user?.name || '', timestamp: new Date().toISOString() });
  localStorage.setItem('hnActivityWaitlist', JSON.stringify(list));
}

function requireLogin(nextUrl) {
  const user = getCurrentUser();
  if (user) return true;
  localStorage.setItem('hnAfterLogin', nextUrl || location.pathname.split('/').pop() + location.search);
  location.href = `login.html?next=${encodeURIComponent(nextUrl || location.pathname.split('/').pop() + location.search)}`;
  return false;
}

function authTopRight() {
  const user = getCurrentUser();
  if (user) return `<a class="ghost-icon-button" href="profile.html" aria-label="Profile">${icons.user}</a>`;
  return `<a class="btn btn-small btn-soft" href="login.html">Log in</a>`;
}

function activityCard(activity) {
  const locked = activity.access === 'paid' && !hasPaidAccess(activity.id);
  return `<a class="experience-card activity-card" href="activity.html?id=${activity.id}">
    <div>
      <span class="tiny-pill ${activity.accent || ''}">${activity.type}</span>
      <h3>${activity.title}</h3>
      <p>${activity.short}</p>
      <div class="mini-meta"><span>${activity.duration}</span><span>${activity.players}</span></div>
    </div>
    ${activity.image ? optionalImage(activity.image, 'experience-photo', activity.title) : `<div class="activity-badge ${locked ? 'locked' : 'open'}">${locked ? icons.lock : icons.check}<span>${locked ? activity.priceDisplay : 'Unlocked'}</span></div>`}
  </a>`;
}

function renderAuthPage() {
  const root = $('[data-auth]');
  if (!root) return;
  const mode = root.dataset.auth || 'login';
  const isSignup = mode === 'signup';
  const user = getCurrentUser();
  if (user) {
    location.href = authRedirectTarget();
    return;
  }
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true, right: '' })}
    <section class="page-heading">
      <div class="eyebrow">Member access</div>
      <h1>${isSignup ? 'Create your travel profile.' : 'Log in to your Hamsa account.'}</h1>
      <p>${isSignup ? 'Use this for saved guides, reviewed community access, and future paid activities.' : 'Continue to saved guides, community access, and future unlocked games.'}</p>
    </section>
    <form class="form-card auth-card" id="authForm">
      ${isSignup ? `<div class="form-row"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required></div>` : ''}
      <div class="form-row"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
      <div class="form-row"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="${isSignup ? 'new-password' : 'current-password'}" required></div>
      <button class="btn btn-primary full" type="submit">${isSignup ? 'Create Account' : 'Log In'}</button>
      <p class="form-hint">${getAuthConfigMode() === 'local' ? 'Launch demo mode: this works in-browser only. Switch to Cloudflare Worker auth before collecting real user passwords.' : 'Secure API mode is enabled.'}</p>
      <div class="auth-switch">${isSignup ? 'Already have an account?' : 'New here?'} <a href="${isSignup ? 'login.html' : 'signup.html'}${qs('next') ? `?next=${encodeURIComponent(qs('next'))}` : ''}">${isSignup ? 'Log in' : 'Create account'}</a></div>
      <div class="error-box" id="authError"></div>
    </form>
  `;
  $('#authForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const error = $('#authError');
    error.classList.remove('show');
    button.disabled = true;
    button.textContent = isSignup ? 'Creating...' : 'Logging in...';
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      if (isSignup) await signupUser(payload);
      else await loginUser(payload);
      location.href = authRedirectTarget();
    } catch (err) {
      error.textContent = err.message || 'Something went wrong.';
      error.classList.add('show');
    } finally {
      button.disabled = false;
      button.textContent = isSignup ? 'Create Account' : 'Log In';
    }
  });
}

function renderActivities() {
  const root = $('[data-activities]');
  if (!root) return;
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true, right: authTopRight() })}
    <section class="page-heading">
      <div class="eyebrow">Paid activity layer</div>
      <h1>Build experiences that can grow after launch.</h1>
      <p>This page is a future revenue layer for AI-built escape games, city missions, and Shabbat-friendly table games. It is intentionally ready but not blocking the app launch.</p>
    </section>
    <div class="safety-note"><strong>Launch strategy</strong><span>Show the concept now, collect interest, and plug in payment links only when the first paid activity is ready.</span></div>
    <div class="list-grid">${HN.data.activities.map(activityCard).join('')}</div>
  `;
}

function renderActivityDetail() {
  const root = $('[data-activity-detail]');
  if (!root) return;
  const id = qs('id') || 'vermont-ai-escape-game';
  const activity = HN.data.activities.find(item => item.id === id) || HN.data.activities[0];
  if (!activity) return;
  const user = getCurrentUser();
  const unlocked = activity.access !== 'paid' || hasPaidAccess(activity.id);
  const paymentLink = HN.config.paidActivityPaymentLinks?.[activity.id] || '';
  const ctaLabel = unlocked ? 'Open Activity' : activity.status === 'future-paid' ? 'Join Paid Beta Waitlist' : 'Unlock Activity';
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true, right: authTopRight() })}
    <section class="hero-card">
      <div class="hero-illustration ${activity.accent || ''}"></div>
      <span class="pill ${activity.accent || ''}">${activity.type}</span>
      <h1 class="detail-title">${activity.title}</h1>
      <p>${activity.description}</p>
      <div class="stat-row">
        <div class="stat"><strong>${activity.duration}</strong><span>Duration</span></div>
        <div class="stat"><strong>${activity.players}</strong><span>Players</span></div>
        <div class="stat"><strong>${activity.priceDisplay}</strong><span>Access</span></div>
      </div>
    </section>
    <section class="content-section">
      <h2>What this becomes</h2>
      ${activity.included.map(item => `<article class="place-row"><div class="place-icon">✓</div><div><h3>${item}</h3></div></article>`).join('')}
    </section>
    <section class="content-section">
      <h2>AI build inputs later</h2>
      <div class="info-card"><p>This is the structure for generating a custom game based on the actual place, group, and constraints.</p></div>
      <div class="place-list">${activity.aiBuildInputs.map(input => `<article class="place-row"><div class="place-icon">•</div><div><h3>${input}</h3></div></article>`).join('')}</div>
    </section>
    <section class="content-section">
      <h2>Launch note</h2>
      <div class="info-card"><p>${activity.launchNote}</p></div>
    </section>
    <div class="sticky-actions">
      <button class="btn btn-primary" data-activity-cta="${activity.id}">${ctaLabel}</button>
      <button class="fav-button" data-fav="activity:${activity.id}" aria-label="Save activity">${icons.heart}</button>
    </div>
  `;
  hydrateFavButtons();
  $('[data-activity-cta]')?.addEventListener('click', () => {
    if (!user && HN.config.requireLoginForPaidActivities) {
      requireLogin(`activity.html?id=${activity.id}`);
      return;
    }
    if (unlocked) {
      alert('Activity workspace placeholder. The real game screen can be added after the first paid activity is designed.');
      return;
    }
    if (paymentLink) {
      window.location.href = paymentLink;
      return;
    }
    joinActivityWaitlist(activity);
    alert('You are on the interest list for this paid activity. Add a payment link later when it is ready.');
  });
}

function getSaved() {
  return JSON.parse(localStorage.getItem('hnSaved') || '[]');
}

function setSaved(saved) {
  localStorage.setItem('hnSaved', JSON.stringify(saved));
}

function hydrateFavButtons() {
  $all('[data-fav]').forEach(button => {
    const key = button.dataset.fav;
    const update = () => button.classList.toggle('active', getSaved().includes(key));
    update();
    button.addEventListener('click', () => {
      const saved = getSaved();
      const next = saved.includes(key) ? saved.filter(item => item !== key) : [...saved, key];
      setSaved(next);
      update();
    });
  });
}

async function renderProfile() {
  const root = $('[data-profile]');
  if (!root) return;
  const user = getCurrentUser();
  const saved = getSaved();
  const requests = JSON.parse(localStorage.getItem('hnCommunityRequests') || '[]');
  const waitlist = JSON.parse(localStorage.getItem('hnActivityWaitlist') || '[]');
  const paid = paidAccessList();
  if (!user) {
    root.innerHTML = `
      ${statusbar()}
      ${topbar({ back: true })}
      <section class="page-heading">
        <div class="eyebrow">Profile</div>
        <h1>Log in before the app gets deeper.</h1>
        <p>Create a lightweight account for saved guides, reviewed access, and future paid activities.</p>
      </section>
      <div class="form-card auth-card">
        <a class="btn btn-primary full" href="login.html">Log In</a>
        <a class="btn btn-secondary full" href="signup.html">Create Account</a>
        <p class="form-hint">For launch, this can run in local demo mode. Before real users enter passwords, connect the Cloudflare Worker auth included in /extras.</p>
      </div>
    `;
    return;
  }
  root.innerHTML = `
    ${statusbar()}
    ${topbar({ back: true })}
    <section class="page-heading">
      <div class="eyebrow">Your Hamsa Nomads account</div>
      <h1>${user.name || 'Member'}</h1>
      <p>${user.email || ''}</p>
    </section>
    <div class="account-grid">
      <article class="account-chip"><strong>${saved.length}</strong><span>Saved</span></article>
      <article class="account-chip"><strong>${paid.length}</strong><span>Unlocked</span></article>
      <article class="account-chip"><strong>${waitlist.length}</strong><span>Waitlist</span></article>
    </div>
    <section class="content-section">
      <h2>Saved items</h2>
      ${saved.length ? saved.map(item => `<article class="info-card"><h3>${item.replace(':', ' / ')}</h3><p>Saved to this account device for now.</p></article>`).join('') : `<div class="empty-state"><h2>Nothing saved yet</h2><p>Save a city guide, retreat, or activity to test the app flow.</p></div>`}
    </section>
    <section class="content-section">
      <div class="section-head"><h2>Paid activity access</h2><a href="activities.html">View</a></div>
      ${HN.data.activities.map(activity => `<article class="place-row"><div class="place-icon">${hasPaidAccess(activity.id) ? '✓' : '🔒'}</div><div><h3>${activity.title}</h3><p>${hasPaidAccess(activity.id) ? 'Unlocked locally' : activity.priceDisplay}</p></div></article>`).join('')}
    </section>
    <section class="content-section">
      <h2>Community requests on this device</h2>
      ${requests.length ? requests.map(req => `<article class="info-card"><h3>${req.firstName || 'Request'}</h3><p>${req.email || ''} · ${req.based || ''}</p></article>`).join('') : `<article class="info-card"><h3>No local requests</h3><p>Once the Google Apps Script endpoint is added, requests can go to your real sheet instead.</p></article>`}
    </section>
    <button class="btn btn-secondary full" id="logoutButton" type="button">Log Out</button>
  `;
  $('#logoutButton')?.addEventListener('click', async () => {
    await logoutUser();
    location.href = 'profile.html';
  });
}



function suggestCityModalHTML() {
  return `<div class="suggest-modal" id="suggestCityModal" hidden>
    <div class="suggest-modal-panel">
      <button class="ghost-icon-button suggest-close" data-suggest-city-close aria-label="Close">×</button>
      <div class="eyebrow">Suggest a city</div>
      <h2>What should we add next?</h2>
      <p>Drop the idea. Contact is optional.</p>
      <form id="suggestCityQuickForm">
        <div class="form-row"><label for="suggestIdea">Idea</label><textarea id="suggestIdea" name="idea" placeholder="Example: Paris guide, kosher Lisbon notes, Shabbat in Montreal..." required></textarea></div>
        <div class="form-row"><label for="suggestContact">Optional contact</label><input id="suggestContact" name="contact" placeholder="Email / WhatsApp / Instagram"></div>
        <button class="btn btn-primary full" type="submit">Send idea</button>
        <div class="success-box" id="suggestQuickSuccess"><h3>Idea sent</h3><p>Thank you — we saved it.</p></div>
      </form>
    </div>
  </div>`;
}

function ensureSuggestCityModal() {
  if (!document.getElementById('suggestCityModal')) {
    document.body.insertAdjacentHTML('beforeend', suggestCityModalHTML());
    document.getElementById('suggestCityQuickForm')?.addEventListener('submit', handleSuggestCitySubmit);
  }
}

function openSuggestCityModal() {
  ensureSuggestCityModal();
  const modal = document.getElementById('suggestCityModal');
  if (modal) modal.hidden = false;
}

function closeSuggestCityModal() {
  const modal = document.getElementById('suggestCityModal');
  if (modal) modal.hidden = true;
}

function handleSuggestCityPopup() {
  ensureSuggestCityModal();
  document.addEventListener('click', event => {
    const openButton = event.target.closest('[data-suggest-city-open]');
    if (openButton) {
      event.preventDefault();
      openSuggestCityModal();
    }
    if (event.target.closest('[data-suggest-city-close]') || event.target.id === 'suggestCityModal') {
      event.preventDefault();
      closeSuggestCityModal();
    }
  });
}


function menuOverlayHTML() {
  return `<div class="menu-overlay" id="menuOverlay" hidden>
    <div class="menu-panel">
      <button class="ghost-icon-button menu-close" data-close-menu aria-label="Close">×</button>
      <img src="${logoSrc('horizontalIcon')}" alt="Hamsa Nomads" class="menu-logo">
      <nav class="menu-links">
        <a href="home.html">Home</a>
        <a href="guides.html">Explore guides</a>
        <a href="trips.html">Trips & retreats</a>
        <a href="activities.html">Membership activities</a>
        <a href="community.html">Community access</a>
        <a href="profile.html">Profile</a>
      </nav>
    </div>
  </div>`;
}

function ensureMenuOverlay() {
  if (!document.getElementById('menuOverlay')) {
    document.body.insertAdjacentHTML('beforeend', menuOverlayHTML());
  }
}

function openMenu() {
  ensureMenuOverlay();
  document.getElementById('menuOverlay').hidden = false;
}

function closeMenu() {
  const menu = document.getElementById('menuOverlay');
  if (menu) menu.hidden = true;
}

function handleMenuButtons() {
  ensureMenuOverlay();
  document.addEventListener('click', event => {
    if (event.target.closest('[data-menu]')) {
      event.preventDefault();
      openMenu();
    }
    if (event.target.closest('[data-close-menu]') || event.target.id === 'menuOverlay') {
      event.preventDefault();
      closeMenu();
    }
  });
}


function handleBackButtons() {
  document.addEventListener('click', event => {
    const back = event.target.closest('[data-back]');
    if (!back) return;
    event.preventDefault();
    if (history.length > 1) history.back();
    else location.href = 'home.html';
  });
}

function hydrateNav() {
  const body = document.body;
  const active = body.dataset.nav;
  if (!active) return;
  document.querySelector('.app-stage')?.classList.add('has-nav');
  document.body.insertAdjacentHTML('beforeend', nav(active));
}

function installPrompt() {
  let deferredPrompt = null;
  const banner = document.createElement('div');
  banner.className = 'install-banner';
  banner.innerHTML = `<p>Add Hamsa Nomads to your home screen for a more app-like experience.</p><button type="button">Add</button>`;
  document.body.appendChild(banner);

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    banner.classList.add('show');
  });

  banner.querySelector('button').addEventListener('click', async () => {
    banner.classList.remove('show');
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  });
}


function initImperfectScrollLine() {
  const stage = document.querySelector('.app-stage');
  if (!stage || document.querySelector('.scroll-draw-line')) return;
  stage.insertAdjacentHTML('afterbegin', `
    <svg class="scroll-draw-line" viewBox="0 0 420 1800" preserveAspectRatio="none" aria-hidden="true">
      <path id="scrollLinePath" d="M40 80 C120 210 20 310 105 430 C195 565 52 680 150 800 C260 950 94 1070 205 1210 C318 1354 210 1490 352 1680" />
    </svg>
  `);
  const path = document.getElementById('scrollLinePath');
  if (!path) return;
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  const update = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    path.style.strokeDashoffset = String(length * (1 - progress));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}


async function init() {
  handleBackButtons();
  initImperfectScrollLine();
  handleMenuButtons();
  handleSuggestCityPopup();
  hydrateNav();
  await loadData();
  renderHome();
  renderGuides();
  renderCityDetail();
  renderTrips();
  renderExperienceDetail();
  renderCommunityForm();
  renderSuggestCityForm();
  renderActivities();
  renderActivityDetail();
  renderAuthPage();
  renderProfile();
  installPrompt();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
