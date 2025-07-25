// app/layout.tsx
import '../styles/globals.css';
import '../styles/blog.css';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'BioVault Health Blog',
  description: 'Explore trusted health insights from BioVault Health.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
