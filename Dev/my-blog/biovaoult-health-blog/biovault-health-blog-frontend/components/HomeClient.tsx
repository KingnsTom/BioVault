"use client";

import { useState } from "react";

interface Category {
  label: string;
  value: string;
}

interface Post {
  _id: string;
  slug: string;
  mainImage: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

const categories: Category[] = [
  { label: "Energy & Immunity", value: "energy-immunity" },
  { label: "Gut Health & Digestion", value: "gut-health" },
  { label: "Mental & Spiritual Clarity", value: "mental-clarity" },
  { label: "Oral & Dental Health", value: "oral-health" },
  { label: "Hormonal Balance", value: "hormonal-balance" },
  { label: "Blood Sugar & Metabolism", value: "blood-sugar" },
];

const posts: Post[] = [
  {
    _id: "1",
    slug: "5-minute-mindfulness",
    mainImage: "/Mindfulness-in-the-Workplace.webp",
    title: "5‑Minute Mindfulness: Mental Reset Techniques for the Workplace",
    category: "mental-clarity",
    excerpt:
      "Discover simple, effective techniques to reduce stress and refocus in just minutes—perfect for busy professionals.",
    date: "2025-06-10",
  },
  {
    _id: "2",
    slug: "gut-brain-connection",
    mainImage: "/gut-brain-connection-concept.webp",
    title: "The Gut‑Brain Connection: How Digestion Impacts Mental Clarity",
    category: "gut-health",
    excerpt:
      "Did you know your gut health affects your mood and focus? Here’s how to reset your digestion naturally.",
    date: "2025-06-05",
  },
  {
    _id: "3",
    slug: "moringa-best-immune-support",
    mainImage: "/immunity-boosters.webp",
    title: "Top Herbs & Supplements to Strengthen Immunity This Season",
    category: "energy-immunity",
    excerpt:
      "Support your body’s defenses with time‑tested natural remedies and modern insights backed by science.",
    date: "2025-05-28",
  },
  {
    _id: "4",
    slug: "moringa-review-2025-does-moringa-really-work",
    mainImage: "/Moringa-leaves-and-supplements.webp",
    title: "Moringa Review: Why This “Miracle Tree” Deserves a Spot in Your Routine",
    category: "energy-immunity",
    excerpt:
      "Discover the real benefits, possible side effects, and top supplement pick—backed by science and centuries of use.",
    date: "2025-06-19",
  },
  {
    _id: "5",
    slug: "tired-after-8-hours-sleep-reset",
    mainImage: "/blog-cover-moringa-reset.webp",
    title: "Tired After 8 Hours of Sleep? Try This 3‑Day Reset",
    category: "energy-immunity",
    excerpt:
      "Discover how Moringa Magic helps restore deep energy, better focus, and restful sleep without caffeine. A must‑read for 2025 wellness seekers.",
    date: "2025-07-02",
  },
  {
    _id: "6",
    slug: "sick-of-bad-breath",
    mainImage: "/oral-probiotic-breath-fresh.webp",
    title: "Bad Breath? This Dentist‑Approved Oral Probiotic Works Fast",
    category: "oral-health",
    excerpt:
      "Learn how this powerful oral probiotic is helping thousands eliminate bad breath, support gut health, and restore confidence—naturally.",
    date: "2025-07-02",
  },
  {
    _id: "7",
    slug: "best-gut-health-supplements-2025-digestsync",
    mainImage: "/digestsync-cover.webp",
    title: "Best Gut Health Supplements in 2025: Why DigestSync Wins",
    category: "gut-health",
    excerpt:
      "Still bloated after eating clean? Discover how DigestSync’s 3‑in‑1 gut formula tackles bloating, inflammation, and sluggish digestion.",
    date: "2025-07-03",
  },
  {
    _id: "8",
    slug: "gutoptim-hormone-balancer-2025",
    mainImage: "/GutOptim-Hormone-Balance.webp",
    title: "2025’s Best Natural Hormone Balancer? GutOptim Wins",
    category: "hormonal-balance",
    excerpt:
      "Mood swings? Belly bloat? GutOptim targets the root cause—your microbiome. Discover how this 2025 breakthrough resets hormones naturally.",
    date: "2025-07-04",
  },
  {
    _id: "9",
    slug: "glucotrust-best-blood-sugar-support-2025",
    mainImage: "/GlucoTrust-supplement-bottle.webp",
    title: "Top Blood Sugar Supplement in 2025? GlucoTrust Wins",
    category: "blood-sugar",
    excerpt:
      "Tired of sugar spikes or low energy? GlucoTrust supports healthy glucose levels, improves metabolism, and promotes better sleep naturally.",
    date: "2025-07-04",
  },
  {
    _id: "10",
    slug: "what-is-prodentim-how-it-works",
    mainImage: "/ProDentim-probiotic-supplement-for-oral-health.webp",
    title: "Best Oral Probiotic in 2025? Why ProDentim Stands Out",
    category: "oral-health",
    excerpt:
      "Dealing with gum issues or bad breath? ProDentim restores your oral microbiome, supporting healthy gums, fresher breath, and stronger teeth—naturally.",
    date: "2025-07-15",
  },
  {
    _id: "11",
    slug: "pinealxt-review-best-brain-detox-2025",
    mainImage: "/pinealxt-bottle.webp",
    title: "Brain Fog? Pineal XT Ranked #1 for Detox & Deep Rest",
    category: "mental-clarity",
    excerpt:
      "Clear your mind, sleep deeper, and feel spiritually reconnected. Discover why Pineal XT is 2025’s best pineal detox supplement.",
    date: "2025-07-04",
  },
  {
    _id: "12",
    slug: "top-energy-supplements-2025-no-crash",
    mainImage: "/top-energy-supplements-2025.webp",
    title: "⚡ Top 6 Energy Supplements of 2025 — No Crash, Just Results",
    category: "energy-immunity",
    excerpt:
      "Boost your daily energy without relying on caffeine overload. From Moringa Magic to NAD+ boosters, discover the top‑rated, expert‑approved formulas for lasting stamina, mental clarity, and stress resilience.",
    date: "2025-07-19",
  },
  {
    _id: "13",
    slug: "best-brain-detox-supplements-2025",
    mainImage: "/PinealXT-Best-Brain-Detox-Supplements-to-Clear-Mental-Fog.webp",
    title: "🧠 Best Brain Detox Supplements of 2025: Pineal XT Ranked #1",
    category: "mental-clarity",
    excerpt:
      "Suffering from brain fog or poor sleep? Discover the top 7 brain detox supplements of 2025—starting with Pineal XT, a powerful pineal gland cleanser.",
    date: "2025-07-15",
  },
];



export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const filteredPosts = activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCategory);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Categories */}
      <section className="blog-categories py-4 bg-light">
        <div className="container text-center">
          <h2 className="mb-3 fw-semibold">Browse by Category</h2>
          <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
            <button type="button" className={`btn btn-sm m-1 ${activeCategory === "all" ? "btn-success active" : "btn-outline-success"}`} onClick={() => { setActiveCategory("all"); setCurrentPage(1); }}>
              All
            </button>
            {categories.map((cat) => (
              <button key={cat.value} type="button" className={`btn btn-sm m-1 ${activeCategory === cat.value ? "btn-success active" : "btn-outline-success"}`} onClick={() => { setActiveCategory(cat.value); setCurrentPage(1); }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="py-5">
        <div className="container">
          <div className="row blog-list">
            {currentPosts.map((post) => (
              <div key={post._id} className="col-md-4 mb-4 blog-card" data-category={post.category}>
                <div className="card h-100 shadow-sm">
                  <img src={post.mainImage} className="card-img-top" alt={post.title} loading="lazy" />
                  <div className="card-body" data-date={post.date}>
                    <small className="text-muted d-block mb-1">
                      Category: {categories.find((c) => c.value === post.category)?.label}
                    </small>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-text">{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-block">
                      Read More »
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Pagination */}
<nav className="mt-5">
  <ul className="pagination justify-content-center">
    {/* Previous Button */}
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button 
        className="page-link" 
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
        <button className="page-link" onClick={() => handlePageChange(page)}>
          {page}
        </button>
      </li>
    ))}

    {/* Next Button */}
    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <button 
        className="page-link" 
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>
  </ul>
</nav>

        </div>
      </main>
    </>
  );
}
