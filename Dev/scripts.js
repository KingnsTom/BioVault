document.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------
  // 1. Smooth scroll for anchor links
  // -----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        window.scrollTo({
          top: targetEl.offsetTop - 80, // sticky navbar offset
          behavior: "smooth"
        });
      }
    });
  });

  // -----------------------------------------
  // 2. Navbar mobile toggle
  // -----------------------------------------
  const navToggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector("#navbarNav");

  if (navToggler && navMenu) {
    navToggler.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Close navbar when clicking a link (on mobile)
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    });
  });

  // -----------------------------------------
  // 3. Animate .benefit-card elements on scroll
  // -----------------------------------------
  const benefitCards = document.querySelectorAll(".benefit-card");

  function animateCardsOnScroll() {
    const scrollY = window.scrollY + window.innerHeight;

    benefitCards.forEach(card => {
      if (scrollY > card.offsetTop + 50) {
        card.classList.add("animate__fadeInUp");
      }
    });
  }

  window.addEventListener("scroll", animateCardsOnScroll);
  animateCardsOnScroll(); // Initial trigger

// -----------------------------------------
// TOC Toggle Logic – Hide on Mobile
// -----------------------------------------
window.addEventListener("load", function () {
  const tocBtn = document.getElementById("toggle-toc");
  const tocList = document.getElementById("toc-list");

  if (!tocBtn || !tocList) {
    console.error("TOC elements not found");
    return;
  }

  function setInitialTOCState() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      tocList.style.display = "none";
      tocBtn.textContent = "Show Table of Contents";
      tocBtn.setAttribute("aria-expanded", "false");
    } else {
      tocList.style.display = "block";
      tocBtn.textContent = "Hide Table of Contents";
      tocBtn.setAttribute("aria-expanded", "true");
    }
  }

  // Toggle behavior
  tocBtn.addEventListener("click", function () {
    const isHidden = tocList.style.display === "none";

    tocList.style.display = isHidden ? "block" : "none";
    tocBtn.textContent = isHidden ? "Hide Table of Contents" : "Show Table of Contents";
    tocBtn.setAttribute("aria-expanded", String(isHidden));
  });

  // Set TOC visibility on load
  setInitialTOCState();

  // Optional: re-check on resize for responsiveness
  window.addEventListener("resize", setInitialTOCState);
});



  // -----------------------------------------
  // 5. Track affiliate clicks
  // -----------------------------------------
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const isAffiliate = link.href.includes("officialmoringamagic.com");
    if (isAffiliate) {
      console.log("Affiliate click tracked:", link.href);
      // Optional: Add analytics tracking here
    }
  });

  // -----------------------------------------
  // 6. Read time + date for blog cards
  // -----------------------------------------
  document.querySelectorAll(".card-body").forEach(card => {
    const dateStr = card.getAttribute("data-date");
    if (!dateStr) return;

    const content = card.querySelector(".card-text")?.innerText || '';
    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));

    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const metaEl = card.querySelector(".dynamic-meta");
    if (metaEl) {
      metaEl.textContent = `${formattedDate} • ${readTime} min read`;
    }
  });

  // -----------------------------------------
  // 7. Read time + date for blog post (article)
  // -----------------------------------------
  const article = document.querySelector(".blog-post");
  if (article) {
    const dateStr = article.getAttribute("data-date");
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const text = article.innerText || "";
    const wordCount = text.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));

    const meta = article.querySelector(".dynamic-meta");
    if (meta) {
      meta.textContent = `Published ${formattedDate} • ${readTime} min read`;
    }
  }

  // -----------------------------------------
  // 8. Lazy load images (performance boost)
  // -----------------------------------------
  const lazyImages = document.querySelectorAll("img[data-src]");
  const lazyConfig = { rootMargin: "50px", threshold: 0.01 };

  const preloadImage = img => {
    const src = img.getAttribute("data-src");
    if (src) {
      img.src = src;
      img.removeAttribute("data-src");
    }
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, lazyConfig);

  lazyImages.forEach(img => imageObserver.observe(img));


  // -----------------------------------------
  // 10. Smooth scroll for "/#products" links (landing nav)
  // -----------------------------------------
  document.querySelectorAll('a[href="/#products"]').forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.location.pathname === "/" || window.location.pathname === "/index") {
        e.preventDefault();
        document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Blog Category Filtering
  const buttons = document.querySelectorAll(".blog-categories .btn");
  const posts = document.querySelectorAll("[data-category]");
  if (buttons.length && posts.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        buttons.forEach(b => {
          b.classList.remove("active", "btn-success");
          b.classList.add("btn-outline-success");
        });
        btn.classList.remove("btn-outline-success");
        btn.classList.add("active", "btn-success");

        const category = btn.textContent.trim()
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/\s+/g, "-");

        posts.forEach(post => {
          post.style.display =
            category === "all" || post.dataset.category === category
              ? ""
              : "none";
        });
      });
    });
  }

  // 2. Blog Pagination
  const blogCards = document.querySelectorAll(".blog-card");
  const paginationContainer = document.querySelector(".pagination");
  const filterButtons = document.querySelectorAll("[data-filter]");
  if (paginationContainer && blogCards.length) {
    const postsPerPage = 12;
    let currentPage = 1, currentFilter = "all";

    const getFilteredPosts = () =>
      Array.from(blogCards).filter(
        card => currentFilter === "all" || card.dataset.category === currentFilter
      );

    const renderPosts = () => {
      const filtered = getFilteredPosts();
      const start = (currentPage - 1) * postsPerPage;
      const end = start + postsPerPage;

      blogCards.forEach(card => (card.style.display = "none"));
      filtered.slice(start, end).forEach(card => (card.style.display = "block"));
      renderPagination(filtered.length);
    };

    const renderPagination = totalPosts => {
      const totalPages = Math.ceil(totalPosts / postsPerPage);
      paginationContainer.innerHTML = "";
      if (totalPages <= 1) return;

      const createPageItem = (page, label, isDisabled, isActive) => {
        const li = document.createElement("li");
        li.className = `page-item ${isDisabled ? "disabled" : ""} ${isActive ? "active" : ""}`;
        const a = document.createElement("a");
        a.href = "#";
        a.className = "page-link brand-page-link";
        a.textContent = label || page;
        a.dataset.page = page;
        li.appendChild(a);
        return li;
      };

      paginationContainer.appendChild(createPageItem(
        currentPage - 1, "« Prev", currentPage === 1, false));
      for (let i = 1; i <= totalPages; i++) {
        paginationContainer.appendChild(createPageItem(i, null, false, i === currentPage));
      }
      paginationContainer.appendChild(createPageItem(
        currentPage + 1, "Next »", currentPage === totalPages, false));

      paginationContainer.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", e => {
          e.preventDefault();
          const selected = parseInt(a.dataset.page, 10);
          if (!isNaN(selected) && selected !== currentPage) {
            currentPage = selected;
            renderPosts();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        });
      });
    };

    filterButtons.forEach(button => {
      button.addEventListener("click", e => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.dataset.filter;
        currentPage = 1;
        renderPosts();
      });
    });

    renderPosts();
  }
});

// ⏳ Scarcity Countdown: 10 Minutes per Visitor (localStorage-based)
function startScarcityCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const STORAGE_KEY = el.dataset.timerKey || "scarcity_offer_timer"; // Allow per-product override
  const now = new Date().getTime();

  // Get or set countdown start time
  let startTime = localStorage.getItem(STORAGE_KEY);
  if (!startTime) {
    startTime = now;
    localStorage.setItem(STORAGE_KEY, startTime);
  } else {
    startTime = parseInt(startTime);
  }

  const countdownLength = 10 * 60 * 1000; // 10 minutes in ms
  const endTime = startTime + countdownLength;

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = Math.max(endTime - now, 0);

    const m = Math.floor((timeLeft / (1000 * 60)) % 60);
    const s = Math.floor((timeLeft / 1000) % 60);

    el.innerHTML = `
      <div><span class="text-success">${String(m).padStart(2, '0')}</span>m</div>
      <div><span class="text-success">${String(s).padStart(2, '0')}</span>s</div>
    `;

    if (timeLeft <= 0) {
      el.innerHTML = `<span class="text-danger fw-bold">⏳ Offer Expired</span>`;
    }
  }

  updateCountdown();
  const timer = setInterval(() => {
    updateCountdown();
    if (new Date().getTime() >= endTime) clearInterval(timer);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", startScarcityCountdown);
