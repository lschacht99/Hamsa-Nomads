function insertGlobalTripLine() {
  if (document.getElementById("hnTripLineOverlay")) return;

  const lineHTML = `
    <div
      class="hn-trip-line-overlay"
      id="hnTripLineOverlay"
      aria-hidden="true"
      style="position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;"
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
