import Link from "next/link";
import SubscribeForm from "./SubscribeForm"; // adjust path if needed
import '../styles/blog.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-top">
          {/* Column 1: Branding */}
          <div className="footer-branding">
            <Link href="/" className="footer-logo-text">
              BioVault Health
            </Link>
            <p>
              Empowering natural wellness through trusted supplements &amp; science-backed education.
            </p>
          </div>

          {/* Column 2: Shop */}
          <div className="footer-nav">
            <h5 className="footer-heading">Shop</h5>
            <ul>
              <li><Link href="/moringa">Moringa Magic</Link></li>
              <li><Link href="/digestsync">DigestSync</Link></li>
              <li><Link href="/pinealxt">Pineal XT</Link></li>
              <li><Link href="/glucotrust">GlucoTrust</Link></li>
              <li><Link href="/gutoptim">Gutoptim</Link></li>
              <li><Link href="/prodentim">ProDentim</Link></li>
            </ul>
          </div>

          {/* Column 3: Learn */}
          <div className="footer-nav">
            <h5 className="footer-heading">Learn</h5>
            <ul>
              <li><Link href="/blog">Health Blog</Link></li>
              <li><a href="#why-choose">Why BioVault</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><Link href="/quiz">Supplement Match Quiz</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="footer-signup">
            <h5 className="footer-heading">🌿 Join the BioVault Wellness Insider</h5>
            <p>
              Get expert detox tips, supplement guides, and early access delivered straight to your inbox.
            </p>
            <div className="footer-subscribe-form">
              <SubscribeForm />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://facebook.com/biovaulthealth" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://tiktok.com/@biovaulthealth" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.74 2h2.234a5.83 5.83 0 004.083 4.083v2.233a8.06 8.06 0 01-4.083-1.145v7.429a5.27 5.27 0 11-5.27-5.27 5.2 5.2 0 011.146.13V9.086a8.055 8.055 0 00-1.146-.083 7.503 7.503 0 107.5 7.5V2h-4.464z" />
            </svg>
          </a>
          <a href="https://instagram.com/biovaulthealth" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2h.01M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
          <a href="https://youtube.com/@BioVaulthealth" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-1.64-.133-8.22-.133-8.22-.133s-6.588 0-8.22.133C1.5 3.321.222 4.625.222 6.398v7.204c0 1.773 1.277 3.077 2.955 3.214 1.64.133 8.22.133 8.22.133s6.588 0 8.22-.133c1.678-.137 2.955-1.441 2.955-3.214V6.398c0-1.773-1.277-3.077-2.955-3.214zM9.995 13.997V8.185l5.435 2.816-5.435 2.813z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <small className="footer-bottom">
          &copy; {new Date().getFullYear()} BioVault Health. All rights reserved.{" "}
          <span className="recaptcha-line"> | Protected by reCAPTCHA</span>
        </small>
      </div>
    </footer>
  );
}
