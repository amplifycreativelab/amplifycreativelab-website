document.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.querySelector(".portfolio-section");
  if (!gallerySection) return;

  const allItems = Array.from(
    gallerySection.querySelectorAll(".portfolio-item")
  );
  const lightbox = gallerySection.querySelector(".portfolio-lightbox");

  if (!allItems.length || !lightbox) return;

  const imgEl = lightbox.querySelector(".portfolio-lightbox__image");
  const titleEl = lightbox.querySelector(".portfolio-lightbox__title");
  const indexEl = lightbox.querySelector(".portfolio-lightbox__index");
  const prevBtn = lightbox.querySelector(".portfolio-lightbox__nav--prev");
  const nextBtn = lightbox.querySelector(".portfolio-lightbox__nav--next");
  const closeBtn = lightbox.querySelector(".portfolio-lightbox__close");

  if (!imgEl || !titleEl || !indexEl || !prevBtn || !nextBtn || !closeBtn) {
    return;
  }

  let currentIndex = 0;
  let lastFocused = null;
  let items = allItems.slice();

  function rebuildItemsFromFilter() {
    items = allItems.filter((item) => item.style.display !== "none");

    if (!items.length && lightbox.classList.contains("is-active")) {
      close();
      return;
    }

    if (items.length && currentIndex >= items.length) {
      currentIndex = items.length - 1;
    }
  }

  function openAt(index) {
    if (!items.length) return;

    const total = items.length;
    const clampedIndex = ((index % total) + total) % total;
    const item = items[clampedIndex];

    const src = item.dataset.src || item.getAttribute("href") || "";
    const alt = item.dataset.alt || "";
    const title = item.dataset.title || "";

    currentIndex = clampedIndex;

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

  allItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const index = items.indexOf(item);
      if (index !== -1) {
        openAt(index);
      }
    });

    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const index = items.indexOf(item);
        if (index !== -1) {
          openAt(index);
        }
      }
    });
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

  // Filtering logic
  const filtersContainer = gallerySection.querySelector(".portfolio-filters");

  if (filtersContainer) {
    const filterButtons = Array.from(
      filtersContainer.querySelectorAll(".portfolio-filter")
    );

    function applyFilter(filter) {
      allItems.forEach((item) => {
        const category = item.dataset.category || "";
        const matches = filter === "all" || category === filter;

        item.style.display = matches ? "" : "none";
      });

      rebuildItemsFromFilter();
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter || "all";

        filterButtons.forEach((btn) => {
          btn.classList.toggle("is-active", btn === button);
        });

        applyFilter(filter);
      });
    });

    const activeButton =
      filtersContainer.querySelector(".portfolio-filter.is-active") ||
      filterButtons[0];

    if (activeButton) {
      const initialFilter = activeButton.dataset.filter || "all";
      applyFilter(initialFilter);
    } else {
      rebuildItemsFromFilter();
    }
  } else {
    rebuildItemsFromFilter();
  }
});

