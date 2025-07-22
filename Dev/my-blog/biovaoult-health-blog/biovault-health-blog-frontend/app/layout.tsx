// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BioVault Health Blog',
  description: 'Explore trusted health insights from BioVault Health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <header className="w-full border-b border-gray-200 py-6 px-4 sm:px-8 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="BioVault Health Logo"
              width={160}
              height={60}
              priority
            />
          </Link>
        </header>

        <main className="min-h-screen px-4 sm:px-8">{children}</main>

        <footer className="w-full border-t border-gray-200 py-8 px-4 sm:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BioVault Health. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
