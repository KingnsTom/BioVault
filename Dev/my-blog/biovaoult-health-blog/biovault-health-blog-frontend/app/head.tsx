export default function Head() {
  return (
    <>
      <title>BioVault Health Blog | Natural Wellness Tips & Supplement Insights</title>
      <meta
        name="description"
        content="Read expert-written articles on natural wellness, gut health, metabolism, sleep, energy, and smart supplements. BioVault Health Blog is your trusted wellness guide."
      />
      <meta
        name="keywords"
        content="natural wellness blog, gut health tips, supplement reviews, sleep support, metabolism boost, BioVault Health blog, healthy lifestyle, herbal solutions"
      />
      <meta name="author" content="BioVault Health Editorial Team" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#05b9b5" />

      {/* Canonical & Language Alternates */}
      <link rel="canonical" href="https://biovaulthealth.com/blog" />
      <link rel="alternate" href="https://biovaulthealth.com/blog" {...{ hreflang: "en-us" }} />
      <link rel="alternate" href="https://biovaulthealth.com/blog" {...{ hreflang: "en-gb" }} />
      <link rel="alternate" href="https://biovaulthealth.com/blog" {...{ hreflang: "en-ca" }} />
      <link rel="alternate" href="https://biovaulthealth.com/blog" {...{ hreflang: "en-au" }} />
      <link rel="alternate" href="https://biovaulthealth.com/blog" {...{ hreflang: "x-default" }} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
      />

      {/* Open Graph */}
      <meta property="og:title" content="BioVault Health Blog | Natural Wellness Tips" />
      <meta
        property="og:description"
        content="Discover science-backed insights on supplements, gut health, energy, and more from BioVault Health."
      />
      <meta property="og:url" content="https://biovaulthealth.com/blog" />
      <meta property="og:image" content="https://biovaulthealth.com/img/og-banner.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BioVault Health" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BioVault Health Blog | Natural Wellness Tips" />
      <meta
        name="twitter:description"
        content="Explore trusted articles on supplements, gut health, metabolism, and holistic wellness."
      />
      <meta name="twitter:image" content="https://biovaulthealth.com/img/og-banner.jpg" />
      <meta name="twitter:site" content="@BioVaultHealth" />

      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "url": "https://biovaulthealth.com/blog",
            "name": "BioVault Health Blog",
            "description": "Expert insights on gut health, supplements, sleep, metabolism, and holistic wellness.",
            "publisher": {
              "@type": "Organization",
              "name": "BioVault Health",
              "logo": {
                "@type": "ImageObject",
                "url": "https://biovaulthealth.com/img/og-banner.jpg"
              }
            }
          }),
        }}
      />
    </>
  );
}
