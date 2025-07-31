"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/lib/live";
import { settingsQuery } from "@/lib/queries";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // You can move this into layout or context for better efficiency
  const [settings, setSettings] = useState<{ title: string } | null>(null);

  // Fetch site settings (like title)
  useState(() => {
    sanityFetch({ query: settingsQuery }).then(({ data }) => setSettings(data));
  });

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="BioVault Logo"
              width={100}
              height={40}
              className="h-auto w-auto"
              priority
            />
            <span className="hidden sm:block text-xl font-bold font-display text-gray-800">
              {settings?.title || "BioVault Health"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-sm">
            <Link href="/#why-biovault" className="hover:text-green-600 transition">
              <i className="fas fa-info-circle mr-1" /> Why Us
            </Link>
            <Link href="#testimonials" className="hover:text-green-600 transition">
              <i className="fas fa-comments mr-1" /> Testimonials
            </Link>
            <Link href="/blog" className="hover:text-green-600 transition">
              <i className="fas fa-blog mr-1" /> Blog
            </Link>
           <Link href="/#products" className="btn btn-success text-white px-4 ms-2">
  <i className="fas fa-cart-plus me-2" />
  Order Now
</Link>

          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-600 hover:text-green-600 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 shadow-md">
          <Link
            href="/#why-biovault"
            className="block py-2 text-gray-800 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-info-circle mr-2" />
            Why Us
          </Link>
          <Link
            href="#testimonials"
            className="block py-2 text-gray-800 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-comments mr-2" />
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-gray-800 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-blog mr-2" />
            Blog
          </Link>
          <Link
            href="/#products"
            className="block mt-4 px-4 py-2 text-center bg-green-600 text-white rounded-full font-semibold hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
  <i className="fas fa-cart-plus me-2" />
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
