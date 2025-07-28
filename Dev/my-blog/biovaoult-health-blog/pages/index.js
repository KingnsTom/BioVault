// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../my-sanity-site/frontend/app/components/Footer';
import InfoSection from '../my-sanity-site/frontend/app/components/InfoSection';

import { sanityClient } from '../sanity'


import '../styles/blog.css'
import Script from "next/script";

export default function Home() {
  return (
    <>
     

      {/* Body Content */}
      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            <Link className="navbar-brand" href="/">
              <img src="/img/logo.png" alt="BioVault Logo" width={100} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link" href="/#why-biovault"><i className="fas fa-info-circle me-2"></i>Why Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#testimonials"><i className="fas fa-comments me-2"></i>Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog"><i className="fas fa-blog me-2"></i>Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success text-white px-4 ms-2" href="/#products">
                    <i className="fas fa-cart-plus me-2"></i>Order Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        <h1 className="display-4 text-center mb-4">BioVault Wellness Blog</h1>
        <p className="lead text-center mb-5">
          Explore articles on natural health, supplements, gut health, sleep, and immunity.
        </p>

        {/* TODO: Blog cards will go here */}
      </main>
    </>
  );
}
