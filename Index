<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hamsa Nomads — Shavuos in Vermont</title>
  <style>
    :root {
      --bg: #f7f3ea;
      --bg-soft: #fbf8f2;
      --paper: rgba(255, 252, 246, 0.62);
      --paper-strong: rgba(255, 252, 246, 0.76);
      --ink: #1c211d;
      --muted: #5f655d;
      --forest: #274537;
      --gold: #b88b2f;
      --line: rgba(16, 14, 11, 0.22);
      --border: rgba(39, 69, 55, 0.12);
      --shadow: 0 16px 50px rgba(31, 28, 20, 0.08);
      --radius: 24px;
      --container: 1280px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, Arial, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(255,255,255,0.72), transparent 34%),
        linear-gradient(180deg, #faf7f0 0%, var(--bg) 100%);
      line-height: 1.55;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, .serif {
      font-family: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
      font-weight: 500;
      letter-spacing: -0.03em;
      margin: 0;
    }

    p { margin: 0; }
    a { color: inherit; text-decoration: none; }
    img { display: block; max-width: 100%; }

    .site-shell {
      position: relative;
      isolation: isolate;
    }

    .line-overlay {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
      opacity: 1;
    }

    .line-overlay svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .path-main,
    .path-slice,
    .path-hamsa {
      fill: none;
      stroke: var(--line);
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }

    .path-main.back,
    .path-hamsa.back { stroke-width: 3.2; }
    .path-main.front,
    .path-hamsa.front { stroke-width: 1.5; }
    .path-slice.back { stroke-width: 3; }
    .path-slice.front { stroke-width: 1.3; }

    .container {
      width: min(calc(100% - 32px), var(--container));
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .glass {
      background: var(--paper);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255,255,255,0.48);
      box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,0.45);
      border-radius: var(--radius);
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(249, 246, 239, 0.72);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(39, 69, 55, 0.08);
    }

    .nav {
      min-height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .brand-logo {
      width: 54px;
      height: 54px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .brand-text {
      min-width: 0;
    }

    .brand-name {
      font-family: "Iowan Old Style", Georgia, serif;
      font-size: 1.15rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      line-height: 1;
    }

    .brand-sub {
      font-size: 0.9rem;
      color: var(--muted);
      margin-top: 4px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 22px;
      color: var(--muted);
      font-size: 0.96rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .nav-links a:hover { color: var(--ink); }

    .button,
    .button-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      padding: 0 24px;
      border-radius: 999px;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .button:hover,
    .button-secondary:hover {
      transform: translateY(-1px);
    }

    .button {
      background: rgba(39, 69, 55, 0.92);
      color: white;
      box-shadow: 0 12px 30px rgba(39, 69, 55, 0.22);
      border: 1px solid rgba(39, 69, 55, 0.26);
    }

    .button-secondary {
      background: rgba(255, 255, 255, 0.62);
      color: var(--ink);
      border: 1px solid rgba(39, 69, 55, 0.14);
      box-shadow: 0 10px 24px rgba(31, 28, 20, 0.08);
    }

    .hero {
      padding: 26px 0 24px;
    }

    .hero-wrap {
      position: relative;
      min-height: min(86vh, 980px);
      overflow: hidden;
      border-radius: 34px;
      box-shadow: var(--shadow);
      background: #e8e0d2;
      z-index: 2;
    }

    .hero-media {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-scrim {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(21, 17, 12, 0.56) 0%, rgba(21, 17, 12, 0.28) 38%, rgba(21, 17, 12, 0.08) 100%),
        linear-gradient(180deg, rgba(20,15,10,0.08) 0%, rgba(20,15,10,0.18) 100%);
    }

    .hero-inner {
      position: relative;
      z-index: 2;
      min-height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(28px, 4vw, 56px);
    }

    .hero-topbar {
      display: flex;
      justify-content: flex-end;
    }

    .hero-copy {
      max-width: 740px;
      color: #fffdf8;
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding-top: 46px;
    }

    .eyebrow {
      font-size: 0.8rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.92;
    }

    .hero h1 {
      font-size: clamp(3.2rem, 9vw, 7.4rem);
      line-height: 0.93;
      text-shadow: 0 8px 28px rgba(0,0,0,0.18);
      max-width: 9ch;
    }

    .hero h1 .gold {
      color: #e0ae43;
    }

    .hero-kicker {
      width: fit-content;
      padding: 12px 18px;
      border-radius: 999px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.18);
      backdrop-filter: blur(12px);
      text-transform: uppercase;
      letter-spacing: 0.13em;
      font-size: 0.86rem;
    }

    .hero-lead {
      max-width: 32ch;
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      line-height: 1.35;
      color: rgba(255,251,245,0.96);
      text-shadow: 0 5px 18px rgba(0,0,0,0.18);
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .hero .button {
      min-height: 56px;
      padding: 0 30px;
      font-size: 1rem;
    }

    .hero-bottom-card {
      margin-top: 20px;
      width: min(860px, 100%);
      padding: 24px 26px;
      background: rgba(252, 247, 239, 0.78);
      color: var(--ink);
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 22px;
      align-items: center;
    }

    .hero-bottom-card h2 {
      font-size: clamp(2rem, 4vw, 3.6rem);
      color: var(--forest);
      margin-bottom: 10px;
    }

    .hero-bottom-card p {
      color: var(--muted);
      font-size: 1.04rem;
      max-width: 48ch;
    }

    .quick-facts {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 10px;
      font-size: 0.96rem;
      color: var(--forest);
    }

    .quick-facts div {
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(255,255,255,0.56);
      border: 1px solid rgba(39,69,55,0.09);
    }

    .section {
      padding: 28px 0;
    }

    .section-header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 18px;
      padding: 14px 4px;
    }

    .section-header h2 {
      font-size: clamp(2rem, 5vw, 3.3rem);
      color: var(--forest);
    }

    .section-header p {
      max-width: 52ch;
      color: var(--muted);
    }

    .value-grid,
    .feature-grid,
    .gallery-grid,
    .footer-grid {
      display: grid;
      gap: 18px;
    }

    .value-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
    .feature-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
    .gallery-grid { grid-template-columns: 1.15fr 0.85fr 0.85fr; }
    .footer-grid { grid-template-columns: 1.05fr 0.95fr; }

    .card {
      padding: 24px;
      position: relative;
      z-index: 2;
    }

    .card h3 {
      font-size: 1.45rem;
      color: var(--forest);
      margin-bottom: 10px;
    }

    .card p,
    .feature-item,
    .footer-card p,
    .footer-note,
    li {
      color: var(--muted);
    }

    .gallery-card {
      padding: 10px;
      overflow: hidden;
    }

    .gallery-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 18px;
      min-height: 250px;
    }

    .gallery-card.tall { grid-row: span 2; }

    .feature-item {
      padding: 18px 20px;
      font-size: 1rem;
    }

    .promise-bar {
      margin-top: 18px;
      padding: 22px 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }

    .promise-bar .big-line {
      font-size: clamp(1.4rem, 3vw, 2.1rem);
      color: var(--forest);
      font-family: "Iowan Old Style", Georgia, serif;
      font-style: italic;
    }

    footer {
      padding: 30px 0 60px;
    }

    .footer-card {
      padding: 24px;
    }

    .footer-note {
      margin-top: 18px;
      font-size: 0.94rem;
    }

    @media (max-width: 1080px) {
      .value-grid,
      .feature-grid,
      .footer-grid,
      .gallery-grid,
      .hero-bottom-card {
        grid-template-columns: 1fr 1fr;
      }

      .gallery-grid > :first-child,
      .hero-bottom-card > :first-child,
      .footer-grid > :first-child {
        grid-column: 1 / -1;
      }

      .gallery-card.tall { grid-row: span 1; }
    }

    @media (max-width: 760px) {
      .nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 14px 0;
      }

      .nav-links {
        width: 100%;
        justify-content: flex-start;
        gap: 12px 16px;
      }

      .hero-wrap {
        min-height: 760px;
      }

      .hero-copy {
        padding-top: 22px;
      }

      .hero-bottom-card,
      .value-grid,
      .feature-grid,
      .gallery-grid,
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <div class="site-shell">
    <div class="line-overlay" aria-hidden="true">
      <svg viewBox="0 0 1440 5200" preserveAspectRatio="none">
        <path class="path-hamsa back" id="hamsaBack" d="M820 86 C820 150, 820 210, 818 278 C816 346, 804 376, 786 376 C766 375, 760 338, 759 277 C759 207, 760 139, 760 81 C760 18, 784 -16, 822 -16 C859 -16, 883 19, 883 83 C884 140, 884 208, 884 280 C884 339, 878 374, 860 375 C842 375, 830 346, 828 279 C826 210, 826 148, 826 89" />
        <path class="path-hamsa front" id="hamsaFront" d="M821 86 C821 150, 821 210, 819 278 C817 346, 805 376, 787 376 C767 375, 761 338, 760 277 C760 207, 761 139, 761 81 C761 18, 785 -16, 823 -16 C860 -16, 884 19, 884 83 C885 140, 885 208, 885 280 C885 339, 879 374, 861 375 C843 375, 831 346, 829 279 C827 210, 827 148, 827 89" />
        <path class="path-main back" id="lineBack" d="M667 330 C625 306, 578 304, 547 323 C519 341, 511 367, 522 392 C535 421, 568 428, 589 447 C611 465, 619 500, 605 526 C587 557, 552 560, 529 583 C505 607, 496 652, 505 695 C518 762, 525 832, 546 895 C563 946, 596 982, 644 985 C694 986, 750 968, 791 972 C835 976, 874 1001, 879 1038 C886 1086, 841 1123, 824 1165 C810 1198, 821 1244, 855 1264 C898 1289, 951 1285, 989 1310 C1035 1340, 1054 1390, 1040 1439 C1024 1491, 987 1535, 966 1584 C943 1637, 938 1699, 964 1747 C994 1803, 1057 1836, 1123 1843 C1190 1851, 1262 1838, 1308 1870 C1358 1905, 1365 1972, 1328 2017 C1288 2067, 1216 2077, 1148 2088 C1075 2099, 1009 2122, 981 2173 C951 2227, 967 2294, 1022 2330 C1077 2367, 1159 2370, 1236 2382 C1302 2392, 1360 2422, 1379 2472 C1403 2537, 1368 2608, 1304 2645 C1243 2681, 1164 2686, 1098 2725 C1046 2756, 1008 2808, 1006 2860 C1004 2917, 1047 2964, 1104 2988 C1163 3014, 1232 3017, 1281 3047 C1341 3083, 1367 3144, 1349 3206 C1328 3279, 1263 3328, 1188 3350 C1115 3371, 1035 3370, 980 3406 C928 3440, 904 3496, 916 3553 C931 3622, 984 3675, 1032 3726 C1081 3779, 1124 3841, 1121 3908 C1117 3986, 1058 4050, 977 4075 C894 4102, 802 4088, 725 4116 C646 4144, 588 4201, 585 4268 C582 4339, 638 4401, 718 4429 C803 4459, 900 4454, 985 4485 C1076 4518, 1149 4583, 1169 4657 C1190 4737, 1155 4811, 1088 4857 C1017 4906, 922 4924, 846 4962" />
        <path class="path-main front" id="lineFront" d="M668 330 C626 307, 579 305, 548 324 C520 342, 512 367, 523 393 C536 422, 568 429, 590 447 C612 466, 620 500, 606 526 C588 558, 553 561, 530 584 C506 608, 497 652, 506 696 C519 763, 526 833, 547 896 C564 947, 597 983, 645 986 C695 987, 751 968, 792 973 C836 977, 875 1001, 880 1039 C887 1087, 842 1124, 825 1165 C811 1199, 822 1244, 856 1265 C899 1290, 952 1286, 990 1311 C1036 1341, 1055 1390, 1041 1440 C1025 1492, 988 1536, 967 1584 C944 1638, 939 1700, 965 1748 C995 1804, 1058 1837, 1124 1844 C1191 1851, 1263 1839, 1309 1871 C1359 1906, 1366 1973, 1329 2018 C1289 2068, 1217 2078, 1149 2089 C1076 2100, 1010 2123, 982 2174 C952 2228, 968 2295, 1023 2331 C1078 2368, 1160 2371, 1237 2383 C1303 2393, 1361 2422, 1380 2473 C1404 2538, 1369 2609, 1305 2646 C1244 2682, 1165 2687, 1099 2726 C1047 2757, 1009 2809, 1007 2861 C1005 2918, 1048 2965, 1105 2989 C1164 3015, 1233 3018, 1282 3048 C1342 3084, 1368 3145, 1350 3207 C1329 3280, 1264 3329, 1189 3351 C1116 3372, 1036 3371, 981 3407 C929 3441, 905 3497, 917 3554 C932 3623, 985 3676, 1033 3727 C1082 3780, 1125 3842, 1122 3909 C1118 3987, 1059 4051, 978 4076 C895 4103, 803 4089, 726 4117 C647 4145, 589 4202, 586 4269 C583 4340, 639 4402, 719 4430 C804 4460, 901 4455, 986 4486 C1077 4519, 1150 4584, 1170 4658 C1191 4738, 1156 4812, 1089 4858 C1018 4907, 923 4925, 847 4963" />
        <path class="path-slice back" id="sliceBack" d="M846 4963 C906 4918, 987 4888, 1073 4898 C1158 4908, 1228 4947, 1278 5005" />
        <path class="path-slice front" id="sliceFront" d="M847 4963 C907 4919, 988 4889, 1074 4899 C1159 4909, 1229 4948, 1279 5006" />
      </svg>
    </div>

    <header class="site-header">
      <div class="container nav">
        <a href="#top" class="brand">
          <img class="brand-logo" src="Logo/Logo-hamsa-nomads.png" alt="Hamsa Nomads logo" />
          <div class="brand-text">
            <div class="brand-name">Hamsa Nomads</div>
            <div class="brand-sub">Kosher travel</div>
          </div>
        </a>

        <nav class="nav-links">
          <a href="#experience">Experience</a>
          <a href="#gallery">Gallery</a>
          <a href="#details">Details</a>
          <a href="#contact">Contact</a>
          <a href="apply.html" class="button">Apply Now</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container">
          <div class="hero-wrap">
            <img class="hero-media" src="IMAGE/hero.jpg" alt="Shavuos in Vermont retreat hero image" />
            <div class="hero-scrim"></div>

            <div class="hero-inner">
              <div class="hero-topbar">
                <a href="apply.html" class="button">Apply Now</a>
              </div>

              <div class="hero-copy">
                <div class="eyebrow">Boutique Jewish retreat</div>
                <h1>Shavuos <span class="gold">in Vermont</span></h1>
                <div class="hero-kicker">A mountain retreat experience</div>
                <p class="hero-lead">A thoughtful 4-day Shavuos experience for Jewish young adults and couples in a private Vermont home surrounded by nature.</p>
                <div class="hero-actions">
                  <a href="apply.html" class="button">Apply Now</a>
                  <a href="#gallery" class="button-secondary">View the House</a>
                </div>
              </div>

              <div class="hero-bottom-card glass">
                <div>
                  <h2>A different kind of Shavuos.</h2>
                  <p>Slow down, connect, and experience Yom Tov in a warm, welcoming environment with beautiful shared spaces, mountain air, and a naturally social atmosphere.</p>
                </div>
                <div class="quick-facts">
                  <div>Private home</div>
                  <div>Mountain views</div>
                  <div>Camping options</div>
                  <div>Hot tub</div>
                  <div>Game room</div>
                  <div>Kosher food</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <div class="eyebrow" style="color: var(--gold);">What makes the weekend special</div>
              <h2>Thoughtfully curated, not overprogrammed.</h2>
            </div>
            <p>A retreat designed to feel peaceful, warm, and meaningful — with good food, good people, space to breathe, and enough structure for Yom Tov to feel held well.</p>
          </div>

          <div class="value-grid">
            <article class="card glass">
              <h3>Thoughtfully Chosen Location</h3>
              <p>A private Vermont home with mountain views, room to gather, and the sense of being tucked away from everyday life.</p>
            </article>
            <article class="card glass">
              <h3>Meaningful Connections</h3>
              <p>A curated group of like-minded guests and a welcoming, relaxed atmosphere that makes meeting people feel natural.</p>
            </article>
            <article class="card glass">
              <h3>Rest, Recharge &amp; Enjoy</h3>
              <p>The right balance of inspiration, downtime, nature, and comfort — so the weekend feels both grounding and genuinely enjoyable.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <div class="eyebrow" style="color: var(--gold);">Image folder ready</div>
              <h2>Swap your photos from one independent directory.</h2>
            </div>
            <p>All main photography now points to the local <strong>IMAGE</strong> folder instead of pulling directly from VRBO. Replace the files in that folder and the page updates cleanly.</p>
          </div>

          <div class="gallery-grid">
            <article class="gallery-card glass tall">
              <img src="IMAGE/dining-space.jpg" alt="Dining and gathering space" />
            </article>
            <article class="gallery-card glass">
              <img src="IMAGE/bedroom.jpg" alt="Bedroom at the retreat house" />
            </article>
            <article class="gallery-card glass">
              <img src="IMAGE/pool.jpg" alt="Pool at the retreat house" />
            </article>
            <article class="gallery-card glass">
              <img src="IMAGE/game-room.jpg" alt="Game room at the retreat house" />
            </article>
            <article class="gallery-card glass">
              <img src="IMAGE/exterior.jpg" alt="Exterior of the retreat house" />
            </article>
          </div>
        </div>
      </section>

      <section id="details" class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <div class="eyebrow" style="color: var(--gold);">Weekend essentials</div>
              <h2>Everything people want to know, kept clean.</h2>
            </div>
            <p>The page is now simplified around one main goal: understand the retreat, feel the atmosphere, and apply.</p>
          </div>

          <div class="feature-grid">
            <div class="feature-item glass">Private home &amp; mountain views</div>
            <div class="feature-item glass">Camping options available</div>
            <div class="feature-item glass">Game room</div>
            <div class="feature-item glass">Hot tub</div>
            <div class="feature-item glass">Kosher food</div>
            <div class="feature-item glass">Eiruv</div>
            <div class="feature-item glass">Minyan</div>
            <div class="feature-item glass">Shabbos &amp; Yom Tov atmosphere</div>
          </div>

          <div class="promise-bar glass">
            <div class="big-line">Designed for a meaningful and enjoyable Yom Tov.</div>
            <a href="apply.html" class="button">Apply Now</a>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="container footer-grid">
        <article class="footer-card glass">
          <h3 style="font-size: 1.8rem; color: var(--forest); margin-bottom: 10px;">Independent asset folders</h3>
          <p>Use <strong>Logo/Logo-hamsa-nomads.png</strong> for the logo and the <strong>IMAGE</strong> folder for all retreat photos. That keeps the site easy to manage on GitHub without touching the layout code each time.</p>
          <p class="footer-note">Suggested image names: <strong>hero.jpg</strong>, <strong>dining-space.jpg</strong>, <strong>bedroom.jpg</strong>, <strong>pool.jpg</strong>, <strong>game-room.jpg</strong>, <strong>exterior.jpg</strong>.</p>
        </article>

        <article class="footer-card glass">
          <h3 style="font-size: 1.8rem; color: var(--forest); margin-bottom: 10px;">One clear action</h3>
          <p>This version removes the room-booking logic and keeps the whole page focused on the retreat story. The main conversion path is now the same everywhere:</p>
          <p class="footer-note"><a href="apply.html" class="button">Apply Now</a></p>
        </article>
      </div>
    </footer>
  </div>

  <script>
    (() => {
      const drawPaths = [
        document.getElementById('hamsaBack'),
        document.getElementById('hamsaFront'),
        document.getElementById('lineBack'),
        document.getElementById('lineFront')
      ].filter(Boolean);

      const slicePaths = [
        document.getElementById('sliceBack'),
        document.getElementById('sliceFront')
      ].filter(Boolean);

      function updateLine() {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, window.scrollY / maxScroll);

        drawPaths.forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.strokeDashoffset = len * (1 - Math.min(progress * 1.06, 1));
        });

        const sliceProgress = Math.max(0, (progress - 0.82) / 0.18);
        slicePaths.forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.strokeDashoffset = len * (1 - sliceProgress);
        });
      }

      window.addEventListener('scroll', updateLine, { passive: true });
      window.addEventListener('resize', updateLine);
      updateLine();
    })();
  </script>
</body>
</html>
