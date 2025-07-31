'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="BioVault Health Logo"
            width={130}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-gray-700 tracking-tight">
          <Link href="/#why-biovault" className="hover:text-emerald-600 transition flex items-center">
            <i className="fas fa-info-circle mr-2" />
            Why Us
          </Link>
          <Link href="/#testimonials" className="hover:text-emerald-600 transition flex items-center">
            <i className="fas fa-comments mr-2" />
            Testimonials
          </Link>
          <Link href="/blog" className="hover:text-emerald-600 transition flex items-center">
            <i className="fas fa-blog mr-2" />
            Blog
          </Link>
          <Link
            href="/#products"
className="bg-emerald-600 text-white pl-20 pr-14 py-3 rounded-none hover:bg-emerald-700 transition flex items-center font-semibold shadow-sm"
          >
            <i className="fas fa-cart-plus mr-2" />
            Order Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <i className="fas fa-times fa-lg" /> : <i className="fas fa-bars fa-lg" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link href="/#why-biovault" onClick={() => setMobileOpen(false)} className="flex items-center hover:text-emerald-600">
              <i className="fas fa-info-circle mr-2" />
              Why Us
            </Link>
            <Link href="/#testimonials" onClick={() => setMobileOpen(false)} className="flex items-center hover:text-emerald-600">
              <i className="fas fa-comments mr-2" />
              Testimonials
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="flex items-center hover:text-emerald-600">
              <i className="fas fa-blog mr-2" />
              Blog
            </Link>
            <Link
              href="/#products"
              onClick={() => setMobileOpen(false)}
className="bg-emerald-600 text-white px-10 py-3 rounded-none hover:bg-emerald-700 transition flex items-center font-semibold shadow-sm"
            >
              <i className="fas fa-cart-plus mr-2" />
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
