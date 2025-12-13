document.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.querySelector(".portfolio-section");
  if (!gallerySection) return;

  const grid = gallerySection.querySelector(".portfolio-grid");
  const filterSelect = gallerySection.querySelector("#portfolio-filter-select");
  const loadMoreBtn = gallerySection.querySelector(".portfolio-load-more");
  const lightbox = gallerySection.querySelector(".portfolio-lightbox");

  if (!grid || !(filterSelect instanceof HTMLSelectElement) || !lightbox) return;

  const allItems = Array.from(grid.querySelectorAll(".portfolio-item"));
  if (!allItems.length) return;

  const imgEl = lightbox.querySelector(".portfolio-lightbox__image");
  const titleEl = lightbox.querySelector(".portfolio-lightbox__title");
  const indexEl = lightbox.querySelector(".portfolio-lightbox__index");
  const prevBtn = lightbox.querySelector(".portfolio-lightbox__nav--prev");
  const nextBtn = lightbox.querySelector(".portfolio-lightbox__nav--next");
  const closeBtn = lightbox.querySelector(".portfolio-lightbox__close");

  if (
    !(imgEl instanceof HTMLImageElement) ||
    !titleEl ||
    !indexEl ||
    !prevBtn ||
    !nextBtn ||
    !closeBtn
  ) {
    return;
  }

  const ITEMS_PER_BATCH = 12;
  let currentFilter = filterSelect.value || "food";
  let visibleCount = ITEMS_PER_BATCH;

  let items = [];
  let currentIndex = 0;
  let lastFocused = null;

  function getItemsForFilter(filter) {
    if (filter === "all") return allItems;
    return allItems.filter((item) => (item.dataset.category || "") === filter);
  }

  function rebuildVisibleItems() {
    items = allItems.filter((item) => item.style.display !== "none");

    if (!items.length && lightbox.classList.contains("is-active")) {
      close();
      return;
    }

    if (items.length && currentIndex >= items.length) {
      currentIndex = items.length - 1;
    }
  }

  function updateVisibility() {
    const filtered = getItemsForFilter(currentFilter);

    allItems.forEach((item) => {
      item.style.display = "none";
    });

    filtered.forEach((item, index) => {
      if (index < visibleCount) {
        item.style.display = "block";
      }
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        visibleCount >= filtered.length ? "none" : "inline-block";
    }

    rebuildVisibleItems();
  }

  function getFullSrc(item) {
    const full = item.dataset.full || "";
    if (full) return full;
    const src = item.dataset.src || "";
    if (src) return src;
    const href = item.getAttribute("href") || "";
    return href && href !== "#" ? href : "";
  }

  function openAt(index) {
    if (!items.length) return;

    const total = items.length;
    const clampedIndex = ((index % total) + total) % total;
    const item = items[clampedIndex];
    if (!item) return;

    const src = getFullSrc(item);
    if (!src) return;

    const alt = item.dataset.alt || "";
    const title = item.dataset.title || alt || "";
    const fullWidth = Number(item.dataset.fullWidth);
    const fullHeight = Number(item.dataset.fullHeight);

    currentIndex = clampedIndex;

    imgEl.style.opacity = "0";
    imgEl.onload = () => {
      imgEl.style.opacity = "1";
    };

    if (
      Number.isFinite(fullWidth) &&
      fullWidth > 0 &&
      Number.isFinite(fullHeight) &&
      fullHeight > 0
    ) {
      imgEl.width = fullWidth;
      imgEl.height = fullHeight;
    } else {
      imgEl.width = 1200;
      imgEl.height = 800;
    }

    imgEl.src = src;
    imgEl.alt = alt;
    titleEl.textContent = title;
    indexEl.textContent = `${clampedIndex + 1} / ${total}`;

    lightbox.classList.add("is-active");
    lightbox.setAttribute("aria-hidden", "false");

    lastFocused = document.activeElement;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    imgEl.src = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    document.body.style.overflow = "";
  }

  function showNext(delta) {
    openAt(currentIndex + delta);
  }

  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const item = target.closest(".portfolio-item");
    if (!(item instanceof HTMLElement)) return;

    event.preventDefault();
    rebuildVisibleItems();

    const index = items.indexOf(item);
    if (index !== -1) {
      openAt(index);
    }
  });

  grid.addEventListener("keydown", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const item = target.closest(".portfolio-item");
    if (!(item instanceof HTMLElement)) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      rebuildVisibleItems();
      const index = items.indexOf(item);
      if (index !== -1) {
        openAt(index);
      }
    }
  });

  prevBtn.addEventListener("click", () => showNext(-1));
  nextBtn.addEventListener("click", () => showNext(1));
  closeBtn.addEventListener("click", close);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-active")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showNext(-1);
    }
  });

  filterSelect.addEventListener("change", () => {
    currentFilter = filterSelect.value || "food";
    visibleCount = ITEMS_PER_BATCH;
    updateVisibility();
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += ITEMS_PER_BATCH;
      updateVisibility();
    });
  }

  updateVisibility();
});
