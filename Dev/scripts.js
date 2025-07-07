// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        window.scrollTo({
          top: targetEl.offsetTop - 80, // offset for sticky header
          behavior: "smooth"
        });
      }
    });
  });

  // Navbar toggle for mobile
  const navToggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector("#navbarNav");

  if (navToggler && navMenu) {
    navToggler.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Optional: Close navbar when clicking a nav-link (on mobile)
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    });
  });

  // Optional: Animate benefit cards on scroll
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
  animateCardsOnScroll(); // Initial check
});

// Optional utility: track outbound affiliate clicks
document.addEventListener("click", function (e) {
  const link = e.target.closest("a");
  if (!link) return;

  const isAffiliate = link.href.includes("officialmoringamagic.com");
  if (isAffiliate) {
    console.log("Affiliate click tracked:", link.href);
    // Optional: send to analytics tool here
  }
});

// Dynamic date and read time calculation for blog cards
// scripts.js - Dynamic date and read time calculation for blog cards
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-body").forEach(card => {
    const dateStr = card.getAttribute("data-date");
    if (!dateStr) return;

    // Get content text for word count
    const content = card.querySelector(".card-text")?.innerText || '';
    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200)); // avg read speed

    // Format date
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const metaEl = card.querySelector(".dynamic-meta");
    if (metaEl) {
      metaEl.textContent = `${formattedDate} • ${readTime} min read`;
    }
  });
});

// Dynamic date and read time calculation for blog posts
document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".blog-post");

  if (article) {
    const dateStr = article.getAttribute("data-date");
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Get word count from the article body
    const text = article.innerText || "";
    const wordCount = text.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));

    const meta = article.querySelector(".dynamic-meta");
    if (meta) {
      meta.textContent = `Published ${formattedDate} • ${readTime} min read`;
    }
  }
});
