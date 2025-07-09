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
// TOC Toggle Logic
// -----------------------------------------
window.addEventListener("load", function () {
  const tocBtn = document.getElementById("toggle-toc");
  const tocList = document.getElementById("toc-list");

  if (!tocBtn || !tocList) {
    console.error("TOC elements not found");
    return;
  }

  tocBtn.addEventListener("click", function () {
    const isHidden = tocList.style.display === "none";

    tocList.style.display = isHidden ? "block" : "none";
    tocBtn.textContent = isHidden ? "Hide Sections" : "Show Sections";
  });

  // Initial state (shown)
  tocList.style.display = "block";
  tocBtn.textContent = "Hide Sections";
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
      if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
        e.preventDefault();
        document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
