export default function Footer() {
  return (
    <footer className="footer bg-[#023d3a] text-[#eae8e5] font-[Poppins,sans-serif]">
      <div className="container px-6 py-16 mx-auto">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4 footer-top">
          {/* Branding */}
          <div className="footer-branding">
            <a href="/index" className="text-2xl font-bold footer-logo-text text-white">BioVault Health</a>
            <p className="mt-4 text-sm leading-relaxed text-[#eae8e5]">
              Empowering natural wellness through trusted supplements & science-backed education.
            </p>
          </div>

          {/* Shop */}
          <div className="footer-nav">
            <h5 className="footer-heading text-lg font-semibold mb-4">Shop</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/moringa" className="hover:underline">Moringa Magic</a></li>
              <li><a href="/digestsync" className="hover:underline">DigestSync</a></li>
              <li><a href="/pinealxt" className="hover:underline">Pineal XT</a></li>
              <li><a href="/glucotrust" className="hover:underline">GlucoTrust</a></li>
              <li><a href="/gutoptim" className="hover:underline">Gutoptim</a></li>
              <li><a href="/prodentim" className="hover:underline">ProDentim</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div className="footer-nav">
            <h5 className="footer-heading text-lg font-semibold mb-4">Learn</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:underline">Health Blog</a></li>
              <li><a href="#why-choose" className="hover:underline">Why BioVault</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="/quiz" className="hover:underline">Supplement Match Quiz</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/affiliate-disclosure" className="hover:underline">Affiliate Disclosure</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-signup">
            <h5 className="text-lg font-semibold mb-2">🌿 Join the BioVault Wellness Insider</h5>
            <p className="mb-4 text-sm">Get expert detox tips, supplement guides, and early access delivered straight to your inbox.</p>
            <form
              className="flex flex-col space-y-3"
              action="https://app.convertkit.com/forms/8280907/subscriptions"
              method="post"
              data-uid="496b4d7cec"
            >
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email"
                required
                className="px-4 py-2 text-black rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white transition bg-[#017f7c] hover:bg-[#01615e] rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-10 space-x-6 footer-social text-white">
          {/* Facebook */}
          <a href="https://facebook.com/biovaulthealth" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593...z" />
            </svg>
          </a>

          {/* TikTok */}
          <a href="https://tiktok.com/@biovaulthealth" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.74 2h2.234...z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/biovaulthealth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2...z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/@BioVaulthealth" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-1.64...z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-[#eae8e5] footer-bottom">
          &copy; 2025 BioVault Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
