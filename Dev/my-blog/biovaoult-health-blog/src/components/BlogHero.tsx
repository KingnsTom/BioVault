export default function BlogHero() {
  return (
    <section className="hero text-center bg-[#eae8e5] text-black py-20 px-6 sm:px-10 md:px-24 font-[Poppins]">
      <div className="container max-w-5xl mx-auto">
        <h1 className="display-4 fw-bold text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 text-white">
          BioVault Wellness Blog
        </h1>
        <p className="lead text-lg md:text-xl text-gray-700 mt-3 mb-6 leading-relaxed">
          Explore articles on natural health, clean supplements, mindful living, and insider tips to help you feel your best — naturally.
        </p>
        <a
          href="/blog"
          className="btn btn-primary btn-lg inline-block bg-[#05b9b5] hover:bg-[#038f8c] text-white text-lg font-medium px-6 py-3 rounded-md transition duration-200 mt-3"
        >
          Explore Our Blogs
        </a>
      </div>
    </section>
  );
}
