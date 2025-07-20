// pages/index.js
import Head from 'next/head';

export default function Home() {
return (
  <>
    <Head>
      {/* META + SEO Setup for BioVault Health Blog Page */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Hreflang Tags: English-speaking Markets */}
      <link
        rel="alternate"
        href="https://biovaulthealth.com/blog"
        hrefLang="en-us"
      />
      <link
        rel="alternate"
        href="https://biovaulthealth.com/blog"
        hrefLang="en-gb"
      />
      <link
        rel="alternate"
        href="https://biovaulthealth.com/blog"
        hrefLang="en-ca"
      />
      <link
        rel="alternate"
        href="https://biovaulthealth.com/blog"
        hrefLang="en-au"
      />
      <link
        rel="alternate"
        href="https://biovaulthealth.com/blog"
        hrefLang="x-default"
      />
      {/* GEO Tags: Western Markets Focus */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="New York, United States" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      <meta name="geo.placename" content="London, United Kingdom" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />
      <meta name="geo.placename" content="Toronto, Canada" />
      <meta name="geo.position" content="43.651070;-79.347015" />
      <meta name="ICBM" content="43.651070, -79.347015" />
      <meta name="geo.placename" content="Sydney, Australia" />
      <meta name="geo.position" content="-33.8688;151.2093" />
      <meta name="ICBM" content="-33.8688, 151.2093" />
      {/* SEO Meta Tags */}
      <title>
        BioVault Health Blog | Natural Wellness Tips &amp; Supplement Insights
      </title>
      <meta
        name="description"
        content=" Read expert-written articles on natural wellness, gut health, metabolism, sleep, energy, and smart supplements. BioVault Health Blog is your trusted wellness guide."
      />
      <meta
        name="keywords"
        content="natural wellness blog, gut health tips, supplement reviews, sleep support, metabolism boost, BioVault Health blog, healthy lifestyle, herbal solutions"
      />
      <meta name="author" content="BioVault Health Editorial Team" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://biovaulthealth.com/blog" />
      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon-16x16.png"
      />
      {/* Fonts moved to _document.js for global loading */}
      {/* Stylesheets */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      {/* Stylesheets are imported via JS/TS files or _app.js in Next.js */}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="BioVaultHealth" />
      <meta property="og:url" content="https://biovaulthealth.com/" />
      <meta
        property="og:title"
        content="BioVault Health | Natural Supplements for Energy, Gut Health & Mental Clarity"
      />
      <meta
        property="og:description"
        content=" Unlock peak wellness with BioVault Health’s premium natural supplements—Moringa Magic, DigestSync, and Pineal XT. Backed by science, trusted by thousands."
      />
      <meta property="og:image" content="https://biovaulthealth.com/img/" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BioVaultHealth" />
      <meta name="twitter:creator" content="@BioVaultHealth" />
      <meta
        name="twitter:title"
        content="BioVault Health | Natural Supplements for Energy, Gut Health & Mental Clarity"
      />
      <meta
        name="twitter:description"
        content="Unlock peak wellness with BioVault Health’s premium natural supplements—Moringa Magic, DigestSync, and Pineal XT. Backed by science, trusted by thousands."
      />
      <meta
        name="twitter:image"
        content="https://biovaulthealth.com/img/blog-cover.webp"
      />
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      {/* Optimized WebPage Schema for Blog with Publisher and SearchAction */}
      {/* Enhanced Blog Listing Page Schema */}
      {/* BreadcrumbList Schema */}
    </Head>
    {/* Meta Pixel Code */}
  <noscript>
  &lt;img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=329609293519906&amp;ev=PageView&amp;noscript=1"
  /&gt;
</noscript>

    {/* End Meta Pixel Code */}
    {/* ✅ BioVault Responsive Navbar */}
    
  <header className="site-header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">
          <img src="/img/logo.png" alt="BioVault Logo" width={100} />
        </a>
        
        {/* Mobile Toggle for Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar Content (Links) */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">
            {/* Why Us Section */}
            <li className="nav-item">
              <a className="nav-link" href="/#why-biovault">
                <i className="fas fa-info-circle me-2" />
                Why Us
              </a>
            </li>
            {/* Testimonials Section */}
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                <i className="fas fa-comments me-2" />
                Testimonials
              </a>
            </li>
            {/* Blog Link */}
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                <i className="fas fa-blog me-2" />
                Blog
              </a>
            </li>
            {/* Call-to-Action Button to Order */}
            <li className="nav-item">
              <a
                className="btn btn-success text-white px-4 ms-2"
                href="/#products"
              >
                <i className="fas fa-cart-plus me-2" />
                Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section className="hero text-center">
    <div className="container">
      <h1 className="display-4 fw-bold">BioVault Wellness Blog</h1>
      <p className="lead mt-3">
        Explore articles on natural health, clean supplements, mindful living,
        and insider tips to help you feel your best—naturally.
      </p>
      <a href="/blog" className="btn btn-primary btn-lg mt-3">
        Explore Our Blogs
      </a>
    </div>
  </section>
  {/* Blog Categories */}
  <section className="blog-categories py-4 bg-light">
    <div className="container text-center">
      <h5 className="mb-3 fw-semibold">Browse by Category</h5>
      <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
        <a
          href="#"
          className="btn btn-success btn-sm m-1 active"
          data-filter="all"
        >
          All
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="energy-immunity"
        >
          Energy &amp; Immunity
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="gut-health"
        >
          Gut Health &amp; Digestion
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="mental-clarity"
        >
          Mental &amp; Spiritual Clarity
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="oral-health"
        >
          Oral &amp; Dental Health
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="hormonal-balance"
        >
          Hormonal Balance
        </a>
        <a
          href="#"
          className="btn btn-outline-success btn-sm m-1"
          data-filter="blood-sugar"
        >
          Blood Sugar &amp; Metabolism
        </a>
      </div>
    </div>
  </section>
  <main className="py-5">
    <div className="container">
      <div className="row blog-list">
        {/* Blog Post Card 1: Mindfulness Reset */}
        <div className="col-md-4 mb-4 blog-card" data-category="mental-clarity">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/Mindfulness in the Workplace.webp"
              className="card-img-top"
              alt="Mindfulness exercises for work"
            />
            <div className="card-body" data-date="2025-06-10">
              <small className="text-muted d-block mb-1">
                Category: Mental &amp; Spiritual Clarity
              </small>
              <h5 className="card-title">
                5-Minute Mindfulness: Mental Reset Techniques for the Workplace
              </h5>
              <p className="card-text">
                Discover simple, effective techniques to reduce stress and
                refocus in just minutes—perfect for busy professionals.
              </p>
              <a
                href="/blog/5-minute-mindfulness"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 2: Gut-Brain */}
        <div className="col-md-4 mb-4 blog-card" data-category="gut-health">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/gut-brain-connection-concept.webp"
              className="card-img-top"
              alt="Gut and brain health connection"
            />
            <div className="card-body" data-date="2025-06-05">
              <small className="text-muted d-block mb-1">
                Category: Gut Health &amp; Digestion
              </small>
              <h5 className="card-title">
                The Gut-Brain Connection: How Digestion Impacts Mental Clarity
              </h5>
              <p className="card-text">
                Did you know your gut health affects your mood and focus? Here’s
                how to reset your digestion naturally.
              </p>
              <a
                href="/blog/gut-brain-connection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 3: Immune Boost */}
        <div
          className="col-md-4 mb-4 blog-card"
          data-category="energy-immunity"
        >
          <div className="card h-100 shadow-sm">
            <img
              src="/img/immunity boosters.webp"
              className="card-img-top"
              alt="Natural immune support herbs and supplements"
            />
            <div className="card-body" data-date="2025-05-28">
              <small className="text-muted d-block mb-1">
                Category: Energy &amp; Immunity
              </small>
              <h5 className="card-title">
                Top Herbs &amp; Supplements to Strengthen Immunity This Season
              </h5>
              <p className="card-text">
                Support your body’s defenses with time-tested natural remedies
                and modern insights backed by science.
              </p>
              <a
                href="/blog/moringa-best-immune-support"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 4: Moringa Review */}
        <div
          className="col-md-4 mb-4 blog-card"
          data-category="energy-immunity"
        >
          <div className="card h-100 shadow-sm">
            <img
              src="/img/Moringa leaves and supplements.webp"
              className="card-img-top"
              alt="Moringa leaves and capsules"
            />
            <div className="card-body" data-date="2025-06-19">
              <small className="text-muted d-block mb-1">
                Category: Energy &amp; Immunity
              </small>
              <h5 className="card-title">
                Moringa Review: Why This “Miracle Tree” Deserves a Spot in Your
                Routine
              </h5>
              <p className="card-text">
                Discover the real benefits, possible side effects, and top
                supplement pick—backed by science and centuries of use.
              </p>
              <a
                href="/blog/moringa-review-2025-does-moringa-really-work"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 5: Moringa Reset */}
        <div
          className="col-md-4 mb-4 blog-card"
          data-category="energy-immunity"
        >
          <div className="card h-100 shadow-sm">
            <img
              src="/img/blog-cover-moringa-reset.webp"
              className="card-img-top"
              alt="Moringa supplement reset for energy"
            />
            <div className="card-body" data-date="2025-07-02">
              <small className="text-muted d-block mb-1">
                Category: Energy &amp; Immunity
              </small>
              <h5 className="card-title">
                Tired After 8 Hours of Sleep? Try This 3-Day Reset
              </h5>
              <p className="card-text">
                Discover how Moringa Magic helps restore deep energy, better
                focus, and restful sleep without caffeine. A must-read for 2025
                wellness seekers.
              </p>
              <a
                href="/blog/tired-after-8-hours-sleep-reset"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 6: Oral Probiotic for Bad Breath */}
        <div className="col-md-4 mb-4 blog-card" data-category="oral-health">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/oral-probiotic-breath-fresh.webp"
              className="card-img-top"
              alt="Oral probiotic supplement for bad breath relief"
            />
            <div className="card-body" data-date="2025-07-02">
              <small className="text-muted d-block mb-1">
                Category: Oral Health
              </small>
              <h5 className="card-title">
                Bad Breath? This Dentist-Approved Oral Probiotic Works Fast
              </h5>
              <p className="card-text">
                Learn how this powerful oral probiotic is helping thousands
                eliminate bad breath, support gut health, and restore
                confidence—naturally.
              </p>
              <a
                href="/blog/sick-of-bad-breath"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 7: DigestSync Gut Health */}
        <div className="col-md-4 mb-4 blog-card" data-category="gut-health">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/digestsync-cover.webp"
              className="card-img-top"
              alt="DigestSync bottle with gut-friendly ingredients"
            />
            <div className="card-body" data-date="2025-07-03">
              <small className="text-muted d-block mb-1">
                Category: Gut Health &amp; Digestion
              </small>
              <h5 className="card-title">
                Best Gut Health Supplements in 2025: Why DigestSync Wins
              </h5>
              <p className="card-text">
                Still bloated after eating clean? Discover how DigestSync’s
                3-in-1 gut formula tackles bloating, inflammation, and sluggish
                digestion.
              </p>
              <a
                href="/blog/best-gut-health-supplements-2025-digestsync"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card 8: Gutoptim Hormonal Balance */}
        <div
          className="col-md-4 mb-4 blog-card"
          data-category="hormonal-balance"
        >
          <div className="card h-100 shadow-sm">
            <img
              src="/img/GutOptim Hormone Balance.webp"
              className="card-img-top"
              alt="GutOptim  hormonal balance supplement with natural detox ingredients"
            />
            <div className="card-body" data-date="2025-07-04">
              <small className="text-muted d-block mb-1">
                Category: Hormonal Balance
              </small>
              <h5 className="card-title">
                2025’s Best Natural Hormone Balancer? GutOptim Wins
              </h5>
              <p className="card-text">
                Mood swings? Belly bloat? GutOptim targets the root cause—your
                microbiome. Discover how this 2025 breakthrough resets hormones
                naturally.
              </p>
              <a
                href="/blog/gutoptim-hormone-balancer-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card: GlucoTrust - Blood Sugar & Metabolism */}
        <div className="col-md-4 mb-4 blog-card" data-category="blood-sugar">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/GlucoTrust supplement bottle.webp"
              className="card-img-top"
              alt="GlucoTrust supplement bottle for blood sugar and metabolism support"
              loading="lazy"
            />
            <div className="card-body" data-date="2025-07-04">
              <small className="text-muted d-block mb-1">
                Category: Blood Sugar &amp; Metabolism
              </small>
              <h5 className="card-title">
                Top Blood Sugar Supplement in 2025? GlucoTrust Wins
              </h5>
              <p className="card-text">
                Tired of sugar spikes or low energy? GlucoTrust supports healthy
                glucose levels, improves metabolism, and promotes better sleep
                naturally.
              </p>
              <a
                href="/blog/glucotrust-best-blood-sugar-support-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card: ProDentim - Oral Probiotic & Gum Health */}
        <div className="col-md-4 mb-4 blog-card" data-category="oral-health">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/ProDentim-probiotic-supplement-for-oral-health.webp"
              className="card-img-top"
              alt="ProDentim oral probiotic bottle for gum and dental health"
              loading="lazy"
            />
            <div className="card-body" data-date="2025-07-15">
              <small className="text-muted d-block mb-1">
                Category: Oral Health &amp; Probiotics
              </small>
              <h5 className="card-title">
                Best Oral Probiotic in 2025? Why ProDentim Stands Out
              </h5>
              <p className="card-text">
                Dealing with gum issues or bad breath? ProDentim restores your
                oral microbiome, supporting healthy gums, fresher breath, and
                stronger teeth—naturally.
              </p>
              <a
                href="/blog/what-is-prodentim-how-it-works"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card: Pineal XT - Mental & Spiritual Clarity */}
        <div className="col-md-4 mb-4 blog-card" data-category="mental-clarity">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/pinealxt-bottle.webp"
              className="card-img-top"
              alt="Pineal XT supplement bottle for brain and pineal gland detox"
              loading="lazy"
            />
            <div className="card-body" data-date="2025-07-04">
              <small className="text-muted d-block mb-1">
                Category: Mental &amp; Spiritual Clarity
              </small>
              <h5 className="card-title">
                Brain Fog? Pineal XT Ranked #1 for Detox &amp; Deep Rest
              </h5>
              <p className="card-text">
                Clear your mind, sleep deeper, and feel spiritually reconnected.
                Discover why Pineal XT is 2025’s best pineal detox supplement.
              </p>
              <a
                href="/blog/pinealxt-review-best-brain-detox-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card: Top 6 Energy Supplements of 2025 */}
        <div
          className="col-md-4 mb-4 blog-card"
          data-category="energy-immunity"
        >
          <div className="card h-100 shadow-sm">
            <img
              src="/img/top-energy-supplements-2025.webp"
              className="card-img-top"
              alt="Top natural energy supplements for 2025"
              loading="lazy"
            />
            <div className="card-body" data-date="2025-07-19">
              <small className="text-muted d-block mb-1">
                Category: Energy &amp; Performance
              </small>
              <h5 className="card-title">
                ⚡ Top 6 Energy Supplements of 2025 — No Crash, Just Results
              </h5>
              <p className="card-text">
                Boost your daily energy without relying on caffeine overload.
                From Moringa Magic to NAD+ boosters, discover the top-rated,
                expert-approved formulas for lasting stamina, mental clarity,
                and stress resilience.
              </p>
              <a
                href="/blog/top-energy-supplements-2025-no-crash.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
              >
                {" "}
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Blog Post Card: Pineal XT – Brain Fog & Pineal Gland Detox (2025) */}
        <div className="col-md-4 mb-4 blog-card" data-category="mental-clarity">
          <div className="card h-100 shadow-sm">
            <img
              src="/img/PinealXT-Best-Brain-Detox-Supplements-to-Clear-Mental-Fog.webp"
              className="card-img-top"
              alt="Pineal XT supplement bottle for brain detox and mental clarity"
              loading="lazy"
            />
            <div className="card-body" data-date="2025-07-15">
              <small className="text-muted d-block mb-2">
                Category: Brain Health &amp; Detox
              </small>
              <h5 className="card-title">
                🧠 Best Brain Detox Supplements of 2025: Pineal XT Ranked #1
              </h5>
              <p className="card-text">
                Suffering from brain fog or poor sleep? Discover the top 7 brain
                detox supplements of 2025—starting with Pineal XT, a powerful
                pineal gland cleanser.
              </p>
              <a
                href="/blog/best-brain-detox-supplements-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block text-white fw-bold"
              >
                Read More »
              </a>
            </div>
          </div>
        </div>
        {/* Pagination Placeholder */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center" />
        </nav>
      </div>
    </div>
  </main>
  <footer className="footer">
    <div className="container footer-container">
      {/* Four Column Grid */}
      <div className="footer-top">
        {/* Column 1: Branding */}
        <div className="footer-branding">
          <a href="/index" className="footer-logo-text">
            BioVault Health
          </a>
          <p>
            Empowering natural wellness through trusted supplements &amp;
            science-backed education.
          </p>
        </div>
        {/* Column 2: Shop */}
        <div className="footer-nav">
          <h5 className="footer-heading">Shop</h5>
          <ul>
            <li>
              <a href="/moringa">Moringa Magic</a>
            </li>
            <li>
              <a href="/digestsync">DigestSync</a>
            </li>
            <li>
              <a href="/pinealxt">Pineal XT</a>
            </li>
            <li>
              <a href="/glucotrust">GlucoTrust</a>
            </li>
            <li>
              <a href="/gutoptim">Gutoptim</a>
            </li>
            <li>
              <a href="/prodentim">ProDentim</a>
            </li>
          </ul>
        </div>
        {/* Column 3: Learn */}
        <div className="footer-nav">
          <h5 className="footer-heading">Learn</h5>
          <ul>
            <li>
              <a href="/blog">Health Blog</a>
            </li>
            <li>
              <a href="#why-choose">Why BioVault</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/quiz">Supplement Match Quiz</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/affiliate-disclosure">Affiliate Disclosure</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
          </ul>
        </div>
        {/* Column 4: Subscribe */}
        <div className="footer-signup">
          <h5>🌿 Join the BioVault Wellness Insider</h5>
          <p>
            Get expert detox tips, supplement guides, and early access delivered
            straight to your inbox.
          </p>
          <form
            className="footer-subscribe-form"
            action="https://app.convertkit.com/forms/8280907/subscriptions"
            method="post"
            data-uid="496b4d7cec"
          >
            <input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              required=""
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    {/* Social Media */}
    <div className="footer-social">
      {/* Facebook */}
      <a
        href="https://facebook.com/biovaulthealth"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 
    24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 
    4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 
    0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.406 
    24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z"
          />
        </svg>
      </a>
      {/* TikTok */}
      <a
        href="https://tiktok.com/@biovaulthealth"
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12.74 2h2.234a5.83 5.83 0 004.083 4.083v2.233a8.06 8.06 0 01-4.083-1.145v7.429a5.27 5.27 
    0 11-5.27-5.27 5.2 5.2 0 011.146.13V9.086a8.055 8.055 0 00-1.146-.083 7.503 
    7.503 0 107.5 7.5V2h-4.464z"
          />
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com/biovaulthealth"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
    0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2h.01M12 7a5 5 0 110 
    10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>
      </a>
      {/* YouTube */}
      <a
        href="https://youtube.com/@BioVaulthealth"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M19.615 3.184c-1.64-.133-8.22-.133-8.22-.133s-6.588 0-8.22.133C1.5 
    3.321.222 4.625.222 6.398v7.204c0 1.773 1.277 3.077 2.955 
    3.214 1.64.133 8.22.133 8.22.133s6.588 0 8.22-.133c1.678-.137 
    2.955-1.441 2.955-3.214V6.398c0-1.773-1.277-3.077-2.955-3.214zM9.995 
    13.997V8.185l5.435 2.816-5.435 2.813z"
          />
        </svg>
      </a>
    </div>
    {/* Copyright */}
    <small className="footer-bottom">
      © 2025 BioVault Health. All rights reserved.
    </small>
  </footer>
  {/* jQuery (if needed) */}
  {/* Bootstrap Bundle */}
  {/* LazySizes (image performance) */}
  {/* Main Custom Scripts (deferred) */}
    </>
  );
}
